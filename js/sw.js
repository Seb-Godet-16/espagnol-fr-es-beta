/*
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  Language App 🇫🇷🇪🇸  —  sw.js  (Service Worker)              ║
 * ║  Auteur   : Sébastien Godet                                     ║
 * ║  Assisté   : Claude Sonnet 4.6 · Gemini 3.5 Flash                               ║
 * ║  Version  : Juin 2026                                           ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  STRATÉGIE DE CACHE HYBRIDE                                     ║
 * ║                                                                 ║
 * ║  • Ressources locales (html, css, js, png, icons)               ║
 * ║    → Cache First : on sert depuis le cache, réseau en fallback  ║
 * ║    → Objectif : fonctionnement 100% hors-ligne après install    ║
 * ║                                                                 ║
 * ║  • Ressources externes (GitHub raw, Twemoji CDN…)               ║
 * ║    → Network First : réseau d'abord, cache en fallback          ║
 * ║    → Objectif : fraîcheur des données quand le réseau existe    ║
 * ║                                                                 ║
 * ║  FALLBACKS SVG INLINE                                           ║
 * ║  Quand une ressource est introuvable (cache + réseau KO),       ║
 * ║  le SW répond avec un SVG ou une page HTML générés en mémoire   ║
 * ║  plutôt qu'une erreur 503 nue. Quatre types couverts :          ║
 * ║    • Image PNG/JPG/WEBP locale manquante  → _respondSvgLocalImage()    ║
 * ║    • Icône PWA manquante                  → _respondSvgIcon()          ║
 * ║    • Ressource externe image manquante    → _respondSvgExternalImage() ║
 * ║    • Navigation HTML manquante            → _offlinePage()             ║
 * ║                                                                 ║
 * ║  CYCLE DE VIE                                                   ║
 * ║    install  → pré-cache de toutes les ressources statiques      ║
 * ║    activate → nettoyage des anciens caches (évite les zombies)  ║
 * ║    fetch    → interception et dispatch Cache/Network First      ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

/* ──────────────────────────────────────────────────────────────────
   CONFIGURATION
   ──────────────────────────────────────────────────────────────────
   CACHE_NAME : suffixe automatiquement remplacé par GitHub Actions
   (variable __BUILD_NUMBER__) à chaque déploiement — pas d'action
   manuelle requise.
   En dev local (npx serve / python3 -m http.server), le placeholder
   n'est pas substitué : on utilise Date.now() comme fallback pour
   éviter un cache zombie nommé 'vachebo-__BUILD_NUMBER__' qui ne
   serait jamais nettoyé par le filtre activate ci-dessous.
   ────────────────────────────────────────────────────────────────── */
const _RAW_BUILD = '__BUILD_NUMBER__';
const CACHE_NAME = _RAW_BUILD.startsWith('__')
  ? 'vachebo-dev-' + Date.now()     /* dev local : cache unique par session */
  : 'vachebo-' + _RAW_BUILD;        /* CI/CD GitHub Actions : numéro de build */

/*
  Liste exhaustive des ressources à pré-cacher lors de l'installation.
  Toutes ces URLs doivent répondre 200 ou l'install échoue (addAll est atomique).
  Nota : data-fr.js et data-es.js sont aussi chargés dynamiquement par
  loadDataForMode() dans app.js ; ils entrent dans le cache lors de
  leur premier chargement réseau (voir cacheFirst ci-dessous).
*/
const PRECACHE_URLS = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/data-fr.js',
  './js/data-es.js',
  './manifest.json',
  './img/Logo-appli-es-fr.png'      /* logo principal — affiché dès le launcher */
];

/* Préfixes d'URLs considérées comme "externes" → stratégie Network First */
const EXTERNAL_PREFIXES = [
  'https://raw.githubusercontent.com/',
  'https://cdnjs.cloudflare.com/'
];

/* Extensions reconnues comme des images raster */
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.gif'];

/* Chemin du dossier des icônes PWA */
const ICONS_PATH = '/img/icons/';


/* ──────────────────────────────────────────────────────────────────
   HELPERS — CLASSIFICATION DES REQUÊTES
   ────────────────────────────────────────────────────────────────── */

/**
 * Détermine si une URL est une ressource externe.
 * @param {string} url
 * @returns {boolean}
 */
function _isExternal(url) {
  return EXTERNAL_PREFIXES.some(prefix => url.startsWith(prefix));
}

/**
 * Détermine si une requête doit être interceptée.
 * On ignore les requêtes non-GET et les extensions navigateur.
 * @param {Request} request
 * @returns {boolean}
 */
function _shouldHandle(request) {
  return request.method === 'GET'
    && (request.url.startsWith('http://') || request.url.startsWith('https://'));
}

/**
 * Détecte si l'URL pointe vers une image raster (PNG, JPG, WEBP…).
 * @param {string} url
 * @returns {boolean}
 */
function _isRasterImage(url) {
  const clean = url.split('?')[0].toLowerCase();
  return IMAGE_EXTENSIONS.some(ext => clean.endsWith(ext));
}

/**
 * Détecte si l'URL pointe vers une icône PWA dans /img/icons/.
 * @param {string} url
 * @returns {boolean}
 */
function _isPwaIcon(url) {
  return url.includes(ICONS_PATH);
}

/**
 * Détecte si la requête est une navigation (page HTML principale).
 * Mode 'navigate' = le navigateur charge une URL directement.
 * @param {Request} request
 * @returns {boolean}
 */
function _isNavigation(request) {
  /* request.headers.get('accept') peut retourner null sur certaines requêtes
     (ex : fetch() sans Accept header explicite côté app) → on guard avec || '' */
  return request.mode === 'navigate'
    || (request.headers.get('accept') || '').includes('text/html');
}


/* ──────────────────────────────────────────────────────────────────
   INSTALL — Pré-cache des ressources statiques
   ──────────────────────────────────────────────────────────────────
   skipWaiting() : le nouveau SW prend le contrôle immédiatement
   sans attendre la fermeture de tous les onglets.
   ────────────────────────────────────────────────────────────────── */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});


/* ──────────────────────────────────────────────────────────────────
   ACTIVATE — Nettoyage des anciens caches
   ────────────────────────────────────────────────────────────────── */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames
          .filter(name => name.startsWith('vachebo-') && name !== CACHE_NAME)
          .map(name => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});


/* ──────────────────────────────────────────────────────────────────
   FETCH — Interception des requêtes réseau
   ──────────────────────────────────────────────────────────────────
   Dispatch vers la stratégie appropriée selon le type de ressource.
   ────────────────────────────────────────────────────────────────── */
self.addEventListener('fetch', (event) => {
  if (!_shouldHandle(event.request)) return;

  if (_isExternal(event.request.url)) {
    event.respondWith(networkFirst(event.request));
  } else {
    event.respondWith(cacheFirst(event.request));
  }
});


/* ──────────────────────────────────────────────────────────────────
   STRATÉGIE 1 — CACHE FIRST (ressources locales)
   ──────────────────────────────────────────────────────────────────
   1. Cherche dans le cache
   2. Si trouvé → répond immédiatement (stale-while-revalidate :
      une requête réseau silencieuse met le cache à jour en fond)
   3. Si absent → fetch réseau + mise en cache
   4. Si réseau aussi KO → fallback SVG ou page offline selon le type
   ────────────────────────────────────────────────────────────────── */
function cacheFirst(request) {
  return caches.match(request)
    .then(cached => {
      if (cached) {
        /*
         * Revalidation en arrière-plan (stale-while-revalidate) :
         * on sert le cache immédiatement ET on déclenche une requête
         * réseau silencieuse pour mettre à jour le cache.
         * L'utilisateur verra la nouvelle version à la prochaine visite.
         */
        caches.open(CACHE_NAME).then(cache => {
          fetch(request).then(networkResponse => {
            if (networkResponse?.status === 200) cache.put(request, networkResponse);
          }).catch(() => { /* Hors-ligne, silencieux */ });
        });
        return cached;
      }

      return fetch(request)
        .then(networkResponse => {
          if (!networkResponse || networkResponse.status !== 200
              || networkResponse.type === 'error') {
            return networkResponse;
          }
          /* clone() obligatoire : une Response ne peut être lue qu'une fois */
          const toCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, toCache));
          return networkResponse;
        })
        .catch(() => _offlineFallback(request));
    });
}


/* ──────────────────────────────────────────────────────────────────
   STRATÉGIE 2 — NETWORK FIRST (ressources externes)
   ──────────────────────────────────────────────────────────────────
   1. Tente le fetch réseau
   2. Si succès → répond + met à jour le cache en arrière-plan
   3. Si réseau KO → fallback cache ou SVG selon le type
   ────────────────────────────────────────────────────────────────── */
function networkFirst(request) {
  return fetch(request)
    .then(networkResponse => {
      if (!networkResponse || networkResponse.status !== 200
          || networkResponse.type === 'error') {
        return networkResponse;
      }
      const toCache = networkResponse.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(request, toCache));
      return networkResponse;
    })
    .catch(() =>
      caches.match(request).then(cached => {
        if (cached) return cached;
        /*
         * Ressource externe absente du cache ET réseau KO.
         * Couvre les drapeaux Twemoji (cdnjs.cloudflare.com) et le logo
         * GitHub (raw.githubusercontent.com) qui sont les deux préfixes
         * de EXTERNAL_PREFIXES. Retourne un SVG placeholder VACHÉBO
         * plutôt qu'une erreur nue si la ressource est une image.
         */
        if (_isRasterImage(request.url)) return _respondSvgExternalImage();
        return new Response('', { status: 503, statusText: 'Hors ligne' });
      })
    );
}


/* ──────────────────────────────────────────────────────────────────
   DISPATCH DU FALLBACK OFFLINE (ressources locales)
   ──────────────────────────────────────────────────────────────────
   Choisit le bon fallback selon le type de ressource manquante :
     • Navigation HTML    → page offline complète avec bouton retry
     • Icône PWA          → SVG globe bicolore FR/ES (identité VACHÉBO)
     • Image raster       → SVG placeholder neutre
     • Tout le reste      → réponse vide 503 (CSS, JS : rien à faire)
   ────────────────────────────────────────────────────────────────── */
function _offlineFallback(request) {
  const url = request.url;

  if (_isNavigation(request)) {
    return new Response(_offlinePage(), {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }

  if (_isPwaIcon(url)) {
    return _respondSvgIcon();
  }

  if (_isRasterImage(url)) {
    return _respondSvgLocalImage();
  }

  /* CSS, JS, JSON manquants hors-ligne → 503 silencieux */
  return new Response('', { status: 503, statusText: 'Hors ligne' });
}


/* ──────────────────────────────────────────────────────────────────
   PAGE HORS-LIGNE
   ──────────────────────────────────────────────────────────────────
   Page HTML complète affichée quand l'utilisateur tente d'ouvrir
   l'app sans réseau ET avant la première visite (cache vide).
   Design bilingue FR/ES, couleurs VACHÉBO.
   ────────────────────────────────────────────────────────────────── */
function _offlinePage() {
  return '<!DOCTYPE html>'
    + '<html lang="fr">'
    + '<head>'
    + '<meta charset="UTF-8">'
    + '<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5">'
    + '<title>VACHÉBO — Hors ligne</title>'
    + '<style>'
    /* reset */
    + '*{box-sizing:border-box;margin:0;padding:0}'
    + 'body{'
    +   'font-family:"Segoe UI",system-ui,sans-serif;'
    +   'min-height:100vh;display:flex;flex-direction:column;'
    +   'align-items:center;justify-content:center;'
    +   'background:#FCFFEE;color:#1a1a2e;text-align:center;padding:32px 24px'
    + '}'
    /* carte centrale */
    + '.card{'
    +   'background:#fff;border-radius:24px;padding:40px 32px;'
    +   'max-width:360px;width:100%;'
    +   'box-shadow:0 8px 40px rgba(0,35,149,.10)'
    + '}'
    /* globe inline */
    + '.globe-wrap{margin-bottom:20px}'
    /* textes */
    + 'h1{font-size:1.45rem;font-weight:900;color:#002395;margin-bottom:6px;letter-spacing:-.02em}'
    + '.sub{font-size:.82rem;color:#C60B1E;font-style:italic;margin-bottom:20px;font-weight:600}'
    + 'p{font-size:.92rem;color:#555;line-height:1.65;margin-bottom:10px}'
    + '.es{font-size:.80rem;color:#888;font-style:italic;line-height:1.6}'
    /* séparateur */
    + 'hr{border:none;border-top:1px solid #e8ecf8;margin:18px 0}'
    /* bouton */
    + 'button{'
    +   'margin-top:22px;padding:14px 36px;border:none;border-radius:50px;'
    +   'background:linear-gradient(135deg,#002395,#C60B1E);'
    +   'color:#fff;font-size:.95rem;font-weight:700;cursor:pointer;'
    +   'box-shadow:0 4px 16px rgba(0,35,149,.25);'
    +   'transition:transform .15s,box-shadow .15s;width:100%'
    + '}'
    + 'button:active{transform:scale(.97);box-shadow:0 2px 8px rgba(0,35,149,.2)}'
    /* footer */
    + '.footer{margin-top:28px;font-size:.68rem;color:#bbb}'
    + '</style>'
    + '</head>'
    + '<body>'
    + '<div class="card">'

    /* Globe SVG inline FR/ES — identité de l'app sans dépendance réseau */
    + '<div class="globe-wrap">'
    + '<svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<defs>'
    + '<linearGradient id="gFR2" x1="0" y1="0" x2="0" y2="1">'
    + '<stop offset="0%" stop-color="#002395"/>'
    + '<stop offset="45%" stop-color="#ffffff"/>'
    + '<stop offset="100%" stop-color="#C60B1E"/>'
    + '</linearGradient>'
    + '<linearGradient id="gES2" x1="0" y1="0" x2="0" y2="1">'
    + '<stop offset="0%" stop-color="#C60B1E"/>'
    + '<stop offset="55%" stop-color="#F1BF00"/>'
    + '<stop offset="100%" stop-color="#C60B1E"/>'
    + '</linearGradient>'
    + '</defs>'
    /* fond circulaire coupé diagonalement FR|ES */
    + '<clipPath id="circ"><circle cx="40" cy="40" r="36"/></clipPath>'
    + '<circle cx="40" cy="40" r="36" fill="url(#gFR2)"/>'
    + '<polygon points="40,4 76,4 76,76 40,76" fill="url(#gES2)" opacity="0.85" clip-path="url(#circ)"/>'
    /* méridiens et équateur */
    + '<circle cx="40" cy="40" r="36" fill="none" stroke="#fff" stroke-width="2.5" opacity="0.9"/>'
    + '<ellipse cx="40" cy="40" rx="16" ry="36" fill="none" stroke="#fff" stroke-width="1.8" opacity="0.6"/>'
    + '<line x1="4" y1="40" x2="76" y2="40" stroke="#fff" stroke-width="1.8" opacity="0.6"/>'
    + '<line x1="10" y1="26" x2="70" y2="26" stroke="#fff" stroke-width="1.2" opacity="0.35"/>'
    + '<line x1="10" y1="54" x2="70" y2="54" stroke="#fff" stroke-width="1.2" opacity="0.35"/>'
    + '</svg>'
    + '</div>'

    + '<h1>VACHÉBO</h1>'
    + '<div class="sub">Français ↔ Espagnol</div>'

    + '<p>L\'application n\'est pas encore disponible hors-ligne.</p>'
    + '<p>Connectez-vous une première fois pour activer l\'apprentissage sans réseau.</p>'

    + '<hr>'

    + '<p class="es">La aplicación aún no está disponible sin conexión.</p>'
    + '<p class="es">Conéctate una primera vez para activar el aprendizaje sin red.</p>'

    + '<button onclick="location.reload()">🔄 Réessayer&nbsp;/&nbsp;Reintentar</button>'
    + '</div>'

    + '<div class="footer">© Juin 2026 — Sébastien Godet</div>'

    + '</body>'
    + '</html>';
}


/* ──────────────────────────────────────────────────────────────────
   FALLBACK 1 — ICÔNE PWA MANQUANTE
   ──────────────────────────────────────────────────────────────────
   SVG 512×512 reproduisant l'identité visuelle VACHÉBO :
   fond bicolore bleu FR (#002395) / rouge ES (#C60B1E),
   globe centré avec méridiens et les drapeaux 🇫🇷🇪🇸 symboliques.
   Retourné si une icône PNG du dossier /img/icons/ est absente du cache.
   ────────────────────────────────────────────────────────────────── */
function _respondSvgIcon() {
  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" role="img" aria-label="VACHÉBO — icône bicolore France Espagne">',
    '  <defs>',
    '    <linearGradient id="gFR" x1="0" y1="0" x2="0" y2="1">',
    '      <stop offset="0%"   stop-color="#002395"/>',
    '      <stop offset="50%"  stop-color="#0030bb"/>',
    '      <stop offset="100%" stop-color="#001e7a"/>',
    '    </linearGradient>',
    '    <linearGradient id="gES" x1="0" y1="0" x2="0" y2="1">',
    '      <stop offset="0%"   stop-color="#C60B1E"/>',
    '      <stop offset="50%"  stop-color="#e00d22"/>',
    '      <stop offset="100%" stop-color="#a00919"/>',
    '    </linearGradient>',
    '    <clipPath id="rnd"><rect width="512" height="512" rx="96" ry="96"/></clipPath>',
    '  </defs>',

    '  <!-- Fond bicolore FR|ES -->',
    '  <g clip-path="url(#rnd)">',
    '    <rect width="512" height="512" fill="url(#gFR)"/>',
    '    <polygon points="280,0 512,0 512,512 280,512" fill="url(#gES)" opacity="0.93"/>',
    '    <rect x="268" y="0" width="10" height="512" fill="rgba(255,255,255,.20)"/>',
    '  </g>',

    '  <!-- Globe centré -->',
    '  <circle cx="256" cy="230" r="120" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.90)" stroke-width="5"/>',
    '  <ellipse cx="256" cy="230" rx="56" ry="120" fill="none" stroke="rgba(255,255,255,.65)" stroke-width="3"/>',
    '  <line x1="136" y1="230" x2="376" y2="230" stroke="rgba(255,255,255,.65)" stroke-width="3"/>',
    '  <line x1="148" y1="175" x2="364" y2="175" stroke="rgba(255,255,255,.30)" stroke-width="2"/>',
    '  <line x1="148" y1="285" x2="364" y2="285" stroke="rgba(255,255,255,.30)" stroke-width="2"/>',

    '  <!-- Signature VB -->',
    '  <text x="256" y="430" font-family="system-ui,sans-serif" font-size="72"',
    '        font-weight="900" fill="#fff" text-anchor="middle"',
    '        letter-spacing="-2" opacity="0.96">VB</text>',

    '  <!-- FR : bleu blanc rouge -->',
    '  <rect x="142" y="455" width="14" height="24" fill="#002395" rx="1"/>',
    '  <rect x="156" y="455" width="14" height="24" fill="#fff"    rx="0"/>',
    '  <rect x="170" y="455" width="14" height="24" fill="#C60B1E" rx="1"/>',
    '  <!-- ES : rouge jaune rouge -->',
    '  <rect x="328" y="455" width="12" height="24" fill="#C60B1E" rx="1"/>',
    '  <rect x="340" y="455" width="16" height="24" fill="#F1BF00" rx="0"/>',
    '  <rect x="356" y="455" width="12" height="24" fill="#C60B1E" rx="1"/>',

    '</svg>'
  ].join('\n');

  return new Response(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'no-store'
    }
  });
}


/* ──────────────────────────────────────────────────────────────────
   FALLBACK 2 — IMAGE LOCALE MANQUANTE
   ──────────────────────────────────────────────────────────────────
   SVG placeholder neutre (320×200) pour toute image PNG/JPG locale
   absente du cache. Cadre pointillé bleu VACHÉBO, globe stylisé,
   message bilingue FR/ES.
   ────────────────────────────────────────────────────────────────── */
function _respondSvgLocalImage() {
  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" width="320" height="200" role="img" aria-label="Image non disponible hors-ligne">',
    '  <rect width="320" height="200" rx="12" fill="#EDF0FA"/>',
    '  <rect x="110" y="45" width="100" height="80" rx="8" fill="none" stroke="#8899cc" stroke-width="2.5" stroke-dasharray="6 4"/>',
    '  <circle cx="160" cy="85" r="26" fill="none" stroke="#6677bb" stroke-width="2"/>',
    '  <ellipse cx="160" cy="85" rx="12" ry="26" fill="none" stroke="#6677bb" stroke-width="1.5" opacity="0.55"/>',
    '  <line x1="134" y1="85" x2="186" y2="85" stroke="#6677bb" stroke-width="1.5" opacity="0.55"/>',
    '  <text x="160" y="148" font-family="system-ui,sans-serif" font-size="11"',
    '        fill="#7788bb" text-anchor="middle">Image non disponible hors-ligne</text>',
    '  <text x="160" y="163" font-family="system-ui,sans-serif" font-size="10"',
    '        fill="#aab0cc" text-anchor="middle" font-style="italic">Imagen no disponible sin conexión</text>',
    '</svg>'
  ].join('\n');

  return new Response(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'no-store'
    }
  });
}


/* ──────────────────────────────────────────────────────────────────
   FALLBACK 3 — IMAGE EXTERNE MANQUANTE (CDN, GitHub raw…)
   ──────────────────────────────────────────────────────────────────
   Variante du placeholder local pour les ressources distantes
   (Twemoji CDN, logo GitHub raw…). Dégradé bleu→rouge évoquant
   les couleurs bicolores VACHÉBO, icône wifi barré et messages
   bilingues FR/ES.
   ────────────────────────────────────────────────────────────────── */
function _respondSvgExternalImage() {
  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" width="320" height="200" role="img" aria-label="Ressource externe non disponible">',
    '  <defs>',
    '    <linearGradient id="gExt" x1="0" y1="0" x2="1" y2="1">',
    '      <!-- Bleu VACHÉBO très pâle → rouge ES très pâle -->',
    '      <stop offset="0%"   stop-color="#e8ecfa"/>',
    '      <stop offset="100%" stop-color="#faeaec"/>',
    '    </linearGradient>',
    '  </defs>',
    '  <rect width="320" height="200" rx="12" fill="url(#gExt)"/>',
    '  <rect x="110" y="45" width="100" height="80" rx="8" fill="none" stroke="#b0b8d8" stroke-width="2.5" stroke-dasharray="6 4"/>',
    '  <!-- Signal wifi point central -->',
    '  <circle cx="160" cy="80" r="6" fill="#8899cc"/>',
    '  <!-- Arc wifi proche -->',
    '  <path d="M147 68 Q160 57 173 68" fill="none" stroke="#8899cc" stroke-width="2.5" stroke-linecap="round"/>',
    '  <!-- Arc wifi lointain (estompé) -->',
    '  <path d="M140 61 Q160 47 180 61" fill="none" stroke="#b0b8d0" stroke-width="2" stroke-linecap="round" opacity="0.55"/>',
    '  <!-- Barre rouge ES barrant le wifi -->',
    '  <line x1="148" y1="56" x2="172" y2="106" stroke="#C60B1E" stroke-width="2.5" stroke-linecap="round" opacity="0.72"/>',
    '  <text x="160" y="148" font-family="system-ui,sans-serif" font-size="11"',
    '        fill="#6677bb" text-anchor="middle">Ressource externe non disponible</text>',
    '  <text x="160" y="163" font-family="system-ui,sans-serif" font-size="10"',
    '        fill="#c08898" text-anchor="middle" font-style="italic">Recurso externo no disponible</text>',
    '</svg>'
  ].join('\n');

  return new Response(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'no-store'
    }
  });
}
