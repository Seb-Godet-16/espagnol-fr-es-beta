#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Patch app.js and style.css with expanded onboarding guide."""

import re, sys

# ─────────────────────────────────────────────────────────────────────────────
# PATCH 1 — _closeOnboarding  (respect de la checkbox "Ne plus afficher")
# ─────────────────────────────────────────────────────────────────────────────

OLD_CLOSE = """\
function _closeOnboarding() {
  var overlay = document.getElementById('onboarding-modal');
  if (!overlay) return;

  /* Animation de sortie : retire la classe visible puis cache */
  overlay.classList.remove('ob-visible');

  /* Marquer comme vu pour ce mode */
  var key = (currentMode === 'learn_french') ? _OB_KEY_FR : _OB_KEY_OR;
  try { localStorage.setItem(key, '1'); } catch(e) {}
}"""

NEW_CLOSE = """\
function _closeOnboarding() {
  var overlay = document.getElementById('onboarding-modal');
  if (!overlay) return;

  /* Animation de sortie */
  overlay.classList.remove('ob-visible');

  /*
    Sauvegarde conditionnelle : respecte la case "Ne plus afficher".
    • Cochée (défaut)   → setItem   → le guide n'apparaît plus au démarrage
    • Décochée          → removeItem → le guide réapparaîtra au prochain lancement
    Si la checkbox est absente (contexte inattendu), on pose le flag comme avant.
  */
  var key     = (currentMode === 'learn_french') ? _OB_KEY_FR : _OB_KEY_OR;
  var checkEl = document.getElementById('ob-no-show-check');
  var doHide  = !checkEl || checkEl.checked;   /* true par défaut = comportement initial */
  try {
    if (doHide) localStorage.setItem(key, '1');
    else        localStorage.removeItem(key);
  } catch(e) {}
}"""


# ─────────────────────────────────────────────────────────────────────────────
# PATCH 2 — _buildOnboardingContent  (remplacement complet)
# ─────────────────────────────────────────────────────────────────────────────

NEW_BUILD = r"""/**
 * Construit et injecte le contenu de la modale selon le mode actif.
 * Textes entièrement bilingues : langue principale + langue secondaire
 * en italique pour que les deux types d'apprenants se repèrent.
 *
 * NOUVEAU (Juin 2026) :
 *   • Chips héro dans l'en-tête
 *   • Sections : Points forts, En chiffres, Comparaison, Remerciements, À propos
 *   • Section audio étendue (guide par plateforme)
 *   • Checkbox « Ne plus afficher » dans le footer
 */
function _buildOnboardingContent() {
  var isFr = isFrench();

  /* ══════════════════════════════════════════════════════
     EN-TÊTE  (titre, sous-titre, chips)
     ══════════════════════════════════════════════════════ */
  var title = isFr
    ? 'Bienvenue dans Taphad\'Meuh !'
    : 'Baga nagaan dhufte Taphad\'Meuh !';

  var subtitle = isFr
    ? 'Apprenez le Français pas à pas · Afaan Faransaayii tarkaanfiin baradhu'
    : 'Afaan Oromoo harʼa jalqabi · Commencez l\'Oromo dès aujourd\'hui';

  var chipsHtml = isFr
    ? '<span class="ob-chip">✅ Gratuit</span>'
      + '<span class="ob-chip">📱 Mobile &amp; ordi</span>'
      + '<span class="ob-chip">🔊 Audio inclus</span>'
      + '<span class="ob-chip">🇪🇹 Oromo authentique</span>'
      + '<span class="ob-chip">🎤 Répétition orale</span>'
      + '<span class="ob-chip">📲 Hors-ligne</span>'
    : '<span class="ob-chip">✅ Bilisaan</span>'
      + '<span class="ob-chip">📱 Bilbila &amp; PC</span>'
      + '<span class="ob-chip">🔊 Sagalee</span>'
      + '<span class="ob-chip">🇫🇷 Faransaayii</span>'
      + '<span class="ob-chip">🎤 Dubbii</span>'
      + '<span class="ob-chip">📲 Interneetii malee</span>';

  /* ══════════════════════════════════════════════════════
     BOUTON CTA  et  HINT RELECTURE
     ══════════════════════════════════════════════════════ */
  var startLabel = isFr
    ? '▶ Commencer l\'aventure !'
    : '▶ Jalqabi waltajjii kana !';

  var rereadHint = isFr
    ? 'Vous pourrez relire ce guide depuis le lien <a onclick="showOnboardingGuide()">Aide</a> en bas de chaque page.'
    : 'Gargaarsa kana booda irra deebʼanii <a onclick="showOnboardingGuide()">Gargaarsa</a> jedhu cuqaasuun dubbisuu dandeessu.';

  /* ══════════════════════════════════════════════════════
     CHECKBOX « Ne plus afficher »
     Cochée par défaut → comportement initial préservé.
     ══════════════════════════════════════════════════════ */
  var noShowLabel = isFr
    ? 'Ne plus afficher ce guide au démarrage'
    : 'Eegalee kanaan hin agarsiisin';
  var noShowHint = isFr
    ? '<em>Vous pourrez le rouvrir via le lien Aide en bas de page.</em>'
    : '<em>Gargaarsa irra deebi\'uuf fuula jalqabaa gaditti cuqaasi.</em>';
  var noShowHtml = '<label class="ob-no-show">'
    + '<input type="checkbox" id="ob-no-show-check" checked>'
    + '<span>' + noShowLabel + '</span>'
    + '</label>'
    + '<p class="ob-no-show-hint">' + noShowHint + '</p>';

  /* ══════════════════════════════════════════════════════
     SECTION 1 — NAVIGATION
     ══════════════════════════════════════════════════════ */
  var bodyNav = isFr
    ? '<ul>'
      + '<li><strong>Écran d\'accueil</strong> : votre tableau de bord — progression globale et étoiles gagnées.</li>'
      + '<li><strong>Modules (📚)</strong> : 32 thèmes de vocabulaire (Niveau 1) + 16 dialogues de situation (Niveau 2).</li>'
      + '<li><strong>Dans chaque module</strong> : plusieurs onglets — <em>Cartes, Vocabulaire, Quiz, Dialogue, Répète</em>.</li>'
      + '<li>Le bouton <strong>←</strong> remonte toujours d\'un niveau.</li>'
      + '</ul>'
      + '<div class="ob-tip">💡 Commencez par le Niveau 1 — les dialogues du Niveau 2 seront plus faciles ensuite !</div>'
    : '<ul>'
      + '<li><strong>Fuula duraa</strong> : daashboordii keessan — tartiiba guutuu fi urjii argattan agarsiisa.</li>'
      + '<li><strong>Moojuulota (📚)</strong> : jechoota sadarkaa 1 (thèmes 32) + haasaa sadarkaa 2 (dialogues 16).</li>'
      + '<li><strong>Moojuula tokko tokkoon</strong> keessa: <em>Kaardota, Jechootaa, Quiz, Dubbii, Irra deebʼi</em>.</li>'
      + '<li>Fuula <strong>←</strong> irra deebiʼuuf fayyadami.</li>'
      + '</ul>'
      + '<div class="ob-tip">💡 Sadarkaa 1 irraa jalqabi — booda sadarkaa 2 salphaa ta\'a !</div>';

  /* ══════════════════════════════════════════════════════
     SECTION 2 — POINTS FORTS
     ══════════════════════════════════════════════════════ */
  var featData = [
    {
      i: '🔊',
      t: isFr ? 'Audio intégré'         : 'Sagalee',
      d: isFr ? 'Chaque mot s\'écoute en un clic, avec la bonne prononciation.'
              : 'Jecha tokko tokko cuqaasaan dhageeffata.'
    },
    {
      i: '🎤',
      t: isFr ? 'Répétition orale'      : 'Irra deebi\'i',
      d: isFr ? 'Feedback immédiat : vert ✅ si correct, orange 🔁 pour réessayer.'
              : 'Deebii hatattamaa : ✅ yookiin 🔁 irra deebi\'uuf.'
    },
    {
      i: '🃏',
      t: isFr ? 'Cartes Flash'          : 'Kaardota',
      d: isFr ? 'Conjugaisons complètes incluses pour chaque verbe.'
              : 'Hirmaata naannoo guutuu fi maqaa waliin.'
    },
    {
      i: '❓',
      t: isFr ? 'Quiz aléatoires'       : 'Quiz',
      d: isFr ? 'Questions mélangées à chaque partie — jamais deux fois le même quiz.'
              : 'Gaafilee walgeeddarsa — yeroo hunda adda.'
    },
    {
      i: '💬',
      t: isFr ? 'Dialogues réels'       : 'Haasaa',
      d: isFr ? 'Mise en situation (marché, voyage…) + vocabulaire clé + quiz.'
              : 'Haasa guyyaa guyyaa + jechootaa + quiz.'
    },
    {
      i: '📈',
      t: isFr ? 'Progression sauvegardée' : 'Tartiiba',
      d: isFr ? 'Ton avancement est conservé automatiquement sur ton appareil.'
              : 'Tartiibni kee meeshaa kee irratti yaadatama.'
    },
    {
      i: '📲',
      t: isFr ? 'Hors-ligne'            : 'Interneetii malee',
      d: isFr ? 'Installable sur l\'écran d\'accueil — fonctionne sans connexion.'
              : 'Fuula jalqabarratti buusi — interneetii malee hojjeta.'
    }
  ];
  var bodyPoints = '<div class="ob-feat-grid">'
    + featData.map(function(c) {
        return '<div class="ob-feat-card">'
          + '<div class="ob-feat-icon">' + c.i + '</div>'
          + '<div class="ob-feat-title">' + c.t + '</div>'
          + '<div class="ob-feat-desc">'  + c.d + '</div>'
          + '</div>';
      }).join('')
    + '</div>';

  /* ══════════════════════════════════════════════════════
     SECTION 3 — EN CHIFFRES
     ══════════════════════════════════════════════════════ */
  var statsLabel1 = isFr ? 'Thèmes vocab.'  : 'Jechootaa';
  var statsLabel2 = isFr ? 'Dialogues'      : 'Haasaa';
  var statsLabel3 = isFr ? 'Modules total'  : 'Moojuulota';
  var bodyStats = '<div class="ob-stats-row">'
    + '<div class="ob-stat"><div class="ob-stat-num">32</div><div class="ob-stat-label">' + statsLabel1 + '</div></div>'
    + '<div class="ob-stat"><div class="ob-stat-num">16</div><div class="ob-stat-label">' + statsLabel2 + '</div></div>'
    + '<div class="ob-stat"><div class="ob-stat-num">48</div><div class="ob-stat-label">' + statsLabel3 + '</div></div>'
    + '</div>';

  /* ══════════════════════════════════════════════════════
     SECTION 4 — CARTES FLASH (inchangée)
     ══════════════════════════════════════════════════════ */
  var bodyFlash = isFr
    ? '<p>Chaque carte montre un mot en Français. <strong>Tapez dessus</strong> pour voir la traduction en Oromo et entendre la prononciation.</p>'
      + '<ul>'
      + '<li>Bouton <strong>🔊</strong> : écouter le mot prononcé.</li>'
      + '<li>Boutons <strong>‹ ›</strong> : passer à la carte suivante ou précédente.</li>'
      + '<li>La carte se <strong>retourne</strong> pour révéler la traduction.</li>'
      + '</ul>'
      + '<div class="ob-tip">💡 Écoutez plusieurs fois avant de passer au Quiz !</div>'
    : '<p>Kaardni tokko jecha Oromoo agarsiisa. <strong>Cuqaasi</strong> sagalee dhageeffachuu fi hiika Faransaayii argachuuf.</p>'
      + '<ul>'
      + '<li>Caancala <strong>🔊</strong> : sagalee dhageeffadhu.</li>'
      + '<li>Caancalota <strong>‹ ›</strong> : kaardii itti aanu yookiin kan darbee ilaali.</li>'
      + '<li>Kaardiin <strong>garagalti</strong> hiika agarsisuuf.</li>'
      + '</ul>'
      + '<div class="ob-tip">💡 Dura sagalee dhageeffadhu, booda Quiz gali !</div>';

  /* ══════════════════════════════════════════════════════
     SECTION 5 — QUIZ ET ÉTOILES (inchangée)
     ══════════════════════════════════════════════════════ */
  var bodyQuiz = isFr
    ? '<p>Après les cartes, testez-vous avec le <strong>Quiz 10 questions</strong>. Choisissez la bonne réponse parmi 4 options.</p>'
      + '<ul>'
      + '<li><strong>⭐</strong> : ≥ 50 % de bonnes réponses → module validé !</li>'
      + '<li><strong>⭐⭐</strong> : ≥ 75 % — Très bien !</li>'
      + '<li><strong>⭐⭐⭐</strong> : 100 % — Parfait ! 🎉</li>'
      + '</ul>'
      + '<p>Les étoiles ne <strong>diminuent jamais</strong> : seul votre meilleur score est conservé.</p>'
      + '<div class="ob-tip">💡 Il faut au moins ⭐ (50 %) pour valider un module et débloquer la barre de progression.</div>'
    : '<p>Kaardota booda, <strong>Quiz gaafii 10</strong> waliin of-qori. Deebii sirrii 4 keessaa tokko filadhu.</p>'
      + '<ul>'
      + '<li><strong>⭐</strong> : ≥ 50 % sirrii → kutaan darbe !</li>'
      + '<li><strong>⭐⭐</strong> : ≥ 75 % — Baayʼee gaari !</li>'
      + '<li><strong>⭐⭐⭐</strong> : 100 % — Baayʼee bareedaa ! 🎉</li>'
      + '</ul>'
      + '<p>Urjiilee <strong>hir\'atan hin beekani</strong> : madaala keessan gaarii ta\'e qofti yaadatama.</p>'
      + '<div class="ob-tip">💡 Kutaa darbuuf xiqqaate ⭐ (50 %) barbaachisa.</div>';

  /* ══════════════════════════════════════════════════════
     SECTION 6 — ONGLET RÉPÈTE (inchangé)
     ══════════════════════════════════════════════════════ */
  var bodyRepete = isFr
    ? '<p>L\'onglet <strong>Répète</strong> utilise le microphone de votre appareil pour vous faire pratiquer la prononciation :</p>'
      + '<ul>'
      + '<li>Appuyez sur <strong>🔊 Écouter</strong> pour entendre le mot.</li>'
      + '<li>Appuyez sur <strong>🎙️ Parler</strong> et prononcez le mot.</li>'
      + '<li>L\'app compare votre prononciation et donne un retour immédiat.</li>'
      + '</ul>'
      + '<div class="ob-tip">💡 Cette fonctionnalité nécessite l\'autorisation d\'accès au microphone. Elle peut ne pas être disponible sur tous les navigateurs.</div>'
    : '<p>Onglet <strong>Irra deebʼi</strong> qoʼannaa sagalee gargaaruuf maaykiroofoonii meeshaa kee fayyadama :</p>'
      + '<ul>'
      + '<li><strong>🔊 Dhageeffadhu</strong> cuqaasi — jecha dhaggeeffadhu.</li>'
      + '<li><strong>🎙️ Dubbadhu</strong> cuqaasi — jecha dubbadhuu.</li>'
      + '<li>Appiin sagalee kee madaalu, deebii ariifataa kenni.</li>'
      + '</ul>'
      + '<div class="ob-tip">💡 Hojii kanaaf hayyama maaykiroofoonii barbaachisa. Browser mara irratti hin hojjetu.</div>';

  /* ══════════════════════════════════════════════════════
     SECTION 7 — INSTALLER L'APP (inchangée)
     ══════════════════════════════════════════════════════ */
  var bodyInstall = isFr
    ? '<p>Taphad\'Meuh peut être <strong>installée sur votre téléphone</strong> comme une vraie app, sans passer par un store :</p>'
      + '<ul>'
      + '<li><strong>Android / Chrome</strong> : touchez le menu ⋮ puis <em>« Ajouter à l\'écran d\'accueil »</em>.</li>'
      + '<li><strong>iOS / Safari</strong> : touchez 🔗 puis <em>« Sur l\'écran d\'accueil »</em>.</li>'
      + '</ul>'
      + '<p>Une fois installée, l\'app fonctionne <strong>entièrement hors-ligne</strong> — idéal pour apprendre sans connexion !</p>'
    : '<p>Taphad\'Meuh bilbila kee irratti <strong>app dhugaa ta\'ee</strong> buusuun danda\'ama, store malee :</p>'
      + '<ul>'
      + '<li><strong>Android / Chrome</strong> : ⋮ cuqaasi booda <em>« Fuula jalqabarratti ida\'i »</em>.</li>'
      + '<li><strong>iOS / Safari</strong> : 🔗 cuqaasi booda <em>« Fuula jalqabarratti »</em>.</li>'
      + '</ul>'
      + '<p>Erga buufamee booda, interneetii malee <strong>hojjeta</strong> — barachuu iddoo kamittiyyuu !</p>';

  /* ══════════════════════════════════════════════════════
     SECTION 8 — CONFIGURER L'AUDIO  (étendue par plateforme)
     ══════════════════════════════════════════════════════ */
  var audioIntro = isFr
    ? '<p>L\'appli utilise la <strong>synthèse vocale</strong> intégrée à ton téléphone ou navigateur (Web Speech API). Si le son est absent, robotique ou dans la mauvaise langue, voici comment corriger selon ton appareil.</p>'
    : '<p>Appiin <strong>sagalee</strong> bilbila kee keessaa (Web Speech API) fayyadama. Sagaleen hin dhageeffamne yoo ta\'e, tartiibawwan armaan gadii hordofi.</p>';

  var audioAndroid = isFr
    ? '<div class="ob-audio-os">🤖 Android</div>'
      + '<div class="ob-audio-block">'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">1</span><span>Ouvre <strong>Paramètres</strong> → <strong>Accessibilité</strong> → <strong>Synthèse vocale</strong>.</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">2</span><span>Dans <strong>Moteur préféré</strong>, choisis <strong>Google Text-to-Speech</strong> et mets-le à jour via le Play Store.</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">3</span><span>Clique sur ⚙️ → <strong>Installer les données vocales</strong> → télécharge la voix <strong>Français (France)</strong>.</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">4</span><span>Reviens dans l\'appli et actualise la page.</span></div>'
      + '<div class="ob-tip">💡 Sur Samsung : <em>Paramètres → Accessibilité → TTS</em>. Les voix s\'y téléchargent aussi.</div>'
      + '</div>'
    : '<div class="ob-audio-os">🤖 Android</div>'
      + '<div class="ob-audio-block">'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">1</span><span><strong>Settings</strong> → <strong>Accessibility</strong> → <strong>Text-to-Speech</strong> bani.</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">2</span><span><strong>Google Text-to-Speech</strong> filadhu, Play Store irraa update godhii.</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">3</span><span>⚙️ → <strong>Install voice data</strong> → <strong>Français (France)</strong> buusi.</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">4</span><span>Gara appitti deebi\'ii fuula haaromsi.</span></div>'
      + '</div>';

  var audioIos = isFr
    ? '<div class="ob-audio-os">🍎 iPhone / iPad (iOS)</div>'
      + '<div class="ob-audio-block">'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">1</span><span>Ouvre <strong>Réglages</strong> → <strong>Accessibilité</strong> → <strong>Contenu énoncé</strong> → <strong>Voix</strong>.</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">2</span><span>Sélectionne <strong>Français</strong>, choisis une voix et télécharge-la en qualité <em>Améliorée</em>.</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">3</span><span>Ouvre l\'appli dans <strong>Safari</strong> (recommandé sur iOS) et tape sur 🔊 une première fois — iOS demande une interaction avant d\'autoriser l\'audio.</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">4</span><span>Si rien ne sort, vérifie que le <strong>bouton silencieux</strong> sur le côté est désactivé.</span></div>'
      + '<div class="ob-tip">💡 L\'onglet 🎤 Répète n\'est disponible que sur Safari iOS 14.5+ et Chrome Android — pas sur Firefox mobile.</div>'
      + '</div>'
    : '<div class="ob-audio-os">🍎 iPhone / iPad (iOS)</div>'
      + '<div class="ob-audio-block">'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">1</span><span><strong>Settings</strong> → <strong>Accessibility</strong> → <strong>Spoken Content</strong> → <strong>Voices</strong> bani.</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">2</span><span><strong>French</strong> filadhu, sagalee tokko buusi — <em>Enhanced</em> quality fili.</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">3</span><span>Appii <strong>Safari</strong> keessatti bani; 🔊 cuqaasi dura — iOS hayyama barbaada.</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">4</span><span>Sagaleen hin baane yoo ta\'e, <strong>silent switch</strong> cinaa ilaali — cufaa ta\'uu hin qabu.</span></div>'
      + '</div>';

  var audioPc = isFr
    ? '<div class="ob-audio-os">💻 Ordinateur (Windows / Mac)</div>'
      + '<div class="ob-audio-block">'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">1</span><span><strong>Chrome</strong> ou <strong>Edge</strong> sont recommandés — ils embarquent de bonnes voix et supportent la reconnaissance vocale.</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">2</span><span><strong>Windows</strong> : <em>Paramètres → Heure et langue → Parole → Ajouter des voix</em> — installe <strong>Français (France)</strong>.</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">3</span><span><strong>Mac</strong> : <em>Préférences Système → Accessibilité → Contenu parlé → Voix système</em> — télécharge <strong>Thomas</strong> (FR).</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">4</span><span>Redémarre le navigateur après installation — les nouvelles voix sont détectées au chargement.</span></div>'
      + '</div>'
    : '<div class="ob-audio-os">💻 Kompiyuutara (Windows / Mac)</div>'
      + '<div class="ob-audio-block">'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">1</span><span><strong>Chrome</strong> yookiin <strong>Edge</strong> fayyadami — sagalee gaarii fi dubbii wallaaluu ni danda\'u.</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">2</span><span><strong>Windows</strong> : <em>Settings → Time &amp; Language → Speech → Add voices</em> — <strong>French (France)</strong> buusi.</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">3</span><span><strong>Mac</strong> : <em>System Preferences → Accessibility → Spoken Content → System Voice</em> — <strong>Thomas</strong> (FR) buusi.</span></div>'
      + '<div class="ob-audio-step"><span class="ob-audio-step-num">4</span><span>Browser dhaabi booda irra deebi\'i bani — sagaleen haaraan ni mul\'ata.</span></div>'
      + '</div>';

  var audioHelp = isFr
    ? '<div class="ob-audio-help">'
      + '<strong>🆘 Toujours un problème ?</strong>'
      + '<p>Si après ces étapes l\'audio ne fonctionne pas, le problème vient d\'un réglage spécifique à ton modèle. Contacte le support :</p>'
      + '<div class="ob-audio-contacts">'
      + '<a class="ob-contact-btn" href="https://support.google.com/android/" target="_blank">🤖 Support Android</a>'
      + '<a class="ob-contact-btn" href="https://support.apple.com/fr-fr/contact" target="_blank">🍎 Support Apple</a>'
      + '<a class="ob-contact-btn" href="https://www.samsung.com/fr/support/" target="_blank">📱 Support Samsung</a>'
      + '<a class="ob-contact-btn" href="https://www.microsoft.com/fr-fr/support" target="_blank">💻 Support Microsoft</a>'
      + '</div>'
      + '<p><em>Pour Xiaomi, Oppo, OnePlus… : recherche « synthèse vocale + [nom de ton téléphone] » sur le site du fabricant.</em></p>'
      + '</div>'
    : '<div class="ob-audio-help">'
      + '<strong>🆘 Ammas rakkoo jira ?</strong>'
      + '<p>Tartiibawwan kana booda sagaleen hin hojjenne yoo ta\'e, meeshicha gosa irratti hundaa\'e ta\'uu danda\'a. Support qunnamtii :</p>'
      + '<div class="ob-audio-contacts">'
      + '<a class="ob-contact-btn" href="https://support.google.com/android/" target="_blank">🤖 Android Support</a>'
      + '<a class="ob-contact-btn" href="https://support.apple.com/contact" target="_blank">🍎 Apple Support</a>'
      + '<a class="ob-contact-btn" href="https://www.samsung.com/global/galaxy/apps/samsung-members/" target="_blank">📱 Samsung Support</a>'
      + '</div>'
      + '</div>';

  var bodyAudio = audioIntro + audioAndroid + audioIos + audioPc + audioHelp;

  /* ══════════════════════════════════════════════════════
     SECTION 9 — COMPARAISON
     ══════════════════════════════════════════════════════ */
  var vsThisApp = isFr
    ? '<div class="ob-vs-card ob-vs-card--highlight">'
      + '<div class="ob-vs-card-head"><span>📱</span> Cette appli</div>'
      + '<div class="ob-vs-chips">'
      + '<span class="ob-vs-chip">💸 100 % gratuit</span>'
      + '<span class="ob-vs-chip">🚫 Sans inscription</span>'
      + '<span class="ob-vs-chip">🗂️ Vocabulaire structuré</span>'
      + '<span class="ob-vs-chip">🇪🇹 Oromo authentique</span>'
      + '<span class="ob-vs-chip">🎤 Répétition orale</span>'
      + '<span class="ob-vs-chip">💬 Dialogues réels</span>'
      + '<span class="ob-vs-chip">📴 Fonctionne hors-ligne</span>'
      + '</div></div>'
    : '<div class="ob-vs-card ob-vs-card--highlight">'
      + '<div class="ob-vs-card-head"><span>📱</span> Appii kana</div>'
      + '<div class="ob-vs-chips">'
      + '<span class="ob-vs-chip">💸 Bilisaan</span>'
      + '<span class="ob-vs-chip">🚫 Galmaa\'uu hin barbaachisu</span>'
      + '<span class="ob-vs-chip">🗂️ Jechootaa tartiibaan</span>'
      + '<span class="ob-vs-chip">🇫🇷 Faransaayii dhugaa</span>'
      + '<span class="ob-vs-chip">🎤 Dubbii</span>'
      + '<span class="ob-vs-chip">💬 Haasaa dhugaa</span>'
      + '<span class="ob-vs-chip">📴 Interneetii malee</span>'
      + '</div></div>';

  var vsChipsLabel = isFr ? 'Duolingo / Babbel' : 'Duolingo / Babbel';
  var vsDuo = '<div class="ob-vs-card">'
    + '<div class="ob-vs-card-head"><span>🦉</span> ' + vsChipsLabel + '</div>'
    + '<div class="ob-vs-chips">'
    + '<span class="ob-vs-chip">' + (isFr ? '🎮 Gamification motivante'     : '🎮 Taphoota kakaasoo') + '</span>'
    + '<span class="ob-vs-chip">' + (isFr ? '🌐 Large catalogue de langues'  : '🌐 Afaanota baay\'ee') + '</span>'
    + '<span class="ob-vs-chip">' + (isFr ? '🎯 Parcours adaptatif'          : '🎯 Guddina sirna') + '</span>'
    + '<span class="ob-vs-chip">' + (isFr ? '👥 Communauté et classements'   : '👥 Hawaasa') + '</span>'
    + '</div></div>';

  var vsSchool = '<div class="ob-vs-card">'
    + '<div class="ob-vs-card-head"><span>🏫</span> ' + (isFr ? 'École de langue' : 'Mana barumsaa') + '</div>'
    + '<div class="ob-vs-chips">'
    + '<span class="ob-vs-chip">' + (isFr ? '🧑‍🏫 Enseignant humain'        : '🧑‍🏫 Barsiisaa namaa') + '</span>'
    + '<span class="ob-vs-chip">' + (isFr ? '🗣️ Pratique entre apprenants'  : '🗣️ Barattota waliin') + '</span>'
    + '<span class="ob-vs-chip">' + (isFr ? '🎓 Certification reconnue'      : '🎓 Ragaa') + '</span>'
    + '<span class="ob-vs-chip">' + (isFr ? '📐 Grammaire approfondie'       : '📐 Akkam dubbatamu') + '</span>'
    + '</div></div>';

  var vsImmersion = '<div class="ob-vs-card">'
    + '<div class="ob-vs-card-head"><span>🗣️</span> ' + (isFr ? 'Immersion / Amis natifs' : 'Hawaasa / Hiriyoota') + '</div>'
    + '<div class="ob-vs-chips">'
    + '<span class="ob-vs-chip">' + (isFr ? '🌍 Langue vivante et authentique' : '🌍 Afaan jireenyaa') + '</span>'
    + '<span class="ob-vs-chip">' + (isFr ? '🎙️ Accent naturel'               : '🎙️ Karaa uumamaa') + '</span>'
    + '<span class="ob-vs-chip">' + (isFr ? '💪 Confiance en soi'             : '💪 Ofitti amanamummaa') + '</span>'
    + '<span class="ob-vs-chip">' + (isFr ? '🤝 Échanges culturels'           : '🤝 Walta\'iinsa aadaa') + '</span>'
    + '</div></div>';

  var vsTip = isFr
    ? '<div class="ob-vs-tip">💡 <strong>Notre conseil :</strong> aucun outil ne suffit seul — c\'est leur <strong>complémentarité</strong> qui fait progresser vite. Utilise cette appli pour <strong>construire ta base de vocabulaire</strong> dès le premier jour, sans pression. Appuie-toi ensuite sur Duolingo ou une école pour structurer ta grammaire, et pratique avec des natifs pour gagner en fluidité. <strong>Combine-les plutôt que d\'en choisir un seul !</strong></div>'
    : '<div class="ob-vs-tip">💡 <strong>Gorsa keenya :</strong> meeshaan tokko qofti ga\'aa miti — <strong>walitti makuu</strong>n saffisa guddina. Appii kana fayyadami <strong>jechootaa jalqabaa ijaaruuf</strong>, yeroo qabdutti. Booda Duolingo yookiin mana barumsaatti fayyadami akkam dubbatamu barattef, fi namoota barsiisoniin of-shaakali. <strong>Mara walitti makami — tokko qofatti hin lakkisin!</strong></div>';

  var bodyVs = '<div class="ob-vs-list">'
    + vsThisApp + vsDuo + vsSchool + vsImmersion
    + '</div>' + vsTip;

  /* ══════════════════════════════════════════════════════
     SECTION 10 — REMERCIEMENTS
     ══════════════════════════════════════════════════════ */
  var bodyCredits = isFr
    ? '<div class="ob-bio-card">'
      + '<p>Un grand merci à <strong>Fédérico Calo</strong>'
      + ' (<a href="https://www.linkedin.com/in/federicocalo/" target="_blank">Architecte Développeur Web</a>)'
      + ' pour son aide technique précieuse tout au long du projet.</p>'
      + '<p>Merci beaucoup à <strong>Mussa Sembro</strong>'
      + ' (<a href="https://www.linkedin.com/in/mussa-sembro-137472174/" target="_blank">Traducteur-Interprète en Oromo</a>)'
      + ' pour son travail de traduction, ses corrections et ses précieux conseils linguistiques sur l\'Afaan Oromoo.</p>'
      + '<p>Merci enfin à mes <strong>parents</strong> pour leur relecture attentive, leurs corrections sur les traductions et leurs conseils sur l\'ergonomie de l\'application.</p>'
      + '</div>'
    : '<div class="ob-bio-card">'
      + '<p><strong>Fédérico Calo</strong>'
      + ' (<a href="https://www.linkedin.com/in/federicocalo/" target="_blank">Architecte Développeur Web</a>)'
      + ' — gargaarsa teknikaatiif galatoomaa.</p>'
      + '<p><strong>Mussa Sembro</strong>'
      + ' (<a href="https://www.linkedin.com/in/mussa-sembro-137472174/" target="_blank">Hiikkaa-Ibsituu Afaan Oromoo</a>)'
      + ' — hiikaa, sirreessaa fi gorsa afaanii Oromoo irratti hojii gaariif baay\'ee galatoomaa.</p>'
      + '<p><strong>Maatii koo</strong> — irra deebi\'anii dubbisuu, sirreessuu fi gorsaaf galatoomaa.</p>'
      + '</div>';

  /* ══════════════════════════════════════════════════════
     SECTION 11 — À PROPOS
     ══════════════════════════════════════════════════════ */
  var bioContact = isFr
    ? '<div class="ob-contact-wrap">'
      + '<p style="font-size:.82rem;color:#555;margin:10px 0 8px;"><strong>💬 Une suggestion, une coquille, une idée ?</strong><br>Cette appli est faite pour toi — chaque retour compte vraiment.</p>'
      + '<div style="display:flex;gap:8px;flex-wrap:wrap;">'
      + '<a class="ob-contact-btn" href="mailto:sebastien.godet16@gmail.com">✉️ E-mail</a>'
      + '<a class="ob-contact-btn ob-contact-btn--secondary" href="https://www.linkedin.com/in/s%C3%A9bastien-godet-142ba6145" target="_blank">💼 LinkedIn</a>'
      + '</div>'
      + '</div>'
    : '<div class="ob-contact-wrap">'
      + '<p style="font-size:.82rem;color:#555;margin:10px 0 8px;"><strong>💬 Yaada, rakkoo, muuxannoo qabdaa ?</strong><br>Deebiin kee baay\'ee barbaachisaadha.</p>'
      + '<div style="display:flex;gap:8px;flex-wrap:wrap;">'
      + '<a class="ob-contact-btn" href="mailto:sebastien.godet16@gmail.com">✉️ E-mail</a>'
      + '<a class="ob-contact-btn ob-contact-btn--secondary" href="https://www.linkedin.com/in/s%C3%A9bastien-godet-142ba6145" target="_blank">💼 LinkedIn</a>'
      + '</div>'
      + '</div>';

  var bodyAbout = isFr
    ? '<div class="ob-bio-card">'
      + '<div class="ob-bio-head">'
      + '<div class="ob-bio-avatar">🙋</div>'
      + '<div>'
      + '<div class="ob-bio-name">Sébastien Godet</div>'
      + '<div class="ob-bio-role">En reconversion — Gestion de projets Agile &amp; Data</div>'
      + '</div>'
      + '</div>'
      + '<p>Après plus de 10 ans dans l\'univers du <strong>géomarketing</strong> — études de marché, analyses d\'implantation — je suis en reconversion vers la <strong>gestion de projets</strong> : Scrum Master, Product Owner, Chef de Projet, Business Analyst ou AI Project Manager.</p>'
      + '<p><strong>Taphad\'Meuh</strong> — dont le nom mêle « taphad » (« joue ! » en Oromo) et « meuh » (le cri de la vache en français) — est né de mes rencontres avec la communauté Oromoo, de ma curiosité pour l\'Afaan Oromoo et de l\'envie de créer un outil pédagogique concret en utilisant l\'IA.</p>'
      + '<p>L\'appli vise les <strong>grands débutants</strong>, dans les deux sens : francophones découvrant l\'Oromo, et Oromophones apprenant le français. Tout est conçu pour démarrer en douceur, progresser à son rythme et garder la motivation.</p>'
      + '<p>C\'est un <strong>projet vivant</strong> : il grandit avec les retours des utilisateurs et les nouvelles rencontres. Chaque correction, chaque suggestion, chaque test compte vraiment.</p>'
      + bioContact
      + '</div>'
    : '<div class="ob-bio-card">'
      + '<div class="ob-bio-head">'
      + '<div class="ob-bio-avatar">🙋</div>'
      + '<div>'
      + '<div class="ob-bio-name">Sébastien Godet</div>'
      + '<div class="ob-bio-role">Hojii haaraa — Bulchiinsa Pirojektii Agile &amp; Data</div>'
      + '</div>'
      + '</div>'
      + '<p>Waggaa 10 ol <strong>geomaarkeeting</strong> — qorannoo gabaa, mirkaneessaa iddoo — keessa erga hojjannee booda, <strong>bulchiinsa pirojektii</strong> gara: Scrum Master, Product Owner, Chef de Projet, Business Analyst yookiin AI Project Manager.</p>'
      + '<p><strong>Taphad\'Meuh</strong> — maqaan isaa « taphad » (Oromoon « taphadhuu ») fi « meuh » (sagalee sa\'aa Afaan Faransaayiitiin) walitti makuun — hawaasa Oromootiif jaalala koo irraa, Afaan Oromoo barachuuf fedhaa fi AI fayyadamuun appii ijaaruuf hawwii irraa dhalate.</p>'
      + '<p>Appiin kun <strong>jalqabdoota</strong> gargaaruuf qophaa\'e — Oromoota Afaan Faransaayii baratan fi Faransaawota Afaan Oromoo baratan. Hundinuu salphaan jalqabuu, tarkaanfii tarkaanfiitiin guddachuu fi kakaasoo itti fufsiisuuf qophaa\'e.</p>'
      + '<p>Kun <strong>pirojektii jiruu</strong> — fayyadamtootaa fi walitti dhufeenya haaraa waliin guddachaa jira. Deebii kee, sirreeffama kee, muuxannoo kee hundi baay\'ee barbaachisaadha.</p>'
      + bioContact
      + '</div>';

  /* ══════════════════════════════════════════════════════
     TABLEAU DES SECTIONS
     ══════════════════════════════════════════════════════ */
  var sections = [
    {
      icon : '🗺️',
      title: isFr ? 'Comment naviguer dans l\'app'  : 'Appiin keessa akkamiin deemna',
      sub  : isFr ? 'Appiin keessa akkamiin deemna' : 'Comment naviguer dans l\'app',
      body : bodyNav
    },
    {
      icon : '✨',
      title: isFr ? 'Points forts de l\'appli'     : 'Sadarkaalee Appiichaa',
      sub  : isFr ? 'Sadarkaalee Appiichaa'         : 'Points forts de l\'appli',
      body : bodyPoints
    },
    {
      icon : '🗂️',
      title: isFr ? 'En chiffres'       : 'Lakkoofsa',
      sub  : isFr ? 'Lakkoofsa'         : 'En chiffres',
      body : bodyStats
    },
    {
      icon : '🃏',
      title: isFr ? 'Les Cartes Flash'         : 'Kaardota (Cartes Flash)',
      sub  : isFr ? 'Kaardota (Cartes Flash)'  : 'Les Cartes Flash',
      body : bodyFlash
    },
    {
      icon : '🎯',
      title: isFr ? 'Le Quiz et les Étoiles ⭐'    : 'Quiz fi Urjiin ⭐',
      sub  : isFr ? 'Quiz fi Urjiin ⭐'             : 'Le Quiz et les Étoiles ⭐',
      body : bodyQuiz
    },
    {
      icon : '🎙️',
      title: isFr ? 'L\'onglet Répète'         : 'Onglet Irra deebi\'i',
      sub  : isFr ? 'Onglet Irra deebi\'i'     : 'L\'onglet Répète',
      body : bodyRepete
    },
    {
      icon : '📱',
      title: isFr ? 'Installer l\'app (hors-ligne)'   : 'App gara meeshaa irratti buusi',
      sub  : isFr ? 'App gara meeshaa irratti buusi'  : 'Installer l\'app (hors-ligne)',
      body : bodyInstall
    },
    {
      icon : '🔊',
      title: isFr ? 'Configurer l\'audio'         : 'Sagalee qindeessuu',
      sub  : isFr ? 'Sagalee qindeessuu'          : 'Configurer l\'audio',
      body : bodyAudio
    },
    {
      icon : '⚖️',
      title: isFr ? 'Cette appli vs. les autres méthodes'   : 'Appii kana vs. karaalee biroo',
      sub  : isFr ? 'Appii kana vs. karaalee biroo'         : 'Cette appli vs. les autres méthodes',
      body : bodyVs
    },
    {
      icon : '🙏',
      title: isFr ? 'Remerciements'   : 'Galateeffannaa',
      sub  : isFr ? 'Galateeffannaa'  : 'Remerciements',
      body : bodyCredits
    },
    {
      icon : '🙋',
      title: isFr ? 'À propos / Qui suis-je ?'   : 'Eenyu ana ?',
      sub  : isFr ? 'Eenyu ana ?'                 : 'À propos / Qui suis-je ?',
      body : bodyAbout
    }
  ];

  /* ══════════════════════════════════════════════════════
     INJECTION — EN-TÊTE (titre, sous-titre, chips)
     ══════════════════════════════════════════════════════ */
  var titleEl = document.getElementById('ob-title');
  var subEl   = titleEl ? titleEl.nextElementSibling : null;
  if (titleEl) titleEl.textContent = title;
  if (subEl) {
    subEl.textContent = subtitle;
    /* Chips : supprime l'ancienne version si elle existe, puis injecte */
    var existingChips = document.getElementById('ob-chips');
    if (existingChips) existingChips.parentNode.removeChild(existingChips);
    var chipsEl       = document.createElement('div');
    chipsEl.id        = 'ob-chips';
    chipsEl.className = 'ob-chips';
    chipsEl.innerHTML = chipsHtml;
    subEl.parentNode.insertBefore(chipsEl, subEl.nextSibling);
  }

  /* ══════════════════════════════════════════════════════
     INJECTION — ACCORDÉONS
     ══════════════════════════════════════════════════════ */
  var body = document.getElementById('ob-body');
  if (body) {
    body.innerHTML = sections.map(function(s) {
      return '<details class="ob-section">'
        + '<summary>'
        + '<span class="ob-icon">' + s.icon + '</span>'
        + '<span class="ob-section-label">'
        + s.title
        + '<span class="ob-section-sub">' + s.sub + '</span>'
        + '</span>'
        + '</summary>'
        + '<div class="ob-detail">' + s.body + '</div>'
        + '</details>';
    }).join('');
  }

  /* ══════════════════════════════════════════════════════
     INJECTION — FOOTER (bouton CTA, checkbox, hint)
     ══════════════════════════════════════════════════════ */
  var startBtn = document.getElementById('ob-start-btn');
  if (startBtn) {
    startBtn.textContent = startLabel;
    startBtn.onclick     = _closeOnboarding;
  }

  /* Checkbox « Ne plus afficher » — injectée avant le hint, évite les doublons */
  var noShowId    = 'ob-no-show-wrap';
  var existingNS  = document.getElementById(noShowId);
  if (existingNS) existingNS.parentNode.removeChild(existingNS);
  var noShowWrap  = document.createElement('div');
  noShowWrap.id   = noShowId;
  noShowWrap.innerHTML = noShowHtml;
  var hintEl = document.getElementById('ob-reread-hint');
  if (hintEl) hintEl.parentNode.insertBefore(noShowWrap, hintEl);

  /* Hint de relecture */
  if (hintEl) hintEl.innerHTML = rereadHint;

  /* ══════════════════════════════════════════════════════
     FERMETURE — clic sur le fond + touche Échap
     ══════════════════════════════════════════════════════ */
  var overlay = document.getElementById('onboarding-modal');
  if (overlay) {
    overlay.onclick = function(e) {
      if (e.target === overlay) _closeOnboarding();
    };
  }

  document._obKeyHandler = document._obKeyHandler || function(e) {
    if (e.key === 'Escape') _closeOnboarding();
  };
  document.removeEventListener('keydown', document._obKeyHandler);
  document.addEventListener('keydown', document._obKeyHandler);
}"""


# ─────────────────────────────────────────────────────────────────────────────
# PATCH 3 — Nouvelles classes CSS  (.ob-chips, .ob-feat-*, .ob-stats-*, etc.)
# ─────────────────────────────────────────────────────────────────────────────

NEW_CSS = """
/* ── Chips héro (en-tête de la modale) ─────────────────────────── */
.ob-chips{
  display:flex;
  flex-wrap:wrap;
  gap:6px;
  justify-content:center;
  margin-top:12px;
}
.ob-chip{
  background:rgba(255,255,255,.22);
  border:1px solid rgba(255,255,255,.45);
  border-radius:20px;
  padding:4px 11px;
  font-size:.7rem;
  color:#fff;
  font-weight:600;
  letter-spacing:.01em;
}

/* ── Grille « Points forts » ────────────────────────────────────── */
.ob-feat-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:8px;
  margin-top:10px;
}
.ob-feat-card{
  background:#f8f9ff;
  border:1.5px solid var(--c-progress-bg);
  border-radius:12px;
  padding:10px 10px 12px;
  text-align:center;
}
.ob-feat-icon{font-size:1.45rem;margin-bottom:4px;}
.ob-feat-title{
  font-size:.78rem;
  font-weight:700;
  color:var(--c-primary);
  margin-bottom:4px;
  line-height:1.25;
}
.ob-feat-desc{
  font-size:.72rem;
  color:#666;
  line-height:1.45;
}

/* ── Ligne de stats « En chiffres » ─────────────────────────────── */
.ob-stats-row{
  display:flex;
  gap:10px;
  margin-top:10px;
  justify-content:center;
}
.ob-stat{
  flex:1;
  background:#f8f9ff;
  border:1.5px solid var(--c-progress-bg);
  border-radius:14px;
  padding:14px 8px;
  text-align:center;
}
.ob-stat-num{
  font-size:1.8rem;
  font-weight:900;
  color:var(--c-primary);
  line-height:1;
}
.ob-stat-label{
  font-size:.7rem;
  color:#999;
  margin-top:5px;
  line-height:1.3;
}

/* ── Cartes « Comparaison » ─────────────────────────────────────── */
.ob-vs-list{display:flex;flex-direction:column;gap:8px;margin-top:10px;}
.ob-vs-card{
  background:#f8f9ff;
  border:1.5px solid var(--c-progress-bg);
  border-radius:12px;
  padding:10px 12px;
}
.ob-vs-card--highlight{
  background:var(--c-vocab-chip-bg);
  border-color:var(--c-primary);
}
.ob-vs-card-head{
  display:flex;
  align-items:center;
  gap:8px;
  font-weight:700;
  font-size:.85rem;
  color:var(--c-primary);
  margin-bottom:6px;
}
.ob-vs-chips{display:flex;flex-wrap:wrap;gap:4px;}
.ob-vs-chip{
  background:rgba(0,0,0,.06);
  border-radius:12px;
  padding:3px 9px;
  font-size:.69rem;
  color:#555;
}
.ob-vs-card--highlight .ob-vs-chip{
  background:rgba(0,0,0,.07);
  color:var(--c-primary);
  font-weight:600;
}
.ob-vs-tip{
  margin-top:10px;
  background:#fff8e1;
  border-left:3px solid #f9a825;
  border-radius:0 10px 10px 0;
  padding:9px 12px;
  font-size:.79rem;
  line-height:1.55;
  color:#5a4000;
}

/* ── Audio setup (guides par plateforme) ────────────────────────── */
.ob-audio-os{
  font-weight:700;
  color:var(--c-primary);
  font-size:.86rem;
  margin:14px 0 5px;
}
.ob-audio-block{
  background:#f8f9ff;
  border:1.5px solid var(--c-progress-bg);
  border-radius:12px;
  padding:10px 14px 6px;
}
.ob-audio-step{
  display:flex;
  gap:9px;
  margin-bottom:8px;
  font-size:.8rem;
  line-height:1.5;
  color:#444;
}
.ob-audio-step-num{
  background:var(--c-primary);
  color:#fff;
  border-radius:50%;
  min-width:20px;
  height:20px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:.68rem;
  font-weight:700;
  flex-shrink:0;
  margin-top:2px;
}
.ob-audio-help{
  margin-top:12px;
  background:#f8f9ff;
  border:1.5px solid var(--c-progress-bg);
  border-radius:12px;
  padding:12px 14px;
  font-size:.8rem;
  line-height:1.55;
  color:#444;
}
.ob-audio-contacts{
  display:flex;
  flex-wrap:wrap;
  gap:6px;
  margin:8px 0;
}

/* ── Carte bio « À propos » et « Remerciements » ────────────────── */
.ob-bio-card{
  background:#f8f9ff;
  border:1.5px solid var(--c-progress-bg);
  border-radius:12px;
  padding:14px;
  font-size:.83rem;
  line-height:1.6;
  color:#444;
}
.ob-bio-card p{margin:0 0 10px;}
.ob-bio-card p:last-child{margin-bottom:0;}
.ob-bio-head{
  display:flex;
  align-items:center;
  gap:12px;
  margin-bottom:12px;
}
.ob-bio-avatar{font-size:2.2rem;line-height:1;}
.ob-bio-name{
  font-weight:800;
  font-size:.95rem;
  color:var(--c-primary);
  line-height:1.2;
}
.ob-bio-role{font-size:.73rem;color:#888;margin-top:3px;}
.ob-contact-wrap{margin-top:12px;padding-top:10px;border-top:1px solid var(--c-progress-bg);}

/* Boutons de contact */
.ob-contact-btn{
  display:inline-block;
  padding:8px 14px;
  background:var(--c-primary);
  color:#fff;
  border-radius:20px;
  font-size:.76rem;
  font-weight:700;
  text-decoration:none;
  border:none;
  cursor:pointer;
  transition:opacity .15s;
}
.ob-contact-btn:hover{opacity:.85;}
.ob-contact-btn--secondary{
  background:#fff;
  color:var(--c-primary);
  border:2px solid var(--c-primary);
}

/* ── Checkbox « Ne plus afficher » ─────────────────────────────── */
.ob-no-show{
  display:flex;
  align-items:center;
  gap:8px;
  justify-content:center;
  margin:12px 0 4px;
  font-size:.79rem;
  color:#666;
  cursor:pointer;
  line-height:1.4;
}
.ob-no-show input[type=checkbox]{
  width:16px;
  height:16px;
  cursor:pointer;
  accent-color:var(--c-primary);
  flex-shrink:0;
}
.ob-no-show-hint{
  font-size:.71rem;
  color:#aaa;
  text-align:center;
  margin:0 0 10px;
  line-height:1.4;
}
"""


# ─────────────────────────────────────────────────────────────────────────────
#  Application des patches
# ─────────────────────────────────────────────────────────────────────────────

def apply_patches():

    # ── app.js ──────────────────────────────────────────────────────────────
    with open('/home/claude/app.js', 'r', encoding='utf-8') as f:
        src = f.read()

    # Patch 1 : _closeOnboarding
    if OLD_CLOSE not in src:
        print("ERROR: _closeOnboarding anchor not found — aborting", file=sys.stderr)
        sys.exit(1)
    src = src.replace(OLD_CLOSE, NEW_CLOSE, 1)
    print("✓ _closeOnboarding patched")

    # Patch 2 : _buildOnboardingContent  (on remplace tout entre la docstring et la fin de fonction)
    # On cible le commentaire JSDoc + signature + tout le corps jusqu'au } fermant
    pattern = re.compile(
        r'/\*\*\s*\n'                    # /**
        r'\s*\* Construit et injecte.*?' # docstring
        r'^function _buildOnboardingContent.*?'
        r'^\}',                          # accolade fermante seule sur sa ligne
        re.DOTALL | re.MULTILINE
    )
    m = pattern.search(src)
    if not m:
        print("ERROR: _buildOnboardingContent anchor not found — aborting", file=sys.stderr)
        sys.exit(1)
    src = src[:m.start()] + NEW_BUILD + src[m.end():]
    print("✓ _buildOnboardingContent patched")

    with open('/home/claude/app.js', 'w', encoding='utf-8') as f:
        f.write(src)
    print("✓ app.js written")

    # ── style.css ────────────────────────────────────────────────────────────
    with open('/home/claude/style.css', 'r', encoding='utf-8') as f:
        css = f.read()

    anchor = '.ob-reread-hint a:hover{text-decoration:underline}'
    if anchor not in css:
        print("ERROR: style.css anchor not found — aborting", file=sys.stderr)
        sys.exit(1)
    css = css.replace(anchor, anchor + NEW_CSS, 1)
    print("✓ style.css patched")

    with open('/home/claude/style.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("✓ style.css written")

    print("\nAll patches applied successfully.")

apply_patches()
