/* ========================================
   Français pour Argentins 🇦🇷 → 🇫🇷 – Données
   Vocabulaire, quiz et dialogues
   Variante Argentine — voseo, lunfardo, lexique local
   © Juin 2026 Sébastien Godet
======================================== */

var LEVEL1_THEMES=[
  {id:'alpha',level:1,emoji:'🔤',name:'El Alfabeto Francés',sub:'A, B, C… Z / L\'alphabet',type:'alpha',
   words:[
    {es:'A',fr:'a',em:'✈️'},{es:'B',fr:'bé',em:'🎈'},
    {es:'C',fr:'cé (se pronuncia s)',em:'☕'},{es:'D',fr:'dé',em:'💃'},
    {es:'E',fr:'e',em:'🏫'},{es:'F',fr:'efe',em:'🌸'},
    {es:'G',fr:'jé (delante de e/i)',em:'🚉'},{es:'H',fr:'hache (muda)',em:'🏨'},
    {es:'I',fr:'i',em:'🏝️'},{es:'J',fr:'jota',em:'🌿'},
    {es:'K',fr:'ka',em:'⚖️'},{es:'L',fr:'ele',em:'🦁'},
    {es:'M',fr:'eme',em:'🏠'},{es:'N',fr:'ene',em:'🌙'},
    {es:'Ñ',fr:'eñe (sonido gn)',em:'🎵'},{es:'O',fr:'o',em:'🐦'},
    {es:'P',fr:'pé',em:'🍞'},{es:'Q',fr:'cu',em:'🏘️'},
    {es:'R',fr:'erre',em:'🌹'},{es:'S',fr:'ese',em:'☀️'},
    {es:'T',fr:'té',em:'🚂'},{es:'U',fr:'u',em:'1️⃣'},
    {es:'V',fr:'uve (= B en Argentina)',em:'🌆'},{es:'W',fr:'doble uve',em:'🚃'},
    {es:'X',fr:'equis',em:'🎵'},{es:'Y',fr:'ye / i griega (sonido dj en Argentina)',em:'🥛'},
    {es:'Z',fr:'ceta (se pronuncia s en Argentina)',em:'0️⃣'}
   ],
   quiz10:[
    {q:'¿Qué letra escuchás en francés?',audio:'bé',opts:['A','B','C','D'],ans:1},
    {q:'¿Qué letra escuchás en francés?',audio:'jé',opts:['J','K','G','H'],ans:2},
    {q:'¿Qué letra escuchás en francés?',audio:'eñe',opts:['N','Ñ','M','L'],ans:1},
    {q:'¿Qué letra escuchás en francés?',audio:'erre',opts:['A','R','L','N'],ans:1},
    {q:'¿Qué letra escuchás en francés?',audio:'ceta',opts:['S','X','Z','C'],ans:2},
    {q:'¿Qué letra escuchás en francés?',audio:'hache',opts:['H','F','M','N'],ans:0},
    {q:'¿Qué letra escuchás en francés?',audio:'ka',opts:['C','G','K','Q'],ans:2},
    {q:'¿Qué letra escuchás en francés?',audio:'ye',opts:['I','U','Y','E'],ans:2},
    {q:'¿Qué letra escuchás en francés?',audio:'doble uve',opts:['V','W','X','Y'],ans:1},
    {q:'¿Qué letra escuchás en francés?',audio:'pé',opts:['B','D','P','T'],ans:2}
   ]},
  {id:'salut',level:1,emoji:'👋',name:'Los Saludos',sub:'Bonjour, merci… / Les salutations',
   words:[
    {fr:'Bonjour (por la mañana)',es:'Buenos días / Buen día',em:'🌅'},{fr:'Bon après-midi',es:'Buenas tardes',em:'🌆'},
    {fr:'Bonsoir / Bonne nuit',es:'Buenas noches',em:'🌙'},{fr:'Salut !',es:'¡Hola!',em:'👋'},
    {fr:'Salut / Au revoir',es:'Chau / Adiós (chau se usa muchísimo en Argentina)',em:'👋'},{fr:'À bientôt',es:'Hasta pronto',em:'⏱️'},
    {fr:'Merci / Merci beaucoup',es:'Gracias / Muchas gracias',em:'🙏'},
    {fr:'S\'il vous plaît / De rien',es:'Por favor / De nada',em:'🤝'},
    {fr:'Pardon / Excuse-moi',es:'Perdón / Disculpá (forma de voseo)',em:'🙇'},
    {fr:'Allez ! / D\'accord !',es:'¡Dale! / ¡Listo! (expresiones bien argentinas)',em:'👍'},
    {fr:'Oui',es:'Sí',em:'✅'},
    {fr:'Non',es:'No',em:'❌'},
    {fr:'Comment ça va ?',es:'¿Cómo estás? o ¿Cómo andás? (andás = voseo argentino)',em:'🤗'},
    {fr:'Je vais bien, merci',es:'Estoy bien, gracias',em:'😊'},
    {fr:'Comme ci comme ça',es:'Más o menos / Así así',em:'😐'},
    {fr:'Je ne vais pas bien / Je n\'ai pas la forme',es:'No estoy bien / No me encuentro bien',em:'😔'},
    {fr:'C\'est cool ! / Super !',es:'¡Qué bueno! / ¡Piola! (expresiones argentinas)',em:'🌟'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Buenos días" en francés?',opts:['Bonsoir','Bon après-midi','Bonjour','Bonne nuit'],ans:2},
    {q:'¿Cómo se dice "Chau" en francés?',opts:['À tout à l\'heure','Au revoir / Salut','Bonjour','Bonne nuit'],ans:1},
    {q:'¿Cómo se dice "Gracias" en francés?',opts:['S\'il vous plaît','Pardon','Merci','Oui'],ans:2},
    {q:'¿Cómo se dice "¡Listo!" (en el sentido de "¡dale!") en francés?',opts:['Adieu','Allons-y !','D\'accord !','Bonne nuit'],ans:2},
    {q:'¿Cómo se dice "Por favor" en francés?',opts:['Merci','Pardon','S\'il vous plaît','Oui'],ans:2},
    {q:'¿Cómo se dice "¡Dale!" en francés?',opts:['Viens !','Allez ! / D\'accord !','Non !','Peut-être !'],ans:1},
    {q:'¿Cómo se dice "¿Cómo andás?" en francés?',opts:['Où es-tu ?','Comment tu t\'appelles ?','Comment vas-tu ?','Quel âge as-tu ?'],ans:2},
    {q:'¿Cómo se dice "¡Piola!" (algo genial) en francés?',opts:['Comme c\'est bizarre !','Comme c\'est cool !','Comme c\'est triste !','Comme c\'est grand !'],ans:1}
   ]},
  {id:'pres',level:1,emoji:'🙋',name:'Presentarse',sub:'Nom, âge, ville… / Presentarse en francés',
   words:[
    {fr:'Le nom de famille',es:'El apellido',em:'👨‍👩‍👧'},{fr:'Le prénom',es:'El nombre',em:'🏷️'},
    {fr:'La nationalité',es:'La nacionalidad',em:'🌍'},{fr:'L\'âge',es:'La edad',em:'🎂'},
    {fr:'La profession',es:'La profesión o el trabajo',em:'💼'},{fr:'Le pays',es:'El país',em:'🗺️'},
    {fr:'Français(e)',es:'Francés / francesa',em:'🇫🇷'},{fr:'Argentin(e)',es:'Argentino / argentina',em:'🇦🇷'},
    {fr:'J\'habite à',es:'Vivo en',em:'🏠'},{fr:'Je suis',es:'Soy o Estoy',em:'🧑'},
    {fr:'J\'ai ... ans',es:'Tengo ... años',em:'🎈'},{fr:'Je m\'appelle',es:'Me llamo',em:'👋'},
    {fr:'Tu es d\'où ?',es:'¿De dónde sos? (voseo argentino)',em:'🌍'},{fr:'Je suis de Buenos Aires',es:'Soy de Buenos Aires',em:'🏙️'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Me llamo" en francés?',opts:['Je suis','Je m\'appelle','J\'habite','J\'ai'],ans:1},
    {q:'¿Cómo se dice "El apellido" en francés?',opts:['Le prénom','L\'âge','Le nom de famille','La profession'],ans:2},
    {q:'¿Cómo se dice "Tengo 25 años" en francés?',opts:['Je suis 25 ans','J\'habite 25 ans','J\'ai 25 ans','Je parle 25 ans'],ans:2},
    {q:'¿Cómo se dice "La nacionalidad" en francés?',opts:['Le pays','La ville','La profession','La nationalité'],ans:3},
    {q:'¿Cómo se dice "Vivo en Buenos Aires" en francés?',opts:['Je suis à Buenos Aires','J\'habite à Buenos Aires','Je vais à Buenos Aires','J\'ai Buenos Aires'],ans:1},
    {q:'¿Cómo se dice "El nombre" (de pila) en francés?',opts:['Le nom de famille','Le prénom','L\'âge','La profession'],ans:1},
    {q:'¿Cómo se dice "Soy argentina" en francés?',opts:['Je suis française','Je suis argentine','J\'habite Argentine','Je parle argentine'],ans:1},
    {q:'¿Cómo se dice "¿De dónde sos?" en francés?',opts:['Quel âge as-tu ?','Comment t\'appelles-tu ?','D\'où es-tu ?','Où habites-tu ?'],ans:2}
   ]},
  {id:'orient',level:1,emoji:'🧭',name:'Orientarse',sub:'Tout droit, à gauche… / S\'orienter en français',
   words:[
    {fr:'Tout droit',es:'Todo recto / Derecho',em:'⬆️'},
    {fr:'À gauche',es:'A la izquierda',em:'⬅️'},
    {fr:'À droite',es:'A la derecha',em:'➡️'},
    {fr:'Devant',es:'Delante',em:'🔜'},
    {fr:'Derrière',es:'Detrás',em:'🔙'},
    {fr:'À côté',es:'Al lado',em:'↔️'},
    {fr:'En face',es:'Frente a / Enfrente',em:'🔄'},
    {fr:'Près',es:'Cerca',em:'📍'},
    {fr:'Loin',es:'Lejos',em:'🌅'},
    {fr:'Le pâté de maisons / Le bloc',es:'La cuadra (= el bloque de casas en Argentina)',em:'🗺️'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "A la izquierda" en francés?',opts:['À droite','Tout droit','À gauche','En face'],ans:2},
    {q:'¿Cómo se dice "A la derecha" en francés?',opts:['À gauche','Tout droit','À côté','À droite'],ans:3},
    {q:'¿Cómo se dice "Todo recto" en francés?',opts:['À gauche','Tout droit','En face','À côté'],ans:1},
    {q:'¿Cómo se dice "Frente a / Enfrente" en francés?',opts:['À côté','Derrière','En face','Près'],ans:2},
    {q:'¿Cómo se dice "Cerca" en francés?',opts:['Loin','À côté','Près','En face'],ans:2}
   ]},
  {id:'lieux',level:1,emoji:'🏙️',name:'Los Lugares',sub:'Marché, place, kiosque… / Los lugares importantes',
   words:[
    {fr:'La ville',es:'La ciudad',em:'🏙️'},
    {fr:'Le quartier',es:'El barrio (muy importante en Argentina)',em:'🏡'},
    {fr:'La campagne / La pampa',es:'El campo',em:'🌾'},
    {fr:'La montagne / La cordillère',es:'La montaña / La sierra',em:'⛰️'},
    {fr:'La mer / Le fleuve',es:'El mar / El río (el Río de la Plata)',em:'🌊'},
    {fr:'La plage',es:'La playa',em:'🏖️'},
    {fr:'Le parc',es:'El parque',em:'🌳'},
    {fr:'La place',es:'La plaza (centro de la vida del barrio)',em:'⛲'},
    {fr:'La rue / L\'avenue',es:'La calle / La avenida',em:'🛣️'},
    {fr:'Le pâté de maisons',es:'La cuadra (unidad de distancia en Argentina)',em:'🏘️'},
    {fr:'La mairie',es:'El municipio',em:'🏛️'},
    {fr:'L\'hôpital',es:'El hospital',em:'🏥'},
    {fr:'La pharmacie',es:'La farmacia',em:'💊'},
    {fr:'La banque',es:'El banco',em:'🏦'},
    {fr:'L\'église',es:'La iglesia',em:'⛪'},
    {fr:'Le supermarché',es:'El supermercado',em:'🛒'},
    {fr:'Le kiosque',es:'El kiosco (algo fundamental en Argentina)',em:'🏪'},
    {fr:'L\'épicerie-primeur',es:'La verdulería (negocio de frutas y verduras)',em:'🥦'},
    {fr:'La boucherie',es:'La carnicería',em:'🥩'},
    {fr:'L\'université',es:'La universidad',em:'🏛️'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "La farmacia" en francés?',opts:['La banque','L\'hôpital','La pharmacie','Le supermarché'],ans:2},
    {q:'¿Cómo se dice "El municipio" en francés?',opts:['L\'église','Le tribunal','La mairie','Le marché'],ans:2},
    {q:'¿Cómo se dice "El hospital" en francés?',opts:['La pharmacie','La mairie','L\'hôpital','La banque'],ans:2},
    {q:'¿Qué es un "kiosco" en Argentina?',opts:['Un supermarché','Un kiosque qui vend journaux, bonbons, recharges...','Une pharmacie','Une école'],ans:1},
    {q:'¿Cómo se dice "El río" en francés?',opts:['La mer','La montagne','Le fleuve','Le lac'],ans:2},
    {q:'¿Cómo se dice "El municipio" en francés?',opts:['Le tribunal','La mairie','Le parlement','L\'université'],ans:1},
    {q:'¿Cómo se dice "La ciudad" en francés?',opts:['La rue','Le quartier','La ville','La montagne'],ans:2},
    {q:'¿Cómo se dice "La verdulería" en francés?',opts:['La pharmacie','La banque','L\'épicerie-primeur','Le bureau'],ans:2}
   ]},
  {id:'nour',level:1,emoji:'🍽️',name:'La Comida',sub:'Les fruits, le pain, la viande… / Vocabulario de la comida',
   words:[
    {fr:'Les fruits',es:'Las frutas',em:'🍉'},
    {fr:'Les légumes',es:'Las verduras',em:'🥦'},
    {fr:'Le pain',es:'El pan',em:'🍞'},
    {fr:'Le riz',es:'El arroz',em:'🍚'},
    {fr:'Les pâtes',es:'Los fideos / La pasta (fideos = término argentino habitual)',em:'🍝'},
    {fr:'La pomme de terre / Les frites',es:'La papa / Las papas fritas (papa en Argentina, patata en España)',em:'🥔'},
    {fr:'La viande',es:'La carne',em:'🥩'},
    {fr:'Le barbecue argentin',es:'El asado (¡el plato nacional!)',em:'🔥'},
    {fr:'Le poulet',es:'El pollo',em:'🍗'},
    {fr:'Le poisson',es:'El pescado',em:'🐟'},
    {fr:'Le jambon',es:'El jamón',em:'🥩'},
    {fr:'Le chorizo',es:'El chorizo (distinto del chorizo español)',em:''},
    {fr:'L\'œuf',es:'El huevo',em:'🥚'},
    {fr:'Le fromage',es:'El queso',em:'🧀'},
    {fr:'Le beurre',es:'La manteca (manteca en Argentina, mantequilla en España)',em:'🧈'},
    {fr:'La pomme',es:'La manzana',em:'🍎'},
    {fr:'La banane',es:'La banana (banana en Argentina, plátano en España)',em:'🍌'},
    {fr:'L\'orange',es:'La naranja',em:'🍊'},
    {fr:'Le citron',es:'El limón',em:'🍋'},
    {fr:'La fraise',es:'La frutilla (frutilla en Argentina, fresa en España)',em:'🍓'},
    {fr:'La pastèque',es:'La sandía',em:'🍉'},
    {fr:'La tomate',es:'El tomate',em:'🍅'},
    {fr:'La carotte',es:'La zanahoria',em:'🥕'},
    {fr:'L\'oignon',es:'La cebolla',em:'🧅'},
    {fr:'L\'ail',es:'El ajo',em:'🧄'},
    {fr:'Le concombre',es:'El pepino',em:'🥒'},
    {fr:'La salade',es:'La ensalada',em:'🥗'},
    {fr:'L\'huile',es:'El aceite',em:'🫒'},
    {fr:'Le sel',es:'La sal',em:'🧂'},
    {fr:'Le poivre',es:'La pimienta',em:'🌶️'},
    {fr:'Le miel',es:'La miel',em:'🍯'},
    {fr:'Le chocolat',es:'El chocolate',em:'🍫'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "El pan" en francés?',opts:['Le riz','Le pain','Le fromage','Le beurre'],ans:1},
    {q:'¿Cómo se dice "El asado" en francés?',opts:['Le rôti au four','Le barbecue argentin','La soupe','Le sandwich'],ans:1},
    {q:'¿Cómo se dice "El huevo" en francés?',opts:['Le beurre','Le fromage','La carotte','L\'œuf'],ans:3},
    {q:'¿Cómo se dice "La manzana" en francés?',opts:['La banane','La fraise','La pomme','L\'orange'],ans:2},
    {q:'¿Cómo se dice "Las papas fritas" en francés?',opts:['Les frites','Les pâtes','Les sandwichs','Le barbecue'],ans:0},
    {q:'¿Cómo se dice "La sandía" en francés?',opts:['La fraise','La pastèque','Le raisin','L\'orange'],ans:1},
    {q:'¿Cómo se dice "La manteca" en francés?',opts:['L\'huile','Le beurre','La margarine','La crème'],ans:1},
    {q:'¿Cómo se dice "La frutilla" en francés?',opts:['La banane','La pastèque','La fraise','Le raisin'],ans:2}
   ]},
  {id:'bois',level:1,emoji:'🥤',name:'Las Bebidas',sub:'L\'eau, le café, le maté… / Vocabulario de las bebidas',
   words:[
    {fr:'L\'eau',es:'El agua',em:'💧'},
    {fr:'L\'eau gazeuse',es:'El agua con gas',em:'🫧'},
    {fr:'Le lait',es:'La leche',em:'🥛'},
    {fr:'Le jus (d\'orange)',es:'El jugo (de naranja) (jugo en Argentina, zumo en España)',em:'🍊'},
    {fr:'Le soda',es:'El refresco / La gaseosa (gaseosa = término argentino habitual)',em:'🥤'},
    {fr:'Le café noir',es:'El café (solo)',em:'☕'},
    {fr:'Le café au lait',es:'El café con leche',em:'☕'},
    {fr:'Le café avec un nuage de lait',es:'El cortado',em:'☕'},
    {fr:'Le thé',es:'El té',em:'🍵'},
    {fr:'Le maté',es:'El mate (¡la bebida nacional argentina!)',em:'🧉'},
    {fr:'Le vin (rouge / blanc)',es:'El vino (tinto / blanco) — Argentina = gran país vitivinícola',em:'🍷'},
    {fr:'La bière',es:'La cerveza',em:'🍺'},
    {fr:'Le fernet-Coca',es:'El fernet con Coca (cóctel popular argentino)',em:'🥃'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "El agua" en francés?',opts:['Le lait','Le jus','L\'eau','Le thé'],ans:2},
    {q:'¿Cómo se dice "El mate" en francés?',opts:['Un café','Le maté, la boisson nationale argentine','Un cocktail','Un jus de fruit'],ans:1},
    {q:'¿Cómo se dice "La leche" en francés?',opts:['Le lait','L\'eau','Le thé','Le jus'],ans:0},
    {q:'¿Cómo se dice "El jugo" en francés?',opts:['Le vin','La bière','La limonade','Le jus'],ans:3},
    {q:'¿Cómo se dice el cóctel más popular de Argentina en francés?',opts:['La bière','La sangria','Le fernet-Coca','Le café'],ans:2},
    {q:'¿Cómo se dice "El cortado" en francés?',opts:['Un café noir','Une bière','Le café avec un nuage de lait','Un jus d\'orange'],ans:2},
    {q:'¿Cómo se dice "El té" en francés?',opts:['Le café','Le thé','Le lait','L\'eau'],ans:1},
    {q:'¿Cómo se dice "El jugo" en francés?',opts:['Le soda','Le jus','L\'eau','La gaseosa'],ans:1}
   ]},
{id:'num',level:1,emoji:'🔢',name:'Los Números',sub:'De zéro à deux mille / Del cero al dos mil',
 words:[
  {fr:'Zéro',es:'Cero',em:'0️⃣'},{fr:'Un',es:'Uno',em:'1️⃣'},{fr:'Deux',es:'Dos',em:'2️⃣'},
  {fr:'Trois',es:'Tres',em:'3️⃣'},{fr:'Quatre',es:'Cuatro',em:'4️⃣'},{fr:'Cinq',es:'Cinco',em:'5️⃣'},
  {fr:'Six',es:'Seis',em:'6️⃣'},{fr:'Sept',es:'Siete',em:'7️⃣'},{fr:'Huit',es:'Ocho',em:'8️⃣'},
  {fr:'Neuf',es:'Nueve',em:'9️⃣'},{fr:'Dix',es:'Diez',em:'🔟'},
  {fr:'Onze',es:'Once',em:'1️⃣1️⃣'},{fr:'Douze',es:'Doce',em:'1️⃣2️⃣'},
  {fr:'Treize',es:'Trece',em:'1️⃣3️⃣'},{fr:'Quatorze',es:'Catorce',em:'1️⃣4️⃣'},
  {fr:'Quinze',es:'Quince',em:'1️⃣5️⃣'},{fr:'Seize',es:'Dieciséis',em:'1️⃣6️⃣'},
  {fr:'Dix-sept',es:'Diecisiete',em:'1️⃣7️⃣'},{fr:'Dix-huit',es:'Dieciocho',em:'1️⃣8️⃣'},
  {fr:'Dix-neuf',es:'Diecinueve',em:'1️⃣9️⃣'},{fr:'Vingt',es:'Veinte',em:'2️⃣0️⃣'},
  {fr:'Trente',es:'Treinta',em:'3️⃣0️⃣'},
  {fr:'Quarante',es:'Cuarenta',em:'4️⃣0️⃣'},
  {fr:'Cinquante',es:'Cincuenta',em:'5️⃣0️⃣'},
  {fr:'Soixante',es:'Sesenta',em:'6️⃣0️⃣'},
  {fr:'Soixante-dix',es:'Setenta (literalmente "sesenta-diez", típico del francés)',em:'7️⃣0️⃣'},
  {fr:'Quatre-vingts',es:'Ochenta (literalmente "cuatro-veintes")',em:'8️⃣0️⃣'},
  {fr:'Quatre-vingt-dix',es:'Noventa (literalmente "cuatro-veinte-diez")',em:'9️⃣0️⃣'},
  {fr:'Cent',es:'Cien / ciento (cent vingt = ciento veinte)',em:'1️⃣0️⃣0️⃣'},
  {fr:'Deux cents',es:'Doscientos / Doscientas',em:'2️⃣0️⃣0️⃣'},
  {fr:'Cinq cents',es:'Quinientos / Quinientas',em:'5️⃣0️⃣0️⃣'},
  {fr:'Mille',es:'Mil',em:'1️⃣0️⃣0️⃣0️⃣'},
  {fr:'Deux mille',es:'Dos mil',em:'2️⃣0️⃣0️⃣0️⃣'}
 ],
   quiz10:[
    {q:'¿Cómo se dice "Cinco" en francés?',opts:['Quatre','Six','Cinq','Sept'],ans:2},
    {q:'¿Cómo se dice "Doce" en francés?',opts:['Onze','Douze','Treize','Dix'],ans:1},
    {q:'¿Cómo se dice "Dieciséis" en francés?',opts:['Quinze','Dix-sept','Seize','Treize'],ans:2},
    {q:'¿Cómo se dice "Nueve" en francés?',opts:['Sept','Huit','Dix','Neuf'],ans:3},
    {q:'¿Cómo se dice "Veinte" en francés?',opts:['Dix-neuf','Vingt','Quinze','Dix-huit'],ans:1},
    {q:'¿Cómo se dice "Trece" en francés?',opts:['Douze','Onze','Quatorze','Treize'],ans:3},
    {q:'¿Cómo se dice "Ocho" en francés?',opts:['Sept','Neuf','Huit','Six'],ans:2},
    {q:'¿Cómo se dice "Catorce" en francés?',opts:['Quinze','Treize','Quatorze','Douze'],ans:2},
    {q:'¿Cómo se dice "Treinta" en francés?',opts:['Vingt','Quarante','Trente','Cinquante'],ans:2},
    {q:'¿Cómo se dice "Setenta" en francés? (¡atención, es especial!)',opts:['Soixante','Quatre-vingts','Quatre-vingt-dix','Soixante-dix'],ans:3},
    {q:'¿Cómo se dice "Cincuenta" en francés?',opts:['Soixante','Cinquante','Quarante','Soixante-dix'],ans:1},
    {q:'¿Cómo se dice "Cien" en francés?',opts:['Mille','Cent vingt','Cent','Quatre-vingt-dix'],ans:2},
    {q:'¿Cómo se dice "Mil" en francés?',opts:['Cent','Deux cents','Mille','Neuf cents'],ans:2},
    {q:'¿Cómo se dice "Dos mil" en francés?',opts:['Deux mille','Mille','Deux cents','Vingt mille'],ans:0}
   ]},
  {id:'col',level:1,emoji:'🎨',name:'Los Colores',sub:'Rouge, bleu, vert… / Los colores en francés',
   words:[
    {fr:'Rouge',es:'Rojo',em:'❤️'},{fr:'Bleu',es:'Azul',em:'💙'},{fr:'Vert',es:'Verde',em:'💚'},
    {fr:'Jaune',es:'Amarillo',em:'💛'},{fr:'Orange',es:'Naranja',em:'🧡'},{fr:'Blanc',es:'Blanco',em:'🤍'},
    {fr:'Noir',es:'Negro',em:'🖤'},{fr:'Rose',es:'Rosa',em:'🩷'},
    {fr:'Violet',es:'Morado / Violeta',em:'💜'},{fr:'Marron',es:'Marrón / Marrón oscuro',em:'🤎'},
    {fr:'Gris',es:'Gris',em:'🩶'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Rojo" en francés?',opts:['Bleu','Rouge','Vert','Jaune'],ans:1},
    {q:'¿Cómo se dice "Azul" en francés?',opts:['Vert','Jaune','Bleu','Violet'],ans:2},
    {q:'¿Cómo se dice "Verde" en francés?',opts:['Jaune','Gris','Vert','Blanc'],ans:2},
    {q:'¿Cómo se dice "Negro" en francés?',opts:['Blanc','Gris','Marron','Noir'],ans:3},
    {q:'¿Cómo se dice "Amarillo" en francés?',opts:['Orange','Jaune','Rose','Violet'],ans:1},
    {q:'¿Cómo se dice "Rosa" en francés?',opts:['Rouge','Orange','Rose','Violet'],ans:2},
    {q:'¿Cómo se dice "Blanco" en francés?',opts:['Blanc','Noir','Gris','Marron'],ans:0}
   ]},
  {id:'viaje',level:1,emoji:'🧳',name:'El Viaje',sub:'Le passeport, l\'hôtel… / Vocabulario del viaje',
   words:[
    {fr:'Le passeport',es:'El pasaporte',em:'🛂'},
    {fr:'La valise',es:'La valija (valija en Argentina, maleta en España)',em:'🧳'},
    {fr:'Les bagages',es:'El equipaje',em:'🎒'},
    {fr:'Le billet',es:'El pasaje / El boleto (pasaje = avión/ómnibus en Argentina)',em:'🎫'},
    {fr:'La réservation',es:'La reserva',em:'📋'},
    {fr:'L\'agence de voyages',es:'La agencia de viajes',em:'🗺️'},
    {fr:'L\'assurance voyage',es:'El seguro de viaje',em:'📄'},
    {fr:'L\'avion',es:'El avión',em:'✈️'},
    {fr:'L\'aéroport',es:'El aeropuerto',em:'🛫'},
    {fr:'Le départ',es:'La salida',em:'🚪'},
    {fr:'L\'arrivée',es:'La llegada',em:'🛬'},
    {fr:'La douane',es:'La aduana',em:'🛃'},
    {fr:'La croisière',es:'El crucero',em:'🚢'},
    {fr:'L\'hôtel',es:'El hotel',em:'🏨'},
    {fr:'La chambre double ou simple',es:'La habitación doble o individual',em:'🛏️'},
    {fr:'La plage',es:'La playa',em:'🏖️'},
    {fr:'La montagne',es:'La montaña',em:'⛰️'},
    {fr:'Le touriste',es:'El turista',em:'📸'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "El pasaporte" en francés?',opts:['La valise','Le billet','Le passeport','Les bagages'],ans:2},
    {q:'¿Cómo se dice "La valija" en francés?',opts:['La mallette','La valise','Les bagages','Le billet'],ans:1},
    {q:'¿Cómo se dice "El aeropuerto" en francés?',opts:['La gare','Le port','L\'aéroport','La douane'],ans:2},
    {q:'¿Cómo se dice "La reserva" en francés?',opts:['La réduction','La réservation','L\'assurance','Le remboursement'],ans:1},
    {q:'¿Cómo se dice "El equipaje" en francés?',opts:['La valise','Le billet','Les bagages','Le sac à dos'],ans:2},
    {q:'¿Cómo se dice "El pasaje / boleto" en francés?',opts:['Le billet','Le ticket','Le pasaje','La carte'],ans:0},
    {q:'¿Cómo se dice "El crucero" en francés?',opts:['Le ferry','La croisière','Le bateau','Le voyage'],ans:1},
    {q:'¿Cómo se dice "La llegada" en francés?',opts:['Le départ','La correspondance','L\'escale','L\'arrivée'],ans:3}
   ]},
  {id:'rest',level:1,emoji:'🍽️',name:'El Restaurante',sub:'La carte, l\'addition… / Vocabulario del restaurante',
   words:[
    {fr:'La terrasse',es:'La terraza / La vereda (vereda = terraza/vereda en Argentina)',em:'☀️'},
    {fr:'La table',es:'La mesa',em:'🪑'},
    {fr:'Cette table est libre ?',es:'¿Está libre esta mesa?',em:'🪑'},
    {fr:'Le serveur / La serveuse',es:'El mozo / La moza (mozo = término argentino)',em:'🧑‍🍳'},
    {fr:'La carte',es:'La carta',em:'📋'},
    {fr:'Le menu du jour',es:'El menú del día',em:'🍱'},
    {fr:'Commander',es:'Pedir',em:'🙋'},
    {fr:'Que me recommandes-tu ?',es:'¿Qué me recomendás? (voseo argentino)',em:'👨‍🍳'},
    {fr:'Sans gluten',es:'Sin gluten',em:'🌾'},
    {fr:'Végétarien / Végétarienne',es:'Vegetariano / Vegetariana',em:'🥦'},
    {fr:'L\'entrée',es:'La entrada',em:'🥗'},
    {fr:'Le plat principal',es:'El plato principal',em:'🍖'},
    {fr:'Le dessert',es:'El postre',em:'🍮'},
    {fr:'Le sandwich',es:'El sándwich / El sanguchito (sanguchito = forma afectuosa argentina)',em:'🥖'},
    {fr:'À emporter',es:'Para llevar',em:'🥡'},
    {fr:'L\'addition',es:'La cuenta',em:'💶'},
    {fr:'Le pourboire',es:'La propina',em:'💰'},
    {fr:'Le pourboire est inclus',es:'La propina está incluida',em:'✅'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "La cuenta" en francés?',opts:['La propina','L\'addition','Le menu','La réservation'],ans:1},
    {q:'¿Cómo se dice "El mozo" en francés?',opts:['Le client','Le serveur','Le patron','Le cuisinier'],ans:1},
    {q:'¿Cómo se dice "El postre" en francés?',opts:['L\'entrée','Le plat principal','Le dessert','La salade'],ans:2},
    {q:'¿Cómo se dice "Para llevar" en francés?',opts:['Sur place','À emporter','À partager','Pour deux personnes'],ans:1},
    {q:'¿Cómo se dice "La terraza / vereda" en francés?',opts:['Le jardin','La place','La terrasse','Le trottoir'],ans:2},
    {q:'¿Cómo se dice "Pedir" (en un restaurante) en francés?',opts:['Payer','Réserver','Commander','Choisir'],ans:2},
    {q:'¿Cómo se dice "La propina" en francés?',opts:['L\'addition','Le pourboire','La réduction','Le prix'],ans:1},
    {q:'¿Cómo se dice "¿Qué me recomendás?" en francés?',opts:['Qu\'est-ce que vous avez ?','Que me recommandes-tu ?','Vous me recommandez ?','Qu\'y a-t-il ?'],ans:1}
   ]},
  {id:'trans',level:1,emoji:'🚌',name:'Los Transportes',sub:'Le bus, le métro, la voiture… / Vocabulario del transporte',
   words:[
    {fr:'Le bus',es:'El colectivo / El bondi (colectivo = término oficial, bondi = lunfardo)',em:'🚌'},
    {fr:'Le métro',es:'El subte (subte = término argentino, de "subterráneo")',em:'🚇'},
    {fr:'Le tramway',es:'El tranvía',em:'🚊'},
    {fr:'Le train',es:'El tren',em:'🚂'},
    {fr:'L\'avion',es:'El avión',em:'✈️'},
    {fr:'Le taxi / La voiture avec chauffeur',es:'El taxi / El remise (remise = término argentino)',em:'🚕'},
    {fr:'La voiture',es:'El auto (auto en Argentina, coche en España)',em:'🚗'},
    {fr:'La moto',es:'La moto',em:'🏍️'},
    {fr:'Le vélo',es:'La bicicleta / La bici',em:'🚴'},
    {fr:'Le billet de transport',es:'El pasaje / El boleto',em:'🎫'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "El colectivo / El bondi" en francés?',opts:['Le train','Le métro','Le bus','Le taxi'],ans:2},
    {q:'¿Cómo se dice "El auto" en francés?',opts:['La moto','La voiture','Le tramway','Le camion'],ans:1},
    {q:'¿Cómo se dice "El subte" en francés?',opts:['Le metro (en argentin)','Le métro','Le train','Le bus'],ans:1},
    {q:'¿Cómo se dice "El pasaje / boleto" en francés?',opts:['Le billet de transport','Le ticket simple','La carte','La tarjeta'],ans:0}
   ]},
  {id:'objets',level:1,emoji:'🔑',name:'Objetos del Día',sub:'Le téléphone, les clés… / Objetos cotidianos en francés',
   words:[
    {fr:'Le téléphone',es:'El teléfono',em:'☎️'},
    {fr:'Le portable',es:'El celular (celular en Argentina, móvil en España)',em:'📱'},
    {fr:'L\'ordinateur',es:'La computadora / La compu (computadora en Argentina, ordenador en España)',em:'💻'},
    {fr:'Le chargeur',es:'El cargador',em:'🔌'},
    {fr:'La montre',es:'El reloj de pulsera',em:'⌚'},
    {fr:'L\'horloge / la pendule',es:'El reloj',em:'🕐'},
    {fr:'Les clés',es:'Las llaves',em:'🔑'},
    {fr:'Le portefeuille',es:'La billetera / El monedero (billetera en Argentina)',em:'👛'},
    {fr:'Le sac à dos',es:'La mochila',em:'🎒'},
    {fr:'Les lunettes',es:'Los anteojos (anteojos en Argentina, gafas en España)',em:'👓'},
    {fr:'Le parapluie',es:'El paraguas / El sombrilla',em:'☂️'},
    {fr:'Le papier',es:'El papel',em:'📄'},
    {fr:'Le stylo',es:'El lapicera / El bolígrafo (lapicera en Argentina)',em:'🖊️'},
    {fr:'Les ciseaux',es:'Las tijeras',em:'✂️'},
    {fr:'L\'assiette',es:'El plato',em:'🍽️'},
    {fr:'Le verre',es:'El vaso',em:'🥛'},
    {fr:'La tasse',es:'La taza',em:'☕'},
    {fr:'La cuillère',es:'La cuchara',em:'🥄'},
    {fr:'La fourchette',es:'El tenedor',em:'🍴'},
    {fr:'Le couteau',es:'El cuchillo',em:'🔪'},
    {fr:'La bouteille',es:'La botella',em:'🍶'},
    {fr:'Le miroir',es:'El espejo',em:'🪞'},
    {fr:'La serviette',es:'La toalla',em:'🛁'},
    {fr:'Le savon',es:'El jabón',em:'🧼'},
    {fr:'L\'oreiller',es:'La almohada',em:''},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Las llaves" en francés?',opts:['Le stylo','Les ciseaux','Les clés','Le chargeur'],ans:2},
    {q:'¿Cómo se dice "El celular" en francés?',opts:['La tablette','Le portable','L\'ordinateur','La radio'],ans:1},
    {q:'¿Cómo se dice "La mochila" en francés?',opts:['Le portefeuille','Le sac','Le sac à dos','Le chapeau'],ans:2},
    {q:'¿Cómo se dice "La computadora" en francés?',opts:['Le portable','La tablette','L\'ordinateur','L\'écran'],ans:2},
    {q:'¿Cómo se dice "Los anteojos" en francés?',opts:['Les écouteurs','Les lunettes','Les gants','Les montres'],ans:1},
    {q:'¿Cómo se dice "La lapicera" en francés?',opts:['Le crayon','Le papier','Le stylo','Le livre'],ans:2},
    {q:'¿Cómo se dice "La billetera" en francés?',opts:['Le sac à dos','Les clés','Le portefeuille','Le téléphone'],ans:2},
    {q:'¿Cómo se dice "El espejo" en francés?',opts:['La fenêtre','Le miroir','Le tableau','La porte'],ans:1},
    {q:'¿Cómo se dice "La toalla" en francés?',opts:['L\'oreiller','Le savon','La serviette','Le verre'],ans:2},
    {q:'¿Cómo se dice "La cuchara" en francés?',opts:['Le couteau','La fourchette','La cuillère','L\'assiette'],ans:2},
    {q:'¿Cómo se dice "El paraguas" en francés?',opts:['Le manteau','Le parapluie','L\'écharpe','L\'imperméable'],ans:1},
    {q:'¿Cómo se dice "La almohada" en francés?',opts:['La couverture','Le matelas','Le drap','L\'oreiller'],ans:3},
   ]},
   {id:'log',level:1,emoji:'🏠',name:'La Vivienda',sub:'Le salon, la cuisine… / La vivienda en francés',
   words:[
    {fr:'La maison',es:'La casa',em:'🏠'},
    {fr:'L\'appartement',es:'El departamento / El depto (departamento en Argentina, piso en España)',em:'🏢'},
    {fr:'L\'entrée',es:'La entrada / El hall',em:'🚪'},
    {fr:'Le salon',es:'La sala / El living (sala o living en Argentina, salón en España)',em:'🛋️'},
    {fr:'La cuisine',es:'La cocina',em:'🍳'},
    {fr:'La chambre',es:'La habitación / El cuarto',em:'🛏️'},
    {fr:'La salle de bain',es:'El baño',em:'🚿'},
    {fr:'Les toilettes',es:'El toilette / El baño de visitas (toilette = término argentino)',em:'🚽'},
    {fr:'Le garage',es:'El garaje',em:'🚗'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "La sala / El living" en francés?',opts:['La cuisine','La chambre','Le salon','Le garage'],ans:2},
    {q:'¿Cómo se dice "La cocina" en francés?',opts:['La salle à manger','La cuisine','La salle de bain','Le salon'],ans:1},
    {q:'¿Cómo se dice "La habitación / El cuarto" en francés?',opts:['Le salon','La chambre','L\'entrée','Le garage'],ans:1},
    {q:'¿Cómo se dice "El toilette" en francés?',opts:['La salle de bain principale','Le garage','Les toilettes','Le salon'],ans:2},
    {q:'¿Cómo se dice "El departamento / depto" en francés?',opts:['La maison','L\'entrée','L\'appartement','La chambre'],ans:2}
   ]},
   {id:'muebles_equipamiento', level:1, emoji:'🪑', name:'Muebles y Equipamiento', sub:'Le canapé, la cuisine équipée… / Muebles y electrodomésticos',
 words:[
    {fr:'Le canapé / Le fauteuil',es:'El sofá / El sillón',em:'🛋️'},
    {fr:'La table',es:'La mesa',em:''},
    {fr:'La chaise',es:'La silla',em:'🪑'},
    {fr:'La lampe',es:'La lámpara',em:'💡'},
    {fr:'L\'étagère',es:'La estantería / El estante',em:''},
    {fr:'Le lit',es:'La cama',em:'🛏️'},
    {fr:'L\'armoire',es:'El ropero / El armario (ropero = término argentino habitual)',em:'🗄️'},
    {fr:'Le bureau',es:'El escritorio',em:'🖊️'},
    {fr:'Le réfrigérateur',es:'La heladera (heladera en Argentina, nevera en España)',em:'🧊'},
    {fr:'Le four',es:'El horno',em:'🔥'},
    {fr:'Le micro-ondes',es:'El microondas',em:'🔲♨️'},
    {fr:'L\'évier',es:'La pileta / La bacha (pileta / bacha en Argentina)',em:'🚰'},
    {fr:'Le lavabo',es:'El lavabo (en el baño)',em:'🚰'},
    {fr:'La baignoire',es:'La bañera',em:'🛁'},
    {fr:'La douche',es:'La ducha',em:'🚿'},
  ],
  quiz10:[
    {q:'¿Cómo se dice "El sofá" en francés?',opts:['Le fauteuil','La chaise','Le canapé','Le lit'],ans:2},
    {q:'¿Cómo se dice "El ropero" en francés?',opts:['Le bureau','L\'étagère','L\'armoire','Le lit'],ans:2},
    {q:'¿Cómo se dice "La heladera" en francés?',opts:['Le four','Le micro-ondes','Le réfrigérateur','L\'évier'],ans:2},
    {q:'¿Cómo se dice "El horno" en francés?',opts:['Le micro-ondes','Le four','L\'évier','Le lavabo'],ans:1},
    {q:'¿Cómo se dice "La estantería" en francés?',opts:['La lampe','Le fauteuil','La chaise','L\'étagère'],ans:3},
    {q:'¿Cómo se dice "La bañera" en francés?',opts:['Le lavabo','L\'évier','La baignoire','La douche'],ans:2},
    {q:'¿Cómo se dice "El escritorio" en francés?',opts:['L\'armoire','Le lit','Le bureau','La table'],ans:2},
  ]},   
   {id:'emot',level:1,emoji:'😄',name:'Las Emociones',sub:'Content, fatigué… / Las emociones en francés',
   words:[
    {fr:'Content / Contente',es:'Contento / Contenta',em:'😊'},
    {fr:'Heureux / Heureuse',es:'Feliz / Feliz',em:'😊'},
    {fr:'Joyeux / Joyeuse',es:'Alegre / Alegre',em:'😄'},
    {fr:'Triste / Triste',es:'Triste / Triste',em:'😢'},
    {fr:'Fatigué / Fatiguée',es:'Cansado / Cansada',em:'😴'},
    {fr:'Fâché / Fâchée',es:'Enojado / Enojada (enojado = término argentino, enfadado = español)',em:'😠'},
    {fr:'Avoir peur',es:'Tener miedo',em:'😨'},
    {fr:'Malade / Malade',es:'Enfermo / Enferma',em:'🤒'},
    {fr:'Inquiet / Inquiète',es:'Preocupado / Preocupada',em:'😟'},
    {fr:'Stressé / Stressée',es:'Estresado / Estresada',em:'😰'},
    {fr:'Déçu / Déçue',es:'Decepcionado / Decepcionada',em:'😞'},
    {fr:'Amoureux / Amoureuse',es:'Enamorado / Enamorada',em:'😍'},
    {fr:'C\'est super ! / Excellent !',es:'¡Qué piola! / ¡Buenísimo! (expresiones argentinas)',em:'🌟'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Enojada" en francés?',opts:['Déçue','Fâchée','Inquiète','Contente'],ans:1},
    {q:'¿Cómo se dice "Alegre" en francés?',opts:['Triste','Fatiguée','Joyeuse','Malade'],ans:2},
    {q:'¿Cómo se dice "Cansado" en francés?',opts:['Stressé','Malade','Inquiet','Fatigué'],ans:3},
    {q:'¿Cómo se dice "Enojada" en francés?',opts:['Fatiguée','Contente','Fâchée','Malade'],ans:2},
    {q:'¿Cómo se dice "¡Qué piola!" en francés?',opts:['Ça m\'énerve !','C\'est nul !','C\'est super !','J\'ai peur !'],ans:2},
    {q:'¿Cómo se dice "Preocupada" en francés?',opts:['Stressée','Amoureuse','Inquiète','Déçue'],ans:2},
    {q:'¿Cómo se dice "Tener miedo" en francés?',opts:['Avoir faim','Avoir peur','Avoir froid','Avoir sommeil'],ans:1}
   ]},
  {id:'fam',level:1,emoji:'👨‍👩‍👧',name:'La Familia',sub:'Le père, la mère… / La familia en francés',
   words:[
   {fr:'La mère / La maman',es:'La madre / La mamá',em:'👩'},
    {fr:'Le père / Le papa',es:'El padre / El papá',em:'👨'},
    {fr:'La fille',es:'La hija',em:'👧'},
    {fr:'Le fils',es:'El hijo',em:'👦'},
    {fr:'La sœur',es:'La hermana',em:'👧'},
    {fr:'Le frère',es:'El hermano',em:'🧑'},
    {fr:'La grand-mère',es:'La abuela',em:'👵'},
    {fr:'Le grand-père',es:'El abuelo',em:'👴'},
    {fr:'La femme',es:'La mujer / La esposa / La compañera (compañera = término habitual en Argentina)',em:'💑'},
    {fr:'Le mari',es:'El marido / El esposo / El compañero (compañero = término habitual en Argentina)',em:'💍'},
    {fr:'L\'oncle / La tante',es:'El tío / la tía (también: amigo/amiga en lenguaje informal argentino)',em:'👨/👩'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El padre" en francés?',opts:['Le mari','Le fils','Le père','Le frère'],ans:2},
    {q:'¿Cómo se dice "La madre" en francés?',opts:['La fille','La sœur','La maman','La mère'],ans:3},
    {q:'¿Cómo se dice "El hermano" en francés?',opts:['Le fils','Le frère','Le papa','Le mari'],ans:1},
    {q:'¿Cómo se dice "La hermana" en francés?',opts:['La mère','La grand-mère','La sœur','La fille'],ans:2},
    {q:'¿Cómo se dice "El abuelo" en francés?',opts:['Le papa','Le mari','Le fils','Le grand-père'],ans:3},
    {q:'¿Cómo se dice "La abuela" en francés?',opts:['La mère','La grand-mère','La sœur','La fille'],ans:1},
    {q:'¿Cómo se dice "La hija" en francés?',opts:['La sœur','La femme','La fille','La maman'],ans:2},
    {q:'En francés informal, "tonton/tata" puede significar…',opts:['Padre / madre','Amigo/a cercano/a de la familia','Hermano / hermana','El tío / La tía'],ans:1}
   ]},
  {id:'verb',level:1,emoji:'📝',name:'Los Verbos',sub:'Être, avoir, aller… / Los verbos principales en francés',
   words:[
   {fr:'Être',es:'Ser / Estar (ser=permanente : soy argentino / estar=temporario : estoy cansado)',em:'🧑',conj:{fr:['Je suis','Tu es','Il/Elle est','Nous sommes','Vous/Ils êtes/sont'],es:['Yo soy/estoy','Vos sos/estás (voseo)','Él/Ella es/está','Nosotros somos/estamos','Ustedes son/están']}},
    {fr:'Avoir',es:'Tener',em:'🤲',conj:{fr:['J\'ai','Tu as','Il/Elle a','Nous avons','Vous/Ils ont'],es:['Yo tengo','Vos tenés (voseo)','Él/Ella tiene','Nosotros tenemos','Ustedes tienen']}},
    {fr:'Parler',es:'Hablar',em:'🗣️',conj:{fr:['Je parle','Tu parles','Il/Elle parle','Nous parlons','Ils/Elles parlent'],es:['Yo hablo','Vos hablás (voseo)','Él/Ella habla','Nosotros hablamos','Ustedes hablan']}},
    {fr:'Habiter',es:'Vivir',em:'🏠',conj:{fr:['J\'habite','Tu habites','Il/Elle habite','Nous habitons','Ils/Elles habitent'],es:['Yo vivo','Vos vivís (voseo)','Él/Ella vive','Nosotros vivimos','Ustedes viven']}},
    {fr:'Aller',es:'Ir',em:'🚶',conj:{fr:['Je vais','Tu vas','Il/Elle va','Nous allons','Ils/Elles vont'],es:['Yo voy','Vos vas (voseo)','Él/Ella va','Nosotros vamos','Ustedes van']}},
    {fr:'Aimer',es:'Gustar',em:'❤️',conj:{fr:['J\'aime','Tu aimes','Il/Elle aime','Nous aimons','Ils/Elles aiment'],es:['Me gusta','Te gusta','Le gusta','Nos gusta','Les gusta']}},
    {fr:'Manger',es:'Comer',em:'🍽️',conj:{fr:['Je mange','Tu manges','Il/Elle mange','Nous mangeons','Ils/Elles mangent'],es:['Yo como','Vos comés (voseo)','Él/Ella come','Nosotros comemos','Ustedes comen']}},
    {fr:'Boire',es:'Beber / Tomar (tomar = término habitual en Argentina)',em:'🥤',conj:{fr:['Je bois','Tu bois','Il/Elle boit','Nous buvons','Ils/Elles boivent'],es:['Yo tomo','Vos tomás (voseo)','Él/Ella toma','Nosotros tomamos','Ustedes toman']}},
    {fr:'Dormir',es:'Dormir',em:'😴',conj:{fr:['Je dors','Tu dors','Il/Elle dort','Nous dormons','Ils/Elles dorment'],es:['Yo duermo','Vos dormís (voseo)','Él/Ella duerme','Nosotros dormimos','Ustedes duermen']}},
    {fr:'Marcher',es:'Caminar',em:'🚶‍♂️',conj:{fr:['Je marche','Tu marches','Il/Elle marche','Nous marchons','Ils/Elles marchent'],es:['Yo camino','Vos caminás (voseo)','Él/Ella camina','Nosotros caminamos','Ustedes caminan']}},
    {fr:'Courir',es:'Correr',em:'🏃‍♂️',conj:{fr:['Je cours','Tu cours','Il/Elle court','Nous courons','Ils/Elles courent'],es:['Yo corro','Vos corrés (voseo)','Él/Ella corre','Nosotros corremos','Ustedes corren']}},
    {fr:'Lire',es:'Leer',em:'📖',conj:{fr:['Je lis','Tu lis','Il/Elle lit','Nous lisons','Ils/Elles lisent'],es:['Yo leo','Vos leés (voseo)','Él/Ella lee','Nosotros leemos','Ustedes leen']}},
    {fr:'Écrire',es:'Escribir',em:'✍️',conj:{fr:['J\'écris','Tu écris','Il/Elle écrit','Nous écrivons','Ils/Elles écrivent'],es:['Yo escribo','Vos escribís (voseo)','Él/Ella escribe','Nosotros escribimos','Ustedes escriben']}},
    {fr:'Écouter',es:'Escuchar',em:'🎧',conj:{fr:['J\'écoute','Tu écoutes','Il/Elle écoute','Nous écoutons','Ils/Elles écoutent'],es:['Yo escucho','Vos escuchás (voseo)','Él/Ella escucha','Nosotros escuchamos','Ustedes escuchan']}},
    {fr:'Regarder',es:'Mirar',em:'👀',conj:{fr:['Je regarde','Tu regardes','Il/Elle regarde','Nous regardons','Ils/Elles regardent'],es:['Yo miro','Vos mirás (voseo)','Él/Ella mira','Nosotros miramos','Ustedes miran']}},
    {fr:'Apprendre',es:'Aprender',em:'🧠',conj:{fr:['J\'apprends','Tu apprends','Il/Elle apprend','Nous apprenons','Ils/Elles apprennent'],es:['Yo aprendo','Vos aprendés (voseo)','Él/Ella aprende','Nosotros aprendemos','Ustedes aprenden']}},
    {fr:'Penser',es:'Pensar',em:'🤔',conj:{fr:['Je pense','Tu penses','Il/Elle pense','Nous pensons','Ils/Elles pensent'],es:['Yo pienso','Vos pensás (voseo)','Él/Ella piensa','Nosotros pensamos','Ustedes piensan']}},
    {fr:'Acheter',es:'Comprar',em:'🛒',conj:{fr:['J\'achète','Tu achètes','Il/Elle achète','Nous achetons','Ils/Elles achètent'],es:['Yo compro','Vos comprás (voseo)','Él/Ella compra','Nosotros compramos','Ustedes compran']}},
    {fr:'Payer',es:'Pagar',em:'💳',conj:{fr:['Je paie','Tu paies','Il/Elle paie','Nous payons','Ils/Elles paient'],es:['Yo pago','Vos pagás (voseo)','Él/Ella paga','Nosotros pagamos','Ustedes pagan']}},
    {fr:'Travailler',es:'Trabajar',em:'💼',conj:{fr:['Je travaille','Tu travailles','Il/Elle travaille','Nous travaillons','Ils/Elles travaillent'],es:['Yo trabajo','Vos trabajás (voseo)','Él/Ella trabaja','Nosotros trabajamos','Ustedes trabajan']}},
    {fr:'Conduire',es:'Manejar (manejar en Argentina, conducir en España)',em:'🚗',conj:{fr:['Je conduis','Tu conduis','Il/Elle conduit','Nous conduisons','Ils/Elles conduisent'],es:['Yo manejo','Vos manejás (voseo)','Él/Ella maneja','Nosotros manejamos','Ustedes manejan']}},
    {fr:'Chercher',es:'Buscar',em:'🔍',conj:{fr:['Je cherche','Tu cherches','Il/Elle cherche','Nous cherchons','Ils/Elles cherchent'],es:['Yo busco','Vos buscás (voseo)','Él/Ella busca','Nosotros buscamos','Ustedes buscan']}},
    {fr:'Se doucher',es:'Ducharse',em:'🧼',conj:{fr:['Je me douche','Tu te douches','Il/Elle se douche','Nous nous douchons','Ils/Elles se douchent'],es:['Yo me ducho','Vos te duchás (voseo)','Él/Ella se ducha','Nosotros nos duchamos','Ustedes se duchan']}},
    {fr:'Appeler',es:'Llamar',em:'📞',conj:{fr:['J\'appelle','Tu appelles','Il/Elle appelle','Nous appelons','Ils/Elles appellent'],es:['Yo llamo','Vos llamás (voseo)','Él/Ella llama','Nosotros llamamos','Ustedes llaman']}},
    {fr:'Demander',es:'Preguntar',em:'🙋‍♂️',conj:{fr:['Je demande','Tu demandes','Il/Elle demande','Nous demandons','Ils/Elles demandent'],es:['Yo pregunto','Vos preguntás (voseo)','Él/Ella pregunta','Nosotros preguntamos','Ustedes preguntan']}}
  ],
   quiz10:[
    {q:'¿Cómo se dice "Vos hablás" (voseo) en francés?',opts:['Tu parles','Il parle','Je parle','Nous parlons'],ans:0},
    {q:'¿Cómo se dice "Ella sonríe" en francés?',opts:['Elle crie','Elle pleure','Elle sourit','Elle chante'],ans:2},
    {q:'¿Cómo se dice "Vos manejás" (voseo) en francés?',opts:['Tu conduis','Je conduis','Nous conduisons','Il conduit'],ans:0},
    {q:'¿Cómo se dice "Aprendo" en francés?',opts:['Tu enseignes','Tu écoutes','J\'apprends','Tu lis'],ans:2},
    {q:'¿Cómo se dice "Comemos" en francés?',opts:['Je mange','Tu manges','Nous mangeons','Ils mangent'],ans:2},
    {q:'¿Cómo se dice "Vos tomás" (voseo) en francés?',opts:['Je bois','Tu bois','Il boit','Nous buvons'],ans:1},
    {q:'¿Cómo se dice "Compramos" en francés?',opts:['Nous vendons','Nous cherchons','Nous achetons','Nous payons'],ans:2},
    {q:'¿Cómo se dice "Trabajo" en francés?',opts:['Tu travailles','Je travaille','Il travaille','Nous travaillons'],ans:1},
    {q:'¿Cómo se dice "Vos buscás" (voseo) en francés?',opts:['Je cherche','Tu cherches','Nous cherchons','Ils cherchent'],ans:1},
    {q:'¿Cómo se dice "Ella cocina" en francés?',opts:['Elle mange','Elle cuisine','Elle nettoie','Elle lit'],ans:1},
    {q:'En español argentino "manejar el auto" significa…',opts:['Réparer la voiture','Conduire la voiture','Chercher la voiture','Garer la voiture'],ans:1},
    {q:'¿Cómo se dice "Vos pagás" (voseo) en francés?',opts:['Je paie','Tu paies','Il paie','Nous payons'],ans:1}
   ]},
  {id:'corps',level:1,emoji:'🧍',name:'El Cuerpo',sub:'La tête, le bras, le pied… / El cuerpo en francés',
   words:[
    {fr:'La tête',es:'La cabeza',em:'🗣️'},
    {fr:'Les cheveux',es:'El pelo',em:'💇‍♂️'},
    {fr:'L\'œil / Les yeux',es:'El ojo / Los ojos',em:'👀'},
    {fr:'Le nez',es:'La nariz',em:'👃'},
    {fr:'L\'oreille / Les oreilles',es:'La oreja / Las orejas',em:'👂'},
    {fr:'La bouche',es:'La boca',em:'👄'},
    {fr:'Les lèvres',es:'Los labios',em:'💋'},
    {fr:'La langue',es:'La lengua',em:'👅'},
    {fr:'La dent / Les dents',es:'El diente / Los dientes',em:'🦷'},
    {fr:'Le cou',es:'El cuello',em:''},
    {fr:'Le bras / Les bras',es:'El brazo / Los brazos',em:'💪'},
    {fr:'La main / Les mains',es:'La mano / Las manos',em:'✋'},
    {fr:'Le doigt / Les doigts',es:'El dedo / Los dedos',em:'☝️'},
    {fr:'L\'ongle / Les ongles',es:'La uña / Las uñas',em:'💅'},
    {fr:'Le dos',es:'La espalda',em:''},
    {fr:'Le ventre',es:'La panza / La barriga (panza = término habitual argentino)',em:'🫃'},
    {fr:'La jambe / Les jambes',es:'La pierna / Las piernas',em:'🦵'},
    {fr:'Le pied / Les pieds',es:'El pie / Los pies',em:'🦶'},
    {fr:'Le cœur',es:'El corazón',em:'❤️'},
    {fr:'Le cerveau',es:'El cerebro',em:'🧠'},
    {fr:'L\'os / Les os',es:'El hueso / Los huesos',em:'🦴'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La cabeza" en francés?',opts:['Le nez','La bouche','La tête','Le cou'],ans:2},
    {q:'¿Cómo se dice "Los ojos" en francés?',opts:['Les oreilles','Le nez','Les lèvres','Les yeux'],ans:3},
    {q:'¿Cómo se dice "La mano" en francés?',opts:['Le pied','La jambe','Le bras','La main'],ans:3},
    {q:'¿Cómo se dice "La nariz" en francés?',opts:['La bouche','Le nez','L\'oreille','Le cou'],ans:1},
    {q:'¿Cómo se dice "La panza" en francés?',opts:['Le bras','Le ventre','Le pied','Le dos'],ans:1},
    {q:'¿Cómo se dice "El cerebro" en francés?',opts:['Le cœur','Le ventre','Le cerveau','L\'os'],ans:2},
    {q:'¿Cómo se dice "Los dientes" en francés?',opts:['Les lèvres','La langue','Les dents','Les oreilles'],ans:2},
    {q:'¿Cómo se dice "El corazón" en francés?',opts:['Le cerveau','Le cœur','L\'os','Le dos'],ans:1}
   ]},
  {id:'sante',level:1,emoji:'🏥',name:'La Salud',sub:'Le médecin, la pharmacie… / La salud en francés',
   words:[
    {fr:'Faire mal / J\'ai mal',es:'Doler / Me duele (me duele la cabeza = j\'ai mal à la tête)',em:'🤕'},
    {fr:'La fièvre',es:'La fiebre',em:'🌡️'},
    {fr:'La toux',es:'La tos',em:'😮‍💨'},
    {fr:'Le mouchoir',es:'El pañuelo / El kleenex (kleenex muy usado en Argentina)',em:'🤧'},
    {fr:'Le thermomètre',es:'El termómetro',em:'🌡️'},
    {fr:'Le rendez-vous médical',es:'El turno (médico) (turno = término argentino)',em:'📅'},
    {fr:'Le médecin / La médecin',es:'El médico / La médica',em:'🩺'},
    {fr:'Le/la patient(e)',es:'El/la paciente',em:'🛏️'},
    {fr:'Le cabinet médical',es:'El consultorio (consultorio en Argentina)',em:'📋'},
    {fr:'L\'infirmier / L\'infirmière',es:'El enfermero / La enfermera',em:'👨‍⚕️'},
    {fr:'L\'hôpital / La clinique',es:'El hospital / La clínica (clínica privada = muy común en Argentina)',em:'🏥'},
    {fr:'L\'ordonnance',es:'La receta',em:'📋'},
    {fr:'La pharmacie',es:'La farmacia',em:'🏪'},
    {fr:'Le médicament',es:'El medicamento / El remedio (remedio = término muy habitual en Argentina)',em:'💊'},
    {fr:'Le comprimé',es:'La pastilla / El comprimido',em:'💊'},
    {fr:'Le vaccin',es:'La vacuna',em:'💉'},
    {fr:'Le pansement adhésif',es:'La curita (curita en Argentina, tirita en España)',em:'🩹'},
    {fr:'Le bandage',es:'El vendaje',em:'🩼'},
    {fr:'L\'ambulance',es:'La ambulancia',em:'🚑'},
    {fr:'Les urgences',es:'La guardia / Las urgencias (guardia = término argentino)',em:'🆘'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El hospital / La clínica" en francés?',opts:['La pharmacie','L\'hôpital / La clinique','Les urgences','Le cabinet médical'],ans:1},
    {q:'¿Cómo se dice "La fiebre" en francés?',opts:['La toux','La douleur','La fièvre','La grippe'],ans:2},
    {q:'¿Cómo se dice "La vacuna" en francés?',opts:['Le pansement','Le vaccin','Le bandage','Le médicament'],ans:1},
    {q:'¿Cómo se dice "La curita" en francés?',opts:['L\'injection','Le vaccin','Le pansement adhésif','Le médicament'],ans:2},
    {q:'¿Cómo se dice "La receta" en francés?',opts:['Le cabinet médical','Le médicament','L\'ordonnance','Le vaccin'],ans:2},
    {q:'¿Cómo se dice "La guardia / urgencias" en francés?',opts:['Le médecin de garde','La salle d\'attente','Les urgences','Le cabinet médical'],ans:2},
    {q:'¿Cómo se dice "El turno médico" en francés?',opts:['Une visite','Le rendez-vous médical','Une ordonnance','Une consultation'],ans:1},
    {q:'¿Cómo se dice "El remedio" en francés?',opts:['Le comprimé','La pastille','Le médicament','L\'ordonnance'],ans:2}
   ]},
  {id:'ocio', level:1, emoji:'⛰️', name:'El Ocio', sub:'Le sport, la randonnée, le foot… / El tiempo libre en francés',
  words:[
    {fr:'La lecture',es:'La lectura',em:'📚'},
    {fr:'Le livre',es:'El libro',em:'📖'},
    {fr:'La musique',es:'La música',em:'🎵'},
    {fr:'Le cinéma',es:'El cine',em:'🎬'},
    {fr:'Le théâtre',es:'El teatro',em:'🎭'},
    {fr:'Le sport',es:'El deporte',em:''},
    {fr:'Le football',es:'El fútbol (pasión nacional argentina)',em:'⚽'},
    {fr:'La natation',es:'La natación',em:'🏊'},
    {fr:'Le cyclisme',es:'El ciclismo',em:'🚴'},
    {fr:'L\'athlétisme',es:'El atletismo',em:'🏃'},
    {fr:'La randonnée',es:'El senderismo / El trekking (trekking muy usado en Argentina)',em:'🥾'},
    {fr:'La promenade',es:'El paseo',em:'🌳'},
    {fr:'Jouer',es:'Jugar',em:'🎮'},
    {fr:'Pratiquer',es:'Practicar',em:'💪'},
    {fr:'Se reposer',es:'Descansar',em:'😴'},
    {fr:'Profiter / Passer un bon moment',es:'Disfrutar / Pasarla bien (pasarla bien = argentino)',em:'😊'},
  ],
  quiz10:[
    {q:'¿Cómo se dice "El senderismo / trekking" en francés?',opts:['La promenade','La randonnée','L\'athlétisme','Le cyclisme'],ans:1},
    {q:'¿Cómo se dice "La natación" en francés?',opts:['Le cyclisme','L\'athlétisme','La natation','Le football'],ans:2},
    {q:'¿Cómo se dice "El libro" en francés?',opts:['La lecture','La musique','Le livre','Le cinéma'],ans:2},
    {q:'¿Cómo se dice "Pasarla bien" en francés?',opts:['Travailler beaucoup','Passer un bon moment','Se reposer','Jouer'],ans:1},
    {q:'¿Qué deporte se dice "Le football" y es una pasión nacional en Argentina?',opts:['El rugby','El básquet','El fútbol','El tenis'],ans:2},
    {q:'¿Cómo se dice "Descansar" en francés?',opts:['Jouer','Pratiquer','Apprécier','Se reposer'],ans:3},
    {q:'¿Cómo se dice "El cine" en francés?',opts:['Le théâtre','La musique','La lecture','Le cinéma'],ans:3},
    {q:'¿Cómo se dice "Jugar" en francés?',opts:['Pratiquer','Profiter','Se reposer','Jouer'],ans:3},
  ]
},  
   {id:'veth',level:1,emoji:'👗',name:'La Ropa',sub:'Le t-shirt, le pantalon… / La ropa en francés',
   words:[
    {fr:'Le t-shirt',es:'La remera (remera en Argentina, camiseta en España)',em:'👕'},
    {fr:'La chemise',es:'La camisa',em:'👔'},
    {fr:'Le pantalon',es:'El pantalón',em:'👖'},
    {fr:'Les chaussures / Les baskets',es:'Los zapatos / Las zapatillas (zapatillas = baskets en Argentina)',em:'👟'},
    {fr:'Les chaussettes',es:'Las medias (medias en Argentina, calcetines en España)',em:'🧦'},
    {fr:'La robe / La jupe',es:'El vestido / La pollera (pollera = falda en Argentina)',em:'👗'},
    {fr:'Le short',es:'El short / Los pantalones cortos',em:'🩳'},
    {fr:'Le pull / Le sweat',es:'El buzo / El suéter (buzo = pull/sweat en Argentina)',em:'🧥'},
    {fr:'La veste / La veste d\'extérieur',es:'La campera (campera = término argentino)',em:'🧥'},
    {fr:'Le chapeau / La casquette',es:'El sombrero / La gorra',em:'🎩'},
    {fr:'L\'imperméable',es:'El piloto (piloto en Argentina)',em:'🧥'},
    {fr:'L\'écharpe',es:'La bufanda',em:'🧣'},
    {fr:'Les gants',es:'Los guantes',em:'🧤'},
    {fr:'Le maillot de bain',es:'La malla / El traje de baño (malla en Argentina)',em:'🩱'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "La remera" en francés?',opts:['Le pull','La chemise','Le t-shirt','La veste'],ans:2},
    {q:'¿Cómo se dice "Las zapatillas" en francés?',opts:['Les chaussures','Les chaussettes','Les baskets','Le chapeau'],ans:2},
    {q:'¿Cómo se dice "La pollera" en francés?',opts:['La robe','La jupe','La veste','Le short'],ans:1},
    {q:'¿Cómo se dice "El buzo" en francés?',opts:['L\'écharpe','La veste','Le pull / le sweat','L\'imperméable'],ans:2},
    {q:'¿Cómo se dice "El piloto" (impermeable) en francés?',opts:['Le pull','L\'imperméable','Le short','Les chaussettes'],ans:1},
    {q:'¿Cómo se dice "La bufanda" en francés?',opts:['Les gants','Le manteau','L\'écharpe','Le bonnet'],ans:2},
    {q:'¿Cómo se dice "El vestido" en francés?',opts:['La jupe','La robe','La veste','Le pull'],ans:1},
    {q:'¿Cómo se dice "Las medias" en francés?',opts:['Les chaussures','Les gants','Les chaussettes','Le maillot de bain'],ans:2}
   ]},
  {id:'pays',level:1,emoji:'🌍',name:'Los Países',sub:'La France, l\'Argentine… / Los países en francés',
   words:[
    {fr:'La France',es:'Francia',em:'🇫🇷'},
    {fr:'L\'Argentine',es:'Argentina',em:'🇦🇷'},
    {fr:'L\'Espagne',es:'España',em:'🇪🇸'},
    {fr:'L\'Italie',es:'Italia (fuerte influencia en Argentina)',em:'🇮🇹'},
    {fr:'Le Brésil',es:'Brasil (gran vecino de Argentina)',em:'🇧🇷'},
    {fr:'L\'Uruguay',es:'Uruguay',em:'🇺🇾'},
    {fr:'Le Chili',es:'Chile',em:'🇨🇱'},
    {fr:'La Bolivie',es:'Bolivia',em:'🇧🇴'},
    {fr:'Le Mexique',es:'México',em:'🇲🇽'},
    {fr:'La Colombie',es:'Colombia',em:'🇨🇴'},
    {fr:'Le Venezuela',es:'Venezuela',em:'🇻🇪'},
    {fr:'Le Pérou',es:'Perú',em:'🇵🇪'},
    {fr:'L\'Allemagne',es:'Alemania',em:'🇩🇪'},
    {fr:'Le Royaume-Uni',es:'Reino Unido',em:'🇬🇧'},
    {fr:'La Belgique',es:'Bélgica',em:'🇧🇪'},
    {fr:'La Suisse',es:'Suiza',em:'🇨🇭'},
    {fr:'Les États-Unis',es:'Estados Unidos',em:'🇺🇸'},
    {fr:'La Chine',es:'China',em:'🇨🇳'},
    {fr:'Le Japon',es:'Japón',em:'🇯🇵'},
    {fr:'Le Maroc',es:'Marruecos',em:'🇲🇦'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Francia" en francés?',opts:['La Belgique','La France','La Suisse','Le Portugal'],ans:1},
    {q:'¿Cómo se dice "Alemania" en francés?',opts:['L\'Autriche','Les Pays-Bas','L\'Allemagne','Le Danemark'],ans:2},
    {q:'¿Cómo se dice "Brasil" en francés?',opts:['Le Pérou','Le Chili','Le Brésil','La Bolivie'],ans:2},
    {q:'¿Qué país francés... ah no, qué país es vecino de Argentina al oeste?',opts:['Le Brésil','L\'Uruguay','Le Chili','La Bolivie'],ans:2},
    {q:'¿Cómo se dice "Marruecos" en francés?',opts:['L\'Égypte','Le Sénégal','Le Maroc','L\'Afrique du Sud'],ans:2},
    {q:'¿Qué país tiene fuerte influencia cultural en Argentina?',opts:['La France','L\'Allemagne','L\'Italie','La Russie'],ans:2},
    {q:'¿Cómo se dice "Uruguay" en francés?',opts:['La Colombie','L\'Uruguay','Le Venezuela','Le Pérou'],ans:1},
    {q:'¿Cómo se dice "Chile" en francés?',opts:['La Turquie','La Grèce','Le Chili','Chypre'],ans:2}
   ]},
  {id:'met',level:1,emoji:'💼',name:'Las Profesiones',sub:'Le médecin, le prof… / Las profesiones en francés',
   words:[
    {fr:'L\'étudiant / L\'étudiante',es:'El/la estudiante',em:'🎓'},
    {fr:'Le professeur / La professeure',es:'El profesor / La profesora',em:'👩‍🏫'},
    {fr:'Le serveur / La serveuse',es:'El mozo / La moza (término argentino)',em:'🍽️'},
    {fr:'Le vendeur / La vendeuse',es:'El vendedor / La vendedora',em:'🏪'},
    {fr:'Le chauffeur de taxi / Le chauffeur de remise',es:'El/la taxista / El remisero (remisero = argentino)',em:'🚕'},
    {fr:'Le médecin / La médecin',es:'El médico / La médica',em:'🩺'},
    {fr:'L\'infirmier / L\'infirmière',es:'El enfermero / La enfermera',em:'👨‍⚕️'},
    {fr:'Le cuisinier / La cuisinière',es:'El cocinero / La cocinera',em:'👨‍🍳'},
    {fr:'Le plombier / La plombière',es:'El plomero / La plomera (plomero en Argentina)',em:'🔧'},
    {fr:'L\'informaticien / L\'informaticienne',es:'El informático / La informática',em:'💻'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "El médico" en francés?',opts:['Le professeur','Le médecin','L\'infirmier','Le cuisinier'],ans:1},
    {q:'¿Cómo se dice "El mozo" en francés?',opts:['Le cuisinier','Le serveur','Le chauffeur de taxi','Le vendeur'],ans:1},
    {q:'¿Cómo se dice "El plomero" en francés?',opts:['L\'électricien','Le plombier','Le charpentier','Le peintre'],ans:1},
    {q:'¿Cómo se dice "La estudiante" en francés?',opts:['La professeure','L\'étudiante','La médecin','La vendeuse'],ans:1},
    {q:'¿Qué es un "remisero" en Argentina?',opts:['Un serveur','Un plombier','Un chauffeur avec voiture privée','Un vendeur'],ans:2}
   ]},
];

var LEVEL2_THEMES = [

  /* 1 ── Saluer et prendre des nouvelles */
  {id:'salut2',level:2,emoji:'👋',name:'Saludos',sub:'Saluer quelqu\'un / Saludar en francés',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans la rue',img:'🏘️',dialogue:[
      {s:'Lucas',fr:'Salut ! Ça va ?',es:'¡Hola! ¿Cómo andás? (forma informal)',side:'left'},
      {s:'Ana',fr:'Bien, merci ! Et toi ?',es:'¡Bien, gracias! ¿Y vos?',side:'right'},
      {s:'Lucas',fr:'Comme ci comme ça. Je suis fatigué.',es:'Más o menos. Estoy cansado.',side:'left'},
      {s:'Ana',fr:'Oh ! Je suis désolée.',es:'¡Uy! Lo siento.',side:'right'},
      {s:'Lucas',fr:'Merci. Salut !',es:'Gracias. ¡Chau!',side:'left'},
      {s:'Ana',fr:'Salut, salut !',es:'¡Chau, chau!',side:'right'}
    ]},
    {label:'Sit. 2',title:'Au bureau le matin',img:'💼',dialogue:[
      {s:'Pedro',fr:'Bonjour ! Comment tu vas ?',es:'¡Buenos días! ¿Cómo estás?',side:'left'},
      {s:'María',fr:'Bien, merci. Et toi ?',es:'Bien, gracias. ¿Y vos?',side:'right'},
      {s:'Pedro',fr:'Un peu fatigué. Tu veux un café ?',es:'Un poco cansado. ¿Querés un café? (forma informal)',side:'left'},
      {s:'María',fr:'Oui, s\'il te plaît. Merci !',es:'Sí, por favor. ¡Gracias!',side:'right'},
      {s:'Pedro',fr:'De rien. Voilà !',es:'De nada. ¡Acá tenés!',side:'left'}
    ]},
    {label:'Sit. 3',title:'Retrouver un ami au café',img:'☀️',dialogue:[
      {s:'Carlos',fr:'Salut ! Comment ça va ?',es:'¡Hola! ¿Qué hacés? (forma informal)',side:'left'},
      {s:'Sofía',fr:'Très bien ! Et toi ?',es:'¡Muy bien! ¿Y vos?',side:'right'},
      {s:'Carlos',fr:'Bien. Quoi de neuf ?',es:'Bien. ¿Qué hay de nuevo?',side:'left'},
      {s:'Sofía',fr:'Rien de spécial. On prend quelque chose ?',es:'Nada especial. ¿Tomamos algo?',side:'right'},
      {s:'Carlos',fr:'Bonne idée ! J\'ai soif.',es:'¡Buena idea! Tengo sed.',side:'left'},
      {s:'Sofía',fr:'Moi aussi ! Un maté ?',es:'¡Yo también! ¿Un mate?',side:'right'}
    ]}
   ],
   vocab:['Ça va ? = ¿Cómo andás? (forma informal)','Bien, merci = Bien, gracias','Et toi ? = ¿Y vos?','Je suis fatigué = Estoy cansado','Je suis désolé(e) = Lo siento','Salut ! = ¡Chau! / ¡Hola!','Quoi de neuf ? = ¿Qué hay de nuevo?'],
   quiz:[
    {q:'¿Cómo se dice "¿Cómo andás?" en francés?',opts:['Quel âge as-tu ?','Ça va ?','Comme ci comme ça','Je suis fatigué'],ans:1},
    {q:'¿Cómo se dice "Lo siento" en francés?',opts:['Merci','Je suis désolé(e)','De rien','Pardon'],ans:1},
    {q:'¿Cómo se dice "¡Chau!" en francés?',opts:['Bonjour !','Merci !','Salut !','S\'il te plaît !'],ans:2}
   ]},

  /* 2 ── Se présenter */
  {id:'pres2',level:2,emoji:'🙋',name:'Presentarse',sub:'Dire son nom, son pays / Presentarse en francés',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans un cours de français',img:'📚',dialogue:[
      {s:'Profesora',fr:'Bonjour ! Tu t\'appelles comment ?',es:'¡Hola! ¿Cómo te llamás? (forma informal)',side:'right'},
      {s:'Marc',fr:'Je m\'appelle Marc. Et toi ?',es:'Me llamo Marc. ¿Y vos?',side:'left'},
      {s:'Profesora',fr:'Je suis Laura. Tu es d\'où, Marc ?',es:'Yo soy Laura. ¿De dónde sos, Marc? (forma informal)',side:'right'},
      {s:'Marc',fr:'Je suis de France, de Paris. Et toi ?',es:'Soy de Francia, de París. ¿Y vos?',side:'left'},
      {s:'Profesora',fr:'Je suis de Buenos Aires. Bienvenue !',es:'Soy de Buenos Aires. ¡Bienvenido!',side:'right'},
      {s:'Marc',fr:'Merci !',es:'¡Gracias!',side:'left'}
    ]},
    {label:'Sit. 2',title:'Rencontre dans le quartier',img:'🏙️',dialogue:[
      {s:'Vecino',fr:'Bonjour ! Tu es nouveau ici ?',es:'¡Hola! ¿Sos nuevo acá? (forma informal)',side:'right'},
      {s:'Julie',fr:'Oui. Je m\'appelle Julie. Je suis française.',es:'Sí. Me llamo Julie. Soy francesa.',side:'left'},
      {s:'Vecino',fr:'Moi je suis Martín. Tu parles espagnol ?',es:'Yo soy Martín. ¿Hablás español? (forma informal)',side:'right'},
      {s:'Julie',fr:'Un peu. Je suis en train d\'apprendre.',es:'Un poco. Estoy aprendiendo.',side:'left'},
      {s:'Vecino',fr:'Très bien ! Ton espagnol est très bon.',es:'¡Muy bien! Tu español es muy bueno.',side:'right'},
      {s:'Julie',fr:'Merci ! Tu es très gentil.',es:'¡Gracias! Sos muy amable. (forma informal)',side:'left'}
    ]},
    {label:'Sit. 3',title:'À une fête',img:'🎉',dialogue:[
      {s:'Chica',fr:'Salut ! Tu t\'appelles comment ?',es:'¡Hola! ¿Cómo te llamás?',side:'right'},
      {s:'Thomas',fr:'Thomas. Et toi ?',es:'Thomas. ¿Y vos?',side:'left'},
      {s:'Chica',fr:'Moi je suis Valentina. Tu es français ?',es:'Yo soy Valentina. ¿Sos francés?',side:'right'},
      {s:'Thomas',fr:'Oui, je suis de Lyon. Et toi tu es de Buenos Aires ?',es:'Sí, soy de Lyon. ¿Y vos sos de Buenos Aires?',side:'left'},
      {s:'Chica',fr:'Non, je suis de Córdoba. Enchanté !',es:'No, soy de Córdoba. ¡Mucho gusto!',side:'right'},
      {s:'Thomas',fr:'Enchanté !',es:'¡Mucho gusto!',side:'left'}
    ]}
   ],
   vocab:['Je m\'appelle = Me llamo','Tu es d\'où ? = ¿De dónde sos?','Je suis de = Soy de','Je suis français(e) = Soy francés / francesa','Je suis en train d\'apprendre = Estoy aprendiendo','Bienvenue ! = ¡Bienvenido!','Enchanté(e) ! = ¡Mucho gusto!'],
   quiz:[
    {q:'¿Cómo se dice "Me llamo" en francés?',opts:['Je suis','Je m\'appelle','J\'ai','J\'habite'],ans:1},
    {q:'¿Cómo se dice "¿De dónde sos?" en francés?',opts:['Tu t\'appelles comment ?','Quel âge as-tu ?','Tu es d\'où ?','Tu habites où ?'],ans:2},
    {q:'¿Cómo se dice "¡Mucho gusto!" en francés?',opts:['Merci','Désolé','Pardon','Enchanté(e) !'],ans:3}
   ]},

  /* 3 ── Demander son chemin */
  {id:'chemin2',level:2,emoji:'🗺️',name:'Pedir camino',sub:'Demander son chemin / Pedir indicaciones en francés',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Trouver la gare',img:'🚉',dialogue:[
      {s:'Turista',fr:'Pardon, où est la gare ?',es:'Disculpá, ¿dónde está la estación? (forma informal)',side:'left'},
      {s:'Señora',fr:'Continue tout droit et tourne à gauche.',es:'Seguí todo recto y doblá a la izquierda. (forma informal)',side:'right'},
      {s:'Turista',fr:'C\'est loin ?',es:'¿Está lejos?',side:'left'},
      {s:'Señora',fr:'Non, c\'est près. C\'est cinq pâtés de maisons.',es:'No, está cerca. Son cinco cuadras.',side:'right'},
      {s:'Turista',fr:'Merci beaucoup.',es:'Muchas gracias.',side:'left'},
      {s:'Señora',fr:'De rien !',es:'¡De nada!',side:'right'}
    ]},
    {label:'Sit. 2',title:'Trouver une pharmacie',img:'💊',dialogue:[
      {s:'Marc',fr:'Pardon, il y a une pharmacie près d\'ici ?',es:'Disculpá, ¿hay una farmacia cerca?',side:'left'},
      {s:'Chico',fr:'Oui. Descends cette rue et tourne à droite.',es:'Sí. Bajá esta calle y doblá a la derecha. (forma informal)',side:'right'},
      {s:'Marc',fr:'Après la banque ?',es:'¿Después del banco?',side:'left'},
      {s:'Chico',fr:'Oui, exactement. C\'est la porte verte.',es:'Sí, exacto. Es la puerta verde.',side:'right'},
      {s:'Marc',fr:'Elle est ouverte maintenant ?',es:'¿Está abierta ahora?',side:'left'},
      {s:'Chico',fr:'Oui, je crois que oui.',es:'Sí, creo que sí.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Trouver un supermarché',img:'🛒',dialogue:[
      {s:'Julie',fr:'Pardon, il y a un supermarché ici ?',es:'Disculpe, ¿hay un supermercado acá?',side:'left'},
      {s:'Señor',fr:'Oui, il est en face, à côté du kiosque.',es:'Sí, está enfrente, al lado del kiosco.',side:'right'},
      {s:'Julie',fr:'À droite ou à gauche ?',es:'¿A la derecha o a la izquierda?',side:'left'},
      {s:'Señor',fr:'À droite. Il est très grand.',es:'A la derecha. Es muy grande.',side:'right'},
      {s:'Julie',fr:'Parfait ! Merci.',es:'¡Perfecto! Gracias.',side:'left'},
      {s:'Señor',fr:'De rien, bonne journée !',es:'¡De nada, buen día!',side:'right'}
    ]}
   ],
   vocab:['Pardon / Excuse-moi = Disculpá / Disculpe','Où est... ? = ¿Dónde está...?','Tout droit = Todo recto','À gauche = A la izquierda','À droite = A la derecha','Près = Cerca','Le pâté de maisons = La cuadra'],
   quiz:[
    {q:'¿Cómo se dice "Todo recto" en francés?',opts:['À droite','À gauche','Tout droit','En face'],ans:2},
    {q:'¿Cómo se dice "Disculpá / Perdón" en francés?',opts:['Merci','S\'il te plaît','Pardon / Excuse-moi','Au revoir'],ans:2},
    {q:'¿Cómo se dice "A la izquierda" en francés?',opts:['Tout droit','À droite','Derrière','À gauche'],ans:3}
   ]},

  /* 4 ── Au café / bar */
  {id:'bar2',level:2,emoji:'☕',name:'En el café / bar',sub:'Commander au café / Pedir en un café francés',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Commande simple',img:'☕',dialogue:[
      {s:'Cliente',fr:'Bonjour ! Un café au lait, s\'il vous plaît.',es:'¡Hola! Un café con leche, por favor.',side:'left'},
      {s:'Mozo',fr:'Noir ou au lait ?',es:'¿Solo o con leche?',side:'right'},
      {s:'Cliente',fr:'Au lait, s\'il vous plaît.',es:'Con leche, por favor.',side:'left'},
      {s:'Mozo',fr:'Tu veux du sucre ?',es:'¿Querés azúcar? (forma informal)',side:'right'},
      {s:'Cliente',fr:'Oui, un. C\'est combien ?',es:'Sí, uno. ¿Cuánto sale? (forma argentina)',side:'left'},
      {s:'Mozo',fr:'C\'est cinq euros.',es:'Son cinco euros.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Commander des croissants',img:'🥐',dialogue:[
      {s:'Mozo',fr:'Qu\'est-ce que vous prenez ?',es:'¿Qué van a tomar?',side:'right'},
      {s:'Clara',fr:'Une bière, s\'il vous plaît.',es:'Una cerveza, por favor.',side:'left'},
      {s:'Tomás',fr:'Et moi, une eau. Vous avez des croissants ?',es:'Y yo, un agua. ¿Tienen medialunas? (los croissants franceses se parecen a las medialunas argentinas)',side:'right'},
      {s:'Mozo',fr:'Oui. Il y en a au beurre et nature.',es:'Sí. Hay de manteca y simples.',side:'right'},
      {s:'Clara',fr:'Parfait ! Au beurre, s\'il vous plaît.',es:'¡Perfecto! De manteca, por favor.',side:'left'},
      {s:'Mozo',fr:'Je vous les apporte tout de suite !',es:'¡Ya les traigo!',side:'right'}
    ]},
    {label:'Sit. 3',title:'Payer l\'addition',img:'🧾',dialogue:[
      {s:'Cliente',fr:'Garçon ! L\'addition, s\'il vous plaît.',es:'¡Mozo! La cuenta, por favor.',side:'left'},
      {s:'Mozo',fr:'C\'est vingt euros.',es:'Son veinte euros.',side:'right'},
      {s:'Cliente',fr:'On peut payer par carte ?',es:'¿Se puede pagar con tarjeta?',side:'left'},
      {s:'Mozo',fr:'Oui, bien sûr. Ou en espèces si vous voulez.',es:'Sí, claro. O en efectivo si querés.',side:'right'},
      {s:'Cliente',fr:'Je paie par carte. Merci.',es:'Pago con tarjeta. Gracias.',side:'left'},
      {s:'Mozo',fr:'Merci à vous ! Bonne journée !',es:'¡Gracias a usted! ¡Buen día!',side:'right'}
    ]}
   ],
   vocab:['Un café au lait = Un café con leche','Un café noir = Un café solo','C\'est combien ? = ¿Cuánto sale? / ¿Cuánto es?','L\'addition = La cuenta','On peut payer par carte ? = ¿Se puede pagar con tarjeta?','Les croissants = Las medialunas (equivalente)','Le serveur = El mozo'],
   quiz:[
    {q:'¿Cómo se dice "Un café solo" en francés?',opts:['Un café au lait','Un café noisette','Un café noir','Un déca'],ans:2},
    {q:'¿Cómo se dice "La cuenta, por favor" en francés?',opts:['Le menu, s\'il vous plaît','L\'addition, s\'il vous plaît','Un café, s\'il vous plaît','L\'eau, s\'il vous plaît'],ans:1},
    {q:'¿Cómo se dice "¿Cuánto sale?" en francés?',opts:['Où est-ce ?','Qu\'est-ce que c\'est ?','C\'est combien ?','Comment ça s\'appelle ?'],ans:2}
   ]},

  /* 5 ── Au restaurant */
  {id:'resto2',level:2,emoji:'🍽️',name:'En el restaurante',sub:'Commander un repas / Pedir comida en un restaurante francés',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Avoir une table',img:'🪑',dialogue:[
      {s:'Cliente',fr:'Bonjour, vous avez une table pour deux ?',es:'Hola, ¿tienen mesa para dos?',side:'left'},
      {s:'Moza',fr:'Oui, par ici, s\'il vous plaît.',es:'Sí, por acá, por favor.',side:'right'},
      {s:'Cliente',fr:'Merci. Vous avez le menu du jour ?',es:'Gracias. ¿Tienen menú del día?',side:'left'},
      {s:'Moza',fr:'Oui. Aujourd\'hui il y a soupe, poulet et dessert.',es:'Sí. Hoy hay sopa, pollo y postre.',side:'right'},
      {s:'Cliente',fr:'Le menu coûte combien ?',es:'¿Cuánto sale el menú? (forma argentina)',side:'left'},
      {s:'Moza',fr:'Vingt-cinq euros, boisson comprise.',es:'Veinticinco euros, bebida incluida.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Commander à table',img:'🥗',dialogue:[
      {s:'Mozo',fr:'Vous êtes prêts à commander ?',es:'¿Están listos para pedir?',side:'right'},
      {s:'Sophie',fr:'Oui. En entrée, une salade.',es:'Sí. De entrada, una ensalada.',side:'left'},
      {s:'Mozo',fr:'Et en plat ?',es:'¿Y de principal?',side:'right'},
      {s:'Sophie',fr:'Le poulet. Vous avez quelque chose sans viande ?',es:'El pollo. ¿Tienen algo sin carne?',side:'left'},
      {s:'Mozo',fr:'Oui, il y a des légumes grillés.',es:'Sí, hay verduras a la plancha.',side:'right'},
      {s:'Sophie',fr:'Parfait, c\'est ça que je veux.',es:'Perfecto, eso quiero.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Un problème avec la commande',img:'🤔',dialogue:[
      {s:'Cliente',fr:'Pardon, ce n\'est pas ce que j\'ai commandé.',es:'Disculpá, esto no es lo que pedí.',side:'left'},
      {s:'Mozo',fr:'Je suis désolé. Qu\'est-ce que vous avez commandé ?',es:'Lo siento. ¿Qué pediste?',side:'right'},
      {s:'Cliente',fr:'J\'ai commandé le poisson, pas la viande.',es:'Pedí el pescado, no la carne.',side:'left'},
      {s:'Mozo',fr:'Excusez-moi, je le change tout de suite.',es:'Perdoná, ahora mismo lo cambio.',side:'right'},
      {s:'Cliente',fr:'Merci.',es:'Gracias.',side:'left'},
      {s:'Mozo',fr:'Vraiment désolé !',es:'¡Disculpá mucho!',side:'right'}
    ]}
   ],
   vocab:['Vous avez une table pour deux ? = ¿Tienen mesa para dos?','Le menu du jour = El menú del día','En entrée = De entrada','En plat = De principal','Sans viande = Sin carne','Boisson comprise = Bebida incluida','C\'est combien ? = ¿Cuánto sale?'],
   quiz:[
    {q:'¿Cómo se dice "De principal" en francés?',opts:['En dessert','En plat','À boire','En entrée'],ans:1},
    {q:'¿Cómo se dice "De entrada" en francés?',opts:['En dessert','En second','À boire','En entrée'],ans:3},
    {q:'¿Cómo se dice "Sin carne" en francés?',opts:['Avec de la viande','Sans poisson','Sans viande','Avec du poulet'],ans:2}
   ]},

  /* 6 ── Faire des courses */
  {id:'compras2',level:2,emoji:'🛍️',name:'De compras',sub:'Acheter des choses / Hacer las compras en francés',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Au marché',img:'🧺',dialogue:[
      {s:'Cliente',fr:'Bonjour. Combien coûtent les tomates ?',es:'Buen día. ¿Cuánto salen los tomates? (forma argentina)',side:'left'},
      {s:'Verdulero',fr:'Deux euros le kilo.',es:'Dos euros el kilo.',side:'right'},
      {s:'Cliente',fr:'Je veux un kilo, s\'il vous plaît.',es:'Quiero un kilo, por favor.',side:'left'},
      {s:'Verdulero',fr:'Autre chose ?',es:'¿Algo más?',side:'right'},
      {s:'Cliente',fr:'Oui, vous avez des oranges ?',es:'Sí, ¿tiene naranjas?',side:'left'},
      {s:'Verdulero',fr:'Oui. C\'est un euro le kilo.',es:'Sí. Es un euro el kilo.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Dans un magasin de vêtements',img:'👗',dialogue:[
      {s:'Vendedora',fr:'Bonjour ! Je peux vous aider ?',es:'¡Hola! ¿Te puedo ayudar?',side:'right'},
      {s:'Lucie',fr:'Oui, je cherche un t-shirt.',es:'Sí, busco una remera.',side:'left'},
      {s:'Vendedora',fr:'Vous faites quelle taille ?',es:'¿Qué talle usás? (forma argentina)',side:'right'},
      {s:'Lucie',fr:'La taille moyenne.',es:'El talle mediano.',side:'left'},
      {s:'Vendedora',fr:'Vous voulez l\'essayer ? La cabine est là.',es:'¿Te la querés probar? El probador está acá.',side:'right'},
      {s:'Lucie',fr:'Merci ! Il coûte combien ?',es:'¡Gracias! ¿Cuánto sale?',side:'left'}
    ]},
    {label:'Sit. 3',title:'À la caisse',img:'🛒',dialogue:[
      {s:'Cajero',fr:'Bonjour ! Tout va bien ?',es:'¡Hola! ¿Todo bien?',side:'right'},
      {s:'Cliente',fr:'Oui, merci. C\'est combien en tout ?',es:'Sí, gracias. ¿Cuánto es todo?',side:'left'},
      {s:'Cajero',fr:'C\'est quarante-cinq euros.',es:'Son cuarenta y cinco euros.',side:'right'},
      {s:'Cliente',fr:'Je peux payer par carte ?',es:'¿Puedo pagar con tarjeta?',side:'left'},
      {s:'Cajero',fr:'Oui, sans problème.',es:'Sí, sin problema.',side:'right'},
      {s:'Cliente',fr:'Voilà. Merci !',es:'Acá tiene. ¡Gracias!',side:'left'}
    ]}
   ],
   vocab:['C\'est combien ? = ¿Cuánto sale? / ¿Cuánto es?','Je veux = Quiero','Autre chose ? = ¿Algo más?','Je cherche = Busco','La taille = El talle','La cabine d\'essayage = El probador','Le t-shirt = La remera'],
   quiz:[
    {q:'¿Cómo se dice "Busco" en francés?',opts:['J\'ai','Je veux','Je cherche','J\'achète'],ans:2},
    {q:'¿Cómo se dice "¿Algo más?" en francés?',opts:['C\'est tout ?','Autre chose ?','Vous avez ça ?','C\'est combien ?'],ans:1},
    {q:'¿Cómo se dice "El talle" (de una prenda) en francés?',opts:['La couleur','Le prix','La taille','Le numéro'],ans:2}
   ]},

  /* 7 ── Prendre les transports */
  {id:'transp2',level:2,emoji:'🚌',name:'El transporte',sub:'Prendre le métro et le bus / Los transportes en francés',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans le métro',img:'🚇',dialogue:[
      {s:'Viajero',fr:'Pardon, ce métro va au centre ?',es:'Disculpá, ¿este subte va al centro? (forma argentina)',side:'left'},
      {s:'Señora',fr:'Non. Tu dois prendre la ligne A.',es:'No. Tenés que tomar la línea A. (forma informal)',side:'right'},
      {s:'Viajero',fr:'Où est la ligne A ?',es:'¿Dónde está la línea A?',side:'left'},
      {s:'Señora',fr:'Là-bas, à droite.',es:'Ahí, a la derecha.',side:'right'},
      {s:'Viajero',fr:'C\'est combien d\'arrêts ?',es:'¿Cuántas paradas son?',side:'left'},
      {s:'Señora',fr:'Quatre arrêts. Tu descends à Châtelet.',es:'Cuatro paradas. Bajás en Châtelet.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Acheter un billet',img:'🎫',dialogue:[
      {s:'Viajero',fr:'Bonjour, je veux un billet, s\'il vous plaît.',es:'Hola, quiero un pasaje, por favor.',side:'left'},
      {s:'Empleada',fr:'Simple ou recharge de la carte Navigo ?',es:'¿Sencillo o recarga de la tarjeta Navigo? (equivalente a la SUBE)',side:'right'},
      {s:'Viajero',fr:'Combien coûte le billet ?',es:'¿Cuánto sale el pasaje?',side:'left'},
      {s:'Empleada',fr:'Deux euros. La carte Navigo est plus avantageuse.',es:'Dos euros. La tarjeta Navigo conviene más.',side:'right'},
      {s:'Viajero',fr:'Comment j\'obtiens la carte Navigo ?',es:'¿Cómo consigo la tarjeta Navigo?',side:'left'},
      {s:'Empleada',fr:'Au kiosque en face.',es:'En el kiosco de enfrente.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Dans le bus',img:'🚌',dialogue:[
      {s:'Pasajero',fr:'Pardon, ce bus va à Montmartre ?',es:'Disculpá, ¿este colectivo va a Montmartre? (forma argentina)',side:'left'},
      {s:'Señor',fr:'Non, celui-ci va à République.',es:'No, este va a República.',side:'right'},
      {s:'Pasajero',fr:'Quel bus va à Montmartre ?',es:'¿Qué colectivo va a Montmartre?',side:'left'},
      {s:'Señor',fr:'Le 30.',es:'El 30.',side:'right'},
      {s:'Pasajero',fr:'Où est l\'arrêt ?',es:'¿Dónde está la parada?',side:'left'},
      {s:'Señor',fr:'Il est au coin, de l\'autre côté de la rue.',es:'Está en la esquina, del otro lado de la calle.',side:'right'}
    ]}
   ],
   vocab:['Prendre le métro = Tomar el subte','Le bus = El colectivo / El bondi','L\'arrêt = La parada','Le billet = El pasaje','Descendre à = Bajar en','Combien d\'arrêts ? = ¿Cuántas paradas?','La carte Navigo = La SUBE francesa'],
   quiz:[
    {q:'¿Cómo se dice "Tomar el subte" en francés?',opts:['Aller au métro','Prendre le métro','Descendre du métro','Chercher le métro'],ans:1},
    {q:'¿Cómo se dice "La parada" en francés?',opts:['Le billet','La ligne','L\'arrêt','Le quai'],ans:2},
    {q:'¿Cómo se dice "El colectivo / bondi" en francés?',opts:['Le tram','Le train','Le bus','Le métro'],ans:2}
   ]},

  /* 8 ── À la pharmacie */
  {id:'farmacia2',level:2,emoji:'💊',name:'En la farmacia',sub:'Acheter des médicaments / En la farmacia en Francia',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Mal de tête',img:'🤕',dialogue:[
      {s:'Cliente',fr:'Bonjour. J\'ai mal à la tête. Qu\'est-ce que vous avez ?',es:'Hola. Me duele la cabeza. ¿Qué tenés? (forma informal)',side:'left'},
      {s:'Farmacéutica',fr:'Vous êtes allergique à un médicament ?',es:'¿Sos alérgico a algún remedio? (forma argentina)',side:'right'},
      {s:'Cliente',fr:'Non, je ne suis pas allergique.',es:'No, no soy alérgico.',side:'left'},
      {s:'Farmacéutica',fr:'Je vous donne un ibuprofène. Prenez-en un avec de la nourriture.',es:'Te doy un ibuprofeno. Tomá uno con comida.',side:'right'},
      {s:'Cliente',fr:'Combien de fois par jour ?',es:'¿Cuántas veces por día?',side:'left'},
      {s:'Farmacéutica',fr:'Trois fois par jour, maximum.',es:'Tres veces por día, máximo.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Pharmacie de garde',img:'🌙',dialogue:[
      {s:'Turista',fr:'Pardon, il y a une pharmacie ouverte maintenant ?',es:'Disculpá, ¿hay una farmacia abierta ahora?',side:'left'},
      {s:'Vecina',fr:'Les pharmacies sont fermées. Vous avez besoin de la pharmacie de garde.',es:'Las farmacias están cerradas. Necesitás la farmacia de turno. (forma argentina)',side:'right'},
      {s:'Turista',fr:'Elle est où ?',es:'¿Dónde está?',side:'left'},
      {s:'Vecina',fr:'Regardez l\'affiche de cette pharmacie. Elle indique laquelle est de garde.',es:'Mirá el cartel de esta farmacia. Dice cuál está de turno.',side:'right'},
      {s:'Turista',fr:'Ah, je comprends ! Merci.',es:'¡Ah, entiendo! Gracias.',side:'left'},
      {s:'Vecina',fr:'De rien !',es:'¡De nada!',side:'right'}
    ]},
    {label:'Sit. 3',title:'Acheter un médicament',img:'💉',dialogue:[
      {s:'Cliente',fr:'Bonjour. Vous avez quelque chose pour la toux ?',es:'Hola. ¿Tenés algo para la tos? (forma informal)',side:'left'},
      {s:'Farmacéutico',fr:'Oui. C\'est pour un adulte ou un enfant ?',es:'Sí. ¿Es para adulto o para chico? (chico = niño en Argentina)',side:'right'},
      {s:'Cliente',fr:'Pour un adulte.',es:'Para adulto.',side:'left'},
      {s:'Farmacéutico',fr:'Prenez ce sirop. Deux cuillères, trois fois par jour.',es:'Tomá este jarabe. Dos cucharadas, tres veces por día.',side:'right'},
      {s:'Cliente',fr:'Ça coûte combien ?',es:'¿Cuánto sale?',side:'left'},
      {s:'Farmacéutico',fr:'Huit euros.',es:'Ocho euros.',side:'right'}
    ]}
   ],
   vocab:['J\'ai mal à la tête = Me duele la cabeza','J\'ai mal à la gorge = Me duele la garganta','La pharmacie de garde = La farmacia de turno','Le médicament = El remedio','Le sirop = El jarabe','Trois fois par jour = Tres veces por día','L\'enfant = El chico / la chica'],
   quiz:[
    {q:'¿Cómo se dice "Me duele la cabeza" en francés?',opts:['J\'ai froid','J\'ai mal au ventre','J\'ai mal à la tête','Je suis fatigué'],ans:2},
    {q:'¿Cómo se dice "La farmacia de turno" en francés?',opts:['La grande pharmacie','La pharmacie de garde','La pharmacie de l\'hôpital','La pharmacie pour touristes'],ans:1},
    {q:'¿Cómo se dice "El chico / la chica" (niño/a) en francés?',opts:['Le mineur','L\'enfant','Le bébé','Le jeune'],ans:1}
   ]},

  /* 9 ── À l'hôtel */
  {id:'hotel2',level:2,emoji:'🏨',name:'En el hotel',sub:'Arriver à l\'hôtel / Llegar a un hotel en Francia',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Arrivée à la réception',img:'🛎️',dialogue:[
      {s:'Recepcionista',fr:'Bonsoir ! Vous avez une réservation ?',es:'¡Buenas noches! ¿Tenés reserva? (forma informal)',side:'right'},
      {s:'Huésped',fr:'Oui. Je m\'appelle Dupont. Une chambre double.',es:'Sí. Me llamo Dupont. Una habitación doble.',side:'left'},
      {s:'Recepcionista',fr:'Voilà. Votre passeport, s\'il vous plaît ?',es:'Acá está. ¿Su pasaporte, por favor?',side:'right'},
      {s:'Huésped',fr:'Voilà. Le petit-déjeuner est inclus ?',es:'Acá tiene. ¿El desayuno está incluido?',side:'left'},
      {s:'Recepcionista',fr:'Oui, de sept à dix heures.',es:'Sí, de siete a diez.',side:'right'},
      {s:'Huésped',fr:'Parfait ! Merci.',es:'¡Perfecto! Gracias.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Un problème dans la chambre',img:'🔧',dialogue:[
      {s:'Huésped',fr:'Bonjour. Il y a un problème dans ma chambre.',es:'Hola. Hay un problema en mi habitación.',side:'left'},
      {s:'Recepcionista',fr:'Qu\'est-ce qui se passe ?',es:'¿Qué pasó? (forma argentina)',side:'right'},
      {s:'Huésped',fr:'La climatisation ne fonctionne pas.',es:'El aire acondicionado no funciona.',side:'left'},
      {s:'Recepcionista',fr:'Je suis désolé. Vous voulez changer de chambre ?',es:'Lo siento. ¿Querés cambiar de habitación? (forma informal)',side:'right'},
      {s:'Huésped',fr:'Oui, s\'il vous plaît.',es:'Sí, por favor.',side:'left'},
      {s:'Recepcionista',fr:'Voilà la clé de la trois cent vingt.',es:'Acá tenés la llave de la trescientos veinte.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Demander des infos',img:'🗺️',dialogue:[
      {s:'Huésped',fr:'Pardon, il y a un restaurant près d\'ici ?',es:'Disculpá, ¿hay un restaurante cerca?',side:'left'},
      {s:'Recepcionista',fr:'Oui, il y en a un très bon à deux pâtés de maisons.',es:'Sí, hay uno muy bueno a dos cuadras.',side:'right'},
      {s:'Huésped',fr:'Et il y a des choses à visiter ici ?',es:'¿Y hay algo para visitar acá?',side:'left'},
      {s:'Recepcionista',fr:'Oui, le musée est très près.',es:'Sí, el museo está muy cerca.',side:'right'},
      {s:'Huésped',fr:'Il est ouvert aujourd\'hui ?',es:'¿Está abierto hoy?',side:'left'},
      {s:'Recepcionista',fr:'Oui, de neuf heures à dix-huit heures.',es:'Sí, de las nueve a las seis.',side:'right'}
    ]}
   ],
   vocab:['Vous avez une réservation ? = ¿Tenés reserva?','La chambre double = La habitación doble','Le petit-déjeuner inclus = El desayuno incluido','Ça ne fonctionne pas = No funciona','Changer de chambre = Cambiar de habitación','La clé = La llave','Le pâté de maisons = La cuadra'],
   quiz:[
    {q:'¿Cómo se dice "La habitación doble" en francés?',opts:['La chambre simple','La chambre double','La suite','La chambre familiale'],ans:1},
    {q:'¿Cómo se dice "No funciona" en francés?',opts:['C\'est fermé','Ça ne fonctionne pas','C\'est cassé','Je ne sais pas'],ans:1},
    {q:'¿Cómo se dice "La llave" en francés?',opts:['La porte','La fenêtre','La clé','L\'ascenseur'],ans:2}
   ]},

  /* 10 ── Chez le médecin */
  {id:'medico2',level:2,emoji:'🩺',name:'En el médico',sub:'Expliquer ce qui ne va pas / En el médico en Francia',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Expliquer ses symptômes',img:'🤒',dialogue:[
      {s:'Médico',fr:'Bonjour ! Qu\'est-ce qui ne va pas ?',es:'¡Buenos días! ¿Qué te pasa?',side:'right'},
      {s:'Paciente',fr:'J\'ai de la fièvre et j\'ai mal à la gorge.',es:'Tengo fiebre y me duele la garganta.',side:'left'},
      {s:'Médico',fr:'Depuis quand ?',es:'¿Desde cuándo?',side:'right'},
      {s:'Paciente',fr:'Depuis hier.',es:'Desde ayer.',side:'left'},
      {s:'Médico',fr:'Vous avez aussi de la toux ?',es:'¿Tenés tos también? (forma informal)',side:'right'},
      {s:'Paciente',fr:'Oui, un peu.',es:'Sí, un poco.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Comprendre le médecin',img:'💊',dialogue:[
      {s:'Médico',fr:'Vous avez une infection. Je vous prescris un antibiotique.',es:'Tenés una infección. Te receto un antibiótico.',side:'right'},
      {s:'Paciente',fr:'Quand est-ce que je prends le médicament ?',es:'¿Cuándo tomo el remedio? (forma argentina)',side:'left'},
      {s:'Médico',fr:'Un le matin et un le soir.',es:'Uno a la mañana y uno a la noche.',side:'right'},
      {s:'Paciente',fr:'Pendant combien de jours ?',es:'¿Por cuántos días?',side:'left'},
      {s:'Médico',fr:'Sept jours. Et buvez beaucoup d\'eau.',es:'Siete días. Y tomá mucha agua.',side:'right'},
      {s:'Paciente',fr:'Merci, docteur.',es:'Gracias, doctor.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Prendre un rendez-vous',img:'📞',dialogue:[
      {s:'Paciente',fr:'Bonjour, je veux prendre un rendez-vous avec le médecin.',es:'Hola, quiero sacar un turno con el médico. (forma argentina)',side:'left'},
      {s:'Recepcionista',fr:'Pour quand ?',es:'¿Para cuándo?',side:'right'},
      {s:'Paciente',fr:'Pour aujourd\'hui si c\'est possible. Je suis très malade.',es:'Para hoy si se puede. Estoy muy mal.',side:'left'},
      {s:'Recepcionista',fr:'Vous avez de la fièvre ?',es:'¿Tenés fiebre?',side:'right'},
      {s:'Paciente',fr:'Oui, trente-neuf degrés.',es:'Sí, treinta y nueve grados.',side:'left'},
      {s:'Recepcionista',fr:'Venez à seize heures. Apportez votre carte d\'identité.',es:'Vení a las cuatro. Traé el documento.',side:'right'}
    ]}
   ],
   vocab:['Qu\'est-ce qui ne va pas ? = ¿Qué te pasa?','J\'ai de la fièvre = Tengo fiebre','J\'ai mal à la gorge = Me duele la garganta','Depuis hier = Desde ayer','La toux = La tos','Prendre un rendez-vous = Sacar un turno','Le médicament = El remedio'],
   quiz:[
    {q:'¿Cómo se dice "Tengo fiebre" en francés?',opts:['J\'ai froid','J\'ai de la fièvre','J\'ai la toux','J\'ai une douleur'],ans:1},
    {q:'¿Cómo se dice "Me duele la garganta" en francés?',opts:['J\'ai mal à la tête','J\'ai mal au ventre','J\'ai mal à la gorge','J\'ai mal au dos'],ans:2},
    {q:'¿Cómo se dice "Sacar un turno" en francés?',opts:['Faire une visite','Prendre un rendez-vous','Appeler le médecin','Aller à l\'hôpital'],ans:1}
   ]},

  /* 11 ── La météo */
  {id:'meteo2',level:2,emoji:'☀️',name:'El tiempo',sub:'Parler de la météo / Hablar del tiempo en francés',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Parler du temps',img:'🌤️',dialogue:[
      {s:'Marta',fr:'Quelle chaleur aujourd\'hui !',es:'¡Qué calor hace hoy!',side:'left'},
      {s:'Romain',fr:'Oui, il fait très chaud. Il fait combien de degrés ?',es:'Sí, hace mucho calor. ¿Cuántos grados son?',side:'right'},
      {s:'Marta',fr:'Trente-cinq degrés.',es:'Treinta y cinco grados.',side:'left'},
      {s:'Romain',fr:'C\'est beaucoup ! Il y a une piscine ici ?',es:'¡Es mucho! ¿Hay pileta acá? (pileta = piscina en Argentina)',side:'right'},
      {s:'Marta',fr:'Oui, elle est dans le complexe.',es:'Sí, está en el complejo.',side:'left'},
      {s:'Romain',fr:'Allons-y !',es:'¡Vamos!',side:'right'}
    ]},
    {label:'Sit. 2',title:'Prévoir la sortie',img:'🌧️',dialogue:[
      {s:'Luis',fr:'On sort aujourd\'hui ?',es:'¿Salimos hoy?',side:'left'},
      {s:'Camille',fr:'Je ne sais pas. Il fait quel temps ?',es:'No sé. ¿Qué tiempo hace?',side:'right'},
      {s:'Luis',fr:'Il pleut un peu.',es:'Está lloviendo un poco.',side:'left'},
      {s:'Camille',fr:'Tu as un parapluie ?',es:'¿Tenés paraguas? (forma informal)',side:'right'},
      {s:'Luis',fr:'Non. Et toi ?',es:'No. ¿Y vos?',side:'left'},
      {s:'Camille',fr:'Moi oui. Allons-y ensemble !',es:'Yo sí. ¡Vamos juntos!',side:'right'}
    ]},
    {label:'Sit. 3',title:'Parler des saisons',img:'🍂',dialogue:[
      {s:'Sara',fr:'Quelle est ta saison préférée ?',es:'¿Cuál es tu estación favorita?',side:'right'},
      {s:'Théo',fr:'L\'été. J\'aime le soleil et la chaleur.',es:'El verano. Me gusta el sol y el calor.',side:'left'},
      {s:'Sara',fr:'Moi je préfère l\'automne. Il ne fait ni chaud ni froid.',es:'Yo prefiero el otoño. No hace ni frío ni calor.',side:'right'},
      {s:'Théo',fr:'Et en France ? Il fait très froid en hiver ?',es:'¿Y en Francia? ¿Hace mucho frío en invierno?',side:'left'},
      {s:'Sara',fr:'Ça dépend. À Paris oui, dans le sud non.',es:'Depende. En París sí, en el sur no.',side:'right'},
      {s:'Théo',fr:'Comme c\'est intéressant !',es:'¡Qué interesante!',side:'left'}
    ]}
   ],
   vocab:['Quelle chaleur ! = ¡Qué calor!','Il fait froid = Hace frío','Il fait chaud = Hace calor','Il pleut = Está lloviendo','Le parapluie = El paraguas','La piscine = La pileta','L\'été = El verano'],
   quiz:[
    {q:'¿Cómo se dice "Hace frío" en francés?',opts:['Il fait chaud','Il y a du soleil','Il pleut','Il fait froid'],ans:3},
    {q:'¿Cómo se dice "¡Qué calor!" en francés?',opts:['Quelle chance !','Quelle chaleur !','Quel froid !','Quel vent !'],ans:1},
    {q:'¿Cómo se dice "La pileta" en francés?',opts:['La plage','Le lac','La piscine','La rivière'],ans:2}
   ]},

  /* 12 ── Trouver un logement */
  {id:'logement2',level:2,emoji:'🏠',name:'Buscar departamento',sub:'Chercher un logement / Alquilar un departamento en Francia',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Appeler pour un appartement',img:'📱',dialogue:[
      {s:'Cliente',fr:'Bonjour, j\'appelle pour l\'appartement en location.',es:'Hola, llamo por el departamento en alquiler.',side:'left'},
      {s:'Propietario',fr:'Oui. Pour combien de personnes ?',es:'Sí. ¿Para cuántas personas?',side:'right'},
      {s:'Cliente',fr:'Pour une personne. Le loyer c\'est combien ?',es:'Para una persona. ¿Cuánto es el alquiler?',side:'left'},
      {s:'Propietario',fr:'Sept cents euros par mois.',es:'Setecientos euros al mes.',side:'right'},
      {s:'Cliente',fr:'Les charges sont incluses ?',es:'¿Las expensas están incluidas? (expensas = charges en Argentina)',side:'left'},
      {s:'Propietario',fr:'Non, les charges sont en plus.',es:'No, las expensas son aparte.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Visiter l\'appartement',img:'🔑',dialogue:[
      {s:'Propietario',fr:'Le salon est grand et très lumineux.',es:'El living es amplio y tiene mucha luz. (living = salón en Argentina)',side:'right'},
      {s:'Cliente',fr:'J\'aime bien ! Il a combien de chambres ?',es:'¡Me gusta! ¿Cuántos cuartos tiene? (cuartos = forma argentina)',side:'left'},
      {s:'Propietario',fr:'Deux chambres et une salle de bain.',es:'Dos cuartos y un baño.',side:'right'},
      {s:'Cliente',fr:'Il y a le chauffage ?',es:'¿Hay calefacción?',side:'left'},
      {s:'Propietario',fr:'Oui, il y a le chauffage central.',es:'Sí, hay calefacción central.',side:'right'},
      {s:'Cliente',fr:'Je peux réfléchir ?',es:'¿Puedo pensarlo?',side:'left'}
    ]},
    {label:'Sit. 3',title:'Un problème dans l\'appartement',img:'🔧',dialogue:[
      {s:'Inquilino',fr:'Bonjour, il y a un problème. L\'eau ne fonctionne pas.',es:'Hola, hay un problema. El agua no funciona.',side:'left'},
      {s:'Propietario',fr:'Depuis quand ?',es:'¿Desde cuándo?',side:'right'},
      {s:'Inquilino',fr:'Depuis ce matin.',es:'Desde esta mañana.',side:'left'},
      {s:'Propietario',fr:'Je vais appeler le plombier maintenant.',es:'Voy a llamar al plomero ahora. (plomero = forma argentina)',side:'right'},
      {s:'Inquilino',fr:'Il vient aujourd\'hui ?',es:'¿Va a venir hoy?',side:'left'},
      {s:'Propietario',fr:'Oui, je crois que oui.',es:'Sí, creo que sí.',side:'right'}
    ]}
   ],
   vocab:['Le loyer = El alquiler','Les charges = Las expensas','L\'appartement = El departamento','Le salon = El living','Les chambres = Los cuartos','Le plombier = El plomero','Les charges sont en plus = Las expensas son aparte'],
   quiz:[
    {q:'¿Cómo se dice "Las expensas son aparte" en francés?',opts:['Tout compris','Les charges sont incluses','Les charges sont en plus','C\'est gratuit'],ans:2},
    {q:'¿Cómo se dice "El plomero" en francés?',opts:['L\'électricien','Le plombier','Le charpentier','Le peintre'],ans:1},
    {q:'¿Cómo se dice "El departamento" en francés?',opts:['La maison','L\'entrée','L\'appartement','La chambre'],ans:2}
   ]},

  /* 13 ── Parler de ses goûts */
  {id:'gustos2',level:2,emoji:'❤️',name:'Gustos y aficiones',sub:'Parler de ce qu\'on aime / Hablar de gustos en francés',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Parler de musique',img:'🎵',dialogue:[
      {s:'Lucía',fr:'Tu aimes la musique ?',es:'¿Te gusta la música?',side:'right'},
      {s:'Paul',fr:'Oui, beaucoup. J\'aime le rock.',es:'Sí, mucho. Me gusta el rock.',side:'left'},
      {s:'Lucía',fr:'Et la chanson française ?',es:'¿Y la canción francesa?',side:'right'},
      {s:'Paul',fr:'Aussi, mais je ne connais pas beaucoup.',es:'También, pero no conozco mucho.',side:'left'},
      {s:'Lucía',fr:'Il y a un spectacle ce soir ! Tu viens ?',es:'¡Hay un espectáculo esta noche! ¿Venís? (forma informal)',side:'right'},
      {s:'Paul',fr:'Oui ! Ça commence à quelle heure ?',es:'¡Sí! ¿A qué hora empieza?',side:'left'}
    ]},
    {label:'Sit. 2',title:'Parler de sport',img:'⚽',dialogue:[
      {s:'Diego',fr:'Tu pratiques un sport ?',es:'¿Practicás algún deporte? (forma informal)',side:'left'},
      {s:'Claire',fr:'Oui, j\'aime beaucoup le football.',es:'Sí, me gusta mucho el fútbol.',side:'right'},
      {s:'Diego',fr:'Vraiment ? Moi aussi ! Tu regardes le match ce soir ?',es:'¿En serio? ¡Yo también! ¿Ves el partido esta noche?',side:'left'},
      {s:'Claire',fr:'Oui. Tu joues au football aussi ?',es:'Sí. ¿Jugás al fútbol también? (forma informal)',side:'right'},
      {s:'Diego',fr:'Oui, le dimanche avec des amis.',es:'Sí, los domingos con amigos.',side:'left'},
      {s:'Claire',fr:'Super !',es:'¡Qué piola! (expresión argentina)',side:'right'}
    ]},
    {label:'Sit. 3',title:'Proposer une activité',img:'🎬',dialogue:[
      {s:'Ana',fr:'Tu fais quoi cet après-midi ?',es:'¿Qué hacés esta tarde? (forma informal)',side:'left'},
      {s:'Marc',fr:'Rien. Pourquoi ?',es:'Nada. ¿Por qué?',side:'right'},
      {s:'Ana',fr:'Tu veux aller au cinéma ?',es:'¿Querés ir al cine? (forma informal)',side:'left'},
      {s:'Marc',fr:'Oui ! Qu\'est-ce qu\'ils jouent ?',es:'¡Sí! ¿Qué dan? (forma argentina)',side:'right'},
      {s:'Ana',fr:'Un film argentin. Tu aimes le cinéma argentin ?',es:'Una película argentina. ¿Te gusta el cine argentino?',side:'left'},
      {s:'Marc',fr:'J\'adore ça ! On se retrouve à quelle heure ?',es:'¡Me encanta! ¿A qué hora quedamos?',side:'right'}
    ]}
   ],
   vocab:['J\'aime = Me gusta','Je n\'aime pas = No me gusta','J\'adore = Me encanta','Tu pratiques un sport ? = ¿Practicás algún deporte?','Le match = El partido','Qu\'est-ce qu\'ils jouent ? = ¿Qué dan? (cine)','On se retrouve à quelle heure ? = ¿A qué hora quedamos?'],
   quiz:[
    {q:'¿Cómo se dice "Me encanta" en francés?',opts:['J\'aime','Je n\'aime pas','J\'adore','Je déteste'],ans:2},
    {q:'¿Cómo se dice "¿Qué dan?" (en el cine) en francés?',opts:['Ça coûte combien ?','À quelle heure ?','Qu\'est-ce qu\'ils jouent ?','C\'est où ?'],ans:2},
    {q:'¿Cómo se dice "El partido" en francés?',opts:['Le sport','L\'équipe','Le match','Le stade'],ans:2}
   ]},

  /* 14 ── Sortir le soir */
  {id:'fiesta2',level:2,emoji:'🎉',name:'Salir de noche',sub:'Sortir le soir / Salir de noche en Francia',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Organiser une sortie',img:'🎊',dialogue:[
      {s:'Pablo',fr:'Salut ! On sort ce soir ?',es:'¡Hola! ¿Salimos esta noche?',side:'left'},
      {s:'Lea',fr:'Oui ! On va où ?',es:'¡Sí! ¿A dónde vamos? (forma argentina)',side:'right'},
      {s:'Pablo',fr:'Il y a un bar très sympa au centre.',es:'Hay un bar muy piola en el centro. (piola = expresión argentina)',side:'left'},
      {s:'Lea',fr:'Super ! À quelle heure ?',es:'¡Buenísimo! ¿A qué hora?',side:'right'},
      {s:'Pablo',fr:'À vingt-deux heures. En France on sort assez tard aussi.',es:'A las veintidós horas. En Francia también se sale bastante tarde.',side:'left'},
      {s:'Lea',fr:'D\'accord ! À plus tard !',es:'¡Dale! ¡Hasta luego! (dale = expresión argentina)',side:'right'}
    ]},
    {label:'Sit. 2',title:'Au bar le soir',img:'🍺',dialogue:[
      {s:'Marc',fr:'Cette musique est super ! On danse ?',es:'¡Esta música está muy buena! ¿Bailamos?',side:'left'},
      {s:'Inés',fr:'Oui ! J\'adore danser.',es:'¡Sí! Me encanta bailar.',side:'right'},
      {s:'Marc',fr:'Tu veux boire quelque chose ?',es:'¿Querés tomar algo? (forma informal)',side:'left'},
      {s:'Inés',fr:'Oui, une eau, s\'il te plaît. J\'ai chaud.',es:'Sí, un agua, por favor. Tengo calor.',side:'right'},
      {s:'Marc',fr:'Je reviens tout de suite !',es:'¡Ya vuelvo!',side:'left'},
      {s:'Inés',fr:'D\'accord !',es:'¡Dale! (expresión argentina)',side:'right'}
    ]},
    {label:'Sit. 3',title:'Le lendemain',img:'😴',dialogue:[
      {s:'Carla',fr:'Salut ! Tu vas bien ? Je suis rentrée tard à la maison !',es:'¡Hola! ¿Cómo estás? ¡Llegué tarde a casa!',side:'left'},
      {s:'Tom',fr:'Moi aussi ! Mais c\'était une très bonne soirée.',es:'¡Yo también! Pero fue una noche muy buena.',side:'right'},
      {s:'Carla',fr:'Oui, les gens étaient très sympas.',es:'Sí, la gente era muy copada. (copado = expresión argentina)',side:'left'},
      {s:'Tom',fr:'On mange ensemble aujourd\'hui ?',es:'¿Comemos juntos hoy?',side:'right'},
      {s:'Carla',fr:'Oui ! J\'ai besoin de manger. J\'ai très faim.',es:'¡Sí! Necesito comer. Tengo mucha hambre.',side:'left'},
      {s:'Tom',fr:'Moi aussi ! Une planche de charcuterie et fromages ?',es:'¡Yo también! ¿Una picada? (picada = tabla de fiambres y quesos en Argentina)',side:'right'}
    ]}
   ],
   vocab:['On sort ! = ¡Salimos!','On va où ? = ¿A dónde vamos?','À plus tard ! = ¡Hasta luego!','D\'accord ! = ¡Dale!','J\'ai chaud = Tengo calor','J\'ai faim = Tengo hambre','Les gens étaient sympas = La gente era copada'],
   quiz:[
    {q:'¿Cómo se dice "¡Dale!" en francés?',opts:['Au revoir !','D\'accord !','C\'est nul !','Attention !'],ans:1},
    {q:'¿Cómo se dice "Tengo hambre" en francés?',opts:['J\'ai soif','J\'ai sommeil','J\'ai froid','J\'ai faim'],ans:3},
    {q:'¿Cómo se dice "¡Qué copado!" (algo genial) en francés?',opts:['Comme c\'est bizarre !','C\'est génial !','Comme c\'est triste !','Comme c\'est grand !'],ans:1}
   ]}

];

var ALL_THEMES=LEVEL1_THEMES.concat(LEVEL2_THEMES);
