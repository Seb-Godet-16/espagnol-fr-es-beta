/* ========================================================
   Language App 🇫🇷🇪🇸 — Moteur applicatif unifié
   Fusion : Français ↔ Espagnol
   © Juin 2026 – Sébastien Godet · IA Gemini
======================================================== */

/* ═══════════════════════════════════════════
   1. VARIABLES D'ÉTAT GLOBALES
═══════════════════════════════════════════ */

var currentMode = '';       // 'learn_french' ou 'learn_spain'
var voiceLang   = 'fr-FR';  // Langue de la synthèse vocale (mise à jour par initApp)
var ALL_THEMES  = [];       // Rempli par initApp() depuis data.js

/* Clé localStorage : séparée par mode pour conserver les deux progressions */
var STORAGE_KEY = '';

/* Variables de session (réinitialisées à chaque ouverture de thème) */
var CT          = null;     // Thème courant
var fcIdx       = 0;
var dqStep      = 0, dqScore    = 0, dqAnswered   = false;
var sitIdx      = 0;
var q10Step     = 0, q10Score   = 0, q10Answered  = false;

/* Progression persistante (contient désormais des objets {id, stars}) */
var done = [];


/* ═══════════════════════════════════════════
   2. POINT D'ENTRÉE : initApp(mode)
   Appelée par les boutons du launcher HTML
═══════════════════════════════════════════ */

function initApp(mode) {
  currentMode = mode;

  /* ── Bug 2 : vider ALL_THEMES et les grilles HTML avant rechargement ── */
  ALL_THEMES = [];
  var g1 = document.getElementById('grid1');
  var g2 = document.getElementById('grid2');
  if (g1) g1.innerHTML = '';
  if (g2) g2.innerHTML = '';

  /* ── Bug 3 : réinitialiser les variables de synthèse vocale ── */
  _spanishVoice     = undefined;
  _hasNotifiedVoice = false;

  if (mode === 'learn_french') {
    /* ── Thème couleur ── */
    document.documentElement.className = 'theme-french';

    /* ── Voix ── */
    voiceLang = 'fr-FR';

    /* ── Données ── */
    ALL_THEMES = ALL_THEMES_FR;           // défini dans data.js
    STORAGE_KEY = 'pe_es_fr_done_v1';    // clé originale app_francais

    /* ── Textes de l'interface en ESPAGNOL
         (l'apprenant Espagnol doit comprendre les menus) ── */
    _setUI({
      homeFlagRow    : '🇫🇷',
      homeTitle      : 'Apprendre le Français<br><span class="translation-sub">Aprender Francés</span>',
      homeSubtitle   : 'Recto Français · Verso Espagnol<br><span class="translation-sub">Anverso Francés · Reverso Español</span>',
      homeStartBtn   : '▶ Commencer<br><span class="translation-sub">Empezar</span>',
      sectionsBackBtn: '← Retour<br><span class="translation-sub">Volver</span>',
      sectionsTitle  : '📚 Modules<br><span class="translation-sub">Módulos</span>',
      lessonBackBtn  : '← Modules<br><span class="translation-sub">Módulos</span>',
      level1Badge    : '1',
      level1Label    : '<span>Niveau 1 — Vocabulaire<br><span class="translation-sub">Nivel 1 — Vocabulario</span></span>',
      level2Badge    : '2',
      level2Label    : '<span>Niveau 2 — Phrases simples<br><span class="translation-sub">Nivel 2 — Frases sencillas</span></span>'
    });

  } else if (mode === 'learn_spain') {
    /* ── Thème couleur ── */
    document.documentElement.className = 'theme-spain';

    /* ── Voix ── */
    voiceLang = 'es-ES';

    /* ── Données ── */
    ALL_THEMES = ALL_THEMES_ES;            // défini dans data.js
    STORAGE_KEY = 'pe_fr_es_done_v1';    // clé originale app_espagnol

    /* ── Textes de l'interface en FRANÇAIS
         (l'apprenant francophone doit comprendre les menus) ── */
    _setUI({
      homeFlagRow    : '🇪🇸',
      homeTitle      : 'Aprender Español',
      homeSubtitle   : 'Anverso Español · Reverso Francés ',
      homeStartBtn   : '▶ Empezar',
      sectionsBackBtn: '← Volver',
      sectionsTitle  : '📚 Módulos',
      lessonBackBtn  : '← Módulos',
      level1Badge    : '1',
      level1Label    : 'Nivel 1 — Vocabulario',
      level2Badge    : '2',
      level2Label    : 'Nivel 2 — Frases sencillas'
    });
  }

  /* ── Charger la progression sauvegardée pour ce mode ── */
  loadDone();

  /* ── Masquer le launcher et afficher l'accueil ── */
  document.getElementById('app-launcher').classList.remove('active');
  showScreen('home');
}

/* Utilitaire interne : injecte les textes dans les IDs du HTML */
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

  /* Bouton "Démarrer" sur l'écran home → ouvre l'écran sections */
  var btn = document.getElementById('homeStartBtn');
  if (btn) btn.onclick = function() { showScreen('sections'); };
}

function _setText(id, val) {
  var el = document.getElementById(id);
  if (el) el.textContent = val;
}


/* ═══════════════════════════════════════════
   3. SYNTHÈSE VOCALE + PRONONCIATION ESPAGNOL CASTILLAN
═══════════════════════════════════════════ */

var _spanishVoice = undefined;
var _hasNotifiedVoice = false;

function _resolveSpanishVoice(callback) {
  if (_spanishVoice !== undefined) {
    callback(_spanishVoice);
    return;
  }

  function search() {
    var voices = speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return false;

    // Priorités axées sur l'espagnol castillan (Espagne)
    var priorities = [
      { lang: 'es-ES', name: 'Espagnol (Castillan)' },
      { lang: 'es', name: 'Espagnol (Standard)' }
    ];

    var foundVoice = null;
    var foundLabel = "Voix par défaut";

    for (var i = 0; i < priorities.length; i++) {
      var target = priorities[i];
      var match = voices.find(function(v) {
        return v.lang.toLowerCase().indexOf(target.lang.toLowerCase()) !== -1;
      });
      if (match) {
        foundVoice = match;
        foundLabel = target.name;
        break;
      }
    }

    if (!foundVoice) {
      foundVoice = voices[0];
    }

    _spanishVoice = foundVoice;

    if (!_hasNotifiedVoice) {
      _hasNotifiedVoice = true;
      alert("🎙️ Audio Espagnol configuré avec la voix : " + foundLabel);
    }

    callback(_spanishVoice);
    return true;
  }

  if (!search()) {
    speechSynthesis.addEventListener('voiceschanged', function h() {
      speechSynthesis.removeEventListener('voiceschanged', h);
      search();
      callback(_spanishVoice);
    });
  }
}

function speak(txt) {
  if (!txt) return;

  if (currentMode === 'learn_spain') {
    if (!window.speechSynthesis) return;
    
    _resolveSpanishVoice(function(voice) {
      speechSynthesis.cancel();
      var parts = (txt || '').split('/').map(function(p) { return p.trim(); }).filter(Boolean);
      
      function speakPart(i) {
        if (i >= parts.length) return;
        var u = new SpeechSynthesisUtterance(parts[i]);
        if (voice) {
          u.voice = voice;
          u.lang = voice.lang;
        }
        u.rate = 0.85; // Vitesse légèrement réduite pour une écoute claire
        u.onend = function() { 
          if (i + 1 < parts.length) setTimeout(function() { speakPart(i + 1); }, 2000); 
        };
        speechSynthesis.speak(u);
      }
      speakPart(0);
    });

  } else {
    _doSpeak(txt, null, 0.80);
  }
}

function _doSpeak(txt, voiceObj, rate) {
  speechSynthesis.cancel();
  var parts = (txt || '').split('/').map(function(p) { return p.trim(); }).filter(Boolean);
  function speakPart(i) {
    if (i >= parts.length) return;
    var u = new SpeechSynthesisUtterance(parts[i]);
    u.lang = voiceLang;
    u.rate = rate;
    if (voiceObj) u.voice = voiceObj;
    u.onend = function() { if (i + 1 < parts.length) setTimeout(function() { speakPart(i + 1); }, 2000); };
    speechSynthesis.speak(u);
  }
  speakPart(0);
}


/* ═══════════════════════════════════════════
   4. PERSISTANCE DE LA PROGRESSION (SYSTÈME D'ÉTOILES)
═══════════════════════════════════════════ */

function loadDone() {
  try { done = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch(e) { done = []; }
}

function saveDone() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(done)); }
  catch(e) {}
}

function _calcStars(pct) {
  if (pct === 100) return 3;
  if (pct >= 75) return 2;
  if (pct >= 50) return 1;
  return 0;
}

function markDone(id, pct) {
  var newStars = _calcStars(pct);
  if (newStars === 0) return; 

  var existing = done.find(function(d) { return d.id === id; });
  if (existing) {
    if (newStars > existing.stars) {
      existing.stars = newStars;
    }
  } else {
    done.push({ id: id, stars: newStars });
  }
  saveDone();
}

function resetTheme(id) {
  done = done.filter(function(d) { return d.id !== id; });
  saveDone();
  renderSections();
  renderHome();
}

function isDone(id) { 
  return done.some(function(d) { return d.id === id; }); 
}

function getThemeStars(id) {
  var found = done.find(function(d) { return d.id === id; });
  return found ? found.stars : 0;
}


/* ═══════════════════════════════════════════
   5. NAVIGATION ENTRE ÉCRANS
═══════════════════════════════════════════ */

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function(s) {
    s.classList.remove('active');
  });

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
  if (id === 'home')     renderHome();
  if (id === 'sections') renderSections();
}


/* ═══════════════════════════════════════════
   6. ÉCRAN HOME — rendu de la progression
═══════════════════════════════════════════ */

function renderHome() {
  if (!ALL_THEMES.length) return;
  var total = ALL_THEMES.length;
  var n     = done.length; 
  var pct   = Math.round(n / total * 100);

  document.getElementById('homeBar').style.width = pct + '%';

  var label = (currentMode === 'learn_french')
    ? (n + ' / ' + total + ' modules validés — ' + pct + '%<br><span class="translation-sub">' + n + ' / ' + total + ' módulos completados — ' + pct + '%</span>')
    : (n + ' / ' + total + ' módulos aprobados — ' + pct + '%<br><span class="translation-sub">' + n + ' / ' + total + ' modules validés — ' + pct + '%</span>');

  document.getElementById('homeBarLabel').innerHTML = label;

  // Remplacement de .textContent par .innerHTML pour activer les balises <br> et <small>
  document.getElementById('homeBarLabel').innerHTML = label;

  var totalStarsEarned = done.reduce(function(acc, d) { return acc + d.stars; }, 0);
  var maxStarsPossible = total * 3;

  document.getElementById('homeStars').innerHTML = 
    '<span style="font-size:1.1rem; font-weight:bold; color:#f1c40f;">⭐ ' + totalStarsEarned + ' / ' + maxStarsPossible + '</span>';
}


/* ═══════════════════════════════════════════
   7. ÉCRAN SECTIONS — grille des thèmes
═══════════════════════════════════════════ */

function renderSections() {
  if (!ALL_THEMES.length) return;
  var total = ALL_THEMES.length;
  var n     = done.length;
  var pct   = Math.round(n / total * 100);

  document.getElementById('globalProgress').style.width = pct + '%';

  var progressLabel = (currentMode === 'learn_french')
    ? (n + ' / ' + total + ' modules — ' + pct + '%')
    : (n + ' / ' + total + ' módulos — ' + pct + '%');
  document.getElementById('progressLabel').textContent = progressLabel;

  ['grid1', 'grid2'].forEach(function(gid) {
    var lv = gid === 'grid1' ? 1 : 2;
    document.getElementById(gid).innerHTML = ALL_THEMES
      .filter(function(t) { return t.level === lv; })
      .map(function(t) { return _buildThemeCard(t); })
      .join('');
  });
}

function _buildThemeCard(t) {
  var mainTitle = '', subLine = '';

  if (currentMode === 'learn_french') {
    var subText = t.sub || '';
    if (t.id === 'alpha' || t.type === 'alpha') {
      mainTitle = "L'Alphabet";
      subLine   = 'El Alfabeto';
    } else if (subText.includes('/')) {
      var parts = subText.split('/');
      mainTitle = parts[1].trim();
      subLine   = parts[0].trim() + ' / ' + t.name;
    } else {
      mainTitle = t.sub;
      subLine   = t.name;
    }
    if (mainTitle) mainTitle = mainTitle.charAt(0).toUpperCase() + mainTitle.slice(1);

  } else {
    mainTitle = t.name;
    subLine   = t.sub;
  }

  var resetBtn = isDone(t.id)
    ? '<button onclick="event.stopPropagation();resetTheme(\'' + t.id + '\')" '
      + 'style="margin-top:6px;font-size:.65rem;background:#fff;border:1.5px solid #009A44;'
      + 'color:#009A44;border-radius:50px;padding:4px 10px;cursor:pointer;font-weight:700">'
      + (currentMode === 'learn_french' ? '🔄 Volver a empezar' : '🔄 Recommencer')
      + '</button>'
    : '';

  var currentStars = getThemeStars(t.id);
  var starsStr = Array.from({ length: 3 }, function(_, i) {
    return i < currentStars ? '⭐' : '☆';
  }).join('');

  return '<div class="theme-card' + (isDone(t.id) ? ' done' : '') + '" onclick="openTheme(\'' + t.id + '\')">'
    + '<div class="t-emoji">'  + t.emoji    + '</div>'
    + '<div class="t-name">'   + mainTitle  + '</div>'
    + '<div class="t-sub">'    + subLine    + '</div>'
    + '<div class="t-stars" style="letter-spacing:2px">'  + starsStr + '</div>'
    + resetBtn
    + '</div>';
}


/* ═══════════════════════════════════════════
   8. OUVERTURE D'UN THÈME (ÉCRAN LESSON)
═══════════════════════════════════════════ */

function openTheme(id) {
  CT = ALL_THEMES.find(function(t) { return t.id === id; });
  fcIdx = 0; dqStep = 0; dqScore = 0; dqAnswered = false; sitIdx = 0;
  q10Step = 0; q10Score = 0; q10Answered = false;

  document.getElementById('lessonEmoji').textContent = CT.emoji;

  var lessonTitle = '';
  if (currentMode === 'learn_french') {
    var subText = CT.sub || '';
    var titreFr = '';
    if (CT.id === 'alpha' || CT.type === 'alpha') {
      titreFr = "L'Alphabet";
    } else if (subText.includes('/')) {
      titreFr = subText.split('/')[1].trim();
    } else {
      titreFr = CT.sub;
    }
    if (titreFr) titreFr = titreFr.charAt(0).toUpperCase() + titreFr.slice(1);
    lessonTitle = titreFr + ' — ' + CT.name;
  } else {
    lessonTitle = CT.name + ' — ' + CT.sub;
  }
  document.getElementById('lessonTitle').textContent = lessonTitle;

  showScreen('lesson');

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

  document.getElementById('lessonTabs').innerHTML = tabs.map(function(t, i) {
    return '<button class="tab' + (i === 0 ? ' active' : '') + '" data-tab="' + t.k + '" onclick="switchTab(\'' + t.k + '\')">' + t.lbl + '</button>';
  }).join('');

  switchTab(tabs[0].k);
}

function switchTab(tab) {
  document.querySelectorAll('#lessonTabs .tab').forEach(function(b) {
    b.classList.toggle('active', b.dataset.tab === tab);
  });
  if (tab === 'flash')       renderFlash();
  else if (tab === 'quiz10') { q10Step = 0; q10Score = 0; q10Answered = false; renderQuiz10(); }
  else if (tab === 'dialog') renderDialog();
  else if (tab === 'vocab')  renderVocab();
  else if (tab === 'dquiz')  { dqStep = 0; dqScore = 0; dqAnswered = false; renderDialogQuiz(); }
}


/* ═══════════════════════════════════════════
   9. CARTES FLASH (renderFlash)
═══════════════════════════════════════════ */

function renderFlash() {
  var w = CT.words, card = w[fcIdx];

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
        }).join('')
      + '</div>'
      + '<div id="alphaDetail" class="alpha-detail">' + buildAlphaDetail(card) + '</div>';
    return;
  }

  var emFr = card.em ? '<div class="fc-front-emoji">' + card.em + '</div>' : '';
  var emBk = card.em ? '<div class="fc-back-emoji">'  + card.em + '</div>' : '';
  var hasConj = card.conj && card.conj.es && card.conj.fr;
  var frontContent, backContent;

  if (currentMode === 'learn_french') {
    var hintFr = 'Haz clic para ver su significado en español';
    if (hasConj) {
      frontContent = emFr
        + '<div class="fc-front-word">' + card.fr + '</div>'
        + '<div class="fc-conj">' + card.conj.fr.map(function(l) { return '<div class="fc-conj-line">' + l + '</div>'; }).join('') + '</div>';
      backContent = emBk
        + '<div class="fc-back-word">' + card.es + '</div>'
        + '<div class="fc-conj">' + card.conj.es.map(function(l) { return '<div class="fc-conj-line">' + l + '</div>'; }).join('') + '</div>';
    } else {
      frontContent = emFr + '<div class="fc-front-word">' + card.fr + '</div><div class="fc-front-hint">👆 ' + hintFr + '</div>';
      backContent  = emBk + '<div class="fc-back-word">' + card.es + '</div>';
    }
    document.getElementById('tabContent').innerHTML =
      '<div class="section-label">Anverso : Francés 🇫🇷 — Reverso : Español 🇪🇸 · Haz clic para volver !</div>'
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

  } else {
    var hintEs = 'Cliquez pour voir la traduction en français';
    if (hasConj) {
      frontContent = emFr
        + '<div class="fc-front-word">' + card.es + '</div>'
        + '<div class="fc-conj">' + card.conj.es.map(function(l) { return '<div class="fc-conj-line">' + l + '</div>'; }).join('') + '</div>';
      backContent = emBk
        + '<div class="fc-back-word">' + card.fr + '</div>'
        + '<div class="fc-conj">' + card.conj.fr.map(function(l) { return '<div class="fc-conj-line">' + l + '</div>'; }).join('') + '</div>';
    } else {
      frontContent = emFr + '<div class="fc-front-word">' + card.es + '</div><div class="fc-front-hint">👆 ' + hintEs + '</div>';
      backContent  = emBk + '<div class="fc-back-word">' + card.fr + '</div>';
    }
    document.getElementById('tabContent').innerHTML =
      '<div class="section-label">Recto : Espagnol 🇪🇸 — Verso : Français 🇫🇷 · Cliquez pour retourner !</div>'
      + '<div class="fc-wrap"><div class="fc" id="fc" onclick="flipCard()">'
      + '<div class="fc-front">' + frontContent + '</div>'
      + '<div class="fc-back">'  + backContent  + '</div>'
      + '</div></div>'
      + '<div class="fc-nav">'
      + '<button onclick="prevCard()">← Précédent</button>'
      + '<span class="fc-counter">' + (fcIdx + 1) + ' / ' + w.length + '</span>'
      + '<button onclick="nextCard()">Suivant →</button>'
      + '</div>'
      + '<button class="audio-btn-big" onclick="speak(\'' + esc(card.es) + '\')">🔊 Écouter la prononciation</button>';
  }
}

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

function pickAlpha(i) {
  fcIdx = i;
  var card = CT.words[i];
  var spokenKey = (currentMode === 'learn_french') ? card.fr : card.es;
  speak(spokenKey);
  var d = document.getElementById('alphaDetail');
  if (d) d.innerHTML = buildAlphaDetail(card);
}

function flipCard() {
  var fc = document.getElementById('fc');
  if (!fc) return;
  fc.classList.toggle('flipped');
}

function nextCard() {
  fcIdx = (fcIdx + 1) % CT.words.length;
  renderFlash();
  var spokenKey = (currentMode === 'learn_french') ? CT.words[fcIdx].fr : CT.words[fcIdx].es;
  setTimeout(function() { speak(spokenKey); }, 300);
}

function prevCard() {
  fcIdx = (fcIdx - 1 + CT.words.length) % CT.words.length;
  renderFlash();
}

function isAlphaQuiz() { return CT && CT.type === 'alpha'; }


/* ═══════════════════════════════════════════
   10. QUIZ 10 QUESTIONS (AVEC ÉTOILES PROGRESSIVES)
═══════════════════════════════════════════ */

function getQuizTotal(theme) {
  var n = (theme.words || []).length;
  if (n < 10)  return 5;
  if (n <= 20) return 8;
  return 12;
}

function getQuizQuestions(theme) {
  return (theme.quiz10 || []).slice(0, getQuizTotal(theme));
}

function renderQuiz10() {
  var qs    = getQuizQuestions(CT);
  var total = qs.length;

  if (!qs || !total) {
    var noQLabel = (currentMode === 'learn_french') ? 'No hay ningún cuestionario disponible.' : 'Aucun quiz disponible.';
    document.getElementById('tabContent').innerHTML = '<div class="result-box"><p>' + noQLabel + '</p></div>';
    return;
  }

  if (q10Step >= total) {
    var pct = Math.round(q10Score / total * 100);
    var earnedStars = _calcStars(pct);
    
    if (earnedStars > 0) {
      markDone(CT.id, pct);
    }

    var r = _quizResultStrings(pct, 'q10');
    var isSuccess = earnedStars > 0;
    
    var endStars = Array.from({ length: 3 }, function(_, i) {
      return i < earnedStars ? '⭐' : '☆';
    }).join('');

    document.getElementById('tabContent').innerHTML = '<div class="result-box">'
      + '<div style="font-size:2rem; margin-bottom:5px;">' + (earnedStars === 3 ? '⭐⭐⭐' : endStars) + '</div>'
      + '<h3>' + r.title + '</h3>'
      + '<div class="score-num">' + q10Score + '/' + total + '</div>'
      + '<div style="font-size:1rem;margin:6px 0;color:' + (isSuccess ? '#009A44' : '#EF2B2D') + '">' + r.sub + '</div>'
      + '<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:14px">'
      + '<button class="retry-btn" style="background:#888" onclick="q10Step=0;q10Score=0;q10Answered=false;renderQuiz10()">' + r.retry + '</button>'
      + (isSuccess ? '<button class="retry-btn" onclick="renderSections();showScreen(\'sections\')">' + r.finish + '</button>' : '')
      + '</div></div>';
    renderSections();
    return;
  }

  var q = qs[q10Step];

  if (isAlphaQuiz()) {
    var audioLabel = (currentMode === 'learn_french')
      ? 'Escucha el sonido y elige la letra correcta'
      : 'Écoutez le son et choisissez la bonne lettre';
    var listenHint = (currentMode === 'learn_french') ? 'Haz clic para escuchar' : 'Cliquez pour écouter';
    var qLabel     = (currentMode === 'learn_french')
      ? 'Pregunta ' + (q10Step + 1) + '/' + total
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

  var qStdLabel = (currentMode === 'learn_french')
    ? 'Pregunta ' + (q10Step + 1) + '/' + total
    : 'Question ' + (q10Step + 1) + '/' + total;
  var opts = q.opts.map(function(o, i) {
    return '<button class="quiz-opt" id="q10o' + i + '" onclick="checkQ10(' + i + ',' + q.ans + ')">' + o + '</button>';
  }).join('');
  document.getElementById('tabContent').innerHTML =
    '<div class="dialog-quiz-wrap">'
    + '<div class="quiz-q"><div class="q-text">' + qStdLabel + '<br><b>' + q.q + '</b></div></div>'
    + '<div class="quiz-options" style="grid-template-columns:1fr">' + opts + '</div>'
    + '<div class="quiz-feedback" id="q10fb"></div>'
    + '</div>';
  q10Answered = false;
}

function playAlphaAudio(letter) {
  speak(letter);
  var btn = document.getElementById('playAudioBtn');
  if (btn) { btn.style.transform = 'scale(0.9)'; setTimeout(function() { btn.style.transform = 'scale(1)'; }, 200); }
}

function checkQ10(chosen, correct) {
  if (q10Answered) return;
  q10Answered = true;
  var qs = getQuizQuestions(CT);
  document.querySelectorAll('[id^=q10o]').forEach(function(b, i) {
    b.classList.add('disabled');
    if (i === correct) b.classList.add('correct');
    else if (i === chosen && chosen !== correct) b.classList.add('wrong');
  });
  if (chosen === correct) q10Score++;
  var correctWord = qs[q10Step].opts[correct];
  var fb = document.getElementById('q10fb');

  var fbOk  = (currentMode === 'learn_french') ? '✅ ¡Correcto! ¡Enhorabuena!'             : '✅ Correct ! Félicitations !';
  var fbErr = (currentMode === 'learn_french') ? '❌ Respuesta incorrecta. La solución era: '            : '❌ Mauvaise réponse. La solution était : ';
  fb.textContent = (chosen === correct) ? fbOk : fbErr + correctWord;
  fb.style.color = (chosen === correct) ? '#009A44' : '#c0392b';

  if (isAlphaQuiz()) {
    if (chosen !== correct) setTimeout(function() { speak(qs[q10Step].audio); }, 300);
  } else {
    if (CT.words) {
      var match = CT.words.find(function(w) { return w.es === correctWord || w.fr === correctWord; });
      if (match) {
        var spokenKey = (currentMode === 'learn_french') ? match.fr : match.es;
        speak(spokenKey);
      }
    }
  }
  setTimeout(function() { q10Step++; renderQuiz10(); }, 1600);
}


/* ═══════════════════════════════════════════
   11. DIALOGUE (renderDialog)
═══════════════════════════════════════════ */

function renderDialog() {
  var sits    = CT.situations;
  var sitBtns = sits.map(function(s, i) {
    return '<button class="sit-btn' + (i === sitIdx ? ' active' : '') + '" onclick="pickSit(' + i + ')">' + s.label + '</button>';
  }).join('');
  var sit = sits[sitIdx];

  var bubbles = sit.dialogue.map(function(ln, i) {
    var mainMsg   = (currentMode === 'learn_french') ? ln.fr : ln.es;
    var transMsg  = (currentMode === 'learn_french') ? ln.es : ln.fr;
    var spokenKey = (currentMode === 'learn_french') ? ln.fr : ln.es;
    var listenTip = (currentMode === 'learn_french') ? 'Escuchar' : 'Écouter';
    return '<div class="bubble ' + ln.side + '" style="opacity:0;transition:opacity .3s ' + (i * 0.08) + 's" id="bl' + i + '">'
      + '<div class="speaker-name">' + ln.s + '</div>'
      + '<div class="msg-row">'
      + '<div class="msg">' + mainMsg + '</div>'
      + '<button class="speak-bubble-btn" onclick="speak(\'' + esc(spokenKey) + '\')" title="' + listenTip + '">🔊</button>'
      + '</div>'
      + '<div class="bubble-translation">' + transMsg + '</div>'
      + '</div>';
  }).join('');

  var quizBtnLabel = (currentMode === 'learn_french') ? 'Iniciar el minicuestionario ➜' : 'Lancer le mini quiz ➜';

  document.getElementById('tabContent').innerHTML =
    '<div class="sit-nav">' + sitBtns + '</div>'
    + '<div class="dialogue-box">'
    + '<div class="scene-img-big">' + sit.img + '</div>'
    + '<div class="bubble-wrap">' + bubbles + '</div>'
    + '</div>'
    + '<div class="action-row">'
    + '<button class="btn-start-quiz" onclick="switchTab(\'' + 'dquiz' + '\')">' + quizBtnLabel + '</button>'
    + '</div>';
  setTimeout(function() { document.querySelectorAll('[id^=bl]').forEach(function(b) { b.style.opacity = '1'; }); }, 80);
}

function pickSit(i) { sitIdx = i; renderDialog(); }


/* ═══════════════════════════════════════════
   12. VOCABULAIRE (renderVocab)
═══════════════════════════════════════════ */

function renderVocab() {
  var chips = CT.vocab.map(function(v) {
    var parts = v.split('=');
    var es    = parts[0].trim();       
    var fr    = parts[1] ? parts[1].trim() : ''; 
    var mainWord  = (currentMode === 'learn_french') ? fr : es;
    var subWord   = (currentMode === 'learn_french') ? es : fr;
    var spokenKey = (currentMode === 'learn_french') ? fr : es;
    return '<span class="vocab-chip" style="display: inline-flex; flex-direction: column; align-items: center; text-align: center;" onclick="speak(\'' + esc(spokenKey) + '\')">'
  + '<span class="vocab-item-et" style="font-weight: bold;">' + mainWord + '</span>'
  + (subWord ? '<span class="vocab-translation-sub">' + subWord + '</span>' : '')
  + '</span>';
  }).join('');

  var vocabTitle   = (currentMode === 'learn_french')
    ? '📚 Vocabulario básico — ¡Haz clic para escuchar el español!'
    : '📚 Lexique essentiel — Cliquez pour écouter l\'Espagnol !';
  var quizBtnLabel = (currentMode === 'learn_french') ? 'Iniciar el minicuestionario ➜' : 'Lancer le mini quiz ➜';

  document.getElementById('tabContent').innerHTML =
    '<div class="vocab-section">'
    + '<div class="vocab-title">' + vocabTitle + '</div>'
    + '<div class="vocab-grid">' + chips + '</div>'
    + '</div>'
    + '<div class="action-row">'
    + '<button class="btn-start-quiz" onclick="switchTab(\'' + 'dquiz' + '\')">' + quizBtnLabel + '</button>'
    + '</div>';
}


/* ═══════════════════════════════════════════
   13. QUIZ DIALOGUE (AVEC ÉTOILES PROGRESSIVES)
═══════════════════════════════════════════ */

function renderDialogQuiz() {
  var qs    = CT.quiz;
  var total = qs.length;

  if (dqStep >= total) {
    var pct = Math.round(dqScore / total * 100);
    var earnedStars = _calcStars(pct);
    
    if (earnedStars > 0) {
      markDone(CT.id, pct);
    }

    var r = _quizResultStrings(pct, 'dq');
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

  var q     = qs[dqStep];
  var qLabel = (currentMode === 'learn_french')
    ? 'Pregunta ' + (dqStep + 1) + '/' + total
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
  var fbOk = (currentMode === 'learn_french') ? '✅ ¡Buena respuesta!' : '✅ Bonne réponse !';
  var fbErr= (currentMode === 'learn_french') ? '❌ ¡Inténtalo de nuevo!'    : '❌ Essayer de nouveau !';
  fb.textContent = (chosen === correct) ? fbOk : fbErr;
  fb.style.color = (chosen === correct) ? '#009A44' : '#c0392b';
  setTimeout(function() { dqStep++; renderDialogQuiz(); }, 1500);
}


/* ═══════════════════════════════════════════
   14. UTILITAIRES & TRADUCTIONS DES RÉSULTATS
═══════════════════════════════════════════ */

function _quizResultStrings(pct, type) {
  var stars = _calcStars(pct);
  var isSuccess = stars > 0;

  if (currentMode === 'learn_french') {
    var titleFr = '¡Prueba terminada!';
    if (stars === 3) titleFr = '¡Perfecto! ⭐⭐⭐';
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
    if (stars === 3) titleEs = 'Parfait ! ⭐⭐⭐';
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

function esc(s) {
  return (s || '').replaceAll('\\', '\\\\').replaceAll("'", "\\'").replaceAll('"', '&quot;');
}