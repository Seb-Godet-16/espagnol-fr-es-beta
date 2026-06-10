/* ========================================
   Français → Español Venezuela 🇻🇪 – Logique applicative
   Fonctions UI, état, navigation
   © 2026 Sébastien Godet
======================================== */

// ══ SPEECH ══
function speak(txt){
  if(!window.speechSynthesis)return;
  speechSynthesis.cancel();
  var u=new SpeechSynthesisUtterance(txt);
  u.lang='fr-FR';u.rate=0.85;
  speechSynthesis.speak(u);
}

// ══ QUIZ LENGTH LOGIC ══
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

// ══ LEVEL 1 THEMES ══

// ══ PERSISTENCE ══
var done=[];
function loadDone(){try{done=JSON.parse(localStorage.getItem('pf_done_v3')||'[]');}catch(e){done=[];}}
function saveDone(){try{localStorage.setItem('pf_done_v3',JSON.stringify(done));}catch(e){}}
function markDone(id){if(!done.includes(id)){done.push(id);saveDone();}}
function resetTheme(id){done=done.filter(function(d){return d!==id;});saveDone();renderSections();renderHome();}
function isDone(id){return done.includes(id);}
loadDone();

// ══ SCREENS ══
function showScreen(id){
  document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('active');});
  document.getElementById(id).classList.add('active');
  if(id==='home')renderHome();
  if(id==='sections')renderSections();
}
function renderHome(){
  var total=ALL_THEMES.length,n=done.length,pct=Math.round(n/total*100);
  document.getElementById('homeBar').style.width=pct+'%';
  document.getElementById('homeBarLabel').textContent=n+' / '+total+' modules completados — '+pct+'%';
  document.getElementById('homeStars').innerHTML=Array.from({length:total},function(_,i){
    return '<span class="star">'+(i<n?'⭐':'☆')+'</span>';
  }).join('');
}
function renderSections(){
  var total=ALL_THEMES.length,n=done.length,pct=Math.round(n/total*100);
  document.getElementById('globalProgress').style.width=pct+'%';
  document.getElementById('progressLabel').textContent=n+' / '+total+' modules — '+pct+'%';
  ['grid1','grid2'].forEach(function(gid){
    var lv=gid==='grid1'?1:2;
    document.getElementById(gid).innerHTML=ALL_THEMES.filter(function(t){return t.level===lv;}).map(function(t){
      return '<div class="theme-card'+(isDone(t.id)?' done':'')+'" onclick="openTheme(\''+t.id+'\')">'
        +'<div class="t-emoji">'+t.emoji+'</div>'
        +'<div class="t-name">'+t.name+'</div>'
        +'<div class="t-sub">'+t.sub+'</div>'
        +'<div class="t-stars">'+(isDone(t.id)?'⭐⭐⭐':'☆☆☆')+'</div>'
        +(isDone(t.id)?'<button onclick="event.stopPropagation();resetTheme(\''+t.id+'\')" style="margin-top:6px;font-size:.65rem;background:#fff;border:1.5px solid #ED2939;color:#ED2939;border-radius:50px;padding:4px 10px;cursor:pointer;font-weight:700">🔄 Reiniciar</button>':'')
        +'</div>';
    }).join('');
  });
}

// ══ LESSON STATE ══
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
    tabs=[{k:'dialog',lbl:'💬 Dialogue'},{k:'vocab',lbl:'📚 Vocab'},{k:'dquiz',lbl:'❓ Quiz'}];
  } else if(CT.type==='alpha'){
    tabs=[{k:'flash',lbl:'🔤 Lettres'},{k:'quiz10',lbl:'🔊 Quiz Audio'}];
  } else {
    tabs=[{k:'flash',lbl:'🃏 Cartes'},{k:'quiz10',lbl:'❓ Quiz'}];
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

// ══ FLASHCARDS — RECTO/VERSO STRICT ══
// RECTO : uniquement le mot français (+ emoji)
// VERSO : uniquement la traduction espagnole (+ emoji)
// La carte se retourne au toucher avec animation CSS 3D
function renderFlash(){
  var w=CT.words,card=w[fcIdx];

  if(CT.type==='alpha'){
    document.getElementById('tabContent').innerHTML=
      '<div class="section-label">¡Toca una letra y escúchala!</div>'
      +'<div class="alpha-grid">'+w.map(function(c,i){
        return '<div class="alpha-card" onclick="pickAlpha('+i+')">'
          +'<div class="alpha-letter">'+c.fr+'</div>'
          +'<div class="alpha-name">'+c.es+'</div></div>';
      }).join('')+'</div>'
      +'<div id="alphaDetail" class="alpha-detail">'+buildAlphaDetail(card)+'</div>';
    return;
  }

  var emFr = card.em ? '<div class="fc-front-emoji">'+card.em+'</div>' : '';
  var emBk = card.em ? '<div class="fc-back-emoji">'+card.em+'</div>' : '';

  document.getElementById('tabContent').innerHTML=
    '<div class="section-label">Recto : français — Verso : español · ¡Toca para voltear!</div>'
    +'<div class="fc-wrap">'
    +  '<div class="fc" id="fc" onclick="flipCard()">'
    // ── FACE AVANT : mot français uniquement ──
    +    '<div class="fc-front">'
    +      emFr
    +      '<div class="fc-front-word">'+card.fr+'</div>'
    +      '<div class="fc-front-hint">👆 Toca para ver la traducción</div>'
    +    '</div>'
    // ── FACE ARRIÈRE : traduction espagnole uniquement ──
    +    '<div class="fc-back">'
    +      emBk
    +      '<div class="fc-back-word">'+card.es+'</div>'
    +      '<div class="fc-back-hint">🇻🇪 Traducción</div>'
    +    '</div>'
    +  '</div>'
    +'</div>'
    +'<div class="fc-nav">'
    +  '<button onclick="prevCard()">← Anterior</button>'
    +  '<span class="fc-counter">'+(fcIdx+1)+' / '+w.length+'</span>'
    +  '<button onclick="nextCard()">Siguiente →</button>'
    +'</div>'
    +'<button class="audio-btn-big" onclick="speak(\''+esc(card.fr)+'\')">🔊 Escuchar en francés</button>';
}

function buildAlphaDetail(c){
  return '<div style="font-size:2.5rem;font-weight:900;color:#002395">'+c.fr+'</div>'
    +'<div style="color:#555;margin:4px 0;font-size:.85rem">'+c.es+'</div>'
    +'<button onclick="speak(\''+esc(c.fr)+'\')" style="margin-top:10px;background:#ED2939;color:#fff;border:none;border-radius:50px;padding:9px 18px;cursor:pointer;font-weight:700;min-height:44px">🔊 Écouter</button>';
}

function pickAlpha(i){
  fcIdx=i;
  var card=CT.words[i];
  speak(card.fr);
  var d=document.getElementById('alphaDetail');
  if(d)d.innerHTML=buildAlphaDetail(card);
}

function flipCard(){
  var fc=document.getElementById('fc');
  if(!fc)return;
  fc.classList.toggle('flipped');
  // Prononce le français sur les deux faces pour renforcer l'apprentissage
  speak(CT.words[fcIdx].fr);
}

function nextCard(){
  fcIdx=(fcIdx+1)%CT.words.length;
  renderFlash();
  setTimeout(function(){speak(CT.words[fcIdx].fr);},300);
}
function prevCard(){
  fcIdx=(fcIdx-1+CT.words.length)%CT.words.length;
  renderFlash();
}

// ══ QUIZ NIVEAU 1 ══
function isAlphaQuiz(){return CT&&CT.type==='alpha';}

function renderQuiz10(){
  var qs=getQuizQuestions(CT);
  var total=qs.length;
  if(!qs||!total){
    document.getElementById('tabContent').innerHTML='<div class="result-box"><p>Quiz no disponible.</p></div>';
    return;
  }
  if(q10Step>=total){
    var pct=Math.round(q10Score/total*100);
    if(pct===100)markDone(CT.id);
    document.getElementById('tabContent').innerHTML='<div class="result-box">'
      +'<div style="font-size:3rem">'+(pct===100?'🌟':'💪')+'</div>'
      +'<h3>'+(pct===100?'¡Perfecto! ✅':'¡Quiz terminado!')+'</h3>'
      +'<div class="score-num">'+q10Score+'/'+total+'</div>'
      +'<div style="font-size:1rem;margin:6px 0;color:'+(pct===100?'#4CAF50':'#ED2939')+'">'
      +(pct===100?'¡Módulo desbloqueado! ⭐':'Necesitas 100% para validar. ¡Inténtalo de nuevo!')+' </div>'
      +'<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:14px">'
      +'<button class="retry-btn" style="background:#888" onclick="q10Step=0;q10Score=0;q10Answered=false;renderQuiz10()">🔄 Reintentar</button>'
      +(pct===100?'<button class="retry-btn" onclick="renderSections();showScreen(\'sections\')">✓ Terminar</button>':'')
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
      +'<div class="alpha-audio-label">Escucha y elige la letra<br><small>Pregunta '+(q10Step+1)+'/'+total+'</small></div>'
      +'<button class="alpha-audio-btn" id="playAudioBtn" onclick="playAlphaAudio(\''+esc(q.audio)+'\')" title="Escuchar">🔊</button>'
      +'<div style="font-size:.75rem;color:#aaa;margin-bottom:14px">Presiona para escuchar</div>'
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
    +'<div class="q-text">Pregunta '+(q10Step+1)+'/'+total+'<br><b>'+q.q+'</b></div>'
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
  fb.textContent=chosen===correct?'✅ ¡Correcto! ¡Chévere!':'❌ Respuesta correcta: '+correctWord;
  fb.style.color=chosen===correct?'#4CAF50':'#ED2939';
  if(isAlphaQuiz()){
    if(chosen!==correct)setTimeout(function(){speak(qs[q10Step].audio);},300);
  } else {
    if(CT.words){
      var match=CT.words.find(function(w){return w.fr===correctWord||w.es===correctWord;});
      if(match)speak(match.fr);
    }
  }
  setTimeout(function(){q10Step++;renderQuiz10();},1600);
}

// ══ DIALOGUE ══
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
      +'<div class="msg">'+ln.fr+'</div>'
      +'<button class="speak-bubble-btn" onclick="speak(\''+esc(ln.fr)+'\')" title="Écouter">🔊</button>'
      +'</div>'
      +'<div class="bubble-translation">'+ln.tr+'</div>'
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
    var fr=parts[0].trim();
    var es=parts[1]?parts[1].trim():'';
    return '<span class="vocab-chip" onclick="speak(\''+esc(fr)+'\')">'
      +'<span class="vocab-item-fr">'+fr+'</span>'
      +(es?'<span class="vocab-item-es">= '+es+'</span>':'')
      +'</span>';
  }).join('');
  document.getElementById('tabContent').innerHTML=
    '<div class="vocab-section">'
    +'<div class="vocab-title">📚 Vocabulaire clé — ¡Toca para escuchar!</div>'
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
      +'<h3>'+(pct===100?'¡Perfecto! ✅':'¡Sigue practicando!')+'</h3>'
      +'<div class="score-num">'+dqScore+'/'+total+'</div>'
      +'<div style="font-size:.9rem;margin-top:6px;color:'+(pct===100?'#4CAF50':'#ED2939')+'">'
      +(pct===100?'¡Módulo desbloqueado! ⭐':'Necesitas 100% para validar. ¡Inténtalo de nuevo!')+' </div>'
      +'<div style="display:flex;gap:8px;justify-content:center;margin-top:14px;flex-wrap:wrap">'
      +'<button class="retry-btn" style="background:#888" onclick="dqStep=0;dqScore=0;dqAnswered=false;renderDialogQuiz()">🔄 Reintentar</button>'
      +(pct===100?'<button class="retry-btn" onclick="renderSections();showScreen(\'sections\')">✓ Terminar</button>':'')
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
    +'<div class="q-text">Pregunta '+(dqStep+1)+'/'+total+'<br><b>'+q.q+'</b></div>'
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
  fb.textContent=chosen===correct?'✅ ¡Correcto! ¡Chévere!':'❌ Inténtalo de nuevo.';
  fb.style.color=chosen===correct?'#4CAF50':'#ED2939';
  setTimeout(function(){dqStep++;renderDialogQuiz();},1500);
}

function esc(s){return(s||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/"/g,'&quot;');}

renderHome();
