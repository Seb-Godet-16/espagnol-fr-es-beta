# 🔄 Comparatif & Plan d'amélioration — VACHÉBO ES-FR ← Taphad'Meuh OR-FR
*Juin 2026 — Sébastien Godet*

---

## 1. TABLEAU COMPARATIF DÉTAILLÉ

| Fonctionnalité / Aspect | Taphad'Meuh (OR-FR) ✅ | VACHÉBO (ES-FR) | Écart |
|---|---|---|---|
| **ARCHITECTURE** | | | |
| Lignes totales | ~11 718 | ~9 420 | — |
| Fichiers principaux | 7 | 7 | = |
| Zéro framework/dépendance | ✅ | ✅ | = |
| Chargement conditionnel des données | ✅ `_loadDataScript()` | ✅ `loadDataForMode()` | = |
| Cache anti-double-injection data | ✅ `_loadedDataFiles` | ✅ `typeof ALL_THEMES_FR` | = |
| **NAVIGATION** | | | |
| Transitions slides directionnelles entre écrans | ✅ 280 ms, `prefers-reduced-motion` | ❌ Absentes | 🔴 Manque |
| `showScreen(id, dir)` avec direction auto | ✅ basé sur `_SCREEN_ORDER` | ❌ Partiel (sans dir) | 🔴 Manque |
| Barre de navigation basse | ✅ `_updateBottomNav()`, libellés bilingues | ❌ Absente | 🔴 Manque |
| Navigation prev/next entre modules | ✅ `lessonNav(±1)` | ❌ Absente | 🟡 Optionnel |
| Écran Home intermédiaire | ✅ | ❌ Supprimé (direct Sections) | ≠ Choix délibéré |
| Spinner de chargement | ✅ animé, injecté/retiré dynamiquement | ❌ Absent (bouton désactivé seulement) | 🟡 Utile |
| Fix viewport height Android (`--app-h`) | ✅ `resize` + `visualViewport` + `touchend` | ❌ Absent | 🔴 Manque |
| **UX / INTERFACE** | | | |
| Mode sombre (`prefers-color-scheme:dark`) | ✅ §24b style.css | ❌ Absent | 🔴 Manque |
| Animation confetti ⭐⭐⭐ (première obtention) | ✅ 22 particules CSS, palette thème | ❌ Absent | 🟡 Fun |
| Réinitialisation globale de progression | ✅ modale de confirmation dédiée | ❌ Absent (seulement par thème) | 🟡 Utile |
| Modale de confirmation avant suppression | ✅ HTML dans index.html | ❌ Absent | 🟡 UX |
| Cercle SVG de progression | ✅ §PROGRESS style.css | ❌ Barre simple | 🟡 Cosmétique |
| Responsive grille 3 colonnes tablette/desktop | ✅ §24 style.css | ✅ Partiel (fond quadrillé, carte flottante) | 🟡 Partiel |
| `lang` HTML mis à jour (`om` / `fr`) | ✅ accessibilité lecteurs d'écran | ❌ Absent | 🟡 Accessibilité |
| **SYNTHÈSE VOCALE (TTS)** | | | |
| Cascade de voix pour la langue 2 | ✅ 7 langues (om-ET → it-IT) | ✅ Cascade régionale (es-MX, es-AR…) | = (adapté) |
| Interruption TTS à la mise en arrière-plan | ✅ `visibilitychange` → `cancel()` | ❌ Absent | 🔴 Bug potentiel |
| Indicateur audio indisponible | ✅ badge discret | ✅ badge discret | = |
| **QUIZ** | | | |
| Algorithme Levenshtein dans onglet Répète | ✅ tolérance ≤ 25 %, mots courts exacte | ❌ Absent (correspondance exacte/inclusion) | 🔴 Qualité |
| Onglet Répète sur thèmes Dialogue (Niv. 2) | ✅ | ❌ Absent (Niv. 1 seulement) | 🟡 Optionnel |
| **PROGRESSION** | | | |
| Réinitialisation thème individuel | ✅ bouton 🔄 | ✅ bouton 🔄 | = |
| Réinitialisation globale avec confirmation | ✅ modale | ❌ Absent | 🟡 Utile |
| Restauration session quiz (sessionStorage) | ✅ | ✅ | = |
| **SERVICE WORKER** | | | |
| Page HTML offline inline complète | ✅ bilingue FR/OR, bouton Réessayer | ❌ Navigateur seul | 🟡 Utile |
| Fallback SVG icône PWA manquante | ✅ vache bicolore 512×512 | ❌ Absent | 🟡 Robustesse |
| Fallback SVG image locale manquante | ✅ globe + cadre pointillé | ❌ Absent | 🟡 Robustesse |
| Fallback SVG image externe manquante | ✅ icône wifi barré vert-or | ❌ Absent | 🟡 Robustesse |
| Versionnement auto cache (GitHub Actions) | ✅ `GITHUB_RUN_NUMBER` | ❌ Manuel (`vachebo-v1`) | 🟡 DevOps |
| Rechargement auto SW sans boucle | ✅ flag `_reloading` + `controllerchange` | ❌ Absent (peut boucler) | 🔴 Bug potentiel |
| **PWA / MANIFEST** | | | |
| Icônes multi-tailles (72 → 512 px, maskable) | ✅ 10 tailles | ❌ 1 seule | 🟡 Installabilité |
| Screenshots déclarés dans manifest | ✅ 5 (form_factor: narrow) | ❌ Absent | 🟡 Store listing |
| **EXPORTS PDF** | | | |
| Export Guide utilisateur | ✅ page HTML complète | ❌ Absent | 🟡 Optionnel |
| Export Vocabulaire (tableau bilingue) | ✅ avec conjugaisons | ❌ Absent | 🟡 Optionnel |
| Export Situation/Dialogue | ✅ colonnes + lexique | ❌ Absent | 🟡 Optionnel |
| Bouton export repositionné dynamiquement (Android) | ✅ `position:fixed` via `switchTab()` | ❌ N/A (pas d'exports) | — |
| **ANTISPAM E-MAIL** | | | |
| Technique antispam | ✅ CSS `direction:rtl` + reconstruction mémoire | ✅ Clipboard API `copierEmailSecurise()` | = (différent) |
| **DONNÉES / CONTENU** | | | |
| Variantes régionales dans les données | ❌ N/A (langue unique) | ✅ 7 variantes `variants: {}` | VACHÉBO en avance |
| Adaptation dialogues à la variante | ❌ N/A | ✅ `_adaptDialogueLine()` | VACHÉBO en avance |
| Onglet Répète dans dialogues (Niv. 2) | ✅ | ❌ | 🟡 Optionnel |

**Légende :** 🔴 Manque fonctionnel/bug · 🟡 Amélioration souhaitable · ✅ Présent · ❌ Absent · = Équivalent

---

## 2. PLAN DE TÂCHES ORDONNÉ

Les tâches sont classées par **priorité décroissante** : d'abord les bugs/régressions, puis les manques fonctionnels importants, puis les améliorations UX, enfin les options avancées.

La **difficulté** est notée sur 3 niveaux : 🟢 Facile (< 1h) · 🟡 Moyen (1–4h) · 🔴 Complexe (> 4h).

---

### 🔴 PRIORITÉ 1 — Bugs et régressions critiques

---

#### TÂCHE 1 — Fix viewport height Android (`--app-h`)
**Problème** : sur Chrome/Brave Android, la barre d'URL disparaît en scrollant et décale les éléments positionnés en `100vh`. Les boutons du bas peuvent être coupés.
**Difficulté** : 🟢 Facile

**Ce qu'il faut faire** : dans `app.js`, ajouter une fonction qui écoute les événements `resize`, `visualViewport.resize` (avec debounce 80 ms) et `touchend` (fallback 300 ms), et qui met à jour une custom property `--app-h` sur `<html>` avec `window.innerHeight`. Dans `style.css`, remplacer tous les usages de `100vh` sur `.app`, `#app-launcher`, `.screen.active` par `var(--app-h, 100vh)`.

**Prompt :**
> Voici mon `app.js` (joint) et mon `style.css` (joint). Dans `app.js`, ajoute en fin de fichier une section §21b "Viewport Height Fix Android" qui : (1) définit une fonction `_updateAppHeight()` qui fait `document.documentElement.style.setProperty('--app-h', window.innerHeight + 'px')` ; (2) l'appelle immédiatement ; (3) l'écoute sur `window.resize` avec un debounce de 80 ms ; (4) l'écoute sur `window.visualViewport?.addEventListener('resize', ...)` avec le même debounce ; (5) l'appelle aussi sur `touchend` avec un `setTimeout` de 300 ms (fallback). Dans `style.css`, remplace tous les `100vh` dans les sélecteurs `.app`, `#app-launcher`, `.screen`, `.screen.active` par `var(--app-h, 100vh)`. Ne modifie rien d'autre.

---

#### TÂCHE 2 — Rechargement automatique du Service Worker sans boucle infinie
**Problème** : quand un nouveau SW prend le contrôle (`controllerchange`), `window.location.reload()` peut se déclencher plusieurs fois d'affilée si plusieurs onglets sont ouverts, créant une boucle de rechargement.
**Difficulté** : 🟢 Facile

**Ce qu'il faut faire** : dans `app.js` (section §20 / enregistrement SW), ajouter un flag `let _reloading = false` et conditionner le `reload()` à ce flag : `if (!_reloading) { _reloading = true; window.location.reload(); }`. L'événement `controllerchange` sur `navigator.serviceWorker` déclenche ce bloc.

**Prompt :**
> Dans mon `app.js` (joint), dans la section d'enregistrement du Service Worker (cherche `serviceWorker.register`), remplace le simple enregistrement par ce pattern : après le `.then()`, ajoute `let _reloading = false;` puis `navigator.serviceWorker.addEventListener('controllerchange', function() { if (!_reloading) { _reloading = true; window.location.reload(); } });`. Conserve le `catch` existant. Ne modifie rien d'autre dans le fichier.

---

#### TÂCHE 3 — Interruption TTS quand l'app passe en arrière-plan
**Problème** : si l'utilisateur reçoit un appel ou change d'application pendant qu'un mot est prononcé, la synthèse vocale continue à parler en arrière-plan.
**Difficulté** : 🟢 Facile

**Ce qu'il faut faire** : dans `app.js`, ajouter un listener sur `document.addEventListener('visibilitychange', ...)` qui appelle `speechSynthesis.cancel()` quand `document.hidden === true`. À placer dans la section TTS (§3 ou fin de fichier).

**Prompt :**
> Dans mon `app.js` (joint), dans la section TTS (après la fonction `_doSpeak` ou `speak`), ajoute ces lignes : `document.addEventListener('visibilitychange', function() { if (document.hidden && window.speechSynthesis) { speechSynthesis.cancel(); } });`. Ajoute un commentaire `// §3c — Interruption TTS à la mise en arrière-plan` avant ces lignes. Ne modifie rien d'autre.

---

### 🟠 PRIORITÉ 2 — Manques fonctionnels importants

---

#### TÂCHE 4 — Algorithme Levenshtein dans l'onglet Répète
**Problème** : la comparaison vocale actuelle (`spoken === expected || spoken.indexOf(expected) !== -1 || expected.indexOf(spoken) !== -1`) est trop stricte pour les phrases longues et trop permissive pour les mots courts. Taphad'Meuh utilise la distance de Levenshtein avec une tolérance de 25 %, ce qui est beaucoup plus adapté pédagogiquement.
**Difficulté** : 🟡 Moyen

**Ce qu'il faut faire** : dans `app.js`, ajouter la fonction `_levenshtein(a, b)` (algorithme DP classique), puis créer `_speechMatch(spoken, expected)` qui remplace la comparaison inline actuelle et applique : (1) correspondance exacte ou inclusion pour les textes courts (≤ 3 caractères), (2) Levenshtein avec tolérance `Math.floor(expected.length * 0.25)` pour les mots normaux. Remplacer toutes les comparaisons `ok = (spoken === expected) || ...` dans `startMicReco()` (flashcards) et `_rpStartMic()` (Répète) par `_speechMatch(spoken, expected)`.

**Prompt :**
> Voici mon `app.js` (joint). Effectue ces 3 modifications :
> 1. Après la fonction `_normalizeSpeech`, ajoute la fonction `_levenshtein(a, b)` qui calcule la distance d'édition entre deux chaînes via programmation dynamique (tableau 2D, coût substitution = 1, insertion = 1, suppression = 1).
> 2. Ajoute ensuite la fonction `_speechMatch(spoken, expected)` qui retourne `true` si : (a) les deux chaînes sont identiques ; (b) l'une contient l'autre ; (c) la longueur de `expected` est ≤ 3 et elles sont identiques (pas de tolérance sur les mots très courts) ; (d) sinon, `_levenshtein(spoken, expected) <= Math.floor(expected.length * 0.25)`.
> 3. Dans `startMicReco()` (flashcards), remplace `var ok = (spoken === expected) || spoken.indexOf(expected) !== -1 || expected.indexOf(spoken) !== -1;` par `var ok = _speechMatch(spoken, expected);`.
> 4. Dans `_rpStartMic()` (onglet Répète), fais la même substitution.
> Ne modifie rien d'autre.

---

#### TÂCHE 5 — Mode sombre automatique
**Problème** : VACHÉBO n'a pas de mode sombre. Sur les téléphones configurés en dark mode, l'app reste criarde en mode clair.
**Difficulté** : 🟡 Moyen

**Ce qu'il faut faire** : dans `style.css`, ajouter une section `§24b — Mode sombre` avec un bloc `@media (prefers-color-scheme: dark)` qui redéfinit les tokens CSS (`--c-bg`, `--c-card`, `--c-text`, etc.) en variantes sombres pour chaque thème (`html.theme-french` et `html.theme-spain`). Adapter les backgrounds, les couleurs de texte, les bordures et les fonds de cartes. Ne pas toucher aux couleurs d'accentuation (bleu FR, rouge ES) qui doivent rester lisibles.

**Prompt :**
> Voici mon `style.css` (joint). À la fin du fichier, ajoute une section commentée `/* §24b — MODE SOMBRE */` contenant un bloc `@media (prefers-color-scheme: dark)`. Dans ce bloc, redéfinis les custom properties CSS suivantes sur `html.theme-french` et `html.theme-spain` séparément : `--c-bg` (fond principal → gris très sombre ~#1a1a2e), `--c-card` (fond des cartes → #2a2a3e), `--c-text` (texte principal → #e8e8f0), `--c-text-sub` (texte secondaire → #aaaacc), `--c-border` (bordures → rgba(255,255,255,0.1)). Les couleurs d'accentuation (bleu FR, rouge ES, or) ne doivent pas changer. Adapte aussi `body { background-color }` en dark. Teste que tous les composants utilisent bien ces variables (flashcards, quiz, dialogues, chips). Commente chaque bloc clairement.

---

#### TÂCHE 6 — Transitions de navigation entre écrans (slides directionnels)
**Problème** : les changements d'écran dans VACHÉBO sont instantanés (display none/flex). Taphad'Meuh a des animations slides directionnelles (gauche/droite selon la direction de navigation) qui donnent une impression d'application native.
**Difficulté** : 🔴 Complexe

**Ce qu'il faut faire** : dans `style.css`, ajouter les classes d'animation `slide-in-right`, `slide-out-left`, `slide-in-left`, `slide-out-right` (transitions `transform: translateX()` sur 280 ms), et respecter `prefers-reduced-motion` (désactiver les animations si l'utilisateur l'a configuré). Dans `app.js`, modifier `showScreen(id)` pour accepter un paramètre `dir` ('forward'/'back'), définir un ordre des écrans `_SCREEN_ORDER = ['app-launcher','sections','lesson']`, calculer automatiquement la direction si elle n'est pas fournie en comparant les index, appliquer les classes CSS sur l'écran sortant et l'entrant, et retirer les classes après la transition.

**Prompt :**
> Voici mon `style.css` (joint) et mon `app.js` (joint).
>
> **Dans `style.css`**, ajoute avant le premier écran (§5 Lanceur) une section `/* §1b — Transitions de navigation */` avec les 4 classes d'animation :
> - `.slide-in-right` : entre par la droite (translateX 100% → 0)
> - `.slide-out-left` : sort par la gauche (translateX 0 → -100%)
> - `.slide-in-left` : entre par la gauche (translateX -100% → 0)
> - `.slide-out-right` : sort par la droite (translateX 0 → 100%)
> Durée : 280 ms, easing : ease. Ajoute `@media (prefers-reduced-motion: reduce) { .slide-in-right, .slide-out-left, .slide-in-left, .slide-out-right { animation: none; transition: none; } }`.
>
> **Dans `app.js`**, modifie la fonction `showScreen(id)` pour : (1) définir `const _SCREEN_ORDER = ['app-launcher','sections','lesson']` au-dessus ; (2) accepter un second paramètre optionnel `dir` ('forward'/'back'/null) ; (3) si `dir` est null, le calculer automatiquement en comparant l'index de l'écran courant actif et de l'écran cible dans `_SCREEN_ORDER` ; (4) appliquer `slide-out-left` sur l'écran actif et `slide-in-right` sur le nouvel écran si dir='forward', ou les inverses si dir='back' ; (5) retirer les classes après 300 ms via `setTimeout`. Conserve tout le reste de la fonction (`scrollTo`, `renderSections`, etc.).

---

#### TÂCHE 7 — Barre de navigation basse
**Problème** : VACHÉBO n'a pas de barre de navigation persistante en bas d'écran. Pour accéder au guide ou revenir aux modules depuis la leçon, l'utilisateur doit utiliser les boutons d'en-tête qui sont parfois peu visibles sur mobile.
**Difficulté** : 🔴 Complexe

**Ce qu'il faut faire** : dans `index.html`, ajouter une `<nav class="bottom-nav">` avec 3 boutons (🏠 Modules, ❓ Guide, 🔄 Changer de langue) visibles sur tous les écrans sauf le lanceur. Dans `style.css`, ajouter les styles de la barre (fixée en bas, hauteur 56 px, fond thème, icônes + libellés bilingues). Dans `app.js`, créer `_updateBottomNav(screenId)` appelée par `showScreen()` pour masquer la barre sur le lanceur, synchroniser le bouton actif, et adapter les libellés bilingues via `L()`.

**Prompt :**
> Voici mes fichiers `index.html`, `app.js` et `style.css` (joints).
>
> **Dans `index.html`**, avant `</div><!-- /app -->`, ajoute ce HTML :
> ```html
> <nav class="bottom-nav" id="bottomNav" style="display:none;">
>   <button class="bnav-btn" id="bnavModules" onclick="showScreen('sections')">
>     <span class="bnav-icon">🏠</span>
>     <span class="bnav-label" id="bnavModulesLabel">Modules</span>
>   </button>
>   <button class="bnav-btn" id="bnavGuide" onclick="showGuide()">
>     <span class="bnav-icon">❓</span>
>     <span class="bnav-label" id="bnavGuideLabel">Guide</span>
>   </button>
>   <button class="bnav-btn" id="bnavLang" onclick="showLauncher()">
>     <span class="bnav-icon">🌍</span>
>     <span class="bnav-label" id="bnavLangLabel">Langue</span>
>   </button>
> </nav>
> ```
>
> **Dans `style.css`**, ajoute une section `§26 — Barre de navigation basse` : la `.bottom-nav` est `position:fixed; bottom:0; left:50%; transform:translateX(-50%); width:100%; max-width:480px; height:56px; display:flex; align-items:center; justify-content:space-around; background:var(--c-primary); z-index:1000`. Chaque `.bnav-btn` est `flex:1; display:flex; flex-direction:column; align-items:center; background:none; border:none; color:rgba(255,255,255,0.85); font-size:0.65rem; gap:2px; cursor:pointer`. `.bnav-btn.active` a `color:#fff; font-weight:bold`. Ajoute `padding-bottom:56px` sur `.screen.active` pour compenser la barre.
>
> **Dans `app.js`**, crée la fonction `_updateBottomNav(screenId)` qui : (1) masque `#bottomNav` si `screenId === 'app-launcher'`, l'affiche sinon ; (2) met la classe `active` sur `#bnavModules` si screenId === 'sections', sur `#bnavGuide` jamais (c'est une modale), rien sinon ; (3) met à jour les libellés via `L()` : `bnavModulesLabel` → `L('Módulos','Modules')`, `bnavGuideLabel` → `L('Guía','Guide')`, `bnavLangLabel` → `L('Idioma','Langue')`. Appelle `_updateBottomNav(id)` à la fin de `showScreen(id)` et dans `initApp()`.

---

### 🟡 PRIORITÉ 3 — Améliorations UX souhaitables

---

#### TÂCHE 8 — Spinner de chargement des données
**Problème** : quand l'utilisateur clique "Continuer", le bouton se désactive et son texte change en "⏳ Chargement…" mais il n'y a pas de spinner visuel centré à l'écran pendant l'injection du fichier data (qui peut prendre 1–2 s sur connexion lente).
**Difficulté** : 🟢 Facile

**Ce qu'il faut faire** : dans `app.js`, créer `_showSpinner()` et `_hideSpinner()` qui injectent/retirent dynamiquement un `<div id="app-spinner">` dans `<body>` avec une animation CSS de rotation. Appeler `_showSpinner()` dans `loadDataForMode()` juste avant l'injection du `<script>`, et `_hideSpinner()` dans le `callback` (avant `initApp()`). Dans `style.css`, ajouter les styles du spinner (overlay semi-transparent + cercle animé avec `@keyframes spin`).

**Prompt :**
> Voici mon `app.js` et mon `style.css` (joints). 
>
> **Dans `app.js`**, ajoute ces deux fonctions avant `loadDataForMode()` :
> ```js
> function _showSpinner() {
>   var s = document.getElementById('app-spinner');
>   if (!s) {
>     s = document.createElement('div');
>     s.id = 'app-spinner';
>     document.body.appendChild(s);
>   }
>   s.style.display = 'flex';
> }
> function _hideSpinner() {
>   var s = document.getElementById('app-spinner');
>   if (s) s.style.display = 'none';
> }
> ```
> Puis dans `loadDataForMode()`, appelle `_showSpinner()` juste avant `document.head.appendChild(script)`, et `_hideSpinner()` comme première ligne du `script.onload` (avant `callback()`).
>
> **Dans `style.css`**, ajoute en fin de fichier une section `/* SPINNER DE CHARGEMENT */` :
> `#app-spinner { position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(255,255,255,0.85); display:none; align-items:center; justify-content:center; z-index:99999; }` et un pseudo-élément `#app-spinner::after { content:''; width:48px; height:48px; border:5px solid #eee; border-top-color:var(--c-primary,#002395); border-radius:50%; animation:spin 0.8s linear infinite; }` avec `@keyframes spin { to { transform:rotate(360deg); } }`.

---

#### TÂCHE 9 — Animation confetti à la première obtention de ⭐⭐⭐
**Problème** : obtenir 3 étoiles pour la première fois est un moment fort — Taphad'Meuh le célèbre avec 22 particules CSS animées. VACHÉBO ne fait rien de spécial.
**Difficulté** : 🟡 Moyen

**Ce qu'il faut faire** : dans `app.js`, ajouter `_showConfetti()` qui génère dynamiquement 22 `<div class="confetti-particle">` avec des positions, tailles, couleurs et délais aléatoires, les insère dans un overlay `<div id="confetti-overlay">`, et détruit l'overlay après 2,4 s. L'appeler dans `markDone(id, pct)` uniquement quand `newStars === 3` ET que l'entrée n'existait pas encore en base (première fois). Dans `style.css`, ajouter les animations `@keyframes confetti-fall` et `@keyframes confetti-spin` et les styles des particules. Les couleurs doivent s'adapter au thème actif (`theme-french` → bleu/blanc/rouge, `theme-spain` → rouge/or).

**Prompt :**
> Voici mon `app.js` et mon `style.css` (joints).
>
> **Dans `app.js`**, ajoute la fonction `_showConfetti()` qui :
> 1. Crée un `<div id="confetti-overlay">` en `position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:99998` et l'ajoute au `<body>`.
> 2. Génère 22 `<div class="confetti-particle">` avec pour chacun : `left` aléatoire (0–100%), `width` et `height` aléatoires (8–16 px), `background` aléatoire parmi les couleurs du thème actif (si `document.documentElement.classList.contains('theme-france')` : `['#002395','#ED2939','#ffffff','#FFD700']`, sinon : `['#C60B1E','#FFD700','#F1BF00','#ffffff']`), `animation-delay` aléatoire (0–1.5 s), `animation-duration` aléatoire (1.5–2.5 s).
> 3. Supprime l'overlay après 2400 ms via `setTimeout`.
>
> Dans `markDone(id, pct)`, appelle `_showConfetti()` si `newStars === 3 && !existing` (première fois 3 étoiles).
>
> **Dans `style.css`**, ajoute la section `/* §CONFETTI */` : `.confetti-particle { position:absolute; top:-20px; border-radius:3px; }` avec `@keyframes confetti-fall { to { transform: translateY(110vh) rotate(720deg); opacity:0; } }` appliqué en `animation: confetti-fall var(--dur) var(--delay) ease-in forwards`.

---

#### TÂCHE 10 — Réinitialisation globale de progression avec modale de confirmation
**Problème** : VACHÉBO ne permet de réinitialiser que thème par thème. Taphad'Meuh a un bouton "Tout réinitialiser" protégé par une modale de confirmation, pratique pour repartir de zéro ou tester une autre variante.
**Difficulté** : 🟢 Facile

**Ce qu'il faut faire** : dans `index.html`, ajouter une modale `<div id="confirm-modal">` avec message bilingue + boutons "Confirmer" / "Annuler". Dans `app.js`, créer `showResetConfirm()` (affiche la modale), `confirmReset()` (vide `done[]`, efface `localStorage`, ferme la modale, appelle `renderSections()`), `cancelReset()` (ferme la modale). Ajouter un bouton "🗑️ Tout réinitialiser" dans `renderSections()` dans le footer. Dans `style.css`, ajouter les styles de la modale de confirmation.

**Prompt :**
> Voici mes fichiers `index.html`, `app.js` et `style.css` (joints).
>
> **Dans `index.html`**, avant `</div><!-- /app -->`, ajoute la modale :
> ```html
> <div id="confirm-modal" class="modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:9999; align-items:center; justify-content:center;">
>   <div class="modal-content" style="background:#fff; margin:0 20px; padding:25px; border-radius:15px; text-align:center; max-width:340px;">
>     <p id="confirmMsg" style="font-size:0.95rem; color:#555; margin-bottom:20px;"></p>
>     <div style="display:flex; gap:12px; justify-content:center;">
>       <button onclick="cancelReset()" style="padding:10px 20px; border-radius:8px; border:2px solid #ccc; background:#fff; cursor:pointer; font-weight:bold;">Annuler / Cancelar</button>
>       <button onclick="confirmReset()" style="padding:10px 20px; border-radius:8px; border:none; background:#c0392b; color:#fff; cursor:pointer; font-weight:bold;">🗑️ Confirmer</button>
>     </div>
>   </div>
> </div>
> ```
>
> **Dans `app.js`**, ajoute ces 3 fonctions :
> ```js
> function showResetConfirm() {
>   var msg = L('¿Seguro que quieres borrar toda tu progresión? Esta acción es irreversible.', 'Voulez-vous vraiment effacer toute votre progression ? Cette action est irréversible.');
>   document.getElementById('confirmMsg').textContent = msg;
>   document.getElementById('confirm-modal').style.display = 'flex';
> }
> function confirmReset() {
>   done = [];
>   try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
>   document.getElementById('confirm-modal').style.display = 'none';
>   renderSections();
>   _showToast(L('✅ Progresión borrada.', '✅ Progression effacée.'));
> }
> function cancelReset() {
>   document.getElementById('confirm-modal').style.display = 'none';
> }
> ```
> Dans `renderSections()`, dans la génération du footer, ajoute le bouton : `<button onclick="showResetConfirm()" style="margin-top:8px; padding:6px 14px; border-radius:50px; border:1.5px solid #c0392b; color:#c0392b; background:transparent; font-size:0.8rem; cursor:pointer; font-weight:700;">${L('🗑️ Borrar toda la progresión', '🗑️ Tout réinitialiser')}</button>`.

---

#### TÂCHE 11 — Attribut `lang` HTML mis à jour selon le mode
**Problème** : `<html lang="fr">` est fixe dans `index.html`. Quand un hispanophone utilise l'app en mode `learn_french`, l'interface est en espagnol mais le `lang` reste `"fr"`, ce qui induit les lecteurs d'écran en erreur.
**Difficulté** : 🟢 Facile

**Ce qu'il faut faire** : dans `app.js`, dans `initApp(mode)`, ajouter `document.documentElement.lang = (mode === 'learn_french') ? 'es' : 'fr';` juste après la ligne qui pose la classe CSS du thème. Cela dit aux lecteurs d'écran que la langue principale de l'interface est l'espagnol (quand on apprend le français) ou le français (quand on apprend l'espagnol).

**Prompt :**
> Dans mon `app.js` (joint), dans la fonction `initApp(mode)`, dans le bloc `if (mode === 'learn_french')`, ajoute la ligne `document.documentElement.lang = 'es';` juste après `document.documentElement.className = 'theme-french';`. Dans le bloc `else if (mode === 'learn_spain')`, ajoute `document.documentElement.lang = 'fr';` juste après `document.documentElement.className = 'theme-spain region-' + currentRegion;`. Dans `showLauncher()`, ajoute `document.documentElement.lang = 'fr';` à la fin (retour à la langue par défaut quand personne n'est connecté). Ne modifie rien d'autre.

---

#### TÂCHE 12 — Navigation prev/next entre modules (leçon)
**Problème** : depuis la leçon, l'utilisateur doit revenir aux Sections pour changer de module. Taphad'Meuh a des boutons ← → directement dans l'en-tête de leçon pour naviguer entre les modules du même niveau sans quitter l'écran.
**Difficulté** : 🟡 Moyen

**Ce qu'il faut faire** : dans `app.js`, créer `lessonNav(delta)` qui trouve l'index du thème courant (`CT`) dans `ALL_THEMES`, calcule `(index + delta + total) % total`, et appelle `openTheme(ALL_THEMES[newIndex].id)`. Dans `index.html`, ajouter deux boutons `<button onclick="lessonNav(-1)">←</button>` et `<button onclick="lessonNav(1)">→</button>` dans `.lesson-header`. Dans `style.css`, styliser ces boutons.

**Prompt :**
> Voici mes fichiers `index.html`, `app.js` et `style.css` (joints).
>
> **Dans `app.js`**, ajoute après `openTheme()` la fonction :
> ```js
> function lessonNav(delta) {
>   if (!CT || !ALL_THEMES.length) return;
>   var idx = ALL_THEMES.findIndex(function(t) { return t.id === CT.id; });
>   if (idx === -1) return;
>   var newIdx = (idx + delta + ALL_THEMES.length) % ALL_THEMES.length;
>   openTheme(ALL_THEMES[newIdx].id);
> }
> ```
>
> **Dans `index.html`**, dans `.lesson-header`, ajoute avant le `<button class="back-btn">` existant : `<button class="lesson-nav-btn" onclick="lessonNav(-1)" id="lessonPrevBtn" aria-label="Module précédent">‹</button>` et après le titre : `<button class="lesson-nav-btn" onclick="lessonNav(1)" id="lessonNextBtn" aria-label="Module suivant">›</button>`.
>
> **Dans `style.css`**, ajoute dans la section leçon : `.lesson-nav-btn { background:none; border:none; font-size:1.8rem; color:var(--c-primary); cursor:pointer; padding:0 8px; line-height:1; opacity:0.7; } .lesson-nav-btn:hover { opacity:1; }`.

---

### 🔵 PRIORITÉ 4 — Améliorations PWA / robustesse

---

#### TÂCHE 13 — Page HTML offline complète dans le Service Worker
**Problème** : quand VACHÉBO est ouverte hors ligne pour la première fois (avant tout chargement), le navigateur affiche sa propre page d'erreur générique. Taphad'Meuh génère une belle page HTML inline bilingue avec un bouton "Réessayer".
**Difficulté** : 🟡 Moyen

**Ce qu'il faut faire** : dans `sw.js`, ajouter la fonction `_offlinePage()` qui retourne une chaîne HTML complète (page de secours bilingue avec emoji, message FR+ES, bouton "Réessayer"). Dans le handler `fetch`, pour les requêtes de navigation (`request.mode === 'navigate'`), si la ressource n'est pas en cache et que le réseau est absent, servir `_offlinePage()` via `new Response(html, { headers: { 'Content-Type': 'text/html' } })`.

**Prompt :**
> Voici mon `sw.js` (joint).
>
> Ajoute en haut du fichier (après les constantes) la fonction `_offlinePage()` qui retourne cette chaîne HTML :
> ```js
> function _offlinePage() {
>   return '<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>VACHÉBO — Hors ligne</title><style>body{font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#FCFFEE;margin:0;text-align:center;padding:20px}div{max-width:380px}h1{font-size:3rem;margin:0}p{color:#555;margin:16px 0}button{padding:12px 28px;background:#002395;color:#fff;border:none;border-radius:50px;font-size:1rem;cursor:pointer;font-weight:bold}</style></head><body><div><h1>🌐</h1><p><strong>Hors ligne / Sin conexión</strong><br>L\'application n\'est pas encore disponible hors ligne.<br><em>La aplicación todavía no está disponible sin conexión.</em></p><button onclick="location.reload()">🔄 Réessayer / Reintentar</button></div></body></html>';
> }
> ```
>
> Dans le handler `fetch`, dans le bloc de traitement des ressources locales (`caches.match(event.request).then(function(cachedResponse)`), si `cachedResponse` est null et que le `fetch(event.request)` échoue (`.catch`), et si `event.request.mode === 'navigate'`, retourne `new Response(_offlinePage(), { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } })`. Sinon, retourne null. Ne modifie pas le reste du Service Worker.

---

#### TÂCHE 14 — Versionnement automatique du cache (GitHub Actions)
**Problème** : le `CACHE_NAME` est fixe (`'vachebo-v1'`) et doit être incrémenté manuellement à chaque déploiement. Si on oublie, les utilisateurs gardent l'ancien cache indéfiniment.
**Difficulté** : 🟢 Facile

**Ce qu'il faut faire** : dans `sw.js`, remplacer `const CACHE_VERSION = 'v1'` par `const CACHE_VERSION = 'GITHUB_RUN_NUMBER_PLACEHOLDER'`. Créer un fichier `.github/workflows/deploy.yml` (ou modifier l'existant) avec une étape qui fait un `sed` pour remplacer `GITHUB_RUN_NUMBER_PLACEHOLDER` par le numéro réel `${{ github.run_number }}` avant le déploiement.

**Prompt :**
> Dans mon `sw.js` (joint), remplace la ligne `const CACHE_VERSION = 'v1';` par `const CACHE_VERSION = '__BUILD_NUMBER__';`. Crée ensuite un fichier `.github/workflows/deploy.yml` contenant un workflow GitHub Actions qui : (1) se déclenche sur `push` sur la branche `main` ; (2) a une étape `Set cache version` qui fait `sed -i "s/__BUILD_NUMBER__/${{ github.run_number }}/g" sw.js` ; (3) déploie le contenu sur GitHub Pages via `actions/deploy-pages@v2` (ou l'action de déploiement déjà utilisée dans le projet si différente). Adapte le workflow à la structure du dépôt si nécessaire.

---

#### TÂCHE 15 — Manifest PWA : icônes multi-tailles + screenshots
**Problème** : le manifest de VACHÉBO ne déclare qu'une seule icône. Certains navigateurs et stores (Android, Samsung Internet) demandent des tailles spécifiques (192 px, 512 px minimum). Les screenshots améliorent la fiche d'installation sur Android.
**Difficulté** : 🟢 Facile (si les images existent déjà)

**Ce qu'il faut faire** : générer les icônes aux tailles 72, 96, 128, 144, 152, 192, 384, 512 px (maskable et standard) à partir du logo existant. Mettre à jour `manifest.json` pour lister chaque taille avec son `type`, `sizes` et `purpose`. Ajouter 2–3 screenshots de l'application (captures d'écran en 390×844 px) et les déclarer dans le manifest.

**Prompt :**
> Voici mon `manifest.json` actuel (joint) et mon logo `img/Logo-appli-es-fr.png`. Génère les icônes redimensionnées aux tailles 192 et 512 px (maskable) avec Pillow en Python, sauvegarde-les dans `img/icons/`. Mets à jour `manifest.json` pour déclarer les entrées suivantes dans le tableau `icons` : `{ "src": "img/icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any" }`, `{ "src": "img/icons/icon-192-maskable.png", "sizes": "192x192", "type": "image/png", "purpose": "maskable" }`, `{ "src": "img/icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any" }`, `{ "src": "img/icons/icon-512-maskable.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }`. Conserve l'entrée `any` existante. Ajoute aussi `"screenshots": []` comme tableau vide prêt à accueillir les screenshots.

---

### ⚪ PRIORITÉ 5 — Options avancées (selon motivation)

---

#### TÂCHE 16 — Exports PDF (Guide, Vocabulaire, Situation)
**Problème** : VACHÉBO n'a pas d'export PDF. Taphad'Meuh permet d'imprimer/sauvegarder le guide, un tableau de vocabulaire ou un dialogue complet — très utile pour réviser offline sur papier.
**Difficulté** : 🔴 Complexe

**Ce qu'il faut faire** : dans `app.js`, créer 3 fonctions : `_exportGuide()` (génère le guide utilisateur en HTML + CSS print, ouvre dans nouvel onglet, déclenche `window.print()`), `_exportVocab()` (tableau bilingue des mots du thème courant avec conjugaisons), `_exportSituation()` (dialogue en 2 colonnes FR/ES + lexique). Chaque export génère son propre `<html>` inline avec `@media print`, en-tête coloré selon le thème, logo, numérotation des pages. Dans `index.html`/`app.js`, ajouter les boutons export dans les onglets concernés. Dans `style.css`, ajouter les styles des boutons.

**Prompt :**
> Voici mes fichiers `app.js`, `style.css` et `index.html` (joints), ainsi que mon guide Taphad'Meuh (joint) qui décrit les exports PDF aux sections §21.
>
> Ajoute dans `app.js` les 3 fonctions d'export PDF suivantes, en les adaptant à VACHÉBO (thèmes `theme-french`/`theme-spain`, couleurs `#002395`/`#C60B1E`, logo `img/Logo-appli-es-fr.png`, bilingue FR/ES via `L()`) :
> 1. `_exportGuide()` — HTML complet du guide utilisateur (le contenu de `#guideContentFR` ou `#guideContentES` selon le mode actif), avec CSS print.
> 2. `_exportVocab()` — tableau HTML à 3 colonnes (emoji | mot source | mot cible) listant tous les mots de `CT.words`, avec gestion des variantes régionales pour l'espagnol. Si le mot a des conjugaisons (`conj`), les afficher en italique en dessous.
> 3. `_exportSituation()` — le dialogue de `CT.situations[sitIdx]` en 2 colonnes (locuteur | réplique FR | réplique ES), suivi du vocabulaire `CT.vocab` en tableau.
> Chaque fonction ouvre un `window.open()` avec le HTML généré, attend `onload`, puis appelle `w.print()`.
> Dans `switchTab()`, dans le bloc `tab === 'flash'`, ajoute le bouton export vocabulaire. Dans `tab === 'dialog'`, ajoute le bouton export situation.
> Dans `style.css`, ajoute les styles `.export-pdf-btn`.

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

---

## 3. RÉCAPITULATIF GLOBAL

| # | Tâche | Priorité | Difficulté | Fichiers touchés |
|---|---|---|---|---|
| 1 | Fix viewport height Android | 🔴 Bug | 🟢 Facile | `app.js`, `style.css` |
| 2 | Rechargement SW sans boucle | 🔴 Bug | 🟢 Facile | `app.js` |
| 3 | Interruption TTS arrière-plan | 🔴 Bug | 🟢 Facile | `app.js` |
| 4 | Levenshtein dans Répète | 🟠 Fonctionnel | 🟡 Moyen | `app.js` |
| 5 | Mode sombre | 🟠 Fonctionnel | 🟡 Moyen | `style.css` |
| 6 | Transitions slides navigation | 🟠 Fonctionnel | 🔴 Complexe | `app.js`, `style.css` |
| 7 | Barre de navigation basse | 🟠 Fonctionnel | 🔴 Complexe | `index.html`, `app.js`, `style.css` |
| 8 | Spinner de chargement | 🟡 UX | 🟢 Facile | `app.js`, `style.css` |
| 9 | Confetti ⭐⭐⭐ | 🟡 UX | 🟡 Moyen | `app.js`, `style.css` |
| 10 | Réinit. globale + modale confirmation | 🟡 UX | 🟢 Facile | `index.html`, `app.js` |
| 11 | Attribut `lang` HTML | 🟡 Accessibilité | 🟢 Facile | `app.js` |
| 12 | Navigation prev/next modules | 🟡 UX | 🟡 Moyen | `index.html`, `app.js`, `style.css` |
| 13 | Page HTML offline SW | 🔵 PWA | 🟡 Moyen | `sw.js` |
| 14 | Versionnement auto cache | 🔵 DevOps | 🟢 Facile | `sw.js`, `.github/workflows/` |
| 15 | Manifest PWA multi-tailles | 🔵 PWA | 🟢 Facile | `manifest.json`, `img/icons/` |
| 16 | Exports PDF (3 types) | ⚪ Avancé | 🔴 Complexe | `app.js`, `style.css`, `index.html` |
| 17 | Fallbacks SVG Service Worker | ⚪ Avancé | 🟡 Moyen | `sw.js` |

**Estimation globale si toutes les tâches sont réalisées : +2 298 lignes de code environ (similaire à la différence actuelle entre les deux apps).**

---

*Document généré à partir de la lecture complète des 7 fichiers sources de VACHÉBO et du guide technique de Taphad'Meuh · © Juin 2026*
