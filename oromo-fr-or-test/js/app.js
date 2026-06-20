/* ============================================================
   Language App 🇫🇷🇪🇹  —  Moteur applicatif unifié
   Français ↔ Afaan Oromoo
   © Juin 2026 – Sébastien Godet · IA Claude
   ============================================================
   ARCHITECTURE (4 fichiers) :
     ├─ index.html  → Structure HTML + launcher
     ├─ style.css   → Thèmes couleur, composants visuels
     ├─ data.js     → ALL_THEMES_FR / ALL_THEMES_OR (contenu pédagogique)
     └─ app.js      → Ce fichier : logique applicative complète

   SECTIONS DE CE FICHIER :
     1.  Variables d'état globales
     2.  Point d'entrée — initApp(mode)
     3.  Synthèse vocale + prononciation Oromo (cascade de voix)
     4.  Persistance de la progression (système d'étoiles ⭐)
     5.  Navigation entre écrans
     6.  Écran Home — rendu de la barre de progression
     7.  Écran Sections — grille des thèmes
     8.  Ouverture d'un thème (écran Lesson + onglets)
     9.  Cartes Flash — vocabulaire interactif
    10.  Quiz 10 questions — avec étoiles progressives
    11.  Dialogue — scènes de situation
    12.  Vocabulaire — lexique visuel cliquable
    13.  Quiz Dialogue — questions sur le dialogue
    14.  Utilitaires & chaînes de résultats bilingues
   ============================================================ */


/* ============================================================
   1. VARIABLES D'ÉTAT GLOBALES
   ============================================================
   Toutes les variables partagées entre les fonctions.
   Séparées par type : configuration du mode, session en cours,
   progression persistée.
   ============================================================ */

/* ── Configuration du mode actif ── */
var currentMode = '';       // 'learn_french' | 'learn_oromo'
var voiceLang   = 'fr-FR';  // Langue de la synthèse vocale (mise à jour par initApp)
var ALL_THEMES  = [];       // Tableau des thèmes actifs, rempli par initApp() depuis data.js
var STORAGE_KEY = '';       // Clé localStorage séparée par mode (deux progressions indépendantes)

/* ── Session en cours (réinitialisées à chaque ouverture de thème) ── */
var CT           = null;    // Current Theme : objet thème actuellement ouvert
var fcIdx        = 0;       // Cartes Flash : index de la carte affichée

var dqStep       = 0;       // Quiz Dialogue : numéro de la question
var dqScore      = 0;       // Quiz Dialogue : score (bonnes réponses)
var dqAnswered   = false;   // Quiz Dialogue : évite le double-clic sur une option

var sitIdx       = 0;       // Dialogue : index de la situation affichée

var q10Step      = 0;       // Quiz 10 questions : numéro de la question
var q10Score     = 0;       // Quiz 10 questions : score
var q10Answered  = false;   // Quiz 10 questions : évite le double-clic
var _q10Questions = null;   // Cache des questions générées pour le quiz en cours
                            // (évite de re-mélanger si l'utilisateur revient sur l'onglet)

/* ── Progression persistante ── */
var done = [];              // Tableau d'objets { id, stars } sauvegardé dans localStorage


/* ============================================================
   2. POINT D'ENTRÉE — initApp(mode)
   ============================================================
   Appelée par les boutons du launcher HTML (index.html).
   Configure le thème visuel, la voix, les données et l'UI
   selon le mode choisi, puis affiche l'écran d'accueil.
   ============================================================ */

/**
 * Initialise l'application pour un mode d'apprentissage donné.
 * @param {'learn_french'|'learn_oromo'} mode
 */
function initApp(mode) {
  currentMode = mode;

  if (mode === 'learn_french') {
    /* ── L'apprenant est Oromo, il apprend le Français ── */
    document.documentElement.className = 'theme-french';
    voiceLang   = 'fr-FR';
    ALL_THEMES  = ALL_THEMES_FR;          // défini dans data.js
    STORAGE_KEY = 'pe_om_fr_done_v1';    // clé originale app_francais

    /* Les menus sont écrits en Afaan Oromoo (langue de l'apprenant) */
    _setUI({
      homeFlagRow    : '🇫🇷',
      homeTitle      : 'Apprendre le Français',
      homeSubtitle   : 'Recto Français · Verso Oromo',
      homeStartBtn   : '▶ Commencer',
      sectionsBackBtn: '← Retour',
      sectionsTitle  : '📚 Modules',
      lessonBackBtn  : '← Modules',
      level1Badge    : '1',
      level1Label    : 'Niveau 1 — Vocabulaire',
      level2Badge    : '2',
      level2Label    : 'Niveau 2 — Phrases simples'
    });

  } else if (mode === 'learn_oromo') {
    /* ── L'apprenant est Francophone, il apprend l'Afaan Oromoo ── */
    document.documentElement.className = 'theme-oromo';
    voiceLang   = 'om-ET';
    ALL_THEMES  = ALL_THEMES_OR;          // défini dans data.js
    STORAGE_KEY = 'pe_fr_om_done_v1';    // clé originale app_oromo

    /* Les menus sont écrits en Afaan Oromoo (langue cible de l'apprenant) */
    _setUI({
      homeFlagRow    : '🇪🇹',
      homeTitle      : 'Afaan Faransaayii barachuu',
      homeSubtitle   : 'Fuuldura Afaan Oromo · Duuba Afaan Faransaay',
      homeStartBtn   : '▶ Jalqabi',
      sectionsBackBtn: '← Gara duubaatti',
      sectionsTitle  : '📚 Moojuulota',
      lessonBackBtn  : '← Moojuulota',
      level1Badge    : '1',
      level1Label    : 'Sadarkaa 1 — Jechoota',
      level2Badge    : '2',
      level2Label    : 'Sadarkaa 2 — Himoota salphaa'
    });
  }

  /* Charger la progression sauvegardée pour ce mode */
  loadDone();

  /* Masquer le launcher et afficher l'accueil */
  document.getElementById('app-launcher').classList.remove('active');
  showScreen('home');
}

/**
 * Injecte les libellés bilingues dans les éléments HTML identifiés par ID.
 * @param {Object} t - Dictionnaire { idElement: valeurTexte }
 */
function _setUI(t) {
  _setText('homeFlagRow',     t.homeFlagRow);
  _setText('homeTitle',       t.homeTitle);
  _setText('homeSubtitle',    t.homeSubtitle);
  _setText('homeStartBtn',    t.homeStartBtn);
  _setText('sectionsBackBtn', t.sectionsBackBtn);
  _setText('sectionsTitle',   t.sectionsTitle);
  _setText('lessonBackBtn',   t.lessonBackBtn);
  _setText('level1Badge',     t.level1Badge);
  _setText('level1Label',     t.level1Label);
  _setText('level2Badge',     t.level2Badge);
  _setText('level2Label',     t.level2Label);

  /* Le bouton "Démarrer" sur l'écran home ouvre l'écran sections */
  var btn = document.getElementById('homeStartBtn');
  if (btn) btn.onclick = function() { showScreen('sections'); };
}

/**
 * Utilitaire : injecte un texte dans un élément HTML par son ID.
 * Ignore silencieusement si l'élément n'existe pas.
 * @param {string} id
 * @param {string} val
 */
function _setText(id, val) {
  var el = document.getElementById(id);
  if (el) el.textContent = val;
}


/* ============================================================
   3. SYNTHÈSE VOCALE + PRONONCIATION OROMO (CASCADE DE VOIX)
   ============================================================
   L'Afaan Oromoo n'a pas de voix dédiée sur la plupart des
   navigateurs. On utilise une cascade : on cherche d'abord une
   voix om-ET, puis des voix phonétiquement proches (Somali,
   Amharique, Haoussa, Swahili, puis Espagnol/Italien pour la
   phonétique des voyelles).
   ============================================================ */

/* Cache de la voix Oromo résolue (undefined = pas encore cherché, null = aucune trouvée) */
var _oromoVoice = undefined;

/* Drapeau pour ne notifier l'utilisateur qu'une seule fois de la voix sélectionnée */
var _hasNotifiedVoice = false;

/**
 * Résout de manière asynchrone la meilleure voix disponible pour l'Oromo.
 * Utilise un cache interne pour éviter de répéter la recherche.
 * @param {Function} callback - Appelé avec la voix trouvée (ou null)
 */
function _resolveOromoVoice(callback) {
  /* Si la voix est déjà en cache, on rappelle directement */
  if (_oromoVoice !== undefined) {
    callback(_oromoVoice);
    return;
  }

  /**
   * Tente de trouver une voix dans la liste disponible.
   * @returns {boolean} true si des voix étaient disponibles
   */
  function search() {
    var voices = speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return false;

    /* Priorités de voix : de la plus proche à la plus éloignée phonétiquement */
    var priorities = [
      { lang: 'om-ET', name: 'Oromo' },
      { lang: 'so-SO', name: 'Somali' },
      { lang: 'am-ET', name: 'Amharique' },
      { lang: 'ha-NG', name: 'Haoussa' },
      { lang: 'sw-KE', name: 'Swahili' },
      { lang: 'es-ES', name: 'Phonétique (Optimisé Espagnol)' },
      { lang: 'it-IT', name: 'Phonétique (Optimisé Italien)' }
    ];

    var foundVoice = null;
    var foundLabel = 'Voix par défaut';

    for (var i = 0; i < priorities.length; i++) {
      var target = priorities[i];
      var match = voices.find(function(v) {
        return v.lang.toLowerCase().indexOf(target.lang.split('-')[0].toLowerCase()) !== -1;
      });
      if (match) {
        foundVoice = match;
        foundLabel = target.name;
        break;
      }
    }

    /* Repli absolu : première voix disponible si aucune ne correspond */
    _oromoVoice = foundVoice || voices[0];

    /* Notification unique à l'utilisateur sur la voix choisie */
    if (!_hasNotifiedVoice) {
      _hasNotifiedVoice = true;
      alert('🎙️ Audio Oromo configuré avec la voix : ' + foundLabel);
    }

    callback(_oromoVoice);
    return true;
  }

  /* Si les voix ne sont pas encore chargées, on attend l'événement 'voiceschanged' */
  if (!search()) {
    speechSynthesis.addEventListener('voiceschanged', function h() {
      speechSynthesis.removeEventListener('voiceschanged', h);
      search();
      callback(_oromoVoice);
    });
  }
}

/**
 * Point d'entrée unique pour la lecture audio d'un texte.
 * Redirige vers la cascade Oromo ou la lecture française standard.
 * Gère les textes multiples séparés par " / " (pause de 2s entre chaque).
 * @param {string} txt - Texte à lire (peut contenir " / " comme séparateur)
 */
function speak(txt) {
  if (!txt) return;

  if (currentMode === 'learn_oromo') {
    if (!window.speechSynthesis) return;

    _resolveOromoVoice(function(voice) {
      speechSynthesis.cancel();
      var parts = txt.split('/').map(function(p) { return p.trim(); }).filter(Boolean);

      function speakPart(i) {
        if (i >= parts.length) return;
        var u = new SpeechSynthesisUtterance(parts[i]);
        if (voice) {
          u.voice = voice;
          u.lang  = voice.lang;
        }
        u.rate  = 0.85;  // Légèrement ralenti pour faciliter la compréhension
        u.onend = function() {
          if (i + 1 < parts.length) setTimeout(function() { speakPart(i + 1); }, 2000);
        };
        speechSynthesis.speak(u);
      }

      speakPart(0);
    });

  } else {
    /* Mode learn_french : lecture standard en français */
    _doSpeak(txt, null, 0.80);
  }
}

/**
 * Lit un texte avec la Web Speech API, en gérant les parties séparées par " / ".
 * Fonction interne utilisée pour le français (voix et langue déjà connues).
 * @param {string} txt      - Texte à lire
 * @param {SpeechSynthesisVoice|null} voiceObj - Voix à utiliser (null = voix par défaut)
 * @param {number} rate     - Vitesse de lecture (0.1 à 10)
 */
function _doSpeak(txt, voiceObj, rate) {
  speechSynthesis.cancel();
  var parts = txt.split('/').map(function(p) { return p.trim(); }).filter(Boolean);

  function speakPart(i) {
    if (i >= parts.length) return;
    var u  = new SpeechSynthesisUtterance(parts[i]);
    u.lang = voiceLang;
    u.rate = rate;
    if (voiceObj) u.voice = voiceObj;
    u.onend = function() {
      if (i + 1 < parts.length) setTimeout(function() { speakPart(i + 1); }, 2000);
    };
    speechSynthesis.speak(u);
  }

  speakPart(0);
}


/* ============================================================
   4. PERSISTANCE DE LA PROGRESSION (SYSTÈME D'ÉTOILES ⭐)
   ============================================================
   Chaque thème complété est sauvegardé sous la forme :
     { id: 'theme_id', stars: 1|2|3 }
   Les étoiles ne peuvent qu'augmenter (on conserve le meilleur score).
   Seuils : 50%→⭐  75%→⭐⭐  100%→⭐⭐⭐
   ============================================================ */

/**
 * Charge la progression depuis localStorage pour le mode actif.
 * Réinitialise silencieusement en cas de données corrompues.
 */
function loadDone() {
  try {
    done = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch(e) {
    done = [];
  }
}

/**
 * Sauvegarde la progression dans localStorage.
 * Ignore silencieusement les erreurs (ex : mode privé).
 */
function saveDone() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
  } catch(e) {}
}

/**
 * Calcule le nombre d'étoiles en fonction d'un pourcentage de réussite.
 * @param {number} pct - Pourcentage (0–100)
 * @returns {0|1|2|3}
 */
function _calcStars(pct) {
  if (pct === 100) return 3;
  if (pct >= 75)   return 2;
  if (pct >= 50)   return 1;
  return 0;
}

/**
 * Enregistre (ou améliore) la progression d'un thème.
 * Ne fait rien si le score est insuffisant pour obtenir au moins 1 étoile.
 * @param {string} id  - Identifiant du thème
 * @param {number} pct - Pourcentage de réussite (0–100)
 */
function markDone(id, pct) {
  var newStars = _calcStars(pct);
  if (newStars === 0) return;   // En dessous de 50% : on ne mémorise pas

  var existing = done.find(function(d) { return d.id === id; });
  if (existing) {
    /* On ne descend jamais le score : on conserve le meilleur résultat */
    if (newStars > existing.stars) existing.stars = newStars;
  } else {
    done.push({ id: id, stars: newStars });
  }
  saveDone();
}

/**
 * Efface la progression d'un thème et rafraîchit l'affichage.
 * @param {string} id - Identifiant du thème à réinitialiser
 */
function resetTheme(id) {
  done = done.filter(function(d) { return d.id !== id; });
  saveDone();
  renderSections();
  renderHome();
}

/**
 * @param {string} id
 * @returns {boolean} true si le thème a été complété (≥ 1 étoile)
 */
function isDone(id) {
  return done.some(function(d) { return d.id === id; });
}

/**
 * @param {string} id
 * @returns {0|1|2|3} Nombre d'étoiles obtenues pour ce thème
 */
function getThemeStars(id) {
  var found = done.find(function(d) { return d.id === id; });
  return found ? found.stars : 0;
}


/* ============================================================
   5. NAVIGATION ENTRE ÉCRANS
   ============================================================
   L'application utilise des "screens" CSS : une seule a la
   classe 'active' à la fois. Les écrans sont : launcher, home,
   sections, lesson.
   ============================================================ */

/**
 * Active un écran et masque tous les autres.
 * Déclenche automatiquement le rendu de 'home' et 'sections'.
 * @param {'home'|'sections'|'lesson'} id - ID de l'élément HTML de l'écran
 */
function showScreen(id) {
  /* Masquer tous les écrans */
  document.querySelectorAll('.screen').forEach(function(s) {
    s.classList.remove('active');
  });

  /* Bouton retour de l'écran home → relance le launcher */
  if (id === 'home') {
    var backBtn = document.getElementById('homeBackBtn');
    if (backBtn) {
      backBtn.onclick = function() {
        document.querySelectorAll('.screen').forEach(function(s) {
          s.classList.remove('active');
        });
        document.getElementById('app-launcher').classList.add('active');
      };
    }
  }

  /* Activer l'écran demandé */
  document.getElementById(id).classList.add('active');

  /* Déclenchement du rendu des écrans à contenu dynamique */
  if (id === 'home')     renderHome();
  if (id === 'sections') renderSections();
}


/* ============================================================
   6. ÉCRAN HOME — BARRE DE PROGRESSION GLOBALE
   ============================================================
   Affiche le pourcentage de thèmes validés et le total d'étoiles.
   ============================================================ */

/**
 * Met à jour la barre de progression et le compteur d'étoiles sur l'écran home.
 */
function renderHome() {
  if (!ALL_THEMES.length) return;

  var total = ALL_THEMES.length;
  var n     = done.length;
  var pct   = Math.round(n / total * 100);

  document.getElementById('homeBar').style.width = pct + '%';

  /* Libellé bilingue selon le mode */
  var label = (currentMode === 'learn_french')
    ? (n + ' / ' + total + ' modules validés — ' + pct + '%')
    : (n + ' / ' + total + ' kutaalee darban — ' + pct + '%');
  document.getElementById('homeBarLabel').textContent = label;

  /* Total des étoiles gagnées sur l'ensemble des thèmes */
  var totalStarsEarned  = done.reduce(function(acc, d) { return acc + d.stars; }, 0);
  var maxStarsPossible  = total * 3;

  document.getElementById('homeStars').innerHTML =
    '<span style="font-size:1.1rem; font-weight:bold; color:#f1c40f;">⭐ '
    + totalStarsEarned + ' / ' + maxStarsPossible + '</span>';
}


/* ============================================================
   7. ÉCRAN SECTIONS — GRILLE DES THÈMES
   ============================================================
   Affiche deux grilles (Niveau 1 et Niveau 2) avec les cartes
   de thèmes et la progression globale.
   ============================================================ */

/**
 * Reconstruit la grille des thèmes et met à jour la progression globale.
 */
function renderSections() {
  if (!ALL_THEMES.length) return;

  var total = ALL_THEMES.length;
  var n     = done.length;
  var pct   = Math.round(n / total * 100);

  document.getElementById('globalProgress').style.width = pct + '%';

  var progressLabel = (currentMode === 'learn_french')
    ? (n + ' / ' + total + ' modules — ' + pct + '%')
    : (n + ' / ' + total + ' kutaalee — ' + pct + '%');
  document.getElementById('progressLabel').textContent = progressLabel;

  /* Remplir grid1 (Niveau 1) et grid2 (Niveau 2) */
  ['grid1', 'grid2'].forEach(function(gid) {
    var level = (gid === 'grid1') ? 1 : 2;
    document.getElementById(gid).innerHTML = ALL_THEMES
      .filter(function(t) { return t.level === level; })
      .map(function(t)    { return _buildThemeCard(t);  })
      .join('');
  });
}

/**
 * Génère le HTML d'une carte de thème (titre, étoiles, bouton reset).
 * @param {Object} t - Objet thème depuis ALL_THEMES
 * @returns {string} HTML de la carte
 */
function _buildThemeCard(t) {
  var mainTitle = '';
  var subLine   = '';

  // Détermination des titres selon le mode choisi
  if (currentMode === 'learn_french') {
    // J'apprends le français : Principal = Français (t.name), Sous-titre = Oromo (t.sub)
    mainTitle = t.name;
    subLine   = t.sub;
  } else {
    // J'apprends l'oromo : Principal = Oromo (t.name), Sous-titre = Français (t.sub)
    mainTitle = t.name;
    subLine   = t.sub;
  }

  // Cas particulier pour l'alphabet
  if (t.id === 'alpha' || t.type === 'alpha') {
    if (currentMode === 'learn_french') {
      mainTitle = "L'Alphabet";
      subLine   = "Qubeewwan";
    } else {
      mainTitle = "Qubeewwan";
      subLine   = "L'Alphabet";
    }
  }

  /* Capitaliser la première lettre du titre principal s'il existe */
  if (mainTitle) {
    mainTitle = mainTitle.charAt(0).toUpperCase() + mainTitle.slice(1);
  }

  /* Bouton de réinitialisation (visible uniquement si le thème est validé) */
  var resetBtn = isDone(t.id)
    ? '<button onclick="event.stopPropagation();resetTheme(\'' + t.id + '\')" '
      + 'style="margin-top:6px;font-size:.65rem;background:#fff;border:1.5px solid #009A44;'
      + 'color:#009A44;border-radius:50px;padding:4px 10px;cursor:pointer;font-weight:700">'
      + (currentMode === 'learn_french' ? '🔄 Irra deebiʼi' : '🔄 Recommencer')
      + '</button>'
    : '';

  /* Affichage des étoiles : ⭐ pour gagnées, ☆ pour non obtenues */
  var currentStars = getThemeStars(t.id);
  var starsStr = Array.from({ length: 3 }, function(_, i) {
    return i < currentStars ? '⭐' : '☆';
  }).join('');

  return '<div class="theme-card' + (isDone(t.id) ? ' done' : '') + '" onclick="openTheme(\'' + t.id + '\')">'
    + '<div class="t-emoji">'   + t.emoji    + '</div>'
    + '<div class="t-name">'   + mainTitle  + '</div>'
    + '<div class="t-sub">'    + subLine    + '</div>'
    + '<div class="t-stars" style="letter-spacing:2px">' + starsStr + '</div>'
    + resetBtn
    + '</div>';
}


/* ============================================================
   8. OUVERTURE D'UN THÈME (ÉCRAN LESSON + ONGLETS)
   ============================================================
   Charge le thème, construit les onglets dynamiquement selon
   le type de thème (vocabulaire, alphabet, dialogue).
   ============================================================ */

/**
 * Ouvre un thème et affiche l'écran Lesson avec ses onglets.
 * Réinitialise toutes les variables de session.
 * @param {string} id - Identifiant du thème
 */
function openTheme(id) {
  /* Charger le thème et réinitialiser la session */
  CT = ALL_THEMES.find(function(t) { return t.id === id; });
  fcIdx = 0;
  dqStep = 0; dqScore = 0; dqAnswered = false;
  sitIdx = 0;
  q10Step = 0; q10Score = 0; q10Answered = false; _q10Questions = null;

  /* Construire le titre de la leçon */
  document.getElementById('lessonEmoji').textContent = CT.emoji;

  var lessonTitle = '';
  if (currentMode === 'learn_french') {
    // Mode J'apprends le français : Français — Oromo
    var titreFr = (CT.id === 'alpha' || CT.type === 'alpha') ? "L'Alphabet" : CT.name;
    var titreOr = (CT.id === 'alpha' || CT.type === 'alpha') ? "Qubeewwan" : CT.sub;
    lessonTitle = titreFr + ' — ' + titreOr;
  } else {
    // Mode J'apprends l'oromo : Oromo — Français
    var titreOr = (CT.id === 'alpha' || CT.type === 'alpha') ? "Qubeewwan" : CT.sub;
    var titreFr = (CT.id === 'alpha' || CT.type === 'alpha') ? "L'Alphabet" : CT.name;
    lessonTitle = titreOr + ' — ' + titreFr;
  }
  
  /* Capitaliser la première lettre du titre complet */
  if (lessonTitle) {
    lessonTitle = lessonTitle.charAt(0).toUpperCase() + lessonTitle.slice(1);
  }
  document.getElementById('lessonTitle').textContent = lessonTitle;

  showScreen('lesson');

  /* ── Construction des onglets selon le type de thème ──
       dialog → Dialogue + Vocabulaire + Quiz dialogue
       alpha  → Alphabet + Quiz Audio
       (autre)→ Cartes Flash + Quiz 10 questions          */
  var tabs;
  if (CT.type === 'dialog') {
    tabs = (currentMode === 'learn_french')
      ? [{k:'dialog',lbl:'💬 Maree'},      {k:'vocab',lbl:'📚 Jechoota'},     {k:'dquiz',lbl:'❓ Gaaffilee'}]
      : [{k:'dialog',lbl:'💬 Dialogue'},   {k:'vocab',lbl:'📚 Vocabulaire'},  {k:'dquiz',lbl:'❓ Quiz'}];
  } else if (CT.type === 'alpha') {
    tabs = (currentMode === 'learn_french')
      ? [{k:'flash',lbl:'🔤 Qubee'},       {k:'quiz10',lbl:'🔊 Quiz Sagalee'}]
      : [{k:'flash',lbl:'🔤 Alphabet'},    {k:'quiz10',lbl:'🔊 Quiz Audio'}];
  } else {
    tabs = (currentMode === 'learn_french')
      ? [{k:'flash',lbl:'🃏 Kaardota'},    {k:'quiz10',lbl:'❓ Gaaffilee'}]
      : [{k:'flash',lbl:'🃏 Cartes'},      {k:'quiz10',lbl:'❓ Quiz'}];
  }

  document.getElementById('lessonTabs').innerHTML = tabs.map(function(t, i) {
    return '<button class="tab' + (i === 0 ? ' active' : '') + '" data-tab="' + t.k + '" onclick="switchTab(\'' + t.k + '\')">' + t.lbl + '</button>';
  }).join('');

  switchTab(tabs[0].k);
}

/**
 * Active un onglet et déclenche le rendu du contenu correspondant.
 * @param {'flash'|'quiz10'|'dialog'|'vocab'|'dquiz'} tab
 */
function switchTab(tab) {
  /* Mettre à jour la classe 'active' sur les boutons d'onglet */
  document.querySelectorAll('#lessonTabs .tab').forEach(function(b) {
    b.classList.toggle('active', b.dataset.tab === tab);
  });

  /* Déclencher le bon rendu */
  if      (tab === 'flash')  { renderFlash(); }
  else if (tab === 'quiz10') { q10Step = 0; q10Score = 0; q10Answered = false; _q10Questions = null; renderQuiz10(); }
  else if (tab === 'dialog') { renderDialog(); }
  else if (tab === 'vocab')  { renderVocab(); }
  else if (tab === 'dquiz')  { dqStep = 0; dqScore = 0; dqAnswered = false; renderDialogQuiz(); }
}


/* ============================================================
   9. CARTES FLASH — VOCABULAIRE INTERACTIF
   ============================================================
   Affiche les mots recto/verso avec animation de retournement.
   Gère aussi le mode Alphabet (grille de lettres cliquables).
   ============================================================ */

/**
 * Affiche la carte flash courante (ou la grille alphabétique si type 'alpha').
 */
function renderFlash() {
  var words = CT.words;
  var card  = words[fcIdx];

  /* ── Mode Alphabet : grille de lettres cliquables ── */
  if (CT.type === 'alpha') {
    var alphaLabel = (currentMode === 'learn_french')
      ? 'Qubee dhaggeeffachuuf irratti cuqaasi !'
      : 'Cliquez sur une lettre pour l\'écouter !';

    document.getElementById('tabContent').innerHTML =
      '<div class="section-label">' + alphaLabel + '</div>'
      + '<div class="alpha-grid">' + words.map(function(c, i) {
          var bigLetter = (currentMode === 'learn_french') ? c.fr : c.et;
          var smallName = (currentMode === 'learn_french') ? c.et : c.fr;
          return '<div class="alpha-card" onclick="pickAlpha(' + i + ')">'
            + '<div class="alpha-letter">' + bigLetter + '</div>'
            + '<div class="alpha-name">'   + smallName  + '</div>'
            + '</div>';
        }).join('')
      + '</div>'
      + '<div id="alphaDetail" class="alpha-detail">' + buildAlphaDetail(card) + '</div>';
    return;
  }

  /* ── Mode Cartes Flash standard ── */
  var emFront = card.em ? '<div class="fc-front-emoji">' + card.em + '</div>' : '';
  var emBack  = card.em ? '<div class="fc-back-emoji">'  + card.em + '</div>' : '';
  var hasConj = card.conj && card.conj.es && card.conj.fr;
  var frontContent, backContent;

  if (currentMode === 'learn_french') {
    /* Recto : Français — Verso : Afaan Oromoo */
    var hintFr = 'Hiika isaa Afaan Oromootin arguuf cuqaasi';
    if (hasConj) {
      /* Carte avec conjugaison : on affiche les formes conjuguées */
      frontContent = emFront
        + '<div class="fc-front-word">' + card.fr + '</div>'
        + '<div class="fc-conj">' + card.conj.fr.map(function(l) { return '<div class="fc-conj-line">' + l + '</div>'; }).join('') + '</div>';
      backContent = emBack
        + '<div class="fc-back-word">' + card.et + '</div>'
        + '<div class="fc-conj">' + card.conj.et.map(function(l) { return '<div class="fc-conj-line">' + l + '</div>'; }).join('') + '</div>';
    } else {
      frontContent = emFront + '<div class="fc-front-word">' + card.fr + '</div><div class="fc-front-hint">👆 ' + hintFr + '</div>';
      backContent  = emBack  + '<div class="fc-back-word">'  + card.et + '</div>';
    }
    document.getElementById('tabContent').innerHTML =
      '<div class="section-label">Fuuldura : Français 🇫🇷 — Duuba : Afaan Oromoo 🇪🇹 · Kaardicha garagalchi !</div>'
      + '<div class="fc-wrap"><div class="fc" id="fc" onclick="flipCard()">'
      + '<div class="fc-front">' + frontContent + '</div>'
      + '<div class="fc-back">'  + backContent  + '</div>'
      + '</div></div>'
      + '<div class="fc-nav">'
      + '<button onclick="prevCard()">← Kan duraa</button>'
      + '<span class="fc-counter">' + (fcIdx + 1) + ' / ' + words.length + '</span>'
      + '<button onclick="nextCard()">Kan itti aanu →</button>'
      + '</div>'
      + '<div style="text-align:center;margin-top:10px;">'
      + '<button class="audio-btn-big" onclick="speak(\'' + esc(card.fr) + '\')">🔊 Sagalee dhaggeeffadhu</button>'
      + '</div>';

  } else {
    /* Recto : Afaan Oromoo — Verso : Français */
    var hintOr = 'Cliquez pour voir la traduction en français';
    if (hasConj) {
      frontContent = emFront
        + '<div class="fc-front-word">' + card.et + '</div>'
        + '<div class="fc-conj">' + card.conj.et.map(function(l) { return '<div class="fc-conj-line">' + l + '</div>'; }).join('') + '</div>';
      backContent = emBack
        + '<div class="fc-back-word">' + card.fr + '</div>'
        + '<div class="fc-conj">' + card.conj.fr.map(function(l) { return '<div class="fc-conj-line">' + l + '</div>'; }).join('') + '</div>';
    } else {
      frontContent = emFront + '<div class="fc-front-word">' + card.et + '</div><div class="fc-front-hint">👆 ' + hintOr + '</div>';
      backContent  = emBack  + '<div class="fc-back-word">'  + card.fr + '</div>';
    }
    document.getElementById('tabContent').innerHTML =
      '<div class="section-label">Recto : Afaan Oromoo 🇪🇹 — Verso : Français 🇫🇷 · Cliquez pour retourner !</div>'
      + '<div class="fc-wrap"><div class="fc" id="fc" onclick="flipCard()">'
      + '<div class="fc-front">' + frontContent + '</div>'
      + '<div class="fc-back">'  + backContent  + '</div>'
      + '</div></div>'
      + '<div class="fc-nav">'
      + '<button onclick="prevCard()">← Précédent</button>'
      + '<span class="fc-counter">' + (fcIdx + 1) + ' / ' + words.length + '</span>'
      + '<button onclick="nextCard()">Suivant →</button>'
      + '</div>'
      + '<button class="audio-btn-big" onclick="speak(\'' + esc(card.et) + '\')">🔊 Écouter la prononciation</button>';
  }
}

/**
 * Génère le HTML du panneau de détail pour une lettre de l'alphabet.
 * @param {Object} c - Objet lettre { fr, et }
 * @returns {string} HTML du panneau de détail
 */
function buildAlphaDetail(c) {
  var bigLetter = (currentMode === 'learn_french') ? c.fr : c.et;
  var smallName = (currentMode === 'learn_french') ? c.et : c.fr;
  var btnLabel  = (currentMode === 'learn_french') ? '🔊 Dhaggeeffadhu' : '🔊 Écouter';
  var spokenKey = (currentMode === 'learn_french') ? c.fr : c.et;
  return '<div style="font-size:2.5rem;font-weight:900;color:#009A44">' + bigLetter + '</div>'
    + '<div style="color:#555;margin:4px 0;font-size:.85rem">' + smallName + '</div>'
    + '<button onclick="speak(\'' + esc(spokenKey) + '\')" '
    + 'style="margin-top:10px;background:#009A44;color:#fff;border:none;border-radius:50px;'
    + 'padding:9px 18px;cursor:pointer;font-weight:700;min-height:44px">' + btnLabel + '</button>';
}

/**
 * Sélectionne une lettre dans la grille alphabétique et joue son son.
 * @param {number} i - Index de la lettre dans CT.words
 */
function pickAlpha(i) {
  fcIdx = i;
  var card      = CT.words[i];
  var spokenKey = (currentMode === 'learn_french') ? card.fr : card.et;
  speak(spokenKey);
  var d = document.getElementById('alphaDetail');
  if (d) d.innerHTML = buildAlphaDetail(card);
}

/**
 * Retourne la carte flash (animation CSS via la classe 'flipped').
 */
function flipCard() {
  var fc = document.getElementById('fc');
  if (!fc) return;
  fc.classList.toggle('flipped');
}

/**
 * Passe à la carte suivante et joue automatiquement le son (délai 300ms).
 */
function nextCard() {
  fcIdx = (fcIdx + 1) % CT.words.length;
  renderFlash();
  var spokenKey = (currentMode === 'learn_french') ? CT.words[fcIdx].fr : CT.words[fcIdx].et;
  setTimeout(function() { speak(spokenKey); }, 300);
}

/**
 * Revient à la carte précédente.
 */
function prevCard() {
  fcIdx = (fcIdx - 1 + CT.words.length) % CT.words.length;
  renderFlash();
}

/**
 * @returns {boolean} true si le thème actif est de type Alphabet
 */
function isAlphaQuiz() {
  return CT && CT.type === 'alpha';
}


/* ============================================================
   10. QUIZ 10 QUESTIONS — AVEC ÉTOILES PROGRESSIVES
   ============================================================
   Le quiz adapte son nombre de questions à la taille du
   vocabulaire. Les questions sont générées dynamiquement
   (mélange aléatoire) pour les thèmes de vocabulaire standard,
   ou chargées depuis le champ statique 'quiz' / 'quiz10'
   pour les dialogues et l'alphabet.
   ============================================================ */

/**
 * Détermine le nombre optimal de questions selon la taille du vocabulaire.
 * @param {Object} theme - Objet thème
 * @returns {3|5|8|10}
 */
function getQuizTotal(theme) {
  var n = (theme.words || []).length;
  if (n < 10)  return 3;
  if (n < 15)  return 5;
  if (n <= 27) return 8;
  return 10;
}

/**
 * Mélange un tableau par l'algorithme de Fisher-Yates.
 * @param {Array} arr - Tableau à mélanger (non muté)
 * @returns {Array} Copie mélangée
 */
function _shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j   = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

/**
 * Retourne le libellé d'un mot dans la langue demandée.
 * Utilisé pour construire les questions et réponses du quiz.
 * @param {Object} word - Objet mot { fr, et, conj? }
 * @param {'fr'|'et'} lang
 * @returns {string}
 */
function _wordLabel(word, lang) {
  return word[lang] || '';
}

/**
 * Génère un ensemble de N questions QCM aléatoires depuis les mots du thème.
 * Chaque question affiche le mot dans la langue source et propose 4 options
 * dans la langue cible (1 correcte + 3 distracteurs).
 *
 * @param {Object} theme - Objet thème contenant .words
 * @param {number} total - Nombre de questions à générer
 * @returns {Array} Tableau de questions { q, opts, ans, audio }
 */
function _generateQuiz(theme, total) {
  var words = theme.words || [];
  if (words.length < 2) return [];

  /* Langue de la question → langue des réponses, selon le mode */
  var qLang = (currentMode === 'learn_french') ? 'fr' : 'et';  // langue affichée
  var aLang = (currentMode === 'learn_french') ? 'et' : 'fr';  // langue des options

  var shuffled = _shuffle(words);
  var selected = shuffled.slice(0, Math.min(total, shuffled.length));

  return selected.map(function(correctWord) {
    var qText    = _wordLabel(correctWord, qLang);
    var aCorrect = _wordLabel(correctWord, aLang);

    /* Distracteurs : 3 mots différents du mot correct */
    var pool        = words.filter(function(w) { return w !== correctWord; });
    var distractors = _shuffle(pool).slice(0, 3).map(function(w) {
      return _wordLabel(w, aLang);
    });

    /* Insertion de la bonne réponse à une position aléatoire parmi les 4 options */
    var opts   = distractors.slice(0, 3);
    var ansPos = Math.floor(Math.random() * 4);
    opts.splice(ansPos, 0, aCorrect);

    var qLabel = (currentMode === 'learn_french')
      ? 'Afaan Oromootti akkamitti jedhamaa ?'
      : 'Comment dit-on en français ?';

    return {
      q    : '"' + qText + '" — ' + qLabel,
      opts : opts,
      ans  : ansPos,
      audio: qText   // utilisé pour la lecture audio dans le quiz alphabet
    };
  });
}

/**
 * Retourne les questions à utiliser pour le quiz selon le type de thème :
 *  - Alphabet (type:'alpha') → questions statiques de quiz10
 *  - Dialogue (level:2 ou type:'dialog') → questions statiques de quiz
 *  - Vocabulaire standard → génération dynamique via _generateQuiz()
 *
 * @param {Object} theme
 * @returns {Array} Tableau de questions
 */
function getQuizQuestions(theme) {
  if (theme.type === 'alpha') {
    return (theme.quiz10 || []);
  }
  if (theme.level === 2 || theme.type === 'dialog') {
    return (theme.quiz || []);
  }
  /* Niveau 1 standard : génération dynamique */
  return _generateQuiz(theme, getQuizTotal(theme));
}

/**
 * Affiche la question courante du quiz (ou l'écran de résultats à la fin).
 * Utilise _q10Questions comme cache pour éviter de re-générer entre questions.
 */
function renderQuiz10() {
  /* Générer ou récupérer depuis le cache */
  if (!_q10Questions) {
    _q10Questions = getQuizQuestions(CT);
  }
  var qs    = _q10Questions;
  var total = qs.length;

  /* Cas : aucune question disponible pour ce thème */
  if (!qs || !total) {
    var noQLabel = (currentMode === 'learn_french') ? 'Gaffiinkoo hin jiru.' : 'Aucun quiz disponible.';
    document.getElementById('tabContent').innerHTML = '<div class="result-box"><p>' + noQLabel + '</p></div>';
    return;
  }

  /* ── Écran de résultats (fin du quiz) ── */
  if (q10Step >= total) {
    var pct         = Math.round(q10Score / total * 100);
    var earnedStars = _calcStars(pct);
    if (earnedStars > 0) markDone(CT.id, pct);

    var r         = _quizResultStrings(pct, 'q10');
    var isSuccess = earnedStars > 0;

    var endStars = Array.from({ length: 3 }, function(_, i) {
      return i < earnedStars ? '⭐' : '☆';
    }).join('');

    document.getElementById('tabContent').innerHTML = '<div class="result-box">'
      + '<div style="font-size:2rem; margin-bottom:5px;">' + (earnedStars === 3 ? '🌟🌟🌟' : endStars) + '</div>'
      + '<h3>' + r.title + '</h3>'
      + '<div class="score-num">' + q10Score + '/' + total + '</div>'
      + '<div style="font-size:1rem;margin:6px 0;color:' + (isSuccess ? '#009A44' : '#EF2B2D') + '">' + r.sub + '</div>'
      + '<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:14px">'
      + '<button class="retry-btn" style="background:#888" onclick="q10Step=0;q10Score=0;q10Answered=false;_q10Questions=null;renderQuiz10()">' + r.retry + '</button>'
      + (isSuccess ? '<button class="retry-btn" onclick="renderSections();showScreen(\'sections\')">' + r.finish + '</button>' : '')
      + '</div></div>';
    renderSections();
    return;
  }

  var q = qs[q10Step];

  /* ── Quiz Alphabet : bouton audio central au lieu du texte de la question ── */
  if (isAlphaQuiz()) {
    var audioLabel = (currentMode === 'learn_french')
      ? 'Sagalee dhaggeeffadhu kutaa sirrii filadhu'
      : 'Écoutez le son et choisissez la bonne lettre';
    var listenHint = (currentMode === 'learn_french') ? 'Dhaggeeffachuuf cuqaasi' : 'Cliquez pour écouter';
    var qLabel     = (currentMode === 'learn_french')
      ? 'Gaaffii ' + (q10Step + 1) + '/' + total
      : 'Question ' + (q10Step + 1) + '/' + total;

    var opts = q.opts.map(function(o, i) {
      return '<button class="quiz-opt" id="q10o' + i + '" onclick="checkQ10(' + i + ',' + q.ans + ')" '
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
    setTimeout(function() { playAlphaAudio(q.audio); }, 400);
    q10Answered = false;
    return;
  }

  /* ── Quiz standard : texte de la question + 4 options ── */
  var qStdLabel = (currentMode === 'learn_french')
    ? 'Gaaffii ' + (q10Step + 1) + '/' + total
    : 'Question ' + (q10Step + 1) + '/' + total;

  var stdOpts = q.opts.map(function(o, i) {
    return '<button class="quiz-opt" id="q10o' + i + '" onclick="checkQ10(' + i + ',' + q.ans + ')">' + o + '</button>';
  }).join('');

  document.getElementById('tabContent').innerHTML =
    '<div class="dialog-quiz-wrap">'
    + '<div class="quiz-q"><div class="q-text">' + qStdLabel + '<br><b>' + q.q + '</b></div></div>'
    + '<div class="quiz-options" style="grid-template-columns:1fr">' + stdOpts + '</div>'
    + '<div class="quiz-feedback" id="q10fb"></div>'
    + '</div>';
  q10Answered = false;
}

/**
 * Joue le son d'une lettre dans le quiz alphabet, avec animation de feedback.
 * @param {string} letter - Lettre à lire
 */
function playAlphaAudio(letter) {
  speak(letter);
  var btn = document.getElementById('playAudioBtn');
  if (btn) {
    btn.style.transform = 'scale(0.9)';
    setTimeout(function() { btn.style.transform = 'scale(1)'; }, 200);
  }
}

/**
 * Valide la réponse choisie, colorise les options et avance au prochain step.
 * @param {number} chosen  - Index de l'option choisie par l'utilisateur
 * @param {number} correct - Index de la bonne réponse
 */
function checkQ10(chosen, correct) {
  if (q10Answered) return;
  q10Answered = true;

  var qs = _q10Questions || getQuizQuestions(CT);

  /* Colorisation des options : vert pour la bonne, rouge pour la mauvaise */
  document.querySelectorAll('[id^=q10o]').forEach(function(b, i) {
    b.classList.add('disabled');
    if (i === correct)                     b.classList.add('correct');
    else if (i === chosen && chosen !== correct) b.classList.add('wrong');
  });

  if (chosen === correct) q10Score++;

  /* Feedback textuel */
  var correctWord = qs[q10Step].opts[correct];
  var fb    = document.getElementById('q10fb');
  var fbOk  = (currentMode === 'learn_french') ? '✅ Sirrii dha! Baga gammadde!'  : '✅ Correct ! Félicitations !';
  var fbErr = (currentMode === 'learn_french') ? '❌ Dogoggora. Deebiin sirriin: ' : '❌ Mauvaise réponse. La solution était : ';
  fb.textContent = (chosen === correct) ? fbOk : fbErr + correctWord;
  fb.style.color = (chosen === correct) ? '#009A44' : '#c0392b';

  /* Feedback audio : relecture en cas d'erreur */
  if (isAlphaQuiz()) {
    if (chosen !== correct) setTimeout(function() { speak(qs[q10Step].audio); }, 300);
  } else {
    /* Chercher le mot correct dans CT.words pour trouver la prononciation */
    if (CT.words) {
      var match = CT.words.find(function(w) { return w.et === correctWord || w.fr === correctWord; });
      if (match) {
        var spokenKey = (currentMode === 'learn_french') ? match.fr : match.et;
        speak(spokenKey);
      }
    }
  }

  setTimeout(function() { q10Step++; renderQuiz10(); }, 1600);
}


/* ============================================================
   11. DIALOGUE — SCÈNES DE SITUATION
   ============================================================
   Affiche les bulles de conversation pour la situation choisie,
   avec traduction intégrée et bouton d'écoute par bulle.
   ============================================================ */

/**
 * Affiche le dialogue de la situation courante.
 * Gère l'animation d'apparition progressive des bulles.
 */
function renderDialog() {
  var sits    = CT.situations;
  var sitBtns = sits.map(function(s, i) {
    return '<button class="sit-btn' + (i === sitIdx ? ' active' : '') + '" onclick="pickSit(' + i + ')">' + s.label + '</button>';
  }).join('');
  var sit = sits[sitIdx];

  /* Construction des bulles de dialogue */
  var bubbles = sit.dialogue.map(function(ln, i) {
    var mainMsg   = (currentMode === 'learn_french') ? ln.fr : ln.et;
    var transMsg  = (currentMode === 'learn_french') ? ln.et : ln.fr;
    var spokenKey = (currentMode === 'learn_french') ? ln.fr : ln.et;
    var listenTip = (currentMode === 'learn_french') ? 'Dhaggeeffadhu' : 'Écouter';

    /* Chaque bulle démarre invisible et s'affiche progressivement via CSS transition */
    return '<div class="bubble ' + ln.side + '" style="opacity:0;transition:opacity .3s ' + (i * 0.08) + 's" id="bl' + i + '">'
      + '<div class="speaker-name">' + ln.s + '</div>'
      + '<div class="msg-row">'
      + '<div class="msg">' + mainMsg + '</div>'
      + '<button class="speak-bubble-btn" onclick="speak(\'' + esc(spokenKey) + '\')" title="' + listenTip + '">🔊</button>'
      + '</div>'
      + '<div class="bubble-translation">' + transMsg + '</div>'
      + '</div>';
  }).join('');

  var quizBtnLabel = (currentMode === 'learn_french') ? 'Quiz jalqabi ➜' : 'Lancer le mini quiz ➜';

  document.getElementById('tabContent').innerHTML =
    '<div class="sit-nav">' + sitBtns + '</div>'
    + '<div class="dialogue-box">'
    + '<div class="scene-img-big">' + sit.img + '</div>'
    + '<div class="bubble-wrap">' + bubbles + '</div>'
    + '</div>'
    + '<div class="action-row">'
    + '<button class="btn-start-quiz" onclick="switchTab(\'dquiz\')">' + quizBtnLabel + '</button>'
    + '</div>';

  /* Déclencher l'animation d'apparition après un court délai */
  setTimeout(function() {
    document.querySelectorAll('[id^=bl]').forEach(function(b) { b.style.opacity = '1'; });
  }, 80);
}

/**
 * Change la situation affichée dans le dialogue.
 * @param {number} i - Index de la situation
 */
function pickSit(i) {
  sitIdx = i;
  renderDialog();
}


/* ============================================================
   12. VOCABULAIRE — LEXIQUE VISUEL CLIQUABLE
   ============================================================
   Affiche le vocabulaire d'un thème de dialogue sous forme de
   chips cliquables (écoute du mot au clic).
   ============================================================ */

/**
 * Affiche les chips de vocabulaire du thème de dialogue courant.
 * Chaque chip est cliquable pour lire le mot à voix haute.
 */
function renderVocab() {
  var chips = CT.vocab.map(function(v) {
    /* Format du vocabulaire : "mot_oromo = mot_français" */
    var parts     = v.split('=');
    var et        = parts[0].trim();
    var fr        = parts[1] ? parts[1].trim() : '';
    var mainWord  = (currentMode === 'learn_french') ? fr : et;
    var subWord   = (currentMode === 'learn_french') ? et : fr;
    var spokenKey = (currentMode === 'learn_french') ? fr : et;

    return '<span class="vocab-chip" onclick="speak(\'' + esc(spokenKey) + '\')">'
      + '<span class="vocab-item-et">' + mainWord + '</span>'
      + (subWord ? '<span class="vocab-item-fr">= ' + subWord + '</span>' : '')
      + '</span>';
  }).join('');

  var vocabTitle   = (currentMode === 'learn_french')
    ? '📚 Jechoota murteessoo — Sagalee dhaggeeffachuuf cuqaasi !'
    : '📚 Lexique essentiel — Cliquez pour écouter l\'Oromo !';
  var quizBtnLabel = (currentMode === 'learn_french') ? 'Quiz jalqabi ➜' : 'Lancer le mini quiz ➜';

  document.getElementById('tabContent').innerHTML =
    '<div class="vocab-section">'
    + '<div class="vocab-title">' + vocabTitle + '</div>'
    + '<div class="vocab-grid">' + chips + '</div>'
    + '</div>'
    + '<div class="action-row">'
    + '<button class="btn-start-quiz" onclick="switchTab(\'dquiz\')">' + quizBtnLabel + '</button>'
    + '</div>';
}


/* ============================================================
   13. QUIZ DIALOGUE — QUESTIONS SUR LE DIALOGUE
   ============================================================
   Quiz statique chargé depuis CT.quiz (défini dans data.js).
   Même système d'étoiles que le Quiz 10 questions.
   ============================================================ */

/**
 * Affiche la question courante du quiz dialogue (ou l'écran de résultats).
 */
function renderDialogQuiz() {
  var qs    = CT.quiz;
  var total = qs.length;

  /* ── Écran de résultats ── */
  if (dqStep >= total) {
    var pct         = Math.round(dqScore / total * 100);
    var earnedStars = _calcStars(pct);
    if (earnedStars > 0) markDone(CT.id, pct);

    var r         = _quizResultStrings(pct, 'dq');
    var isSuccess = earnedStars > 0;

    var endStars = Array.from({ length: 3 }, function(_, i) {
      return i < earnedStars ? '⭐' : '☆';
    }).join('');

    document.getElementById('tabContent').innerHTML = '<div class="result-box">'
      + '<div style="font-size:2rem; margin-bottom:5px;">' + (earnedStars === 3 ? '🎉🎉🎉' : endStars) + '</div>'
      + '<h3>' + r.title + '</h3>'
      + '<div class="score-num">' + dqScore + '/' + total + '</div>'
      + '<div style="font-size:.9rem;margin-top:6px;color:' + (isSuccess ? '#009A44' : '#EF2B2D') + '">' + r.sub + '</div>'
      + '<div style="display:flex;gap:8px;justify-content:center;margin-top:14px;flex-wrap:wrap">'
      + '<button class="retry-btn" style="background:#888" onclick="dqStep=0;dqScore=0;dqAnswered=false;renderDialogQuiz()">' + r.retry + '</button>'
      + (isSuccess ? '<button class="retry-btn" onclick="renderSections();showScreen(\'sections\')">' + r.finish + '</button>' : '')
      + '</div></div>';
    renderSections();
    return;
  }

  /* ── Question courante ── */
  var q      = qs[dqStep];
  var qLabel = (currentMode === 'learn_french')
    ? 'Gaaffii ' + (dqStep + 1) + '/' + total
    : 'Question ' + (dqStep + 1) + '/' + total;

  var opts = q.opts.map(function(o, i) {
    return '<button class="quiz-opt" id="dqo' + i + '" onclick="checkDQ(' + i + ',' + q.ans + ')">' + o + '</button>';
  }).join('');

  document.getElementById('tabContent').innerHTML =
    '<div class="dialog-quiz-wrap">'
    + '<div class="quiz-q"><div class="q-text">' + qLabel + '<br><b>' + q.q + '</b></div></div>'
    + '<div class="quiz-options" style="grid-template-columns:1fr">' + opts + '</div>'
    + '<div class="quiz-feedback" id="dqfb"></div>'
    + '</div>';
  dqAnswered = false;
}

/**
 * Valide la réponse du quiz dialogue et avance à la question suivante.
 * @param {number} chosen  - Index de l'option choisie
 * @param {number} correct - Index de la bonne réponse
 */
function checkDQ(chosen, correct) {
  if (dqAnswered) return;
  dqAnswered = true;

  document.querySelectorAll('[id^=dqo]').forEach(function(b, i) {
    b.classList.add('disabled');
    if (i === correct)                          b.classList.add('correct');
    else if (i === chosen && chosen !== correct) b.classList.add('wrong');
  });

  if (chosen === correct) dqScore++;

  var fb    = document.getElementById('dqfb');
  var fbOk  = (currentMode === 'learn_french') ? '✅ Deebii sirrii dha!' : '✅ Bonne réponse !';
  var fbErr = (currentMode === 'learn_french') ? '❌ Deebistee yaali!'   : '❌ Essayer de nouveau !';
  fb.textContent = (chosen === correct) ? fbOk : fbErr;
  fb.style.color = (chosen === correct) ? '#009A44' : '#c0392b';

  setTimeout(function() { dqStep++; renderDialogQuiz(); }, 1500);
}


/* ============================================================
   14. UTILITAIRES & CHAÎNES DE RÉSULTATS BILINGUES
   ============================================================
   Fonctions partagées : génération des messages de fin de quiz
   et échappement des chaînes pour l'intégration HTML.
   ============================================================ */

/**
 * Génère les chaînes bilingues pour l'écran de résultats d'un quiz.
 * @param {number} pct   - Pourcentage de réussite (0–100)
 * @param {'q10'|'dq'} type - Type de quiz (pour extensions futures)
 * @returns {{ title: string, sub: string, retry: string, finish: string }}
 */
function _quizResultStrings(pct, type) {
  var stars     = _calcStars(pct);
  var isSuccess = stars > 0;

  if (currentMode === 'learn_french') {
    /* Messages en Afaan Oromoo (langue de l'apprenant) */
    var titleFr = 'Quiz xumurameera!';
    if      (stars === 3) titleFr = 'Baayʼee gaari da! 🌟🌟🌟';
    else if (stars === 2) titleFr = 'Gari da! ⭐⭐';
    else if (stars === 1) titleFr = 'Ni dandaʼama! ⭐';

    return {
      title : titleFr,
      sub   : isSuccess
              ? 'Kutaan kun milkiin darbeera! Tarreeffama haaraa argatteetta.'
              : 'Darbuuf yoo xiqqaate 50% deebii sirrii barbaachisa. Deebisii yaali!',
      retry : '🔄 Deebisi yaali',
      finish: '✓ Xumuri'
    };

  } else {
    /* Messages en Français (langue de l'apprenant) */
    var titleOr = 'Quiz terminé !';
    if      (stars === 3) titleOr = 'Parfait ! 🌟🌟🌟';
    else if (stars === 2) titleOr = 'Très bien ! ⭐⭐';
    else if (stars === 1) titleOr = 'Bien ! ⭐';

    return {
      title : titleOr,
      sub   : isSuccess
              ? 'Module validé ! Vous pouvez passer au suivant ou réessayer pour plus d\'étoiles.'
              : 'Il vous faut au moins 50% de bonnes réponses (1⭐) pour valider. Réessayez !',
      retry : '🔄 Réessayer',
      finish: '✓ Terminer'
    };
  }
}

/**
 * Échappe les caractères spéciaux d'une chaîne pour une insertion sécurisée
 * dans les attributs HTML inline (onclick="...") et les littéraux de chaîne JS.
 * @param {string} s - Chaîne à échapper
 * @returns {string} Chaîne échappée
 */
function esc(s) {
  return (s || '')
    .replaceAll('\\', '\\\\')  // Antislash d'abord (ordre important)
    .replaceAll("'",  "\\'")   // Guillemets simples (pour les onclick='...')
    .replaceAll('"',  '&quot;'); // Guillemets doubles (pour les attributs HTML)
}


/* ============================================================
   CRÉDITS
   ============================================================ */

/**
 * Affiche la modale des crédits.
 */
function showCredits() {
  var modal = document.getElementById('credits-modal');
  if (modal) modal.style.display = 'flex';
}


/* ============================================================
   15. INITIALISATION DU LAUNCHER
   ============================================================
   Branche les clics sur les cartes de sélection de langue.
   Les boutons du launcher portent un attribut data-lang dont la
   valeur est transmise directement à initApp().

   Ce bloc remplace les anciens onclick inline qui ont été retirés
   du HTML lors de l'optimisation (séparation structure / comportement).

   Les scripts étant chargés en fin de <body>, le DOM est déjà
   entièrement parsé à ce stade — aucun DOMContentLoaded nécessaire.
   ============================================================ */

document.querySelectorAll('.lang-card[data-lang]').forEach(function(card) {
  card.addEventListener('click', function() {
    initApp(card.getAttribute('data-lang'));
  });
});