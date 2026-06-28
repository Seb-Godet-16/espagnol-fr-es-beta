# VACHÉBO 🐄 — Apprendre Français & Espagnol

> **¡Oh la vache, qué chévère, boludo!**  
> Application bilingue Français ↔ Espagnol — flashcards, quiz, dialogues, 7 variantes d'espagnol.

[![PWA](https://img.shields.io/badge/PWA-installable-blueviolet)](https://seb-godet-16.github.io/espagnol-fr-es-beta/)
[![Vanilla JS](https://img.shields.io/badge/Vanilla-JS-f7df1e?logo=javascript)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![Licence](https://img.shields.io/badge/licence-MIT-green)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/déployé%20sur-GitHub%20Pages-222?logo=github)](https://seb-godet-16.github.io/espagnol-fr-es-beta/)

---

## 🌍 Démo

➡️ **[Ouvrir l'application](https://seb-godet-16.github.io/espagnol-fr-es-beta/)**

Aucune inscription, aucun téléchargement. Fonctionne dans le navigateur et s'installe sur écran d'accueil comme une vraie app.

---

## ✨ Fonctionnalités

| Fonctionnalité | Détail |
|---|---|
| 🃏 **Flashcards** | Cartes recto/verso avec conjugaisons complètes pour les verbes |
| ❓ **Quiz dynamiques** | Questions générées aléatoirement à chaque partie (jamais le même quiz) |
| 💬 **Dialogues réels** | Situations authentiques : pharmacie, taxi, hôtel, restaurant… |
| 🔊 **Audio intégré** | Prononciation via Web Speech API (synthèse vocale du système) |
| 🎤 **Répétition orale** | L'onglet *Répète* écoute la voix et donne un feedback immédiat vert/orange |
| 🌎 **7 variantes d'espagnol** | Espagne, Mexique, Argentine, Colombie, Venezuela, Pérou, Équateur |
| ⭐ **Système d'étoiles** | 1⭐ ≥ 50 %, 2⭐ ≥ 75 %, 3⭐ = 100 % — progression sauvegardée localement |
| 📲 **PWA installable** | Fonctionne hors-ligne après la première visite (Service Worker) |
| 📄 **Export PDF** | Vocabulaire, dialogues et guide utilisateur exportables en PDF |
| ♿ **Accessibilité** | Navigation clavier, `role="button"`, `aria-label`, zoom WCAG 1.4.4 |

---

## 🗂️ Contenu pédagogique

- **32 thèmes vocabulaire** (Niveau 1) — salutations, couleurs, chiffres, verbes, alimentation…
- **16 dialogues de situation** (Niveau 2) — scénarios de la vie quotidienne
- **~900 paires de mots** par langue (Français ↔ Espagnol)
- **7 variantes régionales** avec vocabulaire et audio adaptés

---

## 🏗️ Architecture

```
espagnol-fr-es-beta/
├── index.html          # Structure HTML unique (SPA — Single Page App)
├── css/
│   └── style.css       # Thèmes couleur, composants, animations (597 blocs, 38 CSS vars)
├── js/
│   ├── app.js          # Moteur applicatif complet (114 fonctions, ~3 800 lignes)
│   ├── data-fr.js      # Contenu mode "Apprendre le Français" — chargé à la demande
│   └── data-es.js      # Contenu mode "Apprendre l'Espagnol" — chargé à la demande
├── img/
│   ├── Logo-appli-es-fr.png
│   └── icons/          # Icônes PWA (72px → 512px, maskable)
├── sw.js               # Service Worker — cache hybride Cache-First / Network-First
├── manifest.json       # Manifest PWA
└── .github/
    └── workflows/
        └── deploy.yml  # CI/CD GitHub Actions → GitHub Pages
```

### Principes de conception

- **Zéro dépendance** — Vanilla JS ES2020, pas de framework, pas de bundler
- **Chargement fractionné** — `data-fr.js` et `data-es.js` injectés dynamiquement au choix de langue (−50 % de JS parsé au démarrage)
- **CSS custom properties** — 38 variables pour les thèmes (`theme-french` / `theme-spain`) et les 7 variantes régionales (`region-ES`, `region-MX`, etc.)
- **Service Worker hybride** — Cache-First pour les ressources locales, Network-First pour les CDN externes (Twemoji), avec fallbacks SVG inline pour le mode hors-ligne

---

## 🚀 Déploiement

Le projet utilise **GitHub Actions** pour déployer automatiquement sur GitHub Pages à chaque push sur `main`.

```yaml
# .github/workflows/deploy.yml
on:
  push:
    branches: [main]
```

Le Service Worker est versionné à chaque déploiement via la variable `__BUILD_NUMBER__` injectée automatiquement par la CI :

```bash
sed -i "s/__BUILD_NUMBER__/${{ github.run_number }}/g" sw.js
```

### Installation locale

```bash
git clone https://github.com/Seb-Godet-16/espagnol-fr-es-beta.git
cd espagnol-fr-es-beta
# Servir avec n'importe quel serveur statique, ex :
npx serve .
# ou
python3 -m http.server 8080
```

> ⚠️ Le Service Worker nécessite HTTPS ou `localhost`. Ne pas ouvrir `index.html` directement depuis le système de fichiers.

---

## 🌐 Compatibilité

| Navigateur | Flashcards | Quiz | Audio 🔊 | Micro 🎤 |
|---|---|---|---|---|
| Chrome (Android / Desktop) | ✅ | ✅ | ✅ | ✅ |
| Safari (iOS 14.5+) | ✅ | ✅ | ✅ | ✅ |
| Firefox (Desktop) | ✅ | ✅ | ✅ | ⚠️ Partiel |
| Firefox (Mobile) | ✅ | ✅ | ✅ | ❌ Non supporté |
| Edge | ✅ | ✅ | ✅ | ✅ |

> La **reconnaissance vocale** (onglet 🎤 Répète) repose sur l'API `SpeechRecognition` — non disponible sur Firefox mobile.  
> La **synthèse vocale** dépend des voix installées sur l'appareil. Voir le Guide intégré à l'app pour la configuration.

---

## 🛠️ Technologies

- **HTML5** — structure SPA avec 4 écrans + modales
- **CSS3** — custom properties, animations CSS (`@keyframes`), Grid, Flexbox, `contain`
- **JavaScript ES2020** — modules dynamiques, `optional chaining`, `nullish coalescing`, `Promise`, `async/await`
- **Web Speech API** — synthèse vocale (`SpeechSynthesis`) + reconnaissance (`SpeechRecognition`)
- **Service Worker API** — cache offline, stratégie stale-while-revalidate
- **localStorage / sessionStorage** — persistance de la progression et reprise de quiz
- **Web Vibration API** — retour haptique discret sur mobile
- **Clipboard API** — copie anti-spam de l'adresse e-mail
- **GitHub Actions** — CI/CD automatisé
- **GitHub Pages** — hébergement statique gratuit

---

## 👤 Auteur

**Sébastien Godet** — En reconversion · Gestion de projets Agile & Data

- 💼 [LinkedIn](https://www.linkedin.com/in/sébastien-godet-142ba6145)
- ✉️ sebastien.godet16 [at] gmail.com

Développé avec l'assistance de **Claude Sonnet 4.6** (Anthropic) et **Gemini 3.5 Flash** (Google).

---

## 🙏 Remerciements

- **Fédérico Calo** ([LinkedIn](https://www.linkedin.com/in/federicocalo/)) — aide technique précieuse tout au long du projet
- **Mes parents** — relecture, corrections des traductions et conseils ergonomiques
- **Twemoji** (Twitter / Jdecked) — icônes drapeaux SVG sous licence CC-BY 4.0

---

## 📄 Licence

Ce projet est distribué sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour les détails.
