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
 * ║    Network First avec fallback cache                            ║
 * ║    Tente le réseau ; si hors-ligne, sert la version en cache.  ║
 * ║    Ces ressources ont un fallback visuel intégré dans le HTML   ║
 * ║    (SVG inline pour le logo, emojis texte pour les drapeaux).  ║
 * ║                                                                  ║
 * ║  • Tout le reste → Network Only (pas mis en cache)             ║
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

const CACHE_VERSION = 'v1';
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
          /* Hors-ligne : essayer le cache */
          return caches.match(event.request);
          /* Si absent du cache aussi, le navigateur affichera son propre
             fallback — mais le HTML contient déjà un SVG inline pour le
             logo (onerror) et des emojis texte pour les drapeaux. */
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
      });
    })
  );
});
