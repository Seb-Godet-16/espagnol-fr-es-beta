/* ========================================
   app.js – Francés para colombianos
   Langue cible : FRANÇAIS | Source : Español colombiano
   © 2026 Sébastien Godet
======================================== */

/* ── ESTADO GLOBAL ─────────────────────── */
let currentTheme = null;
let currentTab   = 0;
let fcIndex      = 0;
let fcFlipped    = false;
let quizIdx      = 0;
let quizScore    = 0;
let quizAnswered = false;
let dialogSit    = 0;
let dialogQuizIdx   = 0;
let dialogQuizScore = 0;
let dialogQuizAnswered = false;
let progress = {};

/* ── UTILIDADES ─────────────────────────── */
function $(id){ return document.getElementById(id); }

function loadProgress(){
  try { progress = JSON.parse(localStorage.getItem('frProgress_v1') || '{}'); }
  catch(e){ progress = {}; }
}
function saveProgress(){
  localStorage.setItem('frProgress_v1', JSON.stringify(progress));
}

/* ── SÍNTESIS DE VOZ (FRANCÉS) ──────────── */
function speak(text){
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'fr-FR';
  u.rate = 0.88;
  u.pitch = 1;
  window.speechSynthesis.speak(u);
}

/* ── PANTALLAS ──────────────────────────── */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  if (id === 'sections') buildSections();
  if (id === 'home') updateHomeBar();
}

/* ── BARRA DE PROGRESO HOME ─────────────── */
function updateHomeBar(){
  const total = THEMES.length;
  const done  = THEMES.filter(t => progress[t.id]?.done).length;
  const pct   = total ? Math.round(done / total * 100) : 0;
  const bar   = $('homeBar');
  if (bar) bar.style.width = pct + '%';
  const lbl = $('homeBarLabel');
  if (lbl) lbl.textContent = done + ' / ' + total + ' módulos completados';
  const starsRow = $('homeStars');
  if (starsRow){
    let html = '';
    for (let i = 0; i < total; i++){
      const t = THEMES[i];
      html += '<span class="star">' + (progress[t.id]?.done ? '⭐' : '☆') + '</span>';
    }
    starsRow.innerHTML = html;
  }
}

/* ── SECCIÓN DE MÓDULOS ─────────────────── */
function buildSections(){
  const t1 = THEMES.filter(t => t.level === 1);
  const t2 = THEMES.filter(t => t.level === 2);
  $('grid1').innerHTML = t1.map(t => themeCard(t)).join('');
  $('grid2').innerHTML = t2.map(t => themeCard(t)).join('');

  const total = THEMES.length;
  const done  = THEMES.filter(t => progress[t.id]?.done).length;
  const pct   = total ? Math.round(done / total * 100) : 0;
  $('globalProgress').style.width = pct + '%';
  $('progressLabel').textContent = done + ' / ' + total + ' completados · ' + pct + '%';
}

function themeCard(t){
  const isDone = !!progress[t.id]?.done;
  const stars  = progress[t.id]?.stars || 0;
  let starStr  = '';
  for (let i = 0; i < 3; i++) starStr += (i < stars ? '⭐' : '☆');
  return `<div class="theme-card${isDone?' done':''}" onclick="openLesson('${t.id}')">
    <div class="t-emoji">${t.emoji}</div>
    <div class="t-name">${t.name}</div>
    <div class="t-sub">${t.sub}</div>
    <div class="t-stars">${starStr}</div>
  </div>`;
}

/* ── LECCIÓN ─────────────────────────────── */
function openLesson(id){
  currentTheme = THEMES.find(t => t.id === id);
  if (!currentTheme) return;
  currentTab = 0;
  $('lessonEmoji').textContent  = currentTheme.emoji;
  $('lessonTitle').textContent  = currentTheme.name + ' — ' + currentTheme.sub;
  showScreen('lesson');
  buildTabs();
  renderTab(0);
}

function buildTabs(){
  const tabs = currentTheme.tabs || [];
  $('lessonTabs').innerHTML = tabs.map((tab, i) =>
    `<button class="tab${i===0?' active':''}" onclick="switchTab(${i})">${tab}</button>`
  ).join('');
}

function switchTab(i){
  currentTab = i;
  document.querySelectorAll('.tab').forEach((t, j) => t.classList.toggle('active', j === i));
  renderTab(i);
}

function renderTab(i){
  const tabName = currentTheme.tabs[i];
  if (tabName === 'Tarjetas')      renderFlashcards();
  else if (tabName === 'Quiz')     renderQuiz();
  else if (tabName === 'Alfabeto') renderAlphabet();
  else if (tabName === 'Pronunciación') renderPronunciation();
  else if (tabName === 'Diálogo')  renderDialogue();
  else if (tabName === 'Vocabulario') renderVocab();
}

/* ── FLASHCARDS ──────────────────────────── */
function renderFlashcards(){
  fcIndex   = 0;
  fcFlipped = false;
  const cards = currentTheme.cards || [];
  $('tabContent').innerHTML = `
    <p class="section-label">Toca la tarjeta para ver la traducción en español</p>
    <div class="fc-wrap">
      <div class="fc" id="fc" onclick="flipCard()">
        <div class="fc-front">
          <div class="fc-front-emoji" id="fcEmoji"></div>
          <div class="fc-front-word" id="fcWord"></div>
          <div class="fc-front-hint">— en français —</div>
        </div>
        <div class="fc-back">
          <div class="fc-back-emoji" id="fcEmojiBack"></div>
          <div class="fc-back-word" id="fcWordBack"></div>
          <div class="fc-back-hint">— en español —</div>
        </div>
      </div>
    </div>
    <button class="audio-btn-big" onclick="speakCurrentCard()">🔊 Escuchar en francés</button>
    <div class="fc-nav">
      <button onclick="fcNav(-1)">← Anterior</button>
      <span class="fc-counter" id="fcCounter"></span>
      <button onclick="fcNav(1)">Siguiente →</button>
    </div>`;
  updateFlashcard();
}

function updateFlashcard(){
  const cards = currentTheme.cards || [];
  const c = cards[fcIndex];
  if (!c) return;
  $('fcEmoji').textContent    = c.emoji || '💬';
  $('fcWord').textContent     = c.fr;
  $('fcEmojiBack').textContent = c.emoji || '💬';
  $('fcWordBack').textContent  = c.es;
  $('fcCounter').textContent   = (fcIndex + 1) + ' / ' + cards.length;
  const fc = $('fc');
  if (fc){ fc.classList.remove('flipped'); fcFlipped = false; }
}

function flipCard(){
  fcFlipped = !fcFlipped;
  $('fc').classList.toggle('flipped', fcFlipped);
  if (fcFlipped) speak(currentTheme.cards[fcIndex].fr);
}

function speakCurrentCard(){
  const cards = currentTheme.cards || [];
  if (cards[fcIndex]) speak(cards[fcIndex].fr);
}

function fcNav(dir){
  const cards = currentTheme.cards || [];
  fcIndex = (fcIndex + dir + cards.length) % cards.length;
  updateFlashcard();
}

/* ── QUIZ (vocabulario) ──────────────────── */
function renderQuiz(){
  quizIdx      = 0;
  quizScore    = 0;
  quizAnswered = false;
  renderQuizQuestion();
}

function renderQuizQuestion(){
  const qs = currentTheme.quiz || [];
  if (quizIdx >= qs.length){
    renderQuizResult();
    return;
  }
  const q = qs[quizIdx];
  $('tabContent').innerHTML = `
    <div class="quiz-q">
      <div class="q-emoji">${q.emoji || '❓'}</div>
      <div class="q-text">${q.question}</div>
    </div>
    <div class="quiz-options">
      ${q.options.map((o, i) =>
        `<button class="quiz-opt" id="qopt${i}" onclick="answerQuiz(${i})">${o}</button>`
      ).join('')}
    </div>
    <div class="quiz-feedback" id="quizFeedback"></div>
    <button class="next-btn" id="nextBtn" onclick="nextQuizQ()">Siguiente pregunta →</button>
    <p style="text-align:center;font-size:.75rem;color:#aaa;margin-top:8px">${quizIdx+1} / ${qs.length}</p>`;
  quizAnswered = false;
}

function answerQuiz(chosen){
  if (quizAnswered) return;
  quizAnswered = true;
  const q   = currentTheme.quiz[quizIdx];
  const cor = q.answer;
  const fb  = $('quizFeedback');
  document.querySelectorAll('.quiz-opt').forEach((b, i) => {
    b.classList.add('disabled');
    if (i === cor) b.classList.add('correct');
    else if (i === chosen) b.classList.add('wrong');
  });
  if (chosen === cor){
    quizScore++;
    fb.textContent = '✅ ¡Correcto! «' + q.options[cor] + '»';
    speak(q.options[cor]);
  } else {
    fb.textContent = '❌ La respuesta es: «' + q.options[cor] + '»';
    speak(q.options[cor]);
  }
  $('nextBtn').style.display = 'block';
}

function nextQuizQ(){
  quizIdx++;
  renderQuizQuestion();
}

function renderQuizResult(){
  const total = currentTheme.quiz.length;
  const pct   = Math.round(quizScore / total * 100);
  const stars  = pct >= 80 ? 3 : pct >= 50 ? 2 : 1;
  if (!progress[currentTheme.id]) progress[currentTheme.id] = {};
  progress[currentTheme.id].done  = true;
  progress[currentTheme.id].stars = Math.max(progress[currentTheme.id].stars || 0, stars);
  saveProgress();

  $('tabContent').innerHTML = `
    <div class="result-box">
      <h3>¡Quiz terminado!</h3>
      <div class="score-num">${quizScore} / ${total}</div>
      <p>${starStr(stars)}</p>
      <p style="margin-top:10px;color:#555;font-size:.9rem">${resultMsg(pct)}</p>
      <button class="retry-btn" onclick="renderQuiz()">🔄 Repetir</button>
    </div>`;
  updateHomeBar();
}

function starStr(n){
  let s = '';
  for(let i=0;i<3;i++) s += i<n ? '⭐' : '☆';
  return s;
}
function resultMsg(pct){
  if (pct === 100) return '¡Perfecto! ¡C\'est parfait! 🎉';
  if (pct >= 80)  return '¡Muy bien! ¡Très bien! 👍';
  if (pct >= 50)  return '¡Bien! ¡Continue comme ça! 💪';
  return '¡Sigue practicando! ¡Tu peux le faire! 🌟';
}

/* ── ALFABETO ─────────────────────────────── */
function renderAlphabet(){
  const letters = currentTheme.letters || [];
  $('tabContent').innerHTML = `
    <div class="alpha-grid">
      ${letters.map(l => `<div class="alpha-card" onclick="showLetter('${l.l}')">
        <div class="alpha-letter">${l.l}</div>
        <div class="alpha-name">${l.name}</div>
      </div>`).join('')}
    </div>
    <div class="alpha-detail" id="alphaDetail">
      <p style="color:#bbb;font-size:.8rem">Toca una letra para ver detalles</p>
    </div>`;
}

function showLetter(l){
  const letters = currentTheme.letters || [];
  const obj = letters.find(x => x.l === l);
  if (!obj) return;
  $('alphaDetail').innerHTML = `
    <div style="font-size:3rem;font-weight:900;color:#002395">${obj.l}</div>
    <div style="font-size:1.1rem;color:#555;margin:6px 0">Se pronuncia: <b>${obj.name}</b></div>
    <div style="font-size:.9rem;color:#002395;margin:4px 0">Ejemplo: <b>${obj.ex}</b> <span style="color:#888">(${obj.exes})</span></div>
    <button class="audio-btn-big" style="margin-top:10px" onclick="speak('${obj.name}')">🔊 Escuchar la letra</button>
    <button class="audio-btn-big" style="margin-top:6px;background:#555" onclick="speak('${obj.ex}')">🔊 Escuchar el ejemplo</button>`;
  speak(obj.name);
}

/* ── PRONUNCIACIÓN ──────────────────────── */
function renderPronunciation(){
  const cards = currentTheme.cards || [];
  $('tabContent').innerHTML = `
    <div class="alpha-audio-quiz">
      <p class="alpha-audio-label">Toca para escuchar la pronunciación en francés</p>
      <div class="vocab-grid" style="justify-content:center;gap:8px;flex-wrap:wrap">
        ${cards.map(c => `<div class="vocab-chip" onclick="speak('${c.fr.replace(/'/g,"\\'")}')">
          ${c.emoji || '💬'} ${c.fr}
          <span class="vocab-item-es" style="margin-left:6px;font-weight:400;color:#888">${c.es}</span>
        </div>`).join('')}
      </div>
    </div>`;
}

/* ── DIÁLOGO ──────────────────────────────── */
function renderDialogue(){
  dialogSit = 0;
  renderDialogueSit();
}

function renderDialogueSit(){
  const sit = currentTheme.situation;
  if (!sit) return;
  const d = sit.dialogues[dialogSit];
  $('tabContent').innerHTML = `
    <div class="dialogue-box">
      <div class="scene-img-big">${sit.scene}</div>
      <div class="sit-nav">
        ${sit.dialogues.map((dl, i) =>
          `<button class="sit-btn${i===dialogSit?' active':''}" onclick="switchDialogue(${i})">${dl.label}</button>`
        ).join('')}
      </div>
      <div class="bubble-wrap">
        ${d.bubbles.map(b => `
          <div class="bubble ${b.side}">
            <div class="speaker-name">${b.speaker}</div>
            <div class="msg-row">
              <button class="speak-bubble-btn" onclick="speak('${b.fr.replace(/'/g,"\\'")}')" title="Escuchar en francés">🔊</button>
              <div class="msg">${b.fr}</div>
            </div>
            <div class="bubble-translation">${b.es}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

function switchDialogue(i){
  dialogSit = i;
  renderDialogueSit();
}

/* ── VOCABULARIO (nivel 2) ─────────────── */
function renderVocab(){
  const sit = currentTheme.situation;
  if (!sit) return;
  $('tabContent').innerHTML = `
    <div class="vocab-section">
      <div class="vocab-title">📝 Vocabulario clave — ${sit.titleEs}</div>
      <div class="vocab-grid">
        ${sit.vocab.map(v => `
          <div class="vocab-chip" onclick="speak('${v.fr.replace(/'/g,"\\'")}')">
            <span class="vocab-item-fr">${v.fr}</span>
            <span class="vocab-item-es">${v.es}</span>
          </div>`).join('')}
      </div>
    </div>
    <div class="action-row">
      <button class="btn-start-quiz" onclick="startDialogQuiz()">🎯 ¡Quiz de vocabulario!</button>
    </div>`;
}

/* ── QUIZ DE DIÁLOGO ─────────────────────── */
function startDialogQuiz(){
  dialogQuizIdx      = 0;
  dialogQuizScore    = 0;
  dialogQuizAnswered = false;
  renderDialogQuizQ();
}

function renderDialogQuizQ(){
  const qs = currentTheme.situation?.quizzes || [];
  if (dialogQuizIdx >= qs.length){
    renderDialogQuizResult();
    return;
  }
  const q = qs[dialogQuizIdx];
  $('tabContent').innerHTML = `
    <div class="dialog-quiz-wrap">
      <div class="quiz-q">
        <div class="q-text" style="font-size:1rem">${q.question}</div>
      </div>
      <div class="quiz-options">
        ${q.options.map((o, i) =>
          `<button class="quiz-opt" id="dqopt${i}" onclick="answerDialogQuiz(${i})">${o}</button>`
        ).join('')}
      </div>
      <div class="quiz-feedback" id="dqFeedback"></div>
      <button class="next-btn" id="dqNextBtn" onclick="nextDialogQuizQ()">Siguiente →</button>
      <p style="text-align:center;font-size:.75rem;color:#aaa;margin-top:8px">${dialogQuizIdx+1} / ${qs.length}</p>
    </div>`;
  dialogQuizAnswered = false;
}

function answerDialogQuiz(chosen){
  if (dialogQuizAnswered) return;
  dialogQuizAnswered = true;
  const q   = currentTheme.situation.quizzes[dialogQuizIdx];
  const cor = q.answer;
  const fb  = $('dqFeedback');
  document.querySelectorAll('.quiz-opt').forEach((b, i) => {
    b.classList.add('disabled');
    if (i === cor) b.classList.add('correct');
    else if (i === chosen) b.classList.add('wrong');
  });
  if (chosen === cor){
    dialogQuizScore++;
    fb.textContent = '✅ ¡Correcto! «' + q.options[cor] + '»';
    speak(q.options[cor]);
  } else {
    fb.textContent = '❌ La respuesta es: «' + q.options[cor] + '»';
    speak(q.options[cor]);
  }
  $('dqNextBtn').style.display = 'block';
}

function nextDialogQuizQ(){
  dialogQuizIdx++;
  renderDialogQuizQ();
}

function renderDialogQuizResult(){
  const total = currentTheme.situation?.quizzes?.length || 0;
  const pct   = total ? Math.round(dialogQuizScore / total * 100) : 0;
  const stars  = pct >= 80 ? 3 : pct >= 50 ? 2 : 1;
  if (!progress[currentTheme.id]) progress[currentTheme.id] = {};
  progress[currentTheme.id].done  = true;
  progress[currentTheme.id].stars = Math.max(progress[currentTheme.id].stars || 0, stars);
  saveProgress();

  $('tabContent').innerHTML = `
    <div class="result-box">
      <h3>¡Quiz terminado!</h3>
      <div class="score-num">${dialogQuizScore} / ${total}</div>
      <p>${starStr(stars)}</p>
      <p style="margin-top:10px;color:#555;font-size:.9rem">${resultMsg(pct)}</p>
      <button class="retry-btn" onclick="startDialogQuiz()">🔄 Repetir</button>
    </div>`;
  updateHomeBar();
}

/* ── INIT ─────────────────────────────────── */
loadProgress();
updateHomeBar();