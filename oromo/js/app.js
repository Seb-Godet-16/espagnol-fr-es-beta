/* ========================================
   Français → Oromo 🇪🇹 – Logique applicative
   Fonctions UI, état, navigation
   © 2026 Sébastien Godet
======================================== */

/* ========== NAVIGATION ========== */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function(s){ s.classList.remove('active'); });
  var el = document.getElementById(id);
  if(el){ el.classList.add('active'); window.scrollTo(0,0); }
  if(id==='sections') renderSections();
}

/* ========== SPEECH ========== */
function speak(txt){
  if(!window.speechSynthesis)return;
  speechSynthesis.cancel();
  var u=new SpeechSynthesisUtterance(txt);
  u.lang='fr-FR';u.rate=0.85;
  speechSynthesis.speak(u);
}

/* ========== PROGRESS ========== */
var progress = {};
try{ progress = JSON.parse(localStorage.getItem('pfProgress')||'{}'); }catch(e){}
function saveProgress(){ try{ localStorage.setItem('pfProgress', JSON.stringify(progress)); }catch(e){} }
function resetChapter(){
  if(!currentTheme) return;
  if(confirm('Réinitialiser ce chapitre ? La progression sera effacée.\nKutaa kana haaromsiitaa? Tartiibni ni haaqama.')){
    delete progress[currentTheme.id];
    saveProgress();
    showScreen('sections');
  }
}

function resetTheme(id){
  if(confirm('Réinitialiser ce chapitre ? La progression sera effacée.\nKutaa kana haaromsiitaa? Tartiibni ni haaqama.')){
    delete progress[id];
    saveProgress();
    renderSections();
  }
}

function getQuizTotal(theme){
  var n=(theme.words||[]).length;
  if(n<10)return 5; if(n<=20)return 8; return 12;
}
function getQuizQuestions(theme){
  return (theme.quiz10||[]).slice(0, getQuizTotal(theme));
}

/* ========== HELPER : format question text ==========
   Chaque question est stockée sous la forme :
   "Texte français <span class=\"or\">Texte oromo</span>"
   On reformate pour afficher d'abord le français en gras,
   puis l'oromo en petit gris en dessous.
*/
function formatQ(raw){
  // Extrait le contenu de la balise .or si présente
  var orMatch = raw.match(/<span[^>]*class="or"[^>]*>([\s\S]*?)<\/span>/i);
  var orText = orMatch ? orMatch[1] : '';
  // Texte principal = tout sauf la balise .or
  var mainText = raw.replace(/<span[^>]*class="or"[^>]*>[\s\S]*?<\/span>/i,'').trim();
  if(orText){
    return '<span style="font-weight:700;color:#222">' + mainText + '</span>'
         + '<span style="display:block;font-size:.68rem;color:#bbb;font-style:italic;margin-top:3px;font-weight:400">' + orText + '</span>';
  }
  return '<span style="font-weight:700;color:#222">' + mainText + '</span>';
}

/* ========== DATA ========== */

var currentTheme = null;
var currentTab = 0;

/* ========== RENDER SECTIONS ========== */
function renderSections(){
  var done = Object.keys(progress).filter(function(k){ return progress[k] && progress[k].done; }).length;
  var total = ALL_THEMES.length;
  var pct = total>0 ? Math.round(done/total*100) : 0;
  document.getElementById('globalProgress').style.width = pct+'%';
  document.getElementById('progressLabel').textContent = done+' / '+total+' leçons complétées — Xumurame '+done+'/'+total;
  document.getElementById('homeBar').style.width = pct+'%';
  document.getElementById('homeBarLabel').textContent = pct+'% accompli';
  var starsEl = document.getElementById('homeStars');
  if(starsEl){ var stars=''; for(var i=0;i<done;i++) stars+='<span class="star">⭐</span>'; starsEl.innerHTML=stars; }
  renderGrid('grid1', LEVEL1_THEMES);
  renderGrid('grid2', LEVEL2_THEMES);
}

function renderGrid(gridId, themes){
  var grid = document.getElementById(gridId);
  if(!grid) return;
  grid.innerHTML = '';
  themes.forEach(function(t){
    var p = progress[t.id] || {};
    var stars = p.stars || 0;
    var starStr = '';
    for(var i=0;i<3;i++) starStr += i<stars ? '⭐' : '☆';
    var div = document.createElement('div');
    div.className = 'theme-card' + (p.done ? ' done' : '');
    var resetBtnHtml = p.done ? '<button onclick="event.stopPropagation();resetTheme(\''+t.id+'\')" style="margin-top:6px;font-size:.65rem;background:#fff;border:1.5px solid #ED2939;color:#ED2939;border-radius:50px;padding:4px 10px;cursor:pointer;font-weight:700">🔄 Réinitialiser</button>' : '';
    div.innerHTML = '<div class="t-emoji">'+t.emoji+'</div><div class="t-name">'+t.name+'</div><div class="t-sub">'+t.sub+'</div><div class="t-stars">'+starStr+'</div>'+resetBtnHtml;
    div.onclick = function(){ openLesson(t); };
    grid.appendChild(div);
  });
}

/* ========== OPEN LESSON ========== */
function openLesson(theme){
  currentTheme = theme;
  currentTab = 0;
  document.getElementById('lessonEmoji').textContent = theme.emoji;
  document.getElementById('lessonTitle').textContent = theme.name;
  showScreen('lesson');
  renderTabs();
}

function renderTabs(){
  var t = currentTheme;
  var tabs = [];
  if(t.type==='alpha') tabs = ['Alphabet','Quiz'];
  else if(t.type==='dialog') tabs = ['Dialogue','Vocabulaire','Quiz'];
  else tabs = ['Fiches','Quiz'];
  var tabsEl = document.getElementById('lessonTabs');
  tabsEl.innerHTML = '';
  tabs.forEach(function(name, i){
    var btn = document.createElement('button');
    btn.className = 'tab' + (i===currentTab ? ' active' : '');
    btn.textContent = name;
    btn.onclick = (function(idx){ return function(){ currentTab=idx; renderTabs(); renderTabContent(); }; })(i);
    tabsEl.appendChild(btn);
  });
  renderTabContent();
}

function renderTabContent(){
  var t = currentTheme;
  var el = document.getElementById('tabContent');
  el.innerHTML = '';
  if(t.type==='alpha'){
    if(currentTab===0) renderAlphaTab(el, t);
    else renderQuizTab(el, t);
  } else if(t.type==='dialog'){
    if(currentTab===0) renderDialogTab(el, t);
    else if(currentTab===1) renderVocabTab(el, t);
    else renderQuizTabDialog(el, t);
  } else {
    if(currentTab===0) renderFlashcardsTab(el, t);
    else renderQuizTab(el, t);
  }
}

/* ========== FLASHCARDS ========== */
var fcIndex = 0;
var fcFlipped = false;
function renderFlashcardsTab(el, t){
  fcIndex = 0; fcFlipped = false;
  var words = t.words || [];
  var wrap = document.createElement('div');
  wrap.innerHTML = '<p class="section-label">Cartes mémoire<span class="or">Kaardii yaadannoo</span></p>';
  wrap.innerHTML += '<div class="fc-wrap"><div class="fc" id="fc" onclick="flipCard()">'+fcCardHTML(words, 0)+'</div></div>';
  wrap.innerHTML += '<div class="fc-nav"><button onclick="fcNav(-1)">← Duubatti</button><span class="fc-counter" id="fcCounter">1 / '+words.length+'</span><button onclick="fcNav(1)">Itti →</button></div>';
  wrap.innerHTML += '<button class="audio-btn-big" onclick="speak(\''+escQ(words[0].fr)+'\')">🔊 Dhageeffadhu</button>';
  el.appendChild(wrap);
}
function fcCardHTML(words, i){
  var w = words[i];
  return '<div class="fc-front"><div class="fc-front-emoji">'+w.em+'</div><div class="fc-front-word">'+w.fr+'</div><div class="fc-front-hint">Tuqii hiikuuf — Tuqi</div></div>'
       + '<div class="fc-back"><div class="fc-back-emoji">'+w.em+'</div><div class="fc-back-word">'+w.es+'</div><div class="fc-back-hint">Oromo</div></div>';
}
function flipCard(){
  fcFlipped = !fcFlipped;
  var fc = document.getElementById('fc');
  if(fc) fc.classList.toggle('flipped', fcFlipped);
}
function fcNav(dir){
  var words = currentTheme.words || [];
  fcIndex = (fcIndex + dir + words.length) % words.length;
  fcFlipped = false;
  var fc = document.getElementById('fc');
  if(fc){ fc.classList.remove('flipped'); fc.innerHTML = fcCardHTML(words, fcIndex); }
  var ctr = document.getElementById('fcCounter');
  if(ctr) ctr.textContent = (fcIndex+1)+' / '+words.length;
  var ab = document.querySelector('.audio-btn-big');
  if(ab) ab.onclick = function(){ speak(words[fcIndex].fr); };
}

/* ========== ALPHABET TAB ========== */
var selectedLetter = null;
function renderAlphaTab(el, t){
  var words = t.words || [];
  var wrap = document.createElement('div');
  var grid = '<div class="alpha-grid">';
  words.forEach(function(w, i){
    grid += '<div class="alpha-card" onclick="selectLetter('+i+')"><div class="alpha-letter">'+w.fr+'</div><div class="alpha-name">'+w.es+'</div></div>';
  });
  grid += '</div>';
  grid += '<div class="alpha-detail" id="alphaDetail"><p style="color:#aaa;font-size:.8rem">Qubee filadhu — Clique sur une lettre</p></div>';
  wrap.innerHTML = grid;
  el.appendChild(wrap);
  selectedLetter = null;
}
function selectLetter(i){
  var w = currentTheme.words[i];
  selectedLetter = w;
  var det = document.getElementById('alphaDetail');
  if(!det) return;
  det.innerHTML = '<div style="font-size:3rem;margin-bottom:6px">'+w.em+'</div>'
    +'<div style="font-size:2rem;font-weight:900;color:#078930">'+w.fr+'</div>'
    +'<div style="font-size:1rem;color:#555;margin:6px 0">'+w.es+'</div>'
    +'<button class="audio-btn-big" onclick="speak(\''+escQ(w.fr)+'\')">🔊 Dhageeffadhu</button>';
}

/* ========== QUIZ TAB ========== */
var quizIdx = 0;
var quizScore = 0;
var quizAnswered = false;
var quizQuestions = [];
function renderQuizTab(el, t){
  quizQuestions = getQuizQuestions(t);
  quizIdx = 0; quizScore = 0; quizAnswered = false;
  renderQuizQuestion(el);
}
function renderQuizQuestion(el){
  if(!el) el = document.getElementById('tabContent');
  if(!el) return;
  el.innerHTML = '';
  var qs = quizQuestions;
  if(quizIdx >= qs.length){ renderQuizResult(el); return; }
  var q = qs[quizIdx];
  var wrap = document.createElement('div');
  var qHTML = '<div class="quiz-q">';
  if(q.audio) qHTML += '<button class="audio-btn-big" style="width:auto;padding:10px 20px;margin:0 auto 10px;display:block" onclick="speak(\''+escQ(q.audio)+'\')">🔊 Dhageeffadhu</button>';
  qHTML += '<div class="q-text">'+formatQ(q.q)+'</div></div>';
  qHTML += '<div class="quiz-options" id="quizOpts">';
  q.opts.forEach(function(opt, i){
    qHTML += '<div class="quiz-opt" onclick="answerQuiz('+i+')" id="qopt'+i+'">'+opt+'</div>';
  });
  qHTML += '</div>';
  qHTML += '<div class="quiz-feedback" id="quizFeedback"></div>';
  qHTML += '<div style="text-align:center;font-size:.8rem;color:#aaa;margin-top:6px">'+(quizIdx+1)+' / '+qs.length+'</div>';
  qHTML += '<button class="next-btn" id="nextBtn" onclick="nextQuestion()">Itti aanaa → Suivant</button>';
  wrap.innerHTML = qHTML;
  el.appendChild(wrap);
  quizAnswered = false;
}
function answerQuiz(i){
  if(quizAnswered) return;
  quizAnswered = true;
  var q = quizQuestions[quizIdx];
  var opts = document.querySelectorAll('.quiz-opt');
  opts.forEach(function(o){ o.classList.add('disabled'); });
  var fb = document.getElementById('quizFeedback');
  if(i === q.ans){
    quizScore++;
    opts[i].classList.add('correct');
    if(fb) fb.textContent = '✅ Sirriidha! Correct !';
  } else {
    opts[i].classList.add('wrong');
    opts[q.ans].classList.add('correct');
    if(fb) fb.textContent = '❌ Deebiin sirrii: '+q.opts[q.ans];
  }
  var nb = document.getElementById('nextBtn');
  if(nb) nb.style.display = 'block';
}
function nextQuestion(){
  quizIdx++;
  renderQuizQuestion(document.getElementById('tabContent'));
}

/* ========== QUIZ RESULT (commun) ========== */
function buildResultHTML(score, total, themeId){
  var pct = Math.round(score/total*100);
  var perfect = pct === 100;
  if(!progress[themeId]) progress[themeId]={};
  if(perfect){
    progress[themeId].done = true;
    progress[themeId].stars = 3;
  }
  saveProgress();
  var starStr = perfect ? '⭐⭐⭐' : (pct>=50 ? '⭐⭐☆' : '⭐☆☆');
  var msg = perfect
    ? 'Baayee gaarii! Kutaan mirkanaa\'e! ✅🎉'
    : (pct>=50 ? 'Gaarii! Irra deebi\'i 100% argachuuf!' : 'Irra deebi\'i yaali! Essaie encore !');
  /* Le bouton Réinitialiser apparaît dès que le chapitre est marqué done,
     même si on revient refaire le quiz après coup */
  var resetBtn = (progress[themeId] && progress[themeId].done)
    ? '<button class="retry-btn" style="background:#888;margin-bottom:8px;display:block;margin-left:auto;margin-right:auto" onclick="resetChapter()">🗑️ Réinitialiser ce chapitre</button>'
    : '';
  return resetBtn;
}

function renderQuizResult(el){
  var qs = quizQuestions;
  var pct = Math.round(quizScore/qs.length*100);
  var perfect = pct === 100;
  if(!progress[currentTheme.id]) progress[currentTheme.id]={};
  if(perfect){ progress[currentTheme.id].done=true; progress[currentTheme.id].stars=3; }
  saveProgress();
  var starStr = perfect ? '⭐⭐⭐' : (pct>=50 ? '⭐⭐☆' : '⭐☆☆');
  var msg = perfect ? 'Baayee gaarii! Kutaan mirkanaa\'e! ✅🎉' : (pct>=50 ? 'Gaarii! Irra deebi\'i 100% argachuuf!' : 'Irra deebi\'i yaali! Essaie encore !');
  var resetBtn = (progress[currentTheme.id] && progress[currentTheme.id].done)
    ? '<button class="retry-btn" style="background:#888;margin-bottom:8px;display:block;margin-left:auto;margin-right:auto" onclick="resetChapter()">🗑️ Réinitialiser ce chapitre</button>'
    : '';
  el.innerHTML = '<div class="result-box"><h3>Leçon terminée ! Kutaan xumuraamet!</h3>'
    +'<div class="score-num">'+quizScore+' / '+qs.length+'</div>'
    +'<div style="font-size:1.5rem;margin:8px 0">'+starStr+'</div>'
    +'<div style="color:#555;font-size:.9rem;margin-bottom:12px">'+pct+'% — '+msg+'</div>'
    +resetBtn
    +'<button class="retry-btn" onclick="renderQuizTab(document.getElementById(\'tabContent\'), currentTheme)">🔄 Irra deebi\'i / Réessayer</button>'
    +'<button class="retry-btn" style="background:#EF3340;margin-left:8px" onclick="showScreen(\'sections\')">📚 Leçons</button>'
    +'</div>';
}

/* ========== DIALOG TAB ========== */
var currentSit = 0;
function renderDialogTab(el, t){
  currentSit = 0;
  var situations = t.situations || [];
  var wrap = document.createElement('div');
  var nav = '<div class="sit-nav">';
  situations.forEach(function(s, i){
    nav += '<button class="sit-btn'+(i===0?' active':'')+'" onclick="switchSit('+i+')">'+s.label+'</button>';
  });
  nav += '</div>';
  wrap.innerHTML = nav + '<div id="dialogContent"></div>';
  el.appendChild(wrap);
  renderSituation(situations[0]);
}
function switchSit(i){
  currentSit = i;
  var situations = currentTheme.situations || [];
  document.querySelectorAll('.sit-btn').forEach(function(b,j){ b.classList.toggle('active', j===i); });
  renderSituation(situations[i]);
}
function renderSituation(sit){
  var dc = document.getElementById('dialogContent');
  if(!dc) return;
  var html = '<div class="dialogue-box">';
  html += '<div class="scene-img-big">'+sit.img+'</div>';
  html += '<div style="font-weight:700;font-size:.85rem;color:#555;margin-bottom:10px;text-align:center">'+sit.title+'</div>';
  html += '<div class="bubble-wrap">';
  sit.dialogue.forEach(function(line){
    html += '<div class="bubble '+line.side+'">';
    html += '<div class="speaker-name">'+line.s+'</div>';
    html += '<div class="msg-row"><div class="msg">'+line.fr+'</div>';
    html += '<button class="speak-bubble-btn" onclick="speak(\''+escQ(line.fr)+'\')">🔊</button>';
    html += '</div>';
    html += '<div class="bubble-translation">'+line.tr+'</div>';
    html += '</div>';
  });
  html += '</div></div>';
  dc.innerHTML = html;
}

/* ========== VOCAB TAB ========== */
function renderVocabTab(el, t){
  var vocab = t.vocab || [];
  var wrap = document.createElement('div');
  var html = '<div class="vocab-section"><div class="vocab-title">📖 Jechoota murtaa\'oo — Vocabulaire clé</div><div class="vocab-grid">';
  vocab.forEach(function(v){
    html += '<div class="vocab-chip" onclick="speakVocab(this, \''+escQ(v)+'\')">'+v+'</div>';
  });
  html += '</div></div>';
  html += '<div class="action-row"><button class="btn-start-quiz" onclick="currentTab=2;renderTabs()">📝 Commencer le quiz — Quizii eegali</button></div>';
  wrap.innerHTML = html;
  el.appendChild(wrap);
}
function speakVocab(el, v){ var fr = v.split('=')[0].trim(); speak(fr); }

/* ========== DIALOG QUIZ ========== */
var dqIdx=0, dqScore=0, dqAnswered=false, dqQuestions=[];
function renderQuizTabDialog(el, t){
  dqQuestions = t.quiz || [];
  dqIdx=0; dqScore=0; dqAnswered=false;
  renderDQuizQuestion(el);
}
function renderDQuizQuestion(el){
  if(!el) el=document.getElementById('tabContent');
  if(!el) return;
  el.innerHTML='';
  if(dqIdx>=dqQuestions.length){ renderDQuizResult(el); return; }
  var q=dqQuestions[dqIdx];
  var wrap=document.createElement('div');
  wrap.className='dialog-quiz-wrap';
  var html='<div class="quiz-q"><div class="q-text">'+formatQ(q.q)+'</div></div>';
  html+='<div class="quiz-options" id="dqOpts">';
  q.opts.forEach(function(opt,i){ html+='<div class="quiz-opt" onclick="answerDQuiz('+i+')" id="dqopt'+i+'">'+opt+'</div>'; });
  html+='</div>';
  html+='<div class="quiz-feedback" id="dqFeedback"></div>';
  html+='<div style="text-align:center;font-size:.8rem;color:#aaa;margin-top:6px">'+(dqIdx+1)+' / '+dqQuestions.length+'</div>';
  html+='<button class="next-btn" id="dqNextBtn" onclick="nextDQuestion()">Itti aanaa → Suivant</button>';
  wrap.innerHTML=html;
  el.appendChild(wrap);
  dqAnswered=false;
}
function answerDQuiz(i){
  if(dqAnswered) return;
  dqAnswered=true;
  var q=dqQuestions[dqIdx];
  var opts=document.querySelectorAll('#dqOpts .quiz-opt');
  opts.forEach(function(o){ o.classList.add('disabled'); });
  var fb=document.getElementById('dqFeedback');
  if(i===q.ans){ dqScore++; opts[i].classList.add('correct'); if(fb) fb.textContent='✅ Sirriidha!'; }
  else { opts[i].classList.add('wrong'); opts[q.ans].classList.add('correct'); if(fb) fb.textContent='❌ Deebiin sirrii: '+q.opts[q.ans]; }
  var nb=document.getElementById('dqNextBtn');
  if(nb) nb.style.display='block';
}
function nextDQuestion(){ dqIdx++; renderDQuizQuestion(document.getElementById('tabContent')); }
function renderDQuizResult(el){
  var pct=Math.round(dqScore/dqQuestions.length*100);
  var perfect=pct===100;
  if(!progress[currentTheme.id]) progress[currentTheme.id]={};
  if(perfect){ progress[currentTheme.id].done=true; progress[currentTheme.id].stars=3; }
  saveProgress();
  var starStr=perfect?'⭐⭐⭐':(pct>=50?'⭐⭐☆':'⭐☆☆');
  var msg=perfect?'Baayee gaarii! Kutaan mirkanaa\'e! ✅🎉':(pct>=50?'Gaarii! Irra deebi\'i 100% argachuuf!':'Irra deebi\'i yaali! Essaie encore !');
  var resetBtn = (progress[currentTheme.id] && progress[currentTheme.id].done)
    ? '<button class="retry-btn" style="background:#888;margin-bottom:8px;display:block;margin-left:auto;margin-right:auto" onclick="resetChapter()">🗑️ Réinitialiser ce chapitre</button>'
    : '';
  el.innerHTML='<div class="result-box"><h3>Quiz terminé! Quiziin xumuraamet!</h3>'
    +'<div class="score-num">'+dqScore+' / '+dqQuestions.length+'</div>'
    +'<div style="font-size:1.5rem;margin:8px 0">'+starStr+'</div>'
    +'<div style="color:#555;font-size:.9rem;margin-bottom:12px">'+pct+'% — '+msg+'</div>'
    +resetBtn
    +'<button class="retry-btn" onclick="renderQuizTabDialog(document.getElementById(\'tabContent\'), currentTheme)">🔄 Réessayer</button>'
    +'<button class="retry-btn" style="background:#EF3340;margin-left:8px" onclick="showScreen(\'sections\')">📚 Leçons</button>'
    +'</div>';
}

/* ========== UTILS ========== */
function escQ(s){ return (s||'').replace(/'/g,"\\'"); }

/* ========== INIT ========== */
renderSections();
