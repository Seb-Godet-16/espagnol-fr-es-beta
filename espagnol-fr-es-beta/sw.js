/*
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  Language App 🇫🇷🇪🇸  —  sw.js  (Service Worker)              ║
 * ║  Auteur   : Sébastien Godet                                     ║
 * ║  Assisté  : Claude Sonnet 4.6                                   ║
 * ║  Version  : Juin 2026                                           ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  STRATÉGIES DE CACHE                                            ║
 * ║                                                                  ║
 * ║  • Ressources locales (shell + data) → Cache First              ║
 * ║    Servies depuis le cache dès que disponibles.                 ║
 * ║    Mise à jour transparente en arrière-plan (stale-while-       ║
 * ║    revalidate) : le nouveau contenu sera actif à la prochaine   ║
 * ║    ouverture de l'app.                                          ║
 * ║                                                                  ║
 * ║  • Ressources externes (logo GitHub, drapeaux Twemoji) →       ║
 * ║    Network First avec fallback cache puis SVG inline            ║
 * ║    Tente le réseau ; si hors-ligne, sert la version en cache.  ║
 * ║    Si absente du cache aussi : SVG placeholder VACHÉBO généré  ║
 * ║    en mémoire (_respondSvgExternalImage) — pas d'erreur nue.   ║
 * ║                                                                  ║
 * ║  • Tout le reste → Network Only (pas mis en cache)             ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  FALLBACKS SVG INLINE                                           ║
 * ║  Trois fonctions SVG adaptées pour VACHÉBO (🇫🇷🇪🇸,            ║
 * ║  couleurs #002395 / #C60B1E) :                                  ║
 * ║    • _respondSvgIcon()          → icône PWA 512×512 de secours  ║
 * ║    • _respondSvgLocalImage()    → placeholder image locale      ║
 * ║    • _respondSvgExternalImage() → placeholder ressource externe ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  MISE À JOUR                                                    ║
 * ║  Incrémenter CACHE_VERSION à chaque déploiement pour invalider ║
 * ║  l'ancien cache et forcer le rechargement de toutes les        ║
 * ║  ressources locales.                                            ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

/* ═══════════════════════════════════════════════════════════
   CONFIGURATION
═══════════════════════════════════════════════════════════ */

const CACHE_VERSION = '__BUILD_NUMBER__';
const CACHE_NAME    = 'vachebo-' + CACHE_VERSION;

/*
 * APP SHELL — ressources locales précachées à l'installation.
 * Ces fichiers sont nécessaires pour que l'app fonctionne hors-ligne.
 * Nota : data-fr.js et data-es.js sont chargés dynamiquement par
 * loadDataForMode() dans app.js ; ils entrent dans le cache lors de
 * leur premier chargement réseau (voir handler fetch ci-dessous).
 */
const SHELL_ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/data-fr.js',
  './js/data-es.js',
  './manifest.json'
];

/*
 * Ressources externes mises en cache à la demande (network-first).
 * On les identifie par leurs préfixes d'URL.
 */
const EXTERNAL_CACHE_PREFIXES = [
  'https://raw.githubusercontent.com/',
  'https://cdnjs.cloudflare.com/'
];

function _offlinePage() {
  return '<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>VACHÉBO — Hors ligne</title><style>body{font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#FCFFEE;margin:0;text-align:center;padding:20px}div{max-width:380px}h1{font-size:3rem;margin:0}p{color:#555;margin:16px 0}button{padding:12px 28px;background:#002395;color:#fff;border:none;border-radius:50px;font-size:1rem;cursor:pointer;font-weight:bold}</style></head><body><div><h1>🌐</h1><p><strong>Hors ligne / Sin conexión</strong><br>L\'application n\'est pas encore disponible hors ligne.<br><em>La aplicación todavía no está disponible sin conexión.</em></p><button onclick="location.reload()">🔄 Réessayer / Reintentar</button></div></body></html>';
}


/* ═══════════════════════════════════════════════════════════
   FALLBACK 1 — ICÔNE PWA MANQUANTE
   ═══════════════════════════════════════════════════════════
   SVG 512×512 reproduisant l'identité visuelle VACHÉBO :
   fond bicolore bleu FR (#002395) / rouge ES (#C60B1E),
   globe centré avec méridiens et les drapeaux 🇫🇷🇪🇸 symboliques.
   Retourné si une icône PNG du dossier /icons/ est absente du cache.
════════════════════════════════════════════════════════════ */
function _respondSvgIcon() {
  /*
   * Icône de secours VACHÉBO — SVG 512×512
   * ─────────────────────────────────────────────
   * Fond partagé FR bleu (gauche) / ES rouge (droite),
   * globe blanc centré avec méridiens et équateur,
   * signature "VB" et mini-drapeaux 🇫🇷🇪🇸 symboliques en bas.
   *
   * Géométrie :
   *   - Fond bicolore  : rect bleu + polygon rouge droite
   *   - Globe          : cercle + ellipse méridien + equateur
   *   - Signature      : text "VB" font-weight 900
   *   - Drapeaux       : 3 rects verticaux chacun (FR et ES)
   */
  var svg = [
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
    '    <!-- Demi-droite rouge Espagne -->',
    '    <polygon points="280,0 512,0 512,512 280,512" fill="url(#gES)" opacity="0.93"/>',
    '    <!-- Fine bande blanche séparatrice -->',
    '    <rect x="268" y="0" width="10" height="512" fill="rgba(255,255,255,.20)"/>',
    '  </g>',

    '  <!-- Globe centré -->',
    '  <!-- Cercle extérieur -->',
    '  <circle cx="256" cy="230" r="120" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.90)" stroke-width="5"/>',
    '  <!-- Méridien central (ellipse) -->',
    '  <ellipse cx="256" cy="230" rx="56" ry="120" fill="none" stroke="rgba(255,255,255,.65)" stroke-width="3"/>',
    '  <!-- Équateur -->',
    '  <line x1="136" y1="230" x2="376" y2="230" stroke="rgba(255,255,255,.65)" stroke-width="3"/>',
    '  <!-- Parallèles secondaires -->',
    '  <line x1="148" y1="175" x2="364" y2="175" stroke="rgba(255,255,255,.30)" stroke-width="2"/>',
    '  <line x1="148" y1="285" x2="364" y2="285" stroke="rgba(255,255,255,.30)" stroke-width="2"/>',

    '  <!-- Signature VB -->',
    '  <text x="256" y="430" font-family="system-ui,sans-serif" font-size="72"',
    '        font-weight="900" fill="#fff" text-anchor="middle"',
    '        letter-spacing="-2" opacity="0.96">VB</text>',

    '  <!-- Drapeaux symboliques 🇫🇷🇪🇸 — rectangles colorés -->',
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


/* ═══════════════════════════════════════════════════════════
   FALLBACK 2 — IMAGE LOCALE MANQUANTE
   ═══════════════════════════════════════════════════════════
   SVG placeholder neutre (320×200) pour toute image PNG/JPG locale
   absente du cache. Cadre pointillé bleu VACHÉBO, globe stylisé,
   message bilingue FR/ES.
════════════════════════════════════════════════════════════ */
function _respondSvgLocalImage() {
  var svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" width="320" height="200" role="img" aria-label="Image non disponible hors-ligne">',
    '  <!-- Fond bleuté très pâle -->',
    '  <rect width="320" height="200" rx="12" fill="#EDF0FA"/>',
    '  <!-- Cadre image cassée, couleur VACHÉBO bleu -->',
    '  <rect x="110" y="45" width="100" height="80" rx="8" fill="none" stroke="#8899cc" stroke-width="2.5" stroke-dasharray="6 4"/>',
    '  <!-- Globe simplifié centré dans le cadre -->',
    '  <circle cx="160" cy="85" r="26" fill="none" stroke="#6677bb" stroke-width="2"/>',
    '  <ellipse cx="160" cy="85" rx="12" ry="26" fill="none" stroke="#6677bb" stroke-width="1.5" opacity="0.55"/>',
    '  <line x1="134" y1="85" x2="186" y2="85" stroke="#6677bb" stroke-width="1.5" opacity="0.55"/>',
    '  <!-- Message FR -->',
    '  <text x="160" y="148" font-family="system-ui,sans-serif" font-size="11"',
    '        fill="#7788bb" text-anchor="middle">Image non disponible hors-ligne</text>',
    '  <!-- Message ES -->',
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


/* ═══════════════════════════════════════════════════════════
   FALLBACK 3 — IMAGE EXTERNE MANQUANTE (CDN, GitHub…)
   ═══════════════════════════════════════════════════════════
   Variante du placeholder local pour les ressources distantes
   (Twemoji CDN, logo GitHub raw…). Dégradé bleu→rouge évoquant
   les couleurs bicolores VACHÉBO, icône wifi barré et messages
   bilingues FR/ES.
════════════════════════════════════════════════════════════ */
function _respondSvgExternalImage() {
  var svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" width="320" height="200" role="img" aria-label="Ressource externe non disponible">',
    '  <defs>',
    '    <linearGradient id="gExt" x1="0" y1="0" x2="1" y2="1">',
    '      <!-- Bleu VACHÉBO très pâle → rouge ES très pâle -->',
    '      <stop offset="0%"   stop-color="#e8ecfa"/>',
    '      <stop offset="100%" stop-color="#faeaec"/>',
    '    </linearGradient>',
    '  </defs>',
    '  <rect width="320" height="200" rx="12" fill="url(#gExt)"/>',
    '  <!-- Cadre pointillé bicolore -->',
    '  <rect x="110" y="45" width="100" height="80" rx="8" fill="none" stroke="#b0b8d8" stroke-width="2.5" stroke-dasharray="6 4"/>',
    '  <!-- Signal wifi point central -->',
    '  <circle cx="160" cy="80" r="6" fill="#8899cc"/>',
    '  <!-- Arc wifi proche -->',
    '  <path d="M147 68 Q160 57 173 68" fill="none" stroke="#8899cc" stroke-width="2.5" stroke-linecap="round"/>',
    '  <!-- Arc wifi lointain (estompé) -->',
    '  <path d="M140 61 Q160 47 180 61" fill="none" stroke="#b0b8d0" stroke-width="2" stroke-linecap="round" opacity="0.55"/>',
    '  <!-- Barre rouge ES barrant le wifi -->',
    '  <line x1="148" y1="56" x2="172" y2="106" stroke="#C60B1E" stroke-width="2.5" stroke-linecap="round" opacity="0.72"/>',
    '  <!-- Message FR -->',
    '  <text x="160" y="148" font-family="system-ui,sans-serif" font-size="11"',
    '        fill="#6677bb" text-anchor="middle">Ressource externe non disponible</text>',
    '  <!-- Message ES -->',
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


/* ═══════════════════════════════════════════════════════════
   INSTALL — précache du shell applicatif
═══════════════════════════════════════════════════════════ */

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      /*
       * addAll() est atomique : si un seul fichier échoue (ex. data-fr.js
       * pas encore déployé), l'installation entière échoue proprement
       * plutôt que de laisser un cache partiel silencieux.
       */
      return cache.addAll(SHELL_ASSETS);
    })
  );
  /*
   * skipWaiting() : le nouveau Service Worker prend le contrôle
   * immédiatement sans attendre la fermeture de tous les onglets.
   * Couplé à clients.claim() dans activate, cela garantit que les
   * utilisateurs voient la dernière version dès le prochain chargement.
   */
  self.skipWaiting();
});


/* ═══════════════════════════════════════════════════════════
   ACTIVATE — nettoyage des anciens caches
═══════════════════════════════════════════════════════════ */

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(name) {
            /* Supprime tous les caches vachebo-* qui ne sont plus la version courante */
            return name.startsWith('vachebo-') && name !== CACHE_NAME;
          })
          .map(function(name) {
            return caches.delete(name);
          })
      );
    })
  );
  /* Prend le contrôle de tous les clients ouverts sans rechargement */
  self.clients.claim();
});


/* ═══════════════════════════════════════════════════════════
   FETCH — routage des requêtes
═══════════════════════════════════════════════════════════ */

self.addEventListener('fetch', function(event) {
  var url = event.request.url;

  /* --- Ignorer les requêtes non-GET (POST, etc.) --- */
  if (event.request.method !== 'GET') return;

  /* --- Ignorer les extensions Chrome et URLs non-http(s) --- */
  if (!url.startsWith('http')) return;

  /* ── Ressources EXTERNES (logo GitHub, drapeaux Twemoji) ──
     Stratégie : Network First → fallback cache.
     On tente le réseau d'abord pour avoir la version fraîche.
     Si hors-ligne, on sert la copie en cache si elle existe. */
  var isExternal = EXTERNAL_CACHE_PREFIXES.some(function(prefix) {
    return url.startsWith(prefix);
  });

  if (isExternal) {
    event.respondWith(
      fetch(event.request)
        .then(function(networkResponse) {
          /* Mise en cache de la réponse réseau pour une utilisation future */
          var cloned = networkResponse.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, cloned);
          });
          return networkResponse;
        })
        .catch(function() {
          /* Hors-ligne : essayer le cache d'abord */
          return caches.match(event.request).then(function(cachedResponse) {
            if (cachedResponse) return cachedResponse;
            /*
             * Ressource externe absente du cache ET réseau KO :
             * retourne un SVG placeholder VACHÉBO plutôt qu'une erreur nue.
             * Couvre les drapeaux Twemoji (cdnjs.cloudflare.com) et le logo
             * GitHub (raw.githubusercontent.com) qui sont les deux préfixes
             * de EXTERNAL_CACHE_PREFIXES.
             */
            return _respondSvgExternalImage();
          });
        })
    );
    return;
  }

  /* ── Ressources LOCALES (shell + data files) ──
     Stratégie : Cache First → réseau → mise en cache.
     Priorité au cache pour une ouverture instantanée hors-ligne.
     Si absent du cache (ex. data-fr.js / data-es.js avant premier
     chargement), on va chercher sur le réseau et on met en cache. */
  event.respondWith(
    caches.match(event.request).then(function(cachedResponse) {
      if (cachedResponse) {
        /*
         * Revalidation en arrière-plan (stale-while-revalidate) :
         * on sert le cache immédiatement ET on déclenche une requête
         * réseau silencieuse pour mettre à jour le cache.
         * L'utilisateur verra la nouvelle version à la prochaine visite.
         */
        var fetchPromise = fetch(event.request).then(function(networkResponse) {
          if (networkResponse && networkResponse.status === 200) {
            var cloned = networkResponse.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, cloned);
            });
          }
          return networkResponse;
        }).catch(function() { /* Hors-ligne, silencieux */ });

        /* Supprimer la variable pour éviter le lint "unused" si besoin */
        void fetchPromise;

        return cachedResponse;
      }

      /* Pas en cache → réseau */
      return fetch(event.request).then(function(networkResponse) {
        if (networkResponse && networkResponse.status === 200) {
          var cloned = networkResponse.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, cloned);
          });
        }
        return networkResponse;
      }).catch(function() {
        if (event.request.mode === 'navigate') {
          return new Response(_offlinePage(), { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
        }
        return null;
      });
    })
  );
});