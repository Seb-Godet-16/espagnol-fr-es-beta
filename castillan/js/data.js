/* ========================================
   Español Castillan → Français 🇪🇸 – Données
   Vocabulaire, quiz et dialogues
   © 2026 Sébastien Godet
======================================== */

var LEVEL1_THEMES=[
  {id:'alpha',level:1,emoji:'🔤',name:'El Alfabeto',sub:'A, B, C… Z / L\'alphabet',type:'alpha',
   words:[
    {es:'A',fr:'a',em:'✈️'},{es:'B',fr:'bé',em:'🎈'},
    {es:'C',fr:'cé (th devant e/i)',em:'☕'},{es:'D',fr:'dé',em:'💃'},
    {es:'E',fr:'e',em:'🏫'},{es:'F',fr:'efe',em:'🌸'},
    {es:'G',fr:'jé (devant e/i)',em:'🚉'},{es:'H',fr:'hache (muette)',em:'🏨'},
    {es:'I',fr:'i',em:'🏝️'},{es:'J',fr:'jota',em:'🌿'},
    {es:'K',fr:'ka',em:'⚖️'},{es:'L',fr:'ele',em:'🦁'},
    {es:'M',fr:'eme',em:'🏠'},{es:'N',fr:'ene',em:'🌙'},
    {es:'Ñ',fr:'eñe (son gn)',em:'🎵'},{es:'O',fr:'o',em:'🐦'},
    {es:'P',fr:'pé',em:'🍞'},{es:'Q',fr:'cu',em:'🏘️'},
    {es:'R',fr:'erre',em:'🌹'},{es:'S',fr:'ese',em:'☀️'},
    {es:'T',fr:'té',em:'🚂'},{es:'U',fr:'u',em:'1️⃣'},
    {es:'V',fr:'uve',em:'🌆'},{es:'W',fr:'uve doble',em:'🚃'},
    {es:'X',fr:'equis',em:'🎵'},{es:'Y',fr:'ye / i griega',em:'🥛'},
    {es:'Z',fr:'ceta (th en Espagne)',em:'0️⃣'}
   ],
   quiz10:[
    {q:'¿Qué letra escuchas?',audio:'B',opts:['A','B','C','D'],ans:1},
    {q:'¿Qué letra escuchas?',audio:'G',opts:['J','K','G','H'],ans:2},
    {q:'¿Qué letra escuchas?',audio:'Ñ',opts:['N','Ñ','M','L'],ans:1},
    {q:'¿Qué letra escuchas?',audio:'R',opts:['A','R','L','N'],ans:1},
    {q:'¿Qué letra escuchas?',audio:'Z',opts:['S','X','Z','C'],ans:2},
    {q:'¿Qué letra escuchas?',audio:'H',opts:['H','F','M','N'],ans:0},
    {q:'¿Qué letra escuchas?',audio:'K',opts:['C','G','K','Q'],ans:2},
    {q:'¿Qué letra escuchas?',audio:'Y',opts:['I','U','Y','E'],ans:2},
    {q:'¿Qué letra escuchas?',audio:'W',opts:['V','W','X','Y'],ans:1},
    {q:'¿Qué letra escuchas?',audio:'P',opts:['B','D','P','T'],ans:2}
   ]},
  {id:'salut',level:1,emoji:'👋',name:'Los Saludos',sub:'Buenos días, gracias… / Les salutations',
   words:[
    {es:'Buenos días / Buen día',fr:'Bonjour (le matin)',em:'🌅'},{es:'Buenas tardes',fr:'Bon après-midi',em:'🌆'},
    {es:'Buenas noches',fr:'Bonsoir / Bonne nuit',em:'🌙'},{es:'¡Hola!',fr:'Salut !',em:'👋'},
    {es:'Adiós / hasta luego',fr:'Au revoir / À bientôt',em:'👋'},{es:'Hasta pronto',fr:'À bientôt',em:'⏱️'},
    {es:'Gracias / Muchas gracias',fr:'Merci / Merci beaucoup',em:'🙏'},
    {es:'Por favor / De nada',fr:'S\'il vous plaît / De rien',em:'🤝'},
    {es:'Perdona / Perdone',fr:'Pardon / Excusez-moi',em:'🙇'},
    {es:'¡Venga! / ¡Vale!',fr:'Allez ! / D\'accord !',em:'👍'},
    {es:'Sí',fr:'Oui',em:'✅'},
    {es:'No',fr:'Non',em:'❌'},
    {es:'¿Cómo estás? o ¿Qué tal?',fr:'Comment ça va ?',em:'🤗'},
    {es:'Estoy bien, gracias',fr:'Je vais bien, merci',em:'😊'},
    {es:'Más o menos / Así así',fr:'Comme ci comme ça',em:'😐'},
    {es:'No estoy bien / No me encuentro bien',fr:'Je ne vais pas bien / Je n\'ai pas la forme',em:'😔'},
    {es:'¡Qué chulo! o ¡Guay!',fr:'C\'est cool ! / Super !',em:'🌟'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Bonjour (le matin)" en español?',opts:['Hola','Buenas tardes','Buenos días','Buenas noches'],ans:2},
    {q:'¿Qué significa "Adiós"?',opts:['À tout à l\'heure','Au revoir','Bonjour','Bonne nuit'],ans:1},
    {q:'¿Cómo se dice "Merci" en español?',opts:['Por favor','Perdona','Gracias','Sí'],ans:2},
    {q:'¿Qué significa "¡Vale!" en España?',opts:['Adieu','Allons-y !','D\'accord !','Bonne nuit'],ans:2},
    {q:'¿Cómo se dice "S\'il vous plaît" en español?',opts:['Gracias','Perdona','Por favor','Sí'],ans:2},
    {q:'¿Qué significa "¡Venga!" en España?',opts:['Viens !','Allez ! / D\'accord !','Non !','Peut-être !'],ans:1},
    {q:'¿Qué significa "¿Cómo estás?"?',opts:['Où es-tu ?','Comment tu t\'appelles ?','Comment vas-tu ?','Quel âge as-tu ?'],ans:2},
    {q:'¿Qué significa "¡Qué chulo!"?',opts:['Comme c\'est bizarre !','Comme c\'est cool !','Comme c\'est triste !','Comme c\'est grand !'],ans:1}
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
   ],
   quiz10:[
    {q:'¿Cómo se dice "Je m\'appelle" en español?',opts:['Soy','Me llamo','Vivo','Tengo'],ans:1},
    {q:'¿Qué significa "El apellido"?',opts:['Le prénom','L\'âge','Le nom de famille','La profession'],ans:2},
    {q:'¿Cómo se dice "J\'ai 25 ans" en español?',opts:['Soy 25 años','Vivo 25 años','Tengo 25 años','Hablo 25 años'],ans:2},
    {q:'¿Qué significa "La nacionalidad"?',opts:['Le pays','La ville','La profession','La nationalité'],ans:3},
    {q:'¿Cómo se dice "J\'habite à Madrid" en español?',opts:['Soy en Madrid','Vivo en Madrid','Voy en Madrid','Tengo Madrid'],ans:1},
    {q:'¿Qué significa "El nombre"?',opts:['Le nom de famille','Le prénom','L\'âge','La profession'],ans:1},
    {q:'¿Cómo se dice "Je suis espagnole" en español?',opts:['Soy francesa','Soy española','Vivo España','Hablo española'],ans:1},
    {q:'¿Qué significa "¿De dónde eres?"?',opts:['Quel âge as-tu ?','Comment t\'appelles-tu ?','D\'où es-tu ?','Où habites-tu ?'],ans:2}
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
    ],
   quiz10:[
    {q:'¿Cómo se dice "À gauche" en español?',opts:['A la derecha','Todo recto','A la izquierda','Enfrente'],ans:2},
    {q:'¿Qué significa "A la derecha"?',opts:['À gauche','Tout droit','À côté','À droite'],ans:3},
    {q:'¿Cómo se dice "Tout droit" en español?',opts:['A la izquierda','Todo recto o derecho','Enfrente','Al lado'],ans:1},
    {q:'¿Qué significa "Frente a / Enfrente"?',opts:['À côté','Derrière','En face','Près'],ans:2},
    {q:'¿Cómo se dice "Près" en español?',opts:['Lejos','Al lado','Cerca','Enfrente'],ans:2}
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
   ],
   quiz10:[
    {q:'¿Cómo se dice "La pharmacie" en español?',opts:['El banco','El hospital','La farmacia','El supermercado'],ans:2},
    {q:'¿Cómo se dice "La mairie" en España?',opts:['La iglesia','El tribunal','El ayuntamiento','El mercado'],ans:2},
    {q:'¿Cómo se dice "L\'hôpital" en español?',opts:['La farmacia','El ayuntamiento','El hospital','El banco'],ans:2},
    {q:'¿Qué es típicamente español y se encuentra en cada barrio?',opts:['Le supermarché','Le bar / Le café','La pharmacie','L\'école'],ans:1},
    {q:'¿Cómo se dice "La mer" en español?',opts:['El río','La montaña','El mar','El lago'],ans:2},
    {q:'¿Qué significa "El ayuntamiento"?',opts:['Le tribunal','La mairie','Le parlement','L\'université'],ans:1},
    {q:'¿Cómo se dice "La ville" en español?',opts:['La calle','El pueblo','La ciudad','La montaña'],ans:2},
    {q:'¿Qué significa "El banco"?',opts:['La pharmacie','La banque','La caisse','Le bureau'],ans:1}
   ]},
  {id:'nour',level:1,emoji:'🍽️',name:'La Comida',sub:'Pan, verduras, tapas… / La nourriture',
   words:[
    // Catégories générales d'abord
    {es:'Las frutas',fr:'Les fruits',em:'🍉'},
    {es:'Las verduras',fr:'Les légumes',em:'🥦'},
    // Féculents / base
    {es:'El pan',fr:'Le pain',em:'🍞'},
    {es:'El arroz',fr:'Le riz',em:'🍚'},
    {es:'Los macarrones / La pasta',fr:'Les pâtes',em:'🍝'},
    {es:'La patata / Las patatas fritas',fr:'La pomme de terre / Les frites',em:'🥔'},
    // Protéines
    {es:'La carne',fr:'La viande',em:'🥩'},
    {es:'El pollo',fr:'Le poulet',em:'🍗'},
    {es:'El pescado',fr:'Le poisson',em:'🐟'},
    {es:'El jamón',fr:'Le jambon',em:'🥩'},
    {es:'El chorizo',fr:'Le chorizo',em:''},
    {es:'El huevo',fr:'L\'œuf',em:'🥚'},
    // Produits laitiers
    {es:'El queso',fr:'Le fromage',em:'🧀'},
    {es:'La mantequilla',fr:'Le beurre',em:'🧈'},
    // Fruits
    {es:'La manzana',fr:'La pomme',em:'🍎'},
    {es:'El plátano / La banana',fr:'La banane',em:'🍌'},
    {es:'La naranja',fr:'L\'orange',em:'🍊'},
    {es:'El limón',fr:'Le citron',em:'🍋'},
    {es:'La fresa',fr:'La fraise',em:'🍓'},
    {es:'La sandía',fr:'La pastèque',em:'🍉'},
    // Légumes
    {es:'El tomate',fr:'La tomate',em:'🍅'},
    {es:'La zanahoria',fr:'La carotte',em:'🥕'},
    {es:'La cebolla',fr:'L\'oignon',em:'🧅'},
    {es:'El ajo',fr:'L\'ail',em:'🧄'},
    {es:'El pepino',fr:'Le concombre',em:'🥒'},
    {es:'La ensalada',fr:'La salade',em:'🥗'},
    // Condiments / épicerie
    {es:'El aceite de oliva',fr:'L\'huile d\'olive',em:'🫒'},
    {es:'La sal',fr:'Le sel',em:'🧂'},
    {es:'La pimienta',fr:'Le poivre',em:'🌶️'},
    {es:'La miel',fr:'Le miel',em:'🍯'},
    {es:'El chocolate',fr:'Le chocolat',em:'🍫'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le pain" en español?',opts:['El arroz','El pan','El queso','La mantequilla'],ans:1},
    {q:'¿Qué significa "El pollo"?',opts:['Le poisson','La viande','Le poulet','Le porc'],ans:2},
    {q:'¿Cómo se dice "L\'œuf" en español?',opts:['La mantequilla','El queso','La zanahoria','El huevo'],ans:3},
    {q:'¿Cómo se dice "La pomme" en español?',opts:['El plátano','La fresa','La manzana','La naranja'],ans:2},
    {q:'¿Cómo se dice "Les frites" en español de España?',opts:['Las patatas fritas','Los macarrones','Las tapas','El bocadillo'],ans:0},
    {q:'¿Cómo se dice "La pastèque" en español?',opts:['La fresa','La sandía','La uva','La naranja'],ans:1},
    {q:'¿Cómo se dice "La carotte" en español?',opts:['El pepino','La zanahoria','El tomate','La cebolla'],ans:1},
    {q:'¿Cómo se dice "La fraise" en español de España?',opts:['El plátano','La sandía','La fresa','La uva'],ans:2}
   ]},
  {id:'bois',level:1,emoji:'🥤',name:'Las Bebidas',sub:'Agua, café, vino… / Les boissons',
   words:[
    // Essentiels
    {es:'El agua',fr:'L\'eau',em:'💧'},
    {es:'El agua con gas',fr:'L\'eau gazeuse',em:'🫧'},
    {es:'La leche',fr:'Le lait',em:'🥛'},
    {es:'El zumo (de naranja)',fr:'Le jus (d\'orange)',em:'🍊'},
    {es:'El refresco / La gaseosa',fr:'Le soda',em:'🥤'},
    // Cafés
    {es:'El café (solo)',fr:'Le café noir',em:'☕'},
    {es:'El café con leche',fr:'Le café au lait',em:'☕'},
    {es:'El cortado',fr:'Le café avec un nuage de lait',em:'☕'},
    {es:'El té',fr:'Le thé',em:'🍵'},
    // Alcools
    {es:'El vino (tinto / blanco)',fr:'Le vin (rouge / blanc)',em:'🍷'},
    {es:'La cerveza',fr:'La bière',em:'🍺'},
    {es:'La sangría',fr:'La sangria',em:'🍷'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'eau" en español?',opts:['La leche','El zumo','El agua','El té'],ans:2},
    {q:'¿Qué es "El café solo" en España?',opts:['Un café au lait','Un café noir','Un café avec sucre','Un café froid'],ans:1},
    {q:'¿Cómo se dice "Le lait" en español?',opts:['La leche','El agua','El té','El zumo'],ans:0},
    {q:'¿Qué significa "El zumo"?',opts:['Le vin','La bière','La limonade','Le jus'],ans:3},
    {q:'¿Cómo se llama la bebida española con vino y frutas?',opts:['La cerveza','La sangría','El refresco','El cortado'],ans:1},
    {q:'¿Qué es "El cortado"?',opts:['Un café noir','Une bière','Un café avec un nuage de lait','Un jus d\'orange'],ans:2},
    {q:'¿Cómo se dice "Le thé" en español?',opts:['El café','El té','La leche','El agua'],ans:1},
    {q:'¿Cómo se dice "L\'eau gazeuse" en español?',opts:['El agua fría','El agua mineral','El agua con gas','La gaseosa'],ans:2}
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
 ],
   quiz10:[
    {q:'¿Qué número es "Cinco"?',opts:['4','6','5','7'],ans:2},
    {q:'¿Cómo se dice 12 en español?',opts:['Once','Doce','Trece','Diez'],ans:1},
    {q:'¿Cómo se dice 16 en español?',opts:['Quince','Diecisiete','Dieciséis','Trece'],ans:2},
    {q:'¿Qué número es "Nueve"?',opts:['7','8','10','9'],ans:3},
    {q:'¿Cómo se dice 20 en español?',opts:['Diecinueve','Veinte','Quince','Dieciocho'],ans:1},
    {q:'¿Qué número es "Trece"?',opts:['12','11','14','13'],ans:3},
    {q:'¿Cómo se dice 8 en español?',opts:['Siete','Nueve','Ocho','Seis'],ans:2},
    {q:'¿Qué número es "Catorce"?',opts:['15','13','14','12'],ans:2},
    {q:'¿Cómo se dice 30 en español?',opts:['Veinte','Cuarenta','Treinta','Cincuenta'],ans:2},
    {q:'¿Qué número es "Setenta"?',opts:['60','80','90','70'],ans:3},
    {q:'¿Cómo se dice 50 en español?',opts:['Sesenta','Cincuenta','Cuarenta','Setenta'],ans:1},
    {q:'¿Qué número es "Ochenta"?',opts:['70','90','80','60'],ans:2},
    {q:'¿Cómo se dice 100 en español?',opts:['Mil','Ciento','Cien','Noventa'],ans:2},
    {q:'¿Qué número es "Quinientos"?',opts:['400','600','300','500'],ans:3},
    {q:'¿Cómo se dice 1000 en español?',opts:['Cien','Doscientos','Mil','Novecientos'],ans:2},
    {q:'¿Qué número es "Doscientos"?',opts:['300','100','400','200'],ans:3},
    {q:'¿Cómo se dice 2000 en español?',opts:['Dos mil','Mil','Dos cientos','Veinte mil'],ans:0},
    {q:'¿Qué número es "Novecientos"?',opts:['800','700','1000','900'],ans:3}
   ]},
  {id:'col',level:1,emoji:'🎨',name:'Los Colores',sub:'Rojo, azul, verde… / Les couleurs',
   words:[
    {es:'Rojo',fr:'Rouge',em:'❤️'},{es:'Azul',fr:'Bleu',em:'💙'},{es:'Verde',fr:'Vert',em:'💚'},
    {es:'Amarillo',fr:'Jaune',em:'💛'},{es:'Naranja',fr:'Orange',em:'🧡'},{es:'Blanco',fr:'Blanc',em:'🤍'},
    {es:'Negro',fr:'Noir',em:'🖤'},{es:'Rosa',fr:'Rose',em:'🩷'},
    {es:'Morado / Violeta',fr:'Violet (morado=foncé, violeta=clair)',em:'💜'},{es:'Marrón',fr:'Marron',em:'🤎'},
    {es:'Gris',fr:'Gris',em:'🩶'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Rouge" en español?',opts:['Azul','Rojo','Verde','Amarillo'],ans:1},
    {q:'¿Qué significa "Azul"?',opts:['Vert','Jaune','Bleu','Violet'],ans:2},
    {q:'¿Cómo se dice "Vert" en español?',opts:['Amarillo','Gris','Verde','Blanco'],ans:2},
    {q:'¿Qué significa "Negro"?',opts:['Blanc','Gris','Marron','Noir'],ans:3},
    {q:'¿Cómo se dice "Jaune" en español?',opts:['Naranja','Amarillo','Rosa','Morado'],ans:1},
    {q:'¿Qué significa "Rosa"?',opts:['Rouge','Orange','Rose','Violet'],ans:2},
    {q:'¿Cómo se dice "Blanc" en español?',opts:['Blanco','Negro','Gris','Marrón'],ans:0}
   ]},
  {id:'viaje',level:1,emoji:'🧳',name:'El Viaje',sub:'Maleta, hotel, pasaporte… / Le voyage',
   words:[
   // Préparation
    {es:'El pasaporte',fr:'Le passeport',em:'🛂'},
    {es:'La maleta',fr:'La valise',em:'🧳'},
    {es:'El equipaje',fr:'Les bagages',em:'🎒'},
    {es:'El billete',fr:'Le billet',em:'🎫'},
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
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le passeport" en español?',opts:['La maleta','El billete','El pasaporte','El equipaje'],ans:2},
    {q:'¿Qué significa "La maleta"?',opts:['Le sac à dos','La valise','Les bagages','Le billet'],ans:1},
    {q:'¿Cómo se dice "L\'aéroport" en español?',opts:['La estación','El puerto','El aeropuerto','La aduana'],ans:2},
    {q:'¿Qué significa "La reserva"?',opts:['La réduction','La réservation','L\'assurance','Le remboursement'],ans:1},
    {q:'¿Cómo se dice "Les bagages" en español?',opts:['La maleta','El billete','El equipaje','La mochila'],ans:2},
    {q:'¿Qué significa "La aduana"?',opts:['L\'arrivée','Le départ','La douane','La frontière'],ans:2},
    {q:'¿Cómo se dice "La croisière" en español?',opts:['El ferry','El crucero','El barco','El viaje'],ans:1},
    {q:'¿Qué significa "La llegada"?',opts:['Le départ','La correspondance','L\'escale','L\'arrivée'],ans:3}
   ]},
  {id:'rest',level:1,emoji:'🍽️',name:'El Restaurante',sub:'Menú, cuenta, mesa… / Au restaurant',
   words:[
      // Arrivée
    {es:'La terraza',fr:'La terrasse',em:'☀️'},
    {es:'La mesa',fr:'La table',em:'🪑'},
    {es:'¿Está libre esta mesa?',fr:'Cette table est libre ?',em:'🪑'},
    // Commander
    {es:'El camarero / La camarera',fr:'Le serveur / La serveuse',em:'🧑‍🍳'},
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
    {es:'El bocadillo',fr:'Le sandwich',em:'🥖'},
    {es:'Para llevar',fr:'À emporter',em:'🥡'},
    // Addition
    {es:'La cuenta',fr:'L\'addition',em:'💶'},
    {es:'La propina',fr:'Le pourboire',em:'💰'},
    {es:'La propina está incluida',fr:'Le pourboire est inclus',em:'✅'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'addition" en español?',opts:['La propina','La cuenta','El menú','La reserva'],ans:1},
    {q:'¿Qué significa "El camarero"?',opts:['Le cuisinier','Le patron','Le serveur','Le client'],ans:2},
    {q:'¿Cómo se dice "Le dessert" en español?',opts:['La entrada','El plato principal','El postre','La tapa'],ans:2},
    {q:'¿Qué significa "Para llevar"?',opts:['Pour manger sur place','À emporter','À partager','Pour deux personnes'],ans:1},
    {q:'¿Cómo se dice "La terrasse" en español?',opts:['El jardín','La plaza','La terraza','El patio'],ans:2},
    {q:'¿Qué significa "Pedir"?',opts:['Payer','Réserver','Commander','Choisir'],ans:2},
    {q:'¿Cómo se dice "Le pourboire" en español?',opts:['La cuenta','La propina','El descuento','El precio'],ans:1},
    {q:'¿Qué significa "¿Qué recomienda?"?',opts:['Qu\'est-ce que vous préparez ?','Qu\'est-ce que vous avez ?','Que recommandez-vous ?','C\'est bon ?'],ans:2}
   ]},
  {id:'trans',level:1,emoji:'🚌',name:'Los Transportes',sub:'Metro, tren, coche… / Les transports',
   words:[
    // Transports en commun
    {es:'El autobús / el bus',fr:'Le bus',em:'🚌'},
    {es:'El metro',fr:'Le métro',em:'🚇'},
    {es:'El tranvía',fr:'Le tramway',em:'🚊'},
    {es:'El tren',fr:'Le train',em:'🚂'},
    {es:'El avión',fr:'L\'avion',em:'✈️'},
    {es:'El taxi',fr:'Le taxi',em:'🚕'},
    // Transports individuels
    {es:'El coche',fr:'La voiture',em:'🚗'},
    {es:'La moto',fr:'La moto',em:'🏍️'},
    {es:'La bicicleta / La bici',fr:'Le vélo',em:'🚴'},
    // Titre de transport
    {es:'El billete',fr:'Le billet',em:'🎫'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le bus" en español?',opts:['El tren','El metro','El autobús o el bus','El taxi'],ans:2},
    {q:'¿Cómo se dice "La voiture" en España?',opts:['La moto','El coche','El tranvía','El camión'],ans:1},
    {q:'¿Cómo se dice "L\'avion" en español?',opts:['El barco','El avión','La bicicleta','El metro'],ans:1},
    {q:'¿Cómo se dice "Le billet" en España?',opts:['El pasaje','El sencillo','El billete','La tarjeta'],ans:2}
   ]},
  {id:'objets',level:1,emoji:'🔑',name:'Objetos del Día',sub:'Teléfono, llaves… / Objets du quotidien',
   words:[
        // Technologie
    {es:'El teléfono',fr:'Le téléphone',em:'☎️'},
    {es:'El móvil',fr:'Le portable',em:'📱'},
    {es:'El ordenador',fr:'L\'ordinateur',em:'💻'},
    {es:'El cargador',fr:'Le chargeur',em:'🔌'},
    // Temps
    {es:'El reloj de pulsera',fr:'La montre',em:'⌚'},
    {es:'El reloj',fr:'L\'horloge / la pendule',em:'🕐'},
    // Accessoires personnels
    {es:'Las llaves',fr:'Les clés',em:'🔑'},
    {es:'La cartera / El monedero',fr:'Le portefeuille / le porte-monnaie',em:'👛'},
    {es:'La mochila',fr:'Le sac à dos',em:'🎒'},
    {es:'Las gafas',fr:'Les lunettes',em:'👓'},
    {es:'El paraguas',fr:'Le parapluie',em:'☂️'},
    // Papeterie
    {es:'El papel',fr:'Le papier',em:'📄'},
    {es:'El bolígrafo / El boli',fr:'Le stylo / le bic',em:'🖊️'},
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
    {es:'La almohada',fr:'L\'oreiller',em:'🛏️'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Les clés" en español?',opts:['El bolígrafo','Las tijeras','Las llaves','El cargador'],ans:2},
    {q:'¿Cómo se dice "Le téléphone portable" en España?',opts:['La tableta','El móvil','El ordenador','La radio'],ans:1},
    {q:'¿Cómo se dice "Le sac à dos" en español?',opts:['La cartera','El bolso','La mochila','El sombrero'],ans:2},
    {q:'¿Cómo se dice "L\'ordinateur" en España?',opts:['El móvil','La tableta','El ordenador','La pantalla'],ans:2},
    {q:'¿Cómo se dice "Les lunettes" en España?',opts:['Los auriculares','Las gafas','Los guantes','Los relojes'],ans:1},
    {q:'¿Cómo se dice "Le stylo" en España (familier)?',opts:['El lápiz','El papel','El bolígrafo','El libro'],ans:2},
    {q:'¿Cómo se dice "Le portefeuille" en español?',opts:['La mochila','Las llaves','La cartera','El teléfono'],ans:2},
    {q:'¿Qué significa "El espejo"?',opts:['La fenêtre','Le miroir','Le tableau','La porte'],ans:1},
    {q:'¿Cómo se dice "La serviette" en español?',opts:['La almohada','El jabón','La toalla','El vaso'],ans:2},
    {q:'¿Qué significa "La cuchara"?',opts:['Le couteau','La fourchette','La cuillère','L\'assiette'],ans:2},
    {q:'¿Cómo se dice "Le parapluie" en español?',opts:['El abrigo','El paraguas','La bufanda','El impermeable'],ans:1},
    {q:'¿Qué significa "La almohada"?',opts:['La couverture','Le matelas','Le drap','L\'oreiller'],ans:3},
   ]},
   {id:'log',level:1,emoji:'🏠',name:'La Vivienda',sub:'Salón, cocina… / Le logement',
   words:[
        // Types de logement
    {es:'La casa',fr:'La maison',em:'🏠'},
    {es:'El piso / el apartamento',fr:'L\'appartement',em:'🏢'},
    // Pièces principales
    {es:'La entrada / el recibidor',fr:'L\'entrée',em:'🚪'},
    {es:'El salón / el comedor',fr:'Le salon / la salle à manger',em:'🛋️'},
    {es:'La cocina',fr:'La cuisine',em:'🍳'},
    {es:'La habitación / el cuarto',fr:'La chambre',em:'🛏️'},
    {es:'El cuarto de baño / el baño',fr:'La salle de bain',em:'🚿'},
    {es:'El aseo / el váter',fr:'Les toilettes',em:'🚽'},
    {es:'El garaje',fr:'Le garage',em:'🚗'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le salon" en español de España?',opts:['La cocina','La habitación','El salón','El garaje'],ans:2},
    {q:'¿Qué significa "La cocina"?',opts:['La salle à manger','La cuisine','La salle de bain','Le salon'],ans:1},
    {q:'¿Cómo se dice "La chambre" en español?',opts:['El salón','La habitación / el cuarto','La entrada','El garaje'],ans:1},
    {q:'¿Qué significa "El aseo / el váter" en España?',opts:['La salle de bain','Le garage','Les toilettes','La salle à manger'],ans:2},
    {q:'¿Cómo se dice "L\'appartement" en España?',opts:['La casa','La entrada','El piso / el apartamento','La habitación'],ans:2}
   ]},
   {id:'emot',level:1,emoji:'😄',name:'Las Emociones',sub:'Alegre, cansado… / Les émotions',
   words:[
    {es:'Contento / Contenta',fr:'Content / Contente',em:'😊'},
    {es:'Feliz / Feliz',fr:'Heureux / Heureuse',em:'😊'},
    {es:'Alegre / Alegre',fr:'Joyeux / Joyeuse',em:'😄'},
    {es:'Triste / Triste',fr:'Triste / Triste',em:'😢'},
    {es:'Cansado / Cansada',fr:'Fatigué / Fatiguée',em:'😴'},
    {es:'Enfadado / Enfadada',fr:'Fâché / Fâchée',em:'😠'},
    {es:'Enojado / Enojada',fr:'Énervé / Énervée',em:'😠'},
    {es:'Tener miedo / Tener miedo',fr:'Avoir peur / Avoir peur',em:'😨'},
    {es:'Enfermo / Enferma',fr:'Malade / Malade',em:'🤒'},
    {es:'Malito / Malita',fr:'Malade / Malade',em:'🤒'},
    {es:'Preocupado / Preocupada',fr:'Inquiet / Inquiète',em:'😟'},
    {es:'Angustiado / Angustiada',fr:'Inquiet / Inquiète',em:'😟'},
    {es:'Estresado / Estresada',fr:'Stressé / Stressée',em:'😰'},
    {es:'Agobiado / Agobiada',fr:'Stressé / Stressée',em:'😰'},
    {es:'Decepcionado / Decepcionada',fr:'Déçu / Déçue',em:'😞'},
    {es:'Frustrado / Frustrada',fr:'Déçu / Déçue',em:'😞'},
    {es:'Enamorado / Enamorada',fr:'Amoureux / Amoureuse',em:'😍'},
    {es:'¡Qué guay! / ¡Mola!',fr:'C\'est super ! / C\'est cool !',em:'🌟'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Énervée" en español de España?',opts:['Decepcionada','Enfadada','Preocupada','Contenta'],ans:1},
    {q:'¿Cómo se dice "Joyeuse" en español?',opts:['Triste','Cansada','Alegre','Enferma'],ans:2},
    {q:'¿Cómo se dice "Fatigué" en español?',opts:['Estresado','Enfermo','Preocupado','Cansado'],ans:3},
    {q:'¿Qué significa "Enfadada" en España?',opts:['Fatiguée','Contente','Fâchée','Malade'],ans:2},
    {q:'¿Qué significa "¡Mola!" en argot español?',opts:['Ça m\'énerve !','C\'est nul !','C\'est super ! / C\'est cool !','J\'ai peur !'],ans:2},
    {q:'¿Cómo se dice "Inquiète" en español?',opts:['Estresada','Enamorada','Preocupada','Decepcionada'],ans:2},
    {q:'¿Qué significa "Tener miedo"?',opts:['Avoir faim','Avoir peur','Avoir froid','Avoir sommeil'],ans:1}
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
    {es:'El tío / la tía',fr:'L\'oncle / La tante (aussi : mec / nana en argot)',em:'👨/👩'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le père" en español?',opts:['El marido','El hijo','El padre o el papá','El hermano'],ans:2},
    {q:'¿Qué significa "La madre"?',opts:['La fille','La sœur','La maman','La mère'],ans:3},
    {q:'¿Cómo se dice "Le frère" en español?',opts:['El hijo','El hermano','El papá','El marido'],ans:1},
    {q:'¿Qué significa "La hermana"?',opts:['La mère','La grand-mère','La sœur','La fille'],ans:2},
    {q:'¿Cómo se dice "Le grand-père" en español?',opts:['El papá','El marido','El hijo','El abuelo'],ans:3},
    {q:'¿Qué significa "La abuela"?',opts:['La mère','La grand-mère','La sœur','La fille'],ans:1},
    {q:'¿Cómo se dice "La fille" en español?',opts:['La hermana','La esposa','La hija','La mamá'],ans:2},
    {q:'En argot español, "tío / tía" puede significar…',opts:['Père / mère','Mec / nana','Frère / sœur','L\'oncle / La tante'],ans:1}
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
    {es:'Coger',fr:'Prendre',em:'🤲',conj:{es:['Yo cojo','Tú coges','Él/Ella coge','Nosotros cogemos','Vosotros cogéis','Ellos/Ellas cogen'],fr:['Je prends','Tu prends','Il/Elle prend','Nous prenons','Vous prenez','Ils/Elles prennent']}},
    {es:'Dar',fr:'Donner',em:'🤲',conj:{es:['Yo doy','Tú das','Él/Ella da','Nosotros damos','Vosotros dais','Ellos/Ellas dan'],fr:['Je donne','Tu donnes','Il/Elle donne','Nous donnons','Vous donnez','Ils/Elles donnent']}},
    {es:'Buscar',fr:'Chercher',em:'🔍',conj:{es:['Yo busco','Tú buscas','Él/Ella busca','Nosotros buscamos','Vosotros buscáis','Ellos/Ellas buscan'],fr:['Je cherche','Tu cherches','Il/Elle cherche','Nous chercons','Vous cherchez','Ils/Elles cherchent']}},
    {es:'Comprar',fr:'Acheter',em:'🛒',conj:{es:['Yo compro','Tú compras','Él/Ella compra','Nosotros compramos','Vosotros compráis','Ellos/Ellas compran'],fr:['J\'achète','Tu achètes','Il/Elle achète','Nous achetons','Vous achetez','Ils/Elles achètent']}},
    {es:'Vender',fr:'Vendre',em:'💰',conj:{es:['Yo vendo','Tú vendes','Él/Ella vende','Nosotros vendemos','Vosotros vendéis','Ellos/Ellas venden'],fr:['Je vends','Tu vends','Il/Elle vend','Nous vendons','Vous vendez','Ils/Elles vendent']}},
    {es:'Pagar',fr:'Payer',em:'💳',conj:{es:['Yo pago','Tú pagas','Él/Ella paga','Nosotros pagamos','Vosotros pagáis','Ellos/Ellas pagan'],fr:['Je paie','Tu paies','Il/Elle paie','Nous payons','Vous payez','Ils/Elles paient']}},
    {es:'Trabajar',fr:'Travailler',em:'💼',conj:{es:['Yo trabajo','Tú trabajas','Él/Ella trabaja','Nosotros trabajamos','Vosotros trabajáis','Ellos/Ellas trabajan'],fr:['Je travaille','Tu travailles','Il/Elle travaille','Nous travaillons','Vous travaillez','Ils/Elles travaillent']}},
    {es:'Cocinar',fr:'Cuisiner',em:'🍳',conj:{es:['Yo cocino','Tú cocinas','Él/Ella cocina','Nosotros cocinamos','Vosotros cocináis','Ellos/Ellas cocinan'],fr:['Je cuisine','Tu cuisines','Il/Elle cuisine','Nous cuisinons','Vous cuisinez','Ils/Elles cuisinent']}},
    {es:'Limpiar',fr:'Nettoyer',em:'🧹',conj:{es:['Yo limpio','Tú limpias','Él/Ella limpia','Nosotros limpiamos','Vosotros limpiais','Ellos/Ellas limpian'],fr:['Je nettoie','Tu nettoies','Il/Elle nettoie','Nous nettoyons','Vous nettoyez','Ils/Elles nettoient']}},
    {es:'Ducharse',fr:'Se doucher',em:'🧼',conj:{es:['Yo me ducho','Tú te duchas','Él/Ella se ducha','Nosotros nos duchamos','Vosotros os ducháis','Ellos/Ellas se duchan'],fr:['Je me douche','Tu te douches','Il/Elle se douche','Nous nous douchons','Vous vous douchez','Ils/Elles se douchent']}},
    {es:'Irse',fr:'Partir',em:'🚪',conj:{es:['Yo me voy','Tú te vas','Él/Ella se va','Nosotros nos vamos','Vosotros os vais','Ellos/Ellas se van'],fr:['Je pars','Tu pars','Il/Elle part','Nous partons','Vous partez','Ils/Elles partent']}},
    {es:'Llegar',fr:'Arriver',em:'🛬',conj:{es:['Yo llego','Tú llegas','Él/Ella llega','Nosotros llegamos','Vosotros llegáis','Ellos/Ellas llegan'],fr:['J\'arrive','Tu arrives','Il/Elle arrive','Nous arrivons','Vous arrivez','Ils/Elles arrivent']}},
    {es:'Llamar',fr:'Appeler',em:'📞',conj:{es:['Yo llamo','Tú llamas','Él/Ella llama','Nosotros llamamos','Vosotros llamáis','Ellos/Ellas llaman'],fr:['J\'appelle','Tu appelles','Il/Elle appelle','Nous appelons','Vous appelez','Ils/Elles appellent']}},
    {es:'Preguntar',fr:'Demander',em:'🙋‍♂️',conj:{es:['Yo pregunto','Tú preguntas','Él/Ella pregunta','Nosotros preguntamos','Vosotros preguntáis','Ellos/Ellas preguntan'],fr:['Je demande','Tu demandes','Il/Elle demande','Nous demandons','Vous demandez','Ils/Elles demandent']}},
    {es:'Conducir',fr:'Conduire',em:'🚗',conj:{es:['Yo conduzco','Tú conduces','Él/Ella conduce','Nosotros conducimos','Vosotros conducís','Ellos/Ellas conducen'],fr:['Je conduis','Tu conduis','Il/Elle conduit','Nous conduisons','Vous conduisez','Ils/Elles conduisent']}},
    {es:'Molar',fr:'Adorer (argot)',em:'😎',conj:{es:['Me mola','Te mola','Le mola','Nos mola','Os mola','Les mola'],fr:['J\'adore','Tu adores','Il/Elle adore','Nous adorons','Vous adorez','Ils/Elles adorent']}}
  ],
   quiz10:[
    {q:'¿Qué significa "Me mola" en argot español?',opts:['Ça m\'ennuie','Ça me fait peur','Ça me plaît / j\'adore','Suis fatigué'],ans:2},
    {q:'¿Qué significa "Ella sonríe"?',opts:['Elle crie','Elle pleure','Elle sourit','Elle chante'],ans:2},
    {q:'¿Cómo se dice "Tu conduis" en español?',opts:['Corres','Caminas','Conduces','Te vas'],ans:2},
    {q:'¿Qué significa "Aprendo"?',opts:['Tu enseignes','Tu écoutes','Tu apprends','Tu lis'],ans:2},
    {q:'¿Qué significa "Venden"?',opts:['Ils achètent','Ils cherchent','Ils vendent','Ils donnent'],ans:2},
    {q:'¿Qué significa "Il dort" en español?',opts:['Corre','Camina','Duerme','Come'],ans:2},
    {q:'¿Cómo se dice "Vous habitez" en español?',opts:['Vivís','Vivimos','Viven','Vivo'],ans:0},
    {q:'¿Qué significa "Como"?',opts:['Tu bois','Tu manges','Tu dors','Tu marches'],ans:1},
    {q:'¿Qué significa "Coge el metro"?',opts:['Il rate le métro','Il cherche le métro','Il prend le métro','Il attend le métro'],ans:2},
    {q:'¿Qué significa "Hablo"?',opts:['Tu écoutes','Tu lis','Tu parles','Tu regardes'],ans:2},
    {q:'¿Cómo se dice "Ils mangent" en español?',opts:['Comemos','Coméis','Comen','Como'],ans:2},
    {q:'¿Qué significa "Damos"?',opts:['Nous prenons','Nous vendons','Nous donnons','Nous recevons'],ans:2},
    {q:'¿Qué significa "Limpiamos"?',opts:['Nous cuisinons','Nous nettoyons','Nous lavons','Nous rangeons'],ans:1},
    {q:'¿Cómo se dice "Ils boivent" en español?',opts:['Bebemos','Bebéis','Bebo','Beben'],ans:3},
    {q:'¿Cómo se dice "Tu penses" en español?',opts:['Hablas','Buscas','Piensas','Miras'],ans:2},
    {q:'¿Qué significa "Llamas"?',opts:['Tu réponds','Tu appelles','Tu parles','Tu écoutes'],ans:1},
    {q:'¿Cómo se dice "J\'ai" en español?',opts:['Soy','Voy','Tengo','Hablo'],ans:2},
    {q:'¿Cómo se dice "Tu vas" en español?',opts:['Soy','Tengo','Vengo','Vas'],ans:3},
    {q:'¿Cómo se dice "Il part" en español?',opts:['Llega','Se va','Va','Sale'],ans:1},
    {q:'En España se dice "coger el autobús" que significa…',opts:['Rater le bus','Prendre le bus','Attendre le bus','Chercher le bus'],ans:1},
    {q:'¿Cómo se dice "Nous travaillons" en español?',opts:['Limpio','Cocino','Trabajamos','Conducimos'],ans:2},
    {q:'¿Qué significa "Preguntan"?',opts:['Ils répondent','Ils cherchent','Ils demandent','Ils écoutent'],ans:2},
    {q:'¿Cómo se dice "Tu arrives" en español?',opts:['Te vas','Llegas','Buscas','Pagas'],ans:1},
    {q:'¿Qué significa "Compro"?',opts:['Tu vends','Tu cherches','Tu paies','Tu achètes'],ans:3},
    {q:'¿Qué significa "Él se ducha"?',opts:['Il se lève','Il se douche','Il se repose','Il se lave'],ans:1},
    {q:'¿Cómo se dice "Tu cherches" en español?',opts:['Compras','Trabajas','Buscas','Piensas'],ans:2},
    {q:'¿Qué significa "Ella cocina"?',opts:['Elle mange','Elle cuisine','Elle nettoie','Elle lit'],ans:1},
    {q:'¿Cómo se dice "Nous parlons" en español?',opts:['Hablo','Hablamos','Habláis','Hablan'],ans:1},
    {q:'¿Cómo se dice "Tu lis" en español?',opts:['Escuchas','Aprendes','Lees','Miras'],ans:2},
    {q:'¿Cómo se dice "Tu écris" en español?',opts:['Lees','Escuchas','Miras','Escribes'],ans:3},
    {q:'¿Cómo se dice "Tu paies" en español?',opts:['Das','Tomas','Vendes','Pagas'],ans:3},
    {q:'¿Cómo se dice "Tu cours" en español?',opts:['Caminas','Conduces','Corres','Te vas'],ans:2}
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
    {es:'La barriga',fr:'Le ventre',em:'🫃'},
    {es:'La pierna / Las piernas',fr:'La jambe / Les jambes',em:'🦵'},
    {es:'El pie / Los pies',fr:'Le pied / Les pieds',em:'🦶'},
    {es:'El corazón',fr:'Le cœur',em:'❤️'},
    {es:'El cerebro',fr:'Le cerveau',em:'🧠'},
    {es:'El hueso / Los huesos',fr:'L\'os / Les os',em:'🦴'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La tête" en español?',opts:['La nariz','La boca','La cabeza','El cuello'],ans:2},
    {q:'¿Qué significa "Los ojos"?',opts:['Les oreilles','Le nez','Les lèvres','Les yeux'],ans:3},
    {q:'¿Cómo se dice "La main" en español?',opts:['El pie','La pierna','El brazo','La mano'],ans:3},
    {q:'¿Qué significa "La nariz"?',opts:['La bouche','Le nez','L\'oreille','Le cou'],ans:1},
    {q:'¿Cómo se dice "La jambe" en español?',opts:['El brazo','La pierna','El pie','La espalda'],ans:1},
    {q:'¿Qué significa "El cerebro"?',opts:['Le cœur','Le ventre','Le cerveau','L\'os'],ans:2},
    {q:'¿Cómo se dice "Les dents" en español?',opts:['Los labios','La lengua','Los dientes','Las orejas'],ans:2},
    {q:'¿Qué significa "El corazón"?',opts:['Le cerveau','Le cœur','L\'os','Le dos'],ans:1}
   ]},
  {id:'sante',level:1,emoji:'🏥',name:'La Salud',sub:'Médico, farmacia… / La santé',
   words:[
    {es:'Doler / Me duele',fr:'Faire mal / j\'ai mal (me duele la cabeza = j\'ai mal à la tête)',em:'🤕'},
    {es:'Tener dolor',fr:'Avoir une douleur (plus formel)',em:'😣'},
    {es:'La fiebre',fr:'La fièvre',em:'🌡️'},
    {es:'La tos',fr:'La toux',em:'😮‍💨'},
    {es:'El pañuelo',fr:'Le mouchoir',em:'🤧'},
    {es:'El termómetro',fr:'Le thermomètre',em:'🌡️'},
    {es:'La cita',fr:'Le rendez-vous',em:'📅'},
    {es:'El médico / La médica',fr:'Le médecin / La médecin',em:'🩺'},
    {es:'El/la paciente',fr:'Le/la patient(e)',em:'🛏️'},
    {es:'La consulta médica',fr:'La consultation médicale',em:'📋'},
    {es:'El enfermero / La enfermera',fr:'L\'infirmier / L\'infirmière)',em:'👨‍⚕️'},
    {es:'El hospital',fr:'L\'hôpital',em:'🏥'},
    {es:'La receta médica',fr:'L\'ordonnance',em:'📋'},
    {es:'La farmacia',fr:'La pharmacie',em:'🏪'},
    {es:'El medicamento',fr:'Le médicament',em:'💊'},
    {es:'La pastilla',fr:'Le comprimé',em:'💊'},
    {es:'La vacuna',fr:'Le vaccin',em:'💉'},
    {es:'La tirita',fr:'Le pansement adhésif',em:'🩹'},
    {es:'El vendaje',fr:'Le bandage',em:'🩼'},
    {es:'La ambulancia',fr:'L\'ambulance',em:'🚑'},
    {es:'Las urgencias',fr:'Les urgences',em:'🆘'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'hôpital" en español?',opts:['La farmacia','El hospital','Las urgencias','La consulta'],ans:1},
    {q:'¿Qué significa "La fiebre"?',opts:['La toux','La douleur','La fièvre','La grippe'],ans:2},
    {q:'¿Cómo se dice "Le vaccin" en español?',opts:['La tirita','La vacuna','El vendaje','El medicamento'],ans:1},
    {q:'¿Cómo se dice "Le pansement" en España?',opts:['La inyección','La vacuna','La tirita','El medicamento'],ans:2},
    {q:'¿Cómo se dice "L\'ordonnance" en español?',opts:['La consulta','El medicamento','La receta médica','La vacuna'],ans:2},
    {q:'¿Cómo se dice "Les urgences" en español?',opts:['El médico de guardia','La sala de espera','Las urgencias','La consulta'],ans:2},
    {q:'¿Cómo se dice "Le thermomètre" en español?',opts:['La presión','El termómetro','La fiebre','La inyección'],ans:1},
    {q:'¿Cómo se dice "Un rendez-vous médical" en español?',opts:['Una visita','Una cita médica','Una receta','Una consulta'],ans:1}
   ]},
  {id:'veth',level:1,emoji:'👗',name:'La Ropa',sub:'Camiseta, pantalón… / Les vêtements',
   words:[
    // Niveau 1 — Vêtements du quotidien, très fréquents
    {es:'La camiseta',fr:'Le t-shirt',em:'👕'},
    {es:'La camisa',fr:'La chemise',em:'👔'},
    {es:'El pantalón',fr:'Le pantalon',em:'👖'},
    {es:'Los zapatos / las zapatillas',fr:'Les chaussures / Les baskets',em:'👟'},
    {es:'Los calcetines',fr:'Les chaussettes',em:'🧦'},
    // Niveau 2 — Vêtements courants, un peu plus spécifiques
    {es:'El vestido / La falda',fr:'La robe / La jupe',em:'👗'},
    {es:'Los pantalones cortos / El short',fr:'Le short',em:'🩳'},
    {es:'El jersey',fr:'Le pull',em:'🧥'},
    {es:'La chaqueta',fr:'La veste',em:'🧥'},
    {es:'El sombrero / La gorra',fr:'Le chapeau / La casquette',em:'🎩'},
    // Niveau 3 — Accessoires et vêtements saisonniers
    {es:'El abrigo',fr:'Le manteau',em:'🧥'},
    {es:'La bufanda',fr:'L\'écharpe',em:'🧣'},
    {es:'Los guantes',fr:'Les gants',em:'🧤'},
    {es:'El gorro',fr:'Le bonnet',em:'🎿'},
    {es:'El bolso / El bolsillo',fr:'Le sac / La poche',em:'👜'},
    {es:'El bañador',fr:'Le maillot de bain',em:'🩱'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le t-shirt" en español?',opts:['El jersey','La camisa','La camiseta','La chaqueta'],ans:2},
    {q:'¿Qué significa "El pantalón vaquero o tejano"?',opts:['Le short','Le jean','La jupe','Le survêtement'],ans:1},
    {q:'¿Cómo se dice "Les chaussures" en español?',opts:['Los calcetines','LAs zapatillas','Los zapatos','El sombrero'],ans:2},
    {q:'¿Cómo se dice "Le pull" en España?',opts:['La bufanda','La chaqueta','El jersey','El abrigo'],ans:2},
    {q:'¿Cómo se dice "Le maillot de bain" en España?',opts:['El bañador','El gorro','El short','Los calcetines'],ans:0},
    {q:'¿Qué significa "La bufanda"?',opts:['Les gants','Le manteau','L\'écharpe','Le bonnet'],ans:2},
    {q:'¿Cómo se dice "La robe" en español?',opts:['La falda','El vestido','La chaqueta','El jersey'],ans:1},
    {q:'¿Qué significa "Los calcetines"?',opts:['Les chaussures','Les gants','Les chaussettes','Le maillot de bain'],ans:2}
   ]},
  {id:'pays',level:1,emoji:'🌍',name:'Los Países',sub:'Francia, España… / Les pays',
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
    {es:'Estados Unidos',fr:'Les États-Unis',em:'🇺🇸'},
    {es:'Rusia',fr:'La Russie',em:'🇷🇺'},
    {es:'China',fr:'La Chine',em:'🇨🇳'},
    {es:'Japón',fr:'Le Japon',em:'🇯🇵'},
    {es:'India',fr:'L\'Inde',em:'🇮🇳'},
    {es:'Turquía',fr:'La Turquie',em:'🇹🇷'},
    {es:'Grecia',fr:'La Grèce',em:'🇬🇷'},
    {es:'Australia',fr:'L\'Australie',em:'🇦🇺'},
    {es:'Sudáfrica',fr:'L\'Afrique du Sud',em:'🇿🇦'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "La France" en español?',opts:['Bélgica','Francia','Suiza','Portugal'],ans:1},
    {q:'¿Qué significa "Alemania"?',opts:['Autriche','Pays-Bas','Allemagne','Danemark'],ans:2},
    {q:'¿Cómo se dice "Le Brésil" en español?',opts:['Perú','Chile','Brasil','Bolivia'],ans:2},
    {q:'¿Qué significa "Reino Unido"?',opts:['Irlande','Royaume-Uni','Écosse','Danemark'],ans:1},
    {q:'¿Cómo se dice "Le Maroc" en español?',opts:['Egipto','Senegal','Marruecos','Sudáfrica'],ans:2},
    {q:'¿Cómo se dice "La Turquie" en español?',opts:['Túnez','Tailandia','Turquía','Tanzania'],ans:2},
    {q:'¿Qué significa "Países Bajos"?',opts:['Belgique','Danemark','Pays-Bas','Luxembourg'],ans:2},
    {q:'¿Cómo se dice "La Grèce" en español?',opts:['Turquía','Grecia','Italia','Chipre'],ans:1}
   ]},
  {id:'met',level:1,emoji:'💼',name:'Las Profesiones',sub:'Médico, profe… / Les professions',
   words:[
    // Niveau 1 — Métiers du quotidien, rencontrés très fréquemment
    {es:'El/la estudiante',fr:'L\'étudiant / L\'étudiante',em:'🎓'},
    {es:'El profesor / La profesora',fr:'Le professeur / La professeure',em:'👩‍🏫'},
    {es:'El camarero / La camarera',fr:'Le serveur / La serveuse',em:'🍽️'},
    {es:'El vendedor / La vendedora',fr:'Le vendeur / La vendeuse',em:'🏪'},
    {es:'El/la taxista',fr:'Le chauffeur de taxi / La chauffeuse de taxi',em:'🚕'},
    // Niveau 2 — Métiers courants, contextes santé & service
    {es:'El médico / La médica',fr:'Le médecin / La médecin',em:'🩺'},
    {es:'El enfermero / La enfermera',fr:'L\'infirmier / L\'infirmière',em:'👨‍⚕️'},
    {es:'El cocinero / La cocinera',fr:'Le cuisinier / La cuisinière',em:'👨‍🍳'},
    // Niveau 3 — Métiers plus spécifiques ou lexicalement complexes
    {es:'El fontanero / La fontanera',fr:'Le plombier / La plombière',em:'🔧'},
    {es:'El informático / La informática',fr:'L\'informaticien / L\'informaticienne',em:'💻'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le médecin" en español?',opts:['El profesor','El médico','El enfermero','El cocinero'],ans:1},
    {q:'¿Qué significa "El profesor" en España?',opts:['L\'étudiant','Le directeur','Le professeur','Le concierge'],ans:2},
    {q:'¿Cómo se dice "La serveuse" en España?',opts:['La cocinera','La camarera','La taxista','La vendedora'],ans:1},
    {q:'¿Qué significa "La estudiante"?',opts:['La professeure','L\'étudiante','La médecin','La vendeuse'],ans:1},
    {q:'¿Cómo se dice "L\'infirmier" en español?',opts:['El médico','El profesor','El enfermero','El camarero'],ans:2}
   ]},
  {id:'anim',level:1,emoji:'🐘',name:'Los Animales',sub:'Perro, gato, toro… / Les animaux',
   words:[
    // Niveau 1 — Animaux familiers & de la ferme, très connus
    {es:'El perro',fr:'Le chien',em:'🐶'},
    {es:'El gato',fr:'Le chat',em:'🐱'},
    {es:'El pájaro',fr:'L\'oiseau',em:'🐦'},
    {es:'El pez',fr:'Le poisson (vivant)',em:'🐟'},
    {es:'El caballo',fr:'Le cheval',em:'🐴'},
    {es:'La vaca',fr:'La vache',em:'🐮'},
    {es:'El cerdo',fr:'Le cochon',em:'🐷'},
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
    {es:'El mosquito',fr:'Le moustique',em:'🦟'},
    {es:'La hormiga',fr:'La fourmi',em:'🐜'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le chien" en español?',opts:['El gato','El caballo','El perro','El conejo'],ans:2},
    {q:'¿Qué significa "El gato"?',opts:['Le chien','Le chat','Le lapin','L\'oiseau'],ans:1},
    {q:'¿Cómo se dice "Le cheval" en español?',opts:['La vaca','El caballo','El oso','El cerdo'],ans:1},
    {q:'¿Qué animal es símbolo de España?',opts:['El águila','El toro','El oso','El caballo'],ans:1},
    {q:'¿Cómo se dice "L\'éléphant" en español?',opts:['El tigre','La ballena','El elefante','El oso'],ans:2},
    {q:'¿Cómo se dice "Le papillon" en español?',opts:['La hormiga','La mariposa','La araña','El mosquito'],ans:1},
    {q:'¿Qué significa "La serpiente"?',opts:['Le lézard','La grenouille','Le serpent','L\'insecte'],ans:2},
    {q:'¿Cómo se dice "Le coq" en español?',opts:['La gallina','El pollo','El gallo','El pato'],ans:2},
    {q:'¿Qué significa "El delfín"?',opts:['La baleine','Le requin','Le dauphin','Le poisson'],ans:2},
    {q:'¿Qué significa "La cabra"?',opts:['La vache','Le cochon','L\'agneau','La chèvre'],ans:3},
    {q:'¿Cómo se dice "Le taureau" en español?',opts:['El caballo','El toro','El cerdo','El buey'],ans:1},
    {q:'¿Qué significa "El cordero"?',opts:['La vache','Le cochon','L\'agneau','La chèvre'],ans:2}
   ]},
  {id:'plan',level:1,emoji:'🌿',name:'Las Plantas',sub:'Flor, árbol, bosque… / Les plantes',
   words:[
    // Niveau 1 — Éléments naturels de base, très visuels
    {es:'La flor',fr:'La fleur',em:'🌸'},
    {es:'El árbol',fr:'L\'arbre',em:'🌳'},
    {es:'La hoja',fr:'La feuille',em:'🍃'},
    {es:'La hierba',fr:'L\'herbe',em:'🌱'},
    // 🟡 Niveau 2 — Espaces & végétaux plus spécifiques
    {es:'El jardín',fr:'Le jardin',em:'🏡'},
    {es:'La rosa',fr:'La rose',em:'🌹'},
    {es:'El bosque',fr:'La forêt',em:'🌲'},
    // 🔴 Niveau 3 — Vocabulaire plus précis ou contextuel
    {es:'El césped',fr:'La pelouse / Le gazon',em:'⛳'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "La fleur" en español?',opts:['La hoja','La flor','El césped','La rosa'],ans:1},
    {q:'¿Qué significa "El árbol"?',opts:['La feuille','L\'herbe','L\'arbre','La fleur'],ans:2},
    {q:'¿Cómo se dice "La rose" en español?',opts:['La flor','La hoja','El césped','La rosa'],ans:3},
    {q:'¿Qué significa "El bosque"?',opts:['Le jardin','La forêt','Le champ','Le parc'],ans:1},
    {q:'¿Cómo se dice "Le jardin" en español?',opts:['El bosque','El árbol','El jardín','La flor'],ans:2}
   ]}  
];


/* ========================================
   Español Castillan → Français 🇪🇸 – Niveau 2
   14 situations de dialogues — Niveau A1
   Français débutant en Espagne
   © 2026 Sébastien Godet
======================================== */
 
var LEVEL2_THEMES = [
 
  /* 1 ── Saluer et prendre des nouvelles */
  {id:'salut2',level:2,emoji:'👋',name:'Saludos',sub:'Saluer quelqu\'un / Dire bonjour en Espagne',type:'dialog',
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
  {id:'pres2',level:2,emoji:'🙋',name:'Presentarse',sub:'Dire son nom, son pays / Se présenter',type:'dialog',
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
  {id:'chemin2',level:2,emoji:'🗺️',name:'Pedir camino',sub:'Demander son chemin / S\'orienter en ville',type:'dialog',
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
  {id:'bar2',level:2,emoji:'☕',name:'En el bar',sub:'Commander au bar espagnol / Café et tapas',type:'dialog',
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
  {id:'resto2',level:2,emoji:'🍽️',name:'En el restaurante',sub:'Commander un repas / Au restaurant espagnol',type:'dialog',
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
  {id:'transp2',level:2,emoji:'🚌',name:'El transporte',sub:'Prendre le bus et le métro / Les transports',type:'dialog',
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
  {id:'farmacia2',level:2,emoji:'💊',name:'En la farmacia',sub:'Acheter des médicaments / À la pharmacie',type:'dialog',
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
  {id:'hotel2',level:2,emoji:'🏨',name:'En el hotel',sub:'Arriver à l\'hôtel / S\'installer',type:'dialog',
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
  {id:'medico2',level:2,emoji:'🩺',name:'En el médico',sub:'Expliquer ce qui ne va pas / Chez le médecin',type:'dialog',
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
  {id:'meteo2',level:2,emoji:'☀️',name:'El tiempo',sub:'Parler de la météo / Qu\'est-ce qu\'il fait ?',type:'dialog',
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
  {id:'logement2',level:2,emoji:'🏠',name:'Buscar piso',sub:'Chercher un logement / Louer un appartement',type:'dialog',
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
  {id:'gustos2',level:2,emoji:'❤️',name:'Gustos y aficiones',sub:'Parler de ce qu\'on aime / Les loisirs',type:'dialog',
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
  {id:'fiesta2',level:2,emoji:'🎉',name:'Salir de noche',sub:'Sortir le soir / Vie sociale en Espagne',type:'dialog',
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
   ]}
 
];

var ALL_THEMES=LEVEL1_THEMES.concat(LEVEL2_THEMES);
