# 🐄 Bilan technique — VACHÉBO · Français ↔ Espagnol
*Juin 2026 — Sébastien Godet*

---

## 📁 Vue d'ensemble des fichiers

| Fichier | Lignes | Rôle |
|---|---|---|
| `index.html` | 1 388 | Structure HTML — 4 écrans + 2 modales + guide intégré, zéro logique |
| `css/style.css` | 2 447 | Styles — thème dynamique, variantes régionales, tous les composants visuels |
| `js/app.js` | 3 019 | Moteur applicatif — logique complète (18 sections) |
| `js/data-fr.js` | 1 494 | Dataset — mode "Apprendre le Français" (48 thèmes) |
| `js/data-es.js` | 850 | Dataset — mode "Apprendre l'Espagnol" (48 thèmes) |
| `sw.js` | 199 | Service Worker — cache hybride (Cache First / Network First) |
| `manifest.json` | 23 | Manifest PWA — icône, orientation, couleur de thème |

**Total : ~9 420 lignes — zéro dépendance, zéro framework.**

---

## 🏗️ Architecture

### Principe général
Application web progressive (PWA) **mono-fichier HTML**, entièrement en **Vanilla JS ES2020**, sans build step ni framework. Fonctionne 100 % hors-ligne après la première visite.

### Chargement conditionnel des données
Au lieu de charger un fichier de données monolithique, `app.js` injecte dynamiquement un `<script>` selon le mode choisi par l'utilisateur via `loadDataForMode()`. Ce mécanisme réduit le volume de JS parsé au démarrage de ~50 %. Un cache mémoire (`typeof ALL_THEMES_FR !== 'undefined'`) évite tout rechargement inutile si l'utilisateur revient au launcher et choisit la même langue.

```
Clic carte langue → showLauncherVariant(mode) → Vue B (sélecteur variante)
  → clic Continuer → loadDataForMode() → injecte data-fr.js | data-es.js
  → callback : ALL_THEMES = [...] → initApp(mode) → showScreen('sections')
  → _maybeAutoShowGuide()
```

### Séparation des responsabilités
- `index.html` → structure HTML pure, **aucun onclick de logique métier** (optimisé), guide utilisateur intégré bilingue
- `style.css` → tout le visuel via **tokens CSS** (`var(--c-*)`)
- `app.js` → toute la logique ; rendu HTML généré par JS dans les conteneurs prévus
- `data-fr.js / data-es.js` → contenu pur (tableaux de données), aucun code

### Fichiers concernés par thème
```
Architecture générale        → index.html (entête), app.js §0–3, sw.js
Thème visuel / design        → style.css §2–4 (tokens, thèmes FR/ES)
Variantes régionales CSS     → style.css §15
Navigation entre écrans      → app.js §5 (showScreen)
Données / contenu            → data-fr.js, data-es.js
Guide utilisateur            → index.html (#guideContentFR / #guideContentES), app.js §17
PWA / hors-ligne             → sw.js, manifest.json
```

---

## 🎨 Design UX — `style.css` (2 447 lignes, 17 sections)

### Système de thème dynamique
Un seul toggle de classe sur `<html>` bascule l'intégralité du rendu :
- `html.theme-french` → bleu `#002395` / blanc / rouge (tricolore FR)
- `html.theme-spain` → rouge-or (couleurs ES) + classe supplémentaire `region-XX`

Tous les composants utilisent des **custom properties CSS** (`var(--c-*)`), définies en §2 (`:root` fallback, L.~75) et surchargées en §3 et §4. Modifier un thème = changer une palette unique.

### Variantes régionales (§15 — L.~920)
7 classes `html.theme-spain.region-XX` surchargent les couleurs d'accent selon le pays hispanophone choisi (ES, MX, CO, AR, PE, VE, EC). Appliquées dynamiquement par `pickRegion()` dans `app.js`.

### Composants visuels notables (avec localisation)

| Composant | Section style.css | Ligne approx. |
|---|---|---|
| Écran Lanceur (cartes + Vue B) | §5 | ~245 |
| Écran Accueil #home | §6 | ~330 |
| Grille Sections (accordéons Niv. 1/2) | §7 | ~420 |
| Écran Leçon (onglets) | §8 | ~490 |
| Flashcards (recto/verso, flip) | §9 | ~530 |
| Grille Alphabet | §10 | ~610 |
| Quiz (options, feedback) | §11 | ~660 |
| Dialogues / Situations (bulles) | §12 | ~730 |
| Vocabulaire (chips cliquables) | §13 | ~800 |
| Onglet Répète (micro, feedback) | §14 | ~850 |
| Variantes régionales hispaniques | §15 | ~920 |
| Modales Guide + Remerciements | §16 | ~990 |
| Footer commun | §17 | ~1 700 |

### Points UX avancés
- **Responsive tablette/desktop** : §1 L.~146 — fond quadrillé, `.app` présentée en carte flottante avec ombre portée à partir de 768 px
- **Focus clavier** : `outline` visible WCAG-compliant + `keydown` global dans `app.js` (Entrée/Espace sur `role="button"`)
- **Accordéons max-height dynamique** : calculée via `body.scrollHeight` à l'ouverture (évite la troncature des sections longues type « Configurer l'audio »)
- **Anti-flash tap mobile** : `-webkit-tap-highlight-color: transparent` global

---

## 🧭 Flux utilisateur — `app.js`

### Flux complet (nouveau flux sans écran Home intermédiaire)
```
[Lanceur Vue A]  → choix de langue → showLauncherVariant()
       ↓
[Lanceur Vue B]  → sélecteur de variante régionale + bouton Continuer
       ↓
[loadDataForMode()]  → injection conditionnelle data-fr.js | data-es.js
       ↓
[initApp(mode)]  → configuration thème + données + progression
       ↓
[Guide utilisateur]  → affiché automatiquement à la première visite
       ↓
[Sections #sections]  → grille Niveau 1 + Niveau 2 (accordéons)
       ↓
[Leçon #lesson]  → onglets selon le type de thème
```

### Fonctions clés de navigation
- `showLauncherVariant(mode)` — bascule Launcher Vue A → Vue B, restaure la région préférée, génère le sélecteur
- `initApp(mode)` — configure thème CSS, `voiceLang`, `ALL_THEMES`, `STORAGE_KEY`, puis lance le guide
- `showScreen(id)` — masque tous les écrans, active le demandé, déclenche `renderHome()` ou `renderSections()` selon l'écran
- `showLauncher()` — retour au Launcher Vue A depuis Sections (sans passer par Home)
- `_setLauncherFooterLang(mode)` — adapte la langue du pied de page du Launcher (ES/FR/bilingue)

---

## ⚙️ Fonctionnalités — `app.js` (3 019 lignes, 18 sections)

### §0 Chargement conditionnel — loadDataForMode() (L.~1)
Vérifie si les variables du mode sont déjà en mémoire (`typeof ALL_THEMES_FR`). Sinon, crée une balise `<script>` pointant vers `data-fr.js` ou `data-es.js`, l'injecte dans `<head>`, et appelle le callback à son `onload`. Affiche un toast d'erreur si le réseau est absent.

### §1 Variables d'état globales (L.~75)
`currentMode`, `currentRegion` (défaut `'ES'`), `voiceLang`, `ALL_THEMES`, `STORAGE_KEY`. Variables de session : `CT`, `fcIdx`, `dqStep/Score`, `sitIdx`, `q10Step/Score`, `_currentDynQuiz`, `done[]`.

### §1b Utilitaire bilingue L() (L.~115)
```js
function L(fr, es) { return currentMode === 'learn_french' ? fr : es; }
```
**Toute chaîne de l'interface passe par `L()`** — élimine tous les `if/else` de langue. Complété par `isFrench()`, `langKeys()` (clés `{src, tgt}`), et `_themeTitle()` (résolution bilingue du titre + sous-titre d'un thème, avec gestion de l'alphabet et des sous-titres à `/`).

### §3 Point d'entrée — initApp(mode) (L.~165)
Réinitialise les tableaux, remet `_spanishVoice` à `undefined`, configure `voiceLang`, `ALL_THEMES`, `STORAGE_KEY` selon le mode. Appelle `loadDone()`, puis `showScreen('sections')` et `_maybeAutoShowGuide()`.

### §3 Synthèse vocale TTS (L.~275)
**Cascade de voix pour l'Espagnol** : `_resolveSpanishVoice()` cherche d'abord la voix exacte (ex : `es-MX` pour le Mexique), puis tout espagnol disponible, puis la voix par défaut. Le résultat est mis en cache dans `_spanishVoice`. Toast de notification à la première résolution. Lecture séquentielle sur `/` avec 2 s de délai entre les parties. Indicateur discret `🔇 Audio indisponible` si `speechSynthesis` échoue (iOS avant première interaction tactile).

### §3b Retour haptique (L.~430)
`navigator.vibrate()` — 30 ms sur bonne réponse, `[30,60,30]` sur erreur. Silencieux sur les plateformes non compatibles.

### §4 Persistance progression — Étoiles ⭐ (L.~455)
```
Score ≥ 50% → ⭐   Score ≥ 75% → ⭐⭐   Score = 100% → ⭐⭐⭐
```
Les étoiles ne diminuent jamais (meilleur score conservé). `localStorage` par mode (`pe_es_fr_done_v1` / `pe_fr_es_done_v1`). Réinitialisation par thème individuel via bouton 🔄 sur la carte.

### §4b Restauration de session quiz (L.~500)
`sessionStorage` sauvegarde l'état complet du quiz (`themeId`, onglet, étape, score, questions dynamiques) après chaque réponse. Reprise automatique si l'utilisateur revient sur l'onglet. Effacé à la fermeture complète du navigateur.

### §5 Navigation (L.~560)
`showScreen(id)` masque tous les `.screen`, active le demandé et remonte en haut via `window.scrollTo(0, 0)`. Déclenche le rendu à la demande (`renderHome()` ou `renderSections()`).

### §7 Écran Sections (L.~625)
`renderSections()` génère les grilles Niveau 1 (32 thèmes) et Niveau 2 (16 thèmes) via accordéons (`toggleLevelAcc()`). Carte thème : emoji + nom + sous-titre bilingue + étoiles `⭐☆☆` + bouton 🔄 si complété. Footer dynamique bilingue selon le mode. La `max-height` des accordéons est recalculée après injection des grilles.

### §8 Ouverture d'un thème + onglets (L.~730)
`openTheme(id)` charge le thème, pré-génère `_currentDynQuiz`, tente `_restoreQuizSession()`, puis construit les onglets dynamiquement selon le type :
- **Vocabulaire standard** : 🃏 Cartes + ❓ Quiz + 🎤 Répète
- **Alphabet** : 🔤 Alphabet + 🔊 Quiz Audio
- **Dialogue** : 💬 Dialogue + 📚 Vocabulaire + ❓ Quiz

`switchTab()` réinitialise les variables de quiz et régénère les questions dynamiques à chaque ouverture de l'onglet Quiz.

### §9 Cartes Flash (L.~830)
Navigation prev/next, bouton 🔊 TTS, retournement recto/verso par CSS (classe `flipped`). Gestion des conjugaisons (`card.conj.es / card.conj.fr`). **Résolution de la variante régionale** : `card.variants[currentRegion]` prioritaire sur `card.es`. Mode Alphabet : grille cliquable `pickAlpha()`. Bloc micro `_buildMicZone()` intégré directement dans les flashcards (onglet flash, voir §9b).

### §9b Reconnaissance vocale — Micro flashcards (L.~940)
`startMicReco(word, lang)` + `_normalizeSpeech()` (normalisation sans accents, sans ponctuation, insensible à la casse). Feedback vert ✅ / orange 🔁. Gestion des erreurs `not-allowed` (micro bloqué) avec icône `🚫🎤` et instructions claires.

### §9c Onglet Répète (L.~1 060)
Séquence par mot : prononciation auto → délai adapté via `_rpMicDelay()` (base 1800 ms + 1400 ms par `/` + 90 ms par mot) → micro → feedback → avancement automatique (2500 ms). Contrôles : ⏭ Passer, 🔁 Réentendre. Écran de fin avec score et étoiles.

### §10 Quiz 10 questions — Niveau 1 dynamique (L.~1 225)
`_generateLevel1Quiz(theme)` : questions auto-générées depuis `words`, mélangées (Fisher-Yates). Nombre adapté à la taille : `<10 mots → 3 q`, `10–14 → 5 q`, `15–27 → 8 q`, `>27 → 10 q`. 4 options par question (3 distracteurs + 1 bonne réponse à position aléatoire). La variante régionale est appliquée aux réponses espagnoles. Pour l'alphabet : `quiz10` fixe (12 questions audio). Feedback immédiat couleur + vibration + pronunciation de la bonne réponse, 1,6 s avant question suivante.

### §11 Dialogue / Situations (L.~1 495)
3 situations par module Niveau 2. Sélecteur de situation (`pickSit()`). Bulles gauche/droite avec animation d'apparition progressive (opacité + délai croissant par bulle). Adaptation régionale : `variants` explicite sur la ligne prioritaire sur `_adaptDialogueLine()` (table de substitutions castillan → variante, `_DIALOG_REGIONAL_SUBS`). TTS sur chaque bulle.

### §12 Vocabulaire lexique (L.~1 570)
Chips cliquables avec TTS au tap. Recherche de la variante régionale dans `CT.words` avant affichage. Format données : `'mot_ES = mot_FR'`.

### §13 Quiz Dialogue (L.~1 610)
Quiz fixe (3 questions dans `data-*.js`, champ `quiz`). Même mécanique de feedback et d'étoiles que le quiz vocabulaire, délai 1,5 s.

### §15 Variantes régionales (L.~1 720)
`pickRegion(regionId)` : persiste en `localStorage` (`user_preferred_region`), met à jour `voiceLang` (BCP-47 ex : `es-MX`), applique la classe CSS `region-XX` sur `<html>`, force une nouvelle résolution de voix espagnole, met à jour tous les drapeaux (Launcher, Home, Sections, flashcard inline), rafraîchit l'onglet actif si une leçon est ouverte, et rafraîchit le guide si sa modale ES est ouverte.

`_adaptDialogueLine(esText)` : table de substitutions (autobús → camión/colectivo/bus/micro, coche → carro/auto, móvil → celular, ordenador → computadora, camarero → mesero/mozo, Vale → Sale/Dale/Listo, etc.) appliquées avec word-boundary Unicode (gère ÁÉÍÓÚáéíóúÑñ).

### §17 Guide utilisateur intégré (L.~2 300)
Fusionné directement dans `index.html` sous forme d'une modale plein écran `#guide-modal`, avec deux blocs de contenu (`#guideContentFR` / `#guideContentES`).

**Logique de langue d'affichage** : l'interface du guide est présentée dans la langue maternelle de l'apprenant (opposée à la langue étudiée) :
- `learn_spain` (francophone apprenant ES) → guide en **Français**
- `learn_french` (hispanophone apprenant FR) → guide en **Espagnol**

Affiché automatiquement une seule fois (`_maybeAutoShowGuide()` — flag `pe_guide_seen_v1` global, indépendant du mode). Checkbox "Ne plus afficher" synchronisée entre les 4 occurrences (haut + bas × FR + ES). Accordéons natifs gérés par `toggleAcc()`.

`_refreshGuideRegion()` adapte dynamiquement le bloc ES à `currentRegion` : drapeaux du héros, bandeau d'info, exemple de vocabulaire régional (t-shirt / bus), surbrillance de la carte active dans la grille des variantes.

Contenu du guide (accordéons) :
- Comment ça marche + 4 étapes
- Points forts (8 cartes)
- En chiffres (32 thèmes vocab + 16 dialogues + 7 variantes)
- Variantes régionales hispaniques
- Comparaison avec autres méthodes d'apprentissage
- Guide audio (installation voix par OS : Android / iOS / Windows / Mac)
- Remerciements + À propos (biographie + contact antispam)
- CTA « Ouvrir l'application »

---

## 🌐 PWA & Hors-ligne — `sw.js` (199 lignes) + `manifest.json`

### Service Worker — Stratégie hybride

| Type de ressource | Stratégie | Fallback |
|---|---|---|
| Ressources locales (HTML, CSS, JS, data) | **Cache First + stale-while-revalidate** | — |
| Ressources externes (GitHub raw, Twemoji CDN) | **Network First** | Cache si disponible |

La stratégie Cache First avec **revalidation en arrière-plan** (stale-while-revalidate) sert le cache immédiatement tout en déclenchant silencieusement une requête réseau pour mettre à jour le cache. L'utilisateur voit la nouvelle version à la visite suivante sans attendre.

`SHELL_ASSETS` précachés à l'installation : `index.html`, `css/style.css`, `js/app.js`, `js/data-fr.js`, `js/data-es.js`, `manifest.json`.

`CACHE_NAME` versionné (`vachebo-v1`) — incrémentation manuelle requise à chaque déploiement pour invalider l'ancien cache. Nettoyage automatique à l'activation (`activate`). `skipWaiting()` + `clients.claim()` pour prise de contrôle immédiate.

### Manifest PWA
- 1 icône déclarée (format `any maskable`)
- `orientation: portrait-primary`
- `background_color: #FCFFEE` (crème exact du logo)
- `theme_color: #002395` (bleu FR par défaut)
- `prefer_related_applications: false`

**Note** : le manifest de l'app espagnol-français est plus léger que celui de Taphad'Meuh (pas d'icônes multi-tailles précalculées, pas de screenshots). Point d'amélioration potentiel pour l'installabilité PWA.

---

## 🔧 Maintenance & code — points clés

### Conventions à respecter
- **Toute chaîne UI** passe par `L(fr, es)` — jamais de texte hardcodé en une seule langue
- **Styles visuels** → `style.css` uniquement
- **Couleurs** → toujours `var(--c-*)`, jamais de couleur hardcodée en JS (sauf constructions inline ponctuelles documentées)
- **Drapeaux** → images SVG Twemoji CDN (rendu cohérent Windows) avec emoji de secours
- **Nouvelles sections `app.js`** → ajouter l'entrée dans le plan de sections (L.14–38)

### Points sensibles documentés

| Problème | Solution | Localisation |
|---|---|---|
| Voix espagnole asynchrone | Cascade `_resolveSpanishVoice()` + cache `_spanishVoice` | app.js §3 L.~280 |
| Audio iOS avant interaction | Badge `🔇 Audio indisponible` discret | app.js `_showAudioUnavailable()` L.~375 |
| Apostrophes ES dans onclick HTML | `esc()` et `_escAttr()` | app.js §14 L.~1 660 |
| Accordéons tronqués (contenu long) | `maxHeight = scrollHeight` dynamique au clic | app.js `toggleAcc()` L.~1 715 |
| Quiz état perdu (appel entrant) | `sessionStorage` après chaque réponse | app.js §4b L.~500 |
| Ré-injection script data-*.js | Cache `typeof ALL_THEMES_FR` | app.js §0 L.~55 |
| Handler launcher dupliqué | Handler nommé stocké sur l'élément + `removeEventListener` avant `addEventListener` | app.js `showLauncherVariant()` L.~185 |
| Variante régionale non rafraîchie | `pickRegion()` met à jour onglet actif + guide | app.js §15 L.~1 870 |

### Structure des données — un thème

```js
{
  id: 'salut',             // Identifiant unique (clé de progression)
  level: 1,               // 1 = vocabulaire, 2 = dialogue
  emoji: '👋',
  name: 'Les Salutations', // Titre dans la langue source
  sub: 'Los Saludos',     // Sous-titre dans la langue cible

  // Niveau 1 : tableau de mots
  words: [
    {
      fr: 'Bonjour (le matin)',
      es: 'Buenos días',
      em: '🌅',            // Emoji décoratif (optionnel)
      variants: {          // Variantes régionales (optionnel)
        MX: 'Buenos días',
        AR: 'Buenos días'
      },
      conj: {              // Conjugaisons (verbes uniquement, optionnel)
        fr: ['je suis', 'tu es'],
        es: ['yo soy', 'tú eres']
      }
    }
  ],

  // Niveau 2 : dialogue situationnel
  situations: [
    {
      label: 'Sit. 1',
      img: '🏥',
      dialogue: [
        { s: 'Patient', side: 'left', fr: 'Bonjour.', es: 'Buenos días.' }
      ]
    }
  ],
  vocab: ['camiseta = T-shirt'],  // Niveau 2 uniquement
  quiz: [                          // Niveau 2 : 3 questions fixes
    { q: 'Comment dit-on...?', opts: ['A','B','C','D'], ans: 2 }
  ]
}
```

### Ajouter un thème
1. Ajouter l'objet dans `data-fr.js` ET `data-es.js` (même `id`, même structure)
2. Respecter `level: 1` ou `level: 2` selon le type
3. Pour les mots avec variantes régionales, ajouter la propriété `variants: { MX:..., AR:..., ... }`
4. Mettre à jour le compteur total si > 48 thèmes

### Ajouter une variante régionale
1. Dans `app.js §3` : ajouter le code pays dans `voiceMap`, `langMap`, `flagEmojis`, `_DIALOG_REGIONAL_SUBS`
2. Dans `app.js §15` : ajouter l'entrée dans `renderRegionOptions()` et `_refreshGuideRegion()`
3. Dans `style.css §15` : ajouter la règle `html.theme-spain.region-XX { ... }`
4. Dans `index.html` : ajouter l'`<option>` dans le `<select id="regionSelector">`
5. Dans `data-*.js` : ajouter la clé dans chaque `variants: {}` concerné

---

## 📊 Métriques de l'application

| Indicateur | Valeur |
|---|---|
| Thèmes Niveau 1 (vocabulaire) | 32 |
| Thèmes Niveau 2 (dialogue) | 16 |
| Total thèmes (par mode) | 48 |
| Onglets par thème (vocab) | 3 : Cartes + Quiz + Répète |
| Onglets par thème (dialogue) | 3 : Dialogue + Vocabulaire + Quiz |
| Onglets par thème (alphabet) | 2 : Alphabet + Quiz Audio |
| Modes d'apprentissage | 2 (Apprendre le Français / Apprendre l'Espagnol) |
| Variantes hispaniques | 7 (ES, MX, CO, AR, PE, VE, EC) |
| Progressions indépendantes | 2 (localStorage séparés par mode) |
| Quiz dynamiques Niveau 1 | Questions régénérées à chaque partie |
| Questions quiz adaptées | 3 / 5 / 8 / 10 selon taille du thème |
| Stratégies cache SW | 2 (Cache First + Network First) |
| Icônes PWA | 1 (format maskable) |

---

## 🔄 Différences clés avec Taphad'Meuh (Oromo-Français)

| Aspect | VACHÉBO (ES-FR) | Taphad'Meuh (OR-FR) |
|---|---|---|
| Guide utilisateur | Intégré dans `index.html` (modale) | Fichier HTML séparé |
| Écran Home | Supprimé du flux (directement Sections) | Présent |
| Variantes régionales | 7 variantes hispaniques côté données + CSS | Non applicable |
| Voix TTS langue 2 | Cascade régionale (es-MX, es-AR…) | Cascade multi-langues (om → so → am…) |
| Quiz Niveau 1 | Dynamique (généré depuis `words`) | Dynamique (généré depuis `words`) |
| Confetti animés | Non | Oui (3 étoiles) |
| Onglet Répète | Présent (Niveau 1) | Présent |
| Exports PDF | Non | Oui (3 types) |
| Fallbacks SVG Service Worker | Non (page offline simple) | Oui (4 types) |
| Manifest PWA | Léger (1 icône) | Complet (10 tailles + screenshots) |
| Antispam e-mail | `copierEmailSecurise()` (clipboard API) | CSS RTL + reconstruction mémoire |
| Nombre de lignes | ~9 420 | ~11 718 |

---

*Bilan généré pour comparaison avec l'application Oromo-Français · © Juin 2026*
