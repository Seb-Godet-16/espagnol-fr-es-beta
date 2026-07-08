# 📊 BILAN TECHNIQUE — VACHÉBO
*Application bilingue Français ↔ Espagnol — Juin 2026*
*Métriques revérifiées le 08/07/2026 (voir § 8 Historique)*

---

## 1. Vue d'ensemble

| Critère | Valeur |
|---|---|
| Architecture | SPA (Single Page App) — Vanilla JS ES2020, zéro dépendance |
| Hébergement | GitHub Pages (statique, HTTPS, gratuit) |
| CI/CD | GitHub Actions — déploiement automatique sur push `main` |
| Poids total source | ~666 Ko (13 367 lignes de code, hors manifest/deploy) |
| Chargement initial | ~431 Ko (app.js + style.css + index.html), les données chargées à la demande |

---

## 2. Métriques de code

| Fichier | Lignes | Taille | Rôle |
|---|---|---|---|
| `app.js` | 4 864 | 221 Ko | Moteur applicatif — 153 fonctions, 21 sections |
| `style.css` | 4 462 | 147 Ko | Thèmes, composants, animations — 44 variables CSS uniques (161 déclarations, redéfinies par thème/variante) |
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
| 29/06/2026 → 08/07/2026 | Tests : desktop (auto) et iPhone (manuel) par Fédérico ; Android (manuel) par Sébastien Godet, aidé par Gemini 3.5 Flash Extended. Correctifs par Sébastien Godet, aidé par Claude Sonnet 5 |
| 08/07/2026 | Vérification technique (Claude Sonnet 5) : les correctifs ci-dessus avaient ajouté ~103 lignes à `app.js` et ~5 lignes à `style.css` sans que les tables des matières internes (« PLAN DU FICHIER ») ni les métriques de ce document ne soient mises à jour. Recalcul de tous les numéros de ligne dans les en-têtes de `app.js` et `style.css` ; correction de deux erreurs de contenu (en-têtes `data-fr.js`/`data-es.js` indiquant 28 thèmes au lieu de 32) ; ajout d'une entrée manquante dans le plan de `style.css` (mise en page 2 colonnes desktop de l'écran Leçon, ajoutée pendant les correctifs) ; mise à jour des comptes de lignes/poids/fonctions ci-dessus et dans le README |
