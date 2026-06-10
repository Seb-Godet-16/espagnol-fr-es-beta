# Applications Linguistiques – Sébastien Godet
**© Juin 2026 – Sébastien Godet**

---

## Architecture du projet

Chaque application est découpée en **3 couches séparées**, prêtes pour Git et un déploiement Web.

```
app-nom/
├── index.html        ← Structure HTML pure (aucun style ni script inline)
├── css/
│   └── style.css     ← Tous les styles CSS (couleurs, mise en page, composants)
└── js/
    ├── data.js       ← Données : vocabulaire, quiz, dialogues (~90-108 KB)
    └── app.js        ← Logique : rendu UI, navigation, gestion de l'état (~14-18 KB)
```

---

## Les 6 applications

| Dossier | Langue enseignée | Couleurs principales | Clé localStorage |
|---|---|---|---|
| `castillan/` | 🇪🇸 Espagnol castillan (Espagne) | Voir `css/style.css` | `pe_es_done_v1` |
| `equateur-es/` | 🇪🇨 Espagnol équatorien | Voir `css/style.css` | `pe_ec_done_v1` |
| `argentin/` | 🇦🇷 Espagnol argentin | Voir `css/style.css` | `pf_done_ar_v1` |
| `equateur-fr/` | 🇫🇷 Espagnol équatorien (FR) | Voir `css/style.css` | `pf_ec_done_v1` |
| `venezuela/` | 🇻🇪 Espagnol vénézuélien | Voir `css/style.css` | `pf_done_v3` |
| `oromo/` | 🇪🇹 Oromo (Éthiopie) | Voir `css/style.css` | `pfProgress` |

---

## Fonctionnement technique

### `index.html`
- Structure HTML strictement sémantique
- Un `<link>` vers `css/style.css`
- Deux `<script src>` en fin de `<body>` : `data.js` puis `app.js`
- Aucun style inline, aucun script inline

### `css/style.css`
- Styles des composants : écrans, flashcards, quiz, bulles de dialogue, footer
- Variables de couleurs spécifiques à chaque variante linguistique
- Compatible mobile (viewport, touch, min-height)

### `js/data.js`
- `LEVEL1_THEMES` : modules de vocabulaire (flashcards + quiz)
- `LEVEL2_THEMES` : modules de situations réelles (dialogues + vocab + mini-quiz)
- `ALL_THEMES` : tableau fusionné utilisé par `app.js`

### `js/app.js`
- Fonctions de rendu : `renderHome()`, `renderSections()`, `renderFlash()`, `renderDialog()`, etc.
- Gestion de l'état : progression, score, navigation entre onglets
- Synthèse vocale : `speak(txt)` via `SpeechSynthesis API`
- Persistance locale : `localStorage` (clé unique par application)

---

## Déploiement sur GitHub Pages

1. Créer un dépôt GitHub (ex. `applis-langues`)
2. Pusher ce dossier
3. Activer **GitHub Pages** → branche `main`, dossier racine
4. Accès : `https://votre-pseudo.github.io/applis-langues/castillan/`

### Structure Git recommandée
```
applis-langues/
├── README.md
├── castillan/
├── equateur-es/
├── argentin/
├── equateur-fr/
├── venezuela/
└── oromo/
```

---

## Évolutions suggérées

- **Fichier de config** : extraire les couleurs et libellés dans un `config.js` partagé
- **CSS variables** : utiliser des `--color-primary` / `--color-secondary` pour centraliser le thème
- **Module ES6** : passer à `type="module"` pour éviter les variables globales
- **Service Worker** : ajouter un `manifest.json` et un SW pour une PWA installable offline

---
*Généré automatiquement par Claude le 10 juin 2026*
