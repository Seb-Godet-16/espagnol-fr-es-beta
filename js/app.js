/* ============================================================
   Language App 🇫🇷🇪🇸  —  Moteur applicatif unifié
   Français ↔ Espagnol (bidirectionnel)
   © Juin 2026 – Sébastien Godet · IA Claude Sonnet 4.6 et Gemini 3.5 Flash
   ============================================================
   ARCHITECTURE (5 fichiers) :
     ├─ index.html  → Structure HTML + launcher
     ├─ style.css   → Thèmes couleur, composants visuels
     ├─ data-fr.js  → ALL_THEMES_FR (contenu mode learn_french)  — chargé à la demande
     ├─ data-es.js  → ALL_THEMES_ES (contenu mode learn_spain)   — chargé à la demande
     └─ app.js      → Ce fichier : logique applicative complète

   SECTIONS DE CE FICHIER :
     0.  Chargement conditionnel des données — loadDataForMode()
     1.  Variables d'état globales
     2.  Utilitaires centraux de sélection bilingue (L, isFrench, langKeys)
     3.  Point d'entrée — initApp(mode)
     4.  Synthèse vocale — voix espagnole (cascade locale)
     5.  Persistance — système de progression & étoiles
     6.  Navigation — changement d'écran
     7.  Écran Home — barre de progression et étoiles
     8.  Écran Sections — grille des thèmes (niveaux 1 & 2)
     9.  Ouverture d'un thème — écran leçon + onglets
    10.  Cartes Flash — flashcards (vocabulaire & alphabet)
    11.  Quiz 10 questions — QCM dynamique avec étoiles
    12.  Dialogue — bulles de conversation situationnelles
    13.  Vocabulaire — lexique cliquable (chips)
    14.  Quiz Dialogue — mini-quiz de fin de dialogue
    15.  Utilitaires — résultats, échappement, helpers
    16.  Variantes régionales — sélecteur de pays hispanophone
    17.  Remerciements — modale de crédits
    18.  Guide utilisateur — écran d'aide intégré (FR/ES)
   ============================================================ */

/* ═══════════════════════════════════════════════════════════
   0. CHARGEMENT CONDITIONNEL DES DONNÉES
   ─────────────────────────────────────────────────────────
   data.js a été séparé en data-fr.js (~106 Ko) et data-es.js
   (~96 Ko). Seul le fichier utile au mode choisi est injecté,
   ce qui réduit de ~50 % le volume de données parsé au démarrage.

   loadDataForMode(mode, callback) :
     • Vérifie si les variables du mode sont déjà présentes en
       mémoire (cas : l'utilisateur revient au Launcher et choisit
       la même langue → pas de rechargement inutile).
     • Sinon, crée une balise <script> pointant vers le bon fichier,
       l'injecte dans <head> et appelle callback() à son onload.
     • En cas d'erreur réseau, affiche un toast et bloque initApp.

   Appelée par showLauncherVariant() juste avant initApp().
═══════════════════════════════════════════════════════════ */

/**
 * Charge dynamiquement data-fr.js ou data-es.js selon le mode,
 * puis appelle callback() une fois les données disponibles.
 * Si les données sont déjà en mémoire, callback() est appelé immédiatement.
 *
 * @param {'learn_french'|'learn_spain'} mode
 * @param {Function} callback  — fonction à exécuter quand les données sont prêtes
 */
function showResetConfirm() {
  var msg = L('¿Seguro que quieres borrar toda tu progresión? Esta acción es irreversible.', 'Voulez-vous vraiment effacer toute votre progression ? Cette action est irréversible.');
  document.getElementById('confirmMsg').textContent = msg;
  document.getElementById('confirm-modal').style.display = 'flex';
}
function confirmReset() {
  done = [];
  try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
  document.getElementById('confirm-modal').style.display = 'none';
  renderSections(_currentThemeLevel || 1);
  _showToast(L('✅ Progresión borrada.', '✅ Progression effacée.'));
}
function cancelReset() {
  document.getElementById('confirm-modal').style.display = 'none';
}

function _showSpinner() {
  var s = document.getElementById('app-spinner');
  if (!s) {
    s = document.createElement('div');
    s.id = 'app-spinner';
    document.body.appendChild(s);
  }
  s.style.display = 'flex';
}
function _hideSpinner() {
  var s = document.getElementById('app-spinner');
  if (s) s.style.display = 'none';
}

/* _launchConfetti(isThreeStars) — Animation de félicitations ⭐⭐⭐
   Portée depuis l'app Oromo :
   - Répartition en zones (pas de regroupement aléatoire).
   - Couleurs cycliques (pas de random pur) pour une palette équilibrée.
   - CSS custom properties (--cx, --cr, --cs, --cd) : transitions GPU.
   - Délai échelonné calculé (i × 0.028 s) pour un effet de vague.
   - Guard CSS custom properties pour très vieux navigateurs.
   - Nettoyage DOM après 2 400 ms (fin de la dernière animation).
   @param {boolean} [isThreeStars=true] – Intensité (réservé pour évolution) */
function _launchConfetti(isThreeStars) {
  /* Guard : s'assurer que les CSS custom properties sont disponibles */
  if (typeof document.documentElement.style.setProperty !== 'function') return;

  /* Palette selon le thème actif */
  var isFranceTheme = document.documentElement.classList.contains('theme-french');
  var colors = isFranceTheme
    ? ['#002395', '#ffffff', '#ED2939', '#FFD700', '#4A6FE3', '#FF6B7A']  /* FR */
    : ['#C60B1E', '#FFD700', '#F1BF00', '#ffffff', '#E05020', '#FFE566']; /* ES */

  /* Créer l'overlay */
  var overlay = document.createElement('div');
  overlay.className = 'confetti-overlay';
  document.body.appendChild(overlay);

  var COUNT = 22;
  for (var i = 0; i < COUNT; i++) {
    var p = document.createElement('div');
    p.className = 'conf-p';

    /* Position X : répartie en zones pour éviter les regroupements */
    var zone   = (i / COUNT) * 100;
    var jitter = (Math.random() - 0.5) * 14;
    var cx     = Math.max(2, Math.min(98, zone + jitter));

    /* Couleur cyclique dans la palette */
    var color = colors[i % colors.length];

    /* Scale aléatoire entre 0.7 et 1.5 */
    var scale = (0.7 + Math.random() * 0.8).toFixed(2);

    /* Délai échelonné : les 22 particules partent sur ~0.6 s */
    var delay = (i * 0.028).toFixed(3) + 's';

    p.style.setProperty('--cx', cx + '%');
    p.style.setProperty('--cr', color);
    p.style.setProperty('--cs', scale);
    p.style.setProperty('--cd', delay);

    overlay.appendChild(p);
  }

  /* Nettoyer après la fin de la dernière animation
     (délai max ~0.6 s + durée animation ~1.4 s + marge) */
  setTimeout(function() {
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
  }, 2400);
}

function loadDataForMode(mode, callback) {
  const alreadyLoaded = (mode === 'learn_french')
    ? (typeof ALL_THEMES_FR !== 'undefined')
    : (typeof ALL_THEMES_ES !== 'undefined');

  if (alreadyLoaded) {
    callback();
    return;
  }

  const src = (mode === 'learn_french') ? 'js/data-fr.js' : 'js/data-es.js';
  const script = document.createElement('script');
  script.src = src;

  script.onload = function() {
    _hideSpinner();
    callback();
  };

  script.onerror = function() {
    _showToast('⚠️ Erreur de chargement des données (' + src + '). Vérifiez votre connexion.', 5000);
  };

  _showSpinner();
  document.head.appendChild(script);
}


/* ═══════════════════════════════════════════════════════════
   1. VARIABLES D'ÉTAT GLOBALES
   ─────────────────────────────────────────────────────────
   Ces variables sont partagées entre toutes les fonctions.
   Elles doivent être initialisées AVANT tout appel à initApp().
   Ne jamais les déclarer localement dans une fonction.
═══════════════════════════════════════════════════════════ */

// Mode courant : 'learn_french' (Espagnol → Français) ou 'learn_spain' (Français → Espagnol)
let currentMode = '';

// Variante hispanique sélectionnée (codes ISO pays) ; par défaut : Espagne castillane
// Valeurs possibles : 'ES' | 'MX' | 'CO' | 'PE' | 'VE' | 'AR' | 'EC'
let currentRegion = 'ES';

// Code BCP-47 utilisé par la Web Speech API pour la synthèse vocale.
// Initialisé à vide ; assigné par initApp() selon le mode sélectionné.
let voiceLang = '';

// Tableau de tous les thèmes actifs, rempli par initApp() depuis data.js
let ALL_THEMES = [];

// Clé localStorage distincte par mode, pour conserver deux progressions indépendantes
let STORAGE_KEY = '';

// ─── Variables de session (réinitialisées à chaque ouverture de thème) ───
let CT          = null;   // Thème courant (Current Theme)
let fcIdx       = 0;       // Index de la carte flash active
let dqStep      = 0;       // Étape du quiz dialogue
let dqScore     = 0;       // Score du quiz dialogue
let dqAnswered  = false;   // Anti double-clic sur les options du quiz dialogue
let sitIdx      = 0;       // Index de la situation active dans un dialogue
let q10Step     = 0;       // Étape du quiz 10 questions
let q10Score    = 0;       // Score du quiz 10 questions
let q10Answered = false;   // Anti double-clic sur les options du quiz 10

// Cache des questions générées dynamiquement pour le quiz de Niveau 1
// Régénéré à chaque ouverture d'onglet Quiz pour garantir la variété
let _currentDynQuiz = [];

// Clé sessionStorage utilisée pour mémoriser la position dans un quiz en cours
// (perdue à la fermeture de l'onglet, conservée si on quitte/revient sur la leçon)
const QUIZ_SESSION_KEY = 'quiz_session';

// Progression persistante : tableau d'objets { id: string, stars: 1|2|3 }
let done = [];


/* ═══════════════════════════════════════════════════════════
   1b. UTILITAIRES CENTRAUX DE SÉLECTION BILINGUE
   ─────────────────────────────────────────────────────────
   L(fr, es)   — retourne `fr` en mode learn_french, `es` sinon.
                 Remplace tous les blocs if/else de texte bilingue.
   isFrench()  — raccourci booléen pour les rares cas où une
                 branche entière dépend du mode.
   langKeys()  — retourne { src, tgt } pour indexer les objets
                 { fr, es } dans les cartes et les quiz.
═══════════════════════════════════════════════════════════ */

/**
 * Sélecteur bilingue central.
 * @param {string} fr  – Valeur en mode learn_french (interface ES, langue apprise FR)
 * @param {string} es  – Valeur en mode learn_spain  (interface FR, langue apprise ES)
 * @returns {string}
 */
function L(fr, es) {
  return currentMode === 'learn_french' ? fr : es;
}

/** @returns {boolean} true si le mode actif est learn_french */
function isFrench() {
  return currentMode === 'learn_french';
}

/**
 * Retourne les clés source/cible selon le mode.
 * src = langue affichée en premier (recto carte, question quiz)
 * tgt = langue de la traduction (verso carte, réponse)
 * @returns {{ src: 'fr'|'es', tgt: 'es'|'fr' }}
 */
function langKeys() {
  return isFrench()
    ? { src: 'fr', tgt: 'es' }
    : { src: 'es', tgt: 'fr' };
}

/**
 * Résout le titre d'un thème dans la langue source (nom principal)
 * et la langue cible (sous-titre), en gérant :
 *   - le cas particulier de l'alphabet (type:'alpha') dont les libellés
 *     sont inversés selon le mode actif ;
 *   - les sous-titres contenant un '/' en mode learn_spain (on ne garde
 *     que la partie française, à droite du slash) ;
 *   - la capitalisation de sécurité (première lettre en majuscule).
 * Fonction unique de référence — utilisée par _buildThemeCard et openTheme.
 * @param {Object} t – Objet thème issu de data.js
 * @returns {{ main: string, sub: string }}
 */
function _themeTitle(t) {
  const isAlpha = (t.id === 'alpha' || t.type === 'alpha');
  let main, sub;

  if (isAlpha) {
    main = L("L'Alphabet", 'El Alfabeto');
    sub  = L('El Alfabeto', "L'Alphabet");
  } else {
    main = t.name || '';
    const rawSub = t.sub || '';
    // En mode learn_spain, certains sous-titres contiennent "ES / FR" :
    // on ne conserve que la partie française (après le slash).
    sub = (!isFrench() && rawSub.includes('/'))
      ? rawSub.split('/')[1].trim()
      : rawSub;
  }

  // Capitalisation de sécurité (première lettre en majuscule)
  const _cap = s => s ? s.trim().charAt(0).toUpperCase() + s.trim().slice(1) : s;
  return { main: _cap(main), sub: _cap(sub) };
}

/**
 * Retourne le texte "parlé" d'une carte (le mot dans la langue source).
 * @param {Object} card – Objet mot { fr, es }
 * @returns {string}
 */
function _spokenKey(card) {
  return L(card.fr, card.es);
}



/* ═══════════════════════════════════════════════════════════
   3. POINT D'ENTRÉE : initApp(mode)
   ─────────────────────────────────────────────────────────
   Nouveau flux (3 étapes) :
     Launcher Vue A (cartes) → Launcher Vue B (variante) → Guide → Sections

   showLauncherVariant(mode) — appelée au clic sur une carte de langue.
     Bascule le Launcher vers la Vue B (sélecteur de variante).

   initApp(mode) — appelée par le bouton "Continuer" de la Vue B.
     Configure thème, données, progression, puis lance le Guide.

   showLauncher() — retour au Launcher Vue A depuis Sections.
═══════════════════════════════════════════════════════════ */

/**
 * Appelée au clic sur une carte de langue dans le Launcher.
 * Bascule le Launcher vers la Vue B : sélecteur de variante + bouton Continuer.
 * @param {'learn_french'|'learn_spain'} mode
 */
function showLauncherVariant(mode) {
  currentMode = mode;

  /* — Restauration de la région préférée depuis localStorage — */
  var savedRegion = localStorage.getItem('user_preferred_region');
  currentRegion   = savedRegion || 'ES';

  /* — Thème visuel provisoire (pour que les couleurs du sélecteur soient correctes) — */
  document.documentElement.className = (mode === 'learn_french') ? 'theme-french' : 'theme-spain';

  /* — Bascule Vue A → Vue B + fond dégradé pays — */
  document.getElementById('launcher-view-cards').style.display   = 'none';
  document.getElementById('launcher-view-variant').style.display = 'flex';
  document.getElementById('launcher-view-variant').style.flexDirection = 'column';
  document.getElementById('launcher-view-variant').style.alignItems = 'center';
  document.getElementById('app-launcher').classList.add('variant-active');

  /* — Drapeau et titre selon le mode — */
  const flagEmojis = { ES:'🇪🇸', MX:'🇲🇽', CO:'🇨🇴', PE:'🇵🇪', VE:'🇻🇪', AR:'🇦🇷', EC:'🇪🇨' };
  var flagRow   = document.getElementById('launcherFlagRow');
  var titleEl   = document.getElementById('launcherVariantTitle');
  if (mode === 'learn_french') {
    if (flagRow)  flagRow.textContent  = '🇫🇷';
    if (titleEl)  titleEl.textContent  = 'Apprendre le Français';
  } else {
    if (flagRow)  flagRow.textContent  = flagEmojis[currentRegion] || '🇪🇸';
    if (titleEl)  titleEl.textContent  = 'Aprender Español';
  }

  /* — Génération de la grille visuelle de drapeaux — */
  var selectorWrap = document.getElementById('region-selector-wrap');
  if (selectorWrap) {
    selectorWrap.style.display = 'block';
    renderRegionGrid(mode);
    pickRegion(currentRegion);
  }

  /* — Libellé du bouton retour selon le mode — */
  var backLabel = document.getElementById('launcherBackLabel');
  if (backLabel) {
    backLabel.textContent = (mode === 'learn_french') ? 'Volver' : 'Retour';
  }

  /* — Texte et handler du bouton Continuer selon le mode —
     On attache un handler nommé pour pouvoir le retirer proprement
     si showLauncherVariant() est rappelée (changement de mode). */
  const continueBtn = document.getElementById('launcherContinueBtn');
  if (continueBtn) {
    continueBtn.innerHTML = (mode === 'learn_french')
      ? '▶ Commencer<br><span class="translation-sub">Empezar</span>'
      : '▶ Empezar<br><span class="translation-sub">Commencer</span>';
    // Supprime l'éventuel handler précédent avant d'en attacher un nouveau
    if (continueBtn._launcherHandler) {
      continueBtn.removeEventListener('click', continueBtn._launcherHandler);
    }
    continueBtn._launcherHandler = function() {
      /* — Chargement conditionnel : injecte data-fr.js ou data-es.js
           seulement si ce n'est pas déjà fait, puis lance initApp(). — */
      var btn = this;
      var originalHTML = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '\u23f3 Chargement\u2026';
      loadDataForMode(mode, function() {
        btn.disabled = false;
        btn.innerHTML = originalHTML;
        initApp(mode);
      });
    };
    continueBtn.addEventListener('click', continueBtn._launcherHandler);
  }

  /* — Handler du bouton retour → Vue A —
     Même pattern : handler nommé stocké sur l'élément. */
  const backBtn = document.getElementById('launcherBackBtn');
  if (backBtn) {
    if (backBtn._launcherHandler) {
      backBtn.removeEventListener('click', backBtn._launcherHandler);
    }
    backBtn._launcherHandler = function() {
      document.getElementById('launcher-view-variant').style.display = 'none';
      document.getElementById('launcher-view-cards').style.display   = 'flex';
      document.getElementById('launcher-view-cards').style.flexDirection = 'column';
      document.getElementById('launcher-view-cards').style.alignItems = 'center';
      document.getElementById('app-launcher').classList.remove('variant-active');
      document.documentElement.className = '';
      _setLauncherFooterLang(null);
      /* Retour à Vue A → Langue reste actif, currentMode réinitialisé */
      _updateBottomNav('app-launcher');
    };
    backBtn.addEventListener('click', backBtn._launcherHandler);
  }

  /* — Traduction du footer selon le mode (langue d'interface = langue opposée à celle apprise) — */
  _setLauncherFooterLang(mode);

  /* — Mettre à jour la barre de nav : Langue actif sur l'écran 0 — */
  _updateBottomNav('app-launcher');
}

/**
 * Adapte la langue du pied de page du Launcher.
 * mode === 'learn_french' (hispanophone) → footer en espagnol
 * mode === 'learn_spain'  (francophone)  → footer en français
 * mode === null (Vue A, aucune langue choisie) → bilingue mixte par défaut
 */
function _setLauncherFooterLang(mode) {
  var footer = document.getElementById('launcherFooter');
  if (!footer) return;

  if (mode === 'learn_french') {
    footer.innerHTML =
      '© Junio 2026 – Sébastien Godet<br>' +
      '<a href="https://www.linkedin.com/in/s%C3%A9bastien-godet-142ba6145" target="_blank">LinkedIn</a> · ' +
      '<a href="#" onclick="showGuide()">Guía</a> · ' +
      '<a href="#" onclick="showCredits()">Agradecimientos</a>';
  } else if (mode === 'learn_spain') {
    footer.innerHTML =
      '© Juin 2026 – Sébastien Godet<br>' +
      '<a href="https://www.linkedin.com/in/s%C3%A9bastien-godet-142ba6145" target="_blank">LinkedIn</a> · ' +
      '<a href="#" onclick="showGuide()">Guide</a> · ' +
      '<a href="#" onclick="showCredits()">Remerciements</a>';
  } else {
    footer.innerHTML =
      '© Juin 2026 – Sébastien Godet<br>' +
      '<a href="https://www.linkedin.com/in/s%C3%A9bastien-godet-142ba6145" target="_blank">LinkedIn</a> · ' +
      '<a href="#" onclick="showGuide()">Guide / Guía</a> · ' +
      '<a href="#" onclick="showCredits()">Remerciements / Agradecimientos</a>';
  }
}

/**
 * Revient au Launcher (Vue A) depuis l'écran Sections.
 * Masque tous les écrans et réaffiche le Launcher avec la Vue A.
 */
function showLauncher() {
  document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); });
  document.getElementById('launcher-view-variant').style.display = 'none';
  document.getElementById('launcher-view-cards').style.display   = 'flex';
  document.getElementById('launcher-view-cards').style.flexDirection = 'column';
  document.getElementById('launcher-view-cards').style.alignItems = 'center';
  document.getElementById('app-launcher').classList.add('active');
  document.getElementById('app-launcher').classList.remove('variant-active');
  document.documentElement.className = '';
  _setLauncherFooterLang(null);
  /* La barre de nav reste visible sur le launcher, avec Langue actif */
  _updateBottomNav('app-launcher');
  window.scrollTo(0, 0);
  document.documentElement.lang = 'fr';
}

/**
 * Initialise l'application pour un mode d'apprentissage donné.
 * Appelée par le bouton "Continuer" de la Vue B du Launcher.
 * Configure thème, données, progression, puis ouvre le Guide.
 * Nouveau flux : Launcher → Guide → Sections (sans écran Home).
 * @param {'learn_french'|'learn_spain'} mode
 */
function initApp(mode) {
  currentMode = mode;

  /* — Réinitialisation complète des tableaux de thèmes et des grilles HTML — */
  ALL_THEMES = [];
  var g1 = document.getElementById('grid1');
  var g2 = document.getElementById('grid2');
  if (g1) g1.innerHTML = '';
  if (g2) g2.innerHTML = '';

  /* — Réinitialisation de la voix espagnole (force une nouvelle détection) — */
  _spanishVoice     = undefined;
  _hasNotifiedVoice = false;

  /* — La région a déjà été choisie dans showLauncherVariant() — */
  const flagEmojis = { ES:'🇪🇸', MX:'🇲🇽', CO:'🇨🇴', PE:'🇵🇪', VE:'🇻🇪', AR:'🇦🇷', EC:'🇪🇨' };
  var activeFlag  = flagEmojis[currentRegion] || '🇪🇸';

  /* ─── MODE : Apprendre le Français (interface présentée en Espagnol) ─── */
  if (mode === 'learn_french') {
    document.documentElement.className = 'theme-french';
    document.documentElement.lang = 'es';
    voiceLang  = 'fr-FR';
    ALL_THEMES = ALL_THEMES_FR;
    STORAGE_KEY = 'pe_es_fr_done_v1';

    _setUI({
      homeFlagRow    : '🇫🇷',
      homeTitle      : 'Apprendre le Français',
      homeStartBtn   : '▶ Commencer<br><span class="translation-sub">Empezar</span>',
      sectionsBackBtn: '← Retour<br><span class="translation-sub">Volver</span>',
      sectionsTitle  : '📚 Modules',
      sectionsFlag   : '<img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1eb-1f1f7.svg" style="width:1.5em;vertical-align:middle;" alt="fr">',
      lessonBackBtn  : '← Modules<br><span class="translation-sub">Módulos</span>',
      level1Badge    : '1',
      level1Label    : '<span>Niveau 1 — Vocabulaire<br><span class="level-tab-sub">Nivel 1 — Vocabulario</span></span>',
      level2Badge    : '2',
      level2Label    : '<span>Niveau 2 — Phrases simples<br><span class="level-tab-sub">Nivel 2 — Frases sencillas</span></span>'
    });

  /* ─── MODE : Apprendre l'Espagnol (interface présentée en Français) ─── */
  } else if (mode === 'learn_spain') {
    document.documentElement.className = 'theme-spain region-' + currentRegion;
    document.documentElement.lang = 'fr';
    voiceLang  = 'es-ES';
    ALL_THEMES = ALL_THEMES_ES;
    STORAGE_KEY = 'pe_fr_es_done_v1';

    _setUI({
      homeFlagRow    : activeFlag,           // Drapeau dynamique selon la région mémorisée
      homeTitle      : 'Aprender Español',
      homeStartBtn   : '▶ Empezar<br><span class="translation-sub">Commencer</span>',
      sectionsBackBtn: '← Volver<br><span class="translation-sub">Retour</span>',
      sectionsTitle  : '📚 Módulos',
      sectionsFlag   : activeFlag,           // Drapeau de la variante régionale apprise
      lessonBackBtn  : '← Módulos<br><span class="translation-sub">Modules</span>',
      level1Badge    : '1',
      level1Label    : '<span>Nivel 1 — Vocabulario<br><span class="level-tab-sub">Niveau 1 — Vocabulaire</span></span>',
      level2Badge    : '2',
      level2Label    : '<span>Nivel 2 — Frases sencillas<br><span class="level-tab-sub">Niveau 2 — Phrases simples</span></span>'
    });
  }

  /* — Chargement de la progression sauvegardée pour ce mode — */
  loadDone();

  /* — Construction du guide intégré dans l'écran #home (style Oromo) —
       _buildHomeGuide() active le bon bloc de langue et injecte les
       éléments dynamiques (drapeaux, titre, badges, boutons…). */
  _buildHomeGuide();

  /* — Masquer le launcher et naviguer vers l'écran #home (= guide) — */
  document.getElementById('app-launcher').classList.remove('active');
  showScreen('home');

  // Met à jour la barre de navigation basse pour le mode courant
  _updateBottomNav('home');
}


/* ─────────────────────────────────────────────────────────
   _setUI(t) — Injecte les textes de l'interface dans le DOM
   Paramètre : objet t contenant les clés = IDs des éléments HTML
   Utilise innerHTML pour interpréter les balises HTML bilingues.
───────────────────────────────────────────────────────── */
function _setUI(t) {
  /* homeFlagRow et homeBackBtn n'existent plus dans le nouveau #home style Oromo —
     les drapeaux et le titre sont gérés par _buildHomeGuide(). */
  _setText('sectionsBackBtn',  t.sectionsBackBtn);
  _setText('sectionsBackBtn2', t.sectionsBackBtn);  // Écran sections-level2
  _setText('sectionsTitle',   t.sectionsTitle);
  _setText('sectionsTitle2',  t.sectionsTitle);     // Écran sections-level2
  _setText('sectionsFlag',    t.sectionsFlag);
  _setText('sectionsFlag2',   t.sectionsFlag);      // Écran sections-level2
  _setText('lessonBackBtn',   t.lessonBackBtn);
  _setText('level1Badge',     t.level1Badge);
  _setText('level1Label',     t.level1Label);
  _setText('level1LabelB',    t.level1Label);       // Onglet sur sections-level2
  _setText('level2Badge',     t.level2Badge);
  _setText('level2Label',     t.level2Label);
  _setText('level2LabelB',    t.level2Label);       // Onglet sur sections-level2
  /* homeStartBtn est câblé par _buildHomeGuide() — pas besoin ici */
}

/* _setText(id, val) — Remplace innerHTML d'un élément par val
   (utilise innerHTML et non textContent pour supporter les balises HTML) */
function _setText(id, val) {
  var el = document.getElementById(id);
  if (el) el.innerHTML = val || '';
}


/* ═══════════════════════════════════════════════════════════
   3b. SYNTHÈSE VOCALE — Voix espagnole avec cascade locale
   ─────────────────────────────────────────────────────────
   La Web Speech API charge ses voix de façon asynchrone.
   Pour l'espagnol, on résout d'abord la meilleure voix disponible
   (voix exacte → voix secours espagnol → voix par défaut).

   Fonctions :
     _resolveSpanishVoice(callback) — résout la voix asynchronement
     speak(txt)                     — prononce un texte selon le mode
     _doSpeak(txt, voiceObj, rate)  — synthèse TTS bas niveau
═══════════════════════════════════════════════════════════ */

// Voix espagnole résolue (undefined = non encore cherchée, null = introuvable)
let _spanishVoice     = undefined;
// Empêche la répétition de l'alerte de configuration audio
let _hasNotifiedVoice = false;

/* Résout de façon asynchrone la meilleure voix espagnole disponible sur l'appareil.
   Cascade : voix exacte (ex: es-EC) → tout espagnol disponible → voix[0]
   Le résultat est mis en cache dans _spanishVoice pour les appels suivants. */
function _resolveSpanishVoice(callback) {
  // Si déjà résolue (même null), on retourne directement
  if (_spanishVoice !== undefined) {
    callback(_spanishVoice);
    return;
  }

  // Table de correspondance région → code BCP-47
  var langMap = {
    ES:'es-ES', MX:'es-MX', CO:'es-CO', AR:'es-AR', PE:'es-PE', VE:'es-VE', EC:'es-EC'
  };

  function search() {
    var voices = speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return false;

    var targetLang = langMap[currentRegion] || 'es-ES';

    /* Table de noms lisibles par code région (bilingue ES / FR) */
    var regionLabels = {
      ES: L('España (Castellano)', 'Espagne (Castillan)'),
      MX: L('México',              'Mexique'),
      CO: L('Colombia',            'Colombie'),
      AR: L('Argentina',           'Argentine'),
      PE: L('Perú',                'Pérou'),
      VE: L('Venezuela',           'Venezuela'),
      EC: L('Ecuador',             'Équateur')
    };
    var regionName = regionLabels[currentRegion] || currentRegion;

    var foundVoice = null;
    var foundLabel = regionName + ' ' + L('(Voz por defecto)', '(Voix par défaut)');

    // Priorité 1 : voix exactement correspondant à la région (ex : es-MX pour le Mexique)
    foundVoice = voices.find(function(v) {
      return v.lang.toLowerCase() === targetLang.toLowerCase();
    });
    if (foundVoice) {
      foundLabel = regionName;
    } else {
      // Priorité 2 : n'importe quel espagnol disponible (ex : es-ES si es-MX absent)
      foundVoice = voices.find(function(v) {
        return v.lang.toLowerCase().indexOf('es') === 0;
      });
      if (foundVoice) {
        /* Résoudre le nom lisible de la voix de secours */
        var fallbackCode = foundVoice.lang.toUpperCase().split('-')[1] || 'ES';
        var fallbackName = regionLabels[fallbackCode] || foundVoice.lang;
        foundLabel = regionName + ' ' + L('(secours: ', '(secours : ') + fallbackName + ')';
      } else {
        foundLabel = L('Voz por defecto', 'Voix par défaut');
      }
    }
    // Priorité 3 : première voix disponible (ultime recours)
    if (!foundVoice) foundVoice = voices[0];

    _spanishVoice = foundVoice;

    // Notification discrète (toast) informant l'utilisateur de la voix configurée
    if (!_hasNotifiedVoice) {
      _hasNotifiedVoice = true;
      var msg = L(
        '🎙️ Voz configurada: ' + foundLabel,
        '🎙️ Voix configurée : ' + foundLabel
      );
      _showToast(msg);
    }

    callback(_spanishVoice);
    return true;
  }

  // Si les voix ne sont pas encore chargées, on attend l'événement voiceschanged.
  // Sur iOS/Safari, cet événement peut ne jamais se déclencher.
  // Un timeout de 2 s force la résolution avec les voix disponibles à ce moment
  // (ou la voix par défaut du système si la liste est encore vide).
  if (!search()) {
    var _voicesTimeout = null;

    function _onVoicesChanged() {
      speechSynthesis.removeEventListener('voiceschanged', _onVoicesChanged);
      clearTimeout(_voicesTimeout);
      if (_spanishVoice === undefined) {
        _spanishVoice = speechSynthesis.getVoices()[0] || null;
      }
      callback(_spanishVoice);
    }

    speechSynthesis.addEventListener('voiceschanged', _onVoicesChanged);

    /* Timeout de sécurité : 2 s max — évite un callback silencieux sur iOS */
    _voicesTimeout = setTimeout(function() {
      speechSynthesis.removeEventListener('voiceschanged', _onVoicesChanged);
      if (_spanishVoice === undefined) {
        var fallback = speechSynthesis.getVoices();
        _spanishVoice = fallback.length > 0 ? fallback[0] : null;
        if (!_hasNotifiedVoice) {
          _hasNotifiedVoice = true;
          _showToast(L('🎙️ Voz configurada: Voz por defecto', '🎙️ Voix configurée : Voix par défaut'));
        }
      }
      callback(_spanishVoice);
    }, 2000);
  }
}

/* speak(txt, triggerBtn) — Point d'entrée unique pour la synthèse vocale.
   Gère automatiquement :
     - Les textes avec '/' (prononce chaque partie avec 800ms de pause)
     - Le mode 'learn_spain' → voix espagnole résolue dynamiquement
     - Le mode 'learn_french'  → voix française (voiceLang = 'fr-FR')
     - triggerBtn (optionnel) : reçoit .is-speaking pendant la lecture,
       retiré au dernier onend pour un retour visuel immédiat.
   Si la synthèse échoue silencieusement (ex : iOS Safari avant la première
   interaction tactile de la page), un indicateur "🔇 Audio indisponible"
   discret est affiché via _showAudioUnavailable(). */
function speak(txt, triggerBtn) {
  if (!txt) return;

  if (!window.speechSynthesis) {
    _showAudioUnavailable();
    return;
  }

  /* Helpers feedback visuel */
  function _markSpeaking(btn) { if (btn) btn.classList.add('is-speaking'); }
  function _unmarkSpeaking(btn) { if (btn) btn.classList.remove('is-speaking'); }

  if (currentMode !== 'learn_french') {
    // ─── Mode Espagnol : résolution asynchrone de la meilleure voix disponible ───
    _resolveSpanishVoice(function(voice) {
      speechSynthesis.cancel();
      var parts = (txt || '').split('/').map(p => p.trim()).filter(Boolean);
      _markSpeaking(triggerBtn);
      function speakPart(i) {
        if (i >= parts.length) { _unmarkSpeaking(triggerBtn); return; }
        var u = new SpeechSynthesisUtterance(parts[i]);
        if (voice) { u.voice = voice; u.lang = voice.lang; }
        u.rate  = 0.85;
        u.onend = function() {
          _hideAudioUnavailable();
          if (i + 1 < parts.length) setTimeout(function() { speakPart(i + 1); }, 800);
          else _unmarkSpeaking(triggerBtn);
        };
        u.onerror = function() { _showAudioUnavailable(); _unmarkSpeaking(triggerBtn); };
        speechSynthesis.speak(u);
      }
      speakPart(0);
    });

  } else {
    // ─── Mode Français : voix système standard, taux légèrement ralenti ───
    _doSpeak(txt, null, 0.80, triggerBtn);
  }
}

/* _doSpeak(txt, voiceObj, rate, triggerBtn) — Synthèse TTS bas niveau.
   Gère la découpe sur '/' et la pause de 800ms entre les parties.
   triggerBtn (optionnel) reçoit .is-speaking pendant toute la lecture.
   Signale via _showAudioUnavailable() si la synthèse échoue (onerror). */
function _doSpeak(txt, voiceObj, rate, triggerBtn) {
  if (!window.speechSynthesis) {
    _showAudioUnavailable();
    return;
  }
  speechSynthesis.cancel();
  var parts = (txt || '').split('/').map(p => p.trim()).filter(Boolean);
  if (triggerBtn) triggerBtn.classList.add('is-speaking');
  function speakPart(i) {
    if (i >= parts.length) {
      if (triggerBtn) triggerBtn.classList.remove('is-speaking');
      return;
    }
    var u = new SpeechSynthesisUtterance(parts[i]);
    u.lang = voiceLang;
    u.rate = rate;
    if (voiceObj) u.voice = voiceObj;
    u.onend = function() {
      _hideAudioUnavailable();
      if (i + 1 < parts.length) setTimeout(function() { speakPart(i + 1); }, 800);
      else if (triggerBtn) triggerBtn.classList.remove('is-speaking');
    };
    u.onerror = function() {
      _showAudioUnavailable();
      if (triggerBtn) triggerBtn.classList.remove('is-speaking');
    };
    speechSynthesis.speak(u);
  }
  speakPart(0);
}

// §3c — Interruption TTS à la mise en arrière-plan
document.addEventListener('visibilitychange', function() {
  if (document.hidden && window.speechSynthesis) {
    speechSynthesis.cancel();
  }
});

/* ─────────────────────────────────────────────────────────
   §3d — KEEPALIVE WATCHDOG — Chrome / Android
   ─────────────────────────────────────────────────────────
   Bug Chrome/Android (Chromium #503948) : speechSynthesis.speaking
   passe silencieusement à false après ~15 s d'inactivité du moteur
   TTS, figeant la synthèse sans déclencher onend ni onerror.

   Remède : un setInterval à 10 s qui appelle pause()/resume()
   uniquement si le moteur est censé parler (speaking && !paused).
   Ce micro-jolt réveille le thread TTS sans interruption perçue.
   L'intervalle est suspendu quand l'app passe en arrière-plan
   (document.hidden) pour économiser la batterie.
───────────────────────────────────────────────────────── */
var _ttsKeepAliveTimer = null;

function _startTtsKeepAlive() {
  if (_ttsKeepAliveTimer) return;
  if (!window.speechSynthesis) return;
  _ttsKeepAliveTimer = setInterval(function() {
    if (document.hidden) return;
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
      speechSynthesis.resume();
    }
  }, 10000);
}

_startTtsKeepAlive();


/* ─────────────────────────────────────────────────────────
   INDICATEUR "AUDIO INDISPONIBLE"
   ─────────────────────────────────────────────────────────
   Sur iOS notamment, speechSynthesis peut échouer silencieusement
   tant que l'utilisateur n'a pas encore interagi avec la page
   (politique de déblocage audio des navigateurs mobiles).
   Cet indicateur discret informe l'utilisateur sans bloquer l'UI.
───────────────────────────────────────────────────────── */

// Empêche les notifications répétées tant que l'indicateur est déjà affiché
let _audioUnavailableShown = false;

/* Affiche un badge discret "🔇 Audio indisponible" en bas d'écran. */
function _showAudioUnavailable() {
  if (_audioUnavailableShown) return;
  _audioUnavailableShown = true;

  var badge = document.getElementById('audio-unavailable-badge');
  if (!badge) {
    badge = document.createElement('div');
    badge.id = 'audio-unavailable-badge';
    badge.style.cssText =
      'position:fixed;bottom:14px;left:50%;transform:translateX(-50%);'
      + 'background:rgba(60,60,60,0.92);color:#fff;padding:6px 14px;border-radius:50px;'
      + 'font-size:.75rem;font-weight:600;text-align:center;white-space:nowrap;'
      + 'box-shadow:0 2px 10px rgba(0,0,0,.25);z-index:99999;pointer-events:none;'
      + 'opacity:0;transition:opacity .3s ease;';
    document.body.appendChild(badge);
  }
  var label = L('🔇 Audio no disponible', '🔇 Audio indisponible');
  badge.textContent = label;
  requestAnimationFrame(function() { badge.style.opacity = '1'; });
}

/* Masque le badge "Audio indisponible" dès qu'une lecture réussit. */
function _hideAudioUnavailable() {
  if (!_audioUnavailableShown) return;
  _audioUnavailableShown = false;
  var badge = document.getElementById('audio-unavailable-badge');
  if (badge) badge.style.opacity = '0';
}


/* _showToast(msg, duration) — Affiche un message discret en bas d'écran.
   Remplace les alert() bloquants pour les notifications non critiques.
   Portée depuis l'app Oromo :
   - Élément DOM frais à chaque appel (pas de singleton #app-toast).
   - Durée configurable (défaut 3000 ms).
   - Double requestAnimationFrame pour garantir la transition CSS d'entrée.
   - Le nœud est supprimé du DOM après la transition de sortie (300 ms). */
function _showToast(msg, duration) {
  duration = duration || 3000;

  var toast = document.createElement('div');
  toast.className = 'app-toast';
  toast.textContent = msg;
  document.body.appendChild(toast);

  /* Différer l'ajout de .visible d'une double frame pour que la
     transition CSS d'entrée (opacité + translation) soit bien jouée. */
  requestAnimationFrame(function() {
    requestAnimationFrame(function() { toast.classList.add('visible'); });
  });

  setTimeout(function() {
    toast.classList.remove('visible');
    /* Laisser la transition de sortie se terminer avant de retirer le nœud. */
    setTimeout(function() { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 300);
  }, duration);
}


/* _vibrateFeedback(isCorrect) — Retour haptique discret sur mobile pour les réponses
   du quiz. Bonne réponse : une vibration courte. Mauvaise réponse : deux vibrations
   courtes (motif distinct). Échoue silencieusement si l'API Vibration est absente
   (Safari iOS notamment ne la supporte pas). */
function _vibrateFeedback(isCorrect) {
  if (!('vibrate' in navigator)) return;
  try {
    navigator.vibrate(isCorrect ? 30 : [30, 60, 30]);
  } catch (e) {}
}


/* ═══════════════════════════════════════════════════════════
   4. PERSISTANCE — Progression & système d'étoiles
   ─────────────────────────────────────────────────────────
   La progression est sauvegardée dans localStorage sous forme
   d'un tableau JSON : [{ id: 'salut', stars: 2 }, ...]

   Règle d'attribution des étoiles (basée sur le % de bonnes réponses) :
     < 50%  → 0 étoile  (pas de sauvegarde)
     ≥ 50%  → ⭐ 1 étoile
     ≥ 75%  → ⭐⭐ 2 étoiles
     100%   → ⭐⭐⭐ 3 étoiles

   Un module conserve toujours son meilleur score (jamais rétrogradé).
═══════════════════════════════════════════════════════════ */

/* Charge la progression sauvegardée depuis localStorage.
   En cas de données corrompues, repart d'un tableau vide. */
function loadDone() {
  try   { done = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch (e) { done = []; }
}

/* Sauvegarde silencieusement la progression dans localStorage. */
function saveDone() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(done)); }
  catch (e) {}
}

/* Calcule le nombre d'étoiles en fonction du pourcentage de réussite. */
function _calcStars(pct) {
  if (pct === 100) return 3;
  if (pct >= 75)   return 2;
  if (pct >= 50)   return 1;
  return 0;
}

/* Marque un module comme terminé avec le nombre d'étoiles calculé.
   Ne sauvegarde que si au moins 1 étoile ; ne rétrograde jamais un score. */
function markDone(id, pct) {
  const newStars = _calcStars(pct);
  if (newStars === 0) return;

  const existing = done.find(d => d.id === id);
  if (existing) {
    if (newStars > existing.stars) existing.stars = newStars; // Amélioration seulement
  } else {
    done.push({ id: id, stars: newStars });
    if (newStars === 3) _launchConfetti(true);
  }
  saveDone();
}

/* Réinitialise la progression d'un module (bouton "Recommencer"). */
function resetTheme(id) {
  done = done.filter(d => d.id !== id);
  saveDone();
  renderSections(_currentThemeLevel);
}

/* Retourne true si le module a été complété au moins une fois (≥ 1 étoile). */
function isDone(id) {
  return done.some(d => d.id === id);
}

/* Retourne le nombre d'étoiles d'un module (0 si non commencé). */
function getThemeStars(id) {
  const found = done.find(d => d.id === id);
  return found ? found.stars : 0;
}


/* ─────────────────────────────────────────────────────────
   REPRISE DE QUIZ — sessionStorage
   ─────────────────────────────────────────────────────────
   Si l'utilisateur quitte une leçon en plein quiz (q10 ou dq)
   et revient sur le même module, sa position et son score
   sont restaurés au lieu de relancer le quiz depuis le début.
   Portée : durée de l'onglet (sessionStorage), par thème.
───────────────────────────────────────────────────────── */

/* Sauvegarde l'état courant du quiz actif (appelée après chaque réponse). */
function _saveQuizSession() {
  if (!CT) return;
  const activeTabEl = document.querySelector('#lessonTabs .tab.active');
  const tabKey = activeTabEl ? activeTabEl.dataset.tab : null;
  if (tabKey !== 'quiz10' && tabKey !== 'dquiz') return;

  var state = {
    mode: currentMode,
    themeId: CT.id,
    tab: tabKey,
    q10Step: q10Step, q10Score: q10Score,
    dqStep: dqStep, dqScore: dqScore,
    // On fige les questions dynamiques pour que la reprise pose les mêmes questions
    dynQuiz: _currentDynQuiz
  };
  try { sessionStorage.setItem(QUIZ_SESSION_KEY, JSON.stringify(state)); }
  catch (e) {}
}

/* Tente de restaurer une session de quiz pour le thème courant.
   Retourne le tab à activer en priorité ('quiz10' | 'dquiz'), ou null si rien à reprendre. */
function _restoreQuizSession() {
  var raw;
  try { raw = sessionStorage.getItem(QUIZ_SESSION_KEY); }
  catch (e) { return null; }
  if (!raw) return null;

  var state;
  try { state = JSON.parse(raw); } catch (e) { return null; }
  if (!state || state.mode !== currentMode || state.themeId !== CT.id) return null;

  // Quiz déjà terminé dans la session sauvegardée : pas la peine de reprendre
  var total;
  if (state.tab === 'quiz10') {
    if (CT.type === 'alpha') {
      var alphaQs = getQuizQuestions(CT);
      total = alphaQs ? alphaQs.length : 0;
    } else if (CT.level === 1) {
      total = (state.dynQuiz && state.dynQuiz.length) ? state.dynQuiz.length : 0;
    } else {
      var stdQs = getQuizQuestions(CT);
      total = stdQs ? stdQs.length : 0;
    }
  } else {
    total = CT.quiz ? CT.quiz.length : 0;
  }
  var step = (state.tab === 'quiz10') ? state.q10Step : state.dqStep;
  if (total && step >= total) return null;

  if (state.tab === 'quiz10') {
    q10Step  = state.q10Step  || 0;
    q10Score = state.q10Score || 0;
    if (state.dynQuiz && state.dynQuiz.length) _currentDynQuiz = state.dynQuiz;
    _showToast(L('Quiz restaurado desde tu última sesión', 'Quiz restauré depuis votre dernière session'), 3500);
    return 'quiz10';
  }
  if (state.tab === 'dquiz') {
    dqStep  = state.dqStep  || 0;
    dqScore = state.dqScore || 0;
    _showToast(L('Quiz restaurado desde tu última sesión', 'Quiz restauré depuis votre dernière session'), 3500);
    return 'dquiz';
  }
  return null;
}

/* Efface la session de quiz sauvegardée (appelée quand un quiz se termine normalement). */
function _clearQuizSession() {
  try { sessionStorage.removeItem(QUIZ_SESSION_KEY); }
  catch (e) {}
}


/* ═══════════════════════════════════════════════════════════
   5. NAVIGATION — Changement d'écran
   ─────────────────────────────────────────────────────────
   L'application est composée de 4 écrans principaux :
     'app-launcher' → Sélection de langue (hors showScreen)
     'home'         → Accueil avec progression globale
     'sections'     → Grille des modules
     'lesson'       → Leçon active (flashcards, quiz, dialogue)

   showScreen(id) gère également le branchement du bouton
   "Retour" de l'écran home vers le launcher.
═══════════════════════════════════════════════════════════ */

/* _updateBottomNav(screenId) — Synchronise la barre de navigation basse
   avec l'écran actuellement affiché.
   • Toujours visible, sur TOUS les écrans y compris le launcher (écran 0).
   • Active visuellement le bouton correspondant à l'écran courant :
       app-launcher (Vue A & B) → Langue actif
       home                     → Guide actif
       sections-level1/2        → Modules actif
       lesson                   → Modules actif (on est dans un module)
       (Infos est une modale : flash visuel temporaire, jamais "collé")
   • Libellés et drapeau adaptés à la langue d'interface. */
function _updateBottomNav(screenId) {
  const nav = document.getElementById('bottom-nav');
  if (!nav) return;

  /* (1) Toujours visible — la barre est présente sur tous les écrans */
  nav.classList.add('visible');

  /* (2) État actif : reset tous les boutons, puis active le bon */
  ['navBtnLang', 'navBtnGuide', 'navBtnModules', 'navBtnCredits'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });

  if (screenId === 'app-launcher') {
    /* Écran 0 (Vue A choix de langue, Vue B sélecteur variante) → Langue actif */
    var btnLang = document.getElementById('navBtnLang');
    if (btnLang) btnLang.classList.add('active');
  } else if (screenId === 'home') {
    /* Écran Guide → Guide actif */
    var btnGuide = document.getElementById('navBtnGuide');
    if (btnGuide) btnGuide.classList.add('active');
  } else if (screenId === 'sections' || screenId === 'sections-level1' || screenId === 'sections-level2' || screenId === 'lesson') {
    /* Écrans Modules et Leçon → Modules actif */
    var btnModules = document.getElementById('navBtnModules');
    if (btnModules) btnModules.classList.add('active');
  }

  /* (3) Libellés bilingues via L(learn_french, learn_spain)
     Sur le launcher (avant tout choix), on affiche les libellés en français par défaut */
  var elLang    = document.getElementById('navLabelLang');
  var elGuide   = document.getElementById('navLabelGuide');
  var elModules = document.getElementById('navLabelModules');
  var elCredits = document.getElementById('navLabelCredits');

  if (!currentMode) {
    /* Launcher Vue A : pas encore de mode → libellés en français */
    if (elLang)    elLang.textContent    = 'Langue';
    if (elGuide)   elGuide.textContent   = 'Guide';
    if (elModules) elModules.textContent = 'Modules';
    if (elCredits) elCredits.textContent = 'Infos';
  } else {
    if (elLang)    elLang.textContent    = L('Idioma',  'Langue');
    if (elGuide)   elGuide.textContent   = L('Guía',    'Guide');
    if (elModules) elModules.textContent = L('Módulos', 'Modules');
    if (elCredits) elCredits.textContent = L('Infos',   'Infos');
  }

  /* (4) Drapeau dynamique selon le mode et la région active
     Sur le launcher sans mode, on affiche 🌍 (neutre) */
  var langFlag = document.getElementById('navLangFlag');
  if (langFlag) {
    if (!currentMode) {
      langFlag.textContent = '🌍';
    } else if (currentMode === 'learn_french') {
      langFlag.textContent = '🇫🇷';
    } else {
      /* learn_spain : drapeau de la variante régionale active */
      var flagEmojis = { ES:'🇪🇸', MX:'🇲🇽', CO:'🇨🇴', PE:'🇵🇪', VE:'🇻🇪', AR:'🇦🇷', EC:'🇪🇨' };
      langFlag.textContent = flagEmojis[currentRegion] || '🇪🇸';
    }
  }
}

/* ─────────────────────────────────────────────────────────
   5b. NAVIGATION NIVEAUX — helpers
   ─────────────────────────────────────────────────────────
   _currentThemeLevel — Mémorise le niveau du thème ouvert (1 ou 2)
                        pour que le retour depuis la leçon revienne
                        au bon écran (sections-level1 ou sections-level2).

   _updateLevelTabs(screenId) — Synchronise l'état actif des boutons
                        d'onglets Niveau 1 / 2 sur les deux paires
                        (#sections-level1 et #sections-level2).

   lessonGoBack()    — Retour depuis la leçon vers le bon écran de niveau.

   navGoModules()    — Bouton Modules de la nav bar : navigue vers
                        l'écran du niveau mémorisé.
───────────────────────────────────────────────────────── */

/** Niveau du thème ouvert (1 ou 2) — mémorisé pour retour et flèches */
var _currentThemeLevel = 1;

/**
 * Synchronise l'état actif des onglets Niveau 1 / 2
 * sur les deux paires de boutons (level-tab) selon l'écran affiché.
 * @param {string} screenId
 */
function _updateLevelTabs(screenId) {
  var isL1 = (screenId === 'sections-level1');
  var isL2 = (screenId === 'sections-level2');
  if (!isL1 && !isL2) return;

  /* Onglets dans sections-level1 */
  var t1a = document.getElementById('lvlTab1');
  var t2a = document.getElementById('lvlTab2');
  if (t1a) t1a.classList.toggle('active', isL1);
  if (t2a) t2a.classList.toggle('active', isL2);

  /* Onglets dans sections-level2 */
  var t1b = document.getElementById('lvlTab1b');
  var t2b = document.getElementById('lvlTab2b');
  if (t1b) t1b.classList.toggle('active', isL1);
  if (t2b) t2b.classList.toggle('active', isL2);
}

/**
 * Retour depuis la leçon → retourne au bon écran de niveau.
 */
function lessonGoBack() {
  var target = (_currentThemeLevel === 2) ? 'sections-level2' : 'sections-level1';
  renderSections(_currentThemeLevel);
  showScreen(target, 'back');
}

/**
 * Bouton Modules dans la nav bar :
 * va sur l'écran du niveau mémorisé (ou niveau 1 par défaut).
 */
function navGoModules() {
  var target = (_currentThemeLevel === 2) ? 'sections-level2' : 'sections-level1';
  /* Direction : depuis lesson = back, sinon forward */
  var current = null;
  document.querySelectorAll('.screen').forEach(function(s) {
    if (s.classList.contains('active')) current = s.id;
  });
  var dir = (current === 'lesson') ? 'back' : undefined;
  renderSections(_currentThemeLevel);
  showScreen(target, dir);
}

/* Ordre canonique des écrans pour le calcul automatique de direction.
   'app-launcher' est l'écran racine (index 0), puis les deux écrans
   de sections par niveau (1a et 1b), puis 'lesson' le plus profond. */
const _SCREEN_ORDER = ['app-launcher', 'home', 'sections-level1', 'sections-level2', 'lesson'];

function showScreen(id, dir) {
  // Détermine l'écran actuellement actif (avant de le masquer)
  const currentEl = document.querySelector('.screen.active');
  const currentId = currentEl ? currentEl.id : null;

  // Calcul automatique de la direction si elle n'est pas fournie
  if (!dir && currentId && currentId !== id) {
    const fromIdx = _SCREEN_ORDER.indexOf(currentId);
    const toIdx   = _SCREEN_ORDER.indexOf(id);
    if (fromIdx !== -1 && toIdx !== -1) {
      dir = toIdx > fromIdx ? 'forward' : 'back';
    }
  }

  // Applique l'animation de sortie sur l'écran courant
  if (dir && currentEl) {
    currentEl.classList.add(dir === 'forward' ? 'slide-out-left' : 'slide-out-right');
  }

  // Masque tous les écrans, puis active uniquement celui demandé
  document.querySelectorAll('.screen').forEach(function(s) {
    s.classList.remove('active');
  });

  // Remonte systématiquement en haut de page à chaque changement d'écran.
  window.scrollTo(0, 0);

  const nextEl = document.getElementById(id);
  nextEl.classList.add('active');

  // Applique l'animation d'entrée sur le nouvel écran
  if (dir) {
    nextEl.classList.add(dir === 'forward' ? 'slide-in-right' : 'slide-in-left');
  }

  // Retire toutes les classes d'animation après la fin de la transition
  setTimeout(function() {
    if (currentEl) {
      currentEl.classList.remove('slide-out-left', 'slide-out-right');
    }
    nextEl.classList.remove('slide-in-right', 'slide-in-left');
  }, 300);

  // Rendu à la demande selon l'écran affiché
  if (id === 'home')              renderHome();
  if (id === 'sections-level1')   renderSections(1);
  if (id === 'sections-level2')   renderSections(2);

  // Synchronise l'état actif des onglets Niveau 1 / 2
  _updateLevelTabs(id);

  // Met à jour la barre de navigation basse
  _updateBottomNav(id);
}


/* ═══════════════════════════════════════════════════════════
   6. ÉCRAN HOME — Barre de progression et étoiles totales
   ─────────────────────────────────────────────────────────
   Affiche :
     - La barre de progression (% de modules validés)
     - Le label bilingue (n / total modules — %)
     - Le total d'étoiles gagnées (sur le maximum possible)
═══════════════════════════════════════════════════════════ */

/**
 * Calcule la progression globale en un seul endroit.
 * Utilisé par renderHome() ET renderSections() pour éviter la duplication.
 * @returns {{ total: number, n: number, pct: number,
 *             starsEarned: number, starsMax: number }}
 */
function _getProgress() {
  const total = ALL_THEMES.length;
  const n     = done.length;
  return {
    total      : total,
    n          : n,
    pct        : total > 0 ? Math.round(n / total * 100) : 0,
    starsEarned: done.reduce((acc, d) => acc + d.stars, 0),
    starsMax   : total * 3
  };
}

function renderHome() {
  if (!ALL_THEMES.length) return;

  const p = _getProgress();

  /* ── Cercle SVG de progression ── */
  var wrap = document.getElementById('homeProgressCircleWrap');
  if (wrap) {
    if (p.n === 0) {
      /* Première visite : on cache le cercle */
      wrap.style.display = 'none';
    } else {
      wrap.style.display = 'flex';

      /* Circonférence pour r=50 : 2π×50 = 314.16 px */
      var CIRC   = 314.16;
      var offset = CIRC - (CIRC * p.pct / 100);

      var arc     = document.getElementById('hpcArc');
      var pctTxt  = document.getElementById('hpcPct');
      var subTxt  = document.getElementById('hpcSub');
      var titleEl = document.getElementById('hpcTitle');
      var descEl  = document.getElementById('hpcDesc');

      /* Léger délai pour déclencher la transition CSS après display:flex */
      setTimeout(function() {
        if (arc) arc.style.strokeDashoffset = offset;
      }, 50);

      if (pctTxt) pctTxt.textContent = p.pct + '%';
      if (subTxt) subTxt.textContent = '⭐ ' + p.starsEarned + ' / ' + p.starsMax;

      /* Textes accessibles (aria) */
      var a11yLabel = L(
        p.n + ' / ' + p.total + ' modules validés — ' + p.pct + '% — ' + p.starsEarned + ' étoiles / ' + p.starsMax,
        p.n + ' / ' + p.total + ' módulos completados — ' + p.pct + '% — ' + p.starsEarned + ' estrellas / ' + p.starsMax
      );
      if (titleEl) titleEl.textContent = a11yLabel;
      if (descEl)  descEl.textContent  = a11yLabel;
    }
  }

  /* ── Widget de variante régionale (mode Espagnol uniquement) ── */
  _renderHomeRegionWidget();
}


/* ─────────────────────────────────────────────────────────
   _renderHomeRegionWidget()
   ─────────────────────────────────────────────────────────
   Génère le sélecteur de variante régionale dans l'écran #home.
   Visible uniquement en mode learn_spain.

   UX : 7 chips cliquables (une par variante). La chip active
   est mise en valeur avec le fond var(--c-primary) et la bordure
   var(--c-accent), héritant automatiquement des CSS custom
   properties appliquées par pickRegion() sur <html>.
   Ainsi le widget est toujours aux couleurs du pays sélectionné.

   Appelle pickRegion() au clic (persistance + cascade CSS + voix).
───────────────────────────────────────────────────────── */
function _renderHomeRegionWidget() {
  var widget = document.getElementById('home-region-widget');
  if (!widget) return;

  /* Masquer le widget en mode Français */
  if (currentMode !== 'learn_spain') {
    widget.style.display = 'none';
    return;
  }
  widget.style.display = 'block';

  var regions = [
    { id:'ES', flag:'🇪🇸', name: 'Espagne'    },
    { id:'MX', flag:'🇲🇽', name: 'Mexique'    },
    { id:'CO', flag:'🇨🇴', name: 'Colombie'   },
    { id:'PE', flag:'🇵🇪', name: 'Pérou'      },
    { id:'VE', flag:'🇻🇪', name: 'Venezuela'  },
    { id:'AR', flag:'🇦🇷', name: 'Argentine'  },
    { id:'EC', flag:'🇪🇨', name: 'Équateur'   }
  ];

  var labelText = L('Variante regional :', 'Variante régionale :');

  var html = '<div class="hrw-wrap">'
    + '<p class="hrw-label">' + labelText + '</p>'
    + '<div class="hrw-chips" role="group" aria-label="' + labelText + '">';

  regions.forEach(function(r) {
    var isActive = (currentRegion === r.id);
    html += '<button'
      + ' class="hrw-chip' + (isActive ? ' hrw-chip--active' : '') + '"'
      + ' onclick="pickRegion(\'' + r.id + '\');_renderHomeRegionWidget();"'
      + ' aria-pressed="' + isActive + '"'
      + ' title="' + r.name + '">'
      + '<span class="hrw-chip-flag">' + r.flag + '</span>'
      + '<span class="hrw-chip-name">' + r.name + '</span>'
      + '</button>';
  });

  html += '</div></div>';
  widget.innerHTML = html;
}


/* ═══════════════════════════════════════════════════════════
   7. ÉCRAN SECTIONS — Grille des thèmes (Niveau 1 & 2)
   ─────────────────────────────────────────────────────────
   Génère dynamiquement les cartes de module pour chaque niveau.
   Chaque carte affiche : emoji, titre, sous-titre, étoiles,
   et un bouton "Recommencer" si le module a été validé.
═══════════════════════════════════════════════════════════ */

function renderSections(activeLevel) {
  if (!ALL_THEMES.length) return;
  if (!activeLevel) activeLevel = 1;

  var total = ALL_THEMES.length;
  var n     = done.length;
  var pct   = Math.round(n / total * 100);
  var totalStarsEarned = done.reduce((acc, d) => acc + d.stars, 0);
  var maxStarsPossible = total * 3;

  /* ── Helper : remplir les éléments d'un header de sections ── */
  function _fillHeader(suffix) {
    var s = suffix || '';
    // Barre de progression
    var gp = document.getElementById('globalProgress' + s);
    if (gp) gp.style.width = pct + '%';

    // Label de progression
    var pl = document.getElementById('progressLabel' + s);
    if (pl) {
      pl.innerHTML = L(
        n + ' / ' + total + ' modules — ' + pct + '%',
        n + ' / ' + total + ' módulos — '  + pct + '%'
      );
    }

    // Étoiles totales
    var se = document.getElementById('sectionsStars' + s);
    if (se) {
      se.innerHTML =
        '<span style="font-size:1rem;font-weight:bold;color:rgba(255,255,255,0.95);">⭐ '
        + totalStarsEarned + ' / ' + maxStarsPossible + '</span>';
    }

    // Sous-titre bilingue
    var subtitle = document.getElementById('sectionsSubtitle' + s);
    if (subtitle) {
      if (isFrench()) {
        subtitle.innerHTML = '<span class="translation-sub">Módulos</span>';
      } else {
        subtitle.innerHTML = '<span class="translation-sub">Modules</span>';
      }
    }

    // Footer dynamique selon le mode
    var footer = document.getElementById('sectionsFooter' + s);
    if (footer) {
      if (isFrench()) {
        footer.innerHTML =
          '© Junio 2026 – Desarrollado por Sébastien Godet · Asistido por IA Claude Sonnet 4.6 y Gemini 3.5 Flash<br>'
          + '<a href="https://www.linkedin.com/in/s%C3%A9bastien-godet-142ba6145" target="_blank">💼 LinkedIn</a> · '
          + '<a href="#" onclick="showCredits()">Agradecimientos</a>'
          + '<br><button onclick="showResetConfirm()" style="margin-top:8px; padding:6px 14px; border-radius:50px; border:1.5px solid #c0392b; color:#c0392b; background:transparent; font-size:0.8rem; cursor:pointer; font-weight:700;">'
          + L('🗑️ Borrar toda la progresión', '🗑️ Tout réinitialiser')
          + '</button>';
      } else {
        footer.innerHTML =
          '© Juin 2026 – Développé par Sébastien Godet · Assisté par IA Claude Sonnet 4.6 et Gemini 3.5 Flash<br>'
          + '<a href="https://www.linkedin.com/in/s%C3%A9bastien-godet-142ba6145" target="_blank">LinkedIn</a> · '
          + '<a href="#" onclick="showCredits()">Remerciements</a>'
          + '<br><button onclick="showResetConfirm()" style="margin-top:8px; padding:6px 14px; border-radius:50px; border:1.5px solid #c0392b; color:#c0392b; background:transparent; font-size:0.8rem; cursor:pointer; font-weight:700;">'
          + L('🗑️ Borrar toda la progresión', '🗑️ Tout réinitialiser')
          + '</button>';
      }
    }
  }

  /* ── Remplir les deux headers (level1 et level2) ── */
  _fillHeader('');    // IDs sans suffixe → #sections-level1
  _fillHeader('2');   // IDs avec suffixe '2' → #sections-level2

  /* ── Grilles de thèmes ── */
  var grid1 = document.getElementById('grid1');
  var grid2 = document.getElementById('grid2');
  if (grid1) grid1.innerHTML = ALL_THEMES
    .filter(t => t.level === 1)
    .map(t => _buildThemeCard(t))
    .join('');
  if (grid2) grid2.innerHTML = ALL_THEMES
    .filter(t => t.level === 2)
    .map(t => _buildThemeCard(t))
    .join('');
}

/* _buildThemeCard(t) — Construit le HTML d'une carte de module.
   Gère l'affichage du titre dans la langue cible selon currentMode,
   les étoiles (remplies/vides) et le bouton de réinitialisation. */
function _buildThemeCard(t) {
  // Délègue entièrement la résolution du titre à _themeTitle()
  const { main: mainTitle, sub: subLine } = _themeTitle(t);

  // Configuration du bouton de réinitialisation
  var resetBtn = isDone(t.id)
    ? '<button onclick="event.stopPropagation();resetTheme(\'' + t.id + '\')" '
      + 'style="margin-top:6px;font-size:.65rem;background:#fff;border:1.5px solid #009A44;'
      + 'color:#009A44;border-radius:50px;padding:4px 10px;cursor:pointer;font-weight:700">'
      + L('🔄 Volver a empezar', '🔄 Recommencer')
      + '</button>'
    : '';

  // Génération de l'affichage des étoiles
  var currentStars = getThemeStars(t.id);
  var starsStr = Array.from({ length: 3 }, function(_, i) {
    return i < currentStars ? '⭐' : '☆';
  }).join('');

  // Libellé accessible : titre principal + statut étoiles
  const starsLabel = currentStars > 0
    ? ' — ' + currentStars + L(' étoile(s)', ' estrella(s)')
    : '';
  const doneLabel  = isDone(t.id)
    ? L(' (completado)', ' (complété)')
    : '';

  // Rendu de la carte HTML
  // role="button" + tabindex="0" : rend la div navigable au clavier
  // (le keydown global dans app.js déclenche .click() sur Entrée/Espace)
  return '<div class="theme-card' + (isDone(t.id) ? ' done' : '')
    + '" role="button" tabindex="0"'
    + ' aria-label="' + _escAttr(mainTitle + starsLabel + doneLabel) + '"'
    + ' onclick="openTheme(\'' + t.id + '\')">'
    + '<div class="t-emoji" aria-hidden="true">' + t.emoji   + '</div>'
    + '<div class="t-name">'    + mainTitle + '</div>'
    + '<div class="t-sub">'     + subLine   + '</div>'
    + '<div class="t-stars" aria-hidden="true" style="letter-spacing:2px">' + starsStr + '</div>'
    + resetBtn
    + '</div>';
}


/* ═══════════════════════════════════════════════════════════
   8. OUVERTURE D'UN THÈME — Écran leçon + système d'onglets
   ─────────────────────────────────────────────────────────
   openTheme(id) — Initialise et affiche la leçon pour le thème choisi.

   Le système d'onglets varie selon le type de thème :
     'alpha'  → Flashcards alphabet + Quiz audio
     'dialog' → Dialogue + Vocabulaire + Mini-quiz
     Standard → Flashcards + Quiz QCM

   switchTab(tab) — Bascule entre les onglets et déclenche le rendu adapté.
═══════════════════════════════════════════════════════════ */

function openTheme(id) {
  // Chargement du thème et réinitialisation de toutes les variables de session
  CT        = ALL_THEMES.find(t => t.id === id);
  fcIdx     = 0;
  dqStep    = 0; dqScore    = 0; dqAnswered  = false;
  sitIdx    = 0;
  q10Step   = 0; q10Score   = 0; q10Answered = false;

  // Mémoriser le niveau du thème ouvert (pour le retour depuis la leçon)
  if (CT) _currentThemeLevel = CT.level || 1;

  // Pré-génération du quiz dynamique pour les thèmes de Niveau 1 (hors alphabet)
  _currentDynQuiz = (CT && CT.level === 1 && CT.type !== 'alpha')
    ? _generateLevel1Quiz(CT)
    : [];

  // Tentative de reprise d'un quiz en cours (sessionStorage) pour ce même thème.
  // Si une session valide existe, on mémorise l'onglet à activer en priorité.
  var resumeTab = _restoreQuizSession();

  // Injection de l'emoji dans l'en-tête de leçon
  document.getElementById('lessonEmoji').textContent = CT.emoji;

  // Construction du titre de l'écran leçon via _themeTitle() (source unique de vérité)
  const { main: mainTitle, sub: subTitle } = _themeTitle(CT);

  // Génération finale du titre : "Titre principal — Sous-titre"
  document.getElementById('lessonTitle').textContent = mainTitle + ' — ' + subTitle;

  showScreen('lesson');
  _updateLessonNavArrows();

  // Définition des onglets selon le type de thème et le mode courant
  var tabs;
  if (CT.type === 'dialog') {
    tabs = [
      { k:'dialog', lbl: L('💬 Diálogo',     '💬 Dialogue')   },
      { k:'vocab',  lbl: L('📚 Vocabulario', '📚 Vocabulaire') },
      { k:'dquiz',  lbl: L('❓ Prueba',       '❓ Quiz')        }
    ];
  } else if (CT.type === 'alpha') {
    tabs = [
      { k:'flash',  lbl: L('🔤 Alfabeto',     '🔤 Alphabet')    },
      { k:'quiz10', lbl: L('🔊 Prueba Audio', '🔊 Quiz Audio')  }
    ];
  } else {
    tabs = [
      { k:'flash',  lbl: L('🃏 Cartas', '🃏 Cartes') },
      { k:'quiz10', lbl: L('❓ Prueba', '❓ Quiz')    },
      { k:'repeat', lbl: L('🎤 Repite', '🎤 Répète') }
    ];
  }

  // Rendu des boutons d'onglets
  // Si une session de quiz a été restaurée, on active cet onglet plutôt que le premier
  var initialTab = (resumeTab && tabs.some(t => t.k === resumeTab))
    ? resumeTab : tabs[0].k;

  document.getElementById('lessonTabs').innerHTML = tabs.map(function(t, i) {
    return '<button class="tab' + (t.k === initialTab ? ' active' : '')
      + '" data-tab="' + t.k + '" onclick="switchTab(\'' + t.k + '\')">' + t.lbl + '</button>';
  }).join('');

  // Affiche l'onglet initial (repris ou premier par défaut).
  // On évite de passer par switchTab() pour ne pas réinitialiser le quiz restauré.
  if (resumeTab === initialTab) {
    if (resumeTab === 'quiz10') renderQuiz10();
    else if (resumeTab === 'dquiz') renderDialogQuiz();
  } else {
    switchTab(initialTab);
  }
}

function lessonNav(delta) {
  if (!CT || !ALL_THEMES.length) return;
  var levelThemes = ALL_THEMES.filter(t => t.level === CT.level);
  var idx = levelThemes.findIndex(function(t) { return t.id === CT.id; });
  if (idx === -1) return;
  var newIdx = idx + delta;
  if (newIdx < 0 || newIdx >= levelThemes.length) return;
  openTheme(levelThemes[newIdx].id);
}
/**
 * Met à jour l'état disabled des boutons ‹ / › de navigation entre modules.
 * Désactive la flèche gauche sur le premier thème du niveau,
 * la flèche droite sur le dernier.
 */
function _updateLessonNavArrows() {
  if (!CT) return;
  var levelThemes = ALL_THEMES.filter(t => t.level === CT.level);
  var idx = levelThemes.findIndex(function(t) { return t.id === CT.id; });
  var prev = document.getElementById('lessonPrevBtn');
  var next = document.getElementById('lessonNextBtn');
  if (prev) prev.disabled = (idx <= 0);
  if (next) next.disabled = (idx >= levelThemes.length - 1);
}

/* switchTab(tab) — Active l'onglet demandé et déclenche son rendu.
   Réinitialise les variables de quiz à chaque changement d'onglet. */
function switchTab(tab) {
  document.querySelectorAll('#lessonTabs .tab').forEach(function(b) {
    b.classList.toggle('active', b.dataset.tab === tab);
  });
  if      (tab === 'flash')  {
    renderFlash();
    /* Bouton export vocabulaire — injecté après renderFlash() */
    (function() {
      var tc = document.getElementById('tabContent');
      if (!tc) return;
      var existing = document.getElementById('export-vocab-btn');
      if (existing) existing.remove();
      if (CT && CT.words && CT.type !== 'alpha') {
        var btn = document.createElement('div');
        btn.style.cssText = 'text-align:center;margin-top:14px;';
        btn.innerHTML = '<button id="export-vocab-btn" class="export-pdf-btn" onclick="_exportVocab()">'
          + '📄 ' + L('Exportar vocabulario PDF', 'Exporter le vocabulaire PDF')
          + '</button>';
        tc.appendChild(btn);
      }
    })();
  }
  else if (tab === 'quiz10') {
    q10Step = 0; q10Score = 0; q10Answered = false;
    _clearQuizSession();
    // Régénère les questions dynamiques à chaque ouverture de l'onglet Quiz
    if (CT && CT.level === 1 && CT.type !== 'alpha') {
      _currentDynQuiz = _generateLevel1Quiz(CT);
    }
    renderQuiz10();
  }
  else if (tab === 'dialog') {
    renderDialog();
    /* Bouton export situation — injecté après renderDialog() */
    (function() {
      var tc = document.getElementById('tabContent');
      if (!tc) return;
      var existing = document.getElementById('export-sit-btn');
      if (existing) existing.remove();
      var btn = document.createElement('div');
      btn.style.cssText = 'text-align:center;margin-top:14px;';
      btn.innerHTML = '<button id="export-sit-btn" class="export-pdf-btn" onclick="_exportSituation()">'
        + '📄 ' + L('Exportar situación PDF', 'Exporter la situation PDF')
        + '</button>';
      tc.appendChild(btn);
    })();
  }
  else if (tab === 'vocab')  { renderVocab(); }
  else if (tab === 'dquiz')  {
    dqStep = 0; dqScore = 0; dqAnswered = false;
    _clearQuizSession();
    renderDialogQuiz();
  }
  else if (tab === 'repeat') { renderRepeat(); }
}


/* ═══════════════════════════════════════════════════════════
   9. CARTES FLASH — Flashcards (vocabulaire & alphabet)
   ─────────────────────────────────────────────────────────
   renderFlash() — Affiche la carte active.
     - Thèmes 'alpha'    : grille de lettres cliquables + zone de détail
     - Thèmes normaux    : carte retournable (recto/verso) avec navigation

   Les mots espagnols utilisent en priorité la variante régionale
   (card.variants[currentRegion]) avant le castillan par défaut (card.es).
═══════════════════════════════════════════════════════════ */

function renderFlash() {
  var w    = CT.words;
  var card = w[fcIdx];

  /* ─── Rendu spécifique : Alphabet (grille de lettres) ─── */
  if (CT.type === 'alpha') {
    var alphaLabel = L(
      '¡Haz clic en una letra para escucharla!',
      'Cliquez sur une lettre pour l\'écouter !'
    );

    document.getElementById('tabContent').innerHTML =
      '<div class="section-label">' + alphaLabel + '</div>'
      + '<div class="alpha-grid">' + w.map(function(c, i) {
          var bigLetter = L(c.fr, c.es);
          var smallName = L(c.es, c.fr);
          return '<div class="alpha-card" onclick="pickAlpha(' + i + ')">'
            + '<div class="alpha-letter">' + bigLetter + '</div>'
            + '<div class="alpha-name">'   + smallName  + '</div>'
            + '</div>';
        }).join('') + '</div>'
      + '<div id="alphaDetail" class="alpha-detail">' + buildAlphaDetail(card) + '</div>';
    return;
  }

  /* ─── Rendu standard : Flashcard retournable ─── */

  // Résolution du mot espagnol : variante régionale prioritaire sur le castillan
  var finalEsWord = (card.variants && card.variants[currentRegion])
    ? card.variants[currentRegion] : card.es;

  // Drapeau courant pour l'affichage dans la section-label
  var flagEmojis  = { ES:'🇪🇸', MX:'🇲🇽', CO:'🇨🇴', PE:'🇵🇪', VE:'🇻🇪', AR:'🇦🇷', EC:'🇪🇨' };
  var activeFlag  = flagEmojis[currentRegion] || '🇪🇸';

  // Optionnel : emoji décoratif sur les deux faces
  var emFr = card.em ? '<div class="fc-front-emoji">' + card.em + '</div>' : '';
  var emBk = card.em ? '<div class="fc-back-emoji">'  + card.em + '</div>' : '';

  var hasConj = card.conj && card.conj.es && card.conj.fr;
  var frontContent, backContent;

  /* — MODE Français : Recto = FR, Verso = ES — */
  if (isFrench()) {
    var hintFr = L('Haz clic para ver su significado en español', '');
    if (hasConj) {
      // Carte conjugaison : affiche le tableau de conjugaison des deux côtés
      frontContent = emFr + '<div class="fc-front-word">' + card.fr + '</div>'
        + '<div class="fc-conj">' + card.conj.fr.map(function(l) {
            return '<div class="fc-conj-line">' + l + '</div>'; }).join('') + '</div>';
      backContent  = emBk + '<div class="fc-back-word">' + finalEsWord + '</div>'
        + '<div class="fc-conj">' + card.conj.es.map(function(l) {
            return '<div class="fc-conj-line">' + l + '</div>'; }).join('') + '</div>';
    } else {
      frontContent = emFr + '<div class="fc-front-word">' + card.fr + '</div>'
        + '<div class="fc-front-hint">👆 ' + hintFr + '</div>';
      backContent  = emBk + '<div class="fc-back-word">' + finalEsWord + '</div>';
    }

    document.getElementById('tabContent').innerHTML =
      '<div class="section-label">Anverso : Francés 🇫🇷 — Reverso : Español '
      + '<span id="current-lang-flag">' + activeFlag + '</span> · Haz clic para volver !</div>'
      + '<div class="fc-wrap"><div class="fc" id="fc" onclick="flipCard()">'
      + '<div class="fc-front">' + frontContent + '</div>'
      + '<div class="fc-back">'  + backContent  + '</div>'
      + '</div></div>'
      + '<div class="fc-nav">'
      + '<button onclick="prevCard()">← Anterior</button>'
      + '<span class="fc-counter">' + (fcIdx + 1) + ' / ' + w.length + '</span>'
      + '<button onclick="nextCard()">Siguiente →</button>'
      + '</div>'
      + '<div style="text-align:center;margin-top:10px;">'
      + '<button class="audio-btn-big" onclick="speak(\'' + esc(card.fr) + '\')" aria-label="' + _escAttr(L("Escuchar : ", "Écouter : ") + card.fr) + '">🔊 Escuchar audio</button>'
      + '</div>'
      + _buildMicZone(card.fr, 'fr-FR');

  /* — MODE Espagnol : Recto = ES (variante), Verso = FR — */
  } else {
    var hintEs = L('', 'Cliquez pour voir la traduction en français');
    if (hasConj) {
      frontContent = emFr + '<div class="fc-front-word">' + finalEsWord + '</div>'
        + '<div class="fc-conj">' + card.conj.es.map(function(l) {
            return '<div class="fc-conj-line">' + l + '</div>'; }).join('') + '</div>';
      backContent  = emBk + '<div class="fc-back-word">' + card.fr + '</div>'
        + '<div class="fc-conj">' + card.conj.fr.map(function(l) {
            return '<div class="fc-conj-line">' + l + '</div>'; }).join('') + '</div>';
    } else {
      frontContent = emFr + '<div class="fc-front-word">' + finalEsWord + '</div>'
        + '<div class="fc-front-hint">👆 ' + hintEs + '</div>';
      backContent  = emBk + '<div class="fc-back-word">' + card.fr + '</div>';
    }

    document.getElementById('tabContent').innerHTML =
      '<div class="section-label">Recto : Espagnol <span id="current-lang-flag">'
      + activeFlag + '</span> — Verso : Français 🇫🇷 · Cliquez pour retourner !</div>'
      + '<div class="fc-wrap"><div class="fc" id="fc" onclick="flipCard()">'
      + '<div class="fc-front">' + frontContent + '</div>'
      + '<div class="fc-back">'  + backContent  + '</div>'
      + '</div></div>'
      + '<div class="fc-nav">'
      + '<button onclick="prevCard()">← Précédent</button>'
      + '<span class="fc-counter">' + (fcIdx + 1) + ' / ' + w.length + '</span>'
      + '<button onclick="nextCard()">Suivant →</button>'
      + '</div>'
      + '<button class="audio-btn-big" onclick="speak(\'' + esc(finalEsWord) + '\')" aria-label="' + _escAttr(L("Escuchar : ", "Écouter : ") + finalEsWord) + '">🔊 Écouter la prononciation</button>'
      + _buildMicZone(finalEsWord, voiceLang);
  }
}

/* buildAlphaDetail(c) — Construit le panneau de détail d'une lettre de l'alphabet.
   Affiche la lettre en grand, son nom dans l'autre langue, et un bouton audio. */
function buildAlphaDetail(c) {
  var bigLetter = L(c.fr, c.es);
  var smallName = L(c.es, c.fr);
  var btnLabel  = L('🔊 Escuchar', '🔊 Écouter');
  var spokenKey = _spokenKey(c);
  return '<div style="font-size:2.5rem;font-weight:900;color:#009A44">' + bigLetter + '</div>'
    + '<div style="color:#555;margin:4px 0;font-size:.85rem">' + smallName + '</div>'
    + '<button onclick="speak(\'' + esc(spokenKey) + '\')" '
    + 'style="margin-top:10px;background:#009A44;color:#fff;border:none;border-radius:50px;'
    + 'padding:9px 18px;cursor:pointer;font-weight:700;min-height:44px">' + btnLabel + '</button>';
}

/* pickAlpha(i) — Sélectionne une lettre dans la grille de l'alphabet,
   la prononce et met à jour le panneau de détail. */
function pickAlpha(i) {
  fcIdx = i;
  var card      = CT.words[i];
  // _spokenKey() retourne le mot dans la langue source selon le mode actif
  var spokenKey = _spokenKey(card);
  speak(spokenKey);
  var d = document.getElementById('alphaDetail');
  if (d) d.innerHTML = buildAlphaDetail(card);
}

/* flipCard() — Retourne la carte flash active (toggle de classe CSS 'flipped'). */
function flipCard() {
  var fc = document.getElementById('fc');
  if (!fc) return;
  fc.classList.toggle('flipped');
}


/* ═══════════════════════════════════════════════════════════
   9b. RECONNAISSANCE VOCALE — Micro dans les flashcards
   ─────────────────────────────────────────────────────────
   Utilise la Web Speech API (SpeechRecognition).
   Disponible sur Chrome Android, partielle sur Safari iOS.

   Fonctions :
     _buildMicZone(word, lang) — génère le HTML du bloc micro
     startMicReco(word, lang)  — lance la reconnaissance
     _stopMicReco()            — arrête proprement la session
     _normalizeSpeech(s)       — nettoie la transcription pour
                                  comparaison souple (accents,
                                  ponctuation, casse)
═══════════════════════════════════════════════════════════ */

// Instance SpeechRecognition active (null si aucune)
let _micReco = null;

/* _normalizeSpeech(s) — Retire accents, ponctuation, casse et espaces
   superflus pour une comparaison souple entre ce que l'utilisateur a dit
   et le mot attendu. Ex : "Buenos días" → "buenos dias" */
function _normalizeSpeech(s) {
  return s.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // retire les accents
    .replace(/[^a-z0-9\s]/g, '')                      // retire ponctuation
    .replace(/\s+/g, ' ').trim();
}

/* _levenshtein(a, b) — Distance d'édition (Levenshtein) entre deux chaînes.
   Programmation dynamique : tableau 2D (|a|+1) × (|b|+1).
   Coût : substitution = 1, insertion = 1, suppression = 1. */
function _levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = [];
  for (var i = 0; i <= m; i++) {
    dp[i] = [i];
    for (var j = 1; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else {
        var cost = (a[i - 1] === b[j - 1]) ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,        // suppression
          dp[i][j - 1] + 1,        // insertion
          dp[i - 1][j - 1] + cost  // substitution
        );
      }
    }
  }
  return dp[m][n];
}

/* _speechMatch(spoken, expected) — Retourne true si la transcription vocale
   correspond au mot attendu, avec tolérance floue pour les mots longs.
   Règles (dans l'ordre) :
     (a) identité exacte ;
     (b) l'une des chaînes contient l'autre ;
     (c) expected.length ≤ 3 → pas de tolérance (identité seulement) ;
     (d) sinon, distance de Levenshtein ≤ 25 % de la longueur de expected ;
     (e) pour les expressions avec "/" (ex : "Por favor / De nada"),
         chaque partie est testée indépendamment — la STT ne transcrit
         qu'une seule formulation, le seuil global échouerait sinon. */
function _speechMatch(spoken, expected) {
  /* Teste une paire normalisée avec la logique Levenshtein */
  function _testPair(t, e) {
    if (!e) return false;
    if (t === e) return true;
    if (t.includes(e) || e.includes(t)) return true;
    if (e.length <= 3) return false;
    return _levenshtein(t, e) <= Math.floor(e.length * 0.25);
  }

  /* Test direct sur l'expression complète */
  if (_testPair(spoken, expected)) return true;

  /* Si l'expression contient "/", tester chaque partie séparément */
  if (expected.indexOf('/') !== -1) {
    var parts = expected.split('/').map(function(p) { return p.trim(); }).filter(Boolean);
    for (var i = 0; i < parts.length; i++) {
      var normPart = _normalizeSpeech(parts[i]);
      if (_testPair(spoken, normPart)) return true;
    }
  }

  return false;
}

/* _micBlockedHtml() — Retourne le HTML (icône + message clair) à afficher
   quand le micro est bloqué/refusé par le navigateur (erreurs SpeechRecognition
   'not-allowed' ou 'service-not-allowed'). L'icône 🚫🎤 est volontairement
   très reconnaissable, et le texte explique en 1 clic comment réactiver
   l'accès (icône cadenas/réglages dans la barre d'adresse). */
function _micBlockedHtml() {
  var msg = L(
    '🚫🎤 Micrófono bloqueado — toca el icono 🔒/⚙️ junto a la dirección del sitio, luego autoriza el micrófono y recarga la página.',
    '🚫🎤 Micro bloqué — touche l\'icône 🔒/⚙️ à côté de l\'adresse du site, puis autorise le micro et recharge la page.'
  );
  return '<span class="mic-blocked-icon">🚫🎤</span> ' + msg;
}

/* _isMicBlockedError(err) — true si l'erreur correspond à un refus de
   permission micro (et non à un simple silence ou souci réseau). */
function _isMicBlockedError(err) {
  return err === 'not-allowed' || err === 'service-not-allowed';
}

/* _buildMicZone(word, lang) — Génère le HTML complet du bloc micro
   (bouton, feedback, hint). word = mot attendu, lang = code BCP-47. */
function _buildMicZone(word, lang) {
  var btnLbl      = L('🎤 Pronunciar', '🎤 Prononcer');
  var hint        = L(
    'Pulsa el micrófono, luego pronúncialo en voz alta',
    'Appuie sur le micro, puis prononce le mot à voix haute'
  );
  var unsupported = L(
    '⚠️ Reconocimiento de voz no disponible en este navegador.',
    '⚠️ Reconnaissance vocale non disponible sur ce navigateur.'
  );

  if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
    return '<div class="mic-zone mic-zone--unsupported">' + unsupported + '</div>';
  }

  return '<div class="mic-zone" id="micZone">'
    + '<button class="mic-btn" id="micBtn" '
    +   'onclick="startMicReco(\'' + esc(word) + '\',\'' + lang + '\')">'
    +   btnLbl
    + '</button>'
    + '<div class="mic-feedback" id="micFeedback"></div>'
    + '<div class="mic-hint">' + hint + '</div>'
    + '</div>';
}

/* startMicReco(word, lang) — Lance une session de reconnaissance vocale.
   Compare la transcription obtenue au mot attendu (normalisation souple).
   Affiche vert ✅ si correct, orange 🔁 sinon, avec le texte reconnu. */
function startMicReco(word, lang) {
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return;

  // Arrête une session précédente éventuelle
  _stopMicReco();

  var isFR = (currentMode === 'learn_french');

  // Mise à jour du bouton : état "en écoute"
  var btn = document.getElementById('micBtn');
  var fb  = document.getElementById('micFeedback');
  if (btn) {
    btn.textContent = L('⏹ Parar', '⏹ Arrêter');
    btn.classList.add('mic-btn--listening');
    btn.onclick = function() { _stopMicReco(); };
  }
  if (fb) {
    fb.className  = 'mic-feedback mic-feedback--listening';
    fb.textContent = L('🎙️ Escuchando…', '🎙️ Écoute en cours…');
  }

  // Création et configuration de la session
  var reco        = new SR();
  _micReco        = reco;
  reco.lang       = lang;
  reco.continuous = false;
  reco.interimResults = false;

  reco.onresult = function(e) {
    var transcript = e.results[0][0].transcript;
    var expected   = _normalizeSpeech(word);
    var spoken     = _normalizeSpeech(transcript);
    var ok         = _speechMatch(spoken, expected);

    var fbEl = document.getElementById('micFeedback');
    if (fbEl) {
      if (ok) {
        fbEl.className  = 'mic-feedback mic-feedback--ok';
        fbEl.innerHTML  = L('✅ ¡Muy bien! ', '✅ Parfait ! ')
          + '<span class="mic-transcript">"' + transcript + '"</span>';
      } else {
        fbEl.className  = 'mic-feedback mic-feedback--ko';
        fbEl.innerHTML  = L('🔁 Inténtalo otra vez · ', '🔁 Réessaie · ')
          + L('Escuchado : ', 'Entendu : ')
          + '<span class="mic-transcript">"' + transcript + '"</span>';
      }
    }
    _resetMicBtn(word, lang);
  };

  reco.onerror = function(e) {
    var fbEl = document.getElementById('micFeedback');
    if (fbEl) {
      if (_isMicBlockedError(e.error)) {
        fbEl.className  = 'mic-feedback mic-feedback--blocked';
        fbEl.innerHTML  = _micBlockedHtml();
      } else if (e.error !== 'no-speech') {
        // 'no-speech' = silence, pas vraiment une erreur à afficher
        fbEl.className  = 'mic-feedback mic-feedback--ko';
        fbEl.textContent = L('⚠️ Error: ', '⚠️ Erreur : ') + e.error;
      } else {
        fbEl.className  = 'mic-feedback';
        fbEl.textContent = '';
      }
    }
    _resetMicBtn(word, lang, _isMicBlockedError(e.error));
  };

  reco.onend = function() {
    _micReco = null;
    _resetMicBtn(word, lang);
  };

  reco.start();
}

/* _stopMicReco() — Arrête proprement la session en cours. */
function _stopMicReco() {
  if (_micReco) {
    try { _micReco.stop(); } catch(e) {}
    _micReco = null;
  }
}

/* _resetMicBtn(word, lang, blocked) — Remet le bouton micro en état "prêt".
   Si blocked=true (micro refusé par le navigateur), affiche une icône
   🚫🎤 facilement reconnaissable directement sur le bouton, pour que
   l'apprenant comprenne immédiatement qu'il doit réautoriser l'accès. */
function _resetMicBtn(word, lang, blocked) {
  var btn = document.getElementById('micBtn');
  if (!btn) return;
  btn.textContent = blocked
    ? L('🚫🎤 Bloqueado — toca para reintentar', '🚫🎤 Bloqué — touche pour réessayer')
    : L('🎤 Pronunciar', '🎤 Prononcer');
  btn.classList.remove('mic-btn--listening');
  btn.classList.toggle('mic-btn--blocked', !!blocked);
  btn.onclick = function() { startMicReco(word, lang); };
}

/* nextCard() — Passe à la carte suivante et prononce automatiquement le mot. */
function nextCard() {
  fcIdx = (fcIdx + 1) % CT.words.length;
  renderFlash();
  // Prononce le mot dans la langue cible (avec variante régionale si espagnol)
  var spokenKey;
  if (isFrench()) {
    spokenKey = CT.words[fcIdx].fr;
  } else {
    spokenKey = (CT.words[fcIdx].variants && CT.words[fcIdx].variants[currentRegion])
      ? CT.words[fcIdx].variants[currentRegion]
      : CT.words[fcIdx].es;
  }
  setTimeout(function() { speak(spokenKey); }, 300);
}

/* prevCard() — Revient à la carte précédente. */
function prevCard() {
  fcIdx = (fcIdx - 1 + CT.words.length) % CT.words.length;
  renderFlash();
}

/* isAlphaQuiz() — Retourne true si le thème courant est de type alphabet. */
function isAlphaQuiz() { return CT && CT.type === 'alpha'; }


/* ═══════════════════════════════════════════════════════════
   9c. ONGLET RÉPÈTE — Répétition orale guidée (Niveau 1 uniquement)
   ─────────────────────────────────────────────────────────
   Séquence par mot :
     1. Affiche le mot dans la langue cible (+ emoji si dispo)
     2. Lance speak() automatiquement
     3. Après un délai adapté à la longueur du mot (voir _rpMicDelay :
        1800ms de base, +1400ms par "/" pour les mots à deux formulations
        comme "Por favor / De nada", +90ms par mot supplémentaire),
        déclenche startMicReco avec la bonne langue
     4. Affiche feedback vert/orange identique à l'option A
     5. Après 2500ms de feedback, passe au mot suivant (ou attend le bouton)
   Contrôles permanents : compteur, score, bouton ⏭ Passer, 🔁 Réentendre.
   Fin de session : écran récap avec score X/total + bouton Recommencer.
═══════════════════════════════════════════════════════════ */

// Variables d'état de la session Répète
var _rpIdx       = 0;    // Index du mot courant
var _rpScore     = 0;    // Nombre de réussites
var _rpWords     = [];   // Liste des mots (filtrés fr+es)
var _rpAnswered  = false; // Empêche le double-déclenchement
var _rpAutoTimer = null; // Timer pour l'avancement automatique
var _rpMicTimer  = null; // Timer pour le délai avant micro

/* _rpGetWord(idx) — Retourne le mot courant avec sa forme cible résolue. */
function _rpGetWord(idx) {
  var card = _rpWords[idx];
  if (!card) return null;
  var targetWord, displayEmoji;
  if (currentMode === 'learn_french') {
    targetWord   = card.fr;
  } else {
    targetWord = (card.variants && card.variants[currentRegion])
      ? card.variants[currentRegion] : card.es;
  }
  displayEmoji = card.em || '';
  return { card: card, word: targetWord, emoji: displayEmoji };
}

/* _rpMicDelay(word) — Calcule le délai (ms) avant déclenchement du micro,
   en fonction de la longueur du mot à prononcer. Certains mots contiennent
   un "/" car ils proposent deux formulations (ex : "Por favor / De nada"
   ou "Buenos días / Buen día") : il faut laisser à l'apprenant le temps
   d'entendre ET de prononcer les deux, donc on augmente le délai de base
   et on ajoute un supplément par "/" et par mot supplémentaire. */
function _rpMicDelay(word) {
  var BASE       = 1800;  // délai standard pour un mot simple
  var PER_SLASH  = 1400;  // supplément par "/" (mot composé de 2 formulations)
  var PER_WORD   = 90;    // supplément par mot au-delà du premier (longueur de phrase)

  if (!word) return BASE;

  var slashCount = (word.match(/\//g) || []).length;
  var wordCount  = word.split(/\s+/).filter(Boolean).length;

  var extra = slashCount * PER_SLASH + Math.max(0, wordCount - 1) * PER_WORD;
  return BASE + extra;
}

/* _rpClearTimers() — Annule les timers en cours (changement manuel). */
function _rpClearTimers() {
  if (_rpAutoTimer) { clearTimeout(_rpAutoTimer); _rpAutoTimer = null; }
  if (_rpMicTimer)  { clearTimeout(_rpMicTimer);  _rpMicTimer  = null; }
  _stopMicReco();
}

/* renderRepeat() — Point d'entrée : initialise la session et affiche le premier mot. */
function renderRepeat() {
  _rpClearTimers();
  _rpIdx      = 0;
  _rpScore    = 0;
  _rpAnswered = false;
  // Filtre les mots ayant fr ET es
  _rpWords = (CT.words || []).filter(w => w.fr && w.es);

  if (!_rpWords.length) {
    var noW = L('No hay palabras disponibles.', 'Aucun mot disponible.');
    document.getElementById('tabContent').innerHTML = '<div class="result-box"><p>' + noW + '</p></div>';
    return;
  }
  _rpShowWord();
}

/* _rpShowWord() — Affiche le mot courant et lance la séquence audio + micro. */
function _rpShowWord() {
  _rpClearTimers();
  _rpAnswered = false;

  if (_rpIdx >= _rpWords.length) {
    _rpShowEnd();
    return;
  }

  var total  = _rpWords.length;
  var info   = _rpGetWord(_rpIdx);
  if (!info) { _rpIdx++; _rpShowWord(); return; }

  var micLang    = isFrench() ? 'fr-FR' : voiceLang;
  var counterLbl = L('Palabra', 'Mot');
  var scoreLbl   = L('Aciertos', 'Réussites');
  var skipLbl    = L('⏭ Saltar', '⏭ Passer');
  var rehearLbl  = L('🔁 Volver a escuchar', '🔁 Réentendre');

  var emojiHtml = info.emoji
    ? '<div class="rp-word-emoji">' + info.emoji + '</div>'
    : '';

  document.getElementById('tabContent').innerHTML =
    '<div class="rp-wrap">'
    + '<div class="rp-header">'
    +   '<span class="rp-counter">' + counterLbl + ' ' + (_rpIdx + 1) + ' / ' + total + '</span>'
    +   '<span class="rp-score">' + scoreLbl + ' : <strong>' + _rpScore + '</strong></span>'
    + '</div>'
    + '<div class="rp-word-box">'
    +   emojiHtml
    +   '<div class="rp-word">' + info.word + '</div>'
    + '</div>'
    + '<div class="rp-feedback" id="rpFeedback"></div>'
    + '<div class="rp-controls">'
    +   '<button class="mic-btn rp-rehear-btn" id="rpRehearBtn" onclick="_rpRehear()">' + rehearLbl + '</button>'
    +   '<button class="mic-btn rp-skip-btn"   id="rpSkipBtn"   onclick="_rpSkip()">'   + skipLbl   + '</button>'
    + '</div>'
    + '</div>';

  // 1. Prononce le mot automatiquement
  speak(info.word);

  // 2. Lance la reconnaissance vocale après un délai adapté à la longueur
  //    du mot (plus long si le mot contient "/" : deux formulations à dire)
  _rpMicTimer = setTimeout(function() {
    var fbEl = document.getElementById('rpFeedback');
    if (fbEl) {
      fbEl.className   = 'rp-feedback mic-feedback mic-feedback--listening';
      fbEl.textContent = L('🎙️ Escuchando…', '🎙️ Écoute en cours…');
    }
    _rpStartMic(info.word, micLang);
  }, _rpMicDelay(info.word));
}

/* _rpStartMic(word, lang) — Lance la reconnaissance vocale dans le contexte Répète. */
function _rpStartMic(word, lang) {
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    var fbEl = document.getElementById('rpFeedback');
    if (fbEl) {
      fbEl.className   = 'rp-feedback mic-feedback mic-feedback--ko';
      fbEl.textContent = L(
        '⚠️ Reconocimiento de voz no disponible.',
        '⚠️ Reconnaissance vocale non disponible.'
      );
    }
    return;
  }
  _stopMicReco();

  var reco = new SR();
  _micReco = reco;
  reco.lang           = lang;
  reco.continuous     = false;
  reco.interimResults = false;

  reco.onresult = function(e) {
    if (_rpAnswered) return;
    _rpAnswered = true;
    var transcript = e.results[0][0].transcript;
    var expected   = _normalizeSpeech(word);
    var spoken     = _normalizeSpeech(transcript);
    var ok = _speechMatch(spoken, expected);

    if (ok) _rpScore++;
    _vibrateFeedback(ok);
    _rpShowFeedback(ok, transcript, word, lang);
  };

  reco.onerror = function(e) {
    if (_rpAnswered) return;
    _rpAnswered = true;
    var fbEl = document.getElementById('rpFeedback');

    if (_isMicBlockedError(e.error)) {
      // Micro bloqué : on ne fait PAS avancer automatiquement, l'apprenant
      // doit d'abord réautoriser l'accès. On affiche un message clair avec
      // une icône facilement reconnaissable et un bouton pour réessayer.
      if (fbEl) {
        fbEl.className = 'rp-feedback mic-feedback mic-feedback--blocked';
        fbEl.innerHTML = _micBlockedHtml()
          + '<br><button class="mic-btn rp-retry-btn" style="margin-top:8px" '
          + 'onclick="_rpRehear()">' + L('🔁 Reintentar', '🔁 Réessayer') + '</button>';
      }
      return; // pas de _rpAutoTimer : on attend l'action de l'apprenant
    }

    if (fbEl && e.error !== 'no-speech') {
      fbEl.className   = 'rp-feedback mic-feedback mic-feedback--ko';
      fbEl.textContent = L('⚠️ Error: ', '⚠️ Erreur : ') + e.error;
    } else if (fbEl) {
      fbEl.className   = 'rp-feedback';
      fbEl.textContent = '';
    }
    // Passe au mot suivant après un silence
    _rpAutoTimer = setTimeout(function() { _rpIdx++; _rpShowWord(); }, 2000);
  };

  reco.onend = function() { _micReco = null; };
  reco.start();
}

/* _rpShowFeedback(ok, transcript, word, lang) — Affiche le feedback et programme l'avancement. */
function _rpShowFeedback(ok, transcript, word, lang) {
  var fbEl = document.getElementById('rpFeedback');
  if (fbEl) {
    if (ok) {
      fbEl.className = 'rp-feedback mic-feedback mic-feedback--ok';
      fbEl.innerHTML = L('✅ ¡Muy bien! ', '✅ Parfait ! ')
        + '<span class="mic-transcript">"' + transcript + '"</span>';
    } else {
      fbEl.className = 'rp-feedback mic-feedback mic-feedback--ko';
      fbEl.innerHTML = L('🔁 Inténtalo otra vez · Escuchado : ', '🔁 Réessaie · Entendu : ')
        + '<span class="mic-transcript">"' + transcript + '"</span>';
    }
  }
  // Avancement automatique après 2500ms
  _rpAutoTimer = setTimeout(function() { _rpIdx++; _rpShowWord(); }, 2500);
}

/* _rpRehear() — Prononce à nouveau le mot courant et relance le micro. */
function _rpRehear() {
  _rpClearTimers();
  _rpAnswered = false;
  var micLang = isFrench() ? 'fr-FR' : voiceLang;
  var info   = _rpGetWord(_rpIdx);
  if (!info) return;

  var fbEl = document.getElementById('rpFeedback');
  if (fbEl) { fbEl.className = 'rp-feedback'; fbEl.textContent = ''; }

  speak(info.word);
  _rpMicTimer = setTimeout(function() {
    var fbEl2 = document.getElementById('rpFeedback');
    if (fbEl2) {
      fbEl2.className   = 'rp-feedback mic-feedback mic-feedback--listening';
      fbEl2.textContent = L('🎙️ Escuchando…', '🎙️ Écoute en cours…');
    }
    _rpStartMic(info.word, micLang);
  }, _rpMicDelay(info.word));
}

/* _rpSkip() — Passe au mot suivant sans réponse (ne compte pas comme réussite). */
function _rpSkip() {
  _rpClearTimers();
  _rpAnswered = true;
  _rpIdx++;
  _rpShowWord();
}

/* _rpShowEnd() — Affiche l'écran de fin de session avec score et bouton Recommencer. */
function _rpShowEnd() {
  _rpClearTimers();
  var total  = _rpWords.length;
  var pct    = total ? Math.round(_rpScore / total * 100) : 0;

  var titleOk  = L('¡Sesión completada!', 'Session terminée !');
  var retryLbl = L('🔁 Volver a empezar', '🔁 Recommencer');
  var scoreLbl = L('Resultado', 'Score');

  var starsEarned = _calcStars(pct);
  var starsHtml   = Array.from({ length: 3 }, function(_, i) {
    return i < starsEarned ? '⭐' : '☆';
  }).join('');

  document.getElementById('tabContent').innerHTML =
    '<div class="result-box">'
    + '<div style="font-size:2rem;margin-bottom:5px;">' + starsHtml + '</div>'
    + '<h3>' + titleOk + '</h3>'
    + '<div class="score-num">' + _rpScore + ' / ' + total + '</div>'
    + '<div style="font-size:.9rem;color:#666;margin:6px 0">' + scoreLbl + ' : ' + pct + '%</div>'
    + '<button class="retry-btn" style="margin-top:14px;background:#888" onclick="renderRepeat()">'
    + retryLbl + '</button>'
    + '</div>';
}


/* ═══════════════════════════════════════════════════════════
   10. QUIZ 10 QUESTIONS — QCM dynamique avec étoiles
   ─────────────────────────────────────────────────────────
   Deux types de quiz coexistent :

   A) Quiz Niveau 1 (vocabulaire) — DYNAMIQUE
      Questions générées aléatoirement à partir des mots du thème.
      La variante régionale est prise en compte pour les réponses.
      Nombre de questions adapté à la taille du thème :
        < 10 mots  → 3 questions
        10–14 mots → 5 questions
        15–27 mots → 8 questions
        > 27 mots  → 10 questions

   B) Quiz Alphabet — Questions audio fixes (données dans data.js)

   C) Quiz Niveau 2 (dialogue) — Questions fixes embarquées dans les données
═══════════════════════════════════════════════════════════ */

/* Retourne le nombre de questions du quiz selon la taille du thème. */
function getQuizTotal(theme) {
  if (theme.level === 2) return (theme.quiz || []).length; // Niveau 2 : questions fixes
  var n = (theme.words || []).length;
  if (n < 10)  return 3;
  if (n < 15)  return 5;
  if (n <= 27) return 8;
  return 10;
}

/* _shuffle(arr) — Mélange un tableau selon l'algorithme Fisher-Yates.
   Retourne un nouveau tableau (n'altère pas l'original). */
function _shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j  = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

/* _generateLevel1Quiz(theme) — Génère dynamiquement les questions du quiz Niveau 1.
   Pour chaque question :
     - Sélectionne un mot de la liste (mélangée)
     - Applique la variante régionale au mot espagnol
     - Génère 3 distracteurs aléatoires + 1 bonne réponse (position aléatoire)
   Retourne un tableau de questions [{q, opts:[4], ans:index}] */
function _generateLevel1Quiz(theme) {
  // Filtre les mots incomplets (sans fr ou sans es)
  const words = (theme.words || []).filter(w => w.fr && w.es);
  if (words.length < 2) return [];

  const total = getQuizTotal(theme);
  const pool  = _shuffle(words).slice(0, total);

  return pool.map(function(card) {
    // Résolution du mot espagnol (variante régionale ou castillan par défaut)
    var correctEs = (card.variants && card.variants[currentRegion])
      ? card.variants[currentRegion] : card.es;
    var correctFr = card.fr;

    // Question et réponse correcte selon le mode
    var qText, correctAnswer;
    if (currentMode === 'learn_french') {
      qText         = '¿Cómo se dice "' + correctFr  + '" en español?';
      correctAnswer = correctEs;
    } else {
      qText         = 'Comment dit-on "' + correctEs + '" en français ?';
      correctAnswer = correctFr;
    }

    // Génération de 3 distracteurs depuis les autres mots du thème
    var distractors = _shuffle(words.filter(w => w !== card))
      .slice(0, 3)
      .map(function(d) {
        return currentMode === 'learn_french'
          ? ((d.variants && d.variants[currentRegion]) ? d.variants[currentRegion] : d.es)
          : d.fr;
      });

    // Insertion de la bonne réponse à un index aléatoire parmi les 4 options
    var opts   = distractors.slice(0, 3);
    var ansIdx = Math.floor(Math.random() * 4);
    opts.splice(ansIdx, 0, correctAnswer);

    return { q: qText, opts: opts, ans: ansIdx };
  });
}

/* getQuizQuestions(theme) — Retourne les questions selon le type de thème.
   Dispatche vers la source appropriée (fixe ou dynamique). */
function getQuizQuestions(theme) {
  if (theme.level === 2 || theme.type === 'dialog') return (theme.quiz    || []);
  if (theme.type === 'alpha')                        return (theme.quiz10  || []).slice(0, 12);
  return _generateLevel1Quiz(theme); // Niveau 1 standard : génération dynamique
}

/* renderQuiz10() — Affiche la question courante du quiz, ou l'écran de résultats. */
function renderQuiz10() {
  // Sélection de la source de questions
  var qs;
  if (CT && CT.type === 'alpha') {
    qs = getQuizQuestions(CT);
  } else if (CT && CT.level === 1) {
    qs = _currentDynQuiz.length ? _currentDynQuiz : _generateLevel1Quiz(CT);
  } else {
    qs = getQuizQuestions(CT);
  }
  var total = qs.length;

  // Cas : aucune question disponible
  if (!qs || !total) {
    var noQLabel = L(
      'No hay ningún cuestionario disponible.',
      'Aucun quiz disponible.'
    );
    document.getElementById('tabContent').innerHTML =
      '<div class="result-box"><p>' + noQLabel + '</p></div>';
    return;
  }

  /* ─── Écran de résultats (toutes les questions répondues) ─── */
  if (q10Step >= total) {
    _clearQuizSession();
    var pct         = Math.round(q10Score / total * 100);
    var earnedStars = _calcStars(pct);
    if (earnedStars > 0) markDone(CT.id, pct);

    var r         = _quizResultStrings(pct, 'q10');
    var isSuccess = earnedStars > 0;
    var endStars  = Array.from({ length: 3 }, function(_, i) {
      return i < earnedStars ? '⭐' : '☆';
    }).join('');

    document.getElementById('tabContent').innerHTML =
      '<div class="result-box">'
      + '<div style="font-size:2rem;margin-bottom:5px;">'
      + (earnedStars === 3 ? '⭐⭐⭐' : endStars) + '</div>'
      + '<h3>' + r.title + '</h3>'
      + '<div class="score-num">' + q10Score + '/' + total + '</div>'
      + '<div style="font-size:1rem;margin:6px 0;color:'
      + (isSuccess ? '#009A44' : '#EF2B2D') + '">' + r.sub + '</div>'
      + '<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:14px">'
      + '<button class="retry-btn" style="background:#888" onclick="_retryQuiz10()">'
      + r.retry + '</button>'
      + (isSuccess
          ? '<button class="retry-btn" onclick="renderSections();showScreen(\'sections-level1\')">'
            + r.finish + '</button>'
          : '')
      + '</div></div>';
    renderSections();
    return;
  }

  var q = qs[q10Step];

  /* ─── Quiz audio (alphabet) ─── */
  if (isAlphaQuiz()) {
    var audioLabel = L(
      'Escucha el sonido y elige la letra correcta',
      'Écoutez le son et choisissez la bonne lettre'
    );
    var listenHint = L('Haz clic para escuchar', 'Cliquez pour écouter');
    var qLabel     = L('Pregunta ', 'Question ') + (q10Step + 1) + '/' + total;

    var opts = q.opts.map(function(o, i) {
      return '<button class="quiz-opt" id="q10o' + i
        + '" onclick="checkQ10(' + i + ',' + q.ans + ')" '
        + 'style="font-size:1.4rem;font-weight:900;letter-spacing:2px">' + o + '</button>';
    }).join('');

    document.getElementById('tabContent').innerHTML =
      '<div class="alpha-audio-quiz">'
      + '<div class="alpha-audio-label">' + audioLabel + '<br><small>' + qLabel + '</small></div>'
      + '<button class="alpha-audio-btn" id="playAudioBtn" onclick="playAlphaAudio(\'' + esc(q.audio) + '\')" title="' + listenHint + '">🔊</button>'
      + '<div style="font-size:.75rem;color:#aaa;margin-bottom:14px">' + listenHint + '</div>'
      + '<div class="quiz-options" style="grid-template-columns:1fr 1fr;gap:12px">' + opts + '</div>'
      + '<div class="quiz-feedback" id="q10fb"></div>'
      + '</div>';

    setTimeout(function() { playAlphaAudio(q.audio); }, 400); // Lecture automatique de la lettre
    q10Answered = false;
    return;
  }

  /* ─── Quiz standard (vocabulaire) ─── */
  var qStdLabel = L('Pregunta ', 'Question ') + (q10Step + 1) + '/' + total;

  var stdOpts = q.opts.map(function(o, i) {
    return '<button class="quiz-opt" id="q10o' + i
      + '" onclick="checkQ10(' + i + ',' + q.ans + ')">' + o + '</button>';
  }).join('');

  document.getElementById('tabContent').innerHTML =
    '<div class="dialog-quiz-wrap">'
    + '<div class="quiz-q"><div class="q-text">' + qStdLabel + '<br><b>' + q.q + '</b></div></div>'
    + '<div class="quiz-options" style="grid-template-columns:1fr">' + stdOpts + '</div>'
    + '<div class="quiz-feedback" id="q10fb"></div>'
    + '</div>';
  q10Answered = false;
}

/* playAlphaAudio(letter) — Prononce une lettre de l'alphabet + animation bouton. */
function playAlphaAudio(letter) {
  speak(letter);
  var btn = document.getElementById('playAudioBtn');
  if (btn) {
    btn.style.transform = 'scale(0.9)';
    setTimeout(function() { btn.style.transform = 'scale(1)'; }, 200);
  }
}

/* _retryQuiz10() — Relance le quiz en régénérant les questions si Niveau 1. */
function _retryQuiz10() {
  q10Step = 0; q10Score = 0; q10Answered = false;
  _clearQuizSession();
  if (CT && CT.level === 1 && CT.type !== 'alpha') {
    _currentDynQuiz = _generateLevel1Quiz(CT);
  }
  renderQuiz10();
}

/* checkQ10(chosen, correct) — Valide la réponse choisie pour le quiz 10.
   Colore les boutons (vert = correct, rouge = erreur), prononce la réponse
   correcte, puis passe automatiquement à la question suivante après 1,6s. */
function checkQ10(chosen, correct) {
  if (q10Answered) return;
  q10Answered = true;

  // Sélection de la source de questions (identique à renderQuiz10)
  var qs;
  if (CT && CT.type === 'alpha')  { qs = getQuizQuestions(CT); }
  else if (CT && CT.level === 1) { qs = _currentDynQuiz; }
  else                           { qs = getQuizQuestions(CT); }

  // Coloration des boutons : vert pour la bonne réponse, rouge pour le mauvais choix
  document.querySelectorAll('[id^=q10o]').forEach(function(b, i) {
    b.classList.add('disabled');
    if (i === correct) b.classList.add('correct');
    else if (i === chosen && chosen !== correct) b.classList.add('wrong');
  });

  if (chosen === correct) q10Score++;

  // Retour haptique discret (mobile uniquement, échoue silencieusement ailleurs)
  _vibrateFeedback(chosen === correct);

  var correctWord = qs[q10Step].opts[correct];
  var fb = document.getElementById('q10fb');
  var fbOk  = L('✅ ¡Correcto! ¡Enhorabuena!',           '✅ Correct ! Félicitations !');
  var fbErr = L('❌ Respuesta incorrecta. La solución era: ', '❌ Mauvaise réponse. La solution était : ');
  fb.textContent = (chosen === correct) ? fbOk : fbErr + correctWord;
  fb.style.color = (chosen === correct) ? '#009A44' : '#c0392b';

  // Prononciation de la réponse correcte
  if (isAlphaQuiz()) {
    if (chosen !== correct) setTimeout(function() { speak(qs[q10Step].audio); }, 300);
  } else if (CT.words) {
    // Recherche du mot dans le dictionnaire pour en extraire la forme régionale
    var match = CT.words.find(function(w) {
      var regionalVar = (w.variants && w.variants[currentRegion]) ? w.variants[currentRegion] : '';
      return w.es === correctWord || w.fr === correctWord || regionalVar === correctWord;
    });
    if (match) {
      var finalEsMatch = (match.variants && match.variants[currentRegion])
        ? match.variants[currentRegion] : match.es;
      speak(L(match.fr, finalEsMatch));
    }
  }

  // Passage automatique à la question suivante après 1,6s
  setTimeout(function() { q10Step++; renderQuiz10(); }, 1600);

  // Mémorise la position courante (sessionStorage) pour permettre la reprise
  _saveQuizSession();
}


/* ═══════════════════════════════════════════════════════════
   11. DIALOGUE — Bulles de conversation situationnelles
   ─────────────────────────────────────────────────────────
   renderDialog() — Affiche les situations de dialogue avec :
     - Sélecteur de situation (Sit. 1, Sit. 2, Sit. 3)
     - Bulles de conversation avec animation d'apparition progressive
     - Bouton audio sur chaque bulle (prononce la ligne dans la langue cible)
     - Traduction affichée sous chaque bulle
     - Adaptation automatique des variantes régionales hispaniques

   _DIALOG_REGIONAL_SUBS — Table de substitution castillan → variante AL
     Utilisée par _adaptDialogueLine() pour les lignes sans variants explicite.
═══════════════════════════════════════════════════════════ */

/* Table de substitutions pour adapter les dialogues à la variante régionale active.
   Format : { 'mot_castillan': { CODE_PAYS: 'mot_regional', ... } }
   Utilisée uniquement quand la ligne n'a pas de propriété `variants` propre. */
var _DIALOG_REGIONAL_SUBS = {
  // Transports
  'autobús':    { MX:'camión',      AR:'colectivo',   CO:'bus',         VE:'autobús',  PE:'micro',   CL:'micro' },
  'billete':    { MX:'boleto',      AR:'boleto',      CO:'pasaje',      VE:'pasaje',   PE:'boleto',  CL:'boleto' },
  'coche':      { MX:'carro',       AR:'auto',        CO:'carro',       VE:'carro',    PE:'carro',   CL:'auto' },
  // Boissons
  'zumo':       { MX:'jugo',        AR:'jugo',        CO:'jugo',        VE:'jugo',     PE:'jugo',    EC:'jugo' },
  // Nourriture
  'patata':     { MX:'papa',        AR:'papa',        CO:'papa',        VE:'papa',     PE:'papa',    EC:'papa' },
  'patatas':    { MX:'papas',       AR:'papas',       CO:'papas',       VE:'papas',    PE:'papas',   EC:'papas' },
  // Technologie
  'móvil':      { MX:'celular',     AR:'celular',     CO:'celular',     VE:'celular',  PE:'celular', CL:'celular' },
  'ordenador':  { MX:'computadora', AR:'computadora', CO:'computador',  VE:'computador', PE:'computadora', CL:'computador' },
  // Personnel de service
  'camarero':   { MX:'mesero',      AR:'mozo',        CO:'mesero',      VE:'mesero',   PE:'mesero',  CL:'mesero' },
  'camarera':   { MX:'mesera',      AR:'moza',        CO:'mesera',      VE:'mesera',   PE:'mesera',  CL:'mesera' },
  // Expressions familières
  '¡Vale!':     { MX:'¡Sale!',      AR:'¡Dale!',      CO:'¡Listo!',     VE:'¡Listo!',  PE:'¡Dale!',  EC:'¡Dale!' },
  'Vale,':      { MX:'Sale,',       AR:'Dale,',       CO:'Listo,',      VE:'Listo,',   PE:'Dale,',   EC:'Dale,' },
  '¡Venga!':    { MX:'¡Órale!',     AR:'¡Dale!',      CO:'¡Dale!',      VE:'¡Dale!',   PE:'¡Dale!',  EC:'¡Dale!' },
  // Logement
  'piso':       { MX:'departamento', AR:'departamento', CO:'apartamento', VE:'apartamento', PE:'departamento' }
};

/* _adaptDialogueLine(esText) — Remplace les mots castillans par leurs équivalents régionaux.
   Respecte les frontières de mots (word-boundary) et les caractères spéciaux espagnols.
   Ne modifie rien si la région n'a pas de substitution définie pour ce mot. */
function _adaptDialogueLine(esText) {
  if (!esText) return esText;
  var result = esText;
  Object.keys(_DIALOG_REGIONAL_SUBS).forEach(function(castillanWord) {
    var regionMap = _DIALOG_REGIONAL_SUBS[castillanWord];
    var regional  = regionMap[currentRegion];
    if (!regional) return; // Pas de variante → on conserve le castillan
    var escaped = castillanWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Remplacement insensible à la casse avec simulation de word-boundary pour l'espagnol
    result = result.replace(
      new RegExp('(?<![\\wÁÉÍÓÚáéíóúÑñ])' + escaped + '(?![\\wÁÉÍÓÚáéíóúÑñ])', 'g'),
      regional
    );
  });
  return result;
}

/* renderDialog() — Construit et affiche les bulles de conversation pour la situation active. */
function renderDialog() {
  const sits    = CT.situations;
  const sit     = sits[sitIdx];

  // Boutons de sélection de situation (Sit. 1, Sit. 2, Sit. 3)
  var sitBtns = sits.map(function(s, i) {
    return '<button class="sit-btn' + (i === sitIdx ? ' active' : '')
      + '" onclick="pickSit(' + i + ')">' + s.label + '</button>';
  }).join('');

  // Génération des bulles avec adaptation régionale et animation d'entrée
  var bubbles = sit.dialogue.map(function(ln, i) {
    // Priorité 1 : variants explicite sur la ligne → Priorité 2 : substitution auto
    var finalEsLine = (ln.variants && ln.variants[currentRegion])
      ? ln.variants[currentRegion]
      : _adaptDialogueLine(ln.es);

    var mainMsg   = L(ln.fr, finalEsLine);
    var transMsg  = L(finalEsLine, ln.fr);
    var spokenKey = L(ln.fr, finalEsLine);
    var listenTip    = L('Escuchar', 'Écouter');
    // aria-label descriptif : nom du locuteur + action + texte prononcé
    // (pattern repris de l'app Oromo pour l'accessibilité lecteurs d'écran)
    var ariaListen   = _escAttr(listenTip + ' : ' + ln.s + ' — ' + spokenKey);

    // Les bulles commencent invisibles et s'affichent via un délai croissant (effet cascade)
    return '<div class="bubble ' + ln.side + '" style="opacity:0;transition:opacity .3s '
      + (i * 0.08) + 's" id="bl' + i + '">'
      + '<div class="speaker-name">' + ln.s + '</div>'
      + '<div class="msg-row">'
      + '<div class="msg">' + mainMsg + '</div>'
      + '<button class="speak-bubble-btn" onclick="speak(\'' + esc(spokenKey) + '\')" title="' + listenTip + '" aria-label="' + ariaListen + '">🔊</button>'
      + '</div>'
      + '<div class="bubble-translation">' + transMsg + '</div>'
      + '</div>';
  }).join('');

  var quizBtnLabel = L('Iniciar el minicuestionario ➜', 'Lancer le mini quiz ➜');

  document.getElementById('tabContent').innerHTML =
    '<div class="sit-nav">' + sitBtns + '</div>'
    + '<div class="dialogue-box">'
    + '<div class="scene-img-big">' + sit.img + '</div>'
    + '<div class="bubble-wrap">' + bubbles + '</div>'
    + '</div>'
    + '<div class="action-row">'
    + '<button class="btn-start-quiz" onclick="switchTab(\'dquiz\')">' + quizBtnLabel + '</button>'
    + '</div>';

  // Déclenche l'animation d'apparition des bulles après un délai minimal
  setTimeout(function() {
    document.querySelectorAll('[id^=bl]').forEach(b => { b.style.opacity = '1'; });
  }, 80);
}

/* pickSit(i) — Sélectionne la situation i et rafraîchit le dialogue. */
function pickSit(i) { sitIdx = i; renderDialog(); }


/* ═══════════════════════════════════════════════════════════
   12. VOCABULAIRE — Lexique cliquable (chips)
   ─────────────────────────────────────────────────────────
   renderVocab() — Affiche les mots-clés du thème sous forme
   de "chips" cliquables. Un clic prononce le mot dans la langue cible.

   Format des données vocab[] : 'mot_ES = mot_FR'
   La variante régionale est recherchée dans CT.words pour
   les mots espagnols qui en ont une.
═══════════════════════════════════════════════════════════ */

function renderVocab() {
  var chips = CT.vocab.map(function(v) {
    var parts = v.split('=');
    var es    = parts[0].trim();
    var fr    = parts[1] ? parts[1].trim() : '';

    // Recherche de la variante régionale dans le dictionnaire du thème
    var finalEs = es;
    if (CT.words) {
      var match = CT.words.find(function(w) {
        if (w.es === es) return true;
        // Gère les cas avec barres obliques (ex: "Morado / Violeta")
        var esParts = w.es.split('/').map(p => p.trim());
        return esParts.includes(es);
      });
      if (match && match.variants && match.variants[currentRegion]) {
        finalEs = match.variants[currentRegion];
      }
    }

    var mainWord  = L(fr,      finalEs);
    var subWord   = L(finalEs, fr);
    var spokenKey = L(fr,      finalEs);

    return '<span class="vocab-chip" style="display:inline-flex;flex-direction:column;align-items:center;text-align:center;" onclick="speak(\'' + esc(spokenKey) + '\')">'
      + '<span class="vocab-item-et" style="font-weight:bold;">' + mainWord + '</span>'
      + (subWord ? '<span class="vocab-translation-sub">' + subWord + '</span>' : '')
      + '</span>';
  }).join('');

  var vocabTitle   = L(
    '📚 Vocabulario básico — ¡Haz clic para escuchar el español!',
    '📚 Lexique essentiel — Cliquez pour écouter l\'Espagnol !'
  );
  var quizBtnLabel = L('Iniciar el minicuestionario ➜', 'Lancer le mini quiz ➜');

  document.getElementById('tabContent').innerHTML =
    '<div class="vocab-section">'
    + '<div class="vocab-title">' + vocabTitle + '</div>'
    + '<div class="vocab-grid">'  + chips      + '</div>'
    + '</div>'
    + '<div class="action-row">'
    + '<button class="btn-start-quiz" onclick="switchTab(\'dquiz\')">' + quizBtnLabel + '</button>'
    + '</div>';
}


/* ═══════════════════════════════════════════════════════════
   13. QUIZ DIALOGUE — Mini-quiz de fin de dialogue
   ─────────────────────────────────────────────────────────
   Questions à choix multiples (4 options) issues des données
   fixes du thème (CT.quiz[]).
   Mêmes règles d'étoiles que le quiz 10 questions.
═══════════════════════════════════════════════════════════ */

function renderDialogQuiz() {
  var qs    = CT.quiz;
  var total = qs.length;

  /* ─── Écran de résultats ─── */
  if (dqStep >= total) {
    _clearQuizSession();
    var pct         = Math.round(dqScore / total * 100);
    var earnedStars = _calcStars(pct);
    if (earnedStars > 0) markDone(CT.id, pct);

    var r         = _quizResultStrings(pct, 'dq');
    var isSuccess = earnedStars > 0;
    var endStars  = Array.from({ length: 3 }, function(_, i) {
      return i < earnedStars ? '⭐' : '☆';
    }).join('');

    document.getElementById('tabContent').innerHTML =
      '<div class="result-box">'
      + '<div style="font-size:2rem;margin-bottom:5px;">'
      + (earnedStars === 3 ? '🎉🎉🎉' : endStars) + '</div>'
      + '<h3>' + r.title + '</h3>'
      + '<div class="score-num">' + dqScore + '/' + total + '</div>'
      + '<div style="font-size:.9rem;margin-top:6px;color:'
      + (isSuccess ? '#009A44' : '#EF2B2D') + '">' + r.sub + '</div>'
      + '<div style="display:flex;gap:8px;justify-content:center;margin-top:14px;flex-wrap:wrap">'
      + '<button class="retry-btn" style="background:#888" onclick="dqStep=0;dqScore=0;dqAnswered=false;_clearQuizSession();renderDialogQuiz()">'
      + r.retry + '</button>'
      + (isSuccess
          ? '<button class="retry-btn" onclick="renderSections();showScreen(\'sections-level1\')">'
            + r.finish + '</button>'
          : '')
      + '</div></div>';
    renderSections();
    return;
  }

  /* ─── Question courante ─── */
  var q      = qs[dqStep];
  var qLabel = L('Pregunta ', 'Question ') + (dqStep + 1) + '/' + total;

  var opts = q.opts.map(function(o, i) {
    return '<button class="quiz-opt" id="dqo' + i
      + '" onclick="checkDQ(' + i + ',' + q.ans + ')">' + o + '</button>';
  }).join('');

  document.getElementById('tabContent').innerHTML =
    '<div class="dialog-quiz-wrap">'
    + '<div class="quiz-q"><div class="q-text">' + qLabel + '<br><b>' + q.q + '</b></div></div>'
    + '<div class="quiz-options" style="grid-template-columns:1fr">' + opts + '</div>'
    + '<div class="quiz-feedback" id="dqfb"></div>'
    + '</div>';
  dqAnswered = false;
}

/* checkDQ(chosen, correct) — Valide une réponse du mini-quiz dialogue.
   Feedback immédiat + passage automatique à la question suivante après 1,5s. */
function checkDQ(chosen, correct) {
  if (dqAnswered) return;
  dqAnswered = true;

  document.querySelectorAll('[id^=dqo]').forEach(function(b, i) {
    b.classList.add('disabled');
    if (i === correct) b.classList.add('correct');
    else if (i === chosen && chosen !== correct) b.classList.add('wrong');
  });

  if (chosen === correct) dqScore++;

  // Retour haptique discret (mobile uniquement, échoue silencieusement ailleurs)
  _vibrateFeedback(chosen === correct);

  var fb   = document.getElementById('dqfb');
  var fbOk = L('✅ ¡Buena respuesta!',    '✅ Bonne réponse !');
  var fbErr= L('❌ ¡Inténtalo de nuevo!', '❌ Réessayer !');
  fb.textContent = (chosen === correct) ? fbOk : fbErr;
  fb.style.color = (chosen === correct) ? '#009A44' : '#c0392b';

  setTimeout(function() { dqStep++; renderDialogQuiz(); }, 1500);

  // Mémorise la position courante (sessionStorage) pour permettre la reprise
  _saveQuizSession();
}


/* ═══════════════════════════════════════════════════════════
   14. UTILITAIRES — Chaînes de résultat & échappement HTML
   ─────────────────────────────────────────────────────────
   _quizResultStrings(pct, type) — Génère les textes de l'écran
     de résultat (titre, sous-titre, boutons) dans la bonne langue.

   esc(s) — Échappe les guillemets simples et doubles pour
     insertion sécurisée dans les attributs HTML onclick.
═══════════════════════════════════════════════════════════ */

/* Retourne un objet {title, sub, retry, finish} localisé selon le mode et le score. */
function _quizResultStrings(pct) {
  const stars     = _calcStars(pct);
  const isSuccess = stars > 0;

  var title = L('¡Prueba terminada!', 'Quiz terminé !');
  if      (stars === 3) title = L('¡Perfecto! ⭐⭐⭐',  'Parfait ! ⭐⭐⭐');
  else if (stars === 2) title = L('¡Muy bien! ⭐⭐',    'Très bien ! ⭐⭐');
  else if (stars === 1) title = L('¡Bien! ⭐',           'Bien ! ⭐');

  return {
    title : title,
    sub   : isSuccess
      ? L('¡Módulo superado! Puedes pasar al siguiente o volver a intentarlo para conseguir más estrellas.',
          'Module validé ! Vous pouvez passer au suivant ou réessayer pour plus d\'étoiles.')
      : L('Necesitas al menos un 50 % de respuestas correctas (1⭐) para que cuente. ¡Inténtalo de nuevo!',
          'Il vous faut au moins 50% de bonnes réponses (1⭐) pour valider. Réessayez !'),
    retry : L('🔄 Inténtalo de nuevo', '🔄 Réessayer'),
    finish: L('✓ Finalizar',           '✓ Terminer')
  };
}

/* esc(s) — Échappe les caractères spéciaux pour injection dans les onclick="" HTML.
   Gère les antislashs, guillemets simples et doubles. */
function esc(s) {
  return (s || '').replaceAll('\\', '\\\\').replaceAll("'", "\\'").replaceAll('"', '&quot;');
}

/* _escAttr(s) — Échappe une chaîne pour injection dans un attribut HTML (aria-label, title…).
   Remplace les guillemets doubles et les caractères HTML sensibles.
   Différent de esc() qui cible les contextes onclick="…" JS. */
function _escAttr(s) {
  return (s || '')
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}


/* ═══════════════════════════════════════════════════════════
   15. VARIANTES RÉGIONALES — Sélecteur de pays hispanophones
   ─────────────────────────────────────────────────────────
   Permet à l'utilisateur de choisir sa variante d'espagnol :
   Castillan (ES), Mexique, Colombie, Pérou, Venezuela,
   Argentine, Équateur.

   Fonctions :
     renderRegionOptions() — Construit le sélecteur déroulant HTML
     pickRegion(regionId)  — Applique immédiatement la variante choisie
     changeRegion(region)  — Alias léger (pour rétro-compatibilité)

   Effets de pickRegion() :
     - Sauvegarde le choix dans localStorage
     - Applique la classe CSS region-XX sur <html>
     - Réinitialise la voix espagnole (force une nouvelle détection)
     - Met à jour les drapeaux dans l'interface
     - Rafraîchit le contenu de l'onglet actif si une leçon est ouverte
═══════════════════════════════════════════════════════════ */

/* changeRegion(region) — Alias de pickRegion() conservé pour rétro-compatibilité.
   Tout appel à changeRegion() délègue désormais entièrement à pickRegion()
   qui gère la voix, les couleurs, les drapeaux et le rafraîchissement de contenu. */
function changeRegion(region) {
  pickRegion(region);
}

/* renderRegionOptions() — Génère le sélecteur déroulant de variante hispanique.
   Affiche également un bandeau d'information sur la variante active. */
function renderRegionOptions() {
  var selectContainer = document.getElementById('region-select-container');
  var msgBox          = document.getElementById('region-message-box');
  if (!selectContainer) return;

  // Liste des régions disponibles avec labels localisés selon le mode
  var regions = [
    { id:'ES', name: L('España (Castellano)', 'Espagne (Castillan)'), flag:'🇪🇸' },
    { id:'AR', name: L('Argentina',           'Argentine'),           flag:'🇦🇷' },
    { id:'CO', name: L('Colombia',            'Colombie'),            flag:'🇨🇴' },
    { id:'EC', name: L('Ecuador',             'Équateur'),            flag:'🇪🇨' },
    { id:'MX', name: L('México',              'Mexique'),             flag:'🇲🇽' },
    { id:'PE', name: L('Perú',                'Pérou'),               flag:'🇵🇪' },
    { id:'VE', name: L('Venezuela',           'Venezuela'),           flag:'🇻🇪' }
  ];

  // Construction du <select>
  var html = '<div style="padding:10px 10px 5px 10px;">'
    + '<select id="regionSelector" onchange="pickRegion(this.value)" '
    + 'style="width:100%;padding:12px;border-radius:12px;border:1px solid #ddd;'
    + 'font-size:1rem;background:#fff;cursor:pointer;outline:none;">';
  regions.forEach(function(r) {
    var selected = (currentRegion === r.id) ? ' selected' : '';
    html += '<option value="' + r.id + '"' + selected + '>' + r.flag + ' ' + r.name + '</option>';
  });
  html += '</select></div>';
  selectContainer.innerHTML = html;

  // Bandeau d'info sur la variante active
  var activeRegion = regions.find(r => r.id === currentRegion) || regions[0];
  if (msgBox) {
    var bannerMsg = L(
      'ℹ️ Tu aplicación está configurada actualmente con la variante de <strong>' + activeRegion.name + '</strong>.',
      'ℹ️ Votre application est actuellement configurée sur la variante <strong>' + activeRegion.name + '</strong>.'
    );
    msgBox.innerHTML = '<div style="margin:5px 10px 15px 10px;padding:12px;background-color:#eef9ff;'
      + 'border-left:4px solid #007bff;border-radius:8px;font-size:0.9rem;color:#333;text-align:left;">'
      + bannerMsg + '</div>';
  }
}

/* renderRegionGrid(mode) — Génère la grille visuelle de 7 drapeaux pour le sélecteur
   de variante hispanique dans le Launcher Vue B (Écran 4).
   Affichée pour les DEUX modes :
     • learn_spain  → choisir la variante d'espagnol à apprendre
     • learn_french → choisir sa variante d'espagnol maternelle (origine)
                      pour que l'interface s'adapte à l'apprenant hispanophone. */
function renderRegionGrid(mode) {
  var container = document.getElementById('region-grid-container');
  var msgBox    = document.getElementById('region-message-box');
  if (!container) return;

  /* Utilise le mode courant si aucun n'est passé en paramètre */
  var activeMode = mode || currentMode;

  var regions = [
    { id:'ES', flag:'🇪🇸', nameEs:'España',    nameFr:'Espagne'   },
    { id:'MX', flag:'🇲🇽', nameEs:'México',    nameFr:'Mexique'   },
    { id:'CO', flag:'🇨🇴', nameEs:'Colombia',  nameFr:'Colombie'  },
    { id:'PE', flag:'🇵🇪', nameEs:'Perú',      nameFr:'Pérou'     },
    { id:'VE', flag:'🇻🇪', nameEs:'Venezuela', nameFr:'Venezuela' },
    { id:'AR', flag:'🇦🇷', nameEs:'Argentina', nameFr:'Argentine' },
    { id:'EC', flag:'🇪🇨', nameEs:'Ecuador',   nameFr:'Équateur'  }
  ];

  /* Label du bloc selon le parcours */
  var gridLabel = (activeMode === 'learn_french')
    ? 'TU VARIANTE DE ESPAÑOL'   /* hispanophone : sa langue maternelle */
    : 'VARIANTE RÉGIONALE';      /* francophone  : la variante à apprendre */

  var html = '<div class="launcher-region-grid-wrap">'
    + '<p class="launcher-region-grid-label">' + gridLabel + '</p>'
    + '<div class="launcher-region-grid" role="group" aria-label="' + gridLabel + '">';

  regions.forEach(function(r) {
    var isActive  = (currentRegion === r.id);
    /* Nom du pays dans la langue d'interface :
       learn_french → interface en espagnol → nom en espagnol
       learn_spain  → interface en français → nom en français */
    var countryName = (activeMode === 'learn_french') ? r.nameEs : r.nameFr;
    html += '<button'
      + ' class="launcher-region-btn' + (isActive ? ' launcher-region-btn--active' : '') + '"'
      + ' onclick="pickRegion(\'' + r.id + '\');renderRegionGrid(\'' + activeMode + '\');"'
      + ' aria-pressed="' + isActive + '"'
      + ' title="' + countryName + '">'
      + '<span class="launcher-region-flag">' + r.flag + '</span>'
      + '<span class="launcher-region-name">' + countryName + '</span>'
      + '</button>';
  });

  html += '</div></div>';
  container.innerHTML = html;

  /* Bandeau d'info contextuel selon le parcours */
  if (msgBox) {
    var mainMsg, noteMsg;

    if (activeMode === 'learn_french') {
      /* Parcours Français — apprenant hispanophone */
      mainMsg = '🌍 Elige tu variante de español de origen — el vocabulario y las expresiones se adaptarán a tu variante.';
      noteMsg = 'Ej.: si eres argentino, elige 🇦🇷 Argentina. El contenido usará tu vocabulario regional.';
    } else {
      /* Parcours Espagnol — apprenant francophone */
      mainMsg = '🌍 Choisissez la variante d\'espagnol que vous souhaitez apprendre — le vocabulaire et les expressions seront adaptés.';
      noteMsg = 'Ex. : si vous partez au Mexique, choisissez 🇲🇽 México. L\'accent audio dépend des voix installées sur votre appareil.';
    }

    msgBox.innerHTML = '<div class="launcher-region-info">'
      + mainMsg
      + '<div class="launcher-region-info-note">' + noteMsg + '</div>'
      + '</div>';
  }
}

/* pickRegion(regionId) — Applique complètement une nouvelle variante régionale.
   Persiste le choix, met à jour la voix BCP-47, les couleurs CSS, les drapeaux
   et rafraîchit le contenu de l'onglet actif si une leçon est ouverte. */
function pickRegion(regionId) {
  // Mémorisation du choix dans localStorage (persiste entre les sessions)
  localStorage.setItem('user_preferred_region', regionId);
  currentRegion = regionId;

  // Mise à jour du code BCP-47 pour la synthèse vocale (mode Espagnol uniquement)
  if (currentMode === 'learn_spain') {
    var voiceMap = {
      ES:'es-ES', MX:'es-MX', CO:'es-CO', PE:'es-PE', VE:'es-VE', AR:'es-AR', EC:'es-EC'
    };
    voiceLang = voiceMap[regionId] || 'es-ES';

    // Application de la classe CSS de région sur <html>
    document.documentElement.classList.remove(
      'region-ES','region-MX','region-CO','region-PE','region-VE','region-AR','region-EC'
    );
    document.documentElement.classList.add('region-' + regionId);
  }

  // Force la résolution d'une nouvelle voix espagnole adaptée à la région
  _spanishVoice     = undefined;
  _hasNotifiedVoice = false;

  // Mise à jour du bandeau d'information avec la note audio
  var msgBox = document.getElementById('region-message-box');
  if (msgBox) {
    var regionsNames = {
      ES: L('España (Castellano)', 'Espagne (Castillan)'),
      MX: L('México',              'Mexique'),
      CO: L('Colombia',            'Colombie'),
      PE: L('Perú',                'Pérou'),
      VE: L('Venezuela',           'Venezuela'),
      AR: L('Argentina',           'Argentine'),
      EC: L('Ecuador',             'Équateur')
    };
    var activeName = regionsNames[currentRegion] || currentRegion;
    var noteAudio  = L(
      '<div style="margin-top:5px;font-size:0.75rem;color:#666;font-style:italic;">'
        + 'Nota: El acento real depende de las voces instaladas en la configuración de síntesis de voz de tu dispositivo.'
        + '</div>',
      '<div style="margin-top:5px;font-size:0.75rem;color:#666;font-style:italic;">'
        + 'Note : L\'accent audio dépend des voix espagnoles installées dans les paramètres de synthèse vocale de votre smartphone.'
        + '</div>'
    );
    var mainMsg = L(
      'ℹ️ Tu aplicación está configurada actualmente con la variante de <strong>' + activeName + '</strong>.',
      'ℹ️ Votre application est actuellement configurée sur la variante <strong>' + activeName + '</strong>.'
    );

    msgBox.innerHTML = '<div style="margin:5px 10px 15px 10px;padding:12px;background-color:#eef9ff;'
      + 'border-left:4px solid #007bff;border-radius:8px;font-size:0.9rem;color:#333;text-align:left;">'
      + mainMsg + noteAudio + '</div>';
  }

  /* — Construction de l'image drapeau via Twemoji CDN — */
  // Utilise des images SVG au lieu d'émojis natifs pour un rendu cohérent sur Windows
  var flagCodes = { ES:'es', MX:'mx', CO:'co', PE:'pe', VE:'ve', AR:'ar', EC:'ec' };
  var code      = flagCodes[currentRegion] || 'es';
  // Table de correspondance code pays → codepoint Unicode Twemoji
  var twemojiMap = {
    es:'1f1ea-1f1f8', mx:'1f1f2-1f1fd', co:'1f1e8-1f1f4',
    pe:'1f1f5-1f1ea', ve:'1f1fb-1f1ea', ar:'1f1e6-1f1f7', ec:'1f1ea-1f1e8'
  };
  var flagHtml = '<img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/'
    + twemojiMap[code] + '.svg" style="width:1.5em;vertical-align:middle;display:inline-block;" alt="flag">';

  // Mise à jour du grand drapeau sur l'écran d'accueil (home)
  var homeFlagRow = document.getElementById('homeFlagRow');
  if (homeFlagRow) {
    if (currentMode === 'learn_spain') {
      homeFlagRow.innerHTML = flagHtml;
    } else {
      // Mode Français : drapeau FR toujours fixe
      homeFlagRow.innerHTML = '<img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1eb-1f1f7.svg" style="width:1.5em;vertical-align:middle;" alt="fr">';
    }
  }

  // Mise à jour du drapeau dans la Vue B du Launcher (si visible)
  var launcherFlagRow = document.getElementById('launcherFlagRow');
  const flagEmojis = { ES:'🇪🇸', MX:'🇲🇽', CO:'🇨🇴', PE:'🇵🇪', VE:'🇻🇪', AR:'🇦🇷', EC:'🇪🇨' };
  if (launcherFlagRow && currentMode === 'learn_spain') {
    launcherFlagRow.textContent = flagEmojis[currentRegion] || '🇪🇸';
  }

  // Mise à jour du drapeau de l'écran Sections (variante régionale apprise)
  var sectionsFlag = document.getElementById('sectionsFlag');
  if (sectionsFlag && currentMode === 'learn_spain') {
    sectionsFlag.innerHTML = flagHtml;
  }

  // Mise à jour du petit drapeau inline dans les flashcards (section-label)
  var flagSpan = document.getElementById('current-lang-flag');
  if (flagSpan) flagSpan.innerHTML = flagHtml;

  // Rafraîchissement de l'onglet actif si une leçon est ouverte
  // Note : activeTab n'est pas une variable globale, on teste directement l'onglet actif
  var activeTabEl = document.querySelector('#lessonTabs .tab.active');
  if (activeTabEl) {
    var at = activeTabEl.dataset.tab;
    if (at === 'vocab')  renderVocab();
    if (at === 'dialog') renderDialog();
    if (at === 'flash')  renderFlash();
  }

  // Rafraîchissement du widget région dans l'écran Home si celui-ci est actif
  var homeScreen = document.getElementById('home');
  if (homeScreen && homeScreen.classList.contains('active')) {
    _renderHomeRegionWidget();
  }

  // Rafraîchissement du guide utilisateur si la modale est actuellement ouverte
  // sur son bloc espagnol (cas : changement de variante depuis l'écran home
  // pendant que le guide reste accessible en arrière-plan via une autre action).
  var guideModal = document.getElementById('guide-modal');
  if (guideModal && guideModal.classList.contains('active')) {
    var guideES = document.getElementById('guideContentES');
    if (guideES && guideES.style.display !== 'none') _refreshGuideRegion();
  }

  /* Mise à jour du drapeau dans la barre de nav basse */
  var langFlag = document.getElementById('navLangFlag');
  if (langFlag && currentMode === 'learn_spain') {
    langFlag.textContent = flagEmojis[currentRegion] || '🇪🇸';
  }
}


/* toggleAcc(btn) — Ouvre ou ferme un panneau accordéon du guide.
   Paramètre : le bouton .guide-acc-header cliqué.
   Bascule aria-expanded et la classe .open sur le body frère.

   Le dépliage utilise une max-height CALCULÉE dynamiquement à partir de
   body.scrollHeight (hauteur réelle du contenu), plutôt qu'une valeur CSS
   fixe (ex: 2000px). Avec une valeur fixe, les sections longues (ex :
   « Configurer l'audio », qui contient 3 grandes cartes détaillées) peuvent
   dépasser cette limite et donc être tronquées visuellement. En mesurant
   la hauteur réelle à l'ouverture, le panneau se déplie toujours en entier,
   quel que soit son contenu. */
function toggleAcc(btn) {
  var isOpen = btn.getAttribute('aria-expanded') === 'true';
  var body   = btn.nextElementSibling;

  btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
  if (!body) return;

  if (isOpen) {
    body.style.maxHeight = body.scrollHeight + 'px';
    body.offsetHeight;
    requestAnimationFrame(function() {
      body.classList.remove('open');
      body.style.maxHeight = '0px';
    });
  } else {
    body.classList.add('open');
    body.style.maxHeight = body.scrollHeight + 'px';
  }
}

/* toggleLevelAcc(btn) — Ouvre ou ferme un niveau (Niveau 1 / Niveau 2)
   dans l'écran Sections. Même principe que toggleAcc() du guide. */
function toggleLevelAcc(btn) {
  var isOpen = btn.getAttribute('aria-expanded') === 'true';
  var body   = btn.nextElementSibling;

  btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
  if (!body) return;

  if (isOpen) {
    body.style.maxHeight = body.scrollHeight + 'px';
    body.offsetHeight;
    requestAnimationFrame(function() {
      body.classList.remove('open');
      body.style.maxHeight = '0px';
    });
  } else {
    body.classList.add('open');
    body.style.maxHeight = body.scrollHeight + 'px';
  }
}

/* _resizeOpenAccordions() — Recalcule la max-height de tous les panneaux
   actuellement ouverts. Utile après un redimensionnement de fenêtre
   (rotation d'écran mobile) ou un changement de contenu dynamique
   (ex : _refreshGuideRegion() qui modifie le texte affiché). */
function _resizeOpenAccordions() {
  var openBodies = document.querySelectorAll('.guide-acc-body.open');
  openBodies.forEach(function(body) {
    body.style.maxHeight = body.scrollHeight + 'px';
  });
}
window.addEventListener('resize', _resizeOpenAccordions);

/* Au chargement du DOM, fixe la max-height réelle de toute section
   accordéon déjà ouverte par défaut dans le HTML (ex : « Comment ça
   marche », ouverte au premier affichage), pour éviter tout effet de
   troncature avant la première interaction utilisateur. */
document.addEventListener('DOMContentLoaded', function() {
  _resizeOpenAccordions();
  /* Affiche la barre de nav dès le chargement, avec Langue actif (écran 0) */
  _updateBottomNav('app-launcher');
});

/* ═══════════════════════════════════════════════════════════
   16. REMERCIEMENTS — Modale de crédits
   ─────────────────────────────────────────────────────────
   Affiche la modale de remerciements définie dans le HTML.
   Fermée par le bouton "Fermer" intégré dans la modale.
═══════════════════════════════════════════════════════════ */

function showCredits() {
  document.getElementById('credits-modal').style.display = 'flex';
  /* Marque le bouton Infos actif pendant que la modale est ouverte */
  var btnCredits = document.getElementById('navBtnCredits');
  if (btnCredits) btnCredits.classList.add('active');
}


/* ═══════════════════════════════════════════════════════════
   17. GUIDE UTILISATEUR — Écran d'aide intégré (FR/ES)
   ─────────────────────────────────────────────────────────
   Reprend le contenu des 3 anciennes pages HTML séparées
   (language-app-user-guide.html / -fr.html / -es.html),
   désormais fusionné directement dans index.html sous forme
   d'une modale plein écran #guide-modal, contenant deux blocs
   de contenu (#guideContentFR / #guideContentES).

   Comportement :
     - Première visite : le guide s'affiche automatiquement,
       juste après le clic sur une carte de langue (donc une
       fois currentMode connu), dans la langue D'INTERFACE
       opposée à la langue choisie — exactement comme le reste
       de l'application bilingue (cf. _setUI dans initApp) :
         • mode 'learn_french' (apprendre le français)
           → utilisateur hispanophone → guide en ESPAGNOL
         • mode 'learn_spain' (apprendre l'espagnol)
           → utilisateur francophone  → guide en FRANÇAIS
     - Le flag "déjà vu" est GLOBAL (un seul affichage auto,
       tous modes confondus) : une fois fermé une première fois,
       quel que soit le mode, le guide ne se relance plus tout seul.
     - Accès permanent ensuite via le lien "Guide / Guía" présent
       dans les pieds de page (home, sections, lesson), sur le
       modèle du lien "Remerciements" déjà existant.

   Fonctions :
     showGuide()            — affiche la modale, choisit le bloc
                               de langue à montrer, rafraîchit la
                               variante régionale, marque le flag vu
     closeGuide()            — masque la modale (ne touche pas au flag,
                               déjà posé par showGuide())
     _maybeAutoShowGuide()    — appelée en fin d'initApp() ; déclenche
                               showGuide() uniquement si jamais vu
     _refreshGuideRegion()    — adapte le bloc ES à currentRegion
                               (drapeau, bandeau d'info, exemple de
                               vocabulaire régional, carte active),
                               reprise du <script> de l'ancienne page
                               language-app-user-guide-es.html
═══════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════
   17. GUIDE UTILISATEUR — Écran #home intégré (style Oromo)
   ─────────────────────────────────────────────────────────
   Le guide n'est plus une modale (#guide-modal) mais l'écran
   #home lui-même, avec :
     • topbar sticky sombre (.home-topbar)
     • hero coloré (.home-guide-header) avec drapeaux, titre,
       sous-titre et badges de fonctionnalités
     • barre sticky "Commencer + PDF" (.home-start-sticky)
     • accordéons natifs <details>/<summary> (zéro JS)
     • corps blanc arrondi (.home-guide-body)
   Deux blocs de contenu statiques dans index.html :
     #guideContentFR (.home-lang-block[data-lang="fr"])
     #guideContentES (.home-lang-block[data-lang="es"])
   _buildHomeGuide() active le bon bloc et injecte les dynamiques.

   Fonctions publiques :
     showGuide()           — alias de showOnboardingGuide()
     _buildHomeGuide()     — injecte les parties dynamiques
     _maybeAutoShowGuide() — affiche le guide à la 1re visite
     _refreshGuideRegion() — adapte le bandeau variante ES
     _refreshGuideHeroFR() — adapte le titre/drapeau bloc FR
═══════════════════════════════════════════════════════════ */

/**
 * _buildHomeGuide() — Active le bon bloc de langue et met à jour
 * les éléments dynamiques de l'écran #home (topbar, drapeaux, titre,
 * sous-titre, badges, boutons Commencer et PDF).
 * Appelée par initApp() après _setUI().
 */
function _buildHomeGuide() {
  var showFrench = (currentMode === 'learn_spain') || !currentMode;
  /* Convention :
     showFrench = true  → mode learn_spain (Francophone apprend l'Espagnol) → guide en FR → bloc [data-lang="fr"]
     showFrench = false → mode learn_french (Hispanophone apprend le Français) → guide en ES → bloc [data-lang="es"] */
  var activeLang = showFrench ? 'fr' : 'es';

  /* ── 1. Révèle le bon bloc, masque l'autre ── */
  document.querySelectorAll('.home-lang-block').forEach(function(el) {
    if (el.dataset.lang === activeLang) {
      el.classList.remove('home-lang-hidden');
    } else {
      el.classList.add('home-lang-hidden');
    }
  });

  /* ── 2. Topbar titre ── */
  var topbarTitle = document.getElementById('homeTopbarTitle');
  if (topbarTitle) topbarTitle.textContent = showFrench ? 'Guide explicatif' : 'Guía explicativa';

  /* ── 3. En-tête : drapeaux, titre, sous-titre ── */
  var flagsEl = document.getElementById('homeGuideFlagsRow');
  if (flagsEl) {
    var flagEmojis = { ES:'🇪🇸', MX:'🇲🇽', CO:'🇨🇴', PE:'🇵🇪', VE:'🇻🇪', AR:'🇦🇷', EC:'🇪🇨' };
    var activeFlag = flagEmojis[currentRegion] || '🇪🇸';
    flagsEl.textContent = showFrench ? ('🇫🇷 → ' + activeFlag) : (activeFlag + ' → 🇫🇷');
  }

  var titleEl = document.getElementById('homeTitle');
  if (titleEl) {
    var flagEmojis2 = { ES:'🇪🇸', MX:'🇲🇽', CO:'🇨🇴', PE:'🇵🇪', VE:'🇻🇪', AR:'🇦🇷', EC:'🇪🇨' };
    var activeFlag2 = flagEmojis2[currentRegion] || '🇪🇸';
    titleEl.textContent = showFrench
      ? ('Apprends l\'Espagnol ' + activeFlag2)
      : ('Aprende Francés 🇫🇷');
  }

  var subEl = document.getElementById('homeGuideSubtitle');
  if (subEl) subEl.textContent = showFrench
    ? 'App gratuite — idéale pour les grands débutants.'
    : 'App gratuita — ideal para empezar desde cero.';

  /* ── 4. Badges de fonctionnalités ── */
  var badgesEl = document.getElementById('homeGuideBadges');
  if (badgesEl) {
    var badges = showFrench
      ? ['✅ Gratuit', '🚧 Sans inscription', '📱 Mobile & ordinateur', '🔊 Audio inclus', '🎤 Répétition orale', '🌎 7 variantes d\'espagnol', '📲 Installable hors-ligne']
      : ['✅ Gratis', '🚧 Sin registro', '📱 Móvil y ordenador', '🔊 Audio incluido', '🎤 Repetición oral', '🌎 7 variantes de español', '📲 Instalable sin conexión'];
    badgesEl.innerHTML = badges.map(function(b) { return '<span class="hg-badge">' + b + '</span>'; }).join('');
  }

  /* ── 5. Bouton Commencer ── */
  var startBtn = document.getElementById('homeStartBtn');
  if (startBtn) {
    startBtn.textContent = showFrench ? '▶ Commencer' : '▶ Empezar';
    startBtn.onclick = function() { showScreen('sections-level1'); };
  }

  /* ── 6. Bouton PDF guide ── */
  var exportBtn = document.getElementById('homeExportBtn');
  if (exportBtn) {
    exportBtn.textContent = '📄 PDF';
    exportBtn.title = showFrench ? 'Télécharger le guide (PDF)' : 'Descargar la guía (PDF)';
  }

  /* ── 7. Bandeau variante régionale (bloc ES) ── */
  _refreshGuideRegion();
}

/**
 * showGuide() — Affiche le guide (écran #home) et met à jour les
 * éléments dynamiques. Alias de showOnboardingGuide() pour la
 * compatibilité avec les liens "Guide / Guía" dans les footers.
 */
function showGuide() {
  _buildHomeGuide();
  showScreen('home');
}

/**
 * showOnboardingGuide() — Alias public de showGuide().
 * Appelée par le bouton ❓ de la barre de navigation basse.
 */
function showOnboardingGuide() {
  showGuide();
}

/**
 * closeGuide() — Conservée pour compatibilité (HTML inline).
 * Dans le nouveau style, "fermer" le guide = aller aux modules.
 */
function closeGuide() {
  showScreen('sections-level1');
}

/**
 * toggleGuideNoShow() — Conservée pour compatibilité (HTML inline).
 * Dans le nouveau style Oromo, il n'y a plus de checkbox "Ne plus afficher".
 * La fonction est gardée vide pour éviter toute erreur JS.
 */
function toggleGuideNoShow(cb) { /* no-op — supprimé dans le style Oromo */ }

/**
 * _maybeAutoShowGuide() — Affiche le guide à la première visite
 * (ou toujours, car dans le style Oromo le guide = écran d'accueil).
 * Appelée en fin d'initApp().
 */
function _maybeAutoShowGuide() {
  /* Dans le style Oromo, le guide est toujours l'écran d'accueil.
     showScreen('home') a déjà été appelé dans initApp() via showGuide(). */
}

/**
 * _refreshGuideRegion() — Adapte le bandeau variante régionale
 * du bloc espagnol (#guideContentES) à currentRegion.
 */
function _refreshGuideRegion() {
  var REGIONS = {
    ES: { flag:'🇪🇸', name:'España (Castellano)' },
    MX: { flag:'🇲🇽', name:'México' },
    AR: { flag:'🇦🇷', name:'Argentina' },
    CO: { flag:'🇨🇴', name:'Colombia' },
    VE: { flag:'🇻🇪', name:'Venezuela' },
    PE: { flag:'🇵🇪', name:'Perú' },
    EC: { flag:'🇪🇨', name:'Ecuador' }
  };
  var region = REGIONS[currentRegion] ? currentRegion : 'ES';
  var r = REGIONS[region];

  /* Bandeau variante dans le bloc ES */
  var badge = document.getElementById('guideRegionBadgeES');
  if (badge) badge.innerHTML = 'Tu app está configurada en <strong>' + r.flag + ' ' + r.name + '</strong>';
}

/**
 * _refreshGuideHeroFR() — Adapte le titre/drapeau de l'en-tête
 * du bloc français (en-tête #home) à la variante régionale active.
 * Conservée pour compatibilité — _buildHomeGuide() gère déjà cela.
 */
function _refreshGuideHeroFR() {
  var flagEmojis = { ES:'🇪🇸', MX:'🇲🇽', CO:'🇨🇴', PE:'🇵🇪', VE:'🇻🇪', AR:'🇦🇷', EC:'🇪🇨' };
  var activeFlag = flagEmojis[currentRegion] || '🇪🇸';
  var flagsEl = document.getElementById('homeGuideFlagsRow');
  if (flagsEl) flagsEl.textContent = '🇫🇷 → ' + activeFlag;
  var titleEl = document.getElementById('homeTitle');
  if (titleEl) titleEl.textContent = 'Apprends l\'Espagnol ' + activeFlag;
}

/* ============================================================
   COPIE SÉCURISÉE DE L'E-MAIL — mécanisme unifié (≡ app Oromo)
   ─────────────────────────────────────────────────────────────
   Antispam double verrouillage :
     1. Dans le HTML, l'adresse est écrite à l'envers dans un
        <span class="antispam-email"> ; le CSS (direction:rtl)
        la remet à l'endroit visuellement sans toucher au DOM.
     2. Au clic, l'adresse est reconstituée en mémoire vive
        (jamais dans le DOM à l'endroit) pour ouvrir le client
        mail ET copier l'adresse dans le presse-papier.
   Feedback : toast _showToast() — universel, sans dépendance
   à un id de bouton.
   Fallback : si l'API Clipboard échoue, _showToast() affiche
   l'adresse pour une copie manuelle (5 s).
   ============================================================ */
function openAndCopyEmail() {
  const user   = 'sebastien.godet16';
  const domain = 'gmail.com';
  const full   = user + '@' + domain;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(full).then(() => {
      _showToast(L('✅ E-mail copiado en el portapapeles', '✅ E-mail copié dans le presse-papier'));
    }).catch(() => {
      _showToast(L('📋 Copie manualmente: ', '📋 Copiez manuellement : ') + full, 5000);
    });
  } else {
    _showToast(L('📋 Copie manualmente: ', '📋 Copiez manuellement : ') + full, 5000);
  }

  window.location.href = 'mailto:' + full;
}

/* ════════════════════════════════════════════════════════════
   §21 — EXPORTS PDF
   ──────────────────────────────────────────────────────────
   3 fonctions d'export ouvrant une page HTML dans un nouvel
   onglet, puis déclenchant window.print() au onload.

   Couleurs selon le thème actif :
     theme-french → bleu #002395 / rouge #C60B1E (drapeaux FR + ES)
     theme-spain  → rouge #C60B1E / bleu #002395  (ES en couleur 1)

   Logo : img/Logo-appli-es-fr.png
   Bilingue via L() pour tous les libellés d'interface.
════════════════════════════════════════════════════════════ */

/* _pdfTheme() — Retourne les couleurs primaire / secondaire selon le thème actif. */
function _pdfTheme() {
  const isFR = isFrench();
  return {
    primary:   isFR ? '#002395' : '#C60B1E',
    secondary: isFR ? '#C60B1E' : '#002395',
    logoSrc:   'img/Logo-appli-es-fr.png'
  };
}

/* _pdfBaseStyles(th) — CSS commun à tous les exports PDF.
   th : objet retourné par _pdfTheme(). */
function _pdfBaseStyles(th) {
  return '<style>'
    + '*{box-sizing:border-box;margin:0;padding:0}'
    + 'body{font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#111;background:#fff;padding:0 18px 24px}'
    + '.pdf-header{display:flex;align-items:center;gap:14px;background:' + th.primary + ';color:#fff;padding:14px 18px;margin:0 -18px 22px}'
    + '.pdf-header img{height:48px;width:auto;object-fit:contain}'
    + '.pdf-header-info{flex:1}'
    + '.pdf-header h1{font-size:1.15rem;font-weight:900;letter-spacing:.02em}'
    + '.pdf-header p{font-size:.78rem;opacity:.88;margin-top:2px}'
    + '.pdf-badge{background:' + th.secondary + ';color:#fff;border-radius:50px;padding:2px 10px;font-size:.72rem;font-weight:700;margin-top:6px;display:inline-block}'
    + 'h2{font-size:1rem;font-weight:800;color:' + th.primary + ';border-bottom:2px solid ' + th.primary + ';padding-bottom:4px;margin:20px 0 10px}'
    + 'h3{font-size:.88rem;font-weight:700;color:' + th.secondary + ';margin:14px 0 6px}'
    + 'table{width:100%;border-collapse:collapse;margin-bottom:16px;font-size:.88rem}'
    + 'th{background:' + th.primary + ';color:#fff;text-align:left;padding:6px 8px;font-size:.8rem}'
    + 'td{padding:5px 8px;border-bottom:1px solid #e0e0e0;vertical-align:top}'
    + 'tr:nth-child(even) td{background:#f5f7ff}'
    + '.conj{font-style:italic;color:#555;font-size:.8rem;margin-top:2px}'
    + '.bubble-row{display:flex;gap:8px;margin-bottom:8px;align-items:flex-start}'
    + '.bubble-side{width:28px;flex-shrink:0;font-size:.7rem;color:#888;padding-top:3px;text-align:center}'
    + '.bubble-box{background:#f0f4ff;border-left:3px solid ' + th.primary + ';border-radius:0 8px 8px 0;padding:6px 10px;flex:1}'
    + '.bubble-box.right{background:#fff5f5;border-left-color:' + th.secondary + '}'
    + '.bubble-main{font-weight:700;font-size:.9rem}'
    + '.bubble-trans{font-size:.78rem;color:#555;margin-top:2px}'
    + '.pdf-footer{margin-top:28px;padding-top:10px;border-top:1px solid #ddd;font-size:.72rem;color:#888;text-align:center}'
    + 'details summary{cursor:pointer;font-weight:700;padding:4px 0}'
    + '@media print{'
    + '  body{padding:0 12px}'
    + '  .pdf-header{-webkit-print-color-adjust:exact;print-color-adjust:exact}'
    + '  th{-webkit-print-color-adjust:exact;print-color-adjust:exact}'
    + '  tr:nth-child(even) td{-webkit-print-color-adjust:exact;print-color-adjust:exact}'
    + '  .bubble-box{-webkit-print-color-adjust:exact;print-color-adjust:exact}'
    + '}'
    + '</style>';
}

/* _pdfHeader(th, title, subtitle) — En-tête HTML avec logo + titre + badge. */
function _pdfHeader(th, title, subtitle) {
  return '<div class="pdf-header">'
    + '<img src="' + th.logoSrc + '" alt="VACHÉBO" onerror="this.style.display=\'none\'">'
    + '<div class="pdf-header-info">'
    + '<h1>' + title + '</h1>'
    + (subtitle ? '<p>' + subtitle + '</p>' : '')
    + '<span class="pdf-badge">VACHÉBO</span>'
    + '</div></div>';
}

/* _pdfFooter() — Pied de page avec date d'export. */
function _pdfFooter() {
  const d = new Date();
  const ds = d.toLocaleDateString(isFrench() ? 'es-ES' : 'fr-FR', {day:'2-digit',month:'long',year:'numeric'});
  return '<div class="pdf-footer">'
    + L('Exportado desde VACHÉBO · ' + ds, 'Exporté depuis VACHÉBO · ' + ds)
    + '</div>';
}

/* _pdfOpen(htmlContent) — Ouvre le HTML dans un nouvel onglet et lance l'impression. */
function _pdfOpen(htmlContent) {
  var w = window.open('', '_blank');
  if (!w) { _showToast(L('Autoriza las ventanas emergentes para exportar.', 'Autorisez les pop-ups pour exporter.')); return; }
  w.document.write(htmlContent);
  w.document.close();
  w.onload = function() { w.focus(); w.print(); };
}

/* ─────────────────────────────────────────────────────────
   _exportGuide() — Export PDF du guide utilisateur complet.
   Extrait le HTML de #guideContentFR ou #guideContentES
   selon le mode actif, l'enveloppe dans une page imprimable.
───────────────────────────────────────────────────────── */
function _exportGuide() {
  var th       = _pdfTheme();
  var guideId = !isFrench() ? 'guideContentFR' : 'guideContentES';
  var guideEl  = document.getElementById(guideId);
  var guideHTML = guideEl ? guideEl.innerHTML : '<p>' + L('Contenido no disponible.', 'Contenu indisponible.') + '</p>';
  var title    = L('Guía del usuario — VACHÉBO', 'Guide utilisateur — VACHÉBO');
  var subtitle = L('Aprende Francés · Guía completa', 'Apprends l\'Espagnol · Guide complet');

  var html = '<!DOCTYPE html><html lang="' + (isFrench() ? 'es' : 'fr') + '"><head>'
    + '<meta charset="utf-8">'
    + '<meta name="viewport" content="width=device-width,initial-scale=1">'
    + '<title>' + title + '</title>'
    + _pdfBaseStyles(th)
    + '<style>'
    + '.guide-hero{display:none}'          /* masque le hero visuel dans le PDF */
    + '.guide-region-grid{display:none}'   /* masque la grille des régions */
    + '.guide-hero-chips{display:none}'
    + '.guide-step-visual{display:none}'
    + 'details{margin-bottom:10px;border:1px solid #e0e0e0;border-radius:6px;padding:6px 10px}'
    + 'details summary{font-weight:700;padding:4px 0;list-style:none}'
    + 'details summary::before{content:"▶ ";color:' + th.primary + '}'
    + 'details[open] summary::before{content:"▼ "}'
    + 'p,li{margin-bottom:6px;line-height:1.55}'
    + 'ul,ol{padding-left:18px;margin-bottom:8px}'
    + '.guide-section-title{font-size:.95rem;font-weight:800;color:' + th.primary + ';margin:16px 0 6px}'
    + '</style>'
    + '</head><body>'
    + _pdfHeader(th, title, subtitle)
    + '<div>' + guideHTML + '</div>'
    + _pdfFooter()
    + '</body></html>';

  _pdfOpen(html);
}

/* ─────────────────────────────────────────────────────────
   _exportVocab() — Export PDF du tableau de vocabulaire.
   Colonnes : emoji | mot source | mot cible (+ variante régionale).
   Les conjugaisons (conj) sont affichées en italique sous le mot.
───────────────────────────────────────────────────────── */
function _exportVocab() {
  if (!CT || !CT.words) { _showToast(L('Sin vocabulario disponible.', 'Pas de vocabulaire disponible.')); return; }
  var th      = _pdfTheme();
  var words   = CT.words;
  const flagEmojis = { ES:'🇪🇸', MX:'🇲🇽', CO:'🇨🇴', PE:'🇵🇪', VE:'🇻🇪', AR:'🇦🇷', EC:'🇪🇨' };
  var regionFlag = isFrench() ? (flagEmojis[currentRegion] || '🇪🇸') : '🇫🇷';

  var title    = L(
    '📘 Vocabulario — ' + (CT.title || CT.id),
    '📘 Vocabulaire — ' + (CT.title || CT.id)
  );
  var subtitle = L(
    'Francés 🇫🇷 ↔ Español ' + regionFlag,
    'Français 🇫🇷 ↔ Espagnol ' + regionFlag
  );
  var hdrEmoji = 'Emoji';
  var hdrSrc   = L('Español ' + regionFlag, 'Français 🇫🇷');
  var hdrTgt   = L('Francés 🇫🇷', 'Espagnol ' + regionFlag);

  var rows = words.map(function(card) {
    var finalEs = (card.variants && card.variants[currentRegion])
      ? card.variants[currentRegion] : (card.es || '');
    var srcWord = L(finalEs, card.fr || '');
    var tgtWord = L(card.fr || '', finalEs);

    /* Conjugaisons éventuelles */
    var conjSrc = '', conjTgt = '';
    if (card.conj) {
      var cSrc = isFrench() ? card.conj.es : card.conj.fr;
      var cTgt = isFrench() ? card.conj.fr : card.conj.es;
      if (cSrc && cSrc.length) conjSrc = '<div class="conj">' + cSrc.join('<br>') + '</div>';
      if (cTgt && cTgt.length) conjTgt = '<div class="conj">' + cTgt.join('<br>') + '</div>';
    }

    return '<tr>'
      + '<td style="text-align:center;font-size:1.3rem;width:42px">' + (card.em || '') + '</td>'
      + '<td>' + srcWord + conjSrc + '</td>'
      + '<td>' + tgtWord + conjTgt + '</td>'
      + '</tr>';
  }).join('');

  var html = '<!DOCTYPE html><html lang="' + (isFrench() ? 'es' : 'fr') + '"><head>'
    + '<meta charset="utf-8">'
    + '<meta name="viewport" content="width=device-width,initial-scale=1">'
    + '<title>' + title + '</title>'
    + _pdfBaseStyles(th)
    + '</head><body>'
    + _pdfHeader(th, title, subtitle)
    + '<table>'
    + '<thead><tr><th>' + hdrEmoji + '</th><th>' + hdrSrc + '</th><th>' + hdrTgt + '</th></tr></thead>'
    + '<tbody>' + rows + '</tbody>'
    + '</table>'
    + _pdfFooter()
    + '</body></html>';

  _pdfOpen(html);
}

/* ─────────────────────────────────────────────────────────
   _exportSituation() — Export PDF du dialogue actif.
   Affiche les bulles en 2 colonnes (locuteur | répliques FR + ES),
   puis le vocabulaire CT.vocab en tableau.
───────────────────────────────────────────────────────── */
function _exportSituation() {
  if (!CT || !CT.situations) { _showToast(L('Sin diálogo disponible.', 'Pas de dialogue disponible.')); return; }
  var th  = _pdfTheme();
  var sit = CT.situations[sitIdx] || CT.situations[0];
  const flagEmojis = { ES:'🇪🇸', MX:'🇲🇽', CO:'🇨🇴', PE:'🇵🇪', VE:'🇻🇪', AR:'🇦🇷', EC:'🇪🇨' };
  var regionFlag = flagEmojis[currentRegion] || '🇪🇸';

  var title    = L(
    '💬 Diálogo — ' + (CT.title || CT.id),
    '💬 Dialogue — ' + (CT.title || CT.id)
  );
  var subtitle = L(
    (sit.label || '') + ' · Situación ' + (sitIdx + 1),
    (sit.label || '') + ' · Situation ' + (sitIdx + 1)
  );

  /* Bulles de dialogue */
  var bubbles = sit.dialogue.map(function(ln) {
    var finalEsLine = (ln.variants && ln.variants[currentRegion])
      ? ln.variants[currentRegion]
      : _adaptDialogueLine(ln.es);
    var isRight = ln.side === 'right';
    return '<div class="bubble-row">'
      + '<div class="bubble-side">' + (ln.s || '') + '</div>'
      + '<div class="bubble-box' + (isRight ? ' right' : '') + '">'
      + '<div class="bubble-main">' + (isFrench() ? ln.fr : finalEsLine) + '</div>'
      + '<div class="bubble-trans">' + (isFrench() ? finalEsLine : ln.fr) + '</div>'
      + '</div></div>';
  }).join('');

  /* Tableau du lexique vocab (format "ES = FR") */
  var vocabSection = '';
  if (CT.vocab && CT.vocab.length) {
    var vocabTitle = L('📚 Vocabulario de la situación', '📚 Vocabulaire de la situation');
    var hdrSrc = L('Español ' + regionFlag, 'Français 🇫🇷');
    var hdrTgt = L('Francés 🇫🇷', 'Espagnol ' + regionFlag);
    var vocabRows = CT.vocab.map(function(v) {
      var parts   = v.split('=');
      var es      = parts[0] ? parts[0].trim() : '';
      var fr      = parts[1] ? parts[1].trim() : '';
      /* Variante régionale dans le lexique */
      var finalEs = es;
      if (CT.words) {
        var match = CT.words.find(w => w.es === es);
        if (match && match.variants && match.variants[currentRegion]) finalEs = match.variants[currentRegion];
      }
      var srcWord = L(finalEs, fr);
      var tgtWord = L(fr, finalEs);
      return '<tr><td>' + srcWord + '</td><td>' + tgtWord + '</td></tr>';
    }).join('');
    vocabSection = '<h2>' + vocabTitle + '</h2>'
      + '<table><thead><tr><th>' + hdrSrc + '</th><th>' + hdrTgt + '</th></tr></thead>'
      + '<tbody>' + vocabRows + '</tbody></table>';
  }

  var html = '<!DOCTYPE html><html lang="' + (isFrench() ? 'es' : 'fr') + '"><head>'
    + '<meta charset="utf-8">'
    + '<meta name="viewport" content="width=device-width,initial-scale=1">'
    + '<title>' + title + '</title>'
    + _pdfBaseStyles(th)
    + '</head><body>'
    + _pdfHeader(th, title, subtitle)
    + '<h2>' + L('Diálogo', 'Dialogue') + '</h2>'
    + '<div>' + bubbles + '</div>'
    + vocabSection
    + _pdfFooter()
    + '</body></html>';

  _pdfOpen(html);
}


/* ════════════════════════════════════════
   ACCESSIBILITÉ CLAVIER — ÉLÉMENTS "BOUTON" NON NATIFS
   Permet d'activer au clavier (Entrée ou Espace) tous les
   éléments portant role="button" + tabindex="0"
   (flashcards, chips vocabulaire, cartes alphabet…).
   :focus-visible côté CSS complète ce mécanisme JS.
════════════════════════════════════════ */
document.addEventListener('keydown', function(e) {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const target = e.target.closest('[role="button"]');
  if (!target) return;
  e.preventDefault();
  target.click();
});

/* ════════════════════════════════════════
   INITIALISATION DU LAUNCHER
   Branche les clics des cartes de langue
   sur showLauncherVariant() pour afficher
   le sélecteur de variante (Vue B).

   Note sur la stratégie de gestion des événements :
   • Les éléments STATIQUES du DOM (présents dès le chargement de
     index.html, comme les cartes de langue ci-dessous et le bouton
     retour du launcher) utilisent addEventListener() — c'est la
     méthode préférable, car elle permet plusieurs listeners et évite
     les réassignations silencieuses.
   • Les éléments DYNAMIQUES (onglets de leçon, cartes de modules,
     boutons de quiz…) sont générés via innerHTML et utilisent donc
     onclick="..." en attribut HTML — c'est inévitable dans ce
     contexte sans framework, et ce comportement est documenté ici
     pour éviter toute confusion lors de la maintenance.
════════════════════════════════════════ */
const cardFR = document.getElementById('card-learn-french');
if (cardFR) cardFR.addEventListener('click', function() {
  showLauncherVariant('learn_french');
});
const cardES = document.getElementById('card-learn-spain');
if (cardES) cardES.addEventListener('click', function() {
  showLauncherVariant('learn_spain');
});
/* ════════════════════════════════════════
   §21b — VIEWPORT HEIGHT FIX ANDROID
   Sur Android, 100vh inclut la barre de navigation du système,
   ce qui provoque un débordement silencieux. Cette section calcule
   la hauteur réelle du viewport (window.innerHeight) et l'expose
   via la custom property CSS --app-h, utilisée à la place de 100vh
   dans .app, #app-launcher, .screen et .screen.active.
   Trois points d'écoute couvrent :
     • window.resize       — rotation / redimensionnement fenêtre
     • visualViewport      — clavier virtuel Android (Chrome/WebView)
     • touchend + timeout  — cas résiduels où resize ne se déclenche pas
════════════════════════════════════════ */
(function() {
  var _vh_timer = null;

  function _updateAppHeight() {
    document.documentElement.style.setProperty('--app-h', window.innerHeight + 'px');
  }

  function _debounced80() {
    clearTimeout(_vh_timer);
    _vh_timer = setTimeout(_updateAppHeight, 80);
  }

  /* (1) Appel immédiat */
  _updateAppHeight();

  /* (3) Écoute resize classique avec debounce 80 ms */
  window.addEventListener('resize', _debounced80);

  /* (4) Écoute visualViewport (clavier virtuel Android) avec debounce 80 ms */
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', _debounced80);
  }

  /* (5) Fallback touchend avec setTimeout 300 ms */
  window.addEventListener('touchend', function() {
    setTimeout(_updateAppHeight, 300);
  });
})();