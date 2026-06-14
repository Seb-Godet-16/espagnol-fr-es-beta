/* ========================================
   Français pour Vénézuéliens 🇻🇪→🇫🇷 – Données
   Vocabulaire, quiz et dialogues
   Langue cible : FRANÇAIS | Langue source : Español venezolano
   © Juin 2026 Sébastien Godet
======================================== */

/* ── NOTES D'ADAPTATION ────────────────────────────────────────────────
   • Les cartes montrent le FRANÇAIS en face avant (langue à apprendre)
   • La traduction en espagnol vénézuélien s'affiche au dos
   • Les énoncés de quiz sont en espagnol (¿Cómo se dice…? / ¿Cuál es…?)
   • Les OPTIONS et la BONNE RÉPONSE des quiz sont en FRANÇAIS
   • Venezolanoísmosconservados dans les notes :
     ¡Chévere! / ¡Bacano! / Pana / Chamo / ¡Ahorita! / ¡Qué vaina!
   ─────────────────────────────────────────────────────────────────── */

var LEVEL1_THEMES=[
  /* ── Alfabeto ── */
  {id:'alpha',level:1,emoji:'🔤',name:'El Alfabeto francés',sub:'A, B, C… Z / L\'alphabet français',type:'alpha',
   words:[
    {es:'A (igual que en español)',fr:'a',em:'✈️'},
    {es:'B (suena "bé")',fr:'bé',em:'🎈'},
    {es:'C (suena "sé" — siempre suave en fr.)',fr:'cé',em:'☕'},
    {es:'D (suena "dé")',fr:'dé',em:'💃'},
    {es:'E (suena "e" cerrada)',fr:'e',em:'🏫'},
    {es:'F (suena "efe")',fr:'efe',em:'🌸'},
    {es:'G (suena "jé" — como el "j" suave español)',fr:'jé',em:'🚉'},
    {es:'H (muda en francés — ¡no se pronuncia!)',fr:'hache',em:'🏨'},
    {es:'I (suena "i")',fr:'i',em:'🏝️'},
    {es:'J (suena "ji" — como la "y" suave)',fr:'ji',em:'🌿'},
    {es:'K (suena "ka")',fr:'ka',em:'⚖️'},
    {es:'L (suena "ele")',fr:'ele',em:'🦁'},
    {es:'M (suena "eme")',fr:'eme',em:'🏠'},
    {es:'N (suena "ene")',fr:'ene',em:'🌙'},
    {es:'O (suena "o" redondeada)',fr:'o',em:'🐦'},
    {es:'P (suena "pé")',fr:'pé',em:'🍞'},
    {es:'Q (suena "cu" — siempre seguido de "u")',fr:'cu',em:'🏘️'},
    {es:'R (suena "erre" — gutural, distinta al español)',fr:'erre',em:'🌹'},
    {es:'S (suena "ese" — sonora entre vocales)',fr:'ese',em:'☀️'},
    {es:'T (suena "té")',fr:'té',em:'🚂'},
    {es:'U (suena "ü" — labios en "o" pero sonido "i")',fr:'u',em:'1️⃣'},
    {es:'V (igual que "b" en fr. — suena "vé")',fr:'vé',em:'🌆'},
    {es:'W (suena "doble vé" — para palabras extranjeras)',fr:'double vé',em:'🚃'},
    {es:'X (suena "ics")',fr:'ics',em:'🎵'},
    {es:'Y (suena "i grec")',fr:'i grec',em:'🥛'},
    {es:'Z (suena "zed" — como una "z" suave)',fr:'zed',em:'0️⃣'}
   ],
   quiz10:[
    {q:'¿Qué letra escuchas?',audio:'bé',opts:['a','bé','cé','dé'],ans:1},
    {q:'¿Qué letra escuchas?',audio:'jé',opts:['ji','ka','jé','hache'],ans:2},
    {q:'¿Qué letra escuchas?',audio:'hache',opts:['ene','hache','eme','ele'],ans:1},
    {q:'¿Qué letra escuchas?',audio:'erre',opts:['a','erre','ele','ene'],ans:1},
    {q:'¿Qué letra escuchas?',audio:'zed',opts:['ese','ics','zed','cé'],ans:2},
    {q:'¿Qué letra escuchas?',audio:'double vé',opts:['double vé','efe','eme','ene'],ans:0},
    {q:'¿Qué letra escuchas?',audio:'ka',opts:['cé','jé','ka','cu'],ans:2},
    {q:'¿Qué letra escuchas?',audio:'i grec',opts:['i','u','i grec','e'],ans:2},
    {q:'¿Qué letra escuchas?',audio:'u',opts:['vé','double vé','ics','u'],ans:3},
    {q:'¿Qué letra escuchas?',audio:'pé',opts:['bé','dé','pé','té'],ans:2}
   ]},

  /* ── Saludos ── */
  {id:'salut',level:1,emoji:'👋',name:'Los Saludos',sub:'Bonjour, merci… / Les salutations en français',
   words:[
    {es:'Buenos días (mañana)',fr:'Bonjour',em:'🌅'},
    {es:'Buenas tardes',fr:'Bon après-midi',em:'🌆'},
    {es:'Buenas noches',fr:'Bonsoir / Bonne nuit',em:'🌙'},
    {es:'¡Hola! (informal)',fr:'Salut !',em:'👋'},
    {es:'Adiós / Hasta luego',fr:'Au revoir / À bientôt',em:'👋'},
    {es:'Hasta pronto',fr:'À bientôt',em:'⏱️'},
    {es:'Gracias / Muchas gracias',fr:'Merci / Merci beaucoup',em:'🙏'},
    {es:'Por favor / De nada',fr:'S\'il vous plaît / De rien',em:'🤝'},
    {es:'Perdona / Disculpa',fr:'Pardon / Excusez-moi',em:'🙇'},
    {es:'¡Está bien! / ¡Chévere!',fr:'D\'accord ! / Allez !',em:'👍'},
    {es:'Sí',fr:'Oui',em:'✅'},
    {es:'No',fr:'Non',em:'❌'},
    {es:'¿Cómo estás, pana?',fr:'Comment ça va ?',em:'🤗'},
    {es:'Estoy bien, gracias',fr:'Je vais bien, merci',em:'😊'},
    {es:'Más o menos / Así así',fr:'Comme ci comme ça',em:'😐'},
    {es:'No estoy bien / Estoy medio malo',fr:'Je ne vais pas bien',em:'😔'},
    {es:'¡Qué chévere!',fr:'C\'est super ! / Génial !',em:'🌟'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Buenos días" en francés?',opts:['Bonsoir','Salut !','Bonjour','Au revoir'],ans:2},
    {q:'¿Cómo se dice "Gracias" en francés?',opts:['S\'il vous plaît','De rien','Pardon','Merci'],ans:3},
    {q:'¿Cómo se dice "Por favor" en francés?',opts:['Merci','Pardon','S\'il vous plaît','De rien'],ans:2},
    {q:'¿Cómo se dice "Adiós" en francés?',opts:['Bonjour','Au revoir','Salut !','Bonsoir'],ans:1},
    {q:'¿Cómo se dice "¿Cómo estás?" en francés?',opts:['Où es-tu ?','Comment tu t\'appelles ?','Comment ça va ?','Quel âge as-tu ?'],ans:2},
    {q:'¿Cómo se dice "Sí" en francés?',opts:['Non','Oui','Pardon','D\'accord'],ans:1},
    {q:'¿Cómo se dice "Estoy bien" en francés?',opts:['Je suis fatigué','Je ne vais pas bien','Comme ci comme ça','Je vais bien'],ans:3},
    {q:'¿Cómo se dice "¡Hola!" (informal) en francés?',opts:['Bonjour','Bonsoir','Salut !','Au revoir'],ans:2}
   ]},

  /* ── Presentarse ── */
  {id:'pres',level:1,emoji:'🙋',name:'Presentarse',sub:'Nombre, edad, país… / Se présenter en français',
   words:[
    {es:'El apellido',fr:'Le nom de famille',em:'👨‍👩‍👧'},
    {es:'El nombre / el primer nombre',fr:'Le prénom',em:'🏷️'},
    {es:'La nacionalidad',fr:'La nationalité',em:'🌍'},
    {es:'La edad',fr:'L\'âge',em:'🎂'},
    {es:'La profesión',fr:'La profession',em:'💼'},
    {es:'El país',fr:'Le pays',em:'🗺️'},
    {es:'Francés / francesa',fr:'Français(e)',em:'🇫🇷'},
    {es:'Venezolano / venezolana',fr:'Vénézuélien(ne)',em:'🇻🇪'},
    {es:'Vivo en…',fr:'J\'habite à…',em:'🏠'},
    {es:'Soy / Estoy',fr:'Je suis',em:'🧑'},
    {es:'Tengo … años',fr:'J\'ai … ans',em:'🎈'},
    {es:'Me llamo',fr:'Je m\'appelle',em:'👋'},
    {es:'¿De dónde eres, chamo?',fr:'Tu es d\'où ?',em:'🌍'},
    {es:'Soy de Caracas',fr:'Je suis de Caracas',em:'🏙️'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Me llamo" en francés?',opts:['Je suis','Je m\'appelle','J\'habite','J\'ai'],ans:1},
    {q:'¿Cómo se dice "El apellido" en francés?',opts:['Le prénom','L\'âge','Le nom de famille','La profession'],ans:2},
    {q:'¿Cómo se dice "Tengo 25 años" en francés?',opts:['Je suis 25 ans','J\'habite 25 ans','J\'ai 25 ans','Je parle 25 ans'],ans:2},
    {q:'¿Cómo se dice "La nacionalidad" en francés?',opts:['Le pays','La ville','La profession','La nationalité'],ans:3},
    {q:'¿Cómo se dice "Vivo en Caracas" en francés?',opts:['Je suis à Caracas','J\'habite à Caracas','Je vais à Caracas','J\'ai Caracas'],ans:1},
    {q:'¿Cómo se dice "El nombre / primer nombre" en francés?',opts:['Le nom de famille','Le prénom','L\'âge','La profession'],ans:1},
    {q:'¿Cómo se dice "Soy venezolana" en francés?',opts:['Je suis française','Je suis vénézuélienne','J\'habite Venezuela','Je parle vénézuélien'],ans:1},
    {q:'¿Cómo se dice "¿De dónde eres?" en francés?',opts:['Quel âge as-tu ?','Comment tu t\'appelles ?','Tu es d\'où ?','Où habites-tu ?'],ans:2}
   ]},

  /* ── Orientarse ── */
  {id:'orient',level:1,emoji:'🧭',name:'Orientarse',sub:'Derecha, izquierda… / S\'orienter en français',
   words:[
    {es:'Todo recto / Derecho',fr:'Tout droit',em:'⬆️'},
    {es:'A la izquierda',fr:'À gauche',em:'⬅️'},
    {es:'A la derecha',fr:'À droite',em:'➡️'},
    {es:'Delante',fr:'Devant',em:'🔜'},
    {es:'Detrás',fr:'Derrière',em:'🔙'},
    {es:'Al lado',fr:'À côté',em:'↔️'},
    {es:'Enfrente / Frente a',fr:'En face',em:'🔄'},
    {es:'Cerca',fr:'Près',em:'📍'},
    {es:'Lejos',fr:'Loin',em:'🌅'},
    {es:'El mapa / El plano',fr:'Le plan / La carte',em:'🗺️'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "A la izquierda" en francés?',opts:['À droite','Tout droit','À gauche','En face'],ans:2},
    {q:'¿Cómo se dice "A la derecha" en francés?',opts:['À gauche','Tout droit','À côté','À droite'],ans:3},
    {q:'¿Cómo se dice "Todo recto" en francés?',opts:['À gauche','Tout droit','En face','À côté'],ans:1},
    {q:'¿Cómo se dice "Enfrente" en francés?',opts:['À côté','Derrière','En face','Près'],ans:2},
    {q:'¿Cómo se dice "Cerca" en francés?',opts:['Loin','À côté','Près','En face'],ans:2}
   ]},

  /* ── Lugares ── */
  {id:'lieux',level:1,emoji:'🏙️',name:'Los Lugares',sub:'Mercado, plaza… / Les lieux importants en français',
   words:[
    {es:'La ciudad',fr:'La ville',em:'🏙️'},
    {es:'El pueblo',fr:'Le village',em:'🏡'},
    {es:'El campo',fr:'La campagne',em:'🌾'},
    {es:'La montaña / La sierra',fr:'La montagne',em:'⛰️'},
    {es:'El mar / El océano',fr:'La mer / L\'océan',em:'🌊'},
    {es:'La playa',fr:'La plage',em:'🏖️'},
    {es:'El río',fr:'La rivière',em:'🏞️'},
    {es:'El parque',fr:'Le parc',em:'🌳'},
    {es:'La plaza',fr:'La place',em:'⛲'},
    {es:'La calle / La avenida',fr:'La rue / L\'avenue',em:'🛣️'},
    {es:'La cuadra (manzana venezolana)',fr:'Le pâté de maisons',em:'🏘️'},
    {es:'La alcaldía (=mairie en VE)',fr:'La mairie',em:'🏛️'},
    {es:'El hospital / La clínica',fr:'L\'hôpital',em:'🏥'},
    {es:'La farmacia',fr:'La pharmacie',em:'💊'},
    {es:'El banco',fr:'La banque',em:'🏦'},
    {es:'La iglesia',fr:'L\'église',em:'⛪'},
    {es:'El supermercado',fr:'Le supermarché',em:'🛒'},
    {es:'El bar / La tasca (bar local VE)',fr:'Le bar',em:'☕'},
    {es:'La bodega / El abasto (= pequeño comercio)',fr:'La supérette',em:'🏪'},
    {es:'La escuela / El colegio',fr:'L\'école / Le lycée',em:'🎒'},
    {es:'La universidad',fr:'L\'université',em:'🏛️'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La farmacia" en francés?',opts:['La banque','L\'hôpital','La pharmacie','Le supermarché'],ans:2},
    {q:'¿Cómo se dice "La alcaldía" (institución venezolana) en francés?',opts:['L\'église','Le tribunal','La mairie','Le marché'],ans:2},
    {q:'¿Cómo se dice "El hospital" en francés?',opts:['La pharmacie','La mairie','L\'hôpital','La banque'],ans:2},
    {q:'¿Cómo se dice "El bar / La tasca" en francés?',opts:['Le supermarché','Le bar','La pharmacie','L\'école'],ans:1},
    {q:'¿Cómo se dice "El mar" en francés?',opts:['La rivière','La montagne','La mer','Le lac'],ans:2},
    {q:'¿Cómo se dice "La ciudad" en francés?',opts:['La rue','Le village','La ville','La montagne'],ans:2},
    {q:'¿Cómo se dice "El banco" en francés?',opts:['La pharmacie','La banque','La caisse','Le bureau'],ans:1},
    {q:'¿Cómo se dice "El supermercado" en francés?',opts:['La supérette','Le bar','Le supermarché','Le marché'],ans:2}
   ]},

  /* ── Comida ── */
  {id:'nour',level:1,emoji:'🍽️',name:'La Comida',sub:'Pan, verduras, arepas… / La nourriture en français',
   words:[
    {es:'Las frutas',fr:'Les fruits',em:'🍉'},
    {es:'Las verduras',fr:'Les légumes',em:'🥦'},
    {es:'El pan',fr:'Le pain',em:'🍞'},
    {es:'El arroz',fr:'Le riz',em:'🍚'},
    {es:'Los macarrones / La pasta',fr:'Les pâtes',em:'🍝'},
    {es:'La papa / Las papas fritas',fr:'La pomme de terre / Les frites',em:'🥔'},
    {es:'La carne',fr:'La viande',em:'🥩'},
    {es:'El pollo',fr:'Le poulet',em:'🍗'},
    {es:'El pescado',fr:'Le poisson',em:'🐟'},
    {es:'El pernil (plato de fiesta venezolano)',fr:'Le jambon rôti',em:'🥩'},
    {es:'El chorizo',fr:'Le chorizo',em:'🌭'},
    {es:'El huevo',fr:'L\'œuf',em:'🥚'},
    {es:'El queso',fr:'Le fromage',em:'🧀'},
    {es:'La mantequilla',fr:'Le beurre',em:'🧈'},
    {es:'La manzana',fr:'La pomme',em:'🍎'},
    {es:'El cambur (= banana en VE)',fr:'La banane',em:'🍌'},
    {es:'La naranja',fr:'L\'orange',em:'🍊'},
    {es:'El limón',fr:'Le citron',em:'🍋'},
    {es:'La fresa',fr:'La fraise',em:'🍓'},
    {es:'La patilla (= sandía en VE)',fr:'La pastèque',em:'🍉'},
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
    {es:'El chocolate',fr:'Le chocolat',em:'🍫'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El pan" en francés?',opts:['Le riz','Le pain','Le fromage','Le beurre'],ans:1},
    {q:'¿Cómo se dice "El pollo" en francés?',opts:['Le poisson','La viande','Le poulet','Le porc'],ans:2},
    {q:'¿Cómo se dice "El huevo" en francés?',opts:['Le beurre','Le fromage','La carotte','L\'œuf'],ans:3},
    {q:'¿Cómo se dice "La manzana" en francés?',opts:['La banane','La fraise','La pomme','L\'orange'],ans:2},
    {q:'¿Cómo se dice "El cambur" (VE) en francés?',opts:['La pastèque','La fraise','La banane','L\'orange'],ans:2},
    {q:'¿Cómo se dice "La patilla" (VE) en francés?',opts:['La fraise','La pastèque','Le raisin','L\'orange'],ans:1},
    {q:'¿Cómo se dice "La zanahoria" en francés?',opts:['L\'oignon','L\'ail','La carotte','Le concombre'],ans:2},
    {q:'¿Cómo se dice "Las verduras" en francés?',opts:['Les fruits','Les légumes','Les frites','Les pâtes'],ans:1}
   ]},

  /* ── Bebidas ── */
  {id:'bois',level:1,emoji:'🥤',name:'Las Bebidas',sub:'Agua, café, jugo… / Les boissons en français',
   words:[
    {es:'El agua',fr:'L\'eau',em:'💧'},
    {es:'El agua con gas',fr:'L\'eau gazeuse',em:'🫧'},
    {es:'La leche',fr:'Le lait',em:'🥛'},
    {es:'El jugo (de naranja) — en VE se dice jugo, no zumo',fr:'Le jus (d\'orange)',em:'🍊'},
    {es:'El refresco / La frescolita (refresco típico VE)',fr:'Le soda',em:'🥤'},
    {es:'El café negro',fr:'Le café noir',em:'☕'},
    {es:'El café con leche',fr:'Le café au lait',em:'☕'},
    {es:'El café marrón / El caraqueño (café allargado con leche, muy popular en Caracas)',fr:'Le café allongé au lait',em:'☕'},
    {es:'El té',fr:'Le thé',em:'🍵'},
    {es:'El vino (tinto / blanco)',fr:'Le vin (rouge / blanc)',em:'🍷'},
    {es:'La cerveza / El polar (marca emblema de VE)',fr:'La bière',em:'🍺'},
    {es:'El ron (Venezuela = gran productor)',fr:'Le rhum',em:'🍶'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El agua" en francés?',opts:['Le lait','Le jus','L\'eau','Le thé'],ans:2},
    {q:'¿Cómo se dice "El café negro" en francés?',opts:['Le café au lait','Le café noir','Le café sucré','Le café froid'],ans:1},
    {q:'¿Cómo se dice "La leche" en francés?',opts:['Le lait','L\'eau','Le thé','Le jus'],ans:0},
    {q:'¿Cómo se dice "El jugo" (VE) en francés?',opts:['Le vin','La bière','La limonade','Le jus'],ans:3},
    {q:'¿Cómo se dice "El ron" en francés?',opts:['La bière','La chicha','Le rhum','Le vin'],ans:2},
    {q:'¿Cómo se dice "El café marrón" (caraqueño) en francés?',opts:['Le café noir','Une bière','Le café allongé au lait','Un jus d\'orange'],ans:2},
    {q:'¿Cómo se dice "El té" en francés?',opts:['Le café','Le thé','Le lait','L\'eau'],ans:1},
    {q:'¿Cómo se dice "El agua con gas" en francés?',opts:['L\'eau froide','L\'eau minérale','L\'eau gazeuse','Le soda'],ans:2}
   ]},

  /* ── Números ── */
  {id:'num',level:1,emoji:'🔢',name:'Los Números',sub:'Del cero al dos mil / Les chiffres en français',
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
    {es:'Treinta',fr:'Trente',em:'3️⃣0️⃣'},{es:'Cuarenta',fr:'Quarante',em:'4️⃣0️⃣'},
    {es:'Cincuenta',fr:'Cinquante',em:'5️⃣0️⃣'},{es:'Sesenta',fr:'Soixante',em:'6️⃣0️⃣'},
    {es:'Setenta (¡ojo! en fr. = soixante-dix, lit. 60+10)',fr:'Soixante-dix',em:'7️⃣0️⃣'},
    {es:'Ochenta (¡ojo! en fr. = quatre-vingts, lit. 4×20)',fr:'Quatre-vingts',em:'8️⃣0️⃣'},
    {es:'Noventa (¡ojo! en fr. = quatre-vingt-dix, lit. 4×20+10)',fr:'Quatre-vingt-dix',em:'9️⃣0️⃣'},
    {es:'Cien / Ciento',fr:'Cent',em:'1️⃣0️⃣0️⃣'},
    {es:'Doscientos',fr:'Deux cents',em:'2️⃣0️⃣0️⃣'},
    {es:'Quinientos',fr:'Cinq cents',em:'5️⃣0️⃣0️⃣'},
    {es:'Mil',fr:'Mille',em:'1️⃣0️⃣0️⃣0️⃣'},
    {es:'Dos mil',fr:'Deux mille',em:'2️⃣0️⃣0️⃣0️⃣'}
   ],
   quiz10:[
    {q:'¿Cómo se dice el número 5 en francés?',opts:['Quatre','Six','Cinq','Sept'],ans:2},
    {q:'¿Cómo se dice 12 en francés?',opts:['Onze','Douze','Treize','Dix'],ans:1},
    {q:'¿Cómo se dice 16 en francés?',opts:['Quinze','Dix-sept','Seize','Treize'],ans:2},
    {q:'¿Cómo se dice 9 en francés?',opts:['Sept','Huit','Dix','Neuf'],ans:3},
    {q:'¿Cómo se dice 20 en francés?',opts:['Dix-neuf','Vingt','Quinze','Dix-huit'],ans:1},
    {q:'¿Cómo se dice 70 en francés? (¡ojo, es especial!)',opts:['Soixante','Soixante-dix','Septante','Soixante-douze'],ans:1},
    {q:'¿Cómo se dice 80 en francés? (¡ojo, es especial!)',opts:['Huitante','Quatre-vingt-dix','Quatre-vingts','Octante'],ans:2},
    {q:'¿Cómo se dice 30 en francés?',opts:['Vingt','Quarante','Trente','Cinquante'],ans:2},
    {q:'¿Cómo se dice 90 en francés? (¡ojo, es especial!)',opts:['Nonante','Quatre-vingt-dix','Quatre-vingt-onze','Soixante-dix'],ans:1},
    {q:'¿Cómo se dice 100 en francés?',opts:['Mille','Cent','Cinq cents','Deux cents'],ans:1},
    {q:'¿Cómo se dice 1000 en francés?',opts:['Cent','Deux cents','Mille','Neuf cents'],ans:2},
    {q:'¿Cómo se dice 2000 en francés?',opts:['Deux mille','Mille','Deux cents','Vingt mille'],ans:0}
   ]},

  /* ── Colores ── */
  {id:'col',level:1,emoji:'🎨',name:'Los Colores',sub:'Rojo, azul, verde… / Les couleurs en français',
   words:[
    {es:'Rojo',fr:'Rouge',em:'❤️'},{es:'Azul',fr:'Bleu',em:'💙'},{es:'Verde',fr:'Vert',em:'💚'},
    {es:'Amarillo',fr:'Jaune',em:'💛'},{es:'Naranja',fr:'Orange',em:'🧡'},{es:'Blanco',fr:'Blanc',em:'🤍'},
    {es:'Negro',fr:'Noir',em:'🖤'},{es:'Rosado (en VE se dice rosado, no rosa)',fr:'Rose',em:'🩷'},
    {es:'Morado / Violeta',fr:'Violet',em:'💜'},{es:'Marrón / Café / Castaño (varios términos en VE)',fr:'Marron',em:'🤎'},
    {es:'Gris',fr:'Gris',em:'🩶'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Rojo" en francés?',opts:['Bleu','Rouge','Vert','Jaune'],ans:1},
    {q:'¿Cómo se dice "Azul" en francés?',opts:['Vert','Jaune','Bleu','Violet'],ans:2},
    {q:'¿Cómo se dice "Verde" en francés?',opts:['Jaune','Gris','Vert','Blanc'],ans:2},
    {q:'¿Cómo se dice "Negro" en francés?',opts:['Blanc','Gris','Marron','Noir'],ans:3},
    {q:'¿Cómo se dice "Amarillo" en francés?',opts:['Orange','Jaune','Rose','Violet'],ans:1},
    {q:'¿Cómo se dice "Rosado" (VE) en francés?',opts:['Rouge','Orange','Rose','Violet'],ans:2},
    {q:'¿Cómo se dice "Blanco" en francés?',opts:['Blanc','Noir','Gris','Marron'],ans:0}
   ]},

  /* ── Viaje ── */
  {id:'viaje',level:1,emoji:'🧳',name:'El Viaje',sub:'Maleta, hotel, pasaporte… / Le voyage en français',
   words:[
    {es:'El pasaporte / La cédula (= cédula de identidad VE)',fr:'Le passeport / La carte d\'identité',em:'🛂'},
    {es:'La maleta',fr:'La valise',em:'🧳'},
    {es:'El equipaje',fr:'Les bagages',em:'🎒'},
    {es:'El pasaje / El boleto (en VE se dice pasaje)',fr:'Le billet',em:'🎫'},
    {es:'La reserva',fr:'La réservation',em:'📋'},
    {es:'La agencia de viajes',fr:'L\'agence de voyages',em:'🗺️'},
    {es:'El seguro de viaje',fr:'L\'assurance voyage',em:'📄'},
    {es:'El avión',fr:'L\'avion',em:'✈️'},
    {es:'El aeropuerto',fr:'L\'aéroport',em:'🛫'},
    {es:'La salida',fr:'Le départ',em:'🚪'},
    {es:'La llegada',fr:'L\'arrivée',em:'🛬'},
    {es:'La aduana',fr:'La douane',em:'🛃'},
    {es:'El crucero',fr:'La croisière',em:'🚢'},
    {es:'El hotel / La posada (= alojamiento típico venezolano)',fr:'L\'hôtel / La pension',em:'🏨'},
    {es:'La habitación doble o sencilla (sencilla = simple en VE)',fr:'La chambre double ou simple',em:'🛏️'},
    {es:'La playa',fr:'La plage',em:'🏖️'},
    {es:'La montaña',fr:'La montagne',em:'⛰️'},
    {es:'El turista',fr:'Le touriste',em:'📸'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El pasaporte" en francés?',opts:['La valise','Le billet','Le passeport','Les bagages'],ans:2},
    {q:'¿Cómo se dice "La maleta" en francés?',opts:['Le sac à dos','La valise','Les bagages','Le billet'],ans:1},
    {q:'¿Cómo se dice "El aeropuerto" en francés?',opts:['La gare','Le port','L\'aéroport','La douane'],ans:2},
    {q:'¿Cómo se dice "La posada" (VE) en francés?',opts:['Un restaurant','Un hôtel / une pension','Un bar','Un marché'],ans:1},
    {q:'¿Cómo se dice "El equipaje" en francés?',opts:['La valise','Le billet','Les bagages','Le sac à dos'],ans:2},
    {q:'¿Cómo se dice "La aduana" en francés?',opts:['L\'arrivée','Le départ','La douane','La frontière'],ans:2},
    {q:'¿Cómo se dice "El pasaje / boleto" (VE) en francés?',opts:['Le billet','Le passeport','Le simple','La carte'],ans:0},
    {q:'¿Cómo se dice "La llegada" en francés?',opts:['Le départ','La correspondance','L\'escale','L\'arrivée'],ans:3}
   ]},

  /* ── Restaurante ── */
  {id:'rest',level:1,emoji:'🍽️',name:'El Restaurante',sub:'Menú, cuenta, mesa… / Au restaurant en français',
   words:[
    {es:'La terraza',fr:'La terrasse',em:'☀️'},
    {es:'La mesa',fr:'La table',em:'🪑'},
    {es:'¿Está libre esta mesa?',fr:'Cette table est libre ?',em:'🪑'},
    {es:'El mesonero / La mesonera (= camarero/a en VE)',fr:'Le serveur / La serveuse',em:'🧑‍🍳'},
    {es:'La carta / El menú',fr:'La carte / Le menu',em:'📋'},
    {es:'El menú del día / El plato del día',fr:'Le menu du jour',em:'🍱'},
    {es:'Pedir',fr:'Commander',em:'🙋'},
    {es:'¿Qué recomienda?',fr:'Que recommandez-vous ?',em:'👨‍🍳'},
    {es:'Sin gluten',fr:'Sans gluten',em:'🌾'},
    {es:'Vegetariano / Vegetariana',fr:'Végétarien / Végétarienne',em:'🥦'},
    {es:'La entrada / El pasapalo (= aperitivo venezolano)',fr:'L\'entrée / L\'amuse-bouche',em:'🥗'},
    {es:'El plato principal / El fuerte',fr:'Le plat principal',em:'🍖'},
    {es:'El postre',fr:'Le dessert',em:'🍮'},
    {es:'El sándwich / El emparedado',fr:'Le sandwich',em:'🥖'},
    {es:'Para llevar',fr:'À emporter',em:'🥡'},
    {es:'La cuenta',fr:'L\'addition',em:'💶'},
    {es:'La propina',fr:'Le pourboire',em:'💰'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La cuenta" en francés?',opts:['Le pourboire','L\'addition','Le menu','La réservation'],ans:1},
    {q:'¿Cómo se dice "El mesonero" (VE) en francés?',opts:['Le cuisinier','Le patron','Le serveur','Le client'],ans:2},
    {q:'¿Cómo se dice "El postre" en francés?',opts:['L\'entrée','Le plat principal','Le dessert','L\'amuse-bouche'],ans:2},
    {q:'¿Cómo se dice "Para llevar" en francés?',opts:['Pour manger sur place','À emporter','À partager','Pour deux personnes'],ans:1},
    {q:'¿Cómo se dice "La terraza" en francés?',opts:['Le jardin','La place','La terrasse','Le patio'],ans:2},
    {q:'¿Cómo se dice "El pasapalo" (VE) en francés?',opts:['Le dessert','L\'amuse-bouche','Le plat principal','La boisson'],ans:1},
    {q:'¿Cómo se dice "La propina" en francés?',opts:['L\'addition','Le pourboire','La réduction','Le prix'],ans:1},
    {q:'¿Cómo se dice "Pedir" en francés?',opts:['Préparer','Avoir','Commander','Apporter'],ans:2}
   ]},

  /* ── Transportes ── */
  {id:'trans',level:1,emoji:'🚌',name:'Los Transportes',sub:'Bus, carro, buseta… / Les transports en français',
   words:[
    {es:'El autobús / El bus / La buseta (= minibús VE)',fr:'Le bus / Le minibus',em:'🚌'},
    {es:'El metro',fr:'Le métro',em:'🚇'},
    {es:'El tren',fr:'Le train',em:'🚂'},
    {es:'El avión',fr:'L\'avion',em:'✈️'},
    {es:'El taxi / El por puesto (= taxi colectivo venezolano)',fr:'Le taxi / Le taxi collectif',em:'🚕'},
    {es:'El carro (en VE se dice carro, no coche)',fr:'La voiture',em:'🚗'},
    {es:'La moto',fr:'La moto',em:'🏍️'},
    {es:'La bicicleta / La bici',fr:'Le vélo',em:'🚴'},
    {es:'El pasaje / El boleto (= billete en VE)',fr:'Le billet',em:'🎫'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El bus / la buseta" (VE) en francés?',opts:['Le train','Le métro','Le bus / le minibus','Le taxi'],ans:2},
    {q:'¿Cómo se dice "El carro" (VE) en francés?',opts:['La moto','La voiture','Le minibus','Le camion'],ans:1},
    {q:'¿Cómo se dice "El avión" en francés?',opts:['Le bateau','L\'avion','Le vélo','Le métro'],ans:1},
    {q:'¿Cómo se dice "El por puesto" (VE) en francés?',opts:['Un parking','Le taxi collectif','Un bus express','Un tramway'],ans:1}
   ]},

  /* ── Objetos ── */
  {id:'objets',level:1,emoji:'🔑',name:'Objetos del Día',sub:'Celular, llaves… / Objets du quotidien en français',
   words:[
    {es:'El teléfono',fr:'Le téléphone',em:'☎️'},
    {es:'El celular (en VE = celular, no móvil)',fr:'Le portable / le téléphone mobile',em:'📱'},
    {es:'El computador / La computadora (en VE = computador)',fr:'L\'ordinateur',em:'💻'},
    {es:'El cargador',fr:'Le chargeur',em:'🔌'},
    {es:'El reloj',fr:'La montre / L\'horloge',em:'⌚'},
    {es:'Las llaves',fr:'Les clés',em:'🔑'},
    {es:'La cartera / La billetera',fr:'Le portefeuille',em:'👛'},
    {es:'La mochila',fr:'Le sac à dos',em:'🎒'},
    {es:'Los lentes / Los anteojos (en VE = lentes)',fr:'Les lunettes',em:'👓'},
    {es:'El paraguas / El sombrero de agua (VE)',fr:'Le parapluie',em:'☂️'},
    {es:'El papel',fr:'Le papier',em:'📄'},
    {es:'El lapicero / El bolígrafo (en VE = lapicero)',fr:'Le stylo',em:'🖊️'},
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
    {es:'La almohada',fr:'L\'oreiller',em:''}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Las llaves" en francés?',opts:['Le stylo','Les ciseaux','Les clés','Le chargeur'],ans:2},
    {q:'¿Cómo se dice "El celular" (VE) en francés?',opts:['La tablette','Le portable','L\'ordinateur','La radio'],ans:1},
    {q:'¿Cómo se dice "La mochila" en francés?',opts:['Le sac à main','Le sac','Le sac à dos','Le chapeau'],ans:2},
    {q:'¿Cómo se dice "El computador" (VE) en francés?',opts:['Le portable','La tablette','L\'ordinateur','L\'écran'],ans:2},
    {q:'¿Cómo se dice "Los lentes / anteojos" (VE) en francés?',opts:['Les écouteurs','Les lunettes','Les gants','Les montres'],ans:1},
    {q:'¿Cómo se dice "El lapicero" (VE) en francés?',opts:['Le crayon','Le papier','Le stylo','Le livre'],ans:2},
    {q:'¿Cómo se dice "La cartera / billetera" en francés?',opts:['Le sac à dos','Les clés','Le portefeuille','Le téléphone'],ans:2},
    {q:'¿Cómo se dice "El espejo" en francés?',opts:['La fenêtre','Le miroir','Le tableau','La porte'],ans:1},
    {q:'¿Cómo se dice "La toalla" en francés?',opts:['L\'oreiller','Le savon','La serviette','Le verre'],ans:2},
    {q:'¿Cómo se dice "La cuchara" en francés?',opts:['Le couteau','La fourchette','La cuillère','L\'assiette'],ans:2},
    {q:'¿Cómo se dice "El paraguas / sombrero de agua" (VE) en francés?',opts:['Le manteau','Le parapluie','L\'écharpe','L\'imperméable'],ans:1},
    {q:'¿Cómo se dice "La almohada" en francés?',opts:['La couverture','Le matelas','Le drap','L\'oreiller'],ans:3}
   ]},

  /* ── Vivienda ── */
  {id:'log',level:1,emoji:'🏠',name:'La Vivienda',sub:'Sala, cocina… / Le logement en français',
   words:[
    {es:'La casa',fr:'La maison',em:'🏠'},
    {es:'El apartamento / El apto (abreviación muy usada en VE)',fr:'L\'appartement',em:'🏢'},
    {es:'La entrada / El recibidor',fr:'L\'entrée',em:'🚪'},
    {es:'La sala / El comedor',fr:'Le salon / la salle à manger',em:'🛋️'},
    {es:'La cocina',fr:'La cuisine',em:'🍳'},
    {es:'La habitación / El cuarto',fr:'La chambre',em:'🛏️'},
    {es:'El baño / El cuarto de baño',fr:'La salle de bain',em:'🚿'},
    {es:'El sanitario / El baño (para hacer necesidades)',fr:'Les toilettes',em:'🚽'},
    {es:'El garaje / El estacionamiento',fr:'Le garage / Le parking',em:'🚗'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La sala" (VE) en francés?',opts:['La cuisine','La chambre','Le salon','Le garage'],ans:2},
    {q:'¿Cómo se dice "La cocina" en francés?',opts:['La salle à manger','La cuisine','La salle de bain','Le salon'],ans:1},
    {q:'¿Cómo se dice "La habitación / el cuarto" en francés?',opts:['Le salon','La chambre','L\'entrée','Le garage'],ans:1},
    {q:'¿Cómo se dice "El apartamento / el apto" (VE) en francés?',opts:['La maison','L\'entrée','L\'appartement','La chambre'],ans:2},
    {q:'¿Cómo se dice "El estacionamiento" (VE) en francés?',opts:['Le garage','Le parking','La route','L\'entrée'],ans:1}
   ]},

  /* ── Muebles ── */
  {id:'muebles_equipamiento',level:1,emoji:'🪑',name:'Muebles y Equipamiento',sub:'Sofá, nevera, baño… / Meubles et équipements en français',
   words:[
    {es:'El sofá',fr:'Le canapé',em:'🛋️'},
    {es:'El sillón / La poltrona (poltrona = sillón en VE)',fr:'Le fauteuil',em:'💺'},
    {es:'La mesa',fr:'La table',em:''},
    {es:'La silla',fr:'La chaise',em:'🪑'},
    {es:'La lámpara',fr:'La lampe',em:'💡'},
    {es:'El estante / La repisa',fr:'L\'étagère',em:''},
    {es:'La cama',fr:'Le lit',em:'🛏️'},
    {es:'El armario / El closet',fr:'L\'armoire',em:'🗄️'},
    {es:'El escritorio / El buró (buró = escritorio en VE)',fr:'Le bureau',em:'🖊️'},
    {es:'La nevera (en VE se conserva "nevera")',fr:'Le réfrigérateur',em:'🧊'},
    {es:'El horno',fr:'Le four',em:'🔥'},
    {es:'El microondas',fr:'Le micro-ondes',em:'🔲'},
    {es:'El lavaplatos / El fregadero',fr:'L\'évier',em:'🚰'},
    {es:'El lavamanos',fr:'Le lavabo',em:'🚰'},
    {es:'La bañera / La tina',fr:'La baignoire',em:'🛁'},
    {es:'La ducha',fr:'La douche',em:'🚿'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El sofá" en francés?',opts:['Le fauteuil','La chaise','Le canapé','Le lit'],ans:2},
    {q:'¿Cómo se dice "El armario / el closet" en francés?',opts:['Le bureau','L\'étagère','Le fauteuil','L\'armoire'],ans:3},
    {q:'¿Cómo se dice "La nevera" (VE) en francés?',opts:['Le four','Le micro-ondes','Le réfrigérateur','L\'évier'],ans:2},
    {q:'¿Cómo se dice "El horno" en francés?',opts:['Le micro-ondes','Le four','L\'évier','Le lavabo'],ans:1},
    {q:'¿Cómo se dice "La repisa" en francés?',opts:['La lampe','Le fauteuil','La chaise','L\'étagère'],ans:3},
    {q:'¿Cómo se dice "La bañera / la tina" en francés?',opts:['Le lavabo','L\'évier','La baignoire','La douche'],ans:2},
    {q:'¿Cómo se dice "El buró" (VE) en francés?',opts:['L\'armoire','Le lit','Le bureau','La table'],ans:2}
   ]},

  /* ── Emociones ── */
  {id:'emot',level:1,emoji:'😄',name:'Las Emociones',sub:'Alegre, cansado… / Les émotions en français',
   words:[
    {es:'Contento / Contenta',fr:'Content / Contente',em:'😊'},
    {es:'Feliz',fr:'Heureux / Heureuse',em:'😊'},
    {es:'Alegre',fr:'Joyeux / Joyeuse',em:'😄'},
    {es:'Triste',fr:'Triste',em:'😢'},
    {es:'Cansado / Cansada',fr:'Fatigué / Fatiguée',em:'😴'},
    {es:'Molesto / Molesta (muy usado en VE)',fr:'Fâché / Fâchée',em:'😠'},
    {es:'Arrecho / Arrecha (= muy enojado/a — fuerte en VE)',fr:'En colère / Très énervé(e)',em:'😠'},
    {es:'Tener miedo',fr:'Avoir peur',em:'😨'},
    {es:'Enfermo / Enferma',fr:'Malade',em:'🤒'},
    {es:'Maluco / Maluca (= no muy bien, ligero malestar — VE)',fr:'Pas très bien / Légèrement malade',em:'🤒'},
    {es:'Preocupado / Preocupada',fr:'Inquiet / Inquiète',em:'😟'},
    {es:'Estresado / Estresada',fr:'Stressé / Stressée',em:'😰'},
    {es:'Decepcionado / Decepcionada',fr:'Déçu / Déçue',em:'😞'},
    {es:'Enamorado / Enamorada',fr:'Amoureux / Amoureuse',em:'😍'},
    {es:'¡Qué chévere! / ¡Qué fino! (expresión emblemática VE)',fr:'C\'est super ! / C\'est cool !',em:'🌟'},
    {es:'¡Qué vaina! (expresión multiusos venezolana)',fr:'Zut ! / Dommage !',em:'😤'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Molesta" en francés? (VE)',opts:['Déçue','Fâchée','Inquiète','Contente'],ans:1},
    {q:'¿Cómo se dice "Alegre" en francés?',opts:['Triste','Fatiguée','Joyeuse','Malade'],ans:2},
    {q:'¿Cómo se dice "Cansado" en francés?',opts:['Stressé','Malade','Inquiet','Fatigué'],ans:3},
    {q:'¿Cómo se dice "¡Qué vaina!" (VE) en francés?',opts:['Comme c\'est beau !','Zut ! / Dommage !','C\'est délicieux !','Au revoir !'],ans:1},
    {q:'¿Cómo se dice "¡Qué chévere!" (VE) en francés?',opts:['Ça m\'énerve !','C\'est nul !','C\'est super !','J\'ai peur !'],ans:2},
    {q:'¿Cómo se dice "Preocupada" en francés?',opts:['Stressée','Amoureuse','Inquiète','Déçue'],ans:2},
    {q:'¿Cómo se dice "Tener miedo" en francés?',opts:['Avoir faim','Avoir peur','Avoir froid','Avoir sommeil'],ans:1}
   ]},

  /* ── Familia ── */
  {id:'fam',level:1,emoji:'👨‍👩‍👧',name:'La Familia',sub:'Papá, mamá, chamo… / La famille en français',
   words:[
    {es:'La madre / La mamá / La vieja (vieja = mamá, afectuoso en VE)',fr:'La mère / La maman',em:'👩'},
    {es:'El padre / El papá / El viejo (viejo = papá, afectuoso en VE)',fr:'Le père / Le papa',em:'👨'},
    {es:'La hija',fr:'La fille',em:'👧'},
    {es:'El hijo',fr:'Le fils',em:'👦'},
    {es:'La hermana',fr:'La sœur',em:'👧'},
    {es:'El hermano',fr:'Le frère',em:'🧑'},
    {es:'La abuela / La abuelita',fr:'La grand-mère',em:'👵'},
    {es:'El abuelo / El abuelito',fr:'Le grand-père',em:'👴'},
    {es:'La mujer / La esposa',fr:'La femme',em:'💑'},
    {es:'El marido / El esposo',fr:'Le mari',em:'💍'},
    {es:'El tío / La tía',fr:'L\'oncle / La tante',em:'👨'},
    {es:'El chamo / La chama (= pana joven — argot VE)',fr:'Le gamin / La gamine',em:'🧒'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El padre / el papá" en francés?',opts:['Le mari','Le fils','Le père','Le frère'],ans:2},
    {q:'¿Cómo se dice "La madre / la mamá" en francés?',opts:['La fille','La sœur','La maman','La mère'],ans:3},
    {q:'¿Cómo se dice "El hermano" en francés?',opts:['Le fils','Le frère','Le papa','Le mari'],ans:1},
    {q:'¿Cómo se dice "La hermana" en francés?',opts:['La mère','La grand-mère','La sœur','La fille'],ans:2},
    {q:'¿Cómo se dice "El abuelo" en francés?',opts:['Le papa','Le mari','Le fils','Le grand-père'],ans:3},
    {q:'¿Cómo se dice "El chamo / La chama" (VE) en francés?',opts:['Le père / la mère','Le gamin / la gamine','Le frère / la sœur','L\'oncle / la tante'],ans:1},
    {q:'¿Cómo se dice "La hija" en francés?',opts:['La sœur','La femme','La fille','La maman'],ans:2},
    {q:'En Venezuela, "El viejo / La vieja" significa de forma afectuosa…',opts:['Un vieil homme','Le père / la mère (affectueux)','Le grand-père','L\'étranger'],ans:1}
   ]},

  /* ── Verbos ── */
  {id:'verb',level:1,emoji:'📝',name:'Los Verbos',sub:'Être, avoir, aller… / Les verbes principaux en français',
   words:[
    {es:'Ser / Estar',fr:'Être',em:'🧑',conj:{es:['Yo soy/estoy','Tú eres/estás','Él/Ella es/está','Nosotros somos/estamos','Ustedes son/están','Ellos/Ellas son/están'],fr:['Je suis','Tu es','Il/Elle est','Nous sommes','Vous êtes','Ils/Elles sont']}},
    {es:'Tener',fr:'Avoir',em:'🤲',conj:{es:['Yo tengo','Tú tienes','Él/Ella tiene','Nosotros tenemos','Ustedes tienen','Ellos/Ellas tienen'],fr:['J\'ai','Tu as','Il/Elle a','Nous avons','Vous avez','Ils/Elles ont']}},
    {es:'Hablar',fr:'Parler',em:'🗣️',conj:{es:['Yo hablo','Tú hablas','Él/Ella habla','Nosotros hablamos','Ustedes hablan','Ellos/Ellas hablan'],fr:['Je parle','Tu parles','Il/Elle parle','Nous parlons','Vous parlez','Ils/Elles parlent']}},
    {es:'Vivir',fr:'Habiter',em:'🏠',conj:{es:['Yo vivo','Tú vives','Él/Ella vive','Nosotros vivimos','Ustedes viven','Ellos/Ellas viven'],fr:['J\'habite','Tu habites','Il/Elle habite','Nous habitons','Vous habitez','Ils/Elles habitent']}},
    {es:'Ir',fr:'Aller',em:'🚶',conj:{es:['Yo voy','Tú vas','Él/Ella va','Nosotros vamos','Ustedes van','Ellos/Ellas van'],fr:['Je vais','Tu vas','Il/Elle va','Nous allons','Vous allez','Ils/Elles vont']}},
    {es:'Gustar / Encantar',fr:'Aimer / Adorer',em:'❤️',conj:{es:['Me gusta','Te gusta','Le gusta','Nos gusta','Les gusta','Les gusta'],fr:['J\'aime','Tu aimes','Il/Elle aime','Nous aimons','Vous aimez','Ils/Elles aiment']}},
    {es:'Comer',fr:'Manger',em:'🍽️',conj:{es:['Yo como','Tú comes','Él/Ella come','Nosotros comemos','Ustedes comen','Ellos/Ellas comen'],fr:['Je mange','Tu manges','Il/Elle mange','Nous mangeons','Vous mangez','Ils/Elles mangent']}},
    {es:'Beber / Tomar (tomar muy usado en VE)',fr:'Boire',em:'🥤',conj:{es:['Yo bebo/tomo','Tú bebes/tomas','Él/Ella bebe/toma','Nosotros bebemos/tomamos','Ustedes beben/toman','Ellos beben/toman'],fr:['Je bois','Tu bois','Il/Elle boit','Nous buvons','Vous buvez','Ils/Elles boivent']}},
    {es:'Dormir',fr:'Dormir',em:'😴',conj:{es:['Yo duermo','Tú duermes','Él/Ella duerme','Nosotros dormimos','Ustedes duermen','Ellos/Ellas duermen'],fr:['Je dors','Tu dors','Il/Elle dort','Nous dormons','Vous dormez','Ils/Elles dorment']}},
    {es:'Caminar',fr:'Marcher',em:'🚶‍♂️',conj:{es:['Yo camino','Tú caminas','Él/Ella camina','Nosotros caminamos','Ustedes caminan','Ellos/Ellas caminan'],fr:['Je marche','Tu marches','Il/Elle marche','Nous marchons','Vous marchez','Ils/Elles marchent']}},
    {es:'Correr',fr:'Courir',em:'🏃‍♂️',conj:{es:['Yo corro','Tú corres','Él/Ella corre','Nosotros corremos','Ustedes corren','Ellos/Ellas corren'],fr:['Je cours','Tu cours','Il/Elle court','Nous courons','Vous courez','Ils/Elles courent']}},
    {es:'Leer',fr:'Lire',em:'📖',conj:{es:['Yo leo','Tú lees','Él/Ella lee','Nosotros leemos','Ustedes leen','Ellos/Ellas leen'],fr:['Je lis','Tu lis','Il/Elle lit','Nous lisons','Vous lisez','Ils/Elles lisent']}},
    {es:'Escribir',fr:'Écrire',em:'✍️',conj:{es:['Yo escribo','Tú escribes','Él/Ella escribe','Nosotros escribimos','Ustedes escriben','Ellos/Ellas escriben'],fr:['J\'écris','Tu écris','Il/Elle écrit','Nous écrivons','Vous écrivez','Ils/Elles écrivent']}},
    {es:'Escuchar',fr:'Écouter',em:'🎧',conj:{es:['Yo escucho','Tú escuchas','Él/Ella escucha','Nosotros escuchamos','Ustedes escuchan','Ellos/Ellas escuchan'],fr:['J\'écoute','Tu écoutes','Il/Elle écoute','Nous écoutons','Vous écoutez','Ils/Elles écoutent']}},
    {es:'Mirar',fr:'Regarder',em:'👀',conj:{es:['Yo miro','Tú miras','Él/Ella mira','Nosotros miramos','Ustedes miran','Ellos/Ellas miran'],fr:['Je regarde','Tu regardes','Il/Elle regarde','Nous regardons','Vous regardez','Ils/Elles regardent']}},
    {es:'Aprender',fr:'Apprendre',em:'🧠',conj:{es:['Yo aprendo','Tú aprendes','Él/Ella aprende','Nosotros aprendemos','Ustedes aprenden','Ellos/Ellas aprenden'],fr:['J\'apprends','Tu apprends','Il/Elle apprend','Nous apprenons','Vous apprenez','Ils/Elles apprennent']}},
    {es:'Pensar',fr:'Penser',em:'🤔',conj:{es:['Yo pienso','Tú piensas','Él/Ella piensa','Nosotros pensamos','Ustedes piensan','Ellos/Ellas piensan'],fr:['Je pense','Tu penses','Il/Elle pense','Nous pensons','Vous pensez','Ils/Elles pensent']}},
    {es:'Tomar (VE) / Coger (evitado en VE)',fr:'Prendre',em:'🤲',conj:{es:['Yo tomo','Tú tomas','Él/Ella toma','Nosotros tomamos','Ustedes toman','Ellos/Ellas toman'],fr:['Je prends','Tu prends','Il/Elle prend','Nous prenons','Vous prenez','Ils/Elles prennent']}},
    {es:'Dar',fr:'Donner',em:'🤲',conj:{es:['Yo doy','Tú das','Él/Ella da','Nosotros damos','Ustedes dan','Ellos/Ellas dan'],fr:['Je donne','Tu donnes','Il/Elle donne','Nous donnons','Vous donnez','Ils/Elles donnent']}},
    {es:'Buscar',fr:'Chercher',em:'🔍',conj:{es:['Yo busco','Tú buscas','Él/Ella busca','Nosotros buscamos','Ustedes buscan','Ellos/Ellas buscan'],fr:['Je cherche','Tu cherches','Il/Elle cherche','Nous cherchons','Vous cherchez','Ils/Elles cherchent']}},
    {es:'Comprar',fr:'Acheter',em:'🛒',conj:{es:['Yo compro','Tú compras','Él/Ella compra','Nosotros compramos','Ustedes compran','Ellos/Ellas compran'],fr:['J\'achète','Tu achètes','Il/Elle achète','Nous achetons','Vous achetez','Ils/Elles achètent']}},
    {es:'Vender',fr:'Vendre',em:'💰',conj:{es:['Yo vendo','Tú vendes','Él/Ella vende','Nosotros vendemos','Ustedes venden','Ellos/Ellas venden'],fr:['Je vends','Tu vends','Il/Elle vend','Nous vendons','Vous vendez','Ils/Elles vendent']}},
    {es:'Pagar',fr:'Payer',em:'💳',conj:{es:['Yo pago','Tú pagas','Él/Ella paga','Nosotros pagamos','Ustedes pagan','Ellos/Ellas pagan'],fr:['Je paie','Tu paies','Il/Elle paie','Nous payons','Vous payez','Ils/Elles paient']}},
    {es:'Trabajar',fr:'Travailler',em:'💼',conj:{es:['Yo trabajo','Tú trabajas','Él/Ella trabaja','Nosotros trabajamos','Ustedes trabajan','Ellos/Ellas trabajan'],fr:['Je travaille','Tu travailles','Il/Elle travaille','Nous travaillons','Vous travaillez','Ils/Elles travaillent']}},
    {es:'Manejar / Conducir (manejar muy usado en VE)',fr:'Conduire',em:'🚗',conj:{es:['Yo manejo','Tú manejas','Él/Ella maneja','Nosotros manejamos','Ustedes manejan','Ellos/Ellas manejan'],fr:['Je conduis','Tu conduis','Il/Elle conduit','Nous conduisons','Vous conduisez','Ils/Elles conduisent']}},
    {es:'Limpiar',fr:'Nettoyer',em:'🧹',conj:{es:['Yo limpio','Tú limpias','Él/Ella limpia','Nosotros limpiamos','Ustedes limpian','Ellos/Ellas limpian'],fr:['Je nettoie','Tu nettoies','Il/Elle nettoie','Nous nettoyons','Vous nettoyez','Ils/Elles nettoient']}},
    {es:'Llegar',fr:'Arriver',em:'🛬',conj:{es:['Yo llego','Tú llegas','Él/Ella llega','Nosotros llegamos','Ustedes llegan','Ellos/Ellas llegan'],fr:['J\'arrive','Tu arrives','Il/Elle arrive','Nous arrivons','Vous arrivez','Ils/Elles arrivent']}},
    {es:'Llamar',fr:'Appeler',em:'📞',conj:{es:['Yo llamo','Tú llamas','Él/Ella llama','Nosotros llamamos','Ustedes llaman','Ellos/Ellas llaman'],fr:['J\'appelle','Tu appelles','Il/Elle appelle','Nous appelons','Vous appelez','Ils/Elles appellent']}},
    {es:'¡Qué chévere! / ¡Qué fino! (argot emblema Venezuela)',fr:'Super ! / Génial !',em:'😎',conj:{es:['¡Qué chévere!','¡Qué fino!','¡Qué bueno!','¡Bacano!','¡Está bien!','¡Vamos!'],fr:['Super !','Génial !','Très bien !','Excellent !','D\'accord !','Allez !']}}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Yo soy / estoy" en francés?',opts:['J\'ai','Tu es','Je suis','Il est'],ans:2},
    {q:'¿Cómo se dice "Tú manejas" en francés? (verbo VE)',opts:['Tu cours','Tu marches','Tu conduis','Tu pars'],ans:2},
    {q:'¿Cómo se dice "Yo aprendo" en francés?',opts:['Tu enseignes','Tu écoutes','J\'apprends','Je lis'],ans:2},
    {q:'¿Cómo se dice "Ellos venden" en francés?',opts:['Ils achètent','Ils cherchent','Ils vendent','Ils donnent'],ans:2},
    {q:'¿Cómo se dice "Él duerme" en francés?',opts:['Il court','Il marche','Il dort','Il mange'],ans:2},
    {q:'¿Cómo se dice "Ustedes viven" en francés? (VE)',opts:['Vous habitez','Nous habitons','Ils habitent','J\'habite'],ans:0},
    {q:'¿Cómo se dice "Yo como" en francés?',opts:['Je bois','Je mange','Je dors','Je marche'],ans:1},
    {q:'¿Cómo se dice "Ella toma el bus" (VE) en francés?',opts:['Elle rate le bus','Elle cherche le bus','Elle prend le bus','Elle attend le bus'],ans:2},
    {q:'¿Cómo se dice "Ellos comen" en francés?',opts:['Nous mangeons','Vous mangez','Ils mangent','Je mange'],ans:2},
    {q:'¿Cómo se dice "Nosotros trabajamos" en francés?',opts:['Je nettoie','Je cuisine','Nous travaillons','Nous conduisons'],ans:2},
    {q:'¿Cómo se dice "Tú llegas" en francés?',opts:['Tu pars','Tu arrives','Tu cherches','Tu paies'],ans:1},
    {q:'¿Cómo se dice "Nosotros hablamos" en francés?',opts:['Je parle','Nous parlons','Ils parlent','Vous parlez'],ans:1}
   ]},

  /* ── Cuerpo ── */
  {id:'corps',level:1,emoji:'🧍',name:'El Cuerpo',sub:'Cabeza, brazo, pie… / Le corps en français',
   words:[
    {es:'La cabeza',fr:'La tête',em:'🗣️'},
    {es:'El pelo / El cabello',fr:'Les cheveux',em:'💇‍♂️'},
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
    {es:'La barriga / La panza (panza muy usado en VE)',fr:'Le ventre',em:'🫃'},
    {es:'La pierna / Las piernas',fr:'La jambe / Les jambes',em:'🦵'},
    {es:'El pie / Los pies',fr:'Le pied / Les pieds',em:'🦶'},
    {es:'El corazón',fr:'Le cœur',em:'❤️'},
    {es:'El cerebro',fr:'Le cerveau',em:'🧠'},
    {es:'El hueso / Los huesos',fr:'L\'os / Les os',em:'🦴'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La cabeza" en francés?',opts:['Le nez','La bouche','La tête','Le cou'],ans:2},
    {q:'¿Cómo se dice "Los ojos" en francés?',opts:['Les oreilles','Le nez','Les lèvres','Les yeux'],ans:3},
    {q:'¿Cómo se dice "La mano" en francés?',opts:['Le pied','La jambe','Le bras','La main'],ans:3},
    {q:'¿Cómo se dice "La nariz" en francés?',opts:['La bouche','Le nez','L\'oreille','Le cou'],ans:1},
    {q:'¿Cómo se dice "La pierna" en francés?',opts:['Le bras','La jambe','Le pied','Le dos'],ans:1},
    {q:'¿Cómo se dice "El cerebro" en francés?',opts:['Le cœur','Le ventre','Le cerveau','L\'os'],ans:2},
    {q:'¿Cómo se dice "Los dientes" en francés?',opts:['Les lèvres','La langue','Les dents','Les oreilles'],ans:2},
    {q:'¿Cómo se dice "El corazón" en francés?',opts:['Le cerveau','Le cœur','L\'os','Le dos'],ans:1}
   ]},

  /* ── Salud ── */
  {id:'sante',level:1,emoji:'🏥',name:'La Salud',sub:'Médico, farmacia… / La santé en français',
   words:[
    {es:'Dolerme / Me duele',fr:'Avoir mal / J\'ai mal',em:'🤕'},
    {es:'Tener dolor',fr:'Avoir une douleur',em:'😣'},
    {es:'La fiebre / El calenturón (VE = fiebre alta)',fr:'La fièvre',em:'🌡️'},
    {es:'La tos',fr:'La toux',em:'😮‍💨'},
    {es:'El pañuelo desechable',fr:'Le mouchoir jetable',em:'🤧'},
    {es:'El termómetro',fr:'Le thermomètre',em:'🌡️'},
    {es:'La cita médica',fr:'Le rendez-vous médical',em:'📅'},
    {es:'El médico / El doctor / La doctora',fr:'Le médecin / Le docteur',em:'🩺'},
    {es:'El/la paciente',fr:'Le/la patient(e)',em:'🛏️'},
    {es:'La consulta médica',fr:'La consultation médicale',em:'📋'},
    {es:'El enfermero / La enfermera',fr:'L\'infirmier / L\'infirmière',em:'👨‍⚕️'},
    {es:'El hospital / La clínica',fr:'L\'hôpital / La clinique',em:'🏥'},
    {es:'La receta médica',fr:'L\'ordonnance',em:'📋'},
    {es:'La farmacia',fr:'La pharmacie',em:'🏪'},
    {es:'El medicamento / La medicina',fr:'Le médicament',em:'💊'},
    {es:'La pastilla / La tableta',fr:'Le comprimé',em:'💊'},
    {es:'La vacuna',fr:'Le vaccin',em:'💉'},
    {es:'La curita (= tiritas en VE)',fr:'Le pansement adhésif',em:'🩹'},
    {es:'El vendaje',fr:'Le bandage',em:'🩼'},
    {es:'La ambulancia',fr:'L\'ambulance',em:'🚑'},
    {es:'La sala de emergencias',fr:'Les urgences',em:'🆘'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El hospital / la clínica" en francés?',opts:['La pharmacie','L\'hôpital','Les urgences','La consultation'],ans:1},
    {q:'¿Cómo se dice "La fiebre" en francés?',opts:['La toux','La douleur','La fièvre','La grippe'],ans:2},
    {q:'¿Cómo se dice "La vacuna" en francés?',opts:['Le pansement','Le vaccin','Le bandage','Le médicament'],ans:1},
    {q:'¿Cómo se dice "La curita" (VE) en francés?',opts:['L\'injection','Le vaccin','Le pansement adhésif','Le médicament'],ans:2},
    {q:'¿Cómo se dice "La receta médica" en francés?',opts:['La consultation','Le médicament','L\'ordonnance','Le vaccin'],ans:2},
    {q:'¿Cómo se dice "La sala de emergencias" en francés?',opts:['Le médecin de garde','La salle d\'attente','Les urgences','La consultation'],ans:2},
    {q:'¿Cómo se dice "El termómetro" en francés?',opts:['La tension','Le thermomètre','La fièvre','L\'injection'],ans:1},
    {q:'¿Cómo se dice "La cita médica" en francés?',opts:['Une visite','Le rendez-vous médical','Une ordonnance','Une consultation'],ans:1}
   ]},

  /* ── Ocio ── */
  {id:'ocio',level:1,emoji:'⛰️',name:'El Ocio',sub:'Deporte, playa, béisbol… / Les loisirs en français',
   words:[
    {es:'La lectura',fr:'La lecture',em:'📚'},
    {es:'El libro',fr:'Le livre',em:'📖'},
    {es:'La música / El joropo (música nacional venezolana)',fr:'La musique / Le joropo',em:'🎵'},
    {es:'El cine',fr:'Le cinéma',em:'🎬'},
    {es:'El teatro',fr:'Le théâtre',em:'🎭'},
    {es:'El deporte',fr:'Le sport',em:''},
    {es:'El béisbol (deporte nacional de Venezuela)',fr:'Le baseball',em:'⚾'},
    {es:'El fútbol',fr:'Le football',em:'⚽'},
    {es:'La natación',fr:'La natation',em:'🏊'},
    {es:'El ciclismo',fr:'Le cyclisme',em:'🚴'},
    {es:'El senderismo / La caminata',fr:'La randonnée',em:'🥾'},
    {es:'El paseo',fr:'La balade / La promenade',em:'🌳'},
    {es:'Jugar',fr:'Jouer',em:'🎮'},
    {es:'Practicar',fr:'Pratiquer',em:'💪'},
    {es:'Descansar / Relajarse',fr:'Se reposer / Se détendre',em:'😴'},
    {es:'Disfrutar / Gozar',fr:'Profiter / Apprécier',em:'😊'}
   ],
   quiz10:[
    {q:'¿Cuál es el deporte nacional de Venezuela? ¿Cómo se dice en francés?',opts:['Le football','Le baseball','La natation','Le cyclisme'],ans:1},
    {q:'¿Cómo se dice "La natación" en francés?',opts:['Le cyclisme','L\'athlétisme','La natation','Le football'],ans:2},
    {q:'¿Cómo se dice "El libro" en francés?',opts:['La lecture','La musique','Le livre','Le cinéma'],ans:2},
    {q:'¿Cómo se dice "El joropo" en francés?',opts:['Un sport','La musique nationale','Un plat','Une danse moderne'],ans:1},
    {q:'¿Cómo se dice "Descansar" en francés?',opts:['Jouer','Pratiquer','Apprécier','Se reposer'],ans:3},
    {q:'¿Cómo se dice "El cine" en francés?',opts:['Le théâtre','La musique','La lecture','Le cinéma'],ans:3},
    {q:'¿Cómo se dice "Jugar" en francés?',opts:['Pratiquer','Profiter','Se reposer','Jouer'],ans:3},
    {q:'¿Cómo se dice "Gozar / Disfrutar" en francés?',opts:['Se reposer','Jouer','Pratiquer','Profiter'],ans:3}
   ]},

  /* ── Ropa ── */
  {id:'veth',level:1,emoji:'👗',name:'La Ropa',sub:'Franela, pantalón… / Les vêtements en français',
   words:[
    {es:'La franela (= camiseta/t-shirt en VE)',fr:'Le t-shirt',em:'👕'},
    {es:'La camisa',fr:'La chemise',em:'👔'},
    {es:'El pantalón',fr:'Le pantalon',em:'👖'},
    {es:'Los zapatos / Los tenis (tenis = zapatillas VE)',fr:'Les chaussures / Les baskets',em:'👟'},
    {es:'Los calcetines / Las medias (medias muy usado en VE)',fr:'Les chaussettes',em:'🧦'},
    {es:'El vestido / La falda',fr:'La robe / La jupe',em:'👗'},
    {es:'Los shorts / El pantalón corto',fr:'Le short',em:'🩳'},
    {es:'El suéter / El sweater (en VE = suéter o sweater)',fr:'Le pull',em:'🧥'},
    {es:'La chaqueta / La chamarra',fr:'La veste',em:'🧥'},
    {es:'El sombrero / La gorra',fr:'Le chapeau / La casquette',em:'🎩'},
    {es:'El abrigo / La gabardina',fr:'Le manteau / L\'imperméable',em:'🧥'},
    {es:'La bufanda',fr:'L\'écharpe',em:'🧣'},
    {es:'Los guantes',fr:'Les gants',em:'🧤'},
    {es:'El bolso / La cartera',fr:'Le sac / Le sac à main',em:'👜'},
    {es:'El vestido de baño / El traje de baño (VE)',fr:'Le maillot de bain',em:'🩱'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La franela" (VE) en francés?',opts:['Le pull','La chemise','Le t-shirt','La veste'],ans:2},
    {q:'¿Cómo se dice "Los zapatos" en francés?',opts:['Les chaussettes','Les baskets','Les chaussures','Le chapeau'],ans:2},
    {q:'¿Cómo se dice "El suéter / el sweater" (VE) en francés?',opts:['L\'écharpe','La veste','Le pull','Le manteau'],ans:2},
    {q:'¿Cómo se dice "El vestido de baño" (VE) en francés?',opts:['Le maillot de bain','Le bonnet','Le short','Les chaussettes'],ans:0},
    {q:'¿Cómo se dice "La bufanda" en francés?',opts:['Les gants','Le manteau','L\'écharpe','Le bonnet'],ans:2},
    {q:'¿Cómo se dice "El vestido" en francés?',opts:['La jupe','La robe','La veste','Le pull'],ans:1},
    {q:'¿Cómo se dice "Las medias" (VE) en francés?',opts:['Les chaussures','Les gants','Les chaussettes','Le maillot de bain'],ans:2},
    {q:'¿Cómo se dice "La gorra" en francés?',opts:['Le chapeau','La casquette','L\'écharpe','Le bonnet'],ans:1}
   ]},

  /* ── Países ── */
  {id:'pays',level:1,emoji:'🌍',name:'Los Países',sub:'Francia, Venezuela… / Les pays en français',
   words:[
    {es:'Francia',fr:'La France',em:'🇫🇷'},
    {es:'Venezuela',fr:'Le Venezuela',em:'🇻🇪'},
    {es:'España',fr:'L\'Espagne',em:'🇪🇸'},
    {es:'Portugal',fr:'Le Portugal',em:'🇵🇹'},
    {es:'Italia',fr:'L\'Italie',em:'🇮🇹'},
    {es:'Bélgica',fr:'La Belgique',em:'🇧🇪'},
    {es:'Suiza',fr:'La Suisse',em:'🇨🇭'},
    {es:'Alemania',fr:'L\'Allemagne',em:'🇩🇪'},
    {es:'Reino Unido',fr:'Le Royaume-Uni',em:'🇬🇧'},
    {es:'México',fr:'Le Mexique',em:'🇲🇽'},
    {es:'Colombia',fr:'La Colombie',em:'🇨🇴'},
    {es:'Ecuador',fr:'L\'Équateur',em:'🇪🇨'},
    {es:'Argentina',fr:'L\'Argentine',em:'🇦🇷'},
    {es:'Brasil',fr:'Le Brésil',em:'🇧🇷'},
    {es:'Canadá',fr:'Le Canada',em:'🇨🇦'},
    {es:'Estados Unidos',fr:'Les États-Unis',em:'🇺🇸'},
    {es:'Rusia',fr:'La Russie',em:'🇷🇺'},
    {es:'China',fr:'La Chine',em:'🇨🇳'},
    {es:'Japón',fr:'Le Japon',em:'🇯🇵'},
    {es:'Grecia',fr:'La Grèce',em:'🇬🇷'},
    {es:'Australia',fr:'L\'Australie',em:'🇦🇺'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Francia" en francés?',opts:['La Belgique','La France','La Suisse','Le Portugal'],ans:1},
    {q:'¿Cómo se dice "Alemania" en francés?',opts:['L\'Autriche','Les Pays-Bas','L\'Allemagne','Le Danemark'],ans:2},
    {q:'¿Cómo se dice "Brasil" en francés?',opts:['Le Pérou','Le Chili','Le Brésil','La Bolivie'],ans:2},
    {q:'¿Cómo se dice "Reino Unido" en francés?',opts:['L\'Irlande','Le Royaume-Uni','L\'Écosse','Le Danemark'],ans:1},
    {q:'¿Cómo se dice "Colombia" en francés? (vecino de Venezuela)',opts:['Le Brésil','L\'Équateur','La Colombie','Trinidad'],ans:2},
    {q:'¿Cómo se dice "Grecia" en francés?',opts:['La Turquie','La Grèce','L\'Italie','Chypre'],ans:1},
    {q:'¿Cómo se dice "México" en francés?',opts:['La Colombie','Le Mexique','L\'Argentine','Le Chili'],ans:1},
    {q:'¿Cómo se dice "Argentina" en francés?',opts:['La Bolivie','La Colombie','L\'Argentine','Le Chili'],ans:2}
   ]},

  /* ── Profesiones ── */
  {id:'met',level:1,emoji:'💼',name:'Las Profesiones',sub:'Médico, profe, mesonero… / Les professions en français',
   words:[
    {es:'El/la estudiante',fr:'L\'étudiant / L\'étudiante',em:'🎓'},
    {es:'El profesor / La profesora',fr:'Le professeur / La professeure',em:'👩‍🏫'},
    {es:'El mesonero / La mesonera (= camarero/a específico VE)',fr:'Le serveur / La serveuse',em:'🍽️'},
    {es:'El vendedor / La vendedora',fr:'Le vendeur / La vendeuse',em:'🏪'},
    {es:'El/la taxista',fr:'Le chauffeur de taxi',em:'🚕'},
    {es:'El médico / El doctor / La doctora',fr:'Le médecin / Le docteur',em:'🩺'},
    {es:'El enfermero / La enfermera',fr:'L\'infirmier / L\'infirmière',em:'👨‍⚕️'},
    {es:'El cocinero / La cocinera',fr:'Le cuisinier / La cuisinière',em:'👨‍🍳'},
    {es:'El plomero / La plomera (= fontanero en VE)',fr:'Le plombier',em:'🔧'},
    {es:'El técnico en sistemas / La técnica en sistemas',fr:'Le/la technicien(ne) en informatique',em:'💻'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El médico / el doctor" en francés?',opts:['Le professeur','Le médecin / le docteur','L\'infirmier','Le cuisinier'],ans:1},
    {q:'¿Cómo se dice "El profesor" en francés?',opts:['L\'étudiant','Le directeur','Le professeur','Le concierge'],ans:2},
    {q:'¿Cómo se dice "El mesonero" (VE) en francés?',opts:['Le cuisinier','Le serveur','Le taxiste','Le vendeur'],ans:1},
    {q:'¿Cómo se dice "El plomero" (VE) en francés?',opts:['Le médecin','Le professeur','Le plombier','Le serveur'],ans:2}
   ]},

  /* ── Animales ── */
  {id:'anim',level:1,emoji:'🐘',name:'Los Animales',sub:'Perro, turpial, chigüire… / Les animaux en français',
   words:[
    {es:'El perro',fr:'Le chien',em:'🐶'},
    {es:'El gato',fr:'Le chat',em:'🐱'},
    {es:'El pájaro / El turpial (ave nacional de Venezuela)',fr:'L\'oiseau / Le troupiale',em:'🐦'},
    {es:'El pez',fr:'Le poisson (vivant)',em:'🐟'},
    {es:'El caballo',fr:'Le cheval',em:'🐴'},
    {es:'La vaca',fr:'La vache',em:'🐮'},
    {es:'El cerdo',fr:'Le cochon',em:'🐷'},
    {es:'La gallina',fr:'La poule',em:'🐔'},
    {es:'El conejo',fr:'Le lapin',em:'🐰'},
    {es:'El chigüire (= capibara — roedor emblemático de Venezuela)',fr:'Le capybara',em:'🦫'},
    {es:'El toro',fr:'Le taureau',em:'🐂'},
    {es:'El pato',fr:'Le canard',em:'🦆'},
    {es:'El loro',fr:'Le perroquet',em:'🦜'},
    {es:'El delfín',fr:'Le dauphin',em:'🐬'},
    {es:'La ballena',fr:'La baleine',em:'🐳'},
    {es:'El flamenco (= flamingo, ave típica del Caribe venezolano)',fr:'Le flamant rose',em:'🦩'},
    {es:'La mariposa',fr:'Le papillon',em:'🦋'},
    {es:'La rana',fr:'La grenouille',em:'🐸'},
    {es:'La serpiente / La culebra (culebra muy usado en VE)',fr:'Le serpent',em:'🐍'},
    {es:'El caimán',fr:'Le caïman',em:'🐊'},
    {es:'La araña',fr:'L\'araignée',em:'🕷️'},
    {es:'El mosquito / El zancudo (zancudo muy usado en VE)',fr:'Le moustique',em:'🦟'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El perro" en francés?',opts:['Le chat','Le cheval','Le chien','Le lapin'],ans:2},
    {q:'¿Cómo se dice "El turpial" (ave nacional VE) en francés?',opts:['Un poisson','Le troupiale','Un serpent','Un insecte'],ans:1},
    {q:'¿Cómo se dice "El chigüire" (VE) en francés?',opts:['Un chien sauvage','Le capybara','Un oiseau','Un serpent'],ans:1},
    {q:'¿Cómo se dice "El loro" en francés?',opts:['Le perroquet','Le pigeon','La poule','Le canard'],ans:0},
    {q:'¿Cómo se dice "El delfín" en francés?',opts:['La baleine','Le caïman','Le dauphin','Le poisson'],ans:2},
    {q:'¿Cómo se dice "La culebra" (VE) en francés?',opts:['Le lézard','La grenouille','Le serpent','L\'insecte'],ans:2},
    {q:'¿Cómo se dice "El gallo" en francés?',opts:['La poule','Le poulet','Le coq','Le canard'],ans:2},
    {q:'¿Cómo se dice "El flamenco" (VE — ave caribeña) en francés?',opts:['Un style de danse','Le flamant rose','Un rapace','Un poisson'],ans:1}
   ]},

  /* ── Plantas ── */
  {id:'plan',level:1,emoji:'🌿',name:'Las Plantas',sub:'Flor, árbol, selva… / Les plantes en français',
   words:[
    {es:'La flor / La orquídea (= flor nacional de Venezuela)',fr:'La fleur / L\'orchidée',em:'🌸'},
    {es:'El árbol',fr:'L\'arbre',em:'🌳'},
    {es:'La hoja',fr:'La feuille',em:'🍃'},
    {es:'La hierba / El pasto',fr:'L\'herbe / La pelouse',em:'🌱'},
    {es:'El jardín',fr:'Le jardin',em:'🏡'},
    {es:'La rosa',fr:'La rose',em:'🌹'},
    {es:'El bosque / La selva / La jungla',fr:'La forêt / La jungle',em:'🌲'},
    {es:'El manglar (típico de las costas venezolanas)',fr:'La mangrove',em:'🌿'},
    {es:'El césped / El pasto',fr:'La pelouse / Le gazon',em:'⛳'}
   ],
   quiz10:[
    {q:'¿Cuál es la flor nacional de Venezuela? ¿Cómo se dice en francés?',opts:['La rose','L\'orchidée','Le lis','L\'œillet'],ans:1},
    {q:'¿Cómo se dice "El árbol" en francés?',opts:['La feuille','L\'herbe','L\'arbre','La fleur'],ans:2},
    {q:'¿Cómo se dice "El bosque / La selva" en francés?',opts:['Le jardin','La forêt / la jungle','Le champ','Le parc'],ans:1},
    {q:'¿Cómo se dice "El manglar" (costa venezolana) en francés?',opts:['Une forêt de montagne','La mangrove','Un jardin botanique','Un champ'],ans:1},
    {q:'¿Cómo se dice "El jardín" en francés?',opts:['La forêt','L\'arbre','Le jardin','La fleur'],ans:2}
   ]}
];


/* ========================================
   Français pour Vénézuéliens 🇻🇪→🇫🇷 – Niveau 2
   14 situations de dialogues — Niveau A1
   Langue source : Español venezolano | Cible : FRANÇAIS
   © 2026 Sébastien Godet
======================================== */

var LEVEL2_THEMES = [

  /* 1 ── Saluer */
  {id:'salut2',level:2,emoji:'👋',name:'Saludos',sub:'Saluer en français / Dire bonjour',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'En la calle',img:'🏘️',dialogue:[
      {s:'Lucas',es:'¡Hola, pana! ¿Qué tal?',fr:'Salut, mon pote ! Ça va ?',side:'left'},
      {s:'Ana',es:'¡Bien, gracias! ¿Y tú, chamo?',fr:'Bien, merci ! Et toi ?',side:'right'},
      {s:'Lucas',es:'Más o menos. Estoy cansado.',fr:'Comme ci comme ça. Je suis fatigué.',side:'left'},
      {s:'Ana',es:'¡Qué vaina! Lo siento.',fr:'Dommage ! Je suis désolée.',side:'right'},
      {s:'Lucas',es:'Gracias. ¡Hasta luego!',fr:'Merci. À plus !',side:'left'},
      {s:'Ana',es:'¡Hasta pronto, pana!',fr:'À bientôt, l\'ami !',side:'right'}
    ]},
    {label:'Sit. 2',title:'En la oficina, por la mañana',img:'💼',dialogue:[
      {s:'Pedro',es:'¡Buenos días! ¿Cómo estás?',fr:'Bonjour ! Comment tu vas ?',side:'left'},
      {s:'María',es:'Bien, gracias. ¿Y tú?',fr:'Bien, merci. Et toi ?',side:'right'},
      {s:'Pedro',es:'Un poco cansado. ¿Quieres café negro?',fr:'Un peu fatigué. Tu veux un café noir ?',side:'left'},
      {s:'María',es:'Sí, por favor. ¡Gracias!',fr:'Oui, s\'il te plaît. Merci !',side:'right'},
      {s:'Pedro',es:'De nada. ¡Aquí tienes!',fr:'De rien. Voilà !',side:'left'}
    ]},
    {label:'Sit. 3',title:'Reencontrarse con un pana',img:'☀️',dialogue:[
      {s:'Carlos',es:'¡Hola, chamo! ¿Qué más?',fr:'Salut, mon gars ! Quoi de neuf ?',side:'left'},
      {s:'Sofía',es:'¡Aquí, bien! ¿Y tú?',fr:'Là, ça va ! Et toi ?',side:'right'},
      {s:'Carlos',es:'Bien. ¿Qué hay de nuevo?',fr:'Bien. Quoi de neuf ?',side:'left'},
      {s:'Sofía',es:'Nada especial. ¿Tomamos algo?',fr:'Rien de spécial. On prend quelque chose ?',side:'right'},
      {s:'Carlos',es:'¡Qué chévere! Tengo sed.',fr:'Super ! J\'ai soif.',side:'left'},
      {s:'Sofía',es:'¡Yo también!',fr:'Moi aussi !',side:'right'}
    ]}
   ],
   vocab:['Salut ! = ¡Hola! (informal)','Ça va ? = ¿Cómo estás, pana?','Bien, merci = Bien, gracias','Comme ci comme ça = Más o menos','Dommage ! = ¡Qué vaina! (VE)','À bientôt = Hasta pronto','Quoi de neuf ? = ¿Qué más? / ¿Qué hay? (VE)'],
   quiz:[
    {q:'¿Cómo se dice "Más o menos" en francés?',opts:['Très bien','Très mal','Comme ci comme ça','Je suis fatigué'],ans:2},
    {q:'¿Cómo se dice "¡Qué vaina! / Lo siento" (VE) en francés?',opts:['Merci','Dommage ! / Je suis désolé','De rien','Pardon'],ans:1},
    {q:'¿Cómo se dice "Pana" (VE) en francés?',opts:['Le pain','L\'ami / le pote','Le patron','Le quartier'],ans:1}
   ]},

  /* 2 ── Presentarse */
  {id:'pres2',level:2,emoji:'🙋',name:'Presentarse',sub:'Decir tu nombre y de dónde eres / Se présenter',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'En un curso de francés',img:'📚',dialogue:[
      {s:'Profe',es:'¡Hola! ¿Cómo te llamas, chamo?',fr:'Bonjour ! Tu t\'appelles comment ?',side:'right'},
      {s:'Marc',es:'Me llamo Marc. ¿Y usted?',fr:'Je m\'appelle Marc. Et vous ?',side:'left'},
      {s:'Profe',es:'Yo soy Laura. ¿De dónde eres?',fr:'Je suis Laura. Tu es d\'où ?',side:'right'},
      {s:'Marc',es:'Soy de Francia, de París. ¿Y usted?',fr:'Je suis de France, de Paris. Et vous ?',side:'left'},
      {s:'Profe',es:'Soy de Caracas. ¡Bienvenido, pana!',fr:'Je suis de Caracas. Bienvenue, l\'ami !',side:'right'},
      {s:'Marc',es:'¡Gracias!',fr:'Merci !',side:'left'}
    ]},
    {label:'Sit. 2',title:'Encuentro en el barrio',img:'🏙️',dialogue:[
      {s:'Vecino',es:'¡Hola! ¿Eres nuevo por aquí?',fr:'Bonjour ! Tu es nouveau ici ?',side:'right'},
      {s:'Julie',es:'Sí. Me llamo Julie. Soy francesa.',fr:'Oui. Je m\'appelle Julie. Je suis française.',side:'left'},
      {s:'Vecino',es:'Yo soy Antonio. ¿Hablas español?',fr:'Moi je suis Antonio. Tu parles espagnol ?',side:'right'},
      {s:'Julie',es:'Un poco. Estoy aprendiendo.',fr:'Un peu. Je suis en train d\'apprendre.',side:'left'},
      {s:'Vecino',es:'¡Qué chévere! Tu español está muy bueno.',fr:'Super ! Ton espagnol est très bon.',side:'right'},
      {s:'Julie',es:'¡Gracias, pana! Eres muy amable.',fr:'Merci, l\'ami ! Tu es très gentil.',side:'left'}
    ]},
    {label:'Sit. 3',title:'En una fiesta',img:'🎉',dialogue:[
      {s:'Chama',es:'¡Hola! ¿Cómo te llamas?',fr:'Salut ! Tu t\'appelles comment ?',side:'right'},
      {s:'Thomas',es:'Thomas. ¿Y tú?',fr:'Thomas. Et toi ?',side:'left'},
      {s:'Chama',es:'Yo soy Lucía. ¿Eres francés?',fr:'Moi je suis Lucía. Tu es français ?',side:'right'},
      {s:'Thomas',es:'Sí, soy de Lyon. ¿Y tú eres de Caracas?',fr:'Oui, je suis de Lyon. Et toi tu es de Caracas ?',side:'left'},
      {s:'Chama',es:'No, soy de Maracaibo. ¡Encantada!',fr:'Non, je suis de Maracaibo. Enchantée !',side:'right'},
      {s:'Thomas',es:'¡Encantado, chama!',fr:'Enchanté !',side:'left'}
    ]}
   ],
   vocab:['Je m\'appelle = Me llamo','Tu es d\'où ? = ¿De dónde eres?','Je suis de = Soy de','Je suis français(e) = Soy francés/francesa','Je suis en train d\'apprendre = Estoy aprendiendo','Bienvenue ! = ¡Bienvenido!','Enchanté(e) ! = ¡Encantado(a)!'],
   quiz:[
    {q:'¿Cómo se dice "Me llamo" en francés?',opts:['Je suis','Je m\'appelle','J\'ai','Je vis'],ans:1},
    {q:'¿Cómo se dice "¿De dónde eres?" en francés?',opts:['Comment tu t\'appelles ?','Quel âge tu as ?','Tu es d\'où ?','Tu habites où ?'],ans:2},
    {q:'¿Cómo se dice "¡Encantado!" en francés?',opts:['Merci','Je suis désolé','Pardon','Enchanté !'],ans:3}
   ]},

  /* 3 ── Pedir camino */
  {id:'chemin2',level:2,emoji:'🗺️',name:'Pedir camino',sub:'Preguntar el camino / S\'orienter en ville',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Encontrar el terminal',img:'🚌',dialogue:[
      {s:'Turista',es:'Perdona, ¿dónde está el terminal?',fr:'Pardon, où est la gare routière ?',side:'left'},
      {s:'Señora',es:'Sigue derecho y dobla a la izquierda.',fr:'Continue tout droit et tourne à gauche.',side:'right'},
      {s:'Turista',es:'¿Está lejos?',fr:'C\'est loin ?',side:'left'},
      {s:'Señora',es:'No, está cerca. Son cinco minutos.',fr:'Non, c\'est près. C\'est cinq minutes.',side:'right'},
      {s:'Turista',es:'Muchas gracias.',fr:'Merci beaucoup.',side:'left'},
      {s:'Señora',es:'¡De nada, chamo!',fr:'De rien !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Encontrar una farmacia',img:'💊',dialogue:[
      {s:'Marc',es:'Perdona, ¿hay una farmacia cerca?',fr:'Pardon, il y a une pharmacie près d\'ici ?',side:'left'},
      {s:'Chico',es:'Sí. Baja esta calle y dobla a la derecha.',fr:'Oui. Descends cette rue et tourne à droite.',side:'right'},
      {s:'Marc',es:'¿Después del banco?',fr:'Après la banque ?',side:'left'},
      {s:'Chico',es:'Sí, exacto. Es la puerta verde.',fr:'Oui, exactement. C\'est la porte verte.',side:'right'},
      {s:'Marc',es:'¿Está abierta ahora?',fr:'Elle est ouverte maintenant ?',side:'left'},
      {s:'Chico',es:'Sí, creo que sí.',fr:'Oui, je crois que oui.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Encontrar un supermercado',img:'🛒',dialogue:[
      {s:'Julie',es:'Perdone, ¿hay un supermercado por aquí?',fr:'Pardon, il y a un supermarché ici ?',side:'left'},
      {s:'Señor',es:'Sí, está enfrente, al lado de la bodega.',fr:'Oui, il est en face, à côté de la supérette.',side:'right'},
      {s:'Julie',es:'¿A la derecha o a la izquierda?',fr:'À droite ou à gauche ?',side:'left'},
      {s:'Señor',es:'A la derecha. Es muy grande.',fr:'À droite. Il est très grand.',side:'right'},
      {s:'Julie',es:'¡Chévere! Gracias.',fr:'Super ! Merci.',side:'left'},
      {s:'Señor',es:'¡De nada!',fr:'De rien !',side:'right'}
    ]}
   ],
   vocab:['Pardon / Excusez-moi = Perdona / Disculpa','Où est... ? = ¿Dónde está...?','Tout droit = Derecho / Todo recto','À gauche = A la izquierda','À droite = A la derecha','Près = Cerca','Loin = Lejos'],
   quiz:[
    {q:'¿Cómo se dice "Todo recto / derecho" en francés?',opts:['À droite','À gauche','Tout droit','En face'],ans:2},
    {q:'¿Cómo se dice "¿Hay una farmacia cerca?" en francés?',opts:['La pharmacie est fermée','Il y a une pharmacie près d\'ici ?','Où est la pharmacie ?','La pharmacie est loin ?'],ans:1},
    {q:'¿Cómo se dice "A la izquierda" en francés?',opts:['Tout droit','À droite','Derrière','À gauche'],ans:3}
   ]},

  /* 4 ── En el café */
  {id:'bar2',level:2,emoji:'☕',name:'En el café',sub:'Pedir en un café venezolano / Commander au café',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Pedido simple',img:'☕',dialogue:[
      {s:'Cliente',es:'¡Hola! Un café con leche, por favor.',fr:'Bonjour ! Un café au lait, s\'il vous plaît.',side:'left'},
      {s:'Mesonero',es:'¿Negro o con leche?',fr:'Noir ou au lait ?',side:'right'},
      {s:'Cliente',es:'Con leche, por favor.',fr:'Au lait, s\'il vous plaît.',side:'left'},
      {s:'Mesonero',es:'¿Quiere azúcar?',fr:'Vous voulez du sucre ?',side:'right'},
      {s:'Cliente',es:'Sí, uno. ¿Cuánto es?',fr:'Oui, un. C\'est combien ?',side:'left'},
      {s:'Mesonero',es:'Tres dólares.',fr:'Trois dollars.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Pedir pasapalos',img:'🍢',dialogue:[
      {s:'Mesonero',es:'¿Qué van a tomar?',fr:'Qu\'est-ce que vous prenez ?',side:'right'},
      {s:'Clara',es:'Una cerveza bien fría, por favor.',fr:'Une bière bien froide, s\'il vous plaît.',side:'left'},
      {s:'Tomás',es:'Y yo, un jugo de naranja. ¿Tienen pasapalos?',fr:'Et moi, un jus d\'orange. Vous avez des amuse-bouches ?',side:'right'},
      {s:'Mesonero',es:'Sí. Hay tequeños y empanadas.',fr:'Oui. Il y a des tequeños et des empanadas.',side:'right'},
      {s:'Clara',es:'¡Qué chévere! Unos tequeños, por favor.',fr:'Super ! Des tequeños, s\'il vous plaît.',side:'left'},
      {s:'Mesonero',es:'¡Ahorita!',fr:'Tout de suite !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Pagar la cuenta',img:'🧾',dialogue:[
      {s:'Cliente',es:'La cuenta, por favor.',fr:'L\'addition, s\'il vous plaît.',side:'left'},
      {s:'Mesonero',es:'Son quince dólares.',fr:'C\'est quinze dollars.',side:'right'},
      {s:'Cliente',es:'¿Se puede pagar con tarjeta?',fr:'On peut payer par carte ?',side:'left'},
      {s:'Mesonero',es:'Sí, claro, pana.',fr:'Oui, bien sûr.',side:'right'},
      {s:'Cliente',es:'Aquí tiene. Gracias.',fr:'Voilà. Merci.',side:'left'},
      {s:'Mesonero',es:'¡Gracias a usted! ¡Hasta pronto!',fr:'Merci à vous ! À bientôt !',side:'right'}
    ]}
   ],
   vocab:['Un café au lait = Un café con leche','Un café noir = Un café negro','C\'est combien ? = ¿Cuánto es?','L\'addition = La cuenta','On peut payer par carte ? = ¿Se puede pagar con tarjeta?','Tout de suite ! = ¡Ahorita! (VE)','Les tequeños = Los tequeños (palitos de queso fritos, típico VE)'],
   quiz:[
    {q:'¿Cómo se dice "Un café negro" en francés?',opts:['Un café au lait','Un café allongé','Un café noir','Un café froid'],ans:2},
    {q:'¿Cómo se dice "La cuenta, por favor" en francés?',opts:['Le menu, s\'il vous plaît','L\'addition, s\'il vous plaît','Un café, s\'il vous plaît','L\'eau, s\'il vous plaît'],ans:1},
    {q:'¿Cómo se dice "¡Ahorita!" (VE) en francés?',opts:['Plus tard !','Jamais !','Tout de suite !','Demain !'],ans:2}
   ]},

  /* 5 ── En el restaurante */
  {id:'resto2',level:2,emoji:'🍽️',name:'En el restaurante',sub:'Pedir un plato / Au restaurant vénézuélien',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Conseguir una mesa',img:'🪑',dialogue:[
      {s:'Cliente',es:'Hola, ¿tiene una mesa para dos?',fr:'Bonjour, vous avez une table pour deux ?',side:'left'},
      {s:'Mesonera',es:'Sí, por aquí, por favor.',fr:'Oui, par ici, s\'il vous plaît.',side:'right'},
      {s:'Cliente',es:'Gracias. ¿Tiene el menú del día?',fr:'Merci. Vous avez le menu du jour ?',side:'left'},
      {s:'Mesonera',es:'Sí. Hoy hay sopa, pabellón criollo y postre.',fr:'Oui. Aujourd\'hui il y a soupe, pabellón criollo et dessert.',side:'right'},
      {s:'Cliente',es:'¿Cuánto cuesta el menú?',fr:'Le menu coûte combien ?',side:'left'},
      {s:'Mesonera',es:'Diez dólares, bebida incluida.',fr:'Dix dollars, boisson comprise.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Pedir en la mesa',img:'🥗',dialogue:[
      {s:'Mesonero',es:'¿Están listos para pedir?',fr:'Vous êtes prêts à commander ?',side:'right'},
      {s:'Sophie',es:'Sí. De primero, una sopa.',fr:'Oui. En entrée, une soupe.',side:'left'},
      {s:'Mesonero',es:'¿Y de segundo?',fr:'Et en plat ?',side:'right'},
      {s:'Sophie',es:'El pollo, por favor. ¿Tiene algo sin carne?',fr:'Le poulet, s\'il vous plaît. Vous avez quelque chose sans viande ?',side:'left'},
      {s:'Mesonero',es:'Sí, hay caraotas negras con arroz.',fr:'Oui, il y a des haricots noirs avec du riz.',side:'right'},
      {s:'Sophie',es:'¡Qué chévere, eso quiero!',fr:'Super, c\'est ça que je veux !',side:'left'}
    ]},
    {label:'Sit. 3',title:'Un problema con el pedido',img:'🤔',dialogue:[
      {s:'Cliente',es:'Perdona, esto no es lo que pedí.',fr:'Pardon, ce n\'est pas ce que j\'ai commandé.',side:'left'},
      {s:'Mesonero',es:'Lo siento, chamo. ¿Qué pidió usted?',fr:'Je suis désolé. Qu\'est-ce que vous avez commandé ?',side:'right'},
      {s:'Cliente',es:'Pedí el pescado, no la carne.',fr:'J\'ai commandé le poisson, pas la viande.',side:'left'},
      {s:'Mesonero',es:'Disculpe, ahorita mismo lo cambio.',fr:'Excusez-moi, je le change tout de suite.',side:'right'},
      {s:'Cliente',es:'Gracias.',fr:'Merci.',side:'left'},
      {s:'Mesonero',es:'¡Qué vaina! Lo siento mucho.',fr:'Désolé pour ce problème !',side:'right'}
    ]}
   ],
   vocab:['Vous avez une table pour deux ? = ¿Tienen mesa para dos?','Le menu du jour = El menú del día','En entrée = De primero','En plat = De segundo','Sans viande = Sin carne','Boisson comprise = Bebida incluida','Le pabellón criollo = Plato nacional venezolano (caraotas, arroz, carne, tajadas)'],
   quiz:[
    {q:'¿Qué es el "pabellón criollo" en Venezuela? ¿Cómo se dice en francés?',opts:['Une soupe','Le plat national (haricots, riz, viande, banane)','Un dessert','Une boisson'],ans:1},
    {q:'¿Cómo se dice "De primero" en francés?',opts:['Pour le dessert','En plat','Pour boire','En entrée'],ans:3},
    {q:'¿Cómo se dice "Sin carne" en francés?',opts:['Avec de la viande','Sans poisson','Sans viande','Avec du poulet'],ans:2}
   ]},

  /* 6 ── De compras */
  {id:'compras2',level:2,emoji:'🛍️',name:'De compras',sub:'Comprar / Faire ses courses en français',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'En el mercado',img:'🧺',dialogue:[
      {s:'Cliente',es:'Buenos días. ¿Cuánto cuestan los tomates?',fr:'Bonjour. Combien coûtent les tomates ?',side:'left'},
      {s:'Vendedor',es:'Dos dólares el kilo.',fr:'Deux dollars le kilo.',side:'right'},
      {s:'Cliente',es:'Quiero un kilo, por favor.',fr:'Je veux un kilo, s\'il vous plaît.',side:'left'},
      {s:'Vendedor',es:'¿Algo más?',fr:'Autre chose ?',side:'right'},
      {s:'Cliente',es:'Sí, ¿tiene cambures?',fr:'Oui, vous avez des bananes ?',side:'left'},
      {s:'Vendedor',es:'Sí. Son un dólar el kilo.',fr:'Oui. C\'est un dollar le kilo.',side:'right'}
    ]},
    {label:'Sit. 2',title:'En una tienda de ropa',img:'👗',dialogue:[
      {s:'Vendedora',es:'¡Hola! ¿Le puedo ayudar?',fr:'Bonjour ! Je peux vous aider ?',side:'right'},
      {s:'Lucie',es:'Sí, busco una franela.',fr:'Oui, je cherche un t-shirt.',side:'left'},
      {s:'Vendedora',es:'¿Qué talla tiene?',fr:'Vous faites quelle taille ?',side:'right'},
      {s:'Lucie',es:'La talla mediana.',fr:'La taille moyenne.',side:'left'},
      {s:'Vendedora',es:'¿Puede probársela? El probador está aquí.',fr:'Vous pouvez l\'essayer ? La cabine est là.',side:'right'},
      {s:'Lucie',es:'¡Gracias! ¿Cuánto cuesta?',fr:'Merci ! Elle coûte combien ?',side:'left'}
    ]},
    {label:'Sit. 3',title:'En la caja',img:'🛒',dialogue:[
      {s:'Cajero',es:'¡Hola! ¿Todo bien, chamo?',fr:'Bonjour ! Tout va bien ?',side:'right'},
      {s:'Cliente',es:'Sí, gracias. ¿Cuánto es todo?',fr:'Oui, merci. C\'est combien en tout ?',side:'left'},
      {s:'Cajero',es:'Son veinte dólares.',fr:'C\'est vingt dollars.',side:'right'},
      {s:'Cliente',es:'¿Puedo pagar con tarjeta?',fr:'Je peux payer par carte ?',side:'left'},
      {s:'Cajero',es:'Sí, sin problema.',fr:'Oui, sans problème.',side:'right'},
      {s:'Cliente',es:'Aquí tiene. ¡Gracias, pana!',fr:'Voilà. Merci !',side:'left'}
    ]}
   ],
   vocab:['Combien ça coûte ? = ¿Cuánto cuesta?','Je veux = Quiero','Autre chose ? = ¿Algo más?','Je cherche = Busco','La taille = La talla','La cabine d\'essayage = El probador','Le cambur = La banane (Venezuela)'],
   quiz:[
    {q:'¿Cómo se dice "Busco" en francés?',opts:['J\'ai','Je veux','Je cherche','J\'achète'],ans:2},
    {q:'¿Cómo se dice "¿Algo más?" en francés?',opts:['C\'est tout ?','Autre chose ?','Vous avez ça ?','C\'est combien ?'],ans:1},
    {q:'¿Cómo se dice "El cambur" (VE) en francés?',opts:['La pastèque','L\'orange','La banane','La fraise'],ans:2}
   ]},

  /* 7 ── El transporte */
  {id:'transp2',level:2,emoji:'🚌',name:'El transporte',sub:'Tomar el bus y el taxi / Les transports en français',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'En la buseta',img:'🚌',dialogue:[
      {s:'Viajero',es:'Perdona, ¿esta buseta va al centro?',fr:'Pardon, ce bus va au centre ?',side:'left'},
      {s:'Señora',es:'No. Tienes que tomar la que va por la avenida.',fr:'Non. Tu dois prendre celui qui passe par l\'avenue.',side:'right'},
      {s:'Viajero',es:'¿Dónde está la parada?',fr:'Où est l\'arrêt ?',side:'left'},
      {s:'Señora',es:'Allí, a la derecha.',fr:'Là-bas, à droite.',side:'right'},
      {s:'Viajero',es:'¿Cuántas paradas son hasta el centro?',fr:'C\'est combien d\'arrêts jusqu\'au centre ?',side:'left'},
      {s:'Señora',es:'Unas cinco paradas. Baja en la plaza.',fr:'Environ cinq arrêts. Tu descends à la place.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Comprar un pasaje',img:'🎫',dialogue:[
      {s:'Viajero',es:'Hola, quiero un pasaje, por favor.',fr:'Bonjour, je veux un billet, s\'il vous plaît.',side:'left'},
      {s:'Empleada',es:'¿Sencillo o de ida y vuelta?',fr:'Simple ou aller-retour ?',side:'right'},
      {s:'Viajero',es:'¿Cuánto cuesta el sencillo?',fr:'Combien coûte le billet simple ?',side:'left'},
      {s:'Empleada',es:'Dos dólares. El de ida y vuelta son tres.',fr:'Deux dollars. L\'aller-retour c\'est trois.',side:'right'},
      {s:'Viajero',es:'Quiero el de ida y vuelta.',fr:'Je veux l\'aller-retour.',side:'left'},
      {s:'Empleada',es:'Aquí tiene, chamo.',fr:'Voilà.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Tomar un por puesto',img:'🚕',dialogue:[
      {s:'Pasajero',es:'Perdona, ¿me lleva al aeropuerto?',fr:'Pardon, vous pouvez m\'emmener à l\'aéroport ?',side:'left'},
      {s:'Taxista',es:'Sí, pana. Son veinte dólares.',fr:'Oui. C\'est vingt dollars.',side:'right'},
      {s:'Pasajero',es:'¿Cuánto tiempo tarda?',fr:'Ça prend combien de temps ?',side:'left'},
      {s:'Taxista',es:'Unos treinta minutos, sin trancazo.',fr:'Environ trente minutes, sans embouteillage.',side:'right'},
      {s:'Pasajero',es:'¡Está bien! Vamos.',fr:'D\'accord ! Allons-y.',side:'left'},
      {s:'Taxista',es:'¡Vamos, chamo!',fr:'C\'est parti !',side:'right'}
    ]}
   ],
   vocab:['Prendre le bus = Tomar el bus / la buseta (VE)','L\'arrêt = La parada','Le billet = El pasaje (VE)','Descendre à = Bajar en','Combien d\'arrêts ? = ¿Cuántas paradas?','Le taxi collectif = El por puesto (VE)','L\'embouteillage = El trancazo (VE)'],
   quiz:[
    {q:'¿Cómo se dice "Tomar el bus / la buseta" (VE) en francés?',opts:['Aller au bus','Prendre le bus','Descendre du bus','Chercher le bus'],ans:1},
    {q:'¿Cómo se dice "La parada" en francés?',opts:['Le billet','La ligne','L\'arrêt','Le quai'],ans:2},
    {q:'¿Cómo se dice "El trancazo" (VE) en francés?',opts:['Un accident','Un embouteillage','Une panne','Une déviation'],ans:1}
   ]},

  /* 8 ── En la farmacia */
  {id:'farmacia2',level:2,emoji:'💊',name:'En la farmacia',sub:'Comprar medicamentos / À la pharmacie en français',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dolor de cabeza',img:'🤕',dialogue:[
      {s:'Cliente',es:'Hola. Me duele la cabeza. ¿Qué tiene?',fr:'Bonjour. J\'ai mal à la tête. Qu\'est-ce que vous avez ?',side:'left'},
      {s:'Farmacéutica',es:'¿Es alérgico a algún medicamento?',fr:'Vous êtes allergique à un médicament ?',side:'right'},
      {s:'Cliente',es:'No, no soy alérgico.',fr:'Non, je ne suis pas allergique.',side:'left'},
      {s:'Farmacéutica',es:'Le doy un ibuprofeno. Tome uno con comida.',fr:'Je vous donne un ibuprofène. Prenez-en un avec de la nourriture.',side:'right'},
      {s:'Cliente',es:'¿Cuántas veces al día?',fr:'Combien de fois par jour ?',side:'left'},
      {s:'Farmacéutica',es:'Tres veces al día, máximo.',fr:'Trois fois par jour, maximum.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Buscar una farmacia de guardia',img:'🌙',dialogue:[
      {s:'Turista',es:'Perdone, ¿hay una farmacia abierta ahora?',fr:'Pardon, il y a une pharmacie ouverte maintenant ?',side:'left'},
      {s:'Vecina',es:'Las farmacias están cerradas. Busca la farmacia de guardia.',fr:'Les pharmacies sont fermées. Cherche la pharmacie de garde.',side:'right'},
      {s:'Turista',es:'¿Dónde está?',fr:'Elle est où ?',side:'left'},
      {s:'Vecina',es:'Mira el letrero de esta farmacia. Dice cuál está de guardia.',fr:'Regarde l\'affiche de cette pharmacie. Elle indique laquelle est de garde.',side:'right'},
      {s:'Turista',es:'¡Ah, entiendo! ¡Chévere! Gracias.',fr:'Ah, je comprends ! Super ! Merci.',side:'left'},
      {s:'Vecina',es:'¡De nada!',fr:'De rien !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Comprar un medicamento',img:'💉',dialogue:[
      {s:'Cliente',es:'Hola. ¿Tiene algo para la tos?',fr:'Bonjour. Vous avez quelque chose pour la toux ?',side:'left'},
      {s:'Farmacéutico',es:'Sí. ¿Es para adulto o para niño?',fr:'Oui. C\'est pour un adulte ou un enfant ?',side:'right'},
      {s:'Cliente',es:'Para adulto.',fr:'Pour un adulte.',side:'left'},
      {s:'Farmacéutico',es:'Tome este jarabe. Dos cucharadas, tres veces al día.',fr:'Prenez ce sirop. Deux cuillères, trois fois par jour.',side:'right'},
      {s:'Cliente',es:'¿Cuánto cuesta?',fr:'Ça coûte combien ?',side:'left'},
      {s:'Farmacéutico',es:'Ocho dólares.',fr:'Huit dollars.',side:'right'}
    ]}
   ],
   vocab:['J\'ai mal à la tête = Me duele la cabeza','J\'ai mal à la gorge = Me duele la garganta','La pharmacie de garde = La farmacia de guardia','Je ne suis pas allergique = No soy alérgico','Le sirop = El jarabe','Trois fois par jour = Tres veces al día','L\'affiche = El letrero'],
   quiz:[
    {q:'¿Cómo se dice "Me duele la cabeza" en francés?',opts:['J\'ai de la fièvre','J\'ai mal au ventre','J\'ai mal à la tête','Je suis fatigué'],ans:2},
    {q:'¿Cómo se dice "La farmacia de guardia" en francés?',opts:['La grande pharmacie','La pharmacie de garde','La pharmacie de l\'hôpital','La pharmacie de nuit'],ans:1},
    {q:'¿Cómo se dice "Tres veces al día" en francés?',opts:['Deux fois par jour','Une fois par jour','Trois fois par jour','Quatre fois par jour'],ans:2}
   ]},

  /* 9 ── En el hotel */
  {id:'hotel2',level:2,emoji:'🏨',name:'En el hotel',sub:'Llegar al hotel / S\'installer à l\'hôtel',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Llegada a la recepción',img:'🛎️',dialogue:[
      {s:'Recepcionista',es:'¡Buenas noches! ¿Tiene reserva?',fr:'Bonsoir ! Vous avez une réservation ?',side:'right'},
      {s:'Huésped',es:'Sí. Me llamo Dupont. Una habitación doble.',fr:'Oui. Je m\'appelle Dupont. Une chambre double.',side:'left'},
      {s:'Recepcionista',es:'Aquí está. ¿Su pasaporte, por favor?',fr:'Voilà. Votre passeport, s\'il vous plaît ?',side:'right'},
      {s:'Huésped',es:'Aquí tiene. ¿El desayuno está incluido?',fr:'Voilà. Le petit-déjeuner est inclus ?',side:'left'},
      {s:'Recepcionista',es:'Sí, de siete a diez.',fr:'Oui, de sept à dix heures.',side:'right'},
      {s:'Huésped',es:'¡Qué chévere! Gracias.',fr:'Super ! Merci.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Un problema en la habitación',img:'🔧',dialogue:[
      {s:'Huésped',es:'Hola. Hay un problema en mi habitación.',fr:'Bonjour. Il y a un problème dans ma chambre.',side:'left'},
      {s:'Recepcionista',es:'¿Qué pasó?',fr:'Qu\'est-ce qui s\'est passé ?',side:'right'},
      {s:'Huésped',es:'El aire acondicionado no funciona.',fr:'La climatisation ne fonctionne pas.',side:'left'},
      {s:'Recepcionista',es:'¡Qué vaina! Lo siento. ¿Quiere cambiar de habitación?',fr:'Quel problème ! Je suis désolé. Vous voulez changer de chambre ?',side:'right'},
      {s:'Huésped',es:'Sí, por favor.',fr:'Oui, s\'il vous plaît.',side:'left'},
      {s:'Recepcionista',es:'Aquí tiene la llave de la trescientos veinte.',fr:'Voilà la clé de la trois cent vingt.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Pedir información',img:'🗺️',dialogue:[
      {s:'Huésped',es:'Perdone, ¿hay un restaurante cerca?',fr:'Pardon, il y a un restaurant près d\'ici ?',side:'left'},
      {s:'Recepcionista',es:'Sí, hay uno muy bueno a dos cuadras.',fr:'Oui, il y en a un très bon à deux pâtés de maisons.',side:'right'},
      {s:'Huésped',es:'¿Y hay algo para visitar aquí?',fr:'Et il y a des choses à visiter ici ?',side:'left'},
      {s:'Recepcionista',es:'Sí, el Ávila está muy cerca.',fr:'Oui, le mont Ávila est très près.',side:'right'},
      {s:'Huésped',es:'¡Qué chévere! ¿Está abierto hoy?',fr:'Super ! C\'est ouvert aujourd\'hui ?',side:'left'},
      {s:'Recepcionista',es:'Sí, de nueve a seis.',fr:'Oui, de neuf heures à dix-huit heures.',side:'right'}
    ]}
   ],
   vocab:['Vous avez une réservation ? = ¿Tiene reserva?','La chambre double = La habitación doble','Le petit-déjeuner inclus = El desayuno incluido','Ça ne fonctionne pas = No funciona','Changer de chambre = Cambiar de habitación','La clé = La llave','À deux pâtés de maisons = A dos cuadras (VE)'],
   quiz:[
    {q:'¿Cómo se dice "La habitación doble" en francés?',opts:['La chambre simple','La chambre double','La suite','La chambre familiale'],ans:1},
    {q:'¿Cómo se dice "No funciona" en francés?',opts:['C\'est fermé','Ça ne fonctionne pas','C\'est cassé','Je ne sais pas'],ans:1},
    {q:'¿Cómo se dice "La llave" en francés?',opts:['La porte','La fenêtre','La clé','L\'ascenseur'],ans:2}
   ]},

  /* 10 ── En el médico */
  {id:'medico2',level:2,emoji:'🩺',name:'En el médico',sub:'Explicar lo que te pasa / Chez le médecin en français',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Explicar los síntomas',img:'🤒',dialogue:[
      {s:'Doctor',es:'¡Buenos días! ¿Qué le pasa, chamo?',fr:'Bonjour ! Qu\'est-ce qui ne va pas ?',side:'right'},
      {s:'Paciente',es:'Tengo fiebre y me duele la garganta.',fr:'J\'ai de la fièvre et j\'ai mal à la gorge.',side:'left'},
      {s:'Doctor',es:'¿Desde cuándo?',fr:'Depuis quand ?',side:'right'},
      {s:'Paciente',es:'Desde ayer.',fr:'Depuis hier.',side:'left'},
      {s:'Doctor',es:'¿Tiene tos también?',fr:'Vous avez aussi de la toux ?',side:'right'},
      {s:'Paciente',es:'Sí, un poco.',fr:'Oui, un peu.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Entender al doctor',img:'💊',dialogue:[
      {s:'Doctor',es:'Tiene una infección. Le receto un antibiótico.',fr:'Vous avez une infection. Je vous prescris un antibiotique.',side:'right'},
      {s:'Paciente',es:'¿Cuándo tomo el medicamento?',fr:'Quand est-ce que je prends le médicament ?',side:'left'},
      {s:'Doctor',es:'Uno por la mañana y uno por la noche.',fr:'Un le matin et un le soir.',side:'right'},
      {s:'Paciente',es:'¿Durante cuántos días?',fr:'Pendant combien de jours ?',side:'left'},
      {s:'Doctor',es:'Siete días. Y tome mucha agua.',fr:'Sept jours. Et buvez beaucoup d\'eau.',side:'right'},
      {s:'Paciente',es:'Gracias, doctor.',fr:'Merci, docteur.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Llamar para una cita',img:'📞',dialogue:[
      {s:'Paciente',es:'Hola, quiero una cita con el doctor.',fr:'Bonjour, je veux un rendez-vous avec le médecin.',side:'left'},
      {s:'Recepcionista',es:'¿Para cuándo?',fr:'Pour quand ?',side:'right'},
      {s:'Paciente',es:'Para hoy si es posible. Estoy muy mal.',fr:'Pour aujourd\'hui si c\'est possible. Je suis très malade.',side:'left'},
      {s:'Recepcionista',es:'¿Tiene fiebre?',fr:'Vous avez de la fièvre ?',side:'right'},
      {s:'Paciente',es:'Sí, treinta y nueve grados.',fr:'Oui, trente-neuf degrés.',side:'left'},
      {s:'Recepcionista',es:'Venga a las cuatro. Traiga su cédula.',fr:'Venez à seize heures. Apportez votre carte d\'identité.',side:'right'}
    ]}
   ],
   vocab:['Qu\'est-ce qui ne va pas ? = ¿Qué le pasa?','J\'ai de la fièvre = Tengo fiebre','J\'ai mal à la gorge = Me duele la garganta','Depuis hier = Desde ayer','La toux = La tos','Un rendez-vous = Una cita','La carte d\'identité = La cédula (VE)'],
   quiz:[
    {q:'¿Cómo se dice "Tengo fiebre" en francés?',opts:['J\'ai froid','J\'ai de la fièvre','J\'ai de la toux','J\'ai mal'],ans:1},
    {q:'¿Cómo se dice "Me duele la garganta" en francés?',opts:['J\'ai mal à la tête','J\'ai mal au ventre','J\'ai mal à la gorge','J\'ai mal au dos'],ans:2},
    {q:'¿Cómo se dice "La cédula" (VE) en francés?',opts:['Le passeport','La carte de crédit','La carte d\'identité','Le permis de conduire'],ans:2}
   ]},

  /* 11 ── El tiempo / la météo */
  {id:'meteo2',level:2,emoji:'☀️',name:'El tiempo',sub:'Hablar del clima / Le climat vénézuélien en français',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Hablar del tiempo',img:'🌤️',dialogue:[
      {s:'Marta',es:'¡Qué calor hace hoy, chamo!',fr:'Quelle chaleur aujourd\'hui !',side:'left'},
      {s:'Romain',es:'Sí, hace un calor bárbaro. ¿Cuántos grados son?',fr:'Oui, il fait une chaleur folle. Il fait combien de degrés ?',side:'right'},
      {s:'Marta',es:'Treinta y dos en Caracas. En Maracaibo son cuarenta.',fr:'Trente-deux à Caracas. À Maracaibo c\'est quarante.',side:'left'},
      {s:'Romain',es:'¡Qué vaina! ¿Hay piscina aquí?',fr:'Quelle affaire ! Il y a une piscine ici ?',side:'right'},
      {s:'Marta',es:'Sí, está en el hotel.',fr:'Oui, elle est à l\'hôtel.',side:'left'},
      {s:'Romain',es:'¡Vamos, pana!',fr:'Allons-y, l\'ami !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Planificar la salida',img:'🌧️',dialogue:[
      {s:'Luis',es:'¿Salimos hoy?',fr:'On sort aujourd\'hui ?',side:'left'},
      {s:'Camille',es:'No sé. ¿Qué tiempo hace?',fr:'Je ne sais pas. Il fait quel temps ?',side:'right'},
      {s:'Luis',es:'Está lloviendo. Son las lluvias de mayo.',fr:'Il pleut. Ce sont les pluies de mai.',side:'left'},
      {s:'Camille',es:'¿Tienes paraguas?',fr:'Tu as un parapluie ?',side:'right'},
      {s:'Luis',es:'No. ¿Y tú?',fr:'Non. Et toi ?',side:'left'},
      {s:'Camille',es:'Yo sí. ¡Vamos juntos!',fr:'Moi oui. Allons-y ensemble !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Las estaciones en Venezuela',img:'🌿',dialogue:[
      {s:'Sara',es:'¿Cuál es tu estación favorita?',fr:'Quelle est ta saison préférée ?',side:'right'},
      {s:'Théo',es:'Me gusta cuando no llueve. ¿Ustedes tienen estaciones?',fr:'J\'aime quand il ne pleut pas. Vous avez des saisons ?',side:'left'},
      {s:'Sara',es:'Tenemos dos: el verano (tiempo seco) y el invierno (lluvias).',fr:'Nous avons deux saisons : l\'été (sec) et l\'hiver (pluies).',side:'right'},
      {s:'Théo',es:'¡Qué chévere! ¿Cuándo es el verano?',fr:'Super ! Quand c\'est l\'été ?',side:'left'},
      {s:'Sara',es:'De diciembre a abril. Hace mucho calor.',fr:'De décembre à avril. Il fait très chaud.',side:'right'},
      {s:'Théo',es:'¡Qué bárbaro!',fr:'C\'est incroyable !',side:'left'}
    ]}
   ],
   vocab:['Quelle chaleur ! = ¡Qué calor! (VE: ¡Qué calor bárbaro!)','Il fait froid = Hace frío','Il fait chaud = Hace calor','Il pleut = Está lloviendo','Le parapluie = El paraguas / el sombrero de agua (VE)','La saison sèche = El verano (seco en VE)','La saison des pluies = El invierno (lluvias en VE)'],
   quiz:[
    {q:'¿Cómo se dice "Hace frío" en francés?',opts:['Il fait chaud','Il y a du soleil','Il pleut','Il fait froid'],ans:3},
    {q:'¿Cómo se dice "¡Qué calor bárbaro!" (VE) en francés?',opts:['Quelle chance !','Quelle chaleur folle !','Quel froid !','Quel vent !'],ans:1},
    {q:'¿Cuándo es el "verano" (tiempo seco) en Venezuela? ¿Cómo se dice en francés?',opts:['Juin à septembre','Mars à juin','Décembre à avril','Juillet à novembre'],ans:2}
   ]},

  /* 12 ── Buscar apartamento */
  {id:'logement2',level:2,emoji:'🏠',name:'Buscar apartamento',sub:'Alquilar / Chercher un logement en français',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Llamar por un apartamento',img:'📱',dialogue:[
      {s:'Cliente',es:'Hola, llamo por el apartamento en alquiler.',fr:'Bonjour, j\'appelle pour l\'appartement en location.',side:'left'},
      {s:'Propietario',es:'Sí. ¿Para cuántas personas?',fr:'Oui. Pour combien de personnes ?',side:'right'},
      {s:'Cliente',es:'Para una persona. ¿Cuánto es el alquiler?',fr:'Pour une personne. Le loyer c\'est combien ?',side:'left'},
      {s:'Propietario',es:'Cuatrocientos dólares al mes.',fr:'Quatre cents dollars par mois.',side:'right'},
      {s:'Cliente',es:'¿Los servicios están incluidos?',fr:'Les charges sont incluses ?',side:'left'},
      {s:'Propietario',es:'No, los servicios son aparte.',fr:'Non, les charges sont en plus.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Visitar el apartamento',img:'🔑',dialogue:[
      {s:'Propietario',es:'La sala es grande y tiene mucha luz.',fr:'Le salon est grand et très lumineux.',side:'right'},
      {s:'Cliente',es:'¡Qué chévere! ¿Cuántas habitaciones tiene?',fr:'Super ! Il a combien de chambres ?',side:'left'},
      {s:'Propietario',es:'Dos habitaciones y un baño.',fr:'Deux chambres et une salle de bain.',side:'right'},
      {s:'Cliente',es:'¿Tiene nevera?',fr:'Il y a un réfrigérateur ?',side:'left'},
      {s:'Propietario',es:'Sí, y también horno y microondas.',fr:'Oui, et aussi un four et un micro-ondes.',side:'right'},
      {s:'Cliente',es:'¡Qué fino! ¿Puedo pensarlo?',fr:'Génial ! Je peux réfléchir ?',side:'left'}
    ]},
    {label:'Sit. 3',title:'Un problema en el apartamento',img:'🔧',dialogue:[
      {s:'Inquilino',es:'Hola, hay un problema. El agua no funciona.',fr:'Bonjour, il y a un problème. L\'eau ne fonctionne pas.',side:'left'},
      {s:'Propietario',es:'¿Desde cuándo?',fr:'Depuis quand ?',side:'right'},
      {s:'Inquilino',es:'Desde esta mañana.',fr:'Depuis ce matin.',side:'left'},
      {s:'Propietario',es:'¡Qué vaina! Voy a llamar al plomero ahorita.',fr:'Quel problème ! Je vais appeler le plombier tout de suite.',side:'right'},
      {s:'Inquilino',es:'¿Va a venir hoy?',fr:'Il vient aujourd\'hui ?',side:'left'},
      {s:'Propietario',es:'Sí, creo que sí.',fr:'Oui, je crois que oui.',side:'right'}
    ]}
   ],
   vocab:['Le loyer = El alquiler','Les charges = Los servicios (luz, agua)','Les chambres = Las habitaciones','Le réfrigérateur = La nevera (VE conserva nevera)','Le locataire = El inquilino','Le plombier = El plomero (VE)','Les charges sont en plus = Los servicios son aparte'],
   quiz:[
    {q:'¿Cómo se dice "Los servicios son aparte" en francés?',opts:['Tout compris','Les charges sont incluses','Les charges sont en plus','C\'est gratuit'],ans:2},
    {q:'¿Cómo se dice "El plomero" (VE) en francés?',opts:['L\'électricien','Le plombier','Le menuisier','Le peintre'],ans:1},
    {q:'¿Cómo se dice "La nevera" (VE) en francés?',opts:['Le congélateur','Le four','Le réfrigérateur','Le micro-ondes'],ans:2}
   ]},

  /* 13 ── Gustos y aficiones */
  {id:'gustos2',level:2,emoji:'❤️',name:'Gustos y aficiones',sub:'Lo que te gusta / Parler de ses goûts en français',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Hablar de música',img:'🎵',dialogue:[
      {s:'Lucía',es:'¿Te gusta la música?',fr:'Tu aimes la musique ?',side:'right'},
      {s:'Paul',es:'Sí, mucho. Me gusta el rock.',fr:'Oui, beaucoup. J\'aime le rock.',side:'left'},
      {s:'Lucía',es:'¿Y el joropo?',fr:'Et le joropo ?',side:'right'},
      {s:'Paul',es:'También, pero no conozco mucho.',fr:'Aussi, mais je ne connais pas beaucoup.',side:'left'},
      {s:'Lucía',es:'¡Hay un concierto esta noche! ¿Vienes, pana?',fr:'Il y a un concert ce soir ! Tu viens ?',side:'right'},
      {s:'Paul',es:'¡Sí! ¿A qué hora empieza?',fr:'Oui ! Ça commence à quelle heure ?',side:'left'}
    ]},
    {label:'Sit. 2',title:'Hablar de deporte',img:'⚾',dialogue:[
      {s:'Diego',es:'¿Practicas algún deporte?',fr:'Tu pratiques un sport ?',side:'left'},
      {s:'Claire',es:'Sí, me gusta mucho el fútbol.',fr:'Oui, j\'aime beaucoup le football.',side:'right'},
      {s:'Diego',es:'¡Aquí el béisbol es el deporte rey, chama!',fr:'Ici le baseball est le sport roi, ma vieille !',side:'left'},
      {s:'Claire',es:'¡Qué chévere! ¿Ves el partido esta noche?',fr:'Super ! Tu regardes le match ce soir ?',side:'right'},
      {s:'Diego',es:'Sí. ¿Quieres venir?',fr:'Oui. Tu veux venir ?',side:'left'},
      {s:'Claire',es:'¡Claro que sí, pana!',fr:'Bien sûr, l\'ami !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Proponer una actividad',img:'🎬',dialogue:[
      {s:'Ana',es:'¿Qué haces esta tarde, chamo?',fr:'Tu fais quoi cet après-midi ?',side:'left'},
      {s:'Marc',es:'Nada. ¿Por qué?',fr:'Rien. Pourquoi ?',side:'right'},
      {s:'Ana',es:'¿Quieres ir al cine?',fr:'Tu veux aller au cinéma ?',side:'left'},
      {s:'Marc',es:'¡Sí! ¿Qué ponen?',fr:'Oui ! Qu\'est-ce qu\'il y a ?',side:'right'},
      {s:'Ana',es:'Una película francesa. ¿Te gusta el cine francés?',fr:'Un film français. Tu aimes le cinéma français ?',side:'left'},
      {s:'Marc',es:'¡Me encanta! ¿A qué hora nos vemos?',fr:'J\'adore ça ! On se retrouve à quelle heure ?',side:'right'}
    ]}
   ],
   vocab:['J\'aime = Me gusta','Je n\'aime pas = No me gusta','J\'adore = Me encanta','Le baseball = El béisbol (deporte nacional VE)','Le joropo = La música nacional venezolana','Le match = El partido','Bien sûr que oui ! = ¡Claro que sí! (VE)'],
   quiz:[
    {q:'¿Cómo se dice "Me encanta" en francés?',opts:['J\'aime','Je n\'aime pas','J\'adore','Je déteste'],ans:2},
    {q:'¿Cuál es el deporte nacional de Venezuela? ¿Cómo se dice en francés?',opts:['Le football','Le tennis','Le baseball','Le basket'],ans:2},
    {q:'¿Cómo se dice "El joropo" en francés?',opts:['Un plat typique','La musique nationale vénézuélienne','Un sport','Une danse moderne'],ans:1}
   ]},

  /* 14 ── Salir de noche */
  {id:'fiesta2',level:2,emoji:'🎉',name:'Salir de noche',sub:'Vida social / Sortir le soir en français',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Organizar una salida',img:'🎊',dialogue:[
      {s:'Pablo',es:'¡Hola, pana! ¿Salimos esta noche?',fr:'Salut, l\'ami ! On sort ce soir ?',side:'left'},
      {s:'Lea',es:'¡Sí, chamo! ¿Adónde vamos?',fr:'Oui ! On va où ?',side:'right'},
      {s:'Pablo',es:'Hay un sitio muy chévere en el este.',fr:'Il y a un endroit super dans le quartier est.',side:'left'},
      {s:'Lea',es:'¡Qué fino! ¿A qué hora?',fr:'Génial ! À quelle heure ?',side:'right'},
      {s:'Pablo',es:'A las diez. Aquí también se sale tarde.',fr:'À dix heures. Ici aussi on sort tard.',side:'left'},
      {s:'Lea',es:'¡Está bien! ¡Hasta luego!',fr:'D\'accord ! À tout à l\'heure !',side:'right'}
    ]},
    {label:'Sit. 2',title:'En un bar',img:'🍺',dialogue:[
      {s:'Marc',es:'¡Esta música está muy chévere! ¿Bailamos?',fr:'Cette musique est super ! On danse ?',side:'left'},
      {s:'Inés',es:'¡Sí, pana! Me encanta bailar.',fr:'Oui, l\'ami ! J\'adore danser.',side:'right'},
      {s:'Marc',es:'¿Quieres algo de tomar?',fr:'Tu veux quelque chose à boire ?',side:'left'},
      {s:'Inés',es:'Sí, un agua, por favor. Tengo calor.',fr:'Oui, une eau, s\'il te plaît. J\'ai chaud.',side:'right'},
      {s:'Marc',es:'¡Ahorita vuelvo, chama!',fr:'Je reviens tout de suite !',side:'left'},
      {s:'Inés',es:'¡Está bien!',fr:'D\'accord !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Al día siguiente',img:'😴',dialogue:[
      {s:'Carla',es:'¡Hola, pana! ¿Cómo estás? ¡Llegué tardísimo a la casa!',fr:'Salut, l\'ami ! Tu vas bien ? Je suis rentré très tard !',side:'left'},
      {s:'Tom',es:'¡Yo también! Pero fue una noche muy bacana.',fr:'Moi aussi ! Mais c\'était une super soirée.',side:'right'},
      {s:'Carla',es:'Sí, la gente era muy simpática.',fr:'Oui, les gens étaient très sympas.',side:'left'},
      {s:'Tom',es:'¿Comemos juntos hoy?',fr:'On mange ensemble aujourd\'hui ?',side:'right'},
      {s:'Carla',es:'¡Sí, chamo! Necesito comer. ¡Tengo un hambre bárbara!',fr:'Oui ! J\'ai besoin de manger. J\'ai une faim folle !',side:'left'},
      {s:'Tom',es:'¡Yo también! ¡Vamos a buscar algo rico!',fr:'Moi aussi ! Allons chercher quelque chose de bon !',side:'right'}
    ]}
   ],
   vocab:['On sort ! = ¡Salimos!','On va où ? = ¿Adónde vamos?','D\'accord ! = ¡Está bien! (VE)','Super ! / Génial ! = ¡Qué chévere! / ¡Bacano! (VE)','J\'ai chaud = Tengo calor','J\'ai faim = Tengo hambre','Je reviens tout de suite ! = ¡Ahorita vuelvo! (VE)'],
   quiz:[
    {q:'¿Cómo se dice "¡Está bien!" (VE) en francés?',opts:['Au revoir !','Allons-y !','D\'accord !','C\'est nul !'],ans:2},
    {q:'¿Cómo se dice "Tengo hambre" en francés?',opts:['J\'ai soif','J\'ai sommeil','J\'ai froid','J\'ai faim'],ans:3},
    {q:'¿Cómo se dice "¡Bacano!" (VE) en francés?',opts:['C\'est nul !','Je suis fatigué','Super ! / Génial !','Au revoir !'],ans:2}
   ]}

];

var ALL_THEMES = LEVEL1_THEMES.concat(LEVEL2_THEMES);