/* ========================================
   Afaan Oromoo → Français 🇪🇹 – Logique applicative
   Fonctions UI, état, navigation
   © 2026 Sébastien Godet
======================================== */

function speak(txt) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();

  var parts = (txt || '').split('/').map(function(p) { return p.trim(); }).filter(Boolean);

  function speakPart(i) {
    if (i >= parts.length) return;
    var u = new SpeechSynthesisUtterance(parts[i]);
    u.lang = 'om-ET'; // Code de langue officiel pour l'Oromo (Éthiopie)
    u.rate = 0.85;
    u.onend = function() {
      if (i + 1 < parts.length) {
        setTimeout(function() { speakPart(i + 1); }, 2000);
      }
    };
    speechSynthesis.speak(u);
  }

  speakPart(0);
}

function getQuizTotal(theme){
  var n=(theme.words||[]).length;
  if(n<10)return 5;
  if(n<=20)return 8;
  return 12;
}
function getQuizQuestions(theme){
  var qs=theme.quiz10||[];
  var total=getQuizTotal(theme);
  return qs.slice(0,total);
}

var done=[];
function loadDone(){try{done=JSON.parse(localStorage.getItem('pe_om_done_v1')||'[]');}catch(e){done=[];}}
function saveDone(){try{localStorage.setItem('pe_om_done_v1',JSON.stringify(done));}catch(e){}}
function markDone(id){if(!done.includes(id)){done.push(id);saveDone();}}
function resetTheme(id){done=done.filter(function(d){return d!==id;});saveDone();renderSections();renderHome();}
function isDone(id){return done.includes(id);}
loadDone();

function showScreen(id){
  document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('active');});
  document.getElementById(id).classList.add('active');
  if(id==='home')renderHome();
  if(id==='sections')renderSections();
}
function renderHome(){
  var total=ALL_THEMES.length,n=done.length,pct=Math.round(n/total*100);
  document.getElementById('homeBar').style.width=pct+'%';
  document.getElementById('homeBarLabel').textContent=n+' / '+total+' moojuloota xumuraman — '+pct+'%';
  document.getElementById('homeStars').innerHTML=Array.from({length:total},function(_,i){
    return '<span class="star">'+(i<n?'⭐':'☆')+'</span>';
  }).join('');
}
function renderSections(){
  var total=ALL_THEMES.length,n=done.length,pct=Math.round(n/total*100);
  document.getElementById('globalProgress').style.width=pct+'%';
  document.getElementById('progressLabel').textContent=n+' / '+total+' moojuloota — '+pct+'%';
  ['grid1','grid2'].forEach(function(gid){
    var lv=gid==='grid1'?1:2;
    document.getElementById(gid).innerHTML=ALL_THEMES.filter(function(t){return t.level===lv;}).map(function(t){
      return '<div class="theme-card'+(isDone(t.id)?' done':'')+'" onclick="openTheme(\''+t.id+'\')">'
        +'<div class="t-emoji">'+t.emoji+'</div>'
        +'<div class="t-name">'+t.name+'</div>'
        +'<div class="t-sub">'+t.sub+'</div>'
        +'<div class="t-stars">'+(isDone(t.id)?'⭐⭐⭐':'☆☆☆')+'</div>'
        +(isDone(t.id)?'<button onclick="event.stopPropagation();resetTheme(\''+t.id+'\')" style="margin-top:6px;font-size:.65rem;background:#fff;border:1.5px solid #009A44;color:#009A44;border-radius:50px;padding:4px 10px;cursor:pointer;font-weight:700">🔄 Irra deebiʼi</button>':'')
        +'</div>';
    }).join('');
  });
}

var CT=null;
var fcIdx=0;
var dqStep=0,dqScore=0,dqAnswered=false;
var sitIdx=0;
var q10Step=0,q10Score=0,q10Answered=false;

function openTheme(id){
  CT=ALL_THEMES.find(function(t){return t.id===id;});
  fcIdx=0;dqStep=0;dqScore=0;dqAnswered=false;sitIdx=0;
  q10Step=0;q10Score=0;q10Answered=false;
  document.getElementById('lessonEmoji').textContent=CT.emoji;
  document.getElementById('lessonTitle').textContent=CT.name+' — '+CT.sub;
  showScreen('lesson');
  var tabs;
  if(CT.type==='dialog'){
    tabs=[{k:'dialog',lbl:'💬 Haasaa'},{k:'vocab',lbl:'📚 Jechoota'},{k:'dquiz',lbl:'❓ Quiz'}];
  } else if(CT.type==='alpha'){
    tabs=[{k:'flash',lbl:'🔤 Qubee'},{k:'quiz10',lbl:'🔊 Quiz sagalee'}];
  } else {
    tabs=[{k:'flash',lbl:'🃏 Kaardii'},{k:'quiz10',lbl:'❓ Quiz'}];
  }
  document.getElementById('lessonTabs').innerHTML=tabs.map(function(t,i){
    return '<button class="tab'+(i===0?' active':'')+'" data-tab="'+t.k+'" onclick="switchTab(\''+t.k+'\')">'+t.lbl+'</button>';
  }).join('');
  switchTab(tabs[0].k);
}

function switchTab(tab){
  document.querySelectorAll('#lessonTabs .tab').forEach(function(b){b.classList.toggle('active',b.dataset.tab===tab);});
  if(tab==='flash')renderFlash();
  else if(tab==='quiz10'){q10Step=0;q10Score=0;q10Answered=false;renderQuiz10();}
  else if(tab==='dialog')renderDialog();
  else if(tab==='vocab')renderVocab();
  else if(tab==='dquiz'){dqStep=0;dqScore=0;dqAnswered=false;renderDialogQuiz();}
}

function renderFlash(){
  var w=CT.words,card=w[fcIdx];
  if(CT.type==='alpha'){
    document.getElementById('tabContent').innerHTML=
      '<div class="section-label">Qubee tuqi sassaabi dhaggeeffadhu!</div>'
      +'<div class="alpha-grid">'+w.map(function(c,i){
        return '<div class="alpha-card" onclick="pickAlpha('+i+')">'
          +'<div class="alpha-letter">'+c.es+'</div>' // '.es' conservé pour la compatibilité avec data.js
          +'<div class="alpha-name">'+c.fr+'</div></div>';
      }).join('')+'</div>'
      +'<div id="alphaDetail" class="alpha-detail">'+buildAlphaDetail(card)+'</div>';
    return;
  }
  var emFr=card.em?'<div class="fc-front-emoji">'+card.em+'</div>':'';
  var emBk=card.em?'<div class="fc-back-emoji">'+card.em+'</div>':'';
  var hasConj=card.conj&&card.conj.es&&card.conj.fr;
  var frontContent, backContent;
  if(hasConj){
    frontContent=emFr
      +'<div class="fc-front-word">'+card.es+'</div>'
      +'<div class="fc-conj">'+card.conj.es.map(function(l){return '<div class="fc-conj-line">'+l+'</div>';}).join('')+'</div>';
    backContent=emBk
      +'<div class="fc-back-word">'+card.fr+'</div>'
      +'<div class="fc-conj">'+card.conj.fr.map(function(l){return '<div class="fc-conj-line">'+l+'</div>';}).join('')+'</div>';
  } else {
    frontContent=emFr+'<div class="fc-front-word">'+card.es+'</div><div class="fc-front-hint">👆 Hiika argachuuf tuqi</div>';
    backContent=emBk+'<div class="fc-back-word">'+card.fr+'</div>';
  }
  document.getElementById('tabContent').innerHTML=
    '<div class="section-label">Gara duraa: Afaan Oromoo 🇪🇹 — Gara duubaa: français 🇫🇷 · Garagalchuuf tuqi!</div>'
    +'<div class="fc-wrap">'
    +'<div class="fc" id="fc" onclick="flipCard()">'
    +'<div class="fc-front">'+frontContent+'</div>'
    +'<div class="fc-back">'+backContent+'</div>'
    +'</div></div>'
    +'<div class="fc-nav">'
    +'<button onclick="prevCard()">← Duubatti</button>'
    +'<span class="fc-counter">'+(fcIdx+1)+' / '+w.length+'</span>'
    +'<button onclick="nextCard()">Fuulduratti →</button>'
    +'</div>'
    +'<button class="audio-btn-big" onclick="speak(\''+esc(card.es)+'\')">🔊 Afaan Oromoon dhaggeeffadhu</button>';
}


function buildAlphaDetail(c){
  return '<div style="font-size:2.5rem;font-weight:900;color:#009A44">'+c.es+'</div>'
    +'<div style="color:#555;margin:4px 0;font-size:.85rem">'+c.fr+'</div>'
    +'<button onclick="speak(\''+esc(c.es)+'\')" style="margin-top:10px;background:#009A44;color:#fff;border:none;border-radius:50px;padding:9px 18px;cursor:pointer;font-weight:700;min-height:44px">🔊 Dhaggeeffadhu</button>';
}

function pickAlpha(i){
  fcIdx=i;
  var card=CT.words[i];
  speak(card.es);
  var d=document.getElementById('alphaDetail');
  if(d)d.innerHTML=buildAlphaDetail(card);
}

function flipCard(){
  var fc=document.getElementById('fc');
  if(!fc)return;
  fc.classList.toggle('flipped');
  speak(CT.words[fcIdx].es);
}

function nextCard(){
  fcIdx=(fcIdx+1)%CT.words.length;
  renderFlash();
  setTimeout(function(){speak(CT.words[fcIdx].es);},300);
}
function prevCard(){
  fcIdx=(fcIdx-1+CT.words.length)%CT.words.length;
  renderFlash();
}

function isAlphaQuiz(){return CT&&CT.type==='alpha';}

function renderQuiz10(){
  var qs=getQuizQuestions(CT);
  var total=qs.length;
  if(!qs||!total){
    document.getElementById('tabContent').innerHTML='<div class="result-box"><p>Quiz hin jiru.</p></div>';
    return;
  }
  if(q10Step>=total){
    var pct=Math.round(q10Score/total*100);
    if(pct===100)markDone(CT.id);
    document.getElementById('tabContent').innerHTML='<div class="result-box">'
      +'<div style="font-size:3rem">'+(pct===100?'🌟':'💪')+'</div>'
      +'<h3>'+(pct===100?'Baayʼee gaarii! ✅':'Quiz xumurameera!')+'</h3>'
      +'<div class="score-num">'+q10Score+'/'+total+'</div>'
      +'<div style="font-size:1rem;margin:6px 0;color:'+(pct===100?'#009A44':'#EF2B2D')+'">'
      +(pct===100?'Moojulichi banameera! ⭐':'Mirkaneessuuf 100% isan barbaachisa. Ammas yaali!')+' </div>'
      +'<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:14px">'
      +'<button class="retry-btn" style="background:#888" onclick="q10Step=0;q10Score=0;q10Answered=false;renderQuiz10()">🔄 Ammas yaali</button>'
      +(pct===100?'<button class="retry-btn" onclick="renderSections();showScreen(\'sections\')">✓ Xumuri</button>':'')
      +'</div></div>';
    renderSections();return;
  }
  var q=qs[q10Step];
  if(isAlphaQuiz()){
    var opts=q.opts.map(function(o,i){
      return '<button class="quiz-opt" id="q10o'+i+'" onclick="checkQ10('+i+','+q.ans+')" style="font-size:1.4rem;font-weight:900;letter-spacing:2px">'+o+'</button>';
    }).join('');
    document.getElementById('tabContent').innerHTML=
      '<div class="alpha-audio-quiz">'
      +'<div class="alpha-audio-label">Dhaggeeffadhu qubee filadhu<br><small>Gaaffii '+(q10Step+1)+'/'+total+'</small></div>'
      +'<button class="alpha-audio-btn" id="playAudioBtn" onclick="playAlphaAudio(\''+esc(q.audio)+'\')" title="Dhaggeeffadhu">🔊</button>'
      +'<div style="font-size:.75rem;color:#aaa;margin-bottom:14px">Dhaggeeffachuuf cuqaasi</div>'
      +'<div class="quiz-options" style="grid-template-columns:1fr 1fr;gap:12px">'+opts+'</div>'
      +'<div class="quiz-feedback" id="q10fb"></div>'
      +'</div>';
    setTimeout(function(){playAlphaAudio(q.audio);},400);
    q10Answered=false;
    return;
  }
  var opts=q.opts.map(function(o,i){
    return '<button class="quiz-opt" id="q10o'+i+'" onclick="checkQ10('+i+','+q.ans+')">'+o+'</button>';
  }).join('');
  document.getElementById('tabContent').innerHTML=
    '<div class="dialog-quiz-wrap">'
    +'<div class="quiz-q">'
    +'<div class="q-text">Gaaffii '+(q10Step+1)+'/'+total+'<br><b>'+q.q+'</b></div>'
    +'</div>'
    +'<div class="quiz-options" style="grid-template-columns:1fr">'+opts+'</div>'
    +'<div class="quiz-feedback" id="q10fb"></div>'
    +'</div>';
  q10Answered=false;
}

function playAlphaAudio(letter){
  speak(letter);
  var btn=document.getElementById('playAudioBtn');
  if(btn){btn.style.transform='scale(0.9)';setTimeout(function(){btn.style.transform='scale(1)';},200);}
}

function checkQ10(chosen,correct){
  if(q10Answered)return;
  q10Answered=true;
  var qs=getQuizQuestions(CT);
  document.querySelectorAll('[id^=q10o]').forEach(function(b,i){
    b.classList.add('disabled');
    if(i===correct)b.classList.add('correct');
    else if(i===chosen&&chosen!==correct)b.classList.add('wrong');
  });
  if(chosen===correct)q10Score++;
  var correctWord=qs[q10Step].opts[correct];
  var fb=document.getElementById('q10fb');
  fb.textContent=chosen===correct?'✅ Sirrii dha! Baayʼee namatti tola!':'❌ Deebii sirriin: '+correctWord;
  fb.style.color=chosen===correct?'#009A44':'#c0392b';
  if(isAlphaQuiz()){
    if(chosen!==correct)setTimeout(function(){speak(qs[q10Step].audio);},300);
  } else {
    if(CT.words){
      var match=CT.words.find(function(w){return w.es===correctWord||w.fr===correctWord;});
      if(match)speak(match.es);
    }
  }
  setTimeout(function(){q10Step++;renderQuiz10();},1600);
}

function renderDialog(){
  var sits=CT.situations;
  var sitBtns=sits.map(function(s,i){
    return '<button class="sit-btn'+(i===sitIdx?' active':'')+'" onclick="pickSit('+i+')">'+s.label+'</button>';
  }).join('');
  var sit=sits[sitIdx];
  var bubbles=sit.dialogue.map(function(ln,i){
    return '<div class="bubble '+ln.side+'" style="opacity:0;transition:opacity .3s '+(i*.08)+'s" id="bl'+i+'">'
      +'<div class="speaker-name">'+ln.s+'</div>'
      +'<div class="msg-row">'
      +'<div class="msg">'+ln.es+'</div>' // '.es' préservé pour l'oromo
      +'<button class="speak-bubble-btn" onclick="speak(\''+esc(ln.es)+'\')" title="Dhaggeeffadhu">🔊</button>'
      +'</div>'
      +'<div class="bubble-translation">'+ln.fr+'</div>'
      +'</div>';
  }).join('');
  document.getElementById('tabContent').innerHTML=
    '<div class="sit-nav">'+sitBtns+'</div>'
    +'<div class="dialogue-box">'
    +'<div class="scene-img-big">'+sit.img+'</div>'
    +'<div class="bubble-wrap">'+bubbles+'</div>'
    +'</div>'
    +'<div class="action-row">'
    +'<button class="btn-start-quiz" onclick="switchTab(\'dquiz\')">Mini quiz ➜</button>'
    +'</div>';
  setTimeout(function(){document.querySelectorAll('[id^=bl]').forEach(function(b){b.style.opacity='1';});},80);
}
function pickSit(i){sitIdx=i;renderDialog();}

function renderVocab(){
  var chips=CT.vocab.map(function(v){
    var parts=v.split('=');
    var es=parts[0].trim();
    var fr=parts[1]?parts[1].trim():'';
    return '<span class="vocab-chip" onclick="speak(\''+esc(es)+'\')">'
      +'<span class="vocab-item-es">'+es+'</span>'
      +(fr?'<span class="vocab-item-fr">= '+fr+'</span>':'')
      +'</span>';
  }).join('');
  document.getElementById('tabContent').innerHTML=
    '<div class="vocab-section">'
    +'<div class="vocab-title">📚 Jechoota murteessoo — Tuqi dhaggeeffadhu!</div>'
    +'<div class="vocab-grid">'+chips+'</div>'
    +'</div>'
    +'<div class="action-row">'
    +'<button class="btn-start-quiz" onclick="switchTab(\'dquiz\')">Mini quiz ➜</button>'
    +'</div>';
}

function renderDialogQuiz(){
  var qs=CT.quiz;
  var total=qs.length;
  if(dqStep>=total){
    var pct=Math.round(dqScore/total*100);
    if(pct===100)markDone(CT.id);
    document.getElementById('tabContent').innerHTML='<div class="result-box">'
      +'<div style="font-size:3rem">'+(pct===100?'🎉':'💪')+'</div>'
      +'<h3>'+(pct===100?'Baayʼee gaarii! ✅':'Shaakaluu keessi fudhadhu!')+'</h3>'
      +'<div class="score-num">'+dqScore+'/'+total+'</div>'
      +'<div style="font-size:.9rem;margin-top:6px;color:'+(pct===100?'#009A44':'#EF2B2D')+'">'
      +(pct===100?'Moojulichi banameera! ⭐':'Mirkaneessuuf 100% isan barbaachisa. Ammas yaali!')+' </div>'
      +'<div style="display:flex;gap:8px;justify-content:center;margin-top:14px;flex-wrap:wrap">'
      +'<button class="retry-btn" style="background:#888" onclick="dqStep=0;dqScore=0;dqAnswered=false;renderDialogQuiz()">🔄 Ammas yaali</button>'
      +(pct===100?'<button class="retry-btn" onclick="renderSections();showScreen(\'sections\')">✓ Xumuri</button>':'')
      +'</div></div>';
    renderSections();return;
  }
  var q=qs[dqStep];
  var opts=q.opts.map(function(o,i){
    return '<button class="quiz-opt" id="dqo'+i+'" onclick="checkDQ('+i+','+q.ans+')">'+o+'</button>';
  }).join('');
  document.getElementById('tabContent').innerHTML=
    '<div class="dialog-quiz-wrap">'
    +'<div class="quiz-q">'
    +'<div class="q-text">Gaaffii '+(dqStep+1)+'/'+total+'<br><b>'+q.q+'</b></div>'
    +'</div>'
    +'<div class="quiz-options" style="grid-template-columns:1fr">'+opts+'</div>'
    +'<div class="quiz-feedback" id="dqfb"></div>'
    +'</div>';
  dqAnswered=false;
}

function checkDQ(chosen,correct){
  if(dqAnswered)return;
  dqAnswered=true;
  document.querySelectorAll('[id^=dqo]').forEach(function(b,i){
    b.classList.add('disabled');
    if(i===correct)b.classList.add('correct');
    else if(i===chosen&&chosen!==correct)b.classList.add('wrong');
  });
  if(chosen===correct)dqScore++;
  var fb=document.getElementById('dqfb');
  fb.textContent=chosen===correct?'✅ Sirrii dha! Baayʼee namatti tola!':'❌ Ammas yaali!';
  fb.style.color=chosen===correct?'#009A44':'#c0392b';
  setTimeout(function(){dqStep++;renderDialogQuiz();},1500);
}

function esc(s){return(s||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/"/g,'&quot;');}

renderHome();