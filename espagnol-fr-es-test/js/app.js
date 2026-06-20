/* ============================================================
   Language App 🇫🇷🇪🇸 — Moteur applicatif unifié
   Mode : Français ↔ Espagnol (bidirectionnel)
   © Juin 2026 – Sébastien Godet · IA Claude Sonnet 4.6

   STRUCTURE DU FICHIER
   ─────────────────────────────────────────────────────────────
   1.  VARIABLES D'ÉTAT GLOBALES
   2.  POINT D'ENTRÉE : initApp(mode)
   3.  SYNTHÈSE VOCALE — Voix espagnole (cascade locale)
   4.  PERSISTANCE — Système de progression & étoiles
   5.  NAVIGATION — Changement d'écran
   6.  ÉCRAN HOME — Barre de progression et étoiles
   7.  ÉCRAN SECTIONS — Grille des thèmes (niveaux 1 & 2)
   8.  OUVERTURE D'UN THÈME — Écran leçon + onglets
   9.  CARTES FLASH — Flashcards (vocabulaire & alphabet)
   10. QUIZ 10 QUESTIONS — QCM dynamique avec étoiles
   11. DIALOGUE — Bulles de conversation situationnelles
   12. VOCABULAIRE — Lexique cliquable (chips)
   13. QUIZ DIALOGUE — Mini-quiz de fin de dialogue
   14. UTILITAIRES — Résultats, échappement, helpers
   15. VARIANTES RÉGIONALES — Sélecteur de pays hispanophone
   16. REMERCIEMENTS — Modale de crédits
   ─────────────────────────────────────────────────────────────
*/


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

// Code BCP-47 utilisé par la Web Speech API pour la synthèse vocale
var voiceLang = 'fr-FR';

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

// Progression persistante : tableau d'objets { id: string, stars: 1|2|3 }
var done = [];


/* ═══════════════════════════════════════════════════════════
   2. POINT D'ENTRÉE : initApp(mode)
   ─────────────────────────────────────────────────────────
   Appelée par les boutons du launcher HTML.
   Paramètre :
     mode — 'learn_french'  : apprendre le Français (interface en ES)
             'learn_spain'   : apprendre l'Espagnol  (interface en FR)

   Séquence d'actions :
     1. Réinitialise l'état global (données, voix, grilles)
     2. Charge la région sauvegardée ou applique ES par défaut
     3. Configure thème couleur CSS, voix TTS et données
     4. Injecte les textes bilingues de l'interface (_setUI)
     5. Charge la progression (loadDone)
     6. Affiche l'écran Home
     7. Construit le sélecteur de régions hispaniques
═══════════════════════════════════════════════════════════ */

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

  /* — Restauration de la région préférée depuis localStorage (ou Espagne par défaut) — */
  var savedRegion = localStorage.getItem('user_preferred_region');
  currentRegion   = savedRegion || 'ES';

  // Dictionnaire emoji drapeaux, utilisé pour l'affichage dynamique
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
      homeTitle      : 'Apprendre le Français<br><span class="translation-sub">Aprender Francés</span>',
      homeSubtitle   : '',
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
      homeTitle      : 'Aprender Español<br><span class="translation-sub">Apprendre l\'Espagnol</span>',
      homeSubtitle   : '',
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

  /* — Masquer le launcher et naviguer vers l'accueil — */
  document.getElementById('app-launcher').classList.remove('active');
  showScreen('home');

  /* — Affichage et construction du sélecteur de variante hispanique — */
  var selectorWrap = document.getElementById('region-selector-wrap');
  if (selectorWrap) {
    selectorWrap.style.display = 'block';
    selectorWrap.innerHTML = '<div id="region-select-container"></div>'
                           + '<div id="region-message-box"></div>';
  }
  renderRegionOptions();

  // Application immédiate de la variante régionale (couleurs CSS + drapeau + voix)
  pickRegion(currentRegion);
}


/* ─────────────────────────────────────────────────────────
   _setUI(t) — Injecte les textes de l'interface dans le DOM
   Paramètre : objet t contenant les clés = IDs des éléments HTML
   Utilise innerHTML pour interpréter les balises HTML bilingues.
───────────────────────────────────────────────────────── */
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

  // Branchement du bouton "Démarrer" vers l'écran sections
  var btn = document.getElementById('homeStartBtn');
  if (btn) btn.onclick = function() { showScreen('sections'); };
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

    // Alerte unique informant l'utilisateur de la voix configurée
    if (!_hasNotifiedVoice) {
      _hasNotifiedVoice = true;
      var msg = currentMode === 'learn_french'
        ? '🎙️ Audio Español configurado con la voz de tu dispositivo: ' + foundLabel
        : '🎙️ Audio Espagnol configuré avec la voix de votre appareil : ' + foundLabel;
      alert(msg);
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
     - Le mode 'learn_french'  → voix française (voiceLang = 'fr-FR') */
function speak(txt) {
  if (!txt) return;

  if (currentMode !== 'learn_french') {
    // ─── Mode Espagnol : résolution asynchrone de la meilleure voix disponible ───
    if (!window.speechSynthesis) return;
    _resolveSpanishVoice(function(voice) {
      speechSynthesis.cancel();
      var parts = (txt || '').split('/').map(function(p) { return p.trim(); }).filter(Boolean);
      function speakPart(i) {
        if (i >= parts.length) return;
        var u = new SpeechSynthesisUtterance(parts[i]);
        if (voice) { u.voice = voice; u.lang = voice.lang; }
        u.rate  = 0.85;
        u.onend = function() {
          if (i + 1 < parts.length) setTimeout(function() { speakPart(i + 1); }, 2000);
        };
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
   Gère la découpe sur '/' et la pause de 2s entre les parties. */
function _doSpeak(txt, voiceObj, rate) {
  speechSynthesis.cancel();
  var parts = (txt || '').split('/').map(function(p) { return p.trim(); }).filter(Boolean);
  function speakPart(i) {
    if (i >= parts.length) return;
    var u = new SpeechSynthesisUtterance(parts[i]);
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
  renderHome();
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

  // Cas particulier : bouton "Retour" de l'accueil → relance le launcher
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
  var label = (currentMode === 'learn_french')
    ? (n + ' / ' + total + ' modules validés — ' + pct + '%'
       + '<br><span class="translation-sub">' + n + ' / ' + total
       + ' módulos completados — ' + pct + '%</span>')
    : (n + ' / ' + total + ' módulos aprobados — ' + pct + '%'
       + '<br><span class="translation-sub">' + n + ' / ' + total
       + ' modules validés — ' + pct + '%</span>');
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
  var progressLabel = (currentMode === 'learn_french')
    ? (n + ' / ' + total + ' modules — ' + pct + '%')
    : (n + ' / ' + total + ' módulos — ' + pct + '%');
  document.getElementById('progressLabel').innerHTML = progressLabel;

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
    // En mode Français : le titre principal est le nom français (extrait de t.sub)
    var subText = t.sub || '';
    if (t.id === 'alpha' || t.type === 'alpha') {
      mainTitle = "L'Alphabet"; subLine = 'El Alfabeto';
    } else if (subText.includes('/')) {
      var parts = subText.split('/');
      mainTitle = parts[1].trim(); subLine = parts[0].trim() + ' / ' + t.name;
    } else {
      mainTitle = t.sub; subLine = t.name;
    }
    if (mainTitle) mainTitle = mainTitle.charAt(0).toUpperCase() + mainTitle.slice(1);
  } else {
    // En mode Espagnol : titre principal = t.name (espagnol)
    // sous-titre = partie française extraite de t.sub (avant le '/')
    mainTitle = t.name;
    var subES = t.sub || '';
    if (subES.includes('/')) {
      subLine = subES.split('/')[0].trim();
    } else {
      subLine = subES;
    }
  }

  // Bouton "Recommencer" visible uniquement sur les modules validés
  var resetBtn = isDone(t.id)
    ? '<button onclick="event.stopPropagation();resetTheme(\'' + t.id + '\')" '
      + 'style="margin-top:6px;font-size:.65rem;background:#fff;border:1.5px solid #009A44;'
      + 'color:#009A44;border-radius:50px;padding:4px 10px;cursor:pointer;font-weight:700">'
      + (currentMode === 'learn_french' ? '🔄 Volver a empezar' : '🔄 Recommencer')
      + '</button>'
    : '';

  // Génération de l'affichage des étoiles (⭐ remplies, ☆ vides)
  var currentStars = getThemeStars(t.id);
  var starsStr = Array.from({ length: 3 }, function(_, i) {
    return i < currentStars ? '⭐' : '☆';
  }).join('');

  return '<div class="theme-card' + (isDone(t.id) ? ' done' : '')
    + '" onclick="openTheme(\'' + t.id + '\')">'
    + '<div class="t-emoji">'  + t.emoji   + '</div>'
    + '<div class="t-name">'   + mainTitle + '</div>'
    + '<div class="t-sub">'    + subLine   + '</div>'
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

  // Injection de l'emoji et du titre dans l'en-tête de leçon
  document.getElementById('lessonEmoji').textContent = CT.emoji;

  // Construction du titre bilingue (titre dans la langue cible — langue source)
  var lessonTitle = '';
  if (currentMode === 'learn_french') {
    var subText = CT.sub || '';
    var titreFr = '';
    if (CT.id === 'alpha' || CT.type === 'alpha') { titreFr = "L'Alphabet"; }
    else if (subText.includes('/')) { titreFr = subText.split('/')[1].trim(); }
    else { titreFr = CT.sub; }
    if (titreFr) titreFr = titreFr.charAt(0).toUpperCase() + titreFr.slice(1);
    lessonTitle = titreFr + ' — ' + CT.name;
  } else {
    lessonTitle = CT.name + ' — ' + CT.sub;
  }
  document.getElementById('lessonTitle').textContent = lessonTitle;

  showScreen('lesson');

  // Définition des onglets selon le type de thème et le mode courant
  var tabs;
  if (CT.type === 'dialog') {
    tabs = (currentMode === 'learn_french')
      ? [{k:'dialog',lbl:'💬 Diálogo'}, {k:'vocab',lbl:'📚 Vocabulario'}, {k:'dquiz',lbl:'❓ Prueba'}]
      : [{k:'dialog',lbl:'💬 Dialogue'}, {k:'vocab',lbl:'📚 Vocabulaire'}, {k:'dquiz',lbl:'❓ Quiz'}];
  } else if (CT.type === 'alpha') {
    tabs = (currentMode === 'learn_french')
      ? [{k:'flash',lbl:'🔤 Alfabeto'}, {k:'quiz10',lbl:'🔊 Prueba Audio'}]
      : [{k:'flash',lbl:'🔤 Alphabet'}, {k:'quiz10',lbl:'🔊 Quiz Audio'}];
  } else {
    tabs = (currentMode === 'learn_french')
      ? [{k:'flash',lbl:'🃏 Cartas'}, {k:'quiz10',lbl:'❓ Prueba'}]
      : [{k:'flash',lbl:'🃏 Cartes'}, {k:'quiz10',lbl:'❓ Quiz'}];
  }

  // Rendu des boutons d'onglets (le premier est actif par défaut)
  document.getElementById('lessonTabs').innerHTML = tabs.map(function(t, i) {
    return '<button class="tab' + (i === 0 ? ' active' : '')
      + '" data-tab="' + t.k + '" onclick="switchTab(\'' + t.k + '\')">' + t.lbl + '</button>';
  }).join('');

  // Affiche le premier onglet immédiatement
  switchTab(tabs[0].k);
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
    renderDialogQuiz();
  }
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
    var alphaLabel = (currentMode === 'learn_french')
      ? '¡Haz clic en una letra para escucharla!'
      : 'Cliquez sur une lettre pour l\'écouter !';

    document.getElementById('tabContent').innerHTML =
      '<div class="section-label">' + alphaLabel + '</div>'
      + '<div class="alpha-grid">' + w.map(function(c, i) {
          var bigLetter = (currentMode === 'learn_french') ? c.fr : c.es;
          var smallName = (currentMode === 'learn_french') ? c.es : c.fr;
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
  if (currentMode === 'learn_french') {
    var hintFr = 'Haz clic para ver su significado en español';
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
      + '<button class="audio-btn-big" onclick="speak(\'' + esc(card.fr) + '\')">🔊 Escuchar audio</button>'
      + '</div>';

  /* — MODE Espagnol : Recto = ES (variante), Verso = FR — */
  } else {
    var hintEs = 'Cliquez pour voir la traduction en français';
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
      + '<button class="audio-btn-big" onclick="speak(\'' + esc(finalEsWord) + '\')">🔊 Écouter la prononciation</button>';
  }
}

/* buildAlphaDetail(c) — Construit le panneau de détail d'une lettre de l'alphabet.
   Affiche la lettre en grand, son nom dans l'autre langue, et un bouton audio. */
function buildAlphaDetail(c) {
  var bigLetter = (currentMode === 'learn_french') ? c.fr : c.es;
  var smallName = (currentMode === 'learn_french') ? c.es : c.fr;
  var btnLabel  = (currentMode === 'learn_french') ? '🔊 Escuchar' : '🔊 Écouter';
  var spokenKey = (currentMode === 'learn_french') ? c.fr : c.es;
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
  var spokenKey = (currentMode === 'learn_french') ? card.fr : card.es;
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

/* nextCard() — Passe à la carte suivante et prononce automatiquement le mot. */
function nextCard() {
  fcIdx = (fcIdx + 1) % CT.words.length;
  renderFlash();
  // Prononce le mot dans la langue cible (avec variante régionale si espagnol)
  var spokenKey;
  if (currentMode === 'learn_french') {
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
    var noQLabel = (currentMode === 'learn_french')
      ? 'No hay ningún cuestionario disponible.'
      : 'Aucun quiz disponible.';
    document.getElementById('tabContent').innerHTML =
      '<div class="result-box"><p>' + noQLabel + '</p></div>';
    return;
  }

  /* ─── Écran de résultats (toutes les questions répondues) ─── */
  if (q10Step >= total) {
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
    var audioLabel = (currentMode === 'learn_french')
      ? 'Escucha el sonido y elige la letra correcta'
      : 'Écoutez le son et choisissez la bonne lettre';
    var listenHint = (currentMode === 'learn_french') ? 'Haz clic para escuchar' : 'Cliquez pour écouter';
    var qLabel     = (currentMode === 'learn_french')
      ? 'Pregunta ' + (q10Step + 1) + '/' + total
      : 'Question ' + (q10Step + 1) + '/' + total;

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
  var qStdLabel = (currentMode === 'learn_french')
    ? 'Pregunta ' + (q10Step + 1) + '/' + total
    : 'Question ' + (q10Step + 1) + '/' + total;

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

  var correctWord = qs[q10Step].opts[correct];
  var fb = document.getElementById('q10fb');
  var fbOk  = (currentMode === 'learn_french') ? '✅ ¡Correcto! ¡Enhorabuena!'           : '✅ Correct ! Félicitations !';
  var fbErr = (currentMode === 'learn_french') ? '❌ Respuesta incorrecta. La solución era: ' : '❌ Mauvaise réponse. La solution était : ';
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
      speak(currentMode === 'learn_french' ? match.fr : finalEsMatch);
    }
  }

  // Passage automatique à la question suivante après 1,6s
  setTimeout(function() { q10Step++; renderQuiz10(); }, 1600);
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

    var mainMsg   = (currentMode === 'learn_french') ? ln.fr        : finalEsLine;
    var transMsg  = (currentMode === 'learn_french') ? finalEsLine  : ln.fr;
    var spokenKey = (currentMode === 'learn_french') ? ln.fr        : finalEsLine;
    var listenTip = (currentMode === 'learn_french') ? 'Escuchar'   : 'Écouter';

    // Les bulles commencent invisibles et s'affichent via un délai croissant (effet cascade)
    return '<div class="bubble ' + ln.side + '" style="opacity:0;transition:opacity .3s '
      + (i * 0.08) + 's" id="bl' + i + '">'
      + '<div class="speaker-name">' + ln.s + '</div>'
      + '<div class="msg-row">'
      + '<div class="msg">' + mainMsg + '</div>'
      + '<button class="speak-bubble-btn" onclick="speak(\'' + esc(spokenKey) + '\')" title="' + listenTip + '">🔊</button>'
      + '</div>'
      + '<div class="bubble-translation">' + transMsg + '</div>'
      + '</div>';
  }).join('');

  var quizBtnLabel = (currentMode === 'learn_french')
    ? 'Iniciar el minicuestionario ➜'
    : 'Lancer le mini quiz ➜';

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

    var mainWord  = (currentMode === 'learn_french') ? fr      : finalEs;
    var subWord   = (currentMode === 'learn_french') ? finalEs : fr;
    var spokenKey = (currentMode === 'learn_french') ? fr      : finalEs;

    return '<span class="vocab-chip" style="display:inline-flex;flex-direction:column;align-items:center;text-align:center;" onclick="speak(\'' + esc(spokenKey) + '\')">'
      + '<span class="vocab-item-et" style="font-weight:bold;">' + mainWord + '</span>'
      + (subWord ? '<span class="vocab-translation-sub">' + subWord + '</span>' : '')
      + '</span>';
  }).join('');

  var vocabTitle   = (currentMode === 'learn_french')
    ? '📚 Vocabulario básico — ¡Haz clic para escuchar el español!'
    : '📚 Lexique essentiel — Cliquez pour écouter l\'Espagnol !';
  var quizBtnLabel = (currentMode === 'learn_french')
    ? 'Iniciar el minicuestionario ➜'
    : 'Lancer le mini quiz ➜';

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
      + '<button class="retry-btn" style="background:#888" onclick="dqStep=0;dqScore=0;dqAnswered=false;renderDialogQuiz()">'
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
  var qLabel = (currentMode === 'learn_french')
    ? 'Pregunta ' + (dqStep + 1) + '/' + total
    : 'Question ' + (dqStep + 1) + '/' + total;

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

  var fb   = document.getElementById('dqfb');
  var fbOk = (currentMode === 'learn_french') ? '✅ ¡Buena respuesta!'    : '✅ Bonne réponse !';
  var fbErr= (currentMode === 'learn_french') ? '❌ ¡Inténtalo de nuevo!' : '❌ Essayer de nouveau !';
  fb.textContent = (chosen === correct) ? fbOk : fbErr;
  fb.style.color = (chosen === correct) ? '#009A44' : '#c0392b';

  setTimeout(function() { dqStep++; renderDialogQuiz(); }, 1500);
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

  if (currentMode === 'learn_french') {
    var titleFr = '¡Prueba terminada!';
    if      (stars === 3) titleFr = '¡Perfecto! ⭐⭐⭐';
    else if (stars === 2) titleFr = '¡Muy bien! ⭐⭐';
    else if (stars === 1) titleFr = '¡Bien! ⭐';
    return {
      title : titleFr,
      sub   : isSuccess
              ? '¡Módulo superado! Puedes pasar al siguiente o volver a intentarlo para conseguir más estrellas.'
              : 'Necesitas al menos un 50 % de respuestas correctas (1⭐) para que cuente. ¡Inténtalo de nuevo!',
      retry : '🔄 Inténtalo de nuevo',
      finish: '✓ Finalizar'
    };
  } else {
    var titleEs = 'Quiz terminé !';
    if      (stars === 3) titleEs = 'Parfait ! ⭐⭐⭐';
    else if (stars === 2) titleEs = 'Très bien ! ⭐⭐';
    else if (stars === 1) titleEs = 'Bien ! ⭐';
    return {
      title : titleEs,
      sub   : isSuccess
              ? 'Module validé ! Vous pouvez passer au suivant ou réessayer pour plus d\'étoiles.'
              : 'Il vous faut au moins 50% de bonnes réponses (1⭐) pour valider. Réessayez !',
      retry : '🔄 Réessayer',
      finish: '✓ Terminer'
    };
  }
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

/* changeRegion(region) — Applique une nouvelle variante régionale.
   Met à jour la voix TTS (mode Espagnol uniquement) et rafraîchit la flashcard active. */
function changeRegion(region) {
  currentRegion = region;

  // Mise à jour du code BCP-47 pour la synthèse vocale espagnole
  if (currentMode === 'learn_spain') {
    var voiceMap = {
      ES:'es-ES', MX:'es-MX', CO:'es-CO', PE:'es-PE', VE:'es-VE', AR:'es-AR', EC:'es-EC'
    };
    voiceLang = voiceMap[region] || 'es-ES';
  }

  // Si une leçon est ouverte, rafraîchit immédiatement la carte flash
  if (document.getElementById('lesson').classList.contains('active')) {
    renderFlash();
  }
}

/* renderRegionOptions() — Génère le sélecteur déroulant de variante hispanique.
   Affiche également un bandeau d'information sur la variante active. */
function renderRegionOptions() {
  var selectContainer = document.getElementById('region-select-container');
  var msgBox          = document.getElementById('region-message-box');
  if (!selectContainer) return;

  // Liste des régions disponibles avec labels localisés selon le mode
  var regions = [
    { id:'ES', name:(currentMode === 'learn_french') ? 'España (Castellano)'   : 'Espagne (Castillan)', flag:'🇪🇸' },
    { id:'AR', name:(currentMode === 'learn_french') ? 'Argentina'              : 'Argentine',           flag:'🇦🇷' },
    { id:'CO', name:(currentMode === 'learn_french') ? 'Colombia'               : 'Colombie',            flag:'🇨🇴' },
    { id:'EC', name:(currentMode === 'learn_french') ? 'Ecuador'                : 'Équateur',            flag:'🇪🇨' },
    { id:'MX', name:(currentMode === 'learn_french') ? 'México'                 : 'Mexique',             flag:'🇲🇽' },
    { id:'PE', name:(currentMode === 'learn_french') ? 'Perú'                   : 'Pérou',               flag:'🇵🇪' },
    { id:'VE', name:(currentMode === 'learn_french') ? 'Venezuela'              : 'Venezuela',           flag:'🇻🇪' }
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
    var bannerMsg = (currentMode === 'learn_french')
      ? 'ℹ️ Tu aplicación está configurada actualmente con la variante de <strong>' + activeRegion.name + '</strong>.'
      : 'ℹ️ Votre application est actuellement configurée sur la variante <strong>' + activeRegion.name + '</strong>.';
    msgBox.innerHTML = '<div style="margin:5px 10px 15px 10px;padding:12px;background-color:#eef9ff;'
      + 'border-left:4px solid #007bff;border-radius:8px;font-size:0.9rem;color:#333;text-align:left;">'
      + bannerMsg + '</div>';
  }
}

/* pickRegion(regionId) — Applique complètement une nouvelle variante régionale.
   Persiste le choix, met à jour les couleurs, la voix, les drapeaux et le contenu. */
function pickRegion(regionId) {
  // Mémorisation du choix dans localStorage (persiste entre les sessions)
  localStorage.setItem('user_preferred_region', regionId);

  // Application de la classe CSS de région sur <html> (mode Espagnol uniquement)
  if (currentMode === 'learn_spain') {
    document.documentElement.classList.remove(
      'region-ES','region-MX','region-CO','region-PE','region-VE','region-AR','region-EC'
    );
    document.documentElement.classList.add('region-' + regionId);
  }

  currentRegion = regionId;

  // Force la résolution d'une nouvelle voix espagnole adaptée à la région
  _spanishVoice     = undefined;
  _hasNotifiedVoice = false;

  // Mise à jour du bandeau d'information avec la note audio
  var msgBox = document.getElementById('region-message-box');
  if (msgBox) {
    var regionsNames = {
      ES:(currentMode === 'learn_french') ? 'España (Castellano)' : 'Espagne (Castillan)',
      MX:(currentMode === 'learn_french') ? 'México'              : 'Mexique',
      CO:(currentMode === 'learn_french') ? 'Colombia'            : 'Colombie',
      PE:(currentMode === 'learn_french') ? 'Perú'                : 'Pérou',
      VE:(currentMode === 'learn_french') ? 'Venezuela'           : 'Venezuela',
      AR:(currentMode === 'learn_french') ? 'Argentina'           : 'Argentine',
      EC:(currentMode === 'learn_french') ? 'Ecuador'             : 'Équateur'
    };
    var activeName = regionsNames[currentRegion] || currentRegion;
    var noteAudio  = (currentMode === 'learn_french')
      ? '<div style="margin-top:5px;font-size:0.75rem;color:#666;font-style:italic;">'
        + 'Nota: El acento real depende de las voces instaladas en la configuration de síntesis de voz de tu dispositivo.'
        + '</div>'
      : '<div style="margin-top:5px;font-size:0.75rem;color:#666;font-style:italic;">'
        + 'Note : L\'accent audio dépend des voix espagnoles installées dans les paramètres de synthèse vocale de votre smartphone.'
        + '</div>';
    var mainMsg = (currentMode === 'learn_french')
      ? 'ℹ️ Tu aplicación está configurada actualmente con la variante de <strong>' + activeName + '</strong>.'
      : 'ℹ️ Votre application est actuellement configurée sur la variante <strong>' + activeName + '</strong>.';

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

  // Mise à jour du grand drapeau sur l'écran d'accueil
  var homeFlagRow = document.getElementById('homeFlagRow');
  if (homeFlagRow) {
    if (currentMode === 'learn_spain') {
      homeFlagRow.innerHTML = flagHtml;
    } else {
      // Mode Français : drapeau FR toujours fixe
      homeFlagRow.innerHTML = '<img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1eb-1f1f7.svg" style="width:1.5em;vertical-align:middle;" alt="fr">';
    }
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
}


/* ═══════════════════════════════════════════════════════════
   16. REMERCIEMENTS — Modale de crédits
   ─────────────────────────────────────────────────────────
   Affiche la modale de remerciements définie dans le HTML.
   Fermée par le bouton "Fermer" intégré dans la modale.
═══════════════════════════════════════════════════════════ */

function showCredits() {
  document.getElementById('credits-modal').style.display = 'flex';
}