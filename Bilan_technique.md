# 📊 BILAN TECHNIQUE — VACHÉBO
*Application bilingue Français ↔ Espagnol — Juin 2026*
*Métriques revérifiées le 10/07/2026 (voir § 8 Historique)*

---

## 1. Vue d'ensemble

| Critère | Valeur |
|---|---|
| Architecture | SPA (Single Page App) — Vanilla JS ES2020, zéro dépendance |
| Hébergement | GitHub Pages (statique, HTTPS, gratuit) |
| CI/CD | GitHub Actions — déploiement automatique sur push `main` |
| Poids total source | ~691 Ko (13 768 lignes de code, hors manifest/deploy) |
| Chargement initial | ~450 Ko (app.js + style.css + index.html), les données chargées à la demande |

---

## 2. Métriques de code

| Fichier | Lignes | Taille | Rôle |
|---|---|---|---|
| `app.js` | 5 130 | 235 Ko | Moteur applicatif — 161 fonctions, 21 sections |
| `style.css` | 4 498 | 148 Ko | Thèmes, composants, animations — 44 variables CSS uniques (161 déclarations, redéfinies par thème/variante) |
| `data-fr.js` | 1 530 | 107 Ko | Données mode Français (32 thèmes + 16 dialogues) |
| `data-es.js` | 880 | 97 Ko | Données mode Espagnol (32 thèmes + 16 dialogues) |
| `index.html` | 1 148 | 72,5 Ko | Structure HTML (4 écrans + 2 modales) |
| `sw.js` | 582 | 31 Ko | Service Worker (cache hybride + 4 fallbacks SVG) |
| `manifest.json` | — | — | PWA (11 icônes, portrait, standalone) |
| `deploy.yml` | — | — | CI/CD GitHub Actions |

---

## 3. Architecture applicative

### Navigation (4 écrans)
```
[0] app-launcher   → Choix de langue + sélecteur de variante régionale
[1] home           → Guide utilisateur bilingue (FR/ES, 8 sections accordéon)
[2] sections-L1    → Grille des 32 thèmes de vocabulaire
    sections-L2    → Grille des 16 dialogues
[3] lesson         → Leçon ouverte — onglets Flash / Vocab / Quiz / Répète / Dialogue
```

### Chargement conditionnel des données
`loadDataForMode()` injecte dynamiquement `data-fr.js` **ou** `data-es.js` uniquement au moment du choix de langue — réduction de ~50 % du JS parsé au démarrage. Guard contre les doubles appels (`_loadDataInProgress`).

### Système de thèmes CSS
- `html.theme-french` → palette bleu/blanc/rouge (🇫🇷)
- `html.theme-spain` → palette rouge/or (🇪🇸)
- 7 variantes régionales via classes additionnelles (`region-MX`, `region-AR`, `region-CO`, `region-PE`, `region-VE`, `region-EC`, `region-ES`)

---

## 4. Fonctionnalités techniques

### 4.1 Synthèse vocale (Web Speech API — SpeechSynthesis)
- Cascade de sélection de voix espagnole par correspondance régionale (voix exacte de la région → voix espagnole générique disponible en secours → voix système par défaut en dernier recours) — `_resolveSpanishVoice()`. Note : il n'existe pas de distinction voix distante/locale dans le code ; `speechSynthesis.getVoices()` ne renseigne pas cette information de façon fiable inter-navigateurs, la cascade réelle porte uniquement sur la correspondance de langue/région.
- 3 vitesses de lecture paramétrables
- Keep-alive timer pour iOS/Android (évite la coupure silencieuse)
- Badge visuel de qualité de voix (`_updateVoiceBadge()`) — ✅ exacte / ⚠️ secours / ❓ défaut
- Toast et écran d'avertissement si audio indisponible
- **Ajouté le 10/07/2026** : bannière hors-ligne proactive et persistante (`_updateOfflineAudioBanner()`), affichée dès la détection du mode hors ligne (sans attendre un clic) — prévient que la lecture peut basculer sur la langue système par défaut si aucune voix locale correspondante n'est installée

### 4.2 Reconnaissance vocale (Web Speech API — SpeechRecognition)
- Algorithme de Levenshtein pour tolérance aux fautes de prononciation (`_levenshtein()` + `_speechMatch()`)
- Normalisation multilingue des textes reconnus (`_normalizeSpeech()`)
- Feedback visuel vert/orange selon le score de similarité
- Gestion des erreurs microphone bloqué
- Détection hors ligne (`_isOffline()`) : service cloud, indisponible sans connexion sur tous les moteurs (Chrome/Edge/Safari) — signalé au clic (`_micOfflineHtml()`) **et** de façon proactive via la bannière hors-ligne commune décrite en 4.1

### 4.3 Système de progression
- `localStorage` avec clé unique par mode (`STORAGE_KEY`)
- Étoiles 1★ (≥50%) / 2★★ (≥75%) / 3★★★ (100%) — jamais régressives
- Reprise de quiz interrompus via `sessionStorage` (`_saveQuizSession` / `_restoreQuizSession`)
- Barre de progression globale + cercle SVG animé sur la home

### 4.4 Service Worker (stratégie hybride)
- **Cache-First** pour les ressources locales (HTML, CSS, JS, PNG, icônes)
- **Network-First** pour les ressources externes (GitHub Raw, Twemoji CDN)
- 4 fallbacks SVG inline en cas d'échec total (image locale, icône PWA, image externe, page offline)
- Versionnage automatique via `__BUILD_NUMBER__` injecté par GitHub Actions

### 4.5 Export PDF
- Génération en mémoire via `window.print()` dans une fenêtre popup stylée
- 3 types exportables : guide utilisateur, module vocabulaire, dialogue situationnel
- Styles dédiés (`_pdfTheme()`, `_pdfBaseStyles()`, `_pdfHeader()`, `_pdfFooter()`)

### 4.6 Quiz dynamique
- Génération aléatoire à chaque partie — jamais le même quiz (`_generateLevel1Quiz()`)
- QCM 10 questions avec distracteurs intelligents
- Anti double-clic (flags `q10Answered`, `dqAnswered`)
- Confettis animés GPU à 3★★★ (`_launchConfetti()`)

---

## 5. Accessibilité & sécurité

| Aspect | Implémentation |
|---|---|
| **WCAG 1.4.4** | `maximum-scale=5.0` — zoom utilisateur autorisé |
| **Navigation clavier** | `role="button"`, `aria-label` sur tous les éléments interactifs |
| **CSP** | `Content-Security-Policy` via meta tag (GitHub Pages sans headers HTTP) |
| **Clickjacking** | `X-Frame-Options: SAMEORIGIN` |
| **MIME sniffing** | `X-Content-Type-Options: nosniff` |
| **Anti-spam email** | Adresse encodée en reverse dans le HTML |
| **Retour haptique** | `navigator.vibrate()` — feedback discret sur mobile |

---

## 6. Points forts techniques

- ✅ **Zéro dépendance** — pas de npm, pas de bundler, pas de framework
- ✅ **PWA complète** — installable, hors-ligne, 11 icônes, manifest valide
- ✅ **Thèmes CSS par variables** — basculement instantané sans rechargement
- ✅ **Comments de code exhaustifs** — chaque section, fonction, et décision architecturale est documentée
- ✅ **Guard patterns** robustes — double-clic, chargement en cours, voix non disponibles
- ✅ **CI/CD automatisé** — aucune action manuelle au déploiement

## 7. Points d'amélioration potentiels

- ⚠️ `unsafe-inline` en CSP (nécessaire pour le style inline dynamique, mais réduit la protection XSS)
- ⚠️ Variables globales JS nombreuses — une refonte module ES6 améliorerait l'encapsulation
- ⚠️ Pas de tests automatisés (unitaires ou E2E)
- ⚠️ `data-fr.js` et `data-es.js` en JS global (`ALL_THEMES_FR`) — un format JSON + `fetch()` serait plus propre
- ⚠️ Firefox mobile ne supporte pas `SpeechRecognition` (documenté dans le guide, non bloquant)

---

## 8. Historique

| Date | Contenu |
|---|---|
| 07/06/2026 → 29/06/2026 | Version bêta créée avec IA Claude Sonnet 4.6 et Gemini 3.5 Flash |
| 29/06/2026 → 08/07/2026 | Tests : desktop (auto) et iPhone (manuel) par Fédérico ; Android (manuel) par Sébastien Godet, aidé par Gemini 3.5 Flash Extended. Correctifs par Sébastien Godet, aidé par Claude Sonnet 5 |
| 08/07/2026 | Vérification technique (Claude Sonnet 5) : les correctifs ci-dessus avaient ajouté ~103 lignes à `app.js` et ~5 lignes à `style.css` sans que les tables des matières internes (« PLAN DU FICHIER ») ni les métriques de ce document ne soient mises à jour. Recalcul de tous les numéros de ligne dans les en-têtes de `app.js` et `style.css` ; correction de deux erreurs de contenu (en-têtes `data-fr.js`/`data-es.js` indiquant 28 thèmes au lieu de 32) ; ajout d'une entrée manquante dans le plan de `style.css` (mise en page 2 colonnes desktop de l'écran Leçon, ajoutée pendant les correctifs) ; mise à jour des comptes de lignes/poids/fonctions ci-dessus et dans le README |
| 10/07/2026 | Ajout (Claude Sonnet 5, demande utilisateur) d'une bannière hors-ligne proactive et persistante dans l'écran Leçon (`_updateOfflineAudioBanner()`, `#offline-audio-banner`), affichée dès le passage hors ligne sans attendre un clic sur Prononcer/Écouter, et mise à jour en direct via les évènements `online`/`offline`. Nuance apportée au message réactif existant (`_micOfflineHtml()`), qui affirmait sans nuance qu'« Écouter reste disponible hors ligne » — imprécis, car la synthèse vocale peut retomber sur la voix par défaut du système (langue non désirée) si aucune voix locale correspondante n'est installée. Correction du §4.1 ci-dessus, qui décrivait une cascade de sélection de voix « remote > local enhanced > local standard » : cette distinction n'existe pas dans le code (`_resolveSpanishVoice()` ne sélectionne que par correspondance de langue/région, sans notion de voix distante/locale). Recalcul intégral des métriques ci-dessus (§1 et §2) après vérification directe des fichiers (`wc -l` / taille sur disque) : au-delà de l'impact des ~97 lignes ajoutées à `app.js` et ~36 lignes à `style.css` par cette bannière, les comptes de lignes d'`app.js` (4 864 → en réalité déjà 5 033 avant cet ajout) et d'`index.html` (1 049 → en réalité déjà 1 090, fichier non modifié aujourd'hui) se sont révélés sous-évalués indépendamment des correctifs du jour — écart antérieur non expliqué, corrigé ici par mesure directe plutôt que par recalcul déclaratif |
| 10/07/2026 (suite) | Ajout (Claude Sonnet 5, demande utilisateur) d'un encadré comparatif « 🌐 Quel navigateur choisir ? » dans la rubrique 3 « L'audio » du guide utilisateur intégré (`#guideContentFR` et `#guideContentES` dans `index.html`), présentant par plateforme (Android / iPhone-iPad / Ordinateur) le navigateur recommandé et les limites des autres — notamment Firefox, qui ne supporte pas ou mal la reconnaissance vocale (onglet 🎤 Répète) selon la plateforme. Reprend les constats déjà établis dans le README (tableau de compatibilité) et dans les commentaires internes d'`app.js`/`index.html` (ex. `beforeinstallprompt` non supporté par Firefox ni iOS Safari), sans en modifier le contenu factuel. Aucune nouvelle rubrique créée (le guide reste à 8 sections par langue) ; contenu ajouté au sein de la rubrique existante. `index.html` : 1 090 → 1 152 lignes (+62), 67 Ko → 71 Ko. Métriques §1 et §2 recalculées en conséquence |
| 10/07/2026 (suite 2) | Extension (Claude Sonnet 5, demande utilisateur) de l'encadré « 🌐 Quel navigateur choisir ? » ajouté ci-dessus : ajout explicite de Brave, Opera et DuckDuckGo (et mention explicite de Samsung Internet, auparavant seulement citée entre parenthèses) dans les trois colonnes Android / iPhone-iPad / Ordinateur, avec une recommandation propre à chacun. Contenu vérifié le jour même par recherche web (parts de marché navigateurs Statcounter France/Espagne/Mexique/Argentine, mai-juin 2026 : Chrome, Safari, Edge, Firefox, Samsung Internet et Opera présents dans le top 6 de chaque pays ; Brave présent au Mexique ~1,15 % — aucun autre navigateur testé ne ressort significativement dans ces marchés). Brave et Opera classés ✅ (moteur Chromium, même famille que Chrome/Edge — l'appli gère déjà nativement le léger délai de chargement des voix propre à Brave/Android, cf. `_waitForVoicesReady()` §3b). DuckDuckGo classé ❓ (moteur Blink sur Android/Windows, WebKit sur iOS/macOS d'après vérification externe, mais blocage de trackers pouvant perturber l'appel réseau de 🎤 Répète — non vérifié en conditions réelles faute d'accès à l'app, formulé avec prudence dans le guide). `index.html` : 1 152 → 1 146 lignes (texte reformulé en listes plus denses ; taille en octets néanmoins en légère hausse malgré la baisse du nombre de lignes : 71 Ko → 72 Ko). Métriques §1 et §2 recalculées en conséquence |
| 10/07/2026 (suite 3) | Ajout (Claude Sonnet 5, demande utilisateur, après confirmation que la liste soit exhaustive au niveau mondial) de **Vivaldi** et **UC Browser** dans l'encadré « 🌐 Quel navigateur choisir ? », complétant ainsi le top 10 mondial des navigateurs (StatCounter) : Chrome, Safari, Edge, Firefox, Opera, Samsung Internet, UC Browser, Brave, Vivaldi, DuckDuckGo sont désormais tous couverts. Vivaldi classé ✅ sur les trois colonnes (Android/iPhone-iPad/Ordinateur) : moteur Chromium sur Android/Windows/Mac/Linux, WebKit sur iOS comme tout navigateur iOS — appli iOS confirmée disponible et activement mise à jour (vérifié via App Store/communiqués Vivaldi, dernière version 7.9 fin juin 2026). UC Browser classé ⚠️, colonne Android uniquement (usage iOS/desktop marginal) : basé sur Chromium depuis son cœur « U4 », mais son « Mode rapide » historique compresse les pages via un serveur proxy, ce qui peut altérer l'audio et 🎤 Répète — recommandation de le désactiver ou de préférer Chrome, formulée par prudence technique plutôt que par test direct. Note de contexte donnée à l'utilisateur (hors guide, dans la conversation) : ni Vivaldi (~0,4 % mondial) ni UC Browser (~1,1 % mondial, quasi inexistant en France/Espagne/Amérique hispanophone d'après les données pays déjà vérifiées) ne sont significatifs pour le public réel de l'appli — ajoutés pour exhaustivité sur demande explicite. `index.html` : 1 146 → 1 148 lignes (+2), 72 Ko → 72,5 Ko. Métriques §1 et §2 recalculées en conséquence — la liste des navigateurs couverts par le guide est désormais considérée complète |
| 10/07/2026 (suite 4) | Relecture complète (Claude Sonnet 5, demande utilisateur) de l'ensemble des fichiers pour corriger les commentaires internes et leurs numéros de ligne suite aux mises à jour ci-dessus. Constat : le « PLAN DU FICHIER » de `app.js` (recalculé le 08/07) n'avait pas suivi l'ajout de la bannière hors-ligne (~97 lignes vers la ligne 1300) — tous les numéros après ce point étaient décalés d'environ -100 à -200 lignes ; celui de `style.css` était erroné indépendamment de tout ajout récent (écarts de +30 à +90 lignes déjà présents le 08/07, non détectés à l'époque) et son ordre d'affichage ne suivait pas l'ordre réel du fichier. Les deux plans ont été intégralement recalculés par mesure directe (chaque ancre vérifiée une à une par grep, pas par estimation) ; celui de `style.css` a en plus été réordonné pour suivre l'ordre réel des sections dans le fichier, et une entrée « Bannière hors-ligne » y a été ajoutée. Découverte additionnelle : une section entière d'`app.js` — §21c, bouton d'installation PWA native (`_initInstallButtons()`, `_installPwa()`, ajoutée le 09/07/2026) — était absente du plan depuis sa création ; elle y figure désormais. Le compte de fonctions nommées d'`app.js` (156 dans ce document) était également sous-évalué : recompté par grep, il est en réalité de 161 (comptage incluant les fonctions imbriquées nommées, ex. `refresh()`, `_doPrint()`) ; corrigé ci-dessus (§2) et dans le README. `README.md` mis à jour (161 fonctions / 5 130 lignes au lieu de 153 / 4 864 ; ligne d'historique condensée ajoutée pour le 09-10/07). Aucun fichier de données (`data-fr.js`, `data-es.js`), ni `index.html`, ni `sw.js` ne contient de numéro de ligne en commentaire — rien à corriger de ce côté. Aucune ligne de code fonctionnel modifiée dans cette passe, uniquement des commentaires et de la documentation |
