/* ========================================
   Español Argentino → Français 🇦🇷 – Données
   Vocabulaire, quiz et dialogues
   Variante Argentine — voseo, lunfardo, lexique local
   © Juin 2026 Sébastien Godet
======================================== */

var LEVEL1_THEMES=[
  {id:'alpha',level:1,emoji:'🔤',name:'El Alfabeto',sub:'A, B, C… Z / L\'alphabet',type:'alpha',
   words:[
    {es:'A',fr:'a',em:'✈️'},{es:'B',fr:'bé',em:'🎈'},
    {es:'C',fr:'cé (se prononce s)',em:'☕'},{es:'D',fr:'dé',em:'💃'},
    {es:'E',fr:'e',em:'🏫'},{es:'F',fr:'efe',em:'🌸'},
    {es:'G',fr:'jé (devant e/i)',em:'🚉'},{es:'H',fr:'hache (muette)',em:'🏨'},
    {es:'I',fr:'i',em:'🏝️'},{es:'J',fr:'jota',em:'🌿'},
    {es:'K',fr:'ka',em:'⚖️'},{es:'L',fr:'ele',em:'🦁'},
    {es:'M',fr:'eme',em:'🏠'},{es:'N',fr:'ene',em:'🌙'},
    {es:'Ñ',fr:'eñe (son gn)',em:'🎵'},{es:'O',fr:'o',em:'🐦'},
    {es:'P',fr:'pé',em:'🍞'},{es:'Q',fr:'cu',em:'🏘️'},
    {es:'R',fr:'erre',em:'🌹'},{es:'S',fr:'ese',em:'☀️'},
    {es:'T',fr:'té',em:'🚂'},{es:'U',fr:'u',em:'1️⃣'},
    {es:'V',fr:'uve (= B en Argentine)',em:'🌆'},{es:'W',fr:'doble uve',em:'🚃'},
    {es:'X',fr:'equis',em:'🎵'},{es:'Y',fr:'ye / i griega (son dj en Argentine)',em:'🥛'},
    {es:'Z',fr:'ceta (se prononce s en Argentine)',em:'0️⃣'}
   ],
   quiz10:[
    {q:'¿Qué letra escuchás?',audio:'B',opts:['A','B','C','D'],ans:1},
    {q:'¿Qué letra escuchás?',audio:'G',opts:['J','K','G','H'],ans:2},
    {q:'¿Qué letra escuchás?',audio:'Ñ',opts:['N','Ñ','M','L'],ans:1},
    {q:'¿Qué letra escuchás?',audio:'R',opts:['A','R','L','N'],ans:1},
    {q:'¿Qué letra escuchás?',audio:'Z',opts:['S','X','Z','C'],ans:2},
    {q:'¿Qué letra escuchás?',audio:'H',opts:['H','F','M','N'],ans:0},
    {q:'¿Qué letra escuchás?',audio:'K',opts:['C','G','K','Q'],ans:2},
    {q:'¿Qué letra escuchás?',audio:'Y',opts:['I','U','Y','E'],ans:2},
    {q:'¿Qué letra escuchás?',audio:'W',opts:['V','W','X','Y'],ans:1},
    {q:'¿Qué letra escuchás?',audio:'P',opts:['B','D','P','T'],ans:2}
   ]},
  {id:'salut',level:1,emoji:'👋',name:'Los Saludos',sub:'Buenos días, gracias… / Les salutations',
   words:[
    {es:'Buenos días / Buen día',fr:'Bonjour (le matin)',em:'🌅'},{es:'Buenas tardes',fr:'Bon après-midi',em:'🌆'},
    {es:'Buenas noches',fr:'Bonsoir / Bonne nuit',em:'🌙'},{es:'¡Hola!',fr:'Salut !',em:'👋'},
    {es:'Chau / Adiós',fr:'Salut / Au revoir (chau s\'utilise très souvent)',em:'👋'},{es:'Hasta pronto',fr:'À bientôt',em:'⏱️'},
    {es:'Gracias / Muchas gracias',fr:'Merci / Merci beaucoup',em:'🙏'},
    {es:'Por favor / De nada',fr:'S\'il vous plaît / De rien',em:'🤝'},
    {es:'Perdón / Disculpá',fr:'Pardon / Excuse-moi (voseo)',em:'🙇'},
    {es:'¡Dale! / ¡Listo!',fr:'Allez ! / D\'accord ! (expressions argentines)',em:'👍'},
    {es:'Sí',fr:'Oui',em:'✅'},
    {es:'No',fr:'Non',em:'❌'},
    {es:'¿Cómo estás? o ¿Cómo andás?',fr:'Comment ça va ? (andás = voseo argentin)',em:'🤗'},
    {es:'Estoy bien, gracias',fr:'Je vais bien, merci',em:'😊'},
    {es:'Más o menos / Así así',fr:'Comme ci comme ça',em:'😐'},
    {es:'No estoy bien / No me encuentro bien',fr:'Je ne vais pas bien / Je n\'ai pas la forme',em:'😔'},
    {es:'¡Qué bueno! / ¡Qué chévere! / ¡Piola!',fr:'C\'est cool ! / Super ! (expressions argentines)',em:'🌟'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Bonjour (le matin)" en español argentino?',opts:['Hola','Buenas tardes','Buenos días','Buenas noches'],ans:2},
    {q:'¿Qué significa "Chau" en Argentina?',opts:['À tout à l\'heure','Au revoir / Salut','Bonjour','Bonne nuit'],ans:1},
    {q:'¿Cómo se dice "Merci" en español?',opts:['Por favor','Perdón','Gracias','Sí'],ans:2},
    {q:'¿Qué significa "¡Listo!" en Argentina?',opts:['Adieu','Allons-y !','D\'accord !','Bonne nuit'],ans:2},
    {q:'¿Cómo se dice "S\'il vous plaît" en español?',opts:['Gracias','Perdón','Por favor','Sí'],ans:2},
    {q:'¿Qué significa "¡Dale!" en Argentina?',opts:['Viens !','Allez ! / D\'accord !','Non !','Peut-être !'],ans:1},
    {q:'¿Qué significa "¿Cómo andás?"?',opts:['Où es-tu ?','Comment tu t\'appelles ?','Comment vas-tu ?','Quel âge as-tu ?'],ans:2},
    {q:'¿Qué significa "¡Piola!" en Argentina?',opts:['Comme c\'est bizarre !','Comme c\'est cool !','Comme c\'est triste !','Comme c\'est grand !'],ans:1}
   ]},
  {id:'pres',level:1,emoji:'🙋',name:'Presentarse',sub:'Nombre, edad, ciudad… / Se présenter',
   words:[
    {es:'El apellido',fr:'Le nom de famille',em:'👨‍👩‍👧'},{es:'El nombre',fr:'Le prénom',em:'🏷️'},
    {es:'La nacionalidad',fr:'La nationalité',em:'🌍'},{es:'La edad',fr:'L\'âge',em:'🎂'},
    {es:'La profesión o el trabajo',fr:'La profession',em:'💼'},{es:'El país',fr:'Le pays',em:'🗺️'},
    {es:'Francés / francesa',fr:'Français(e)',em:'🇫🇷'},{es:'Argentino / argentina',fr:'Argentin(e)',em:'🇦🇷'},
    {es:'Vivo en',fr:'J\'habite à',em:'🏠'},{es:'Soy o Estoy',fr:'Je suis',em:'🧑'},
    {es:'Tengo ... años',fr:'J\'ai ... ans',em:'🎈'},{es:'Me llamo',fr:'Je m\'appelle',em:'👋'},
    {es:'¿De dónde sos?',fr:'Tu es d\'où ? (voseo argentin)',em:'🌍'},{es:'Soy de Buenos Aires',fr:'Je suis de Buenos Aires',em:'🏙️'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Je m\'appelle" en español?',opts:['Soy','Me llamo','Vivo','Tengo'],ans:1},
    {q:'¿Qué significa "El apellido"?',opts:['Le prénom','L\'âge','Le nom de famille','La profession'],ans:2},
    {q:'¿Cómo se dice "J\'ai 25 ans" en español?',opts:['Soy 25 años','Vivo 25 años','Tengo 25 años','Hablo 25 años'],ans:2},
    {q:'¿Qué significa "La nacionalidad"?',opts:['Le pays','La ville','La profession','La nationalité'],ans:3},
    {q:'¿Cómo se dice "J\'habite à Buenos Aires" en español?',opts:['Soy en Buenos Aires','Vivo en Buenos Aires','Voy en Buenos Aires','Tengo Buenos Aires'],ans:1},
    {q:'¿Qué significa "El nombre"?',opts:['Le nom de famille','Le prénom','L\'âge','La profession'],ans:1},
    {q:'¿Cómo se dice "Je suis argentine" en español?',opts:['Soy francesa','Soy argentina','Vivo Argentina','Hablo argentina'],ans:1},
    {q:'¿Qué significa "¿De dónde sos?" en Argentina?',opts:['Quel âge as-tu ?','Comment t\'appelles-tu ?','D\'où es-tu ?','Où habites-tu ?'],ans:2}
   ]},
  {id:'orient',level:1,emoji:'🧭',name:'Orientarse',sub:'Izquierda, derecha… / S\'orienter',
   words:[
    {es:'Todo recto / Derecho',fr:'Tout droit',em:'⬆️'},
    {es:'A la izquierda',fr:'À gauche',em:'⬅️'},
    {es:'A la derecha',fr:'À droite',em:'➡️'},
    {es:'Delante',fr:'Devant',em:'🔜'},
    {es:'Detrás',fr:'Derrière',em:'🔙'},
    {es:'Al lado',fr:'À côté',em:'↔️'},
    {es:'Frente a / Enfrente',fr:'En face',em:'🔄'},
    {es:'Cerca',fr:'Près',em:'📍'},
    {es:'Lejos',fr:'Loin',em:'🌅'},
    {es:'La cuadra (= el bloque de casas)',fr:'Le pâté de maisons / Le bloc (terme argentin)',em:'🗺️'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "À gauche" en español?',opts:['A la derecha','Todo recto','A la izquierda','Enfrente'],ans:2},
    {q:'¿Qué significa "A la derecha"?',opts:['À gauche','Tout droit','À côté','À droite'],ans:3},
    {q:'¿Cómo se dice "Tout droit" en español?',opts:['A la izquierda','Todo recto o derecho','Enfrente','Al lado'],ans:1},
    {q:'¿Qué significa "Frente a / Enfrente"?',opts:['À côté','Derrière','En face','Près'],ans:2},
    {q:'¿Cómo se dice "Près" en español?',opts:['Lejos','Al lado','Cerca','Enfrente'],ans:2}
   ]},
  {id:'lieux',level:1,emoji:'🏙️',name:'Los Lugares',sub:'Mercado, plaza, kiosco… / Les lieux importants',
   words:[
    {es:'La ciudad',fr:'La ville',em:'🏙️'},
    {es:'El barrio',fr:'Le quartier (très important en Argentine)',em:'🏡'},
    {es:'El campo',fr:'La campagne / La pampa',em:'🌾'},
    {es:'La montaña / La sierra',fr:'La montagne / La cordillère',em:'⛰️'},
    {es:'El mar / El río',fr:'La mer / Le fleuve (le Río de la Plata)',em:'🌊'},
    {es:'La playa',fr:'La plage',em:'🏖️'},
    {es:'El parque',fr:'Le parc',em:'🌳'},
    {es:'La plaza',fr:'La place (centre de vie de quartier)',em:'⛲'},
    {es:'La calle / La avenida',fr:'La rue / L\'avenue',em:'🛣️'},
    {es:'La cuadra',fr:'Le pâté de maisons (unité de distance en Argentine)',em:'🏘️'},
    {es:'El municipio',fr:'La mairie (terme argentin)',em:'🏛️'},
    {es:'El hospital',fr:'L\'hôpital',em:'🏥'},
    {es:'La farmacia',fr:'La pharmacie',em:'💊'},
    {es:'El banco',fr:'La banque',em:'🏦'},
    {es:'La iglesia',fr:'L\'église',em:'⛪'},
    {es:'El supermercado',fr:'Le supermarché',em:'🛒'},
    {es:'El kiosco',fr:'Le kiosque (incontournable en Argentine)',em:'🏪'},
    {es:'La verdulería',fr:'L\'épicerie-primeur (magasin de fruits et légumes)',em:'🥦'},
    {es:'La carnicería',fr:'La boucherie',em:'🥩'},
    {es:'La universidad',fr:'L\'université',em:'🏛️'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "La pharmacie" en español?',opts:['El banco','El hospital','La farmacia','El supermercado'],ans:2},
    {q:'¿Cómo se dice "La mairie" en Argentina?',opts:['La iglesia','El tribunal','El municipio','El mercado'],ans:2},
    {q:'¿Cómo se dice "L\'hôpital" en español?',opts:['La farmacia','El municipio','El hospital','El banco'],ans:2},
    {q:'¿Qué es un "kiosco" en Argentina?',opts:['Un supermarché','Un kiosque qui vend journaux, bonbons, recharges...','Une pharmacie','Une école'],ans:1},
    {q:'¿Cómo se dice "Le fleuve" en español?',opts:['El mar','La montaña','El río','El lago'],ans:2},
    {q:'¿Qué significa "El municipio" en Argentina?',opts:['Le tribunal','La mairie','Le parlement','L\'université'],ans:1},
    {q:'¿Cómo se dice "La ville" en español?',opts:['La calle','El barrio','La ciudad','La montaña'],ans:2},
    {q:'¿Qué significa "La verdulería"?',opts:['La pharmacie','La banque','L\'épicerie-primeur','Le bureau'],ans:2}
   ]},
  {id:'nour',level:1,emoji:'🍽️',name:'La Comida',sub:'Asado, empanadas, mate… / La nourriture',
   words:[
    {es:'Las frutas',fr:'Les fruits',em:'🍉'},
    {es:'Las verduras',fr:'Les légumes',em:'🥦'},
    {es:'El pan',fr:'Le pain',em:'🍞'},
    {es:'El arroz',fr:'Le riz',em:'🍚'},
    {es:'Los fideos / La pasta',fr:'Les pâtes (fideos = terme argentin courant)',em:'🍝'},
    {es:'La papa / Las papas fritas',fr:'La pomme de terre / Les frites (papa en Argentine, patata en Espagne)',em:'🥔'},
    {es:'La carne',fr:'La viande',em:'🥩'},
    {es:'El asado',fr:'Le barbecue argentin (plat national !)',em:'🔥'},
    {es:'El pollo',fr:'Le poulet',em:'🍗'},
    {es:'El pescado',fr:'Le poisson',em:'🐟'},
    {es:'El jamón',fr:'Le jambon',em:'🥩'},
    {es:'El chorizo',fr:'Le chorizo (différent du chorizo espagnol)',em:''},
    {es:'El huevo',fr:'L\'œuf',em:'🥚'},
    {es:'El queso',fr:'Le fromage',em:'🧀'},
    {es:'La manteca',fr:'Le beurre (manteca en Argentine, mantequilla en Espagne)',em:'🧈'},
    {es:'La manzana',fr:'La pomme',em:'🍎'},
    {es:'La banana',fr:'La banane (banana en Argentine, plátano en Espagne)',em:'🍌'},
    {es:'La naranja',fr:'L\'orange',em:'🍊'},
    {es:'El limón',fr:'Le citron',em:'🍋'},
    {es:'La frutilla',fr:'La fraise (frutilla en Argentine, fresa en Espagne)',em:'🍓'},
    {es:'La sandía',fr:'La pastèque',em:'🍉'},
    {es:'El tomate',fr:'La tomate',em:'🍅'},
    {es:'La zanahoria',fr:'La carotte',em:'🥕'},
    {es:'La cebolla',fr:'L\'oignon',em:'🧅'},
    {es:'El ajo',fr:'L\'ail',em:'🧄'},
    {es:'El pepino',fr:'Le concombre',em:'🥒'},
    {es:'La ensalada',fr:'La salade',em:'🥗'},
    {es:'El aceite',fr:'L\'huile',em:'🫒'},
    {es:'La sal',fr:'Le sel',em:'🧂'},
    {es:'La pimienta',fr:'Le poivre',em:'🌶️'},
    {es:'La miel',fr:'Le miel',em:'🍯'},
    {es:'El chocolate',fr:'Le chocolat',em:'🍫'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le pain" en español?',opts:['El arroz','El pan','El queso','La manteca'],ans:1},
    {q:'¿Qué significa "El asado" en Argentina?',opts:['Le rôti au four','Le barbecue argentin','La soupe','Le sandwich'],ans:1},
    {q:'¿Cómo se dice "L\'œuf" en español?',opts:['La manteca','El queso','La zanahoria','El huevo'],ans:3},
    {q:'¿Cómo se dice "La pomme" en español?',opts:['La banana','La frutilla','La manzana','La naranja'],ans:2},
    {q:'¿Cómo se dice "Les frites" en español de Argentina?',opts:['Las papas fritas','Los fideos','Los choripanes','El asado'],ans:0},
    {q:'¿Cómo se dice "La pastèque" en español?',opts:['La frutilla','La sandía','La uva','La naranja'],ans:1},
    {q:'¿Cómo se dice "Le beurre" en Argentina?',opts:['El aceite','La manteca','La margarina','La crema'],ans:1},
    {q:'¿Cómo se dice "La fraise" en español de Argentina?',opts:['La banana','La sandía','La frutilla','La uva'],ans:2}
   ]},
  {id:'bois',level:1,emoji:'🥤',name:'Las Bebidas',sub:'Agua, café, mate… / Les boissons',
   words:[
    {es:'El agua',fr:'L\'eau',em:'💧'},
    {es:'El agua con gas',fr:'L\'eau gazeuse',em:'🫧'},
    {es:'La leche',fr:'Le lait',em:'🥛'},
    {es:'El jugo (de naranja)',fr:'Le jus (d\'orange) (jugo en Argentine, zumo en Espagne)',em:'🍊'},
    {es:'El refresco / La gaseosa',fr:'Le soda (gaseosa = terme argentin courant)',em:'🥤'},
    {es:'El café (solo)',fr:'Le café noir',em:'☕'},
    {es:'El café con leche',fr:'Le café au lait',em:'☕'},
    {es:'El cortado',fr:'Le café avec un nuage de lait',em:'☕'},
    {es:'El té',fr:'Le thé',em:'🍵'},
    {es:'El mate',fr:'Le maté (boisson nationale argentine !)',em:'🧉'},
    {es:'El vino (tinto / blanco)',fr:'Le vin (rouge / blanc) — Argentine = grand pays viticole',em:'🍷'},
    {es:'La cerveza',fr:'La bière',em:'🍺'},
    {es:'El fernet con Coca',fr:'Le fernet-Coca (cocktail populaire argentin)',em:'🥃'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'eau" en español?',opts:['La leche','El jugo','El agua','El té'],ans:2},
    {q:'¿Qué es el "mate" en Argentina?',opts:['Un café','La boisson nationale argentine à base d\'herbe','Un cocktail','Un jus de fruit'],ans:1},
    {q:'¿Cómo se dice "Le lait" en español?',opts:['La leche','El agua','El té','El jugo'],ans:0},
    {q:'¿Qué significa "El jugo"?',opts:['Le vin','La bière','La limonade','Le jus'],ans:3},
    {q:'¿Cómo se llama el cocktail más popular de Argentina?',opts:['La cerveza','La sangría','El fernet con Coca','El cortado'],ans:2},
    {q:'¿Qué es "El cortado"?',opts:['Un café noir','Une bière','Un café avec un nuage de lait','Un jus d\'orange'],ans:2},
    {q:'¿Cómo se dice "Le thé" en español?',opts:['El café','El té','La leche','El agua'],ans:1},
    {q:'¿Cómo se dice "Le jus" en Argentina?',opts:['El zumo','El jugo','El agua','La gaseosa'],ans:1}
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
  {es:'Doscientos / Doscientas',fr:'Deux cents',em:'2️⃣0️⃣0️⃣'},
  {es:'Quinientos / Quinientas',fr:'Cinq cents',em:'5️⃣0️⃣0️⃣'},
  {es:'Mil',fr:'Mille',em:'1️⃣0️⃣0️⃣0️⃣'},
  {es:'Dos mil',fr:'Deux mille',em:'2️⃣0️⃣0️⃣0️⃣'}
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
    {q:'¿Cómo se dice 100 en español?',opts:['Mil','Ciento','Cien','Noventa'],ans:2},
    {q:'¿Cómo se dice 1000 en español?',opts:['Cien','Doscientos','Mil','Novecientos'],ans:2},
    {q:'¿Cómo se dice 2000 en español?',opts:['Dos mil','Mil','Dos cientos','Veinte mil'],ans:0}
   ]},
  {id:'col',level:1,emoji:'🎨',name:'Los Colores',sub:'Rojo, azul, verde… / Les couleurs',
   words:[
    {es:'Rojo',fr:'Rouge',em:'❤️'},{es:'Azul',fr:'Bleu',em:'💙'},{es:'Verde',fr:'Vert',em:'💚'},
    {es:'Amarillo',fr:'Jaune',em:'💛'},{es:'Naranja',fr:'Orange',em:'🧡'},{es:'Blanco',fr:'Blanc',em:'🤍'},
    {es:'Negro',fr:'Noir',em:'🖤'},{es:'Rosa',fr:'Rose',em:'🩷'},
    {es:'Morado / Violeta',fr:'Violet',em:'💜'},{es:'Marrón / Marrón oscuro',fr:'Marron',em:'🤎'},
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
  {id:'viaje',level:1,emoji:'🧳',name:'El Viaje',sub:'Valija, hotel, pasaporte… / Le voyage',
   words:[
    {es:'El pasaporte',fr:'Le passeport',em:'🛂'},
    {es:'La valija',fr:'La valise (valija en Argentine, maleta en Espagne)',em:'🧳'},
    {es:'El equipaje',fr:'Les bagages',em:'🎒'},
    {es:'El pasaje / El boleto',fr:'Le billet (pasaje = avion/bus en Argentine)',em:'🎫'},
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
    {es:'El turista',fr:'Le touriste',em:'📸'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le passeport" en español?',opts:['La valija','El pasaje','El pasaporte','El equipaje'],ans:2},
    {q:'¿Cómo se dice "La valise" en Argentina?',opts:['El maletín','La valija','Los bagages','El boleto'],ans:1},
    {q:'¿Cómo se dice "L\'aéroport" en español?',opts:['La estación','El puerto','El aeropuerto','La aduana'],ans:2},
    {q:'¿Qué significa "La reserva"?',opts:['La réduction','La réservation','L\'assurance','Le remboursement'],ans:1},
    {q:'¿Cómo se dice "Les bagages" en español?',opts:['La valija','El pasaje','El equipaje','La mochila'],ans:2},
    {q:'¿Cómo se dice "Le billet (avion)" en Argentina?',opts:['El billete','El ticket','El pasaje / El boleto','La tarjeta'],ans:2},
    {q:'¿Cómo se dice "La croisière" en español?',opts:['El ferry','El crucero','El barco','El viaje'],ans:1},
    {q:'¿Qué significa "La llegada"?',opts:['Le départ','La correspondance','L\'escale','L\'arrivée'],ans:3}
   ]},
  {id:'rest',level:1,emoji:'🍽️',name:'El Restaurante',sub:'Menú, cuenta, mesa… / Au restaurant',
   words:[
    {es:'La terraza / La vereda',fr:'La terrasse (vereda = trottoir argentin)',em:'☀️'},
    {es:'La mesa',fr:'La table',em:'🪑'},
    {es:'¿Está libre esta mesa?',fr:'Cette table est libre ?',em:'🪑'},
    {es:'El mozo / La moza',fr:'Le serveur / La serveuse (mozo = terme argentin)',em:'🧑‍🍳'},
    {es:'La carta',fr:'La carte',em:'📋'},
    {es:'El menú del día',fr:'Le menu du jour',em:'🍱'},
    {es:'Pedir',fr:'Commander',em:'🙋'},
    {es:'¿Qué me recomendás?',fr:'Que me recommandes-tu ? (voseo argentin)',em:'👨‍🍳'},
    {es:'Sin gluten',fr:'Sans gluten',em:'🌾'},
    {es:'Vegetariano / Vegetariana',fr:'Végétarien / Végétarienne',em:'🥦'},
    {es:'La entrada',fr:'L\'entrée',em:'🥗'},
    {es:'El plato principal',fr:'Le plat principal',em:'🍖'},
    {es:'El postre',fr:'Le dessert',em:'🍮'},
    {es:'El sándwich / El sanguchito',fr:'Le sandwich (sanguchito = terme affectif argentin)',em:'🥖'},
    {es:'Para llevar',fr:'À emporter',em:'🥡'},
    {es:'La cuenta',fr:'L\'addition',em:'💶'},
    {es:'La propina',fr:'Le pourboire',em:'💰'},
    {es:'La propina está incluida',fr:'Le pourboire est inclus',em:'✅'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'addition" en español?',opts:['La propina','La cuenta','El menú','La reserva'],ans:1},
    {q:'¿Cómo se dice "Le serveur" en Argentina?',opts:['El camarero','El mozo','El patrón','El cliente'],ans:1},
    {q:'¿Cómo se dice "Le dessert" en español?',opts:['La entrada','El plato principal','El postre','La ensalada'],ans:2},
    {q:'¿Qué significa "Para llevar"?',opts:['Pour manger sur place','À emporter','À partager','Pour deux personnes'],ans:1},
    {q:'¿Cómo se dice "La terrasse" en español (Argentine)?',opts:['El jardín','La plaza','La terraza','La vereda'],ans:2},
    {q:'¿Qué significa "Pedir"?',opts:['Payer','Réserver','Commander','Choisir'],ans:2},
    {q:'¿Cómo se dice "Le pourboire" en español?',opts:['La cuenta','La propina','El descuento','El precio'],ans:1},
    {q:'¿Cómo se dice "Que recommandes-tu ?" en Argentina (voseo)?',opts:['¿Qué recomienda?','¿Qué me recomendás?','¿Me recomiendas?','¿Qué hay?'],ans:1}
   ]},
  {id:'trans',level:1,emoji:'🚌',name:'Los Transportes',sub:'Colectivo, subte, auto… / Les transports',
   words:[
    {es:'El colectivo / El bondi',fr:'Le bus (colectivo = terme officiel, bondi = lunfardo)',em:'🚌'},
    {es:'El subte',fr:'Le métro (subte = terme argentin, abréviation de subterráneo)',em:'🚇'},
    {es:'El tranvía',fr:'Le tramway',em:'🚊'},
    {es:'El tren',fr:'Le train',em:'🚂'},
    {es:'El avión',fr:'L\'avion',em:'✈️'},
    {es:'El taxi / El remise',fr:'Le taxi / La voiture avec chauffeur (remise = terme argentin)',em:'🚕'},
    {es:'El auto',fr:'La voiture (auto en Argentine, coche en Espagne)',em:'🚗'},
    {es:'La moto',fr:'La moto',em:'🏍️'},
    {es:'La bicicleta / La bici',fr:'Le vélo',em:'🚴'},
    {es:'El pasaje / El boleto',fr:'Le billet de transport',em:'🎫'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le bus" en Argentina?',opts:['El tren','El subte','El colectivo / El bondi','El taxi'],ans:2},
    {q:'¿Cómo se dice "La voiture" en Argentina?',opts:['La moto','El auto','El tranvía','El camión'],ans:1},
    {q:'¿Cómo se dice "Le métro" en Argentina?',opts:['El metro','El subte','El tren','El bus'],ans:1},
    {q:'¿Cómo se dice "Le billet de transport" en Argentina?',opts:['El pasaje / El boleto','El sencillo','El billete','La tarjeta'],ans:0}
   ]},
  {id:'objets',level:1,emoji:'🔑',name:'Objetos del Día',sub:'Teléfono, llaves… / Objets du quotidien',
   words:[
    {es:'El teléfono',fr:'Le téléphone',em:'☎️'},
    {es:'El celular',fr:'Le portable (celular en Argentine, móvil en Espagne)',em:'📱'},
    {es:'La computadora / La compu',fr:'L\'ordinateur (computadora en Argentine, ordenador en Espagne)',em:'💻'},
    {es:'El cargador',fr:'Le chargeur',em:'🔌'},
    {es:'El reloj de pulsera',fr:'La montre',em:'⌚'},
    {es:'El reloj',fr:'L\'horloge / la pendule',em:'🕐'},
    {es:'Las llaves',fr:'Les clés',em:'🔑'},
    {es:'La billetera / El monedero',fr:'Le portefeuille (billetera en Argentine)',em:'👛'},
    {es:'La mochila',fr:'Le sac à dos',em:'🎒'},
    {es:'Los anteojos',fr:'Les lunettes (anteojos en Argentine, gafas en Espagne)',em:'👓'},
    {es:'El paraguas / El sombrilla',fr:'Le parapluie',em:'☂️'},
    {es:'El papel',fr:'Le papier',em:'📄'},
    {es:'El lapicera / El bolígrafo',fr:'Le stylo (lapicera en Argentine)',em:'🖊️'},
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
    {es:'La almohada',fr:'L\'oreiller',em:''},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Les clés" en español?',opts:['El lapicera','Las tijeras','Las llaves','El cargador'],ans:2},
    {q:'¿Cómo se dice "Le téléphone portable" en Argentina?',opts:['La tableta','El celular','La computadora','La radio'],ans:1},
    {q:'¿Cómo se dice "Le sac à dos" en español?',opts:['La billetera','El bolso','La mochila','El sombrero'],ans:2},
    {q:'¿Cómo se dice "L\'ordinateur" en Argentina?',opts:['El celular','La tableta','La computadora','La pantalla'],ans:2},
    {q:'¿Cómo se dice "Les lunettes" en Argentina?',opts:['Los auriculares','Los anteojos','Los guantes','Los relojes'],ans:1},
    {q:'¿Cómo se dice "Le stylo" en Argentina?',opts:['El lápiz','El papel','La lapicera','El libro'],ans:2},
    {q:'¿Cómo se dice "Le portefeuille" en Argentina?',opts:['La mochila','Las llaves','La billetera','El teléfono'],ans:2},
    {q:'¿Qué significa "El espejo"?',opts:['La fenêtre','Le miroir','Le tableau','La porte'],ans:1},
    {q:'¿Cómo se dice "La serviette" en español?',opts:['La almohada','El jabón','La toalla','El vaso'],ans:2},
    {q:'¿Qué significa "La cuchara"?',opts:['Le couteau','La fourchette','La cuillère','L\'assiette'],ans:2},
    {q:'¿Cómo se dice "Le parapluie" en español?',opts:['El abrigo','El paraguas','La bufanda','El impermeable'],ans:1},
    {q:'¿Qué significa "La almohada"?',opts:['La couverture','Le matelas','Le drap','L\'oreiller'],ans:3},
   ]},
   {id:'log',level:1,emoji:'🏠',name:'La Vivienda',sub:'Sala, cocina… / Le logement',
   words:[
    {es:'La casa',fr:'La maison',em:'🏠'},
    {es:'El departamento / El depto',fr:'L\'appartement (departamento en Argentine, piso en Espagne)',em:'🏢'},
    {es:'La entrada / El hall',fr:'L\'entrée',em:'🚪'},
    {es:'La sala / El living',fr:'Le salon (sala ou living en Argentine, salón en Espagne)',em:'🛋️'},
    {es:'La cocina',fr:'La cuisine',em:'🍳'},
    {es:'La habitación / El cuarto',fr:'La chambre',em:'🛏️'},
    {es:'El baño',fr:'La salle de bain',em:'🚿'},
    {es:'El toilette / El baño de visitas',fr:'Les toilettes (toilette = terme argentin)',em:'🚽'},
    {es:'El garaje',fr:'Le garage',em:'🚗'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le salon" en Argentina?',opts:['La cocina','La habitación','La sala / El living','El garaje'],ans:2},
    {q:'¿Qué significa "La cocina"?',opts:['La salle à manger','La cuisine','La salle de bain','Le salon'],ans:1},
    {q:'¿Cómo se dice "La chambre" en español?',opts:['El living','La habitación / El cuarto','La entrada','El garaje'],ans:1},
    {q:'¿Cómo se dice "Les toilettes" en Argentina?',opts:['El baño principal','El garaje','El toilette','La sala'],ans:2},
    {q:'¿Cómo se dice "L\'appartement" en Argentina?',opts:['La casa','La entrada','El departamento / El depto','La habitación'],ans:2}
   ]},
   {id:'muebles_equipamiento', level:1, emoji:'🪑', name:'Muebles y Equipamiento', sub:'Sofá, electrodomésticos, baño… / Meubles et équipements',
 words:[
    {es:'El sofá / El sillón',fr:'Le canapé / Le fauteuil',em:'🛋️'},
    {es:'La mesa',fr:'La table',em:''},
    {es:'La silla',fr:'La chaise',em:'🪑'},
    {es:'La lámpara',fr:'La lampe',em:'💡'},
    {es:'La estantería / El estante',fr:'L\'étagère',em:''},
    {es:'La cama',fr:'Le lit',em:'🛏️'},
    {es:'El ropero / El armario',fr:'L\'armoire (ropero = terme argentin courant)',em:'🗄️'},
    {es:'El escritorio',fr:'Le bureau',em:'🖊️'},
    {es:'La heladera',fr:'Le réfrigérateur (heladera en Argentine, nevera en Espagne)',em:'🧊'},
    {es:'El horno',fr:'Le four',em:'🔥'},
    {es:'El microondas',fr:'Le micro-ondes',em:'🔲♨️'},
    {es:'La pileta / La bacha',fr:'L\'évier (pileta / bacha en Argentine)',em:'🚰'},
    {es:'El lavabo',fr:'Le lavabo (salle de bain)',em:'🚰'},
    {es:'La bañera',fr:'La baignoire',em:'🛁'},
    {es:'La ducha',fr:'La douche',em:'🚿'},
  ],
  quiz10:[
    {q:'¿Cómo se dice "Le canapé" en español?',opts:['El sillón','La silla','El sofá','La cama'],ans:2},
    {q:'¿Cómo se dice "L\'armoire" en Argentina?',opts:['El escritorio','El estante','El ropero','La cama'],ans:2},
    {q:'¿Cómo se dice "Le réfrigérateur" en Argentina?',opts:['El horno','El microondas','La heladera','La pileta'],ans:2},
    {q:'¿Cómo se dice "Le four" en español?',opts:['El microondas','El horno','La pileta','El lavabo'],ans:1},
    {q:'¿Qué significa "La estantería"?',opts:['La lampe','Le fauteuil','La chaise','L\'étagère'],ans:3},
    {q:'¿Cómo se dice "La baignoire" en español?',opts:['El lavabo','La pileta','La bañera','La ducha'],ans:2},
    {q:'¿Qué significa "El escritorio"?',opts:['L\'armoire','Le lit','Le bureau','La table'],ans:2},
  ]},   
   {id:'emot',level:1,emoji:'😄',name:'Las Emociones',sub:'Contento, cansado… / Les émotions',
   words:[
    {es:'Contento / Contenta',fr:'Content / Contente',em:'😊'},
    {es:'Feliz / Feliz',fr:'Heureux / Heureuse',em:'😊'},
    {es:'Alegre / Alegre',fr:'Joyeux / Joyeuse',em:'😄'},
    {es:'Triste / Triste',fr:'Triste / Triste',em:'😢'},
    {es:'Cansado / Cansada',fr:'Fatigué / Fatiguée',em:'😴'},
    {es:'Enojado / Enojada',fr:'Fâché / Fâchée (enojado = terme argentin, enfadado = espagnol)',em:'😠'},
    {es:'Tener miedo',fr:'Avoir peur',em:'😨'},
    {es:'Enfermo / Enferma',fr:'Malade / Malade',em:'🤒'},
    {es:'Preocupado / Preocupada',fr:'Inquiet / Inquiète',em:'😟'},
    {es:'Estresado / Estresada',fr:'Stressé / Stressée',em:'😰'},
    {es:'Decepcionado / Decepcionada',fr:'Déçu / Déçue',em:'😞'},
    {es:'Enamorado / Enamorada',fr:'Amoureux / Amoureuse',em:'😍'},
    {es:'¡Qué piola! / ¡Buenísimo!',fr:'C\'est super ! / Excellent ! (expressions argentines)',em:'🌟'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Fâchée" en Argentina?',opts:['Decepcionada','Enojada','Preocupada','Contenta'],ans:1},
    {q:'¿Cómo se dice "Joyeuse" en español?',opts:['Triste','Cansada','Alegre','Enferma'],ans:2},
    {q:'¿Cómo se dice "Fatigué" en español?',opts:['Estresado','Enfermo','Preocupado','Cansado'],ans:3},
    {q:'¿Qué significa "Enojada" en Argentina?',opts:['Fatiguée','Contente','Fâchée','Malade'],ans:2},
    {q:'¿Qué significa "¡Qué piola!" en argot argentin?',opts:['Ça m\'énerve !','C\'est nul !','C\'est super !','J\'ai peur !'],ans:2},
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
    {es:'La mujer / La esposa / La compañera',fr:'La femme (compañera = terme courant en Argentine)',em:'💑'},
    {es:'El marido / El esposo / El compañero',fr:'Le mari (compañero = terme courant en Argentine)',em:'💍'},
    {es:'El tío / la tía',fr:'L\'oncle / La tante (aussi : pote/copine en argot argentin)',em:'👨/👩'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le père" en español?',opts:['El marido','El hijo','El padre o el papá','El hermano'],ans:2},
    {q:'¿Qué significa "La madre"?',opts:['La fille','La sœur','La maman','La mère'],ans:3},
    {q:'¿Cómo se dice "Le frère" en español?',opts:['El hijo','El hermano','El papá','El marido'],ans:1},
    {q:'¿Qué significa "La hermana"?',opts:['La mère','La grand-mère','La sœur','La fille'],ans:2},
    {q:'¿Cómo se dice "Le grand-père" en español?',opts:['El papá','El marido','El hijo','El abuelo'],ans:3},
    {q:'¿Qué significa "La abuela"?',opts:['La mère','La grand-mère','La sœur','La fille'],ans:1},
    {q:'¿Cómo se dice "La fille" en español?',opts:['La hermana','La esposa','La hija','La mamá'],ans:2},
    {q:'En argot argentin, "tío / tía" peut signifier…',opts:['Père / mère','Pote / copine','Frère / sœur','L\'oncle / La tante'],ans:1}
   ]},
  {id:'verb',level:1,emoji:'📝',name:'Los Verbos',sub:'Ser, tener, ir… / Les verbes principaux (avec voseo)',
   words:[
   {es:'Ser / Estar',fr:'Être (ser=permanent : soy argentino / estar=temporaire : estoy cansado)',em:'🧑',conj:{es:['Yo soy/estoy','Vos sos/estás','Él/Ella es/está','Nosotros somos/estamos','Ustedes son/están'],fr:['Je suis','Tu es (voseo)','Il/Elle est','Nous sommes','Vous/Ils êtes/sont']}},
    {es:'Tener',fr:'Avoir',em:'🤲',conj:{es:['Yo tengo','Vos tenés','Él/Ella tiene','Nosotros tenemos','Ustedes tienen'],fr:['J\'ai','Tu as (voseo)','Il/Elle a','Nous avons','Vous/Ils ont']}},
    {es:'Hablar',fr:'Parler',em:'🗣️',conj:{es:['Yo hablo','Vos hablás','Él/Ella habla','Nosotros hablamos','Ustedes hablan'],fr:['Je parle','Tu parles (voseo)','Il/Elle parle','Nous parlons','Ils/Elles parlent']}},
    {es:'Vivir',fr:'Habiter',em:'🏠',conj:{es:['Yo vivo','Vos vivís','Él/Ella vive','Nosotros vivimos','Ustedes viven'],fr:['J\'habite','Tu habites (voseo)','Il/Elle habite','Nous habitons','Ils/Elles habitent']}},
    {es:'Ir',fr:'Aller',em:'🚶',conj:{es:['Yo voy','Vos vas','Él/Ella va','Nosotros vamos','Ustedes van'],fr:['Je vais','Tu vas (voseo)','Il/Elle va','Nous allons','Ils/Elles vont']}},
    {es:'Gustar',fr:'Aimer',em:'❤️',conj:{es:['Me gusta','Te gusta','Le gusta','Nos gusta','Les gusta'],fr:['J\'aime','Tu aimes','Il/Elle aime','Nous aimons','Ils/Elles aiment']}},
    {es:'Comer',fr:'Manger',em:'🍽️',conj:{es:['Yo como','Vos comés','Él/Ella come','Nosotros comemos','Ustedes comen'],fr:['Je mange','Tu manges (voseo)','Il/Elle mange','Nous mangeons','Ils/Elles mangent']}},
    {es:'Beber / Tomar',fr:'Boire (tomar = terme courant en Argentine)',em:'🥤',conj:{es:['Yo tomo','Vos tomás','Él/Ella toma','Nosotros tomamos','Ustedes toman'],fr:['Je bois','Tu bois (voseo)','Il/Elle boit','Nous buvons','Ils/Elles boivent']}},
    {es:'Dormir',fr:'Dormir',em:'😴',conj:{es:['Yo duermo','Vos dormís','Él/Ella duerme','Nosotros dormimos','Ustedes duermen'],fr:['Je dors','Tu dors (voseo)','Il/Elle dort','Nous dormons','Ils/Elles dorment']}},
    {es:'Caminar',fr:'Marcher',em:'🚶‍♂️',conj:{es:['Yo camino','Vos caminás','Él/Ella camina','Nosotros caminamos','Ustedes caminan'],fr:['Je marche','Tu marches (voseo)','Il/Elle marche','Nous marchons','Ils/Elles marchent']}},
    {es:'Correr',fr:'Courir',em:'🏃‍♂️',conj:{es:['Yo corro','Vos corrés','Él/Ella corre','Nosotros corremos','Ustedes corren'],fr:['Je cours','Tu cours (voseo)','Il/Elle court','Nous courons','Ils/Elles courent']}},
    {es:'Leer',fr:'Lire',em:'📖',conj:{es:['Yo leo','Vos leés','Él/Ella lee','Nosotros leemos','Ustedes leen'],fr:['Je lis','Tu lis (voseo)','Il/Elle lit','Nous lisons','Ils/Elles lisent']}},
    {es:'Escribir',fr:'Écrire',em:'✍️',conj:{es:['Yo escribo','Vos escribís','Él/Ella escribe','Nosotros escribimos','Ustedes escriben'],fr:['J\'écris','Tu écris (voseo)','Il/Elle écrit','Nous écrivons','Ils/Elles écrivent']}},
    {es:'Escuchar',fr:'Écouter',em:'🎧',conj:{es:['Yo escucho','Vos escuchás','Él/Ella escucha','Nosotros escuchamos','Ustedes escuchan'],fr:['J\'écoute','Tu écoutes (voseo)','Il/Elle écoute','Nous écoutons','Ils/Elles écoutent']}},
    {es:'Mirar',fr:'Regarder',em:'👀',conj:{es:['Yo miro','Vos mirás','Él/Ella mira','Nosotros miramos','Ustedes miran'],fr:['Je regarde','Tu regardes (voseo)','Il/Elle regarde','Nous regardons','Ils/Elles regardent']}},
    {es:'Aprender',fr:'Apprendre',em:'🧠',conj:{es:['Yo aprendo','Vos aprendés','Él/Ella aprende','Nosotros aprendemos','Ustedes aprenden'],fr:['J\'apprends','Tu apprends (voseo)','Il/Elle apprend','Nous apprenons','Ils/Elles apprennent']}},
    {es:'Pensar',fr:'Penser',em:'🤔',conj:{es:['Yo pienso','Vos pensás','Él/Ella piensa','Nosotros pensamos','Ustedes piensan'],fr:['Je pense','Tu penses (voseo)','Il/Elle pense','Nous pensons','Ils/Elles pensent']}},
    {es:'Comprar',fr:'Acheter',em:'🛒',conj:{es:['Yo compro','Vos comprás','Él/Ella compra','Nosotros compramos','Ustedes compran'],fr:['J\'achète','Tu achètes (voseo)','Il/Elle achète','Nous achetons','Ils/Elles achètent']}},
    {es:'Pagar',fr:'Payer',em:'💳',conj:{es:['Yo pago','Vos pagás','Él/Ella paga','Nosotros pagamos','Ustedes pagan'],fr:['Je paie','Tu paies (voseo)','Il/Elle paie','Nous payons','Ils/Elles paient']}},
    {es:'Trabajar',fr:'Travailler',em:'💼',conj:{es:['Yo trabajo','Vos trabajás','Él/Ella trabaja','Nosotros trabajamos','Ustedes trabajan'],fr:['Je travaille','Tu travailles (voseo)','Il/Elle travaille','Nous travaillons','Ils/Elles travaillent']}},
    {es:'Manejar',fr:'Conduire (manejar en Argentine, conducir en Espagne)',em:'🚗',conj:{es:['Yo manejo','Vos manejás','Él/Ella maneja','Nosotros manejamos','Ustedes manejan'],fr:['Je conduis','Tu conduis (voseo)','Il/Elle conduit','Nous conduisons','Ils/Elles conduisent']}},
    {es:'Buscar',fr:'Chercher',em:'🔍',conj:{es:['Yo busco','Vos buscás','Él/Ella busca','Nosotros buscamos','Ustedes buscan'],fr:['Je cherche','Tu cherches (voseo)','Il/Elle cherche','Nous cherchons','Ils/Elles cherchent']}},
    {es:'Ducharse',fr:'Se doucher',em:'🧼',conj:{es:['Yo me ducho','Vos te duchás','Él/Ella se ducha','Nosotros nos duchamos','Ustedes se duchan'],fr:['Je me douche','Tu te douches (voseo)','Il/Elle se douche','Nous nous douchons','Ils/Elles se douchent']}},
    {es:'Llamar',fr:'Appeler',em:'📞',conj:{es:['Yo llamo','Vos llamás','Él/Ella llama','Nosotros llamamos','Ustedes llaman'],fr:['J\'appelle','Tu appelles (voseo)','Il/Elle appelle','Nous appelons','Ils/Elles appellent']}},
    {es:'Preguntar',fr:'Demander',em:'🙋‍♂️',conj:{es:['Yo pregunto','Vos preguntás','Él/Ella pregunta','Nosotros preguntamos','Ustedes preguntan'],fr:['Je demande','Tu demandes (voseo)','Il/Elle demande','Nous demandons','Ils/Elles demandent']}}
  ],
   quiz10:[
    {q:'¿Cómo se conjuga "hablar" con "vos" en Argentina?',opts:['Tú hablas','Vos hablás','Vos hablas','Usted habla'],ans:1},
    {q:'¿Qué significa "Ella sonríe"?',opts:['Elle crie','Elle pleure','Elle sourit','Elle chante'],ans:2},
    {q:'¿Cómo se dice "Tu conduis" en Argentina (voseo)?',opts:['Tú conduces','Vos conducís','Vos manejás','Te vas'],ans:2},
    {q:'¿Qué significa "Aprendo"?',opts:['Tu enseignes','Tu écoutes','J\'apprends','Tu lis'],ans:2},
    {q:'¿Cómo se dit "Nous mangeons" en español?',opts:['Como','Comés','Comemos','Comen'],ans:2},
    {q:'¿Cómo se dice "Tu bois" en Argentine (voseo)?',opts:['Tú bebes','Vos bebés','Vos tomás','Él toma'],ans:2},
    {q:'¿Qué significa "Compramos"?',opts:['Nous vendons','Nous cherchons','Nous achetons','Nous payons'],ans:2},
    {q:'¿Cómo se dice "Je travaille" en español?',opts:['Trabajás','Trabajo','Trabaja','Trabajamos'],ans:1},
    {q:'¿Cómo se dit "Tu cherches" en Argentine (voseo)?',opts:['Tú buscas','Vos buscás','Buscamos','Buscan'],ans:1},
    {q:'¿Qué significa "Ella cocina"?',opts:['Elle mange','Elle cuisine','Elle nettoie','Elle lit'],ans:1},
    {q:'En Argentina se dice "manejar el auto" que significa…',opts:['Réparer la voiture','Conduire la voiture','Chercher la voiture','Garer la voiture'],ans:1},
    {q:'¿Cómo se dice "Tu paies" en Argentine (voseo)?',opts:['Tú pagas','Vos pagás','Paga','Pagamos'],ans:1}
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
    {es:'La panza / La barriga',fr:'Le ventre (panza = terme argentin courant)',em:'🫃'},
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
    {q:'¿Cómo se dice "Le ventre" en Argentina (argot)?',opts:['El brazo','La panza','El pie','La espalda'],ans:1},
    {q:'¿Qué significa "El cerebro"?',opts:['Le cœur','Le ventre','Le cerveau','L\'os'],ans:2},
    {q:'¿Cómo se dice "Les dents" en español?',opts:['Los labios','La lengua','Los dientes','Las orejas'],ans:2},
    {q:'¿Qué significa "El corazón"?',opts:['Le cerveau','Le cœur','L\'os','Le dos'],ans:1}
   ]},
  {id:'sante',level:1,emoji:'🏥',name:'La Salud',sub:'Médico, farmacia… / La santé',
   words:[
    {es:'Doler / Me duele',fr:'Faire mal / j\'ai mal (me duele la cabeza = j\'ai mal à la tête)',em:'🤕'},
    {es:'La fiebre',fr:'La fièvre',em:'🌡️'},
    {es:'La tos',fr:'La toux',em:'😮‍💨'},
    {es:'El pañuelo / El kleenex',fr:'Le mouchoir (kleenex très utilisé en Argentine)',em:'🤧'},
    {es:'El termómetro',fr:'Le thermomètre',em:'🌡️'},
    {es:'El turno (médico)',fr:'Le rendez-vous médical (turno = terme argentin)',em:'📅'},
    {es:'El médico / La médica',fr:'Le médecin / La médecin',em:'🩺'},
    {es:'El/la paciente',fr:'Le/la patient(e)',em:'🛏️'},
    {es:'El consultorio',fr:'Le cabinet médical (consultorio en Argentine)',em:'📋'},
    {es:'El enfermero / La enfermera',fr:'L\'infirmier / L\'infirmière',em:'👨‍⚕️'},
    {es:'El hospital / La clínica',fr:'L\'hôpital / La clinique (clínica privée = courant en Argentine)',em:'🏥'},
    {es:'La receta',fr:'L\'ordonnance',em:'📋'},
    {es:'La farmacia',fr:'La pharmacie',em:'🏪'},
    {es:'El medicamento / El remedio',fr:'Le médicament (remedio = terme argentin très courant)',em:'💊'},
    {es:'La pastilla / El comprimido',fr:'Le comprimé',em:'💊'},
    {es:'La vacuna',fr:'Le vaccin',em:'💉'},
    {es:'La curita',fr:'Le pansement adhésif (curita en Argentine, tirita en Espagne)',em:'🩹'},
    {es:'El vendaje',fr:'Le bandage',em:'🩼'},
    {es:'La ambulancia',fr:'L\'ambulance',em:'🚑'},
    {es:'La guardia / Las urgencias',fr:'Les urgences (guardia = terme argentin)',em:'🆘'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'hôpital" en español?',opts:['La farmacia','El hospital / La clínica','La guardia','El consultorio'],ans:1},
    {q:'¿Qué significa "La fiebre"?',opts:['La toux','La douleur','La fièvre','La grippe'],ans:2},
    {q:'¿Cómo se dice "Le vaccin" en español?',opts:['La curita','La vacuna','El vendaje','El remedio'],ans:1},
    {q:'¿Cómo se dice "Le pansement" en Argentina?',opts:['La inyección','La vacuna','La curita','El medicamento'],ans:2},
    {q:'¿Cómo se dice "L\'ordonnance" en español?',opts:['El consultorio','El remedio','La receta','La vacuna'],ans:2},
    {q:'¿Cómo se dice "Les urgences" en Argentina?',opts:['El médico de guardia','La sala de espera','La guardia','El consultorio'],ans:2},
    {q:'¿Cómo se dice "Un rendez-vous médical" en Argentina?',opts:['Una visita','Un turno médico','Una receta','Una consulta'],ans:1},
    {q:'¿Cómo se dit "Le médicament" en Argentine (terme courant)?',opts:['El comprimido','La pastilla','El remedio','La receta'],ans:2}
   ]},
  {id:'ocio', level:1, emoji:'⛰️', name:'El Ocio', sub:'Deporte, senderismo, fútbol… / Les loisirs',
  words:[
    {es:'La lectura',fr:'La lecture',em:'📚'},
    {es:'El libro',fr:'Le livre',em:'📖'},
    {es:'La música',fr:'La musique',em:'🎵'},
    {es:'El cine',fr:'Le cinéma',em:'🎬'},
    {es:'El teatro',fr:'Le théâtre',em:'🎭'},
    {es:'El deporte',fr:'Le sport',em:''},
    {es:'El fútbol',fr:'Le football (passion nationale argentine)',em:'⚽'},
    {es:'La natación',fr:'La natation',em:'🏊'},
    {es:'El ciclismo',fr:'Le cyclisme',em:'🚴'},
    {es:'El atletismo',fr:'L\'athlétisme',em:'🏃'},
    {es:'El senderismo / El trekking',fr:'La randonnée (trekking très utilisé en Argentine)',em:'🥾'},
    {es:'El paseo',fr:'La promenade',em:'🌳'},
    {es:'Jugar',fr:'Jouer',em:'🎮'},
    {es:'Practicar',fr:'Pratiquer',em:'💪'},
    {es:'Descansar',fr:'Se reposer',em:'😴'},
    {es:'Disfrutar / Pasarla bien',fr:'Profiter / Passer un bon moment (pasarla bien = argentin)',em:'😊'},
  ],
  quiz10:[
    {q:'¿Cómo se dice "La randonnée" en Argentina?',opts:['El paseo','El trekking','El atletismo','El senderismo'],ans:1},
    {q:'¿Qué significa "La natación"?',opts:['Le cyclisme','L\'athlétisme','La natation','Le football'],ans:2},
    {q:'¿Cómo se dice "Le livre" en español?',opts:['La lectura','La música','El libro','El cine'],ans:2},
    {q:'¿Qué significa "Pasarla bien" en Argentina?',opts:['Travailler beaucoup','Passer un bon moment','Se reposer','Jouer'],ans:1},
    {q:'¿Qué deporte es una pasión nacional en Argentina?',opts:['El rugby','El básquet','El fútbol','El tenis'],ans:2},
    {q:'¿Qué significa "Descansar"?',opts:['Jouer','Pratiquer','Apprécier','Se reposer'],ans:3},
    {q:'¿Cómo se dice "Le cinéma" en español?',opts:['El teatro','La música','La lectura','El cine'],ans:3},
    {q:'¿Cómo se dice "Jouer" en español?',opts:['Practicar','Disfrutar','Descansar','Jugar'],ans:3},
  ]
},  
   {id:'veth',level:1,emoji:'👗',name:'La Ropa',sub:'Remera, pantalón… / Les vêtements',
   words:[
    {es:'La remera',fr:'Le t-shirt (remera en Argentine, camiseta en Espagne)',em:'👕'},
    {es:'La camisa',fr:'La chemise',em:'👔'},
    {es:'El pantalón',fr:'Le pantalon',em:'👖'},
    {es:'Los zapatos / Las zapatillas',fr:'Les chaussures / Les baskets (zapatillas = baskets en Argentine)',em:'👟'},
    {es:'Las medias',fr:'Les chaussettes (medias en Argentine, calcetines en Espagne)',em:'🧦'},
    {es:'El vestido / La pollera',fr:'La robe / La jupe (pollera = jupe en Argentine)',em:'👗'},
    {es:'El short / Los pantalones cortos',fr:'Le short',em:'🩳'},
    {es:'El buzo / El suéter',fr:'Le pull / Le sweat (buzo = pull/sweat en Argentine)',em:'🧥'},
    {es:'La campera',fr:'La veste / La veste d\'extérieur (campera = terme argentin)',em:'🧥'},
    {es:'El sombrero / La gorra',fr:'Le chapeau / La casquette',em:'🎩'},
    {es:'El piloto',fr:'L\'imperméable (piloto en Argentine)',em:'🧥'},
    {es:'La bufanda',fr:'L\'écharpe',em:'🧣'},
    {es:'Los guantes',fr:'Les gants',em:'🧤'},
    {es:'La malla / El traje de baño',fr:'Le maillot de bain (malla en Argentine)',em:'🩱'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le t-shirt" en Argentina?',opts:['El buzo','La camisa','La remera','La campera'],ans:2},
    {q:'¿Cómo se dice "Les baskets" en Argentina?',opts:['Los zapatos','Las medias','Las zapatillas','El sombrero'],ans:2},
    {q:'¿Cómo se dice "La jupe" en Argentina?',opts:['El vestido','La pollera','La campera','El short'],ans:1},
    {q:'¿Cómo se dice "Le pull/sweat" en Argentina?',opts:['La bufanda','La campera','El buzo','El piloto'],ans:2},
    {q:'¿Cómo se dice "L\'imperméable" en Argentina?',opts:['El buzo','El piloto','El short','Las medias'],ans:1},
    {q:'¿Qué significa "La bufanda"?',opts:['Les gants','Le manteau','L\'écharpe','Le bonnet'],ans:2},
    {q:'¿Cómo se dice "La robe" en español?',opts:['La pollera','El vestido','La campera','El buzo'],ans:1},
    {q:'¿Cómo se dice "Les chaussettes" en Argentina?',opts:['Los zapatos','Los guantes','Las medias','La malla'],ans:2}
   ]},
  {id:'pays',level:1,emoji:'🌍',name:'Los Países',sub:'Francia, Argentina… / Les pays',
   words:[
    {es:'Francia',fr:'La France',em:'🇫🇷'},
    {es:'Argentina',fr:'L\'Argentine',em:'🇦🇷'},
    {es:'España',fr:'L\'Espagne',em:'🇪🇸'},
    {es:'Italia',fr:'L\'Italie (forte influence en Argentine)',em:'🇮🇹'},
    {es:'Brasil',fr:'Le Brésil (grand voisin de l\'Argentine)',em:'🇧🇷'},
    {es:'Uruguay',fr:'L\'Uruguay',em:'🇺🇾'},
    {es:'Chile',fr:'Le Chili',em:'🇨🇱'},
    {es:'Bolivia',fr:'La Bolivie',em:'🇧🇴'},
    {es:'México',fr:'Le Mexique',em:'🇲🇽'},
    {es:'Colombia',fr:'La Colombie',em:'🇨🇴'},
    {es:'Venezuela',fr:'Le Venezuela',em:'🇻🇪'},
    {es:'Perú',fr:'Le Pérou',em:'🇵🇪'},
    {es:'Alemania',fr:'L\'Allemagne',em:'🇩🇪'},
    {es:'Reino Unido',fr:'Le Royaume-Uni',em:'🇬🇧'},
    {es:'Bélgica',fr:'La Belgique',em:'🇧🇪'},
    {es:'Suiza',fr:'La Suisse',em:'🇨🇭'},
    {es:'Estados Unidos',fr:'Les États-Unis',em:'🇺🇸'},
    {es:'China',fr:'La Chine',em:'🇨🇳'},
    {es:'Japón',fr:'Le Japon',em:'🇯🇵'},
    {es:'Marruecos',fr:'Le Maroc',em:'🇲🇦'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "La France" en español?',opts:['Bélgica','Francia','Suiza','Portugal'],ans:1},
    {q:'¿Qué significa "Alemania"?',opts:['Autriche','Pays-Bas','Allemagne','Danemark'],ans:2},
    {q:'¿Cómo se dice "Le Brésil" en español?',opts:['Perú','Chile','Brasil','Bolivia'],ans:2},
    {q:'¿Qué país es vecino de Argentina al oeste?',opts:['Brasil','Uruguay','Chile','Bolivia'],ans:2},
    {q:'¿Cómo se dice "Le Maroc" en español?',opts:['Egipto','Senegal','Marruecos','Sudáfrica'],ans:2},
    {q:'¿Qué país tiene fuerte influencia cultural en Argentina?',opts:['France','Allemagne','Italie','Russie'],ans:2},
    {q:'¿Cómo se dice "L\'Uruguay" en español?',opts:['Colombia','Uruguay','Venezuela','Perú'],ans:1},
    {q:'¿Cómo se dice "Le Chili" en español?',opts:['Turquía','Grecia','Chile','Chipre'],ans:2}
   ]},
  {id:'met',level:1,emoji:'💼',name:'Las Profesiones',sub:'Médico, profe… / Les professions',
   words:[
    {es:'El/la estudiante',fr:'L\'étudiant / L\'étudiante',em:'🎓'},
    {es:'El profesor / La profesora',fr:'Le professeur / La professeure',em:'👩‍🏫'},
    {es:'El mozo / La moza',fr:'Le serveur / La serveuse (terme argentin)',em:'🍽️'},
    {es:'El vendedor / La vendedora',fr:'Le vendeur / La vendeuse',em:'🏪'},
    {es:'El/la taxista / El remisero',fr:'Le chauffeur de taxi / Le chauffeur de remise (argentin)',em:'🚕'},
    {es:'El médico / La médica',fr:'Le médecin / La médecin',em:'🩺'},
    {es:'El enfermero / La enfermera',fr:'L\'infirmier / L\'infirmière',em:'👨‍⚕️'},
    {es:'El cocinero / La cocinera',fr:'Le cuisinier / La cuisinière',em:'👨‍🍳'},
    {es:'El plomero / La plomera',fr:'Le plombier / La plombière (plomero en Argentine)',em:'🔧'},
    {es:'El informático / La informática',fr:'L\'informaticien / L\'informaticienne',em:'💻'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le médecin" en español?',opts:['El profesor','El médico','El enfermero','El cocinero'],ans:1},
    {q:'¿Cómo se dice "Le serveur" en Argentina?',opts:['El cocinero','El mozo','El taxista','El vendedor'],ans:1},
    {q:'¿Cómo se dice "Le plombier" en Argentina?',opts:['El electricista','El plomero','El carpintero','El pintor'],ans:1},
    {q:'¿Qué significa "La estudiante"?',opts:['La professeure','L\'étudiante','La médecin','La vendeuse'],ans:1},
    {q:'¿Qué es un "remisero" en Argentina?',opts:['Un serveur','Un plombier','Un chauffeur de voiture avec chauffeur','Un vendeur'],ans:2}
   ]},
  {id:'anim',level:1,emoji:'🐘',name:'Los Animales',sub:'Perro, gato, vaca… / Les animaux',
   words:[
    {es:'El perro',fr:'Le chien',em:'🐶'},
    {es:'El gato',fr:'Le chat',em:'🐱'},
    {es:'El pájaro',fr:'L\'oiseau',em:'🐦'},
    {es:'El pez',fr:'Le poisson (vivant)',em:'🐟'},
    {es:'El caballo',fr:'Le cheval (essentiel dans la culture gaucho)',em:'🐴'},
    {es:'La vaca',fr:'La vache (symbole de l\'Argentine)',em:'🐮'},
    {es:'El cerdo / El chancho',fr:'Le cochon (chancho = terme argentin courant)',em:'🐷'},
    {es:'La gallina',fr:'La poule',em:'🐔'},
    {es:'El conejo',fr:'Le lapin',em:'🐰'},
    {es:'El toro',fr:'Le taureau',em:'🐂'},
    {es:'El pato',fr:'Le canard',em:'🦆'},
    {es:'El cordero',fr:'L\'agneau (viande traditionnelle en Patagonie)',em:'🐑'},
    {es:'La cabra',fr:'La chèvre',em:'🐐'},
    {es:'El burro',fr:'L\'âne',em:'🫏'},
    {es:'El elefante',fr:'L\'éléphant',em:'🐘'},
    {es:'El oso',fr:'L\'ours',em:'🐻'},
    {es:'El pingüino',fr:'Le manchot (emblème de Patagonie)',em:'🐧'},
    {es:'La ballena',fr:'La baleine (Patagonie)',em:'🐳'},
    {es:'La mariposa',fr:'Le papillon',em:'🦋'},
    {es:'La serpiente / La víbora',fr:'Le serpent (víbora = terme argentin courant)',em:'🐍'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le chien" en español?',opts:['El gato','El caballo','El perro','El conejo'],ans:2},
    {q:'¿Cómo se dice "Le cochon" en Argentina (terme courant)?',opts:['El puerco','El chancho','El cerdo','El cordero'],ans:1},
    {q:'¿Cómo se dice "Le cheval" en español?',opts:['La vaca','El caballo','El oso','El cerdo'],ans:1},
    {q:'¿Qué animal est symbole de l\'Argentine?',opts:['El águila','El toro','La vaca','El caballo'],ans:2},
    {q:'¿Qué animal typique de Patagonie argentin est très connu?',opts:['El elefante','El pingüino','El tigre','El oso'],ans:1},
    {q:'¿Cómo se dice "Le papillon" en español?',opts:['La hormiga','La mariposa','La araña','El mosquito'],ans:1},
    {q:'¿Cómo se dice "Le serpent" en Argentina (terme courant)?',opts:['El lagarto','La rana','La víbora','El insecto'],ans:2},
    {q:'¿Cómo se dice "L\'agneau" en español?',opts:['La vaca','El chancho','El cordero','La cabra'],ans:2}
   ]},
  {id:'plan',level:1,emoji:'🌿',name:'Las Plantas',sub:'Flor, árbol, pampa… / Les plantes',
   words:[
    {es:'La flor',fr:'La fleur',em:'🌸'},
    {es:'El árbol',fr:'L\'arbre',em:'🌳'},
    {es:'La hoja',fr:'La feuille',em:'🍃'},
    {es:'La hierba / El pasto',fr:'L\'herbe (pasto = herbe/gazon en Argentine)',em:'🌱'},
    {es:'El jardín',fr:'Le jardin',em:'🏡'},
    {es:'La rosa',fr:'La rose',em:'🌹'},
    {es:'El bosque / El monte',fr:'La forêt (monte = forêt/nature en Argentine)',em:'🌲'},
    {es:'La pampa',fr:'La pampa (grande plaine argentine)',em:'🌾'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "La fleur" en español?',opts:['La hoja','La flor','El pasto','La rosa'],ans:1},
    {q:'¿Qué significa "El árbol"?',opts:['La feuille','L\'herbe','L\'arbre','La fleur'],ans:2},
    {q:'¿Cómo se dice "La rose" en español?',opts:['La flor','La hoja','El pasto','La rosa'],ans:3},
    {q:'¿Qué significa "La pampa" en Argentina?',opts:['Le jardin','La forêt','La grande plaine argentine','La montagne'],ans:2},
    {q:'¿Cómo se dice "L\'herbe/le gazon" en Argentina?',opts:['El bosque','El árbol','El pasto','La flor'],ans:2}
   ]}  
];


/* ========================================
   Español Argentino → Français 🇦🇷 – Niveau 2
   14 situations de dialogues — Niveau A1
   Français débutant en Argentine
   © 2026 Sébastien Godet
======================================== */
 
var LEVEL2_THEMES = [
 
  /* 1 ── Saluer et prendre des nouvelles */
  {id:'salut2',level:2,emoji:'👋',name:'Saludos',sub:'Saluer quelqu\'un / Dire bonjour en Argentine',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans la rue',img:'🏘️',dialogue:[
      {s:'Lucas',es:'¡Hola! ¿Cómo andás?',fr:'Salut ! Ça va ? (andás = voseo argentin)',side:'left'},
      {s:'Ana',es:'¡Bien, gracias! ¿Y vos?',fr:'Bien, merci ! Et toi ? (vos = voseo)',side:'right'},
      {s:'Lucas',es:'Más o menos. Estoy cansado.',fr:'Comme ci comme ça. Je suis fatigué.',side:'left'},
      {s:'Ana',es:'¡Uy! Lo siento.',fr:'Oh ! Je suis désolée.',side:'right'},
      {s:'Lucas',es:'Gracias. ¡Chau!',fr:'Merci. Salut !',side:'left'},
      {s:'Ana',es:'¡Chau, chau!',fr:'Salut, salut !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Au bureau le matin',img:'💼',dialogue:[
      {s:'Pedro',es:'¡Buenos días! ¿Cómo estás?',fr:'Bonjour ! Comment tu vas ?',side:'left'},
      {s:'María',es:'Bien, gracias. ¿Y vos?',fr:'Bien, merci. Et toi ?',side:'right'},
      {s:'Pedro',es:'Un poco cansado. ¿Querés un café?',fr:'Un peu fatigué. Tu veux un café ? (querés = voseo)',side:'left'},
      {s:'María',es:'Sí, por favor. ¡Gracias!',fr:'Oui, s\'il te plaît. Merci !',side:'right'},
      {s:'Pedro',es:'De nada. ¡Acá tenés!',fr:'De rien. Voilà ! (acá = ici, terme argentin)',side:'left'}
    ]},
    {label:'Sit. 3',title:'Retrouver un ami au café',img:'☀️',dialogue:[
      {s:'Carlos',es:'¡Hola! ¿Qué hacés?',fr:'Salut ! Comment ça va ? (¿qué hacés? = voseo)',side:'left'},
      {s:'Sofía',es:'¡Muy bien! ¿Y vos?',fr:'Très bien ! Et toi ?',side:'right'},
      {s:'Carlos',es:'Bien. ¿Qué hay de nuevo?',fr:'Bien. Quoi de neuf ?',side:'left'},
      {s:'Sofía',es:'Nada especial. ¿Tomamos algo?',fr:'Rien de spécial. On prend quelque chose ?',side:'right'},
      {s:'Carlos',es:'¡Buena idea! Tengo sed.',fr:'Bonne idée ! J\'ai soif.',side:'left'},
      {s:'Sofía',es:'¡Yo también! ¿Un mate?',fr:'Moi aussi ! Un maté ?',side:'right'}
    ]}
   ],
   vocab:['¿Cómo andás? = Ça va ? (voseo argentin)','Bien, gracias = Bien, merci','¿Y vos? = Et toi ? (voseo)','Estoy cansado = Je suis fatigué','Lo siento = Je suis désolé(e)','¡Chau! = Salut ! / Au revoir !','¿Qué hay de nuevo? = Quoi de neuf ?'],
   quiz:[
    {q:'¿Qué significa "¿Cómo andás?" en Argentina?',opts:['Très bien','Ça va ?','Comme ci comme ça','Je suis fatigué'],ans:1},
    {q:'¿Cómo se dice "Je suis désolé" en español?',opts:['Gracias','Lo siento','De nada','Perdón'],ans:1},
    {q:'¿Qué significa "¡Chau!" en Argentina?',opts:['Bonjour !','Merci !','Salut ! / Au revoir !','S\'il vous plaît !'],ans:2}
   ]},
 
  /* 2 ── Se présenter */
  {id:'pres2',level:2,emoji:'🙋',name:'Presentarse',sub:'Dire son nom, son pays / Se présenter en Argentine',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans un cours d\'espagnol',img:'📚',dialogue:[
      {s:'Profesora',es:'¡Hola! ¿Cómo te llamás?',fr:'Bonjour ! Tu t\'appelles comment ? (llamás = voseo)',side:'right'},
      {s:'Marc',es:'Me llamo Marc. ¿Y vos?',fr:'Je m\'appelle Marc. Et toi ?',side:'left'},
      {s:'Profesora',es:'Yo soy Laura. ¿De dónde sos, Marc?',fr:'Je suis Laura. Tu es d\'où, Marc ? (sos = voseo)',side:'right'},
      {s:'Marc',es:'Soy de Francia, de París. ¿Y vos?',fr:'Je suis de France, de Paris. Et toi ?',side:'left'},
      {s:'Profesora',es:'Soy de Buenos Aires. ¡Bienvenido!',fr:'Je suis de Buenos Aires. Bienvenue !',side:'right'},
      {s:'Marc',es:'¡Gracias!',fr:'Merci !',side:'left'}
    ]},
    {label:'Sit. 2',title:'Rencontre dans le quartier',img:'🏙️',dialogue:[
      {s:'Vecino',es:'¡Hola! ¿Sos nuevo acá?',fr:'Bonjour ! Tu es nouveau ici ? (sos/acá = voseo argentin)',side:'right'},
      {s:'Julie',es:'Sí. Me llamo Julie. Soy francesa.',fr:'Oui. Je m\'appelle Julie. Je suis française.',side:'left'},
      {s:'Vecino',es:'Yo soy Martín. ¿Hablás español?',fr:'Moi je suis Martín. Tu parles espagnol ? (hablás = voseo)',side:'right'},
      {s:'Julie',es:'Un poco. Estoy aprendiendo.',fr:'Un peu. Je suis en train d\'apprendre.',side:'left'},
      {s:'Vecino',es:'¡Muy bien! Tu español es muy bueno.',fr:'Très bien ! Ton espagnol est très bon.',side:'right'},
      {s:'Julie',es:'¡Gracias! Sos muy amable.',fr:'Merci ! Tu es très gentil. (sos = voseo)',side:'left'}
    ]},
    {label:'Sit. 3',title:'À une fiesta',img:'🎉',dialogue:[
      {s:'Chica',es:'¡Hola! ¿Cómo te llamás?',fr:'Salut ! Tu t\'appelles comment ?',side:'right'},
      {s:'Thomas',es:'Thomas. ¿Y vos?',fr:'Thomas. Et toi ?',side:'left'},
      {s:'Chica',es:'Yo soy Valentina. ¿Sos francés?',fr:'Moi je suis Valentina. Tu es français ?',side:'right'},
      {s:'Thomas',es:'Sí, soy de Lyon. ¿Y vos sos de Buenos Aires?',fr:'Oui, je suis de Lyon. Et toi tu es de Buenos Aires ?',side:'left'},
      {s:'Chica',es:'No, soy de Córdoba. ¡Mucho gusto!',fr:'Non, je suis de Córdoba. Enchanté !',side:'right'},
      {s:'Thomas',es:'¡Mucho gusto!',fr:'Enchanté !',side:'left'}
    ]}
   ],
   vocab:['Me llamo = Je m\'appelle','¿De dónde sos? = Tu es d\'où ? (voseo)','Soy de = Je suis de','Soy francés / francesa = Je suis français(e)','Estoy aprendiendo = Je suis en train d\'apprendre','¡Bienvenido! = Bienvenue !','¡Mucho gusto! = Enchanté(e) !'],
   quiz:[
    {q:'¿Cómo se dice "Je m\'appelle" en español?',opts:['Soy','Me llamo','Tengo','Vivo'],ans:1},
    {q:'¿Qué significa "¿De dónde sos?" en Argentina?',opts:['Comment tu t\'appelles ?','Quel âge tu as ?','Tu es d\'où ?','Tu habites où ?'],ans:2},
    {q:'¿Cómo se dice "Enchanté" en Argentina?',opts:['Gracias','Lo siento','Perdón','¡Mucho gusto!'],ans:3}
   ]},
 
  /* 3 ── Demander son chemin */
  {id:'chemin2',level:2,emoji:'🗺️',name:'Pedir camino',sub:'Demander son chemin / S\'orienter en ville',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Trouver la station de train',img:'🚉',dialogue:[
      {s:'Turista',es:'Disculpá, ¿dónde está la estación?',fr:'Pardon, où est la gare ? (disculpá = voseo argentin)',side:'left'},
      {s:'Señora',es:'Seguí todo recto y doblá a la izquierda.',fr:'Continue tout droit et tourne à gauche. (seguí/doblá = voseo)',side:'right'},
      {s:'Turista',es:'¿Está lejos?',fr:'C\'est loin ?',side:'left'},
      {s:'Señora',es:'No, está cerca. Son cinco cuadras.',fr:'Non, c\'est près. C\'est cinq pâtés de maisons.',side:'right'},
      {s:'Turista',es:'Muchas gracias.',fr:'Merci beaucoup.',side:'left'},
      {s:'Señora',es:'¡De nada!',fr:'De rien !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Trouver une pharmacie',img:'💊',dialogue:[
      {s:'Marc',es:'Disculpá, ¿hay una farmacia cerca?',fr:'Pardon, il y a une pharmacie près d\'ici ?',side:'left'},
      {s:'Chico',es:'Sí. Bajá esta calle y doblá a la derecha.',fr:'Oui. Descends cette rue et tourne à droite. (bajá/doblá = voseo)',side:'right'},
      {s:'Marc',es:'¿Después del banco?',fr:'Après la banque ?',side:'left'},
      {s:'Chico',es:'Sí, exacto. Es la puerta verde.',fr:'Oui, exactement. C\'est la porte verte.',side:'right'},
      {s:'Marc',es:'¿Está abierta ahora?',fr:'Elle est ouverte maintenant ?',side:'left'},
      {s:'Chico',es:'Sí, creo que sí.',fr:'Oui, je crois que oui.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Trouver un supermarché',img:'🛒',dialogue:[
      {s:'Julie',es:'Disculpe, ¿hay un supermercado acá?',fr:'Pardon, il y a un supermarché ici ? (acá = ici en argentin)',side:'left'},
      {s:'Señor',es:'Sí, está enfrente, al lado del kiosco.',fr:'Oui, il est en face, à côté du kiosque.',side:'right'},
      {s:'Julie',es:'¿A la derecha o a la izquierda?',fr:'À droite ou à gauche ?',side:'left'},
      {s:'Señor',es:'A la derecha. Es muy grande.',fr:'À droite. Il est très grand.',side:'right'},
      {s:'Julie',es:'¡Perfecto! Gracias.',fr:'Parfait ! Merci.',side:'left'},
      {s:'Señor',es:'¡De nada, buen día!',fr:'De rien, bonne journée !',side:'right'}
    ]}
   ],
   vocab:['Disculpá / Disculpe = Pardon / Excusez-moi','¿Dónde está...? = Où est... ?','Todo recto = Tout droit','A la izquierda = À gauche','A la derecha = À droite','Cerca = Près','La cuadra = Le pâté de maisons'],
   quiz:[
    {q:'¿Cómo se dice "Tout droit" en español?',opts:['A la derecha','A la izquierda','Todo recto','Enfrente'],ans:2},
    {q:'¿Qué significa "Disculpá" en Argentina?',opts:['Merci','S\'il te plaît','Pardon / Excuse-moi','Au revoir'],ans:2},
    {q:'¿Cómo se dit "À gauche" en español?',opts:['Todo recto','A la derecha','Detrás','A la izquierda'],ans:3}
   ]},
 
  /* 4 ── Au café / bar */
  {id:'bar2',level:2,emoji:'☕',name:'En el café / bar',sub:'Commander au café argentin / Café et facturas',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Commande simple',img:'☕',dialogue:[
      {s:'Cliente',es:'¡Hola! Un café con leche, por favor.',fr:'Bonjour ! Un café au lait, s\'il vous plaît.',side:'left'},
      {s:'Mozo',es:'¿Solo o con leche?',fr:'Noir ou au lait ?',side:'right'},
      {s:'Cliente',es:'Con leche, por favor.',fr:'Au lait, s\'il vous plaît.',side:'left'},
      {s:'Mozo',es:'¿Querés azúcar?',fr:'Tu veux du sucre ? (querés = voseo)',side:'right'},
      {s:'Cliente',es:'Sí, uno. ¿Cuánto sale?',fr:'Oui, un. C\'est combien ? (cuánto sale = argentin)',side:'left'},
      {s:'Mozo',es:'Son quinientos pesos.',fr:'C\'est cinq cents pesos.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Commander des medias lunas',img:'🥐',dialogue:[
      {s:'Mozo',es:'¿Qué van a tomar?',fr:'Qu\'est-ce que vous prenez ?',side:'right'},
      {s:'Clara',es:'Una cerveza, por favor.',fr:'Une bière, s\'il vous plaît.',side:'left'},
      {s:'Tomás',es:'Y yo, un agua. ¿Tienen medialunas?',fr:'Et moi, une eau. Vous avez des medialunas ? (croissants argentins)',side:'right'},
      {s:'Mozo',es:'Sí. Hay de manteca y de grasa.',fr:'Oui. Il y en a au beurre et au saindoux.',side:'right'},
      {s:'Clara',es:'¡Perfecto! Unas de manteca, por favor.',fr:'Parfait ! Des medialunas au beurre, s\'il vous plaît.',side:'left'},
      {s:'Mozo',es:'¡Ya les traigo!',fr:'Je vous les apporte tout de suite !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Payer l\'addition',img:'🧾',dialogue:[
      {s:'Cliente',es:'¡Mozo! La cuenta, por favor.',fr:'Garçon ! L\'addition, s\'il vous plaît.',side:'left'},
      {s:'Mozo',es:'Son dos mil pesos.',fr:'C\'est deux mille pesos.',side:'right'},
      {s:'Cliente',es:'¿Se puede pagar con tarjeta?',fr:'On peut payer par carte ?',side:'left'},
      {s:'Mozo',es:'Sí, claro. O efectivo si querés.',fr:'Oui, bien sûr. Ou en espèces si tu veux.',side:'right'},
      {s:'Cliente',es:'Pago con tarjeta. Gracias.',fr:'Je paie par carte. Merci.',side:'left'},
      {s:'Mozo',es:'¡Gracias a vos! ¡Buen día!',fr:'Merci à vous ! Bonne journée !',side:'right'}
    ]}
   ],
   vocab:['Un café con leche = Un café au lait','Un café solo = Un café noir','¿Cuánto sale? = C\'est combien ? (argentin)','La cuenta = L\'addition','¿Se puede pagar con tarjeta? = On peut payer par carte ?','Las medialunas = Les croissants argentins','El mozo = Le serveur'],
   quiz:[
    {q:'¿Cómo se dice "Un café noir" en Argentina?',opts:['Un café con leche','Un cortado','Un café solo','Un submarino'],ans:2},
    {q:'¿Qué significa "La cuenta, por favor"?',opts:['Le menu, s\'il vous plaît','L\'addition, s\'il vous plaît','Un café, s\'il vous plaît','L\'eau, s\'il vous plaît'],ans:1},
    {q:'¿Cómo se dit "C\'est combien ?" en Argentine?',opts:['¿Dónde está?','¿Qué es?','¿Cuánto sale?','¿Cómo se llama?'],ans:2}
   ]},
 
  /* 5 ── Au restaurant */
  {id:'resto2',level:2,emoji:'🍽️',name:'En el restaurante',sub:'Commander un repas / Au restaurant argentin',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Avoir une table',img:'🪑',dialogue:[
      {s:'Cliente',es:'Hola, ¿tienen mesa para dos?',fr:'Bonjour, vous avez une table pour deux ?',side:'left'},
      {s:'Moza',es:'Sí, por acá, por favor.',fr:'Oui, par ici, s\'il vous plaît.',side:'right'},
      {s:'Cliente',es:'Gracias. ¿Tienen menú del día?',fr:'Merci. Vous avez le menu du jour ?',side:'left'},
      {s:'Moza',es:'Sí. Hoy hay sopa, pollo y postre.',fr:'Oui. Aujourd\'hui il y a soupe, poulet et dessert.',side:'right'},
      {s:'Cliente',es:'¿Cuánto sale el menú?',fr:'Le menu coûte combien ?',side:'left'},
      {s:'Moza',es:'Tres mil pesos, bebida incluida.',fr:'Trois mille pesos, boisson comprise.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Commander à table',img:'🥗',dialogue:[
      {s:'Mozo',es:'¿Están listos para pedir?',fr:'Vous êtes prêts à commander ?',side:'right'},
      {s:'Sophie',es:'Sí. De entrada, una ensalada.',fr:'Oui. En entrée, une salade.',side:'left'},
      {s:'Mozo',es:'¿Y de principal?',fr:'Et en plat ?',side:'right'},
      {s:'Sophie',es:'El pollo. ¿Tienen algo sin carne?',fr:'Le poulet. Vous avez quelque chose sans viande ?',side:'left'},
      {s:'Mozo',es:'Sí, hay verduras a la plancha.',fr:'Oui, il y a des légumes grillés.',side:'right'},
      {s:'Sophie',es:'Perfecto, eso quiero.',fr:'Parfait, c\'est ça que je veux.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Un problème avec la commande',img:'🤔',dialogue:[
      {s:'Cliente',es:'Disculpá, esto no es lo que pedí.',fr:'Pardon, ce n\'est pas ce que j\'ai commandé.',side:'left'},
      {s:'Mozo',es:'Lo siento. ¿Qué pediste?',fr:'Je suis désolé. Qu\'est-ce que tu as commandé ? (pediste = voseo)',side:'right'},
      {s:'Cliente',es:'Pedí el pescado, no la carne.',fr:'J\'ai commandé le poisson, pas la viande.',side:'left'},
      {s:'Mozo',es:'Perdoná, ahora mismo lo cambio.',fr:'Excuse-moi, je le change tout de suite.',side:'right'},
      {s:'Cliente',es:'Gracias.',fr:'Merci.',side:'left'},
      {s:'Mozo',es:'¡Disculpá mucho!',fr:'Vraiment désolé !',side:'right'}
    ]}
   ],
   vocab:['¿Tienen mesa para dos? = Vous avez une table pour deux ?','El menú del día = Le menu du jour','De entrada = En entrée','De principal = En plat (terme argentin)','Sin carne = Sans viande','Bebida incluida = Boisson comprise','¿Cuánto sale? = Combien ça coûte ? (argentin)'],
   quiz:[
    {q:'¿Cómo se dit "En plat" en Argentine?',opts:['De postre','De principal','Para beber','De entrada'],ans:1},
    {q:'¿Cómo se dit "En entrée" en español?',opts:['De postre','De segundo','Para beber','De entrada'],ans:3},
    {q:'¿Qué significa "Sin carne"?',opts:['Avec de la viande','Sans poisson','Sans viande','Avec du poulet'],ans:2}
   ]},
 
  /* 6 ── Faire des courses */
  {id:'compras2',level:2,emoji:'🛍️',name:'De compras',sub:'Acheter des choses / Faire ses courses en Argentine',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Au marché',img:'🧺',dialogue:[
      {s:'Cliente',es:'Buen día. ¿Cuánto salen los tomates?',fr:'Bonjour. Combien coûtent les tomates ? (salen = argentin)',side:'left'},
      {s:'Verdulero',es:'Doscientos pesos el kilo.',fr:'Deux cents pesos le kilo.',side:'right'},
      {s:'Cliente',es:'Quiero un kilo, por favor.',fr:'Je veux un kilo, s\'il vous plaît.',side:'left'},
      {s:'Verdulero',es:'¿Algo más?',fr:'Autre chose ?',side:'right'},
      {s:'Cliente',es:'Sí, ¿tiene naranjas?',fr:'Oui, vous avez des oranges ?',side:'left'},
      {s:'Verdulero',es:'Sí. Son cien pesos el kilo.',fr:'Oui. C\'est cent pesos le kilo.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Dans un magasin de vêtements',img:'👗',dialogue:[
      {s:'Vendedora',es:'¡Hola! ¿Te puedo ayudar?',fr:'Bonjour ! Je peux t\'aider ?',side:'right'},
      {s:'Lucie',es:'Sí, busco una remera.',fr:'Oui, je cherche un t-shirt.',side:'left'},
      {s:'Vendedora',es:'¿Qué talle usás?',fr:'Tu fais quelle taille ? (talle / usás = argentin)',side:'right'},
      {s:'Lucie',es:'El talle mediano.',fr:'La taille moyenne.',side:'left'},
      {s:'Vendedora',es:'¿Te la querés probar? El probador está acá.',fr:'Tu veux l\'essayer ? La cabine est là.',side:'right'},
      {s:'Lucie',es:'¡Gracias! ¿Cuánto sale?',fr:'Merci ! Elle coûte combien ?',side:'left'}
    ]},
    {label:'Sit. 3',title:'À la caisse',img:'🛒',dialogue:[
      {s:'Cajero',es:'¡Hola! ¿Todo bien?',fr:'Bonjour ! Tout va bien ?',side:'right'},
      {s:'Cliente',es:'Sí, gracias. ¿Cuánto es todo?',fr:'Oui, merci. C\'est combien en tout ?',side:'left'},
      {s:'Cajero',es:'Son cuatro mil quinientos pesos.',fr:'C\'est quatre mille cinq cents pesos.',side:'right'},
      {s:'Cliente',es:'¿Puedo pagar con tarjeta?',fr:'Je peux payer par carte ?',side:'left'},
      {s:'Cajero',es:'Sí, sin problema.',fr:'Oui, sans problème.',side:'right'},
      {s:'Cliente',es:'Acá tiene. ¡Gracias!',fr:'Voilà. Merci ! (acá = ici)',side:'left'}
    ]}
   ],
   vocab:['¿Cuánto sale? = Combien ça coûte ? (argentin)','Quiero = Je veux','¿Algo más? = Autre chose ?','Busco = Je cherche','El talle = La taille (argentin)','El probador = La cabine d\'essayage','La remera = Le t-shirt (argentin)'],
   quiz:[
    {q:'¿Cómo se dice "Je cherche" en español?',opts:['Tengo','Quiero','Busco','Compro'],ans:2},
    {q:'¿Qué significa "¿Algo más?"',opts:['C\'est tout ?','Autre chose ?','Vous avez ça ?','C\'est combien ?'],ans:1},
    {q:'¿Cómo se dice "La taille" (vêtement) en Argentina?',opts:['El color','El precio','El talle','El número'],ans:2}
   ]},
 
  /* 7 ── Prendre les transports */
  {id:'transp2',level:2,emoji:'🚌',name:'El transporte',sub:'Prendre le bus et le subte / Les transports',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans le subte (métro)',img:'🚇',dialogue:[
      {s:'Viajero',es:'Disculpá, ¿este subte va al centro?',fr:'Pardon, ce métro va au centre ? (subte = métro argentin)',side:'left'},
      {s:'Señora',es:'No. Tenés que tomar la línea A.',fr:'Non. Tu dois prendre la ligne A. (tenés = voseo)',side:'right'},
      {s:'Viajero',es:'¿Dónde está la línea A?',fr:'Où est la ligne A ?',side:'left'},
      {s:'Señora',es:'Ahí, a la derecha.',fr:'Là-bas, à droite.',side:'right'},
      {s:'Viajero',es:'¿Cuántas paradas son?',fr:'C\'est combien d\'arrêts ?',side:'left'},
      {s:'Señora',es:'Cuatro paradas. Bajás en Plaza de Mayo.',fr:'Quatre arrêts. Tu descends à Plaza de Mayo.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Acheter un pasaje',img:'🎫',dialogue:[
      {s:'Viajero',es:'Hola, quiero un pasaje, por favor.',fr:'Bonjour, je veux un billet, s\'il vous plaît.',side:'left'},
      {s:'Empleada',es:'¿Sencillo o recarga de SUBE?',fr:'Simple ou recharge de la carte SUBE ? (carte de transport argentin)',side:'right'},
      {s:'Viajero',es:'¿Cuánto sale el pasaje?',fr:'Combien coûte le billet ?',side:'left'},
      {s:'Empleada',es:'Quinientos pesos. La SUBE conviene más.',fr:'Cinq cents pesos. La carte SUBE est plus avantageuse.',side:'right'},
      {s:'Viajero',es:'¿Cómo consigo la SUBE?',fr:'Comment j\'obtiens la carte SUBE ?',side:'left'},
      {s:'Empleada',es:'En el kiosco de enfrente.',fr:'Au kiosque en face.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Dans le colectivo (bus)',img:'🚌',dialogue:[
      {s:'Pasajero',es:'Disculpá, ¿este colectivo va a Palermo?',fr:'Pardon, ce bus va à Palermo ? (colectivo = bus argentin)',side:'left'},
      {s:'Señor',es:'No, este va al Once.',fr:'Non, celui-ci va au quartier Once.',side:'right'},
      {s:'Pasajero',es:'¿Qué colectivo va a Palermo?',fr:'Quel bus va à Palermo ?',side:'left'},
      {s:'Señor',es:'El 39.',fr:'Le 39.',side:'right'},
      {s:'Pasajero',es:'¿Dónde está la parada?',fr:'Où est l\'arrêt ?',side:'left'},
      {s:'Señor',es:'Está en la esquina, del otro lado de la calle.',fr:'Il est au coin, de l\'autre côté de la rue.',side:'right'}
    ]}
   ],
   vocab:['Tomar el subte = Prendre le métro (argentin)','El colectivo / El bondi = Le bus (argentin)','La parada = L\'arrêt','El pasaje = Le billet','Bajar en = Descendre à','¿Cuántas paradas? = Combien d\'arrêts ?','La SUBE = La carte de transport argentine'],
   quiz:[
    {q:'¿Cómo se dit "Prendre le métro" en Argentine?',opts:['Ir al metro','Tomar el subte','Bajar del subte','Buscar el subte'],ans:1},
    {q:'¿Qué significa "La parada"?',opts:['Le billet','La ligne','L\'arrêt','Le quai'],ans:2},
    {q:'¿Cómo se dit "Le bus" en Argentine (terme officiel)?',opts:['El bondi','El tren','El colectivo','El subte'],ans:2}
   ]},
 
  /* 8 ── À la pharmacie */
  {id:'farmacia2',level:2,emoji:'💊',name:'En la farmacia',sub:'Acheter des médicaments / À la pharmacie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Mal de tête',img:'🤕',dialogue:[
      {s:'Cliente',es:'Hola. Me duele la cabeza. ¿Qué tenés?',fr:'Bonjour. J\'ai mal à la tête. Qu\'est-ce que vous avez ? (tenés = voseo)',side:'left'},
      {s:'Farmacéutica',es:'¿Sos alérgico a algún remedio?',fr:'Vous êtes allergique à un médicament ? (remedio = argentin)',side:'right'},
      {s:'Cliente',es:'No, no soy alérgico.',fr:'Non, je ne suis pas allergique.',side:'left'},
      {s:'Farmacéutica',es:'Te doy un ibuprofeno. Tomá uno con comida.',fr:'Je vous donne un ibuprofène. Prenez-en un avec de la nourriture.',side:'right'},
      {s:'Cliente',es:'¿Cuántas veces por día?',fr:'Combien de fois par jour ?',side:'left'},
      {s:'Farmacéutica',es:'Tres veces por día, máximo.',fr:'Trois fois par jour, maximum.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Pharmacie de nuit',img:'🌙',dialogue:[
      {s:'Turista',es:'Disculpá, ¿hay una farmacia abierta ahora?',fr:'Pardon, il y a une pharmacie ouverte maintenant ?',side:'left'},
      {s:'Vecina',es:'Las farmacias están cerradas. Necesitás la farmacia de turno.',fr:'Les pharmacies sont fermées. Tu as besoin de la pharmacie de garde.',side:'right'},
      {s:'Turista',es:'¿Dónde está?',fr:'Elle est où ?',side:'left'},
      {s:'Vecina',es:'Mirá el cartel de esta farmacia. Dice cuál está de turno.',fr:'Regarde l\'affiche de cette pharmacie. Elle indique laquelle est de garde.',side:'right'},
      {s:'Turista',es:'¡Ah, entiendo! Gracias.',fr:'Ah, je comprends ! Merci.',side:'left'},
      {s:'Vecina',es:'¡De nada!',fr:'De rien !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Acheter un remède',img:'💉',dialogue:[
      {s:'Cliente',es:'Hola. ¿Tenés algo para la tos?',fr:'Bonjour. Vous avez quelque chose pour la toux ?',side:'left'},
      {s:'Farmacéutico',es:'Sí. ¿Es para adulto o para chico?',fr:'Oui. C\'est pour un adulte ou un enfant ? (chico = enfant en argentin)',side:'right'},
      {s:'Cliente',es:'Para adulto.',fr:'Pour un adulte.',side:'left'},
      {s:'Farmacéutico',es:'Tomá este jarabe. Dos cucharadas, tres veces por día.',fr:'Prenez ce sirop. Deux cuillères, trois fois par jour.',side:'right'},
      {s:'Cliente',es:'¿Cuánto sale?',fr:'Ça coûte combien ?',side:'left'},
      {s:'Farmacéutico',es:'Ochocientos pesos.',fr:'Huit cents pesos.',side:'right'}
    ]}
   ],
   vocab:['Me duele la cabeza = J\'ai mal à la tête','Me duele la garganta = J\'ai mal à la gorge','La farmacia de turno = La pharmacie de garde (argentin)','El remedio = Le médicament (argentin)','El jarabe = Le sirop','Tres veces por día = Trois fois par jour','El chico / la chica = L\'enfant (argentin)'],
   quiz:[
    {q:'¿Cómo se dice "J\'ai mal à la tête" en español?',opts:['Tengo fiebre','Me duele el estómago','Me duele la cabeza','Estoy cansado'],ans:2},
    {q:'¿Qué es la "farmacia de turno" en Argentina?',opts:['La grande pharmacie','La pharmacie de garde ouverte la nuit','La pharmacie de l\'hôpital','La pharmacie pour touristes'],ans:1},
    {q:'¿Cómo se dit "L\'enfant" en argentin courant?',opts:['El menor','El niño','El chico','El bebé'],ans:2}
   ]},
 
  /* 9 ── À l'hôtel */
  {id:'hotel2',level:2,emoji:'🏨',name:'En el hotel',sub:'Arriver à l\'hôtel / S\'installer',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Arrivée à la réception',img:'🛎️',dialogue:[
      {s:'Recepcionista',es:'¡Buenas noches! ¿Tenés reserva?',fr:'Bonsoir ! Vous avez une réservation ? (tenés = voseo)',side:'right'},
      {s:'Huésped',es:'Sí. Me llamo Dupont. Una habitación doble.',fr:'Oui. Je m\'appelle Dupont. Une chambre double.',side:'left'},
      {s:'Recepcionista',es:'Acá está. ¿Su pasaporte, por favor?',fr:'Voilà. Votre passeport, s\'il vous plaît ?',side:'right'},
      {s:'Huésped',es:'Acá tiene. ¿El desayuno está incluido?',fr:'Voilà. Le petit-déjeuner est inclus ?',side:'left'},
      {s:'Recepcionista',es:'Sí, de siete a diez.',fr:'Oui, de sept à dix heures.',side:'right'},
      {s:'Huésped',es:'¡Perfecto! Gracias.',fr:'Parfait ! Merci.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Un problème dans la chambre',img:'🔧',dialogue:[
      {s:'Huésped',es:'Hola. Hay un problema en mi habitación.',fr:'Bonjour. Il y a un problème dans ma chambre.',side:'left'},
      {s:'Recepcionista',es:'¿Qué pasó?',fr:'Qu\'est-ce qui se passe ? (pasó = argentin)',side:'right'},
      {s:'Huésped',es:'El aire acondicionado no funciona.',fr:'La climatisation ne fonctionne pas.',side:'left'},
      {s:'Recepcionista',es:'Lo siento. ¿Querés cambiar de habitación?',fr:'Je suis désolé. Tu veux changer de chambre ? (querés = voseo)',side:'right'},
      {s:'Huésped',es:'Sí, por favor.',fr:'Oui, s\'il vous plaît.',side:'left'},
      {s:'Recepcionista',es:'Acá tenés la llave de la trescientos veinte.',fr:'Voilà la clé de la trois cent vingt.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Demander des infos',img:'🗺️',dialogue:[
      {s:'Huésped',es:'Disculpá, ¿hay un restaurante cerca?',fr:'Pardon, il y a un restaurant près d\'ici ?',side:'left'},
      {s:'Recepcionista',es:'Sí, hay uno muy bueno a dos cuadras.',fr:'Oui, il y en a un très bon à deux pâtés de maisons.',side:'right'},
      {s:'Huésped',es:'¿Y hay algo para visitar acá?',fr:'Et il y a des choses à visiter ici ?',side:'left'},
      {s:'Recepcionista',es:'Sí, el teatro está muy cerca.',fr:'Oui, le théâtre est très près.',side:'right'},
      {s:'Huésped',es:'¿Está abierto hoy?',fr:'Il est ouvert aujourd\'hui ?',side:'left'},
      {s:'Recepcionista',es:'Sí, de las nueve a las seis.',fr:'Oui, de neuf heures à dix-huit heures.',side:'right'}
    ]}
   ],
   vocab:['¿Tenés reserva? = Vous avez une réservation ? (voseo)','La habitación doble = La chambre double','El desayuno incluido = Le petit-déjeuner inclus','No funciona = Ça ne fonctionne pas','Cambiar de habitación = Changer de chambre','La llave = La clé','La cuadra = Le pâté de maisons (argentin)'],
   quiz:[
    {q:'¿Cómo se dice "La chambre double" en español?',opts:['La habitación individual','La habitación doble','La suite','La habitación familiar'],ans:1},
    {q:'¿Qué significa "No funciona"?',opts:['C\'est fermé','Ça ne marche pas','C\'est cassé','Je ne sais pas'],ans:1},
    {q:'¿Cómo se dit "La clé" en español?',opts:['La puerta','La ventana','La llave','El ascensor'],ans:2}
   ]},
 
  /* 10 ── Chez le médecin */
  {id:'medico2',level:2,emoji:'🩺',name:'En el médico',sub:'Expliquer ce qui ne va pas / Chez le médecin',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Expliquer ses symptômes',img:'🤒',dialogue:[
      {s:'Médico',es:'¡Buenos días! ¿Qué te pasa?',fr:'Bonjour ! Qu\'est-ce qui ne va pas ?',side:'right'},
      {s:'Paciente',es:'Tengo fiebre y me duele la garganta.',fr:'J\'ai de la fièvre et j\'ai mal à la gorge.',side:'left'},
      {s:'Médico',es:'¿Desde cuándo?',fr:'Depuis quand ?',side:'right'},
      {s:'Paciente',es:'Desde ayer.',fr:'Depuis hier.',side:'left'},
      {s:'Médico',es:'¿Tenés tos también?',fr:'Tu as aussi de la toux ? (tenés = voseo)',side:'right'},
      {s:'Paciente',es:'Sí, un poco.',fr:'Oui, un peu.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Comprendre le médecin',img:'💊',dialogue:[
      {s:'Médico',es:'Tenés una infección. Te receto un antibiótico.',fr:'Vous avez une infection. Je vous prescris un antibiotique.',side:'right'},
      {s:'Paciente',es:'¿Cuándo tomo el remedio?',fr:'Quand est-ce que je prends le médicament ? (remedio = argentin)',side:'left'},
      {s:'Médico',es:'Uno a la mañana y uno a la noche.',fr:'Un le matin et un le soir. (a la mañana/noche = argentin)',side:'right'},
      {s:'Paciente',es:'¿Por cuántos días?',fr:'Pendant combien de jours ?',side:'left'},
      {s:'Médico',es:'Siete días. Y tomá mucha agua.',fr:'Sept jours. Et buvez beaucoup d\'eau.',side:'right'},
      {s:'Paciente',es:'Gracias, doctor.',fr:'Merci, docteur.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Prendre un rendez-vous',img:'📞',dialogue:[
      {s:'Paciente',es:'Hola, quiero sacar un turno con el médico.',fr:'Bonjour, je veux prendre un rendez-vous. (sacar un turno = argentin)',side:'left'},
      {s:'Recepcionista',es:'¿Para cuándo?',fr:'Pour quand ?',side:'right'},
      {s:'Paciente',es:'Para hoy si se puede. Estoy muy mal.',fr:'Pour aujourd\'hui si c\'est possible. Je suis très malade.',side:'left'},
      {s:'Recepcionista',es:'¿Tenés fiebre?',fr:'Tu as de la fièvre ?',side:'right'},
      {s:'Paciente',es:'Sí, treinta y nueve grados.',fr:'Oui, trente-neuf degrés.',side:'left'},
      {s:'Recepcionista',es:'Vení a las cuatro. Traé el DNI.',fr:'Venez à seize heures. Apportez votre DNI (carte d\'identité).',side:'right'}
    ]}
   ],
   vocab:['¿Qué te pasa? = Qu\'est-ce qui ne va pas ?','Tengo fiebre = J\'ai de la fièvre','Me duele la garganta = J\'ai mal à la gorge','Desde ayer = Depuis hier','La tos = La toux','Sacar un turno = Prendre un rendez-vous (argentin)','El remedio = Le médicament (argentin)'],
   quiz:[
    {q:'¿Cómo se dit "J\'ai de la fièvre" en español?',opts:['Tengo frío','Tengo fiebre','Tengo tos','Tengo dolor'],ans:1},
    {q:'¿Qué significa "Me duele la garganta"?',opts:['J\'ai mal à la tête','J\'ai mal au ventre','J\'ai mal à la gorge','J\'ai mal au dos'],ans:2},
    {q:'¿Cómo se dit "Prendre un rendez-vous" en Argentine?',opts:['Hacer una visita','Sacar un turno','Llamar al médico','Ir al hospital'],ans:1}
   ]},
 
  /* 11 ── La météo */
  {id:'meteo2',level:2,emoji:'☀️',name:'El tiempo',sub:'Parler de la météo / Qu\'est-ce qu\'il fait ?',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Parler du temps',img:'🌤️',dialogue:[
      {s:'Marta',es:'¡Qué calor hace hoy!',fr:'Quelle chaleur aujourd\'hui !',side:'left'},
      {s:'Romain',es:'Sí, hace mucho calor. ¿Cuántos grados son?',fr:'Oui, il fait très chaud. Il fait combien de degrés ?',side:'right'},
      {s:'Marta',es:'Treinta y cinco grados.',fr:'Trente-cinq degrés.',side:'left'},
      {s:'Romain',es:'¡Es mucho! ¿Hay pileta acá?',fr:'C\'est beaucoup ! Il y a une piscine ici ? (pileta = piscine en argentin)',side:'right'},
      {s:'Marta',es:'Sí, está en el complejo.',fr:'Oui, elle est dans le complexe.',side:'left'},
      {s:'Romain',es:'¡Vamos!',fr:'Allons-y !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Prévoir la sortie',img:'🌧️',dialogue:[
      {s:'Luis',es:'¿Salimos hoy?',fr:'On sort aujourd\'hui ?',side:'left'},
      {s:'Camille',es:'No sé. ¿Qué tiempo hace?',fr:'Je ne sais pas. Il fait quel temps ?',side:'right'},
      {s:'Luis',es:'Está lloviendo un poco.',fr:'Il pleut un peu.',side:'left'},
      {s:'Camille',es:'¿Tenés paraguas?',fr:'Tu as un parapluie ?',side:'right'},
      {s:'Luis',es:'No. ¿Y vos?',fr:'Non. Et toi ?',side:'left'},
      {s:'Camille',es:'Yo sí. ¡Vamos juntos!',fr:'Moi oui. Allons-y ensemble !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Parler des saisons',img:'🍂',dialogue:[
      {s:'Sara',es:'¿Cuál es tu estación favorita?',fr:'Quelle est ta saison préférée ?',side:'right'},
      {s:'Théo',es:'El verano. Me gusta el sol y el calor.',fr:'L\'été. J\'aime le soleil et la chaleur.',side:'left'},
      {s:'Sara',es:'Yo prefiero el otoño. No hace ni frío ni calor.',fr:'Moi je préfère l\'automne. Il ne fait ni chaud ni froid.',side:'right'},
      {s:'Théo',es:'¿Y en Argentina? ¿Hace mucho frío en invierno?',fr:'Et en Argentine ? Il fait très froid en hiver ?',side:'left'},
      {s:'Sara',es:'Depende. En Buenos Aires sí, en el norte no.',fr:'Ça dépend. À Buenos Aires oui, dans le nord non.',side:'right'},
      {s:'Théo',es:'¡Qué interesante!',fr:'Comme c\'est intéressant !',side:'left'}
    ]}
   ],
   vocab:['¡Qué calor! = Quelle chaleur !','Hace frío = Il fait froid','Hace calor = Il fait chaud','Está lloviendo = Il pleut (en Argentine on dit souvent así)','El paraguas = Le parapluie','La pileta = La piscine (argentin)','El verano = L\'été'],
   quiz:[
    {q:'¿Cómo se dit "Il fait froid" en español?',opts:['Hace calor','Hay sol','Llueve','Hace frío'],ans:3},
    {q:'¿Qué significa "¡Qué calor!"?',opts:['Quelle chance !','Quelle chaleur !','Quel froid !','Quel vent !'],ans:1},
    {q:'¿Cómo se dit "La piscine" en Argentine?',opts:['La playa','El lago','La pileta','El río'],ans:2}
   ]},
 
  /* 12 ── Trouver un logement */
  {id:'logement2',level:2,emoji:'🏠',name:'Buscar departamento',sub:'Chercher un logement / Louer un appartement en Argentine',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Appeler pour un appartement',img:'📱',dialogue:[
      {s:'Cliente',es:'Hola, llamo por el departamento en alquiler.',fr:'Bonjour, j\'appelle pour l\'appartement en location. (departamento = argentin)',side:'left'},
      {s:'Propietario',es:'Sí. ¿Para cuántas personas?',fr:'Oui. Pour combien de personnes ?',side:'right'},
      {s:'Cliente',es:'Para una persona. ¿Cuánto es el alquiler?',fr:'Pour une personne. Le loyer c\'est combien ?',side:'left'},
      {s:'Propietario',es:'Setenta mil pesos al mes.',fr:'Soixante-dix mille pesos par mois.',side:'right'},
      {s:'Cliente',es:'¿Las expensas están incluidas?',fr:'Les charges sont incluses ? (expensas = charges en argentin)',side:'left'},
      {s:'Propietario',es:'No, las expensas son aparte.',fr:'Non, les charges sont en plus.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Visiter l\'appartement',img:'🔑',dialogue:[
      {s:'Propietario',es:'El living es amplio y tiene mucha luz.',fr:'Le salon est grand et très lumineux. (living = salon argentin)',side:'right'},
      {s:'Cliente',es:'¡Me gusta! ¿Cuántos cuartos tiene?',fr:'J\'aime bien ! Il a combien de chambres ? (cuartos = argentin)',side:'left'},
      {s:'Propietario',es:'Dos cuartos y un baño.',fr:'Deux chambres et une salle de bain.',side:'right'},
      {s:'Cliente',es:'¿Hay calefacción?',fr:'Il y a le chauffage ?',side:'left'},
      {s:'Propietario',es:'Sí, hay calefacción central.',fr:'Oui, il y a le chauffage central.',side:'right'},
      {s:'Cliente',es:'¿Puedo pensarlo?',fr:'Je peux réfléchir ?',side:'left'}
    ]},
    {label:'Sit. 3',title:'Un problème dans l\'appartement',img:'🔧',dialogue:[
      {s:'Inquilino',es:'Hola, hay un problema. El agua no funciona.',fr:'Bonjour, il y a un problème. L\'eau ne fonctionne pas.',side:'left'},
      {s:'Propietario',es:'¿Desde cuándo?',fr:'Depuis quand ?',side:'right'},
      {s:'Inquilino',es:'Desde esta mañana.',fr:'Depuis ce matin.',side:'left'},
      {s:'Propietario',es:'Voy a llamar al plomero ahora.',fr:'Je vais appeler le plombier maintenant. (plomero = argentin)',side:'right'},
      {s:'Inquilino',es:'¿Va a venir hoy?',fr:'Il vient aujourd\'hui ?',side:'left'},
      {s:'Propietario',es:'Sí, creo que sí.',fr:'Oui, je crois que oui.',side:'right'}
    ]}
   ],
   vocab:['El alquiler = Le loyer','Las expensas = Les charges (argentin)','El departamento = L\'appartement (argentin)','El living = Le salon (argentin)','Los cuartos = Les chambres (argentin)','El plomero = Le plombier (argentin)','Las expensas son aparte = Les charges sont en plus'],
   quiz:[
    {q:'¿Qué significa "Las expensas son aparte" en Argentina?',opts:['Tout compris','Les charges sont incluses','Les charges sont en plus','C\'est gratuit'],ans:2},
    {q:'¿Cómo se dit "Le plombier" en Argentine?',opts:['El electricista','El plomero','El carpintero','El pintor'],ans:1},
    {q:'¿Cómo se dit "L\'appartement" en Argentine?',opts:['La casa','La entrada','El departamento','La habitación'],ans:2}
   ]},
 
  /* 13 ── Parler de ses goûts */
  {id:'gustos2',level:2,emoji:'❤️',name:'Gustos y aficiones',sub:'Parler de ce qu\'on aime / Les loisirs en Argentine',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Parler de musique',img:'🎵',dialogue:[
      {s:'Lucía',es:'¿Te gusta la música?',fr:'Tu aimes la musique ?',side:'right'},
      {s:'Paul',es:'Sí, mucho. Me gusta el rock.',fr:'Oui, beaucoup. J\'aime le rock.',side:'left'},
      {s:'Lucía',es:'¿Y el tango?',fr:'Et le tango ?',side:'right'},
      {s:'Paul',es:'También, pero no conozco mucho.',fr:'Aussi, mais je ne connais pas beaucoup.',side:'left'},
      {s:'Lucía',es:'¡Hay un espectáculo esta noche! ¿Venís?',fr:'Il y a un spectacle ce soir ! Tu viens ? (venís = voseo)',side:'right'},
      {s:'Paul',es:'¡Sí! ¿A qué hora empieza?',fr:'Oui ! Ça commence à quelle heure ?',side:'left'}
    ]},
    {label:'Sit. 2',title:'Parler de sport',img:'⚽',dialogue:[
      {s:'Diego',es:'¿Practicás algún deporte?',fr:'Tu pratiques un sport ? (practicás = voseo)',side:'left'},
      {s:'Claire',es:'Sí, me gusta mucho el fútbol.',fr:'Oui, j\'aime beaucoup le football.',side:'right'},
      {s:'Diego',es:'¿En serio? ¡Yo también! ¿Ves el partido esta noche?',fr:'Vraiment ? Moi aussi ! Tu regardes le match ce soir ?',side:'left'},
      {s:'Claire',es:'Sí. ¿Jugás al fútbol también?',fr:'Oui. Tu joues au football aussi ? (jugás = voseo)',side:'right'},
      {s:'Diego',es:'Sí, los domingos con amigos.',fr:'Oui, le dimanche avec des amis.',side:'left'},
      {s:'Claire',es:'¡Qué piola!',fr:'Super ! (piola = expression argentine)',side:'right'}
    ]},
    {label:'Sit. 3',title:'Proposer une activité',img:'🎬',dialogue:[
      {s:'Ana',es:'¿Qué hacés esta tarde?',fr:'Tu fais quoi cet après-midi ? (hacés = voseo)',side:'left'},
      {s:'Marc',es:'Nada. ¿Por qué?',fr:'Rien. Pourquoi ?',side:'right'},
      {s:'Ana',es:'¿Querés ir al cine?',fr:'Tu veux aller au cinéma ? (querés = voseo)',side:'left'},
      {s:'Marc',es:'¡Sí! ¿Qué dan?',fr:'Oui ! Qu\'est-ce qu\'ils jouent ? (¿qué dan? = argentin)',side:'right'},
      {s:'Ana',es:'Una película francesa. ¿Te gusta el cine francés?',fr:'Un film français. Tu aimes le cinéma français ?',side:'left'},
      {s:'Marc',es:'¡Me encanta! ¿A qué hora quedamos?',fr:'J\'adore ça ! On se retrouve à quelle heure ?',side:'right'}
    ]}
   ],
   vocab:['Me gusta = J\'aime','No me gusta = Je n\'aime pas','Me encanta = J\'adore','¿Practicás algún deporte? = Tu pratiques un sport ? (voseo)','El partido = Le match','¿Qué dan? = Qu\'est-ce qu\'ils jouent ? (argentin)','¿A qué hora quedamos? = On se retrouve à quelle heure ?'],
   quiz:[
    {q:'¿Cómo se dit "J\'adore" en español?',opts:['Me gusta','No me gusta','Me encanta','Odio'],ans:2},
    {q:'¿Qué significa "¿Qué dan?" en Argentine pour le cinéma?',opts:['Ça coûte combien ?','À quelle heure ?','Qu\'est-ce qu\'ils jouent ?','C\'est où ?'],ans:2},
    {q:'¿Cómo se dit "Le match" en español?',opts:['El deporte','El equipo','El partido','El estadio'],ans:2}
   ]},
 
  /* 14 ── Sortir le soir */
  {id:'fiesta2',level:2,emoji:'🎉',name:'Salir de noche',sub:'Sortir le soir / Vie sociale en Argentine',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Organiser une sortie',img:'🎊',dialogue:[
      {s:'Pablo',es:'¡Hola! ¿Salimos esta noche?',fr:'Salut ! On sort ce soir ?',side:'left'},
      {s:'Lea',es:'¡Sí! ¿A dónde vamos?',fr:'Oui ! On va où ?',side:'right'},
      {s:'Pablo',es:'Hay un bar muy piola en el centro.',fr:'Il y a un bar très sympa au centre. (piola = argentin)',side:'left'},
      {s:'Lea',es:'¡Buenísimo! ¿A qué hora?',fr:'Super ! À quelle heure ? (buenísimo = argentin)',side:'right'},
      {s:'Pablo',es:'A las once. En Argentina se sale tarde.',fr:'À onze heures. En Argentine on sort tard.',side:'left'},
      {s:'Lea',es:'¡Dale! ¡Hasta luego!',fr:'D\'accord ! À plus tard ! (dale = argentin)',side:'right'}
    ]},
    {label:'Sit. 2',title:'Au bar le soir',img:'🍺',dialogue:[
      {s:'Marc',es:'¡Esta música está muy buena! ¿Bailamos?',fr:'Cette musique est super ! On danse ?',side:'left'},
      {s:'Inés',es:'¡Sí! Me encanta bailar.',fr:'Oui ! J\'adore danser.',side:'right'},
      {s:'Marc',es:'¿Querés tomar algo?',fr:'Tu veux boire quelque chose ? (querés/tomar = argentin)',side:'left'},
      {s:'Inés',es:'Sí, un agua, por favor. Tengo calor.',fr:'Oui, une eau, s\'il te plaît. J\'ai chaud.',side:'right'},
      {s:'Marc',es:'¡Ya vuelvo!',fr:'Je reviens tout de suite !',side:'left'},
      {s:'Inés',es:'¡Dale!',fr:'D\'accord ! (dale = expression argentine)',side:'right'}
    ]},
    {label:'Sit. 3',title:'Le lendemain',img:'😴',dialogue:[
      {s:'Carla',es:'¡Hola! ¿Cómo estás? ¡Llegué tarde a casa!',fr:'Salut ! Tu vas bien ? Je suis rentré tard à la maison !',side:'left'},
      {s:'Tom',es:'¡Yo también! Pero fue una noche muy buena.',fr:'Moi aussi ! Mais c\'était une très bonne soirée.',side:'right'},
      {s:'Carla',es:'Sí, la gente era muy copada.',fr:'Oui, les gens étaient très sympas. (copado = argentin)',side:'left'},
      {s:'Tom',es:'¿Comemos juntos hoy?',fr:'On mange ensemble aujourd\'hui ?',side:'right'},
      {s:'Carla',es:'¡Sí! Necesito comer. Tengo mucha hambre.',fr:'Oui ! J\'ai besoin de manger. J\'ai très faim.',side:'left'},
      {s:'Tom',es:'¡Yo también! ¿Una picada?',fr:'Moi aussi ! Une picada ? (planche de charcuterie/fromages argentins)',side:'right'}
    ]}
   ],
   vocab:['¡Salimos! = On sort !','¿A dónde vamos? = On va où ? (argentin)','En Argentina se sale tarde = En Argentine on sort tard','¡Dale! = D\'accord ! / Allez ! (argentin)','Tengo calor = J\'ai chaud','Tengo hambre = J\'ai faim','¡Qué copado! = Trop bien ! / C\'est génial ! (argentin)'],
   quiz:[
    {q:'¿Qué significa "¡Dale!" en Argentina?',opts:['Au revoir !','Allons-y ! / D\'accord !','C\'est nul !','Attention !'],ans:1},
    {q:'¿Cómo se dit "J\'ai faim" en español?',opts:['Tengo sed','Tengo sueño','Tengo frío','Tengo hambre'],ans:3},
    {q:'¿Qué significa "¡Qué copado!" en Argentina?',opts:['Comme c\'est bizarre !','C\'est génial !','Comme c\'est triste !','Comme c\'est grand !'],ans:1}
   ]}
 
];

var ALL_THEMES=LEVEL1_THEMES.concat(LEVEL2_THEMES);