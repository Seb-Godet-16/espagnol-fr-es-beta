/* ============================================================
   Language App 🇫🇷🇪🇸  —  Moteur applicatif unifié
   Français ↔ Espagnol (bidirectionnel)
   © Juin 2026 – Sébastien Godet · IA Claude Sonnet 4.6 et Gemini 3.5 Flash
   ============================================================
   ARCHITECTURE (4 fichiers) :
     ├─ index.html  → Structure HTML + launcher
     ├─ style.css   → Thèmes couleur, composants visuels
     ├─ data.js     → ALL_THEMES_FR / ALL_THEMES_ES (contenu pédagogique)
     └─ app.js      → Ce fichier : logique applicative complète

   SECTIONS DE CE FICHIER :
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
   1. VARIABLES D'ÉTAT GLOBALES
   ─────────────────────────────────────────────────────────
   Ces variables sont partagées entre toutes les fonctions.
   Elles doivent être initialisées AVANT tout appel à initApp().
   Ne jamais les déclarer localement dans une fonction.
═══════════════════════════════════════════════════════════ */

// Mode courant : 'learn_french' (Espagnol → Français) ou 'learn_spain' (Français → Espagnol)
var currentMode = '';

// Variante hispanique sélectionnée (codes ISO pays) ; par défaut : Espagne castillane
// Valeurs possibles : 'ES' | 'MX' | 'CO' | 'PE' | 'VE' | 'AR' | 'EC'
var currentRegion = 'ES';

// Code BCP-47 utilisé par la Web Speech API pour la synthèse vocale.
// Initialisé à vide ; assigné par initApp() selon le mode sélectionné.
var voiceLang = '';

// Tableau de tous les thèmes actifs, rempli par initApp() depuis data.js
var ALL_THEMES = [];

// Clé localStorage distincte par mode, pour conserver deux progressions indépendantes
var STORAGE_KEY = '';

// ─── Variables de session (réinitialisées à chaque ouverture de thème) ───
var CT          = null;   // Thème courant (Current Theme)
var fcIdx       = 0;       // Index de la carte flash active
var dqStep      = 0;       // Étape du quiz dialogue
var dqScore     = 0;       // Score du quiz dialogue
var dqAnswered  = false;   // Anti double-clic sur les options du quiz dialogue
var sitIdx      = 0;       // Index de la situation active dans un dialogue
var q10Step     = 0;       // Étape du quiz 10 questions
var q10Score    = 0;       // Score du quiz 10 questions
var q10Answered = false;   // Anti double-clic sur les options du quiz 10

// Cache des questions générées dynamiquement pour le quiz de Niveau 1
// Régénéré à chaque ouverture d'onglet Quiz pour garantir la variété
var _currentDynQuiz = [];

// Clé sessionStorage utilisée pour mémoriser la position dans un quiz en cours
// (perdue à la fermeture de l'onglet, conservée si on quitte/revient sur la leçon)
var QUIZ_SESSION_KEY = 'pe_quiz_session_v1';

// Progression persistante : tableau d'objets { id: string, stars: 1|2|3 }
var done = [];


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
 * et la langue cible (sous-titre), en gérant le cas particulier
 * de l'alphabet (type:'alpha') dont les libellés sont inversés
 * selon le mode actif.
 * @param {Object} t – Objet thème issu de data.js
 * @returns {{ main: string, sub: string }}
 */
function _themeTitle(t) {
  var isAlpha = (t.id === 'alpha' || t.type === 'alpha');
  var main = isAlpha ? L("L'Alphabet", 'El Alfabeto') : t.name;
  var sub  = isAlpha ? L('El Alfabeto', "L'Alphabet") : t.sub;
  return { main: main, sub: sub };
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

  /* — Bascule Vue A → Vue B — */
  document.getElementById('launcher-view-cards').style.display   = 'none';
  document.getElementById('launcher-view-variant').style.display = 'flex';
  document.getElementById('launcher-view-variant').style.flexDirection = 'column';
  document.getElementById('launcher-view-variant').style.alignItems = 'center';

  /* — Drapeau et titre selon le mode — */
  var flagEmojis = { ES:'🇪🇸', MX:'🇲🇽', CO:'🇨🇴', PE:'🇵🇪', VE:'🇻🇪', AR:'🇦🇷', EC:'🇪🇨' };
  var flagRow   = document.getElementById('launcherFlagRow');
  var titleEl   = document.getElementById('launcherVariantTitle');
  if (mode === 'learn_french') {
    if (flagRow)  flagRow.textContent  = '🇫🇷';
    if (titleEl)  titleEl.textContent  = 'Apprendre le Français';
  } else {
    if (flagRow)  flagRow.textContent  = flagEmojis[currentRegion] || '🇪🇸';
    if (titleEl)  titleEl.textContent  = 'Aprender Español';
  }

  /* — Génération du sélecteur de variante et de l'encart info — */
  var selectorWrap = document.getElementById('region-selector-wrap');
  if (selectorWrap) {
    selectorWrap.style.display = 'block';
    var container = document.getElementById('region-select-container');
    var msgBox    = document.getElementById('region-message-box');
    if (container) container.innerHTML = '';
    if (msgBox)    msgBox.innerHTML    = '';
    renderRegionOptions();
    pickRegion(currentRegion);
  }

  /* — Texte du bouton Continuer selon le mode — */
  var continueBtn = document.getElementById('launcherContinueBtn');
  if (continueBtn) {
    continueBtn.innerHTML = (mode === 'learn_french')
      ? '▶ Commencer<br><span class="translation-sub">Empezar</span>'
      : '▶ Empezar<br><span class="translation-sub">Commencer</span>';
    continueBtn.onclick = function() { initApp(mode); };
  }

  /* — Bouton retour → Vue A — */
  var backBtn = document.getElementById('launcherBackBtn');
  if (backBtn) {
    backBtn.onclick = function() {
      document.getElementById('launcher-view-variant').style.display = 'none';
      document.getElementById('launcher-view-cards').style.display   = 'flex';
      document.getElementById('launcher-view-cards').style.flexDirection = 'column';
      document.getElementById('launcher-view-cards').style.alignItems = 'center';
      document.documentElement.className = '';
    };
  }
}

/**
 * Revient au Launcher (Vue A) depuis l'écran Sections.
 * Masque tous les écrans et réaffiche le Launcher avec la Vue A.
 */
function showLauncher() {
  document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
  document.getElementById('launcher-view-variant').style.display = 'none';
  document.getElementById('launcher-view-cards').style.display   = 'flex';
  document.getElementById('launcher-view-cards').style.flexDirection = 'column';
  document.getElementById('launcher-view-cards').style.alignItems = 'center';
  document.getElementById('app-launcher').classList.add('active');
  document.documentElement.className = '';
  window.scrollTo(0, 0);
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
  var flagEmojis = { ES:'🇪🇸', MX:'🇲🇽', CO:'🇨🇴', PE:'🇵🇪', VE:'🇻🇪', AR:'🇦🇷', EC:'🇪🇨' };
  var activeFlag  = flagEmojis[currentRegion] || '🇪🇸';

  /* ─── MODE : Apprendre le Français (interface présentée en Espagnol) ─── */
  if (mode === 'learn_french') {
    document.documentElement.className = 'theme-french';
    voiceLang  = 'fr-FR';
    ALL_THEMES = ALL_THEMES_FR;
    STORAGE_KEY = 'pe_es_fr_done_v1';

    _setUI({
      homeFlagRow    : '🇫🇷',
      homeTitle      : 'Apprendre le Français',
      homeStartBtn   : '▶ Commencer<br><span class="translation-sub">Empezar</span>',
      sectionsBackBtn: '← Retour<br><span class="translation-sub">Volver</span>',
      sectionsTitle  : '📚 Modules',
      lessonBackBtn  : '← Modules<br><span class="translation-sub">Módulos</span>',
      level1Badge    : '1',
      level1Label    : '<span>Niveau 1 — Vocabulaire</span>',
      level2Badge    : '2',
      level2Label    : '<span>Niveau 2 — Phrases simples</span>'
    });

  /* ─── MODE : Apprendre l'Espagnol (interface présentée en Français) ─── */
  } else if (mode === 'learn_spain') {
    document.documentElement.className = 'theme-spain';
    voiceLang  = 'es-ES';
    ALL_THEMES = ALL_THEMES_ES;
    STORAGE_KEY = 'pe_fr_es_done_v1';

    _setUI({
      homeFlagRow    : activeFlag,           // Drapeau dynamique selon la région mémorisée
      homeTitle      : 'Aprender Español',
      homeStartBtn   : '▶ Empezar<br><span class="translation-sub">Commencer</span>',
      sectionsBackBtn: '← Volver<br><span class="translation-sub">Retour</span>',
      sectionsTitle  : '📚 Módulos',
      lessonBackBtn  : '← Módulos<br><span class="translation-sub">Modules</span>',
      level1Badge    : '1',
      level1Label    : '<span>Nivel 1 — Vocabulario</span>',
      level2Badge    : '2',
      level2Label    : '<span>Nivel 2 — Phrases simples</span>'
    });
  }

  /* — Chargement de la progression sauvegardée pour ce mode — */
  loadDone();

  /* — Masquer le launcher et naviguer directement vers Sections — */
  document.getElementById('app-launcher').classList.remove('active');
  showScreen('sections');

  /* — Première visite : affichage automatique du guide utilisateur —
       Le guide s'affiche juste après le choix de langue + variante.
       À la fermeture du guide, l'utilisateur se retrouve sur Sections. */
  _maybeAutoShowGuide();
}


/* ─────────────────────────────────────────────────────────
   _setUI(t) — Injecte les textes de l'interface dans le DOM
   Paramètre : objet t contenant les clés = IDs des éléments HTML
   Utilise innerHTML pour interpréter les balises HTML bilingues.
───────────────────────────────────────────────────────── */
function _setUI(t) {
  _setText('homeFlagRow',     t.homeFlagRow);
  _setText('homeTitle',       t.homeTitle);
  _setText('homeStartBtn',    t.homeStartBtn);
  _setText('sectionsBackBtn', t.sectionsBackBtn);
  _setText('sectionsTitle',   t.sectionsTitle);
  _setText('lessonBackBtn',   t.lessonBackBtn);
  _setText('level1Badge',     t.level1Badge);
  _setText('level1Label',     t.level1Label);
  _setText('level2Badge',     t.level2Badge);
  _setText('level2Label',     t.level2Label);

  // sectionsBackBtn : retour au Launcher (la fonction showLauncher est déjà dans onclick HTML)
  // homeStartBtn : non utilisé dans le nouveau flux, conservé pour rétro-compatibilité
}

/* _setText(id, val) — Remplace innerHTML d'un élément par val
   (utilise innerHTML et non textContent pour supporter les balises HTML) */
function _setText(id, val) {
  var el = document.getElementById(id);
  if (el) el.innerHTML = val || '';
}


/* ═══════════════════════════════════════════════════════════
   3. SYNTHÈSE VOCALE — Voix espagnole avec cascade locale
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
var _spanishVoice     = undefined;
// Empêche la répétition de l'alerte de configuration audio
var _hasNotifiedVoice = false;

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
    var foundVoice = null;
    var foundLabel = 'Espagne (Voix par défaut)';

    // Priorité 1 : voix exactement correspondant à la région (ex : es-MX pour le Mexique)
    foundVoice = voices.find(function(v) {
      return v.lang.toLowerCase() === targetLang.toLowerCase();
    });
    if (foundVoice) {
      foundLabel = targetLang;
    } else {
      // Priorité 2 : n'importe quel espagnol disponible (ex : es-ES si es-MX absent)
      foundVoice = voices.find(function(v) {
        return v.lang.toLowerCase().indexOf('es') === 0;
      });
      foundLabel = foundVoice ? foundVoice.lang + ' (Secours)' : 'Voix par défaut';
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

  // Si les voix ne sont pas encore chargées, on attend l'événement voiceschanged
  if (!search()) {
    speechSynthesis.addEventListener('voiceschanged', function h() {
      speechSynthesis.removeEventListener('voiceschanged', h);
      search();
      callback(_spanishVoice);
    });
  }
}

/* speak(txt) — Point d'entrée unique pour la synthèse vocale.
   Gère automatiquement :
     - Les textes avec '/' (prononce chaque partie avec 2s de pause)
     - Le mode 'learn_spanish' → voix espagnole résolue dynamiquement
     - Le mode 'learn_french'  → voix française (voiceLang = 'fr-FR')
   Si la synthèse échoue silencieusement (ex : iOS Safari avant la première
   interaction tactile de la page), un indicateur "🔇 Audio indisponible"
   discret est affiché via _showAudioUnavailable(). */
function speak(txt) {
  if (!txt) return;

  if (!window.speechSynthesis) {
    _showAudioUnavailable();
    return;
  }

  if (currentMode !== 'learn_french') {
    // ─── Mode Espagnol : résolution asynchrone de la meilleure voix disponible ───
    _resolveSpanishVoice(function(voice) {
      speechSynthesis.cancel();
      var parts = (txt || '').split('/').map(function(p) { return p.trim(); }).filter(Boolean);
      function speakPart(i) {
        if (i >= parts.length) return;
        var u = new SpeechSynthesisUtterance(parts[i]);
        if (voice) { u.voice = voice; u.lang = voice.lang; }
        u.rate  = 0.85;
        u.onend = function() {
          _hideAudioUnavailable();
          if (i + 1 < parts.length) setTimeout(function() { speakPart(i + 1); }, 2000);
        };
        u.onerror = function() { _showAudioUnavailable(); };
        speechSynthesis.speak(u);
      }
      speakPart(0);
    });

  } else {
    // ─── Mode Français : voix système standard, taux légèrement ralenti ───
    _doSpeak(txt, null, 0.80);
  }
}

/* _doSpeak(txt, voiceObj, rate) — Synthèse TTS bas niveau.
   Gère la découpe sur '/' et la pause de 2s entre les parties.
   Signale via _showAudioUnavailable() si la synthèse échoue (onerror). */
function _doSpeak(txt, voiceObj, rate) {
  if (!window.speechSynthesis) {
    _showAudioUnavailable();
    return;
  }
  speechSynthesis.cancel();
  var parts = (txt || '').split('/').map(function(p) { return p.trim(); }).filter(Boolean);
  function speakPart(i) {
    if (i >= parts.length) return;
    var u = new SpeechSynthesisUtterance(parts[i]);
    u.lang = voiceLang;
    u.rate = rate;
    if (voiceObj) u.voice = voiceObj;
    u.onend = function() {
      _hideAudioUnavailable();
      if (i + 1 < parts.length) setTimeout(function() { speakPart(i + 1); }, 2000);
    };
    u.onerror = function() { _showAudioUnavailable(); };
    speechSynthesis.speak(u);
  }
  speakPart(0);
}


/* ─────────────────────────────────────────────────────────
   INDICATEUR "AUDIO INDISPONIBLE"
   ─────────────────────────────────────────────────────────
   Sur iOS notamment, speechSynthesis peut échouer silencieusement
   tant que l'utilisateur n'a pas encore interagi avec la page
   (politique de déblocage audio des navigateurs mobiles).
   Cet indicateur discret informe l'utilisateur sans bloquer l'UI.
───────────────────────────────────────────────────────── */

// Empêche les notifications répétées tant que l'indicateur est déjà affiché
var _audioUnavailableShown = false;

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


/* _showToast(msg) — Affiche un message discret en bas d'écran pendant 3 secondes.
   Remplace les alert() bloquants pour les notifications non critiques.
   Crée dynamiquement un élément #app-toast (singleton) dans le DOM. */
function _showToast(msg) {
  var toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.style.cssText =
      'position:fixed;bottom:80px;left:50%;transform:translateX(-50%) translateY(20px);'
      + 'background:rgba(30,30,30,0.92);color:#fff;padding:10px 20px;border-radius:50px;'
      + 'font-size:.82rem;font-weight:600;max-width:340px;text-align:center;'
      + 'box-shadow:0 4px 16px rgba(0,0,0,.3);z-index:99999;'
      + 'opacity:0;transition:opacity .3s ease,transform .3s ease;pointer-events:none;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  // Apparition
  requestAnimationFrame(function() {
    toast.style.opacity  = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  // Disparition après 3 s
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(function() {
    toast.style.opacity  = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 3000);
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
  var newStars = _calcStars(pct);
  if (newStars === 0) return;

  var existing = done.find(function(d) { return d.id === id; });
  if (existing) {
    if (newStars > existing.stars) existing.stars = newStars; // Amélioration seulement
  } else {
    done.push({ id: id, stars: newStars });
  }
  saveDone();
}

/* Réinitialise la progression d'un module (bouton "Recommencer"). */
function resetTheme(id) {
  done = done.filter(function(d) { return d.id !== id; });
  saveDone();
  renderSections();
}

/* Retourne true si le module a été complété au moins une fois (≥ 1 étoile). */
function isDone(id) {
  return done.some(function(d) { return d.id === id; });
}

/* Retourne le nombre d'étoiles d'un module (0 si non commencé). */
function getThemeStars(id) {
  var found = done.find(function(d) { return d.id === id; });
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
  var activeTabEl = document.querySelector('#lessonTabs .tab.active');
  var tabKey = activeTabEl ? activeTabEl.dataset.tab : null;
  if (tabKey !== 'quiz10' && tabKey !== 'dquiz') return;

  var state = {
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
  if (!state || state.themeId !== CT.id) return null;

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
    return 'quiz10';
  }
  if (state.tab === 'dquiz') {
    dqStep  = state.dqStep  || 0;
    dqScore = state.dqScore || 0;
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

function showScreen(id) {
  // Masque tous les écrans, puis active uniquement celui demandé
  document.querySelectorAll('.screen').forEach(function(s) {
    s.classList.remove('active');
  });

  // Remonte systématiquement en haut de page à chaque changement d'écran.
  window.scrollTo(0, 0);

  document.getElementById(id).classList.add('active');

  // Rendu à la demande selon l'écran affiché
  if (id === 'home')     renderHome();
  if (id === 'sections') renderSections();
}


/* ═══════════════════════════════════════════════════════════
   6. ÉCRAN HOME — Barre de progression et étoiles totales
   ─────────────────────────────────────────────────────────
   Affiche :
     - La barre de progression (% de modules validés)
     - Le label bilingue (n / total modules — %)
     - Le total d'étoiles gagnées (sur le maximum possible)
═══════════════════════════════════════════════════════════ */

function renderHome() {
  if (!ALL_THEMES.length) return;

  var total = ALL_THEMES.length;
  var n     = done.length;
  var pct   = Math.round(n / total * 100);

  // Mise à jour de la largeur de la barre de progression
  document.getElementById('homeBar').style.width = pct + '%';

  // Label bilingue selon le mode actif
  var label = L(
    n + ' / ' + total + ' modules validés — ' + pct + '%'
    + '<br><span class="translation-sub">' + n + ' / ' + total + ' módulos completados — ' + pct + '%</span>',
    n + ' / ' + total + ' módulos aprobados — ' + pct + '%'
    + '<br><span class="translation-sub">' + n + ' / ' + total + ' modules validés — ' + pct + '%</span>'
  );
  document.getElementById('homeBarLabel').innerHTML = label;

  // Calcul et affichage du total d'étoiles (réel / maximum possible)
  var totalStarsEarned = done.reduce(function(acc, d) { return acc + d.stars; }, 0);
  var maxStarsPossible = total * 3;
  document.getElementById('homeStars').innerHTML =
    '<span style="font-size:1.1rem;font-weight:bold;color:#f1c40f;">⭐ '
    + totalStarsEarned + ' / ' + maxStarsPossible + '</span>';
}


/* ═══════════════════════════════════════════════════════════
   7. ÉCRAN SECTIONS — Grille des thèmes (Niveau 1 & 2)
   ─────────────────────────────────────────────────────────
   Génère dynamiquement les cartes de module pour chaque niveau.
   Chaque carte affiche : emoji, titre, sous-titre, étoiles,
   et un bouton "Recommencer" si le module a été validé.
═══════════════════════════════════════════════════════════ */

function renderSections() {
  if (!ALL_THEMES.length) return;

  var total = ALL_THEMES.length;
  var n     = done.length;
  var pct   = Math.round(n / total * 100);

  // Mise à jour de la barre de progression globale
  document.getElementById('globalProgress').style.width = pct + '%';
  var progressLabel = L(
    n + ' / ' + total + ' modules — ' + pct + '%',
    n + ' / ' + total + ' módulos — '  + pct + '%'
  );
  document.getElementById('progressLabel').innerHTML = progressLabel;

  // Affichage des étoiles totales dans le header de Sections
  var totalStarsEarned = done.reduce(function(acc, d) { return acc + d.stars; }, 0);
  var maxStarsPossible = total * 3;
  var sectionsStars = document.getElementById('sectionsStars');
  if (sectionsStars) {
    sectionsStars.innerHTML =
      '<span style="font-size:1rem;font-weight:bold;color:rgba(255,255,255,0.95);">⭐ '
      + totalStarsEarned + ' / ' + maxStarsPossible + '</span>';
  }

  // Sous-titre bilingue sous le titre "Modules / Módulos"
  // En mode FR (hispanophone) : affiche la traduction espagnole selon la variante
  // En mode ES (francophone)  : affiche la traduction française simple
  var subtitle = document.getElementById('sectionsSubtitle');
  if (subtitle) {
    if (isFrench()) {
      // Hispanophone apprenant le français : sous-titre en espagnol
      subtitle.innerHTML = '<span class="translation-sub">Módulos</span>';
    } else {
      // Francophone apprenant l'espagnol : sous-titre en français
      subtitle.innerHTML = '<span class="translation-sub">Modules</span>';
    }
  }

  // Footer dynamique selon le mode
  var footer = document.getElementById('sectionsFooter');
  if (footer) {
    if (isFrench()) {
      // Hispanophone apprenant le français : footer entièrement en espagnol
      // "Remerciements" traduit, "Guide" supprimé
      footer.innerHTML =
        '© Junio 2026 – Desarrollado por Sébastien Godet · Asistido por IA Claude Sonnet 4.6 y Gemini 3.5 Flash<br>'
        + '<a href="https://www.linkedin.com/in/s%C3%A9bastien-godet-142ba6145" target="_blank">💼 LinkedIn</a> · '
        + '<a href="#" onclick="showCredits()">Agradecimientos</a>';
    } else {
      // Francophone apprenant l'espagnol : footer en français, "Guide" supprimé
      footer.innerHTML =
        '© Juin 2026 – Développé par Sébastien Godet · Assisté par IA Claude Sonnet 4.6 et Gemini 3.5 Flash<br>'
        + '<a href="https://www.linkedin.com/in/s%C3%A9bastien-godet-142ba6145" target="_blank">LinkedIn</a> · '
        + '<a href="#" onclick="showCredits()">Remerciements</a>';
    }
  }

  // Génération des grilles pour chaque niveau (1 = vocabulaire, 2 = dialogues)
  ['grid1', 'grid2'].forEach(function(gid) {
    var lv = gid === 'grid1' ? 1 : 2;
    document.getElementById(gid).innerHTML = ALL_THEMES
      .filter(function(t) { return t.level === lv; })
      .map(function(t) { return _buildThemeCard(t); })
      .join('');
  });
}

/* _buildThemeCard(t) — Construit le HTML d'une carte de module.
   Gère l'affichage du titre dans la langue cible selon currentMode,
   les étoiles (remplies/vides) et le bouton de réinitialisation. */
function _buildThemeCard(t) {
  var mainTitle = '', subLine = '';

  if (currentMode === 'learn_french') {
    // ─── MODE FRANÇAIS : Français en Premier (Grand) / Espagnol en Second (Petit) ───
    if (t.id === 'alpha' || t.type === 'alpha') {
      mainTitle = "L'Alphabet";
      subLine = 'El Alfabeto';
    } else {
      mainTitle = t.name; // Déjà en Français !
      subLine = t.sub;    // Déjà en Espagnol !
    }
  } else {
    // ─── MODE ESPAGNOL : Espagnol en Premier (Grand) / Français en Second (Petit) ───
    if (t.id === 'alpha' || t.type === 'alpha') {
      mainTitle = 'El Alfabeto';
      subLine = "L'Alphabet";
    } else {
      mainTitle = t.name; // Déjà en Espagnol !
      
      // Sécurité si t.sub contient un slash dans ce mode
      var subText = t.sub || '';
      if (subText.includes('/')) {
        subLine = subText.split('/')[1].trim(); // On ne garde que la partie Française
      } else {
        subLine = subText;
      }
    }
  }

  // Capitalisation de sécurité (Première lettre en majuscule)
  if (mainTitle) mainTitle = mainTitle.trim().charAt(0).toUpperCase() + mainTitle.trim().slice(1);
  if (subLine) subLine = subLine.trim().charAt(0).toUpperCase() + subLine.trim().slice(1);

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

  // Rendu de la carte HTML
  return '<div class="theme-card' + (isDone(t.id) ? ' done' : '')
    + '" onclick="openTheme(\'' + t.id + '\')">'
    + '<div class="t-emoji">'   + t.emoji   + '</div>'
    + '<div class="t-name">'    + mainTitle + '</div>'
    + '<div class="t-sub">'     + subLine   + '</div>'
    + '<div class="t-stars" style="letter-spacing:2px">' + starsStr + '</div>'
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
  CT        = ALL_THEMES.find(function(t) { return t.id === id; });
  fcIdx     = 0;
  dqStep    = 0; dqScore    = 0; dqAnswered  = false;
  sitIdx    = 0;
  q10Step   = 0; q10Score   = 0; q10Answered = false;

  // Pré-génération du quiz dynamique pour les thèmes de Niveau 1 (hors alphabet)
  _currentDynQuiz = (CT && CT.level === 1 && CT.type !== 'alpha')
    ? _generateLevel1Quiz(CT)
    : [];

  // Tentative de reprise d'un quiz en cours (sessionStorage) pour ce même thème.
  // Si une session valide existe, on mémorise l'onglet à activer en priorité.
  var resumeTab = _restoreQuizSession();

  // Injection de l'emoji dans l'en-tête de leçon
  document.getElementById('lessonEmoji').textContent = CT.emoji;

  // Construction du titre de l'écran leçon
  var mainTitle = '';
  var subTitle = '';

  if (currentMode === 'learn_french') {
    if (CT.id === 'alpha' || CT.type === 'alpha') {
      mainTitle = "L'Alphabet";
      subTitle = 'El Alfabeto';
    } else {
      mainTitle = CT.name || '';
      subTitle = CT.sub || '';
    }
  } else {
    if (CT.id === 'alpha' || CT.type === 'alpha') {
      mainTitle = 'El Alfabeto';
      subTitle = "L'Alphabet";
    } else {
      mainTitle = CT.name || '';
      var subTextES = CT.sub || '';
      if (subTextES.includes('/')) {
        subTitle = subTextES.split('/')[1].trim();
      } else {
        subTitle = subTextES;
      }
    }
  }

  // Nettoyage et capitalisation
  if (mainTitle) mainTitle = mainTitle.trim().charAt(0).toUpperCase() + mainTitle.trim().slice(1);
  if (subTitle)  subTitle  = subTitle.trim().charAt(0).toUpperCase() + subTitle.trim().slice(1);

  // Génération finale du titre : "Langue Apprise — Langue Source"
  document.getElementById('lessonTitle').textContent = mainTitle + ' — ' + subTitle;

  showScreen('lesson');

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
  var initialTab = (resumeTab && tabs.some(function(t) { return t.k === resumeTab; }))
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

/* switchTab(tab) — Active l'onglet demandé et déclenche son rendu.
   Réinitialise les variables de quiz à chaque changement d'onglet. */
function switchTab(tab) {
  document.querySelectorAll('#lessonTabs .tab').forEach(function(b) {
    b.classList.toggle('active', b.dataset.tab === tab);
  });
  if      (tab === 'flash')  { renderFlash(); }
  else if (tab === 'quiz10') {
    q10Step = 0; q10Score = 0; q10Answered = false;
    _clearQuizSession();
    // Régénère les questions dynamiques à chaque ouverture de l'onglet Quiz
    if (CT && CT.level === 1 && CT.type !== 'alpha') {
      _currentDynQuiz = _generateLevel1Quiz(CT);
    }
    renderQuiz10();
  }
  else if (tab === 'dialog') { renderDialog(); }
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
var _micReco = null;

/* _normalizeSpeech(s) — Retire accents, ponctuation, casse et espaces
   superflus pour une comparaison souple entre ce que l'utilisateur a dit
   et le mot attendu. Ex : "Buenos días" → "buenos dias" */
function _normalizeSpeech(s) {
  return s.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // retire les accents
    .replace(/[^a-z0-9\s]/g, '')                      // retire ponctuation
    .replace(/\s+/g, ' ').trim();
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
    var ok         = (spoken === expected)
                  || spoken.indexOf(expected) !== -1
                  || expected.indexOf(spoken) !== -1;

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
  _rpWords = (CT.words || []).filter(function(w) { return w.fr && w.es; });

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
    var ok = (spoken === expected)
          || spoken.indexOf(expected) !== -1
          || expected.indexOf(spoken) !== -1;

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
  var words = (theme.words || []).filter(function(w) { return w.fr && w.es; });
  if (words.length < 2) return [];

  var total = getQuizTotal(theme);
  var pool  = _shuffle(words).slice(0, total);

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
    var distractors = _shuffle(words.filter(function(w) { return w !== card; }))
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
          ? '<button class="retry-btn" onclick="renderSections();showScreen(\'sections\')">'
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
  var sits    = CT.situations;
  var sit     = sits[sitIdx];

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
    document.querySelectorAll('[id^=bl]').forEach(function(b) { b.style.opacity = '1'; });
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
        var esParts = w.es.split('/').map(function(p) { return p.trim(); });
        return esParts.indexOf(es) !== -1;
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
          ? '<button class="retry-btn" onclick="renderSections();showScreen(\'sections\')">'
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
  var fbErr= L('❌ ¡Inténtalo de nuevo!', '❌ Essayer de nouveau !');
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
  var stars     = _calcStars(pct);
  var isSuccess = stars > 0;

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
  var activeRegion = regions.find(function(r) { return r.id === currentRegion; }) || regions[0];
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
        + 'Nota: El acento real depende de las voces instaladas en la configuration de síntesis de voz de tu dispositivo.'
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
  var flagEmojis = { ES:'🇪🇸', MX:'🇲🇽', CO:'🇨🇴', PE:'🇵🇪', VE:'🇻🇪', AR:'🇦🇷', EC:'🇪🇨' };
  if (launcherFlagRow && currentMode === 'learn_spain') {
    launcherFlagRow.textContent = flagEmojis[currentRegion] || '🇪🇸';
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

  // Rafraîchissement du guide utilisateur si la modale est actuellement ouverte
  // sur son bloc espagnol (cas : changement de variante depuis l'écran home
  // pendant que le guide reste accessible en arrière-plan via une autre action).
  var guideModal = document.getElementById('guide-modal');
  if (guideModal && guideModal.classList.contains('active')) {
    var guideES = document.getElementById('guideContentES');
    if (guideES && guideES.style.display !== 'none') _refreshGuideRegion();
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
    // Fermeture : on repart de la hauteur actuelle pour permettre la
    // transition CSS, puis on revient à 0 au prochain tick.
    body.style.maxHeight = body.scrollHeight + 'px';
    // Force le navigateur à prendre en compte la valeur ci-dessus avant
    // de la changer, sinon la transition ne se joue pas.
    body.offsetHeight; // eslint-disable-line no-unused-expressions
    requestAnimationFrame(function() {
      body.classList.remove('open');
      body.style.maxHeight = '0px';
    });
  } else {
    body.classList.add('open');
    // Mesure la hauteur réelle du contenu et l'applique explicitement,
    // pour garantir un dépliage complet même sur les sections très longues.
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
document.addEventListener('DOMContentLoaded', _resizeOpenAccordions);

/* ═══════════════════════════════════════════════════════════
   16. REMERCIEMENTS — Modale de crédits
   ─────────────────────────────────────────────────────────
   Affiche la modale de remerciements définie dans le HTML.
   Fermée par le bouton "Fermer" intégré dans la modale.
═══════════════════════════════════════════════════════════ */

function showCredits() {
  document.getElementById('credits-modal').style.display = 'flex';
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

// Clé localStorage du flag "guide déjà vu" — globale, indépendante du mode
var GUIDE_STORAGE_KEY = 'pe_guide_seen_v1';

/* showGuide() — Point d'entrée principal pour afficher le guide.
   Appelée automatiquement à la première visite (_maybeAutoShowGuide)
   ou manuellement via le lien "Guide / Guía" en pied de page. */
function showGuide() {
  var modal = document.getElementById('guide-modal');
  if (!modal) return;

  var blockFR = document.getElementById('guideContentFR');
  var blockES = document.getElementById('guideContentES');

  /* — Sélection du bloc de langue à afficher —
       Logique identique à celle de _setUI() dans initApp() :
       l'interface (ici, celle du guide) est toujours présentée
       dans la langue MATERNELLE supposée de l'apprenant, donc
       dans la langue OPPOSÉE à celle qu'il apprend.
       Si aucun mode n'est encore défini (accès direct improbable,
       sécurité), on retombe par défaut sur le français. */
  var showFrench = (currentMode === 'learn_spain') || !currentMode;

  if (blockFR) blockFR.style.display = showFrench ? 'block' : 'none';
  if (blockES) blockES.style.display = showFrench ? 'none'  : 'block';

  // ── Adaptation de la topbar selon le mode ──
  // En mode learn_spain (francophone apprenant l'espagnol) :
  //   - la checkbox "Ne plus afficher / No mostrar más" est masquée
  //   - le bouton fermer affiche uniquement "✕ Fermer"
  // En mode learn_french (hispanophone apprenant le français) :
  //   - la checkbox est masquée (déjà géré depuis la session précédente)
  //   - le bouton fermer affiche uniquement "✕ Cerrar"
  var noShowLabel = document.querySelector('.guide-topbar-noshow');
  var closeBtn    = document.getElementById('guideCloseBtn');
  if (showFrench) {
    // Mode learn_spain : guide en français, on masque la checkbox, bouton = Fermer
    if (noShowLabel) noShowLabel.style.display = 'none';
    if (closeBtn)    closeBtn.textContent = '✕ Fermer';
  } else {
    // Mode learn_french : guide en espagnol, checkbox masquée, bouton = Cerrar
    if (noShowLabel) noShowLabel.style.display = 'none';
    if (closeBtn)    closeBtn.textContent = '✕ Cerrar';
  }

  // Adapte le titre du bloc affiché à la langue réellement étudiée
  // (et, côté espagnol, à la variante régionale active)
  if (showFrench) _refreshGuideHeroFR();
  else            _refreshGuideRegion();

  // Affiche la modale et remonte en haut (au cas où elle a déjà été scrollée)
  modal.classList.add('active');
  modal.scrollTop = 0;

  // Synchronise toutes les checkboxes "ne plus afficher" avec l'état actuel du flag
  var flagValue = false;
  try { flagValue = localStorage.getItem(GUIDE_STORAGE_KEY) === '1'; } catch(e) {}
  var allChecks = document.querySelectorAll('.guide-no-show-check');
  allChecks.forEach(function(cb) { cb.checked = flagValue; });
}

/* closeGuide() — Referme la modale du guide.
   Le flag "ne plus afficher" n'est posé que par la checkbox,
   pas ici : fermer sans cocher = guide réaffiché à la prochaine visite. */
function closeGuide() {
  var modal = document.getElementById('guide-modal');
  if (modal) modal.classList.remove('active');
}

/* toggleGuideNoShow(cb) — Appelée au clic sur n'importe quelle checkbox
   "Ne plus afficher". Pose ou retire le flag localStorage et synchronise
   toutes les autres checkboxes (les 4 au total : haut+bas × FR+ES). */
function toggleGuideNoShow(cb) {
  var checked = cb.checked;
  // Synchronise toutes les checkboxes sœurs
  var allChecks = document.querySelectorAll('.guide-no-show-check');
  allChecks.forEach(function(c) { c.checked = checked; });
  // Pose ou retire le flag
  try {
    if (checked) {
      localStorage.setItem(GUIDE_STORAGE_KEY, '1');
    } else {
      localStorage.removeItem(GUIDE_STORAGE_KEY);
    }
  } catch(e) {}
}

/* _maybeAutoShowGuide() — Déclenche l'affichage automatique du guide
   uniquement lors de la toute première visite (flag absent).
   Appelée en fin d'initApp(), donc juste après le choix de langue. */
function _maybeAutoShowGuide() {
  var alreadySeen = false;
  try { alreadySeen = localStorage.getItem(GUIDE_STORAGE_KEY) === '1'; }
  catch (e) { alreadySeen = false; }

  if (!alreadySeen) showGuide();
}

/* _refreshGuideRegion() — Adapte le bloc espagnol du guide (#guideContentES)
   à la variante régionale active (currentRegion). Reprend la logique du
   <script> embarqué dans l'ancienne page language-app-user-guide-es.html :
   drapeau du héros, bandeau "Tu app está configurada en…", exemple de
   vocabulaire régional (t-shirt / bus), et surbrillance de la carte active
   dans la grille des variantes régionales. */
function _refreshGuideRegion() {
  // Table de correspondance région → infos d'affichage (drapeau, nom, exemples)
  var REGIONS = {
    ES: { flag:'🇪🇸', name:'España (Castellano)', shirt:'la camiseta', bus:'el autobús' },
    MX: { flag:'🇲🇽', name:'México',               shirt:'la playera',  bus:'el camión' },
    AR: { flag:'🇦🇷', name:'Argentina',            shirt:'la remera',   bus:'el colectivo' },
    CO: { flag:'🇨🇴', name:'Colombia',             shirt:'la camiseta', bus:'el bus / la buseta' },
    VE: { flag:'🇻🇪', name:'Venezuela',            shirt:'la franela',  bus:'la buseta' },
    PE: { flag:'🇵🇪', name:'Perú',                 shirt:'el polo',     bus:'la combi' },
    EC: { flag:'🇪🇨', name:'Ecuador',              shirt:'la camiseta', bus:'el autobús' }
  };

  var region = REGIONS[currentRegion] ? currentRegion : 'ES';
  var r = REGIONS[region];

  // Drapeaux du hero : 🇫🇷 (langue apprise dans ce bloc) 🌍 + drapeau régional
  // de la variante d'espagnol maternelle de l'apprenant (sert de repère, pas
  // la langue étudiée — celle-ci est toujours le français dans ce bloc).
  var heroFlags = document.getElementById('guideHeroFlagsES');
  if (heroFlags) heroFlags.textContent = '🇫🇷 🌍 ' + r.flag;

  // Titre du hero : toujours "Apprends le Français" dans ce bloc, avec le
  // drapeau français (langue réellement étudiée par l'utilisateur), et non
  // un libellé générique "Apprends une langue".
  var heroTitle = document.getElementById('guideHeroTitleES');
  if (heroTitle) heroTitle.innerHTML = 'Aprende Francés 🇫🇷';
 
  // Bandeau d'info sous le sous-titre du hero
  var badge = document.getElementById('guideRegionBadgeES');
  if (badge) badge.innerHTML = 'Tu app está configurada en <strong>' + r.flag + ' ' + r.name + '</strong>';

  // Exemple de vocabulaire régional dans la section "Variantes regionales"
  var example = document.getElementById('guideRegionExampleES');
  if (example) {
    example.innerHTML = '💡 Ejemplo con tu variante — así se dice en <strong>' + r.name + '</strong>: '
      + r.flag + ' <strong>' + r.shirt + '</strong> (camiseta) · <strong>' + r.bus + '</strong> (autobús)'
      + '<br><span style="font-size:.75rem;color:var(--g-muted);">Puedes cambiar tu variante en cualquier momento desde la pantalla de inicio de la app.</span>';
  }

  // Surbrillance de la carte de la région active dans la grille
  var grid = document.getElementById('guideRegionGridES');
  if (grid) {
    var cards = grid.querySelectorAll('.guide-region-card');
    cards.forEach(function(c) { c.classList.remove('active'); });
    var activeCard = grid.querySelector('.guide-region-card[data-region="' + region + '"]');
    if (activeCard) activeCard.classList.add('active');
  }

  // Le contenu injecté ci-dessus peut changer la hauteur d'un panneau
  // accordéon déjà ouvert (ex : section "Variantes régionales") : on
  // recalcule sa max-height pour éviter toute troncature visuelle.
  _resizeOpenAccordions();
}

/* _refreshGuideHeroFR() — Adapte le titre du hero du bloc français du guide
   (#guideContentFR), affiché quand currentMode === 'learn_spain' (l'utilisateur
   apprend l'espagnol). Remplace le libellé générique "Apprends une langue"
   par "Apprends l'Espagnol" + le drapeau de la variante régionale choisie
   (ex : 🇲🇽 si Mexique), au lieu du systématique 🇪🇸. */
function _refreshGuideHeroFR() {
  var flagEmojis = { ES:'🇪🇸', MX:'🇲🇽', CO:'🇨🇴', PE:'🇵🇪', VE:'🇻🇪', AR:'🇦🇷', EC:'🇪🇨' };
  var activeFlag  = flagEmojis[currentRegion] || '🇪🇸';

  var heroFlags = document.getElementById('guideHeroFlagsFR');
  if (heroFlags) heroFlags.textContent = '🇫🇷 🌍 ' + activeFlag;

  var heroTitle = document.getElementById('guideHeroTitleFR');
  if (heroTitle) heroTitle.innerHTML = 'Apprends l\'Espagnol ' + activeFlag;
}

/* ============================================================
   FONCTION MAISON - COPIE SÉCURISÉE DE L'E-MAIL
   ============================================================ */
function copierEmailSecurise(bouton) {
    // L'adresse est scindée en morceaux pour être invisible aux robots scanneurs
    const identifiant = "sebastien.godet16";
    const extension = "gmail.com";
    const adresseComplete = identifiant + "@" + extension;

    // Utilisation de l'API Presse-papiers du navigateur
    navigator.clipboard.writeText(adresseComplete).then(() => {
        // Sauvegarde du texte initial du bouton
        const texteInitial = bouton.innerHTML;
        
        // Changement visuel temporaire (Vert + Texte mis à jour)
        bouton.innerHTML = "✅ E-mail copié !";
        bouton.classList.add("copied");

        // Retour à l'état initial après 2,5 secondes
        setTimeout(() => {
            bouton.innerHTML = texteInitial;
            bouton.classList.remove("copied");
        }, 2500);
    }).catch(err => {
        // Cas de secours si le navigateur bloque l'accès automatique au presse-papiers
        _showToast("📋 Copiez manuellement : " + adresseComplete, 5000);
    });
}

/* ════════════════════════════════════════
   TOAST — NOTIFICATION NON BLOQUANTE
   Remplace alert() pour les messages
   d'information (voix, copie e-mail…).
   duration : durée d'affichage en ms (défaut 3000)
════════════════════════════════════════ */
function _showToast(msg, duration) {
  duration = duration || 3000;
  var toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'app-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('visible');
  setTimeout(function() {
    toast.classList.remove('visible');
  }, duration);
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
  var target = e.target.closest('[role="button"]');
  if (!target) return;
  e.preventDefault();
  target.click();
});

/* ════════════════════════════════════════
   INITIALISATION DU LAUNCHER
   Branche les clics des cartes de langue
   sur showLauncherVariant() pour afficher
   le sélecteur de variante (Vue B).
════════════════════════════════════════ */
document.getElementById('card-learn-french') && document.getElementById('card-learn-french').addEventListener('click', function() {
  showLauncherVariant('learn_french');
});
document.getElementById('card-learn-spain') && document.getElementById('card-learn-spain').addEventListener('click', function() {
  showLauncherVariant('learn_spain');
});