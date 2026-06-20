/* ============================================================
   Language App 🇫🇷🇪🇸 — Données pédagogiques
   © Juin 2026 – Sébastien Godet · IA Claude Sonnet 4.6 et Gemini 3.5 Flash

   STRUCTURE DU FICHIER
   ─────────────────────────────────────────────────────────────
   BLOC 1 — MODE "Apprendre le Français"   (interface en Espagnol)
            Utilisé quand currentMode === 'learn_french'
            Source : Espagnol Castillan → Français

     1a. LEVEL1_THEMES_FR  — 28 thèmes de vocabulaire (Niveau 1)
         Chaque thème contient :
           id       : identifiant unique (ex : 'salut', 'verb')
           level    : 1 (vocabulaire)
           emoji    : icône du thème
           name     : nom espagnol du thème
           sub      : "nom_es / nom_fr" (bilingual, séparé par '/')
           type     : 'alpha' pour l'alphabet, absent pour le reste
           words[]  : liste de mots { es, fr, em?, conj?, variants? }
             - es       : mot/phrase en Espagnol Castillan
             - fr       : traduction française
             - em       : emoji décoratif (optionnel)
             - conj     : conjugaisons { es:[], fr:[] } pour les verbes
             - variants : { MX, AR, CO, PE, VE, EC } — variantes AL
           quiz10[] : quiz audio pour l'alphabet uniquement

     1b. LEVEL2_THEMES_FR  — 16 dialogues situationnels (Niveau 2)
         Chaque thème contient :
           type       : 'dialog'
           situations[]: [{label, title, img, dialogue:[]}]
             - dialogue[]: [{s (locuteur), es, fr, side, variants?}]
           vocab[]    : ['mot_es = traduction_fr', ...]
           quiz[]     : [{q, opts:[4], ans:index}]

     1c. ALL_THEMES_FR = LEVEL1_THEMES_FR + LEVEL2_THEMES_FR

   ─────────────────────────────────────────────────────────────
   BLOC 2 — MODE "Apprendre l'Espagnol"   (interface en Français)
            Utilisé quand currentMode === 'learn_spain'
            Source : Français → Espagnol (avec variantes hispanophones)

     2a. LEVEL1_THEMES_ES  — 28 thèmes de vocabulaire (Niveau 1)
         Structure identique à LEVEL1_THEMES_FR.
         Différences clés :
           - name  : titre en Français
           - sub   : "nom_fr / nom_es"
           - Thème pays adapté à l'Équateur (région par défaut EC)
           - Alphabet ES inclut la lettre Ñ (absente du mode FR)

     2b. LEVEL2_THEMES_ES  — 16 dialogues situationnels (Niveau 2)
         Structure identique à LEVEL2_THEMES_FR.
         Questions quiz formulées en Espagnol
         (ex : "¿Cómo se dice X en francés ?")

     2c. ALL_THEMES_ES = LEVEL1_THEMES_ES + LEVEL2_THEMES_ES

   ─────────────────────────────────────────────────────────────
   CONVENTION VARIANTS (variantes régionales)
   ─────────────────────────────────────────────────────────────
   Tout mot ou ligne de dialogue peut avoir une propriété `variants`
   indiquant les équivalents dans les principales variantes d'espagnol :

     variants: {
       ES: 'castillan (valeur par défaut)',
       MX: 'mexicain',
       AR: 'argentin (Río de la Plata)',
       CO: 'colombien',
       VE: 'vénézuélien',
       PE: 'péruvien',
       EC: 'équatorien'
     }

   Règle de priorité dans app.js :
     1. card.variants[currentRegion]  si défini
     2. card.es                        (castillan par défaut)
   ─────────────────────────────────────────────────────────── */

/* ═══════════════════════════════════════════════════════════
   1a. LEVEL1_THEMES_FR — Vocabulaire thématique (Niveau 1)
   ─────────────────────────────────────────────────────────
   Public : apprenant francophone débutant en Espagnol (A1)
   28 thèmes couvrant : alphabet, salutations, verbes,
   nourriture, transport, logement, santé, pays, loisirs…
   Chaque mot peut inclure une propriété `variants` pour
   les variantes hispaniques (MX, AR, CO, VE, PE, EC).
═══════════════════════════════════════════════════════════ */

var LEVEL1_THEMES_FR=[
  {id:'alpha',level:1,emoji:'🔤',name:'El Alfabeto',sub:'A, B, C… Z / L\'alphabet',type:'alpha',words:[{es:'A',fr:'A',em:'✈️'},{es:'B',fr:'B',em:'🎈'},{es:'C',fr:'C',em:'☕'},{es:'D',fr:'D',em:'💃'},{es:'E',fr:'E',em:'🏫'},{es:'F',fr:'F',em:'🌸'},{es:'G',fr:'G',em:'🚉'},{es:'H',fr:'H',em:'🏨'},{es:'I',fr:'I',em:'🏝️'},{es:'J',fr:'J',em:'🌿'},{es:'K',fr:'K',em:'⚖️'},{es:'L',fr:'L',em:'🦁'},{es:'M',fr:'M',em:'🏠'},{es:'N',fr:'N',em:'🌙'},{es:'O',fr:'O',em:'🐦'},{es:'P',fr:'P',em:'🍞'},{es:'Q',fr:'Q',em:'🏘️'},{es:'R',fr:'R',em:'🌹'},{es:'S',fr:'S',em:'☀️'},{es:'T',fr:'T',em:'🚂'},{es:'U',fr:'U',em:'1️⃣'},{es:'V',fr:'V',em:'🌆'},{es:'W',fr:'W',em:'🚃'},{es:'X',fr:'X',em:'🎵'},{es:'Y',fr:'Y',em:'🥛'},{es:'Z',fr:'Z',em:'0️⃣'}],quiz10:[{q:'¿Qué letra escuchas?',audio:'J',opts:['L','G','J','V'],ans:2},{q:'¿Qué letra escuchas?',audio:'F',opts:['Z','P','H','F'],ans:3},{q:'¿Qué letra escuchas?',audio:'U',opts:['M','U','I','J'],ans:1},{q:'¿Qué letra escuchas?',audio:'I',opts:['O','A','I','Y'],ans:2},{q:'¿Qué letra escuchas?',audio:'H',opts:['B','F','X','H'],ans:3},{q:'¿Qué letra escuchas?',audio:'Y',opts:['L','P','Y','Z'],ans:2},{q:'¿Qué letra escuchas?',audio:'G',opts:['K','T','G','N'],ans:2},{q:'¿Qué letra escuchas?',audio:'R',opts:['V','M','B','R'],ans:3},{q:'¿Qué letra escuchas?',audio:'Z',opts:['B','M','G','Z'],ans:3},{q:'¿Qué letra escuchas?',audio:'S',opts:['T','S','Y','D'],ans:1},{q:'¿Qué letra escuchas?',audio:'N',opts:['L','M','D','N'],ans:3},{q:'¿Qué letra escuchas?',audio:'X',opts:['X','C','W','N'],ans:0}]},
  {id:'salut',level:1,emoji:'👋',name:'Los Saludos',sub:'Buenos días, gracias… / Les salutations',
 words:[
   {es:'Buenos días / Buen día',fr:'Bonjour (le matin)',em:'🌅'},
   {es:'Buenas tardes',fr:'Bon après-midi',em:'🌆'},
   {es:'Buenas noches',fr:'Bonsoir / Bonne nuit',em:'🌙'},
   {es:'¡Hola!',fr:'Salut !',em:'👋'},
   {es:'Adiós / Hasta luego',fr:'Au revoir / À bientôt',em:'👋'},
   {es:'Hasta pronto',fr:'À bientôt',em:'⏱️'},
   {es:'Gracias / Muchas gracias',fr:'Merci / Merci beaucoup',em:'🙏'},
   {es:'Por favor / De nada',fr:'S\'il vous plaît / De rien',em:'🤝'},
   {es:'Perdona / Perdone',fr:'Pardon / Excusez-moi',em:'🙇'},
   {es:'¡Venga! / ¡Vale!',fr:'Allez ! / D\'accord !',em:'👍',
    variants:{MX:'¡Sale! / ¡Órale!',VE:'¡Dale! / ¡Listo!',AR:'¡Dale!',EC:'¡Dale!',PE:'¡Dale!',CO:'¡Listo! / ¡Dale!'}},
   {es:'Sí',fr:'Oui',em:'✅'},
   {es:'No',fr:'Non',em:'❌'},
   {es:'¿Cómo estás? o ¿Qué tal?',fr:'Comment ça va ?',em:'🤗'},
   {es:'Estoy bien, gracias',fr:'Je vais bien, merci',em:'😊'},
   {es:'Más o menos / Así así',fr:'Comme ci comme ça',em:'😐'},
   {es:'No estoy bien / No me encuentro bien',fr:'Je ne vais pas bien / Je n\'ai pas la forme',em:'😔'},
   {es:'¡Qué chulo! o ¡Guay!',fr:'C\'est cool ! / Super !',em:'🌟',
    variants:{MX:'¡Qué chido! / ¡Qué padre!',VE:'¡Qué fino! / ¡Chévere!',AR:'¡Qué copado! / ¡Buenísimo!',EC:'¡Qué bacán! / ¡Chévere!',PE:'¡Qué paja! / ¡Chévere!',CO:'¡Qué chimba! / ¡Bacano!'}}
 ]},
  {id:'pres',level:1,emoji:'🙋',name:'Presentarse',sub:'Nombre, edad, ciudad… / Se présenter',
   words:[
    {es:'El apellido',fr:'Le nom de famille',em:'👨‍👩‍👧'},{es:'El nombre',fr:'Le prénom',em:'🏷️'},
    {es:'La nacionalidad',fr:'La nationalité',em:'🌍'},{es:'La edad',fr:'L\'âge',em:'🎂'},
    {es:'La profesión o el oficio',fr:'La profession',em:'💼'},{es:'El país',fr:'Le pays',em:'🗺️'},
    {es:'Francés / francesa',fr:'Français(e)',em:'🇫🇷'},{es:'Español / española',fr:'Espagnol(e)',em:'🇪🇸'},
    {es:'Vivo en',fr:'J\'habite à',em:'🏠'},{es:'Soy o Estoy',fr:'Je suis',em:'🧑'},
    {es:'Tengo ... años',fr:'J\'ai ... ans',em:'🎈'},{es:'Me llamo',fr:'Je m\'appelle',em:'👋'},
    {es:'¿De dónde eres?',fr:'D\'où es-tu ?',em:'🌍'},{es:'Soy de Madrid',fr:'Je suis de Madrid',em:'🏙️'}
   ]},
{id:'express',level:1,emoji:'💬',name:'Expresiones Esenciales',sub:'Frases clave / Expressions essentielles',
 words:[
  // Accord / désaccord
  {es:'¡Claro!',fr:'Bien sûr !',em:'✅'},
  {es:'¡Por supuesto!',fr:'Évidemment ! / Absolument !',em:'👍'},
  {es:'¡De acuerdo!',fr:'D\'accord !',em:'🤝'},
  {es:'No estoy de acuerdo',fr:'Je ne suis pas d\'accord',em:'❌'},
  {es:'Quizás / Tal vez',fr:'Peut-être',em:'🤷'},
  // Compréhension
  {es:'No entiendo',fr:'Je ne comprends pas',em:'😕'},
  {es:'No sé',fr:'Je ne sais pas',em:'🤷'},
  {es:'¿Puede repetir?',fr:'Pouvez-vous répéter ?',em:'🔁'},
  {es:'¿Habla más despacio, por favor?',fr:'Pouvez-vous parler plus lentement ?',em:'🐢'},
  {es:'¿Cómo se dice... en español?',fr:'Comment dit-on... en espagnol ?',em:'💬'},
  // Aide
  {es:'¿Puede ayudarme?',fr:'Pouvez-vous m\'aider ?',em:'🙋'},
  {es:'¿Dónde está el baño?',fr:'Où sont les toilettes ?',em:'🚽'},
  {es:'¡Que aproveche!',fr:'Bon appétit !',em:'🍽️'},
  {es:'¡Salud! (para brindar)',fr:'Santé ! (pour trinquer)',em:'🥂'},
  {es:'¡Buen viaje!',fr:'Bon voyage !',em:'✈️'},
  {es:'¡Feliz cumpleaños!',fr:'Joyeux anniversaire !',em:'🎂'},
  {es:'¡Feliz Navidad!',fr:'Joyeux Noël !',em:'🎄'},
  {es:'¡Feliz Año Nuevo!',fr:'Bonne année !',em:'🎆'},
  // Politesse et culture
  {es:'El tuteo (tú) / El usted',fr:'Le tutoiement (tu) / Le vouvoiement (vous)',em:'🗣️'},
  {es:'Dar las gracias (la cultura de la cortesía)',fr:'Remercier (politesse très importante en France)',em:'🙏'},
 ]},
{id:'interrog',level:1,emoji:'❓',name:'Palabras Interrogativas',sub:'Qué, quién, dónde… / Les mots interrogatifs',
 words:[
  {es:'¿Qué?',fr:'Quoi ? / Qu\'est-ce que ?',em:'❓'},
  {es:'¿Quién? / ¿Quiénes?',fr:'Qui ?',em:'🧑'},
  {es:'¿Dónde?',fr:'Où ?',em:'📍'},
  {es:'¿Cuándo?',fr:'Quand ?',em:'📅'},
  {es:'¿Cómo?',fr:'Comment ?',em:'💬'},
  {es:'¿Cuánto / Cuánta?',fr:'Combien (de) ?',em:'🔢'},
  {es:'¿Cuántos / Cuántas?',fr:'Combien (pluriel) ?',em:'🔢'},
  {es:'¿Por qué?',fr:'Pourquoi ?',em:'🤔'},
  {es:'¿Para qué?',fr:'Pour quoi faire ? / Dans quel but ?',em:'🎯'},
  {es:'¿Cuál? / ¿Cuáles?',fr:'Quel / Quelle / Lequel / Laquelle ?',em:'🔍'},
  {es:'¿De dónde?',fr:'D\'où ?',em:'🌍'},
  {es:'¿Adónde?',fr:'Où (avec mouvement) ?',em:'➡️'},
  {es:'¿A qué hora?',fr:'À quelle heure ?',em:'🕐'},
  {es:'¿Cuánto tiempo?',fr:'Combien de temps ?',em:'⏱️'},
  {es:'¿Con quién?',fr:'Avec qui ?',em:'🤝'},
 ]},
{id:'num',level:1,emoji:'🔢',name:'Los Números',sub:'Del cero al dos mil / Zéro à deux mille',
 words:[
  {es:'Cero',fr:'Zéro',em:'0️⃣'},{es:'Uno',fr:'Un',em:'1️⃣'},{es:'Dos',fr:'Deux',em:'2️⃣'},
  {es:'Tres',fr:'Trois',em:'3️⃣'},{es:'Cuatro',fr:'Quatre',em:'4️⃣'},{es:'Cinco',fr:'Cinq',em:'5️⃣'},
  {es:'Seis',fr:'Six',em:'6️⃣'},{es:'Siete',fr:'Sept',em:'7️⃣'},{es:'Ocho',fr:'Huit',em:'8️⃣'},
  {es:'Nueve',fr:'Neuf',em:'9️⃣'},{es:'Diez',fr:'Dix',em:'🔟'},
  {es:'Once',fr:'Onze',em:'1️⃣1️⃣'},{es:'Doce',fr:'Douze',em:'1️⃣2️⃣'},
  {es:'Trece',fr:'Treize',em:'1️⃣3️⃣'},{es:'Catorce',fr:'Quatorze',em:'1️⃣4️⃣'},
  {es:'Quince',fr:'Quinze',em:'1️⃣5️⃣'},{es:'Dieciséis',fr:'Seize',em:'1️⃣6️⃣'},
  {es:'Diecisiete',fr:'Dix-sept',em:'1️⃣7️⃣'},{es:'Dieciocho',fr:'Dix-huit',em:'1️⃣8️⃣'},
  {es:'Diecinueve',fr:'Dix-neuf',em:'1️⃣9️⃣'},{es:'Veinte',fr:'Vingt',em:'2️⃣0️⃣'},
  {es:'Treinta',fr:'Trente',em:'3️⃣0️⃣'},
  {es:'Cuarenta',fr:'Quarante',em:'4️⃣0️⃣'},
  {es:'Cincuenta',fr:'Cinquante',em:'5️⃣0️⃣'},
  {es:'Sesenta',fr:'Soixante',em:'6️⃣0️⃣'},
  {es:'Setenta',fr:'Soixante-dix',em:'7️⃣0️⃣'},
  {es:'Ochenta',fr:'Quatre-vingts',em:'8️⃣0️⃣'},
  {es:'Noventa',fr:'Quatre-vingt-dix',em:'9️⃣0️⃣'},
  {es:'Cien / ciento',fr:'Cent (ciento devant un nombre : ciento veinte = 120)',em:'1️⃣0️⃣0️⃣'},
  {es:'Doscientos / Doscientas',fr:'Deux cents (genre : doscientas personas)',em:'2️⃣0️⃣0️⃣'},
  {es:'Trescientos / Trescientas',fr:'Trois cents (genre : trescientas personas)',em:'3️⃣0️⃣0️⃣'},
  {es:'Cuatrocientos / Cuatrocientas',fr:'Quatre cents (genre : cuatrocientas personas)',em:'4️⃣0️⃣0️⃣'},
  {es:'Quinientos / Quinientas',fr:'Cinq cents (genre : quinientas personas)',em:'5️⃣0️⃣0️⃣'},
  {es:'Seiscientos / Seiscientas',fr:'Six cents (genre : seiscientas personas)',em:'6️⃣0️⃣0️⃣'},
  {es:'Setecientos / Setecientas',fr:'Sept cents (genre : setecientas personas)',em:'7️⃣0️⃣0️⃣'},
  {es:'Ochocientos / Ochocientas',fr:'Huit cents (genre : ochocientas personas)',em:'8️⃣0️⃣0️⃣'},
  {es:'Novecientos / Novecientas',fr:'Neuf cents (genre : novecientas personas)',em:'9️⃣0️⃣0️⃣'},
  {es:'Mil',fr:'Mille',em:'1️⃣0️⃣0️⃣0️⃣'},
  {es:'Dos mil',fr:'Deux mille (mil est invariable)',em:'2️⃣0️⃣0️⃣0️⃣'}
 ]},
  { id: 'heure_calendrier',
    level: 1,
    emoji: '📅',
    name: "L'heure et le calendrier",
    sub: 'Hora, calendario y fechas / L\'heure et le calendrier',
    words: [
      // L'heure (La hora)
      { es: '¿Qué hora es?', fr: 'Quelle heure est-il ?', em: '🕐' },
      { es: 'Son las tres', fr: 'Il est trois heures', em: '🕒' },
      { es: 'Son las tres y media', fr: 'Il est trois heures et demie', em: '🕞' },
      { es: 'Son las tres y cuarto', fr: 'Il est trois heures et quart', em: '🕒' },
      { es: 'Son las tres menos cuarto', fr: 'Il est deux heures quarante-cinq', em: '🕓' },
      { es: 'Es mediodía / Es medianoche', fr: 'Il est midi / Il est minuit', em: '🌞🌛' },
      { es: 'A las + hora', fr: 'À + heure (à cinq heures)', em: '⏰' },
      { es: 'Por la mañana / Por la tarde / Por la noche', fr: 'Le matin / L\'après-midi / Le soir (la nuit)', em: '🌅' },
      { es: 'Los minutos / Los segundos', fr: 'Les minutes / Les secondes', em: '⏱️' },
      { es: 'Temprano / Tarde', fr: 'Tôt / Tard', em: '⏳' },

      // Jours de la semaine (Días de la semana)
      { es: 'Lunes', fr: 'Lundi', em: '1️⃣' },
      { es: 'Martes', fr: 'Mardi', em: '2️⃣' },
      { es: 'Miércoles', fr: 'Mercredi', em: '3️⃣' },
      { es: 'Jueves', fr: 'Jeudi', em: '4️⃣' },
      { es: 'Viernes', fr: 'Vendredi', em: '5️⃣' },
      { es: 'Sábado', fr: 'Samedi', em: '6️⃣' },
      { es: 'Domingo', fr: 'Dimanche', em: '7️⃣' },

      // Mois (Meses)
      { es: 'Enero', fr: 'Janvier', em: '❄️' },
      { es: 'Febrero', fr: 'Février', em: '💝' },
      { es: 'Marzo', fr: 'Mars', em: '🌱' },
      { es: 'Abril', fr: 'Avril', em: '🌸' },
      { es: 'Mayo', fr: 'Mai', em: '🌼' },
      { es: 'Junio', fr: 'Juin', em: '☀️' },
      { es: 'Julio', fr: 'Juillet', em: '🏖️' },
      { es: 'Agosto', fr: 'Août', em: '🌊' },
      { es: 'Septiembre', fr: 'Septembre', em: '🍂' },
      { es: 'Octubre', fr: 'Octobre', em: '🎃' },
      { es: 'Noviembre', fr: 'Novembre', em: '🍁' },
      { es: 'Diciembre', fr: 'Décembre', em: '🎄' },

      // Références temporelles
      { es: 'El fin de semana', fr: 'Le week-end', em: '🎉' },
      { es: 'Ayer / Hoy / Mañana', fr: 'Hier / Aujourd\'hui / Demain', em: '📅' },
      { es: 'La semana que viene', fr: 'La semaine prochaine', em: '➡️' },
      { es: 'El año pasado / El año que viene', fr: 'L\'année dernière / L\'année prochaine', em: '📆' },
      { es: 'La fecha de nacimiento', fr: 'La date de naissance', em: '🎂' },

      // Fêtes culturelles
      { es: 'El 14 de julio (Día de la Bastilla)', fr: 'Le 14 juillet (Fête Nationale française)', em: '🇫🇷' },
      { es: 'El 12 de octubre (Fiesta Nacional de España)', fr: 'Le 12 octobre (Fête nationale espagnole)', em: '🇪🇸' },
      { es: 'La Semana Santa (España)', fr: 'La Semaine Sainte (Espagne) / Pâques (France)', em: '✝️' },
      { es: 'La Nochebuena / El Año Nuevo', fr: 'Le réveillon de Noël / Le Nouvel An', em: '🥂' }
    ]},
  { id: 'meteo_climat',
    level: 1,
    emoji: '🌤️',
    name: "La météo et le climat",
    sub: 'Tiempo, meteorología y clima / La météo et le climat',
    words: [
      // Météo quotidienne (El tiempo)
      { es: '¿Qué tiempo hace?', fr: 'Quel temps fait-il ?', em: '🌡️' },
      { es: 'Hace sol', fr: 'Il fait soleil', em: '☀️' },
      { es: 'Hace calor', fr: 'Il fait chaud', em: '🔥' },
      { es: 'Hace frío', fr: 'Il fait froid', em: '🥶' },
      { es: 'Hace viento', fr: 'Il y a du vent', em: '💨' },
      { es: 'Llueve / Está lloviendo', fr: 'Il pleut', em: '🌧️' },
      { es: 'Nieva / Está nevando', fr: 'Il neige', em: '❄️' },
      { es: 'Hay niebla', fr: 'Il y a du brouillard', em: '🌫️' },
      { es: 'Está nublado', fr: 'Il est nuageux / C\'est couvert', em: '☁️' },
      { es: 'Hay tormenta', fr: 'Il y a un orage', em: '⚡' },
      { es: 'El pronóstico del tiempo', fr: 'Les prévisions météo', em: '📺' },
      { es: 'La temperatura (los grados)', fr: 'La température (les degrés)', em: '🌡️' },

      // Saisons (Las estaciones)
      { es: 'La primavera', fr: 'Le printemps', em: '🌸' },
      { es: 'El verano', fr: 'L\'été', em: '☀️' },
      { es: 'El otoño', fr: 'L\'automne', em: '🍂' },
      { es: 'El invierno', fr: 'L\'hiver', em: '❄️' },

      // Climat (El clima)
      { es: 'El cambio climático', fr: 'Le changement climatique', em: '🌍' },
      { es: 'Un clima seco / húmedo', fr: 'Un climat sec / humide', em: '🌵' },
      { es: 'La sequía', fr: 'La sécheresse', em: '🏜️' },

      // Références culturelles
      { es: 'La lluvia en el norte de España (Galicia, País Vasco)', fr: 'La pluie dans le nord de l\'Espagne (comme en Bretagne)', em: '🌧️' },
      { es: 'El sol en Andalucía / en el Mediterráneo', fr: 'Le soleil en Andalousie / sur la Côte d\'Azur', em: '☀️' }
    ]},
{id:'verb',level:1,emoji:'📝',name:'Los Verbos',sub:'Ser, tener, ir… / Les verbes principaux',
   words:[
   {es:'Ser / Estar',fr:'Être (ser=permanent : soy francés / estar=temporaire : estoy cansado)',em:'🧑',conj:{es:['Yo soy/estoy','Tú eres/estás','Él/Ella es/está','Nosotros somos/estamos','Vosotros sois/estáis','Ellos/Ellas son/están'],fr:['Je suis','Tu es','Il/Elle est','Nous sommes','Vous êtes','Ils/Elles sont']}},
    {es:'Tener',fr:'Avoir',em:'🤲',conj:{es:['Yo tengo','Tú tienes','Él/Ella tiene','Nosotros tenemos','Vosotros tenéis','Ellos/Ellas tienen'],fr:['J\'ai','Tu as','Il/Elle a','Nous avons','Vous avez','Ils/Elles ont']}},
    {es:'Hablar',fr:'Parler',em:'🗣️',conj:{es:['Yo hablo','Tú hablas','Él/Ella habla','Nosotros hablamos','Vosotros habláis','Ellos/Ellas hablan'],fr:['Je parle','Tu parles','Il/Elle parle','Nous parlons','Vous parlez','Ils/Elles parlent']}},
    {es:'Vivir',fr:'Habiter',em:'🏠',conj:{es:['Yo vivo','Tú vives','Él/Ella vive','Nosotros vivimos','Vosotros vivís','Ellos/Ellas viven'],fr:['J\'habite','Tu habites','Il/Elle habite','Nous habitons','Vous habitez','Ils/Elles habitent']}},
    {es:'Ir',fr:'Aller',em:'🚶',conj:{es:['Yo voy','Tú vas','Él/Ella va','Nosotros vamos','Vosotros vais','Ellos/Ellas van'],fr:['Je vais','Tu vas','Il/Elle va','Nous allons','Vous allez','Ils/Elles vont']}},
    {es:'Gustar',fr:'Aimer',em:'❤️',conj:{es:['Me gusta','Te gusta','Le gusta','Nos gusta','Os gusta','Les gusta'],fr:['J\'aime','Tu aimes','Il/Elle aime','Nous aimons','Vous aimez','Ils/Elles aiment']}},
    {es:'Comer',fr:'Manger',em:'🍽️',conj:{es:['Yo como','Tú comes','Él/Ella come','Nosotros comemos','Vosotros coméis','Ellos/Ellas comen'],fr:['Je mange','Tu manges','Il/Elle mange','Nous mangeons','Vous mangez','Ils/Elles mangent']}},
    {es:'Beber',fr:'Boire',em:'🥤',conj:{es:['Yo bebo','Tú bebes','Él/Ella bebe','Nosotros bebemos','Vosotros bebéis','Ellos/Ellas beben'],fr:['Je bois','Tu bois','Il/Elle boit','Nous buvons','Vous buvez','Ils/Elles boivent']}},
    {es:'Dormir',fr:'Dormir',em:'😴',conj:{es:['Yo duermo','Tú duermes','Él/Ella duerme','Nosotros dormimos','Vosotros dormís','Ellos/Ellas duermen'],fr:['Je dors','Tu dors','Il/Elle dort','Nous dormons','Vous dormez','Ils/Elles dorment']}},
    {es:'Caminar',fr:'Marcher',em:'🚶‍♂️',conj:{es:['Yo camino','Tú caminas','Él/Ella camina','Nosotros caminamos','Vosotros camináis','Ellos/Ellas caminan'],fr:['Je marche','Tu marches','Il/Elle marche','Nous marchons','Vous marchez','Ils/Elles marchent']}},
    {es:'Correr',fr:'Courir',em:'🏃‍♂️',conj:{es:['Yo corro','Tú corres','Él/Ella corre','Nosotros corremos','Vosotros corréis','Ellos/Ellas corren'],fr:['Je cours','Tu cours','Il/Elle court','Nous courons','Vous courez','Ils/Elles courent']}},
    {es:'Leer',fr:'Lire',em:'📖',conj:{es:['Yo leo','Tú lees','Él/Ella lee','Nosotros leemos','Vosotros leéis','Ellos/Ellas leen'],fr:['Je lis','Tu lis','Il/Elle lit','Nous lisons','Vous lisez','Ils/Elles lisent']}},
    {es:'Escribir',fr:'Écrire',em:'✍️',conj:{es:['Yo escribo','Tú escribes','Él/Ella escribe','Nosotros escribimos','Vosotros escribís','Ellos/Ellas escriben'],fr:['J\'écris','Tu écris','Il/Elle écrit','Nous écrivons','Vous écrivez','Ils/Elles écrivent']}},
    {es:'Escuchar',fr:'Écouter',em:'🎧',conj:{es:['Yo escucho','Tú escuchas','Él/Ella escucha','Nosotros escuchamos','Vosotros escucháis','Ellos/Ellas escuchan'],fr:['J\'écoute','Tu écoutes','Il/Elle écoute','Nous écoutons','Vous écoutez','Ils/Elles écoutent']}},
    {es:'Mirar',fr:'Regarder',em:'👀',conj:{es:['Yo miro','Tú miras','Él/Ella mira','Nosotros miramos','Vosotros miráis','Ellos/Ellas miran'],fr:['Je regarde','Tu regardes','Il/Elle regarde','Nous regardons','Vous regardez','Ils/Elles regardent']}},
    {es:'Aprender',fr:'Apprendre',em:'🧠',conj:{es:['Yo aprendo','Tú aprendes','Él/Ella aprende','Nosotros aprendemos','Vosotros aprendéis','Ellos/Ellas aprenden'],fr:['J\'apprends','Tu apprends','Il/Elle apprend','Nous apprenons','Vous apprenez','Ils/Elles apprennent']}},
    {es:'Pensar',fr:'Penser',em:'🤔',conj:{es:['Yo pienso','Tú piensas','Él/Ella piensa','Nosotros pensamos','Vosotros pensáis','Ellos/Ellas piensan'],fr:['Je pense','Tu penses','Il/Elle pense','Nous pensons','Vous pensez','Ils/Elles pensent']}},
    {es:'Sonreír',fr:'Sourire',em:'😊',conj:{es:['Yo sonrío','Tú sonríes','Él/Ella sonríe','Nosotros sonreímos','Vosotros sonreís','Ellos/Ellas sonríen'],fr:['Je souris','Tu souris','Il/Elle sourit','Nous sourions','Vous souriez','Ils/Elles sourient']}},
    {es:'Coger',fr:'Prendre',em:'🤲',conj:{es:['Yo cojo','Tú coges','Él/Ella coge','Nosotros cogemos','Vosotros cogéis','Ellos/Ellas cogen'],fr:['Je prends','Tu prends','Il/Elle prend','Nous prenons','Vous prenez','Ils/Elles prennent']},
     variants:{MX:'Tomar / Agarrar',VE:'Tomar / Agarrar',AR:'Tomar / Agarrar',EC:'Tomar / Agarrar',PE:'Tomar / Agarrar',CO:'Tomar / Agarrar'}},
    {es:'Dar',fr:'Donner',em:'🤲',conj:{es:['Yo doy','Tú das','Él/Ella da','Nosotros damos','Vosotros dais','Ellos/Ellas dan'],fr:['Je donne','Tu donnes','Il/Elle donne','Nous donnons','Vous donnez','Ils/Elles donnent']}},
    {es:'Buscar',fr:'Chercher',em:'🔍',conj:{es:['Yo busco','Tú buscas','Él/Ella busca','Nosotros buscamos','Vosotros buscáis','Ellos/Ellas buscan'],fr:['Je cherche','Tu cherches','Il/Elle cherche','Nous cherchons','Vous cherchez','Ils/Elles cherchent']}},
    {es:'Comprar',fr:'Acheter',em:'🛒',conj:{es:['Yo compro','Tú compras','Él/Ella compra','Nosotros compramos','Vosotros compráis','Ellos/Ellas compran'],fr:['J\'achète','Tu achètes','Il/Ella achète','Nous achetons','Vous achetez','Ils/Elles achètent']}},
    {es:'Vender',fr:'Vendre',em:'💰',conj:{es:['Yo vendo','Tú vendes','Él/Ella vende','Nosotros vendemos','Vosotros vendéis','Ellos/Ellas venden'],fr:['Je vends','Tu vends','Il/Elle vend','Nous vendons','Vous vendez','Ils/Elles vendent']}},
    {es:'Pagar',fr:'Payer',em:'💳',conj:{es:['Yo pago','Tú pagas','Él/Ella paga','Nosotros pagamos','Vosotros pagáis','Ellos/Ellas pagan'],fr:['Je paie','Tu paies','Il/Elle paie','Nous payons','Vous payez','Ils/Elles paient']}},
    {es:'Trabajar',fr:'Travailler',em:'💼',conj:{es:['Yo trabajo','Tú trabajas','Él/Ella trabaja','Nosotros trabajamos','Vosotros trabajáis','Ellos/Ellas trabajan'],fr:['Je travaille','Tu travailles','Il/Elle travaille','Nous travaillons','Vous travaillez','Ils/Elles travaillent']},
     variants:{MX:'Chambear',VE:'Trabajar',AR:'Laburar',EC:'Chambear',PE:'Chambear',CO:'Camellar / Chambear'}},
    {es:'Cocinar',fr:'Cuisiner',em:'🍳',conj:{es:['Yo cocino','Tú cocinas','Él/Ella cocina','Nosotros cocinamos','Vosotros cocináis','Ellos/Ellas cocinan'],fr:['Je cuisine','Tu cuisines','Il/Elle cuisine','Nous cuisinons','Vous cuisinez','Ils/Elles cuisinent']}},
    {es:'Limpiar',fr:'Nettoyer',em:'🧹',conj:{es:['Yo limpio','Tú limpias','Él/Ella limpia','Nosotros limpiamos','Vosotros limpáis','Ellos/Ellas limpian'],fr:['Je nettoie','Tu nettoies','Il/Elle nettoie','Nous nettoyons','Vous nettoyez','Ils/Elles nettoient']}},
    {es:'Ducharse',fr:'Se doucher',em:'🧼',conj:{es:['Yo me ducho','Tú te duchas','Él/Ella se ducha','Nosotros nos duchamos','Vosotros os ducháis','Ellos/Ellas se duchan'],fr:['Je me douche','Tu te douches','Il/Elle se douche','Nous nous douchons','Vous vous douchez','Ils/Elles se douchent']}},
    {es:'Irse',fr:'Partir',em:'🚪',conj:{es:['Yo me voy','Tú te vas','Él/Ella se va','Nosotros nos vamos','Vosotros os vais','Ellos/Ellas se van'],fr:['Je pars','Tu pars','Il/Elle part','Nous partons','Vous partez','Ils/Elles partent']}},
    {es:'Llegar',fr:'Arriver',em:'🛬',conj:{es:['Yo llego','Tú llegas','Él/Ella llega','Nosotros llegamos','Vosotros llegáis','Ellos/Ellas llegan'],fr:['J\'arrive','Tu arrives','Il/Elle arrive','Nous arrivons','Vous arrivez','Ils/Elles arrivent']}},
    {es:'Llamar',fr:'Appeler',em:'📞',conj:{es:['Yo llamo','Tú llamas','Él/Ella llama','Nosotros llamamos','Vosotros llamáis','Ellos/Ellas llaman'],fr:['J\'appelle','Tu appelles','Il/Elle appelle','Nous appelons','Vous appelez','Ils/Elles appellent']}},
    {es:'Preguntar',fr:'Demander',em:'🙋‍♂️',conj:{es:['Yo pregunto','Tú preguntas','Él/Ella pregunta','Nosotros preguntamos','Vosotros preguntáis','Ellos/Ellas preguntan'],fr:['Je demande','Tu demandes','Il/Elle demande','Nous demandons','Vous devez','Ils/Elles demandent']}},
    {es:'Conducir',fr:'Conduire',em:'🚗',conj:{es:['Yo conduzco','Tú conduces','Él/Ella conduce','Nosotros conducimos','Vosotros conducís','Ellos/Ellas conducen'],fr:['Je conduis','Tu conduis','Il/Elle conduit','Nous conduisons','Vous conduisez','Ils/Elles conduisent']},
     variants:{MX:'Manejar',VE:'Manejar',AR:'Manejar',EC:'Manejar',PE:'Manejar',CO:'Manejar'}},
    {es:'Molar',fr:'Adorer (argot)',em:'😎',conj:{es:['Me mola','Te mola','Le mola','Nos mola','Os mola','Les mola'],fr:['J\'adore','Tu adores','Il/Elle adore','Nous adorons','Vous adorez','Ils/Elles adorent']},
     variants:{MX:'Estar chido / Gustar un buen',VE:'Estar fino / Gustar burda',AR:'Copar / Estar buenísimo',EC:'Bacán / Gustar full',PE:'Estar paja / Bacán',CO:'¡Qué chimba! / Bacano'}}
  ]},
{id:'emot',level:1,emoji:'😄',name:'Las Emociones',sub:'Alegre, cansado… / Les émotions',
   words:[
    {es:'Contento / Contenta',fr:'Content / Contente',em:'😊'},
    {es:'Feliz / Feliz',fr:'Heureux / Heureuse',em:'😊'},
    {es:'Alegre / Alegre',fr:'Joyeux / Joyeuse',em:'😄'},
    {es:'Triste / Triste',fr:'Triste / Triste',em:'😢'},
    {es:'Cansado / Cansada',fr:'Fatigué / Fatiguée',em:'😴'},
    {es:'Enfadado / Enfadada',fr:'Fâché / Fâchée',em:'😠',
     variants:{MX:'Enojado / Enojada',AR:'Enojado / Enojada',CO:'Enojado / Enojada',VE:'Enojado / Enojada',PE:'Enojado / Enojada'}},
    {es:'Enojado / Enojada',fr:'Énervé / Énervée',em:'😠',
     variants:{ES:'Enfadado / Enfadada'}},
    {es:'Tener miedo / Tener miedo',fr:'Avoir peur / Avoir peur',em:'😨'},
    {es:'Enfermo / Enferma',fr:'Malade / Malade',em:'🤒'},
    {es:'Malito / Malita',fr:'Malade / Malade',em:'🤒'},
    {es:'Preocupado / Preocupada',fr:'Inquiet / Inquiète',em:'😟'},
    {es:'Angustiado / Angustiada',fr:'Inquiet / Inquiète',em:'😟'},
    {es:'Estresado / Estresada',fr:'Stressé / Stressée',em:'😰'},
    {es:'Agobiado / Agobiada',fr:'Stressé / Stressée',em:'😰',
     variants:{MX:'Abrumado / Abrumada',AR:'Agobiado / Abrumado',CO:'Abrumado / Abrumada',PE:'Abrumado / Abrumada'}},
    {es:'Decepcionado / Decepcionada',fr:'Déçu / Déçue',em:'😞'},
    {es:'Frustrado / Frustrada',fr:'Déçu / Déçue',em:'😞'},
    {es:'Enamorado / Enamorada',fr:'Amoureux / Amoureuse',em:'😍'},
    {es:'¡Qué guay! / ¡Mola!',fr:'C\'est super ! / C\'est cool !',em:'🌟',
     variants:{MX:'¡Qué padre! / ¡Qué chido!',AR:'¡Qué copado! / ¡Qué bueno!',CO:'¡Qué chévere! / ¡Qué bacano!',VE:'¡Qué chévere!',PE:'¡Qué chévere! / ¡Qué paja!'}}
   ]},
 {id:'fam',level:1,emoji:'👨‍👩‍👧',name:'La Familia',sub:'Papá, mamá, hijo… / La famille',
   words:[
    {es:'La madre / La mamá',fr:'La mère / La maman',em:'👩'},
    {es:'El padre / El papá',fr:'Le père / Le papa',em:'👨'},
    {es:'La hija',fr:'La fille',em:'👧'},
    {es:'El hijo',fr:'Le fils',em:'👦'},
    {es:'La hermana',fr:'La sœur',em:'👧'},
    {es:'El hermano',fr:'Le frère',em:'🧑'},
    {es:'La abuela',fr:'La grand-mère',em:'👵'},
    {es:'El abuelo',fr:'Le grand-père',em:'👴'},
    {es:'La mujer / la esposa',fr:'La femme',em:'💑'},
    {es:'El marido / El esposo',fr:'Le mari',em:'💍'},
    {es:'El tío / la tía',fr:'L\'oncle / La tante (aussi : mec / nana en argot)',em:'👨/👩',
     variants:{MX:'El güey / La chava',AR:'El chabón / La mina',CO:'El parce / La vieja',PE:'El pata / La flaca'}}
   ]},
{id:'col',level:1,emoji:'🎨',name:'Los Colores',sub:'Rojo, azul, verde… / Les couleurs',
   words:[
    {es:'Rojo',fr:'Rouge',em:'❤️'},{es:'Azul',fr:'Bleu',em:'💙'},{es:'Verde',fr:'Vert',em:'💚'},
    {es:'Amarillo',fr:'Jaune',em:'💛'},
    {es:'Naranja',fr:'Orange',em:'🧡',
     variants:{MX:'Anaranjado',AR:'Naranja / Anaranjado',CO:'Anaranjado',PE:'Anaranjado'}},
    {es:'Blanco',fr:'Blanc',em:'🤍'},
    {es:'Negro',fr:'Noir',em:'🖤'},
    {es:'Rosa',fr:'Rose',em:'🩷',
     variants:{MX:'Rosado',AR:'Rosado',CO:'Rosado',PE:'Rosado'}},
    {es:'Morado / Violeta',fr:'Violet (morado=foncé, violeta=clair)',em:'💜'},
    {es:'Marrón',fr:'Marron',em:'🤎',
     variants:{MX:'Café',AR:'Marrón',CO:'Café',PE:'Marrón / Café'}},
    {es:'Gris',fr:'Gris',em:'🩶'}
   ]},
{id:'viequot',level:1,emoji:'🏡',name:'La Vida Cotidiana',sub:'La vie quotidienne / Rutina diaria',
 words:[
  // Moments de la journée
  {es:'Por la mañana',fr:'Le matin',em:'🌅'},
  {es:'Al mediodía',fr:'À midi',em:'🕛'},
  {es:'Por la tarde',fr:'L\'après-midi',em:'☀️'},
  {es:'Por la noche',fr:'Le soir',em:'🌙'},
  // Actions quotidiennes
  {es:'Despertarse',fr:'Se réveiller',em:'⏰'},
  {es:'Levantarse',fr:'Se lever',em:'🛏️'},
  {es:'Desayunar',fr:'Prendre le petit-déjeuner',em:'🥐'},
  {es:'Comer',fr:'Déjeuner',em:'🍽️'},
  {es:'Cenar',fr:'Dîner',em:'🌃'},
  {es:'Acostarse',fr:'Se coucher',em:'😴'},
  {es:'Hacer la compra',fr:'Faire les courses',em:'🛒'},
  {es:'Hacer la colada',fr:'Faire la lessive',em:'🧺'},
  {es:'Hacer la cama',fr:'Faire le lit',em:'🛏️'},
  {es:'Fregar los platos',fr:'Faire la vaisselle',em:'🍽️',
   variants:{MX:'Lavar los trastes',AR:'Lavar los platos',CO:'Lavar la loza',VE:'Lavar los platos',PE:'Lavar los platos'}},
  {es:'Barrer / Limpiar',fr:'Balayer / Nettoyer',em:'🧹'},
  // Repas typiques France / Espagne
  {es:'El desayuno',fr:'Le petit-déjeuner',em:'☕'},
  {es:'El almuerzo / La comida',fr:'Le déjeuner',em:'🥗'},
  {es:'La cena',fr:'Le dîner',em:'🍷'},
  {es:'La merienda',fr:'Le goûter',em:'🍪'},
  // Références culturelles
  {es:'El menú del día (plato del día en España)',fr:'Le menu du jour (plat complet : entrée + plat + dessert)',em:'🍱'},
  {es:'La siesta (costumbre española)',fr:'La sieste (tradition espagnole après le repas)',em:'💤'},
  {es:'El aperitivo (el vermú)',fr:'L\'apéritif (le kir en France, vermout en Espagne)',em:'🍾'},
 ]},
{id: 'nour',
  level: 1,
  emoji: '🍽️',
  name: 'La Comida',
  sub: 'Pan, verduras, tapas… / La nourriture',
  words: [
    // Catégories générales
    {es: 'Las frutas', fr: 'Les fruits', em: '🍉'},
    {es: 'Las verduras', fr: 'Les légumes', em: '🥦'},
    // Féculents & Base
    {es: 'El pan', fr: 'Le pain', em: '🍞'}, // La Baguette 🇫🇷 / Pan de pueblo 🇪🇸
    {es: 'El arroz', fr: 'Le riz', em: '🍚'}, // Camargue 🇫🇷 / Valence 🇪🇸 (Base de la Paella)
    {es: 'La pasta', fr: 'Les pâtes', em: '🍝'},
    { es: 'La patata', 
      fr: 'La pomme de terre', 
      em: '🥔',
      variants: {MX: 'La papa', AR: 'La papa', CO: 'La papa', VE: 'La papa', PE: 'La papa', EC: 'La papa'}},
    // Protéines de base
    {es: 'La carne', fr: 'La viande', em: '🥩'},
    {es: 'El pollo', fr: 'Le poulet', em: '🍗'},
    {es: 'El pescado', fr: 'Le poisson', em: '🐟'},
    {es: 'El huevo', fr: 'L\'œuf', em: '🥚'},
    // Produits laitiers
    {es: 'El queso', fr: 'Le fromage', em: '🧀'},
    { es: 'La mantequilla', 
      fr: 'Le beurre', 
      em: '🧈',
      variants: {AR: 'La manteca'}},
    // Fruits & Variantes régionales
    {es: 'La manzana', fr: 'La pomme', em: '🍎'}, // Normandie/Bretagne 🇫🇷 (Cidre) / Asturies 🇪🇸 (Sidra)
    {es: 'La naranja', fr: 'L\'orange', em: '🍊'}, // Valence 🇪🇸 (Capitale de la orange)
    {es: 'El limón', fr: 'Le citron', em: '🍋'}, // Menton 🇫🇷 / Murcie 🇪🇸
    { es: 'El plátano', 
      fr: 'La banane', 
      em: '🍌',
      variants: {VE: 'El cambur', AR: 'La banana', MX: 'La banana', EC: 'El guineo / El plátano'}},
    { es: 'La fresa', 
      fr: 'La fraise', 
      em: '🍓',
      variants: {AR: 'La frutilla', EC: 'La frutilla'}},
    { es: 'La sandía', 
      fr: 'La pastèque', 
      em: '🍉',
      variants: {VE: 'La patilla'}},
    // Légumes & Variantes régionales
    { es: 'El tomate', 
      fr: 'La tomate', 
      em: '🍅',
      variants: {MX: 'El jitomate'}},
    {es: 'La zanahoria', fr: 'La carotte', em: '🥕'},
    {es: 'La cebolla', fr: 'L\'oignon', em: '🧅'},
    {es: 'El ajo', fr: 'L\'ail', em: '🧄'},
    {es: 'El pepino', fr: 'Le concombre', em: '🥒'},
    {es: 'La ensalada', fr: 'La salade', em: '🥗'},
    
    // Épicerie douce
    {es: 'La sal', fr: 'Le sel', em: '🧂'},
    {es: 'La pimienta', fr: 'Le poivre', em: '🌶️'},
    {es: 'La miel', fr: 'Le miel', em: '🍯'},
    {es: 'El chocolate', fr: 'Le chocolat', em: '🍫'},
   ]},
{id:'bois',level:1,emoji:'🥤',name:'Las Bebidas',sub:'Agua, café, vino… / Les boissons',
 words:[
    // Essentiels
    {es:'El agua',fr:'L\'eau',em:'💧'},
    {es:'El agua con gas',fr:'L\'eau gazeuse',em:'🫧'},
    {es:'La leche',fr:'Le lait',em:'🥛'},
    {es:'El zumo (de naranja)',fr:'Le jus (d\'orange)',em:'🍊',
     variants:{MX:'El jugo',AR:'El jugo',CO:'El jugo',VE:'El jugo',PE:'El jugo',EC:'El jugo'}},
    {es:'El refresco / La gaseosa',fr:'Le soda',em:'🥤'},
    // Cafés
    {es:'El café (solo)',fr:'Le café noir',em:'☕',
     variants:{CO:'El tinto / El tintico',MX:'El café americano / Negro'}},
    {es:'El café con leche',fr:'Le café au lait',em:'☕'},
    {es:'El cortado',fr:'Le café avec un nuage de lait',em:'☕',
     variants:{CO:'El perico',VE:'El marrón'}},
    {es:'El té',fr:'Le thé',em:'🍵'},
    // Alcools
    {es:'El vino (tinto / blanco)',fr:'Le vin (rouge / blanc)',em:'🍷'},
    {es:'La cerveza',fr:'La bière',em:'🍺'},
    {es:'La sangría',fr:'La sangria',em:'🍷'}
 ]},
{id:'rest',level:1,emoji:'🍽️',name:'El Restaurante',sub:'Menú, cuenta, mesa… / Au restaurant',
 words:[
    // Arrivée
  {es:'La terraza',fr:'La terrasse',em:'☀️'},
  {es:'La mesa',fr:'La table',em:'🪑'},
  {es:'¿Está libre esta mesa?',fr:'Cette table est libre ?',em:'🪑'},
  // Commander
  {es:'El camarero / La camarera',fr:'Le serveur / La serveuse',em:'🧑‍🍳',
   variants:{MX:'El mesero / La mesera',AR:'El mozo / La moza',CO:'El mesero / La mesera',VE:'El mesero / La mesera',PE:'El mesero / La mesera'}},
  {es:'La carta',fr:'La carte',em:'📋'},
  {es:'El menú del día',fr:'Le menu du jour',em:'🍱'},
  {es:'Pedir',fr:'Commander',em:'🙋'},
  {es:'¿Qué recomienda?',fr:'Que recommandez-vous ?',em:'👨‍🍳'},
  // Régimes
  {es:'Sin gluten',fr:'Sans gluten',em:'🌾'},
  {es:'Vegetariano / Vegetariana',fr:'Végétarien / Végétarienne',em:'🥦'},
  // Repas
  {es:'La tapa',fr:'La tapa',em:'🫒'},
  {es:'La entrada',fr:'L\'entrée',em:'🥗'},
  {es:'El plato principal',fr:'Le plat principal',em:'🍖'},
  {es:'El postre',fr:'Le dessert',em:'🍮'},
  {es:'El bocadillo',fr:'Le sandwich',em:'🥖',
   variants:{MX:'El sándwich / El lonche',AR:'El sándwich',CO:'El sándwich',VE:'El sándwich',PE:'El sándwich'}},
  {es:'Para llevar',fr:'À emporter',em:'🥡'},
  // Addition
  {es:'La cuenta',fr:'L\'addition',em:'💶'},
  {es:'La propina',fr:'Le pourboire',em:'💰'},
  {es:'La propina está incluida',fr:'Le pourboire est inclus',em:'✅'},
 ]},
  {id:'orient',level:1,emoji:'🧭',name:'Orientarse',sub:'Izquierda, derecha… / S\'orienter',
   words:[
   // Directions
    {es:'Todo recto / Todo derecho',fr:'Tout droit',em:'⬆️'},
    {es:'A la izquierda',fr:'À gauche',em:'⬅️'},
    {es:'A la derecha',fr:'À droite',em:'➡️'},
    // Position relative
    {es:'Delante',fr:'Devant',em:'🔜'},
    {es:'Detrás',fr:'Derrière',em:'🔙'},
    {es:'Al lado',fr:'À côté',em:'↔️'},
    {es:'Frente a / Enfrente',fr:'En face',em:'🔄'},
    // Distance
    {es:'Cerca',fr:'Près',em:'📍'},
    {es:'Lejos',fr:'Loin',em:'🌅'},
    // Outil
    {es:'El mapa / El plano',fr:'Le plan / La carte',em:'🗺️'},
    ]},
 {id:'lieux',level:1,emoji:'🏙️',name:'Los Lugares',sub:'Mercado, plaza, bar… / Les lieux importants',
   words:[
    // Lieux de vie / nature
    {es:'La ciudad',fr:'La ville',em:'🏙️'},
    {es:'El pueblo',fr:'Le village',em:'🏡'},
    {es:'El campo',fr:'La campagne',em:'🌾'},
    {es:'La montaña / La sierra',fr:'La montagne / La chaîne de montagnes',em:'⛰️'},
    {es:'El mar / El océano',fr:'La mer / L\'océan',em:'🌊'},
    {es:'La playa',fr:'La plage',em:'🏖️'},
    {es:'El río',fr:'La rivière',em:'🏞️'},
    {es:'El parque',fr:'Le parc',em:'🌳'},
    {es:'La plaza',fr:'La place',em:'⛲'},
    {es:'La calle / La avenida',fr:'La rue / L\'avenue',em:'🛣️'},
    {es:'La manzana / La cuadra',fr:'Le pâté de maisons',em:'🏘️'},
    // Services publics
    {es:'El ayuntamiento',fr:'La mairie',em:'🏛️'},
    {es:'El hospital',fr:'L\'hôpital',em:'🏥'},
    {es:'La farmacia',fr:'La pharmacie',em:'💊'},
    {es:'El banco',fr:'La banque',em:'🏦'},
    {es:'La iglesia',fr:'L\'église',em:'⛪'},
    // Commerces
    {es:'El supermercado',fr:'Le supermarché',em:'🛒'},
    {es:'El bar / El café',fr:'Le bar / Le café',em:'☕'},
    {es:'La taberna / El mesón',fr:'La taverne / L\'auberge',em:'🍷'},
    // Éducation
    {es:'La guardería',fr:'L\'école maternelle',em:'🧸'},
    {es:'El colegio',fr:'L\'école primaire',em:'🎒'},
    {es:'La ESO',fr:'Le collège',em:'📚'},
    {es:'El instituto',fr:'Le lycée',em:'🎓'},
    {es:'La universidad',fr:'L\'université',em:'🏛️'},
   ]},
{id:'trans',level:1,emoji:'🚌',name:'Los Transportes',sub:'Metro, tren, coche… / Les transports',
 words:[
  // Transports en commun
  {es:'El autobús / el bus',fr:'Le bus',em:'🚌',
   variants:{MX:'El camión / El autobús',AR:'El colectivo',CO:'El bus / La buseta',VE:'El autobús / La buseta',PE:'El micro / La combi'}},
  {es:'El metro',fr:'Le métro',em:'🚇',
   variants:{AR:'El subte'}},
  {es:'El tranvía',fr:'Le tramway',em:'🚊'},
  {es:'El tren',fr:'Le train',em:'🚂'},
  {es:'El avión',fr:'L\'avion',em:'✈️'},
  {es:'El taxi',fr:'Le taxi',em:'🚕'},
  // Transports individuels
  {es:'El coche',fr:'La voiture',em:'🚗',
   variants:{MX:'El carro',CO:'El carro',VE:'El carro',PE:'El carro',AR:'El auto'}},
  {es:'La moto',fr:'La moto',em:'🏍️'},
  {es:'La bicicleta / La bici',fr:'Le vélo',em:'🚴'},
  // Titre de transport
  {es:'El billete',fr:'Le billet',em:'🎫',
   variants:{MX:'El boleto',AR:'El boleto',CO:'El pasaje / El boleto',VE:'El billete / El pasaje',PE:'El boleto / El pasaje'}},
 ]},
{id:'corps',level:1,emoji:'🧍',name:'El Cuerpo',sub:'Cabeza, brazo, pie… / Le corps',
   words:[
    {es:'La cabeza',fr:'La tête',em:'🗣️'},
    {es:'El pelo',fr:'Les cheveux',em:'💇‍♂️'},
    {es:'El ojo / Los ojos',fr:'L\'œil / Les yeux',em:'👀'},
    {es:'La nariz',fr:'Le nez',em:'👃'},
    {es:'La oreja / Las orejas',fr:'L\'oreille / Les oreilles',em:'👂'},
    {es:'La boca',fr:'La bouche',em:'👄'},
    {es:'Los labios',fr:'Les lèvres',em:'💋'},
    {es:'La lengua',fr:'La langue',em:'👅'},
    {es:'El diente / Los dientes',fr:'La dent / Les dents',em:'🦷'},
    {es:'El cuello',fr:'Le cou',em:''},
    {es:'El brazo / Los brazos',fr:'Le bras / Les bras',em:'💪'},
    {es:'La mano / Las manos',fr:'La main / Les mains',em:'✋'},
    {es:'El dedo / Los dedos',fr:'Le doigt / Les doigts',em:'☝️'},
    {es:'La uña / Las uñas',fr:'L\'ongle / Les ongles',em:'💅'},
    {es:'La espalda',fr:'Le dos',em:''},
    {es:'La barriga',fr:'Le ventre',em:'🫃',
     variants:{MX:'La panza',VE:'La panza',AR:'La panza',EC:'La panza',PE:'La panza',CO:'La panza'}},
    {es:'La pierna / Las piernas',fr:'La jambe / Les jambes',em:'🦵'},
    {es:'El pie / Los pies',fr:'Le pied / Les pieds',em:'🦶'},
    {es:'El corazón',fr:'Le cœur',em:'❤️'},
    {es:'El cerebro',fr:'Le cerveau',em:'🧠'},
    {es:'El hueso / Los huesos',fr:'L\'os / Les os',em:'🦴'}
   ]},
{id:'objets',level:1,emoji:'🔑',name:'Objetos del Día',sub:'Teléfono, llaves… / Objets du quotidien',
 words:[
     // Technologie
  {es:'El teléfono',fr:'Le téléphone',em:'☎️'},
  {es:'El móvil',fr:'Le portable',em:'📱',
   variants:{MX:'El celular',AR:'El celular',CO:'El celular',VE:'El celular',PE:'El celular'}},
  {es:'El ordenador',fr:'L\'ordinateur',em:'💻',
   variants:{MX:'La computadora',AR:'La computadora',CO:'El computador / La computadora',VE:'El computador',PE:'La computadora'}},
  {es:'El cargador',fr:'Le chargeur',em:'🔌'},
  // Temps
  {es:'El reloj de pulsera',fr:'La montre',em:'⌚'},
  {es:'El reloj',fr:'L\'horloge / la pendule',em:'🕐'},
  // Accessoires personnels
  {es:'Las llaves',fr:'Les clés',em:'🔑'},
  {es:'La cartera / El monedero',fr:'Le portefeuille / le porte-monnaie',em:'👛',
   variants:{MX:'La billetera / El monedero',AR:'La billetera',CO:'La billetera',VE:'La billetera',PE:'La billetera'}},
  {es:'La mochila',fr:'Le sac à dos',em:'🎒'},
  {es:'Las gafas',fr:'Les lunettes',em:'👓',
   variants:{MX:'Los lentes',AR:'Los anteojos / Lentes',CO:'Los lentes',VE:'Los lentes',PE:'Los lentes'}},
  {es:'El paraguas',fr:'Le parapluie',em:'☂️'},
  // Papeterie
  {es:'El papel',fr:'Le papier',em:'📄'},
  {es:'El bolígrafo / El boli',fr:'Le stylo / le bic',em:'🖊️',
   variants:{MX:'La pluma',AR:'La lapicera / El birome',CO:'El lapicero',VE:'El bolígrafo / El lapicero',PE:'El lapicero'}},
  {es:'Las tijeras',fr:'Les ciseaux',em:'✂️'},
  // Vaisselle
  {es:'El plato',fr:'L\'assiette',em:'🍽️'},
  {es:'El vaso',fr:'Le verre',em:'🥛'},
  {es:'La taza',fr:'La tasse',em:'☕'},
  {es:'La cuchara',fr:'La cuillère',em:'🥄'},
  {es:'El tenedor',fr:'La fourchette',em:'🍴'},
  {es:'El cuchillo',fr:'Le couteau',em:'🔪'},
  {es:'La botella',fr:'La bouteille',em:'🍶'},
  // Salle de bain / chambre
  {es:'El espejo',fr:'Le miroir',em:'🪞'},
  {es:'La toalla',fr:'La serviette',em:'🛁'},
  {es:'El jabón',fr:'Le savon',em:'🧼'},
  {es:'La almohada',fr:'L\'oreiller',em:''},
 ]},
{id:'log',level:1,emoji:'🏠',name:'La Vivienda',sub:'Le logement / Salón, cocina…',
 words:[
     // Types de logement
  {es:'La casa',fr:'La maison',em:'🏠'},
  {es:'El piso / El apartamento',fr:'L\'appartement',em:'🏢',
   variants:{MX:'El departamento',AR:'El departamento',CO:'El apartamento',VE:'El apartamento',PE:'El departamento'}},
  // Pièces principales
  {es:'La entrada / El recibidor',fr:'L\'entrée',em:'🚪'},
  {es:'El salón / El comedor',fr:'Le salon / la salle à manger',em:'🛋️',
   variants:{MX:'La sala',AR:'El living / El comedor',CO:'La sala',VE:'La sala',PE:'La sala'}},
  {es:'La cocina',fr:'La cuisine',em:'🍳'},
  {es:'La habitación / El cuarto',fr:'La chambre',em:'🛏️',
   variants:{MX:'La recámara',AR:'La pieza / El cuarto'}},
  {es:'El cuarto de baño / El baño',fr:'La salle de bain',em:'🚿'},
  {es:'El aseo / El váter',fr:'Les toilettes',em:'🚽',
   variants:{MX:'El baño',AR:'El baño / El inodoro',CO:'El baño',VE:'El baño / El sanitario',PE:'El baño'}},
  {es:'El garaje',fr:'Le garage',em:'🚗'},
 ]},
{id:'muebles_equipamiento', level:1, emoji:'🪑', name:'Muebles y Equipamiento', sub:'Meubles et équipements / Sofá, electrodomésticos, baño…',
 words:[
  // Salon
  {es:'El sofá',fr:'Le canapé',em:'🛋️'},
  {es:'El sillón',fr:'Le fauteuil',em:'💺'},
  {es:'La mesa',fr:'La table',em:''},
  {es:'La silla',fr:'La chaise',em:'🪑'},
  {es:'La lámpara',fr:'La lampe',em:'💡'},
  {es:'La estantería',fr:'L\'étagère',em:''},
  // Chambre
  {es:'La cama',fr:'Le lit',em:'🛏️'},
  {es:'El armario',fr:'L\'armoire',em:'🗄️',
   variants:{MX:'El clóset',AR:'El placard / El ropero',CO:'El clóset / El armario',VE:'El clóset',PE:'El clóset'}},
  {es:'El escritorio',fr:'Le bureau',em:'🖊️'},
  // Cuisine
  {es:'El frigorífico / La nevera',fr:'Le réfrigérateur',em:'🧊',
   variants:{MX:'El refrigerador',AR:'La heladera',CO:'La nevera / El refrigerador',VE:'La nevera',PE:'El refrigerador'}},
  {es:'El horno',fr:'Le four',em:'🔥'},
  {es:'El microondas',fr:'Le micro-ondes',em:'🔲♨️'},
  {es:'El fregadero',fr:'L\'évier',em:'🚰',
   variants:{MX:'El fregadero / La tarja',AR:'La pileta de la cocina',CO:'El lavaplatos',VE:'El fregadero',PE:'El lavadero'}},
  // Salle de bain
  {es:'El lavabo',fr:'Le lavabo',em:'🚰',
   variants:{MX:'El lavamanos',AR:'El lavatorio / La bacha',CO:'El lavamanos',VE:'El lavamanos',PE:'El lavamanos'}},
  {es:'La bañera',fr:'La baignoire',em:'🛁',
   variants:{AR:'La bañadera'}},
  {es:'La ducha',fr:'La ducha',em:'🚿'},
 ]},
{id:'veth',level:1,emoji:'👗',name:'La Ropa',sub:'Camiseta, pantalón… / Les vêtements',
   words:[
    // Niveau 1 — Vêtements du quotidien, très fréquents
    {es:'La camiseta',fr:'Le t-shirt',em:'👕',
     variants:{MX:'La playera',VE:'La franela',AR:'La remera',PE:'El polo'}},
    {es:'La camisa',fr:'La chemise',em:'👔'},
    {es:'El pantalón',fr:'Le pantalon',em:'👖'},
    {es:'Los zapatos / Las zapatillas',fr:'Les chaussures / Les baskets',em:'👟',
     variants:{MX:'Los zapatos / Los tenis',VE:'Los zapatos / Los tenis',EC:'Los zapatos / Los tenis',CO:'Los zapatos / Los tenis'}},
    {es:'Los calcetines',fr:'Les chaussettes',em:'🧦',
     variants:{MX:'Las medias',VE:'Las medias',AR:'Las medias',EC:'Las medias',PE:'Las medias',CO:'Las medias'}},
    // Niveau 2 — Vêtements courants, un peu plus spécifiques
    {es:'El vestido / La falda',fr:'La robe / La jupe',em:'👗',
     variants:{AR:'El vestido / La pollera'}},
    {es:'Los pantalones cortos / El short',fr:'Le short',em:'🩳'},
    {es:'El jersey',fr:'Le pull',em:'🧥',
     variants:{MX:'El suéter',VE:'El suéter',AR:'El buzo / El pulóver',EC:'El saco / La chompa',PE:'La chompa',CO:'El saco'}},
    {es:'La chaqueta',fr:'La veste',em:'🧥',
     variants:{MX:'La chamarra',AR:'La campera',EC:'La casaca',PE:'La casaca'}},
    {es:'El sombrero / La gorra',fr:'Le chapeau / La casquette',em:'🎩'},
    // Niveau 3 — Accessoires et vêtements saisonniers
    {es:'El abrigo',fr:'Le manteau',em:'🧥'},
    {es:'La bufanda',fr:'L\'écharpe',em:'🧣'},
    {es:'Los guantes',fr:'Les gants',em:'🧤'},
    {es:'El gorro',fr:'Le bonnet',em:'🎿'},
    {es:'El bolso / El bolsillo',fr:'Le sac / La poche',em:'👜',
     variants:{MX:'La bolsa / El bolsillo',VE:'La cartera / El bolsillo',AR:'La cartera / El bolsillo',EC:'La cartera / El bolsillo',PE:'La cartera / El bolsillo',CO:'La cartera / El bolsillo'}},
    {es:'El bañador',fr:'Le maillot de bain',em:'🩱'},
   ]},
{id:'met',level:1,emoji:'💼',name:'Las Profesiones',sub:'Médico, profe… / Les professions',
   words:[
    // Niveau 1 — Métiers du quotidien, rencontrés très fréquemment
    {es:'El/la estudiante',fr:'L\'étudiant / L\'étudiante',em:'🎓'},
    {es:'El profesor / La professora',fr:'Le professeur / La professeure',em:'👩‍🏫'},
    {es:'El camarero / La camarera',fr:'Le serveur / La serveuse',em:'🍽️',
     variants:{MX:'El mesero / La mesera',VE:'El mesero / La mesera',AR:'El mozo / La moza',EC:'El mesero / La mesera',PE:'El mesero / La mesera',CO:'El mesero / La mesera'}},
    {es:'El vendedor / La vendedora',fr:'Le vendeur / La vendeuse',em:'🏪'},
    {es:'El/la taxista',fr:'Le chauffeur de taxi / La chauffeuse de taxi',em:'🚕'},
    // Niveau 2 — Métiers courants, contextes santé & service
    {es:'El médico / La médica',fr:'Le médecin / La médecin',em:'%'},
    {es:'El enfermero / La enfermera',fr:'L\'infirmier / L\'infirmière',em:'👨‍⚕️'},
    {es:'El cocinero / La cocinera',fr:'Le cuisinier / La cuisinière',em:'👨‍🍳'},
    // Niveau 3 — Métiers plus spécifiques ou lexicalement complexes
    {es:'El fontanero / La fontanera',fr:'Le plombier / La plombière',em:'🔧',
     variants:{MX:'El plomero / La plomera',VE:'El plomero / La plomera',AR:'El plomero / La plomera',EC:'El plomero / La plomera',PE:'El gasfitero / La gasfitera',CO:'El plomero / La plomera'}},
    {es:'El informático / La informática',fr:'L\'informaticien / L\'informaticienne',em:'💻'},
   ]},
{id:'sante',level:1,emoji:'🏥',name:'La Salud',sub:'Médico, farmacia… / La santé',
   words:[
    {es:'Doler / Me duele',fr:'Faire mal / j\'ai mal (me duele la cabeza = j\'ai mal à la tête)',em:'🤕'},
    {es:'Tener dolor',fr:'Avoir une douleur (plus formel)',em:'😣'},
    {es:'La fiebre',fr:'La fièvre',em:'🌡️'},
    {es:'La tos',fr:'La toux',em:'😮‍💨'},
    {es:'El pañuelo',fr:'Le mouchoir',em:'🤧',
     variants:{MX:'El clínex / El pañuelo',VE:'El clínex',AR:'La carilina / El pañuelo',CO:'El clínex / El pañuelo'}},
    {es:'El termómetro',fr:'Le thermomètre',em:'🌡️'},
    {es:'La cita',fr:'Le rendez-vous',em:'📅'},
    {es:'El médico / La médica',fr:'Le médecin / La médecin',em:'🩺'},
    {es:'El/la paciente',fr:'Le/la patient(e)',em:'🛏️'},
    {es:'La consulta médica',fr:'La consultation médicale',em:'📋'},
    {es:'El enfermero / La enfermera',fr:'L\'infirmier / L\'infirmière)',em:'👨‍⚕️'},
    {es:'El hospital',fr:'L\'hôpital',em:'🏥'},
    {es:'La receta médicale',fr:'L\'ordonnance',em:'📋'},
    {es:'La farmacia',fr:'La pharmacie',em:'🏪',
     variants:{CO:'La droguería'}},
    {es:'El medicamento',fr:'Le médicament',em:'💊'},
    {es:'La pastilla',fr:'Le comprimé',em:'💊'},
    {es:'La vacuna',fr:'Le vaccin',em:'💉'},
    {es:'La tirita',fr:'Le pansement adhésif',em:'🩹',
     variants:{MX:'La curita',VE:'La curita',AR:'La curita',EC:'La curita',PE:'La curita',CO:'La curita'}},
    {es:'El vendaje',fr:'Le bandage',em:'🩼'},
    {es:'La ambulancia',fr:'L\'ambulance',em:'🚑'},
    {es:'Las urgencias',fr:'Les urgences',em:'🆘',
     variants:{MX:'Emergencias',VE:'Emergencias',AR:'La guardia',EC:'Emergencias',PE:'Emergencias',CO:'Urgencias / Emergencias'}}
   ]},
  {id:'viaje',level:1,emoji:'🧳',name:'El Viaje',sub:'Le voyage / Maleta, hotel, pasaporte…',
 words:[
 // Préparation
  {es:'El pasaporte',fr:'Le passeport',em:'🛂'},
  {es:'La maleta',fr:'La valise',em:'🧳',
   variants:{AR:'La valija'}},
  {es:'El equipaje',fr:'Les bagages',em:'🎒'},
  {es:'El billete',fr:'Le billet',em:'🎫',
   variants:{MX:'El boleto',AR:'El boleto / El pasaje',CO:'El boleto / El pasaje',VE:'El boleto / El pasaje',PE:'El boleto / El pasaje'}},
  {es:'La reserva',fr:'La réservation',em:'📋'},
  {es:'La agencia de viajes',fr:'L\'agence de voyages',em:'🗺️'},
  {es:'El seguro de viaje',fr:'L\'assurance voyage',em:'📄'},
  // Transport
  {es:'El avión',fr:'L\'avion',em:'✈️'},
  {es:'El aeropuerto',fr:'L\'aéroport',em:'🛫'},
  {es:'La salida',fr:'Le départ',em:'🚪'},
  {es:'La llegada',fr:'L\'arrivée',em:'🛬'},
  {es:'La aduana',fr:'La douane',em:'🛃'},
  {es:'El crucero',fr:'La croisière',em:'🚢'},
  // Hébergement
  {es:'El hotel',fr:'L\'hôtel',em:'🏨'},
  {es:'La habitación doble o individual',fr:'La chambre double ou simple',em:'🛏️'},
  // Destinations
  {es:'La playa',fr:'La plage',em:'🏖️'},
  {es:'La montaña',fr:'La montagne',em:'⛰️'},
  {es:'El turista',fr:'Le touriste',em:'📸'},
 ]},
{id:'pays',level:1,emoji:'🌍',name:'Los Países',sub:'Les pays / Francia, España…',
   words:[
    // Niveau 1 — Voisins immédiats & pays très proches culturellement
    {es:'Francia',fr:'La France',em:'🇫🇷'},
    {es:'España',fr:'L\'Espagne',em:'🇪🇸'},
    {es:'Portugal',fr:'Le Portugal',em:'🇵🇹'},
    {es:'Italia',fr:'L\'Italie',em:'🇮🇹'},
    {es:'Bélgica',fr:'La Belgique',em:'🇧🇪'},
    {es:'Suiza',fr:'La Suisse',em:'🇨🇭'},
    {es:'Alemania',fr:'L\'Allemagne',em:'🇩🇪'},
    {es:'Reino Unido',fr:'Le Royaume-Uni',em:'🇬🇧'},
    // Niveau 2 — Monde hispanophone & francophone proches
    {es:'México',fr:'Le Mexique',em:'🇲🇽'},
    {es:'Colombia',fr:'La Colombie',em:'🇨🇴'},
    {es:'Argentina',fr:'L\'Argentine',em:'🇦🇷'},
    {es:'Brasil',fr:'Le Brésil',em:'🇧🇷'},
    {es:'Canadá',fr:'Le Canada',em:'🇨🇦'},
    {es:'Marruecos',fr:'Le Maroc',em:'🇲🇦'},
    // Niveau 3 — Grandes puissances mondiales & pays plus distants
    {es:'Estados Unidos',fr:'Les États-Unis',em:'🇺🇸',
     variants:{MX:'EE. UU.',AR:'EE. UU.',CO:'EE. UU.',VE:'EE. UU.',PE:'EE. UU.',}},
    {es:'Rusia',fr:'La Russie',em:'🇷🇺'},
    {es:'China',fr:'La Chine',em:'🇨🇳'},
    {es:'Japón',fr:'Le Japon',em:'🇯🇵'},
    {es:'India',fr:'L\'Inde',em:'🇮🇳'},
    {es:'Turquía',fr:'La Turquie',em:'🇹🇷'},
    {es:'Grecia',fr:'La Grèce',em:'🇬🇷'},
    {es:'Australia',fr:'L\'Australie',em:'🇦🇺'},
    {es:'Sudáfrica',fr:'L\'Afrique du Sud',em:'🇿🇦'},
   ]},
 {id:'ocio', level:1, emoji:'⛰️', name:'El Ocio', sub:'Les loisirs / Deporte, senderismo, lectura…',
  words:[
    // Loisirs culturels
    {es:'La lectura',fr:'La lecture',em:'📚'},
    {es:'El libro',fr:'Le livre',em:'📖'},
    {es:'La música',fr:'La musique',em:'🎵'},
    {es:'El cine',fr:'Le cinéma',em:'🎬'},
    {es:'El teatro',fr:'Le théâtre',em:'🎭'},
    // Sport général
    {es:'El deporte',fr:'Le sport',em:''},
    {es:'El fútbol',fr:'Le football',em:'⚽'},
    {es:'La natación',fr:'La natation',em:'🏊'},
    {es:'El ciclismo',fr:'Le cyclisme',em:'🚴'},
    {es:'El atletismo',fr:'L\'athlétisme',em:'🏃'},
    // Plein air
    {es:'El senderismo',fr:'La randonnée',em:'🥾',
     variants:{MX:'El excursionismo',AR:'El trekking',CO:'El excursionismo / El trekking',PE:'El trekking'}},
    {es:'La marcha nórdica',fr:'La marche nordique',em:''},
    {es:'El paseo',fr:'La promenade',em:'🌳'},
    // Verbes utiles
    {es:'Jugar',fr:'Jouer',em:'🎮'},
    {es:'Practicar',fr:'Pratiquer',em:'💪'},
    {es:'Descansar',fr:'Se reposer',em:'😴'},
    {es:'Disfrutar',fr:'Profiter / Apprécier',em:'😊'},
  ]},
 {id: 'plan',
  level: 1,
  emoji: '🌿',
  name: 'Las Plantas',
  sub: 'Les plantes / Flor, árbol, bosque…',
  words: [
    // Éléments botaniques de base
    {es: 'La flor', fr: 'La fleur', em: '🌸'},
    {es: 'El árbol', fr: 'L\'arbre', em: '🌳'},
    {es: 'La hoja', fr: 'La feuille', em: '🍃'},
    {es: 'La hierba', fr: 'L\'herbe', em: '🌱'},
    
    // Références culturelles régionales (Plantes brutes)
    {es: 'El olivo', fr: 'L\'olivier', em: '🫒'}, // Provence 🇫🇷 / Andalousie 🇪🇸
    {es: 'El girasol', fr: 'Le tournesol', em: '🌻'}, // Midi toulousain 🇫🇷 / Castille 🇪🇸
    {es: 'La viña', fr: 'La vigne', em: '🍇'}, // Bordelais, Bourgogne 🇫🇷 / La Rioja 🇪🇸
    {es: 'El cactus', fr: 'Le cactus', em: '🌵'}, // Côte d'Azur 🇫🇷 / Mexique 🇲🇽 (Symbole national)
    {es: 'La palmera', fr: 'Le palmier', em: '🌴'}, // Riviera française 🇫🇷 / Colombie & Caraïbes 🇨🇴 (Palma de cera)

    // Niveau 2 — Espaces & pelouses
    {es: 'El jardín', fr: 'Le jardin', em: '🏡'},
    {es: 'La rosa', fr: 'La rose', em: '🌹'},
    {es: 'El bosque', fr: 'La forêt', em: '🌲'},
    { es: 'El césped', 
      fr: 'La pelouse / Le gazon', 
      em: '⛳',
      variants: {MX: 'El pasto', VE: 'La grama', AR: 'El pasto', EC: 'El pasto', PE: 'El pasto / El grass', CO: 'El pasto'}},
   ]},   
 {id:'anim',level:1,emoji:'🐘',name:'Los Animales',sub:'Les animaux / Perro, gato, toro…',
   words:[
    // Niveau 1 — Animaux familiers & de la ferme, très connus
    {es:'El perro',fr:'Le chien',em:'🐶'},
    {es:'El gato',fr:'Le chat',em:'🐱'},
    {es:'El pájaro',fr:'L\'oiseau',em:'🐦'},
    {es:'El pez',fr:'Le poisson (vivant)',em:'🐟'},
    {es:'El caballo',fr:'Le cheval',em:'🐴'},
    {es:'La vaca',fr:'La vache',em:'🐮'},
    {es:'El cerdo',fr:'Le cochon',em:'🐷',
     variants:{MX:'El puerco / El cochino',VE:'El cochino',AR:'El chancho',EC:'El chancho',PE:'El chancho',CO:'El marrano / El cerdo'}},
    {es:'La gallina',fr:'La poule',em:'🐔'},
    {es:'El conejo',fr:'Le lapin',em:'🐰'},
    // Niveau 2 — Animaux courants (ferme, nature, sauvages connus)
    {es:'El pescado',fr:'Le poisson (dans l\'assiette)',em:'🐟🍽️'},
    {es:'El toro',fr:'Le taureau',em:'🐂'},
    {es:'El pato',fr:'Le canard',em:'🦆'},
    {es:'El gallo',fr:'Le coq',em:'🐓'},
    {es:'El cordero',fr:'L\'agneau',em:'🐑'},
    {es:'La cabra',fr:'La chèvre',em:'🐐'},
    {es:'El burro',fr:'L\'âne',em:'🫏'},
    {es:'El elefante',fr:'L\'éléphant',em:'🐘'},
    {es:'El oso',fr:'L\'ours',em:'🐻'},
    {es:'El tigre',fr:'Le tigre',em:'🐯'},
    // Niveau 3 — Animaux plus rares, insectes, reptiles & lexique spécifique
    {es:'El delfín',fr:'Le dauphin',em:'🐬'},
    {es:'La ballena',fr:'La baleine',em:'🐳'},
    {es:'El águila',fr:'L\'aigle',em:'🦅'},
    {es:'La mariposa',fr:'Le papillon',em:'🦋'},
    {es:'La rana',fr:'La grenouille',em:'🐸'},
    {es:'La serpiente',fr:'Le serpent',em:'🐍'},
    {es:'El lagarto',fr:'Le lézard',em:'🦎'},
    {es:'La araña',fr:'L\'araignée',em:'🕷️'},
    {es:'El mosquito',fr:'Le moustique',em:'🦟',
     variants:{MX:'El zancudo',VE:'El zancudo',AR:'El mosquito',EC:'El zancudo',PE:'El zancudo',CO:'El zancudo'}},
    {es:'La hormiga',fr:'La fourmi',em:'🐜'},
   ]},
{id: 'agric',
  level: 1,
  emoji: '🌾',
  name: 'Agricultura y Ganadería',
  sub: 'Agriculture et élevage / Campo, cosecha, animales',
  words: [
    // Lieux de production et espaces agricoles
    {es: 'El campo', fr: 'La campagne / Le champ', em: '🌾'},
    {es: 'La granja', fr: 'La ferme', em: '🏚️'},
    {es: 'El huerto', fr: 'Le potager / Le verger', em: '🥕'},
    {es: 'El viñedo', fr: 'Le vignoble', em: '🍇'}, // Bordeaux, Champagne 🇫🇷 / La Rioja 🇪🇸
    {es: 'El olivar', fr: 'L\'oliveraie', em: '🫒'}, // Provence 🇫🇷 / Jaén (Andalousie) 🇪🇸
    
    // Travaux agricoles & Acteurs
    {es: 'Cultivar / Sembrar', fr: 'Cultiver / Semer', em: '🌱'},
    {es: 'Cosechar / La cosecha', fr: 'Récolter / La récolte', em: '🌾'},
    {es: 'Regar', fr: 'Arroser / Irriguer', em: '💧'},
    {es: 'El tractor', fr: 'Le tracteur', em: '🚜'},
    {es: 'Los agricultores', fr: 'Les agriculteurs / Les paysans', em: '👨‍🌾'},
    {es: 'El mercado de agricultores', fr: 'Le marché fermier', em: '🧺'},
    
    // Monde de l'Élevage (Ganadería)
    {es: 'La ganadería', fr: 'L\'élevage', em: '🐄'},
    {es: 'El rebaño', fr: 'Le troupepeau', em: '🐑'},
    {es: 'El pastor / La pastora', fr: 'Le berger / La bergère', em: '🐑'}, // Alpes/Pyrénées 🇫🇷 / Pampa 🇦🇷
    {es: 'Ordeñar', fr: 'Traire', em: '🐄'},
    {es: 'La leche fresca', fr: 'Le lait frais', em: '🥛'},
    
    // Produits de Terroir d'exception (Produits transformés)
    {es: 'El queso artesanal', fr: 'Le fromage artisanal', em: '🧀'}, // Roquefort/Comté 🇫🇷 / Manchego 🇪🇸
    {es: 'El aceite de oliva virgen extra', fr: 'L\'huile d\'olive vierge extra', em: '🫒'}, 
    {es: 'El jamón ibérico', fr: 'Le jambon ibérique', em: '🍖'}, // Jambon de Bayonne 🇫🇷 / Jamón de Jabugo 🇪🇸
    {es: 'El vino', fr: 'Le vin', em: '🍷'}, // Grands crus français 🇫🇷 / Ribera del Duero 🇪🇸
    {es: 'La trufa', fr: 'La truffe', em: '🍄'}, // Périgord 🇫🇷 / Teruel (Aragon) 🇪🇸
 ]}
];

 /* ========================================
   Español Castillan → Français 🇪🇸 – Niveau 2
   14 situations de dialogues — Niveau A1
   Français débutant en Espagne
   © 2026 Sébastien Godet
======================================== */
/* ═══════════════════════════════════════════════════════════
   1b. LEVEL2_THEMES_FR — Dialogues situationnels (Niveau 2)
   ─────────────────────────────────────────────────────────
   Public : apprenant francophone débutant en Espagnol (A1)
   Contexte : situations de la vie réelle en Espagne
   16 thèmes · 3 situations par thème · 3 questions de quiz
   Questions de quiz formulées en ESPAGNOL
   (ex : "¿Qué significa X ?" / "¿Cómo se dice Y en español ?")
═══════════════════════════════════════════════════════════ */

var LEVEL2_THEMES_FR = [
 
/* 1 ── Saluer et prendre des nouvelles */
  {id:'salut2',level:2,emoji:'👋',name:'Saludos',sub:'Saluer quelqu\'un',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans la rue',img:'🏘️',dialogue:[
      {s:'Lucas',es:'¡Hola! ¿Qué tal?',fr:'Salut ! Ça va ?',side:'left'},
      {s:'Ana',es:'¡Bien, gracias! ¿Y tú?',fr:'Bien, merci ! Et toi ?',side:'right'},
      {s:'Lucas',es:'Más o menos. Estoy cansado.',fr:'Comme ci comme ça. Je suis fatigué.',side:'left'},
      {s:'Ana',es:'¡Vaya! Lo siento.',fr:'Oh ! Je suis désolée.',side:'right'},
      {s:'Lucas',es:'Gracias. ¡Hasta luego!',fr:'Merci. À plus !',side:'left'},
      {s:'Ana',es:'¡Hasta pronto!',fr:'À bientôt !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Au bureau le matin',img:'💼',dialogue:[
      {s:'Pedro',es:'¡Buenos días! ¿Cómo estás?',fr:'Bonjour ! Comment tu vas ?',side:'left'},
      {s:'María',es:'Bien, gracias. ¿Y tú?',fr:'Bien, merci. Et toi ?',side:'right'},
      {s:'Pedro',es:'Un poco cansado. ¿Quieres café?',fr:'Un peu fatigué. Tu veux un café ?',side:'left'},
      {s:'María',es:'Sí, por favor. ¡Gracias!',fr:'Oui, s\'il te plaît. Merci !',side:'right'},
      {s:'Pedro',es:'De nada. ¡Aquí tienes!',fr:'De rien. Voilà !',side:'left'}
    ]},
    {label:'Sit. 3',title:'Retrouver un ami en terrasse',img:'☀️',dialogue:[
      {s:'Carlos',es:'¡Hola! ¿Qué tal estás?',fr:'Salut ! Comment tu vas ?',side:'left'},
      {s:'Sofía',es:'¡Muy bien! ¿Y tú?',fr:'Très bien ! Et toi ?',side:'right'},
      {s:'Carlos',es:'Bien. ¿Qué hay de nuevo?',fr:'Bien. Quoi de neuf ?',side:'left'},
      {s:'Sofía',es:'Nada especial. ¿Tomamos algo?',fr:'Rien de spécial. On prend quelque chose ?',side:'right'},
      {s:'Carlos',es:'¡Buena idea! Tengo sed.',fr:'Bonne idée ! J\'ai soif.',side:'left'},
      {s:'Sofía',es:'¡Yo también!',fr:'Moi aussi !',side:'right'}
    ]}
   ],
   vocab:['¿Qué tal? = Ça va ?','Bien, gracias = Bien, merci','Más o menos = Comme ci comme ça','Estoy cansado = Je suis fatigué','Lo siento = Je suis désolé(e)','¡Hasta luego! = À plus !','¿Qué hay de nuevo? = Quoi de neuf ?'],
   quiz:[
    {q:'¿Qué significa "Más o menos"?',opts:['Très bien','Très mal','Comme ci comme ça','Je suis fatigué'],ans:2},
    {q:'¿Cómo se dice "Je suis désolé" en español?',opts:['Gracias','Lo siento','De nada','Perdona'],ans:1},
    {q:'¿Qué significa "¡Hasta luego!"?',opts:['Bonjour !','Merci !','À plus !','S\'il vous plaît !'],ans:2}
   ]},
 
  /* 2 ── Se présenter */
  {id:'pres2',level:2,emoji:'🙋',name:'Presentarse',sub:'Se présenter',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans un cours d\'espagnol',img:'📚',dialogue:[
      {s:'Profesora',es:'¡Hola! ¿Cómo te llamas?',fr:'Bonjour ! Tu t\'appelles comment ?',side:'right'},
      {s:'Marc',es:'Me llamo Marc. ¿Y tú?',fr:'Je m\'appelle Marc. Et toi ?',side:'left'},
      {s:'Profesora',es:'Yo soy Laura. ¿De dónde eres, Marc?',fr:'Je suis Laura. Tu es d\'où, Marc ?',side:'right'},
      {s:'Marc',es:'Soy de Francia, de París. ¿Y tú?',fr:'Je suis de France, de Paris. Et toi ?',side:'left'},
      {s:'Profesora',es:'Soy de Madrid. ¡Bienvenido!',fr:'Je suis de Madrid. Bienvenue !',side:'right'},
      {s:'Marc',es:'¡Gracias!',fr:'Merci !',side:'left'}
    ]},
    {label:'Sit. 2',title:'Rencontre dans le quartier',img:'🏙️',dialogue:[
      {s:'Vecino',es:'¡Hola! ¿Eres nuevo aquí?',fr:'Bonjour ! Tu es nouveau ici ?',side:'right'},
      {s:'Julie',es:'Sí. Me llamo Julie. Soy francesa.',fr:'Oui. Je m\'appelle Julie. Je suis française.',side:'left'},
      {s:'Vecino',es:'Yo soy Antonio. ¿Hablas español?',fr:'Moi je suis Antonio. Tu parles espagnol ?',side:'right'},
      {s:'Julie',es:'Un poco. Estoy aprendiendo.',fr:'Un peu. Je suis en train d\'apprendre.',side:'left'},
      {s:'Vecino',es:'¡Muy bien! Tu español es bueno.',fr:'Très bien ! Ton espagnol est bon.',side:'right'},
      {s:'Julie',es:'¡Gracias! Eres muy amable.',fr:'Merci ! Tu es très gentil.',side:'left'}
    ]},
    {label:'Sit. 3',title:'À une fête',img:'🎉',dialogue:[
      {s:'Chica',es:'¡Hola! ¿Cómo te llamas?',fr:'Salut ! Tu t\'appelles comment ?',side:'right'},
      {s:'Thomas',es:'Thomas. ¿Y tú?',fr:'Thomas. Et toi ?',side:'left'},
      {s:'Chica',es:'Yo soy Lucía. ¿Eres francés?',fr:'Moi je suis Lucía. Tu es français ?',side:'right'},
      {s:'Thomas',es:'Sí, soy de Lyon. ¿Y tú eres de Madrid?',fr:'Oui, je suis de Lyon. Et toi tu es de Madrid ?',side:'left'},
      {s:'Chica',es:'No, soy de Barcelona. ¡Encantada!',fr:'Non, je suis de Barcelone. Enchantée !',side:'right'},
      {s:'Thomas',es:'¡Encantado!',fr:'Enchanté !',side:'left'}
    ]}
   ],
   vocab:['Me llamo = Je m\'appelle','¿De dónde eres? = Tu es d\'où ?','Soy de = Je suis de','Soy francés / francesa = Je suis français(e)','Estoy aprendiendo = Je suis en train d\'apprendre','¡Bienvenido! = Bienvenue !','¡Encantado(a)! = Enchanté(e) !'],
   quiz:[
    {q:'¿Cómo se dice "Je m\'appelle" en español?',opts:['Soy','Me llamo','Tengo','Vivo'],ans:1},
    {q:'¿Qué significa "¿De dónde eres?"?',opts:['Comment tu t\'appelles ?','Quel âge tu as ?','Tu es d\'où ?','Tu habites où ?'],ans:2},
    {q:'¿Cómo se dice "Enchanté" en español?',opts:['Gracias','Lo siento','Perdona','¡Encantado!'],ans:3}
   ]},
 
  /* 3 ── Demander son chemin */
  {id:'chemin2',level:2,emoji:'🗺️',name:'Pedir camino',sub:'Demander son chemin',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Trouver la gare',img:'🚉',dialogue:[
      {s:'Turista',es:'Perdona, ¿dónde está la estación?',fr:'Pardon, où est la gare ?',side:'left'},
      {s:'Señora',es:'Sigue todo recto y gira a la izquierda.',fr:'Continue tout droit et tourne à gauche.',side:'right'},
      {s:'Turista',es:'¿Está lejos?',fr:'C\'est loin ?',side:'left'},
      {s:'Señora',es:'No, está cerca. Son cinco minutos.',fr:'Non, c\'est près. C\'est cinq minutes.',side:'right'},
      {s:'Turista',es:'Muchas gracias.',fr:'Merci beaucoup.',side:'left'},
      {s:'Señora',es:'¡De nada!',fr:'De rien !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Trouver une pharmacie',img:'💊',dialogue:[
      {s:'Marc',es:'Perdona, ¿hay una farmacia cerca?',fr:'Pardon, il y a une pharmacie près d\'ici ?',side:'left'},
      {s:'Chico',es:'Sí. Baja esta calle y gira a la derecha.',fr:'Oui. Descends cette rue et tourne à droite.',side:'right'},
      {s:'Marc',es:'¿Después del banco?',fr:'Après la banque ?',side:'left'},
      {s:'Chico',es:'Sí, exacto. Es la puerta verde.',fr:'Oui, exactement. C\'est la porte verte.',side:'right'},
      {s:'Marc',es:'¿Está abierta ahora?',fr:'Elle est ouverte maintenant ?',side:'left'},
      {s:'Chico',es:'Sí, creo que sí.',fr:'Oui, je crois que oui.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Trouver un supermarché',img:'🛒',dialogue:[
      {s:'Julie',es:'Perdone, ¿hay un supermercado aquí?',fr:'Pardon, il y a un supermarché ici ?',side:'left'},
      {s:'Señor',es:'Sí, está enfrente, al lado del bar.',fr:'Oui, il est en face, à côté du bar.',side:'right'},
      {s:'Julie',es:'¿A la derecha o a la izquierda?',fr:'À droite ou à gauche ?',side:'left'},
      {s:'Señor',es:'A la derecha. Es muy grande.',fr:'À droite. Il est très grand.',side:'right'},
      {s:'Julie',es:'¡Perfecto! Gracias.',fr:'Parfait ! Merci.',side:'left'},
      {s:'Señor',es:'¡De nada, que aproveche!',fr:'De rien, bonne journée !',side:'right'}
    ]}
   ],
   vocab:['Perdona / Perdone = Pardon / Excusez-moi','¿Dónde está...? = Où est... ?','Todo recto = Tout droit','A la izquierda = À gauche','A la derecha = À droite','Cerca = Près','Lejos = Loin'],
   quiz:[
    {q:'¿Cómo se dice "Tout droit" en español?',opts:['A la derecha','A la izquierda','Todo recto','Enfrente'],ans:2},
    {q:'¿Qué significa "¿Hay una farmacia cerca?"?',opts:['La pharmacie est fermée','Il y a une pharmacie près d\'ici ?','Où est la pharmacie ?','La pharmacie est loin ?'],ans:1},
    {q:'¿Cómo se dice "À gauche" en español?',opts:['Todo recto','A la derecha','Detrás','A la izquierda'],ans:3}
   ]},
 
  /* 4 ── Au bar */
  {id:'bar2',level:2,emoji:'☕',name:'En el bar',sub:'Commander au bar',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Commande simple',img:'☕',dialogue:[
      {s:'Cliente',es:'¡Hola! Un café con leche, por favor.',fr:'Bonjour ! Un café au lait, s\'il vous plaît.',side:'left'},
      {s:'Camarero',es:'¿Solo o con leche?',fr:'Noir ou au lait ?',side:'right'},
      {s:'Cliente',es:'Con leche, por favor.',fr:'Au lait, s\'il vous plaît.',side:'left'},
      {s:'Camarero',es:'¿Quiere azúcar?',fr:'Vous voulez du sucre ?',side:'right'},
      {s:'Cliente',es:'Sí, uno. ¿Cuánto es?',fr:'Oui, un. C\'est combien ?',side:'left'},
      {s:'Camarero',es:'Un euro cincuenta.',fr:'Un euro cinquante.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Commander des tapas',img:'🍢',dialogue:[
      {s:'Camarero',es:'¿Qué van a tomar?',fr:'Qu\'est-ce que vous prenez ?',side:'right'},
      {s:'Clara',es:'Una cerveza, por favor.',fr:'Une bière, s\'il vous plaît.',side:'left'},
      {s:'Tomás',es:'Y yo, un agua. ¿Tienen tapas?',fr:'Et moi, une eau. Vous avez des tapas ?',side:'right'},
      {s:'Camarero',es:'Sí. Hay patatas bravas y jamón.',fr:'Oui. Il y a des patatas bravas et du jambon.',side:'right'},
      {s:'Clara',es:'¡Perfecto! Unas patatas bravas, por favor.',fr:'Parfait ! Des patatas bravas, s\'il vous plaît.',side:'left'},
      {s:'Camarero',es:'¡En seguida!',fr:'Tout de suite !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Payer l\'addition',img:'🧾',dialogue:[
      {s:'Cliente',es:'La cuenta, por favor.',fr:'L\'addition, s\'il vous plaît.',side:'left'},
      {s:'Camarero',es:'Son ocho euros.',fr:'C\'est huit euros.',side:'right'},
      {s:'Cliente',es:'¿Se puede pagar con tarjeta?',fr:'On peut payer par carte ?',side:'left'},
      {s:'Camarero',es:'Sí, claro.',fr:'Oui, bien sûr.',side:'right'},
      {s:'Cliente',es:'Aquí tiene. Gracias.',fr:'Voilà. Merci.',side:'left'},
      {s:'Camarero',es:'¡Gracias a usted! ¡Hasta pronto!',fr:'Merci à vous ! À bientôt !',side:'right'}
    ]}
   ],
   vocab:['Un café con leche = Un café au lait','Un café solo = Un café noir','¿Cuánto es? = C\'est combien ?','La cuenta = L\'addition','¿Se puede pagar con tarjeta? = On peut payer par carte ?','Las patatas bravas = Les patatas bravas','¡En seguida! = Tout de suite !'],
   quiz:[
    {q:'¿Cómo se dice "Un café noir" en España?',opts:['Un café con leche','Un cortado','Un café solo','Un café frío'],ans:2},
    {q:'¿Qué significa "La cuenta, por favor"?',opts:['Le menu, s\'il vous plaît','L\'addition, s\'il vous plaît','Un café, s\'il vous plaît','L\'eau, s\'il vous plaît'],ans:1},
    {q:'¿Cómo se dice "C\'est combien ?" en español?',opts:['¿Dónde está?','¿Qué es?','¿Cuánto es?','¿Cómo se llama?'],ans:2}
   ]},
 
  /* 5 ── Au restaurant */
  {id:'resto2',level:2,emoji:'🍽️',name:'En el restaurante',sub:'Au restaurant',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Avoir une table',img:'🪑',dialogue:[
      {s:'Cliente',es:'Hola, ¿tiene una mesa para dos?',fr:'Bonjour, vous avez une table pour deux ?',side:'left'},
      {s:'Camarera',es:'Sí, por aquí, por favor.',fr:'Oui, par ici, s\'il vous plaît.',side:'right'},
      {s:'Cliente',es:'Gracias. ¿Tiene el menú del día?',fr:'Merci. Vous avez le menu du jour ?',side:'left'},
      {s:'Camarera',es:'Sí. Hoy hay sopa, pollo y postre.',fr:'Oui. Aujourd\'hui il y a soupe, poulet et dessert.',side:'right'},
      {s:'Cliente',es:'¿Cuánto cuesta el menú?',fr:'Le menu coûte combien ?',side:'left'},
      {s:'Camarera',es:'Doce euros, bebida incluida.',fr:'Douze euros, boisson comprise.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Commander à table',img:'🥗',dialogue:[
      {s:'Camarero',es:'¿Están listos para pedir?',fr:'Vous êtes prêts à commander ?',side:'right'},
      {s:'Sophie',es:'Sí. De primero, una ensalada.',fr:'Oui. En entrée, une salade.',side:'left'},
      {s:'Camarero',es:'¿Y de segundo?',fr:'Et en plat ?',side:'right'},
      {s:'Sophie',es:'El pollo, por favor. ¿Tiene algo sin carne?',fr:'Le poulet, s\'il vous plaît. Vous avez quelque chose sans viande ?',side:'left'},
      {s:'Camarero',es:'Sí, hay verduras a la plancha.',fr:'Oui, il y a des légumes grillés.',side:'right'},
      {s:'Sophie',es:'Perfecto, eso quiero.',fr:'Parfait, c\'est ça que je veux.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Un problème avec la commande',img:'🤔',dialogue:[
      {s:'Cliente',es:'Perdona, esto no es lo que pedí.',fr:'Pardon, ce n\'est pas ce que j\'ai commandé.',side:'left'},
      {s:'Camarero',es:'Lo siento. ¿Qué pidió usted?',fr:'Je suis désolé. Qu\'est-ce que vous avez commandé ?',side:'right'},
      {s:'Cliente',es:'Pedí el pescado, no la carne.',fr:'J\'ai commandé le poisson, pas la viande.',side:'left'},
      {s:'Camarero',es:'Disculpe, ahora mismo lo cambio.',fr:'Excusez-moi, je le change tout de suite.',side:'right'},
      {s:'Cliente',es:'Gracias.',fr:'Merci.',side:'left'},
      {s:'Camarero',es:'¡Lo siento mucho!',fr:'Je suis vraiment désolé !',side:'right'}
    ]}
   ],
   vocab:['¿Tiene mesa para dos? = Vous avez une table pour deux ?','El menú del día = Le menu du jour','De primero = En entrée','De segundo = En plat','Sin carne = Sans viande','Bebida incluida = Boisson comprise','Esto no es lo que pedí = Ce n\'est pas ce que j\'ai commandé'],
   quiz:[
    {q:'¿Qué es "El menú del día" en España?',opts:['La carte du soir','Le menu du jour à prix fixe','Le plat du chef','Un menu gastronomique'],ans:1},
    {q:'¿Cómo se dice "En entrée" en español?',opts:['De postre','De segundo','Para beber','De primero'],ans:3},
    {q:'¿Qué significa "Sin carne"?',opts:['Avec de la viande','Sans poisson','Sans viande','Avec du poulet'],ans:2}
   ]},
 
  /* 6 ── Faire des courses */
  {id:'compras2',level:2,emoji:'🛍️',name:'De compras',sub:'Acheter des choses / Faire ses courses',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Au marché',img:'🧺',dialogue:[
      {s:'Cliente',es:'Buenos días. ¿Cuánto cuestan los tomates?',fr:'Bonjour. Combien coûtent les tomates ?',side:'left'},
      {s:'Vendedor',es:'Dos euros el kilo.',fr:'Deux euros le kilo.',side:'right'},
      {s:'Cliente',es:'Quiero un kilo, por favor.',fr:'Je veux un kilo, s\'il vous plaît.',side:'left'},
      {s:'Vendedor',es:'¿Algo más?',fr:'Autre chose ?',side:'right'},
      {s:'Cliente',es:'Sí, ¿tiene naranjas?',fr:'Oui, vous avez des oranges ?',side:'left'},
      {s:'Vendedor',es:'Sí. Son un euro el kilo.',fr:'Oui. C\'est un euro le kilo.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Dans un magasin de vêtements',img:'👗',dialogue:[
      {s:'Dependienta',es:'¡Hola! ¿Le puedo ayudar?',fr:'Bonjour ! Je peux vous aider ?',side:'right'},
      {s:'Lucie',es:'Sí, busco una camiseta.',fr:'Oui, je cherche un t-shirt.',side:'left'},
      {s:'Dependienta',es:'¿Qué talla tiene?',fr:'Vous faites quelle taille ?',side:'right'},
      {s:'Lucie',es:'La talla mediana.',fr:'La taille moyenne.',side:'left'},
      {s:'Dependienta',es:'¿Puede probársela? El probador está aquí.',fr:'Vous pouvez l\'essayer ? La cabine est là.',side:'right'},
      {s:'Lucie',es:'¡Gracias! ¿Cuánto cuesta?',fr:'Merci ! Elle coûte combien ?',side:'left'}
    ]},
    {label:'Sit. 3',title:'À la caisse',img:'🛒',dialogue:[
      {s:'Cajero',es:'¡Hola! ¿Todo bien?',fr:'Bonjour ! Tout va bien ?',side:'right'},
      {s:'Cliente',es:'Sí, gracias. ¿Cuánto es todo?',fr:'Oui, merci. C\'est combien en tout ?',side:'left'},
      {s:'Cajero',es:'Son quince euros con veinte.',fr:'C\'est quinze euros vingt.',side:'right'},
      {s:'Cliente',es:'¿Puedo pagar con tarjeta?',fr:'Je peux payer par carte ?',side:'left'},
      {s:'Cajero',es:'Sí, sin problema.',fr:'Oui, sans problème.',side:'right'},
      {s:'Cliente',es:'Aquí tiene. ¡Gracias!',fr:'Voilà. Merci !',side:'left'}
    ]}
   ],
   vocab:['¿Cuánto cuesta? = Combien ça coûte ?','Quiero = Je veux','¿Algo más? = Autre chose ?','Busco = Je cherche','La talla = La taille','El probador = La cabine d\'essayage','¿Cuánto es todo? = C\'est combien en tout ?'],
   quiz:[
    {q:'¿Cómo se dice "Je cherche" en español?',opts:['Tengo','Quiero','Busco','Compro'],ans:2},
    {q:'¿Qué significa "¿Algo más?"',opts:['C\'est tout ?','Autre chose ?','Vous avez ça ?','C\'est combien ?'],ans:1},
    {q:'¿Cómo se dice "La taille" (vêtement) en español?',opts:['El color','El precio','La talla','El número'],ans:2}
   ]},
 
  /* 7 ── Prendre les transports */
  {id:'transp2',level:2,emoji:'🚌',name:'El transporte',sub:'Les transports',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans le métro',img:'🚇',dialogue:[
      {s:'Viajero',es:'Perdona, ¿este metro va al centro?',fr:'Pardon, ce métro va au centre ?',side:'left'},
      {s:'Señora',es:'No. Tienes que coger la línea dos.',fr:'Non. Tu dois prendre la ligne deux.',side:'right'},
      {s:'Viajero',es:'¿Dónde está la línea dos?',fr:'Où est la ligne deux ?',side:'left'},
      {s:'Señora',es:'Allí, a la derecha.',fr:'Là-bas, à droite.',side:'right'},
      {s:'Viajero',es:'¿Cuántas paradas son?',fr:'C\'est combien d\'arrêts ?',side:'left'},
      {s:'Señora',es:'Cuatro paradas. Bajas en Sol.',fr:'Quatre arrêts. Tu descends à Sol.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Acheter un billet',img:'🎫',dialogue:[
      {s:'Viajero',es:'Hola, quiero un billete, por favor.',fr:'Bonjour, je veux un billet, s\'il vous plaît.',side:'left'},
      {s:'Empleada',es:'¿Sencillo o de diez viajes?',fr:'Simple ou carnet de dix ?',side:'right'},
      {s:'Viajero',es:'¿Cuánto cuesta el sencillo?',fr:'Combien coûte le billet simple ?',side:'left'},
      {s:'Empleada',es:'Un euro cincuenta. El de diez viajes son doce euros.',fr:'Un euro cinquante. Le carnet de dix c\'est douze euros.',side:'right'},
      {s:'Viajero',es:'Quiero el de diez viajes.',fr:'Je veux le carnet de dix.',side:'left'},
      {s:'Empleada',es:'Aquí tiene.',fr:'Voilà.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Dans le bus',img:'🚌',dialogue:[
      {s:'Pasajero',es:'Perdona, ¿este autobús va a la playa?',fr:'Pardon, ce bus va à la plage ?',side:'left'},
      {s:'Señor',es:'No, este va al aeropuerto.',fr:'Non, celui-ci va à l\'aéroport.',side:'right'},
      {s:'Pasajero',es:'¿Qué autobús va a la playa?',fr:'Quel bus va à la plage ?',side:'left'},
      {s:'Señor',es:'El número veintitrés.',fr:'Le numéro vingt-trois.',side:'right'},
      {s:'Pasajero',es:'¿Dónde está la parada?',fr:'Où est l\'arrêt ?',side:'left'},
      {s:'Señor',es:'Está enfrente, al otro lado de la calle.',fr:'Il est en face, de l\'autre côté de la rue.',side:'right'}
    ]}
   ],
   vocab:['Coger el metro = Prendre le métro','La línea = La ligne','La parada = L\'arrêt','El billete sencillo = Le billet simple','Bajar en = Descendre à','¿Cuántas paradas? = Combien d\'arrêts ?','El autobús = Le bus'],
   quiz:[
    {q:'¿Cómo se dice "Prendre le métro" en español?',opts:['Ir al metro','Coger el metro','Bajar del metro','Buscar el metro'],ans:1},
    {q:'¿Qué significa "La parada"?',opts:['Le billet','La ligne','L\'arrêt','Le quai'],ans:2},
    {q:'¿Cómo se dice "Descendre à Sol" en español?',opts:['Subir en Sol','Ir a Sol','Bajar en Sol','Coger Sol'],ans:2}
   ]},
 
  /* 8 ── À la pharmacie */
  {id:'farmacia2',level:2,emoji:'💊',name:'En la farmacia',sub:'À la pharmacie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Mal de tête',img:'🤕',dialogue:[
      {s:'Cliente',es:'Hola. Me duele la cabeza. ¿Qué tiene?',fr:'Bonjour. J\'ai mal à la tête. Qu\'est-ce que vous avez ?',side:'left'},
      {s:'Farmacéutica',es:'¿Es alérgico a algún medicamento?',fr:'Vous êtes allergique à un médicament ?',side:'right'},
      {s:'Cliente',es:'No, no soy alérgico.',fr:'Non, je ne suis pas allergique.',side:'left'},
      {s:'Farmacéutica',es:'Le doy un ibuprofeno. Tome uno con comida.',fr:'Je vous donne un ibuprofène. Prenez-en un avec de la nourriture.',side:'right'},
      {s:'Cliente',es:'¿Cuántas veces al día?',fr:'Combien de fois par jour ?',side:'left'},
      {s:'Farmacéutica',es:'Tres veces al día, máximo.',fr:'Trois fois par jour, maximum.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Trouver la pharmacie de garde',img:'🌙',dialogue:[
      {s:'Turista',es:'Perdone, ¿hay una farmacia abierta ahora?',fr:'Pardon, il y a une pharmacie ouverte maintenant ?',side:'left'},
      {s:'Vecina',es:'Las farmacias están cerradas. Necesitas la farmacia de guardia.',fr:'Les pharmacies sont fermées. Tu as besoin de la pharmacie de garde.',side:'right'},
      {s:'Turista',es:'¿Dónde está?',fr:'Elle est où ?',side:'left'},
      {s:'Vecina',es:'Mira el cartel de esta farmacia. Pone cuál está abierta.',fr:'Regarde l\'affiche de cette pharmacie. Elle indique laquelle est ouverte.',side:'right'},
      {s:'Turista',es:'¡Ah, entiendo! Gracias.',fr:'Ah, je comprends ! Merci.',side:'left'},
      {s:'Vecina',es:'¡De nada!',fr:'De rien !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Acheter un médicament',img:'💉',dialogue:[
      {s:'Cliente',es:'Hola. ¿Tiene algo para la tos?',fr:'Bonjour. Vous avez quelque chose pour la toux ?',side:'left'},
      {s:'Farmacéutico',es:'Sí. ¿Es para adulto o para niño?',fr:'Oui. C\'est pour un adulte ou un enfant ?',side:'right'},
      {s:'Cliente',es:'Para adulto.',fr:'Pour un adulte.',side:'left'},
      {s:'Farmacéutico',es:'Tome este jarabe. Dos cucharadas, tres veces al día.',fr:'Prenez ce sirop. Deux cuillères, trois fois par jour.',side:'right'},
      {s:'Cliente',es:'¿Cuánto cuesta?',fr:'Ça coûte combien ?',side:'left'},
      {s:'Farmacéutico',es:'Cinco euros con ochenta.',fr:'Cinq euros quatre-vingt.',side:'right'}
    ]}
   ],
   vocab:['Me duele la cabeza = J\'ai mal à la tête','Me duele la garganta = J\'ai mal à la gorge','La farmacia de guardia = La pharmacie de garde','No soy alérgico = Je ne suis pas allergique','El jarabe = Le sirop','Tres veces al día = Trois fois par jour','El cartel = L\'affiche'],
   quiz:[
    {q:'¿Cómo se dice "J\'ai mal à la tête" en español?',opts:['Tengo fiebre','Me duele el estómago','Me duele la cabeza','Estoy cansado'],ans:2},
    {q:'¿Qué es la "farmacia de guardia"?',opts:['La grande pharmacie','La pharmacie de garde ouverte la nuit','La pharmacie de l\'hôpital','La pharmacie pour touristes'],ans:1},
    {q:'¿Cómo se dice "Trois fois par jour" en español?',opts:['Dos veces al día','Una vez al día','Tres veces al día','Cuatro veces al día'],ans:2}
   ]},
 
  /* 9 ── À l'hôtel */
  {id:'hotel2',level:2,emoji:'🏨',name:'En el hotel',sub:'Arriver à l\'hôtel',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Arrivée à la réception',img:'🛎️',dialogue:[
      {s:'Recepcionista',es:'¡Buenas noches! ¿Tiene reserva?',fr:'Bonsoir ! Vous avez une réservation ?',side:'right'},
      {s:'Huésped',es:'Sí. Me llamo Dupont. Una habitación doble.',fr:'Oui. Je m\'appelle Dupont. Une chambre double.',side:'left'},
      {s:'Recepcionista',es:'Aquí está. ¿Su pasaporte, por favor?',fr:'Voilà. Votre passeport, s\'il vous plaît ?',side:'right'},
      {s:'Huésped',es:'Aquí tiene. ¿El desayuno está incluido?',fr:'Voilà. Le petit-déjeuner est inclus ?',side:'left'},
      {s:'Recepcionista',es:'Sí, de siete a diez.',fr:'Oui, de sept à dix heures.',side:'right'},
      {s:'Huésped',es:'¡Perfecto! Gracias.',fr:'Parfait ! Merci.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Un problème dans la chambre',img:'🔧',dialogue:[
      {s:'Huésped',es:'Hola. Hay un problema en mi habitación.',fr:'Bonjour. Il y a un problème dans ma chambre.',side:'left'},
      {s:'Recepcionista',es:'¿Qué pasa?',fr:'Qu\'est-ce qui se passe ?',side:'right'},
      {s:'Huésped',es:'El aire acondicionado no funciona.',fr:'La climatisation ne fonctionne pas.',side:'left'},
      {s:'Recepcionista',es:'Lo siento. ¿Quiere cambiar de habitación?',fr:'Je suis désolé. Vous voulez changer de chambre ?',side:'right'},
      {s:'Huésped',es:'Sí, por favor.',fr:'Oui, s\'il vous plaît.',side:'left'},
      {s:'Recepcionista',es:'Aquí tiene la llave de la trescientos veinte.',fr:'Voilà la clé de la trois cent vingt.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Demander des infos',img:'🗺️',dialogue:[
      {s:'Huésped',es:'Perdone, ¿hay un restaurante cerca?',fr:'Pardon, il y a un restaurant près d\'ici ?',side:'left'},
      {s:'Recepcionista',es:'Sí, hay uno muy bueno a dos minutos.',fr:'Oui, il y en a un très bon à deux minutes.',side:'right'},
      {s:'Huésped',es:'¿Y hay algo para visitar aquí?',fr:'Et il y a des choses à visiter ici ?',side:'left'},
      {s:'Recepcionista',es:'Sí, la catedral está muy cerca.',fr:'Oui, la cathédrale est très près.',side:'right'},
      {s:'Huésped',es:'¿Está abierta hoy?',fr:'Elle est ouverte aujourd\'hui ?',side:'left'},
      {s:'Recepcionista',es:'Sí, de nueve a seis.',fr:'Oui, de neuf heures à dix-huit heures.',side:'right'}
    ]}
   ],
   vocab:['¿Tiene reserva? = Vous avez une réservation ?','La habitación doble = La chambre double','El desayuno incluido = Le petit-déjeuner inclus','No funciona = Ça ne fonctionne pas','Cambiar de habitación = Changer de chambre','La llave = La clé','¿Está abierta? = C\'est ouvert ?'],
   quiz:[
    {q:'¿Cómo se dice "La chambre double" en español?',opts:['La habitación individual','La habitación doble','La suite','La habitación familiar'],ans:1},
    {q:'¿Qué significa "No funciona"?',opts:['C\'est fermé','Ça ne marche pas','C\'est cassé','Je ne sais pas'],ans:1},
    {q:'¿Cómo se dice "La clé" en español?',opts:['La puerta','La ventana','La llave','El ascensor'],ans:2}
   ]},
 
  /* 10 ── Chez le médecin */
  {id:'medico2',level:2,emoji:'🩺',name:'En el médico',sub:'Chez le médecin',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Expliquer ses symptômes',img:'🤒',dialogue:[
      {s:'Médico',es:'¡Buenos días! ¿Qué le pasa?',fr:'Bonjour ! Qu\'est-ce qui ne va pas ?',side:'right'},
      {s:'Paciente',es:'Tengo fiebre y me duele la garganta.',fr:'J\'ai de la fièvre et j\'ai mal à la gorge.',side:'left'},
      {s:'Médico',es:'¿Desde cuándo?',fr:'Depuis quand ?',side:'right'},
      {s:'Paciente',es:'Desde ayer.',fr:'Depuis hier.',side:'left'},
      {s:'Médico',es:'¿Tiene tos también?',fr:'Vous avez aussi de la toux ?',side:'right'},
      {s:'Paciente',es:'Sí, un poco.',fr:'Oui, un peu.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Comprendre le médecin',img:'💊',dialogue:[
      {s:'Médico',es:'Tiene una infección. Le receto un antibiótico.',fr:'Vous avez une infection. Je vous prescris un antibiotique.',side:'right'},
      {s:'Paciente',es:'¿Cuándo tomo el medicamento?',fr:'Quand est-ce que je prends le médicament ?',side:'left'},
      {s:'Médico',es:'Uno por la mañana y uno por la noche.',fr:'Un le matin et un le soir.',side:'right'},
      {s:'Paciente',es:'¿Durante cuántos días?',fr:'Pendant combien de jours ?',side:'left'},
      {s:'Médico',es:'Siete días. Y beba mucha agua.',fr:'Sept jours. Et buvez beaucoup d\'eau.',side:'right'},
      {s:'Paciente',es:'Gracias, doctor.',fr:'Merci, docteur.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Appeler le médecin',img:'📞',dialogue:[
      {s:'Paciente',es:'Hola, quiero una cita con el médico.',fr:'Bonjour, je veux un rendez-vous avec le médecin.',side:'left'},
      {s:'Recepcionista',es:'¿Para cuándo?',fr:'Pour quand ?',side:'right'},
      {s:'Paciente',es:'Para hoy si es posible. Estoy muy mal.',fr:'Pour aujourd\'hui si c\'est possible. Je suis très malade.',side:'left'},
      {s:'Recepcionista',es:'¿Tiene fiebre?',fr:'Vous avez de la fièvre ?',side:'right'},
      {s:'Paciente',es:'Sí, treinta y nueve grados.',fr:'Oui, trente-neuf degrés.',side:'left'},
      {s:'Recepcionista',es:'Venga a las cuatro. Trae el pasaporte.',fr:'Venez à seize heures. Apportez votre passeport.',side:'right'}
    ]}
   ],
   vocab:['¿Qué le pasa? = Qu\'est-ce qui ne va pas ?','Tengo fiebre = J\'ai de la fièvre','Me duele la garganta = J\'ai mal à la gorge','Desde ayer = Depuis hier','La tos = La toux','Una cita = Un rendez-vous','Estoy muy mal = Je suis très malade'],
   quiz:[
    {q:'¿Cómo se dice "J\'ai de la fièvre" en español?',opts:['Tengo frío','Tengo fiebre','Tengo tos','Tengo dolor'],ans:1},
    {q:'¿Qué significa "Me duele la garganta"?',opts:['J\'ai mal à la tête','J\'ai mal au ventre','J\'ai mal à la gorge','J\'ai mal au dos'],ans:2},
    {q:'¿Cómo se dice "Un rendez-vous" en español?',opts:['Una receta','Una cita','Una consulta','Una visita'],ans:1}
   ]},
 
  /* 11 ── La météo */
  {id:'meteo2',level:2,emoji:'☀️',name:'El tiempo',sub:'Parler de la météo',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Parler du temps',img:'🌤️',dialogue:[
      {s:'Marta',es:'¡Qué calor hace hoy!',fr:'Quelle chaleur aujourd\'hui !',side:'left'},
      {s:'Romain',es:'Sí, hace mucho calor. ¿Cuántos grados son?',fr:'Oui, il fait très chaud. Il fait combien de degrés ?',side:'right'},
      {s:'Marta',es:'Treinta y cinco grados.',fr:'Trente-cinq degrés.',side:'left'},
      {s:'Romain',es:'¡Es mucho! ¿Hay piscina aquí?',fr:'C\'est beaucoup ! Il y a une piscine ici ?',side:'right'},
      {s:'Marta',es:'Sí, está en el hotel.',fr:'Oui, elle est à l\'hôtel.',side:'left'},
      {s:'Romain',es:'¡Vamos!',fr:'Allons-y !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Prévoir la sortie',img:'🌧️',dialogue:[
      {s:'Luis',es:'¿Salimos hoy?',fr:'On sort aujourd\'hui ?',side:'left'},
      {s:'Camille',es:'No sé. ¿Qué tiempo hace?',fr:'Je ne sais pas. Il fait quel temps ?',side:'right'},
      {s:'Luis',es:'Llueve un poco.',fr:'Il pleut un peu.',side:'left'},
      {s:'Camille',es:'¿Tienes paraguas?',fr:'Tu as un parapluie ?',side:'right'},
      {s:'Luis',es:'No. ¿Y tú?',fr:'Non. Et toi ?',side:'left'},
      {s:'Camille',es:'Yo sí. ¡Vamos juntos!',fr:'Moi oui. Allons-y ensemble !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Parler des saisons',img:'🍂',dialogue:[
      {s:'Sara',es:'¿Cuál es tu estación favorita?',fr:'Quelle est ta saison préférée ?',side:'right'},
      {s:'Théo',es:'El verano. Me gusta el sol y el calor.',fr:'L\'été. J\'aime le soleil et la chaleur.',side:'left'},
      {s:'Sara',es:'Yo prefiero el otoño. No hace ni frío ni calor.',fr:'Moi je préfère l\'automne. Il ne fait ni chaud ni froid.',side:'right'},
      {s:'Théo',es:'¿Y en España? ¿Hace mucho frío en invierno?',fr:'Et en Espagne ? Il fait très froid en hiver ?',side:'left'},
      {s:'Sara',es:'Depende. En Madrid sí, en Sevilla no.',fr:'Ça dépend. À Madrid oui, à Séville non.',side:'right'},
      {s:'Théo',es:'¡Qué interesante!',fr:'Comme c\'est intéressant !',side:'left'}
    ]}
   ],
   vocab:['¡Qué calor! = Quelle chaleur !','Hace frío = Il fait froid','Hace calor = Il fait chaud','Llueve = Il pleut','El paraguas = Le parapluie','El verano = L\'été','El invierno = L\'hiver'],
   quiz:[
    {q:'¿Cómo se dice "Il fait froid" en español?',opts:['Hace calor','Hay sol','Llueve','Hace frío'],ans:3},
    {q:'¿Qué significa "¡Qué calor!"?',opts:['Quelle chance !','Quelle chaleur !','Quel froid !','Quel vent !'],ans:1},
    {q:'¿Cómo se dice "Le parapluie" en español?',opts:['El abrigo','La bufanda','El paraguas','El sombrero'],ans:2}
   ]},
 
  /* 12 ── Trouver un logement */
  {id:'logement2',level:2,emoji:'🏠',name:'Buscar piso',sub:'Chercher un logement',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Appeler pour un appartement',img:'📱',dialogue:[
      {s:'Cliente',es:'Hola, llamo por el piso en alquiler.',fr:'Bonjour, j\'appelle pour l\'appartement en location.',side:'left'},
      {s:'Propietario',es:'Sí. ¿Para cuántas personas?',fr:'Oui. Pour combien de personnes ?',side:'right'},
      {s:'Cliente',es:'Para una persona. ¿Cuánto es el alquiler?',fr:'Pour une personne. Le loyer c\'est combien ?',side:'left'},
      {s:'Propietario',es:'Setecientos euros al mes.',fr:'Sept cents euros par mois.',side:'right'},
      {s:'Cliente',es:'¿Los gastos están incluidos?',fr:'Les charges sont incluses ?',side:'left'},
      {s:'Propietario',es:'No, los gastos son aparte.',fr:'Non, les charges sont en plus.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Visiter l\'appartement',img:'🔑',dialogue:[
      {s:'Propietario',es:'El salón es grande y tiene mucha luz.',fr:'Le salon est grand et très lumineux.',side:'right'},
      {s:'Cliente',es:'¡Me gusta! ¿Cuántas habitaciones tiene?',fr:'J\'aime bien ! Il a combien de chambres ?',side:'left'},
      {s:'Propietario',es:'Dos habitaciones y un baño.',fr:'Deux chambres et une salle de bain.',side:'right'},
      {s:'Cliente',es:'¿Hay calefacción?',fr:'Il y a le chauffage ?',side:'left'},
      {s:'Propietario',es:'Sí, hay radiadores.',fr:'Oui, il y a des radiateurs.',side:'right'},
      {s:'Cliente',es:'¿Puedo pensarlo?',fr:'Je peux réfléchir ?',side:'left'}
    ]},
    {label:'Sit. 3',title:'Un problème dans l\'appartement',img:'🔧',dialogue:[
      {s:'Inquilino',es:'Hola, hay un problema. El agua no funciona.',fr:'Bonjour, il y a un problème. L\'eau ne fonctionne pas.',side:'left'},
      {s:'Propietario',es:'¿Desde cuándo?',fr:'Depuis quand ?',side:'right'},
      {s:'Inquilino',es:'Desde esta mañana.',fr:'Depuis ce matin.',side:'left'},
      {s:'Propietario',es:'Voy a llamar al fontanero ahora.',fr:'Je vais appeler le plombier maintenant.',side:'right'},
      {s:'Inquilino',es:'¿Va a venir hoy?',fr:'Il vient aujourd\'hui ?',side:'left'},
      {s:'Propietario',es:'Sí, creo que sí.',fr:'Oui, je crois que oui.',side:'right'}
    ]}
   ],
   vocab:['El alquiler = Le loyer','Los gastos = Les charges','Las habitaciones = Les chambres','La calefacción = Le chauffage','El inquilino = Le locataire','El fontanero = Le plombier','Los gastos son aparte = Les charges sont en plus'],
   quiz:[
    {q:'¿Qué significa "Los gastos son aparte"?',opts:['Tout compris','Les charges sont incluses','Les charges sont en plus','C\'est gratuit'],ans:2},
    {q:'¿Cómo se dice "Le plombier" en español?',opts:['El electricista','El fontanero','El carpintero','El pintor'],ans:1},
    {q:'¿Qué significa "El alquiler"?',opts:['La vente','Le loyer','La maison','Le contrat'],ans:1}
   ]},
 
  /* 13 ── Parler de ses goûts */
  {id:'gustos2',level:2,emoji:'❤️',name:'Gustos y aficiones',sub:'Parler de ce qu\'on aime',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Parler de musique',img:'🎵',dialogue:[
      {s:'Lucía',es:'¿Te gusta la música?',fr:'Tu aimes la musique ?',side:'right'},
      {s:'Paul',es:'Sí, mucho. Me gusta el rock.',fr:'Oui, beaucoup. J\'aime le rock.',side:'left'},
      {s:'Lucía',es:'¿Y el flamenco?',fr:'Et le flamenco ?',side:'right'},
      {s:'Paul',es:'También, pero no conozco mucho.',fr:'Aussi, mais je ne connais pas beaucoup.',side:'left'},
      {s:'Lucía',es:'¡Hay un espectáculo esta noche! ¿Vienes?',fr:'Il y a un spectacle ce soir ! Tu viens ?',side:'right'},
      {s:'Paul',es:'¡Sí! ¿A qué hora empieza?',fr:'Oui ! Ça commence à quelle heure ?',side:'left'}
    ]},
    {label:'Sit. 2',title:'Parler de sport',img:'⚽',dialogue:[
      {s:'Diego',es:'¿Practicas algún deporte?',fr:'Tu pratiques un sport ?',side:'left'},
      {s:'Claire',es:'Sí, me gusta mucho el fútbol.',fr:'Oui, j\'aime beaucoup le football.',side:'right'},
      {s:'Diego',es:'¿De verdad? ¡Yo también! ¿Ves el partido esta noche?',fr:'Vraiment ? Moi aussi ! Tu regardes le match ce soir ?',side:'left'},
      {s:'Claire',es:'Sí. ¿Juegas al fútbol también?',fr:'Oui. Tu joues au football aussi ?',side:'right'},
      {s:'Diego',es:'Sí, los domingos con amigos.',fr:'Oui, le dimanche avec des amis.',side:'left'},
      {s:'Claire',es:'¡Qué guay!',fr:'Super !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Proposer une activité',img:'🎬',dialogue:[
      {s:'Ana',es:'¿Qué haces esta tarde?',fr:'Tu fais quoi cet après-midi ?',side:'left'},
      {s:'Marc',es:'Nada. ¿Por qué?',fr:'Rien. Pourquoi ?',side:'right'},
      {s:'Ana',es:'¿Quieres ir al cine?',fr:'Tu veux aller au cinéma ?',side:'left'},
      {s:'Marc',es:'¡Sí! ¿Qué ponen?',fr:'Oui ! Qu\'est-ce qu\'il y a ?',side:'right'},
      {s:'Ana',es:'Una película francesa. ¿Te gusta el cine francés?',fr:'Un film français. Tu aimes le cinéma français ?',side:'left'},
      {s:'Marc',es:'¡Me encanta! ¿A qué hora quedamos?',fr:'J\'adore ça ! On se retrouve à quelle heure ?',side:'right'}
    ]}
   ],
   vocab:['Me gusta = J\'aime','No me gusta = Je n\'aime pas','Me encanta = J\'adore','¿Practicas un deporte? = Tu pratiques un sport ?','El partido = Le match','¿Qué ponen? = Qu\'est-ce qu\'il y a (au cinéma) ?','¿A qué hora quedamos? = On se retrouve à quelle heure ?'],
   quiz:[
    {q:'¿Cómo se dice "J\'adore" en español?',opts:['Me gusta','No me gusta','Me encanta','Odio'],ans:2},
    {q:'¿Qué significa "¿Qué ponen?" en el contexto del cine?',opts:['Ça coûte combien ?','À quelle heure ?','Qu\'est-ce qu\'il y a ?','C\'est où ?'],ans:2},
    {q:'¿Cómo se dice "Le match" en español?',opts:['El deporte','El equipo','El partido','El estadio'],ans:2}
   ]},
 
  /* 14 ── Sortir le soir */
  {id:'fiesta2',level:2,emoji:'🎉',name:'Salir de noche',sub:'Sortir le soir',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Organiser une sortie',img:'🎊',dialogue:[
      {s:'Pablo',es:'¡Hola! ¿Salimos esta noche?',fr:'Salut ! On sort ce soir ?',side:'left'},
      {s:'Lea',es:'¡Sí! ¿Adónde vamos?',fr:'Oui ! On va où ?',side:'right'},
      {s:'Pablo',es:'Hay un bar muy chulo en el centro.',fr:'Il y a un bar très sympa au centre.',side:'left'},
      {s:'Lea',es:'¡Bien! ¿A qué hora?',fr:'Super ! À quelle heure ?',side:'right'},
      {s:'Pablo',es:'A las diez. En España se sale tarde.',fr:'À dix heures. En Espagne on sort tard.',side:'left'},
      {s:'Lea',es:'¡Vale! ¡Hasta luego!',fr:'D\'accord ! À plus tard !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Au bar le soir',img:'🍺',dialogue:[
      {s:'Marc',es:'¡Esta música está muy bien! ¿Bailamos?',fr:'Cette musique est super ! On danse ?',side:'left'},
      {s:'Inés',es:'¡Sí! Me encanta bailar.',fr:'Oui ! J\'adore danser.',side:'right'},
      {s:'Marc',es:'¿Quieres algo de beber?',fr:'Tu veux quelque chose à boire ?',side:'left'},
      {s:'Inés',es:'Sí, un agua, por favor. Tengo calor.',fr:'Oui, une eau, s\'il te plaît. J\'ai chaud.',side:'right'},
      {s:'Marc',es:'¡Ahora vuelvo!',fr:'Je reviens tout de suite !',side:'left'},
      {s:'Inés',es:'¡Vale!',fr:'D\'accord !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Le lendemain',img:'😴',dialogue:[
      {s:'Carla',es:'¡Hola! ¿Cómo estás? ¡Llegué tarde a casa!',fr:'Salut ! Tu vas bien ? Je suis rentré tard à la maison !',side:'left'},
      {s:'Tom',es:'¡Yo también! Pero fue una noche muy buena.',fr:'Moi aussi ! Mais c\'était une très bonne soirée.',side:'right'},
      {s:'Carla',es:'Sí, la gente era muy simpática.',fr:'Oui, les gens étaient très sympas.',side:'left'},
      {s:'Tom',es:'¿Comemos juntos hoy?',fr:'On mange ensemble aujourd\'hui ?',side:'right'},
      {s:'Carla',es:'¡Sí! Necesito comer. Tengo mucha hambre.',fr:'Oui ! J\'ai besoin de manger. J\'ai très faim.',side:'left'},
      {s:'Tom',es:'¡Yo también! ¡La siesta es para después!',fr:'Moi aussi ! La sieste c\'est pour après !',side:'right'}
    ]}
   ],
   vocab:['¡Salimos! = On sort !','¿Adónde vamos? = On va où ?','En España se sale tarde = En Espagne on sort tard','¡Vale! = D\'accord !','Tengo calor = J\'ai chaud','Tengo hambre = J\'ai faim','La siesta = La sieste'],
   quiz:[
    {q:'¿Qué significa "¡Vale!" en España?',opts:['Au revoir !','Allons-y !','D\'accord !','C\'est nul !'],ans:2},
    {q:'¿Cómo se dice "J\'ai faim" en español?',opts:['Tengo sed','Tengo sueño','Tengo frío','Tengo hambre'],ans:3},
    {q:'¿Qué significa "En España se sale tarde"?',opts:['En Espagne on rentre tard','En Espagne on travaille tard','En Espagne on sort tard','En Espagne on mange tard'],ans:2}
   ]},

   
// ── La vie quotidienne (dialogues) ───────────────────
{id:'viequot2',level:2,emoji:'🏡',name:'Vida cotidiana',sub:'La vie quotidienne',type:'dialog',
 situations:[
  {label:'Sit. 1',title:'Une matinée typique',img:'🌅',dialogue:[
    {s:'Lucía',es:'¡Buenos días! ¿Has dormido bien?',fr:'Bonjour ! Tu as bien dormi ?',side:'left'},
    {s:'Hugo',es:'Sí, gracias. ¿Ya has desayunado?',fr:'Oui, merci. Tu as déjà pris ton petit-déjeuner ?',side:'right'},
    {s:'Lucía',es:'No todavía. Voy a hacer café. ¿Quieres?',fr:'Pas encore. Je vais faire du café. Tu en veux ?',side:'left'},
    {s:'Hugo',es:'Sí, por favor. ¿Tienes tostadas?',fr:'Oui, s\'il te plaît. Tu as des tartines ?',side:'right'},
    {s:'Lucía',es:'Sí, y también tengo croissants del panadero.',fr:'Oui, et j\'ai aussi des croissants de la boulangerie.',side:'left'},
    {s:'Hugo',es:'¡Qué bien! En Francia el desayuno es un ritual.',fr:'Super ! En France le petit-déjeuner est un rituel.',side:'right'},
  ]},
  {label:'Sit. 2',title:'Les tâches ménagères',img:'🧹',dialogue:[
    {s:'Carmen',es:'¿Puedes fregar los platos? Yo paso el aspirador.',fr:'Tu peux faire la vaisselle ? Moi je passe l\'aspirateur.',side:'left'},
    {s:'Pierre',es:'De acuerdo. ¿Y la ropa?',fr:'D\'accord. Et le linge ?',side:'right'},
    {s:'Carmen',es:'Ya he puesto la lavadora.',fr:'J\'ai déjà mis la machine à laver.',side:'left'},
    {s:'Pierre',es:'Perfecto. ¿Hacemos la compra después?',fr:'Parfait. On fait les courses après ?',side:'right'},
    {s:'Carmen',es:'Sí. Necesitamos pan, leche y verduras.',fr:'Oui. On a besoin de pain, de lait et de légumes.',side:'left'},
    {s:'Pierre',es:'¿Vamos al mercado o al supermercado?',fr:'On va au marché ou au supermarché ?',side:'right'},
  ]},
  {label:'Sit. 3',title:'La pause déjeuner',img:'🍽️',dialogue:[
    {s:'Sofía',es:'¿Tienes hambre? Ya es la una.',fr:'Tu as faim ? Il est déjà une heure.',side:'left'},
    {s:'Antoine',es:'Sí, ¡mucha! En Francia comemos a las doce.',fr:'Oui, beaucoup ! En France on mange à midi.',side:'right'},
    {s:'Sofía',es:'En España comemos más tarde, sobre las dos.',fr:'En Espagne on mange plus tard, vers deux heures.',side:'left'},
    {s:'Antoine',es:'¡Vaya! ¿Y la siesta es de verdad?',fr:'Ah bon ! Et la sieste c\'est vrai ?',side:'right'},
    {s:'Sofía',es:'¡Claro! Sobre todo en verano y en el sur.',fr:'Bien sûr ! Surtout en été et dans le sud.',side:'left'},
    {s:'Antoine',es:'¡Me encanta esa costumbre!',fr:'J\'adore cette habitude !',side:'right'},
  ]},
 ],
 vocab:[
  '¿Has dormido bien? = Tu as bien dormi ?',
  'El panadero = Le boulanger',
  'Pasar el aspirador = Passer l\'aspirateur',
  'Poner la lavadora = Mettre la machine à laver',
  'Hacer la compra = Faire les courses',
  'Sobre las dos = Vers deux heures',
  'La siesta = La sieste',
 ],
 quiz:[
  {q:'¿Cómo se dice \"Passer l\'aspirateur\" en español?',opts:['Fregar los platos','Pasar el aspirador','Poner la lavadora','Hacer la colada'],ans:1},
  {q:'¿A qué hora comen generalmente en España?',opts:['A las doce','A las once','Sobre las dos','A las seis'],ans:2},
  {q:'¿Cómo se dice \"Le boulanger\" en español?',opts:['El carnicero','El panadero','El pescadero','El cocinero'],ans:1},
 ]
},
 
// ── Heure et Temps (dialogues) ───────────────────────
{id:'heuretemp2',level:2,emoji:'⏰',name:'La hora y el tiempo',sub:'Heure et météo / Hora y tiempo',type:'dialog',
 situations:[
  {label:'Sit. 1',title:'Organiser un rendez-vous',img:'📅',dialogue:[
    {s:'Elena',es:'¿A qué hora quedamos mañana?',fr:'On se retrouve à quelle heure demain ?',side:'left'},
    {s:'Maxime',es:'¿Te va bien a las diez y media?',fr:'Dix heures et demie ça te va ?',side:'right'},
    {s:'Elena',es:'Prefiero a las once menos cuarto si puede ser.',fr:'Je préfère onze heures moins le quart si possible.',side:'left'},
    {s:'Maxime',es:'¡Perfecto! ¿En la plaza o en la estación?',fr:'Parfait ! Sur la place ou à la gare ?',side:'right'},
    {s:'Elena',es:'En la estación. Así cogemos el tren a las doce.',fr:'À la gare. Comme ça on prend le train à midi.',side:'left'},
    {s:'Maxime',es:'¡Genial! ¿Sabes qué tiempo va a hacer?',fr:'Super ! Tu sais quel temps il va faire ?',side:'right'},
  ]},
  {label:'Sit. 2',title:'Parler de la météo pour planifier',img:'🌦️',dialogue:[
    {s:'Carlos',es:'Dice el tiempo que mañana va a llover.',fr:'La météo dit qu\'il va pleuvoir demain.',side:'left'},
    {s:'Julie',es:'¡Vaya! Entonces mejor quedarse en casa.',fr:'Zut ! Alors mieux vaut rester à la maison.',side:'right'},
    {s:'Carlos',es:'O podemos ir al museo. ¿Abren a las nueve?',fr:'Ou on peut aller au musée. Ils ouvrent à neuf heures ?',side:'left'},
    {s:'Julie',es:'No, a las diez. Cierran a las seis.',fr:'Non, à dix heures. Ils ferment à dix-huit heures.',side:'right'},
    {s:'Carlos',es:'¿Y el sábado hace mejor tiempo?',fr:'Et samedi il fait meilleur temps ?',side:'left'},
    {s:'Julie',es:'Sí, van a ser veinte y cinco grados y sol.',fr:'Oui, il va faire vingt-cinq degrés et du soleil.',side:'right'},
  ]},
  {label:'Sit. 3',title:'Horaires et rythme de vie',img:'🕐',dialogue:[
    {s:'Inés',es:'¿A qué hora cierra el banco en Francia?',fr:'À quelle heure ferme la banque en France ?',side:'left'},
    {s:'Lukas',es:'Generalmente a las cinco de la tarde.',fr:'En général à dix-sept heures.',side:'right'},
    {s:'Inés',es:'En España cierra a las dos del mediodía.',fr:'En Espagne elle ferme à deux heures de l\'après-midi.',side:'left'},
    {s:'Lukas',es:'¡Qué diferente! ¿Y las tiendas?',fr:'Comme c\'est différent ! Et les magasins ?',side:'right'},
    {s:'Inés',es:'Aquí abren todo el día. Allí cierran para comer.',fr:'Ici ils ouvrent toute la journée. Là-bas ils ferment pour manger.',side:'left'},
    {s:'Lukas',es:'¡Ah! Como la siesta.',fr:'Ah ! Comme la sieste.',side:'right'},
  ]},
 ],
 vocab:[
  '¿A qué hora quedamos? = On se retrouve à quelle heure ?',
  '¿Te va bien? = Ça te va ?',
  'Dice el tiempo que... = La météo dit que...',
  'Mejor quedarse en casa = Mieux vaut rester à la maison',
  'Cierran a las... = Ils ferment à...',
  'Abren a las... = Ils ouvrent à...',
  'Van a ser... grados = Il va faire... degrés',
 ],
 quiz:[
  {q:'¿Cómo se dice \"La météo dit que...\" en español?',opts:['¿A qué hora?','Dice el tiempo que...','Van a ser grados','¿Te va bien?'],ans:1},
  {q:'¿Cómo se dice \"Ils ferment à...\" en español?',opts:['Abren a las...','¿Te va bien?','Cierran a las...','Van a ser...'],ans:2},
  {q:'¿Cómo se dice \"On se retrouve à quelle heure ?\" en español?',opts:['¿Te va bien?','Cierran a las...','Van a ser grados','¿A qué hora quedamos?'],ans:3},
 ]
}
];

/* ─────────────────────────────────────────────────────────
   1c. ALL_THEMES_FR — Tableau unifié du mode "learn_french"
   Concaténation de LEVEL1 + LEVEL2 dans l'ordre d'affichage.
   Consommé par initApp('learn_french') via ALL_THEMES = ALL_THEMES_FR.
───────────────────────────────────────────────────────── */
var ALL_THEMES_FR = LEVEL1_THEMES_FR.concat(LEVEL2_THEMES_FR);

/* ========================================
   Français → Español Castellano 🇪🇸 – Données
   Vocabulaire, quiz et dialogues
   Pour un public espagnol hispanophone
   © Juin 2026 Sébastien Godet
======================================== */


/* ═══════════════════════════════════════════════════════════
   2a. LEVEL1_THEMES_ES — Vocabulaire thématique (Niveau 1)
   ─────────────────────────────────────────────────────────
   Public : apprenant hispanophone débutant en Français (A1)
   Adapté à la région Équateur (EC) comme variante de référence,
   mais fonctionnel pour toutes les variantes disponibles.
   28 thèmes — structure identique à LEVEL1_THEMES_FR.
   Différences notables :
     - name : titre du module en FRANÇAIS
     - sub  : "intitulé_fr / intitulé_es"
     - Alphabet inclut la lettre Ñ
     - Références culturelles adaptées (Équateur, Colombie…)
═══════════════════════════════════════════════════════════ */

var LEVEL1_THEMES_ES=[
{id: 'alpha',level: 1,emoji: '🔤',name: 'El Alfabeto',sub: 'L\'Alphabet',type: 'alpha',words: [{es: 'A', fr: 'A', em: '✈️'},{es: 'B', fr: 'B', em: '🎈'},{es: 'C', fr: 'C', em: '☕'},{es: 'D', fr: 'D', em: '💃'},{es: 'E', fr: 'E', em: '🏫'},{es: 'F', fr: 'F', em: '🌸'},{es: 'G', fr: 'G', em: '🚉'},{es: 'H', fr: 'H', em: '🏨'},{es: 'I', fr: 'I', em: '🏝️'},{es: 'J', fr: 'J', em: '🌿'},{es: 'K', fr: 'K', em: '⚖️'},{es: 'L', fr: 'L', em: '🦁'},{es: 'M', fr: 'M', em: '🏠'},{es: 'N', fr: 'N', em: '🌙'},{es: 'Ñ', fr: 'Ñ', em: '🪅'},{es: 'O', fr: 'O', em: '🐦'},{es: 'P', fr: 'P', em: '🍞'},{es: 'Q', fr: 'Q', em: '🏘️'},{es: 'R', fr: 'R', em: '🌹'},{es: 'S', fr: 'S', em: '☀️'},{es: 'T', fr: 'T', em: '🚂'},{es: 'U', fr: 'U', em: '1️⃣'},{es: 'V', fr: 'V', em: '🌆'},{es: 'W', fr: 'W', em: '🚃'},{es: 'X', fr: 'X', em: '🎵'},{es: 'Y', fr: 'Y', em: '🥛'},{es: 'Z', fr: 'Z', em: '0️⃣'}],quiz10: [{q: 'Quelle lettre entends-tu ?', audio: 'J', opts: ['L', 'G', 'J', 'V'], ans: 2},{q: 'Quelle lettre entends-tu ?', audio: 'F', opts: ['Z', 'P', 'H', 'F'], ans: 3},{q: 'Quelle lettre entends-tu ?', audio: 'U', opts: ['M', 'U', 'I', 'J'], ans: 1},{q: 'Quelle lettre entends-tu ?', audio: 'I', opts: ['O', 'A', 'I', 'Y'], ans: 2},{q: 'Quelle lettre entends-tu ?', audio: 'H', opts: ['B', 'F', 'X', 'H'], ans: 3},{q: 'Quelle lettre entends-tu ?', audio: 'Y', opts: ['L', 'P', 'Y', 'Z'], ans: 2},{q: 'Quelle lettre entends-tu ?', audio: 'G', opts: ['K', 'T', 'G', 'N'], ans: 2},{q: 'Quelle lettre entends-tu ?', audio: 'R', opts: ['V', 'M', 'B', 'R'], ans: 3},{q: 'Quelle lettre entends-tu ?', audio: 'Z', opts: ['B', 'M', 'G', 'Z'], ans: 3},{q: 'Quelle lettre entends-tu ?', audio: 'S', opts: ['T', 'S', 'Y', 'D'], ans: 1},{q: 'Quelle lettre entends-tu ?', audio: 'N', opts: ['L', 'M', 'D', 'N'], ans: 3},{q: 'Quelle lettre entends-tu ?', audio: 'X', opts: ['X', 'C', 'W', 'N'], ans: 0}]},
{id:'salut',level:1,emoji:'👋',name:'Los Saludos',sub:'Les Salutations',
 words:[
   {es:'Buenos días',fr:'Bonjour (le matin)',em:'🌅'},
   {es:'Buenas tardes',fr:'Bon après-midi',em:'🌆'},
   {es:'Buenas noches',fr:'Bonsoir / Bonne nuit',em:'🌙'},
   {es:'¡Hola!',fr:'Salut !',em:'👋'},
   {es:'Adiós / Hasta luego',fr:'Au revoir / À bientôt',em:'👋'},
   {es:'Hasta pronto',fr:'À bientôt',em:'⏱️'},
   {es:'Gracias / Muchas gracias',fr:'Merci / Merci beaucoup',em:'🙏'},
   {es:'Por favor / De rien',fr:'S\'il vous plaît / De rien',em:'🤝'},
   {es:'Disculpa / Disculpe',fr:'Pardon / Excusez-moi',em:'🙇'},
   {es:'¡Venga! / ¡Vale!',fr:'Allez ! / D\'accord !',em:'👍',
    variants:{MX:'¡Sale! / ¡Órale!',VE:'¡Dale! / ¡Listo!',AR:'¡Dale!',EC:'¡Dale!',PE:'¡Dale!',CO:'¡Listo! / ¡Dale!'}},
   {es:'Sí',fr:'Oui',em:'✅'},
   {es:'No',fr:'Non',em:'❌'},
   {es:'¿Cómo estás? o ¿Qué tal?',fr:'Comment ça va ?',em:'🤗'},
   {es:'Estoy bien, gracias',fr:'Je vais bien, merci',em:'😊'},
   {es:'Más o menos / Así así',fr:'Comme ci comme ça',em:'😐'},
   {es:'No estoy bien / No me encuentro bien',fr:'Je ne vais pas bien / Je n\'ai pas la forme',em:'😞'},
   {es:'¡Qué guay! / ¡Mola!',fr:'C\'est cool ! / Super !',em:'🌟',
    variants:{MX:'¡Qué chido! / ¡Qué padre!',VE:'¡Qué fino! / ¡Chévere!',AR:'¡Qué copado! / ¡Buenísimo!',EC:'¡Qué bacán! / ¡Chévere!',PE:'¡Qué paja! / ¡Chévere!',CO:'¡Qué chimba! / ¡Bacano!'}}
 ]},
{id:'pres',level:1,emoji:'🙋',name:'Presentarse',sub:'Se Présenter',words:[{es:'El apellido',fr:'Le nom de famille',em:'👨‍👩‍👧'},{es:'El nombre',fr:'Le prénom',em:'🏷️'},{es:'La nacionalidad',fr:'La nationalité',em:'🌍'},{es:'La edad',fr:'L\'âge',em:'🎂'},{es:'La profesión o el oficio',fr:'La profession',em:'💼'},{es:'El país',fr:'Le pays',em:'🗺️'},{es:'Francés / francesa',fr:'Français(e)',em:'🇫🇷'},{es:'Español / española',fr:'Espagnol(e)',em:'🇪🇸'},{es:'Vivo en',fr:'J\'habite à',em:'🏠'},{es:'Soy o Estoy',fr:'Je suis',em:'🧑'},{es:'Tengo ... años',fr:'J\'ai ... ans',em:'🎈'},{es:'Me llamo',fr:'Je m\'appelle',em:'👋'},{es:'¿De dónde eres?',fr:'D\'où es-tu ?',em:'🌍'},{es:'Soy de Madrid',fr:'Je suis de Madrid',em:'🏙️'},
]},
{id:'express',level:1,emoji:'💬',name:'Expresiones Esenciales',sub:'Expressions Essentielles',
 words:[
  {es:'¡Claro!',fr:'Bien sûr !',em:'✅'},
  {es:'¡Por supuesto!',fr:'Absolument !',em:'👍'},
  {es:'¡De acuerdo!',fr:'D\'accord !',em:'🤝'},
  {es:'No estoy de acuerdo',fr:'Je ne suis pas d\'accord',em:'❌'},
  {es:'Quizás / Tal vez',fr:'Peut-être',em:'🤷'},
  {es:'No entiendo',fr:'Je ne comprends pas',em:'😕'},
  {es:'No sé',fr:'Je ne sais pas',em:'🤷'},
  {es:'¿Puede repetir?',fr:'Pouvez-vous répéter ?',em:'🔁'},
  {es:'¿Habla más despacio, por favor?',fr:'Pouvez-vous parler plus lentement ?',em:'🐢'},
  {es:'¿Cómo se dice... en francés?',fr:'Comment dit-on... en français ?',em:'💬'},
  {es:'¿Puede ayudarme?',fr:'Pouvez-vous m\'aider ?',em:'🙋'},
  {es:'¡Que aproveche!',fr:'Bon appétit !',em:'🍽️'},
  {es:'¡Salud! (para brindar)',fr:'Santé ! (pour trinquer)',em:'🥂'},
  {es:'¡Buen viaje!',fr:'Bon voyage !',em:'✈️'},
  {es:'¡Feliz cumpleaños!',fr:'Joyeux anniversaire !',em:'🎂'},
  {es:'¡Feliz Navidad!',fr:'Joyeux Noël !',em:'🎄'},
  {es:'¡Feliz Año Nuevo!',fr:'Bonne année !',em:'🎆'},
  {es:'El tuteo (tú) / El usted (formal)',fr:'Le tutoiement (tu) / Le vouvoiement (vous)',em:'🗣️'},
  {es:'Dar las gracias',fr:'Remercier',em:'🙏'},
 ]},
{id:'interrog',level:1,emoji:'❓',name:'Palabras Interrogativas',sub:'Les Mots Interrogatifs',
 words:[
  {es:'¿Qué?',fr:'Quoi ? / Qu\'est-ce que ?',em:'❓'},
  {es:'¿Quién? / ¿Quiénes?',fr:'Qui ?',em:'🧑'},
  {es:'¿Dónde?',fr:'Où ?',em:'📍'},
  {es:'¿Cuándo?',fr:'Quand ?',em:'📅'},
  {es:'¿Cómo?',fr:'Comment ?',em:'💬'},
  {es:'¿Cuánto / Cuánta?',fr:'Combien (de) ?',em:'🔢'},
  {es:'¿Cuántos / Cuántas?',fr:'Combien (pluriel) ?',em:'🔢'},
  {es:'¿Por qué?',fr:'Pourquoi ?',em:'🤔'},
  {es:'¿Para qué?',fr:'Pour quoi faire ?',em:'🎯'},
  {es:'¿Cuál? / ¿Cuáles?',fr:'Quel / Quelle / Lequel ?',em:'🔍'},
  {es:'¿De dónde?',fr:'D\'où ?',em:'🌍'},
  {es:'¿Adónde?',fr:'Où (avec mouvement) ?',em:'➡️'},
  {es:'¿A qué hora?',fr:'À quelle heure ?',em:'🕐'},
  {es:'¿Cuánto tiempo?',fr:'Combien de temps ?',em:'⏱️'},
  {es:'¿Con quién?',fr:'Avec qui ?',em:'🤝'},
 ]},
{id:'num',level:1,emoji:'🔢',name:'Los Números',sub:'Les Nombres',
 words:[
  {es:'Cero',fr:'Zéro',em:'0️⃣'},
  {es:'Uno',fr:'Un',em:'1️⃣'},
  {es:'Dos',fr:'Deux',em:'2️⃣'},
  {es:'Tres',fr:'Trois',em:'3️⃣'},
  {es:'Cuatro',fr:'Quatre',em:'4️⃣'},
  {es:'Cinco',fr:'Cinq',em:'5️⃣'},
  {es:'Seis',fr:'Six',em:'6️⃣'},
  {es:'Siete',fr:'Sept',em:'7️⃣'},
  {es:'Ocho',fr:'Huit',em:'8️⃣'},
  {es:'Nueve',fr:'Neuf',em:'9️⃣'},
  {es:'Diez',fr:'Dix',em:'🔟'},
  {es:'Once',fr:'Onze',em:'1️⃣1️⃣'},
  {es:'Doce',fr:'Douze',em:'1️⃣2️⃣'},
  {es:'Trece',fr:'Treize',em:'1️⃣3️⃣'},
  {es:'Catorce',fr:'Quatorze',em:'1️⃣4️⃣'},
  {es:'Quince',fr:'Quinze',em:'1️⃣5️⃣'},
  {es:'Dieciséis',fr:'Seize',em:'1️⃣6️⃣'},
  {es:'Diecisiete',fr:'Dix-sept',em:'1️⃣7️⃣'},
  {es:'Dieciocho',fr:'Dix-huit',em:'1️⃣8️⃣'},
  {es:'Diecinueve',fr:'Dix-neuf',em:'1️⃣9️⃣'},
  {es:'Veinte',fr:'Vingt',em:'2️⃣0️⃣'},
  {es:'Treinta',fr:'Trente',em:'3️⃣0️⃣'},
  {es:'Cuarenta',fr:'Quarante',em:'4️⃣0️⃣'},
  {es:'Cincuenta',fr:'Cinquante',em:'5️⃣0️⃣'},
  {es:'Sesenta',fr:'Soixante',em:'6️⃣0️⃣'},
  {es:'Setenta',fr:'Soixante-dix',em:'7️⃣0️⃣'},
  {es:'Ochenta',fr:'Quatre-vingts',em:'8️⃣0️⃣'},
  {es:'Noventa',fr:'Quatre-vingt-dix',em:'9️⃣0️⃣'},
  {es:'Cien / ciento',fr:'Cent (ciento delante de un número : ciento veinte = 120)',em:'1️⃣0️⃣0️⃣'},
  {es:'Doscientos / Doscientas',fr:'Deux cents',em:'2️⃣0️⃣0️⃣'},
  {es:'Trescientos / Trescientas',fr:'Trois cents',em:'3️⃣0️⃣0️⃣'},
  {es:'Cuatrocientos / Cuatrocientas',fr:'Quatre cents',em:'4️⃣0️⃣0️⃣'},
  {es:'Quinientos / Quinientas',fr:'Cinq cents',em:'5️⃣0️⃣0️⃣'},
  {es:'Seiscientos / Seiscientas',fr:'Six cents',em:'6️⃣0️⃣0️⃣'},
  {es:'Setecientos / Setecientas',fr:'Sept cents',em:'7️⃣0️⃣0️⃣'},
  {es:'Ochocientos / Ochocientas',fr:'Huit cents',em:'8️⃣0️⃣0️⃣'},
  {es:'Novecientos / Novecientas',fr:'Neuf cents',em:'9️⃣0️⃣0️⃣'},
  {es:'Mil',fr:'Mille',em:'1️⃣0️⃣0️⃣0️⃣'},
  {es:'Dos mil',fr:'Deux mille (mille es invariable)',em:'2️⃣0️⃣0️⃣0️⃣'}
 ]},
  { id: 'heure_calendrier',
    level: 1,
    emoji: '📅',
    name: "La Hora y el Calendario",
    sub: 'L\'Heure et le Calendrier',
    words: [
      // L'heure (La hora)
      { es: '¿Qué hora es?', fr: 'Quelle heure est-il ?', em: '🕐' },
      { es: 'Son las tres', fr: 'Il est trois heures', em: '🕒' },
      { es: 'Son las tres y media', fr: 'Il est trois heures et demie', em: '🕞' },
      { es: 'Son las tres y cuarto', fr: 'Il est trois heures et quart', em: '🕒' },
      { es: 'Son las tres menos cuarto', fr: 'Il est deux heures quarante-cinq', em: '🕓' },
      { es: 'Es mediodía / Es medianoche', fr: 'Il est midi / Il est minuit', em: '🌞🌛' },
      { es: 'A las + hora', fr: 'À + heure', em: '⏰' },
      { es: 'Los minutos / Los segundos', fr: 'Les minutes / Les secondes', em: '⏱️' },
      { es: 'Temprano / Tarde', fr: 'Tôt / Tard', em: '⏳' },

      // Jours de la semaine (Días de la semana)
      { es: 'Lunes', fr: 'Lundi', em: '1️⃣' },
      { es: 'Martes', fr: 'Mardi', em: '2️⃣' },
      { es: 'Miércoles', fr: 'Mercredi', em: '3️⃣' },
      { es: 'Jueves', fr: 'Jeudi', em: '4️⃣' },
      { es: 'Viernes', fr: 'Vendredi', em: '5️⃣' },
      { es: 'Sábado', fr: 'Samedi', em: '6️⃣' },
      { es: 'Domingo', fr: 'Dimanche', em: '7️⃣' },

      // Mois (Meses)
      { es: 'Enero', fr: 'Janvier', em: '❄️' },
      { es: 'Febrero', fr: 'Février', em: '💝' },
      { es: 'Marzo', fr: 'Mars', em: '🌱' },
      { es: 'Abril', fr: 'Avril', em: '🌸' },
      { es: 'Mayo', fr: 'Mai', em: '🌼' },
      { es: 'Junio', fr: 'Juin', em: '☀️' },
      { es: 'Julio', fr: 'Juillet', em: '🏖️' },
      { es: 'Agosto', fr: 'Août', em: '🌊' },
      { es: 'Septiembre', fr: 'Septembre', em: '🍂' },
      { es: 'Octubre', fr: 'Octobre', em: '🎃' },
      { es: 'Noviembre', fr: 'Novembre', em: '🍁' },
      { es: 'Diciembre', fr: 'Décembre', em: '🎄' },

      // Références temporelles
      { es: 'El fin de semana', fr: 'Le week-end', em: '🎉' },
      { es: 'Ayer / Hoy / Mañana', fr: 'Hier / Aujourd\'hui / Demain', em: '📅' },
      { es: 'La semana que viene', fr: 'La semaine prochaine', em: '➡️' },
      { es: 'El año pasado / El año que viene', fr: 'L\'année dernière / L\'année prochaine', em: '📆' },

      // Fêtes culturelles
      { es: 'El 14 de julio (Día Nacional de Francia)', fr: 'Le 14 juillet (Fête Nationale française)', em: '🇫🇷' },
      { es: 'El 10 de agosto (Día de la Independencia del Ecuador)', fr: 'Le 10 août (Indépendance de l\'Équateur)', em: '🇪🇨', variants: { CO: 'El 20 de julio', PE: 'El 28 de julio', AR: 'El 25 de mayo', MX: 'El 15 de septiembre', VE: 'El 5 de julio' } },
      { es: 'La Navidad / El Año Nuevo', fr: 'Noël / Le Nouvel An', em: '🎄🎆' }
    ]},
  { id: 'meteo_climat',
    level: 1,
    emoji: '🌤️',
    name: "El Tiempo y el Clima",
    sub: 'La Météo et le Climat',
    words: [
      // Météo (El tiempo)
      { es: '¿Qué tiempo hace?', fr: 'Quel temps fait-il ?', em: '🌡️' },
      { es: 'Hace sol', fr: 'Il fait soleil', em: '☀️' },
      { es: 'Hace calor', fr: 'Il fait chaud', em: '🔥' },
      { es: 'Hace frío', fr: 'Il fait froid', em: '🥶' },
      { es: 'Hace viento', fr: 'Il y a du vent', em: '💨' },
      { es: 'Llueve / Está lloviendo', fr: 'Il pleut', em: '🌧️' },
      { es: 'Nieva / Está nevando', fr: 'Il neige', em: '❄️' },
      { es: 'Hay niebla', fr: 'Il y a du brouillard', em: '🌫️' },
      { es: 'Está nublado', fr: 'Il est nuageux', em: '☁️' },
      { es: 'Hay tormenta / Relámpagos', fr: 'Il y a un orage / Des éclairs', em: '⚡' },
      { es: 'El pronóstico del tiempo', fr: 'Les prévisions météo', em: '📺' },
      { es: 'La temperatura', fr: 'La température', em: '🌡️' },

      // Saisons (Las estaciones)
      { es: 'La primavera', fr: 'Le printemps', em: '🌸' },
      { es: 'El verano', fr: 'L\'été', em: '☀️' },
      { es: 'El otoño', fr: 'L\'automne', em: '🍂' },
      { es: 'El invierno', fr: 'L\'hiver', em: '❄️' },

      // Climat (El clima)
      { es: 'El cambio climático', fr: 'Le changement climatique', em: '🌍' },
      { es: 'La sequía', fr: 'La sécheresse', em: '🏜️' },

      // Références culturelles équatoriennes
      { es: 'La temporada seca (Ecuador, junio-noviembre en la costa)', fr: 'La saison sèche (Équateur, juin-novembre sur la côte)', em: '☀️', variants: { PE: 'El verano costeño', CO: 'El verano', VE: 'El verano' } },
      { es: 'La temporada de lluvias (Ecuador, diciembre-mayo en la costa)', fr: 'La saison des pluies (Équateur)', em: '🌧️', variants: { PE: 'El invierno costeño', CO: 'La temporada de lluvias', VE: 'La temporada de lluvias' } }
    ]},
{id:'verb',level:1,emoji:'📝',name:'Los Verbos',sub:'Les Verbes',
 words:[
   {es:'Ser / Estar',fr:'Être (ser=permanente : soy español / estar=temporal : estoy cansado)',em:'🧑',conj:{es:['Yo soy/estoy','Tú eres/estás','Él/Ella es/está','Nosotros somos/estamos','Vosotros sois/estáis','Ellos/Ellas son/están'],fr:['Je suis','Tu es','Il/Elle est','Nous sommes','Vous êtes','Ils/Elles sont']}},
   {es:'Tener',fr:'Avoir',em:'🤲',conj:{es:['Yo tengo','Tú tienes','Él/Ella tiene','Nosotros tenemos','Vosotros tenéis','Ellos/Ellas tienen'],fr:['J\'ai','Tu as','Il/Elle a','Nous avons','Vous avez','Ils/Elles ont']}},
   {es:'Hablar',fr:'Parler',em:'🗣️',conj:{es:['Yo hablo','Tú hablas','Él/Ella habla','Nosotros hablamos','Vosotros habláis','Ellos/Ellas hablan'],fr:['Je parle','Tu parles','Il/Elle parle','Nous parlons','Vous parlez','Ils/Elles parlent']}},
   {es:'Vivir',fr:'Habiter',em:'🏠',conj:{es:['Yo vivo','Tú vives','Él/Ella vive','Nosotros vivimos','Vosotros vivís','Ellos/Ellas viven'],fr:['J\'habite','Tu habites','Il/Elle habite','Nous habitons','Vous habitez','Ils/Elles habitent']}},
   {es:'Coger',fr:'Prendre',em:'🤲',conj:{es:['Yo cojo','Tú coges','Él/Ella coge','Nosotros cogemos','Vosotros cogéis','Ellos/Ellas cogen'],fr:['Je prends','Tu prends','Il/Elle prend','Nous prenons','Vous prenez','Ils/Elles prennent']},
    variants:{MX:'Tomar / Agarrar',VE:'Tomar / Agarrar',AR:'Tomar / Agarrar',EC:'Tomar / Agarrar',PE:'Tomar / Agarrar',CO:'Tomar / Agarrar'}},
   {es:'Trabajar',fr:'Travailler',em:'💼',conj:{es:['Yo trabajo','Tú trabajas','Él/Ella trabaja','Nosotros trabajamos','Vosotros trabajáis','Ellos/Ellas trabajan'],fr:['Je travaille','Tu travailles','Il/Elle travaille','Nous travaillons','Vous travaillez','Ils/Elles travaillent']},
    variants:{MX:'Chambear',VE:'Trabajar',AR:'Laburar',EC:'Chambear',PE:'Chambear',CO:'Camellar / Chambear'}},
   {es:'Conducir',fr:'Conduire',em:'🚗',conj:{es:['Yo conduzco','Tú conduces','Él/Ella conduce','Nosotros conducimos','Vosotros conducís','Ellos/Ellas conducen'],fr:['Je conduis','Tu conduis','Il/Elle conduit','Nous conduisons','Vous conduisez','Ils/Elles conduisent']},
    variants:{MX:'Manejar',VE:'Manejar',AR:'Manejar',EC:'Manejar',PE:'Manejar',CO:'Manejar'}},
   {es:'Molar',fr:'Adorer (argot)',em:'😎',conj:{es:['Me mola','Te mola','Le mola','Nos mola','Os mola','Les mola'],fr:['J\'adore','Tu adores','Il/Elle adore','Nous adorons','Vous adorez','Ils/Elles adorent']},
    variants:{MX:'Estar chido / Gustar un buen',VE:'Estar fino / Gustar burda',AR:'Copar / Estar buenísimo',EC:'Bacán / Gustar full',PE:'Estar paja / Bacán',CO:'¡Qué chimba! / Bacano'}}
 ]},
{id:'emot',level:1,emoji:'😄',name:'Las Emociones',sub:'Les Émotions',
 words:[
  {es:'Contento / Contenta',fr:'Content / Contente',em:'😊'},
  {es:'Feliz',fr:'Heureux / Heureuse',em:'😊'},
  {es:'Alegre',fr:'Joyeux / Joyeuse',em:'😄'},
  {es:'Triste',fr:'Triste / Triste',em:'😢'},
  {es:'Cansado / Cansada',fr:'Fatigué / Fatiguée',em:'😴'},
  {es:'Enfadado / Enfadada',fr:'Fâché / Fâchée',em:'😠',
   variants:{MX:'Enojado / Enojada',AR:'Enojado / Enojada',CO:'Enojado / Enojada',VE:'Enojado / Enojada',PE:'Enojado / Enojada'}},
  {es:'Cabreado / Cabreada',fr:'Énervé / Énervée (coloquial España)',em:'😠',
   variants:{MX:'Encabronado / Encabronada',AR:'Caliente / Chinchudo',CO:'Berraco / Berraca',PE:'Asado / Asada'}},
  {es:'Tener miedo',fr:'Avoir peur / Avoir peur',em:'😨'},
  {es:'Enfermo / Enferma',fr:'Malade / Malade',em:'🤒'},
  {es:'Pachucho / Pachucha',fr:'Pas très bien / Malade (coloquial afectuoso)',em:'🤒',
   variants:{MX:'Malito / Malita',AR:'Decaído / Decaída',CO:'Malito / Malita',PE:'Malito / Malita'}},
  {es:'Preocupado / Preocupada',fr:'Inquiet / Inquiète',em:'😟'},
  {es:'Estresado / Estresada',fr:'Stressé / Stressée',em:'😰'},
  {es:'Agobiado / Agobiada',fr:'Stressé / Stressée',em:'😰',
   variants:{MX:'Abrumado / Abrumada',AR:'Agobiado / Abrumado',CO:'Abrumado / Abrumada',PE:'Abrumado / Abrumada'}},
  {es:'Decepcionado / Decepcionada',fr:'Déçu / Déçue',em:'😞'},
  {es:'Enamorado / Enamorada',fr:'Amoureux / Amoureuse',em:'😍'},
  {es:'¡Qué guay! / ¡Mola!',fr:'C\'est super ! / C\'est cool ! (coloquial España)',em:'🌟',
   variants:{MX:'¡Qué padre! / ¡Qué chido!',AR:'¡Qué copado! / ¡Qué bueno!',CO:'¡Qué chévere! / ¡Qué bacano!',VE:'¡Qué chévere!',PE:'¡Qué chévere! / ¡Qué paja!'}}
 ]},
{id:'fam',level:1,emoji:'👨‍👩‍👧',name:'La Familia',sub:'La Famille',
 words:[
  {es:'La madre / La mamá',fr:'La mère / La maman',em:'👩'},
  {es:'El padre / El papá',fr:'Le père / Le papa',em:'👨'},
  {es:'La hija',fr:'La fille',em:'👧'},
  {es:'El hijo',fr:'Le fils',em:'👦'},
  {es:'La hermana',fr:'La sœur',em:'👧'},
  {es:'El hermano',fr:'Le frère',em:'🧑'},
  {es:'La abuela',fr:'La grand-mère',em:'👵'},
  {es:'El abuelo',fr:'Le grand-père',em:'👴'},
  {es:'La mujer / La esposa',fr:'La femme',em:'💑'},
  {es:'El marido / El esposo',fr:'Le mari',em:'💍'},
  {es:'El tío / La tía',fr:'L\'oncle / La tante',em:'👨/👩'}
 ]},
{id:'col',level:1,emoji:'🎨',name:'Los Colores',sub:'Les Couleurs',
 words:[
  {es:'Rojo',fr:'Rouge',em:'❤️'},
  {es:'Azul',fr:'Bleu',em:'💙'},
  {es:'Verde',fr:'Vert',em:'💚'},
  {es:'Amarillo',fr:'Jaune',em:'💛'},
  {es:'Naranja',fr:'Orange',em:'🧡',
   variants:{MX:'Anaranjado',AR:'Naranja / Anaranjado',CO:'Anaranjado',PE:'Anaranjado'}},
  {es:'Blanco',fr:'Blanc',em:'🤍'},
  {es:'Negro',fr:'Noir',em:'🖤'},
  {es:'Rosa',fr:'Rose',em:'🩷',
   variants:{MX:'Rosado',AR:'Rosado',CO:'Rosado',PE:'Rosado'}},
  {es:'Morado / Violeta',fr:'Violet',em:'💜'},
  {es:'Marrón',fr:'Marron',em:'🤎',
   variants:{MX:'Café',AR:'Marrón',CO:'Café',PE:'Marrón / Café'}},
  {es:'Gris',fr:'Gris',em:'🩶'}
 ]}, 
{id:'viequot',level:1,emoji:'🏡',name:'La Vida Cotidiana',sub:'La Vie Quotidienne',
 words:[
  {es:'Por la mañana',fr:'Le matin',em:'🌅'},
  {es:'Al mediodía',fr:'À midi',em:'🕛'},
  {es:'Por la tarde',fr:'L\'après-midi / Le soir',em:'☀️'},
  {es:'Por la noche',fr:'La nuit',em:'🌙'},
  {es:'Despertarse',fr:'Se réveiller',em:'⏰'},
  {es:'Levantarse',fr:'Se lever',em:'🛏️'},
  {es:'Desayunar',fr:'Prendre le petit-déjeuner',em:'🥐'},
  {es:'Almorzar / Comer',fr:'Déjeuner',em:'🍽️'},
  {es:'Cenar',fr:'Dîner',em:'🌃'},
  {es:'Acostarse',fr:'Se coucher',em:'😴'},
  {es:'Hacer las compras',fr:'Faire les courses',em:'🛒'},
  {es:'Hacer la colada',fr:'Faire la lessive',em:'🧺'},
  {es:'Hacer la cama',fr:'Faire le lit',em:'🛏️'},
  {es:'Fregar los platos',fr:'Faire la vaisselle',em:'🍽️',
   variants:{MX:'Lavar los trastes',AR:'Lavar los platos',CO:'Lavar la loza',VE:'Lavar los platos',EC:'Lavar los platos'}},
  {es:'Barrer',fr:'Balayer',em:'🧹'},
  {es:'El desayuno',fr:'Le petit-déjeuner',em:'☕'},
  {es:'El almuerzo',fr:'Le déjeuner',em:'🥗'},
  {es:'La cena',fr:'Le dîner',em:'🍷'},
  {es:'La merienda',fr:'Le goûter',em:'🍪'},
  // Références culturelles équatoriennes/françaises
  {es:'El colada morada (bebida ecuatoriana)',fr:'La colada morada (boisson traditionnelle équatorienne)',em:'🍵',
   variants:{PE:'La chicha morada',CO:'El masato',VE:'El guarapo'}},
  {es:'El aperitivo / El kir (Francia)',fr:'L\'apéritif (le kir en France)',em:'🍾'},
  {es:'La siesta (más común en España)',fr:'La sieste (plus commune en Espagne qu\'en France)',em:'💤'},
 ]},
{id: 'nour',
  level: 1,
  emoji: '🍽️',
  name: 'La Comida',
  sub: 'La Nourriture',
  words: [
    // Catégories générales
    {es: 'Las frutas', fr: 'Les fruits', em: '🍉'},
    {es: 'Las verduras', fr: 'Les légumes', em: '🥦'},
    
    // Féculents & Base de l'assiette
    {es: 'El pan', fr: 'Le pain', em: '🍞'}, // France (La baguette) / Espagne (Pan de pueblo)
    {es: 'El arroz', fr: 'Le riz', em: '🍚'}, // France (Camargue) / Espagne (Valence - Paella)
    {es: 'La pasta', fr: 'Les pâtes', em: '🍝'},
    {
      es: 'La patata / Las patatas fritas', 
      fr: 'La pomme de terre / Les frites', 
      em: '🥔',
      variants: {MX: 'La papa / Las papas fritas', AR: 'La papa / Las papas fritas', CO: 'La papa / Las papas fritas', VE: 'La papa / Las papas fritas', PE: 'La papa / Las papas fritas', EC: 'La papa / Las papas fritas'}
    },
    
    // Protéines
    {es: 'La carne', fr: 'La viande', em: '🥩'},
    {es: 'El pollo', fr: 'Le poulet', em: '🍗'},
    {es: 'El pescado', fr: 'Le poisson', em: '🐟'},
    {es: 'El jamón', fr: 'Le jambon', em: '🥩'},
    {es: 'El chorizo', fr: 'Le chorizo', em: '🌭'},
    {es: 'El huevo', fr: 'L\'œuf', em: '🥚'},
    
    // Produits laitiers
    {es: 'El queso', fr: 'Le fromage', em: '🧀'},
    {
      es: 'La mantequilla', 
      fr: 'Le beurre', 
      em: '🧈', // France (Normandie/Bretagne - Beurre salé)
      variants: {AR: 'La manteca'}
    },
    
    // Fruits & Variantes régionales
    {es: 'La manzana', fr: 'La pomme', em: '🍎'}, // France & Espagne (Régions à Cidre/Sidra)
    {
      es: 'El plátano', 
      fr: 'La banane', 
      em: '🍌',
      variants: {VE: 'El cambur', AR: 'La banana', MX: 'La banana', EC: 'El guineo / El plátano'}
    },
    {es: 'La naranja', fr: 'L\'orange', em: '🍊'}, // Espagne (Valence - Capitale de l'orange)
    {es: 'El limón', fr: 'Le citron', em: '🍋'}, // France (Menton) / Espagne (Murcie)
    {
      es: 'La fresa', 
      fr: 'La fraise', 
      em: '🍓',
      variants: {AR: 'La frutilla', EC: 'La frutilla'} // L'Équateur utilise aussi beaucoup "frutilla" !
    },
    {
      es: 'La sandía', 
      fr: 'La pastèque', 
      em: '🍉',
      variants: {VE: 'La patilla'}
    },
    
    // Légumes & Variantes régionales
    {
      es: 'El tomate', 
      fr: 'La tomate', 
      em: '🍅', // France (Marmande)
      variants: {MX: 'El jitomate'} // Au Mexique, la tomate rouge est le jitomate
    },
    {es: 'La zanahoria', fr: 'La carotte', em: '🥕'},
    {es: 'La cebolla', fr: 'L\'oignon', em: '🧅'},
    {es: 'El ajo', fr: 'L\'ail', em: '🧄'},
    {es: 'El pepino', fr: 'Le concombre', em: '🥒'},
    {es: 'La ensalada', fr: 'La salade', em: '🥗'},
    
    // Condiments & Épicerie douce
    {es: 'El aceite', fr: 'L\'huile', em: '🫒'},
    {es: 'La sal', fr: 'Le sel', em: '🧂'},
    {es: 'La pimienta', fr: 'Le poivre', em: '🌶️'},
    {es: 'La miel', fr: 'Le miel', em: '🍯'},
    {es: 'El chocolate', fr: 'Le chocolat', em: '🍫'}
  ]},
 {id:'bois',level:1,emoji:'🥤',name:'Las Bebidas',sub:'Les Boissons',
 words:[
   {es:'El agua',fr:'L\'eau',em:'💧'},
   {es:'El agua con gas',fr:'L\'eau gazeuse',em:'🫧'},
   {es:'La leche',fr:'Le lait',em:'🥛'},
   {es:'El zumo (de naranja)',fr:'Le jus (d\'orange)',em:'🍊',
    variants:{MX:'El jugo',AR:'El jugo',CO:'El jugo',VE:'El jugo',PE:'El jugo',EC:'El jugo'}},
   {es:'El refresco',fr:'Le soda',em:'🥤'},
   {es:'El café solo',fr:'Le café noir',em:'☕',
    variants:{CO:'El tinto / El tintico',MX:'El café americano / Negro'}},
   {es:'El café con leche',fr:'Le café au lait',em:'☕'},
   {es:'El café de filtro',fr:'Le café filtre',em:'☕'},
   {es:'El té',fr:'Le thé',em:'🍵'},
   {es:'El vino (tinto / blanco)',fr:'Le vin (rouge / blanc)',em:'🍷'},
   {es:'La cerveza',fr:'La bière',em:'🍺'},
   {es:'La sidra',fr:'Le cidre',em:'🍾'}
 ]},
 {id:'rest',level:1,emoji:'🍽️',name:'En el Restaurante',sub:'Au Restaurant',
 words:[
   {es:'La terraza',fr:'La terrasse',em:'☀️'},
   {es:'La mesa',fr:'La table',em:'🪑'},
   {es:'¿Está libre esta mesa?',fr:'Cette table est libre ?',em:'🪑'},
   {es:'El camarero / La camarera',fr:'Le serveur / La serveuse',em:'🧑‍🍳',
    variants:{MX:'El mesero / La mesera',AR:'El mozo / La moza',CO:'El mesero / La mesera',VE:'El mesero / La mesera',PE:'El mesero / La mesera'}},
   {es:'La carta / El menú',fr:'La carte / Le menu',em:'📋'},
   {es:'El menú del día',fr:'Le menu du jour (déjeuner)',em:'🍱'},
   {es:'Pedir / Comandar',fr:'Commander',em:'🙋'},
   {es:'¿Qué recomienda?',fr:'Que recommandez-vous ?',em:'👨‍🍳'},
   {es:'Sin gluten',fr:'Sans gluten',em:'🌾'},
   {es:'Vegetariano / Vegetariana',fr:'Végétarien / Végétarienne',em:'🥦'},
   {es:'El entrante',fr:'L\'entrée',em:'🥗',
    variants:{MX:'La entrada',AR:'La entrada',CO:'La entrada',VE:'La entrada',PE:'La entrada'}},
   {es:'El plato principal',fr:'Le plat principal',em:'🍖'},
   {es:'El postre',fr:'Le dessert',em:'🍮'},
   {es:'El sándwich',fr:'Le sandwich',em:'🥖'},
   {es:'Para llevar',fr:'À emporter',em:'🥡'},
   {es:'La cuenta',fr:'L\'addition',em:'💶'},
   {es:'La propina',fr:'Le pourboire',em:'💰'},
   {es:'La propina está incluida',fr:'Le pourboire est inclus',em:'✅'}
 ]},
{id:'orient',level:1,emoji:'🧭',name:'Orientarse',sub:'S\'Orienter',words:[{es:'Todo recto',fr:'Tout droit',em:'⬆️'},{es:'A la izquierda',fr:'À gauche',em:'⬅️'},{es:'A la derecha',fr:'À droite',em:'➡️'},{es:'Delante',fr:'Devant',em:'🔜'},{es:'Detrás',fr:'Derrière',em:'🔙'},{es:'Al lado',fr:'À côté',em:'↔️'},{es:'Frente a / Enfrente',fr:'En face',em:'🔄'},{es:'Cerca',fr:'Près',em:'📍'},{es:'Lejos',fr:'Loin',em:'🌅'},{es:'El mapa / El plano',fr:'Le plan / La carte',em:'🗺️'},
]},
{id:'lieux',level:1,emoji:'🏙️',name:'Los Lugares',sub:'Les Lieux',words:[{es:'La ciudad',fr:'La ville',em:'🏙️'},{es:'El pueblo',fr:'Le village',em:'🏡'},{es:'El campo',fr:'La campagne',em:'🌾'},{es:'La montaña',fr:'La montagne',em:'⛰️'},{es:'El mar / El océano',fr:'La mer / L\'océan',em:'🌊'},{es:'La playa',fr:'La plage',em:'🏖️'},{es:'El río',fr:'La rivière',em:'🏞️'},{es:'El parque',fr:'Le parc',em:'🌳'},{es:'La plaza',fr:'La place',em:'⛲'},{es:'La calle / La avenida',fr:'La rue / L\'avenue',em:'🛣️'},{es:'La manzana (de casas)',fr:'Le pâté de maisons',em:'🏘️'},{es:'El ayuntamiento',fr:'La mairie / La commune',em:'🏛️'},{es:'El hospital',fr:'L\'hôpital',em:'🏥'},{es:'La farmacia',fr:'La pharmacie',em:'💊'},{es:'El banco',fr:'La banque',em:'🏦'},{es:'La iglesia',fr:'L\'église',em:'⛪'},{es:'El supermercado',fr:'Le supermarché',em:'🛒'},{es:'El bar / El café',fr:'Le bar / Le café',em:'☕'},{es:'La tienda',fr:'La boutique / Le commerce',em:'🏪'},{es:'La escuela infantil / La guardería',fr:'L\'école maternelle',em:'🧸'},{es:'La escuela primaria / El colegio',fr:'L\'école primaire',em:'🎒'},{es:'El instituto',fr:'Le collège / Le lycée',em:'📚'},{es:'La universidad',fr:'L\'université',em:'🏛️'},
]},
{id:'trans',level:1,emoji:'🚌',name:'Los Transportes',sub:'Les Transports',
 words:[
   {es:'El autobús / El bus',fr:'Le bus',em:'🚌',
    variants:{MX:'El camión / El autobús',AR:'El colectivo',CO:'El bus / La buseta',VE:'El autobús / La buseta',PE:'El micro / La combi'}},
   {es:'El metro',fr:'Le métro',em:'🚇',
    variants:{AR:'El subte'}},
   {es:'El tranvía',fr:'Le tramway',em:'🚊'},
   {es:'El tren',fr:'Le train',em:'🚂'},
   {es:'El avión',fr:'L\'avion',em:'✈️'},
   {es:'El taxi',fr:'Le taxi',em:'🚕'},
   {es:'El coche',fr:'La voiture',em:'🚗',
    variants:{MX:'El carro',CO:'El carro',VE:'El carro',PE:'El carro',AR:'El auto'}},
   {es:'La moto',fr:'La moto',em:'🏍️'},
   {es:'La bicicleta / La bici',fr:'Le vélo',em:'🚴'},
   {es:'El billete',fr:'Le billet',em:'🎫',
    variants:{MX:'El boleto',AR:'El boleto',CO:'El pasaje / El boleto',VE:'El billete / El pasaje',PE:'El boleto / El pasaje'}}
 ]},
{id:'corps',level:1,emoji:'🧍',name:'El Cuerpo',sub:'Le Corps',
 words:[
   {es:'La cabeza',fr:'La tête',em:'🗣️'},
   {es:'El pelo',fr:'Les cheveux',em:'💇‍♂️'},
   {es:'El ojo / Los ojos',fr:'L\'œil / Les yeux',em:'👀'},
   {es:'La nariz',fr:'Le nez',em:'👃'},
   {es:'La oreja / Las orejas',fr:'L\'oreille / Les oreilles',em:'👂'},
   {es:'La boca',fr:'La bouche',em:'👄'},
   {es:'Los labios',fr:'Les lèvres',em:'💋'},
   {es:'La lengua',fr:'La langue',em:'👅'},
   {es:'El diente / Los dientes',fr:'La dent / Les dents',em:'🦷'},
   {es:'El cuello',fr:'Le cou',em:'🦒'},
   {es:'El brazo / Los brazos',fr:'Le bras / Les bras',em:'💪'},
   {es:'La mano / Las manos',fr:'La main / Les mains',em:'✋'},
   {es:'El dedo / Los dedos',fr:'Le doigt / Les doigts',em:'☝️'},
   {es:'La uña / Las uñas',fr:'L\'ongle / Les ongles',em:'💅'},
   {es:'La espalda',fr:'Le dos',em:'🧍'},
   {es:'La barriga / La tripa',fr:'Le ventre',em:'🫃',
    variants:{MX:'La panza',VE:'La panza',AR:'La panza',EC:'La panza',PE:'La panza',CO:'La panza'}},
   {es:'La pierna / Las piernas',fr:'La jambe / Les jambes',em:'🦵'},
   {es:'El pie / Los pies',fr:'Le pied / Les pieds',em:'🦶'},
   {es:'El corazón',fr:'Le cœur',em:'❤️'},
   {es:'El cerebro',fr:'Le cerveau',em:'🧠'},
   {es:'El hueso / Los huesos',fr:'L\'os / Les os',em:'🦴'}
 ]},
{id:'objets',level:1,emoji:'🔑',name:'Objetos Cotidianos',sub:'Objets du Quotidien',
 words:[
   {es:'El teléfono',fr:'Le téléphone',em:'☎️'},
   {es:'El móvil',fr:'Le portable / le téléphone mobile',em:'📱',
    variants:{MX:'El celular',AR:'El celular',CO:'El celular',VE:'El celular',PE:'El celular'}},
   {es:'El ordenador',fr:'L\'ordinateur',em:'💻',
    variants:{MX:'La computadora',AR:'La computadora',CO:'El computador / La computadora',VE:'El computador',PE:'La computadora'}},
   {es:'El cargador',fr:'Le chargeur',em:'🔌'},
   {es:'El reloj de pulsera',fr:'La montre',em:'⌚'},
   {es:'El reloj (de pared)',fr:'L\'horloge / la pendule',em:'🕐'},
   {es:'Las llaves',fr:'Les clés',em:'🔑'},
   {es:'La cartera / El monedero',fr:'Le portefeuille / le porte-monnaie',em:'👛',
    variants:{MX:'La billetera / El monedero',AR:'La billetera',CO:'La billetera',VE:'La billetera',PE:'La billetera'}},
   {es:'La mochila',fr:'Le sac à dos',em:'🎒'},
   {es:'Las gafas',fr:'Les lunettes',em:'👓',
    variants:{MX:'Los lentes',AR:'Los anteojos / Lentes',CO:'Los lentes',VE:'Los lentes',PE:'Los lentes'}},
   {es:'El paraguas',fr:'Le parapluie',em:'☂️'},
   {es:'El papel',fr:'Le papier',em:'📄'},
   {es:'El bolígrafo / El boli',fr:'Le stylo / le bic',em:'🖊️',
    variants:{MX:'La pluma',AR:'La lapicera / El birome',CO:'El lapicero',VE:'El bolígrafo / El lapicero',PE:'El lapicero'}},
   {es:'Las tijeras',fr:'Les ciseaux',em:'✂️'},
   {es:'El plato',fr:'L\'assiette',em:'🍽️'},
   {es:'El vaso',fr:'Le verre',em:'🥛'},
   {es:'La taza',fr:'La tasse',em:'☕'},
   {es:'La cuchara',fr:'La cuillère',em:'🥄'},
   {es:'El tenedor',fr:'La fourchette',em:'🍴'},
   {es:'El cuchillo',fr:'Le couteau',em:'🔪'},
   {es:'La botella',fr:'La bouteille',em:'🍶'},
   {es:'El espejo',fr:'Le miroir',em:'🪞'},
   {es:'La toalla',fr:'La serviette',em:'🛁'},
   {es:'El jabón',fr:'Le savon',em:'🧼'},
   {es:'La almohada',fr:'L\'oreiller',em:'🛌'}
 ]},
{id:'log',level:1,emoji:'🏠',name:'La Vivienda',sub:'Le Logement',
 words:[
   {es:'La casa',fr:'La maison',em:'🏠'},
   {es:'El piso / El apartamento',fr:'L\'appartement',em:'🏢',
    variants:{MX:'El departamento',AR:'El departamento',CO:'El apartamento',VE:'El apartamento',PE:'El departamento'}},
   {es:'La entrada / El recibidor',fr:'L\'entrée',em:'🚪'},
   {es:'El salón / El comedor',fr:'Le salon / la salle à manger',em:'🛋️',
    variants:{MX:'La sala',AR:'El living / El comedor',CO:'La sala',VE:'La sala',PE:'La sala'}},
   {es:'La cocina',fr:'La cuisine',em:'🍳'},
   {es:'La habitación / El dormitorio',fr:'La chambre',em:'🛏️'},
   {es:'El cuarto de baño',fr:'La salle de bain',em:'🚿'},
   {es:'El aseo / Los servicios',fr:'Les toilettes',em:'🚽',
    variants:{MX:'El baño',AR:'El baño',CO:'El baño',VE:'El baño / El sanitario',PE:'El baño'}},
   {es:'El garaje',fr:'Le garage',em:'🚗'}
 ]},
{id:'muebles_equipamiento',level:1,emoji:'🪑',name:'Muebles y Equipamiento',sub:'Meubles et Équipements',
 words:[
   {es:'El sofá',fr:'Le canapé',em:'🛋️'},
   {es:'El sillón',fr:'Le fauteuil',em:'💺'},
   {es:'La mesa',fr:'La table',em:'🪵'},
   {es:'La silla',fr:'La chaise',em:'🪑'},
   {es:'La lámpara',fr:'La lampe',em:'💡'},
   {es:'La estantería',fr:'L\'étagère',em:'📚'},
   {es:'La cama',fr:'Le lit',em:'🛏️'},
   {es:'El armario',fr:'L\'armoire',em:'🗄️',
    variants:{MX:'El clóset',AR:'El placard / El ropero',CO:'El clóset / El armario',VE:'El clóset',PE:'El clóset'}},
   {es:'El escritorio',fr:'Le bureau',em:'🖊️'},
   {es:'La nevera / El frigorífico',fr:'Le réfrigérateur',em:'🧊',
    variants:{MX:'El refrigerador',AR:'La heladera',CO:'La nevera / El refrigerador',VE:'La nevera',PE:'El refrigerador'}},
   {es:'El horno',fr:'Le four',em:'🔥'},
   {es:'El microondas',fr:'Le micro-ondes',em:'🔲♨️'},
   {es:'El fregadero',fr:'L\'évier',em:'🚰',
    variants:{MX:'El fregadero / La tarja',AR:'La pileta de la cocina',CO:'El lavaplatos',VE:'El fregadero',PE:'El lavadero'}},
   {es:'El lavabo',fr:'Le lavabo',em:'🚰',
    variants:{MX:'El lavamanos',AR:'El lavatorio / La bacha',CO:'El lavamanos',VE:'El lavamanos',PE:'El lavamanos'}},
   {es:'La bañera',fr:'La baignoire',em:'🛁',
    variants:{AR:'La bañadera'}},
   {es:'La ducha',fr:'La ducha',em:'🚿'}
 ]},
{id:'veth',level:1,emoji:'👗',name:'La Ropa',sub:'Les Vêtements',
 words:[
   {es:'La camiseta',fr:'Le t-shirt',em:'👕',variants:{MX:'La playera',VE:'La franela',AR:'La remera',PE:'El polo'}},
   {es:'La camisa',fr:'La chemise',em:'👔'},
   {es:'El pantalón',fr:'Le pantalon',em:'👖'},
   {es:'Los zapatos / Las zapatillas',fr:'Les chaussures / Les baskets',em:'👟',variants:{MX:'Los zapatos / Los tenis',VE:'Los zapatos / Los tenis',EC:'Los zapatos / Los tenis',CO:'Los zapatos / Los tenis'}},
   {es:'Los calcetines',fr:'Les chaussettes',em:'🧦',variants:{MX:'Las medias',VE:'Las medias',AR:'Las medias',EC:'Las medias',PE:'Las medias',CO:'Las medias'}},
   {es:'El vestido / La falda',fr:'La robe / La jupe',em:'👗',variants:{AR:'El vestido / La pollera'}},
   {es:'Los pantalones cortos / El short',fr:'Le short',em:'🩳'},
   {es:'El jersey',fr:'Le pull',em:'🧥',variants:{MX:'El suéter',VE:'El suéter',AR:'El buzo / El pulóver',EC:'El saco / La chompa',PE:'La chompa',CO:'El saco'}},
   {es:'La chaqueta',fr:'La veste',em:'🧥',variants:{MX:'La chamarra',AR:'La campera',EC:'La casaca',PE:'La casaca'}},
   {es:'El sombrero / La gorra',fr:'Le chapeau / La casquette',em:'🎩'},
   {es:'El abrigo',fr:'Le manteau',em:'🧥'},
   {es:'La bufanda',fr:'L\'écharpe',em:'🧣'},
   {es:'Los guantes',fr:'Les gants',em:'🧤'},
   {es:'El gorro',fr:'Le bonnet',em:'A0'},
   {es:'El bolso',fr:'Le sac',em:'👜',variants:{MX:'La bolsa',VE:'La cartera',AR:'La cartera',EC:'La cartera',PE:'La cartera',CO:'La cartera'}},
   {es:'El traje de baño / El bañador',fr:'Le maillot de bain',em:'🩱'}
 ]},
{id:'met',level:1,emoji:'💼',name:'Las Profesiones',sub:'Les Professions',
 words:[
   {es:'El/la estudiante',fr:'L\'étudiant / L\'étudiante',em:'🎓'},
   {es:'El profesor / La profesora',fr:'Le professeur / La professeure',em:'👩‍🏫'},
   {es:'El camarero / La camarera',fr:'Le serveur / La serveuse',em:'🍽️',
    variants:{MX:'El mesero / La mesera',VE:'El mesero / La mesera',AR:'El mozo / La moza',EC:'El mesero / La mesera',PE:'El mesero / La mesera',CO:'El mesero / La mesera'}},
   {es:'El vendedor / La vendedora',fr:'Le vendeur / La vendeuse',em:'🏪'},
   {es:'El/la taxista',fr:'Le chauffeur de taxi / La chauffeuse de taxi',em:'🚕'},
   {es:'El médico / La médica / El doctor',fr:'Le médecin / Le docteur',em:'🩺'},
   {es:'El enfermero / La enfermera',fr:'L\'infirmier / L\'infirmière',em:'👨‍⚕️'},
   {es:'El cocinero / La cocinera',fr:'Le cuisinier / La cuisinière',em:'👨‍🍳'},
   {es:'El fontanero / La fontanera',fr:'Le plombier / La plombière',em:'🔧',
    variants:{MX:'El plomero / La plomera',VE:'El plomero / La plomera',AR:'El plomero / La plomera',EC:'El plomero / La plomera',PE:'El gasfitero / La gasfitera',CO:'El plomero / La plomera'}},
   {es:'El informático / La informática',fr:'L\'informaticien / Le technicien système',em:'💻'}
 ]},
{id:'sante',level:1,emoji:'🏥',name:'La Salud',sub:'La Santé',
 words:[
   {es:'Doler / Me duele',fr:'Faire mal / j\'ai mal (me duele la cabeza = j\'ai mal à la tête)',em:'🤕'},
   {es:'Tener dolor',fr:'Avoir une douleur (plus formel)',em:'😣'},
   {es:'La fiebre',fr:'La fièvre',em:'🌡️'},
   {es:'La tos',fr:'La toux',em:'😮‍💨'},
   {es:'El pañuelo de papel / El pañuelo',fr:'Le mouchoir',em:'🤧',
    variants:{MX:'El clínex / El pañuelo',VE:'El clínex',AR:'La carilina / El pañuelo',CO:'El clínex / El pañuelo'}},
   {es:'El termómetro',fr:'Le thermomètre',em:'🌡️'},
   {es:'La cita',fr:'Le rendez-vous',em:'📅'},
   {es:'El médico / La médica / El doctor',fr:'Le médecin / Le docteur',em:'🩺'},
   {es:'El/la paciente',fr:'Le/la patient(e)',em:'🛏️'},
   {es:'La consulta médica',fr:'La consultation médicale',em:'📋'},
   {es:'El enfermero / La enfermera',fr:'L\'infirmier / L\'infirmière',em:'👨‍⚕️'},
   {es:'El hospital',fr:'L\'hôpital',em:'🏥'},
   {es:'La receta',fr:'L\'ordonnance',em:'📋'},
   {es:'La farmacia',fr:'La pharmacie',em:'🏪',
    variants:{CO:'La droguería'}},
   {es:'El medicamento / La medicina',fr:'Le médicament',em:'💊'},
   {es:'La pastilla / El comprimido',fr:'Le comprimé',em:'💊'},
   {es:'La vacuna',fr:'Le vaccin',em:'💉'},
   {es:'La tirita',fr:'Le pansement adhésif',em:'🩹',
    variants:{MX:'La curita',VE:'La curita',AR:'La curita',EC:'La curita',PE:'La curita',CO:'La curita'}},
   {es:'El vendaje / La venda',fr:'Le bandage',em:'🩼'},
   {es:'La ambulancia',fr:'L\'ambulance',em:'🚑'},
   {es:'Las urgencias',fr:'Les urgences',em:'🆘',
    variants:{MX:'Emergencias',VE:'Emergencias',AR:'La guardia',EC:'Emergencias',PE:'Emergencias',CO:'Urgencias / Emergencias'}}
 ]},
{id:'viaje',level:1,emoji:'🧳',name:'El Viaje',sub:'Le Voyage',
 words:[
   {es:'El pasaporte',fr:'Le passeport',em:'🛂'},
   {es:'La maleta',fr:'La valise',em:'🧳',
    variants:{AR:'La valija'}},
   {es:'El equipaje',fr:'Les bagages',em:'🎒'},
   {es:'El billete',fr:'Le billet',em:'🎫',
    variants:{MX:'El boleto',AR:'El boleto / El pasaje',CO:'El boleto / El pasaje',VE:'El boleto / El pasaje',PE:'El boleto / El pasaje',}},
   {es:'La reserva',fr:'La réservation',em:'📋'},
   {es:'La agencia de viajes',fr:'L\'agence de voyages',em:'🗺️'},
   {es:'El seguro de viaje',fr:'L\'assurance voyage',em:'📄'},
   {es:'El avión',fr:'L\'avion',em:'✈️'},
   {es:'El aeropuerto',fr:'L\'aéroport',em:'🛫'},
   {es:'La salida',fr:'Le départ',em:'🚪'},
   {es:'La llegada',fr:'L\'arrivée',em:'🛬'},
   {es:'La aduana',fr:'La douane',em:'🛃'},
   {es:'El crucero',fr:'La croisière',em:'🚢'},
   {es:'El hotel',fr:'L\'hôtel',em:'🏨'},
   {es:'La habitación doble o individual',fr:'La chambre double ou simple',em:'🛏️'},
   {es:'La playa',fr:'La plage',em:'🏖️'},
   {es:'La montaña',fr:'La montagne',em:'⛰️'},
   {es:'El turista',fr:'Le touriste',em:'📸'}
 ]},
{id:'pays',level:1,emoji:'🌍',name:'Los Países',sub:'Les Pays',
 words:[
  {es:'Francia',fr:'La France',em:'🇫🇷'},
  {es:'Ecuador',fr:'L\'Équateur',em:'🇪🇨'},
  {es:'España',fr:'L\'Espagne',em:'🇪🇸'},
  {es:'Portugal',fr:'Le Portugal',em:'🇵🇹'},
  {es:'Italia',fr:'L\'Italie',em:'🇮🇹'},
  {es:'Bélgica',fr:'La Belgique',em:'🇧🇪'},
  {es:'Suiza',fr:'La Suisse',em:'🇨🇭'},
  {es:'Alemania',fr:'L\'Allemagne',em:'🇩🇪'},
  {es:'Reino Unido',fr:'Le Royaume-Uni',em:'🇬🇧'},
  {es:'México',fr:'Le Mexique',em:'🇲🇽'},
  {es:'Colombia',fr:'La Colombie',em:'🇨🇴'},
  {es:'Perú',fr:'Le Pérou',em:'🇵🇪'},
  {es:'Argentina',fr:'L\'Argentine',em:'🇦🇷'},
  {es:'Brasil',fr:'Le Brésil',em:'🇧🇷'},
  {es:'Canadá',fr:'Le Canada',em:'🇨🇦'},
  {es:'Marruecos',fr:'Le Maroc',em:'🇲🇦'},
  {es:'Estados Unidos',fr:'Les États-Unis',em:'🇺🇸',
   variants:{MX:'EE. UU.',AR:'EE. UU.',CO:'EE. UU.',VE:'EE. UU.',PE:'EE. UU.'}},
  {es:'Rusia',fr:'La Russie',em:'🇷🇺'},
  {es:'China',fr:'La Chine',em:'🇨🇳'},
  {es:'Japón',fr:'Le Japon',em:'🇯🇵'},
  {es:'India',fr:'L\'Inde',em:'🇮🇳'},
  {es:'Turquía',fr:'La Turquie',em:'🇹🇷'},
  {es:'Grecia',fr:'La Grèce',em:'🇬🇷'},
  {es:'Australia',fr:'L\'Australie',em:'🇦🇺'},
  {es:'Sudáfrica',fr:'L\'Afrique du Sud',em:'🇿🇦'}
 ]},
{id:'ocio',level:1,emoji:'⛰️',name:'las Aficiones',sub:'Les Loisirs',
 words:[
   {es:'La lectura',fr:'La lecture',em:'📚'},
   {es:'El libro',fr:'Le livre',em:'📖'},
   {es:'La música',fr:'La musique',em:'🎵'},
   {es:'El cine',fr:'Le cinéma',em:'🎬'},
   {es:'El teatro',fr:'Le théâtre',em:'🎭'},
   {es:'El deporte',fr:'Le sport',em:'⚽'},
   {es:'La natación',fr:'La natation',em:'🏊'},
   {es:'El ciclismo',fr:'Le cyclisme',em:'🚴'},
   {es:'El atletismo',fr:'L\'athlétisme',em:'🏃'},
   {es:'El senderismo',fr:'La randonnée',em:'🥾',
    variants:{MX:'El excursionismo',AR:'El trekking',CO:'El excursionismo / El trekking',PE:'El trekking'}},
   {es:'La caminata / La marcha',fr:'La marche / La promenade',em:'🚶'},
   {es:'El paseo',fr:'La balade',em:'🌳'},
   {es:'Jugar',fr:'Jouer',em:'🎮'},
   {es:'Practicar',fr:'Pratiquer',em:'💪'},
   {es:'Descansar',fr:'Se reposer',em:'😴'},
   {es:'Disfrutar',fr:'Profiter / Apprécier',em:'😊'}
 ]},
{id: 'plan',
  level: 1,
  emoji: '🌿',
  name: 'Las Plantas',
  sub: 'Les Plantes',
  words: [
    // Éléments botaniques de base
    {es: 'La flor', fr: 'La fleur', em: '🌸'},
    {es: 'El árbol', fr: 'L\'arbre', em: '🌳'},
    {es: 'La hoja', fr: 'La feuille', em: '🍃'},
    {es: 'La hierba', fr: 'L\'herbe', em: '🌱'},
    
    // Références culturelles régionales (Plantes et arbres bruts)
    {es: 'El olivo', fr: 'L\'olivier', em: '🫒'}, // Provence 🇫🇷 / Andalousie 🇪🇸
    {es: 'El girasol', fr: 'Le tournesol', em: '🌻'}, // Midi 🇫🇷 / Castille 🇪🇸
    {es: 'La viña', fr: 'La vigne', em: '🍇'}, // Bordelais 🇫🇷 / La Rioja 🇪🇸
    {es: 'El cactus', fr: 'Le cactus', em: '🌵'}, // Côte d'Azur 🇫🇷 / Mexique 🇲🇽
    {es: 'La palmera', fr: 'Le palmier', em: '🌴'}, // Riviera 🇫🇷 / Colombie & Caraïbes 🇨🇴
    
    // Espaces naturels & Jardins
    {es: 'El jardín', fr: 'Le jardin', em: '🏡'},
    {es: 'La rosa', fr: 'La rose', em: '🌹'},
    {es: 'El bosque', fr: 'La forêt / La jungle', em: '🌲'},
    {
      es: 'El césped', 
      fr: 'La pelouse / Le gazon', 
      em: '⛳',
      variants: {MX: 'El pasto', VE: 'La grama', AR: 'El pasto', EC: 'El pasto', PE: 'El pasto / El grass', CO: 'El pasto'}
    }
  ]},
{id:'anim',level:1,emoji:'🐘',name:'Los Animales',sub:'Les Animaux',
 words:[
   {es:'El perro',fr:'Le chien',em:'🐶'},
   {es:'El gato',fr:'Le chat',em:'🐱'},
   {es:'El pájaro / El loro',fr:'L\'oiseau / Le perroquet',em:'🐦'},
   {es:'El pez',fr:'Le poisson (vivant)',em:'🐟'},
   {es:'El caballo',fr:'Le cheval',em:'🐴'},
   {es:'La vaca',fr:'La vache',em:'🐮'},
   {es:'El cerdo / El guarro',fr:'Le cochon',em:'🐷',
    variants:{MX:'El puerco / El cochino',VE:'El cochino',AR:'El chancho',EC:'El chancho',PE:'El chancho',CO:'El marrano / El cerdo'}},
   {es:'La gallina',fr:'La poule',em:'🐔'},
   {es:'El conejo',fr:'Le lapin',em:'🐰'},
   {es:'El pescado',fr:'Le poisson (dans l\'assiette)',em:'🐟🍽️'},
   {es:'El toro',fr:'Le taureau',em:'🐂'},
   {es:'El pato',fr:'Le canard',em:'🦆'},
   {es:'El gallo',fr:'Le coq',em:'🐓'},
   {es:'El cordero',fr:'L\'agneau',em:'🐑'},
   {es:'La cabra',fr:'La chèvre',em:'🐐'},
   {es:'El burro',fr:'L\'âne',em:'🫏'},
   {es:'El elefante',fr:'L\'éléphant',em:'🐘'},
   {es:'El oso',fr:'L\'ours',em:'🐻'},
   {es:'El tigre',fr:'Le tigre',em:'🐯'},
   {es:'El delfín',fr:'Le dauphin',em:'🐬'},
   {es:'La ballena',fr:'La baleine',em:'🐳'},
   {es:'El cóndor',fr:'Le condor',em:'🦅'},
   {es:'La mariposa',fr:'Le papillon',em:'🦋'},
   {es:'La rana',fr:'La grenouille',em:'🐸'},
   {es:'La serpiente',fr:'Le serpent',em:'🐍'},
   {es:'El lagarto / La lagartija',fr:'Le lézard',em:'🦎'},
   {es:'La araña',fr:'L\'araignée',em:'🕷️'},
   {es:'El mosquito',fr:'Le moustique',em:'🦟',
    variants:{MX:'El zancudo',VE:'El zancudo',AR:'El mosquito',EC:'El zancudo',PE:'El zancudo',CO:'El zancudo'}},
   {es:'La hormiga',fr:'La fourmi',em:'🐜'}
 ]},
{ id: 'agric',
  level: 1,
  emoji: '🌾',
  name: 'La Agricultura y la Ganadería',
  sub: 'L\'Agriculture et l\'Élevage',
  words: [
    // Lieux de production et espaces agricoles
    {es: 'El campo', fr: 'La campagne / Le champ', em: '🌾'},
    {es: 'La granja', fr: 'La ferme', em: '🏚️'},
    {es: 'El huerto', fr: 'Le potager / Le verger', em: '🥕'},
    {
      es: 'La plantación de cacao', 
      fr: 'La plantation de cacao', 
      em: '🍫', // Équateur / Venezuela
      variants: {CO: 'La finca cacaotera', VE: 'El cacao', PE: 'La chacra de cacao'}
    },
    {
      es: 'El cafetal', 
      fr: 'La plantation de café', 
      em: '☕', // Colombie / Région andine
      variants: {CO: 'La finca cafetera', VE: 'La hacienda de café', PE: 'El cafetal'}
    },
    {
      es: 'El bananal', 
      fr: 'La bananeraie', 
      em: '🍌', // Antilles / Équateur
      variants: {PE: 'El platanero', CO: 'El platanar', VE: 'El platanero'}
    },
    
    // Travaux agricoles & Acteurs
    {es: 'Cultivar / Sembrar', fr: 'Cultiver / Semer', em: '🌱'},
    {es: 'Cosechar / La cosecha', fr: 'Récolter / La récolte', em: '🌾'},
    {es: 'Regar', fr: 'Arroser', em: '💧'},
    {es: 'El tractor / El machete', fr: 'Le tracteur / La machette', em: '🚜'},
    {es: 'Los agricultores / los campesinos', fr: 'Les agriculteurs / les paysans', em: '👨‍🌾'},
    
    // Monde de l'Élevage (Ganadería)
    {es: 'La ganadería', fr: 'L\'élevage', em: '🐄'},
    {es: 'El rebaño', fr: 'Le troupeau', em: '🐑'},
    {es: 'El pastor / La pastora', fr: 'Le berger / La bergère', em: '🐑'}, // Alpes/Pyrénées 🇫🇷 / Équateur (Andes)
    {es: 'La leche fresca', fr: 'Le lait frais', em: '🥛'},
    {es: 'El queso artesanal', fr: 'Le fromage artisanal', em: '🧀'},
    
    // Produits de Terroir phares (France / Équateur / Colombie)
    {es: 'El cacao de Ecuador (famoso mundialmente)', fr: 'Le cacao d\'Équateur (réputé mondial)', em: '🍫'},
    {es: 'El café de Colombia (cerca de Ecuador)', fr: 'Le café de Colombie (proche de l\'Équateur)', em: '☕'},
    {es: 'El vino de Burdeos (Francia)', fr: 'Le vin de Bordeaux (France)', em: '🍷'},
    {es: 'El queso français (brie, camembert)', fr: 'Le fromage français (brie, camembert)', em: '🧀'}
  ]}
];


  /* ========================================
   Français → Español de España 🇪🇸 – Niveau 2
   14 situations de dialogues — Niveau A1
   Hispanophone espagnol débutant en français
   © 2026 Sébastien Godet
======================================== */
 

/* ═══════════════════════════════════════════════════════════
   2b. LEVEL2_THEMES_ES — Dialogues situationnels (Niveau 2)
   ─────────────────────────────────────────────────────────
   Public : apprenant hispanophone débutant en Français (A1)
   Contexte : situations de la vie réelle en France
   16 thèmes · 3 situations par thème · 3 questions de quiz
   Questions de quiz formulées en ESPAGNOL
   (ex : "¿Cómo se dice X en francés ?")
═══════════════════════════════════════════════════════════ */

var LEVEL2_THEMES_ES = [
{id:'salut2',level:2,emoji:'👋',name:'Saludar a Alguien',sub:'Saluer Quelqu\'un',type:'dialog',situations:[{label:'Sit. 1',title:'Dans la rue',img:'🏘️',dialogue:[{s:'Lucas',es:'¡Hola! ¿Qué tal?',fr:'Salut ! Ça va ?',side:'left'},{s:'Ana',es:'¡Bien, gracias! ¿Y tú?',fr:'Bien, merci ! Et toi ?',side:'right'},{s:'Lucas',es:'Más o menos. Estoy cansado.',fr:'Comme ci comme ça. Je suis fatigué.',side:'left'},{s:'Ana',es:'¡Vaya, qué pena! Lo siento.',fr:'Oh ! Je suis désolée.',side:'right'},{s:'Lucas',es:'Gracias. ¡Hasta luego!',fr:'Merci. À plus !',side:'left'},{s:'Ana',es:'¡Hasta pronto!',fr:'À bientôt !',side:'right'}]},{label:'Sit. 2',title:'Au bureau le matin',img:'💼',dialogue:[{s:'Pedro',es:'¡Buenos días! ¿Cómo estás?',fr:'Bonjour ! Comment tu vas ?',side:'left'},{s:'María',es:'Bien, gracias. ¿Y tú?',fr:'Bien, merci. Et toi ?',side:'right'},{s:'Pedro',es:'Un poco cansado. ¿Quieres un café?',fr:'Un peu fatigué. Tu veux un café ?',side:'left'},{s:'María',es:'Sí, por favor. ¡Gracias!',fr:'Oui, s\'il te plaît. Merci !',side:'right'},{s:'Pedro',es:'De nada. ¡Aquí tienes!',fr:'De rien. Voilà !',side:'left'}]},{label:'Sit. 3',title:'Retrouver un ami au café',img:'☀️',dialogue:[{s:'Carlos',es:'¡Hola! ¿Qué tal estás?',fr:'Salut ! Comment tu vas ?',side:'left'},{s:'Sofía',es:'¡Muy bien! ¿Y tú?',fr:'Très bien ! Et toi ?',side:'right'},{s:'Carlos',es:'Bien. ¿Qué hay de nuevo?',fr:'Bien. Quoi de neuf ?',side:'left'},{s:'Sofía',es:'Nada en especial. ¿Tomamos algo?',fr:'Rien de spécial. On prend quelque chose ?',side:'right'},{s:'Carlos',es:'¡Buena idea! Tengo sed.',fr:'Bonne idée ! J\'ai soif.',side:'left'},{s:'Sofía',es:'¡Yo también!',fr:'Moi aussi !',side:'right'}]}],vocab:['Ça va ? = ¿Qué tal?','Bien, merci = Bien, gracias','Comme ci comme ça = Más o menos','Je suis fatigué = Estoy cansado','Je suis désolé(e) = ¡Qué pena! / Lo siento','À plus ! = ¡Hasta luego!','Quoi de neuf ? = ¿Qué hay de nuevo?'],quiz:[{q:'¿Cómo se dice "¿Qué tal?" en francés?',opts:['Comme ci comme ça','Ça va ?','Je suis désolé','Je suis fatigué'],ans:1},{q:'¿Cómo se dice "¿Qué hay de nuevo?" en francés?',opts:['Je suis désolé','Comme ci comme ça','Quoi de neuf ?','Ça va ?'],ans:2},{q:'¿Cómo se dice "¡Hasta luego!" en francés?',opts:['Comme ci comme ça','Je suis désolé','À plus !','Je suis fatigué'],ans:2}]},
{id:'pres2',level:2,emoji:'🙋',name:'Presentarse',sub:'Se Présenter',type:'dialog',situations:[{label:'Sit. 1',title:'Dans un cours d\'espagnol',img:'📚',dialogue:[{s:'Profesora',es:'¡Hola! ¿Cómo te llamas?',fr:'Bonjour ! Tu t\'appelles comment ?',side:'right'},{s:'Marc',es:'Me llamo Marc. ¿Y usted?',fr:'Je m\'appelle Marc. Et vous ?',side:'left'},{s:'Profesora',es:'Yo soy Laura. ¿De dónde eres, Marc?',fr:'Je suis Laura. Tu es d\'où, Marc ?',side:'right'},{s:'Marc',es:'Soy de Francia, de París. ¿Y usted?',fr:'Je suis de France, de Paris. Et vous ?',side:'left'},{s:'Profesora',es:'Soy de Madrid. ¡Bienvenido!',fr:'Je suis de Madrid. Bienvenue !',side:'right'},{s:'Marc',es:'¡Gracias!',fr:'Merci !',side:'left'}]},{label:'Sit. 2',title:'Rencontre dans le quartier',img:'🏙️',dialogue:[{s:'Vecino',es:'¡Hola! ¿Eres nuevo por aquí?',fr:'Bonjour ! Tu es nouveau ici ?',side:'right'},{s:'Julie',es:'Sí. Me llamo Julie. Soy francesa.',fr:'Oui. Je m\'appelle Julie. Je suis française.',side:'left'},{s:'Vecino',es:'Yo soy Antonio. ¿Hablas español?',fr:'Moi je suis Antonio. Tu parles espagnol ?',side:'right'},{s:'Julie',es:'Un poco. Estoy aprendiendo.',fr:'Un peu. Je suis en train d\'apprendre.',side:'left'},{s:'Vecino',es:'¡Qué guay! Tu español es bueno.',fr:'Génial ! Ton espagnol est bon.',side:'right'},{s:'Julie',es:'¡Gracias! Eres muy amable.',fr:'Merci ! Tu es très gentil.',side:'left'}]},{label:'Sit. 3',title:'À une fête',img:'🎉',dialogue:[{s:'Chica',es:'¡Hola! ¿Cómo te llamas?',fr:'Salut ! Tu t\'appelles comment ?',side:'right'},{s:'Thomas',es:'Thomas. ¿Y tú?',fr:'Thomas. Et toi ?',side:'left'},{s:'Chica',es:'Yo soy Lucía. ¿Eres francés?',fr:'Moi je suis Lucía. Tu es français ?',side:'right'},{s:'Thomas',es:'Sí, soy de Lyon. ¿Y tú eres de Madrid?',fr:'Oui, je suis de Lyon. Et toi tu es de Madrid ?',side:'left'},{s:'Chica',es:'No, soy de Barcelona. ¡Encantada!',fr:'Non, je suis de Barcelona. Enchantée !',side:'right'},{s:'Thomas',es:'¡Encantado!',fr:'Enchanté !',side:'left'}]}],vocab:['Je m\'appelle = Me llamo','Tu es d\'où ? = ¿De dónde eres?','Je suis de = Soy de','Je suis français(e) = Soy francés / francesa','Je suis en train d\'apprendre = Estoy aprendiendo','Bienvenue ! = ¡Bienvenido!','Enchanté(e) ! = ¡Encantado(a)!'],quiz:[{q:'¿Cómo se dice "¡Encantado!" en francés?',opts:['Enchanté !','Tu es d\'où ?','Je suis en train d\'apprendre','Je suis français'],ans:0},{q:'¿Cómo se dice "¿De dónde eres?" en francés?',opts:['Je suis français','Bienvenue !','Tu es d\'où ?','Enchanté !'],ans:2},{q:'¿Cómo se dice "Me llamo" en francés?',opts:['Je suis de','Je suis en train d\'apprendre','Enchanté !','Je m\'appelle'],ans:3}]},
{id:'chemin2',level:2,emoji:'🗺️',name:'Pedir Indicaciones',sub:'Demander son Chemin',type:'dialog',situations:[{label:'Sit. 1',title:'Trouver la gare routière',img:'🚌',dialogue:[{s:'Turista',es:'Perdona, ¿dónde está la estación de autobuses?',fr:'Pardon, où est la gare routière ?',side:'left'},{s:'Señora',es:'Siga todo recto y gire a la izquierda.',fr:'Continue tout droit et tourne à gauche.',side:'right'},{s:'Turista',es:'¿Está lejos?',fr:'C\'est loin ?',side:'left'},{s:'Señora',es:'No, está cerca. Son cinco minutos.',fr:'Non, c\'est près. C\'est cinq minutes.',side:'right'},{s:'Turista',es:'Muchas gracias.',fr:'Merci beaucoup.',side:'left'},{s:'Señora',es:'¡De nada!',fr:'De rien !',side:'right'}]},{label:'Sit. 2',title:'Trouver une pharmacie',img:'💊',dialogue:[{s:'Marc',es:'Perdona, ¿hay una farmacia cerca de aquí?',fr:'Pardon, il y a une pharmacie près d\'ici ?',side:'left'},{s:'Chico',es:'Sí. Baje esta calle y gire a la derecha.',fr:'Oui. Descends cette rue et tourne à droite.',side:'right'},{s:'Marc',es:'¿Después del banco?',fr:'Après la banque ?',side:'left'},{s:'Chico',es:'Sí, exacto. Es la puerta verde.',fr:'Oui, exactement. C\'est la porte verte.',side:'right'},{s:'Marc',es:'¿Está abierta ahora?',fr:'Elle est ouverte maintenant ?',side:'left'},{s:'Chico',es:'Sí, creo que sí.',fr:'Oui, je crois que oui.',side:'right'}]},{label:'Sit. 3',title:'Trouver un supermarché',img:'🛒',dialogue:[{s:'Julie',es:'Perdone, ¿hay un supermercado por aquí?',fr:'Pardon, il y a un supermarché ici ?',side:'left'},{s:'Señor',es:'Sí, está enfrente, al lado de la tienda.',fr:'Oui, il est en face, à côté de la boutique.',side:'right'},{s:'Julie',es:'¿A la derecha o a la izquierda?',fr:'À droite ou à gauche ?',side:'left'},{s:'Señor',es:'A la derecha. Es muy grande.',fr:'À droite. Il est très grand.',side:'right'},{s:'Julie',es:'¡Perfecto! Gracias.',fr:'Parfait ! Merci.',side:'left'},{s:'Señor',es:'¡De nada, buen día!',fr:'De rien, bonne journée !',side:'right'}]}],vocab:['Pardon / Excusez-moi = Perdona / Perdone','Où est... ? = ¿Dónde está...?','Tout droit = Todo recto','À gauche = A la izquierda','À droite = A la derecha','Près = Cerca','Loin = Lejos'],quiz:[{q:'¿Cómo se dice "Lejos" en francés?',opts:['Où est... ?','Pardon','Loin','À droite'],ans:2},{q:'¿Cómo se dice "Cerca" en francés?',opts:['Près','Tout droit','À droite','Où est... ?'],ans:0},{q:'¿Cómo se dice "A la izquierda" en francés?',opts:['À gauche','Tout droit','Près','Où est... ?'],ans:0}]},
{id:'bar2',level:2,emoji:'☕',name:'En el Café',sub:'Au Café',type:'dialog',situations:[{label:'Sit. 1',title:'Commande simple',img:'☕',dialogue:[{s:'Cliente',es:'¡Hola! Un café con leche, por favor.',fr:'Bonjour ! Un café au lait, s\'il vous plaît.',side:'left'},{s:'Camarero',es:'¿Solo o con leche?',fr:'Noir ou au lait ?',side:'right'},{s:'Cliente',es:'Con leche, por favor.',fr:'Au lait, s\'il vous plaît.',side:'left'},{s:'Camarero',es:'¿Quiere azúcar?',fr:'Vous voulez du sucre ?',side:'right'},{s:'Cliente',es:'Sí, uno. ¿Cuánto es?',fr:'Oui, un. C\'est combien ?',side:'left'},{s:'Camarero',es:'Cincuenta céntimos.',fr:'Cinquante centimes.',side:'right'}]},{label:'Sit. 2',title:'Commander des snacks',img:'🍢',dialogue:[{s:'Camarero',es:'¿Qué van a tomar?',fr:'Qu\'est-ce que vous prenez ?',side:'right'},{s:'Clara',es:'Un refresco, por favor.',fr:'Un soda, s\'il vous plaît.',side:'left'},{s:'Tomás',es:'Y yo, un zumo de naranja. ¿Tienen algo de comer?',fr:'Et moi, un jus d\'orange. Vous avez quelque chose à manger ?',side:'left'},{s:'Camarero',es:'Sí. Hay empanadas y sándwiches.',fr:'Oui. Il y a des empanadas et des sandwichs.',side:'right'},{s:'Clara',es:'¡Genial! Unas empanadas, por favor.',fr:'Super ! Des empanadas, s\'il vous plaît.',side:'left'},{s:'Camarero',es:'¡Ahora mismo!',fr:'Tout de suite !',side:'right'}]},{label:'Sit. 3',title:'Payer l\'addition',img:'🧾',dialogue:[{s:'Cliente',es:'La cuenta, por favor.',fr:'L\'addition, s\'il vous plaît.',side:'left'},{s:'Camarero',es:'Son tres euros con cincuenta.',fr:'C\'est trois dollars cinquante.',side:'right'},{s:'Cliente',es:'¿Se puede pagar con tarjeta?',fr:'On peut payer par carte ?',side:'left'},{s:'Camarero',es:'Sí, claro.',fr:'Oui, bien sûr.',side:'right'},{s:'Cliente',es:'Aquí tiene. Gracias.',fr:'Voilà. Merci.',side:'left'},{s:'Camarero',es:'¡Gracias a usted! ¡Hasta pronto!',fr:'Merci à vous ! À bientôt !',side:'right'}]}],vocab:['Un café au lait = Un café con leche','Un café noir = Un café solo','C\'est combien ? = ¿Cuánto es?','L\'addition = La cuenta','On peut payer par carte ? = ¿Se puede pagar con tarjeta?','Les empanadas = Las empanadas','Tout de suite ! = ¡Ahora mismo!'],quiz:[{q:'¿Cómo se dice "¿Cuánto es?" en francés?',opts:['C\'est combien ?','On peut payer par carte ?','Les empanadas','L\'addition'],ans:0},{q:'¿Cómo se dice "¡Ahora mismo!" en francés?',opts:['Tout de suite !','Un café au lait','C\'est combien ?','L\'addition'],ans:0},{q:'¿Cómo se dice "Las empanadas" en francés?',opts:['On peut payer par carte ?','C\'est combien ?','Tout de suite !','Les empanadas'],ans:3}]},
{id:'resto2',level:2,emoji:'🍽️',name:'En el Restaurante',sub:'Au Restaurant',type:'dialog',situations:[{label:'Sit. 1',title:'Avoir une table',img:'🪑',dialogue:[{s:'Cliente',es:'Hola, ¿tiene una mesa para dos?',fr:'Bonjour, vous avez une table pour deux ?',side:'left'},{s:'Camarera',es:'Sí, por aquí, por favor.',fr:'Oui, par ici, s\'il vous plaît.',side:'right'},{s:'Cliente',es:'Gracias. ¿Tiene el menú del día?',fr:'Merci. Vous avez le menu du jour ?',side:'left'},{s:'Camarera',es:'Sí. Hoy hay sopa, arroz con pollo y postre.',fr:'Oui. Aujourd\'hui il y a soupe, riz au poulet et dessert.',side:'right'},{s:'Cliente',es:'¿Cuánto cuesta el menú?',fr:'Le menu coûte combien ?',side:'left'},{s:'Camarera',es:'Tres euros, bebida incluida.',fr:'Trois dollars, boisson comprise.',side:'right'}]},{label:'Sit. 2',title:'Commander à table',img:'🥗',dialogue:[{s:'Camarero',es:'¿Están listos para pedir?',fr:'Vous êtes prêts à commander ?',side:'right'},{s:'Sophie',es:'Sí. De primero, una sopa.',fr:'Oui. En entrée, une soupe.',side:'left'},{s:'Camarero',es:'¿Y de segundo?',fr:'Et en plat ?',side:'right'},{s:'Sophie',es:'El pollo, por favor. ¿Tiene algo sin carne?',fr:'Le poulet, s\'il vous plaît. Vous avez quelque chose sans viande ?',side:'left'},{s:'Camarero',es:'Sí, hay un plato de lentejas con arroz.',fr:'Oui, il y a des lentilles avec du riz.',side:'right'},{s:'Sophie',es:'¡Perfecto, eso quiero!',fr:'Parfait, c\'est ça que je veux !',side:'left'}]},{label:'Sit. 3',title:'Un problème avec la commande',img:'🤔',dialogue:[{s:'Cliente',es:'Perdona, esto no es lo que pedí.',fr:'Pardon, ce n\'est pas ce que j\'ai commandé.',side:'left'},{s:'Camarero',es:'Lo siento. ¿Qué pidió usted?',fr:'Je suis désolé. Qu\'est-ce que vous avez commandé ?',side:'right'},{s:'Cliente',es:'Pedí el pescado, no la carne.',fr:'J\'ai commandé le poisson, pas la viande.',side:'left'},{s:'Camarero',es:'Disculpe, ahora mismo lo cambio.',fr:'Excusez-moi, je le change tout de suite.',side:'right'},{s:'Cliente',es:'Gracias.',fr:'Merci.',side:'left'},{s:'Camarero',es:'¡Vaya, lo siento mucho!',fr:'Je suis vraiment désolé !',side:'right'}]}],vocab:['Vous avez une table pour deux ? = ¿Tiene mesa para dos?','Le menu du jour = El menú del día','En entrée = De primero','En plat = De segundo','Sans viande = Sin carne','Boisson comprise = Bebida incluida','Ce n\'est pas ce que j\'ai commandé = Esto no es lo que pedí'],quiz:[{q:'¿Cómo se dice "Bebida incluida" en francés?',opts:['Vous avez une table pour deux ?','Boisson comprise','En entrée','En plat'],ans:1},{q:'¿Cómo se dice "¿Tiene mesa para dos?" en francés?',opts:['Vous avez une table pour deux ?','En entrée','Le menu du jour','Ce n\'est pas ce que j\'ai commandé'],ans:0},{q:'¿Cómo se dice "Esto no es lo que pedí" en francés?',opts:['En plat','Sans viande','Ce n\'est pas ce que j\'ai commandé','Vous avez une table pour deux ?'],ans:2}]},
{id:'compras2',level:2,emoji:'🛍️',name:'Hacer la Compra',sub:'Faire des courses',type:'dialog',situations:[{label:'Sit. 1',title:'Au marché',img:'🧺',dialogue:[{s:'Cliente',es:'Buenos días. ¿Cuánto cuestan los tomates?',fr:'Bonjour. Combien coûtent les tomates ?',side:'left'},{s:'Vendedor',es:'Un euro el kilo.',fr:'Un dollar le kilo.',side:'right'},{s:'Cliente',es:'Quiero un kilo, por favor.',fr:'Je veux un kilo, s\'il vous plaît.',side:'left'},{s:'Vendedor',es:'¿Algo más?',fr:'Autre chose ?',side:'right'},{s:'Cliente',es:'Sí, ¿tiene naranjas?',fr:'Oui, vous avez des oranges ?',side:'left'},{s:'Vendedor',es:'Sí. Son cincuenta céntimos el kilo.',fr:'Oui. C\'est cinquant centimes le kilo.',side:'right'}]},{label:'Sit. 2',title:'Dans un magasin de vêtements',img:'👗',dialogue:[{s:'Vendedora',es:'¡Hola! ¿Le puedo ayudar?',fr:'Bonjour ! Je peux vous aider ?',side:'right'},{s:'Lucie',es:'Sí, busco una camiseta.',fr:'Oui, je cherche un t-shirt.',side:'left'},{s:'Vendedora',es:'¿Qué talla tiene?',fr:'Vous faites quelle taille ?',side:'right'},{s:'Lucie',es:'La talla mediana.',fr:'La taille moyenne.',side:'left'},{s:'Vendedora',es:'¿Quiere probársela? El probador está aquí.',fr:'Vous pouvez l\'essayer ? La cabine est là.',side:'right'},{s:'Lucie',es:'¡Gracias! ¿Cuánto cuesta?',fr:'Merci ! Elle coûte combien ?',side:'left'}]},{label:'Sit. 3',title:'À la caisse',img:'🛒',dialogue:[{s:'Cajero',es:'¡Hola! ¿Todo bien?',fr:'Bonjour ! Tout va bien ?',side:'right'},{s:'Cliente',es:'Sí, gracias. ¿Cuánto es todo?',fr:'Oui, merci. C\'est combien en tout ?',side:'left'},{s:'Cajero',es:'Son quince euros con veinte.',fr:'C\'est quinze dollars vingt.',side:'right'},{s:'Cliente',es:'¿Puedo pagar con tarjeta?',fr:'Je peux payer par carte ?',side:'left'},{s:'Cajero',es:'Sí, sin problema.',fr:'Oui, sans problème.',side:'right'},{s:'Cliente',es:'Aquí tiene. ¡Gracias!',fr:'Voilà. Merci !',side:'left'}]}],vocab:['Combien ça coûte ? = ¿Cuánto cuesta?','Je veux = Quiero','Autre chose ? = ¿Algo más?','Je cherche = Busco','La taille = La talla','La cabine d\'essayage = El probador','C\'est combien en tout ? = ¿Cuánto es todo?'],quiz:[{q:'¿Cómo se dice "Quiero" en francés?',opts:['C\'est combien en tout ?','Je veux','La cabine d\'essayage','La taille'],ans:1},{q:'¿Cómo se dice "¿Cuánto es todo?" en francés?',opts:['La cabine d\'essayage','Je veux','C\'est combien en tout ?','Combien ça coûte ?'],ans:2},{q:'¿Cómo se dice "Busco" en francés?',opts:['Autre chose ?','Je cherche','La cabine d\'essayage','Combien ça coûte ?'],ans:1}]},
{id:'transp2',level:2,emoji:'🚌',name:'El Transporte',sub:'Les Transports',type:'dialog',situations:[{label:'Sit. 1',title:'Dans le bus',img:'🚌',dialogue:[{s:'Viajero',es:'Perdona, ¿este autobús va al centro?',fr:'Pardon, ce bus va au centre ?',side:'left'},{s:'Señora',es:'No. Tienes que coger el autobús número cinco.',fr:'Non. Tu dois prendre le bus numéro cinq.',side:'right'},{s:'Viajero',es:'¿Dónde está la parada del cinco?',fr:'Où est l\'arrêt du cinq ?',side:'left'},{s:'Señora',es:'Allí, a la derecha.',fr:'Là-bas, à droite.',side:'right'},{s:'Viajero',es:'¿Cuántas paradas son?',fr:'C\'est combien d\'arrêts ?',side:'left'},{s:'Señora',es:'Cuatro paradas. Baja en el parque.',fr:'Quatre arrêts. Tu descends au parc.',side:'right'}]},{label:'Sit. 2',title:'Acheter un billet',img:'🎫',dialogue:[{s:'Viajero',es:'Hola, quiero un billete, por favor.',fr:'Bonjour, je veux un billet, s\'il vous plaît.',side:'left'},{s:'Empleada',es:'¿Sencillo o de ida y vuelta?',fr:'Simple ou aller-retour ?',side:'right'},{s:'Viajero',es:'¿Cuánto cuesta el sencillo?',fr:'Combien coûte le billet simple ?',side:'left'},{s:'Empleada',es:'Veinticinco céntimos. El de ida y vuelta son cuarenta.',fr:'Vingt-cinq centimes. L\'aller-retour c\'est quarante.',side:'right'},{s:'Viajero',es:'Quiero el de ida y vuelta.',fr:'Je veux l\'aller-retour.',side:'left'},{s:'Empleada',es:'Aquí tiene.',fr:'Voilà.',side:'right'}]},{label:'Sit. 3',title:'Prendre un taxi',img:'🚕',dialogue:[{s:'Pasajero',es:'Perdone, ¿me puede llevar al aeropuerto?',fr:'Pardon, vous pouvez m\'emmener à l\'aéroport ?',side:'left'},{s:'Taxista',es:'Sí. Son diez euros.',fr:'Oui. C\'est dix dollars.',side:'right'},{s:'Pasajero',es:'¿Cuánto tiempo se tarda?',fr:'Ça prend combien de temps ?',side:'left'},{s:'Taxista',es:'Unos veinte minutos, sin tráfico.',fr:'Environ vingt minutes, sans trafic.',side:'right'},{s:'Pasajero',es:'¡Vale! Vamos.',fr:'D\'accord ! Allons-y.',side:'left'},{s:'Taxista',es:'¡Venga!',fr:'C\'est parti !',side:'right'}]}],vocab:['Prendre le bus = Coger el autobús','L\'arrêt = La parada','Le billet = El billete','Descendre à = Bajar en','Combien d\'arrêts ? = ¿Cuántas paradas?','Le taxi = El taxi','D\'accord ! / C\'est bon ! = ¡Vale!'],quiz:[{q:'¿Cómo se dice "Coger el autobús" en francés?',opts:['Prendre le bus','L\'arrêt','Le taxi','Combien d\'arrêts ?'],ans:0},{q:'¿Cómo se dice "El taxi" en francés?',opts:['Descendre à','Le taxi','D\'accord !','Le billet'],ans:1},{q:'¿Cómo se dice "La parada" en franchis?',opts:['Prendre le bus','Le taxi','L\'arrêt','Combien d\'arrêts ?'],ans:2}]},
{id:'farmacia2',level:2,emoji:'💊',name:'En la Farmacia',sub:'À la pharmacie',type:'dialog',situations:[{label:'Sit. 1',title:'Mal de tête',img:'🤕',dialogue:[{s:'Cliente',es:'Hola. Me duele la cabeza. ¿Qué tiene?',fr:'Bonjour. J\'ai mal à la tête. Qu\'est-ce que vous avez ?',side:'left'},{s:'Farmacéutica',es:'¿Es alérgico a algún medicamento?',fr:'Vous êtes allergique à un médicament ?',side:'right'},{s:'Cliente',es:'No, no soy alérgico.',fr:'Non, je ne suis pas allergique.',side:'left'},{s:'Farmacéutica',es:'Le doy un ibuprofeno. Tómese uno con comida.',fr:'Je vous donne un ibuprofène. Prenez-en un avec de la nourriture.',side:'right'},{s:'Cliente',es:'¿Cuántas veces al día?',fr:'Combien de fois par jour ?',side:'left'},{s:'Farmacéutica',es:'Tres veces al día, como máximo.',fr:'Trois fois par jour, maximum.',side:'right'}]},{label:'Sit. 2',title:'Chercher une pharmacie ouverte',img:'🌙',dialogue:[{s:'Turista',es:'Perdone, ¿hay una farmacia abierta ahora?',fr:'Pardon, il y a une pharmacie ouverte maintenant ?',side:'left'},{s:'Vecina',es:'Las farmacias están cerradas. Busque una farmacia de guardia.',fr:'Les pharmacies sont fermées. Cherche une pharmacie de garde.',side:'right'},{s:'Turista',es:'¿Dónde está?',fr:'Elle est où ?',side:'left'},{s:'Vecina',es:'Mire el cartel de esta farmacia. Indica cuál está abierta.',fr:'Regarde l\'affiche de cette pharmacie. Elle indique laquelle est ouverte.',side:'right'},{s:'Turista',es:'¡Ah, entiendo! ¡Gracias!',fr:'Ah, je comprends ! Merci !',side:'left'},{s:'Vecina',es:'¡De nada!',fr:'De rien !',side:'right'}]},{label:'Sit. 3',title:'Acheter un médicament',img:'💉',dialogue:[{s:'Cliente',es:'Hola. ¿Tiene algo para la tos?',fr:'Bonjour. Vous avez quelque chose pour la toux ?',side:'left'},{s:'Farmacéutico',es:'Sí. ¿Es para un adulto o para un niño?',fr:'Oui. C\'est pour un adulte ou un enfant ?',side:'right'},{s:'Cliente',es:'Pour un adulte.',fr:'Pour un adulte.',side:'left'},{s:'Farmacéutico',es:'Tome este jarabe. Dos cucharadas, tres veces al día.',fr:'Prenez ce sirop. Deux cuillères, trois fois par jour.',side:'right'},{s:'Cliente',es:'¿Cuánto cuesta?',fr:'Ça coûte combien ?',side:'left'},{s:'Farmacéutico',es:'Cuatro euros con cincuenta.',fr:'Quatre dollars cinquante.',side:'right'}]}],vocab:['J\'ai mal à la tête = Me duele la cabeza','J\'ai mal à la gorge = Me duele la garganta','La pharmacie de garde = La farmacia de guardia','Je ne suis pas allergique = No soy alérgico','Le sirop = El jarabe','Trois fois par jour = Tres veces al día','L\'affiche = El cartel'],quiz:[{q:'¿Cómo se dice "El cartel" en francés?',opts:['J\'ai mal à la gorge','La pharmacie de garde','L\'affiche','Trois fois par jour'],ans:2},{q:'¿Cómo se dice "El jarabe" en francés?',opts:['J\'ai mal à la tête','Le sirop','L\'affiche','J\'ai mal à la gorge'],ans:1},{q:'¿Cómo se dice "No soy alérgico" en francés?',opts:['J\'ai mal à la gorge','Trois fois par jour','Le sirop','Je ne suis pas allergique'],ans:3}]},
{id:'hotel2',level:2,emoji:'🏨',name:'En el Hotel',sub:'À l\'Hôtel',type:'dialog',situations:[{label:'Sit. 1',title:'Arrivée à la réception',img:'🛎️',dialogue:[{s:'Recepcionista',es:'¡Buenas noches! ¿Tiene una reserva?',fr:'Bonsoir ! Vous avez une réservation ?',side:'right'},{s:'Huésped',es:'Sí. Me llamo Dupont. Una habitación doble.',fr:'Oui. Je m\'appelle Dupont. Une chambre double.',side:'left'},{s:'Recepcionista',es:'Aquí está. ¿Su pasaporte, por favor?',fr:'Voilà. Votre passeport, s\'il vous plaît ?',side:'right'},{s:'Huésped',es:'Aquí tiene. ¿El desayuno está incluido?',fr:'Voilà. Le petit-déjeuner est inclus ?',side:'left'},{s:'Recepcionista',es:'Sí, de siete a diez.',fr:'Oui, de sept à dix heures.',side:'right'},{s:'Huésped',es:'¡Perfecto! Gracias.',fr:'Parfait ! Merci.',side:'left'}]},{label:'Sit. 2',title:'Un problème dans la chambre',img:'🔧',dialogue:[{s:'Huésped',es:'Hola. Hay un problema en mi habitación.',fr:'Bonjour. Il y a un problème dans ma chambre.',side:'left'},{s:'Recepcionista',es:'¿Qué pasa?',fr:'Qu\'est-ce qui se passe ?',side:'right'},{s:'Huésped',es:'El aire acondicionado no funciona.',fr:'La climatisation ne fonctionne pas.',side:'left'},{s:'Recepcionista',es:'Lo siento. ¿Quiere cambiar de habitación?',fr:'Je suis désolé. Vous voulez changer de chambre ?',side:'right'},{s:'Huésped',es:'Sí, por favor.',fr:'Oui, s\'il vous plaît.',side:'left'},{s:'Recepcionista',es:'Aquí tiene la llave de la trescientos veinte.',fr:'Voilà la clé de la trois cent vingt.',side:'right'}]},{label:'Sit. 3',title:'Demander des infos',img:'🗺️',dialogue:[{s:'Huésped',es:'Perdone, ¿hay un restaurante cerca?',fr:'Pardon, il y a un restaurant près d\'ici ?',side:'left'},{s:'Recepcionista',es:'Sí, hay uno muy bueno a dos manzanas.',fr:'Oui, il y en a un très bon à deux pâtés de maisons.',side:'right'},{s:'Huésped',es:'¿Y hay cosas que visitar por aquí?',fr:'Et il y a des choses à visiter ici ?',side:'left'},{s:'Recepcionista',es:'Sí, la iglesia antigua está muy cerca.',fr:'Oui, l\'église coloniale est très près.',side:'right'},{s:'Huésped',es:'¿Está abierta hoy?',fr:'Elle est ouverte aujourd\'hui ?',side:'left'},{s:'Recepcionista',es:'Sí, de nueve a seis.',fr:'Oui, de neuf heures à dix-huit heures.',side:'right'}]}],vocab:['Vous avez une réservation ? = ¿Tiene reserva?','La chambre double = La habitación doble','Le petit-déjeuner inclus = El desayuno incluido','Ça ne fonctionne pas = No funciona','Changer de chambre = Cambiar de habitación','La clé = La llave','À deux pâtés de maisons = A dos manzanas'],quiz:[{q:'¿Cómo se dice "El desayuno incluido" en francés?',opts:['La chambre double','Changer de chambre','À deux pâtés de maisons','Le petit-déjeuner inclus'],ans:3},{q:'¿Cómo se dice "No funciona" en francés?',opts:['La clé','Le petit-déjeuner inclus','Ça ne fonctionne pas','À deux pâtés de maisons'],ans:2},{q:'¿Cómo se dice "A dos manzanas" en francés?',opts:['Ça ne fonctionne pas','Changer de chambre','Le petit-déjeuner inclus','À deux pâtés de maisons'],ans:3}]},
{id:'medico2',level:2,emoji:'🩺',name:'En el Médico ',sub:'Chez le médecin',type:'dialog',situations:[{label:'Sit. 1',title:'Expliquer ses symptômes',img:'🤒',dialogue:[{s:'Doctor',es:'¡Buenos días! ¿Qué le pasa?',fr:'Bonjour ! Qu\'est-ce qui ne va pas ?',side:'right'},{s:'Paciente',es:'Tengo fiebre y me duele la garganta.',fr:'J\'ai de la fièvre et j\'ai mal à la gorge.',side:'left'},{s:'Doctor',es:'¿Desde cuándo?',fr:'Depuis quand ?',side:'right'},{s:'Paciente',es:'Desde ayer.',fr:'Depuis hier.',side:'left'},{s:'Doctor',es:'¿Tiene tos también?',fr:'Vous avez aussi de la toux ?',side:'right'},{s:'Paciente',es:'Sí, un poco.',fr:'Oui, un peu.',side:'left'}]},{label:'Sit. 2',title:'Comprendre le médecin',img:'💊',dialogue:[{s:'Doctor',es:'Tiene una infección. Le receto un antibiótico.',fr:'Vous avez une infection. Je vous prescris un antibiotique.',side:'right'},{s:'Paciente',es:'¿Cuándo me tomo el medicamento?',fr:'Quand est-ce que je prends le médicament ?',side:'left'},{s:'Doctor',es:'Uno por la mañana y uno por la noche.',fr:'Un le matin et un le soir.',side:'right'},{s:'Paciente',es:'¿Durante cuántos días?',fr:'Pendant combien de jours ?',side:'left'},{s:'Doctor',es:'Siete días. Y beba mucha agua.',fr:'Sept jours. Et buvez beaucoup d\'eau.',side:'right'},{s:'Paciente',es:'Gracias, doctor.',fr:'Merci, docteur.',side:'left'}]},{label:'Sit. 3',title:'Appeler pour une cita',img:'📞',dialogue:[{s:'Paciente',es:'Hola, quiero una cita con el médico.',fr:'Bonjour, je veux un rendez-vous avec le médecin.',side:'left'},{s:'Recepcionista',es:'¿Para cuándo?',fr:'Pour quand ?',side:'right'},{s:'Paciente',es:'Para hoy si es posible. Estoy muy mal.',fr:'Pour aujourd\'hui si c\'est possible. Je suis très malade.',side:'left'},{s:'Recepcionista',es:'¿Tiene fiebre?',fr:'Vous avez de la fièvre ?',side:'right'},{s:'Paciente',es:'Sí, treinta y nueve grados.',fr:'Oui, trente-neuf degrés.',side:'left'},{s:'Recepcionista',es:'Venga a las cuatro. Traiga su DNI.',fr:'Venez à seize heures. Apportez votre carte d\'identité.',side:'right'}]}],vocab:['Qu\'est-ce qui ne va pas ? = ¿Qué le pasa?','J\'ai de la fièvre = Tengo fiebre','J\'ai mal à la gorge = Me duele la garganta','Depuis hier = Desde ayer','La toux = La tos','Un rendez-vous = Una cita','Je suis très malade = Estoy muy mal'],quiz:[{q:'¿Cómo se dice "Me duele la garganta" en francés?',opts:['Un rendez-vous','J\'ai mal à la gorge','La toux','Qu\'est-ce qui ne va pas ?'],ans:1},{q:'¿Cómo se dice "Tengo fiebre" en francés?',opts:['Depuis hier','J\'ai de la fièvre','La toux','Qu\'est-ce qui ne va pas ?'],ans:1},{q:'¿Cómo se dice "La tos" en francés?',opts:['Depuis hier','J\'ai mal à la gorge','Je suis très malade','La toux'],ans:3}]},
{id:'meteo2',level:2,emoji:'☀️',name:'El Tiempo',sub:'La Météo',type:'dialog',situations:[{label:'Sit. 1',title:'Parler du temps',img:'🌤️',dialogue:[{s:'Marta',es:'¡Qué calor hace hoy!',fr:'Quelle chaleur aujourd\'hui !',side:'left'},{s:'Romain',es:'Sí, hace mucho calor. ¿Cuántos grados hace?',fr:'Oui, il fait très chaud. Il fait combien de degrés ?',side:'right'},{s:'Marta',es:'Veintiocho grados en Sevilla.',fr:'Vingt-huit degrés à Guayaquil.',side:'left'},{s:'Romain',es:'¡Es mucho! ¿Hay piscina aquí?',fr:'C\'est beaucoup ! Il y a une piscine ici ?',side:'right'},{s:'Marta',es:'Sí, está en el hotel.',fr:'Oui, elle est à l\'hôtel.',side:'left'},{s:'Romain',es:'¡Vamos!',fr:'Allons-y !',side:'right'}]},{label:'Sit. 2',title:'Prévoir la sortie',img:'🌧️',dialogue:[{s:'Luis',es:'¿Salimos hoy?',fr:'On sort aujourd\'hui ?',side:'left'},{s:'Camille',es:'No sé. ¿Qué tiempo hace?',fr:'Je ne sais pas. Il fait quel temps ?',side:'right'},{s:'Luis',es:'Está lloviendo un poco.',fr:'Il pleut un peu.',side:'left'},{s:'Camille',es:'¿Tienes paraguas?',fr:'Tu as un parapluie ?',side:'right'},{s:'Luis',es:'No. ¿Y tú?',fr:'Non. Et toi ?',side:'left'},{s:'Camille',es:'Yo sí. ¡Vamos juntos!',fr:'Moi oui. Allons-y ensemble !',side:'right'}]},{label:'Sit. 3',title:'Parler des saisons',img:'🌿',dialogue:[{s:'Sara',es:'¿Cuál es tu estación favorita?',fr:'Quelle est ta saison préférée ?',side:'right'},{s:'Théo',es:'El verano. Me gusta el sol y el calor.',fr:'L\'été. J\'aime le soleil et la chaleur.',side:'left'},{s:'Sara',es:'En España tenemos cuatro estaciones muy marcadas.',fr:'En Équateur nous avons deux saisons : la sèche et la pluvieuse.',side:'right'},{s:'Théo',es:'¡Qué interesante! ¿Cuándo empieza el verano allí?',fr:'Comme c\'est intéressant ! Quand est la saison sèche ?',side:'left'},{s:'Sara',es:'En junio, y hace bastante calor hasta septiembre.',fr:'Ça dépend de la région. Sur la côte, de juin à novembre.',side:'right'},{s:'Théo',es:'¡Qué guay!',fr:'Super !',side:'left'}]}],vocab:['Quelle chaleur ! = ¡Qué calor!','Il fait froid = Hace frío','Il fait chaud = Hace calor','Il pleut = Está lloviendo','Le parapluie = El paraguas','La saison sèche = La estación seca','La saison des pluies = La estación lluviosa'],quiz:[{q:'¿Cómo se dice "Hace calor" en francés?',opts:['Le parapluie','Il fait chaud','Quelle chaleur !','Il fait froid'],ans:1},{q:'¿Cómo se dice "El paraguas" en francés?',opts:['Il fait chaud','Le parapluie','Il fait froid','Il pleut'],ans:1},{q:'¿Cómo se dice "La estación seca" en francés?',opts:['La saison sèche','Il pleut','Quelle chaleur !','Il fait chaud'],ans:0}]},
{id:'logement2',level:2,emoji:'🏠',name:'Buscar Vivienda',sub:'Chercher un Logement',type:'dialog',situations:[{label:'Sit. 1',title:'Appeler pour un appartement',img:'📱',dialogue:[{s:'Cliente',es:'Hola, llamo por el piso en alquiler.',fr:'Bonjour, j\'appelle pour l\'appartement en location.',side:'left'},{s:'Propietario',es:'Sí. ¿Para cuántas personas?',fr:'Oui. Pour combien de personnes ?',side:'right'},{s:'Cliente',es:'Para una persona. ¿Cuánto es el alquiler?',fr:'Pour une personne. Le loyer c\'est combien ?',side:'left'},{s:'Propietario',es:'Cuatroceintos euros al mes.',fr:'Quatre cents dollars par mois.',side:'right'},{s:'Cliente',es:'¿Los gastos están incluidos?',fr:'Les charges sont incluses ?',side:'left'},{s:'Propietario',es:'No, los gastos van aparte.',fr:'Non, les charges sont en plus.',side:'right'}]},{label:'Sit. 2',title:'Visiter l\'appartement',img:'🔑',dialogue:[{s:'Propietario',es:'El salón es grande y tiene mucha luz.',fr:'Le salon est grand et très lumineux.',side:'right'},{s:'Cliente',es:'¡Me gusta! ¿Cuántas habitaciones tiene?',fr:'J\'aime bien ! Il a combien de chambres ?',side:'left'},{s:'Propietario',es:'Dos habitaciones y un baño.',fr:'Deux chambres et une salle de bain.',side:'right'},{s:'Cliente',es:'¿Hay agua caliente?',fr:'Il y a l\'eau chaude ?',side:'left'},{s:'Propietario',es:'Sí, claro.',fr:'Oui, bien sûr.',side:'right'},{s:'Cliente',es:'¿Puedo pensármelo?',fr:'Je peux réfléchir ?',side:'left'}]},{label:'Sit. 3',title:'Un problème dans l\'appartement',img:'🔧',dialogue:[{s:'Inquilino',es:'Hola, hay un problema. No hay agua.',fr:'Bonjour, il y a un problème. L\'eau ne fonctionne pas.',side:'left'},{s:'Propietario',es:'¿Desde cuándo?',fr:'Depuis quand ?',side:'right'},{s:'Inquilino',es:'Desde esta mañana.',fr:'Depuis ce matin.',side:'left'},{s:'Propietario',es:'Voy a llamar al fontanero ahora mismo.',fr:'Je vais appeler le plombier tout de suite.',side:'right'},{s:'Inquilino',es:'¿Va a venir hoy?',fr:'Il vient aujourd\'hui ?',side:'left'},{s:'Propietario',es:'Sí, creo que sí.',fr:'Oui, je crois que oui.',side:'right'}]}],vocab:['Le loyer = El alquiler','Les charges (eau, électricité) = Los gastos','Les chambres = Las habitaciones','L\'eau chaude = El agua caliente','Le locataire = El inquilino','Le plombier = El fontanero','Les charges sont en plus = Los gastos van aparte'],quiz:[{q:'¿Cómo se dice "El alquiler" en francés?',opts:['Les charges sont en plus','Les chambres','Le loyer','L\'eau chaude'],ans:2},{q:'¿Cómo se dice "Las habitaciones" en francés?',opts:['Les chambres','Les charges sont en plus','Le plombier','Le loyer'],ans:0},{q:'¿Cómo se dice "Los gastos van aparte" en francés?',opts:['Le loyer','L\'eau chaude','Les chambres','Les charges sont en plus'],ans:3}]},
{id:'gustos2',level:2,emoji:'❤️',name:'Gustos y Aficiones ',sub:'Goûts et Loisirs',type:'dialog',situations:[{label:'Sit. 1',title:'Parler de musique',img:'🎵',dialogue:[{s:'Lucía',es:'¿Te gusta la música?',fr:'Tu aimes la musique ?',side:'right'},{s:'Paul',es:'Sí, mucho. Me gusta el rock.',fr:'Oui, beaucoup. J\'aime le rock.',side:'left'},{s:'Lucía',es:'¿Y la música flamenca?',fr:'Et la musique andine ?',side:'right'},{s:'Paul',es:'También, pero no conozco mucha.',fr:'Aussi, mais je ne connais pas beaucoup.',side:'left'},{s:'Lucía',es:'¡Hay un concierto esta noche! ¿Vienes?',fr:'Il y a un concert ce soir ! Tu viens ?',side:'right'},{s:'Paul',es:'¡Sí! ¿A qué hora empieza?',fr:'Oui ! Ça commence à quelle heure ?',side:'left'}]},{label:'Sit. 2',title:'Parler de sport',img:'⚽',dialogue:[{s:'Diego',es:'¿Practicas algún deporte?',fr:'Tu pratiques un sport ?',side:'left'},{s:'Claire',es:'Sí, me gusta mucho el fútbol.',fr:'Oui, j\'aime beaucoup le football.',side:'right'},{s:'Diego',es:'¿De verdad? ¡A mí también! ¿Ves el partido esta noche?',fr:'Vraiment ? Moi aussi ! Tu regardes le match ce soir ?',side:'left'},{s:'Claire',es:'Sí. ¿Juegas al fútbol también?',fr:'Oui. Tu joues au football aussi ?',side:'right'},{s:'Diego',es:'Sí, los domingos con amigos.',fr:'Oui, le dimanche avec des amis.',side:'left'},{s:'Claire',es:'¡Qué guay!',fr:'Super !',side:'right'}]},{label:'Sit. 3',title:'Proposer une activity',img:'🎬',dialogue:[{s:'Ana',es:'¿Qué haces esta tarde?',fr:'Tu fais quoi cet après-midi ?',side:'left'},{s:'Marc',es:'Nada. ¿Por qué?',fr:'Rien. Pourquoi ?',side:'right'},{s:'Ana',es:'¿Quieres ir al cine?',fr:'Tu veux aller au cinéma ?',side:'left'},{s:'Marc',es:'¡Sí! ¿Qué echan?',fr:'Oui ! Qu\'est-ce qu\'il y a ?',side:'right'},{s:'Ana',es:'Una película francesa. ¿Te gusta el cine francés?',fr:'Un film français. Tu aimes le cinéma français ?',side:'left'},{s:'Marc',es:'¡Me encanta! ¿A qué hora quedamos?',fr:'J\'adore ça ! On se retrouve à quelle heure ?',side:'right'}]}],vocab:['J\'aime = Me gusta','Je n\'aime pas = No me gusta','J\'adore = Me encanta','Tu pratiques un sport ? = ¿Practicas un deporte?','Le match = El partido','Qu\'est-ce qu\'il y a (au cinéma) ? = ¿Qué echan?','On se retrouve à quelle heure ? = ¿A qué hora quedamos?'],quiz:[{q:'¿Cómo se dice "El partido" en francés?',opts:['Tu pratiques un sport ?','J\'aime','Le match','On se retrouve à quelle heure ?'],ans:2},{q:'¿Cómo se dice "Me encanta" en francés?',opts:['Tu pratiques un sport ?','J\'aime','Je n\'aime pas','J\'adore'],ans:3},{q:'¿Cómo se dice "Me gusta" en francés?',opts:['Tu pratiques un sport ?','J\'aime','On se retrouve à quelle heure ?','Je n\'aime pas'],ans:1}]},
{id:'viequot2',level:2,emoji:'🏡',name:'La Vida Cotidiana',sub:'La Vie Quotidienne',type:'dialog',situations:[{label:'Sit. 1',title:'Una mañana típica',img:'🌅',dialogue:[{s:'Sophie',es:'¡Buenos días! ¿Has dormido bien?',fr:'Bonjour ! Tu as bien dormi ?',side:'left'},{s:'Diego',es:'Sí, gracias. ¿Ya has desayunado?',fr:'Oui, merci. Tu as déjà pris ton petit-déjeuner ?',side:'right'},{s:'Sophie',es:'No todavía. Voy a preparar café y tostadas.',fr:'Pas encore. Je vais préparer du café et des tartines.',side:'left'},{s:'Diego',es:'¿Tienes también croissants?',fr:'Tu as aussi des croissants ?',side:'right'},{s:'Sophie',es:'Sí, del panadero de la esquina.',fr:'Oui, de la boulangerie du coin.',side:'left'},{s:'Diego',es:'¡Fantástico! Aquí la panadería es sagrada.',fr:'Fantastique ! Ici la boulangerie c\'est sacré.',side:'right'},]},{label:'Sit. 2',title:'Les tâches ménagères',img:'🧹',dialogue:[{s:'Valentina',es:'¿Puedes fregar los platos? Yo paso el aspirador.',fr:'Tu peux faire la vaisselle ? Moi je passe l\'aspirateur.',side:'left'},{s:'Éric',es:'¡Claro! ¿Y la colada?',fr:'Bien sûr ! Et la lessive ?',side:'right'},{s:'Valentina',es:'Ya he puesto la lavadora.',fr:'J\'ai déjà mis la machine à laver.',side:'left'},{s:'Éric',es:'¡Genial! ¿Hacemos las compras después?',fr:'Super ! On fait les courses après ?',side:'right'},{s:'Valentina',es:'Sí. Necesitamos pan y verduras.',fr:'Oui. On a besoin de pain et de légumes.',side:'left'},{s:'Éric',es:'¿Al mercado o al supermercado?',fr:'Au marché ou au supermarché ?',side:'right'},]},{label:'Sit. 3',title:'La hora de comer',img:'🍽️',dialogue:[{s:'Andrés',es:'¿Tienes hambre? Ya es mediodía.',fr:'Tu as faim ? Il est déjà midi.',side:'left'},{s:'Camille',es:'¡Sí! En Francia comemos a las doce.',fr:'Oui ! En France on mange à midi.',side:'right'},{s:'Andrés',es:'En Ecuador también comemos al mediodía.',fr:'En Équateur on mange aussi à midi.',side:'left'},{s:'Camille',es:'¿Y hacéis la siesta?',fr:'Et vous faites la sieste ?',side:'right'},{s:'Andrés',es:'Menos que en España, pero descansamos un poco.',fr:'Moins qu\'en Espagne, mais on se repose un peu.',side:'left'},{s:'Camille',es:'¡Qué buena idea! Aquí no tenemos tiempo.',fr:'Bonne idée ! Ici on n\'a pas le temps.',side:'right'},]},],vocab:['¿Has dormido bien? = Tu as bien dormi ?','La boulangerie du coin = La panadería de la esquina','Passer l\'aspirateur = Pasar el aspirador','Mettre la machine à laver = Poner la lavadora','Faire les courses = Hacer las compras','À midi = Al mediodía','On se repose = Descansamos',],quiz:[{q:'¿Cómo se dice \"Passer l\'aspirateur\" en español?',opts:['Fregar los platos','Pasar el aspirador','Poner la lavadora','Hacer la colada'],ans:1},{q:'¿A qué hora comen generalmente en Francia?',opts:['A las dos','A las tres','A las doce / al mediodía','A las once'],ans:2},{q:'¿Cómo se dice \"La boulangerie du coin\" en español?',opts:['El supermercado','La panadería de la esquina','El mercado','La carnicería'],ans:1},]},
{id:'heuretemp2',level:2,emoji:'⏰',name:'Hora y Tiempo',sub:'L\'Heure et la Météo',type:'dialog',situations:[{label:'Sit. 1',title:'Organizar una cita',img:'📅',dialogue:[{s:'Isabella',es:'¿A qué hora quedamos mañana?',fr:'On se retrouve à quelle heure demain ?',side:'left'},{s:'Julien',es:'¿Te va bien a las diez y media?',fr:'Dix heures et demie ça te va ?',side:'right'},{s:'Isabella',es:'Prefiero a las once menos cuarto si puede ser.',fr:'Je préfère onze heures moins le quart si possible.',side:'left'},{s:'Julien',es:'¡De acuerdo! ¿En la plaza o en la estación?',fr:'D\'accord ! Sur la place ou à la gare ?',side:'right'},{s:'Isabella',es:'En la estación. Así cogemos el tren al mediodía.',fr:'À la gare. Comme ça on prend le train à midi.',side:'left'},{s:'Julien',es:'¿Sabes qué tiempo va a hacer?',fr:'Tu sais quel temps il va faire ?',side:'right'},]},{label:'Sit. 2',title:'El tiempo para planificar',img:'🌦️',dialogue:[{s:'Roberto',es:'Dice la previsión del tiempo que mañana va a llover.',fr:'La météo dit qu\'il va pleuvoir demain.',side:'left'},{s:'Marie',es:'¡Vaya! Mejor nos quedamos en casa.',fr:'Zut ! Mieux vaut rester à la maison.',side:'right'},{s:'Roberto',es:'O podemos ir al museo. ¿Abren a las nueve?',fr:'Ou on peut aller au musée. Ils ouvrent à neuf heures ?',side:'left'},{s:'Marie',es:'No, a las diez. Cierran a las seis.',fr:'Non, à dix heures. Ils ferment à dix-huit heures.',side:'right'},{s:'Roberto',es:'¿Y el sábado hace mejor tiempo?',fr:'Et samedi il fait meilleur temps ?',side:'left'},{s:'Marie',es:'Sí, van a ser veinticinco grados y sol.',fr:'Oui, il va faire vingt-cinq degrés et du soleil.',side:'right'},]},{label:'Sit. 3',title:'Horarios y ritmo de vida',img:'🕐',dialogue:[{s:'Fernanda',es:'¿A qué hora cierra el banco en Francia?',fr:'À quelle heure ferme la banque en France ?',side:'left'},{s:'Thomas',es:'Generalmente a las cinco de la tarde.',fr:'En général à dix-sept heures.',side:'right'},{s:'Fernanda',es:'En Ecuador también cierran a las cinco o las seis.',fr:'En Équateur ils ferment aussi à cinq ou six heures.',side:'left'},{s:'Thomas',es:'¡Ah! ¿Y las tiendas?',fr:'Ah ! Et les magasins ?',side:'right'},{s:'Fernanda',es:'Aquí abren todo el día. En España cierran para comer.',fr:'Ici ils ouvrent toute la journée. En Espagne ils ferment pour manger.',side:'left'},{s:'Thomas',es:'¡Qué diferencia de costumbres!',fr:'Quelle différence de coutumes !',side:'right'},]},],vocab:['¿A qué hora quedamos? = On se retrouve à quelle heure ?','¿Te va bien? = Ça te va ?','La previsión del tiempo = La météo','Mejor quedarse en casa = Mieux vaut rester à la maison','Cierran a las... = Ils ferment à...','Abren a las... = Ils ouvrent à...','Van a ser... grados = Il va faire... degrés',],quiz:[{q:'¿Cómo se dice \"La météo\" en español?',opts:['¿A qué hora?','La previsión del tiempo','Van a ser grados','¿Te va bien?'],ans:1},{q:'¿Cómo se dice \"Ils ferment à...\" en español?',opts:['Abren a las...','¿Te va bien?','Cierran a las...','Van a ser...'],ans:2},{q:'¿Cómo se dice \"On se retrouve à quelle heure ?\" en español?',opts:['¿Te va bien?','Cierran a las...','Van a ser grados','¿A qué hora quedamos?'],ans:3},]},
{id:'fiesta2',level:2,emoji:'🎉',name:'Salir por la Noche',sub:'Sortir le Soir',type:'dialog',situations:[{label:'Sit. 1',title:'Organiser une sortie',img:'🎊',dialogue:[{s:'Pablo',es:'¡Hola! ¿Salimos esta noche?',fr:'Salut ! On sort ce soir ?',side:'left'},{s:'Lea',es:'¡Sí! ¿Adónde vamos?',fr:'Oui ! On va où ?',side:'right'},{s:'Pablo',es:'Hay un sitio muy chulo en el centro.',fr:'Il y a un endroit super au centre.',side:'left'},{s:'Lea',es:'¡Qué guay! ¿A qué hora?',fr:'Génial ! À quelle heure ?',side:'right'},{s:'Pablo',es:'A las nueve. En España también se sale tarde.',fr:'À neuf heures. En Équateur on sort tard aussi.',side:'left'},{s:'Lea',es:'¡Vale! ¡Hasta luego!',fr:'D\'accord ! À tout à l\'heure !',side:'right'}]},{label:'Sit. 2',title:'Au bar le soir',img:'🍺',dialogue:[{s:'Marc',es:'¡Esta música es genial! ¿Bailamos?',fr:'Cette musique est super ! On danse ?',side:'left'},{s:'Inés',es:'¡Sí! Me encanta bailar.',fr:'Oui ! J\'adore danser.',side:'right'},{s:'Marc',es:'¿Quieres algo de beber?',fr:'Tu veux quelque chose à boire ?',side:'left'},{s:'Inés',es:'Sí, un agua, por favor. Tengo calor.',fr:'Oui, une eau, s\'il vous plaît. J\'ai chaud.',side:'right'},{s:'Marc',es:'¡Ahora mismo vuelvo!',fr:'Je reviens tout de suite !',side:'left'},{s:'Inés',es:'¡Vale!',fr:'D\'accord !',side:'right'}]},{label:'Sit. 3',title:'Le lendemain',img:'😴',dialogue:[{s:'Carla',es:'¡Hola! ¿Cómo estás? ¡Llegué tardísimo a casa!',fr:'Salut ! Tu vas bien ? Je suis rentré tard à la maison !',side:'left'},{s:'Tom',es:'¡Yo también! Pero fue una noche muy guay.',fr:'Moi aussi ! Mais c\'était une très bonne soirée.',side:'left'},{s:'Carla',es:'Sí, la gente era muy simpática.',fr:'Oui, les gens étaient très sympas.',side:'left'},{s:'Tom',es:'¿Comemos juntos hoy?',fr:'On mange ensemble aujourd\'hui ?',side:'right'},{s:'Carla',es:'¡Sí! Necesito comer. ¡Tengo un hambre horrorosa!',fr:'Oui ! J\'ai besoin de manger. J\'ai très faim !',side:'left'},{s:'Tom',es:'¡Yo también! ¡A buscar un restaurante!',fr:'Moi aussi ! Allons chercher un restaurant !',side:'right'}]}],vocab:['On sort ! = ¡Salimos!','On va où ? = ¿Adónde vamos?','D\'accord ! / C\'est bon ! = ¡Vale!','Super ! / Génial ! = ¡Chulo! / ¡Guay!','J\'ai chaud = Tengo calor','J\'ai faim = Tengo hambre','Tout de suite ! = ¡Ahora mismo!'],quiz:[{q:'¿Cómo se dice "¡Vale!" en francés?',opts:['On va où ?','On sort !','D\'accord !','J\'ai faim'],ans:2},{q:'¿Cómo se dice "¿Adónde vamos?" en francés?',opts:['Tout de suite !','D\'accord !','J\'ai faim','On va où ?'],ans:3},{q:'¿Cómo se dice "Tengo calor" en francés?',opts:['Tout de suite !','Super !','J\'ai chaud','D\'accord !'],ans:2}]}
];  

/* ─────────────────────────────────────────────────────────
   2c. ALL_THEMES_ES — Tableau unifié du mode "learn_spain"
   Concaténation de LEVEL1 + LEVEL2 dans l'ordre d'affichage.
   Consommé par initApp('learn_spain') via ALL_THEMES = ALL_THEMES_ES.
───────────────────────────────────────────────────────── */
var ALL_THEMES_ES = LEVEL1_THEMES_ES.concat(LEVEL2_THEMES_ES);