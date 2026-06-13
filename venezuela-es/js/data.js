/* ========================================
   Español Venezolano → Français 🇻🇪 – Données
   Vocabulaire, quiz et dialogues
   Variante régionale : Venezuela
   © Juin 2026 Sébastien Godet
======================================== */

/* ── NOTES D'ADAPTATION VENEZUELA ─────────────────────────────────────
   Principales différences appliquées vs. castillan d'Espagne :
   • ¡Vale! → ¡Chévere! / ¡Está bien!   (accord, ok)
   • ¡Venga! → ¡Vamos! / ¡Dale!          (allez, vas-y)
   • ¡Qué chulo/guay! → ¡Qué chévere!   (super, cool — emblématique VE)
   • ¡Mola! → ¡Qué fino! / ¡Qué chévere!
   • ¡En seguida! → ¡Ahorita!            (tout de suite)
   • Lo siento → Lo siento / ¡Qué vaina! (je suis désolé / dommage)
   • El móvil → El celular               (portable)
   • El ordenador → El computador        (ordinateur)
   • El coche → El carro                 (voiture)
   • La patata → La papa                 (pomme de terre)
   • El zumo → El jugo                   (jus)
   • La fresa → La fresa                 (Venezuela GARDE fresa)
   • El plátano → El cambur              (banane douce — SPÉCIFIQUE VE)
   • La sandía → La patilla              (pastèque — SPÉCIFIQUE VE)
   • El billete → El pasaje / el boleto  (billet)
   • El fontanero → El plomero           (plombier)
   • La tirita → La curita               (pansement)
   • El jersey → El suéter / la franela  (pull / t-shirt — VE)
   • El bañador → El vestido de baño     (maillot de bain — VE)
   • Las gafas → Los lentes              (lunettes — VE)
   • El paraguas → El paraguas / el sombrero de agua
   • El piso → El apartamento            (appartement)
   • La nevera → La nevera               (VE GARDE nevera !)
   • El fregadero → El lavaplatos / el lavamanos
   • El bocadillo → El sándwich          (sandwich)
   • El esfero → El lapicero / el bolígrafo (stylo — VE)
   • El autobús → El autobús / el bus / la buseta (petit bus)
   • Coger → Tomar (évité)               (prendre)
   • Vosotros → supprimé (ustedes)
   • Manejar pour conduire               (idem Ecuador)
   • La cuadra pour pâté de maisons      (idem Ecuador)
   • El mesero → El mesonero / la mesonera (VE — SPÉCIFIQUE)
   • El almuerzo del día reste valide
   • Argot : Chamo/Chama = mec/nana, Pana = ami/pote, ¡Qué vaina! = zut/dommage
   • Animal emblème : el turpial (oiseau national), el flamenco (flamant rose)
   ─────────────────────────────────────────────────────────────────── */

var LEVEL1_THEMES=[
  {id:'alpha',level:1,emoji:'🔤',name:'El Alfabeto',sub:'A, B, C… Z / L\'alphabet',type:'alpha',
   words:[
    {es:'A',fr:'a',em:'✈️'},{es:'B',fr:'bé',em:'🎈'},
    {es:'C',fr:'cé (s devant e/i en Amérique)',em:'☕'},{es:'D',fr:'dé',em:'💃'},
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
    {es:'Z',fr:'ceta (s en Amérique latine)',em:'0️⃣'}
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
    {es:'Buenos días / Buen día',fr:'Bonjour (le matin)',em:'🌅'},
    {es:'Buenas tardes',fr:'Bon après-midi',em:'🌆'},
    {es:'Buenas noches',fr:'Bonsoir / Bonne nuit',em:'🌙'},
    {es:'¡Hola!',fr:'Salut !',em:'👋'},
    {es:'Adiós / Hasta luego',fr:'Au revoir / À bientôt',em:'👋'},
    {es:'Hasta pronto',fr:'À bientôt',em:'⏱️'},
    {es:'Gracias / Muchas gracias',fr:'Merci / Merci beaucoup',em:'🙏'},
    {es:'Por favor / De nada',fr:'S\'il vous plaît / De rien',em:'🤝'},
    {es:'Perdona / Perdone',fr:'Pardon / Excusez-moi',em:'🙇'},
    {es:'¡Vamos! / ¡Está bien!',fr:'Allez ! / D\'accord !',em:'👍'},
    {es:'Sí',fr:'Oui',em:'✅'},
    {es:'No',fr:'Non',em:'❌'},
    {es:'¿Cómo estás? / ¿Cómo estás, pana?',fr:'Comment ça va ? / Ça va, l\'ami ?',em:'🤗'},
    {es:'Estoy bien, gracias',fr:'Je vais bien, merci',em:'😊'},
    {es:'Más o menos / Así así',fr:'Comme ci comme ça',em:'😐'},
    {es:'No estoy bien / Estoy medio malo',fr:'Je ne vais pas bien / Je suis un peu malade',em:'😔'},
    {es:'¡Qué chévere!',fr:'C\'est cool ! / Super !',em:'🌟'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Bonjour (le matin)" en español?',opts:['Hola','Buenas tardes','Buenos días','Buenas noches'],ans:2},
    {q:'¿Qué significa "Adiós"?',opts:['À tout à l\'heure','Au revoir','Bonjour','Bonne nuit'],ans:1},
    {q:'¿Cómo se dice "Merci" en español?',opts:['Por favor','Perdona','Gracias','Sí'],ans:2},
    {q:'¿Qué significa "¡Está bien!" en Venezuela?',opts:['Adieu','Allons-y !','D\'accord !','Bonne nuit'],ans:2},
    {q:'¿Cómo se dice "S\'il vous plaît" en español?',opts:['Gracias','Perdona','Por favor','Sí'],ans:2},
    {q:'¿Qué significa "¡Vamos!" en Venezuela?',opts:['Viens !','Allez ! / D\'accord !','Non !','Peut-être !'],ans:1},
    {q:'¿Qué significa "¿Cómo estás?"?',opts:['Où es-tu ?','Comment tu t\'appelles ?','Comment vas-tu ?','Quel âge as-tu ?'],ans:2},
    {q:'¿Qué significa "¡Qué chévere!" en Venezuela?',opts:['Comme c\'est bizarre !','Comme c\'est cool !','Comme c\'est triste !','Comme c\'est grand !'],ans:1}
   ]},

  {id:'pres',level:1,emoji:'🙋',name:'Presentarse',sub:'Nombre, edad, ciudad… / Se présenter',
   words:[
    {es:'El apellido',fr:'Le nom de famille',em:'👨‍👩‍👧'},
    {es:'El nombre',fr:'Le prénom',em:'🏷️'},
    {es:'La nacionalidad',fr:'La nationalité',em:'🌍'},
    {es:'La edad',fr:'L\'âge',em:'🎂'},
    {es:'La profesión o el oficio',fr:'La profession',em:'💼'},
    {es:'El país',fr:'Le pays',em:'🗺️'},
    {es:'Francés / francesa',fr:'Français(e)',em:'🇫🇷'},
    {es:'Venezolano / venezolana',fr:'Vénézuélien(ne)',em:'🇻🇪'},
    {es:'Vivo en',fr:'J\'habite à',em:'🏠'},
    {es:'Soy o Estoy',fr:'Je suis',em:'🧑'},
    {es:'Tengo ... años',fr:'J\'ai ... ans',em:'🎈'},
    {es:'Me llamo',fr:'Je m\'appelle',em:'👋'},
    {es:'¿De dónde eres, chamo?',fr:'T\'es d\'où, mon pote ?',em:'🌍'},
    {es:'Soy de Caracas',fr:'Je suis de Caracas',em:'🏙️'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Je m\'appelle" en español?',opts:['Soy','Me llamo','Vivo','Tengo'],ans:1},
    {q:'¿Qué significa "El apellido"?',opts:['Le prénom','L\'âge','Le nom de famille','La profession'],ans:2},
    {q:'¿Cómo se dice "J\'ai 25 ans" en español?',opts:['Soy 25 años','Vivo 25 años','Tengo 25 años','Hablo 25 años'],ans:2},
    {q:'¿Qué significa "La nacionalidad"?',opts:['Le pays','La ville','La profession','La nationalité'],ans:3},
    {q:'¿Cómo se dice "J\'habite à Caracas" en español?',opts:['Soy en Caracas','Vivo en Caracas','Voy en Caracas','Tengo Caracas'],ans:1},
    {q:'¿Qué significa "El nombre"?',opts:['Le nom de famille','Le prénom','L\'âge','La profession'],ans:1},
    {q:'¿Cómo se dice "Je suis vénézuélienne" en español?',opts:['Soy francesa','Soy venezolana','Vivo Venezuela','Hablo venezolano'],ans:1},
    {q:'¿Qué significa "¿De dónde eres, chamo?"?',opts:['Quel âge as-tu ?','Comment t\'appelles-tu ?','T\'es d\'où, mon pote ?','Où habites-tu ?'],ans:2}
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
    {es:'El mapa / El plano',fr:'Le plan / La carte',em:'🗺️'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "À gauche" en español?',opts:['A la derecha','Todo recto','A la izquierda','Enfrente'],ans:2},
    {q:'¿Qué significa "A la derecha"?',opts:['À gauche','Tout droit','À côté','À droite'],ans:3},
    {q:'¿Cómo se dice "Tout droit" en español?',opts:['A la izquierda','Todo recto / derecho','Enfrente','Al lado'],ans:1},
    {q:'¿Qué significa "Frente a / Enfrente"?',opts:['À côté','Derrière','En face','Près'],ans:2},
    {q:'¿Cómo se dice "Près" en español?',opts:['Lejos','Al lado','Cerca','Enfrente'],ans:2}
   ]},

  {id:'lieux',level:1,emoji:'🏙️',name:'Los Lugares',sub:'Mercado, plaza, avenida… / Les lieux importants',
   words:[
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
    {es:'La cuadra',fr:'Le pâté de maisons',em:'🏘️'},
    {es:'La alcaldía',fr:'La mairie',em:'🏛️'},
    {es:'El hospital',fr:'L\'hôpital',em:'🏥'},
    {es:'La farmacia / El abasto',fr:'La pharmacie / L\'épicerie',em:'💊'},
    {es:'El banco',fr:'La banque',em:'🏦'},
    {es:'La iglesia',fr:'L\'église',em:'⛪'},
    {es:'El supermercado',fr:'Le supermarché',em:'🛒'},
    {es:'El bar / El café / La tasca',fr:'Le bar / La taverne (tasca = bar local vénézuélien)',em:'☕'},
    {es:'La bodega / El abasto',fr:'La supérette / Le petit commerce',em:'🏪'},
    {es:'La escuela / El colegio',fr:'L\'école / Le lycée',em:'🎒'},
    {es:'La universidad',fr:'L\'université',em:'🏛️'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "La pharmacie" en español?',opts:['El banco','El hospital','La farmacia','El supermercado'],ans:2},
    {q:'¿Cómo se dice "La mairie" en Venezuela?',opts:['La iglesia','El tribunal','La alcaldía','El mercado'],ans:2},
    {q:'¿Cómo se dice "L\'hôpital" en español?',opts:['La farmacia','La alcaldía','El hospital','El banco'],ans:2},
    {q:'En Venezuela, "La tasca" es…',opts:['Un supermarché','Un bar local','Une pharmacie','Une école'],ans:1},
    {q:'¿Cómo se dice "La mer" en español?',opts:['El río','La montaña','El mar','El lago'],ans:2},
    {q:'¿Qué significa "La alcaldía" en Venezuela?',opts:['Le tribunal','La mairie','Le parlement','L\'université'],ans:1},
    {q:'¿Cómo se dice "La ville" en español?',opts:['La calle','El pueblo','La ciudad','La montaña'],ans:2},
    {q:'¿Qué significa "El banco"?',opts:['La pharmacie','La banque','La caisse','Le bureau'],ans:1}
   ]},

  {id:'nour',level:1,emoji:'🍽️',name:'La Comida',sub:'Pan, verduras, arepas… / La nourriture',
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
    {es:'El pernil',fr:'Le jambon cuit / Le rôti de porc (plat de fête vénézuélien)',em:'🥩'},
    {es:'El chorizo',fr:'Le chorizo',em:''},
    {es:'El huevo',fr:'L\'œuf',em:'🥚'},
    {es:'El queso',fr:'Le fromage',em:'🧀'},
    {es:'La mantequilla',fr:'Le beurre',em:'🧈'},
    {es:'La manzana',fr:'La pomme',em:'🍎'},
    {es:'El cambur',fr:'La banane (cambur = banane douce, spécifique Venezuela)',em:'🍌'},
    {es:'La naranja',fr:'L\'orange',em:'🍊'},
    {es:'El limón',fr:'Le citron',em:'🍋'},
    {es:'La fresa',fr:'La fraise',em:'🍓'},
    {es:'La patilla',fr:'La pastèque (patilla = spécifique Venezuela)',em:'🍉'},
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
    {q:'¿Cómo se dice "Le pain" en español?',opts:['El arroz','El pan','El queso','La mantequilla'],ans:1},
    {q:'¿Qué significa "El pollo"?',opts:['Le poisson','La viande','Le poulet','Le porc'],ans:2},
    {q:'¿Cómo se dice "L\'œuf" en español?',opts:['La mantequilla','El queso','La zanahoria','El huevo'],ans:3},
    {q:'¿Cómo se dice "La pomme" en español?',opts:['El cambur','La fresa','La manzana','La naranja'],ans:2},
    {q:'¿Cómo se dice "Les frites" en español de Venezuela?',opts:['Las papas fritas','Los macarrones','Las tapas','El sándwich'],ans:0},
    {q:'¿Cómo se dice "La pastèque" en Venezuela?',opts:['La fresa','La patilla','La uva','La naranja'],ans:1},
    {q:'¿Cómo se dice "La banane" en Venezuela?',opts:['La patilla','La fresa','El cambur','La naranja'],ans:2},
    {q:'¿Cómo se dice "La fraise" en Venezuela?',opts:['El cambur','La patilla','La fresa','La uva'],ans:2}
   ]},

  {id:'bois',level:1,emoji:'🥤',name:'Las Bebidas',sub:'Agua, café, jugo… / Les boissons',
   words:[
    {es:'El agua',fr:'L\'eau',em:'💧'},
    {es:'El agua con gas',fr:'L\'eau gazeuse',em:'🫧'},
    {es:'La leche',fr:'Le lait',em:'🥛'},
    {es:'El jugo (de naranja)',fr:'Le jus (d\'orange)',em:'🍊'},
    {es:'El refresco / La frescolita',fr:'Le soda (frescolita = soda populaire vénézuélien)',em:'🥤'},
    {es:'El café negro',fr:'Le café noir',em:'☕'},
    {es:'El café con leche',fr:'Le café au lait',em:'☕'},
    {es:'El café marrón / El caraqueño',fr:'Le café allongé au lait (très populaire à Caracas)',em:'☕'},
    {es:'El té',fr:'Le thé',em:'🍵'},
    {es:'El vino (tinto / blanco)',fr:'Le vin (rouge / blanc)',em:'🍷'},
    {es:'La cerveza / El polar',fr:'La bière (Polar = marque nationale emblématique)',em:'🍺'},
    {es:'El ron',fr:'Le rhum (Venezuela = grand producteur)',em:'🍶'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'eau" en español?',opts:['La leche','El jugo','El agua','El té'],ans:2},
    {q:'¿Qué es "El café negro" en Venezuela?',opts:['Un café au lait','Un café noir','Un café avec sucre','Un café froid'],ans:1},
    {q:'¿Cómo se dice "Le lait" en español?',opts:['La leche','El agua','El té','El jugo'],ans:0},
    {q:'¿Qué significa "El jugo" en Venezuela?',opts:['Le vin','La bière','La limonade','Le jus'],ans:3},
    {q:'¿Qué es la bebida alcohólica más famosa de Venezuela?',opts:['La cerveza','La chicha','El ron','El vino'],ans:2},
    {q:'¿Qué es "El café marrón"?',opts:['Un café noir','Une bière','Un café allongé au lait','Un jus d\'orange'],ans:2},
    {q:'¿Cómo se dice "Le thé" en español?',opts:['El café','El té','La leche','El agua'],ans:1},
    {q:'¿Cómo se dice "L\'eau gazeuse" en español?',opts:['El agua fría','El agua mineral','El agua con gas','El refresco'],ans:2}
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
    {es:'Treinta',fr:'Trente',em:'3️⃣0️⃣'},{es:'Cuarenta',fr:'Quarante',em:'4️⃣0️⃣'},
    {es:'Cincuenta',fr:'Cinquante',em:'5️⃣0️⃣'},{es:'Sesenta',fr:'Soixante',em:'6️⃣0️⃣'},
    {es:'Setenta',fr:'Soixante-dix',em:'7️⃣0️⃣'},{es:'Ochenta',fr:'Quatre-vingts',em:'8️⃣0️⃣'},
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
    {q:'¿Cómo se dice 30 en español?',opts:['Veinte','Cuarenta','Treinta','Cincuenta'],ans:2},
    {q:'¿Qué número es "Setenta"?',opts:['60','80','90','70'],ans:3},
    {q:'¿Cómo se dice 100 en español?',opts:['Mil','Ciento','Cien','Noventa'],ans:2},
    {q:'¿Cómo se dice 1000 en español?',opts:['Cien','Doscientos','Mil','Novecientos'],ans:2},
    {q:'¿Cómo se dice 2000 en español?',opts:['Dos mil','Mil','Dos cientos','Veinte mil'],ans:0}
   ]},

  {id:'col',level:1,emoji:'🎨',name:'Los Colores',sub:'Rojo, azul, verde… / Les couleurs',
   words:[
    {es:'Rojo',fr:'Rouge',em:'❤️'},{es:'Azul',fr:'Bleu',em:'💙'},{es:'Verde',fr:'Vert',em:'💚'},
    {es:'Amarillo',fr:'Jaune',em:'💛'},{es:'Naranja',fr:'Orange',em:'🧡'},{es:'Blanco',fr:'Blanc',em:'🤍'},
    {es:'Negro',fr:'Noir',em:'🖤'},{es:'Rosado',fr:'Rose',em:'🩷'},
    {es:'Morado / Violeta',fr:'Violet',em:'💜'},{es:'Marrón / Café / Castaño',fr:'Marron (café et castaño courants en VE)',em:'🤎'},
    {es:'Gris',fr:'Gris',em:'🩶'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Rouge" en español?',opts:['Azul','Rojo','Verde','Amarillo'],ans:1},
    {q:'¿Qué significa "Azul"?',opts:['Vert','Jaune','Bleu','Violet'],ans:2},
    {q:'¿Cómo se dice "Vert" en español?',opts:['Amarillo','Gris','Verde','Blanco'],ans:2},
    {q:'¿Qué significa "Negro"?',opts:['Blanc','Gris','Marron','Noir'],ans:3},
    {q:'¿Cómo se dice "Jaune" en español?',opts:['Naranja','Amarillo','Rosado','Morado'],ans:1},
    {q:'¿Qué significa "Rosado" en Venezuela?',opts:['Rouge','Orange','Rose','Violet'],ans:2},
    {q:'¿Cómo se dice "Blanc" en español?',opts:['Blanco','Negro','Gris','Café'],ans:0}
   ]},

  {id:'viaje',level:1,emoji:'🧳',name:'El Viaje',sub:'Maleta, hotel, pasaporte… / Le voyage',
   words:[
    {es:'El pasaporte / La cédula',fr:'Le passeport / La carte d\'identité',em:'🛂'},
    {es:'La maleta',fr:'La valise',em:'🧳'},
    {es:'El equipaje',fr:'Les bagages',em:'🎒'},
    {es:'El pasaje / El boleto',fr:'Le billet',em:'🎫'},
    {es:'La reserva',fr:'La réservation',em:'📋'},
    {es:'La agencia de viajes',fr:'L\'agence de voyages',em:'🗺️'},
    {es:'El seguro de viaje',fr:'L\'assurance voyage',em:'📄'},
    {es:'El avión',fr:'L\'avion',em:'✈️'},
    {es:'El aeropuerto',fr:'L\'aéroport',em:'🛫'},
    {es:'La salida',fr:'Le départ',em:'🚪'},
    {es:'La llegada',fr:'L\'arrivée',em:'🛬'},
    {es:'La aduana',fr:'La douane',em:'🛃'},
    {es:'El crucero',fr:'La croisière',em:'🚢'},
    {es:'El hotel / La posada',fr:'L\'hôtel / La pension (posada = hébergement typique VE)',em:'🏨'},
    {es:'La habitación doble o sencilla',fr:'La chambre double ou simple (sencilla courant en VE)',em:'🛏️'},
    {es:'La playa',fr:'La plage',em:'🏖️'},
    {es:'La montaña',fr:'La montagne',em:'⛰️'},
    {es:'El turista',fr:'Le touriste',em:'📸'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le passeport" en español?',opts:['La maleta','El boleto','El pasaporte','El equipaje'],ans:2},
    {q:'¿Qué significa "La maleta"?',opts:['Le sac à dos','La valise','Les bagages','Le billet'],ans:1},
    {q:'¿Cómo se dice "L\'aéroport" en español?',opts:['La estación','El puerto','El aeropuerto','La aduana'],ans:2},
    {q:'¿Qué es una "posada" en Venezuela?',opts:['Un restaurant','Un hôtel / une pension','Un bar','Un marché'],ans:1},
    {q:'¿Cómo se dice "Les bagages" en español?',opts:['La maleta','El boleto','El equipaje','La mochila'],ans:2},
    {q:'¿Qué significa "La aduana"?',opts:['L\'arrivée','Le départ','La douane','La frontière'],ans:2},
    {q:'¿Cómo se dice "Le billet" en Venezuela?',opts:['El billete','El pasaje / el boleto','El sencillo','La tarjeta'],ans:1},
    {q:'¿Qué significa "La llegada"?',opts:['Le départ','La correspondance','L\'escale','L\'arrivée'],ans:3}
   ]},

  {id:'rest',level:1,emoji:'🍽️',name:'El Restaurante',sub:'Menú, cuenta, mesa… / Au restaurant',
   words:[
    {es:'La terraza',fr:'La terrasse',em:'☀️'},
    {es:'La mesa',fr:'La table',em:'🪑'},
    {es:'¿Está libre esta mesa?',fr:'Cette table est libre ?',em:'🪑'},
    {es:'El mesonero / La mesonera',fr:'Le serveur / La serveuse (spécifique Venezuela)',em:'🧑‍🍳'},
    {es:'La carta / El menú',fr:'La carte / Le menu',em:'📋'},
    {es:'El menú del día / El plato del día',fr:'Le menu du jour',em:'🍱'},
    {es:'Pedir',fr:'Commander',em:'🙋'},
    {es:'¿Qué recomienda?',fr:'Que recommandez-vous ?',em:'👨‍🍳'},
    {es:'Sin gluten',fr:'Sans gluten',em:'🌾'},
    {es:'Vegetariano / Vegetariana',fr:'Végétarien / Végétarienne',em:'🥦'},
    {es:'La entrada / El pasapalo',fr:'L\'entrée / L\'apéritif (pasapalo = amuse-bouche vénézuélien)',em:'🥗'},
    {es:'El plato principal / El fuerte',fr:'Le plat principal',em:'🍖'},
    {es:'El postre',fr:'Le dessert',em:'🍮'},
    {es:'El sándwich / El emparedado',fr:'Le sandwich',em:'🥖'},
    {es:'Para llevar',fr:'À emporter',em:'🥡'},
    {es:'La cuenta',fr:'L\'addition',em:'💶'},
    {es:'La propina',fr:'Le pourboire',em:'💰'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'addition" en español?',opts:['La propina','La cuenta','El menú','La reserva'],ans:1},
    {q:'¿Qué significa "El mesonero" en Venezuela?',opts:['Le cuisinier','Le patron','Le serveur','Le client'],ans:2},
    {q:'¿Cómo se dice "Le dessert" en español?',opts:['La entrada','El plato principal','El postre','El pasapalo'],ans:2},
    {q:'¿Qué significa "Para llevar"?',opts:['Pour manger sur place','À emporter','À partager','Pour deux personnes'],ans:1},
    {q:'¿Cómo se dice "La terrasse" en español?',opts:['El jardín','La plaza','La terraza','El patio'],ans:2},
    {q:'¿Qué es el "pasapalo" en Venezuela?',opts:['Le dessert','Un amuse-bouche / apéritif','Le plat principal','La boisson'],ans:1},
    {q:'¿Cómo se dice "Le pourboire" en español?',opts:['La cuenta','La propina','El descuento','El precio'],ans:1},
    {q:'¿Qué significa "¿Qué recomienda?"?',opts:['Qu\'est-ce que vous préparez ?','Qu\'est-ce que vous avez ?','Que recommandez-vous ?','C\'est bon ?'],ans:2}
   ]},

  {id:'trans',level:1,emoji:'🚌',name:'Los Transportes',sub:'Bus, carro, buseta… / Les transports',
   words:[
    {es:'El autobús / El bus / La buseta',fr:'Le bus / Le minibus (buseta = petit bus vénézuélien)',em:'🚌'},
    {es:'El metro',fr:'Le métro',em:'🚇'},
    {es:'El tren',fr:'Le train',em:'🚂'},
    {es:'El avión',fr:'L\'avion',em:'✈️'},
    {es:'El taxi / El por puesto',fr:'Le taxi (por puesto = taxi collectif vénézuélien)',em:'🚕'},
    {es:'El carro',fr:'La voiture',em:'🚗'},
    {es:'La moto',fr:'La moto',em:'🏍️'},
    {es:'La bicicleta / La bici',fr:'Le vélo',em:'🚴'},
    {es:'El pasaje / El boleto',fr:'Le billet',em:'🎫'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le bus" en Venezuela?',opts:['El tren','El metro','El bus / la buseta','El taxi'],ans:2},
    {q:'¿Cómo se dice "La voiture" en Venezuela?',opts:['La moto','El carro','La buseta','El camión'],ans:1},
    {q:'¿Cómo se dice "L\'avion" en español?',opts:['El barco','El avión','La bicicleta','El metro'],ans:1},
    {q:'¿Qué es el "por puesto" en Venezuela?',opts:['Un parking','Un taxi collectif','Un bus express','Un tramway'],ans:1}
   ]},

  {id:'objets',level:1,emoji:'🔑',name:'Objetos del Día',sub:'Celular, llaves… / Objets du quotidien',
   words:[
    {es:'El teléfono',fr:'Le téléphone',em:'☎️'},
    {es:'El celular',fr:'Le portable / le téléphone mobile',em:'📱'},
    {es:'El computador / La computadora',fr:'L\'ordinateur',em:'💻'},
    {es:'El cargador',fr:'Le chargeur',em:'🔌'},
    {es:'El reloj',fr:'La montre / L\'horloge',em:'⌚'},
    {es:'Las llaves',fr:'Les clés',em:'🔑'},
    {es:'La cartera / La billetera',fr:'Le portefeuille',em:'👛'},
    {es:'La mochila',fr:'Le sac à dos',em:'🎒'},
    {es:'Los lentes / Los anteojos',fr:'Les lunettes',em:'👓'},
    {es:'El paraguas / El sombrero de agua',fr:'Le parapluie',em:'☂️'},
    {es:'El papel',fr:'Le papier',em:'📄'},
    {es:'El lapicero / El bolígrafo',fr:'Le stylo / le bic',em:'🖊️'},
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
    {q:'¿Cómo se dice "Les clés" en español?',opts:['El lapicero','Las tijeras','Las llaves','El cargador'],ans:2},
    {q:'¿Cómo se dice "Le téléphone portable" en Venezuela?',opts:['La tableta','El celular','El computador','La radio'],ans:1},
    {q:'¿Cómo se dice "Le sac à dos" en español?',opts:['La cartera','El bolso','La mochila','El sombrero'],ans:2},
    {q:'¿Cómo se dice "L\'ordinateur" en Venezuela?',opts:['El celular','La tableta','El computador','La pantalla'],ans:2},
    {q:'¿Cómo se dice "Les lunettes" en Venezuela?',opts:['Los audífonos','Los lentes / los anteojos','Los guantes','Los relojes'],ans:1},
    {q:'¿Cómo se dice "Le stylo" en Venezuela?',opts:['El lápiz','El papel','El lapicero / el bolígrafo','El libro'],ans:2},
    {q:'¿Cómo se dice "Le portefeuille" en español?',opts:['La mochila','Las llaves','La cartera / la billetera','El teléfono'],ans:2},
    {q:'¿Qué significa "El espejo"?',opts:['La fenêtre','Le miroir','Le tableau','La porte'],ans:1},
    {q:'¿Cómo se dice "La serviette" en español?',opts:['La almohada','El jabón','La toalla','El vaso'],ans:2},
    {q:'¿Qué significa "La cuchara"?',opts:['Le couteau','La fourchette','La cuillère','L\'assiette'],ans:2},
    {q:'¿Cómo se dice "Le parapluie" en Venezuela?',opts:['El abrigo','El paraguas / sombrero de agua','La bufanda','El impermeable'],ans:1},
    {q:'¿Qué significa "La almohada"?',opts:['La couverture','Le matelas','Le drap','L\'oreiller'],ans:3},
   ]},

  {id:'log',level:1,emoji:'🏠',name:'La Vivienda',sub:'Sala, cocina… / Le logement',
   words:[
    {es:'La casa',fr:'La maison',em:'🏠'},
    {es:'El apartamento / El apto',fr:'L\'appartement (apto = abréviation courante VE)',em:'🏢'},
    {es:'La entrada / El recibidor',fr:'L\'entrée',em:'🚪'},
    {es:'La sala / El comedor',fr:'Le salon / la salle à manger',em:'🛋️'},
    {es:'La cocina',fr:'La cuisine',em:'🍳'},
    {es:'La habitación / El cuarto',fr:'La chambre',em:'🛏️'},
    {es:'El baño / El cuarto de baño',fr:'La salle de bain',em:'🚿'},
    {es:'El baño / El sanitario',fr:'Les toilettes',em:'🚽'},
    {es:'El garaje / El estacionamiento',fr:'Le garage / Le parking',em:'🚗'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le salon" en Venezuela?',opts:['La cocina','La habitación','La sala','El garaje'],ans:2},
    {q:'¿Qué significa "La cocina"?',opts:['La salle à manger','La cuisine','La salle de bain','Le salon'],ans:1},
    {q:'¿Cómo se dice "La chambre" en español?',opts:['La sala','La habitación / el cuarto','La entrada','El garaje'],ans:1},
    {q:'¿Cómo se dice "L\'appartement" en Venezuela?',opts:['La casa','La entrada','El apartamento / el apto','La habitación'],ans:2},
    {q:'¿Qué significa "El estacionamiento" en Venezuela?',opts:['Le garage','Le parking','La route','L\'entrée'],ans:1}
   ]},

  {id:'muebles_equipamiento',level:1,emoji:'🪑',name:'Muebles y Equipamiento',sub:'Sofá, nevera, baño… / Meubles et équipements',
   words:[
    {es:'El sofá',fr:'Le canapé',em:'🛋️'},
    {es:'El sillón / La poltrona',fr:'Le fauteuil (poltrona courant en VE)',em:'💺'},
    {es:'La mesa',fr:'La table',em:''},
    {es:'La silla',fr:'La chaise',em:'🪑'},
    {es:'La lámpara',fr:'La lampe',em:'💡'},
    {es:'El estante / La repisa',fr:'L\'étagère',em:''},
    {es:'La cama',fr:'Le lit',em:'🛏️'},
    {es:'El armario / El closet',fr:'L\'armoire',em:'🗄️'},
    {es:'El escritorio / El buró',fr:'Le bureau',em:'🖊️'},
    {es:'La nevera',fr:'Le réfrigérateur (nevera conservé en VE)',em:'🧊'},
    {es:'El horno',fr:'Le four',em:'🔥'},
    {es:'El microondas',fr:'Le micro-ondes',em:'🔲♨️'},
    {es:'El lavaplatos / El fregadero',fr:'L\'évier',em:'🚰'},
    {es:'El lavamanos',fr:'Le lavabo',em:'🚰'},
    {es:'La bañera / La tina',fr:'La baignoire',em:'🛁'},
    {es:'La ducha',fr:'La douche',em:'🚿'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le canapé" en español?',opts:['El sillón','La silla','El sofá','La cama'],ans:2},
    {q:'¿Qué significa "El armario / el closet"?',opts:['Le bureau','L\'étagère','Le fauteuil','L\'armoire'],ans:3},
    {q:'¿Cómo se dice "Le réfrigérateur" en Venezuela?',opts:['El horno','El microondas','La nevera','El lavaplatos'],ans:2},
    {q:'¿Cómo se dice "Le four" en español?',opts:['El microondas','El horno','El lavaplatos','El lavamanos'],ans:1},
    {q:'¿Qué significa "La repisa"?',opts:['La lampe','Le fauteuil','La chaise','L\'étagère'],ans:3},
    {q:'¿Cómo se dice "La baignoire" en Venezuela?',opts:['El lavamanos','El lavaplatos','La bañera / la tina','La ducha'],ans:2},
    {q:'¿Qué significa "El buró" en Venezuela?',opts:['L\'armoire','Le lit','Le bureau','La table'],ans:2},
   ]},

  {id:'emot',level:1,emoji:'😄',name:'Las Emociones',sub:'Alegre, arrecho… / Les émotions',
   words:[
    {es:'Contento / Contenta',fr:'Content / Contente',em:'😊'},
    {es:'Feliz',fr:'Heureux / Heureuse',em:'😊'},
    {es:'Alegre',fr:'Joyeux / Joyeuse',em:'😄'},
    {es:'Triste',fr:'Triste',em:'😢'},
    {es:'Cansado / Cansada',fr:'Fatigué / Fatiguée',em:'😴'},
    {es:'Molesto / Molesta',fr:'Fâché / Fâchée (courant en VE)',em:'😠'},
    {es:'Arrecho / Arrecha',fr:'En colère / Très énergivé (fort en VE, à utiliser avec soin)',em:'😠'},
    {es:'Tener miedo',fr:'Avoir peur',em:'😨'},
    {es:'Enfermo / Enferma',fr:'Malade',em:'🤒'},
    {es:'Maluco / Maluca',fr:'Pas très bien / Légèrement malade (VE)',em:'🤒'},
    {es:'Preocupado / Preocupada',fr:'Inquiet / Inquiète',em:'😟'},
    {es:'Estresado / Estresada',fr:'Stressé / Stressée',em:'😰'},
    {es:'Decepcionado / Decepcionada',fr:'Déçu / Déçue',em:'😞'},
    {es:'Enamorado / Enamorada',fr:'Amoureux / Amoureuse',em:'😍'},
    {es:'¡Qué chévere! / ¡Qué fino!',fr:'C\'est super ! / C\'est cool ! (emblématique Venezuela)',em:'🌟'},
    {es:'¡Qué vaina!',fr:'Zut ! / Dommage ! / Quelle affaire ! (expression multifonction VE)',em:'😤'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Fâchée" en Venezuela?',opts:['Decepcionada','Molesta','Preocupada','Contenta'],ans:1},
    {q:'¿Cómo se dice "Joyeuse" en español?',opts:['Triste','Cansada','Alegre','Enferma'],ans:2},
    {q:'¿Cómo se dice "Fatigué" en español?',opts:['Estresado','Enfermo','Preocupado','Cansado'],ans:3},
    {q:'¿Qué significa "¡Qué vaina!" en Venezuela?',opts:['Comme c\'est beau !','Zut ! / Dommage !','C\'est délicieux !','Au revoir !'],ans:1},
    {q:'¿Qué significa "¡Qué chévere!" en Venezuela?',opts:['Ça m\'énerve !','C\'est nul !','C\'est super ! / C\'est cool !','J\'ai peur !'],ans:2},
    {q:'¿Cómo se dice "Inquiète" en español?',opts:['Estresada','Enamorada','Preocupada','Decepcionada'],ans:2},
    {q:'¿Qué significa "Tener miedo"?',opts:['Avoir faim','Avoir peur','Avoir froid','Avoir sommeil'],ans:1}
   ]},

  {id:'fam',level:1,emoji:'👨‍👩‍👧',name:'La Familia',sub:'Papá, mamá, chamo… / La famille',
   words:[
    {es:'La madre / La mamá / La vieja',fr:'La mère / La maman (vieja = mère, affectueux en VE)',em:'👩'},
    {es:'El padre / El papá / El viejo',fr:'Le père / Le papa (viejo = père, affectueux en VE)',em:'👨'},
    {es:'La hija',fr:'La fille',em:'👧'},
    {es:'El hijo',fr:'Le fils',em:'👦'},
    {es:'La hermana',fr:'La sœur',em:'👧'},
    {es:'El hermano',fr:'Le frère',em:'🧑'},
    {es:'La abuela / La abuelita',fr:'La grand-mère',em:'👵'},
    {es:'El abuelo / El abuelito',fr:'Le grand-père',em:'👴'},
    {es:'La mujer / La esposa',fr:'La femme',em:'💑'},
    {es:'El marido / El esposo',fr:'Le mari',em:'💍'},
    {es:'El tío / La tía',fr:'L\'oncle / La tante',em:'👨/👩'},
    {es:'El chamo / La chama',fr:'Le gamin / La gamine / Le mec / La nana (argot VE)',em:'🧒'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le père" en español?',opts:['El marido','El hijo','El padre o el papá','El hermano'],ans:2},
    {q:'¿Qué significa "La madre"?',opts:['La fille','La sœur','La maman','La mère'],ans:3},
    {q:'¿Cómo se dice "Le frère" en español?',opts:['El hijo','El hermano','El papá','El marido'],ans:1},
    {q:'¿Qué significa "La hermana"?',opts:['La mère','La grand-mère','La sœur','La fille'],ans:2},
    {q:'¿Cómo se dice "Le grand-père" en español?',opts:['El papá','El marido','El hijo','El abuelo'],ans:3},
    {q:'¿Qué significa "El chamo / La chama" en Venezuela?',opts:['Le père / la mère','Le gamin / la nana (argot)','Le frère / la sœur','L\'oncle / la tante'],ans:1},
    {q:'¿Cómo se dice "La fille" en español?',opts:['La hermana','La esposa','La hija','La mamá'],ans:2},
    {q:'En Venezuela, "El viejo / La vieja" puede significar…',opts:['Un vieil homme','Le père / la mère (affectueux)','Le grand-père','L\'étranger'],ans:1}
   ]},

  {id:'verb',level:1,emoji:'📝',name:'Los Verbos',sub:'Ser, tener, ir… / Les verbes principaux',
   words:[
    {es:'Ser / Estar',fr:'Être (ser=permanent / estar=temporaire)',em:'🧑',conj:{es:['Yo soy/estoy','Tú eres/estás','Él/Ella es/está','Nosotros somos/estamos','Ustedes son/están','Ellos/Ellas son/están'],fr:['Je suis','Tu es','Il/Elle est','Nous sommes','Vous êtes','Ils/Elles sont']}},
    {es:'Tener',fr:'Avoir',em:'🤲',conj:{es:['Yo tengo','Tú tienes','Él/Ella tiene','Nosotros tenemos','Ustedes tienen','Ellos/Ellas tienen'],fr:['J\'ai','Tu as','Il/Elle a','Nous avons','Vous avez','Ils/Elles ont']}},
    {es:'Hablar',fr:'Parler',em:'🗣️',conj:{es:['Yo hablo','Tú hablas','Él/Ella habla','Nosotros hablamos','Ustedes hablan','Ellos/Ellas hablan'],fr:['Je parle','Tu parles','Il/Elle parle','Nous parlons','Vous parlez','Ils/Elles parlent']}},
    {es:'Vivir',fr:'Habiter',em:'🏠',conj:{es:['Yo vivo','Tú vives','Él/Ella vive','Nosotros vivimos','Ustedes viven','Ellos/Ellas viven'],fr:['J\'habite','Tu habites','Il/Elle habite','Nous habitons','Vous habitez','Ils/Elles habitent']}},
    {es:'Ir',fr:'Aller',em:'🚶',conj:{es:['Yo voy','Tú vas','Él/Ella va','Nosotros vamos','Ustedes van','Ellos/Ellas van'],fr:['Je vais','Tu vas','Il/Elle va','Nous allons','Vous allez','Ils/Elles vont']}},
    {es:'Gustar / Encantar',fr:'Aimer / Adorer',em:'❤️',conj:{es:['Me gusta','Te gusta','Le gusta','Nos gusta','Les gusta','Les gusta'],fr:['J\'aime','Tu aimes','Il/Elle aime','Nous aimons','Vous aimez','Ils/Elles aiment']}},
    {es:'Comer',fr:'Manger',em:'🍽️',conj:{es:['Yo como','Tú comes','Él/Ella come','Nosotros comemos','Ustedes comen','Ellos/Ellas comen'],fr:['Je mange','Tu manges','Il/Elle mange','Nous mangeons','Vous mangez','Ils/Elles mangent']}},
    {es:'Beber / Tomar',fr:'Boire (tomar très courant en VE)',em:'🥤',conj:{es:['Yo bebo/tomo','Tú bebes/tomas','Él/Ella bebe/toma','Nosotros bebemos/tomamos','Ustedes beben/toman','Ellos beben/toman'],fr:['Je bois','Tu bois','Il/Elle boit','Nous buvons','Vous buvez','Ils/Elles boivent']}},
    {es:'Dormir',fr:'Dormir',em:'😴',conj:{es:['Yo duermo','Tú duermes','Él/Ella duerme','Nosotros dormimos','Ustedes duermen','Ellos/Ellas duermen'],fr:['Je dors','Tu dors','Il/Elle dort','Nous dormons','Vous dormez','Ils/Elles dorment']}},
    {es:'Caminar',fr:'Marcher',em:'🚶‍♂️',conj:{es:['Yo camino','Tú caminas','Él/Ella camina','Nosotros caminamos','Ustedes caminan','Ellos/Ellas caminan'],fr:['Je marche','Tu marches','Il/Elle marche','Nous marchons','Vous marchez','Ils/Elles marchent']}},
    {es:'Correr',fr:'Courir',em:'🏃‍♂️',conj:{es:['Yo corro','Tú corres','Él/Ella corre','Nosotros corremos','Ustedes corren','Ellos/Ellas corren'],fr:['Je cours','Tu cours','Il/Elle court','Nous courons','Vous courez','Ils/Elles courent']}},
    {es:'Leer',fr:'Lire',em:'📖',conj:{es:['Yo leo','Tú lees','Él/Ella lee','Nosotros leemos','Ustedes leen','Ellos/Ellas leen'],fr:['Je lis','Tu lis','Il/Elle lit','Nous lisons','Vous lisez','Ils/Elles lisent']}},
    {es:'Escribir',fr:'Écrire',em:'✍️',conj:{es:['Yo escribo','Tú escribes','Él/Ella escribe','Nosotros escribimos','Ustedes escriben','Ellos/Ellas escriben'],fr:['J\'écris','Tu écris','Il/Elle écrit','Nous écrivons','Vous écrivez','Ils/Elles écrivent']}},
    {es:'Escuchar',fr:'Écouter',em:'🎧',conj:{es:['Yo escucho','Tú escuchas','Él/Ella escucha','Nosotros escuchamos','Ustedes escuchan','Ellos/Ellas escuchan'],fr:['J\'écoute','Tu écoutes','Il/Elle écoute','Nous écoutons','Vous écoutez','Ils/Elles écoutent']}},
    {es:'Mirar',fr:'Regarder',em:'👀',conj:{es:['Yo miro','Tú miras','Él/Ella mira','Nosotros miramos','Ustedes miran','Ellos/Ellas miran'],fr:['Je regarde','Tu regardes','Il/Elle regarde','Nous regardons','Vous regardez','Ils/Elles regardent']}},
    {es:'Aprender',fr:'Apprendre',em:'🧠',conj:{es:['Yo aprendo','Tú aprendes','Él/Ella aprende','Nosotros aprendemos','Ustedes aprenden','Ellos/Ellas aprenden'],fr:['J\'apprends','Tu apprends','Il/Elle apprend','Nous apprenons','Vous apprenez','Ils/Elles apprennent']}},
    {es:'Pensar',fr:'Penser',em:'🤔',conj:{es:['Yo pienso','Tú piensas','Él/Ella piensa','Nosotros pensamos','Ustedes piensan','Ellos/Ellas piensan'],fr:['Je pense','Tu penses','Il/Elle pense','Nous pensons','Vous pensez','Ils/Elles pensent']}},
    {es:'Tomar',fr:'Prendre / Boire (très polyvalent en VE)',em:'🤲',conj:{es:['Yo tomo','Tú tomas','Él/Ella toma','Nosotros tomamos','Ustedes toman','Ellos/Ellas toman'],fr:['Je prends / bois','Tu prends / bois','Il/Elle prend / boit','Nous prenons / buvons','Vous prenez / buvez','Ils/Elles prennent / boivent']}},
    {es:'Dar',fr:'Donner',em:'🤲',conj:{es:['Yo doy','Tú das','Él/Ella da','Nosotros damos','Ustedes dan','Ellos/Ellas dan'],fr:['Je donne','Tu donnes','Il/Elle donne','Nous donnons','Vous donnez','Ils/Elles donnent']}},
    {es:'Buscar',fr:'Chercher',em:'🔍',conj:{es:['Yo busco','Tú buscas','Él/Ella busca','Nosotros buscamos','Ustedes buscan','Ellos/Ellas buscan'],fr:['Je cherche','Tu cherches','Il/Elle cherche','Nous cherchons','Vous cherchez','Ils/Elles cherchent']}},
    {es:'Comprar',fr:'Acheter',em:'🛒',conj:{es:['Yo compro','Tú compras','Él/Ella compra','Nosotros compramos','Ustedes compran','Ellos/Ellas compran'],fr:['J\'achète','Tu achètes','Il/Elle achète','Nous achetons','Vous achetez','Ils/Elles achètent']}},
    {es:'Vender',fr:'Vendre',em:'💰',conj:{es:['Yo vendo','Tú vendes','Él/Ella vende','Nosotros vendemos','Ustedes venden','Ellos/Ellas venden'],fr:['Je vends','Tu vends','Il/Elle vend','Nous vendons','Vous vendez','Ils/Elles vendent']}},
    {es:'Pagar',fr:'Payer',em:'💳',conj:{es:['Yo pago','Tú pagas','Él/Ella paga','Nosotros pagamos','Ustedes pagan','Ellos/Ellas pagan'],fr:['Je paie','Tu paies','Il/Elle paie','Nous payons','Vous payez','Ils/Elles paient']}},
    {es:'Trabajar',fr:'Travailler',em:'💼',conj:{es:['Yo trabajo','Tú trabajas','Él/Ella trabaja','Nosotros trabajamos','Ustedes trabajan','Ellos/Ellas trabajan'],fr:['Je travaille','Tu travailles','Il/Elle travaille','Nous travaillons','Vous travaillez','Ils/Elles travaillent']}},
    {es:'Manejar / Conducir',fr:'Conduire (manejar très courant en VE)',em:'🚗',conj:{es:['Yo manejo','Tú manejas','Él/Ella maneja','Nosotros manejamos','Ustedes manejan','Ellos/Ellas manejan'],fr:['Je conduis','Tu conduis','Il/Elle conduit','Nous conduisons','Vous conduisez','Ils/Elles conduisent']}},
    {es:'Limpiar',fr:'Nettoyer',em:'🧹',conj:{es:['Yo limpio','Tú limpias','Él/Ella limpia','Nosotros limpiamos','Ustedes limpian','Ellos/Ellas limpian'],fr:['Je nettoie','Tu nettoies','Il/Elle nettoie','Nous nettoyons','Vous nettoyez','Ils/Elles nettoient']}},
    {es:'Llegar',fr:'Arriver',em:'🛬',conj:{es:['Yo llego','Tú llegas','Él/Ella llega','Nosotros llegamos','Ustedes llegan','Ellos/Ellas llegan'],fr:['J\'arrive','Tu arrives','Il/Elle arrive','Nous arrivons','Vous arrivez','Ils/Elles arrivent']}},
    {es:'Llamar',fr:'Appeler',em:'📞',conj:{es:['Yo llamo','Tú llamas','Él/Ella llama','Nosotros llamamos','Ustedes llaman','Ellos/Ellas llaman'],fr:['J\'appelle','Tu appelles','Il/Elle appelle','Nous appelons','Vous appelez','Ils/Elles appellent']}},
    {es:'¡Qué chévere! / ¡Qué fino!',fr:'Super ! / Génial ! (argot emblématique Venezuela)',em:'😎',conj:{es:['¡Qué chévere!','¡Qué fino!','¡Qué bueno!','¡Qué vaina tan buena!','¡Bacano!','¡Está bien!'],fr:['Super !','Génial !','Très bien !','Quelle bonne affaire !','Excellent !','D\'accord !']}}
   ],
   quiz10:[
    {q:'¿Qué significa "¡Qué chévere, pana!" en Venezuela?',opts:['Ça m\'ennuie, l\'ami','Ça me fait peur','Super, mon pote !','Je suis fatigué'],ans:2},
    {q:'¿Cómo se dit "Tu conduis" en Venezuela (verbe courant)?',opts:['Corres','Caminas','Manejas','Te vas'],ans:2},
    {q:'¿Qué significa "Aprendo"?',opts:['Tu enseignes','Tu écoutes','J\'apprends','Je lis'],ans:2},
    {q:'¿Qué significa "Venden"?',opts:['Ils achètent','Ils cherchent','Ils vendent','Ils donnent'],ans:2},
    {q:'¿Cómo se dice "Il dort" en español?',opts:['Corre','Camina','Duerme','Come'],ans:2},
    {q:'¿Cómo se dice "Vous habitez" en español de Venezuela?',opts:['Ustedes viven','Vivimos','Viven ellos','Vivo'],ans:0},
    {q:'¿Qué significa "Como"?',opts:['Tu bois','Tu manges','Tu dors','Tu marches'],ans:1},
    {q:'¿Qué significa "Toma el bus" en Venezuela?',opts:['Il rate le bus','Il cherche le bus','Il prend le bus','Il attend le bus'],ans:2},
    {q:'¿Cómo se dice "Ils mangent" en español?',opts:['Comemos','Ustedes comen','Comen','Como'],ans:2},
    {q:'¿Cómo se dice "Nous travaillons" en español?',opts:['Limpio','Cocino','Trabajamos','Manejamos'],ans:2},
    {q:'¿Cómo se dice "Tu arrives" en español?',opts:['Te vas','Llegas','Buscas','Pagas'],ans:1},
    {q:'¿Cómo se dice "Nous parlons" en español?',opts:['Hablo','Hablamos','Hablan ustedes','Hablan'],ans:1}
   ]},

  {id:'corps',level:1,emoji:'🧍',name:'El Cuerpo',sub:'Cabeza, brazo, pie… / Le corps',
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
    {es:'La barriga / La panza',fr:'Le ventre (panza courant en VE)',em:'🫃'},
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
    {es:'Doler / Me duele',fr:'Faire mal / j\'ai mal',em:'🤕'},
    {es:'Tener dolor',fr:'Avoir une douleur',em:'😣'},
    {es:'La fiebre / El calenturón',fr:'La fièvre (calenturón = forte fièvre, VE)',em:'🌡️'},
    {es:'La tos',fr:'La toux',em:'😮‍💨'},
    {es:'El pañuelo desechable',fr:'Le mouchoir jetable',em:'🤧'},
    {es:'El termómetro',fr:'Le thermomètre',em:'🌡️'},
    {es:'La cita',fr:'Le rendez-vous',em:'📅'},
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
    {es:'La curita',fr:'Le pansement adhésif',em:'🩹'},
    {es:'El vendaje',fr:'Le bandage',em:'🩼'},
    {es:'La ambulancia',fr:'L\'ambulance',em:'🚑'},
    {es:'La sala de emergencias',fr:'Les urgences',em:'🆘'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'hôpital" en español?',opts:['La farmacia','El hospital / la clínica','La emergencias','La consulta'],ans:1},
    {q:'¿Qué significa "La fiebre"?',opts:['La toux','La douleur','La fièvre','La grippe'],ans:2},
    {q:'¿Cómo se dice "Le vaccin" en español?',opts:['La curita','La vacuna','El vendaje','El medicamento'],ans:1},
    {q:'¿Cómo se dice "Le pansement adhésif" en Venezuela?',opts:['La inyección','La vacuna','La curita','El medicamento'],ans:2},
    {q:'¿Cómo se dice "L\'ordonnance" en español?',opts:['La consulta','El medicamento','La receta médica','La vacuna'],ans:2},
    {q:'¿Cómo se dice "Les urgences" en Venezuela?',opts:['El médico de guardia','La sala de espera','La sala de emergencias','La consulta'],ans:2},
    {q:'¿Cómo se dice "Le thermomètre" en español?',opts:['La presión','El termómetro','La fiebre','La inyección'],ans:1},
    {q:'¿Cómo se dice "Un rendez-vous médical" en español?',opts:['Una visita','Una cita médica','Una receta','Una consulta'],ans:1}
   ]},

  {id:'ocio',level:1,emoji:'⛰️',name:'El Ocio',sub:'Deporte, playa, béisbol… / Les loisirs',
   words:[
    {es:'La lectura',fr:'La lecture',em:'📚'},
    {es:'El libro',fr:'Le livre',em:'📖'},
    {es:'La música / El joropo',fr:'La musique / Le joropo (musique nationale vénézuélienne)',em:'🎵'},
    {es:'El cine',fr:'Le cinéma',em:'🎬'},
    {es:'El teatro',fr:'Le théâtre',em:'🎭'},
    {es:'El deporte',fr:'Le sport',em:''},
    {es:'El béisbol',fr:'Le baseball (sport national du Venezuela)',em:'⚾'},
    {es:'El fútbol',fr:'Le football',em:'⚽'},
    {es:'La natación',fr:'La natation',em:'🏊'},
    {es:'El ciclismo',fr:'Le cyclisme',em:'🚴'},
    {es:'El senderismo / La caminata',fr:'La randonnée',em:'🥾'},
    {es:'El paseo',fr:'La balade / La promenade',em:'🌳'},
    {es:'Jugar',fr:'Jouer',em:'🎮'},
    {es:'Practicar',fr:'Pratiquer',em:'💪'},
    {es:'Descansar / Relajarse',fr:'Se reposer / Se détendre',em:'😴'},
    {es:'Disfrutar / Gozar',fr:'Profiter / Apprécier',em:'😊'},
   ],
   quiz10:[
    {q:'¿Cuál es el deporte nacional de Venezuela?',opts:['El fútbol','El béisbol','La natación','El ciclismo'],ans:1},
    {q:'¿Qué significa "La natación"?',opts:['Le cyclisme','L\'athlétisme','La natation','Le football'],ans:2},
    {q:'¿Cómo se dice "Le livre" en español?',opts:['La lectura','La música','El libro','El cine'],ans:2},
    {q:'¿Qué es el "joropo" en Venezuela?',opts:['Un sport','La musique nationale','Un plat typique','Une danse moderne'],ans:1},
    {q:'¿Qué significa "Descansar"?',opts:['Jouer','Pratiquer','Apprécier','Se reposer'],ans:3},
    {q:'¿Cómo se dice "Le cinéma" en español?',opts:['El teatro','La música','La lectura','El cine'],ans:3},
    {q:'¿Cómo se dice "Jouer" en español?',opts:['Practicar','Disfrutar','Descansar','Jugar'],ans:3},
    {q:'¿Qué significa "Gozar" en Venezuela?',opts:['Se reposer','Jouer','Pratiquer','Profiter / Apprécier'],ans:3}
   ]},

  {id:'veth',level:1,emoji:'👗',name:'La Ropa',sub:'Franela, pantalón… / Les vêtements',
   words:[
    {es:'La franela',fr:'Le t-shirt (franela = t-shirt en Venezuela)',em:'👕'},
    {es:'La camisa',fr:'La chemise',em:'👔'},
    {es:'El pantalón',fr:'Le pantalon',em:'👖'},
    {es:'Los zapatos / Los tenis',fr:'Les chaussures / Les baskets (tenis courant en VE)',em:'👟'},
    {es:'Los calcetines / Las medias',fr:'Les chaussettes (medias courant en VE)',em:'🧦'},
    {es:'El vestido / La falda',fr:'La robe / La jupe',em:'👗'},
    {es:'Los shorts / El pantalón corto',fr:'Le short',em:'🩳'},
    {es:'El suéter / El sweater',fr:'Le pull (suéter / sweater en VE)',em:'🧥'},
    {es:'La chaqueta / La chamarra',fr:'La veste',em:'🧥'},
    {es:'El sombrero / La gorra',fr:'Le chapeau / La casquette',em:'🎩'},
    {es:'El abrigo / La gabardina',fr:'Le manteau / L\'imperméable',em:'🧥'},
    {es:'La bufanda',fr:'L\'écharpe',em:'🧣'},
    {es:'Los guantes',fr:'Les gants',em:'🧤'},
    {es:'El bolso / La cartera',fr:'Le sac / Le sac à main',em:'👜'},
    {es:'El vestido de baño / El traje de baño',fr:'Le maillot de bain',em:'🩱'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le t-shirt" en Venezuela?',opts:['El suéter','La camisa','La franela','La chaqueta'],ans:2},
    {q:'¿Cómo se dice "Les chaussures" en español?',opts:['Las medias','Los tenis','Los zapatos','El sombrero'],ans:2},
    {q:'¿Cómo se dice "Le pull" en Venezuela?',opts:['La bufanda','La chaqueta','El suéter / el sweater','El abrigo'],ans:2},
    {q:'¿Cómo se dice "Le maillot de bain" en Venezuela?',opts:['El vestido de baño','El gorro','Los shorts','Las medias'],ans:0},
    {q:'¿Qué significa "La bufanda"?',opts:['Les gants','Le manteau','L\'écharpe','Le bonnet'],ans:2},
    {q:'¿Cómo se dice "La robe" en español?',opts:['La falda','El vestido','La chaqueta','El suéter'],ans:1},
    {q:'¿Qué significa "Las medias" en Venezuela?',opts:['Les chaussures','Les gants','Les chaussettes','Le maillot de bain'],ans:2},
    {q:'¿Cómo se dice "La casquette" en español?',opts:['El sombrero','La gorra','La bufanda','El gorro'],ans:1}
   ]},

  {id:'pays',level:1,emoji:'🌍',name:'Los Países',sub:'Francia, Venezuela… / Les pays',
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
    {es:'Australia',fr:'L\'Australie',em:'🇦🇺'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "La France" en español?',opts:['Bélgica','Francia','Suiza','Portugal'],ans:1},
    {q:'¿Qué significa "Alemania"?',opts:['Autriche','Pays-Bas','Allemagne','Danemark'],ans:2},
    {q:'¿Cómo se dice "Le Brésil" en español?',opts:['Perú','Chile','Brasil','Bolivia'],ans:2},
    {q:'¿Qué significa "Reino Unido"?',opts:['Irlande','Royaume-Uni','Écosse','Danemark'],ans:1},
    {q:'¿Cuál es el país vecino de Venezuela al oeste?',opts:['Brasil','Ecuador','Colombia','Trinidad'],ans:2},
    {q:'¿Cómo se dice "La Grèce" en español?',opts:['Turquía','Grecia','Italia','Chipre'],ans:1},
    {q:'¿Cómo se dice "Le Mexique" en español?',opts:['Colombia','México','Argentina','Chile'],ans:1},
    {q:'¿Cómo se dice "L\'Argentine" en español?',opts:['Bolivia','Colombia','Argentina','Chile'],ans:2}
   ]},

  {id:'met',level:1,emoji:'💼',name:'Las Profesiones',sub:'Médico, profe, mesonero… / Les professions',
   words:[
    {es:'El/la estudiante',fr:'L\'étudiant / L\'étudiante',em:'🎓'},
    {es:'El profesor / La profesora',fr:'Le professeur / La professeure',em:'👩‍🏫'},
    {es:'El mesonero / La mesonera',fr:'Le serveur / La serveuse (spécifique Venezuela)',em:'🍽️'},
    {es:'El vendedor / La vendedora',fr:'Le vendeur / La vendeuse',em:'🏪'},
    {es:'El/la taxista',fr:'Le chauffeur de taxi',em:'🚕'},
    {es:'El médico / El doctor / La doctora',fr:'Le médecin / Le docteur',em:'🩺'},
    {es:'El enfermero / La enfermera',fr:'L\'infirmier / L\'infirmière',em:'👨‍⚕️'},
    {es:'El cocinero / La cocinera',fr:'Le cuisinier / La cuisinière',em:'👨‍🍳'},
    {es:'El plomero / La plomera',fr:'Le plombier / La plombière',em:'🔧'},
    {es:'El técnico / La técnica en sistemas',fr:'Le/la technicien(ne) en informatique',em:'💻'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le médecin" en español?',opts:['El profesor','El médico / el doctor','El enfermero','El cocinero'],ans:1},
    {q:'¿Qué significa "El profesor"?',opts:['L\'étudiant','Le directeur','Le professeur','Le concierge'],ans:2},
    {q:'¿Cómo se dice "Le serveur" en Venezuela?',opts:['El cocinero','El mesonero','El taxista','El vendedor'],ans:1},
    {q:'¿Qué significa "La estudiante"?',opts:['La professeure','L\'étudiante','La médecin','La vendeuse'],ans:1},
    {q:'¿Cómo se dice "Le plombier" en Venezuela?',opts:['El médico','El profesor','El plomero','El mesonero'],ans:2}
   ]},

  {id:'anim',level:1,emoji:'🐘',name:'Los Animales',sub:'Perro, turpial, chigüire… / Les animaux',
   words:[
    {es:'El perro',fr:'Le chien',em:'🐶'},
    {es:'El gato',fr:'Le chat',em:'🐱'},
    {es:'El pájaro / El turpial',fr:'L\'oiseau / Le troupiale (oiseau national du Venezuela)',em:'🐦'},
    {es:'El pez',fr:'Le poisson (vivant)',em:'🐟'},
    {es:'El caballo',fr:'Le cheval',em:'🐴'},
    {es:'La vaca',fr:'La vache',em:'🐮'},
    {es:'El cerdo',fr:'Le cochon',em:'🐷'},
    {es:'La gallina',fr:'La poule',em:'🐔'},
    {es:'El conejo',fr:'Le lapin',em:'🐰'},
    {es:'El chigüire',fr:'Le capybara (rongeur emblématique du Venezuela)',em:'🦫'},
    {es:'El toro',fr:'Le taureau',em:'🐂'},
    {es:'El pato',fr:'Le canard',em:'🦆'},
    {es:'El loro',fr:'Le perroquet',em:'🦜'},
    {es:'El delfín',fr:'Le dauphin',em:'🐬'},
    {es:'La ballena',fr:'La baleine',em:'🐳'},
    {es:'El flamenco',fr:'Le flamant rose (oiseau typique des Caraïbes)',em:'🦩'},
    {es:'La mariposa',fr:'Le papillon',em:'🦋'},
    {es:'La rana',fr:'La grenouille',em:'🐸'},
    {es:'La serpiente / La culebra',fr:'Le serpent (culebra courant en VE)',em:'🐍'},
    {es:'El caimán',fr:'Le caïman',em:'🐊'},
    {es:'La araña',fr:'L\'araignée',em:'🕷️'},
    {es:'El mosquito / El zancudo',fr:'Le moustique (zancudo courant en VE)',em:'🦟'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le chien" en español?',opts:['El gato','El caballo','El perro','El conejo'],ans:2},
    {q:'¿Qué es el "turpial" en Venezuela?',opts:['Un poisson','L\'oiseau national','Un serpent','Un insecte'],ans:1},
    {q:'¿Qué es el "chigüire" en Venezuela?',opts:['Un chien sauvage','Le capybara (grand rongeur)','Un oiseau','Un serpent'],ans:1},
    {q:'¿Qué significa "El loro"?',opts:['Le perroquet','Le pigeon','La poule','Le canard'],ans:0},
    {q:'¿Cómo se dice "Le dauphin" en español?',opts:['La ballena','El caimán','El delfín','El pez'],ans:2},
    {q:'¿Qué significa "La culebra" en Venezuela?',opts:['Le lézard','La grenouille','Le serpent','L\'insecte'],ans:2},
    {q:'¿Cómo se dice "Le coq" en español?',opts:['La gallina','El pollo','El gallo','El pato'],ans:2},
    {q:'¿Qué es el "flamenco" en Venezuela?',opts:['Un style de danse','Le flamant rose','Un oiseau rapace','Un poisson'],ans:1}
   ]},

  {id:'plan',level:1,emoji:'🌿',name:'Las Plantas',sub:'Flor, árbol, selva… / Les plantes',
   words:[
    {es:'La flor / La orquídea',fr:'La fleur / L\'orchidée (fleur nationale du Venezuela)',em:'🌸'},
    {es:'El árbol',fr:'L\'arbre',em:'🌳'},
    {es:'La hoja',fr:'La feuille',em:'🍃'},
    {es:'La hierba / El pasto',fr:'L\'herbe / La pelouse',em:'🌱'},
    {es:'El jardín',fr:'Le jardin',em:'🏡'},
    {es:'La rosa',fr:'La rose',em:'🌹'},
    {es:'El bosque / La selva / La jungla',fr:'La forêt / La jungle',em:'🌲'},
    {es:'El manglar',fr:'La mangrove (typique des côtes vénézuéliennes)',em:'🌿'},
    {es:'El césped / El pasto',fr:'La pelouse / Le gazon',em:'⛳'},
   ],
   quiz10:[
    {q:'¿Cuál es la flor nacional de Venezuela?',opts:['La rosa','La orquídea','El lirio','El clavel'],ans:1},
    {q:'¿Qué significa "El árbol"?',opts:['La feuille','L\'herbe','L\'arbre','La fleur'],ans:2},
    {q:'¿Qué significa "El bosque / La selva"?',opts:['Le jardin','La forêt / la jungle','Le champ','Le parc'],ans:1},
    {q:'¿Qué es el "manglar" en Venezuela?',opts:['Une forêt de montagne','La mangrove côtière','Un jardin botanique','Un champ cultivé'],ans:1},
    {q:'¿Cómo se dice "Le jardin" en español?',opts:['El bosque','El árbol','El jardín','La flor'],ans:2}
   ]}
];


/* ========================================
   Español Venezolano → Français 🇻🇪 – Niveau 2
   14 situations de dialogues — Niveau A1
   Français débutant au Venezuela
   © 2026 Sébastien Godet
======================================== */

var LEVEL2_THEMES = [

  /* 1 ── Saluer et prendre des nouvelles */
  {id:'salut2',level:2,emoji:'👋',name:'Saludos',sub:'Saluer quelqu\'un / Dire bonjour au Venezuela',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans la rue',img:'🏘️',dialogue:[
      {s:'Lucas',es:'¡Hola, pana! ¿Qué tal?',fr:'Salut, mon pote ! Ça va ?',side:'left'},
      {s:'Ana',es:'¡Bien, gracias! ¿Y tú, chamo?',fr:'Bien, merci ! Et toi ?',side:'right'},
      {s:'Lucas',es:'Más o menos. Estoy cansado.',fr:'Comme ci comme ça. Je suis fatigué.',side:'left'},
      {s:'Ana',es:'¡Qué vaina! Lo siento.',fr:'Dommage ! Je suis désolée.',side:'right'},
      {s:'Lucas',es:'Gracias. ¡Hasta luego!',fr:'Merci. À plus !',side:'left'},
      {s:'Ana',es:'¡Hasta pronto, pana!',fr:'À bientôt, l\'ami !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Au bureau le matin',img:'💼',dialogue:[
      {s:'Pedro',es:'¡Buenos días! ¿Cómo estás?',fr:'Bonjour ! Comment tu vas ?',side:'left'},
      {s:'María',es:'Bien, gracias. ¿Y tú?',fr:'Bien, merci. Et toi ?',side:'right'},
      {s:'Pedro',es:'Un poco cansado. ¿Quieres café negro?',fr:'Un peu fatigué. Tu veux un café noir ?',side:'left'},
      {s:'María',es:'Sí, por favor. ¡Gracias!',fr:'Oui, s\'il te plaît. Merci !',side:'right'},
      {s:'Pedro',es:'De nada. ¡Aquí tienes!',fr:'De rien. Voilà !',side:'left'}
    ]},
    {label:'Sit. 3',title:'Retrouver un pote',img:'☀️',dialogue:[
      {s:'Carlos',es:'¡Hola, chamo! ¿Qué más?',fr:'Salut, mon gars ! Quoi de neuf ?',side:'left'},
      {s:'Sofía',es:'¡Aquí, bien! ¿Y tú?',fr:'Là, ça va ! Et toi ?',side:'right'},
      {s:'Carlos',es:'Bien. ¿Qué hay de nuevo?',fr:'Bien. Quoi de neuf ?',side:'left'},
      {s:'Sofía',es:'Nada especial. ¿Tomamos algo?',fr:'Rien de spécial. On prend quelque chose ?',side:'right'},
      {s:'Carlos',es:'¡Qué chévere! Tengo sed.',fr:'Super ! J\'ai soif.',side:'left'},
      {s:'Sofía',es:'¡Yo también!',fr:'Moi aussi !',side:'right'}
    ]}
   ],
   vocab:['¿Qué tal? / ¿Qué más? = Ça va ? / Quoi de neuf ?','Bien, gracias = Bien, merci','Más o menos = Comme ci comme ça','Estoy cansado = Je suis fatigué','¡Qué vaina! / Lo siento = Dommage ! / Je suis désolé','Pana = Ami / Pote (VE)','Chamo / Chama = Mec / Nana (VE)'],
   quiz:[
    {q:'¿Qué significa "Más o menos"?',opts:['Très bien','Très mal','Comme ci comme ça','Je suis fatigué'],ans:2},
    {q:'¿Cómo se dice "Dommage / Je suis désolé" en Venezuela?',opts:['Gracias','¡Qué vaina! / Lo siento','De nada','Perdona'],ans:1},
    {q:'¿Qué significa "Pana" en Venezuela?',opts:['Le pain','L\'ami / le pote','Le patron','Le quartier'],ans:1}
   ]},

  /* 2 ── Se présenter */
  {id:'pres2',level:2,emoji:'🙋',name:'Presentarse',sub:'Dire son nom, son pays / Se présenter',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans un cours d\'espagnol',img:'📚',dialogue:[
      {s:'Profe',es:'¡Hola! ¿Cómo te llamas, chamo?',fr:'Bonjour ! Tu t\'appelles comment ?',side:'right'},
      {s:'Marc',es:'Me llamo Marc. ¿Y usted?',fr:'Je m\'appelle Marc. Et vous ?',side:'left'},
      {s:'Profe',es:'Yo soy Laura. ¿De dónde eres?',fr:'Je suis Laura. Tu es d\'où ?',side:'right'},
      {s:'Marc',es:'Soy de Francia, de París. ¿Y usted?',fr:'Je suis de France, de Paris. Et vous ?',side:'left'},
      {s:'Profe',es:'Soy de Caracas. ¡Bienvenido, pana!',fr:'Je suis de Caracas. Bienvenue, l\'ami !',side:'right'},
      {s:'Marc',es:'¡Gracias!',fr:'Merci !',side:'left'}
    ]},
    {label:'Sit. 2',title:'Rencontre dans le quartier',img:'🏙️',dialogue:[
      {s:'Vecino',es:'¡Hola! ¿Eres nuevo por aquí?',fr:'Bonjour ! Tu es nouveau ici ?',side:'right'},
      {s:'Julie',es:'Sí. Me llamo Julie. Soy francesa.',fr:'Oui. Je m\'appelle Julie. Je suis française.',side:'left'},
      {s:'Vecino',es:'Yo soy Antonio. ¿Hablas español?',fr:'Moi je suis Antonio. Tu parles espagnol ?',side:'right'},
      {s:'Julie',es:'Un poco. Estoy aprendiendo.',fr:'Un peu. Je suis en train d\'apprendre.',side:'left'},
      {s:'Vecino',es:'¡Qué chévere! Tu español está muy bueno.',fr:'Super ! Ton espagnol est très bon.',side:'right'},
      {s:'Julie',es:'¡Gracias, pana! Eres muy amable.',fr:'Merci, l\'ami ! Tu es très gentil.',side:'left'}
    ]},
    {label:'Sit. 3',title:'À une fiesta',img:'🎉',dialogue:[
      {s:'Chama',es:'¡Hola! ¿Cómo te llamas?',fr:'Salut ! Tu t\'appelles comment ?',side:'right'},
      {s:'Thomas',es:'Thomas. ¿Y tú?',fr:'Thomas. Et toi ?',side:'left'},
      {s:'Chama',es:'Yo soy Lucía. ¿Eres francés?',fr:'Moi je suis Lucía. Tu es français ?',side:'right'},
      {s:'Thomas',es:'Sí, soy de Lyon. ¿Y tú eres de Caracas?',fr:'Oui, je suis de Lyon. Et toi tu es de Caracas ?',side:'left'},
      {s:'Chama',es:'No, soy de Maracaibo. ¡Encantada!',fr:'Non, je suis de Maracaibo. Enchantée !',side:'right'},
      {s:'Thomas',es:'¡Encantado, chama!',fr:'Enchanté !',side:'left'}
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
    {label:'Sit. 1',title:'Trouver le terminal',img:'🚌',dialogue:[
      {s:'Turista',es:'Perdona, ¿dónde está el terminal?',fr:'Pardon, où est la gare routière ?',side:'left'},
      {s:'Señora',es:'Sigue derecho y dobla a la izquierda.',fr:'Continue tout droit et tourne à gauche.',side:'right'},
      {s:'Turista',es:'¿Está lejos?',fr:'C\'est loin ?',side:'left'},
      {s:'Señora',es:'No, está cerca. Son cinco minutos.',fr:'Non, c\'est près. C\'est cinq minutes.',side:'right'},
      {s:'Turista',es:'Muchas gracias.',fr:'Merci beaucoup.',side:'left'},
      {s:'Señora',es:'¡De nada, chamo!',fr:'De rien !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Trouver une farmacia',img:'💊',dialogue:[
      {s:'Marc',es:'Perdona, ¿hay una farmacia cerca?',fr:'Pardon, il y a une pharmacie près d\'ici ?',side:'left'},
      {s:'Chico',es:'Sí. Baja esta calle y dobla a la derecha.',fr:'Oui. Descends cette rue et tourne à droite.',side:'right'},
      {s:'Marc',es:'¿Después del banco?',fr:'Après la banque ?',side:'left'},
      {s:'Chico',es:'Sí, exacto. Es la puerta verde.',fr:'Oui, exactement. C\'est la porte verte.',side:'right'},
      {s:'Marc',es:'¿Está abierta ahora?',fr:'Elle est ouverte maintenant ?',side:'left'},
      {s:'Chico',es:'Sí, creo que sí.',fr:'Oui, je crois que oui.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Trouver un supermercado',img:'🛒',dialogue:[
      {s:'Julie',es:'Perdone, ¿hay un supermercado por aquí?',fr:'Pardon, il y a un supermarché ici ?',side:'left'},
      {s:'Señor',es:'Sí, está enfrente, al lado de la bodega.',fr:'Oui, il est en face, à côté de la supérette.',side:'right'},
      {s:'Julie',es:'¿A la derecha o a la izquierda?',fr:'À droite ou à gauche ?',side:'left'},
      {s:'Señor',es:'A la derecha. Es muy grande.',fr:'À droite. Il est très grand.',side:'right'},
      {s:'Julie',es:'¡Chévere! Gracias.',fr:'Super ! Merci.',side:'left'},
      {s:'Señor',es:'¡De nada!',fr:'De rien !',side:'right'}
    ]}
   ],
   vocab:['Perdona / Perdone = Pardon / Excusez-moi','¿Dónde está...? = Où est... ?','Derecho / Todo recto = Tout droit','A la izquierda = À gauche','A la derecha = À droite','Cerca = Près','Lejos = Loin'],
   quiz:[
    {q:'¿Cómo se dice "Tout droit" en Venezuela?',opts:['A la derecha','A la izquierda','Derecho / todo recto','Enfrente'],ans:2},
    {q:'¿Qué significa "¿Hay una farmacia cerca?"?',opts:['La pharmacie est fermée','Il y a une pharmacie près d\'ici ?','Où est la pharmacie ?','La pharmacie est loin ?'],ans:1},
    {q:'¿Cómo se dice "À gauche" en español?',opts:['Todo recto','A la derecha','Detrás','A la izquierda'],ans:3}
   ]},

  /* 4 ── Au café / bar */
  {id:'bar2',level:2,emoji:'☕',name:'En el café',sub:'Commander au café vénézuélien / Café et pasapalos',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Commande simple',img:'☕',dialogue:[
      {s:'Cliente',es:'¡Hola! Un café con leche, por favor.',fr:'Bonjour ! Un café au lait, s\'il vous plaît.',side:'left'},
      {s:'Mesonero',es:'¿Negro o con leche?',fr:'Noir ou au lait ?',side:'right'},
      {s:'Cliente',es:'Con leche, por favor.',fr:'Au lait, s\'il vous plaît.',side:'left'},
      {s:'Mesonero',es:'¿Quiere azúcar?',fr:'Vous voulez du sucre ?',side:'right'},
      {s:'Cliente',es:'Sí, uno. ¿Cuánto es?',fr:'Oui, un. C\'est combien ?',side:'left'},
      {s:'Mesonero',es:'Tres dólares.',fr:'Trois dollars.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Commander des pasapalos',img:'🍢',dialogue:[
      {s:'Mesonero',es:'¿Qué van a tomar?',fr:'Qu\'est-ce que vous prenez ?',side:'right'},
      {s:'Clara',es:'Una cerveza bien fría, por favor.',fr:'Une bière bien froide, s\'il vous plaît.',side:'left'},
      {s:'Tomás',es:'Y yo, un jugo de naranja. ¿Tienen pasapalos?',fr:'Et moi, un jus d\'orange. Vous avez des amuse-bouches ?',side:'right'},
      {s:'Mesonero',es:'Sí. Hay tequeños y empanadas.',fr:'Oui. Il y a des tequeños et des empanadas.',side:'right'},
      {s:'Clara',es:'¡Qué chévere! Unos tequeños, por favor.',fr:'Super ! Des tequeños, s\'il vous plaît.',side:'left'},
      {s:'Mesonero',es:'¡Ahorita!',fr:'Tout de suite !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Payer l\'addition',img:'🧾',dialogue:[
      {s:'Cliente',es:'La cuenta, por favor.',fr:'L\'addition, s\'il vous plaît.',side:'left'},
      {s:'Mesonero',es:'Son quince dólares.',fr:'C\'est quinze dollars.',side:'right'},
      {s:'Cliente',es:'¿Se puede pagar con tarjeta?',fr:'On peut payer par carte ?',side:'left'},
      {s:'Mesonero',es:'Sí, claro, pana.',fr:'Oui, bien sûr.',side:'right'},
      {s:'Cliente',es:'Aquí tiene. Gracias.',fr:'Voilà. Merci.',side:'left'},
      {s:'Mesonero',es:'¡Gracias a usted! ¡Hasta pronto!',fr:'Merci à vous ! À bientôt !',side:'right'}
    ]}
   ],
   vocab:['Un café con leche = Un café au lait','Un café negro = Un café noir','¿Cuánto es? = C\'est combien ?','La cuenta = L\'addition','¿Se puede pagar con tarjeta? = On peut payer par carte ?','Los tequeños = Les tequeños (bâtonnets de fromage frits, typique VE)','¡Ahorita! = Tout de suite ! (VE)'],
   quiz:[
    {q:'¿Cómo se dice "Un café noir" en Venezuela?',opts:['Un café con leche','Un café marrón','Un café negro','Un café frío'],ans:2},
    {q:'¿Qué significa "La cuenta, por favor"?',opts:['Le menu, s\'il vous plaît','L\'addition, s\'il vous plaît','Un café, s\'il vous plaît','L\'eau, s\'il vous plaît'],ans:1},
    {q:'¿Qué son los "tequeños" en Venezuela?',opts:['Un jus de fruit','Des bâtonnets de fromage frits','Un dessert','Une bière'],ans:1}
   ]},

  /* 5 ── Au restaurant */
  {id:'resto2',level:2,emoji:'🍽️',name:'En el restaurante',sub:'Commander un repas / Au restaurant vénézuélien',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Avoir une table',img:'🪑',dialogue:[
      {s:'Cliente',es:'Hola, ¿tiene una mesa para dos?',fr:'Bonjour, vous avez une table pour deux ?',side:'left'},
      {s:'Mesonera',es:'Sí, por aquí, por favor.',fr:'Oui, par ici, s\'il vous plaît.',side:'right'},
      {s:'Cliente',es:'Gracias. ¿Tiene el menú del día?',fr:'Merci. Vous avez le menu du jour ?',side:'left'},
      {s:'Mesonera',es:'Sí. Hoy hay sopa, pabellón criollo y postre.',fr:'Oui. Aujourd\'hui il y a soupe, pabellón criollo et dessert.',side:'right'},
      {s:'Cliente',es:'¿Cuánto cuesta el menú?',fr:'Le menu coûte combien ?',side:'left'},
      {s:'Mesonera',es:'Diez dólares, bebida incluida.',fr:'Dix dollars, boisson comprise.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Commander à table',img:'🥗',dialogue:[
      {s:'Mesonero',es:'¿Están listos para pedir?',fr:'Vous êtes prêts à commander ?',side:'right'},
      {s:'Sophie',es:'Sí. De primero, una sopa.',fr:'Oui. En entrée, une soupe.',side:'left'},
      {s:'Mesonero',es:'¿Y de segundo?',fr:'Et en plat ?',side:'right'},
      {s:'Sophie',es:'El pollo, por favor. ¿Tiene algo sin carne?',fr:'Le poulet, s\'il vous plaît. Vous avez quelque chose sans viande ?',side:'left'},
      {s:'Mesonero',es:'Sí, hay caraotas negras con arroz.',fr:'Oui, il y a des haricots noirs avec du riz.',side:'right'},
      {s:'Sophie',es:'¡Qué chévere, eso quiero!',fr:'Super, c\'est ça que je veux !',side:'left'}
    ]},
    {label:'Sit. 3',title:'Un problème avec la commande',img:'🤔',dialogue:[
      {s:'Cliente',es:'Perdona, esto no es lo que pedí.',fr:'Pardon, ce n\'est pas ce que j\'ai commandé.',side:'left'},
      {s:'Mesonero',es:'Lo siento, chamo. ¿Qué pidió usted?',fr:'Je suis désolé. Qu\'est-ce que vous avez commandé ?',side:'right'},
      {s:'Cliente',es:'Pedí el pescado, no la carne.',fr:'J\'ai commandé le poisson, pas la viande.',side:'left'},
      {s:'Mesonero',es:'Disculpe, ahorita mismo lo cambio.',fr:'Excusez-moi, je le change tout de suite.',side:'right'},
      {s:'Cliente',es:'Gracias.',fr:'Merci.',side:'left'},
      {s:'Mesonero',es:'¡Qué vaina! Lo siento mucho.',fr:'Désolé pour ce problème !',side:'right'}
    ]}
   ],
   vocab:['¿Tiene mesa para dos? = Vous avez une table pour deux ?','El menú del día = Le menu du jour','De primero = En entrée','De segundo = En plat','Sin carne = Sans viande','Bebida incluida = Boisson comprise','El pabellón criollo = Plat national vénézuélien (haricots, riz, viande, banane)'],
   quiz:[
    {q:'¿Qué es el "pabellón criollo" en Venezuela?',opts:['Une soupe','Le plat national (haricots, riz, viande, banane)','Un dessert','Une boisson'],ans:1},
    {q:'¿Cómo se dice "En entrée" en español?',opts:['De postre','De segundo','Para beber','De primero'],ans:3},
    {q:'¿Qué significa "Sin carne"?',opts:['Avec de la viande','Sans poisson','Sans viande','Avec du poulet'],ans:2}
   ]},

  /* 6 ── Faire des courses */
  {id:'compras2',level:2,emoji:'🛍️',name:'De compras',sub:'Acheter des choses / Faire ses courses',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Au marché',img:'🧺',dialogue:[
      {s:'Cliente',es:'Buenos días. ¿Cuánto cuestan los tomates?',fr:'Bonjour. Combien coûtent les tomates ?',side:'left'},
      {s:'Vendedor',es:'Dos dólares el kilo.',fr:'Deux dollars le kilo.',side:'right'},
      {s:'Cliente',es:'Quiero un kilo, por favor.',fr:'Je veux un kilo, s\'il vous plaît.',side:'left'},
      {s:'Vendedor',es:'¿Algo más?',fr:'Autre chose ?',side:'right'},
      {s:'Cliente',es:'Sí, ¿tiene cambures?',fr:'Oui, vous avez des bananes ?',side:'left'},
      {s:'Vendedor',es:'Sí. Son un dólar el kilo.',fr:'Oui. C\'est un dollar le kilo.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Dans un magasin',img:'👗',dialogue:[
      {s:'Vendedora',es:'¡Hola! ¿Le puedo ayudar?',fr:'Bonjour ! Je peux vous aider ?',side:'right'},
      {s:'Lucie',es:'Sí, busco una franela.',fr:'Oui, je cherche un t-shirt.',side:'left'},
      {s:'Vendedora',es:'¿Qué talla tiene?',fr:'Vous faites quelle taille ?',side:'right'},
      {s:'Lucie',es:'La talla mediana.',fr:'La taille moyenne.',side:'left'},
      {s:'Vendedora',es:'¿Puede probársela? El probador está aquí.',fr:'Vous pouvez l\'essayer ? La cabine est là.',side:'right'},
      {s:'Lucie',es:'¡Gracias! ¿Cuánto cuesta?',fr:'Merci ! Elle coûte combien ?',side:'left'}
    ]},
    {label:'Sit. 3',title:'À la caisse',img:'🛒',dialogue:[
      {s:'Cajero',es:'¡Hola! ¿Todo bien, chamo?',fr:'Bonjour ! Tout va bien ?',side:'right'},
      {s:'Cliente',es:'Sí, gracias. ¿Cuánto es todo?',fr:'Oui, merci. C\'est combien en tout ?',side:'left'},
      {s:'Cajero',es:'Son veinte dólares.',fr:'C\'est vingt dollars.',side:'right'},
      {s:'Cliente',es:'¿Puedo pagar con tarjeta?',fr:'Je peux payer par carte ?',side:'left'},
      {s:'Cajero',es:'Sí, sin problema.',fr:'Oui, sans problème.',side:'right'},
      {s:'Cliente',es:'Aquí tiene. ¡Gracias, pana!',fr:'Voilà. Merci !',side:'left'}
    ]}
   ],
   vocab:['¿Cuánto cuesta? = Combien ça coûte ?','Quiero = Je veux','¿Algo más? = Autre chose ?','Busco = Je cherche','La talla = La taille','El probador = La cabine d\'essayage','El cambur = La banane (Venezuela)'],
   quiz:[
    {q:'¿Cómo se dice "Je cherche" en español?',opts:['Tengo','Quiero','Busco','Compro'],ans:2},
    {q:'¿Qué significa "¿Algo más?"',opts:['C\'est tout ?','Autre chose ?','Vous avez ça ?','C\'est combien ?'],ans:1},
    {q:'¿Qué significa "El cambur" en Venezuela?',opts:['La pastèque','L\'orange','La banane','La fraise'],ans:2}
   ]},

  /* 7 ── Prendre les transports */
  {id:'transp2',level:2,emoji:'🚌',name:'El transporte',sub:'Prendre le bus et le taxi / Les transports',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans le bus',img:'🚌',dialogue:[
      {s:'Viajero',es:'Perdona, ¿esta buseta va al centro?',fr:'Pardon, ce bus va au centre ?',side:'left'},
      {s:'Señora',es:'No. Tienes que tomar la que va por la avenida.',fr:'Non. Tu dois prendre celui qui passe par l\'avenue.',side:'right'},
      {s:'Viajero',es:'¿Dónde está la parada?',fr:'Où est l\'arrêt ?',side:'left'},
      {s:'Señora',es:'Allí, a la derecha.',fr:'Là-bas, à droite.',side:'right'},
      {s:'Viajero',es:'¿Cuántas paradas son hasta el centro?',fr:'C\'est combien d\'arrêts jusqu\'au centre ?',side:'left'},
      {s:'Señora',es:'Unas cinco paradas. Baja en la plaza.',fr:'Environ cinq arrêts. Tu descends à la place.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Acheter un pasaje',img:'🎫',dialogue:[
      {s:'Viajero',es:'Hola, quiero un pasaje, por favor.',fr:'Bonjour, je veux un billet, s\'il vous plaît.',side:'left'},
      {s:'Empleada',es:'¿Sencillo o de ida y vuelta?',fr:'Simple ou aller-retour ?',side:'right'},
      {s:'Viajero',es:'¿Cuánto cuesta el sencillo?',fr:'Combien coûte le billet simple ?',side:'left'},
      {s:'Empleada',es:'Dos dólares. El de ida y vuelta son tres.',fr:'Deux dollars. L\'aller-retour c\'est trois.',side:'right'},
      {s:'Viajero',es:'Quiero el de ida y vuelta.',fr:'Je veux l\'aller-retour.',side:'left'},
      {s:'Empleada',es:'Aquí tiene, chamo.',fr:'Voilà.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Prendre un por puesto',img:'🚕',dialogue:[
      {s:'Pasajero',es:'Perdona, ¿me lleva al aeropuerto?',fr:'Pardon, vous pouvez m\'emmener à l\'aéroport ?',side:'left'},
      {s:'Taxista',es:'Sí, pana. Son veinte dólares.',fr:'Oui. C\'est vingt dollars.',side:'right'},
      {s:'Pasajero',es:'¿Cuánto tiempo tarda?',fr:'Ça prend combien de temps ?',side:'left'},
      {s:'Taxista',es:'Unos treinta minutos, sin trancazo.',fr:'Environ trente minutes, sans embouteillage.',side:'right'},
      {s:'Pasajero',es:'¡Está bien! Vamos.',fr:'D\'accord ! Allons-y.',side:'left'},
      {s:'Taxista',es:'¡Vamos, chamo!',fr:'C\'est parti !',side:'right'}
    ]}
   ],
   vocab:['Tomar el bus / la buseta = Prendre le bus','La parada = L\'arrêt','El pasaje = Le billet (VE)','Bajar en = Descendre à','¿Cuántas paradas? = Combien d\'arrêts ?','El por puesto = Le taxi collectif (VE)','El trancazo = L\'embouteillage (VE)'],
   quiz:[
    {q:'¿Cómo se dice "Prendre le bus" en Venezuela?',opts:['Ir al bus','Tomar el bus / la buseta','Bajar del bus','Buscar el bus'],ans:1},
    {q:'¿Qué significa "La parada"?',opts:['Le billet','La ligne','L\'arrêt','Le quai'],ans:2},
    {q:'¿Qué es el "trancazo" en Venezuela?',opts:['Un accident','Un embouteillage','Une panne','Un déviation'],ans:1}
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
    {label:'Sit. 2',title:'Chercher une pharmacie de guardia',img:'🌙',dialogue:[
      {s:'Turista',es:'Perdone, ¿hay una farmacia abierta ahora?',fr:'Pardon, il y a une pharmacie ouverte maintenant ?',side:'left'},
      {s:'Vecina',es:'Las farmacias están cerradas. Busca la farmacia de guardia.',fr:'Les pharmacies sont fermées. Cherche la pharmacie de garde.',side:'right'},
      {s:'Turista',es:'¿Dónde está?',fr:'Elle est où ?',side:'left'},
      {s:'Vecina',es:'Mira el letrero de esta farmacia. Dice cuál está de guardia.',fr:'Regarde l\'affiche de cette pharmacie. Elle indique laquelle est de garde.',side:'right'},
      {s:'Turista',es:'¡Ah, entiendo! ¡Chévere! Gracias.',fr:'Ah, je comprends ! Super ! Merci.',side:'left'},
      {s:'Vecina',es:'¡De nada!',fr:'De rien !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Acheter un medicamento',img:'💉',dialogue:[
      {s:'Cliente',es:'Hola. ¿Tiene algo para la tos?',fr:'Bonjour. Vous avez quelque chose pour la toux ?',side:'left'},
      {s:'Farmacéutico',es:'Sí. ¿Es para adulto o para niño?',fr:'Oui. C\'est pour un adulte ou un enfant ?',side:'right'},
      {s:'Cliente',es:'Para adulto.',fr:'Pour un adulte.',side:'left'},
      {s:'Farmacéutico',es:'Tome este jarabe. Dos cucharadas, tres veces al día.',fr:'Prenez ce sirop. Deux cuillères, trois fois par jour.',side:'right'},
      {s:'Cliente',es:'¿Cuánto cuesta?',fr:'Ça coûte combien ?',side:'left'},
      {s:'Farmacéutico',es:'Ocho dólares.',fr:'Huit dollars.',side:'right'}
    ]}
   ],
   vocab:['Me duele la cabeza = J\'ai mal à la tête','Me duele la garganta = J\'ai mal à la gorge','La farmacia de guardia = La pharmacie de garde','No soy alérgico = Je ne suis pas allergique','El jarabe = Le sirop','Tres veces al día = Trois fois par jour','El letrero = L\'affiche'],
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
      {s:'Huésped',es:'¡Qué chévere! Gracias.',fr:'Super ! Merci.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Un problème dans la chambre',img:'🔧',dialogue:[
      {s:'Huésped',es:'Hola. Hay un problema en mi habitación.',fr:'Bonjour. Il y a un problème dans ma chambre.',side:'left'},
      {s:'Recepcionista',es:'¿Qué pasó?',fr:'Qu\'est-ce qui s\'est passé ?',side:'right'},
      {s:'Huésped',es:'El aire acondicionado no funciona.',fr:'La climatisation ne fonctionne pas.',side:'left'},
      {s:'Recepcionista',es:'¡Qué vaina! Lo siento. ¿Quiere cambiar de habitación?',fr:'Quel problème ! Je suis désolé. Vous voulez changer de chambre ?',side:'right'},
      {s:'Huésped',es:'Sí, por favor.',fr:'Oui, s\'il vous plaît.',side:'left'},
      {s:'Recepcionista',es:'Aquí tiene la llave de la trescientos veinte.',fr:'Voilà la clé de la trois cent vingt.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Demander des infos',img:'🗺️',dialogue:[
      {s:'Huésped',es:'Perdone, ¿hay un restaurante cerca?',fr:'Pardon, il y a un restaurant près d\'ici ?',side:'left'},
      {s:'Recepcionista',es:'Sí, hay uno muy bueno a dos cuadras.',fr:'Oui, il y en a un très bon à deux pâtés de maisons.',side:'right'},
      {s:'Huésped',es:'¿Y hay algo para visitar aquí?',fr:'Et il y a des choses à visiter ici ?',side:'left'},
      {s:'Recepcionista',es:'Sí, el Ávila está muy cerca.',fr:'Oui, le mont Ávila est très près.',side:'right'},
      {s:'Huésped',es:'¡Qué chévere! ¿Está abierto hoy?',fr:'Super ! C\'est ouvert aujourd\'hui ?',side:'left'},
      {s:'Recepcionista',es:'Sí, de nueve a seis.',fr:'Oui, de neuf heures à dix-huit heures.',side:'right'}
    ]}
   ],
   vocab:['¿Tiene reserva? = Vous avez une réservation ?','La habitación doble = La chambre double','El desayuno incluido = Le petit-déjeuner inclus','No funciona = Ça ne fonctionne pas','Cambiar de habitación = Changer de chambre','La llave = La clé','A dos cuadras = À deux pâtés de maisons'],
   quiz:[
    {q:'¿Cómo se dice "La chambre double" en español?',opts:['La habitación sencilla','La habitación doble','La suite','La habitación familiar'],ans:1},
    {q:'¿Qué significa "No funciona"?',opts:['C\'est fermé','Ça ne marche pas','C\'est cassé','Je ne sais pas'],ans:1},
    {q:'¿Cómo se dice "La clé" en español?',opts:['La puerta','La ventana','La llave','El ascensor'],ans:2}
   ]},

  /* 10 ── Chez le médecin */
  {id:'medico2',level:2,emoji:'🩺',name:'En el médico',sub:'Expliquer ce qui ne va pas / Chez le médecin',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Expliquer ses symptômes',img:'🤒',dialogue:[
      {s:'Doctor',es:'¡Buenos días! ¿Qué le pasa, chamo?',fr:'Bonjour ! Qu\'est-ce qui ne va pas ?',side:'right'},
      {s:'Paciente',es:'Tengo fiebre y me duele la garganta.',fr:'J\'ai de la fièvre et j\'ai mal à la gorge.',side:'left'},
      {s:'Doctor',es:'¿Desde cuándo?',fr:'Depuis quand ?',side:'right'},
      {s:'Paciente',es:'Desde ayer.',fr:'Depuis hier.',side:'left'},
      {s:'Doctor',es:'¿Tiene tos también?',fr:'Vous avez aussi de la toux ?',side:'right'},
      {s:'Paciente',es:'Sí, un poco.',fr:'Oui, un peu.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Comprendre le docteur',img:'💊',dialogue:[
      {s:'Doctor',es:'Tiene una infección. Le receto un antibiótico.',fr:'Vous avez une infection. Je vous prescris un antibiotique.',side:'right'},
      {s:'Paciente',es:'¿Cuándo tomo el medicamento?',fr:'Quand est-ce que je prends le médicament ?',side:'left'},
      {s:'Doctor',es:'Uno por la mañana y uno por la noche.',fr:'Un le matin et un le soir.',side:'right'},
      {s:'Paciente',es:'¿Durante cuántos días?',fr:'Pendant combien de jours ?',side:'left'},
      {s:'Doctor',es:'Siete días. Y tome mucha agua.',fr:'Sept jours. Et buvez beaucoup d\'eau.',side:'right'},
      {s:'Paciente',es:'Gracias, doctor.',fr:'Merci, docteur.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Appeler pour une cita',img:'📞',dialogue:[
      {s:'Paciente',es:'Hola, quiero una cita con el doctor.',fr:'Bonjour, je veux un rendez-vous avec le médecin.',side:'left'},
      {s:'Recepcionista',es:'¿Para cuándo?',fr:'Pour quand ?',side:'right'},
      {s:'Paciente',es:'Para hoy si es posible. Estoy muy mal.',fr:'Pour aujourd\'hui si c\'est possible. Je suis très malade.',side:'left'},
      {s:'Recepcionista',es:'¿Tiene fiebre?',fr:'Vous avez de la fièvre ?',side:'right'},
      {s:'Paciente',es:'Sí, treinta y nueve grados.',fr:'Oui, trente-neuf degrés.',side:'left'},
      {s:'Recepcionista',es:'Venga a las cuatro. Traiga su cédula.',fr:'Venez à seize heures. Apportez votre carte d\'identité.',side:'right'}
    ]}
   ],
   vocab:['¿Qué le pasa? = Qu\'est-ce qui ne va pas ?','Tengo fiebre = J\'ai de la fièvre','Me duele la garganta = J\'ai mal à la gorge','Desde ayer = Depuis hier','La tos = La toux','Una cita = Un rendez-vous','La cédula = La carte d\'identité (VE)'],
   quiz:[
    {q:'¿Cómo se dice "J\'ai de la fièvre" en español?',opts:['Tengo frío','Tengo fiebre','Tengo tos','Tengo dolor'],ans:1},
    {q:'¿Qué significa "Me duele la garganta"?',opts:['J\'ai mal à la tête','J\'ai mal au ventre','J\'ai mal à la gorge','J\'ai mal au dos'],ans:2},
    {q:'¿Qué es "La cédula" en Venezuela?',opts:['Le passeport','La carte de crédit','La carte d\'identité','Le permis de conduire'],ans:2}
   ]},

  /* 11 ── La météo */
  {id:'meteo2',level:2,emoji:'☀️',name:'El tiempo',sub:'Parler de la météo / Le climat au Venezuela',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Parler du temps',img:'🌤️',dialogue:[
      {s:'Marta',es:'¡Qué calor hace hoy, chamo!',fr:'Quelle chaleur aujourd\'hui !',side:'left'},
      {s:'Romain',es:'Sí, hace un calor bárbaro. ¿Cuántos grados son?',fr:'Oui, il fait une chaleur folle. Il fait combien de degrés ?',side:'right'},
      {s:'Marta',es:'Treinta y dos en Caracas. En Maracaibo son cuarenta.',fr:'Trente-deux à Caracas. À Maracaibo c\'est quarante.',side:'left'},
      {s:'Romain',es:'¡Qué vaina! ¿Hay piscina aquí?',fr:'Quelle affaire ! Il y a une piscine ici ?',side:'right'},
      {s:'Marta',es:'Sí, está en el hotel.',fr:'Oui, elle est à l\'hôtel.',side:'left'},
      {s:'Romain',es:'¡Vamos, pana!',fr:'Allons-y, l\'ami !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Prévoir la sortie',img:'🌧️',dialogue:[
      {s:'Luis',es:'¿Salimos hoy?',fr:'On sort aujourd\'hui ?',side:'left'},
      {s:'Camille',es:'No sé. ¿Qué tiempo hace?',fr:'Je ne sais pas. Il fait quel temps ?',side:'right'},
      {s:'Luis',es:'Está lloviendo. Son las lluvias de mayo.',fr:'Il pleut. Ce sont les pluies de mai.',side:'left'},
      {s:'Camille',es:'¿Tienes paraguas?',fr:'Tu as un parapluie ?',side:'right'},
      {s:'Luis',es:'No. ¿Y tú?',fr:'Non. Et toi ?',side:'left'},
      {s:'Camille',es:'Yo sí. ¡Vamos juntos!',fr:'Moi oui. Allons-y ensemble !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Les saisons au Venezuela',img:'🌿',dialogue:[
      {s:'Sara',es:'¿Cuál es tu estación favorita?',fr:'Quelle est ta saison préférée ?',side:'right'},
      {s:'Théo',es:'Me gusta cuando no llueve. ¿Ustedes tienen estaciones?',fr:'J\'aime quand il ne pleut pas. Vous avez des saisons ?',side:'left'},
      {s:'Sara',es:'Tenemos dos: el verano (tiempo seco) y el invierno (lluvias).',fr:'Nous avons deux saisons : l\'été (sec) et l\'hiver (pluies).',side:'right'},
      {s:'Théo',es:'¡Qué chévere! ¿Cuándo es el verano?',fr:'Super ! Quand c\'est l\'été ?',side:'left'},
      {s:'Sara',es:'De diciembre a abril. Hace mucho calor.',fr:'De décembre à avril. Il fait très chaud.',side:'right'},
      {s:'Théo',es:'¡Qué bárbaro!',fr:'C\'est incroyable !',side:'left'}
    ]}
   ],
   vocab:['¡Qué calor! = Quelle chaleur !','Hace frío = Il fait froid','Hace calor = Il fait chaud','Está lloviendo = Il pleut','El paraguas = Le parapluie','El verano (seco) = La saison sèche','El invierno (lluvias) = La saison des pluies'],
   quiz:[
    {q:'¿Cómo se dice "Il fait froid" en español?',opts:['Hace calor','Hay sol','Está lloviendo','Hace frío'],ans:3},
    {q:'¿Qué significa "¡Qué calor bárbaro!" en Venezuela?',opts:['Quelle chance !','Quelle chaleur folle !','Quel froid !','Quel vent !'],ans:1},
    {q:'¿Cuándo es el "verano" (tiempo seco) en Venezuela?',opts:['Juin à septembre','Mars à juin','Décembre à avril','Juillet à novembre'],ans:2}
   ]},

  /* 12 ── Trouver un logement */
  {id:'logement2',level:2,emoji:'🏠',name:'Buscar apartamento',sub:'Chercher un logement / Louer un appartement',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Appeler pour un appartement',img:'📱',dialogue:[
      {s:'Cliente',es:'Hola, llamo por el apartamento en alquiler.',fr:'Bonjour, j\'appelle pour l\'appartement en location.',side:'left'},
      {s:'Propietario',es:'Sí. ¿Para cuántas personas?',fr:'Oui. Pour combien de personnes ?',side:'right'},
      {s:'Cliente',es:'Para una persona. ¿Cuánto es el alquiler?',fr:'Pour une personne. Le loyer c\'est combien ?',side:'left'},
      {s:'Propietario',es:'Cuatrocientos dólares al mes.',fr:'Quatre cents dollars par mois.',side:'right'},
      {s:'Cliente',es:'¿Los servicios están incluidos?',fr:'Les charges sont incluses ?',side:'left'},
      {s:'Propietario',es:'No, los servicios son aparte.',fr:'Non, les charges sont en plus.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Visiter l\'appartement',img:'🔑',dialogue:[
      {s:'Propietario',es:'La sala es grande y tiene mucha luz.',fr:'Le salon est grand et très lumineux.',side:'right'},
      {s:'Cliente',es:'¡Qué chévere! ¿Cuántas habitaciones tiene?',fr:'Super ! Il a combien de chambres ?',side:'left'},
      {s:'Propietario',es:'Dos habitaciones y un baño.',fr:'Deux chambres et une salle de bain.',side:'right'},
      {s:'Cliente',es:'¿Tiene nevera?',fr:'Il y a un réfrigérateur ?',side:'left'},
      {s:'Propietario',es:'Sí, y también horno y microondas.',fr:'Oui, et aussi un four et un micro-ondes.',side:'right'},
      {s:'Cliente',es:'¡Qué fino! ¿Puedo pensarlo?',fr:'Génial ! Je peux réfléchir ?',side:'left'}
    ]},
    {label:'Sit. 3',title:'Un problème dans l\'appartement',img:'🔧',dialogue:[
      {s:'Inquilino',es:'Hola, hay un problema. El agua no funciona.',fr:'Bonjour, il y a un problème. L\'eau ne fonctionne pas.',side:'left'},
      {s:'Propietario',es:'¿Desde cuándo?',fr:'Depuis quand ?',side:'right'},
      {s:'Inquilino',es:'Desde esta mañana.',fr:'Depuis ce matin.',side:'left'},
      {s:'Propietario',es:'¡Qué vaina! Voy a llamar al plomero ahorita.',fr:'Quel problème ! Je vais appeler le plombier tout de suite.',side:'right'},
      {s:'Inquilino',es:'¿Va a venir hoy?',fr:'Il vient aujourd\'hui ?',side:'left'},
      {s:'Propietario',es:'Sí, creo que sí.',fr:'Oui, je crois que oui.',side:'right'}
    ]}
   ],
   vocab:['El alquiler = Le loyer','Los servicios = Les charges (eau, électricité)','Las habitaciones = Les chambres','La nevera = Le réfrigérateur (VE garde nevera)','El inquilino = Le locataire','El plomero = Le plombier (VE)','Los servicios son aparte = Les charges sont en plus'],
   quiz:[
    {q:'¿Qué significa "Los servicios son aparte"?',opts:['Tout compris','Les charges sont incluses','Les charges sont en plus','C\'est gratuit'],ans:2},
    {q:'¿Cómo se dice "Le plombier" en Venezuela?',opts:['El electricista','El plomero','El carpintero','El pintor'],ans:1},
    {q:'¿Cómo se dit "Le réfrigérateur" en Venezuela?',opts:['El refrigerador','El congelador','La nevera','El frigorífico'],ans:2}
   ]},

  /* 13 ── Parler de ses goûts */
  {id:'gustos2',level:2,emoji:'❤️',name:'Gustos y aficiones',sub:'Parler de ce qu\'on aime / Les loisirs',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Parler de musique',img:'🎵',dialogue:[
      {s:'Lucía',es:'¿Te gusta la música?',fr:'Tu aimes la musique ?',side:'right'},
      {s:'Paul',es:'Sí, mucho. Me gusta el rock.',fr:'Oui, beaucoup. J\'aime le rock.',side:'left'},
      {s:'Lucía',es:'¿Y el joropo?',fr:'Et le joropo ?',side:'right'},
      {s:'Paul',es:'También, pero no conozco mucho.',fr:'Aussi, mais je ne connais pas beaucoup.',side:'left'},
      {s:'Lucía',es:'¡Hay un concierto esta noche! ¿Vienes, pana?',fr:'Il y a un concert ce soir ! Tu viens ?',side:'right'},
      {s:'Paul',es:'¡Sí! ¿A qué hora empieza?',fr:'Oui ! Ça commence à quelle heure ?',side:'left'}
    ]},
    {label:'Sit. 2',title:'Parler de sport',img:'⚾',dialogue:[
      {s:'Diego',es:'¿Practicas algún deporte?',fr:'Tu pratiques un sport ?',side:'left'},
      {s:'Claire',es:'Sí, me gusta mucho el fútbol.',fr:'Oui, j\'aime beaucoup le football.',side:'right'},
      {s:'Diego',es:'¡Aquí el béisbol es el deporte rey, chama!',fr:'Ici le baseball est le sport roi, ma vieille !',side:'left'},
      {s:'Claire',es:'¡Qué chévere! ¿Ves el partido esta noche?',fr:'Super ! Tu regardes le match ce soir ?',side:'right'},
      {s:'Diego',es:'Sí. ¿Quieres venir?',fr:'Oui. Tu veux venir ?',side:'left'},
      {s:'Claire',es:'¡Claro que sí, pana!',fr:'Bien sûr, l\'ami !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Proposer une activité',img:'🎬',dialogue:[
      {s:'Ana',es:'¿Qué haces esta tarde, chamo?',fr:'Tu fais quoi cet après-midi ?',side:'left'},
      {s:'Marc',es:'Nada. ¿Por qué?',fr:'Rien. Pourquoi ?',side:'right'},
      {s:'Ana',es:'¿Quieres ir al cine?',fr:'Tu veux aller au cinéma ?',side:'left'},
      {s:'Marc',es:'¡Sí! ¿Qué ponen?',fr:'Oui ! Qu\'est-ce qu\'il y a ?',side:'right'},
      {s:'Ana',es:'Una película francesa. ¿Te gusta el cine francés?',fr:'Un film français. Tu aimes le cinéma français ?',side:'left'},
      {s:'Marc',es:'¡Me encanta! ¿A qué hora nos vemos?',fr:'J\'adore ça ! On se retrouve à quelle heure ?',side:'right'}
    ]}
   ],
   vocab:['Me gusta = J\'aime','No me gusta = Je n\'aime pas','Me encanta = J\'adore','El béisbol = Le baseball (sport national VE)','El joropo = La musique nationale vénézuélienne','El partido = Le match','¡Claro que sí! = Bien sûr que oui !'],
   quiz:[
    {q:'¿Cómo se dice "J\'adore" en español?',opts:['Me gusta','No me gusta','Me encanta','Odio'],ans:2},
    {q:'¿Cuál es el deporte nacional de Venezuela?',opts:['El fútbol','El tenis','El béisbol','El baloncesto'],ans:2},
    {q:'¿Qué es el "joropo"?',opts:['Un plat typique','La musique nationale vénézuélienne','Un sport','Une danse moderne'],ans:1}
   ]},

  /* 14 ── Sortir le soir */
  {id:'fiesta2',level:2,emoji:'🎉',name:'Salir de noche',sub:'Sortir le soir / Vie sociale au Venezuela',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Organiser une sortie',img:'🎊',dialogue:[
      {s:'Pablo',es:'¡Hola, pana! ¿Salimos esta noche?',fr:'Salut, l\'ami ! On sort ce soir ?',side:'left'},
      {s:'Lea',es:'¡Sí, chamo! ¿Adónde vamos?',fr:'Oui ! On va où ?',side:'right'},
      {s:'Pablo',es:'Hay un sitio muy chévere en el este.',fr:'Il y a un endroit super dans le quartier est.',side:'left'},
      {s:'Lea',es:'¡Qué fino! ¿A qué hora?',fr:'Génial ! À quelle heure ?',side:'right'},
      {s:'Pablo',es:'A las diez. Aquí también se sale tarde.',fr:'À dix heures. Ici aussi on sort tard.',side:'left'},
      {s:'Lea',es:'¡Está bien! ¡Hasta luego!',fr:'D\'accord ! À tout à l\'heure !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Dans un bar',img:'🍺',dialogue:[
      {s:'Marc',es:'¡Esta música está muy chévere! ¿Bailamos?',fr:'Cette musique est super ! On danse ?',side:'left'},
      {s:'Inés',es:'¡Sí, pana! Me encanta bailar.',fr:'Oui, l\'ami ! J\'adore danser.',side:'right'},
      {s:'Marc',es:'¿Quieres algo de tomar?',fr:'Tu veux quelque chose à boire ?',side:'left'},
      {s:'Inés',es:'Sí, un agua, por favor. Tengo calor.',fr:'Oui, une eau, s\'il te plaît. J\'ai chaud.',side:'right'},
      {s:'Marc',es:'¡Ahorita vuelvo, chama!',fr:'Je reviens tout de suite !',side:'left'},
      {s:'Inés',es:'¡Está bien!',fr:'D\'accord !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Le lendemain',img:'😴',dialogue:[
      {s:'Carla',es:'¡Hola, pana! ¿Cómo estás? ¡Llegué tardísimo a la casa!',fr:'Salut, l\'ami ! Tu vas bien ? Je suis rentré très tard !',side:'left'},
      {s:'Tom',es:'¡Yo también! Pero fue una noche muy bacana.',fr:'Moi aussi ! Mais c\'était une super soirée.',side:'right'},
      {s:'Carla',es:'Sí, la gente era muy simpática.',fr:'Oui, les gens étaient très sympas.',side:'left'},
      {s:'Tom',es:'¿Comemos juntos hoy?',fr:'On mange ensemble aujourd\'hui ?',side:'right'},
      {s:'Carla',es:'¡Sí, chamo! Necesito comer. ¡Tengo un hambre bárbara!',fr:'Oui ! J\'ai besoin de manger. J\'ai une faim folle !',side:'left'},
      {s:'Tom',es:'¡Yo también! ¡Vamos a buscar algo rico!',fr:'Moi aussi ! Allons chercher quelque chose de bon !',side:'right'}
    ]}
   ],
   vocab:['¡Salimos! = On sort !','¿Adónde vamos? = On va où ?','¡Está bien! = D\'accord !','¡Qué chévere! / ¡Bacano! = Super ! / Génial !','Tengo calor = J\'ai chaud','Tengo hambre = J\'ai faim','¡Ahorita! = Tout de suite ! (VE)'],
   quiz:[
    {q:'¿Qué significa "¡Está bien!" en Venezuela?',opts:['Au revoir !','Allons-y !','D\'accord !','C\'est nul !'],ans:2},
    {q:'¿Cómo se dice "J\'ai faim" en español?',opts:['Tengo sed','Tengo sueño','Tengo frío','Tengo hambre'],ans:3},
    {q:'¿Qué significa "¡Bacano!" en Venezuela?',opts:['C\'est nul !','Je suis fatigué','Super ! / Génial !','Au revoir !'],ans:2}
   ]}

];

var ALL_THEMES=LEVEL1_THEMES.concat(LEVEL2_THEMES);