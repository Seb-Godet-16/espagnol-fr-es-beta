/* ========================================
   Español Colombiano → Français 🇨🇴 – Datos
   Vocabulario regional colombiano (approfondi)
   © Juin 2026 Sébastien Godet
======================================== */

/*
  ADAPTATIONS RÉGIONALES COLOMBIE vs CASTILLAN :
  ─────────────────────────────────────────────────
  EXPRESSIONS CLÉS :
    ¡Vale! / ¡Venga!  →  ¡Listo! / ¡Bueno!
    ¡Qué chulo/guay!  →  ¡Qué chévere! / ¡Qué bacano!
    ¡Mola!            →  ¡Qué chimba! (familier) / ¡Qué bueno!
    Tío/tía (argot)   →  Parce / Parcero (familier)
    ¿Qué tal?         →  ¿Quiubo? / ¿Cómo vas? / ¿Qué más?
  VOCABULAIRE COURANT :
    el móvil          →  el celular
    el ordenador      →  el computador
    el coche / el carro → el carro
    el autobús        →  el bus / la buseta
    el piso           →  el apartamento
    el camarero       →  el mesero
    la tirita         →  la curita
    el fontanero      →  el plomero
    coger             →  tomar / agarrar / subirse a
    los cacahuetes    →  los maníes
    el bocadillo      →  el sándwich (bocadillo = pâte de goyave en CO)
    la patata         →  la papa
    el zumo           →  el jugo
    la gaseosa        →  la gaseosa (identique !)
    el frigorífico    →  la nevera
    el aseo/váter     →  el baño / el sanitario
    el jersey         →  el suéter / la sudadera
    la camiseta       →  la camiseta / la camibuso
    las zapatillas    →  los tenis
    el senderismo     →  el senderismo / la caminata
  PRONONCIATION / PHONÉTIQUE :
    Z = S (seseo comme en Amérique latine)
    note dans alphabeto : Z → "zeta (s en Colombia)"
*/

var LEVEL1_THEMES=[
  /* ── ALPHABETO ── */
  {id:'alpha',level:1,emoji:'🔤',name:'El Alfabeto',sub:'A, B, C… Z / L\'alphabet',type:'alpha',
   words:[
    {es:'A',fr:'a',em:'✈️'},{es:'B',fr:'bé',em:'🎈'},
    {es:'C',fr:'cé (s devant e/i en Colombia)',em:'☕'},{es:'D',fr:'dé',em:'💃'},
    {es:'E',fr:'e',em:'🏫'},{es:'F',fr:'efe',em:'🌸'},
    {es:'G',fr:'jé (devant e/i)',em:'🚉'},{es:'H',fr:'hache (muette)',em:'🏨'},
    {es:'I',fr:'i',em:'🏝️'},{es:'J',fr:'jota',em:'🌿'},
    {es:'K',fr:'ka',em:'⚖️'},{es:'L',fr:'ele',em:'🦁'},
    {es:'M',fr:'eme',em:'🏠'},{es:'N',fr:'ene',em:'🌙'},
    {es:'Ñ',fr:'eñe (son gn)',em:'🎵'},{es:'O',fr:'o',em:'🐦'},
    {es:'P',fr:'pé',em:'🍞'},{es:'Q',fr:'cu',em:'🏘️'},
    {es:'R',fr:'erre',em:'🌹'},{es:'S',fr:'ese',em:'☀️'},
    {es:'T',fr:'té',em:'🚂'},{es:'U',fr:'u',em:'1️⃣'},
    {es:'V',fr:'uve (= b en Colombia)',em:'🌆'},{es:'W',fr:'doble uve',em:'🚃'},
    {es:'X',fr:'equis',em:'🎵'},{es:'Y',fr:'ye / i griega',em:'🥛'},
    {es:'Z',fr:'zeta (= s en Colombia, seseo)',em:'0️⃣'}
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

  /* ── SALUDOS ── */
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
    {es:'Perdona / Disculpe',fr:'Pardon / Excusez-moi',em:'🙇'},
    {es:'¡Listo! / ¡Bueno!',fr:'D\'accord ! / OK !',em:'👍'},
    {es:'Sí',fr:'Oui',em:'✅'},
    {es:'No',fr:'Non',em:'❌'},
    {es:'¿Quiubo? / ¿Qué más? / ¿Cómo vas?',fr:'Ça va ? / Quoi de neuf ?',em:'🤗'},
    {es:'Estoy bien, gracias',fr:'Je vais bien, merci',em:'😊'},
    {es:'Más o menos / Así así',fr:'Comme ci comme ça',em:'😐'},
    {es:'No estoy bien / No me siento bien',fr:'Je ne vais pas bien',em:'😔'},
    {es:'¡Qué chévere! / ¡Qué bacano!',fr:'C\'est super ! / Génial !',em:'🌟'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Bonjour (le matin)" en español?',opts:['Hola','Buenas tardes','Buenos días','Buenas noches'],ans:2},
    {q:'¿Qué significa "Adiós"?',opts:['À tout à l\'heure','Au revoir','Bonjour','Bonne nuit'],ans:1},
    {q:'¿Cómo se dice "Merci" en español?',opts:['Por favor','Disculpe','Gracias','Sí'],ans:2},
    {q:'¿Qué significa "¡Listo!" en Colombia?',opts:['Adieu !','Allons-y !','D\'accord !','Bonne nuit !'],ans:2},
    {q:'¿Cómo se dice "S\'il vous plaît" en español?',opts:['Gracias','Disculpe','Por favor','Sí'],ans:2},
    {q:'¿Qué significa "¡Qué chévere!" en Colombia?',opts:['Comme c\'est bizarre !','Comme c\'est super !','Comme c\'est triste !','Comme c\'est grand !'],ans:1},
    {q:'¿Qué significa "¿Quiubo?" en Colombia?',opts:['Où es-tu ?','Comment tu t\'appelles ?','Ça va ? / Quoi de neuf ?','Quel âge as-tu ?'],ans:2},
    {q:'¿Qué significa "¡Qué bacano!" en Colombia?',opts:['Comme c\'est bizarre !','Comme c\'est super !','Comme c\'est ennuyeux !','Comme c\'est triste !'],ans:1}
   ]},

  /* ── PRESENTARSE ── */
  {id:'pres',level:1,emoji:'🙋',name:'Presentarse',sub:'Nombre, edad, ciudad… / Se présenter',
   words:[
    {es:'El apellido',fr:'Le nom de famille',em:'👨‍👩‍👧'},
    {es:'El nombre',fr:'Le prénom',em:'🏷️'},
    {es:'La nacionalidad',fr:'La nationalité',em:'🌍'},
    {es:'La edad',fr:'L\'âge',em:'🎂'},
    {es:'La profesión o el oficio',fr:'La profession',em:'💼'},
    {es:'El país',fr:'Le pays',em:'🗺️'},
    {es:'Francés / francesa',fr:'Français(e)',em:'🇫🇷'},
    {es:'Colombiano / colombiana',fr:'Colombien(ne)',em:'🇨🇴'},
    {es:'Vivo en',fr:'J\'habite à',em:'🏠'},
    {es:'Soy o Estoy',fr:'Je suis',em:'🧑'},
    {es:'Tengo ... años',fr:'J\'ai ... ans',em:'🎈'},
    {es:'Me llamo',fr:'Je m\'appelle',em:'👋'},
    {es:'¿De dónde eres?',fr:'D\'où es-tu ?',em:'🌍'},
    {es:'Soy de Bogotá',fr:'Je suis de Bogota',em:'🏙️'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Je m\'appelle" en español?',opts:['Soy','Me llamo','Vivo','Tengo'],ans:1},
    {q:'¿Qué significa "El apellido"?',opts:['Le prénom','L\'âge','Le nom de famille','La profession'],ans:2},
    {q:'¿Cómo se dice "J\'ai 25 ans" en español?',opts:['Soy 25 años','Vivo 25 años','Tengo 25 años','Hablo 25 años'],ans:2},
    {q:'¿Qué significa "La nacionalidad"?',opts:['Le pays','La ville','La profession','La nationalité'],ans:3},
    {q:'¿Cómo se dice "J\'habite à Bogotá" en español?',opts:['Soy en Bogotá','Vivo en Bogotá','Voy en Bogotá','Tengo Bogotá'],ans:1},
    {q:'¿Qué significa "El nombre"?',opts:['Le nom de famille','Le prénom','L\'âge','La profession'],ans:1},
    {q:'¿Cómo se dice "Je suis colombienne" en español?',opts:['Soy francesa','Soy colombiana','Vivo Colombia','Hablo colombiana'],ans:1},
    {q:'¿Qué significa "¿De dónde eres?"?',opts:['Quel âge as-tu ?','Comment t\'appelles-tu ?','D\'où es-tu ?','Où habites-tu ?'],ans:2}
   ]},

  /* ── ORIENTARSE ── */
  {id:'orient',level:1,emoji:'🧭',name:'Orientarse',sub:'Izquierda, derecha… / S\'orienter',
   words:[
    {es:'Todo recto / Todo derecho',fr:'Tout droit',em:'⬆️'},
    {es:'A la izquierda',fr:'À gauche',em:'⬅️'},
    {es:'A la derecha',fr:'À droite',em:'➡️'},
    {es:'Delante',fr:'Devant',em:'🔜'},
    {es:'Detrás',fr:'Derrière',em:'🔙'},
    {es:'Al lado',fr:'À côté',em:'↔️'},
    {es:'Frente a / Enfrente',fr:'En face',em:'🔄'},
    {es:'Cerca',fr:'Près',em:'📍'},
    {es:'Lejos',fr:'Loin',em:'🌅'},
    {es:'El mapa / El plano',fr:'Le plan / La carte',em:'🗺️'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "À gauche" en español?',opts:['A la derecha','Todo recto','A la izquierda','Enfrente'],ans:2},
    {q:'¿Qué significa "A la derecha"?',opts:['À gauche','Tout droit','À côté','À droite'],ans:3},
    {q:'¿Cómo se dice "Tout droit" en español?',opts:['A la izquierda','Todo recto','Enfrente','Al lado'],ans:1},
    {q:'¿Qué significa "Frente a / Enfrente"?',opts:['À côté','Derrière','En face','Près'],ans:2},
    {q:'¿Cómo se dice "Près" en español?',opts:['Lejos','Al lado','Cerca','Enfrente'],ans:2}
   ]},

  /* ── LUGARES ── */
  {id:'lieux',level:1,emoji:'🏙️',name:'Los Lugares',sub:'Mercado, plaza, tienda… / Les lieux importants',
   words:[
    {es:'La ciudad',fr:'La ville',em:'🏙️'},
    {es:'El pueblo',fr:'Le village',em:'🏡'},
    {es:'El campo',fr:'La campagne',em:'🌾'},
    {es:'La montaña / La cordillera',fr:'La montagne / La cordillère',em:'⛰️'},
    {es:'El mar / El océano',fr:'La mer / L\'océan',em:'🌊'},
    {es:'La playa',fr:'La plage',em:'🏖️'},
    {es:'El río',fr:'La rivière / Le fleuve',em:'🏞️'},
    {es:'El parque',fr:'Le parc',em:'🌳'},
    {es:'La plaza',fr:'La place',em:'⛲'},
    {es:'La calle / La carrera / La avenida',fr:'La rue / La voie / L\'avenue',em:'🛣️'},
    {es:'La manzana / La cuadra',fr:'Le pâté de maisons',em:'🏘️'},
    {es:'La alcaldía',fr:'La mairie',em:'🏛️'},
    {es:'El hospital / La clínica',fr:'L\'hôpital / La clinique',em:'🏥'},
    {es:'La farmacia / La droguería',fr:'La pharmacie',em:'💊'},
    {es:'El banco',fr:'La banque',em:'🏦'},
    {es:'La iglesia / La catedral',fr:'L\'église / La cathédrale',em:'⛪'},
    {es:'El supermercado / El éxito',fr:'Le supermarché (Éxito = grande enseigne)',em:'🛒'},
    {es:'El café / La cafetería / La tienda',fr:'Le café / La cafétéria / La boutique',em:'☕'},
    {es:'La tienda de barrio',fr:'L\'épicerie de quartier',em:'🏪'},
    {es:'El colegio',fr:'L\'école / Le collège-lycée',em:'🎒'},
    {es:'La universidad',fr:'L\'université',em:'🏛️'},
    {es:'El centro comercial',fr:'Le centre commercial',em:'🛍️'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La pharmacie" en español?',opts:['El banco','El hospital','La farmacia / la droguería','El supermercado'],ans:2},
    {q:'¿Cómo se llama la mairie en Colombia?',opts:['La iglesia','El tribunal','La alcaldía','El mercado'],ans:2},
    {q:'¿Qué es "La droguería" en Colombia?',opts:['Un bar','Une pharmacie','Un marché','Un supermarché'],ans:1},
    {q:'¿Qué es "El Éxito" en Colombia?',opts:['Une victoire','La grande enseigne de supermarché','Un parc','Une banque'],ans:1},
    {q:'¿Cómo se dice "La mer" en español?',opts:['El río','La montaña','El mar','El lago'],ans:2},
    {q:'¿Qué es "La tienda de barrio" en Colombia?',opts:['Un supermarché','Une pharmacie','L\'épicerie de quartier','Un café'],ans:2},
    {q:'¿Qué es "La carrera" en Colombia?',opts:['Une course','Une avenue principale','Un village','Un marché'],ans:1},
    {q:'¿Cómo se dice "Le centre commercial" en español?',opts:['La plaza','El centro comercial','La tienda','El mercado'],ans:1}
   ]},

  /* ── COMIDA ── */
  {id:'nour',level:1,emoji:'🍽️',name:'La Comida',sub:'Bandeja paisa, arepas, frutas… / La nourriture',
   words:[
    {es:'Las frutas',fr:'Les fruits',em:'🍉'},
    {es:'Las verduras / Las hortalizas',fr:'Les légumes',em:'🥦'},
    {es:'El pan / La mogolla',fr:'Le pain / Le petit pain rond (Colombia)',em:'🍞'},
    {es:'El arroz',fr:'Le riz',em:'🍚'},
    {es:'La pasta / Los espaguetis',fr:'Les pâtes',em:'🍝'},
    {es:'La papa / Las papas fritas',fr:'La pomme de terre / Les frites',em:'🥔'},
    {es:'La carne / La carne de res',fr:'La viande / Le bœuf',em:'🥩'},
    {es:'El pollo',fr:'Le poulet',em:'🍗'},
    {es:'El pescado',fr:'Le poisson',em:'🐟'},
    {es:'El jamón',fr:'Le jambon',em:'🥩'},
    {es:'El huevo / Los huevos',fr:'L\'œuf / Les œufs',em:'🥚'},
    {es:'El queso',fr:'Le fromage',em:'🧀'},
    {es:'La mantequilla',fr:'Le beurre',em:'🧈'},
    {es:'La manzana',fr:'La pomme',em:'🍎'},
    {es:'El banano / La banana',fr:'La banane',em:'🍌'},
    {es:'La naranja / El maracuyá',fr:'L\'orange / Le fruit de la passion',em:'🍊'},
    {es:'El limón / La guayaba',fr:'Le citron / La goyave',em:'🍋'},
    {es:'La fresa / La uchuva',fr:'La fraise / La physalis',em:'🍓'},
    {es:'La sandía',fr:'La pastèque',em:'🍉'},
    {es:'El tomate / El tomate chonto',fr:'La tomate',em:'🍅'},
    {es:'La zanahoria',fr:'La carotte',em:'🥕'},
    {es:'La cebolla / El cilantro',fr:'L\'oignon / La coriandre',em:'🧅'},
    {es:'El ajo',fr:'L\'ail',em:'🧄'},
    {es:'La arepa',fr:'L\'arepa (galette de maïs)',em:'🫓'},
    {es:'Los fríjoles / Los frijoles',fr:'Les haricots (rouges en Colombie)',em:'🫘'},
    {es:'La bandeja paisa',fr:'La bandeja paisa (plat national)',em:'🍱'},
    {es:'El bocadillo',fr:'La pâte de goyave (≠ sandwich !)',em:'🟧'},
    {es:'El sándwich',fr:'Le sandwich',em:'🥪'},
    {es:'El maní',fr:'La cacahuète / L\'arachide',em:'🥜'},
    {es:'El aceite',fr:'L\'huile',em:'🫒'},
    {es:'La sal',fr:'Le sel',em:'🧂'},
    {es:'El chocolate / La taza de chocolate',fr:'Le chocolat / La tasse de chocolat chaud',em:'🍫'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le pain" en español colombiano?',opts:['El arroz','El pan / la mogolla','El queso','La mantequilla'],ans:1},
    {q:'¿Qué es "La bandeja paisa" en Colombia?',opts:['Un pain sucré','Le plat national colombien','Une pizza','Un dessert'],ans:1},
    {q:'¿Cómo se dice "La banane" en colombiano?',opts:['La naranja','El banano','La sandía','La fresa'],ans:1},
    {q:'¿Qué es "El bocadillo" en Colombia? ¡Cuidado!',opts:['Un sandwich','Une pâte de goyave sucrée','Une pizza','Un biscuit'],ans:1},
    {q:'¿Cómo se dice "Les frites" en colombiano?',opts:['Las papas fritas','Los macarrones','Las arepas','La yuca'],ans:0},
    {q:'¿Qué es "La uchuva" en Colombia?',opts:['Une fraise','Une cerise','La physalis','Une prune'],ans:2},
    {q:'¿Cómo se llaman "les haricots" en colombiano?',opts:['Las lentejas','Los fríjoles','Las caraotas','Los garbanzos'],ans:1},
    {q:'¿Cómo se dice "Les cacahuètes" en colombiano?',opts:['Las almendras','Los cacahuetes','Los maníes','Las nueces'],ans:2}
   ]},

  /* ── BEBIDAS ── */
  {id:'bois',level:1,emoji:'🥤',name:'Las Bebidas',sub:'Agua, jugo, tinto… / Les boissons',
   words:[
    {es:'El agua',fr:'L\'eau',em:'💧'},
    {es:'El agua con gas',fr:'L\'eau gazeuse',em:'🫧'},
    {es:'La leche',fr:'Le lait',em:'🥛'},
    {es:'El jugo (de naranja)',fr:'Le jus (d\'orange)',em:'🍊'},
    {es:'La gaseosa / La soda',fr:'Le soda',em:'🥤'},
    {es:'El tinto',fr:'Le café noir (petit café, Colombia)',em:'☕'},
    {es:'El café con leche / El café con lecha',fr:'Le café au lait',em:'☕'},
    {es:'El té / El aromática',fr:'Le thé / La tisane (Colombia)',em:'🍵'},
    {es:'El vino (tinto / blanco)',fr:'Le vin (rouge / blanc)',em:'🍷'},
    {es:'La cerveza / La póker / La águila',fr:'La bière (Póker et Águila = marques nationales)',em:'🍺'},
    {es:'El aguardiente',fr:'L\'aguardiente (eau-de-vie anisée, boisson nationale)',em:'🥃'},
    {es:'El cholado / El raspado',fr:'La glace pilée aux fruits',em:'🧊'},
    {es:'La limonada de coco',fr:'La limonade à la noix de coco',em:'🥥'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'eau" en español?',opts:['La leche','El jugo','El agua','El té'],ans:2},
    {q:'¿Qué es "El tinto" en Colombia?',opts:['Un vin rouge','Un petit café noir','Un thé','Un jus de fruit'],ans:1},
    {q:'¿Cómo se dice "Le lait" en español?',opts:['La leche','El agua','El té','El jugo'],ans:0},
    {q:'¿Qué es "El aguardiente" en Colombia?',opts:['Un jus de fruit','Une eau gazeuse','Une eau-de-vie anisée','Un café'],ans:2},
    {q:'¿Qué es "La aromática" en Colombia?',opts:['Un café fort','Un café au lait','Une tisane','Une gaseosa'],ans:2},
    {q:'¿Cómo se dit "Le jus" en colombiano?',opts:['La gaseosa','El zumo','El jugo','La limonada'],ans:2},
    {q:'¿Cómo se dice "Le thé" en español?',opts:['El café','El té','La leche','El agua'],ans:1},
    {q:'¿Qué es "El cholado" en Colombia?',opts:['Un café froid','Une glace pilée aux fruits','Un smoothie','Un soda'],ans:1}
   ]},

  /* ── NÚMEROS ── */
  {id:'num',level:1,emoji:'🔢',name:'Los Números',sub:'Del cero al dos mil / Zéro à deux mille',
   words:[
    {es:'Cero',fr:'Zéro',em:'0️⃣'},{es:'Uno',fr:'Un',em:'1️⃣'},{es:'Dos',fr:'Deux',em:'2️⃣'},
    {es:'Tres',fr:'Trois',em:'3️⃣'},{es:'Cuatro',fr:'Quatre',em:'4️⃣'},{es:'Cinco',fr:'Cinq',em:'5️⃣'},
    {es:'Seis',fr:'Six',em:'6️⃣'},{es:'Siete',fr:'Sept',em:'7️⃣'},{es:'Ocho',fr:'Huit',em:'8️⃣'},
    {es:'Nueve',fr:'Neuf',em:'9️⃣'},{es:'Diez',fr:'Dix',em:'🔟'},
    {es:'Once',fr:'Onze',em:'1️⃣1️⃣'},{es:'Doce',fr:'Douze',em:'1️⃣2️⃣'},
    {es:'Veinte',fr:'Vingt',em:'2️⃣0️⃣'},{es:'Veintiuno',fr:'Vingt et un',em:'2️⃣1️⃣'},
    {es:'Treinta',fr:'Trente',em:'3️⃣0️⃣'},{es:'Cuarenta',fr:'Quarante',em:'4️⃣0️⃣'},
    {es:'Cincuenta',fr:'Cinquante',em:'5️⃣0️⃣'},{es:'Cien',fr:'Cent',em:'💯'},
    {es:'Doscientos',fr:'Deux cents',em:'2️⃣0️⃣0️⃣'},{es:'Quinientos',fr:'Cinq cents',em:'5️⃣0️⃣0️⃣'},
    {es:'Mil',fr:'Mille',em:'🔢'},{es:'Dos mil',fr:'Deux mille',em:'🔢'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Cinq" en español?',opts:['Cuatro','Seis','Cinco','Siete'],ans:2},
    {q:'¿Qué significa "Veinte"?',opts:['Dix','Trente','Vingt','Quarante'],ans:2},
    {q:'¿Cómo se dice "Cent" en español?',opts:['Mil','Cien','Diez','Cincuenta'],ans:1},
    {q:'¿Qué significa "Doce"?',opts:['Onze','Treize','Dix','Douze'],ans:3},
    {q:'¿Cómo se dice "Mille" en español?',opts:['Cien','Millón','Mil','Cero'],ans:2}
   ]},

  /* ── COLORES ── */
  {id:'col',level:1,emoji:'🎨',name:'Los Colores',sub:'Rojo, azul, verde… / Les couleurs',
   words:[
    {es:'Rojo',fr:'Rouge',em:'❤️'},{es:'Azul',fr:'Bleu',em:'💙'},{es:'Verde',fr:'Vert',em:'💚'},
    {es:'Amarillo',fr:'Jaune',em:'💛'},{es:'Naranja',fr:'Orange',em:'🧡'},{es:'Blanco',fr:'Blanc',em:'🤍'},
    {es:'Negro',fr:'Noir',em:'🖤'},{es:'Rosa / Rosado',fr:'Rose',em:'🩷'},
    {es:'Morado / Violeta',fr:'Violet',em:'💜'},{es:'Marrón / Café',fr:'Marron / Brun',em:'🤎'},
    {es:'Gris',fr:'Gris',em:'🩶'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Rouge" en español?',opts:['Azul','Rojo','Verde','Amarillo'],ans:1},
    {q:'¿Qué significa "Azul"?',opts:['Vert','Jaune','Bleu','Violet'],ans:2},
    {q:'¿Cómo se dice "Vert" en español?',opts:['Amarillo','Gris','Verde','Blanco'],ans:2},
    {q:'¿Cómo se llama "Marron" en colombiano?',opts:['Marrón / café','Rojo','Morado','Naranja'],ans:0},
    {q:'¿Cómo se dice "Jaune" en español?',opts:['Naranja','Amarillo','Rosa','Morado'],ans:1},
    {q:'¿Qué significa "Rosa / Rosado"?',opts:['Rouge','Orange','Rose','Violet'],ans:2},
    {q:'¿Cómo se dice "Blanc" en español?',opts:['Blanco','Negro','Gris','Marrón'],ans:0}
   ]},

  /* ── TIEMPO (días, meses) ── */
  {id:'temps',level:1,emoji:'📅',name:'El Tiempo',sub:'Días, meses, estaciones… / Le temps',
   words:[
    {es:'El lunes',fr:'Lundi',em:'1️⃣'},{es:'El martes',fr:'Mardi',em:'2️⃣'},
    {es:'El miércoles',fr:'Mercredi',em:'3️⃣'},{es:'El jueves',fr:'Jeudi',em:'4️⃣'},
    {es:'El viernes',fr:'Vendredi',em:'5️⃣'},{es:'El sábado',fr:'Samedi',em:'6️⃣'},
    {es:'El domingo',fr:'Dimanche',em:'7️⃣'},
    {es:'Hoy',fr:'Aujourd\'hui',em:'📅'},{es:'Ayer',fr:'Hier',em:'⬅️'},
    {es:'Mañana',fr:'Demain',em:'➡️'},{es:'La semana',fr:'La semaine',em:'🗓️'},
    {es:'El mes',fr:'Le mois',em:'📆'},{es:'El año',fr:'L\'an / L\'année',em:'🗓️'},
    {es:'En la mañana / Por la mañana',fr:'Le matin',em:'🌅'},
    {es:'En la tarde / Por la tarde',fr:'L\'après-midi',em:'🌆'},
    {es:'En la noche / Por la noche',fr:'Le soir / La nuit',em:'🌙'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Lundi" en español?',opts:['El martes','El lunes','El miércoles','El jueves'],ans:1},
    {q:'¿Qué significa "Mañana"?',opts:['Hier','Aujourd\'hui','Demain','Ce soir'],ans:2},
    {q:'¿Cómo se dice "La semaine" en español?',opts:['El año','El mes','La semana','El día'],ans:2},
    {q:'¿Qué significa "Ayer"?',opts:['Demain','Aujourd\'hui','Hier','Ce matin'],ans:2},
    {q:'¿Cómo se dice "Le mois" en español?',opts:['El año','La semana','El mes','El día'],ans:2}
   ]},

  /* ── CLIMA ── */
  {id:'meteo',level:1,emoji:'☀️',name:'El Clima',sub:'Calor, lluvia, sol… / La météo en Colombia',
   words:[
    {es:'Hace calor / Está caliente',fr:'Il fait chaud',em:'🌡️'},
    {es:'Hace frío / Está frío',fr:'Il fait froid',em:'🥶'},
    {es:'Hace sol / Hay sol',fr:'Il y a du soleil',em:'☀️'},
    {es:'Llueve / Está lloviendo',fr:'Il pleut',em:'🌧️'},
    {es:'Está nublado',fr:'Il est nuageux',em:'☁️'},
    {es:'El viento / Hace viento',fr:'Le vent / Il y a du vent',em:'💨'},
    {es:'El verano (temporada seca)',fr:'La saison sèche (verano)',em:'☀️'},
    {es:'La temporada de lluvias / El invierno',fr:'La saison des pluies',em:'🌧️'},
    {es:'El aguacero / El chaparrón',fr:'L\'averse soudaine',em:'⛈️'},
    {es:'El paraguas / El sombrilla',fr:'Le parapluie',em:'☂️'},
    {es:'La temperatura / Los grados',fr:'La température / Les degrés',em:'🌡️'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Il fait chaud" en español?',opts:['Hace frío','Hace viento','Hace calor','Llueve'],ans:2},
    {q:'¿Qué significa "Está lloviendo"?',opts:['Il fait soleil','Il neige','Il pleut','Il fait froid'],ans:2},
    {q:'¿Qué es "El verano" en Colombia?',opts:['L\'automne','La saison des pluies','La saison sèche','L\'hiver'],ans:2},
    {q:'¿Qué es "El aguacero" en Colombia?',opts:['Un orage','Une averse soudaine','De la brume','Du vent fort'],ans:1},
    {q:'¿Cómo se dit "Le parapluie" en colombiano?',opts:['El impermeable','El sombrilla / paraguas','La bufanda','El abrigo'],ans:1}
   ]},

  /* ── VERBOS ── */
  {id:'verbes',level:1,emoji:'🏃',name:'Los Verbos',sub:'Hablar, comer, ir… / Les verbes courants',
   words:[
    {es:'Hablar',fr:'Parler',em:'🗣️',conj:{es:['Hablo','Hablas','Habla','Hablamos','Habláis','Hablan'],fr:['Je parle','Tu parles','Il/Elle parle','Nous parlons','Vous parlez','Ils/Elles parlent']}},
    {es:'Comer',fr:'Manger',em:'🍽️',conj:{es:['Como','Comes','Come','Comemos','Coméis','Comen'],fr:['Je mange','Tu manges','Il/Elle mange','Nous mangeons','Vous mangez','Ils/Elles mangent']}},
    {es:'Beber / Tomar',fr:'Boire',em:'🥤',conj:{es:['Bebo / Tomo','Bebes / Tomas','Bebe / Toma','Bebemos','Bebéis','Beben'],fr:['Je bois','Tu bois','Il/Elle boit','Nous buvons','Vous buvez','Ils/Elles boivent']}},
    {es:'Ir',fr:'Aller',em:'🚶',conj:{es:['Voy','Vas','Va','Vamos','Vais','Van'],fr:['Je vais','Tu vas','Il/Elle va','Nous allons','Vous allez','Ils/Elles vont']}},
    {es:'Tener',fr:'Avoir',em:'✋',conj:{es:['Tengo','Tienes','Tiene','Tenemos','Tenéis','Tienen'],fr:['J\'ai','Tu as','Il/Elle a','Nous avons','Vous avez','Ils/Elles ont']}},
    {es:'Ser / Estar',fr:'Être',em:'🧑',conj:{es:['Soy/Estoy','Eres/Estás','Es/Está','Somos/Estamos','Sois/Estáis','Son/Están'],fr:['Je suis','Tu es','Il/Elle est','Nous sommes','Vous êtes','Ils/Elles sont']}},
    {es:'Vivir',fr:'Habiter / Vivre',em:'🏠',conj:{es:['Vivo','Vives','Vive','Vivimos','Vivís','Viven'],fr:['J\'habite','Tu habites','Il/Elle habite','Nous habitons','Vous habitez','Ils/Elles habitent']}},
    {es:'Trabajar',fr:'Travailler',em:'💼',conj:{es:['Trabajo','Trabajas','Trabaja','Trabajamos','Trabajáis','Trabajan'],fr:['Je travaille','Tu travailles','Il/Elle travaille','Nous travaillons','Vous travaillez','Ils/Elles travaillent']}},
    {es:'Tomar el bus / Subirse al bus',fr:'Prendre le bus (Colombia)',em:'🚌'},
    {es:'Encantar / Me encanta',fr:'Adorer / J\'adore',em:'❤️',conj:{es:['Me encanta','Te encanta','Le encanta','Nos encanta','Os encanta','Les encanta'],fr:['J\'adore','Tu adores','Il/Elle adore','Nous adorons','Vous adorez','Ils/Elles adorent']}},
    {es:'Parchar / Salir a parchar',fr:'Traîner / Sortir (argot colombien)',em:'😎'}
   ],
   quiz10:[
    {q:'¿Cómo se dit "Prendre le bus" en colombiano?',opts:['Coger el bus','Agarrar el bus','Tomar el bus / subirse al bus','Llevar el bus'],ans:2},
    {q:'¿Cómo se dit "Nous travaillons" en español?',opts:['Trabajo','Trabajamos','Trabajáis','Trabajan'],ans:1},
    {q:'¿Qué significa "Me encanta"?',opts:['Je déteste','J\'aime bien','J\'adore','Je préfère'],ans:2},
    {q:'¿Cómo se dice "Vous habitez" en español?',opts:['Vivís','Vivimos','Viven','Vivo'],ans:0},
    {q:'¿Qué significa "Voy"?',opts:['Tu vas','Je vais','Il va','Nous allons'],ans:1},
    {q:'¿Qué significa "Parchar" en Colombia?',opts:['Travailler','Partir','Traîner / sortir avec des amis','Rentrer'],ans:2},
    {q:'¿Qué significa "Tengo"?',opts:['Tu as','Il a','J\'ai','Nous avons'],ans:2},
    {q:'¿Cómo se dice "Tu parles" en español?',opts:['Hablo','Hablas','Habla','Hablamos'],ans:1}
   ]},

  /* ── CUERPO ── */
  {id:'corps',level:1,emoji:'🧍',name:'El Cuerpo',sub:'Cabeza, brazo, pie… / Le corps',
   words:[
    {es:'La cabeza',fr:'La tête',em:'🗣️'},
    {es:'El cabello / El pelo',fr:'Les cheveux',em:'💇‍♂️'},
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
    {es:'La espalda',fr:'Le dos',em:''},
    {es:'La barriga / La panza',fr:'Le ventre',em:'🫃'},
    {es:'La pierna / Las piernas',fr:'La jambe / Les jambes',em:'🦵'},
    {es:'El pie / Los pies',fr:'Le pied / Les pieds',em:'🦶'},
    {es:'El corazón',fr:'Le cœur',em:'❤️'},
    {es:'El cerebro',fr:'Le cerveau',em:'🧠'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La tête" en español?',opts:['La nariz','La boca','La cabeza','El cuello'],ans:2},
    {q:'¿Qué significa "Los ojos"?',opts:['Les oreilles','Le nez','Les lèvres','Les yeux'],ans:3},
    {q:'¿Cómo se dice "La main" en español?',opts:['El pie','La pierna','El brazo','La mano'],ans:3},
    {q:'¿Qué significa "La nariz"?',opts:['La bouche','Le nez','L\'oreille','Le cou'],ans:1},
    {q:'¿Cómo se dice "La jambe" en español?',opts:['El brazo','La pierna','El pie','La espalda'],ans:1},
    {q:'¿Cómo se dice "Les cheveux" en español?',opts:['La barba','El cabello / el pelo','La boca','Los labios'],ans:1},
    {q:'¿Cómo se dice "Les dents" en español?',opts:['Los labios','La lengua','Los dientes','Las orejas'],ans:2},
    {q:'¿Qué significa "El corazón"?',opts:['Le cerveau','Le cœur','L\'os','Le dos'],ans:1}
   ]},

  /* ── SALUD ── */
  {id:'sante',level:1,emoji:'🏥',name:'La Salud',sub:'Médico, farmacia, droguería… / La santé',
   words:[
    {es:'Doler / Me duele',fr:'Faire mal / J\'ai mal',em:'🤕'},
    {es:'Tener dolor',fr:'Avoir une douleur',em:'😣'},
    {es:'La fiebre / La calentura',fr:'La fièvre',em:'🌡️'},
    {es:'La tos / La gripa',fr:'La toux / La grippe (gripa = rhume en CO)',em:'😮‍💨'},
    {es:'El pañuelo / El kleenex',fr:'Le mouchoir',em:'🤧'},
    {es:'El termómetro',fr:'Le thermomètre',em:'🌡️'},
    {es:'La cita / El turno',fr:'Le rendez-vous',em:'📅'},
    {es:'El médico / El doctor / La doctora',fr:'Le médecin',em:'🩺'},
    {es:'El/la paciente',fr:'Le/la patient(e)',em:'🛏️'},
    {es:'El centro de salud / El puesto de salud',fr:'Le centre de santé',em:'📋'},
    {es:'El enfermero / La enfermera',fr:'L\'infirmier / L\'infirmière',em:'👨‍⚕️'},
    {es:'El hospital / La clínica',fr:'L\'hôpital / La clinique privée',em:'🏥'},
    {es:'La receta / La fórmula médica',fr:'L\'ordonnance',em:'📋'},
    {es:'La farmacia / La droguería',fr:'La pharmacie',em:'🏪'},
    {es:'El medicamento / El remedio',fr:'Le médicament',em:'💊'},
    {es:'La pastilla / La tableta',fr:'Le comprimé',em:'💊'},
    {es:'La vacuna',fr:'Le vaccin',em:'💉'},
    {es:'La curita / La bandita',fr:'Le pansement adhésif',em:'🩹'},
    {es:'Las urgencias / La emergencia',fr:'Les urgences',em:'🆘'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'hôpital" en español?',opts:['La droguería','El hospital','Las urgencias','El centro de salud'],ans:1},
    {q:'¿Qué es "La droguería" en Colombia?',opts:['Un débit de boissons','La pharmacie','Un centre de désintoxication','Un labo'],ans:1},
    {q:'¿Cómo se dice "Le vaccin" en español?',opts:['La curita','La vacuna','El vendaje','El medicamento'],ans:1},
    {q:'¿Cómo se dice "Le pansement" en colombiano?',opts:['La inyección','La vacuna','La curita / la bandita','El medicamento'],ans:2},
    {q:'¿Cómo se dice "L\'ordonnance" en colombiano?',opts:['El turno','El medicamento','La fórmula médica','La vacuna'],ans:2},
    {q:'¿Qué es "La gripa" en Colombia?',opts:['La grippe sévère','Le rhume / la grippe','Une angine','La fièvre'],ans:1},
    {q:'¿Cómo se dice "Les urgences" en español?',opts:['La sala de espera','El médico de guardia','Las urgencias','El ambulatorio'],ans:2},
    {q:'¿Cómo se dice "Un rendez-vous médical" en colombiano?',opts:['Una visita','Una cita / un turno','Una receta','Una consulta'],ans:1}
   ]},

  /* ── OCIO ── */
  {id:'ocio',level:1,emoji:'⛰️',name:'El Ocio',sub:'Deporte, fútbol, música… / Les loisirs',
   words:[
    {es:'La lectura',fr:'La lecture',em:'📚'},
    {es:'El libro',fr:'Le livre',em:'📖'},
    {es:'La música / La cumbia / El vallenato',fr:'La musique / La cumbia / Le vallenato',em:'🎵'},
    {es:'El cine',fr:'Le cinéma',em:'🎬'},
    {es:'El teatro',fr:'Le théâtre',em:'🎭'},
    {es:'El deporte',fr:'Le sport',em:''},
    {es:'El fútbol / El ciclopaseo',fr:'Le football / Le cyclopaseo (balade vélo dominicale)',em:'⚽'},
    {es:'La natación',fr:'La natation',em:'🏊'},
    {es:'El ciclismo',fr:'Le cyclisme',em:'🚴'},
    {es:'El senderismo / La caminata',fr:'La randonnée',em:'🥾'},
    {es:'La playa / El río',fr:'La plage / La rivière',em:'🏖️'},
    {es:'Jugar',fr:'Jouer',em:'🎮'},
    {es:'Descansar',fr:'Se reposer',em:'😴'},
    {es:'Rumbear / Salir de rumba',fr:'Faire la fête / sortir (argot colombien)',em:'💃'}
   ],
   quiz10:[
    {q:'¿Cuál es el deporte rey en Colombia?',opts:['El béisbol','El fútbol','El baloncesto','La natación'],ans:1},
    {q:'¿Qué es "El ciclopaseo" en Bogotá?',opts:['Une course cycliste','La balade vélo dominicale dans les rues','Un parc','Un marché'],ans:1},
    {q:'¿Cómo se dice "Le livre" en español?',opts:['La lectura','La música','El libro','El cine'],ans:2},
    {q:'¿Qué es "El vallenato" en Colombia?',opts:['Un sport','La musique traditionnelle colombienne','Un plat','Un festival'],ans:1},
    {q:'¿Qué significa "Rumbear" en Colombia?',opts:['Travailler','Faire la fête / sortir','Se reposer','Jouer'],ans:1},
    {q:'¿Qué significa "Descansar"?',opts:['Jouer','Pratiquer','Apprécier','Se reposer'],ans:3},
    {q:'¿Cómo se dice "Le cinéma" en español?',opts:['El teatro','La música','La lectura','El cine'],ans:3},
    {q:'¿Qué es "La cumbia" en Colombia?',opts:['Un sport','La danse et musique traditionnelle','Un plat','Une fête'],ans:1}
   ]},

  /* ── ROPA ── */
  {id:'veth',level:1,emoji:'👗',name:'La Ropa',sub:'Camiseta, pantalón, tenis… / Les vêtements',
   words:[
    {es:'La camiseta / La camibuso',fr:'Le t-shirt / Le t-shirt (camibuso = Colombia)',em:'👕'},
    {es:'La camisa',fr:'La chemise',em:'👔'},
    {es:'El pantalón',fr:'Le pantalon',em:'👖'},
    {es:'Los zapatos / Los tenis',fr:'Les chaussures / Les baskets (tenis = Colombia)',em:'👟'},
    {es:'Las medias / Los calcetines',fr:'Les chaussettes',em:'🧦'},
    {es:'El vestido / La falda',fr:'La robe / La jupe',em:'👗'},
    {es:'Los pantalones cortos / El short',fr:'Le short',em:'🩳'},
    {es:'El suéter / La sudadera',fr:'Le pull / Le sweat (sudadera = jogging en CO)',em:'🧥'},
    {es:'La chaqueta / El saco',fr:'La veste',em:'🧥'},
    {es:'El sombrero / La gorra',fr:'Le chapeau / La casquette',em:'🎩'},
    {es:'El abrigo',fr:'Le manteau',em:'🧥'},
    {es:'La bufanda',fr:'L\'écharpe',em:'🧣'},
    {es:'El bolso / La cartera',fr:'Le sac / Le sac à main',em:'👜'},
    {es:'El vestido de baño / El tinto de baño',fr:'Le maillot de bain',em:'🩱'}
   ],
   quiz10:[
    {q:'¿Cómo se dit "Les baskets" en colombiano?',opts:['Los zapatos','Las botas','Los tenis','Las sandalias'],ans:2},
    {q:'¿Cómo se dit "Les chaussettes" en colombiano?',opts:['Los tenis','Las medias','Los zapatos','El gorro'],ans:1},
    {q:'¿Qué es "La sudadera" en Colombia?',opts:['Un t-shirt','Un pull / sweat','Un manteau','Une veste'],ans:1},
    {q:'¿Cómo se dit "Le pull" en colombiano?',opts:['La bufanda','La chaqueta','El suéter','El abrigo'],ans:2},
    {q:'¿Cómo se dit "Le maillot de bain" en colombiano?',opts:['El vestido de baño','El gorro','El short','Los calcetines'],ans:0},
    {q:'¿Cómo se dit "La robe" en español?',opts:['La falda','El vestido','La chaqueta','El suéter'],ans:1},
    {q:'¿Qué es "El camibuso" en Colombia?',opts:['Une chemise formelle','Un t-shirt','Un pull','Un manteau'],ans:1},
    {q:'¿Cómo se dit "La veste" en colombiano?',opts:['El abrigo','El suéter','La chaqueta / el saco','La camiseta'],ans:2}
   ]},

  /* ── VIAJE ── */
  {id:'viaje',level:1,emoji:'🧳',name:'El Viaje',sub:'Maleta, hotel, pasaporte… / Le voyage',
   words:[
    {es:'El pasaporte',fr:'Le passeport',em:'🛂'},
    {es:'La maleta / El equipaje',fr:'La valise / Les bagages',em:'🧳'},
    {es:'El tiquete / El pasaje',fr:'Le billet',em:'🎫'},
    {es:'La reserva / La reservación',fr:'La réservation',em:'📋'},
    {es:'El avión',fr:'L\'avion',em:'✈️'},
    {es:'El aeropuerto',fr:'L\'aéroport',em:'🛫'},
    {es:'La salida / La llegada',fr:'Le départ / L\'arrivée',em:'🚪'},
    {es:'La aduana / Migración',fr:'La douane / L\'immigration',em:'🛃'},
    {es:'El hotel / El hostal',fr:'L\'hôtel / L\'auberge',em:'🏨'},
    {es:'La habitación / El cuarto',fr:'La chambre',em:'🛏️'},
    {es:'El turista',fr:'Le touriste',em:'📸'},
    {es:'La playa / La sierra nevada',fr:'La plage / La Sierra Nevada',em:'🏖️'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le billet" en colombiano?',opts:['La maleta','El tiquete / el pasaje','El pasaporte','El equipaje'],ans:1},
    {q:'¿Qué significa "La maleta"?',opts:['Le sac à dos','La valise','Les bagages','Le billet'],ans:1},
    {q:'¿Cómo se dice "L\'aéroport" en español?',opts:['La estación','El puerto','El aeropuerto','La aduana'],ans:2},
    {q:'¿Cómo se dit "La réservation" en colombiano?',opts:['La reserva / la reservación','La venta','El descuento','El seguro'],ans:0},
    {q:'¿Cómo se dice "Les bagages" en español?',opts:['La maleta','El tiquete','El equipaje','La mochila'],ans:2},
    {q:'¿Qué significa "La aduana / Migración"?',opts:['L\'arrivée','Le départ','La douane','La frontière'],ans:2},
    {q:'¿Cómo se dit "La chambre" en colombiano?',opts:['El salón','La habitación / el cuarto','La entrada','El garaje'],ans:1},
    {q:'¿Cómo se dit "Le billet d\'avion" en colombiano?',opts:['El pasaporte','El tiquete aéreo','El equipaje','La reserva'],ans:1}
   ]},

  /* ── RESTAURANTE ── */
  {id:'rest',level:1,emoji:'🍽️',name:'El Restaurante',sub:'Menú, cuenta, mesa… / Au restaurant',
   words:[
    {es:'La mesa',fr:'La table',em:'🪑'},
    {es:'¿Está libre esta mesa?',fr:'Cette table est libre ?',em:'🪑'},
    {es:'El mesero / La mesera',fr:'Le serveur / La serveuse',em:'🧑‍🍳'},
    {es:'La carta / El menú',fr:'La carte / Le menu',em:'📋'},
    {es:'El menú del día / El corrientazo',fr:'Le menu du jour / Le plat du jour économique',em:'🍱'},
    {es:'Pedir / Ordenar',fr:'Commander',em:'🙋'},
    {es:'¿Qué recomienda?',fr:'Que recommandez-vous ?',em:'👨‍🍳'},
    {es:'Sin gluten / Vegetariano',fr:'Sans gluten / Végétarien',em:'🥦'},
    {es:'La entrada',fr:'L\'entrée',em:'🥗'},
    {es:'El plato principal / El seco',fr:'Le plat principal',em:'🍖'},
    {es:'El postre / El dulce',fr:'Le dessert',em:'🍮'},
    {es:'El sándwich / La empanada',fr:'Le sandwich / L\'empanada',em:'🥪'},
    {es:'Para llevar / Para llevar',fr:'À emporter',em:'🥡'},
    {es:'La cuenta',fr:'L\'addition',em:'💶'},
    {es:'La propina',fr:'Le pourboire',em:'💰'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'addition" en español?',opts:['La propina','La cuenta','El menú','La reserva'],ans:1},
    {q:'¿Cómo se dit "Le serveur" en colombiano?',opts:['El cocinero','El mesero','El taxista','El vendedor'],ans:1},
    {q:'¿Cómo se dice "Le dessert" en español?',opts:['La entrada','El plato principal','El postre','La tapa'],ans:2},
    {q:'¿Qué es "El corrientazo" en Colombia?',opts:['Un plat épicé','Le plat du jour économique','Une boisson','Un dessert'],ans:1},
    {q:'¿Cómo se dice "Commander" en colombiano?',opts:['Pedir / ordenar','Pagar','Reservar','Elegir'],ans:0},
    {q:'¿Qué significa "Para llevar"?',opts:['Pour manger sur place','À emporter','À partager','Pour deux personnes'],ans:1},
    {q:'¿Cómo se dice "Le pourboire" en español?',opts:['La cuenta','La propina','El descuento','El precio'],ans:1},
    {q:'¿Cómo se dit "Que recommandez-vous" en español?',opts:['¿Qué hay hoy?','¿Qué recomienda?','¿Cuánto cuesta?','¿Tiene menú?'],ans:1}
   ]},

  /* ── TRANSPORTES ── */
  {id:'trans',level:1,emoji:'🚌',name:'Los Transportes',sub:'Bus, carro, metro… / Les transports en Colombia',
   words:[
    {es:'El bus / La buseta / El colectivo',fr:'Le bus / Le minibus / Le collectif',em:'🚌'},
    {es:'El metro / El TransMilenio',fr:'Le métro / Le TransMilenio (BRT Bogotá)',em:'🚇'},
    {es:'El tren',fr:'Le train',em:'🚂'},
    {es:'El avión',fr:'L\'avion',em:'✈️'},
    {es:'El taxi / El Uber / El InDriver',fr:'Le taxi / L\'Uber / L\'InDriver',em:'🚕'},
    {es:'El carro / El automóvil',fr:'La voiture',em:'🚗'},
    {es:'La moto / La motocicleta',fr:'La moto',em:'🏍️'},
    {es:'La bicicleta / La bici',fr:'Le vélo',em:'🚴'},
    {es:'El tiquete / El pasaje',fr:'Le billet / Le ticket',em:'🎫'},
    {es:'La parada / La paradero',fr:'L\'arrêt',em:'🚏'}
   ],
   quiz10:[
    {q:'¿Cómo se dit "Le bus" en colombiano?',opts:['El tren','El metro','El bus / la buseta','El taxi'],ans:2},
    {q:'¿Cómo se dit "La voiture" en colombiano?',opts:['La moto','El carro / el automóvil','El tranvía','El camión'],ans:1},
    {q:'¿Qué es "El TransMilenio" en Colombia?',opts:['Un tramway','Un téléphérique','Le système BRT de Bogotá','Un métro souterrain'],ans:2},
    {q:'¿Cómo se dit "Le billet" en colombiano?',opts:['El pasaporte','El sencillo','El tiquete / el pasaje','La tarjeta'],ans:2}
   ]},

  /* ── OBJETOS ── */
  {id:'objets',level:1,emoji:'🔑',name:'Objetos del Día',sub:'Celular, llaves… / Objets du quotidien',
   words:[
    {es:'El teléfono / El celular',fr:'Le téléphone / Le portable',em:'📱'},
    {es:'El computador / El portátil',fr:'L\'ordinateur / Le portable',em:'💻'},
    {es:'El cargador',fr:'Le chargeur',em:'🔌'},
    {es:'El reloj de pulsera',fr:'La montre',em:'⌚'},
    {es:'Las llaves',fr:'Les clés',em:'🔑'},
    {es:'La billetera / La cartera',fr:'Le portefeuille / le porte-monnaie',em:'👛'},
    {es:'La mochila / El bolso',fr:'Le sac à dos / Le sac',em:'🎒'},
    {es:'Los lentes / Las gafas',fr:'Les lunettes',em:'👓'},
    {es:'El sombrilla / El paraguas',fr:'Le parapluie',em:'☂️'},
    {es:'El papel / El esfero / El bolígrafo',fr:'Le papier / Le stylo bic / Le stylo',em:'🖊️'},
    {es:'Las tijeras',fr:'Les ciseaux',em:'✂️'},
    {es:'El plato / El vaso / La taza',fr:'L\'assiette / Le verre / La tasse',em:'🍽️'},
    {es:'La cuchara / El tenedor / El cuchillo',fr:'La cuillère / La fourchette / Le couteau',em:'🥄'},
    {es:'La botella / El frasco',fr:'La bouteille / Le bocal',em:'🍶'},
    {es:'El espejo / La toalla / El jabón',fr:'Le miroir / La serviette / Le savon',em:'🪞'},
    {es:'La almohada',fr:'L\'oreiller',em:''}
   ],
   quiz10:[
    {q:'¿Cómo se dit "Le portable / téléphone" en colombiano?',opts:['La tableta','El celular','El ordenador','La radio'],ans:1},
    {q:'¿Cómo se dit "L\'ordinateur" en colombiano?',opts:['El móvil','La tableta','El computador','La pantalla'],ans:2},
    {q:'¿Cómo se dit "Les lunettes" en colombiano?',opts:['Los auriculares','Los lentes / las gafas','Los guantes','Los relojes'],ans:1},
    {q:'¿Cómo se dit "Le stylo bic" en colombiano?',opts:['El lápiz','El papel','El esfero / bolígrafo','El libro'],ans:2},
    {q:'¿Cómo se dit "Le portefeuille" en colombiano?',opts:['La mochila','Las llaves','La billetera / cartera','El celular'],ans:2},
    {q:'¿Qué significa "El espejo"?',opts:['La fenêtre','Le miroir','Le tableau','La porte'],ans:1},
    {q:'¿Cómo se dit "La serviette de bain" en español?',opts:['La almohada','El jabón','La toalla','El vaso'],ans:2},
    {q:'¿Cómo se dit "Le parapluie" en colombiano?',opts:['El abrigo','El sombrilla / paraguas','La bufanda','El impermeable'],ans:1}
   ]},

  /* ── VIVIENDA ── */
  {id:'log',level:1,emoji:'🏠',name:'La Vivienda',sub:'Sala, cocina… / Le logement en Colombia',
   words:[
    {es:'La casa',fr:'La maison',em:'🏠'},
    {es:'El apartamento / El apto',fr:'L\'appartement',em:'🏢'},
    {es:'La entrada / El recibidor',fr:'L\'entrée',em:'🚪'},
    {es:'La sala / El salón',fr:'Le salon',em:'🛋️'},
    {es:'El comedor',fr:'La salle à manger',em:'🍽️'},
    {es:'La cocina',fr:'La cuisine',em:'🍳'},
    {es:'La habitación / El cuarto',fr:'La chambre',em:'🛏️'},
    {es:'El baño / El sanitario',fr:'La salle de bain / Les toilettes',em:'🚿'},
    {es:'El garaje / El parqueadero',fr:'Le garage / Le parking',em:'🚗'}
   ],
   quiz10:[
    {q:'¿Cómo se dit "Le salon" en colombiano?',opts:['La cocina','La habitación','La sala','El garaje'],ans:2},
    {q:'¿Qué significa "La cocina"?',opts:['La salle à manger','La cuisine','La salle de bain','Le salon'],ans:1},
    {q:'¿Cómo se dit "La chambre" en colombiano?',opts:['El salón','La habitación / el cuarto','La entrada','El garaje'],ans:1},
    {q:'¿Cómo se dit "Les toilettes" en colombiano?',opts:['La sala de bain','El garaje','El sanitario / el baño','La cocina'],ans:2},
    {q:'¿Cómo se dit "L\'appartement" en colombiano?',opts:['La casa','El piso','El apartamento / el apto','La habitación'],ans:2}
   ]},

  /* ── MUEBLES ── */
  {id:'muebles_equipamiento',level:1,emoji:'🪑',name:'Muebles y Equipamiento',sub:'Sofá, nevera, ducha… / Meubles et équipements',
   words:[
    {es:'El sofá / El sillón',fr:'Le canapé / Le fauteuil',em:'🛋️'},
    {es:'La mesa / La silla',fr:'La table / La chaise',em:'🪑'},
    {es:'La lámpara / La estantería',fr:'La lampe / L\'étagère',em:'💡'},
    {es:'La cama / El colchón',fr:'Le lit / Le matelas',em:'🛏️'},
    {es:'El armario / El closet',fr:'L\'armoire / Le placard',em:'🗄️'},
    {es:'El escritorio',fr:'Le bureau',em:'🖊️'},
    {es:'La nevera / El refrigerador',fr:'Le réfrigérateur',em:'🧊'},
    {es:'El horno / El microondas',fr:'Le four / Le micro-ondes',em:'🔥'},
    {es:'El lavaplatos / El fregadero',fr:'Le lave-vaisselle / L\'évier',em:'🚰'},
    {es:'El lavabo / La ducha / La bañera',fr:'Le lavabo / La douche / La baignoire',em:'🚿'}
   ],
   quiz10:[
    {q:'¿Cómo se dit "Le canapé" en español?',opts:['El sillón','La silla','El sofá','La cama'],ans:2},
    {q:'¿Cómo se dit "Le réfrigérateur" en colombiano?',opts:['El horno','El microondas','La nevera / el refrigerador','El lavaplatos'],ans:2},
    {q:'¿Cómo se dit "L\'armoire" en colombiano?',opts:['El escritorio','La estantería','El armario / el closet','El sillón'],ans:2},
    {q:'¿Cómo se dit "Le four" en español?',opts:['El microondas','El horno','El fregadero','El lavabo'],ans:1},
    {q:'¿Qué significa "El escritorio"?',opts:['L\'armoire','Le lit','Le bureau','La table'],ans:2}
   ]},

  /* ── EMOCIONES ── */
  {id:'emot',level:1,emoji:'😄',name:'Las Emociones',sub:'Contento, cansado… / Les émotions',
   words:[
    {es:'Contento / Contenta',fr:'Content / Contente',em:'😊'},
    {es:'Feliz',fr:'Heureux / Heureuse',em:'😊'},
    {es:'Alegre',fr:'Joyeux / Joyeuse',em:'😄'},
    {es:'Triste',fr:'Triste',em:'😢'},
    {es:'Cansado / Cansada',fr:'Fatigué / Fatiguée',em:'😴'},
    {es:'Bravo / Brava (= fâché en CO)',fr:'Fâché / Fâchée',em:'😠'},
    {es:'Enojado / Enojada',fr:'Énervé / Énervée',em:'😠'},
    {es:'Tener miedo / Estar asustado',fr:'Avoir peur',em:'😨'},
    {es:'Enfermo / Enferma / Malito',fr:'Malade',em:'🤒'},
    {es:'Preocupado / Preocupada',fr:'Inquiet / Inquiète',em:'😟'},
    {es:'Estresado / Estresada',fr:'Stressé / Stressée',em:'😰'},
    {es:'Decepcionado / Decepcionada',fr:'Déçu / Déçue',em:'😞'},
    {es:'Enamorado / Enamorada',fr:'Amoureux / Amoureuse',em:'😍'},
    {es:'¡Qué chévere! / ¡Qué bacano!',fr:'C\'est super ! / C\'est trop bien !',em:'🌟'}
   ],
   quiz10:[
    {q:'¿Cómo se dit "Fâché(e)" en colombiano?',opts:['Decepcionado','Bravo / Enojado','Preocupado','Contento'],ans:1},
    {q:'¿Cómo se dice "Joyeuse" en español?',opts:['Triste','Cansada','Alegre','Enferma'],ans:2},
    {q:'¿Cómo se dice "Fatigué" en español?',opts:['Estresado','Enfermo','Preocupado','Cansado'],ans:3},
    {q:'¿Qué significa "Bravo" en Colombia? ¡Cuidado!',opts:['Courageux','Excellent','Fâché / Énervé','Content'],ans:2},
    {q:'¿Qué significa "¡Qué bacano!" en Colombia?',opts:['Ça m\'énerve !','C\'est nul !','C\'est super !','J\'ai peur !'],ans:2},
    {q:'¿Cómo se dice "Inquiète" en español?',opts:['Estresada','Enamorada','Preocupada','Decepcionada'],ans:2},
    {q:'¿Qué significa "Tener miedo"?',opts:['Avoir faim','Avoir peur','Avoir froid','Avoir sommeil'],ans:1}
   ]},

  /* ── FAMILIA ── */
  {id:'fam',level:1,emoji:'👨‍👩‍👧',name:'La Familia',sub:'Papá, mamá, hijo… / La famille',
   words:[
    {es:'La madre / La mamá / La mami',fr:'La mère / La maman',em:'👩'},
    {es:'El padre / El papá / El papi',fr:'Le père / Le papa',em:'👨'},
    {es:'La hija',fr:'La fille',em:'👧'},
    {es:'El hijo',fr:'Le fils',em:'👦'},
    {es:'La hermana / La mana',fr:'La sœur',em:'👧'},
    {es:'El hermano / El mano',fr:'Le frère',em:'👦'},
    {es:'Los abuelos / La abuela / El abuelo',fr:'Les grands-parents / La grand-mère / Le grand-père',em:'👴'},
    {es:'La tía / El tío',fr:'La tante / L\'oncle',em:'👩'},
    {es:'El primo / La prima',fr:'Le cousin / La cousine',em:'🧑'},
    {es:'El sobrino / La sobrina',fr:'Le neveu / La nièce',em:'🧒'},
    {es:'El esposo / La esposa',fr:'Le mari / La femme',em:'💑'},
    {es:'El novio / La novia',fr:'Le petit ami / La petite amie',em:'💏'},
    {es:'El bebé / La bebé',fr:'Le bébé',em:'👶'},
    {es:'Los suegros',fr:'Les beaux-parents',em:'👴👵'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La mère" en español?',opts:['La hija','La mamá','La hermana','La abuela'],ans:1},
    {q:'¿Qué significa "El hermano"?',opts:['Le cousin','Le père','Le frère','L\'oncle'],ans:2},
    {q:'¿Cómo se dice "Les grands-parents" en español?',opts:['Los suegros','Los primos','Los abuelos','Los tíos'],ans:2},
    {q:'¿Qué es "La mana" en Colombia?',opts:['La tante','La cousine','La sœur (familier)','La mère'],ans:2},
    {q:'¿Cómo se dice "Le mari" en español?',opts:['El novio','El esposo','El primo','El hermano'],ans:1}
   ]},

  /* ── PAÍSES ── */
  {id:'pays',level:1,emoji:'🌍',name:'Los Países',sub:'Francia, Colombia… / Les pays',
   words:[
    {es:'Francia',fr:'La France',em:'🇫🇷'},
    {es:'Colombia',fr:'La Colombie',em:'🇨🇴'},
    {es:'España',fr:'L\'Espagne',em:'🇪🇸'},
    {es:'Venezuela',fr:'Le Venezuela',em:'🇻🇪'},
    {es:'Ecuador',fr:'L\'Équateur',em:'🇪🇨'},
    {es:'Perú',fr:'Le Pérou',em:'🇵🇪'},
    {es:'México',fr:'Le Mexique',em:'🇲🇽'},
    {es:'Argentina',fr:'L\'Argentine',em:'🇦🇷'},
    {es:'Brasil',fr:'Le Brésil',em:'🇧🇷'},
    {es:'Estados Unidos',fr:'Les États-Unis',em:'🇺🇸'},
    {es:'Canadá',fr:'Le Canada',em:'🇨🇦'},
    {es:'Alemania',fr:'L\'Allemagne',em:'🇩🇪'},
    {es:'Reino Unido',fr:'Le Royaume-Uni',em:'🇬🇧'},
    {es:'Italia',fr:'L\'Italie',em:'🇮🇹'},
    {es:'China',fr:'La Chine',em:'🇨🇳'},
    {es:'Japón',fr:'Le Japon',em:'🇯🇵'},
    {es:'Marruecos',fr:'Le Maroc',em:'🇲🇦'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La France" en español?',opts:['Bélgica','Francia','Venezuela','Portugal'],ans:1},
    {q:'¿Qué significa "Alemania"?',opts:['Autriche','Pays-Bas','Allemagne','Danemark'],ans:2},
    {q:'¿Cómo se dice "Le Brésil" en español?',opts:['Perú','Chile','Brasil','Bolivia'],ans:2},
    {q:'¿Qué significa "Reino Unido"?',opts:['Irlande','Royaume-Uni','Écosse','Danemark'],ans:1},
    {q:'¿Cómo se dice "La Colombie" en español?',opts:['Venezuela','Ecuador','Colombia','México'],ans:2}
   ]},

  /* ── PROFESIONES ── */
  {id:'met',level:1,emoji:'💼',name:'Las Profesiones',sub:'Médico, profe… / Les professions',
   words:[
    {es:'El/la estudiante',fr:'L\'étudiant / L\'étudiante',em:'🎓'},
    {es:'El profesor / La profesora',fr:'Le professeur / La professeure',em:'👩‍🏫'},
    {es:'El mesero / La mesera',fr:'Le serveur / La serveuse',em:'🍽️'},
    {es:'El vendedor / La vendedora',fr:'Le vendeur / La vendeuse',em:'🏪'},
    {es:'El taxista / La taxista',fr:'Le chauffeur de taxi',em:'🚕'},
    {es:'El médico / El doctor / La doctora',fr:'Le médecin',em:'🩺'},
    {es:'El enfermero / La enfermera',fr:'L\'infirmier / L\'infirmière',em:'👨‍⚕️'},
    {es:'El cocinero / La cocinera',fr:'Le cuisinier / La cuisinière',em:'👨‍🍳'},
    {es:'El plomero / La plomera',fr:'Le plombier',em:'🔧'},
    {es:'El informático / El ingeniero de sistemas',fr:'L\'informaticien / L\'ingénieur systèmes',em:'💻'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le médecin" en español?',opts:['El profesor','El médico / doctor','El enfermero','El cocinero'],ans:1},
    {q:'¿Cómo se dit "Le serveur" en colombiano?',opts:['El cocinero','El mesero','El taxista','El vendedor'],ans:1},
    {q:'¿Cómo se dit "Le plombier" en colombiano?',opts:['El electricista','El fontanero','El plomero','El carpintero'],ans:2},
    {q:'¿Qué significa "La estudiante"?',opts:['La professeure','L\'étudiante','La médecin','La vendeuse'],ans:1},
    {q:'¿Cómo se dice "L\'infirmier" en español?',opts:['El médico','El profesor','El enfermero','El mesero'],ans:2}
   ]},

  /* ── ANIMALES ── */
  {id:'anim',level:1,emoji:'🐘',name:'Los Animales',sub:'Perro, gato, oso de anteojos… / Les animaux',
   words:[
    {es:'El perro / El perrito',fr:'Le chien',em:'🐕'},
    {es:'El gato / El gatito',fr:'Le chat',em:'🐈'},
    {es:'El pájaro / El loro',fr:'L\'oiseau / Le perroquet',em:'🦜'},
    {es:'El pez',fr:'Le poisson',em:'🐠'},
    {es:'El caballo',fr:'Le cheval',em:'🐎'},
    {es:'La vaca',fr:'La vache',em:'🐄'},
    {es:'El cerdo / El marrano',fr:'Le cochon',em:'🐷'},
    {es:'La gallina / El pollo',fr:'La poule / Le poulet',em:'🐔'},
    {es:'El oso de anteojos',fr:'L\'ours à lunettes (ours national colombien)',em:'🐻'},
    {es:'El cóndor de los Andes',fr:'Le condor des Andes (symbole national)',em:'🦅'},
    {es:'El jaguar / El tigre mariposa',fr:'Le jaguar',em:'🐆'},
    {es:'El mono / El tití',fr:'Le singe / Le titi (singe endémique)',em:'🐒'},
    {es:'La serpiente / La boa',fr:'Le serpent / Le boa',em:'🐍'},
    {es:'El caimán / El cocodrilo',fr:'Le caïman / Le crocodile',em:'🐊'},
    {es:'La mariposa / La morpho azul',fr:'Le papillon / Le morpho bleu (endémique CO)',em:'🦋'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le chien" en español?',opts:['El gato','El perro','El pájaro','El caballo'],ans:1},
    {q:'¿Qué es "El oso de anteojos" en Colombia?',opts:['Un jaguar','Un coypu','L\'ours à lunettes','Un dauphin'],ans:2},
    {q:'¿Cómo se dit "Le cochon" en colombiano?',opts:['La vaca','El perro','El cerdo / marrano','El mono'],ans:2},
    {q:'¿Qué es "El cóndor" en Colombia?',opts:['Un jaguar','L\'oiseau symbole national','Un serpent','Un dauphin'],ans:1},
    {q:'¿Cómo se dice "L\'oiseau" en español?',opts:['El pez','La serpiente','El pájaro','El gato'],ans:2}
   ]},

  /* ── PLANTAS ── */
  {id:'plan',level:1,emoji:'🌿',name:'Las Plantas',sub:'Flor, árbol, selva… / Les plantes',
   words:[
    {es:'La flor / La orquídea',fr:'La fleur / L\'orchidée (fleur nationale)',em:'🌸'},
    {es:'El árbol / La palma de cera',fr:'L\'arbre / Le palmier de cire (arbre national)',em:'🌳'},
    {es:'La hoja',fr:'La feuille',em:'🍃'},
    {es:'La hierba / El pasto',fr:'L\'herbe / Le gazon',em:'🌱'},
    {es:'El jardín / La mata',fr:'Le jardin / La plante',em:'🏡'},
    {es:'La rosa / El girasol',fr:'La rose / Le tournesol',em:'🌹'},
    {es:'La selva / El bosque',fr:'La jungle / La forêt',em:'🌲'},
    {es:'El páramo',fr:'Le páramo (écosystème d\'altitude unique en CO)',em:'🏔️'}
   ],
   quiz10:[
    {q:'¿Cuál es la flor nacional de Colombia?',opts:['La rosa','La tulipa','La orquídea','El girasol'],ans:2},
    {q:'¿Qué es "La palma de cera" en Colombia?',opts:['Un cactus','L\'arbre national','Une plante aquatique','Un arbre fruitier'],ans:1},
    {q:'¿Cómo se dice "La fleur" en español?',opts:['La hoja','La flor','El césped','La rosa'],ans:1},
    {q:'¿Qué es "El páramo" en Colombia?',opts:['Une plage','Un désert','Un écosystème d\'altitude unique','Une forêt tropicale'],ans:2},
    {q:'¿Cómo se dice "La forêt" en español?',opts:['El jardín','La selva / el bosque','El campo','El parque'],ans:1}
   ]}
];


/* ========================================
   Español Colombiano → Français 🇨🇴 – Niveau 2
   14 dialogues — Niveau A1
   Français débutant en Colombie
   © 2026 Sébastien Godet
======================================== */

var LEVEL2_THEMES = [

  /* 1 ── Saludar */
  {id:'salut2',level:2,emoji:'👋',name:'Saludos',sub:'Saluer quelqu\'un / Dire bonjour en Colombie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans la rue à Bogotá',img:'🏘️',dialogue:[
      {s:'Camilo',es:'¡Hola! ¿Quiubo, qué más?',fr:'Salut ! Ça va, quoi de neuf ?',side:'left'},
      {s:'Ana',es:'¡Todo bien, gracias! ¿Y vos?',fr:'Tout va bien, merci ! Et toi ?',side:'right'},
      {s:'Camilo',es:'Más o menos. Estoy un poco cansado.',fr:'Comme ci comme ça. Je suis un peu fatigué.',side:'left'},
      {s:'Ana',es:'¡Ay, no! Lo siento, parce.',fr:'Oh non ! Je suis désolée, ami.',side:'right'},
      {s:'Camilo',es:'Gracias. ¡Nos vemos!',fr:'Merci. À plus !',side:'left'},
      {s:'Ana',es:'¡Chao, chao!',fr:'Ciao, ciao !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Au bureau le matin',img:'💼',dialogue:[
      {s:'Pedro',es:'¡Buenos días! ¿Cómo amaneció?',fr:'Bonjour ! Tu t\'es bien réveillé(e) ?',side:'left'},
      {s:'María',es:'Bien, gracias. ¿Y usted?',fr:'Bien, merci. Et vous ?',side:'right'},
      {s:'Pedro',es:'Un poco cansado. ¿Quiere un tinto?',fr:'Un peu fatigué. Vous voulez un petit café ?',side:'left'},
      {s:'María',es:'Sí, por favor. ¡Gracias!',fr:'Oui, s\'il vous plaît. Merci !',side:'right'},
      {s:'Pedro',es:'¡Con mucho gusto! Ahorita se lo traigo.',fr:'Avec plaisir ! Je vous l\'apporte tout de suite.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Entre amis à la cafetería',img:'☕',dialogue:[
      {s:'Julián',es:'¡Ey, parcero! ¿Qué más?',fr:'Hé, mon pote ! Quoi de neuf ?',side:'left'},
      {s:'Sofía',es:'¡Todo bien! ¿Y vos?',fr:'Tout va bien ! Et toi ?',side:'right'},
      {s:'Julián',es:'¡Bacano! ¿Tomamos algo?',fr:'Super ! On prend quelque chose ?',side:'left'},
      {s:'Sofía',es:'¡Listo! Tengo sed.',fr:'D\'accord ! J\'ai soif.',side:'right'},
      {s:'Julián',es:'¡Yo también! Pido dos tintos.',fr:'Moi aussi ! Je commande deux cafés.',side:'left'}
    ]}
   ],
   vocab:['¿Quiubo? / ¿Qué más? = Ça va ? / Quoi de neuf ?','¿Cómo amaneció? = Tu t\'es bien réveillé(e) ?','¡Chao chao! = Ciao !','Parcero / Parce = Pote / ami(e) (argot CO)','¡Listo! = D\'accord !','El tinto = Le café noir (Colombie)','¡Con mucho gusto! = Avec plaisir !','Bacano = Super / Cool (Colombie)'],
   quiz:[
    {q:'¿Qué significa "¿Quiubo?" en Colombia?',opts:['Tu t\'es bien réveillé ?','Ça va ? / Quoi de neuf ?','Comment tu t\'appelles ?','Où es-tu ?'],ans:1},
    {q:'¿Qué significa "Parcero / parce" en Colombia?',opts:['Monsieur','Pote / ami(e)','Docteur','Professeur'],ans:1},
    {q:'¿Qué significa "¡Listo!" en Colombia?',opts:['Au revoir !','Allons-y !','D\'accord !','Bonne nuit !'],ans:2}
   ]},

  /* 2 ── Presentarse */
  {id:'pres2',level:2,emoji:'🙋',name:'Presentarse',sub:'Dire son nom, son pays / Se présenter en Colombie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans un cours d\'espagnol',img:'📚',dialogue:[
      {s:'Profesora',es:'¡Hola! ¿Cómo te llamas?',fr:'Bonjour ! Tu t\'appelles comment ?',side:'right'},
      {s:'Marc',es:'Me llamo Marc. ¿Y usted?',fr:'Je m\'appelle Marc. Et vous ?',side:'left'},
      {s:'Profesora',es:'Yo me llamo Laura. ¿De dónde eres, Marc?',fr:'Je m\'appelle Laura. Tu es d\'où, Marc ?',side:'right'},
      {s:'Marc',es:'Soy de Francia, de París. ¿Y usted?',fr:'Je suis de France, de Paris. Et vous ?',side:'left'},
      {s:'Profesora',es:'Soy de Medellín. ¡Bienvenido a Colombia!',fr:'Je suis de Medellín. Bienvenue en Colombie !',side:'right'},
      {s:'Marc',es:'¡Muchas gracias! ¡Qué chévere!',fr:'Merci beaucoup ! Super !',side:'left'}
    ]},
    {label:'Sit. 2',title:'Dans le quartier',img:'🏙️',dialogue:[
      {s:'Vecino',es:'¡Hola! ¿Es usted nuevo por acá?',fr:'Bonjour ! Vous êtes nouveau ici ?',side:'right'},
      {s:'Julie',es:'Sí. Me llamo Julie. Soy francesa.',fr:'Oui. Je m\'appelle Julie. Je suis française.',side:'left'},
      {s:'Vecino',es:'Yo soy Antonio. ¿Habla español?',fr:'Moi je suis Antonio. Vous parlez espagnol ?',side:'right'},
      {s:'Julie',es:'Un poquito. Estoy aprendiendo.',fr:'Un petit peu. Je suis en train d\'apprendre.',side:'left'},
      {s:'Vecino',es:'¡Qué bacano! Su español es muy bueno.',fr:'Super ! Votre espagnol est très bon.',side:'right'},
      {s:'Julie',es:'¡Gracias! Usted es muy amable.',fr:'Merci ! Vous êtes très gentil.',side:'left'}
    ]},
    {label:'Sit. 3',title:'À une fiesta',img:'🎉',dialogue:[
      {s:'Chica',es:'¡Hola! ¿Cómo te llamas?',fr:'Salut ! Tu t\'appelles comment ?',side:'right'},
      {s:'Thomas',es:'Thomas. ¿Y vos?',fr:'Thomas. Et toi ?',side:'left'},
      {s:'Chica',es:'Yo soy Valentina. ¿Sos francés?',fr:'Moi je suis Valentina. Tu es français ?',side:'right'},
      {s:'Thomas',es:'Sí, soy de Lyon. ¿Y vos sos de Bogotá?',fr:'Oui, je suis de Lyon. Et toi tu es de Bogotá ?',side:'left'},
      {s:'Chica',es:'No, soy de Cali. ¡Mucho gusto, parcero!',fr:'Non, je suis de Cali. Enchanté(e), pote !',side:'right'},
      {s:'Thomas',es:'¡Mucho gusto!',fr:'Enchanté !',side:'left'}
    ]}
   ],
   vocab:['Me llamo = Je m\'appelle','¿De dónde eres? = Tu es d\'où ?','Soy de Bogotá / Medellín / Cali = Je suis de…','¡Bienvenido(a) a Colombia! = Bienvenue en Colombie !','Un poquito = Un petit peu','¡Mucho gusto! = Enchanté(e) !','Parcero = Pote / ami (Colombie)'],
   quiz:[
    {q:'¿Cómo se dice "Je m\'appelle" en español?',opts:['Soy','Me llamo','Tengo','Vivo'],ans:1},
    {q:'¿Qué significa "¿De dónde eres?"?',opts:['Comment tu t\'appelles ?','Quel âge tu as ?','Tu es d\'où ?','Tu habites où ?'],ans:2},
    {q:'¿Qué significa "¡Mucho gusto!" en Colombia?',opts:['Avec plaisir !','Enchanté(e) !','Merci beaucoup !','À plus !'],ans:1}
   ]},

  /* 3 ── Pedir camino */
  {id:'chemin2',level:2,emoji:'🗺️',name:'Pedir camino',sub:'Demander son chemin / S\'orienter à Bogotá',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Trouver le TransMilenio',img:'🚌',dialogue:[
      {s:'Turista',es:'Disculpe, ¿dónde queda el TransMilenio?',fr:'Excusez-moi, où est le TransMilenio ?',side:'left'},
      {s:'Señora',es:'Siga todo recto y doble a la izquierda.',fr:'Continuez tout droit et tournez à gauche.',side:'right'},
      {s:'Turista',es:'¿Queda lejos?',fr:'C\'est loin ?',side:'left'},
      {s:'Señora',es:'No, queda cerquita. Como cinco minuticos.',fr:'Non, c\'est tout près. Environ cinq petites minutes.',side:'right'},
      {s:'Turista',es:'Muchas gracias.',fr:'Merci beaucoup.',side:'left'},
      {s:'Señora',es:'¡Con mucho gusto!',fr:'Avec plaisir !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Trouver une droguería',img:'💊',dialogue:[
      {s:'Marc',es:'Disculpe, ¿hay una droguería cerca?',fr:'Pardon, il y a une pharmacie près d\'ici ?',side:'left'},
      {s:'Chico',es:'Sí. Baje esa calle y doble a la derecha.',fr:'Oui. Descendez cette rue et tournez à droite.',side:'right'},
      {s:'Marc',es:'¿Después del banco?',fr:'Après la banque ?',side:'left'},
      {s:'Chico',es:'Sí, exacto. Es la puerta verde.',fr:'Oui, exactement. C\'est la porte verte.',side:'right'},
      {s:'Marc',es:'¿Está abierta ahorita?',fr:'Elle est ouverte maintenant ?',side:'left'},
      {s:'Chico',es:'Sí, creo que sí.',fr:'Oui, je crois que oui.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Trouver un supermercado',img:'🛒',dialogue:[
      {s:'Julie',es:'Disculpe, ¿hay un Éxito por acá?',fr:'Pardon, il y a un supermarché Éxito ici ?',side:'left'},
      {s:'Señor',es:'Sí, queda enfrente, al lado de la tienda de barrio.',fr:'Oui, il est en face, à côté de l\'épicerie.',side:'right'},
      {s:'Julie',es:'¿A la derecha o a la izquierda?',fr:'À droite ou à gauche ?',side:'left'},
      {s:'Señor',es:'A la derecha. Es muy grande.',fr:'À droite. Il est très grand.',side:'right'},
      {s:'Julie',es:'¡Perfecto! Muchas gracias.',fr:'Parfait ! Merci beaucoup.',side:'left'},
      {s:'Señor',es:'¡Con mucho gusto!',fr:'Avec plaisir !',side:'right'}
    ]}
   ],
   vocab:['Disculpe = Excusez-moi','¿Dónde queda...? = Où se trouve... ? (Colombie)','Siga todo recto = Continuez tout droit','Doble a la izquierda = Tournez à gauche','Doble a la derecha = Tournez à droite','Cerquita = Tout près (diminutif)','¡Con mucho gusto! = Avec plaisir !','Ahorita = Maintenant / tout de suite (Colombie)'],
   quiz:[
    {q:'¿Cómo se dit "Où se trouve…?" en colombiano?',opts:['¿Cómo llego a…?','¿Dónde queda…?','¿Cuánto cuesta…?','¿Cuándo abre…?'],ans:1},
    {q:'¿Qué significa "¡Con mucho gusto!" en Colombia?',opts:['Avec plaisir !','Merci !','De rien !','Pardon !'],ans:0},
    {q:'¿Qué significa "Ahorita" en Colombia?',opts:['Hier','Demain','Maintenant / tout de suite','Dans longtemps'],ans:2}
   ]},

  /* 4 ── En el café */
  {id:'bar2',level:2,emoji:'☕',name:'En el café',sub:'Commander au café / Café et snacks en Colombia',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Commande simple',img:'☕',dialogue:[
      {s:'Cliente',es:'¡Hola! Un tinto, por favor.',fr:'Bonjour ! Un café noir, s\'il vous plaît.',side:'left'},
      {s:'Mesera',es:'¿Pequeño o grande?',fr:'Petit ou grand ?',side:'right'},
      {s:'Cliente',es:'Pequeño, por favor.',fr:'Petit, s\'il vous plaît.',side:'left'},
      {s:'Mesera',es:'¿Con azúcar?',fr:'Avec du sucre ?',side:'right'},
      {s:'Cliente',es:'Sí, uno. ¿Cuánto es?',fr:'Oui, un. C\'est combien ?',side:'left'},
      {s:'Mesera',es:'Tres mil pesos.',fr:'Trois mille pesos.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Commander des empanadas',img:'🥟',dialogue:[
      {s:'Mesero',es:'¿Qué les traigo?',fr:'Qu\'est-ce que je vous apporte ?',side:'right'},
      {s:'Clara',es:'Una aromática, por favor.',fr:'Une tisane, s\'il vous plaît.',side:'left'},
      {s:'Tomás',es:'Y yo un agua. ¿Tienen empanadas?',fr:'Et moi une eau. Vous avez des empanadas ?',side:'right'},
      {s:'Mesero',es:'Sí. Hay de pollo y de papa con carne.',fr:'Oui. Il y en a au poulet et à la pomme de terre avec viande.',side:'right'},
      {s:'Clara',es:'¡Qué chévere! Una de pollo, por favor.',fr:'Super ! Une au poulet, s\'il vous plaît.',side:'left'},
      {s:'Mesero',es:'¡En un momento!',fr:'Dans un instant !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Payer l\'addition',img:'🧾',dialogue:[
      {s:'Cliente',es:'La cuenta, por favor.',fr:'L\'addition, s\'il vous plaît.',side:'left'},
      {s:'Mesero',es:'Son veinte mil pesos.',fr:'C\'est vingt mille pesos.',side:'right'},
      {s:'Cliente',es:'¿Se puede pagar con tarjeta?',fr:'On peut payer par carte ?',side:'left'},
      {s:'Mesero',es:'Sí, claro.',fr:'Oui, bien sûr.',side:'right'},
      {s:'Cliente',es:'Aquí tiene. Muchas gracias.',fr:'Voilà. Merci beaucoup.',side:'left'},
      {s:'Mesero',es:'¡Con mucho gusto! ¡Hasta luego!',fr:'Avec plaisir ! À bientôt !',side:'right'}
    ]}
   ],
   vocab:['El tinto = Le café noir (Colombie)','La aromática = La tisane (Colombie)','¿Cuánto es? = C\'est combien ?','La cuenta = L\'addition','¿Se puede pagar con tarjeta? = On peut payer par carte ?','¡En un momento! = Dans un instant !','¡Con mucho gusto! = Avec plaisir !','El mesero / la mesera = Le serveur / la serveuse'],
   quiz:[
    {q:'¿Qué es "El tinto" en Colombia?',opts:['Un vin rouge','Un petit café noir','Un thé','Une bière'],ans:1},
    {q:'¿Qué significa "La cuenta, por favor"?',opts:['Le menu','L\'addition','Un café','L\'eau'],ans:1},
    {q:'¿Qué es "La aromática" en Colombia?',opts:['Un café fort','Un café au lait','Une tisane','Un soda'],ans:2}
   ]},

  /* 5 ── En el restaurante */
  {id:'resto2',level:2,emoji:'🍽️',name:'En el restaurante',sub:'Commander un repas / Au restaurant en Colombie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Avoir une table',img:'🪑',dialogue:[
      {s:'Cliente',es:'Hola, ¿tiene una mesa para dos personas?',fr:'Bonjour, vous avez une table pour deux ?',side:'left'},
      {s:'Mesero',es:'Sí, por aquí, por favor.',fr:'Oui, par ici, s\'il vous plaît.',side:'right'},
      {s:'Cliente',es:'Gracias. ¿Tiene corrientazo?',fr:'Merci. Vous avez un menu du jour ?',side:'left'},
      {s:'Mesero',es:'Sí. Hoy hay sopa, arroz con pollo y jugo.',fr:'Oui. Aujourd\'hui il y a soupe, riz au poulet et jus de fruit.',side:'right'},
      {s:'Cliente',es:'¿Cuánto vale?',fr:'Ça coûte combien ?',side:'left'},
      {s:'Mesero',es:'Doce mil pesos, con bebida.',fr:'Douze mille pesos, avec boisson.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Commander à table',img:'🥗',dialogue:[
      {s:'Mesero',es:'¿Ya saben qué van a pedir?',fr:'Vous savez déjà ce que vous allez commander ?',side:'right'},
      {s:'Sophie',es:'Sí. De entrada, una sopa.',fr:'Oui. En entrée, une soupe.',side:'left'},
      {s:'Mesero',es:'¿Y de seco?',fr:'Et en plat principal ?',side:'right'},
      {s:'Sophie',es:'La bandeja paisa, por favor.',fr:'La bandeja paisa, s\'il vous plaît.',side:'left'},
      {s:'Mesero',es:'¿Con fríjoles o sin?',fr:'Avec des haricots ou sans ?',side:'right'},
      {s:'Sophie',es:'Con fríjoles, por favor.',fr:'Avec des haricots, s\'il vous plaît.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Un problème avec la commande',img:'🤔',dialogue:[
      {s:'Cliente',es:'Disculpe, esto no es lo que pedí.',fr:'Pardon, ce n\'est pas ce que j\'ai commandé.',side:'left'},
      {s:'Mesero',es:'Lo siento mucho. ¿Qué pidió?',fr:'Je suis vraiment désolé. Qu\'est-ce que vous avez commandé ?',side:'right'},
      {s:'Cliente',es:'Pedí el pescado, no la carne.',fr:'J\'ai commandé le poisson, pas la viande.',side:'left'},
      {s:'Mesero',es:'Disculpe, ahorita mismo lo cambio.',fr:'Excusez-moi, je le change tout de suite.',side:'right'},
      {s:'Cliente',es:'Gracias.',fr:'Merci.',side:'left'},
      {s:'Mesero',es:'¡Con mucho gusto!',fr:'Avec plaisir !',side:'right'}
    ]}
   ],
   vocab:['El corrientazo = Le plat du jour économique (Colombie)','El seco = Le plat principal (certaines régions CO)','La bandeja paisa = Le plat national colombien','Los fríjoles = Les haricots rouges (Colombie)','De entrada = En entrée','¿Cuánto vale? = Ça coûte combien ? (Colombie)','¡Con mucho gusto! = Avec plaisir !'],
   quiz:[
    {q:'¿Qué es "El corrientazo" en Colombia?',opts:['Un menu gastronomique','Le plat du jour économique','Un plat épicé','Une boisson'],ans:1},
    {q:'¿Qué son "Los fríjoles" en Colombia?',opts:['Des lentilles','Du riz','Des haricots rouges','Des petits pois'],ans:2},
    {q:'¿Qué significa "¿Cuánto vale?" en Colombia?',opts:['Ça vaut la peine ?','Ça coûte combien ?','C\'est bon ?','Il y a combien ?'],ans:1}
   ]},

  /* 6 ── De compras */
  {id:'compras2',level:2,emoji:'🛍️',name:'De compras',sub:'Acheter des choses / Faire ses courses en Colombie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Au marché de plaza',img:'🧺',dialogue:[
      {s:'Cliente',es:'Buenos días. ¿A cómo están los tomates?',fr:'Bonjour. Les tomates sont à combien ?',side:'left'},
      {s:'Vendedor',es:'A dos mil el kilo, mi amor.',fr:'À deux mille le kilo, ma belle.',side:'right'},
      {s:'Cliente',es:'Quiero un kilo, por favor.',fr:'Je veux un kilo, s\'il vous plaît.',side:'left'},
      {s:'Vendedor',es:'¿Le doy algo más?',fr:'Je vous donne autre chose ?',side:'right'},
      {s:'Cliente',es:'Sí, ¿tiene bananos?',fr:'Oui, vous avez des bananes ?',side:'left'},
      {s:'Vendedor',es:'Sí. Están a mil el racimo.',fr:'Oui. Elles sont à mille le régime.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Dans un magasin de vêtements',img:'👗',dialogue:[
      {s:'Vendedora',es:'¡Hola! ¿En qué le puedo colaborar?',fr:'Bonjour ! Je peux vous aider ?',side:'right'},
      {s:'Lucie',es:'Sí, estoy buscando una camiseta.',fr:'Oui, je cherche un t-shirt.',side:'left'},
      {s:'Vendedora',es:'¿Qué talla usa?',fr:'Vous faites quelle taille ?',side:'right'},
      {s:'Lucie',es:'La talla mediana.',fr:'La taille moyenne.',side:'left'},
      {s:'Vendedora',es:'¿Se la quiere probar? El probador está allí.',fr:'Vous voulez l\'essayer ? La cabine est là-bas.',side:'right'},
      {s:'Lucie',es:'¡Listo! ¿Cuánto vale?',fr:'D\'accord ! Ça coûte combien ?',side:'left'}
    ]},
    {label:'Sit. 3',title:'À la caja',img:'🛒',dialogue:[
      {s:'Cajero',es:'¡Hola! ¿Cómo le va?',fr:'Bonjour ! Ça va ?',side:'right'},
      {s:'Cliente',es:'Bien, gracias. ¿Cuánto es en total?',fr:'Bien, merci. C\'est combien en tout ?',side:'left'},
      {s:'Cajero',es:'Son cuarenta y dos mil pesos.',fr:'C\'est quarante-deux mille pesos.',side:'right'},
      {s:'Cliente',es:'¿Puedo pagar con tarjeta?',fr:'Je peux payer par carte ?',side:'left'},
      {s:'Cajero',es:'Sí, sin problema.',fr:'Oui, sans problème.',side:'right'},
      {s:'Cliente',es:'Aquí tiene. ¡Gracias!',fr:'Voilà. Merci !',side:'left'}
    ]}
   ],
   vocab:['¿A cómo están? = C\'est à combien ? (Colombie)','El banano = La banane (Colombie)','El racimo = Le régime (de bananes)','¿En qué le puedo colaborar? = Je peux vous aider ? (Colombie)','¿Cuánto vale? = Ça coûte combien ?','El probador = La cabine d\'essayage','La caja = La caisse','Mi amor = Mon cœur (terme affectif courant au marché)'],
   quiz:[
    {q:'¿Cómo se dit "La banane" en colombiano?',opts:['La banana','El banano','El plátano','La fruta'],ans:1},
    {q:'¿Qué significa "¿En qué le puedo colaborar?" en Colombia?',opts:['Comment allez-vous ?','Je peux vous aider ?','Qu\'est-ce que vous cherchez ?','C\'est pour vous ?'],ans:1},
    {q:'¿Qué significa "¿A cómo están?" en Colombia?',opts:['Comment vont-ils ?','C\'est à combien ?','Il y en a combien ?','C\'est grand ?'],ans:1}
   ]},

  /* 7 ── El transporte */
  {id:'transport2',level:2,emoji:'🚌',name:'El Transporte',sub:'Bus, carro, moto… / Se déplacer en Colombie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Prendre le TransMilenio',img:'🚌',dialogue:[
      {s:'Marc',es:'Disculpe, ¿cómo llego al centro?',fr:'Excusez-moi, comment j\'arrive au centre-ville ?',side:'left'},
      {s:'Señora',es:'Tome el TransMilenio hasta la estación Museo del Oro.',fr:'Prenez le TransMilenio jusqu\'à la station Museo del Oro.',side:'right'},
      {s:'Marc',es:'¿Cuántas paradas son?',fr:'Combien d\'arrêts ?',side:'left'},
      {s:'Señora',es:'Como cuatro. Es fácil.',fr:'Environ quatre. C\'est facile.',side:'right'},
      {s:'Marc',es:'¿Cómo pago?',fr:'Comment je paye ?',side:'left'},
      {s:'Señora',es:'Con la tarjeta Tullave.',fr:'Avec la carte Tullave.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Prendre un taxi / Uber',img:'🚕',dialogue:[
      {s:'Julie',es:'Buenas, ¿me lleva al aeropuerto El Dorado?',fr:'Bonjour, vous pouvez m\'emmener à l\'aéroport El Dorado ?',side:'left'},
      {s:'Taxista',es:'Claro que sí. ¿A qué terminal?',fr:'Bien sûr. À quel terminal ?',side:'right'},
      {s:'Julie',es:'Terminal internacional. ¿Cuánto cobra?',fr:'Terminal international. Vous prenez combien ?',side:'left'},
      {s:'Taxista',es:'Cuarenta mil pesos.',fr:'Quarante mille pesos.',side:'right'},
      {s:'Julie',es:'¡Listo! Vámonos.',fr:'D\'accord ! Allons-y.',side:'left'},
      {s:'Taxista',es:'¡Bueno!',fr:'Allez !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Prendre une buseta',img:'🚐',dialogue:[
      {s:'Pedro',es:'¿Esta buseta va a Chapinero?',fr:'Ce minibus va à Chapinero ?',side:'left'},
      {s:'Conductor',es:'Sí, suba.',fr:'Oui, montez.',side:'right'},
      {s:'Pedro',es:'¿Cuánto es el pasaje?',fr:'C\'est combien le trajet ?',side:'left'},
      {s:'Conductor',es:'Dos mil ochocientos.',fr:'Deux mille huit cents.',side:'right'},
      {s:'Pedro',es:'Aquí tiene. ¿Me avisa cuando llegamos?',fr:'Voilà. Vous me prévenez quand on arrive ?',side:'left'},
      {s:'Conductor',es:'¡Claro!',fr:'Bien sûr !',side:'right'}
    ]}
   ],
   vocab:['Tomar el bus / la buseta = Prendre le bus / minibus','El TransMilenio = Le système BRT de Bogotá','El pasaje = Le ticket / le trajet','¿Cuánto cobra? = Vous prenez combien ?','¡Listo! = D\'accord ! (Colombie)','La buseta = Le minibus (Colombie)','¿Me lleva? = Vous pouvez m\'emmener ?'],
   quiz:[
    {q:'¿Qué es "La buseta" en Colombia?',opts:['Un métro','Un minibus / petit bus','Un bus longue distance','Un avion'],ans:1},
    {q:'¿Cómo se dit "Prendre le bus" en colombiano?',opts:['Ir al bus','Buscar el bus','Tomar el bus / subirse al bus','Perder el bus'],ans:2},
    {q:'¿Qué significa "¡Listo!" en Colombia?',opts:['C\'est prêt !','D\'accord !','Impossible !','Jamais !'],ans:1}
   ]},

  /* 8 ── La tecnología */
  {id:'tech2',level:2,emoji:'📱',name:'La Tecnología',sub:'Celular, computador… / La technologie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Mon téléphone ne marche pas',img:'📱',dialogue:[
      {s:'Marc',es:'Oye, mi celular no tiene señal.',fr:'Hé, mon téléphone n\'a pas de signal.',side:'left'},
      {s:'Ana',es:'¿Tienes datos o solo WiFi?',fr:'Tu as des données ou seulement le WiFi ?',side:'right'},
      {s:'Marc',es:'Solo WiFi. ¿Cuál es la clave del WiFi?',fr:'Seulement WiFi. C\'est quoi le mot de passe WiFi ?',side:'left'},
      {s:'Ana',es:'Es "bogota2024". ¿Funciona ya?',fr:'C\'est "bogota2024". Ça marche maintenant ?',side:'right'},
      {s:'Marc',es:'Sí, ya me conecté. ¡Gracias, parce!',fr:'Oui, je me suis connecté. Merci, pote !',side:'left'},
      {s:'Ana',es:'¡Con mucho gusto!',fr:'Avec plaisir !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Utiliser le computador',img:'💻',dialogue:[
      {s:'Pedro',es:'¿Me prestas tu computador un momento?',fr:'Tu me prêtes ton ordinateur un instant ?',side:'left'},
      {s:'Luisa',es:'Sí, está prendido. ¿Qué necesitas?',fr:'Oui, il est allumé. Tu as besoin de quoi ?',side:'right'},
      {s:'Pedro',es:'Quiero mandar un correo.',fr:'Je veux envoyer un mail.',side:'left'},
      {s:'Luisa',es:'El navegador está en la pantalla.',fr:'Le navigateur est sur l\'écran.',side:'right'},
      {s:'Pedro',es:'¡Listo, ya lo envié! Gracias.',fr:'C\'est fait, je l\'ai envoyé ! Merci.',side:'left'},
      {s:'Luisa',es:'¡Con mucho gusto!',fr:'Avec plaisir !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Prendre une foto',img:'📷',dialogue:[
      {s:'Carlos',es:'¡Ey! ¿Me tomas una foto?',fr:'Hé ! Tu me prends en photo ?',side:'left'},
      {s:'Sofía',es:'Claro, pon la cámara aquí.',fr:'Bien sûr, pose l\'appareil ici.',side:'right'},
      {s:'Carlos',es:'¡Espera, que voy a sonreír!',fr:'Attends, je vais sourire !',side:'left'},
      {s:'Sofía',es:'¡Ya está! Quedó muy chévere.',fr:'Voilà ! Elle est super.',side:'right'},
      {s:'Carlos',es:'¡A ver! ¡Qué chévere!',fr:'Voyons voir ! Super !',side:'left'},
      {s:'Sofía',es:'¡Listo, te la mando por WhatsApp!',fr:'D\'accord, je te l\'envoie par WhatsApp !',side:'right'}
    ]}
   ],
   vocab:['El celular = Le portable / téléphone (Colombie)','El computador = L\'ordinateur (Colombie)','La clave del WiFi = Le mot de passe WiFi','Mandar un correo = Envoyer un mail','El navegador = Le navigateur','La pantalla = L\'écran','Tomar una foto = Prendre une photo (Colombie)','Prendido = Allumé (ordinateur, Colombie)'],
   quiz:[
    {q:'¿Cómo se dit "L\'ordinateur" en colombiano?',opts:['El computador','El ordenador','La computadora','La máquina'],ans:0},
    {q:'¿Cómo se dit "Le portable / téléphone" en colombiano?',opts:['El teléfono fijo','El celular','El buscapersonas','El móvil'],ans:1},
    {q:'¿Cómo se dit "Allumé" en colombiano (pour un ordi)?',opts:['Abierto','Encendido / prendido','Funcionando','Conectado'],ans:1}
   ]},

  /* 9 ── En el hotel */
  {id:'hotel2',level:2,emoji:'🏨',name:'En el hotel',sub:'Réserver, s\'installer / À l\'hôtel en Colombie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Check-in',img:'🔑',dialogue:[
      {s:'Huésped',es:'Buenas, tengo una reserva a nombre de Martin.',fr:'Bonjour, j\'ai une réservation au nom de Martin.',side:'left'},
      {s:'Recepcionista',es:'Sí, señor. Habitación doble, dos noches.',fr:'Oui, monsieur. Chambre double, deux nuits.',side:'right'},
      {s:'Huésped',es:'Exacto. ¿Me puede dar la llave?',fr:'Exactement. Vous pouvez me donner la clé ?',side:'left'},
      {s:'Recepcionista',es:'Por supuesto. Aquí tiene.',fr:'Bien sûr. Voilà.',side:'right'},
      {s:'Huésped',es:'¿El desayuno está incluido?',fr:'Le petit-déjeuner est inclus ?',side:'left'},
      {s:'Recepcionista',es:'Sí, de siete a diez.',fr:'Oui, de sept à dix heures.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Un problème dans la chambre',img:'🔧',dialogue:[
      {s:'Huésped',es:'Hola, hay un problema en mi habitación.',fr:'Bonjour, il y a un problème dans ma chambre.',side:'left'},
      {s:'Recepcionista',es:'¿Qué pasó?',fr:'Qu\'est-ce qui s\'est passé ?',side:'right'},
      {s:'Huésped',es:'El aire acondicionado no funciona.',fr:'La climatisation ne fonctionne pas.',side:'left'},
      {s:'Recepcionista',es:'Lo siento mucho. ¿Quiere cambiar de cuarto?',fr:'Je suis vraiment désolé. Vous voulez changer de chambre ?',side:'right'},
      {s:'Huésped',es:'Sí, por favor.',fr:'Oui, s\'il vous plaît.',side:'left'},
      {s:'Recepcionista',es:'Aquí tiene la llave del cuatro-veinte.',fr:'Voilà la clé du quatre-vingt.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Demander des infos',img:'🗺️',dialogue:[
      {s:'Huésped',es:'Disculpe, ¿hay un restaurante cerca?',fr:'Pardon, il y a un restaurant près d\'ici ?',side:'left'},
      {s:'Recepcionista',es:'Sí, hay uno muy bueno a dos cuadras.',fr:'Oui, il y en a un très bon à deux pâtés de maisons.',side:'right'},
      {s:'Huésped',es:'¿Y algo para visitar por acá?',fr:'Et quelque chose à visiter dans le coin ?',side:'left'},
      {s:'Recepcionista',es:'Sí, el Parque de la 93 y el Museo del Oro.',fr:'Oui, le Parque de la 93 et le Musée de l\'or.',side:'right'},
      {s:'Huésped',es:'¿Están abiertos hoy?',fr:'Ils sont ouverts aujourd\'hui ?',side:'left'},
      {s:'Recepcionista',es:'Sí, de diez a seis.',fr:'Oui, de dix heures à dix-huit heures.',side:'right'}
    ]}
   ],
   vocab:['La reserva / la reservación = La réservation','La habitación / el cuarto = La chambre (Colombie)','El desayuno incluido = Le petit-déjeuner inclus','No funciona = Ça ne fonctionne pas','A dos cuadras = À deux pâtés de maisons','La llave = La clé','Por acá = Par ici / dans le coin (Colombie)'],
   quiz:[
    {q:'¿Cómo se dit "La chambre" en colombiano?',opts:['La habitación / el cuarto','El salón','La sala','El comedor'],ans:0},
    {q:'¿Qué significa "A dos cuadras"?',opts:['À deux kilomètres','À deux minutes en voiture','À deux pâtés de maisons','À deux stations de bus'],ans:2},
    {q:'¿Cómo se dit "Réservation" en colombiano?',opts:['La reserva / la reservación','El turno','La cita','El ticket'],ans:0}
   ]},

  /* 10 ── En el médico */
  {id:'medico2',level:2,emoji:'🩺',name:'En el médico',sub:'Expliquer ce qui ne va pas / Chez le médecin',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Expliquer ses symptômes',img:'🤒',dialogue:[
      {s:'Doctor',es:'¡Buenas! ¿Qué le pasa?',fr:'Bonjour ! Qu\'est-ce qui ne va pas ?',side:'right'},
      {s:'Paciente',es:'Tengo calentura y me duele la garganta.',fr:'J\'ai de la fièvre et j\'ai mal à la gorge.',side:'left'},
      {s:'Doctor',es:'¿Desde cuándo?',fr:'Depuis quand ?',side:'right'},
      {s:'Paciente',es:'Desde ayer en la tarde.',fr:'Depuis hier après-midi.',side:'left'},
      {s:'Doctor',es:'¿Tiene gripa también?',fr:'Vous avez aussi le rhume ?',side:'right'},
      {s:'Paciente',es:'Sí, bastante.',fr:'Oui, pas mal.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Comprendre le médecin',img:'💊',dialogue:[
      {s:'Doctor',es:'Tiene una infección. Le mando un antibiótico.',fr:'Vous avez une infection. Je vous prescris un antibiotique.',side:'right'},
      {s:'Paciente',es:'¿Cuándo tomo el remedio?',fr:'Quand est-ce que je prends le médicament ?',side:'left'},
      {s:'Doctor',es:'Uno en la mañana y uno en la noche.',fr:'Un le matin et un le soir.',side:'right'},
      {s:'Paciente',es:'¿Por cuántos días?',fr:'Pendant combien de jours ?',side:'left'},
      {s:'Doctor',es:'Siete días. Y tome mucha agua.',fr:'Sept jours. Et buvez beaucoup d\'eau.',side:'right'},
      {s:'Paciente',es:'Gracias, doctor.',fr:'Merci, docteur.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Prendre rendez-vous',img:'📞',dialogue:[
      {s:'Paciente',es:'Hola, quiero una cita con el médico.',fr:'Bonjour, je veux un rendez-vous avec le médecin.',side:'left'},
      {s:'Recepcionista',es:'¿Para cuándo?',fr:'Pour quand ?',side:'right'},
      {s:'Paciente',es:'Para hoy si es posible. Estoy muy malito.',fr:'Pour aujourd\'hui si c\'est possible. Je suis très mal en point.',side:'left'},
      {s:'Recepcionista',es:'¿Tiene calentura?',fr:'Vous avez de la fièvre ?',side:'right'},
      {s:'Paciente',es:'Sí, treinta y nueve.',fr:'Oui, trente-neuf.',side:'left'},
      {s:'Recepcionista',es:'Venga a las cuatro. Traiga la cédula.',fr:'Venez à seize heures. Apportez votre carte d\'identité.',side:'right'}
    ]}
   ],
   vocab:['¿Qué le pasa? = Qu\'est-ce qui ne va pas ?','La calentura = La fièvre (Colombie)','La gripa = Le rhume / la grippe légère (Colombie)','Me duele la garganta = J\'ai mal à la gorge','El remedio = Le médicament (Colombie)','Una cita / un turno = Un rendez-vous médical','La cédula = La carte d\'identité','Malito = Mal en point (diminutif affectif)'],
   quiz:[
    {q:'¿Cómo se dit "J\'ai de la fièvre" en colombiano?',opts:['Tengo frío','Tengo calentura','Tengo tos','Tengo dolor'],ans:1},
    {q:'¿Qué es "La gripa" en Colombia?',opts:['La grippe sévère','Le rhume / la grippe légère','Une angine','La fièvre'],ans:1},
    {q:'¿Qué significa "La cédula" en Colombia?',opts:['Le passeport','Le permis de conduire','La carte d\'identité','La carte de santé'],ans:2}
   ]},

  /* 11 ── El clima */
  {id:'meteo2',level:2,emoji:'☀️',name:'El clima',sub:'Parler de la météo / Le temps en Colombie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Parler du temps',img:'🌤️',dialogue:[
      {s:'Marta',es:'¡Qué calor hace hoy en Cartagena!',fr:'Quelle chaleur aujourd\'hui à Carthagène !',side:'left'},
      {s:'Romain',es:'Sí, está muy húmedo. ¿Cuántos grados son?',fr:'Oui, c\'est très humide. Il fait combien ?',side:'right'},
      {s:'Marta',es:'Como treinta y cuatro.',fr:'Dans les trente-quatre degrés.',side:'left'},
      {s:'Romain',es:'¡Eso es mucho! ¿Hay piscina aquí?',fr:'C\'est beaucoup ! Il y a une piscine ici ?',side:'right'},
      {s:'Marta',es:'Sí, está en el hotel.',fr:'Oui, elle est à l\'hôtel.',side:'left'},
      {s:'Romain',es:'¡Listo, vamos!',fr:'D\'accord, on y va !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Prévoir la sortie',img:'🌧️',dialogue:[
      {s:'Luis',es:'¿Salimos hoy?',fr:'On sort aujourd\'hui ?',side:'left'},
      {s:'Camille',es:'No sé. ¿Qué tiempo hace?',fr:'Je ne sais pas. Quel temps il fait ?',side:'right'},
      {s:'Luis',es:'Está cayendo un aguacero.',fr:'Il tombe une grosse averse.',side:'left'},
      {s:'Camille',es:'¿Tienes sombrilla?',fr:'Tu as un parapluie ?',side:'right'},
      {s:'Luis',es:'No. ¿Y vos?',fr:'Non. Et toi ?',side:'left'},
      {s:'Camille',es:'Yo sí. ¡Vamos juntos!',fr:'Moi oui. Allons-y ensemble !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Les saisons en Colombie',img:'🌿',dialogue:[
      {s:'Sara',es:'¿Cuál es tu clima favorito?',fr:'Quel est ton climat préféré ?',side:'right'},
      {s:'Théo',es:'Me gusta el clima de Bogotá. Fresco pero soleado.',fr:'J\'aime le climat de Bogotá. Frais mais ensoleillé.',side:'left'},
      {s:'Sara',es:'Yo prefiero el calor de la costa.',fr:'Moi je préfère la chaleur de la côte.',side:'right'},
      {s:'Théo',es:'¿Y llueve mucho en Colombia?',fr:'Et il pleut beaucoup en Colombie ?',side:'left'},
      {s:'Sara',es:'Sí, hay dos temporadas de lluvia al año.',fr:'Oui, il y a deux saisons des pluies par an.',side:'right'},
      {s:'Théo',es:'¡Qué interesante!',fr:'Comme c\'est intéressant !',side:'left'}
    ]}
   ],
   vocab:['¡Qué calor! = Quelle chaleur !','Está húmedo = C\'est humide','El aguacero = L\'averse (Colombie)','El sombrilla / el paraguas = Le parapluie','La temporada de lluvia = La saison des pluies','Fresco = Frais (Colombie : clima templado)','La costa = La côte (Caraïbes ou Pacifique)'],
   quiz:[
    {q:'¿Cómo se dit "Il fait froid" en español?',opts:['Hace calor','Hay sol','Llueve','Hace frío'],ans:3},
    {q:'¿Qué es "El aguacero" en Colombia?',opts:['Un orage électrique','Une forte averse','De la grêle','Du brouillard'],ans:1},
    {q:'¿Cuántas temporadas de lluvia tiene Colombia?',opts:['Une','Deux','Trois','Quatre'],ans:1}
   ]},

  /* 12 ── Buscar apartamento */
  {id:'logement2',level:2,emoji:'🏠',name:'Buscar apartamento',sub:'Chercher un logement / Louer en Colombie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Appeler pour un appartement',img:'📱',dialogue:[
      {s:'Cliente',es:'Hola, llamo por el apartamento en arriendo.',fr:'Bonjour, j\'appelle pour l\'appartement en location.',side:'left'},
      {s:'Propietario',es:'Sí. ¿Para cuántas personas?',fr:'Oui. Pour combien de personnes ?',side:'right'},
      {s:'Cliente',es:'Para una persona. ¿Cuánto es el arriendo?',fr:'Pour une personne. Le loyer c\'est combien ?',side:'left'},
      {s:'Propietario',es:'Ochocientos mil pesos al mes.',fr:'Huit cent mille pesos par mois.',side:'right'},
      {s:'Cliente',es:'¿Los servicios están incluidos?',fr:'Les charges sont incluses ?',side:'left'},
      {s:'Propietario',es:'No, los servicios son aparte.',fr:'Non, les charges sont en plus.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Visiter l\'appartement',img:'🔑',dialogue:[
      {s:'Propietario',es:'La sala es grande y tiene buena ventilación.',fr:'Le salon est grand et bien ventilé.',side:'right'},
      {s:'Cliente',es:'¡Me gusta! ¿Cuántos cuartos tiene?',fr:'J\'aime bien ! Il a combien de chambres ?',side:'left'},
      {s:'Propietario',es:'Dos cuartos y un baño.',fr:'Deux chambres et une salle de bain.',side:'right'},
      {s:'Cliente',es:'¿Tiene parqueadero?',fr:'Il y a un parking ?',side:'left'},
      {s:'Propietario',es:'Sí, uno cubierto.',fr:'Oui, un couvert.',side:'right'},
      {s:'Cliente',es:'¿Puedo pensarlo?',fr:'Je peux réfléchir ?',side:'left'}
    ]},
    {label:'Sit. 3',title:'Un problème dans le logement',img:'🔧',dialogue:[
      {s:'Inquilino',es:'Hola, hay un problema. El agua no sale.',fr:'Bonjour, il y a un problème. L\'eau ne coule pas.',side:'left'},
      {s:'Propietario',es:'¿Desde cuándo?',fr:'Depuis quand ?',side:'right'},
      {s:'Inquilino',es:'Desde esta mañana.',fr:'Depuis ce matin.',side:'left'},
      {s:'Propietario',es:'Voy a llamar al plomero ahorita.',fr:'Je vais appeler le plombier tout de suite.',side:'right'},
      {s:'Inquilino',es:'¿Va a venir hoy?',fr:'Il vient aujourd\'hui ?',side:'left'},
      {s:'Propietario',es:'Sí, creo que sí.',fr:'Oui, je crois que oui.',side:'right'}
    ]}
   ],
   vocab:['El arriendo = Le loyer (Colombie)','Los servicios = Les charges (eau, électricité, gaz — Colombie)','Los cuartos = Les chambres (Colombie)','La sala = Le salon (Colombie)','El plomero = Le plombier (Colombie)','El parqueadero = Le parking (Colombie)','Los servicios son aparte = Les charges sont en plus','Ahorita = Tout de suite (Colombie)'],
   quiz:[
    {q:'¿Cómo se dit "Le loyer" en colombiano?',opts:['El alquiler','El arriendo','El costo','La renta'],ans:1},
    {q:'¿Cómo se dit "Le plombier" en colombiano?',opts:['El electricista','El fontanero','El plomero','El carpintero'],ans:2},
    {q:'¿Qué son "Los servicios" en Colombia (dans un appartement)?',opts:['Les services Internet','Les charges (eau, électricité, gaz)','Les frais d\'agence','La conciergerie'],ans:1}
   ]},

  /* 13 ── Gustos y aficiones */
  {id:'gustos2',level:2,emoji:'❤️',name:'Gustos y aficiones',sub:'Parler de ce qu\'on aime / Les loisirs en Colombie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Parler de musique',img:'🎵',dialogue:[
      {s:'Lucía',es:'¿Te gusta la música?',fr:'Tu aimes la musique ?',side:'right'},
      {s:'Paul',es:'Sí, mucho. Me gusta el rock y el vallenato.',fr:'Oui, beaucoup. J\'aime le rock et le vallenato.',side:'left'},
      {s:'Lucía',es:'¿Y la cumbia?',fr:'Et la cumbia ?',side:'right'},
      {s:'Paul',es:'También, pero no conozco mucho.',fr:'Aussi, mais je ne connais pas beaucoup.',side:'left'},
      {s:'Lucía',es:'¡Hay un concierto esta noche! ¿Vienes?',fr:'Il y a un concert ce soir ! Tu viens ?',side:'right'},
      {s:'Paul',es:'¡Qué bacano! ¿A qué hora empieza?',fr:'Super ! Ça commence à quelle heure ?',side:'left'}
    ]},
    {label:'Sit. 2',title:'Parler de sport',img:'⚽',dialogue:[
      {s:'Diego',es:'¿Practicas algún deporte?',fr:'Tu pratiques un sport ?',side:'left'},
      {s:'Claire',es:'Sí, me gusta mucho el fútbol.',fr:'Oui, j\'aime beaucoup le football.',side:'right'},
      {s:'Diego',es:'¿De verdad? ¡Yo también! ¿Ves el partido esta noche?',fr:'Vraiment ? Moi aussi ! Tu regardes le match ce soir ?',side:'left'},
      {s:'Claire',es:'Sí. ¿Juegas al fútbol también?',fr:'Oui. Tu joues au football aussi ?',side:'right'},
      {s:'Diego',es:'Sí, los fines de semana con los parceros.',fr:'Oui, les week-ends avec les potes.',side:'left'},
      {s:'Claire',es:'¡Qué chévere!',fr:'Super !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Proposer une activité',img:'🎬',dialogue:[
      {s:'Ana',es:'¿Qué hacés esta tarde?',fr:'Tu fais quoi cet après-midi ?',side:'left'},
      {s:'Marc',es:'Nada. ¿Por qué?',fr:'Rien. Pourquoi ?',side:'right'},
      {s:'Ana',es:'¿Quieres ir al cine?',fr:'Tu veux aller au cinéma ?',side:'left'},
      {s:'Marc',es:'¡Listo! ¿Qué están poniendo?',fr:'D\'accord ! Qu\'est-ce qu\'ils passent ?',side:'right'},
      {s:'Ana',es:'Una película francesa. ¿Te gusta el cine?',fr:'Un film français. Tu aimes le cinéma ?',side:'left'},
      {s:'Marc',es:'¡Me encanta! ¿A qué hora quedamos?',fr:'J\'adore ! On se retrouve à quelle heure ?',side:'right'}
    ]}
   ],
   vocab:['Me gusta = J\'aime','No me gusta = Je n\'aime pas','Me encanta = J\'adore','¿Qué están poniendo? = Qu\'est-ce qu\'ils passent ? (cinéma)','El partido = Le match','El vallenato = Musique traditionnelle colombienne','¡Qué bacano! = Super ! (Colombie)','Los parceros = Les potes (Colombie)'],
   quiz:[
    {q:'¿Cómo se dice "J\'adore" en español?',opts:['Me gusta','No me gusta','Me encanta','Odio'],ans:2},
    {q:'¿Qué es "El vallenato" en Colombia?',opts:['Un sport','La musique traditionnelle (accordéon)','Un plat','Une fête'],ans:1},
    {q:'¿Qué significa "¡Qué bacano!" en Colombia?',opts:['Comme c\'est bizarre !','Super ! / Génial !','C\'est dommage !','Comme c\'est ennuyeux !'],ans:1}
   ]},

  /* 14 ── Salir de noche */
  {id:'fiesta2',level:2,emoji:'🎉',name:'Salir de noche',sub:'Sortir le soir / Vie sociale en Colombie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Organiser une sortie',img:'🎊',dialogue:[
      {s:'Pablo',es:'¡Ey! ¿Salimos esta noche?',fr:'Hé ! On sort ce soir ?',side:'left'},
      {s:'Lea',es:'¡Listo! ¿Adónde vamos?',fr:'D\'accord ! On va où ?',side:'right'},
      {s:'Pablo',es:'Hay un bar muy bacano en la Zona Rosa.',fr:'Il y a un bar très sympa dans la Zona Rosa.',side:'left'},
      {s:'Lea',es:'¡Qué chévere! ¿A qué hora?',fr:'Super ! À quelle heure ?',side:'right'},
      {s:'Pablo',es:'A las nueve. Aquí se sale tarde.',fr:'À neuf heures. Ici on sort tard.',side:'left'},
      {s:'Lea',es:'¡Bueno! ¡Nos vemos!',fr:'D\'accord ! À tout à l\'heure !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Au bar / à la rumba',img:'🍺',dialogue:[
      {s:'Marc',es:'¡Esta música está muy buena! ¿Bailamos?',fr:'Cette musique est super ! On danse ?',side:'left'},
      {s:'Inés',es:'¡Sí! Me encanta bailar.',fr:'Oui ! J\'adore danser.',side:'right'},
      {s:'Marc',es:'¿Quieres algo de tomar?',fr:'Tu veux quelque chose à boire ?',side:'left'},
      {s:'Inés',es:'Sí, un agua, por favor. Tengo calor.',fr:'Oui, une eau, s\'il te plaît. J\'ai chaud.',side:'right'},
      {s:'Marc',es:'¡Ya vengo!',fr:'J\'arrive !',side:'left'},
      {s:'Inés',es:'¡Listo!',fr:'D\'accord !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Le lendemain',img:'😴',dialogue:[
      {s:'Carla',es:'¡Hola! ¿Cómo amaneció? ¡Llegué tardísimo!',fr:'Salut ! Ça va ? Je suis rentré(e) très tard !',side:'left'},
      {s:'Tom',es:'¡Yo también! Pero estuvo muy bacano.',fr:'Moi aussi ! Mais c\'était vraiment super.',side:'right'},
      {s:'Carla',es:'Sí, la gente era muy buena gente.',fr:'Oui, les gens étaient vraiment sympas.',side:'left'},
      {s:'Tom',es:'¿Comemos juntos hoy?',fr:'On mange ensemble aujourd\'hui ?',side:'right'},
      {s:'Carla',es:'¡Listo! Necesito comer. Tengo un hambre...',fr:'D\'accord ! J\'ai besoin de manger. J\'ai tellement faim...',side:'left'},
      {s:'Tom',es:'¡Yo también! ¡Vamos a buscar una arepa!',fr:'Moi aussi ! Allons chercher une arepa !',side:'right'}
    ]}
   ],
   vocab:['¡Listo! = D\'accord ! (Colombie)','Bacano = Sympa / Super (Colombie)','¡Qué chévere! = Génial !','Algo de tomar = Quelque chose à boire','Tengo calor = J\'ai chaud','Ya vengo = J\'arrive / je reviens','Buena gente = Sympa / de bonnes personnes','La rumba = La fête / sortie (Colombie)'],
   quiz:[
    {q:'¿Qué significa "¡Listo!" en Colombia?',opts:['Au revoir !','Allons-y !','D\'accord !','C\'est nul !'],ans:2},
    {q:'¿Qué significa "Bacano" en Colombia?',opts:['Triste','Ennuyeux','Sympa / Super','Dangereux'],ans:2},
    {q:'¿Qué es "La rumba" en Colombia?',opts:['Un rythme de musique','La fête / sortir faire la fête','Un jeu de cartes','Un plat typique'],ans:1}
   ]}

];

var ALL_THEMES=LEVEL1_THEMES.concat(LEVEL2_THEMES);