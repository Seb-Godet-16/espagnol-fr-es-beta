/* ========================================
   Afaan Oromoo → Français 🇪🇹 – Données
   Vocabulaire, quiz et dialogues
   © 2026 Sébastien Godet
======================================== */

var LEVEL1_THEMES=[
 {id: 'alpha',
  level: 1,
  emoji: '🔤',
  name: 'Qubee',
  sub: 'A-Z / L\'Alphabet',
  type: 'alpha',
  words: [
    { es: 'A', fr: 'A', em: '✈️' },
    { es: 'B', fr: 'B', em: '🎈' },
    { es: 'C', fr: 'C', em: '☕' },
    { es: 'D', fr: 'D', em: '💃' },
    { es: 'E', fr: 'E', em: '🏫' },
    { es: 'F', fr: 'F', em: '🌸' },
    { es: 'G', fr: 'G', em: 'Station' },
    { es: 'H', fr: 'H', em: '🏨' },
    { es: 'I', fr: 'I', em: '🏝️' },
    { es: 'J', fr: 'J', em: '🌿' },
    { es: 'K', fr: 'K', em: '⚖️' },
    { es: 'L', fr: 'L', em: '🦁' },
    { es: 'M', fr: 'M', em: '🏠' },
    { es: 'N', fr: 'N', em: '🌙' },
    { es: 'O', fr: 'O', em: '🐦' },
    { es: 'P', fr: 'P', em: '🍞' },
    { es: 'Q', fr: 'Q', em: '🏘️' },
    { es: 'R', fr: 'R', em: '🌹' },
    { es: 'S', fr: 'S', em: '☀️' },
    { es: 'T', fr: 'T', em: '🚂' },
    { es: 'U', fr: 'U', em: '1️⃣' },
    { es: 'V', fr: 'V', em: '🌆' },
    { es: 'W', fr: 'W', em: '🚃' },
    { es: 'X', fr: 'X', em: '🔨' },
    { es: 'Y', fr: 'Y', em: '🥛' },
    { es: 'Z', fr: 'Z', em: '0️⃣' }
  ],
  quiz10: [
    { q: 'Sagalee kam dhageessan?', audio: 'A', opts: ['A', 'E', 'I', 'O'], ans: 0 },
    { q: 'Sagalee kam dhageessan?', audio: 'C', opts: ['K', 'S', 'C', 'G'], ans: 2 },
    { q: 'Sagalee kam dhageessan?', audio: 'E', opts: ['A', 'E', 'O', 'U'], ans: 1 },
    { q: 'Sagalee kam dhageessan?', audio: 'Q', opts: ['K', 'Q', 'C', 'P'], ans: 1 },
    { q: 'Sagalee kam dhageessan?', audio: 'X', opts: ['T', 'S', 'X', 'Z'], ans: 2 },
    { q: 'Sagalee kam dhageessan?', audio: 'H', opts: ['H', 'F', 'M', 'N'], ans: 0 },
    { q: 'Sagalee kam dhageessan?', audio: 'J', opts: ['I', 'Y', 'J', 'G'], ans: 2 },
    { q: 'Sagalee kam dhageessan?', audio: 'U', opts: ['O', 'U', 'E', 'A'], ans: 1 },
    { q: 'Sagalee kam dhageessan?', audio: 'V', opts: ['B', 'F', 'V', 'W'], ans: 2 },
    { q: 'Sagalee kam dhageessan?', audio: 'Z', opts: ['S', 'X', 'Z', 'J'], ans: 2 }
  ]
},
  {id:'salut',level:1,emoji:'👋',name:'Nagaa Gaafachuu',sub:'Akkam, galatoomaa… / Les salutations',
   words:[
    {es:'Akkam bulte / Akkam boolte',fr:'Bonjour (le matin)',em:'🌅'},{es:'Akkam ooltee',fr:'Bon après-midi',em:'🌆'},
    {es:'Akkam boolte / Aduun galatoomaa',fr:'Bonsoir / Bonne nuit',em:'🌙'},{es:'Nagaa!',fr:'Salut !',em:'👋'},
    {es:'Nagaan ooluu / Nagaan turaa',fr:'Au revoir / À bientôt',em:'👋'},{es:'Daddaffiin walargina',fr:'À bientôt',em:'⏱️'},
    {es:'Galatoomaa / Baay\'ee galatoomaa',fr:'Merci / Merci beaucoup',em:'🙏'},
    {es:'Maaloo / Waan gaarii',fr:'S\'il vous plaît / De rien',em:'🤝'},
    {es:'Dhiifama',fr:'Pardon / Excusez-moi',em:'🙇'},
    {es:'Eeyyee! / Tole!',fr:'Allez ! / D\'accord !',em:'👍'},
    {es:'Eeyyee',fr:'Oui',em:'✅'},
    {es:'Lakkii',fr:'Non',em:'❌'},
    {es:'Akkam jirta? yookiin Maaloo akkam?',fr:'Comment ça va ?',em:'🤗'},
    {es:'Fayyaan jira, galatoomaa',fr:'Je vais bien, merci',em:'😊'},
    {es:'Jidduu jira / Haaluma',fr:'Comme ci comme ça',em:'😐'},
    {es:'Dafqaan jira / Fayyaa miti',fr:'Je ne vais pas bien / Je n\'ai pas la forme',em:'😔'},
    {es:'Baay\'ee gaarii! / Roorroo!',fr:'C\'est cool ! / Super !',em:'🌟'}
   ],
   quiz10:[
    {q:'\"Bonjour (le matin)\" Afaan Oromootti akkamitti jedhamaa?',opts:['Nagaa!','Akkam ooltee','Akkam bulte','Aduun galatoomaa'],ans:2},
    {q:'\"Nagaan ooluu\" jechuun maali?',opts:['À tout à l\'heure','Au revoir','Bonjour','Bonne nuit'],ans:1},
    {q:'\"Merci\" Afaan Oromootti akkamitti jedhamaa?',opts:['Maaloo','Dhiifama','Galatoomaa','Eeyyee'],ans:2},
    {q:'\"Tole!\" Oromiyaatti maal jechuudha?',opts:['Adieu','Allons-y !','D\'accord !','Bonne nuit'],ans:2},
    {q:'\"S\'il vous plaît\" Afaan Oromootti akkamitti jedhamaa?',opts:['Galatoomaa','Dhiifama','Maaloo','Eeyyee'],ans:2},
    {q:'\"Eeyyee!\" Oromiyaatti maal jechuudha?',opts:['Viens !','Allez ! / D\'accord !','Non !','Peut-être !'],ans:1},
    {q:'\"Akkam jirta?\" jechuun maali?',opts:['Où es-tu ?','Comment tu t\'appelles ?','Comment vas-tu ?','Quel âge as-tu ?'],ans:2},
    {q:'\"Baay\'ee gaarii!\" jechuun maali?',opts:['Comme c\'est bizarre !','Comme c\'est cool !','Comme c\'est triste !','Comme c\'est grand !'],ans:1}
   ]},
  {id:'pres',level:1,emoji:'🙋',name:'Ofii Beeksisuu',sub:'Maqaa, dachee, magaalaa… / Se présenter',
   words:[
    {es:'Maqaa abbaaf eeyyee',fr:'Le nom de famille',em:'👨‍👩‍👧'},{es:'Maqaa ofii',fr:'Le prénom',em:'🏷️'},
    {es:'Biyya irraa dhufame',fr:'La nationalité',em:'🌍'},{es:'Umurii',fr:'L\'âge',em:'🎂'},
    {es:'Hojii yookiin ogummaa',fr:'La profession',em:'💼'},{es:'Biyya',fr:'Le pays',em:'🗺️'},
    {es:'Faransaawi / Faransaawitii',fr:'Français(e)',em:'🇫🇷'},{es:'Oromoo / Itoophiyaanitti',fr:'Éthiopien(ne)',em:'🇪🇹'},
    {es:'Nan jiraadha',fr:'J\'habite à',em:'🏠'},{es:'Ani / Naan',fr:'Je suis',em:'🧑'},
    {es:'Waggoota ... qabaadha',fr:'J\'ai ... ans',em:'🎈'},{es:'Maqaan koo ...',fr:'Je m\'appelle',em:'👋'},
    {es:'Eessa irraa dhufte?',fr:'D\'où es-tu ?',em:'🌍'},{es:'Shashemaneetti dhufeen',fr:'Je suis de Shashemene',em:'🏙️'}
   ],
   quiz10:[
    {q:'\"Je m\'appelle\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ani','Maqaan koo ...','Nan jiraadha','Waggoota qabaadha'],ans:1},
    {q:'\"Maqaa abbaaf eeyyee\" jechuun maali?',opts:['Le prénom','L\'âge','Le nom de famille','La profession'],ans:2},
    {q:'\"J\'ai 25 ans\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ani waggaa 25','Nan jiraadha 25','Waggoota 25 qabaadha','Hojii 25'],ans:2},
    {q:'\"Biyya irraa dhufame\" jechuun maali?',opts:['Le pays','La ville','La profession','La nationalité'],ans:3},
    {q:'\"J\'habite à Shashemane\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ani Shashemane','Shashamenetti nan jiraadha','Shashemane deema','Shashemane qabaadha'],ans:1},
    {q:'\"Maqaa ofii\" jechuun maali?',opts:['Le nom de famille','Le prénom','L\'âge','La profession'],ans:1},
    {q:'\"Je suis Éthiopienne\" Afaan Oromootti akkamitti jedhamaa?',opts:['Faransaawitii','Oromiyaadhaa','Shashemane nan jiraadha','Oromoo hojjedha'],ans:1},
    {q:'\"Eessa irraa dhufte?\" jechuun maali?',opts:['Umurii meeqa?','Maqaan kee eenyu?','Eessa irraa dhufte?','Eessa jiraatta?'],ans:2}
   ]},
  {id:'orient',level:1,emoji:'🧭',name:'Karaa Barbaaduuu',sub:'Bitaa, mirga… / S\'orienter',
   words:[
   // Directions
    {es:'Kallattii itti fufi',fr:'Tout droit',em:'⬆️'},
    {es:'Bitatti',fr:'À gauche',em:'⬅️'},
    {es:'Mirgatti',fr:'À droite',em:'➡️'},
    // Position relative
    {es:'Fuuldura',fr:'Devant',em:'🔜'},
    {es:'Duuba',fr:'Derrière',em:'🔙'},
    {es:'Cinaa',fr:'À côté',em:'↔️'},
    {es:'Fuuldura / Eegalan',fr:'En face',em:'🔄'},
    // Distance
    {es:'Dhiyoo',fr:'Près',em:'📍'},
    {es:'Fagoo',fr:'Loin',em:'🌅'},
    // Outil
    {es:'Kaartaa',fr:'Le plan / La carte',em:'🗺️'},
    ],
   quiz10:[
    {q:'\"À gauche\" Afaan Oromootti akkamitti jedhamaa?',opts:['Mirgatti','Kallattii itti fufi','Bitatti','Fuuldura'],ans:2},
    {q:'\"Mirgatti\" jechuun maali?',opts:['À gauche','Tout droit','À côté','À droite'],ans:3},
    {q:'\"Tout droit\" Afaan Oromootti akkamitti jedhamaa?',opts:['Bitatti','Kallattii itti fufi','Fuuldura','Cinaa'],ans:1},
    {q:'\"Fuuldura / Eegalan\" jechuun maali?',opts:['À côté','Derrière','En face','Près'],ans:2},
    {q:'\"Près\" Afaan Oromootti akkamitti jedhamaa?',opts:['Fagoo','Cinaa','Dhiyoo','Fuuldura'],ans:2}
   ]},
  {id:'lieux',level:1,emoji:'🏙️',name:'Bakkoota Barbaachisoo',sub:'Gabaa, daandii, bunaa… / Les lieux importants',
   words:[
    // Lieux de vie / nature
    {es:'Magaalaa',fr:'La ville',em:'🏙️'},
    {es:'Ganda',fr:'Le village',em:'🏡'},
    {es:'Baadiyyaa',fr:'La campagne',em:'🌾'},
    {es:'Tullu / Gaara',fr:'La montagne / La chaîne de montagnes',em:'⛰️'},
    {es:'Galaana / Haroo',fr:'La mer / L\'océan',em:'🌊'},
    {es:'Qorichee / Qixxee qilleensaa',fr:'La plage',em:'🏖️'},
    {es:'Laga',fr:'La rivière',em:'🏞️'},
    {es:'Meeshaa bashannannaa',fr:'Le parc',em:'🌳'},
    {es:'Daandii guddaa',fr:'La place',em:'⛲'},
    {es:'Daandii / Karaa',fr:'La rue / L\'avenue',em:'🛣️'},
    {es:'Naannoo manaa',fr:'Le pâté de maisons',em:'🏘️'},
    // Services publics
    {es:'Mana bulchiinsaa',fr:'La mairie',em:'🏛️'},
    {es:'Hospitaala',fr:'L\'hôpital',em:'🏥'},
    {es:'Farmaasiitii',fr:'La pharmacie',em:'💊'},
    {es:'Baankii',fr:'La banque',em:'🏦'},
    {es:'Kiilistiyaana / Masjiida',fr:'L\'église',em:'⛪'},
    // Commerces
    {es:'Suupaarmaarkeeti',fr:'Le supermarché',em:'🛒'},
    {es:'Buna mana / Bunaa',fr:'Le bar / Le café',em:'☕'},
    {es:'Gabaa / Suuqii',fr:'La taverne / L\'auberge',em:'🍷'},
    // Éducation
    {es:'Mana barumsaa daa\'immanii',fr:'L\'école maternelle',em:'🧸'},
    {es:'Mana barumsaa sadarkaa duraatii',fr:'L\'école primaire',em:'🎒'},
    {es:'Mana barumsaa sadarkaa lammaffaa',fr:'Le collège',em:'📚'},
    {es:'Mana barumsaa ol\'aanaa',fr:'Le lycée',em:'🎓'},
    {es:'Yuniversitii',fr:'L\'université',em:'🏛️'},
   ],
   quiz10:[
    {q:'\"La pharmacie\" Afaan Oromootti akkamitti jedhamaa?',opts:['Baankii','Hospitaala','Farmaasiitii','Suupaarmaarkeeti'],ans:2},
    {q:'\"La mairie\" Oromiyaatti akkamitti jedhamaa?',opts:['Kiilistiyaana','Mana murtii','Mana bulchiinsaa','Gabaa'],ans:2},
    {q:'\"L\'hôpital\" Afaan Oromootti akkamitti jedhamaa?',opts:['Farmaasiitii','Mana bulchiinsaa','Hospitaala','Baankii'],ans:2},
    {q:'Oromiyaatti bakka tokko tokkotti baay\'een argamu?',opts:['Le supermarché','Le bar / Le café','La pharmacie','L\'école'],ans:1},
    {q:'\"La mer\" Afaan Oromootti akkamitti jedhamaa?',opts:['Laga','Tullu','Galaana','Haroo'],ans:2},
    {q:'\"Mana bulchiinsaa\" jechuun maali?',opts:['Le tribunal','La mairie','Le parlement','L\'université'],ans:1},
    {q:'\"La ville\" Afaan Oromootti akkamitti jedhamaa?',opts:['Daandii','Ganda','Magaalaa','Tullu'],ans:2},
    {q:'\"Baankii\" jechuun maali?',opts:['La pharmacie','La banque','La caisse','Le bureau'],ans:1}
   ]},
  {id:'nour',level:1,emoji:'🍽️',name:'Nyaata',sub:'Buddeena, muduraa, injera… / La nourriture',
   words:[
    // Catégories générales d'abord
    {es:'Muduraa',fr:'Les fruits',em:'🍉'},
    {es:'Kuduraa',fr:'Les légumes',em:'🥦'},
    // Féculents / base
    {es:'Buddeena',fr:'Le pain',em:'🍞'},
    {es:'Ruzii',fr:'Le riz',em:'🍚'},
    {es:'Maakiirooni',fr:'Les pâtes',em:'🍝'},
    {es:'Dinnichi / Foonii dinnichaa',fr:'La pomme de terre / Les frites',em:'🥔'},
    // Protéines
    {es:'Foon',fr:'La viande',em:'🥩'},
    {es:'Lukkuu',fr:'Le poulet',em:'🍗'},
    {es:'Qurxummii',fr:'Le poisson',em:'🐟'},
    {es:'Foon garbuu / Tibs',fr:'Le jambon',em:'🥩'},
    {es:'Berbere',fr:'Le chorizo',em:''},
    {es:'Hanqaaquu',fr:'L\'œuf',em:'🥚'},
    // Produits laitiers
    {es:'Baadaa',fr:'Le fromage',em:'🧀'},
    {es:'Dhadhaa',fr:'Le beurre',em:'🧈'},
    // Fruits
    {es:'Pomii',fr:'La pomme',em:'🍎'},
    {es:'Muuzii',fr:'La banane',em:'🍌'},
    {es:'Burtukaana',fr:'L\'orange',em:'🍊'},
    {es:'Liimoo',fr:'Le citron',em:'🍋'},
    {es:'Mukarroo',fr:'La fraise',em:'🍓'},
    {es:'Harbuu / Watermelon',fr:'La pastèque',em:'🍉'},
    // Légumes
    {es:'Timaatimii',fr:'La tomate',em:'🍅'},
    {es:'Karootii',fr:'La carotte',em:'🥕'},
    {es:'Qullubbii / Laasuna',fr:'L\'oignon',em:'🧅'},
    {es:'Turunfaa',fr:'L\'ail',em:'🧄'},
    {es:'Salaaxi',fr:'Le concombre',em:'🥒'},
    {es:'Salaaditii',fr:'La salade',em:'🥗'},
    // Condiments / épicerie
    {es:'Zeyitii / Eelaa',fr:'L\'huile d\'olive',em:'🫒'},
    {es:'Citaa',fr:'Le sel',em:'🧂'},
    {es:'Barbaree',fr:'Le poivre',em:'🌶️'},
    {es:'Damma',fr:'Le miel',em:'🍯'},
    {es:'Chokolaatii',fr:'Le chocolat',em:'🍫'},
   ],
   quiz10:[
    {q:'\"Le pain\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ruzii','Buddeena','Baadaa','Dhadhaa'],ans:1},
    {q:'\"Lukkuu\" jechuun maali?',opts:['Le poisson','La viande','Le poulet','Le porc'],ans:2},
    {q:'\"L\'œuf\" Afaan Oromootti akkamitti jedhamaa?',opts:['Dhadhaa','Baadaa','Karootii','Hanqaaquu'],ans:3},
    {q:'\"La pomme\" Afaan Oromootti akkamitti jedhamaa?',opts:['Muuzii','Mukarroo','Pomii','Burtukaana'],ans:2},
    {q:'\"Les frites\" Afaan Oromootti Oromiyaatti akkamitti jedhamaa?',opts:['Foonii dinnichaa','Maakiirooni','Tibs','Buddeena'],ans:0},
    {q:'\"La pastèque\" Afaan Oromootti akkamitti jedhamaa?',opts:['Mukarroo','Harbuu','Liimoo','Burtukaana'],ans:1},
    {q:'\"La carotte\" Afaan Oromootti akkamitti jedhamaa?',opts:['Salaaxi','Karootii','Timaatimii','Qullubbii'],ans:1},
    {q:'\"La fraise\" Afaan Oromootti Oromiyaatti akkamitti jedhamaa?',opts:['Muuzii','Harbuu','Mukarroo','Liimoo'],ans:2}
   ]},
  {id:'bois',level:1,emoji:'🥤',name:'Dhugaatii',sub:'Bishaani, buna, shaayii… / Les boissons',
   words:[
    // Essentiels
    {es:'Bishaan',fr:'L\'eau',em:'💧'},
    {es:'Bishaan gaazii qaba',fr:'L\'eau gazeuse',em:'🫧'},
    {es:'Aannaan',fr:'Le lait',em:'🥛'},
    {es:'Jiisii (Burtukaanaa)',fr:'Le jus (d\'orange)',em:'🍊'},
    {es:'Sodaa / Gasiyoozaa',fr:'Le soda',em:'🥤'},
    // Cafés
    {es:'Buna (qullayyoo)',fr:'Le café noir',em:'☕'},
    {es:'Buna aannaan waliin',fr:'Le café au lait',em:'☕'},
    {es:'Buna nannoo aannaan xinnoo',fr:'Le café avec un nuage de lait',em:'☕'},
    {es:'Shaayii',fr:'Le thé',em:'🍵'},
    // Alcools
    {es:'Koonjoo (diimaa / adii)',fr:'Le vin (rouge / blanc)',em:'🍷'},
    {es:'Biiraa',fr:'La bière',em:'🍺'},
    {es:'Araqee',fr:'La sangria',em:'🍷'},
   ],
   quiz10:[
    {q:'\"L\'eau\" Afaan Oromootti akkamitti jedhamaa?',opts:['Aannaan','Jiisii','Bishaan','Shaayii'],ans:2},
    {q:'\"Buna qullayyoo\" Oromiyaatti maaliyyu?',opts:['Un café au lait','Un café noir','Un café avec sucre','Un café froid'],ans:1},
    {q:'\"Le lait\" Afaan Oromootti akkamitti jedhamaa?',opts:['Aannaan','Bishaan','Shaayii','Jiisii'],ans:0},
    {q:'\"Jiisii\" jechuun maali?',opts:['Le vin','La bière','La limonade','Le jus'],ans:3},
    {q:'Oromiyaatti dhugaatii beekamaa maaltu jira?',opts:['Biiraa','Araqee','Sodaa','Buna aannaan waliin'],ans:1},
    {q:'\"Buna nannoo aannaan xinnoo\" maaliyyu?',opts:['Un café noir','Une bière','Un café avec un nuage de lait','Un jus d\'orange'],ans:2},
    {q:'\"Le thé\" Afaan Oromootti akkamitti jedhamaa?',opts:['Buna','Shaayii','Aannaan','Bishaan'],ans:1},
    {q:'\"L\'eau gazeuse\" Afaan Oromootti akkamitti jedhamaa?',opts:['Bishaan qorraa','Bishaan dhugaatii','Bishaan gaazii qaba','Gasiyoozaa'],ans:2}
   ]},
{id:'num',level:1,emoji:'🔢',name:'Lakkoofsa',sub:'Zeerroo irraa hanga kuma lamaa / Zéro à deux mille',
 words:[
  {es:'Zeerroo',fr:'Zéro',em:'0️⃣'},{es:'Tokko',fr:'Un',em:'1️⃣'},{es:'Lama',fr:'Deux',em:'2️⃣'},
  {es:'Sadii',fr:'Trois',em:'3️⃣'},{es:'Afur',fr:'Quatre',em:'4️⃣'},{es:'Shan',fr:'Cinq',em:'5️⃣'},
  {es:'Jaha',fr:'Six',em:'6️⃣'},{es:'Torba',fr:'Sept',em:'7️⃣'},{es:'Saddeet',fr:'Huit',em:'8️⃣'},
  {es:'Sagal',fr:'Neuf',em:'9️⃣'},{es:'Kudhan',fr:'Dix',em:'🔟'},
  {es:'Kudha tokko',fr:'Onze',em:'1️⃣1️⃣'},{es:'Kudha lama',fr:'Douze',em:'1️⃣2️⃣'},
  {es:'Kudha sadii',fr:'Treize',em:'1️⃣3️⃣'},{es:'Kudha afur',fr:'Quatorze',em:'1️⃣4️⃣'},
  {es:'Kudha shan',fr:'Quinze',em:'1️⃣5️⃣'},{es:'Kudha jaha',fr:'Seize',em:'1️⃣6️⃣'},
  {es:'Kudha torba',fr:'Dix-sept',em:'1️⃣7️⃣'},{es:'Kudha saddeet',fr:'Dix-huit',em:'1️⃣8️⃣'},
  {es:'Kudha sagal',fr:'Dix-neuf',em:'1️⃣9️⃣'},{es:'Digdama',fr:'Vingt',em:'2️⃣0️⃣'},
  {es:'Soddomaa',fr:'Trente',em:'3️⃣0️⃣'},
  {es:'Afurtama',fr:'Quarante',em:'4️⃣0️⃣'},
  {es:'Shantama',fr:'Cinquante',em:'5️⃣0️⃣'},
  {es:'Jahatama',fr:'Soixante',em:'6️⃣0️⃣'},
  {es:'Torbaatama',fr:'Soixante-dix',em:'7️⃣0️⃣'},
  {es:'Saddeetama',fr:'Quatre-vingts',em:'8️⃣0️⃣'},
  {es:'Sagaltama',fr:'Quatre-vingt-dix',em:'9️⃣0️⃣'},
  {es:'Dhibba / Dhibbaa',fr:'Cent)',em:'1️⃣0️⃣0️⃣'},
  {es:'Dhibba lama',fr:'Deux cents',em:'2️⃣0️⃣0️⃣'},
  {es:'Dhibba sadii',fr:'Trois cents',em:'3️⃣0️⃣0️⃣'},
  {es:'Dhibba afur',fr:'Quatre cents',em:'4️⃣0️⃣0️⃣'},
  {es:'Dhibba shan',fr:'Cinq cents',em:'5️⃣0️⃣0️⃣'},
  {es:'Dhibba jaha',fr:'Six cents',em:'6️⃣0️⃣0️⃣'},
  {es:'Dhibba torba',fr:'Sept cents',em:'7️⃣0️⃣0️⃣'},
  {es:'Dhibba saddeet',fr:'Huit cents',em:'8️⃣0️⃣0️⃣'},
  {es:'Dhibba sagal',fr:'Neuf cents',em:'9️⃣0️⃣0️⃣'},
  {es:'Kuma',fr:'Mille',em:'1️⃣0️⃣0️⃣0️⃣'},
  {es:'Kuma lama',fr:'Deux mille',em:'2️⃣0️⃣0️⃣0️⃣'}
 ],
   quiz10:[
    {q:'\"Shan\" lakkoofsa meeqaa?',opts:['4','6','5','7'],ans:2},
    {q:'12 Afaan Oromootti akkamitti jedhamaa?',opts:['Kudha tokko','Kudha lama','Kudha sadii','Kudhan'],ans:1},
    {q:'16 Afaan Oromootti akkamitti jedhamaa?',opts:['Kudha shan','Kudha torba','Kudha jaha','Kudha sadii'],ans:2},
    {q:'\"Sagal\" lakkoofsa meeqaa?',opts:['7','8','10','9'],ans:3},
    {q:'20 Afaan Oromootti akkamitti jedhamaa?',opts:['Kudha sagal','Digdama','Kudha shan','Kudha saddeet'],ans:1},
    {q:'\"Kudha sadii\" lakkoofsa meeqaa?',opts:['12','11','14','13'],ans:3},
    {q:'8 Afaan Oromootti akkamitti jedhamaa?',opts:['Torba','Sagal','Saddeet','Jaha'],ans:2},
    {q:'\"Kudha afur\" lakkoofsa meeqaa?',opts:['15','13','14','12'],ans:2},
    {q:'30 Afaan Oromootti akkamitti jedhamaa?',opts:['Digdama','Afurtama','Soddomaa','Shantama'],ans:2},
    {q:'\"Torbaatama\" lakkoofsa meeqaa?',opts:['60','80','90','70'],ans:3},
    {q:'50 Afaan Oromootti akkamitti jedhamaa?',opts:['Jahatama','Shantama','Afurtama','Torbaatama'],ans:1},
    {q:'\"Saddeetama\" lakkoofsa meeqaa?',opts:['70','90','80','60'],ans:2},
    {q:'100 Afaan Oromootti akkamitti jedhamaa?',opts:['Kuma','Dhibbaa','Dhibba','Sagaltama'],ans:2},
    {q:'\"Dhibba shan\" lakkoofsa meeqaa?',opts:['400','600','300','500'],ans:3},
    {q:'1000 Afaan Oromootti akkamitti jedhamaa?',opts:['Dhibba','Dhibba lama','Kuma','Dhibba sagal'],ans:2},
    {q:'\"Dhibba lama\" lakkoofsa meeqaa?',opts:['300','100','400','200'],ans:3},
    {q:'2000 Afaan Oromootti akkamitti jedhamaa?',opts:['Kuma lama','Kuma','Dhibba lama','Digdama kuma'],ans:0},
    {q:'\"Dhibba sagal\" lakkoofsa meeqaa?',opts:['800','700','1000','900'],ans:3}
   ]},
  {id:'col',level:1,emoji:'🎨',name:'Halluu',sub:'Diimaa, magariisa, keelloo… / Les couleurs',
   words:[
    {es:'Diimaa',fr:'Rouge',em:'❤️'},{es:'Cuquliisa',fr:'Bleu',em:'💙'},{es:'Magariisa',fr:'Vert',em:'💚'},
    {es:'Keelloo',fr:'Jaune',em:'💛'},{es:'Burtukaana',fr:'Orange',em:'🧡'},{es:'Adii',fr:'Blanc',em:'🤍'},
    {es:'Gurraacha',fr:'Noir',em:'🖤'},{es:'Roozii',fr:'Rose',em:'🩷'},
    {es:'Daallatii / Diimtuuja',fr:'Violet',em:'💜'},{es:'Bunii',fr:'Marron',em:'🤎'},
    {es:'Garaa garaa / Dulluma',fr:'Gris',em:'🩶'}
   ],
   quiz10:[
    {q:'\"Rouge\" Afaan Oromootti akkamitti jedhamaa?',opts:['Cuquliisa','Diimaa','Magariisa','Keelloo'],ans:1},
    {q:'\"Cuquliisa\" jechuun maali?',opts:['Vert','Jaune','Bleu','Violet'],ans:2},
    {q:'\"Vert\" Afaan Oromootti akkamitti jedhamaa?',opts:['Keelloo','Dulluma','Magariisa','Adii'],ans:2},
    {q:'\"Gurraacha\" jechuun maali?',opts:['Blanc','Gris','Marron','Noir'],ans:3},
    {q:'\"Jaune\" Afaan Oromootti akkamitti jedhamaa?',opts:['Burtukaana','Keelloo','Roozii','Daallatii'],ans:1},
    {q:'\"Roozii\" jechuun maali?',opts:['Rouge','Orange','Rose','Violet'],ans:2},
    {q:'\"Blanc\" Afaan Oromootti akkamitti jedhamaa?',opts:['Adii','Gurraacha','Dulluma','Bunii'],ans:0}
   ]},
{id:'viaje',level:1,emoji:'🧳',name:'Deemsa',sub:'Baggaajii, hooteela, paaspoortiifi… / Le voyage',
   words:[
   // Préparation
    {es:'Paaspoortiifi',fr:'Le passeport',em:'🛂'},
    {es:'Baggaajii',fr:'La valise',em:'🧳'},
    {es:'Qabeenya deemsa',fr:'Les bagages',em:'🎒'},
    {es:'Tikeeta',fr:'Le billet',em:'🎫'},
    {es:'Reserveeshina',fr:'La réservation',em:'📋'},
    {es:'Ejensii deemsa',fr:'L\'agence de voyages',em:'🗺️'},
    {es:'Inshuraansii deemsa',fr:'L\'assurance voyage',em:'📄'},
    // Transport
    {es:'Xiyyaara',fr:'L\'avion',em:'✈️'},
    {es:'Buufata xiyyaaraa',fr:'L\'aéroport',em:'🛫'},
    {es:'Ba\'uu',fr:'Le départ',em:'🚪'},
    {es:'Ga\'uu',fr:'L\'arrivée',em:'🛬'},
    {es:'Koostamii',fr:'La douane',em:'🛃'},
    {es:'Doonii guddaa',fr:'La croisière',em:'🚢'},
    // Hébergement
    {es:'Hooteela',fr:'L\'hôtel',em:'🏨'},
    {es:'Kutaa lama yookiin tokko',fr:'La chambre double ou simple',em:'🛏️'},
    // Destinations
    {es:'Qorichee laga',fr:'La plage',em:'🏖️'},
    {es:'Tullu',fr:'La montagne',em:'⛰️'},
    {es:'Daawwataa',fr:'Le touriste',em:'📸'},
   ],
   quiz10:[
    {q:'\"Le passeport\" Afaan Oromootti akkamitti jedhamaa?',opts:['Baggaajii','Tikeeta','Paaspoortiifi','Qabeenya deemsa'],ans:2},
    {q:'\"Baggaajii\" jechuun maali?',opts:['Le sac à dos','La valise','Les bagages','Le billet'],ans:1},
    {q:'\"L\'aéroport\" Afaan Oromootti akkamitti jedhamaa?',opts:['Buufata konkolaataa','Bakka doonii','Buufata xiyyaaraa','Koostamii'],ans:2},
    {q:'\"Reserveeshina\" jechuun maali?',opts:['La réduction','La réservation','L\'assurance','Le remboursement'],ans:1},
    {q:'\"Les bagages\" Afaan Oromootti akkamitti jedhamaa?',opts:['Baggaajii','Tikeeta','Qabeenya deemsa','Bursuusaa'],ans:2},
    {q:'\"Koostamii\" jechuun maali?',opts:['L\'arrivée','Le départ','La douane','La frontière'],ans:2},
    {q:'\"La croisière\" Afaan Oromootti akkamitti jedhamaa?',opts:['Doonii xinnoo','Doonii guddaa','Xiyyaara','Deemsa'],ans:1},
    {q:'\"Ga\'uu\" jechuun maali?',opts:['Le départ','La correspondance','L\'escale','L\'arrivée'],ans:3}
   ]},
  {id:'rest',level:1,emoji:'🍽️',name:'Mana Nyaataa',sub:'Menuu, kafaltii, teessoo… / Au restaurant',
   words:[
      // Arrivée
    {es:'Balbala alaa',fr:'La terrasse',em:'☀️'},
    {es:'Teessoo',fr:'La table',em:'🪑'},
    {es:'Teessoon kun duwwaa dha?',fr:'Cette table est libre ?',em:'🪑'},
    // Commander
    {es:'Tajaajilaa / Tajaajiltu',fr:'Le serveur / La serveuse',em:'🧑‍🍳'},
    {es:'Liistii nyaataa',fr:'La carte',em:'📋'},
    {es:'Menuu guyyaa',fr:'Le menu du jour',em:'🍱'},
    {es:'Gaafachuu',fr:'Commander',em:'🙋'},
    {es:'Maal yaaddu?',fr:'Que recommandez-vous ?',em:'👨‍🍳'},
    // Régimes
    {es:'Gluten hin qabu',fr:'Sans gluten',em:'🌾'},
    {es:'Foon hin nyaatu',fr:'Végétarien / Végétarienne',em:'🥦'},
    // Repas
    {es:'Fuullaa xinnoo',fr:'La tapa',em:'🫒'},
    {es:'Fuullaa dura',fr:'L\'entrée',em:'🥗'},
    {es:'Nyaata ijoo',fr:'Le plat principal',em:'🍖'},
    {es:'Dhaamsa nyaataa',fr:'Le dessert',em:'🍮'},
    {es:'Saandiwichii / Buddeena',fr:'Le sandwich',em:'🥖'},
    {es:'Fudhachuuf',fr:'À emporter',em:'🥡'},
    // Addition
    {es:'Baasii nyaataa',fr:'L\'addition',em:'💶'},
    {es:'Qarshii dabalataa',fr:'Le pourboire',em:'💰'},
    {es:'Qarshii dabalataan dabalamee jira',fr:'Le pourboire est inclus',em:'✅'},
   ],
   quiz10:[
    {q:'\"L\'addition\" Afaan Oromootti akkamitti jedhamaa?',opts:['Qarshii dabalataa','Baasii nyaataa','Menuu','Reserveeshina'],ans:1},
    {q:'\"Tajaajilaa\" jechuun maali?',opts:['Le cuisinier','Le patron','Le serveur','Le client'],ans:2},
    {q:'\"Le dessert\" Afaan Oromootti akkamitti jedhamaa?',opts:['Fuullaa dura','Nyaata ijoo','Dhaamsa nyaataa','Fuullaa xinnoo'],ans:2},
    {q:'\"Fudhachuuf\" jechuun maali?',opts:['Pour manger sur place','À emporter','À partager','Pour deux personnes'],ans:1},
    {q:'\"La terrasse\" Afaan Oromootti akkamitti jedhamaa?',opts:['Balbala','Daandii','Balbala alaa','Mana'],ans:2},
    {q:'\"Gaafachuu\" jechuun maali?',opts:['Payer','Réserver','Commander','Choisir'],ans:2},
    {q:'\"Le pourboire\" Afaan Oromootti akkamitti jedhamaa?',opts:['Baasii nyaataa','Qarshii dabalataa','Dhiibaa','Gatii'],ans:1},
    {q:'\"Maal yaaddu?\" jechuun maali?',opts:['Qu\'est-ce que vous préparez ?','Qu\'est-ce que vous avez ?','Que recommandez-vous ?','C\'est bon ?'],ans:2}
   ]},
  {id:'trans',level:1,emoji:'🚌',name:'Geejjiba',sub:'Baasii, gaarii, konkolaataa… / Les transports',
   words:[
    // Transports en commun
    {es:'Baasii / Konkolaataa ummataa',fr:'Le bus',em:'🚌'},
    {es:'Meetiroo',fr:'Le métro',em:'🚇'},
    {es:'Tiraamii',fr:'Le tramway',em:'🚊'},
    {es:'Gaarii sibii',fr:'Le train',em:'🚂'},
    {es:'Xiyyaara',fr:'L\'avion',em:'✈️'},
    {es:'Taaksii',fr:'Le taxi',em:'🚕'},
    // Transports individuels
    {es:'Konkolaataa',fr:'La voiture',em:'🚗'},
    {es:'Mootoorisikkilii',fr:'La moto',em:'🏍️'},
    {es:'Biskileetii',fr:'Le vélo',em:'🚴'},
    // Titre de transport
    {es:'Tikeeta',fr:'Le billet',em:'🎫'},
   ],
   quiz10:[
    {q:'\"Le bus\" Afaan Oromootti akkamitti jedhamaa?',opts:['Gaarii sibii','Meetiroo','Baasii / Konkolaataa ummataa','Taaksii'],ans:2},
    {q:'\"La voiture\" Oromiyaatti akkamitti jedhamaa?',opts:['Mootoorisikkilii','Konkolaataa','Tiraamii','Geejjiba guddaa'],ans:1},
    {q:'\"L\'avion\" Afaan Oromootti akkamitti jedhamaa?',opts:['Doonii','Xiyyaara','Biskileetii','Meetiroo'],ans:1},
    {q:'\"Le billet\" Oromiyaatti akkamitti jedhamaa?',opts:['Kaardii','Xiqqoo','Tikeeta','Paaspoortiifi'],ans:2}
   ]},
  {id:'objets',level:1,emoji:'🔑',name:'Meeshaalee Guyyaatii',sub:'Bilbila, hirnaa… / Objets du quotidien',
   words:[
        // Technologie
    {es:'Bilbila',fr:'Le téléphone',em:'☎️'},
    {es:'Bilbila harkaa',fr:'Le portable',em:'📱'},
    {es:'Kompiyuutara',fr:'L\'ordinateur',em:'💻'},
    {es:'Chaajjara',fr:'Le chargeur',em:'🔌'},
    // Temps
    {es:'Sa\'atii harkaa',fr:'La montre',em:'⌚'},
    {es:'Sa\'atii',fr:'L\'horloge / la pendule',em:'🕐'},
    // Accessoires personnels
    {es:'Hirnaa',fr:'Les clés',em:'🔑'},
    {es:'Fardaa qarshii / Baankii xinnoo',fr:'Le portefeuille / le porte-monnaie',em:'👛'},
    {es:'Bursuusaa dugdaa',fr:'Le sac à dos',em:'🎒'},
    {es:'Miidhagina ija',fr:'Les lunettes',em:'👓'},
    {es:'Aanoo roobaa',fr:'Le parapluie',em:'☂️'},
    // Papeterie
    {es:'Waraqaa',fr:'Le papier',em:'📄'},
    {es:'Qalama / Biiroo',fr:'Le stylo / le bic',em:'🖊️'},
    {es:'Mishira',fr:'Les ciseaux',em:'✂️'},
    // Vaisselle
    {es:'Xaa\'oo',fr:'L\'assiette',em:'🍽️'},
    {es:'Kilaasii',fr:'Le verre',em:'🥛'},
    {es:'Kubboo buna',fr:'La tasse',em:'☕'},
    {es:'Simiintoo',fr:'La cuillère',em:'🥄'},
    {es:'Forkii',fr:'La fourchette',em:'🍴'},
    {es:'Bilaa',fr:'Le couteau',em:'🔪'},
    {es:'Booteelaa',fr:'La bouteille',em:'🍶'},
    // Salle de bain / chambre
    {es:'Iyyaanoo',fr:'Le miroir',em:'🪞'},
    {es:'Tuwaallii',fr:'La serviette',em:'🛁'},
    {es:'Saabunaa',fr:'Le savon',em:'🧼'},
    {es:'Kaafiyaa',fr:'L\'oreiller',em:''},
   ],
   quiz10:[
    {q:'\"Les clés\" Afaan Oromootti akkamitti jedhamaa?',opts:['Qalama','Mishira','Hirnaa','Chaajjara'],ans:2},
    {q:'\"Le téléphone portable\" Oromiyaatti akkamitti jedhamaa?',opts:['Taabileettii','Bilbila harkaa','Kompiyuutara','Raadiyoo'],ans:1},
    {q:'\"Le sac à dos\" Afaan Oromootti akkamitti jedhamaa?',opts:['Fardaa qarshii','Buursaa','Bursuusaa dugdaa','Kuullaa'],ans:2},
    {q:'\"L\'ordinateur\" Oromiyaatti akkamitti jedhamaa?',opts:['Bilbila harkaa','Taabileettii','Kompiyuutara','Ibsaa'],ans:2},
    {q:'\"Les lunettes\" Oromiyaatti akkamitti jedhamaa?',opts:['Gurra meeshaa','Miidhagina ija','Hattuu','Sa\'atii harkaa'],ans:1},
    {q:'\"Le stylo\" Oromiyaatti (beekamaa) akkamitti jedhamaa?',opts:['Qorataa','Waraqaa','Qalama','Kitaaba'],ans:2},
    {q:'\"Le portefeuille\" Afaan Oromootti akkamitti jedhamaa?',opts:['Bursuusaa dugdaa','Hirnaa','Fardaa qarshii','Bilbila'],ans:2},
    {q:'\"Iyyaanoo\" jechuun maali?',opts:['La fenêtre','Le miroir','Le tableau','La porte'],ans:1},
    {q:'\"La serviette\" Afaan Oromootti akkamitti jedhamaa?',opts:['Kaafiyaa','Saabunaa','Tuwaallii','Kilaasii'],ans:2},
    {q:'\"Simiintoo\" jechuun maali?',opts:['Le couteau','La fourchette','La cuillère','L\'assiette'],ans:2},
    {q:'\"Le parapluie\" Afaan Oromootti akkamitti jedhamaa?',opts:['Koobbii','Aanoo roobaa','Haguuggii','Uffata qilleensaa'],ans:1},
    {q:'\"Kaafiyaa\" jechuun maali?',opts:['La couverture','Le matelas','Le drap','L\'oreiller'],ans:3},
   ]},
   {id:'log',level:1,emoji:'🏠',name:'Mana Jireenyaa',sub:'Dabtaroo, daakuu… / Le logement',
   words:[
        // Types de logement
    {es:'Mana',fr:'La maison',em:'🏠'},
    {es:'Apartamaantii',fr:'L\'appartement',em:'🏢'},
    // Pièces principales
    {es:'Seensa / Galma dura',fr:'L\'entrée',em:'🚪'},
    {es:'Galma / Mana nyaataa',fr:'Le salon / la salle à manger',em:'🛋️'},
    {es:'Daakuu',fr:'La cuisine',em:'🍳'},
    {es:'Kutaa ciisichaa',fr:'La chambre',em:'🛏️'},
    {es:'Mana fincaanii / Dhiqachuu',fr:'La salle de bain',em:'🚿'},
    {es:'Mana fincaanii',fr:'Les toilettes',em:'🚽'},
    {es:'Mana konkolaataa',fr:'Le garage',em:'🚗'},
   ],
   quiz10:[
    {q:'\"Le salon\" Afaan Oromootti Oromiyaatti akkamitti jedhamaa?',opts:['Daakuu','Kutaa ciisichaa','Galma','Mana konkolaataa'],ans:2},
    {q:'\"Daakuu\" jechuun maali?',opts:['La salle à manger','La cuisine','La salle de bain','Le salon'],ans:1},
    {q:'\"La chambre\" Afaan Oromootti akkamitti jedhamaa?',opts:['Galma','Kutaa ciisichaa','Seensa','Mana konkolaataa'],ans:1},
    {q:'\"Mana fincaanii\" Oromiyaatti maal jechuudha?',opts:['La salle de bain','Le garage','Les toilettes','La salle à manger'],ans:2},
    {q:'\"L\'appartement\" Oromiyaatti akkamitti jedhamaa?',opts:['Mana','Seensa','Apartamaantii','Kutaa ciisichaa'],ans:2}
   ]},
   {id:'muebles_equipamiento', level:1, emoji:'🪑', name:'Meeshaalee Manaa', sub:'Soofa, meeshaalee ummataa, dhiqachuu… / Meubles et équipements',
 words:[
    // Salon
    {es:'Soofa',fr:'Le canapé',em:'🛋️'},
    {es:'Teessoo qofaa',fr:'Le fauteuil',em:'💺'},
    {es:'Teessoo',fr:'La table',em:''},
    {es:'Sannaddaa',fr:'La chaise',em:'🪑'},
    {es:'Ibsaa',fr:'La lampe',em:'💡'},
    {es:'Mudaa kitaabaa',fr:'L\'étagère',em:''},
    // Chambre
    {es:'Siree',fr:'Le lit',em:'🛏️'},
    {es:'Amaaroo uffataa',fr:'L\'armoire',em:'🗄️'},
    {es:'Maardiima / Barrumsaa',fr:'Le bureau',em:'🖊️'},
    // Cuisine
    {es:'Friijiidara',fr:'Le réfrigérateur',em:'🧊'},
    {es:'Aawoo',fr:'Le four',em:'🔥'},
    {es:'Maaykirooweevii',fr:'Le micro-ondes',em:'🔲♨️'},
    {es:'Dhiqa meeshaa',fr:'L\'évier',em:'🚰'},
    // Salle de bain
    {es:'Dhiqa fuulaa',fr:'Le lavabo',em:'🚰'},
    {es:'Kuubii dhiqachuu',fr:'La baignoire',em:'🛁'},
    {es:'Shawara',fr:'La douche',em:'🚿'},
  ],
  quiz10:[
    {q:'\"Le canapé\" Afaan Oromootti akkamitti jedhamaa?',opts:['Teessoo qofaa','Sannaddaa','Soofa','Siree'],ans:2},
    {q:'\"Amaaroo uffataa\" jechuun maali?',opts:['Le bureau','L\'étagère','Le fauteuil','L\'armoire'],ans:3},
    {q:'\"Le réfrigérateur\" Afaan Oromootti Oromiyaatti akkamitti jedhamaa?',opts:['Aawoo','Maaykirooweevii','Friijiidara','Dhiqa meeshaa'],ans:2},
    {q:'\"Le four\" Afaan Oromootti akkamitti jedhamaa?',opts:['Maaykirooweevii','Aawoo','Dhiqa meeshaa','Dhiqa fuulaa'],ans:1},
    {q:'\"Mudaa kitaabaa\" jechuun maali?',opts:['La lampe','Le fauteuil','La chaise','L\'étagère'],ans:3},
    {q:'\"La baignoire\" Afaan Oromootti akkamitti jedhamaa?',opts:['Dhiqa fuulaa','Dhiqa meeshaa','Kuubii dhiqachuu','Shawara'],ans:2},
    {q:'\"Maardiima / Barrumsaa\" jechuun maali?',opts:['L\'armoire','Le lit','Le bureau','La table'],ans:2},
  ]},   
   {id:'emot',level:1,emoji:'😄',name:'Miira',sub:'Gammaduu, dadhabuu… / Les émotions',
   words:[
    {es:'Gammadaa / Gammatti',fr:'Content / Contente',em:'😊'},
    {es:'Baayyee gammadaa / Gammatti',fr:'Heureux / Heureuse',em:'😊'},
    {es:'Koolu / Kooltuu',fr:'Joyeux / Joyeuse',em:'😄'},
    {es:'Gadda / Gadditi',fr:'Triste / Triste',em:'😢'},
    {es:'Dadhabaa / Dadhabduu',fr:'Fatigué / Fatiguée',em:'😴'},
    {es:'Dallansuu / Dallantuu',fr:'Fâché / Fâchée',em:'😠'},
    {es:'Rifaatuu / Rifatii',fr:'Énervé / Énervée',em:'😠'},
    {es:'Sodaachuu',fr:'Avoir peur / Avoir peur',em:'😨'},
    {es:'Dhukkubsataa / Dhukkubsattuu',fr:'Malade / Malade',em:'🤒'},
    {es:'Dhukkubsataa xiqqoo',fr:'Malade / Malade',em:'🤒'},
    {es:'Yaaddoo / Yaaddoftuu',fr:'Inquiet / Inquiète',em:'😟'},
    {es:'Yaaddoo jabaa',fr:'Inquiet / Inquiète',em:'😟'},
    {es:'Dhiphina / Dhibaa',fr:'Stressé / Stressée',em:'😰'},
    {es:'Baay\'ee dhiphina',fr:'Stressé / Stressée',em:'😰'},
    {es:'Abdii kutaa / Manooftuu',fr:'Déçu / Déçue',em:'😞'},
    {es:'Jibba / Jibbitu',fr:'Déçu / Déçue',em:'😞'},
    {es:'Jaallachuu / Jaallattuu',fr:'Amoureux / Amoureuse',em:'😍'},
    {es:'Baay\'ee gaarii! / Roorroo!',fr:'C\'est super ! / C\'est cool !',em:'🌟'}
   ],
   quiz10:[
    {q:'\"Énervée\" Afaan Oromootti Oromiyaatti akkamitti jedhamaa?',opts:['Manooftuu','Dallantuu','Yaaddoftuu','Gammatti'],ans:1},
    {q:'\"Joyeuse\" Afaan Oromootti akkamitti jedhamaa?',opts:['Gadda','Dadhabduu','Kooltuu','Dhukkubsattuu'],ans:2},
    {q:'\"Fatigué\" Afaan Oromootti akkamitti jedhamaa?',opts:['Dhiphina','Dhukkubsataa','Yaaddoo','Dadhabaa'],ans:3},
    {q:'\"Dallantuu\" Oromiyaatti maal jechuudha?',opts:['Fatiguée','Contente','Fâchée','Malade'],ans:2},
    {q:'\"Roorroo!\" Oromiyaatti maal jechuudha?',opts:['Ça m\'énerve !','C\'est nul !','C\'est super ! / C\'est cool !','J\'ai peur !'],ans:2},
    {q:'\"Inquiète\" Afaan Oromootti akkamitti jedhamaa?',opts:['Dhibaa','Jaallattuu','Yaaddoftuu','Manooftuu'],ans:2},
    {q:'\"Sodaachuu\" jechuun maali?',opts:['Avoir faim','Avoir peur','Avoir froid','Avoir sommeil'],ans:1}
   ]},
  {id:'fam',level:1,emoji:'👨‍👩‍👧',name:'Maatii',sub:'Abbaa, haadha, ilma… / La famille',
   words:[
   {es:'Haadha / Haadha manaa',fr:'La mère / La maman',em:'👩'},
    {es:'Abbaa / Abbaa manaa',fr:'Le père / Le papa',em:'👨'},
    {es:'Intala',fr:'La fille',em:'👧'},
    {es:'Ilma',fr:'Le fils',em:'👦'},
    {es:'Obboleettii',fr:'La sœur',em:'👧'},
    {es:'Obboleessa',fr:'Le frère',em:'🧑'},
    {es:'Akoo / Awoo',fr:'La grand-mère',em:'👵'},
    {es:'Akaakayyuu / Awoo Abbaa',fr:'Le grand-père',em:'👴'},
    {es:'Niitii / Haadha manaa',fr:'La femme',em:'💑'},
    {es:'Abbaa warraa / Dhiirsa',fr:'Le mari',em:'💍'},
    {es:'Adaadaa / Haadha Abbaa (Oromiyaatti)',fr:'L\'oncle / La tante (aussi : mec / nana en argot)',em:'👨/👩'}
   ],
   quiz10:[
    {q:'\"Le père\" Afaan Oromootti akkamitti jedhamaa?',opts:['Dhiirsa','Ilma','Abbaa manaa yookiin Abbaa','Obboleessa'],ans:2},
    {q:'\"Haadha\" jechuun maali?',opts:['La fille','La sœur','La maman','La mère'],ans:3},
    {q:'\"Le frère\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ilma','Obboleessa','Abbaa','Dhiirsa'],ans:1},
    {q:'\"Obboleettii\" jechuun maali?',opts:['La mère','La grand-mère','La sœur','La fille'],ans:2},
    {q:'\"Le grand-père\" Afaan Oromootti akkamitti jedhamaa?',opts:['Abbaa','Dhiirsa','Ilma','Akaakayyuu'],ans:3},
    {q:'\"Akoo / Awoo\" jechuun maali?',opts:['La mère','La grand-mère','La sœur','La fille'],ans:1},
    {q:'\"La fille\" Afaan Oromootti akkamitti jedhamaa?',opts:['Obboleettii','Niitii','Intala','Haadha'],ans:2},
    {q:'Afaan Oromootti \"Adaadaa / Haadha Abbaa\" jechuun danda\'a…',opts:['Père / mère','Mec / nana','Frère / sœur','L\'oncle / La tante'],ans:1}
   ]},
  {id:'verb',level:1,emoji:'📝',name:'Yakkawwan',sub:'Ta\'uu, qabaachuu, deemuu… / Les verbes principaux',
   words:[
   {es:'Ta\'uu / Jiraachuu',fr:'Être',em:'🧑',conj:{es:['Ani nan ta\'a / jira','Ati ni ta\'a / jirta','Inni/Isheen ni ta\'a / jira','Nuti ni taana / jirra','Isin ni taastu / jirtu','Isaan ni ta\'u / jiru'],fr:['Je suis','Tu es','Il/Elle est','Nous sommes','Vous êtes','Ils/Elles sont']}},
    {es:'Qabaachuu',fr:'Avoir',em:'🤲',conj:{es:['Ani nan qabaadha','Ati ni qabaatta','Inni/Isheen ni qabaata','Nuti ni qabaanna','Isin ni qabaastu','Isaan ni qabaatu'],fr:['J\'ai','Tu as','Il/Elle a','Nous avons','Vous avez','Ils/Elles ont']}},
    {es:'Dubbachuu',fr:'Parler',em:'🗣️',conj:{es:['Ani nan dubbadha','Ati ni dubbatta','Inni/Isheen ni dubbata','Nuti ni dubbanna','Isin ni dubbastu','Isaan ni dubbatu'],fr:['Je parle','Tu parles','Il/Elle parle','Nous parlons','Vous parlez','Ils/Elles parlent']}},
    {es:'Jiraachuu',fr:'Habiter',em:'🏠',conj:{es:['Ani nan jiraadha','Ati ni jiraatta','Inni/Isheen ni jiraata','Nuti ni jiraanna','Isin ni jiraastu','Isaan ni jiraatu'],fr:['J\'habite','Tu habites','Il/Elle habite','Nous habitons','Vous habitez','Ils/Elles habitent']}},
    {es:'Deemuu',fr:'Aller',em:'🚶',conj:{es:['Ani nan deema','Ati ni deemta','Inni/Isheen ni deema','Nuti ni deemna','Isin ni deemtu','Isaan ni deemu'],fr:['Je vais','Tu vas','Il/Elle va','Nous allons','Vous allez','Ils/Elles vont']}},
    {es:'Jaalachuu',fr:'Aimer',em:'❤️',conj:{es:['Nan jaalladha','Ni jaallataa','Ni jaallata','Ni jaallannaа','Ni jaallattu','Ni jaallatu'],fr:['J\'aime','Tu aimes','Il/Elle aime','Nous aimons','Vous aimez','Ils/Elles aiment']}},
    {es:'Nyaachuu',fr:'Manger',em:'🍽️',conj:{es:['Ani nan nyaadha','Ati ni nyaatta','Inni/Isheen ni nyaata','Nuti ni nyaanna','Isin ni nyaastu','Isaan ni nyaatu'],fr:['Je mange','Tu manges','Il/Elle mange','Nous mangeons','Vous mangez','Ils/Elles mangent']}},
    {es:'Dhuguu',fr:'Boire',em:'🥤',conj:{es:['Ani nan dhuga','Ati ni dhugta','Inni/Isheen ni dhuga','Nuti ni dhugna','Isin ni dhugtu','Isaan ni dhugu'],fr:['Je bois','Tu bois','Il/Elle boit','Nous buvons','Vous buvez','Ils/Elles boivent']}},
    {es:'Rafuu',fr:'Dormir',em:'😴',conj:{es:['Ani nan rafaa','Ati ni rafta','Inni/Isheen ni rafa','Nuti ni rafna','Isin ni raftu','Isaan ni rafu'],fr:['Je dors','Tu dors','Il/Elle dort','Nous dormons','Vous dormez','Ils/Elles dorment']}},
    {es:'Deemuu miila',fr:'Marcher',em:'🚶‍♂️',conj:{es:['Ani nan deema miila','Ati ni deemta miila','Inni/Isheen ni deema miila','Nuti ni deemna miila','Isin ni deemtu miila','Isaan ni deemu miila'],fr:['Je marche','Tu marches','Il/Elle marche','Nous marchons','Vous marchez','Ils/Elles marchent']}},
    {es:'Fiiguu',fr:'Courir',em:'🏃‍♂️',conj:{es:['Ani nan fiiga','Ati ni fiigta','Inni/Isheen ni fiiga','Nuti ni fiigna','Isin ni fiigtu','Isaan ni fiigu'],fr:['Je cours','Tu cours','Il/Elle court','Nous courons','Vous courez','Ils/Elles courent']}},
    {es:'Dubbisuu',fr:'Lire',em:'📖',conj:{es:['Ani nan dubbisa','Ati ni dubbista','Inni/Isheen ni dubbisa','Nuti ni dubbisna','Isin ni dubbistu','Isaan ni dubbisu'],fr:['Je lis','Tu lis','Il/Elle lit','Nous lisons','Vous lisez','Ils/Elles lisent']}},
    {es:'Barreessuu',fr:'Écrire',em:'✍️',conj:{es:['Ani nan barreessa','Ati ni barreesta','Inni/Isheen ni barreessa','Nuti ni barreessina','Isin ni barreestu','Isaan ni barreesu'],fr:['J\'écris','Tu écris','Il/Elle écrit','Nous écrivons','Vous écrivez','Ils/Elles écrivent']}},
    {es:'Dhaggeeffachuu',fr:'Écouter',em:'🎧',conj:{es:['Ani nan dhaggeeffadha','Ati ni dhaggeeffatta','Inni/Isheen ni dhaggeeffata','Nuti ni dhaggeeffanna','Isin ni dhaggeeffastu','Isaan ni dhaggeeffatu'],fr:['J\'écoute','Tu écoutes','Il/Elle écoute','Nous écoutons','Vous écoutez','Ils/Elles écoutent']}},
    {es:'Ilaaluu',fr:'Regarder',em:'👀',conj:{es:['Ani nan ilaala','Ati ni ilaalta','Inni/Isheen ni ilaala','Nuti ni ilaalana','Isin ni ilaaltuu','Isaan ni ilaalu'],fr:['Je regarde','Tu regardes','Il/Elle regarde','Nous regardons','Vous regardez','Ils/Elles regardent']}},
    {es:'Barachuu',fr:'Apprendre',em:'🧠',conj:{es:['Ani nan baradha','Ati ni baratta','Inni/Isheen ni barata','Nuti ni baranna','Isin ni barastu','Isaan ni baratu'],fr:['J\'apprends','Tu apprends','Il/Elle apprend','Nous apprenons','Vous apprenez','Ils/Elles apprennent']}},
    {es:'Yaaduu',fr:'Penser',em:'🤔',conj:{es:['Ani nan yaada','Ati ni yaadda','Inni/Isheen ni yaada','Nuti ni yaadna','Isin ni yaaddu','Isaan ni yaadu'],fr:['Je pense','Tu penses','Il/Elle pense','Nous pensons','Vous pensez','Ils/Elles pensent']}},
    {es:'Misoomsuu / Kolfuu',fr:'Sourire',em:'😊',conj:{es:['Ani nan misoomsa','Ati ni misoosta','Inni/Isheen ni misooma','Nuti ni misoomsina','Isin ni misoostu','Isaan ni misoomu'],fr:['Je souris','Tu souris','Il/Elle sourit','Nous sourions','Vous souriez','Ils/Elles sourient']}},
    {es:'Fudhachuu',fr:'Prendre',em:'🤲',conj:{es:['Ani nan fudhadha','Ati ni fudhatta','Inni/Isheen ni fudhata','Nuti ni fudhanna','Isin ni fudhastu','Isaan ni fudhatu'],fr:['Je prends','Tu prends','Il/Elle prend','Nous prenons','Vous prenez','Ils/Elles prennent']}},
    {es:'Kennuu',fr:'Donner',em:'🤲',conj:{es:['Ani nan kenna','Ati ni kenta','Inni/Isheen ni kenna','Nuti ni kennina','Isin ni kentu','Isaan ni kennu'],fr:['Je donne','Tu donnes','Il/Elle donne','Nous donnons','Vous donnez','Ils/Elles donnent']}},
    {es:'Barbaaduu',fr:'Chercher',em:'🔍',conj:{es:['Ani nan barbaada','Ati ni barbaadda','Inni/Isheen ni barbaada','Nuti ni barbaadna','Isin ni barbaaddu','Isaan ni barbaadu'],fr:['Je cherche','Tu cherches','Il/Elle cherche','Nous chercons','Vous cherchez','Ils/Elles cherchent']}},
    {es:'Bituuu',fr:'Acheter',em:'🛒',conj:{es:['Ani nan bita','Ati ni bitta','Inni/Isheen ni bita','Nuti ni bitna','Isin ni bittu','Isaan ni bitu'],fr:['J\'achète','Tu achètes','Il/Elle achète','Nous achetons','Vous achetez','Ils/Elles achètent']}},
    {es:'Gurguruuu',fr:'Vendre',em:'💰',conj:{es:['Ani nan gurgura','Ati ni gurgurta','Inni/Isheen ni gurgura','Nuti ni gurgurna','Isin ni gurgurtu','Isaan ni gurguru'],fr:['Je vends','Tu vends','Il/Elle vend','Nous vendons','Vous vendez','Ils/Elles vendent']}},
    {es:'Kaffaltii kaffaluu',fr:'Payer',em:'💳',conj:{es:['Ani nan kaffala','Ati ni kaffalda','Inni/Isheen ni kaffala','Nuti ni kaffalina','Isin ni kaffaltu','Isaan ni kaffalu'],fr:['Je paie','Tu paies','Il/Elle paie','Nous payons','Vous payez','Ils/Elles paient']}},
    {es:'Hojjechuu',fr:'Travailler',em:'💼',conj:{es:['Ani nan hojjedha','Ati ni hojjetta','Inni/Isheen ni hojjeta','Nuti ni hojjenna','Isin ni hojjestu','Isaan ni hojjetu'],fr:['Je travaille','Tu travailles','Il/Elle travaille','Nous travaillons','Vous travaillez','Ils/Elles travaillent']}},
    {es:'Nyaata bilcheessuu',fr:'Cuisiner',em:'🍳',conj:{es:['Ani nan bilcheessa','Ati ni bilcheesta','Inni/Isheen ni bilcheessa','Nuti ni bilcheessina','Isin ni bilcheestu','Isaan ni bilcheesu'],fr:['Je cuisine','Tu cuisines','Il/Elle cuisine','Nous cuisinons','Vous cuisinez','Ils/Elles cuisinent']}},
    {es:'Qulqulleessuu',fr:'Nettoyer',em:'🧹',conj:{es:['Ani nan qulqulleessa','Ati ni qulqulleesta','Inni/Isheen ni qulqulleessa','Nuti ni qulqulleessina','Isin ni qulqulleestu','Isaan ni qulqulleesu'],fr:['Je nettoie','Tu nettoies','Il/Elle nettoie','Nous nettoyons','Vous nettoyez','Ils/Elles nettoient']}},
    {es:'Dhiqachuu',fr:'Se doucher',em:'🧼',conj:{es:['Ani nan dhiqadha','Ati ni dhiqatta','Inni/Isheen ni dhiqata','Nuti ni dhiqanna','Isin ni dhiqastu','Isaan ni dhiqatu'],fr:['Je me douche','Tu te douches','Il/Elle se douche','Nous nous douchons','Vous vous douchez','Ils/Elles se douchent']}},
    {es:'Ba\'uu / Deemuu',fr:'Partir',em:'🚪',conj:{es:['Ani nan ba\'a','Ati ni baata','Inni/Isheen ni ba\'a','Nuti ni baana','Isin ni baatu','Isaan ni ba\'u'],fr:['Je pars','Tu pars','Il/Elle part','Nous partons','Vous partez','Ils/Elles partent']}},
    {es:'Ga\'uu / Dhufuu',fr:'Arriver',em:'🛬',conj:{es:['Ani nan dhufa','Ati ni dhufta','Inni/Isheen ni dhufa','Nuti ni dhufna','Isin ni dhuftu','Isaan ni dhufu'],fr:['J\'arrive','Tu arrives','Il/Elle arrive','Nous arrivons','Vous arrivez','Ils/Elles arrivent']}},
    {es:'Waamuuu',fr:'Appeler',em:'📞',conj:{es:['Ani nan waama','Ati ni waamta','Inni/Isheen ni waama','Nuti ni waamna','Isin ni waamtu','Isaan ni waamu'],fr:['J\'appelle','Tu appelles','Il/Elle appelle','Nous appelons','Vous appelez','Ils/Elles appellent']}},
    {es:'Gaafachuu',fr:'Demander',em:'🙋‍♂️',conj:{es:['Ani nan gaafadha','Ati ni gaafatta','Inni/Isheen ni gaafata','Nuti ni gaafanna','Isin ni gaafastu','Isaan ni gaafatu'],fr:['Je demande','Tu demandes','Il/Elle demande','Nous demandons','Vous demandez','Ils/Elles demandent']}},
    {es:'Konkolaachisuu',fr:'Conduire',em:'🚗',conj:{es:['Ani nan konkolaachisa','Ati ni konkolaachista','Inni/Isheen ni konkolaachisa','Nuti ni konkolaachisina','Isin ni konkolaachistuu','Isaan ni konkolaachisu'],fr:['Je conduis','Tu conduis','Il/Elle conduit','Nous conduisons','Vous conduisez','Ils/Elles conduisent']}},
    {es:'Baay\'ee jaaladhu',fr:'Adorer (argot)',em:'😎',conj:{es:['Nan baay\'ee jaalladha','Ni baay\'ee jaallataa','Ni baay\'ee jaallata','Ni baay\'ee jaallannaа','Ni baay\'ee jaallattu','Ni baay\'ee jaallatu'],fr:['J\'adore','Tu adores','Il/Elle adore','Nous adorons','Vous adorez','Ils/Elles adorent']}}
  ],
   quiz10:[
    {q:'\"Nan baay\'ee jaalladha\" Afaan Oromootti maal jechuudha?',opts:['Ça m\'ennuie','Ça me fait peur','Ça me plaît / j\'adore','Suis fatigué'],ans:2},
    {q:'\"Isheen misooftee\" jechuun maali?',opts:['Elle crie','Elle pleure','Elle sourit','Elle chante'],ans:2},
    {q:'\"Tu conduis\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ni fiigta','Ni deemta miila','Ni konkolaachista','Ni ba\'ata'],ans:2},
    {q:'\"Nan baradha\" jechuun maali?',opts:['Tu enseignes','Tu écoutes','Tu apprends','Tu lis'],ans:2},
    {q:'\"Ni gurguru\" jechuun maali?',opts:['Ils achètent','Ils cherchent','Ils vendent','Ils donnent'],ans:2},
    {q:'\"Il dort\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ni fiiga','Ni deema miila','Ni rafa','Ni nyaata'],ans:2},
    {q:'\"Vous habitez\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ni jiraastu','Ni jiraanna','Ni jiraatu','Nan jiraadha'],ans:0},
    {q:'\"Nan nyaadha\" jechuun maali?',opts:['Tu bois','Tu manges','Tu dors','Tu marches'],ans:1},
    {q:'\"Meetiroo fudhata\" jechuun maali?',opts:['Il rate le métro','Il cherche le métro','Il prend le métro','Il attend le métro'],ans:2},
    {q:'\"Nan dubbadha\" jechuun maali?',opts:['Tu écoutes','Tu lis','Tu parles','Tu regardes'],ans:2},
    {q:'\"Ils mangent\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ni nyaanna','Ni nyaastu','Ni nyaatu','Nan nyaadha'],ans:2},
    {q:'\"Ni kennina\" jechuun maali?',opts:['Nous prenons','Nous vendons','Nous donnons','Nous recevons'],ans:2},
    {q:'\"Ni qulqulleessina\" jechuun maali?',opts:['Nous cuisinons','Nous nettoyons','Nous lavons','Nous rangeons'],ans:1},
    {q:'\"Ils boivent\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ni dhugna','Ni dhugtu','Nan dhuga','Ni dhugu'],ans:3},
    {q:'\"Tu penses\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ni dubbatta','Ni barbaadda','Ni yaadda','Ni ilaalta'],ans:2},
    {q:'\"Ni waamta\" jechuun maali?',opts:['Tu réponds','Tu appelles','Tu parles','Tu écoutes'],ans:1},
    {q:'\"J\'ai\" Afaan Oromootti akkamitti jedhamaa?',opts:['Nan ta\'a','Nan deema','Nan qabaadha','Nan dubbadha'],ans:2},
    {q:'\"Tu vas\" Afaan Oromootti akkamitti jedhamaa?',opts:['Nan ta\'a','Nan qabaadha','Nan dhufa','Ni deemta'],ans:3},
    {q:'\"Il part\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ni dhufa','Ni ba\'a','Ni deema','Ni ba\'uuf'],ans:1},
    {q:'Oromiyaatti \"Baasii fudhachuu\" jechuun…',opts:['Rater le bus','Prendre le bus','Attendre le bus','Chercher le bus'],ans:1},
    {q:'\"Nous travaillons\" Afaan Oromootti akkamitti jedhamaa?',opts:['Nan qulqulleessa','Nan bilcheessa','Ni hojjenna','Ni konkolaachisina'],ans:2},
    {q:'\"Ni gaafatu\" jechuun maali?',opts:['Ils répondent','Ils cherchent','Ils demandent','Ils écoutent'],ans:2},
    {q:'\"Tu arrives\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ni ba\'ata','Ni dhufa','Ni barbaadda','Ni kaffalta'],ans:1},
    {q:'\"Nan bita\" jechuun maali?',opts:['Tu vends','Tu cherches','Tu paies','Tu achètes'],ans:3},
    {q:'\"Inni dhiqata\" jechuun maali?',opts:['Il se lève','Il se douche','Il se repose','Il se lave'],ans:1},
    {q:'\"Tu cherches\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ni bitta','Ni hojjetta','Ni barbaadda','Ni yaadda'],ans:2},
    {q:'\"Isheen bilcheessa\" jechuun maali?',opts:['Elle mange','Elle cuisine','Elle nettoie','Elle lit'],ans:1},
    {q:'\"Nous parlons\" Afaan Oromootti akkamitti jedhamaa?',opts:['Nan dubbadha','Ni dubbanna','Ni dubbastu','Ni dubbatu'],ans:1},
    {q:'\"Tu lis\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ni dhaggeeffatta','Ni baratta','Ni dubbista','Ni ilaalta'],ans:2},
    {q:'\"Tu écris\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ni dubbista','Ni dhaggeeffatta','Ni ilaalta','Ni barreesta'],ans:3},
    {q:'\"Tu paies\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ni kenta','Ni fudhatta','Ni gurgurta','Ni kaffalda'],ans:3},
    {q:'\"Tu cours\" Afaan Oromootti akkamitti jedhamaa?',opts:['Ni deemta miila','Ni konkolaachista','Ni fiigta','Ni ba\'ata'],ans:2}
   ]},
  {id:'corps',level:1,emoji:'🧍',name:'Qaamaa',sub:'Mataa, harkaa, miila… / Le corps',
   words:[
    {es:'Mataa',fr:'La tête',em:'🗣️'},
    {es:'Rifeensa',fr:'Les cheveux',em:'💇‍♂️'},
    {es:'Ija / Ijaan',fr:'L\'œil / Les yeux',em:'👀'},
    {es:'Funyaan',fr:'Le nez',em:'👃'},
    {es:'Gurra / Gurraan',fr:'L\'oreille / Les oreilles',em:'👂'},
    {es:'Afaan',fr:'La bouche',em:'👄'},
    {es:'Hidhii',fr:'Les lèvres',em:'💋'},
    {es:'Arraba',fr:'La langue',em:'👅'},
    {es:'Ilkaan',fr:'La dent / Les dents',em:'🦷'},
    {es:'Morma',fr:'Le cou',em:''},
    {es:'Harka / Harkaafi',fr:'Le bras / Les bras',em:'💪'},
    {es:'Harka / Harkaan',fr:'La main / Les mains',em:'✋'},
    {es:'Quba / Qubaan',fr:'Le doigt / Les doigts',em:'☝️'},
    {es:'Quba miila',fr:'L\'ongle / Les ongles',em:'💅'},
    {es:'Dugda',fr:'Le dos',em:''},
    {es:'Garaa',fr:'Le ventre',em:'🫃'},
    {es:'Miila / Miilaan',fr:'La jambe / Les jambes',em:'🦵'},
    {es:'Miila jalaa / Miilaafi',fr:'Le pied / Les pieds',em:'🦶'},
    {es:'Onnee',fr:'Le cœur',em:'❤️'},
    {es:'Sammuu',fr:'Le cerveau',em:'🧠'},
    {es:'Lafee / Lafaan',fr:'L\'os / Les os',em:'🦴'}
   ],
   quiz10:[
    {q:'"La tête" Afaan Oromootti akkamitti jedhamaa?',opts:['Funyaan','Afaan','Mataa','Morma'],ans:2},
    {q:'"Ijaan" jechuun maali?',opts:['Les oreilles','Le nez','Les lèvres','Les yeux'],ans:3},
    {q:'"La main" Afaan Oromootti akkamitti jedhamaa?',opts:['Miila jalaa','Miila','Harka','Harka'],ans:3},
    {q:'"Funyaan" jechuun maali?',opts:['La bouche','Le nez','L\'oreille','Le cou'],ans:1},
    {q:'"La jambe" Afaan Oromootti akkamitti jedhamaa?',opts:['Harka','Miila','Miila jalaa','Dugda'],ans:1},
    {q:'"Sammuu" jechuun maali?',opts:['Le cœur','Le ventre','Le cerveau','L\'os'],ans:2},
    {q:'"Les dents" Afaan Oromootti akkamitti jedhamaa?',opts:['Hidhii','Arraba','Ilkaan','Gurraan'],ans:2},
    {q:'"Onnee" jechuun maali?',opts:['Le cerveau','Le cœur','L\'os','Le dos'],ans:1}
   ]},
  {id:'sante',level:1,emoji:'🏥',name:'Fayyaa',sub:'Doktora, farmaasiitii… / La santé',
   words:[
    {es:'Dhukkubbii / Nan dhukkuba',fr:'Faire mal / j\'ai mal (j\'ai mal à la tête)',em:'🤕'},
    {es:'Dhukkubbii qabaachuu',fr:'Avoir une douleur (plus formel)',em:'😣'},
    {es:'Ho\'a qaamaa',fr:'La fièvre',em:'🌡️'},
    {es:'Qufaa',fr:'La toux',em:'😮‍💨'},
    {es:'Xuruura fuulaa',fr:'Le mouchoir',em:'🤧'},
    {es:'Meeshaa ho\'a safaruu',fr:'Le thermomètre',em:'🌡️'},
    {es:'Beellama',fr:'Le rendez-vous',em:'📅'},
    {es:'Doktora / Doktoricha',fr:'Le médecin / La médecin',em:'🩺'},
    {es:'Dhukkubsataa',fr:'Le/la patient(e)',em:'🛏️'},
    {es:'Gorsaa fayyaa',fr:'La consultation médicale',em:'📋'},
    {es:'Narsii / Narsicha',fr:'L\'infirmier / L\'infirmière)',em:'👨‍⚕️'},
    {es:'Hospitaala',fr:'L\'hôpital',em:'🏥'},
    {es:'Reseeptii / Ajaja qorichaa',fr:'L\'ordonnance',em:'📋'},
    {es:'Farmaasiitii',fr:'La pharmacie',em:'🏪'},
    {es:'Qoricha',fr:'Le médicament',em:'💊'},
    {es:'Haaphii qoricha',fr:'Le comprimé',em:'💊'},
    {es:'Vaaksiniifi',fr:'Le vaccin',em:'💉'},
    {es:'Mallattoo madaa',fr:'Le pansement adhésif',em:'🩹'},
    {es:'Xaxaa madaa',fr:'Le bandage',em:'🩼'},
    {es:'Ambulaansii',fr:'L\'ambulance',em:'🚑'},
    {es:'Bakka ariifachiisaa',fr:'Les urgences',em:'🆘'}
   ],
   quiz10:[
    {q:'"L\'hôpital" Afaan Oromootti akkamitti jedhamaa?',opts:['Farmaasiitii','Hospitaala','Bakka ariifachiisaa','Gorsaa fayyaa'],ans:1},
    {q:'"Ho\'a qaamaa" jechuun maali?',opts:['La toux','La douleur','La fièvre','La grippe'],ans:2},
    {q:'"Le vaccin" Afaan Oromootti akkamitti jedhamaa?',opts:['Mallattoo madaa','Vaaksiniifi','Xaxaa madaa','Qoricha'],ans:1},
    {q:'"Le pansement" Oromiyaatti akkamitti jedhamaa?',opts:['Dhiyaannoo','Vaaksiniifi','Mallattoo madaa','Qoricha'],ans:2},
    {q:'"L\'ordonnance" Afaan Oromootti akkamitti jedhamaa?',opts:['Gorsaa fayyaa','Qoricha','Reseeptii / Ajaja qorichaa','Vaaksiniifi'],ans:2},
    {q:'"Les urgences" Afaan Oromootti akkamitti jedhamaa?',opts:['Doktora eeggannaa','Kutaa eeggannaa','Bakka ariifachiisaa','Gorsaa fayyaa'],ans:2},
    {q:'"Le thermomètre" Afaan Oromootti akkamitti jedhamaa?',opts:['Dhiibbaa','Meeshaa ho\'a safaruu','Ho\'a qaamaa','Dhiyaannoo'],ans:1},
    {q:'"Un rendez-vous médical" Afaan Oromootti akkamitti jedhamaa?',opts:['Daawwannaa','Beellama fayyaa','Reseeptii','Gorsaa fayyaa'],ans:1}
   ]},
  {id:'ocio', level:1, emoji:'⛰️', name:'Boqonnaa fi Bashannannaa', sub:'Ispoortii, dubbisuu, muuziqaa… / Les loisirs',
  words:[
    // Loisirs culturels
    {es:'Dubbisuu',fr:'La lecture',em:'📚'},
    {es:'Kitaaba',fr:'Le livre',em:'📖'},
    {es:'Muuziqaa',fr:'La musique',em:'🎵'},
    {es:'Siinimaa',fr:'Le cinéma',em:'🎬'},
    {es:'Tiyaatira',fr:'Le théâtre',em:'🎭'},
    // Sport général
    {es:'Ispoortii',fr:'Le sport',em:''},
    {es:'Kora miilaa',fr:'Le football',em:'⚽'},
    {es:'Daakuu bishaan',fr:'La natation',em:'🏊'},
    {es:'Biskileetii oofuu',fr:'Le cyclisme',em:'🚴'},
    {es:'Fiigichaa',fr:'L\'athlétisme',em:'🏃'},
    // Plein air
    {es:'Deemsa tulluutti',fr:'La randonnée',em:'🥾'},
    {es:'Deemsa karaa',fr:'La marche nordique',em:''},
    {es:'Naqata / Seenaa',fr:'La promenade',em:'🌳'},
    // Verbes utiles
    {es:'Taphaachuu',fr:'Jouer',em:'🎮'},
    {es:'Leenjii hojjechuu',fr:'Pratiquer',em:'💪'},
    {es:'Boqachuu',fr:'Se reposer',em:'😴'},
    {es:'Gammachuun fayyadamuu',fr:'Profiter / Apprécier',em:'😊'},
  ],
  quiz10:[
    {q:'"La randonnée" Afaan Oromootti akkamitti jedhamaa?',opts:['Naqata','Deemsa karaa','Fiigichaa','Deemsa tulluutti'],ans:3},
    {q:'"Daakuu bishaan" jechuun maali?',opts:['Le cyclisme','L\'athlétisme','La natation','Le football'],ans:2},
    {q:'"Le livre" Afaan Oromootti akkamitti jedhamaa?',opts:['Dubbisuu','Muuziqaa','Kitaaba','Siinimaa'],ans:2},
    {q:'"Fiigichaa" jechuun maali?',opts:['Le football','Le cyclisme','La natation','L\'athlétisme'],ans:3},
    {q:'"La marche nordique" Afaan Oromootti akkamitti jedhamaa?',opts:['Naqata','Deemsa tulluutti','Fiigichaa','Deemsa karaa'],ans:3},
    {q:'"Boqachuu" jechuun maali?',opts:['Jouer','Pratiquer','Apprécier','Se reposer'],ans:3},
    {q:'"Le cinéma" Afaan Oromootti akkamitti jedhamaa?',opts:['Tiyaatira','Muuziqaa','Dubbisuu','Siinimaa'],ans:3},
    {q:'"Biskileetii oofuu" jechuun maali?',opts:['La natation','L\'athlétisme','Le cyclisme','Le football'],ans:2},
    {q:'"Jouer" Afaan Oromootti akkamitti jedhamaa?',opts:['Leenjii hojjechuu','Gammachuun fayyadamuu','Boqachuu','Taphaachuu'],ans:3},
    {q:'"Naqata / Seenaa" jechuun maali?',opts:['La randonnée','La montagne','La campagne','La promenade'],ans:3},
    {q:'"Pratiquer" Afaan Oromootti akkamitti jedhamaa?',opts:['Taphaachuu','Gammachuun fayyadamuu','Leenjii hojjechuu','Boqachuu'],ans:2},
    {q:'"Gammachuun fayyadamuu" jechuun maali?',opts:['Se reposer','Jouer','Pratiquer','Profiter / Apprécier'],ans:3},
  ]
},  
   {id:'veth',level:1,emoji:'👗',name:'Uffata',sub:'Shartii, surrii… / Les vêtements',
   words:[
    // Niveau 1 — Vêtements du quotidien, très fréquents
    {es:'Shartii',fr:'Le t-shirt',em:'👕'},
    {es:'Shartii dheeraa',fr:'La chemise',em:'👔'},
    {es:'Surrii',fr:'Le pantalon',em:'👖'},
    {es:'Kophee / Shaakaalaa',fr:'Les chaussures / Les baskets',em:'👟'},
    {es:'Kaalseettii',fr:'Les chaussettes',em:'🧦'},
    // Niveau 2 — Vêtements courants, un peu plus spécifiques
    {es:'Uffata dubartii / Qanafee',fr:'La robe / La jupe',em:'👗'},
    {es:'Surrii gabaabaa',fr:'Le short',em:'🩳'},
    {es:'Jaakeetii / Uffata ho\'a',fr:'Le pull',em:'🧥'},
    {es:'Jaakeetii alaa',fr:'La veste',em:'🧥'},
    {es:'Kuullaa / Keeppii',fr:'Le chapeau / La casquette',em:'🎩'},
    // Niveau 3 — Accessoires et vêtements saisonniers
    {es:'Koobii guddaa',fr:'Le manteau',em:'🧥'},
    {es:'Shanxii morma',fr:'L\'écharpe',em:'🧣'},
    {es:'Gantii',fr:'Les gants',em:'🧤'},
    {es:'Kuullaa ho\'a',fr:'Le bonnet',em:'🎿'},
    {es:'Buursaa / Fardaa',fr:'Le sac / La poche',em:'👜'},
    {es:'Uffata bishaan',fr:'Le maillot de bain',em:'🩱'},
   ],
   quiz10:[
    {q:'"Le t-shirt" Afaan Oromootti akkamitti jedhamaa?',opts:['Jaakeetii','Shartii dheeraa','Shartii','Jaakeetii alaa'],ans:2},
    {q:'"Surrii dargaggeessaa" jechuun maali?',opts:['Le short','Le jean','La jupe','Le survêtement'],ans:1},
    {q:'"Les chaussures" Afaan Oromootti akkamitti jedhamaa?',opts:['Kaalseettii','Shaakaalaa','Kophee','Kuullaa'],ans:2},
    {q:'"Le pull" Oromiyaatti akkamitti jedhamaa?',opts:['Shanxii morma','Jaakeetii alaa','Jaakeetii / Uffata ho\'a','Koobii guddaa'],ans:2},
    {q:'"Le maillot de bain" Oromiyaatti akkamitti jedhamaa?',opts:['Uffata bishaan','Kuullaa ho\'a','Surrii gabaabaa','Kaalseettii'],ans:0},
    {q:'"Shanxii morma" jechuun maali?',opts:['Les gants','Le manteau','L\'écharpe','Le bonnet'],ans:2},
    {q:'"La robe" Afaan Oromootti akkamitti jedhamaa?',opts:['Qanafee','Uffata dubartii','Jaakeetii alaa','Jaakeetii'],ans:1},
    {q:'"Kaalseettii" jechuun maali?',opts:['Les chaussures','Les gants','Les chaussettes','Le maillot de bain'],ans:2}
   ]},
  {id:'pays',level:1,emoji:'🌍',name:'Biyyoota',sub:'Itoophiyaa, Oromiyaa… / Les pays',
   words:[
    // Niveau 1 — Pays proches & culturellement importants
    {es:'Faransaay',fr:'La France',em:'🇫🇷'},
    {es:'Itoophiyaa',fr:'L\'Éthiopie',em:'🇪🇹'},
    {es:'Keeniyaa',fr:'Le Kenya',em:'🇰🇪'},
    {es:'Xaaliyaanii',fr:'L\'Italie',em:'🇮🇹'},
    {es:'Beljiyoom',fr:'La Belgique',em:'🇧🇪'},
    {es:'Swiizerlaandii',fr:'La Suisse',em:'🇨🇭'},
    {es:'Jarman',fr:'L\'Allemagne',em:'🇩🇪'},
    {es:'Ingliizii',fr:'Le Royaume-Uni',em:'🇬🇧'},
    // Niveau 2 — Pays africains & francophones proches
    {es:'Jibuutii',fr:'Djibouti',em:'🇩🇯'},
    {es:'Somaaliyaa',fr:'La Somalie',em:'🇸🇴'},
    {es:'Sudaan',fr:'Le Soudan',em:'🇸🇩'},
    {es:'Braazil',fr:'Le Brésil',em:'🇧🇷'},
    {es:'Kaanaadaa',fr:'Le Canada',em:'🇨🇦'},
    {es:'Morokkoo',fr:'Le Maroc',em:'🇲🇦'},
    // Niveau 3 — Grandes puissances mondiales & pays plus distants
    {es:'Ameerikaa',fr:'Les États-Unis',em:'🇺🇸'},
    {es:'Rushiyaa',fr:'La Russie',em:'🇷🇺'},
    {es:'Chaayinaa',fr:'La Chine',em:'🇨🇳'},
    {es:'Jaappaan',fr:'Le Japon',em:'🇯🇵'},
    {es:'Hindii',fr:'L\'Inde',em:'🇮🇳'},
    {es:'Turkii',fr:'La Turquie',em:'🇹🇷'},
    {es:'Giriikii',fr:'La Grèce',em:'🇬🇷'},
    {es:'Awustiraaliyaa',fr:'L\'Australie',em:'🇦🇺'},
    {es:'Afrikaa Kibbaa',fr:'L\'Afrique du Sud',em:'🇿🇦'},
   ],
   quiz10:[
    {q:'"La France" Afaan Oromootti akkamitti jedhamaa?',opts:['Beljiyoom','Faransaay','Swiizerlaandii','Keeniyaa'],ans:1},
    {q:'"Jarman" jechuun maali?',opts:['Autriche','Pays-Bas','Allemagne','Danemark'],ans:2},
    {q:'"Le Brésil" Afaan Oromootti akkamitti jedhamaa?',opts:['Sudaan','Somaaliyaa','Braazil','Jibuutii'],ans:2},
    {q:'"Ingliizii" jechuun maali?',opts:['Irlande','Royaume-Uni','Écosse','Danemark'],ans:1},
    {q:'"Le Maroc" Afaan Oromootti akkamitti jedhamaa?',opts:['Jibuutii','Somaaliyaa','Morokkoo','Afrikaa Kibbaa'],ans:2},
    {q:'"La Turquie" Afaan Oromootti akkamitti jedhamaa?',opts:['Tuniiziyaa','Tailaandii','Turkii','Taanzaaniyaa'],ans:2},
    {q:'"Biyyoota Gadii" jechuun maali?',opts:['Belgique','Danemark','Pays-Bas','Luxembourg'],ans:2},
    {q:'"La Grèce" Afaan Oromootti akkamitti jedhamaa?',opts:['Turkii','Giriikii','Xaaliyaanii','Chaayinaa'],ans:1}
   ]},
  {id:'met',level:1,emoji:'💼',name:'Ogummaa',sub:'Doktora, barsiisaa… / Les professions',
   words:[
    // Niveau 1 — Métiers du quotidien, rencontrés très fréquemment
    {es:'Barataa / Barattuun',fr:'L\'étudiant / L\'étudiante',em:'🎓'},
    {es:'Barsiisaa / Barsiistuu',fr:'Le professeur / La professeure',em:'👩‍🏫'},
    {es:'Tajaajilaa / Tajaajiltu',fr:'Le serveur / La serveuse',em:'🍽️'},
    {es:'Gurgurataa / Gurgurattu',fr:'Le vendeur / La vendeuse',em:'🏪'},
    {es:'Oofaa taaksii',fr:'Le chauffeur de taxi / La chauffeuse de taxi',em:'🚕'},
    // Niveau 2 — Métiers courants, contextes santé & service
    {es:'Doktora',fr:'Le médecin / La médecin',em:'🩺'},
    {es:'Narsii',fr:'L\'infirmier / L\'infirmière',em:'👨‍⚕️'},
    {es:'Nyaata bilcheessaa',fr:'Le cuisinier / La cuisinière',em:'👨‍🍳'},
    // Niveau 3 — Métiers plus spécifiques ou lexicalement complexes
    {es:'Ogaa bishaan',fr:'Le plombier / La plombière',em:'🔧'},
    {es:'Ogaa kompiyuutaraa',fr:'L\'informaticien / L\'informaticienne',em:'💻'},
   ],
   quiz10:[
    {q:'"Le médecin" Afaan Oromootti akkamitti jedhamaa?',opts:['Barsiisaa','Doktora','Narsii','Nyaata bilcheessaa'],ans:1},
    {q:'"Barsiisaa" Oromiyaatti maal jechuudha?',opts:['L\'étudiant','Le directeur','Le professeur','Le concierge'],ans:2},
    {q:'"La serveuse" Oromiyaatti akkamitti jedhamaa?',opts:['Nyaata bilcheessaa','Tajaajiltu','Oofaa taaksii','Gurgurattu'],ans:1},
    {q:'"Barattuun" jechuun maali?',opts:['La professeure','L\'étudiante','La médecin','La vendeuse'],ans:1},
    {q:'"L\'infirmier" Afaan Oromootti akkamitti jedhamaa?',opts:['Doktora','Barsiisaa','Narsii','Tajaajilaa'],ans:2}
   ]},
  {id:'anim',level:1,emoji:'🐘',name:'Bineeldota',sub:'Saree, adurree, sangaa… / Les animaux',
   words:[
    // Niveau 1 — Animaux familiers & de la ferme, très connus
    {es:'Saree',fr:'Le chien',em:'🐶'},
    {es:'Adurree',fr:'Le chat',em:'🐱'},
    {es:'Simbiraa',fr:'L\'oiseau',em:'🐦'},
    {es:'Qurxummii',fr:'Le poisson (vivant)',em:'🐟'},
    {es:'Farda',fr:'Le cheval',em:'🐴'},
    {es:'Loon / Saree loon',fr:'La vache',em:'🐮'},
    {es:'Booyee',fr:'Le cochon',em:'🐷'},
    {es:'Lukkuu',fr:'La poule',em:'🐔'},
    {es:'Illeena',fr:'Le lapin',em:'🐰'},
    // Niveau 2 — Animaux courants (ferme, nature, sauvages connus)
    {es:'Qurxummii nyaataa',fr:'Le poisson (dans l\'assiette)',em:'🐟🍽️'},
    {es:'Sangaa',fr:'Le taureau',em:'🐂'},
    {es:'Molgaa',fr:'Le canard',em:'🦆'},
    {es:'Kormaa lukkuu',fr:'Le coq',em:'🐓'},
    {es:'Hoolaa / Hoolii',fr:'L\'agneau',em:'🐑'},
    {es:'Re\'ee',fr:'La chèvre',em:'🐐'},
    {es:'Harree',fr:'L\'âne',em:'🫏'},
    {es:'Arba',fr:'L\'éléphant',em:'🐘'},
    {es:'Dubbii',fr:'L\'ours',em:'🐻'},
    {es:'Qeerransaa',fr:'Le tigre',em:'🐯'},
    // Niveau 3 — Animaux plus rares, insectes, reptiles & lexique spécifique
    {es:'Qurxummii bishaaniin jiraatuu',fr:'Le dauphin',em:'🐬'},
    {es:'Harootii guddaa',fr:'La baleine',em:'🐳'},
    {es:'Ardiitii / Gombisuu',fr:'L\'aigle',em:'🦅'},
    {es:'Buraayyoo',fr:'Le papillon',em:'🦋'},
    {es:'Bofaa xixiqqaa',fr:'La grenouille',em:'🐸'},
    {es:'Bofa',fr:'Le serpent',em:'🐍'},
    {es:'Bofa lafa',fr:'Le lézard',em:'🦎'},
    {es:'Saappanaa',fr:'L\'araignée',em:'🕷️'},
    {es:'Hiyyeessa / Bineeldota xixiqqaa',fr:'Le moustique',em:'🦟'},
    {es:'Dirreetti',fr:'La fourmi',em:'🐜'},
   ],
   quiz10:[
    {q:'"Le chien" Afaan Oromootti akkamitti jedhamaa?',opts:['Adurree','Farda','Saree','Illeena'],ans:2},
    {q:'"Adurree" jechuun maali?',opts:['Le chien','Le chat','Le lapin','L\'oiseau'],ans:1},
    {q:'"Le cheval" Afaan Oromootti akkamitti jedhamaa?',opts:['Loon','Farda','Dubbii','Booyee'],ans:1},
    {q:'Oromiyaatti bineeldii mallattoo biyyaa eenyu?',opts:['Ardiitii','Sangaa','Arba','Farda'],ans:2},
    {q:'"L\'éléphant" Afaan Oromootti akkamitti jedhamaa?',opts:['Qeerransaa','Harootii guddaa','Arba','Dubbii'],ans:2},
    {q:'"Le papillon" Afaan Oromootti akkamitti jedhamaa?',opts:['Dirreetti','Buraayyoo','Saappanaa','Hiyyeessa'],ans:1},
    {q:'"Bofa" jechuun maali?',opts:['Le lézard','La grenouille','Le serpent','L\'insecte'],ans:2},
    {q:'"Le coq" Afaan Oromootti akkamitti jedhamaa?',opts:['Lukkuu','Qurxummii','Kormaa lukkuu','Molgaa'],ans:2},
    {q:'"Qurxummii bishaaniin jiraatuu" jechuun maali?',opts:['La baleine','Le requin','Le dauphin','Le poisson'],ans:2},
    {q:'"Re\'ee" jechuun maali?',opts:['La vache','Le cochon','L\'agneau','La chèvre'],ans:3},
    {q:'"Le taureau" Afaan Oromootti akkamitti jedhamaa?',opts:['Farda','Sangaa','Booyee','Loon'],ans:1},
    {q:'"Hoolaa / Hoolii" jechuun maali?',opts:['La vache','Le cochon','L\'agneau','La chèvre'],ans:2}
   ]},
  {id:'plan',level:1,emoji:'🌿',name:'Biqiltoota',sub:'Adaraa, muka, bosonaa… / Les plantes',
   words:[
    // Niveau 1 — Éléments naturels de base, très visuels
    {es:'Adaraa / Daadhii',fr:'La fleur',em:'🌸'},
    {es:'Muka',fr:'L\'arbre',em:'🌳'},
    {es:'Caasee',fr:'La feuille',em:'🍃'},
    {es:'Marga',fr:'L\'herbe',em:'🌱'},
    // 🟡 Niveau 2 — Espaces & végétaux plus spécifiques
    {es:'Bakkee miidhagoo',fr:'Le jardin',em:'🏡'},
    {es:'Daadhii diimaa',fr:'La rose',em:'🌹'},
    {es:'Bosonaa',fr:'La forêt',em:'🌲'},
    // 🔴 Niveau 3 — Vocabulaire plus précis ou contextuel
    {es:'Marga miidhagoo',fr:'La pelouse / Le gazon',em:'⛳'},
   ],
   quiz10:[
    {q:'"La fleur" Afaan Oromootti akkamitti jedhamaa?',opts:['Caasee','Adaraa / Daadhii','Marga miidhagoo','Daadhii diimaa'],ans:1},
    {q:'"Muka" jechuun maali?',opts:['La feuille','L\'herbe','L\'arbre','La fleur'],ans:2},
    {q:'"La rose" Afaan Oromootti akkamitti jedhamaa?',opts:['Adaraa','Caasee','Marga miidhagoo','Daadhii diimaa'],ans:3},
    {q:'"Bosonaa" jechuun maali?',opts:['Le jardin','La forêt','Le champ','Le parc'],ans:1},
    {q:'"Le jardin" Afaan Oromootti akkamitti jedhamaa?',opts:['Bosonaa','Muka','Bakkee miidhagoo','Adaraa'],ans:2}
   ]}  
];

  /* ========================================
   Afaan Oromoo → Français 🇪🇹 – Niveau 2
   14 situations de dialogues — Niveau A1
   Français débutant en Oromia
   © 2026 Sébastien Godet
======================================== */
 
var LEVEL2_THEMES = [
 
  /* 1 ── Saluer et prendre des nouvelles */
  {id:'salut2',level:2,emoji:'👋',name:'Nagaa gaafachuu',sub:'Saluer quelqu\'un',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans la rue',img:'🏘️',dialogue:[
      {s:'Lamma',es:'Akkam! Fayyaa?',fr:'Salut ! Ça va ?',side:'left'},
      {s:'Ayantu',es:'Gaarii, galatoomi! Ati hoo?',fr:'Bien, merci ! Et toi ?',side:'right'},
      {s:'Lamma',es:'Jiddu jiddu. Dadhabee jira.',fr:'Comme ci comme ça. Je suis fatigué.',side:'left'},
      {s:'Ayantu',es:'Yaa! Dhiifama.',fr:'Oh ! Je suis désolée.',side:'right'},
      {s:'Lamma',es:'Galatoomi. Haga wal arginu!',fr:'Merci. À plus !',side:'left'},
      {s:'Ayantu',es:'Itti aansuun!',fr:'À bientôt !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Au bureau le matin',img:'💼',dialogue:[
      {s:'Tolaa',es:'Akkam bultee! Fayyaan bulte?',fr:'Bonjour ! Comment tu vas ?',side:'left'},
      {s:'Caaltuu',es:'Gaarii, galatoomi. Atis hoo?',fr:'Bien, merci. Et toi ?',side:'right'},
      {s:'Tolaa',es:'Xiqqoo dadhabee. Bunaa barbaaddaa?',fr:'Un peu fatigué. Tu veux un café ?',side:'left'},
      {s:'Caaltuu',es:'Eeyyeen, mee. Galatoomi!',fr:'Oui, s\'il te plaît. Merci !',side:'right'},
      {s:'Tolaa',es:'Nagaan. Kunoo fudhadhu!',fr:'De rien. Voilà !',side:'left'}
    ]},
    {label:'Sit. 3',title:'Retrouver un ami en terrasse',img:'☀️',dialogue:[
      {s:'Gamachuu',es:'Akkam! Akkam jirta?',fr:'Salut ! Comment tu vas ?',side:'left'},
      {s:'Finfinnee',es:'Baay\'ee gaarii! Atis hoo?',fr:'Très bien ! Et toi ?',side:'right'},
      {s:'Gamachuu',es:'Gaarii. Haaraan hoo maaltu jira?',fr:'Bien. Quoi de neuf ?',side:'left'},
      {s:'Finfinnee',es:'Haaraan tokko hin jiru. Waa xuruuri fudhanna?',fr:'Rien de spécial. On prend quelque chose ?',side:'right'},
      {s:'Gamachuu',es:'Yaada gaarii! Dheebuu dhabe.',fr:'Bonne idée ! J\'ai soif.',side:'left'},
      {s:'Finfinnee',es:'Anaanis!',fr:'Moi aussi !',side:'right'}
    ]}
   ],
   vocab:['Fayyaa? / Akkam? = Ça va ?','Gaarii, galatoomi = Bien, merci','Jiddu jiddu = Comme ci comme ça','Dadhabee jira = Je suis fatigué','Dhiifama = Je suis désolé(e)','Haga wal arginu! = À plus !','Haaraan maaltu jira? = Quoi de neuf ?'],
   quiz:[
    {q:'Jechuun "Jiddu jiddu" maal jechuudha?',opts:['Très bien','Très mal','Comme ci comme ça','Je suis fatigué'],ans:2},
    {q:'Afaan Oromootti "Je suis désolé" akkamiin jedha?',opts:['Galatoomi','Dhiifama','Nagaan','Dhiisi'],ans:1},
    {q:'Jechuun "Haga wal arginu!" maal jechuudha?',opts:['Bonjour !','Merci !','À plus !','S\'il vous plaît !'],ans:2}
   ]},
 
  /* 2 ── Se présenter */
  {id:'pres2',level:2,emoji:'🙋',name:'Ofbeeksisuu',sub:'Se présenter',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans un cours d\'oromo',img:'📚',dialogue:[
      {s:'Barsiistuu',es:'Akkam! Maqaan kee eenyu?',fr:'Bonjour ! Tu t\'appelles comment ?',side:'right'},
      {s:'Marc',es:'Maqaan koo Marc. Atis hoo?',fr:'Je m\'appelle Marc. Et toi ?',side:'left'},
      {s:'Barsiistuu',es:'Ani Bontu. Lammii kamii ta\'a, Marc?',fr:'Je suis Laura. Tu es d\'où, Marc ?',side:'right'},
      {s:'Marc',es:'Lammii Firaansaay, Paarisii irraa. Atis hoo?',fr:'Je suis de France, de Paris. Et toi ?',side:'left'},
      {s:'Barsiistuu',es:'Ani Shaashamannee irraa. Baga nagaan dhufte!',fr:'Je suis de Shashemene. Bienvenue !',side:'right'},
      {s:'Marc',es:'Galatoomi!',fr:'Merci !',side:'left'}
    ]},
    {label:'Sit. 2',title:'Rencontre dans le quartier',img:'🏙️',dialogue:[
      {s:'Ollaa',es:'Akkam! Haaraa taatee as jirtaa?',fr:'Bonjour ! Tu es nouveau ici ?',side:'right'},
      {s:'Julie',es:'Eeyyeen. Maqaan koo Julie. Ani Firaansaayiidha.',fr:'Oui. Je m\'appelle Julie. Je suis française.',side:'left'},
      {s:'Ollaa',es:'Ani Abirraa. Afaan Oromo dubbattaa?',fr:'Moi je suis Antonio. Tu parles oromo ?',side:'right'},
      {s:'Julie',es:'Xiqqoo. Barachuun jira.',fr:'Un peu. Je suis en train d\'apprendre.',side:'left'},
      {s:'Ollaa',es:'Baay\'ee gaarii! Afaan Oromoo kee gaariidha.',fr:'Très bien ! Ton oromo est bon.',side:'right'},
      {s:'Julie',es:'Galatoomi! Baay\'ee gaariidha.',fr:'Merci ! Tu es très gentil.',side:'left'}
    ]},
    {label:'Sit. 3',title:'À une fête',img:'🎉',dialogue:[
      {s:'Intala',es:'Akkam! Maqaan kee eenyu?',fr:'Salut ! Tu t\'appelles comment ?',side:'right'},
      {s:'Thomas',es:'Thomas. Atis hoo?',fr:'Thomas. Et toi ?',side:'left'},
      {s:'Intala',es:'Ani Hawi. Lammii Firaansaayiitii?',fr:'Moi je suis Hawi. Tu es français ?',side:'right'},
      {s:'Thomas',es:'Eeyyeen, Liyonii irraa. Atis Shaashamannee irraa?',fr:'Oui, je suis de Lyon. Et toi tu es de Shashemene ?',side:'left'},
      {s:'Intala',es:'Lakki, Adaamaatii. Gammadeen si arge!',fr:'Non, je suis d\'Adama. Enchantée !',side:'right'},
      {s:'Thomas',es:'Gammadeen si arge!',fr:'Enchanté !',side:'left'}
    ]}
   ],
   vocab:['Maqaan koo = Je m\'appelle','Lammii kamii? = Tu es d\'où ?','Irraa dhufa = Je suis de','Lammii Firaansaayiidha = Je suis français(e)','Barachuun jira = Je suis en train d\'apprendre','Baga nagaan dhufte! = Bienvenue !','Gammadeen si arge! = Enchanté(e) !'],
   quiz:[
    {q:'Afaan Oromootti "Je m\'appelle" akkamiin jedha?',opts:['Ani','Maqaan koo','Qabaa','Jiraadha'],ans:1},
    {q:'Jechuun "Lammii kamii?" maal jechuudha?',opts:['Comment tu t\'appelles ?','Quel âge tu as ?','Tu es d\'où ?','Tu habites où ?'],ans:2},
    {q:'Afaan Oromootti "Enchanté" akkamiin jedha?',opts:['Galatoomi','Dhiifama','Nagaan','Gammadeen si arge!'],ans:3}
   ]},
 
  /* 3 ── Demander son chemin */
  {id:'chemin2',level:2,emoji:'🗺️',name:'Karaa gaafachuu',sub:'Demander son chemin',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Trouver la gare',img:'🚉',dialogue:[
      {s:'Daawwataa',es:'Dhiifama, buufatni traakinii eessa jira?',fr:'Pardon, où est la gare ?',side:'left'},
      {s:'Dubartii',es:'Kallattiin deemi ergasii bitaatti garagalii.',fr:'Continue tout droit et tourne à gauche.',side:'right'},
      {s:'Daawwataa',es:'Fagoo jiraa?',fr:'C\'est loin ?',side:'left'},
      {s:'Dubartii',es:'Lakki, dhiyoo jira. Daqiiqaa shan qofa.',fr:'Non, c\'est près. C\'est cinq minutes.',side:'right'},
      {s:'Daawwataa',es:'Baay\'ee galatoomi.',fr:'Merci beaucoup.',side:'left'},
      {s:'Dubartii',es:'Nagaan!',fr:'De rien !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Trouver une pharmacie',img:'💊',dialogue:[
      {s:'Marc',es:'Dhiifama, farmaasinni dhiyotti jiraa?',fr:'Pardon, il y a une pharmacie près d\'ici ?',side:'left'},
      {s:'Dargagoo',es:'Eeyyeen. Dallaa kana gaditti qajeeli ergasii mirgutti garagali.',fr:'Oui. Descends cette rue et tourne à droite.',side:'right'},
      {s:'Marc',es:'Baankii booda?',fr:'Après la banque ?',side:'left'},
      {s:'Dargagoo',es:'Eeyyeen, siruma. Balballi gurraacha isa.',fr:'Oui, exactement. C\'est la porte verte.',side:'right'},
      {s:'Marc',es:'Amma banama jiraa?',fr:'Elle est ouverte maintenant ?',side:'left'},
      {s:'Dargagoo',es:'Eeyyeen, nan yaada.',fr:'Oui, je crois que oui.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Trouver un supermarché',img:'🛒',dialogue:[
      {s:'Julie',es:'Dhiifama, suupaarmaarketni as jiraa?',fr:'Pardon, il y a un supermarché ici ?',side:'left'},
      {s:'Jaarsa',es:'Eeyyeen, fuulduritti jira, kaafee cinaa.',fr:'Oui, il est en face, à côté du bar.',side:'right'},
      {s:'Julie',es:'Mirgutti moo bitaatti?',fr:'À droite ou à gauche ?',side:'left'},
      {s:'Jaarsa',es:'Mirgutti. Baay\'ee guddaadha.',fr:'À droite. Il est très grand.',side:'right'},
      {s:'Julie',es:'Baay\'ee gaarii! Galatoomi.',fr:'Parfait ! Merci.',side:'left'},
      {s:'Jaarsa',es:'Nagaan, guyyaan kee nagaa haa ta\'u!',fr:'De rien, bonne journée !',side:'right'}
    ]}
   ],
   vocab:['Dhiifama = Pardon / Excusez-moi','...eessa jira? = Où est... ?','Kallattiin = Tout droit','Bitaatti = À gauche','Mirgutti = À droite','Dhiyoo = Près','Fagoo = Loin'],
   quiz:[
    {q:'Afaan Oromootti "Tout droit" akkamiin jedha?',opts:['Mirgutti','Bitaatti','Kallattiin','Fuulduritti'],ans:2},
    {q:'Jechuun "Farmaasinni dhiyotti jiraa?" maal jechuudha?',opts:['La pharmacie est fermée','Il y a une pharmacie près d\'ici ?','Où est la pharmacie ?','La pharmacie est loin ?'],ans:1},
    {q:'Afaan Oromootti "À gauche" akkamiin jedha?',opts:['Kallattiin','Mirgutti','Duubatti','Bitaatti'],ans:3}
   ]},
 
  /* 4 ── Au bar */
  {id:'bar2',level:2,emoji:'☕',name:'Kaafee keessatti',sub:'Commander au café',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Commande simple',img:'☕',dialogue:[
      {s:'Maamilaa',es:'Akkam! Buna qara\'ee tokko, maaloo.',fr:'Bonjour ! Un café au lait, s\'il vous plaît.',side:'left'},
      {s:'Tajaajilaa',es:'Qara\'ee wajjin moo qullaa?',fr:'Noir ou au lait ?',side:'right'},
      {s:'Maamilaa',es:'Qara\'ee wajjin, maaloo.',fr:'Au lait, s\'il vous plaît.',side:'left'},
      {s:'Tajaajilaa',es:'Sukkaara barbaaddaa?',fr:'Vous voulez du sucre ?',side:'right'},
      {s:'Maamilaa',es:'Eeyyeen, tokko. Meeqadha?',fr:'Oui, un. C\'est combien ?',side:'left'},
      {s:'Tajaajilaa',es:'Birraa tokko fi saddet.',fr:'Un euro cinquante.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Commander de la nourriture',img:'🍢',dialogue:[
      {s:'Tajaajilaa',es:'Maal fudhattan?',fr:'Qu\'est-ce que vous prenez ?',side:'right'},
      {s:'Caaltuu',es:'Suufii tokko, maaloo.',fr:'Une bière, s\'il vous plaît.',side:'left'},
      {s:'Tolaa',es:'Anaan bishaanii tokko. Nyaata qabduu?',fr:'Et moi, une eau. Vous avez à manger ?',side:'right'},
      {s:'Tajaajilaa',es:'Eeyyeen. Injera fi tibs qabna.',fr:'Oui. Il y a de l\'injera et du tibs.',side:'right'},
      {s:'Caaltuu',es:'Baay\'ee gaarii! Tibs tokko, maaloo.',fr:'Parfait ! Du tibs, s\'il vous plaît.',side:'left'},
      {s:'Tajaajilaa',es:'Amma fida!',fr:'Tout de suite !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Payer l\'addition',img:'🧾',dialogue:[
      {s:'Maamilaa',es:'Kafaltii, maaloo.',fr:'L\'addition, s\'il vous plaît.',side:'left'},
      {s:'Tajaajilaa',es:'Birraa saddet.',fr:'C\'est huit euros.',side:'right'},
      {s:'Maamilaa',es:'Kaardiin kaffalamuudha?',fr:'On peut payer par carte ?',side:'left'},
      {s:'Tajaajilaa',es:'Eeyyeen, dhugumatti.',fr:'Oui, bien sûr.',side:'right'},
      {s:'Maamilaa',es:'Kunoo fudhii. Galatoomi.',fr:'Voilà. Merci.',side:'left'},
      {s:'Tajaajilaa',es:'Galatoomi! Itti aansuun wal arginaa!',fr:'Merci à vous ! À bientôt !',side:'right'}
    ]}
   ],
   vocab:['Buna qara\'ee = Un café au lait','Buna qullaa = Un café noir','Meeqadha? = C\'est combien ?','Kafaltii = L\'addition','Kaardiin kaffalamuudha? = On peut payer par carte ?','Tibs = Le tibs (viande grillée)','Amma fida! = Tout de suite !'],
   quiz:[
    {q:'Afaan Oromootti "Un café noir" akkamiin jedha?',opts:['Buna qara\'ee','Buna mi\'ooftuu','Buna qullaa','Buna qorraa'],ans:2},
    {q:'Jechuun "Kafaltii, maaloo" maal jechuudha?',opts:['Le menu, s\'il vous plaît','L\'addition, s\'il vous plaît','Un café, s\'il vous plaît','L\'eau, s\'il vous plaît'],ans:1},
    {q:'Afaan Oromootti "C\'est combien ?" akkamiin jedha?',opts:['Eessa jira?','Maaltu jira?','Meeqadha?','Maqaan isaanii eenyu?'],ans:2}
   ]},
 
  /* 5 ── Au restaurant */
  {id:'resto2',level:2,emoji:'🍽️',name:'Mana nyaataa keessatti',sub:'Commander un repas',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Avoir une table',img:'🪑',dialogue:[
      {s:'Maamilaa',es:'Akkam, nama lamaa teessoo qabduu?',fr:'Bonjour, vous avez une table pour deux ?',side:'left'},
      {s:'Tajaajilttuu',es:'Eeyyeen, as kottaa, maaloo.',fr:'Oui, par ici, s\'il vous plaît.',side:'right'},
      {s:'Maamilaa',es:'Galatoomi. Menuu guyyaa qabduu?',fr:'Merci. Vous avez le menu du jour ?',side:'left'},
      {s:'Tajaajilttuu',es:'Eeyyeen. Har\'a maraq, daadhii fi mi\'eessaa qabna.',fr:'Oui. Aujourd\'hui il y a soupe, dorho et dessert.',side:'right'},
      {s:'Maamilaa',es:'Menuu sun meeqa?',fr:'Le menu coûte combien ?',side:'left'},
      {s:'Tajaajilttuu',es:'Birraa kudha lama, dhugaatii dabalatee.',fr:'Douze euros, boisson comprise.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Commander à table',img:'🥗',dialogue:[
      {s:'Tajaajilaa',es:'Ajaja kennuuf qophaa\'taniittuu?',fr:'Vous êtes prêts à commander ?',side:'right'},
      {s:'Sophie',es:'Eeyyeen. Jalqaba, salaaxi tokko.',fr:'Oui. En entrée, une salade.',side:'left'},
      {s:'Tajaajilaa',es:'Booda hoo?',fr:'Et en plat ?',side:'right'},
      {s:'Sophie',es:'Daadhii, maaloo. Foon malee waa qabduu?',fr:'Le dorho, s\'il vous plaît. Vous avez quelque chose sans viande ?',side:'left'},
      {s:'Tajaajilaa',es:'Eeyyeen, atara mi\'ooftuu qabna.',fr:'Oui, il y a des légumes.',side:'right'},
      {s:'Sophie',es:'Baay\'ee gaarii, san barbaada.',fr:'Parfait, c\'est ça que je veux.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Un problème avec la commande',img:'🤔',dialogue:[
      {s:'Maamilaa',es:'Dhiifama, kuni ani ajaje miti.',fr:'Pardon, ce n\'est pas ce que j\'ai commandé.',side:'left'},
      {s:'Tajaajilaa',es:'Dhiifama. Maal ajajde?',fr:'Je suis désolé. Qu\'est-ce que vous avez commandé ?',side:'right'},
      {s:'Maamilaa',es:'Qurxummii ajajee, foon miti.',fr:'J\'ai commandé le poisson, pas la viande.',side:'left'},
      {s:'Tajaajilaa',es:'Dhiifama, amma jijjiira.',fr:'Excusez-moi, je le change tout de suite.',side:'right'},
      {s:'Maamilaa',es:'Galatoomi.',fr:'Merci.',side:'left'},
      {s:'Tajaajilaa',es:'Baay\'ee dhiifama!',fr:'Je suis vraiment désolé !',side:'right'}
    ]}
   ],
   vocab:['Nama lamaa teessoo qabduu? = Vous avez une table pour deux ?','Menuu guyyaa = Le menu du jour','Jalqaba = En entrée','Booda = En plat','Foon malee = Sans viande','Dhugaatii dabalatee = Boisson comprise','Kuni ani ajaje miti = Ce n\'est pas ce que j\'ai commandé'],
   quiz:[
    {q:'Oromiyaa keessatti "Menuu guyyaa" maal jechuudha?',opts:['La carte du soir','Le menu du jour à prix fixe','Le plat du chef','Un menu gastronomique'],ans:1},
    {q:'Afaan Oromootti "En entrée" akkamiin jedha?',opts:['Mi\'eessaa','Booda','Dhugaatiif','Jalqaba'],ans:3},
    {q:'Jechuun "Foon malee" maal jechuudha?',opts:['Avec de la viande','Sans poisson','Sans viande','Avec du poulet'],ans:2}
   ]},
 
  /* 6 ── Faire des courses */
  {id:'compras2',level:2,emoji:'🛍️',name:'Bitachuu',sub:'Faire ses courses',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Au marché',img:'🧺',dialogue:[
      {s:'Maamilaa',es:'Nagaan bultee. Toomaatiin meeqa?',fr:'Bonjour. Combien coûtent les tomates ?',side:'left'},
      {s:'Gurgurtaa',es:'Kiiloon birraa lama.',fr:'Deux euros le kilo.',side:'right'},
      {s:'Maamilaa',es:'Kiiloo tokko barbaada, maaloo.',fr:'Je veux un kilo, s\'il vous plaît.',side:'left'},
      {s:'Gurgurtaa',es:'Kan biraa hoo?',fr:'Autre chose ?',side:'right'},
      {s:'Maamilaa',es:'Eeyyeen, burtukaana qabduu?',fr:'Oui, vous avez des oranges ?',side:'left'},
      {s:'Gurgurtaa',es:'Eeyyeen. Kiiloon birraa tokko.',fr:'Oui. C\'est un euro le kilo.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Dans un magasin de vêtements',img:'👗',dialogue:[
      {s:'Tajaajilttuu',es:'Akkam! Si gargaaruu dandaahaa?',fr:'Bonjour ! Je peux vous aider ?',side:'right'},
      {s:'Lucie',es:'Eeyyeen, uffata barbaada.',fr:'Oui, je cherche un t-shirt.',side:'left'},
      {s:'Tajaajilttuu',es:'Saayiziin kee meeqa?',fr:'Vous faites quelle taille ?',side:'right'},
      {s:'Lucie',es:'Saayizii jiddugaleessa.',fr:'La taille moyenne.',side:'left'},
      {s:'Tajaajilttuu',es:'Yaaluu dandeessaa? Uffanno as jira.',fr:'Vous pouvez l\'essayer ? La cabine est là.',side:'right'},
      {s:'Lucie',es:'Galatoomi! Meeqa?',fr:'Merci ! Elle coûte combien ?',side:'left'}
    ]},
    {label:'Sit. 3',title:'À la caisse',img:'🛒',dialogue:[
      {s:'Kassaa',es:'Akkam! Hundayyuu gaariidha?',fr:'Bonjour ! Tout va bien ?',side:'right'},
      {s:'Maamilaa',es:'Eeyyeen, galatoomi. Waliigalatti meeqa?',fr:'Oui, merci. C\'est combien en tout ?',side:'left'},
      {s:'Kassaa',es:'Birraa kudha shan fi digdama.',fr:'C\'est quinze euros vingt.',side:'right'},
      {s:'Maamilaa',es:'Kaardiin kaffaluu dandaahaa?',fr:'Je peux payer par carte ?',side:'left'},
      {s:'Kassaa',es:'Eeyyeen, rakkoo tokko hin jiru.',fr:'Oui, sans problème.',side:'right'},
      {s:'Maamilaa',es:'Kunoo fudhii. Galatoomi!',fr:'Voilà. Merci !',side:'left'}
    ]}
   ],
   vocab:['Meeqa? = Combien ça coûte ?','Barbaada = Je veux','Kan biraa hoo? = Autre chose ?','Barbaada = Je cherche','Saayizii = La taille','Uffanno = La cabine d\'essayage','Waliigalatti meeqa? = C\'est combien en tout ?'],
   quiz:[
    {q:'Afaan Oromootti "Je cherche" akkamiin jedha?',opts:['Qabaa','Barbaada','Fudhaa','Bitaa'],ans:2},
    {q:'Jechuun "Kan biraa hoo?" maal jechuudha?',opts:['C\'est tout ?','Autre chose ?','Vous avez ça ?','C\'est combien ?'],ans:1},
    {q:'Afaan Oromootti "La taille" (uffata) akkamiin jedha?',opts:['Halluu','Gatii','Saayizii','Lakkoofsa'],ans:2}
   ]},
 
  /* 7 ── Prendre les transports */
  {id:'transp2',level:2,emoji:'🚌',name:'Geejjiba fayyadamuu',sub:'Se déplacer',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans le minibus',img:'🚌',dialogue:[
      {s:'Imaltuu',es:'Dhiifama, kuni bustii magaalaa gidduu deemaa?',fr:'Pardon, ce bus va au centre ?',side:'left'},
      {s:'Dubartii',es:'Lakki. Lakkoofsa lama fudhachuu qabda.',fr:'Non. Tu dois prendre le numéro deux.',side:'right'},
      {s:'Imaltuu',es:'Lakkoofsi lama eessa jira?',fr:'Où est le numéro deux ?',side:'left'},
      {s:'Dubartii',es:'Achitti, mirgutti.',fr:'Là-bas, à droite.',side:'right'},
      {s:'Imaltuu',es:'Buufatni meeqa?',fr:'C\'est combien d\'arrêts ?',side:'left'},
      {s:'Dubartii',es:'Buufata afur. Adaamaatti bu\'a.',fr:'Quatre arrêts. Tu descends à Adama.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Acheter un billet',img:'🎫',dialogue:[
      {s:'Imaltuu',es:'Akkam, tikkeettii tokko barbaada, maaloo.',fr:'Bonjour, je veux un billet, s\'il vous plaît.',side:'left'},
      {s:'Hojjettuu',es:'Tokko moo kudhan?',fr:'Simple ou carnet de dix ?',side:'right'},
      {s:'Imaltuu',es:'Tikkeettii tokkoon meeqa?',fr:'Combien coûte le billet simple ?',side:'left'},
      {s:'Hojjettuu',es:'Birraa tokko fi saddet. Kudhan birraa kudha lama.',fr:'Un euro cinquante. Le carnet de dix c\'est douze euros.',side:'right'},
      {s:'Imaltuu',es:'Kudhan barbaada.',fr:'Je veux le carnet de dix.',side:'left'},
      {s:'Hojjettuu',es:'Kunoo fudhii.',fr:'Voilà.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Dans le bajaj',img:'🛺',dialogue:[
      {s:'Imaltuu',es:'Dhiifama, kuni baajajni Shaashamannee deemaa?',fr:'Pardon, ce bajaj va à Shashemene ?',side:'left'},
      {s:'Jaarsa',es:'Lakki, kuni buufata xiyyaaraa deema.',fr:'Non, celui-ci va à l\'aéroport.',side:'right'},
      {s:'Imaltuu',es:'Baajajni kami Shaashamannee deema?',fr:'Quel bajaj va à Shashemene ?',side:'left'},
      {s:'Jaarsa',es:'Lakkoofsa digdama sadii.',fr:'Le numéro vingt-trois.',side:'right'},
      {s:'Imaltuu',es:'Buufatni eessa jira?',fr:'Où est l\'arrêt ?',side:'left'},
      {s:'Jaarsa',es:'Fuulduritti jira, dallaa biroo.',fr:'Il est en face, de l\'autre côté de la rue.',side:'right'}
    ]}
   ],
   vocab:['Bustii fudhachuu = Prendre le bus','Lakkoofsa = La ligne / Le numéro','Buufata = L\'arrêt','Tikkeettii tokkoo = Le billet simple','...tti bu\'uu = Descendre à','Buufatni meeqa? = Combien d\'arrêts ?','Baajajni = Le bajaj (taxi tricycle)'],
   quiz:[
    {q:'Afaan Oromootti "Prendre le bus" akkamiin jedha?',opts:['Bustii deemuu','Bustii fudhachuu','Bustii irraa bu\'uu','Bustii barbaaduu'],ans:1},
    {q:'Jechuun "Buufata" maal jechuudha?',opts:['Le billet','La ligne','L\'arrêt','Le quai'],ans:2},
    {q:'Afaan Oromootti "Descendre à Adama" akkamiin jedha?',opts:['Adaamaatti ol ba\'uu','Adaama deemuu','Adaamaatti bu\'uu','Adaama fudhachuu'],ans:2}
   ]},
 
  /* 8 ── À la pharmacie */
  {id:'farmacia2',level:2,emoji:'💊',name:'Farmaasiitti',sub:'À la pharmacie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Mal de tête',img:'🤕',dialogue:[
      {s:'Maamilaa',es:'Akkam. Mataan natti dhukkuba. Waa qabduu?',fr:'Bonjour. J\'ai mal à la tête. Qu\'est-ce que vous avez ?',side:'left'},
      {s:'Farmaasiistuu',es:'Qorichatti waan dhukkubsan qabdaa?',fr:'Vous êtes allergique à un médicament ?',side:'right'},
      {s:'Maamilaa',es:'Lakki, waan dhukkubsamu hin qabu.',fr:'Non, je ne suis pas allergique.',side:'left'},
      {s:'Farmaasiistuu',es:'Ayibuprofen siif kennaa. Nyaata wajjin tokko fudhu.',fr:'Je vous donne un ibuprofène. Prenez-en un avec de la nourriture.',side:'right'},
      {s:'Maamilaa',es:'Guyyaatti si\'a meeqa?',fr:'Combien de fois par jour ?',side:'left'},
      {s:'Farmaasiistuu',es:'Guyyaatti si\'a sadii, hanga ol.',fr:'Trois fois par jour, maximum.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Trouver la pharmacie de garde',img:'🌙',dialogue:[
      {s:'Daawwataa',es:'Dhiifama, farmaasinni amma banama jiruudha?',fr:'Pardon, il y a une pharmacie ouverte maintenant ?',side:'left'},
      {s:'Ollittuu',es:'Farmaasiileen cufamaniiru. Farmaasiitti kutaa waardiyaa deemuu qabda.',fr:'Les pharmacies sont fermées. Tu as besoin de la pharmacie de garde.',side:'right'},
      {s:'Daawwataa',es:'Eessa jira?',fr:'Elle est où ?',side:'left'},
      {s:'Ollittuu',es:'Farmaasiitti maxxanfame ilaaladhu. Isa banama jiru ibsa.',fr:'Regarde l\'affiche de cette pharmacie. Elle indique laquelle est ouverte.',side:'right'},
      {s:'Daawwataa',es:'Aah, gadi fageenyaan! Galatoomi.',fr:'Ah, je comprends ! Merci.',side:'left'},
      {s:'Ollittuu',es:'Nagaan!',fr:'De rien !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Acheter un médicament',img:'💉',dialogue:[
      {s:'Maamilaa',es:'Akkam. Qufaaf waa qabduu?',fr:'Bonjour. Vous avez quelque chose pour la toux ?',side:'left'},
      {s:'Farmaasiistuu',es:'Eeyyeen. Gurraachaa moo daa\'imaaf?',fr:'Oui. C\'est pour un adulte ou un enfant ?',side:'right'},
      {s:'Maamilaa',es:'Gurraachaaf.',fr:'Pour un adulte.',side:'left'},
      {s:'Farmaasiistuu',es:'Siiraabii kana fudhu. Saanikoo lama, guyyaatti si\'a sadii.',fr:'Prenez ce sirop. Deux cuillères, trois fois par jour.',side:'right'},
      {s:'Maamilaa',es:'Meeqadha?',fr:'Ça coûte combien ?',side:'left'},
      {s:'Farmaasiistuu',es:'Birraa shan fi saddet.',fr:'Cinq euros quatre-vingt.',side:'right'}
    ]}
   ],
   vocab:['Mataan natti dhukkuba = J\'ai mal à la tête','Qoonqoon natti dhukkuba = J\'ai mal à la gorge','Farmaasiitti waardiyaa = La pharmacie de garde','Waan dhukkubsamu hin qabu = Je ne suis pas allergique','Siiraabii = Le sirop','Guyyaatti si\'a sadii = Trois fois par jour','Maxxanfame = L\'affiche'],
   quiz:[
    {q:'Afaan Oromootti "J\'ai mal à la tête" akkamiin jedha?',opts:['Ho\'a qaba','Garaan natti dhukkuba','Mataan natti dhukkuba','Dadhabee jira'],ans:2},
    {q:'"Farmaasiitti waardiyaa" maal jechuudha?',opts:['La grande pharmacie','La pharmacie de garde ouverte la nuit','La pharmacie de l\'hôpital','La pharmacie pour touristes'],ans:1},
    {q:'Afaan Oromootti "Trois fois par jour" akkamiin jedha?',opts:['Guyyaatti si\'a lama','Guyyaatti si\'a tokko','Guyyaatti si\'a sadii','Guyyaatti si\'a afur'],ans:2}
   ]},
 
  /* 9 ── À l'hôtel */
  {id:'hotel2',level:2,emoji:'🏨',name:'Hootelatti',sub:'Arriver à l\'hôtel',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Arrivée à la réception',img:'🛎️',dialogue:[
      {s:'Simataa',es:'Gaarii bulee! Beellama qabduu?',fr:'Bonsoir ! Vous avez une réservation ?',side:'right'},
      {s:'Keessumaa',es:'Eeyyeen. Maqaan koo Dupont. Kutaa lama.',fr:'Oui. Je m\'appelle Dupont. Une chambre double.',side:'left'},
      {s:'Simataa',es:'Kunoo. Paaspoortii kee, maaloo?',fr:'Voilà. Votre passeport, s\'il vous plaît ?',side:'right'},
      {s:'Keessumaa',es:'Kunoo fudhii. Ciree dabalatamee?',fr:'Voilà. Le petit-déjeuner est inclus ?',side:'left'},
      {s:'Simataa',es:'Eeyyeen, torba irraa kudha.',fr:'Oui, de sept à dix heures.',side:'right'},
      {s:'Keessumaa',es:'Baay\'ee gaarii! Galatoomi.',fr:'Parfait ! Merci.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Un problème dans la chambre',img:'🔧',dialogue:[
      {s:'Keessumaa',es:'Akkam. Kutaa koo keessa rakkoo jira.',fr:'Bonjour. Il y a un problème dans ma chambre.',side:'left'},
      {s:'Simataa',es:'Maal ta\'e?',fr:'Qu\'est-ce qui se passe ?',side:'right'},
      {s:'Keessumaa',es:'Qilleensa kondishinii hin hojjetu.',fr:'La climatisation ne fonctionne pas.',side:'left'},
      {s:'Simataa',es:'Dhiifama. Kutaa jijjiiruu barbaaddaa?',fr:'Je suis désolé. Vous voulez changer de chambre ?',side:'right'},
      {s:'Keessumaa',es:'Eeyyeen, maaloo.',fr:'Oui, s\'il vous plaît.',side:'left'},
      {s:'Simataa',es:'Kunoo 320 cufaa fudhii.',fr:'Voilà la clé de la trois cent vingt.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Demander des infos',img:'🗺️',dialogue:[
      {s:'Keessumaa',es:'Dhiifama, mana nyaataa dhiyoo jiraa?',fr:'Pardon, il y a un restaurant près d\'ici ?',side:'left'},
      {s:'Simataa',es:'Eeyyeen, daqiiqaa lama keessa tokko baay\'ee gaarii jira.',fr:'Oui, il y en a un très bon à deux minutes.',side:'right'},
      {s:'Keessumaa',es:'Asitti waan daawwachuu dandaahamu jiraa?',fr:'Et il y a des choses à visiter ici ?',side:'left'},
      {s:'Simataa',es:'Eeyyeen, waldaan amantii baay\'ee dhiyoo jira.',fr:'Oui, l\'église est très près.',side:'right'},
      {s:'Keessumaa',es:'Har\'a banama jiraa?',fr:'Elle est ouverte aujourd\'hui ?',side:'left'},
      {s:'Simataa',es:'Eeyyeen, sagal irraa kudha jaha.',fr:'Oui, de neuf heures à dix-huit heures.',side:'right'}
    ]}
   ],
   vocab:['Beellama qabduu? = Vous avez une réservation ?','Kutaa lama = La chambre double','Ciree dabalatame = Le petit-déjeuner inclus','Hin hojjetu = Ça ne fonctionne pas','Kutaa jijjiiruu = Changer de chambre','Cufaa = La clé','Banama jiraa? = C\'est ouvert ?'],
   quiz:[
    {q:'Afaan Oromootti "La chambre double" akkamiin jedha?',opts:['Kutaa tokkee','Kutaa lama','Kutaa guddaa','Kutaa maatii'],ans:1},
    {q:'Jechuun "Hin hojjetu" maal jechuudha?',opts:['C\'est fermé','Ça ne marche pas','C\'est cassé','Je ne sais pas'],ans:1},
    {q:'Afaan Oromootti "La clé" akkamiin jedha?',opts:['Balbala','Mana','Cufaa','Ol ba\'aa'],ans:2}
   ]},
 
  /* 10 ── Chez le médecin */
  {id:'medico2',level:2,emoji:'🩺',name:'Doktoratti',sub:'Chez le médecin',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Expliquer ses symptômes',img:'🤒',dialogue:[
      {s:'Doktora',es:'Nagaan bulte! Maal sitti dhiphise?',fr:'Bonjour ! Qu\'est-ce qui ne va pas ?',side:'right'},
      {s:'Dhukkubsataa',es:'Ho\'a qabaa qoonqoos natti dhukkuba.',fr:'J\'ai de la fièvre et j\'ai mal à la gorge.',side:'left'},
      {s:'Doktora',es:'Yoomii irraa?',fr:'Depuis quand ?',side:'right'},
      {s:'Dhukkubsataa',es:'Kaleessa irraa.',fr:'Depuis hier.',side:'left'},
      {s:'Doktora',es:'Qufas qabdaa?',fr:'Vous avez aussi de la toux ?',side:'right'},
      {s:'Dhukkubsataa',es:'Eeyyeen, xiqqoo.',fr:'Oui, un peu.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Comprendre le médecin',img:'💊',dialogue:[
      {s:'Doktora',es:'Infekshinii qabda. Antibaayootiki siif barreessa.',fr:'Vous avez une infection. Je vous prescris un antibiotique.',side:'right'},
      {s:'Dhukkubsataa',es:'Qoricha yoom fudha?',fr:'Quand est-ce que je prends le médicament ?',side:'left'},
      {s:'Doktora',es:'Tokkoo ganamaatti fi tokkoo halkan.',fr:'Un le matin et un le soir.',side:'right'},
      {s:'Dhukkubsataa',es:'Guyyaa meeqa?',fr:'Pendant combien de jours ?',side:'left'},
      {s:'Doktora',es:'Guyyaa torba. Bishaan baay\'ee dhugi.',fr:'Sept jours. Et buvez beaucoup d\'eau.',side:'right'},
      {s:'Dhukkubsataa',es:'Galatoomi, doktera.',fr:'Merci, docteur.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Appeler le médecin',img:'📞',dialogue:[
      {s:'Dhukkubsataa',es:'Akkam, doktora beellama barbaada.',fr:'Bonjour, je veux un rendez-vous avec le médecin.',side:'left'},
      {s:'Simataa',es:'Yoom?',fr:'Pour quand ?',side:'right'},
      {s:'Dhukkubsataa',es:'Har\'a yoo danda\'ame. Baay\'ee dhukkubsadha.',fr:'Pour aujourd\'hui si c\'est possible. Je suis très malade.',side:'left'},
      {s:'Simataa',es:'Ho\'a qabduu?',fr:'Vous avez de la fièvre ?',side:'right'},
      {s:'Dhukkubsataa',es:'Eeyyeen, digdama sagal digrii.',fr:'Oui, trente-neuf degrés.',side:'left'},
      {s:'Simataa',es:'Sa\'aatii afuritti kottaa. Paaspoortii fidadhu.',fr:'Venez à seize heures. Apportez votre passeport.',side:'right'}
    ]}
   ],
   vocab:['Maal sitti dhiphise? = Qu\'est-ce qui ne va pas ?','Ho\'a qabaa = J\'ai de la fièvre','Qoonqoon natti dhukkuba = J\'ai mal à la gorge','Kaleessa irraa = Depuis hier','Qufa = La toux','Beellama = Un rendez-vous','Baay\'ee dhukkubsadha = Je suis très malade'],
   quiz:[
    {q:'Afaan Oromootti "J\'ai de la fièvre" akkamiin jedha?',opts:['Qorraan natti dhiphise','Ho\'a qabaa','Qufaa qabaa','Dhukkuba qabaa'],ans:1},
    {q:'Jechuun "Qoonqoon natti dhukkuba" maal jechuudha?',opts:['J\'ai mal à la tête','J\'ai mal au ventre','J\'ai mal à la gorge','J\'ai mal au dos'],ans:2},
    {q:'Afaan Oromootti "Un rendez-vous" akkamiin jedha?',opts:['Dirqama','Beellama','Mootummaa','Daawwannaa'],ans:1}
   ]},
 
  /* 11 ── La météo */
  {id:'meteo2',level:2,emoji:'☀️',name:'Qilleensa',sub:'Parler de la météo',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Parler du temps',img:'🌤️',dialogue:[
      {s:'Tulluu',es:'Har\'a baay\'ee ho\'aa!',fr:'Quelle chaleur aujourd\'hui !',side:'left'},
      {s:'Romain',es:'Eeyyeen, baay\'ee ho\'aa. Digrii meeqa?',fr:'Oui, il fait très chaud. Il fait combien de degrés ?',side:'right'},
      {s:'Tulluu',es:'Digrii soddomaa fi shan.',fr:'Trente-cinq degrés.',side:'left'},
      {s:'Romain',es:'Baay\'ee dha! As bishaan dhaabbataa jiraa?',fr:'C\'est beaucoup ! Il y a une piscine ici ?',side:'right'},
      {s:'Tulluu',es:'Eeyyeen, hootelatti jira.',fr:'Oui, elle est à l\'hôtel.',side:'left'},
      {s:'Romain',es:'Haa deemuun!',fr:'Allons-y !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Prévoir la sortie',img:'🌧️',dialogue:[
      {s:'Birraa',es:'Har\'a bahuun?',fr:'On sort aujourd\'hui ?',side:'left'},
      {s:'Camille',es:'Hin beeku. Qilleensi akkam?',fr:'Je ne sais pas. Il fait quel temps ?',side:'right'},
      {s:'Birraa',es:'Xiqqoo roobu.',fr:'Il pleut un peu.',side:'left'},
      {s:'Camille',es:'Arfasaa qabdaa?',fr:'Tu as un parapluie ?',side:'right'},
      {s:'Birraa',es:'Lakki. Atis?',fr:'Non. Et toi ?',side:'left'},
      {s:'Camille',es:'Ani qabaa. Waloon haa deemnu!',fr:'Moi oui. Allons-y ensemble !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Parler des seasons',img:'🍂',dialogue:[
      {s:'Caaltuu',es:'Yeroon bareedaan kee kami?',fr:'Quelle est ta saison préférée ?',side:'right'},
      {s:'Théo',es:'Gannaa. Aduu fi ho\'a jaalladha.',fr:'L\'été. J\'aime le soleil et la chaleur.',side:'left'},
      {s:'Caaltuu',es:'Ani birraa jaalladha. Hin qorruu hin ho\'u.',fr:'Moi je préfère l\'automne. Il ne fait ni chaud ni froid.',side:'right'},
      {s:'Théo',es:'Oromiyaa keessaas? Gannaa baay\'ee qorraa?',fr:'Et en Oromia ? Il fait très froid en hiver ?',side:'left'},
      {s:'Caaltuu',es:'Irratti. Shaashamanneetti eeyyeen, Adaamaatti miti.',fr:'Ça dépend. À Shashemene oui, à Adama non.',side:'right'},
      {s:'Théo',es:'Baay\'ee nama barsiisa!',fr:'Comme c\'est intéressant !',side:'left'}
    ]}
   ],
   vocab:['Ho\'aa! = Quelle chaleur !','Qorraa = Il fait froid','Ho\'aa = Il fait chaud','Roobu = Il pleut','Arfasaa = Le parapluie','Gannaa = L\'été','Bona = L\'hiver'],
   quiz:[
    {q:'Afaan Oromootti "Il fait froid" akkamiin jedha?',opts:['Ho\'aa','Aduu jira','Roobu','Qorraa'],ans:3},
    {q:'Jechuun "Ho\'aa baay\'ee!" maal jechuudha?',opts:['Quelle chance !','Quelle chaleur !','Quel froid !','Quel vent !'],ans:1},
    {q:'Afaan Oromootti "Le parapluie" akkamiin jedha?',opts:['Uffata ciicha','Haguugoo','Arfasaa','Kofii'],ans:2}
   ]},
 
  /* 12 ── Trouver un logement */
  {id:'logement2',level:2,emoji:'🏠',name:'Mana barbaaduu',sub:'Chercher un logement',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Appeler pour une maison',img:'📱',dialogue:[
      {s:'Maamilaa',es:'Akkam, mana kiraa irratti bilbilaa jira.',fr:'Bonjour, j\'appelle pour la maison en location.',side:'left'},
      {s:'Abbaa mana',es:'Eeyyeen. Nama meeqaaf?',fr:'Oui. Pour combien de personnes ?',side:'right'},
      {s:'Maamilaa',es:'Nama tokkoof. Kiraan meeqa?',fr:'Pour une personne. Le loyer c\'est combien ?',side:'left'},
      {s:'Abbaa mana',es:'Ji\'aatti birraa dhibba torba.',fr:'Sept cents euros par mois.',side:'right'},
      {s:'Maamilaa',es:'Gatiin dabalatamee?',fr:'Les charges sont incluses ?',side:'left'},
      {s:'Abbaa mana',es:'Lakki, gatiin addaadha.',fr:'Non, les charges sont en plus.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Visiter la maison',img:'🔑',dialogue:[
      {s:'Abbaa mana',es:'Galma guddaadha, ifaas jira.',fr:'Le salon est grand et très lumineux.',side:'right'},
      {s:'Maamilaa',es:'Nan jaalladha! Kutaa meeqa jira?',fr:'J\'aime bien ! Il a combien de chambres ?',side:'left'},
      {s:'Abbaa mana',es:'Kutaa lama fi mandaraa tokko.',fr:'Deux chambres et une salle de bain.',side:'right'},
      {s:'Maamilaa',es:'Ho\'isa qabaa?',fr:'Il y a le chauffage ?',side:'left'},
      {s:'Abbaa mana',es:'Eeyyeen, ho\'isaa jira.',fr:'Oui, il y a des radiateurs.',side:'right'},
      {s:'Maamilaa',es:'Yaaduu dandaahaa?',fr:'Je peux réfléchir ?',side:'left'}
    ]},
    {label:'Sit. 3',title:'Un problème dans la maison',img:'🔧',dialogue:[
      {s:'Kireessituu',es:'Akkam, rakkoo jira. Bishaan hin dhuftu.',fr:'Bonjour, il y a un problème. L\'eau ne fonctionne pas.',side:'left'},
      {s:'Abbaa mana',es:'Yoomii irraa?',fr:'Depuis quand ?',side:'right'},
      {s:'Kireessituu',es:'Har\'a ganama irraa.',fr:'Depuis ce matin.',side:'left'},
      {s:'Abbaa mana',es:'Amma hidhaata bishaan qaxaara.',fr:'Je vais appeler le plombier maintenant.',side:'right'},
      {s:'Kireessituu',es:'Har\'a dhufaa?',fr:'Il vient aujourd\'hui ?',side:'left'},
      {s:'Abbaa mana',es:'Eeyyeen, nan yaada.',fr:'Oui, je crois que oui.',side:'right'}
    ]}
   ],
   vocab:['Kiraa = Le loyer','Gatii = Les charges','Kutaalee = Les chambres','Ho\'isaa = Le chauffage','Kireessituu = Le locataire','Hidhaata bishaan = Le plombier','Gatiin addaadha = Les charges sont en plus'],
   quiz:[
    {q:'Jechuun "Gatiin addaadha" maal jechuudha?',opts:['Tout compris','Les charges sont incluses','Les charges sont en plus','C\'est gratuit'],ans:2},
    {q:'Afaan Oromootti "Le plombier" akkamiin jedha?',opts:['Ibsaa hojjetaa','Hidhaata bishaan','Muka hojjetaa','Barreessaa'],ans:1},
    {q:'Jechuun "Kiraa" maal jechuudha?',opts:['La vente','Le loyer','La maison','Le contrat'],ans:1}
   ]},
 
  /* 13 ── Parler de ses goûts */
  {id:'gustos2',level:2,emoji:'❤️',name:'Jaalala fi filannoowwan',sub:'Les loisirs',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Parler de musique',img:'🎵',dialogue:[
      {s:'Iftu',es:'Muuziiqaa jaallattaa?',fr:'Tu aimes la musique ?',side:'right'},
      {s:'Paul',es:'Eeyyeen, baay\'ee. Muuziiqaa Oromoo jaalladha.',fr:'Oui, beaucoup. J\'aime la musique oromo.',side:'left'},
      {s:'Iftu',es:'Sirbaa aadaa hoo?',fr:'Et la musique traditionnelle ?',side:'right'},
      {s:'Paul',es:'Anaas, garuu baay\'ee hin beeku.',fr:'Aussi, mais je ne connais pas beaucoup.',side:'left'},
      {s:'Iftu',es:'Har\'a halkan agarsiisni jira! Dhufaa?',fr:'Il y a un spectacle ce soir ! Tu viens ?',side:'right'},
      {s:'Paul',es:'Eeyyeen! Sa\'aatii meeqatti jalqabaa?',fr:'Oui ! Ça commence à quelle heure ?',side:'left'}
    ]},
    {label:'Sit. 2',title:'Parler de sport',img:'⚽',dialogue:[
      {s:'Taammiruu',es:'Ispoortii taphataa?',fr:'Tu pratiques un sport ?',side:'left'},
      {s:'Claire',es:'Eeyyeen, kubbaa miilaa baay\'ee jaalladha.',fr:'Oui, j\'aime beaucoup le football.',side:'right'},
      {s:'Taammiruu',es:'Dhugumatti? Anaanis! Har\'a halkan taphataa ilaalaa?',fr:'Vraiment ? Moi aussi ! Tu regardes le match ce soir ?',side:'left'},
      {s:'Claire',es:'Eeyyeen. Atis kubbaa miilaa taphataa?',fr:'Oui. Tu joues au football aussi ?',side:'right'},
      {s:'Taammiruu',es:'Eeyyeen, Dilbata michootaa wajjin.',fr:'Oui, le dimanche avec des amis.',side:'left'},
      {s:'Claire',es:'Baay\'ee gaariidha!',fr:'Super !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Proposer une activité',img:'🎬',dialogue:[
      {s:'Dassee',es:'Galgala kana maal goota?',fr:'Tu fais quoi cet après-midi ?',side:'left'},
      {s:'Marc',es:'Homaa. Maaliif?',fr:'Rien. Pourquoi ?',side:'right'},
      {s:'Dassee',es:'Siinimaa deemuu barbaaddaa?',fr:'Tu veux aller au cinéma ?',side:'left'},
      {s:'Marc',es:'Eeyyeen! Maal dhiyeessaa?',fr:'Oui ! Qu\'est-ce qu\'il y a ?',side:'right'},
      {s:'Dassee',es:'Fiilmii Firaansaay. Siinimaa Firaansaay jaalattaa?',fr:'Un film français. Tu aimes le cinéma français ?',side:'left'},
      {s:'Marc',es:'Baay\'ee jaalladha! Sa\'aatii meeqatti wal argina?',fr:'J\'adore ça ! On se retrouve à quelle heure ?',side:'right'}
    ]}
   ],
   vocab:['Jaalladha = J\'aime','Hin jaalladu = Je n\'aime pas','Baay\'ee jaalladha = J\'adore','Ispoortii taphataa? = Tu pratiques un sport ?','Taphaa = Le match','Maal dhiyeessaa? = Qu\'est-ce qu\'il y a (au cinéma) ?','Sa\'aatii meeqatti wal argina? = On se retrouve à quelle heure ?'],
   quiz:[
    {q:'Afaan Oromootti "J\'adore" akkamiin jedha?',opts:['Jaalladha','Hin jaalladu','Baay\'ee jaalladha','Jibba'],ans:2},
    {q:'Jechuun "Maal dhiyeessaa?" siinimaa keessatti maal jechuudha?',opts:['Ça coûte combien ?','À quelle heure ?','Qu\'est-ce qu\'il y a ?','C\'est où ?'],ans:2},
    {q:'Afaan Oromootti "Le match" akkamiin jedha?',opts:['Ispoortii','Garee','Taphaa','Dirree'],ans:2}
   ]},
 
  /* 14 ── Sortir le soir */
  {id:'fiesta2',level:2,emoji:'🎉',name:'Halkan bahu',sub:'Sortir le soir',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Organiser une sortie',img:'🎊',dialogue:[
      {s:'Nagaasaa',es:'Akkam! Halkan kana bahuun?',fr:'Salut ! On sort ce soir ?',side:'left'},
      {s:'Lea',es:'Eeyyeen! Eessa deemna?',fr:'Oui ! On va où ?',side:'right'},
      {s:'Nagaasaa',es:'Magaalaa gidduu kaafee baay\'ee bareedduu jira.',fr:'Il y a un café très sympa au centre.',side:'left'},
      {s:'Lea',es:'Gaarii! Sa\'aatii meeqatti?',fr:'Super ! À quelle heure ?',side:'right'},
      {s:'Nagaasaa',es:'Sa\'aatii kudha. Oromiyaatti halkan bahu.',fr:'À dix heures. En Oromia on sort tard.',side:'left'},
      {s:'Lea',es:'Tolee! Haga wal arginu!',fr:'D\'accord ! À plus tard !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Au café le soir',img:'🍺',dialogue:[
      {s:'Marc',es:'Muuziiqaan kun baay\'ee gaariidha! Sirbina?',fr:'Cette musique est super ! On danse ?',side:'left'},
      {s:'Gimbii',es:'Eeyyeen! Sirbuu baay\'ee jaalladha.',fr:'Oui ! J\'adore danser.',side:'right'},
      {s:'Marc',es:'Waa dhugachuu barbaaddaa?',fr:'Tu veux quelque chose à boire ?',side:'left'},
      {s:'Gimbii',es:'Eeyyeen, bishaan, maaloo. Ho\'aa dhabe.',fr:'Oui, une eau, s\'il te plaît. J\'ai chaud.',side:'right'},
      {s:'Marc',es:'Amma deebii\'a!',fr:'Je reviens tout de suite !',side:'left'},
      {s:'Gimbii',es:'Tolee!',fr:'D\'accord !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Le lendemain',img:'😴',dialogue:[
      {s:'Biyyee',es:'Akkam! Fayyaan jirtaa? Gara manaa sa\'aatii baay\'ee boodaa dhufe!',fr:'Salut ! Tu vas bien ? Je suis rentré tard à la maison !',side:'left'},
      {s:'Tom',es:'Anaanis! Garuu halkan gaariidha ture.',fr:'Moi aussi ! Mais c\'était une très bonne soirée.',side:'right'},
      {s:'Biyyee',es:'Eeyyeen, namooti baay\'ee gaarii turan.',fr:'Oui, les gens étaient très sympas.',side:'left'},
      {s:'Tom',es:'Har\'a waliin nyaanna?',fr:'On mange ensemble aujourd\'hui ?',side:'right'},
      {s:'Biyyee',es:'Eeyyeen! Nyaachuu barbaada. Baay\'ee beela\'ee jira.',fr:'Oui ! J\'ai besoin de manger. J\'ai très faim.',side:'left'},
      {s:'Tom',es:'Anaanis! Obsi booda ta\'a!',fr:'Moi aussi ! La sieste c\'est pour après !',side:'right'}
    ]}
   ],
   vocab:['Bahuun! = On sort !','Eessa deemna? = On va où ?','Oromiyaatti halkan bahu = En Oromia on sort tard','Tolee! = D\'accord !','Ho\'aa dhabe = J\'ai chaud','Beela\'ee jira = J\'ai faim','Obsi = La sieste'],
   quiz:[
    {q:'Jechuun "Tolee!" Oromiyaatti maal jechuudha?',opts:['Au revoir !','Allons-y !','D\'accord !','C\'est nul !'],ans:2},
    {q:'Afaan Oromootti "J\'ai faim" akkamiin jedha?',opts:['Dheebuu dhabe','Rafuu barbaada','Qorraa dhabe','Beela\'ee jira'],ans:3},
    {q:'Jechuun "Oromiyaatti halkan bahu" maal jechuudha?',opts:['En Oromia on rentre tard','En Oromia on travaille tard','En Oromia on sort tard','En Oromia on mange tard'],ans:2}
   ]}
 
];

var ALL_THEMES=LEVEL1_THEMES.concat(LEVEL2_THEMES);