# 📊 BILAN TECHNIQUE — VACHÉBO
*Application bilingue Français ↔ Espagnol — Juin 2026*
*Métriques revérifiées le 06/07/2026 (voir § 8 Historique)*

---

## 1. Vue d'ensemble

| Critère | Valeur |
|---|---|
| Architecture | SPA (Single Page App) — Vanilla JS ES2020, zéro dépendance |
| Hébergement | GitHub Pages (statique, HTTPS, gratuit) |
| CI/CD | GitHub Actions — déploiement automatique sur push `main` |
| Poids total source | ~661 Ko (13 200 lignes de code, hors manifest/deploy) |
| Chargement initial | ~423 Ko (app.js + style.css + index.html), les données chargées à la demande |

---

## 2. Métriques de code

| Fichier | Lignes | Taille | Rôle |
|---|---|---|---|
| `app.js` | 4 761 | 215 Ko | Moteur applicatif — 149 fonctions, 21 sections |
| `style.css` | 4 409 | 145 Ko | Thèmes, composants, animations — 44 variables CSS uniques (161 déclarations, redéfinies par thème/variante) |
| `data-fr.js` | 1 530 | 107 Ko | Données mode Français (32 thèmes + 16 dialogues) |
| `data-es.js` | 880 | 97 Ko | Données mode Espagnol (32 thèmes + 16 dialogues) |
| `index.html` | 1 049 | 63 Ko | Structure HTML (4 écrans + 2 modales) |
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
- Cascade de sélection de voix espagnole par qualité (remote > local enhanced > local standard)
- 3 vitesses de lecture paramétrables
- Keep-alive timer pour iOS/Android (évite la coupure silencieuse)
- Badge visuel de qualité de voix (`_updateVoiceBadge()`)
- Toast et écran d'avertissement si audio indisponible

### 4.2 Reconnaissance vocale (Web Speech API — SpeechRecognition)
- Algorithme de Levenshtein pour tolérance aux fautes de prononciation (`_levenshtein()` + `_speechMatch()`)
- Normalisation multilingue des textes reconnus (`_normalizeSpeech()`)
- Feedback visuel vert/orange selon le score de similarité
- Gestion des erreurs microphone bloqué

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
| 30/06/2026 | Retours de tests (recettage) fournis par Fédérico Calo, pote développeur |
| 03/07/2026 | Recettage par Sébastien Godet avec Gemini 3.5 Flash sur les fichiers retours de tests desktop Chrome, suite aux fichiers de Fédérico du 30/06 : « C'est un super retour de test ! Ton ami a fait un recettage très propre et structuré (en local, sous Chrome desktop). L'excellente nouvelle, c'est qu'il n'y a aucune erreur JavaScript dans la console sur les deux applications. Le moteur global (le "core" du code) a l'air très sain. Cependant, comme le test a été fait en local et sur ordinateur, une bonne partie des fonctionnalités liées au mobile (PWA, micro, hors-ligne) n'a pas pu être testée (notée N/A), et plusieurs actions ont été passées. » Puis recettage par Sébastien Godet avec Gemini 3.5 Flash Extended sur Brave Android (Samsung Galaxy A55 5G) pour l'appli espagnole → liste de correctifs avec des prompts à faire |
| 04/07/2026 | Correctifs par Sébastien Godet avec Claude Sonnet 5 sur l'appli espagnole |
| 05/07/2026 | Correctifs par Sébastien Godet avec Claude Sonnet 5 sur l'appli espagnole (poursuite) |
| 06/07/2026 | Correctifs par Sébastien Godet avec Claude Sonnet 5 sur l'appli espagnole (fin) |

### Correctifs du 05/07/2026 (détail)

- **Bug navigation 🏠** : le bouton retour "maison" (écran Modules) affichait l'écran `#home` avec un titre retouché en "Accueil", au lieu de renvoyer au véritable écran d'accueil `#app-launcher` (choix de la langue). `navBackToHome()` appelle désormais `showLauncher()`.
- **Bug navigation ❓** : le bouton retour "guide" (écran Modules) faisait défiler l'écran vers les accordéons au lieu de rester en haut, à cause d'un scroll interne (`#home.scrollTop`) jamais réinitialisé entre deux visites. `navBackToGuide()` remet désormais le scroll à 0.
- **Nettoyage documentation** : suppression d'un bloc de commentaires obsolète dans `app.js` (§17) qui décrivait encore l'ancienne implémentation du guide en modale (`#guide-modal`), remplacée depuis par l'écran `#home` intégré — ce bloc ne correspondait plus au comportement réel du code et pouvait induire en erreur lors d'une future intervention.
- **Correction du plan de fichier** (table des matières en tête d'`app.js`) : les numéros de ligne à partir de §16 étaient déjà faux avant les correctifs ci-dessus (dérive indépendante, non causée par ces changements) ; l'ensemble du plan a été revérifié ligne par ligne.
