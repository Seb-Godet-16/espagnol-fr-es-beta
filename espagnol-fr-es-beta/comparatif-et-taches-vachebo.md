#### TÂCHE 14 — Versionnement automatique du cache (GitHub Actions)
**Problème** : le `CACHE_NAME` est fixe (`'vachebo-v1'`) et doit être incrémenté manuellement à chaque déploiement. Si on oublie, les utilisateurs gardent l'ancien cache indéfiniment.
**Difficulté** : 🟢 Facile

**Ce qu'il faut faire** : dans `sw.js`, remplacer `const CACHE_VERSION = 'v1'` par `const CACHE_VERSION = 'GITHUB_RUN_NUMBER_PLACEHOLDER'`. Créer un fichier `.github/workflows/deploy.yml` (ou modifier l'existant) avec une étape qui fait un `sed` pour remplacer `GITHUB_RUN_NUMBER_PLACEHOLDER` par le numéro réel `${{ github.run_number }}` avant le déploiement.

**Prompt :**
> Dans mon `sw.js` (joint), remplace la ligne `const CACHE_VERSION = 'v1';` par `const CACHE_VERSION = '__BUILD_NUMBER__';`. Crée ensuite un fichier `.github/workflows/deploy.yml` contenant un workflow GitHub Actions qui : (1) se déclenche sur `push` sur la branche `main` ; (2) a une étape `Set cache version` qui fait `sed -i "s/__BUILD_NUMBER__/${{ github.run_number }}/g" sw.js` ; (3) déploie le contenu sur GitHub Pages via `actions/deploy-pages@v2` (ou l'action de déploiement déjà utilisée dans le projet si différente). Adapte le workflow à la structure du dépôt si nécessaire.

---


### ⚪ PRIORITÉ 5 — Options avancées (selon motivation)

---



#### TÂCHE 17 — Fallbacks SVG dans le Service Worker
**Problème** : si le logo GitHub ou les images Twemoji ne chargent pas (hors ligne, CDN down), VACHÉBO affiche des images cassées. Taphad'Meuh génère des SVG de remplacement en mémoire.
**Difficulté** : 🟡 Moyen

**Ce qu'il faut faire** : dans `sw.js`, ajouter 3 fonctions : `_respondSvgIcon()` (SVG 512×512 bicolore FR|ES avec une vache et "VACHÉBO"), `_respondSvgExternalImage()` (placeholder vert-rouge avec icône wifi barré), `_respondSvgLocalImage()` (placeholder globe + cadre pointillé). Dans le handler fetch, pour les URLs Twemoji (`.svg`), servir `_respondSvgExternalImage()` si le réseau et le cache sont absents.

**Prompt :**
> Voici mon `sw.js` (joint) et le `sw.js` de Taphad'Meuh (joint) qui contient les fonctions `_respondSvgIcon()`, `_respondSvgLocalImage()` et `_respondSvgExternalImage()` aux lignes ~315–480.
>
> Adapte ces 3 fonctions pour VACHÉBO (nom "VACHÉBO", couleurs bicolores `#002395`/`#C60B1E`, drapeaux 🇫🇷🇪🇸 symboliques) et ajoute-les dans le `sw.js` de VACHÉBO.
> Puis dans le handler `fetch` de VACHÉBO, pour les URLs correspondant à `cdnjs.cloudflare.com/ajax/libs/twemoji` et `raw.githubusercontent.com` : si le `fetch` échoue ET que le cache ne contient pas la ressource, retourne `_respondSvgExternalImage()` via `new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } })`.

