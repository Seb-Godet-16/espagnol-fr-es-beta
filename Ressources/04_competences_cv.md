# 💼 COMPÉTENCES CV — VACHÉBO
*Ce que ce projet démontre concrètement pour un recruteur*

---

## Formulation projet pour ton CV / LinkedIn

> **VACHÉBO — Application web bilingue FR ↔ ES** *(Projet personnel, Juin 2026)*
> Application PWA d'apprentissage des langues (Français / Espagnol — 7 variantes régionales).
> Flashcards, quiz dynamiques, dialogues, synthèse et reconnaissance vocale, mode hors-ligne.
> Développée en Vanilla JS ES2020 · Déployée sur GitHub Pages via CI/CD GitHub Actions.
> **Avec l'assistance de Claude Sonnet 4.6 (Anthropic) et Gemini 3.5 Flash (Google).**

---

## Compétences techniques

### Développement web front-end
- Conception et développement d'une **SPA (Single Page Application)** complète sans framework
- Maîtrise de **HTML5 sémantique** (4 écrans, 2 modales, accessibilité ARIA)
- **CSS3 avancé** : custom properties (39 variables), animations @keyframes, Grid, Flexbox, responsive mobile-first
- **JavaScript ES2020** : modules dynamiques, async/await, optional chaining, closures, patterns anti-double-clic
- Implémentation de **Web APIs navigateur** : SpeechSynthesis, SpeechRecognition, Vibration, Clipboard, localStorage/sessionStorage

### Architecture & performance
- Séparation des responsabilités en **5 fichiers distincts** (HTML/CSS/JS moteur/données FR/données ES)
- **Chargement conditionnel** des données JS (-50% de parsing au démarrage)
- Stratégie de cache hybride **Cache-First / Network-First** (Service Worker)
- **PWA complète** : manifest, Service Worker, icônes multi-résolutions, mode hors-ligne

### DevOps & déploiement
- Mise en place d'un pipeline **CI/CD avec GitHub Actions** (déploiement automatique sur push)
- Hébergement statique sur **GitHub Pages** (HTTPS, CDN mondial, gratuit)
- Versionnage du cache via injection de variable de build (`__BUILD_NUMBER__`)

### Sécurité web
- Configuration **CSP (Content Security Policy)**, X-Frame-Options, X-Content-Type-Options
- Protection anti-spam de l'adresse email (reverse encoding)

---

## Compétences en gestion de projet (Agile / Chef de projet)

### Cadrage & Product Ownership
- **Définition du besoin** de A à Z : personas (francophones débutants, hispanophones), fonctionnalités, priorités
- Rédaction d'un **backlog** implicite avec critères d'acceptance (étoiles, quiz, audio…)
- Gestion du **scope** : choix d'une PWA vs app native, zéro dépendance vs framework

### Pilotage avec l'IA (compétence différenciante 2026)
- **Prompt engineering** : formulation de demandes techniques précises à Claude et Gemini
- **Revue critique des outputs IA** : validation, correction, intégration des suggestions
- **Itération rapide** avec les outils IA pour accélérer le développement (prototypage, debug, documentation)
- Conscience des limites de l'IA (vérification des traductions, test utilisateur humain)

### Documentation & transfert
- **Documentation exhaustive du code** : commentaires structurés, plan de fichier, décisions architecturales expliquées
- Rédaction du **README** complet (architecture, compatibilité, déploiement, installation locale)
- Création des **tests** et **formulaires de retour testeur**

### Qualité & accessibilité
- Respect des critères **WCAG 1.4.4** (zoom utilisateur)
- Navigation **clavier + ARIA** (role, aria-label)
- Compatibilité multi-navigateurs documentée (Chrome, Safari, Firefox, Edge)

---

## Compétences transverses

| Compétence | Preuve concrète dans VACHÉBO |
|---|---|
| **Autonomie** | Projet mené de 0 à la production sans équipe technique |
| **Curiosité technique** | Apprentissage de Web Speech API, Service Workers, PWA sans formation préalable |
| **Orienté utilisateur** | Guide bilingue intégré, onboarding, feedback haptique, mode hors-ligne |
| **Rigueur** | Code commenté, tests documentés, CI/CD, sécurité web |
| **Multilinguisme** | Contenu FR/ES, 7 variantes, adaptation culturelle (vocabulaire régional) |
| **Collaboration IA** | Travail en duo avec Claude + Gemini — workflow hybride humain/IA |

---

## Formulations bullets pour ton CV

Copie-colle selon le poste visé :

**Pour un poste Chef de Projet / PO :**
- Conduit de A à Z la conception et le déploiement d'une application web bilingue (VACHÉBO), avec gestion du backlog, priorisation des fonctionnalités et tests utilisateurs
- Maîtrise du développement assisté par IA (Claude Sonnet 4.6, Gemini) : prompt engineering, revue critique, intégration et validation des outputs

**Pour un poste AI Project Manager :**
- Développement d'une PWA bilingue avec assistance IA (Claude + Gemini) : workflow humain/IA, itération rapide, contrôle qualité des productions IA
- Mise en œuvre d'un pipeline CI/CD automatisé (GitHub Actions) et d'une architecture PWA hors-ligne

**Pour un poste Business Analyst / Data :**
- Structuration de ~900 paires de données bilingues (FR/ES, 7 variantes) en schéma cohérent exploité dynamiquement par l'application
- Documentation technique complète (README, bilan, plan de tests, formulaire de retour) — transfert de connaissance facilité

---

## Liens à mettre sur LinkedIn / CV

- 🌐 **Application** : https://sgodet.github.io/vachebo/
- 💻 **Code source** : https://github.com/sgodet/vachebo
- 💼 **LinkedIn** : https://www.linkedin.com/in/sébastien-godet-142ba6145
