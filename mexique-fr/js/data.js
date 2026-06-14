/* ========================================
   Español Mexicano → Français 🇲🇽 – Données
   Vocabulaire, quiz et dialogues
   Variante régionale : Mexique
   © Juin 2026 Sébastien Godet
======================================== */

/* ── NOTES D'ADAPTATION MEXIQUE ────────────────────────────────────────
   Principales différences appliquées vs. castillan et autres variantes :
   • ¡Vale! → ¡Órale! / ¡Ándale!        (ok, d'accord, allez — emblématique MX)
   • ¡Venga! → ¡Ándale! / ¡Órale!
   • ¡Qué chulo/guay! → ¡Qué padre! / ¡Qué chido!  (super, cool — MX)
   • ¡Mola! → ¡Está chido! / ¡Qué padre!
   • ¡En seguida! → ¡Ahorita! / ¡Ya va!
   • ¿Qué tal? → ¿Qué onda?             (quoi de neuf — très mexicain)
   • Lo siento → Lo siento / Discúlpame
   • El móvil → El celular
   • El ordenador → La computadora       (FÉMININ au Mexique — différent de EC/VE)
   • El coche → El carro / El coche      (les deux compris, carro dominant)
   • La patata → La papa
   • El zumo → El jugo
   • El plátano → El plátano             (MX conserve plátano, différent de VE cambur / EC banano)
   • La sandía → La sandía               (MX conserve sandía)
   • La fresa → La fresa                 (MX conserve fresa)
   • El billete → El boleto
   • El fontanero → El plomero
   • La tirita → La curita
   • El jersey → El suéter
   • El bañador → El traje de baño
   • Las gafas → Los lentes / Los anteojos
   • El paraguas → El paraguas / La sombrilla
   • El piso → El departamento
   • La nevera → El refrigerador         (MX : el refrigerador, différent de VE : la nevera)
   • El bocadillo → La torta             (sandwich mexicain sur pain birote — EMBLÉMATIQUE MX)
   • El esfero → La pluma / El bolígrafo (pluma = stylo courant au Mexique)
   • El autobús → El camión              (BUS en MX = TRÈS spécifique, différent de tous !)
   • Le petit bus → El pesero / La combi (microtransport collectif mexicain)
   • Coger → Agarrar / Tomar            (coger très évité au Mexique — sens vulgaire)
   • El mesonero → El mesero / La mesera
   • Vosotros → supprimé (ustedes)
   • Manejar pour conduire               (idem Ecuador/VE)
   • La cuadra pour pâté de maisons      (idem EC/VE)
   • Argot : Güey/Wey = mec (familier), Cuate = ami/copain, ¡Híjole! = Ah mince !
   • ¡No manches! = Pas possible ! / Zut ! (moins fort que ¡No mames!)
   • Chido/Chida = cool, bien
   • ¿Qué onda? = Quoi de neuf ?
   • Monnaie : el peso mexicano
   • Cuisine emblématique : el taco, la torta, la quesadilla, el tamal, el mole
   • Animal national : el águila real (aigle royal sur le drapeau), l'ajolote (axolotl)
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
    {es:'¡Hola! / ¡Qué onda!',fr:'Salut ! / Quoi de neuf ! (¿qué onda? très mexicain)',em:'👋'},
    {es:'Adiós / Hasta luego',fr:'Au revoir / À bientôt',em:'👋'},
    {es:'Hasta pronto / Nos vemos',fr:'À bientôt / On se voit (nos vemos courant MX)',em:'⏱️'},
    {es:'Gracias / Muchas gracias',fr:'Merci / Merci beaucoup',em:'🙏'},
    {es:'Por favor / De nada',fr:'S\'il vous plaît / De rien',em:'🤝'},
    {es:'Perdón / Discúlpame',fr:'Pardon / Excuse-moi (discúlpame très courant MX)',em:'🙇'},
    {es:'¡Órale! / ¡Ándale!',fr:'D\'accord ! / Allez ! / Ok ! (emblématique Mexique)',em:'👍'},
    {es:'Sí / Simón',fr:'Oui (simón = argot mexicain pour "oui")',em:'✅'},
    {es:'No',fr:'Non',em:'❌'},
    {es:'¿Cómo estás? / ¿Qué onda?',fr:'Comment ça va ? / Quoi de neuf ? (¿qué onda? = MX)',em:'🤗'},
    {es:'Estoy bien, gracias',fr:'Je vais bien, merci',em:'😊'},
    {es:'Más o menos / Así así',fr:'Comme ci comme ça',em:'😐'},
    {es:'No estoy bien',fr:'Je ne vais pas bien',em:'😔'},
    {es:'¡Qué padre! / ¡Qué chido!',fr:'C\'est super ! / C\'est cool ! (emblématique Mexique)',em:'🌟'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Bonjour (le matin)" en español?',opts:['Hola','Buenas tardes','Buenos días','Buenas noches'],ans:2},
    {q:'¿Qué significa "¡Órale!" en México?',opts:['Au revoir','D\'accord ! / Allez !','Bonne nuit','Je suis désolé'],ans:1},
    {q:'¿Cómo se dice "Merci" en español?',opts:['Por favor','Perdón','Gracias','Sí'],ans:2},
    {q:'¿Qué significa "¿Qué onda?" en México?',opts:['Où est la mer ?','Comment tu t\'appelles ?','Quoi de neuf ? / Ça va ?','Quel âge as-tu ?'],ans:2},
    {q:'¿Cómo se dice "S\'il vous plaît" en español?',opts:['Gracias','Perdón','Por favor','Sí'],ans:2},
    {q:'¿Qué significa "¡Ándale!" en México?',opts:['Viens !','Allez ! / D\'accord !','Non !','Peut-être !'],ans:1},
    {q:'¿Qué significa "¡Qué padre!" en México?',opts:['Comme c\'est bizarre !','Comme c\'est cool !','Comme c\'est triste !','Quel père !'],ans:1},
    {q:'¿Qué significa "Nos vemos" en México?',opts:['Je vous vois','On se voit / À bientôt','Je ne vois pas','Regardez-moi'],ans:1}
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
    {es:'Mexicano / mexicana',fr:'Mexicain(e)',em:'🇲🇽'},
    {es:'Vivo en',fr:'J\'habite à',em:'🏠'},
    {es:'Soy o Estoy',fr:'Je suis',em:'🧑'},
    {es:'Tengo ... años',fr:'J\'ai ... ans',em:'🎈'},
    {es:'Me llamo',fr:'Je m\'appelle',em:'👋'},
    {es:'¿De dónde eres, güey?',fr:'T\'es d\'où, mec ? (güey = mec, familier MX)',em:'🌍'},
    {es:'Soy de la Ciudad de México',fr:'Je suis de Mexico (Ciudad de México)',em:'🏙️'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Je m\'appelle" en español?',opts:['Soy','Me llamo','Vivo','Tengo'],ans:1},
    {q:'¿Qué significa "El apellido"?',opts:['Le prénom','L\'âge','Le nom de famille','La profession'],ans:2},
    {q:'¿Cómo se dice "J\'ai 25 ans" en español?',opts:['Soy 25 años','Vivo 25 años','Tengo 25 años','Hablo 25 años'],ans:2},
    {q:'¿Qué significa "La nacionalidad"?',opts:['Le pays','La ville','La profession','La nationalité'],ans:3},
    {q:'¿Cómo se dice "J\'habite à Mexico" en español?',opts:['Soy en México','Vivo en la Ciudad de México','Voy en México','Tengo México'],ans:1},
    {q:'¿Qué significa "El nombre"?',opts:['Le nom de famille','Le prénom','L\'âge','La profession'],ans:1},
    {q:'¿Cómo se dice "Je suis mexicaine" en español?',opts:['Soy francesa','Soy mexicana','Vivo México','Hablo mexicano'],ans:1},
    {q:'¿Qué significa "Güey" en argot mexicano?',opts:['Un animal','Mec (familier)','La rue','L\'ami proche'],ans:1}
   ]},

  {id:'orient',level:1,emoji:'🧭',name:'Orientarse',sub:'Izquierda, derecha… / S\'orienter',
   words:[
    {es:'Todo recto / Derecho',fr:'Tout droit',em:'⬆️'},
    {es:'A la izquierda',fr:'À gauche',em:'⬅️'},
    {es:'A la derecha',fr:'À droite',em:'➡️'},
    {es:'Delante / Adelante',fr:'Devant / En avant (adelante courant MX)',em:'🔜'},
    {es:'Detrás / Atrás',fr:'Derrière / En arrière (atrás courant MX)',em:'🔙'},
    {es:'Al lado / A un lado',fr:'À côté',em:'↔️'},
    {es:'Frente a / Enfrente',fr:'En face',em:'🔄'},
    {es:'Cerca',fr:'Près',em:'📍'},
    {es:'Lejos',fr:'Loin',em:'🌅'},
    {es:'La cuadra',fr:'Le pâté de maisons',em:'🏘️'},
    {es:'El mapa / El plano',fr:'Le plan / La carte',em:'🗺️'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "À gauche" en español?',opts:['A la derecha','Todo recto','A la izquierda','Enfrente'],ans:2},
    {q:'¿Qué significa "A la derecha"?',opts:['À gauche','Tout droit','À côté','À droite'],ans:3},
    {q:'¿Cómo se dice "Tout droit" en español?',opts:['A la izquierda','Todo recto / derecho','Enfrente','Al lado'],ans:1},
    {q:'¿Qué significa "Frente a / Enfrente"?',opts:['À côté','Derrière','En face','Près'],ans:2},
    {q:'¿Cómo se dice "Près" en español?',opts:['Lejos','Al lado','Cerca','Enfrente'],ans:2}
   ]},

  {id:'lieux',level:1,emoji:'🏙️',name:'Los Lugares',sub:'Mercado, colonia, zócalo… / Les lieux importants',
   words:[
    {es:'La ciudad',fr:'La ville',em:'🏙️'},
    {es:'El pueblo / El municipio',fr:'Le village / La commune',em:'🏡'},
    {es:'El campo',fr:'La campagne',em:'🌾'},
    {es:'La montaña / El volcán',fr:'La montagne / Le volcan',em:'⛰️'},
    {es:'El mar / El océano',fr:'La mer / L\'océan',em:'🌊'},
    {es:'La playa',fr:'La plage',em:'🏖️'},
    {es:'El río',fr:'La rivière',em:'🏞️'},
    {es:'El parque',fr:'Le parc',em:'🌳'},
    {es:'El zócalo / La plaza',fr:'La place principale (zócalo = place centrale MX)',em:'⛲'},
    {es:'La calle / La avenida',fr:'La rue / L\'avenue',em:'🛣️'},
    {es:'La colonia',fr:'Le quartier (colonia = quartier mexicain)',em:'🏘️'},
    {es:'La delegación / La alcaldía',fr:'La mairie d\'arrondissement',em:'🏛️'},
    {es:'El hospital / La clínica',fr:'L\'hôpital / La clinique',em:'🏥'},
    {es:'La farmacia',fr:'La pharmacie',em:'💊'},
    {es:'El banco',fr:'La banque',em:'🏦'},
    {es:'La iglesia / La catedral',fr:'L\'église / La cathédrale',em:'⛪'},
    {es:'El supermercado / La tienda de abarrotes',fr:'Le supermarché / L\'épicerie (abarrotes courant MX)',em:'🛒'},
    {es:'El restaurante / La taquería',fr:'Le restaurant / La taqueria (spécialité MX)',em:'🌮'},
    {es:'La tienda / El local',fr:'La boutique / Le commerce',em:'🏪'},
    {es:'La escuela / El colegio',fr:'L\'école / Le lycée',em:'🎒'},
    {es:'La universidad',fr:'L\'université',em:'🏛️'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "La pharmacie" en español?',opts:['El banco','El hospital','La farmacia','El supermercado'],ans:2},
    {q:'¿Qué es el "zócalo" en México?',opts:['Un quartier','La place centrale / principale','Un marché','Un parc'],ans:1},
    {q:'¿Qué es la "colonia" en México?',opts:['Un pays étranger','Une colonie historique','Le quartier','La campagne'],ans:2},
    {q:'¿Qué es la "taquería" en México?',opts:['Un marché','Une boulangerie','Un restaurant de tacos','Un bar'],ans:2},
    {q:'¿Cómo se dice "La mer" en español?',opts:['El río','La montaña','El mar','El lago'],ans:2},
    {q:'¿Qué son los "abarrotes" en México?',opts:['Des déchets','Une épicerie / supérette','Un restaurant','Des légumes'],ans:1},
    {q:'¿Cómo se dice "La ville" en español?',opts:['La calle','El pueblo','La ciudad','La montaña'],ans:2},
    {q:'¿Qué significa "El banco"?',opts:['La pharmacie','La banque','La caisse','Le bureau'],ans:1}
   ]},

  {id:'nour',level:1,emoji:'🍽️',name:'La Comida',sub:'Tacos, tamales, frutas… / La nourriture',
   words:[
    {es:'Las frutas',fr:'Les fruits',em:'🍉'},
    {es:'Las verduras',fr:'Les légumes',em:'🥦'},
    {es:'El pan / La tortilla',fr:'Le pain / La tortilla (pain de maïs fondamental MX)',em:'🍞'},
    {es:'El arroz',fr:'Le riz',em:'🍚'},
    {es:'La pasta / Los fideos',fr:'Les pâtes',em:'🍝'},
    {es:'La papa / Las papas fritas',fr:'La pomme de terre / Les frites',em:'🥔'},
    {es:'La carne',fr:'La viande',em:'🥩'},
    {es:'El pollo',fr:'Le poulet',em:'🍗'},
    {es:'El pescado',fr:'Le poisson',em:'🐟'},
    {es:'El jamón',fr:'Le jambon',em:'🥩'},
    {es:'El chorizo',fr:'Le chorizo',em:''},
    {es:'El huevo',fr:'L\'œuf',em:'🥚'},
    {es:'El queso / El queso fresco',fr:'Le fromage / Le fromage frais (queso fresco emblématique MX)',em:'🧀'},
    {es:'La mantequilla',fr:'Le beurre',em:'🧈'},
    {es:'La manzana',fr:'La pomme',em:'🍎'},
    {es:'El plátano',fr:'La banane (MX conserve plátano)',em:'🍌'},
    {es:'La naranja',fr:'L\'orange',em:'🍊'},
    {es:'El limón (verde)',fr:'Le citron vert (lime — le citron mexicain est vert !)',em:'🍋'},
    {es:'La fresa',fr:'La fraise',em:'🍓'},
    {es:'La sandía',fr:'La pastèque',em:'🍉'},
    {es:'El aguacate',fr:'L\'avocat (emblématique Mexique)',em:'🥑'},
    {es:'El chile / El jalapeño',fr:'Le piment / Le jalapeño',em:'🌶️'},
    {es:'El tomate / El jitomate',fr:'La tomate (jitomate = tomate rouge en MX)',em:'🍅'},
    {es:'La zanahoria',fr:'La carotte',em:'🥕'},
    {es:'La cebolla',fr:'L\'oignon',em:'🧅'},
    {es:'El ajo',fr:'L\'ail',em:'🧄'},
    {es:'El maíz',fr:'Le maïs (base de la cuisine mexicaine)',em:'🌽'},
    {es:'El frijol',fr:'Le haricot (base de la cuisine mexicaine)',em:'🫘'},
    {es:'La ensalada',fr:'La salade',em:'🥗'},
    {es:'El aceite',fr:'L\'huile',em:'🫒'},
    {es:'La sal',fr:'Le sel',em:'🧂'},
    {es:'La pimienta',fr:'Le poivre',em:'🌶️'},
    {es:'El mole',fr:'La sauce mole (sauce nationale mexicaine à base de piment et chocolat)',em:'🫕'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le pain" en español?',opts:['El arroz','El pan','El queso','La mantequilla'],ans:1},
    {q:'¿Qué es el "jitomate" en México?',opts:['Une carotte','Un piment','La tomate rouge','Un oignon'],ans:2},
    {q:'¿Cómo se dice "L\'avocat" en español?',opts:['El mango','El plátano','El aguacate','El mole'],ans:2},
    {q:'¿Cómo se dice "La pomme" en español?',opts:['El plátano','La fresa','La manzana','La naranja'],ans:2},
    {q:'¿Qué es el "mole" en México?',opts:['Un fruit','La sauce nationale à base de piment et chocolat','Un légume','Du fromage'],ans:1},
    {q:'¿Cómo se dit "La pastèque" en español?',opts:['La fresa','La sandía','La uva','La naranja'],ans:1},
    {q:'¿Cuál es la base de la cocina mexicana?',opts:['El trigo y el queso','El maíz y el frijol','El arroz y la papa','El pollo y el huevo'],ans:1},
    {q:'¿Cómo se dice "Le citron vert" en México?',opts:['El limón amarillo','La naranja','El limón verde','La manzana'],ans:2}
   ]},

  {id:'bois',level:1,emoji:'🥤',name:'Las Bebidas',sub:'Agua, café, aguas frescas… / Les boissons',
   words:[
    {es:'El agua',fr:'L\'eau',em:'💧'},
    {es:'El agua mineral / El agua con gas',fr:'L\'eau minérale / L\'eau gazeuse',em:'🫧'},
    {es:'La leche',fr:'Le lait',em:'🥛'},
    {es:'El jugo (de naranja)',fr:'Le jus (d\'orange)',em:'🍊'},
    {es:'El refresco / La coca',fr:'Le soda / Le coca (très courant en MX)',em:'🥤'},
    {es:'El agua fresca',fr:'L\'eau fraîche aromatisée (boisson nationale : horchata, Jamaica…)',em:'🌺'},
    {es:'El café de olla',fr:'Le café de olla (café à la cannelle, traditionnel MX)',em:'☕'},
    {es:'El café con leche',fr:'Le café au lait',em:'☕'},
    {es:'El té / La manzanilla',fr:'Le thé / La camomille (manzanilla très courant MX)',em:'🍵'},
    {es:'El vino (tinto / blanco)',fr:'Le vin (rouge / blanc)',em:'🍷'},
    {es:'La cerveza',fr:'La bière',em:'🍺'},
    {es:'El mezcal / El tequila',fr:'Le mezcal / La tequila (boissons nationales mexicaines)',em:'🥃'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'eau" en español?',opts:['La leche','El jugo','El agua','El té'],ans:2},
    {q:'¿Qué es el "agua fresca" en México?',opts:['De l\'eau plate','De l\'eau gazeuse','Une boisson fruitée nationale (horchata, Jamaica)','Du thé glacé'],ans:2},
    {q:'¿Cómo se dice "Le lait" en español?',opts:['La leche','El agua','El té','El jugo'],ans:0},
    {q:'¿Qué es el "café de olla"?',opts:['Du café noir','Du café à la cannelle (traditionnel MX)','Du café au lait','Un café froid'],ans:1},
    {q:'¿Cuáles son las bebidas alcohólicas nacionales de México?',opts:['El ron y la cerveza','El mezcal y el tequila','El vino y el brandy','La chicha y el pisco'],ans:1},
    {q:'¿Cómo se dice "Le thé" en español?',opts:['El café','El té','La leche','El agua'],ans:1},
    {q:'¿Qué es la "manzanilla" en México?',opts:['Une bière légère','De la camomille','Un jus de fruits','Un soda'],ans:1},
    {q:'¿Cómo se dice "L\'eau gazeuse" en español?',opts:['El agua fría','El agua fresca','El agua con gas','El refresco'],ans:2}
   ]},

  {id:'num',level:1,emoji:'🔢',name:'Los Números',sub:'Del cero al dos mil / Zéro à deux mille',
   words:[
    {es:'Cero',fr:'Zéro',em:'0️⃣'},{es:'Uno',fr:'Un',em:'1️⃣'},{es:'Dos',fr:'Deux',em:'2️⃣'},
    {es:'Tres',fr:'Trois',em:'3️⃣'},{es:'Cuatro',fr:'Quatre',em:'4️⃣'},{es:'Cinco',fr:'Cinq',em:'5️⃣'},
    {es:'Seis',fr:'Six',em:'6️⃣'},{es:'Siete',fr:'Sept',em:'7️⃣'},{es:'Ocho',fr:'Huit',em:'8️⃣'},
    {es:'Nueve',fr:'Neuf',em:'9️⃣'},{es:'Diez',fr:'Dix',em:'🔟'},
    {es:'Once',fr:'Onze'},{es:'Doce',fr:'Douze'},{es:'Trece',fr:'Treize'},
    {es:'Catorce',fr:'Quatorze'},{es:'Quince',fr:'Quinze'},{es:'Dieciséis',fr:'Seize'},
    {es:'Diecisiete',fr:'Dix-sept'},{es:'Dieciocho',fr:'Dix-huit'},{es:'Diecinueve',fr:'Dix-neuf'},
    {es:'Veinte',fr:'Vingt',em:'2️⃣0️⃣'},{es:'Treinta',fr:'Trente'},{es:'Cuarenta',fr:'Quarante'},
    {es:'Cincuenta',fr:'Cinquante'},{es:'Sesenta',fr:'Soixante'},
    {es:'Setenta',fr:'Soixante-dix'},{es:'Ochenta',fr:'Quatre-vingts'},{es:'Noventa',fr:'Quatre-vingt-dix'},
    {es:'Cien / ciento',fr:'Cent'},{es:'Quinientos',fr:'Cinq cents'},
    {es:'Mil',fr:'Mille'},{es:'Dos mil',fr:'Deux mille'}
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
    {q:'¿Cómo se dice 100 en español?',opts:['Mil','Ciento','Cien','Noventa'],ans:2},
    {q:'¿Cómo se dice 1000 en español?',opts:['Cien','Doscientos','Mil','Novecientos'],ans:2},
    {q:'¿Cómo se dice 2000 en español?',opts:['Dos mil','Mil','Doscientos','Veinte mil'],ans:0},
    {q:'¿Qué número es "Setenta"?',opts:['60','80','90','70'],ans:3}
   ]},

  {id:'col',level:1,emoji:'🎨',name:'Los Colores',sub:'Rojo, azul, verde… / Les couleurs',
   words:[
    {es:'Rojo',fr:'Rouge',em:'❤️'},{es:'Azul',fr:'Bleu',em:'💙'},{es:'Verde',fr:'Vert',em:'💚'},
    {es:'Amarillo',fr:'Jaune',em:'💛'},{es:'Naranja / Anaranjado',fr:'Orange (anaranjado aussi courant en MX)',em:'🧡'},
    {es:'Blanco',fr:'Blanc',em:'🤍'},{es:'Negro',fr:'Noir',em:'🖤'},
    {es:'Rosa / Rosado',fr:'Rose (rosa plus courant en MX)',em:'🩷'},
    {es:'Morado / Violeta',fr:'Violet',em:'💜'},
    {es:'Café / Marrón',fr:'Marron (café très dominant en MX)',em:'🤎'},
    {es:'Gris',fr:'Gris',em:'🩶'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Rouge" en español?',opts:['Azul','Rojo','Verde','Amarillo'],ans:1},
    {q:'¿Qué significa "Azul"?',opts:['Vert','Jaune','Bleu','Violet'],ans:2},
    {q:'¿Cómo se dice "Vert" en español?',opts:['Amarillo','Gris','Verde','Blanco'],ans:2},
    {q:'¿Qué significa "Negro"?',opts:['Blanc','Gris','Marron','Noir'],ans:3},
    {q:'¿Cómo se dice "Jaune" en español?',opts:['Naranja','Amarillo','Rosado','Morado'],ans:1},
    {q:'¿Cómo se dice "Marron" en México?',opts:['Morado','Gris','Café','Blanco'],ans:2},
    {q:'¿Cómo se dice "Blanc" en español?',opts:['Blanco','Negro','Gris','Café'],ans:0}
   ]},

  {id:'viaje',level:1,emoji:'🧳',name:'El Viaje',sub:'Maleta, boleto, hotel… / Le voyage',
   words:[
    {es:'El pasaporte / La credencial',fr:'Le passeport / La carte d\'identité (credencial courant MX)',em:'🛂'},
    {es:'La maleta',fr:'La valise',em:'🧳'},
    {es:'El equipaje',fr:'Les bagages',em:'🎒'},
    {es:'El boleto / El tiquete',fr:'Le billet',em:'🎫'},
    {es:'La reserva / La reservación',fr:'La réservation (reservación courant MX)',em:'📋'},
    {es:'La agencia de viajes',fr:'L\'agence de voyages',em:'🗺️'},
    {es:'El seguro de viaje',fr:'L\'assurance voyage',em:'📄'},
    {es:'El avión',fr:'L\'avion',em:'✈️'},
    {es:'El aeropuerto',fr:'L\'aéroport',em:'🛫'},
    {es:'La salida',fr:'Le départ',em:'🚪'},
    {es:'La llegada',fr:'L\'arrivée',em:'🛬'},
    {es:'La aduana / La migración',fr:'La douane / L\'immigration (migración courant MX)',em:'🛃'},
    {es:'El hotel / El hostal',fr:'L\'hôtel / L\'auberge',em:'🏨'},
    {es:'La habitación doble o sencilla',fr:'La chambre double ou simple',em:'🛏️'},
    {es:'La playa',fr:'La plage',em:'🏖️'},
    {es:'El turista',fr:'Le touriste',em:'📸'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le passeport" en español?',opts:['La maleta','El boleto','El pasaporte','El equipaje'],ans:2},
    {q:'¿Qué significa "La maleta"?',opts:['Le sac à dos','La valise','Les bagages','Le billet'],ans:1},
    {q:'¿Cómo se dice "L\'aéroport" en español?',opts:['La estación','El puerto','El aeropuerto','La aduana'],ans:2},
    {q:'¿Cómo se dice "La réservation" en México?',opts:['La reserva','La reservación','El boleto','La compra'],ans:1},
    {q:'¿Cómo se dice "Les bagages" en español?',opts:['La maleta','El boleto','El equipaje','La mochila'],ans:2},
    {q:'¿Qué significa "La migración"?',opts:['L\'arrivée','Le départ','La douane / immigration','La frontière'],ans:2},
    {q:'¿Cómo se dice "Le billet" en México?',opts:['El billete','El pasaje','El boleto','La tarjeta'],ans:2},
    {q:'¿Qué significa "La llegada"?',opts:['Le départ','La correspondance','L\'escale','L\'arrivée'],ans:3}
   ]},

  {id:'rest',level:1,emoji:'🍽️',name:'El Restaurante',sub:'Menú, cuenta, taco… / Au restaurant',
   words:[
    {es:'La terraza',fr:'La terrasse',em:'☀️'},
    {es:'La mesa',fr:'La table',em:'🪑'},
    {es:'¿Está libre esta mesa?',fr:'Cette table est libre ?',em:'🪑'},
    {es:'El mesero / La mesera',fr:'Le serveur / La serveuse',em:'🧑‍🍳'},
    {es:'La carta / El menú',fr:'La carte / Le menu',em:'📋'},
    {es:'El menú del día / La comida corrida',fr:'Le menu du jour (comida corrida = menu ouvrier mexicain)',em:'🍱'},
    {es:'Ordenar / Pedir',fr:'Commander (ordenar très courant en MX)',em:'🙋'},
    {es:'¿Qué me recomienda?',fr:'Que me recommandez-vous ?',em:'👨‍🍳'},
    {es:'Sin gluten',fr:'Sans gluten',em:'🌾'},
    {es:'Vegetariano / Vegetariana',fr:'Végétarien / Végétarienne',em:'🥦'},
    {es:'La entrada / Los antojitos',fr:'L\'entrée / Les antojitos (tapas mexicaines : guacamole, tostadas…)',em:'🥗'},
    {es:'El plato principal / El fuerte',fr:'Le plat principal',em:'🍖'},
    {es:'El postre',fr:'Le dessert',em:'🍮'},
    {es:'La torta',fr:'Le sandwich mexicain sur pain birote',em:'🥖'},
    {es:'Para llevar',fr:'À emporter',em:'🥡'},
    {es:'La cuenta',fr:'L\'addition',em:'💶'},
    {es:'La propina',fr:'Le pourboire',em:'💰'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'addition" en español?',opts:['La propina','La cuenta','El menú','La reserva'],ans:1},
    {q:'¿Qué es la "comida corrida" en México?',opts:['Un repas rapide','Le menu du jour économique','Un buffet','Un repas gastronomique'],ans:1},
    {q:'¿Cómo se dice "Le dessert" en español?',opts:['La entrada','El plato principal','El postre','La sopa'],ans:2},
    {q:'¿Qué son los "antojitos" en México?',opts:['Les desserts','Les boissons','Les tapas mexicaines','Les entrées sucrées'],ans:2},
    {q:'¿Cómo se dit "Commander" en México?',opts:['Vender','Ordenar / pedir','Cocinar','Pagar'],ans:1},
    {q:'¿Qué es "La torta" en México?',opts:['Un gâteau','Le sandwich mexicain sur pain birote','Une soupe','Une sauce'],ans:1},
    {q:'¿Cómo se dice "Le pourboire" en español?',opts:['La cuenta','La propina','El descuento','El precio'],ans:1},
    {q:'¿Qué significa "Para llevar"?',opts:['Pour manger sur place','À emporter','À partager','Pour deux personnes'],ans:1}
   ]},

  {id:'trans',level:1,emoji:'🚌',name:'Los Transportes',sub:'Camión, metro, carro… / Les transports',
   words:[
    {es:'El camión',fr:'Le bus (camión = bus au Mexique — très spécifique MX !)',em:'🚌'},
    {es:'El pesero / La combi',fr:'Le minibus collectif (pesero / combi = transport mexicain)',em:'🚐'},
    {es:'El metro',fr:'Le métro',em:'🚇'},
    {es:'El tren / El metrobús',fr:'Le train / Le BRT (metrobús = bus à haut débit, CDMX)',em:'🚂'},
    {es:'El avión',fr:'L\'avion',em:'✈️'},
    {es:'El taxi / El Uber',fr:'Le taxi / Le VTC',em:'🚕'},
    {es:'El carro / El coche',fr:'La voiture (les deux compris, carro dominant)',em:'🚗'},
    {es:'La moto',fr:'La moto',em:'🏍️'},
    {es:'La bicicleta / La bici',fr:'Le vélo',em:'🚴'},
    {es:'El boleto / El tiquete',fr:'Le billet',em:'🎫'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le bus" en México?',opts:['El tren','El metro','El camión','El taxi'],ans:2},
    {q:'¿Cómo se dice "La voiture" en México?',opts:['La moto','El carro / el coche','La combi','El camión'],ans:1},
    {q:'¿Cómo se dice "L\'avion" en español?',opts:['El barco','El avión','La bicicleta','El metro'],ans:1},
    {q:'¿Qué es el "pesero" o "combi" en México?',opts:['Un parking','Le minibus collectif','Un bus express','Un tramway'],ans:1}
   ]},

  {id:'objets',level:1,emoji:'🔑',name:'Objetos del Día',sub:'Celular, llaves, pluma… / Objets du quotidien',
   words:[
    {es:'El teléfono',fr:'Le téléphone',em:'☎️'},
    {es:'El celular',fr:'Le portable / le téléphone mobile',em:'📱'},
    {es:'La computadora',fr:'L\'ordinateur (féminin au Mexique)',em:'💻'},
    {es:'El cargador',fr:'Le chargeur',em:'🔌'},
    {es:'El reloj',fr:'La montre / L\'horloge',em:'⌚'},
    {es:'Las llaves',fr:'Les clés',em:'🔑'},
    {es:'La cartera / La billetera',fr:'Le portefeuille',em:'👛'},
    {es:'La mochila',fr:'Le sac à dos',em:'🎒'},
    {es:'Los lentes / Los anteojos',fr:'Les lunettes',em:'👓'},
    {es:'El paraguas / La sombrilla',fr:'Le parapluie (sombrilla courant MX pour parasol/parapluie)',em:'☂️'},
    {es:'El papel',fr:'Le papier',em:'📄'},
    {es:'La pluma / El bolígrafo',fr:'Le stylo / le bic (pluma = stylo courant au Mexique)',em:'🖊️'},
    {es:'Las tijeras',fr:'Les ciseaux',em:'✂️'},
    {es:'El plato',fr:'L\'assiette',em:'🍽️'},
    {es:'El vaso / La taza',fr:'Le verre / La tasse',em:'🥛'},
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
    {q:'¿Cómo se dice "Les clés" en español?',opts:['La pluma','Las tijeras','Las llaves','El cargador'],ans:2},
    {q:'¿Cómo se dice "Le téléphone portable" en México?',opts:['La tableta','El celular','La computadora','La radio'],ans:1},
    {q:'¿Cómo se dit "L\'ordinateur" en México?',opts:['El computador','La computadora','La tableta','La pantalla'],ans:1},
    {q:'¿Cómo se dice "Les lunettes" en México?',opts:['Los audífonos','Los lentes / los anteojos','Los guantes','Los relojes'],ans:1},
    {q:'¿Cómo se dice "Le stylo" en México?',opts:['El lápiz','El papel','La pluma / el bolígrafo','El libro'],ans:2},
    {q:'¿Cómo se dice "Le portefeuille" en español?',opts:['La mochila','Las llaves','La cartera / la billetera','El teléfono'],ans:2},
    {q:'¿Qué significa "El espejo"?',opts:['La fenêtre','Le miroir','Le tableau','La porte'],ans:1},
    {q:'¿Qué significa "La cuchara"?',opts:['Le couteau','La fourchette','La cuillère','L\'assiette'],ans:2},
    {q:'¿Cómo se dice "Le sac à dos" en español?',opts:['La cartera','El bolso','La mochila','El sombrero'],ans:2},
    {q:'¿Qué significa "La almohada"?',opts:['La couverture','Le matelas','Le drap','L\'oreiller'],ans:3},
    {q:'¿Cómo se dice "Le parapluie / parasol" en México?',opts:['El abrigo','El paraguas / la sombrilla','La bufanda','El impermeable'],ans:1},
    {q:'¿Cómo se dice "La serviette" en español?',opts:['La almohada','El jabón','La toalla','El vaso'],ans:2},
   ]},

  {id:'log',level:1,emoji:'🏠',name:'La Vivienda',sub:'Sala, cocina… / Le logement',
   words:[
    {es:'La casa',fr:'La maison',em:'🏠'},
    {es:'El departamento / El depa',fr:'L\'appartement (depa = abrév. très courante MX)',em:'🏢'},
    {es:'La entrada',fr:'L\'entrée',em:'🚪'},
    {es:'La sala / El comedor',fr:'Le salon / la salle à manger',em:'🛋️'},
    {es:'La cocina',fr:'La cuisine',em:'🍳'},
    {es:'La recámara / El cuarto',fr:'La chambre (recámara = chambre — très mexicain)',em:'🛏️'},
    {es:'El baño / El cuarto de baño',fr:'La salle de bain',em:'🚿'},
    {es:'El baño / El excusado',fr:'Les toilettes (excusado courant en MX)',em:'🚽'},
    {es:'El garage / El estacionamiento',fr:'Le garage / Le parking',em:'🚗'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le salon" en México?',opts:['La cocina','La recámara','La sala','El garaje'],ans:2},
    {q:'¿Qué significa "La cocina"?',opts:['La salle à manger','La cuisine','La salle de bain','Le salon'],ans:1},
    {q:'¿Cómo se dice "La chambre" en México?',opts:['La sala','La recámara / el cuarto','La entrada','El garaje'],ans:1},
    {q:'¿Cómo se dice "L\'appartement" en México?',opts:['La casa','La entrada','El departamento / el depa','La recámara'],ans:2},
    {q:'¿Qué significa "El excusado" en México?',opts:['La salle de bain','Le garage','Les toilettes','La salle à manger'],ans:2}
   ]},

  {id:'muebles_equipamiento',level:1,emoji:'🪑',name:'Muebles y Equipamiento',sub:'Sofá, refrigerador, baño… / Meubles et équipements',
   words:[
    {es:'El sofá',fr:'Le canapé',em:'🛋️'},
    {es:'El sillón',fr:'Le fauteuil',em:'💺'},
    {es:'La mesa',fr:'La table',em:''},
    {es:'La silla',fr:'La chaise',em:'🪑'},
    {es:'La lámpara',fr:'La lampe',em:'💡'},
    {es:'El estante / El librero',fr:'L\'étagère (librero = étagère à livres, courant MX)',em:''},
    {es:'La cama',fr:'Le lit',em:'🛏️'},
    {es:'El ropero / El clóset',fr:'L\'armoire (ropero et clóset courants en MX)',em:'🗄️'},
    {es:'El escritorio / El buró',fr:'Le bureau / La table de nuit (buró = table de chevet MX)',em:'🖊️'},
    {es:'El refrigerador / La refri',fr:'Le réfrigérateur (refri = abrév. MX)',em:'🧊'},
    {es:'El horno / El hornito',fr:'Le four (hornito = petit four / micro-ondes argot MX)',em:'🔥'},
    {es:'El microondas',fr:'Le micro-ondes',em:'🔲♨️'},
    {es:'El fregadero / El lavabo',fr:'L\'évier',em:'🚰'},
    {es:'El lavamanos',fr:'Le lavabo de salle de bain',em:'🚰'},
    {es:'La bañera / La tina',fr:'La baignoire (tina courant en MX)',em:'🛁'},
    {es:'La regadera / La ducha',fr:'La douche (regadera = pommeau de douche / douche en MX)',em:'🚿'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le canapé" en español?',opts:['El sillón','La silla','El sofá','La cama'],ans:2},
    {q:'¿Cómo se dice "Le réfrigérateur" en México?',opts:['El horno','El microondas','El refrigerador / la refri','El fregadero'],ans:2},
    {q:'¿Cómo se dice "La douche" en México?',opts:['El lavamanos','La tina','La regadera / la ducha','El fregadero'],ans:2},
    {q:'¿Qué es el "buró" en México?',opts:['Le bureau de travail','La table de chevet','L\'armoire','L\'étagère'],ans:1},
    {q:'¿Cómo se dit "L\'armoire" en México?',opts:['El sofá','El ropero / el clóset','El estante','La silla'],ans:1},
    {q:'¿Cómo se dice "La baignoire" en México?',opts:['El lavamanos','El fregadero','La tina / la bañera','La regadera'],ans:2},
    {q:'¿Qué es el "librero" en México?',opts:['Un livre','L\'étagère à livres','Le bureau','La lampe'],ans:1},
   ]},

  {id:'emot',level:1,emoji:'😄',name:'Las Emociones',sub:'Alegre, cansado, híjole… / Les émotions',
   words:[
    {es:'Contento / Contenta',fr:'Content / Contente',em:'😊'},
    {es:'Feliz',fr:'Heureux / Heureuse',em:'😊'},
    {es:'Alegre',fr:'Joyeux / Joyeuse',em:'😄'},
    {es:'Triste',fr:'Triste',em:'😢'},
    {es:'Cansado / Cansada',fr:'Fatigué / Fatiguée',em:'😴'},
    {es:'Enojado / Enojada',fr:'Fâché / Fâchée',em:'😠'},
    {es:'Tener miedo',fr:'Avoir peur',em:'😨'},
    {es:'Enfermo / Enferma',fr:'Malade',em:'🤒'},
    {es:'Preocupado / Preocupada',fr:'Inquiet / Inquiète',em:'😟'},
    {es:'Estresado / Estresada',fr:'Stressé / Stressée',em:'😰'},
    {es:'Decepcionado / Decepcionada',fr:'Déçu / Déçue',em:'😞'},
    {es:'Enamorado / Enamorada',fr:'Amoureux / Amoureuse',em:'😍'},
    {es:'¡Qué padre! / ¡Qué chido!',fr:'C\'est super ! / C\'est cool ! (emblématique Mexique)',em:'🌟'},
    {es:'¡Híjole!',fr:'Ah mince ! / Aïe ! / Wow ! (exclamation MX polyvalente)',em:'😲'},
    {es:'¡No manches!',fr:'Pas possible ! / Zut ! / C\'est pas vrai ! (MX)',em:'😤'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Fâché" en español?',opts:['Decepcionado','Enojado','Preocupado','Contento'],ans:1},
    {q:'¿Cómo se dice "Joyeuse" en español?',opts:['Triste','Cansada','Alegre','Enferma'],ans:2},
    {q:'¿Cómo se dice "Fatigué" en español?',opts:['Estresado','Enfermo','Preocupado','Cansado'],ans:3},
    {q:'¿Qué significa "¡Híjole!" en México?',opts:['Comme c\'est beau !','Ah mince ! / Aïe ! / Wow !','C\'est délicieux !','Au revoir !'],ans:1},
    {q:'¿Qué significa "¡Qué padre!" en México?',opts:['Ça m\'énerve !','C\'est nul !','C\'est super ! / C\'est cool !','Quel père !'],ans:2},
    {q:'¿Cómo se dice "Inquiète" en español?',opts:['Estresada','Enamorada','Preocupada','Decepcionada'],ans:2},
    {q:'¿Qué significa "¡No manches!" en México?',opts:['Ne touche pas !','Pas possible ! / Zut ! / C\'est pas vrai !','Mange moins !','Bravo !'],ans:1}
   ]},

  {id:'fam',level:1,emoji:'👨‍👩‍👧',name:'La Familia',sub:'Papá, mamá, cuate… / La famille',
   words:[
    {es:'La madre / La mamá / La jefa',fr:'La mère / La maman (la jefa = maman, affectueux MX)',em:'👩'},
    {es:'El padre / El papá / El jefe',fr:'Le père / Le papa (el jefe = papa, affectueux MX)',em:'👨'},
    {es:'La hija',fr:'La fille',em:'👧'},
    {es:'El hijo',fr:'Le fils',em:'👦'},
    {es:'La hermana',fr:'La sœur',em:'👧'},
    {es:'El hermano',fr:'Le frère',em:'🧑'},
    {es:'La abuela / La abuelita',fr:'La grand-mère',em:'👵'},
    {es:'El abuelo / El abuelito',fr:'Le grand-père',em:'👴'},
    {es:'La mujer / La esposa',fr:'La femme',em:'💑'},
    {es:'El marido / El esposo',fr:'Le mari',em:'💍'},
    {es:'El tío / La tía',fr:'L\'oncle / La tante',em:'👨/👩'},
    {es:'El cuate / La cuata',fr:'Le copain / La copine (argot MX : ami proche)',em:'🤝'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le père" en español?',opts:['El marido','El hijo','El padre o el papá','El hermano'],ans:2},
    {q:'¿Qué significa "La madre"?',opts:['La fille','La sœur','La maman','La mère'],ans:3},
    {q:'¿Cómo se dice "Le frère" en español?',opts:['El hijo','El hermano','El papá','El marido'],ans:1},
    {q:'¿Qué significa "La hermana"?',opts:['La mère','La grand-mère','La sœur','La fille'],ans:2},
    {q:'¿Cómo se dice "Le grand-père" en español?',opts:['El papá','El marido','El hijo','El abuelo'],ans:3},
    {q:'¿Qué significa "El cuate / La cuata" en México?',opts:['Le frère / la sœur','Le copain / la copine proche','L\'ennemi','Le voisin'],ans:1},
    {q:'¿Cómo se dice "La fille" en español?',opts:['La hermana','La esposa','La hija','La mamá'],ans:2},
    {q:'En México, "La jefa" peut signifier…',opts:['La cheffe au travail','La grand-mère','La maman (affectueux)','La directrice'],ans:2}
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
    {es:'Beber / Tomar',fr:'Boire (tomar très courant en MX)',em:'🥤',conj:{es:['Yo bebo/tomo','Tú bebes/tomas','Él/Ella bebe/toma','Nosotros bebemos/tomamos','Ustedes beben/toman','Ellos beben/toman'],fr:['Je bois','Tu bois','Il/Elle boit','Nous buvons','Vous buvez','Ils/Elles boivent']}},
    {es:'Dormir',fr:'Dormir',em:'😴',conj:{es:['Yo duermo','Tú duermes','Él/Ella duerme','Nosotros dormimos','Ustedes duermen','Ellos/Ellas duermen'],fr:['Je dors','Tu dors','Il/Elle dort','Nous dormons','Vous dormez','Ils/Elles dorment']}},
    {es:'Caminar / Andar',fr:'Marcher / Se déplacer (andar polyvalent en MX)',em:'🚶‍♂️',conj:{es:['Yo camino / ando','Tú caminas / andas','Él/Ella camina / anda','Nosotros caminamos / andamos','Ustedes caminan / andan','Ellos caminan / andan'],fr:['Je marche','Tu marches','Il/Elle marche','Nous marchons','Vous marchez','Ils/Elles marchent']}},
    {es:'Agarrar / Tomar',fr:'Prendre / Saisir (agarrar courant en MX — jamais coger !)',em:'🤲',conj:{es:['Yo agarro/tomo','Tú agarras/tomas','Él/Ella agarra/toma','Nosotros agarramos/tomamos','Ustedes agarran/toman','Ellos agarran/toman'],fr:['Je prends','Tu prends','Il/Elle prend','Nous prenons','Vous prenez','Ils/Elles prennent']}},
    {es:'Comprar',fr:'Acheter',em:'🛒',conj:{es:['Yo compro','Tú compras','Él/Ella compra','Nosotros compramos','Ustedes compran','Ellos/Ellas compran'],fr:['J\'achète','Tu achètes','Il/Elle achète','Nous achetons','Vous achetez','Ils/Elles achètent']}},
    {es:'Pagar',fr:'Payer',em:'💳',conj:{es:['Yo pago','Tú pagas','Él/Ella paga','Nosotros pagamos','Ustedes pagan','Ellos/Ellas pagan'],fr:['Je paie','Tu paies','Il/Elle paie','Nous payons','Vous payez','Ils/Elles paient']}},
    {es:'Trabajar',fr:'Travailler',em:'💼',conj:{es:['Yo trabajo','Tú trabajas','Él/Ella trabaja','Nosotros trabajamos','Ustedes trabajan','Ellos/Ellas trabajan'],fr:['Je travaille','Tu travailles','Il/Elle travaille','Nous travaillons','Vous travaillez','Ils/Elles travaillent']}},
    {es:'Manejar / Conducir',fr:'Conduire (manejar très courant en MX)',em:'🚗',conj:{es:['Yo manejo','Tú manejas','Él/Ella maneja','Nosotros manejamos','Ustedes manejan','Ellos/Ellas manejan'],fr:['Je conduis','Tu conduis','Il/Elle conduit','Nous conduisons','Vous conduisez','Ils/Elles conduisent']}},
    {es:'Ordenar / Pedir',fr:'Commander (ordenar très courant en MX)',em:'🙋‍♂️',conj:{es:['Yo ordeno/pido','Tú ordenas/pides','Él/Ella ordena/pide','Nosotros ordenamos/pedimos','Ustedes ordenan/piden','Ellos ordenan/piden'],fr:['Je commande','Tu commandes','Il/Elle commande','Nous commandons','Vous commandez','Ils/Elles commandent']}},
    {es:'Llegar',fr:'Arriver',em:'🛬',conj:{es:['Yo llego','Tú llegas','Él/Ella llega','Nosotros llegamos','Ustedes llegan','Ellos/Ellas llegan'],fr:['J\'arrive','Tu arrives','Il/Elle arrive','Nous arrivons','Vous arrivez','Ils/Elles arrivent']}},
    {es:'¡Qué padre! / ¡Está chido!',fr:'C\'est super ! / C\'est cool ! (argot MX)',em:'😎',conj:{es:['¡Qué padre!','¡Está chido!','¡Órale!','¡Qué chido!','¡Está bien!','¡Ándale!'],fr:['C\'est super !','C\'est cool !','D\'accord !','Trop bien !','Ça va !','Allez !']}}
   ],
   quiz10:[
    {q:'¿Qué significa "¡Qué padre, güey!" en México?',opts:['Ça m\'ennuie','C\'est super, mec !','Je suis fatigué','J\'ai peur'],ans:1},
    {q:'¿Cómo se dit "Tu conduis" en México?',opts:['Corres','Caminas','Manejas','Te vas'],ans:2},
    {q:'¿Qué significa "Agarrar el camión" en México?',opts:['Rater le bus','Chercher le bus','Prendre le bus','Attendre le bus'],ans:2},
    {q:'¿Qué significa "Ordenas"?',opts:['Tu manges','Tu regardes','Tu commandes','Tu réponds'],ans:2},
    {q:'¿Cómo se dice "Il dort" en español?',opts:['Corre','Camina','Duerme','Come'],ans:2},
    {q:'¿Cómo se dice "Vous habitez" en español de México?',opts:['Ustedes viven','Vivimos','Viven ellos','Vivo'],ans:0},
    {q:'¿Qué significa "Como"?',opts:['Tu bois','Tu manges','Tu dors','Tu marches'],ans:1},
    {q:'¿Cómo se dice "Ils mangent" en español?',opts:['Comemos','Ustedes comen','Comen','Como'],ans:2},
    {q:'¿Cómo se dice "Nous travaillons" en español?',opts:['Trabajo','Trabajas','Trabajamos','Trabajan'],ans:2},
    {q:'¿Cómo se dice "Tu arrives" en español?',opts:['Te vas','Llegas','Buscas','Pagas'],ans:1},
    {q:'¿Cómo se dice "Nous parlons" en español?',opts:['Hablo','Hablamos','Hablan ustedes','Hablan'],ans:1},
    {q:'¿Por qué en México se dice "agarrar" en vez de "coger"?',opts:['Parce que c\'est plus court','Parce que coger a un sens vulgaire au Mexique','Par tradition historique','Parce que c\'est plus poli'],ans:1}
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
    {es:'La panza / El estómago',fr:'Le ventre / L\'estomac (panza courant en MX)',em:'🫃'},
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
    {q:'¿Qué significa "La panza" en México?',opts:['Le dos','Le pied','Le ventre','La tête'],ans:2},
    {q:'¿Qué significa "El corazón"?',opts:['Le cerveau','Le cœur','L\'os','Le dos'],ans:1}
   ]},

  {id:'sante',level:1,emoji:'🏥',name:'La Salud',sub:'Médico, farmacia… / La santé',
   words:[
    {es:'Doler / Me duele',fr:'Faire mal / j\'ai mal',em:'🤕'},
    {es:'Tener dolor',fr:'Avoir une douleur',em:'😣'},
    {es:'La fiebre / La calentura',fr:'La fièvre (calentura = fièvre courant en MX)',em:'🌡️'},
    {es:'La tos',fr:'La toux',em:'😮‍💨'},
    {es:'El pañuelo desechable',fr:'Le mouchoir jetable',em:'🤧'},
    {es:'El termómetro',fr:'Le thermomètre',em:'🌡️'},
    {es:'La cita / La consulta',fr:'Le rendez-vous / La consultation',em:'📅'},
    {es:'El médico / El doctor / La doctora',fr:'Le médecin / Le docteur',em:'🩺'},
    {es:'El/la paciente',fr:'Le/la patient(e)',em:'🛏️'},
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
    {es:'Urgencias / Emergencias',fr:'Les urgences',em:'🆘'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'hôpital" en español?',opts:['La farmacia','El hospital / la clínica','Las emergencias','La consulta'],ans:1},
    {q:'¿Cómo se dice "La fièvre" en México?',opts:['La tos','La calentura / la fiebre','La gripa','El dolor'],ans:1},
    {q:'¿Cómo se dice "Le vaccin" en español?',opts:['La curita','La vacuna','El vendaje','El medicamento'],ans:1},
    {q:'¿Cómo se dice "Le pansement adhésif" en México?',opts:['La inyección','La vacuna','La curita','El medicamento'],ans:2},
    {q:'¿Cómo se dice "L\'ordonnance" en español?',opts:['La consulta','El medicamento','La receta médica','La vacuna'],ans:2},
    {q:'¿Cómo se dice "Les urgences" en México?',opts:['El médico de guardia','La sala de espera','Urgencias / Emergencias','La consulta'],ans:2},
    {q:'¿Cómo se dice "Le thermomètre" en español?',opts:['La presión','El termómetro','La fiebre','La inyección'],ans:1},
    {q:'¿Cómo se dice "Un rendez-vous médical" en México?',opts:['Una visita','Una cita médica','Una receta','Una consulta'],ans:1}
   ]},

  {id:'ocio',level:1,emoji:'⛰️',name:'El Ocio',sub:'Deporte, fútbol, lucha libre… / Les loisirs',
   words:[
    {es:'La lectura',fr:'La lecture',em:'📚'},
    {es:'El libro',fr:'Le livre',em:'📖'},
    {es:'La música / El mariachi',fr:'La musique / Le mariachi (musique nationale mexicaine)',em:'🎵'},
    {es:'El cine',fr:'Le cinéma',em:'🎬'},
    {es:'El teatro',fr:'Le théâtre',em:'🎭'},
    {es:'El deporte',fr:'Le sport',em:''},
    {es:'El fútbol',fr:'Le football',em:'⚽'},
    {es:'La lucha libre',fr:'La lutte libre (sport national MX, très populaire)',em:'🤼'},
    {es:'La natación',fr:'La natation',em:'🏊'},
    {es:'El ciclismo',fr:'Le cyclisme',em:'🚴'},
    {es:'El senderismo / El trekking',fr:'La randonnée',em:'🥾'},
    {es:'El paseo',fr:'La balade / La promenade',em:'🌳'},
    {es:'Jugar',fr:'Jouer',em:'🎮'},
    {es:'Practicar',fr:'Pratiquer',em:'💪'},
    {es:'Descansar',fr:'Se reposer',em:'😴'},
    {es:'Disfrutar / Gozar',fr:'Profiter / Apprécier',em:'😊'},
   ],
   quiz10:[
    {q:'¿Cuál es el deporte estrella de México además del fútbol?',opts:['El béisbol','La lucha libre','El tenis','El baloncesto'],ans:1},
    {q:'¿Qué es el "mariachi" en México?',opts:['Un sport','La musique nationale mexicaine','Un plat typique','Une danse moderne'],ans:1},
    {q:'¿Cómo se dice "Le livre" en español?',opts:['La lectura','La música','El libro','El cine'],ans:2},
    {q:'¿Qué significa "La natación"?',opts:['Le cyclisme','L\'athlétisme','La natation','Le football'],ans:2},
    {q:'¿Qué significa "Descansar"?',opts:['Jouer','Pratiquer','Apprécier','Se reposer'],ans:3},
    {q:'¿Cómo se dice "Le cinéma" en español?',opts:['El teatro','La música','La lectura','El cine'],ans:3},
    {q:'¿Cómo se dice "Jouer" en español?',opts:['Practicar','Disfrutar','Descansar','Jugar'],ans:3},
    {q:'¿Qué significa "La lucha libre"?',opts:['La randonnée','La boxe','La lutte libre','Le cyclisme'],ans:2}
   ]},

  {id:'veth',level:1,emoji:'👗',name:'La Ropa',sub:'Camiseta, pantalón… / Les vêtements',
   words:[
    {es:'La camiseta / La playera',fr:'Le t-shirt (playera = t-shirt courant au Mexique)',em:'👕'},
    {es:'La camisa',fr:'La chemise',em:'👔'},
    {es:'El pantalón',fr:'Le pantalon',em:'👖'},
    {es:'Los zapatos / Los tenis',fr:'Les chaussures / Les baskets',em:'👟'},
    {es:'Los calcetines / Las calcetas',fr:'Les chaussettes (calcetas courant en MX)',em:'🧦'},
    {es:'El vestido / La falda',fr:'La robe / La jupe',em:'👗'},
    {es:'Los shorts / El pantalón corto',fr:'Le short',em:'🩳'},
    {es:'El suéter',fr:'Le pull',em:'🧥'},
    {es:'La chamarra / La chaqueta',fr:'La veste (chamarra = veste courant en MX)',em:'🧥'},
    {es:'El sombrero / La gorra',fr:'Le chapeau / La casquette',em:'🎩'},
    {es:'El abrigo / El impermeable',fr:'Le manteau / L\'imperméable',em:'🧥'},
    {es:'La bufanda',fr:'L\'écharpe',em:'🧣'},
    {es:'Los guantes',fr:'Les gants',em:'🧤'},
    {es:'La bolsa / La mochila',fr:'Le sac / Le sac à dos',em:'👜'},
    {es:'El traje de baño',fr:'Le maillot de bain',em:'🩱'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le t-shirt" en México?',opts:['El suéter','La camisa','La playera / la camiseta','La chamarra'],ans:2},
    {q:'¿Cómo se dice "La veste" en México?',opts:['El suéter','La bufanda','La chamarra / la chaqueta','El abrigo'],ans:2},
    {q:'¿Cómo se dice "Les chaussures" en español?',opts:['Las calcetas','Los tenis','Los zapatos','El sombrero'],ans:2},
    {q:'¿Cómo se dice "Le pull" en México?',opts:['La bufanda','La chamarra','El suéter','El abrigo'],ans:2},
    {q:'¿Cómo se dice "Le maillot de bain" en México?',opts:['El traje de baño','La gorra','Los shorts','Las calcetas'],ans:0},
    {q:'¿Qué significa "La bufanda"?',opts:['Les gants','Le manteau','L\'écharpe','Le bonnet'],ans:2},
    {q:'¿Cómo se dice "La robe" en español?',opts:['La falda','El vestido','La chamarra','El suéter'],ans:1},
    {q:'¿Cómo se dice "Les chaussettes" en México?',opts:['Los zapatos','Los guantes','Las calcetas / los calcetines','El traje de baño'],ans:2}
   ]},

  {id:'pays',level:1,emoji:'🌍',name:'Los Países',sub:'Francia, México… / Les pays',
   words:[
    {es:'Francia',fr:'La France',em:'🇫🇷'},
    {es:'México',fr:'Le Mexique',em:'🇲🇽'},
    {es:'España',fr:'L\'Espagne',em:'🇪🇸'},
    {es:'Portugal',fr:'Le Portugal',em:'🇵🇹'},
    {es:'Italia',fr:'L\'Italie',em:'🇮🇹'},
    {es:'Bélgica',fr:'La Belgique',em:'🇧🇪'},
    {es:'Suiza',fr:'La Suisse',em:'🇨🇭'},
    {es:'Alemania',fr:'L\'Allemagne',em:'🇩🇪'},
    {es:'Reino Unido',fr:'Le Royaume-Uni',em:'🇬🇧'},
    {es:'Guatemala',fr:'Le Guatemala',em:'🇬🇹'},
    {es:'Colombia',fr:'La Colombie',em:'🇨🇴'},
    {es:'Argentina',fr:'L\'Argentine',em:'🇦🇷'},
    {es:'Brasil',fr:'Le Brésil',em:'🇧🇷'},
    {es:'Canadá',fr:'Le Canada',em:'🇨🇦'},
    {es:'Estados Unidos / El norte',fr:'Les États-Unis (el norte = familier pour désigner les USA)',em:'🇺🇸'},
    {es:'Rusia',fr:'La Russie',em:'🇷🇺'},
    {es:'China',fr:'La Chine',em:'🇨🇳'},
    {es:'Japón',fr:'Le Japon',em:'🇯🇵'},
    {es:'Cuba',fr:'Cuba',em:'🇨🇺'},
    {es:'Australia',fr:'L\'Australie',em:'🇦🇺'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "La France" en español?',opts:['Bélgica','Francia','Suiza','Portugal'],ans:1},
    {q:'¿Qué significa "Alemania"?',opts:['Autriche','Pays-Bas','Allemagne','Danemark'],ans:2},
    {q:'¿Cómo se dice "Le Brésil" en español?',opts:['Perú','Chile','Brasil','Bolivia'],ans:2},
    {q:'¿Cuál es el país fronterizo al norte de México?',opts:['Canadá','Guatemala','Cuba','Colombia'],ans:0},
    {q:'¿Cuál es el país fronterizo al sur de México?',opts:['Colombia','Cuba','Guatemala','El Salvador'],ans:2},
    {q:'¿Qué significa "El norte" en argot mexicano?',opts:['Le nord de Mexico','Les États-Unis (familier)','Le Canada','La frontière'],ans:1},
    {q:'¿Cómo se dice "Le Mexique" en español?',opts:['Colombia','México','Argentina','Chile'],ans:1},
    {q:'¿Cómo se dice "Le Japon" en español?',opts:['China','Corea','Japón','India'],ans:2}
   ]},

  {id:'met',level:1,emoji:'💼',name:'Las Profesiones',sub:'Médico, profe, mesero… / Les professions',
   words:[
    {es:'El/la estudiante',fr:'L\'étudiant / L\'étudiante',em:'🎓'},
    {es:'El profesor / La profesora / El profe',fr:'Le professeur (el profe = familier, très courant MX)',em:'👩‍🏫'},
    {es:'El mesero / La mesera',fr:'Le serveur / La serveuse',em:'🍽️'},
    {es:'El vendedor / La vendedora',fr:'Le vendeur / La vendeuse',em:'🏪'},
    {es:'El/la taxista',fr:'Le chauffeur de taxi',em:'🚕'},
    {es:'El médico / El doctor / La doctora',fr:'Le médecin / Le docteur',em:'🩺'},
    {es:'El enfermero / La enfermera',fr:'L\'infirmier / L\'infirmière',em:'👨‍⚕️'},
    {es:'El cocinero / La cocinera',fr:'Le cuisinier / La cuisinière',em:'👨‍🍳'},
    {es:'El plomero / La plomera',fr:'Le plombier / La plombière',em:'🔧'},
    {es:'El ingeniero / La ingeniera',fr:'L\'ingénieur / L\'ingénieure',em:'💻'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le médecin" en español?',opts:['El profesor','El médico / el doctor','El enfermero','El cocinero'],ans:1},
    {q:'¿Qué significa "El profe" en México?',opts:['L\'étudiant','Le directeur','Le professeur (familier)','Le concierge'],ans:2},
    {q:'¿Cómo se dice "Le serveur" en México?',opts:['El cocinero','El mesonero','El mesero','El vendedor'],ans:2},
    {q:'¿Qué significa "La estudiante"?',opts:['La professeure','L\'étudiante','La médecin','La vendeuse'],ans:1},
    {q:'¿Cómo se dice "Le plombier" en México?',opts:['El médico','El profesor','El plomero','El mesero'],ans:2}
   ]},

  {id:'anim',level:1,emoji:'🐘',name:'Los Animales',sub:'Perro, águila, ajolote… / Les animaux',
   words:[
    {es:'El perro / El chuco',fr:'Le chien (chuco = chien errant courant MX)',em:'🐶'},
    {es:'El gato',fr:'Le chat',em:'🐱'},
    {es:'El pájaro / El loro',fr:'L\'oiseau / Le perroquet',em:'🦜'},
    {es:'El pez',fr:'Le poisson (vivant)',em:'🐟'},
    {es:'El caballo',fr:'Le cheval',em:'🐴'},
    {es:'La vaca',fr:'La vache',em:'🐮'},
    {es:'El cerdo / El puerco',fr:'Le cochon (puerco courant en MX)',em:'🐷'},
    {es:'La gallina / El gallo',fr:'La poule / Le coq',em:'🐔'},
    {es:'El conejo',fr:'Le lapin',em:'🐰'},
    {es:'El águila real',fr:'L\'aigle royal (emblème national Mexique — sur le drapeau)',em:'🦅'},
    {es:'El ajolote',fr:'L\'axolotl (animal emblématique de Mexico)',em:'🦎'},
    {es:'El jaguar',fr:'Le jaguar (emblème des civilisations préhispaniques)',em:'🐆'},
    {es:'El quetzal',fr:'Le quetzal (oiseau sacré mésoaméricain)',em:'🦚'},
    {es:'El delfín',fr:'Le dauphin',em:'🐬'},
    {es:'La ballena',fr:'La baleine',em:'🐳'},
    {es:'La mariposa monarca',fr:'Le papillon monarque (migration célèbre au Mexique)',em:'🦋'},
    {es:'La serpiente / La víbora',fr:'Le serpent (víbora courant en MX)',em:'🐍'},
    {es:'El coyote',fr:'Le coyote (animal des zones arides mexicaines)',em:'🐺'},
    {es:'La araña',fr:'L\'araignée',em:'🕷️'},
    {es:'El mosquito / El zancudo',fr:'Le moustique',em:'🦟'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le chien" en español?',opts:['El gato','El caballo','El perro','El conejo'],ans:2},
    {q:'¿Cuál es el animal emblema de México (en el drapeau)?',opts:['El jaguar','El quetzal','El águila real','El ajolote'],ans:2},
    {q:'¿Qué es el "ajolote"?',opts:['Un jaguar','L\'axolotl, emblème de Mexico','Un serpent','Un aigle'],ans:1},
    {q:'¿Qué significa "El jaguar"?',opts:['L\'aigle','L\'axolotl','Le jaguar','Le serpent'],ans:2},
    {q:'¿Qué es la "mariposa monarca"?',opts:['Un oiseau','Un papillon migrateur célèbre','Un insecte aquatique','Un moustique'],ans:1},
    {q:'¿Cómo se dit "Le cochon" en México?',opts:['El cerdo','El puerco','El chancho','A et B sont corrects'],ans:3},
    {q:'¿Qué es el "quetzal"?',opts:['Un serpent sacré','L\'oiseau sacré mésoaméricain','Un jaguar','Un axolotl'],ans:1},
    {q:'¿Qué significa "El coyote"?',opts:['Le lion','L\'ours','Le loup','Le coyote'],ans:3}
   ]},

  {id:'plan',level:1,emoji:'🌿',name:'Las Plantas',sub:'Flor, árbol, cactus… / Les plantes',
   words:[
    {es:'La flor / La flor de lis',fr:'La fleur',em:'🌸'},
    {es:'El árbol',fr:'L\'arbre',em:'🌳'},
    {es:'La hoja',fr:'La feuille',em:'🍃'},
    {es:'La hierba / El pasto',fr:'L\'herbe',em:'🌱'},
    {es:'El jardín',fr:'Le jardin',em:'🏡'},
    {es:'La rosa',fr:'La rose',em:'🌹'},
    {es:'El nopal',fr:'Le cactus nopal (emblème national — sur le drapeau mexicain)',em:'🌵'},
    {es:'El cactus / El maguey',fr:'Le cactus / Le maguey (plante du mezcal)',em:'🌵'},
    {es:'La flor de cempasúchil',fr:'Le souci des morts (fleur du Día de Muertos)',em:'🌼'},
    {es:'El bosque / La selva',fr:'La forêt / La jungle',em:'🌲'},
    {es:'El césped / El pasto',fr:'La pelouse / Le gazon',em:'⛳'},
   ],
   quiz10:[
    {q:'¿Qué planta aparece en la bandera de México?',opts:['La rosa','El maguey','El nopal','El cactus saguaro'],ans:2},
    {q:'¿Qué es el "cempasúchil"?',opts:['Un cactus','La fleur du Día de Muertos','Un arbre fruitier','Une herbe médicinale'],ans:1},
    {q:'¿Qué significa "El árbol"?',opts:['La feuille','L\'herbe','L\'arbre','La fleur'],ans:2},
    {q:'¿Para qué sirve el maguey en México?',opts:['Pour faire de la bière','Pour faire le mezcal et la tequila','Pour faire du jus','Pour faire du pain'],ans:1},
    {q:'¿Cómo se dice "Le jardin" en español?',opts:['El bosque','El árbol','El jardín','La flor'],ans:2}
   ]}
];


/* ========================================
   Español Mexicano → Français 🇲🇽 – Niveau 2
   14 situations de dialogues — Niveau A1
   Français débutant au Mexique
   © 2026 Sébastien Godet
======================================== */

var LEVEL2_THEMES = [

  /* 1 ── Saluer et prendre des nouvelles */
  {id:'salut2',level:2,emoji:'👋',name:'Saludos',sub:'Saluer quelqu\'un / Dire bonjour au Mexique',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans la rue',img:'🏘️',dialogue:[
      {s:'Carlos',es:'¡Hola! ¿Qué onda, güey?',fr:'Salut ! Quoi de neuf, mec ?',side:'left'},
      {s:'Ana',es:'¡Bien, gracias! ¿Y tú?',fr:'Bien, merci ! Et toi ?',side:'right'},
      {s:'Carlos',es:'Más o menos. Estoy bien cansado.',fr:'Comme ci comme ça. Je suis vraiment fatigué.',side:'left'},
      {s:'Ana',es:'¡Híjole! Lo siento.',fr:'Ah mince ! Je suis désolée.',side:'right'},
      {s:'Carlos',es:'Gracias. ¡Nos vemos!',fr:'Merci. À bientôt !',side:'left'},
      {s:'Ana',es:'¡Nos vemos, cuate!',fr:'À bientôt, l\'ami !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Au bureau le matin',img:'💼',dialogue:[
      {s:'Pedro',es:'¡Buenos días! ¿Cómo estás?',fr:'Bonjour ! Comment tu vas ?',side:'left'},
      {s:'María',es:'Bien, gracias. ¿Y tú?',fr:'Bien, merci. Et toi ?',side:'right'},
      {s:'Pedro',es:'Un poco cansado. ¿Quieres café de olla?',fr:'Un peu fatigué. Tu veux un café de olla ?',side:'left'},
      {s:'María',es:'¡Sí, por favor! ¡Qué padre!',fr:'Oui, s\'il te plaît ! Super !',side:'right'},
      {s:'Pedro',es:'De nada. ¡Aquí tienes!',fr:'De rien. Voilà !',side:'left'}
    ]},
    {label:'Sit. 3',title:'Retrouver un cuate',img:'☀️',dialogue:[
      {s:'Rafa',es:'¡Ey, qué onda!',fr:'Hé, quoi de neuf !',side:'left'},
      {s:'Sofía',es:'¡Muy bien, cuate! ¿Y tú?',fr:'Très bien, l\'ami ! Et toi ?',side:'right'},
      {s:'Rafa',es:'Bien. ¿Qué hay de nuevo?',fr:'Bien. Quoi de neuf ?',side:'left'},
      {s:'Sofía',es:'Nada especial. ¿Tomamos algo?',fr:'Rien de spécial. On prend quelque chose ?',side:'right'},
      {s:'Rafa',es:'¡Órale! Tengo sed.',fr:'D\'accord ! J\'ai soif.',side:'left'},
      {s:'Sofía',es:'¡Yo también, güey!',fr:'Moi aussi !',side:'right'}
    ]}
   ],
   vocab:['¿Qué onda? = Quoi de neuf ? (MX)','Bien, gracias = Bien, merci','Más o menos = Comme ci comme ça','Estoy cansado = Je suis fatigué','¡Híjole! = Ah mince ! / Aïe !','Nos vemos = À bientôt / On se voit','¡Órale! = D\'accord ! / Allez ! (MX)'],
   quiz:[
    {q:'¿Qué significa "¿Qué onda?" en México?',opts:['Quelle est la vague ?','Quoi de neuf ? / Ça va ?','Où es-tu ?','Que fais-tu ?'],ans:1},
    {q:'¿Cómo se dice "À bientôt / On se voit" en México?',opts:['Gracias','Nos vemos','De nada','Perdón'],ans:1},
    {q:'¿Qué significa "¡Híjole!" en México?',opts:['Au revoir !','Merci !','Ah mince ! / Aïe ! / Wow !','Bien sûr !'],ans:2}
   ]},

  /* 2 ── Se présenter */
  {id:'pres2',level:2,emoji:'🙋',name:'Presentarse',sub:'Dire son nom, son pays / Se présenter',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans un cours d\'espagnol',img:'📚',dialogue:[
      {s:'Profe',es:'¡Hola! ¿Cómo te llamas?',fr:'Bonjour ! Tu t\'appelles comment ?',side:'right'},
      {s:'Marc',es:'Me llamo Marc. ¿Y usted?',fr:'Je m\'appelle Marc. Et vous ?',side:'left'},
      {s:'Profe',es:'Yo soy Laura. ¿De dónde eres, Marc?',fr:'Je suis Laura. Tu es d\'où, Marc ?',side:'right'},
      {s:'Marc',es:'Soy de Francia, de Lyon. ¿Y usted?',fr:'Je suis de France, de Lyon. Et vous ?',side:'left'},
      {s:'Profe',es:'Soy de la Ciudad de México. ¡Bienvenido!',fr:'Je suis de Mexico. Bienvenue !',side:'right'},
      {s:'Marc',es:'¡Gracias, profe!',fr:'Merci, prof !',side:'left'}
    ]},
    {label:'Sit. 2',title:'Rencontre dans la colonia',img:'🏙️',dialogue:[
      {s:'Vecino',es:'¡Hola! ¿Eres nuevo en la colonia?',fr:'Bonjour ! Tu es nouveau dans le quartier ?',side:'right'},
      {s:'Julie',es:'Sí. Me llamo Julie. Soy francesa.',fr:'Oui. Je m\'appelle Julie. Je suis française.',side:'left'},
      {s:'Vecino',es:'Yo soy Antonio. ¿Hablas español?',fr:'Moi je suis Antonio. Tu parles espagnol ?',side:'right'},
      {s:'Julie',es:'Un poco. Estoy aprendiendo.',fr:'Un peu. Je suis en train d\'apprendre.',side:'left'},
      {s:'Vecino',es:'¡Qué padre! Tu español está muy chido.',fr:'Super ! Ton espagnol est très bien.',side:'right'},
      {s:'Julie',es:'¡Gracias! Eres muy amable.',fr:'Merci ! Tu es très gentil.',side:'left'}
    ]},
    {label:'Sit. 3',title:'À une fiesta',img:'🎉',dialogue:[
      {s:'Chica',es:'¡Ey, hola! ¿Cómo te llamas?',fr:'Hé, salut ! Tu t\'appelles comment ?',side:'right'},
      {s:'Thomas',es:'Thomas. ¿Y tú?',fr:'Thomas. Et toi ?',side:'left'},
      {s:'Chica',es:'Yo soy Sofía. ¿Eres francés, verdad?',fr:'Moi je suis Sofía. Tu es français, n\'est-ce pas ?',side:'right'},
      {s:'Thomas',es:'Sí, soy de París. ¿Y tú eres del D.F.?',fr:'Oui, je suis de Paris. Et toi tu es de Mexico ?',side:'left'},
      {s:'Chica',es:'¡Simón! Soy chilanga, de aquí.',fr:'Exact ! Je suis de Mexico, d\'ici.',side:'right'},
      {s:'Thomas',es:'¡Encantado!',fr:'Enchanté !',side:'left'}
    ]}
   ],
   vocab:['Me llamo = Je m\'appelle','¿De dónde eres? = Tu es d\'où ?','Soy de = Je suis de','¡Simón! = Oui ! / Exactement ! (argot MX)','El D.F. / La CDMX = Mexico (Ciudad de México)','Chilango/Chilanga = habitant de Mexico','¡Encantado(a)! = Enchanté(e) !'],
   quiz:[
    {q:'¿Cómo se dice "Je m\'appelle" en español?',opts:['Soy','Me llamo','Tengo','Vivo'],ans:1},
    {q:'¿Qué significa "¡Simón!" en argot mexicano?',opts:['Attention !','Non !','Oui ! / Exactement !','Peut-être !'],ans:2},
    {q:'¿Qué es un "chilango / una chilanga"?',opts:['Un habitant de Guadalajara','Un habitant de Monterrey','Un habitant de Mexico (CDMX)','Un habitant de Puebla'],ans:2}
   ]},

  /* 3 ── Demander son chemin */
  {id:'chemin2',level:2,emoji:'🗺️',name:'Pedir camino',sub:'Demander son chemin / S\'orienter en ville',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Trouver la station de métro',img:'🚇',dialogue:[
      {s:'Turista',es:'Perdón, ¿dónde está el metro?',fr:'Pardon, où est le métro ?',side:'left'},
      {s:'Señora',es:'Siga derecho y doble a la izquierda.',fr:'Continue tout droit et tourne à gauche.',side:'right'},
      {s:'Turista',es:'¿Está lejos?',fr:'C\'est loin ?',side:'left'},
      {s:'Señora',es:'No, son dos cuadras.',fr:'Non, c\'est à deux pâtés de maisons.',side:'right'},
      {s:'Turista',es:'Muchas gracias.',fr:'Merci beaucoup.',side:'left'},
      {s:'Señora',es:'¡Con gusto!',fr:'Avec plaisir !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Trouver une farmacia',img:'💊',dialogue:[
      {s:'Marc',es:'Disculpa, ¿hay una farmacia cerca?',fr:'Excuse-moi, il y a une pharmacie près d\'ici ?',side:'left'},
      {s:'Chico',es:'Sí. Baja esta calle y dobla a la derecha.',fr:'Oui. Descends cette rue et tourne à droite.',side:'right'},
      {s:'Marc',es:'¿Después de la tienda de abarrotes?',fr:'Après l\'épicerie ?',side:'left'},
      {s:'Chico',es:'Sí, exacto. La puerta verde.',fr:'Oui, exactement. La porte verte.',side:'right'},
      {s:'Marc',es:'¡Órale! Gracias.',fr:'D\'accord ! Merci.',side:'left'},
      {s:'Chico',es:'¡De nada, güey!',fr:'De rien !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Trouver le zócalo',img:'⛲',dialogue:[
      {s:'Julie',es:'Perdón, ¿cómo llego al zócalo?',fr:'Pardon, comment j\'arrive au zócalo ?',side:'left'},
      {s:'Señor',es:'Agarras la línea 2 del metro, dirección Tasqueña.',fr:'Tu prends la ligne 2 du métro, direction Tasqueña.',side:'right'},
      {s:'Julie',es:'¿Cuántas estaciones son?',fr:'C\'est combien de stations ?',side:'left'},
      {s:'Señor',es:'Tres estaciones. Bajas en Zócalo.',fr:'Trois stations. Tu descends à Zócalo.',side:'right'},
      {s:'Julie',es:'¡Qué chido! Gracias.',fr:'Super ! Merci.',side:'left'},
      {s:'Señor',es:'¡Buen provecho del metro!',fr:'Profite bien du métro !',side:'right'}
    ]}
   ],
   vocab:['Perdón / Disculpa = Pardon / Excuse-moi','¿Dónde está...? = Où est... ?','Derecho / Todo recto = Tout droit','A la izquierda = À gauche','A la derecha = À droite','Dos cuadras = Deux pâtés de maisons','¡Con gusto! = Avec plaisir ! (MX)'],
   quiz:[
    {q:'¿Cómo se dice "Tout droit" en México?',opts:['A la derecha','A la izquierda','Derecho / todo recto','Enfrente'],ans:2},
    {q:'¿Cómo se dit "Prendre le bus" en México?',opts:['Subir al camión','Agarrar el camión','Tomar el camión','Tout est correct'],ans:3},
    {q:'¿Cómo se dice "Avec plaisir !" en México?',opts:['De nada','Gracias','¡Con gusto!','Por favor'],ans:2}
   ]},

  /* 4 ── Au café / bar */
  {id:'bar2',level:2,emoji:'☕',name:'En el café',sub:'Commander au café mexicain / Café, aguas y antojitos',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Commande simple',img:'☕',dialogue:[
      {s:'Cliente',es:'¡Hola! Un café de olla, por favor.',fr:'Bonjour ! Un café de olla, s\'il vous plaît.',side:'left'},
      {s:'Mesero',es:'¿Con piloncillo o sin azúcar?',fr:'Avec sucre de canne ou sans sucre ?',side:'right'},
      {s:'Cliente',es:'Con piloncillo, por favor.',fr:'Avec sucre de canne, s\'il vous plaît.',side:'left'},
      {s:'Mesero',es:'¿Quiere algo de comer?',fr:'Vous voulez quelque chose à manger ?',side:'right'},
      {s:'Cliente',es:'Sí, ¿cuánto es un tamal?',fr:'Oui, combien coûte un tamal ?',side:'left'},
      {s:'Mesero',es:'Veinte pesos.',fr:'Vingt pesos.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Commander des antojitos',img:'🌮',dialogue:[
      {s:'Mesera',es:'¿Qué van a ordenar?',fr:'Qu\'est-ce que vous allez commander ?',side:'right'},
      {s:'Clara',es:'Un agua de Jamaica, por favor.',fr:'Une eau de Jamaica (hibiscus), s\'il vous plaît.',side:'left'},
      {s:'Tomás',es:'Y yo, una horchata. ¿Tienen quesadillas?',fr:'Et moi, une horchata. Vous avez des quesadillas ?',side:'right'},
      {s:'Mesera',es:'Sí. También hay tacos y tortas.',fr:'Oui. Il y a aussi des tacos et des tortas.',side:'right'},
      {s:'Clara',es:'¡Qué padre! Unos tacos de pollo.',fr:'Super ! Des tacos au poulet.',side:'left'},
      {s:'Mesera',es:'¡Ahorita!',fr:'Tout de suite !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Payer l\'addition',img:'🧾',dialogue:[
      {s:'Cliente',es:'La cuenta, por favor.',fr:'L\'addition, s\'il vous plaît.',side:'left'},
      {s:'Mesero',es:'Son ciento cincuenta pesos.',fr:'C\'est cent cinquante pesos.',side:'right'},
      {s:'Cliente',es:'¿Se puede pagar con tarjeta?',fr:'On peut payer par carte ?',side:'left'},
      {s:'Mesero',es:'Sí, con gusto.',fr:'Oui, avec plaisir.',side:'right'},
      {s:'Cliente',es:'Aquí tiene. Gracias.',fr:'Voilà. Merci.',side:'left'},
      {s:'Mesero',es:'¡Gracias! ¡Que le vaya bien!',fr:'Merci ! Bonne journée !',side:'right'}
    ]}
   ],
   vocab:['El café de olla = Le café à la cannelle (traditionnel MX)','El agua de Jamaica = L\'eau d\'hibiscus','La horchata = Boisson au riz (eau fraîche MX)','Los tacos = Les tacos','La torta = Le sandwich mexicain','¡Ahorita! = Tout de suite ! (MX)','¡Que le vaya bien! = Bonne journée ! (MX)'],
   quiz:[
    {q:'¿Qué es el "agua de Jamaica" en México?',opts:['De l\'eau plate','Une bière','Une boisson à l\'hibiscus','Du thé glacé'],ans:2},
    {q:'¿Qué significa "La cuenta, por favor"?',opts:['Le menu, s\'il vous plaît','L\'addition, s\'il vous plaît','Un café, s\'il vous plaît','L\'eau, s\'il vous plaît'],ans:1},
    {q:'¿Cómo se dit "Commander" en México?',opts:['Vender','Ordenar / pedir','Cocinar','Pagar'],ans:1}
   ]},

  /* 5 ── Au restaurant */
  {id:'resto2',level:2,emoji:'🍽️',name:'En el restaurante',sub:'Commander un repas / Au restaurant mexicain',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Avoir une table',img:'🪑',dialogue:[
      {s:'Cliente',es:'Hola, ¿tiene mesa para dos?',fr:'Bonjour, vous avez une table pour deux ?',side:'left'},
      {s:'Mesera',es:'Sí, por aquí, por favor.',fr:'Oui, par ici, s\'il vous plaît.',side:'right'},
      {s:'Cliente',es:'Gracias. ¿Tiene comida corrida?',fr:'Merci. Vous avez le menu du jour ?',side:'left'},
      {s:'Mesera',es:'Sí. Hoy hay sopa de lima, mole con pollo y postre.',fr:'Oui. Aujourd\'hui il y a soupe à la lime, mole au poulet et dessert.',side:'right'},
      {s:'Cliente',es:'¿Cuánto cuesta la comida corrida?',fr:'Le menu coûte combien ?',side:'left'},
      {s:'Mesera',es:'Noventa pesos, con refresco incluido.',fr:'Quatre-vingt-dix pesos, avec soda inclus.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Commander à table',img:'🥗',dialogue:[
      {s:'Mesero',es:'¿Ya van a ordenar?',fr:'Vous êtes prêts à commander ?',side:'right'},
      {s:'Sophie',es:'Sí. ¿Me puede traer unos tacos de carnitas?',fr:'Oui. Vous pouvez m\'apporter des tacos de carnitas ?',side:'left'},
      {s:'Mesero',es:'¿Con qué salsa?',fr:'Avec quelle sauce ?',side:'right'},
      {s:'Sophie',es:'Verde, por favor. ¿Tiene algo sin carne?',fr:'Verte, s\'il vous plaît. Vous avez quelque chose sans viande ?',side:'left'},
      {s:'Mesero',es:'Sí, hay quesadillas de queso y hongos.',fr:'Oui, il y a des quesadillas au fromage et aux champignons.',side:'right'},
      {s:'Sophie',es:'¡Qué chido! Eso quiero.',fr:'Super ! C\'est ça que je veux.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Un problème',img:'🤔',dialogue:[
      {s:'Cliente',es:'Disculpa, esto no es lo que ordené.',fr:'Pardon, ce n\'est pas ce que j\'ai commandé.',side:'left'},
      {s:'Mesero',es:'Lo siento. ¿Qué ordenó usted?',fr:'Je suis désolé. Qu\'est-ce que vous avez commandé ?',side:'right'},
      {s:'Cliente',es:'Ordené tacos de pescado, no de carne.',fr:'J\'ai commandé des tacos au poisson, pas à la viande.',side:'left'},
      {s:'Mesero',es:'Discúlpeme, ahorita los cambio.',fr:'Excusez-moi, je les change tout de suite.',side:'right'},
      {s:'Cliente',es:'Gracias.',fr:'Merci.',side:'left'},
      {s:'Mesero',es:'¡Perdón por la confusión!',fr:'Désolé pour la confusion !',side:'right'}
    ]}
   ],
   vocab:['¿Tiene mesa para dos? = Vous avez une table pour deux ?','La comida corrida = Le menu du jour économique (MX)','¿Ya van a ordenar? = Vous êtes prêts à commander ?','Los tacos de carnitas = Tacos au porc confit','Sin carne = Sans viande','Refresco incluido = Soda inclus','Discúlpeme = Excusez-moi'],
   quiz:[
    {q:'¿Qué es la "comida corrida" en México?',opts:['La carte du soir','Le menu du jour économique','Le plat du chef','Un menu gastronomique'],ans:1},
    {q:'¿Cómo se dit "Commander" en México?',opts:['Pedir / ordenar','Servir','Pagar','Cocinar'],ans:0},
    {q:'¿Qué son las "carnitas"?',opts:['Des tacos végétariens','Du porc confit','Du poulet grillé','Du bœuf cru'],ans:1}
   ]},

  /* 6 ── Faire des courses */
  {id:'compras2',level:2,emoji:'🛍️',name:'De compras',sub:'Acheter des choses / Faire ses courses',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Au marché',img:'🧺',dialogue:[
      {s:'Cliente',es:'Buenos días. ¿A cómo están los jitomates?',fr:'Bonjour. Combien coûtent les tomates ?',side:'left'},
      {s:'Vendedora',es:'A diez pesos el kilo, marchante.',fr:'Dix pesos le kilo, cher client.',side:'right'},
      {s:'Cliente',es:'Quiero un kilo, por favor.',fr:'Je veux un kilo, s\'il vous plaît.',side:'left'},
      {s:'Vendedora',es:'¿Algo más, joven?',fr:'Autre chose, jeune homme ?',side:'right'},
      {s:'Cliente',es:'Sí, ¿tiene aguacates?',fr:'Oui, vous avez des avocats ?',side:'left'},
      {s:'Vendedora',es:'Sí, están muy buenos. Cinco pesos cada uno.',fr:'Oui, ils sont très bons. Cinq pesos chacun.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Dans un magasin',img:'👗',dialogue:[
      {s:'Vendedor',es:'¡Hola! ¿En qué le puedo servir?',fr:'Bonjour ! En quoi puis-je vous servir ?',side:'right'},
      {s:'Lucie',es:'Busco una playera.',fr:'Je cherche un t-shirt.',side:'left'},
      {s:'Vendedor',es:'¿Qué talla trae?',fr:'Quelle taille vous faites ?',side:'right'},
      {s:'Lucie',es:'La mediana.',fr:'La moyenne.',side:'left'},
      {s:'Vendedor',es:'¿Se la quiere probar? El probador está al fondo.',fr:'Vous voulez l\'essayer ? La cabine est au fond.',side:'right'},
      {s:'Lucie',es:'¡Órale! ¿Cuánto cuesta?',fr:'D\'accord ! Elle coûte combien ?',side:'left'}
    ]},
    {label:'Sit. 3',title:'À la caja',img:'🛒',dialogue:[
      {s:'Cajera',es:'¡Hola! ¿Cómo le va?',fr:'Bonjour ! Comment ça va ?',side:'right'},
      {s:'Cliente',es:'Bien, gracias. ¿Cuánto es todo?',fr:'Bien, merci. C\'est combien en tout ?',side:'left'},
      {s:'Cajera',es:'Son doscientos treinta pesos.',fr:'C\'est deux cent trente pesos.',side:'right'},
      {s:'Cliente',es:'¿Acepta tarjeta?',fr:'Vous acceptez la carte ?',side:'left'},
      {s:'Cajera',es:'Sí, con gusto.',fr:'Oui, avec plaisir.',side:'right'},
      {s:'Cliente',es:'Aquí tiene. ¡Gracias!',fr:'Voilà. Merci !',side:'left'}
    ]}
   ],
   vocab:['¿A cómo están? = Combien ça coûte ? (MX marché)','Marchante = Client fidèle (terme affectueux du marché MX)','¿En qué le puedo servir? = En quoi puis-je vous servir ?','Busco = Je cherche','La talla = La taille','¿Acepta tarjeta? = Vous acceptez la carte ?','¡Con gusto! = Avec plaisir !'],
   quiz:[
    {q:'¿Cómo se dice "Je cherche" en español?',opts:['Tengo','Quiero','Busco','Compro'],ans:2},
    {q:'¿Qué significa "¿A cómo están?" en el mercado mexicano?',opts:['Comment allez-vous ?','Combien ça coûte ?','Vous avez ça ?','C\'est de bonne qualité ?'],ans:1},
    {q:'¿Qué significa "Marchante" en México?',opts:['Le vendeur ambulant','Le client fidèle (terme affectueux)','Le commerçant','Le passant'],ans:1}
   ]},

  /* 7 ── Prendre les transports */
  {id:'transp2',level:2,emoji:'🚌',name:'El transporte',sub:'Prendre le camión et le metro / Les transports',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dans le camión',img:'🚌',dialogue:[
      {s:'Pasajero',es:'Perdón, ¿este camión va al centro?',fr:'Pardon, ce bus va au centre ?',side:'left'},
      {s:'Señora',es:'No. Tienes que agarrar el que pasa por la avenida.',fr:'Non. Tu dois prendre celui qui passe par l\'avenue.',side:'right'},
      {s:'Pasajero',es:'¿Dónde está la parada?',fr:'Où est l\'arrêt ?',side:'left'},
      {s:'Señora',es:'Allí, a la derecha, en la esquina.',fr:'Là-bas, à droite, au coin de la rue.',side:'right'},
      {s:'Pasajero',es:'¿Cuántas paradas son?',fr:'C\'est combien d\'arrêts ?',side:'left'},
      {s:'Señora',es:'Como cuatro. Bajas en el zócalo.',fr:'Environ quatre. Tu descends au zócalo.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Au metro',img:'🚇',dialogue:[
      {s:'Turista',es:'Perdón, ¿cómo llego a Bellas Artes?',fr:'Pardon, comment j\'arrive à Bellas Artes ?',side:'left'},
      {s:'Metro',es:'Agarra la línea dos, dirección Cuatro Caminos.',fr:'Prends la ligne deux, direction Cuatro Caminos.',side:'right'},
      {s:'Turista',es:'¿Dónde compro el boleto?',fr:'Où j\'achète le billet ?',side:'left'},
      {s:'Metro',es:'En la taquilla. Son cinco pesos.',fr:'Au guichet. C\'est cinq pesos.',side:'right'},
      {s:'Turista',es:'¡Órale! Muchas gracias.',fr:'D\'accord ! Merci beaucoup.',side:'left'},
      {s:'Metro',es:'¡Con gusto!',fr:'Avec plaisir !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Prendre un taxi',img:'🚕',dialogue:[
      {s:'Pasajero',es:'¿Me lleva al aeropuerto?',fr:'Vous pouvez m\'emmener à l\'aéroport ?',side:'left'},
      {s:'Taxista',es:'Sí, son doscientos pesos.',fr:'Oui, c\'est deux cents pesos.',side:'right'},
      {s:'Pasajero',es:'¿Cuánto tiempo tarda?',fr:'Ça prend combien de temps ?',side:'left'},
      {s:'Taxista',es:'Como media hora, si no hay tráfico.',fr:'Environ une demi-heure, s\'il n\'y a pas d\'embouteillage.',side:'right'},
      {s:'Pasajero',es:'¡Órale! Vamos.',fr:'D\'accord ! Allons-y.',side:'left'},
      {s:'Taxista',es:'¡Ándale!',fr:'C\'est parti !',side:'right'}
    ]}
   ],
   vocab:['El camión = Le bus (MX — très spécifique !)','Agarrar el camión = Prendre le bus (MX)','La parada = L\'arrêt','El boleto = Le billet','La taquilla = Le guichet','¡Órale! = D\'accord ! / Allez ! (MX)','El tráfico = La circulation / les embouteillages'],
   quiz:[
    {q:'¿Cómo se dit "Le bus" en México?',opts:['El autobús','El camión','La buseta','La combi'],ans:1},
    {q:'¿Qué significa "Agarrar el camión" en México?',opts:['Manquer le bus','Chercher le bus','Prendre le bus','Attendre le bus'],ans:2},
    {q:'¿Qué significa "La taquilla" en el metro?',opts:['Le quai','La ligne','Le guichet','L\'entrée'],ans:2}
   ]},

  /* 8 ── À la pharmacie */
  {id:'farmacia2',level:2,emoji:'💊',name:'En la farmacia',sub:'Acheter des médicaments / À la pharmacie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Mal de tête',img:'🤕',dialogue:[
      {s:'Cliente',es:'Hola. Traigo dolor de cabeza. ¿Qué tiene?',fr:'Bonjour. J\'ai mal à la tête. Qu\'est-ce que vous avez ?',side:'left'},
      {s:'Farmacéutica',es:'¿Es alérgico a algún medicamento?',fr:'Vous êtes allergique à un médicament ?',side:'right'},
      {s:'Cliente',es:'No, no soy alérgico.',fr:'Non, je ne suis pas allergique.',side:'left'},
      {s:'Farmacéutica',es:'Le doy un paracetamol. Tome uno cada ocho horas.',fr:'Je vous donne un paracétamol. Prenez-en un toutes les huit heures.',side:'right'},
      {s:'Cliente',es:'¿Con o sin receta?',fr:'Avec ou sans ordonnance ?',side:'left'},
      {s:'Farmacéutica',es:'Sin receta. Son quince pesos.',fr:'Sans ordonnance. C\'est quinze pesos.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Chercher une farmacia de turno',img:'🌙',dialogue:[
      {s:'Turista',es:'Perdón, ¿hay una farmacia abierta ahorita?',fr:'Pardon, il y a une pharmacie ouverte maintenant ?',side:'left'},
      {s:'Vecina',es:'Las farmacias del IMSS están cerradas. Busca una farmacia de turno.',fr:'Les pharmacies de l\'IMSS sont fermées. Cherche une pharmacie de garde.',side:'right'},
      {s:'Turista',es:'¿Dónde está?',fr:'Elle est où ?',side:'left'},
      {s:'Vecina',es:'Hay varias Farmacias Similares que abren 24 horas.',fr:'Il y a plusieurs Farmacias Similares qui ouvrent 24 heures.',side:'right'},
      {s:'Turista',es:'¡Qué padre! Gracias.',fr:'Super ! Merci.',side:'left'},
      {s:'Vecina',es:'¡Con gusto!',fr:'Avec plaisir !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Acheter un médicament',img:'💉',dialogue:[
      {s:'Cliente',es:'Hola. Traigo tos. ¿Qué me da?',fr:'Bonjour. J\'ai de la toux. Qu\'est-ce que vous me donnez ?',side:'left'},
      {s:'Farmacéutico',es:'¿Es para adulto?',fr:'C\'est pour un adulte ?',side:'right'},
      {s:'Cliente',es:'Sí.',fr:'Oui.',side:'left'},
      {s:'Farmacéutico',es:'Le doy este jarabe. Dos cucharadas, tres veces al día.',fr:'Je vous donne ce sirop. Deux cuillères, trois fois par jour.',side:'right'},
      {s:'Cliente',es:'¿Cuánto cuesta?',fr:'Ça coûte combien ?',side:'left'},
      {s:'Farmacéutico',es:'Cuarenta pesos.',fr:'Quarante pesos.',side:'right'}
    ]}
   ],
   vocab:['Traigo dolor de cabeza = J\'ai mal à la tête (traer = porter, courant en MX)','La calentura = La fièvre','Sin receta = Sans ordonnance','La farmacia de turno = La pharmacie de garde','Farmacias Similares = Chaîne de pharmacies low-cost mexicaine','Tres veces al día = Trois fois par jour','El jarabe = Le sirop'],
   quiz:[
    {q:'¿Cómo se dit "J\'ai mal à la tête" en México?',opts:['Tengo fiebre','Me duele el estómago','Traigo dolor de cabeza','Estoy cansado'],ans:2},
    {q:'¿Qué son las "Farmacias Similares" en México?',opts:['Des pharmacies de luxe','Des pharmacies low-cost ouvertes 24h','Des pharmacies d\'hôpital','Des pharmacies vétérinaires'],ans:1},
    {q:'¿Cómo se dice "Trois fois par jour" en español?',opts:['Dos veces al día','Una vez al día','Tres veces al día','Cuatro veces al día'],ans:2}
   ]},

  /* 9 ── À l'hôtel */
  {id:'hotel2',level:2,emoji:'🏨',name:'En el hotel',sub:'Arriver à l\'hôtel / S\'installer',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Arrivée à la réception',img:'🛎️',dialogue:[
      {s:'Recepcionista',es:'¡Buenas noches! ¿Tiene reservación?',fr:'Bonsoir ! Vous avez une réservation ?',side:'right'},
      {s:'Huésped',es:'Sí. Me llamo Dupont. Un cuarto doble.',fr:'Oui. Je m\'appelle Dupont. Une chambre double.',side:'left'},
      {s:'Recepcionista',es:'Aquí está. ¿Su pasaporte, por favor?',fr:'Voilà. Votre passeport, s\'il vous plaît ?',side:'right'},
      {s:'Huésped',es:'Aquí tiene. ¿El desayuno está incluido?',fr:'Voilà. Le petit-déjeuner est inclus ?',side:'left'},
      {s:'Recepcionista',es:'Sí, de siete a diez.',fr:'Oui, de sept à dix heures.',side:'right'},
      {s:'Huésped',es:'¡Qué padre! Gracias.',fr:'Super ! Merci.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Un problème dans la chambre',img:'🔧',dialogue:[
      {s:'Huésped',es:'Hola. Hay un problema en mi cuarto.',fr:'Bonjour. Il y a un problème dans ma chambre.',side:'left'},
      {s:'Recepcionista',es:'¿Qué pasó?',fr:'Qu\'est-ce qui s\'est passé ?',side:'right'},
      {s:'Huésped',es:'El aire acondicionado no jala.',fr:'La climatisation ne fonctionne pas.',side:'left'},
      {s:'Recepcionista',es:'Discúlpeme. ¿Quiere cambiar de cuarto?',fr:'Excusez-moi. Vous voulez changer de chambre ?',side:'right'},
      {s:'Huésped',es:'Sí, por favor.',fr:'Oui, s\'il vous plaît.',side:'left'},
      {s:'Recepcionista',es:'Aquí tiene la llave del trescientos doce.',fr:'Voilà la clé de la trois cent douze.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Demander des infos',img:'🗺️',dialogue:[
      {s:'Huésped',es:'Perdón, ¿hay un restaurante cerca?',fr:'Pardon, il y a un restaurant près d\'ici ?',side:'left'},
      {s:'Recepcionista',es:'Sí, hay uno muy bueno a dos cuadras.',fr:'Oui, il y en a un très bon à deux pâtés de maisons.',side:'right'},
      {s:'Huésped',es:'¿Y hay algo para visitar aquí?',fr:'Et il y a des choses à visiter ici ?',side:'left'},
      {s:'Recepcionista',es:'Sí, el Templo Mayor está muy cerquita.',fr:'Oui, le Templo Mayor est tout près.',side:'right'},
      {s:'Huésped',es:'¿Está abierto hoy?',fr:'Il est ouvert aujourd\'hui ?',side:'left'},
      {s:'Recepcionista',es:'Sí, de nueve a cinco.',fr:'Oui, de neuf heures à dix-sept heures.',side:'right'}
    ]}
   ],
   vocab:['¿Tiene reservación? = Vous avez une réservation ? (MX)','El cuarto = La chambre (cuarto courant en MX)','No jala = Ça ne fonctionne pas (no jalar = ne pas marcher, argot MX)','La llave = La clé','A dos cuadras = À deux pâtés de maisons','Cerquita = Tout près (diminutif affectueux MX)','Discúlpeme = Excusez-moi'],
   quiz:[
    {q:'¿Cómo se dit "La chambre" en México?',opts:['La habitación sencilla','El cuarto / la habitación','La suite','La recámara'],ans:1},
    {q:'¿Qué significa "No jala" en México?',opts:['Ça ne tire pas','Ça ne fonctionne pas','Ça ne monte pas','Ça ne descend pas'],ans:1},
    {q:'¿Cómo se dice "La réservation" en México?',opts:['La reserva','La reservación','La confirmación','La compra'],ans:1}
   ]},

  /* 10 ── Chez le médecin */
  {id:'medico2',level:2,emoji:'🩺',name:'En el médico',sub:'Expliquer ce qui ne va pas / Chez le médecin',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Expliquer ses symptômes',img:'🤒',dialogue:[
      {s:'Doctor',es:'¡Buenos días! ¿Qué le pasa?',fr:'Bonjour ! Qu\'est-ce qui ne va pas ?',side:'right'},
      {s:'Paciente',es:'Traigo calentura y me duele la garganta.',fr:'J\'ai de la fièvre et j\'ai mal à la gorge.',side:'left'},
      {s:'Doctor',es:'¿Desde cuándo?',fr:'Depuis quand ?',side:'right'},
      {s:'Paciente',es:'Desde ayer en la noche.',fr:'Depuis hier soir.',side:'left'},
      {s:'Doctor',es:'¿También trae tos?',fr:'Vous avez aussi de la toux ?',side:'right'},
      {s:'Paciente',es:'Sí, un poco.',fr:'Oui, un peu.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Comprendre le docteur',img:'💊',dialogue:[
      {s:'Doctor',es:'Tiene una infección. Le receto un antibiótico.',fr:'Vous avez une infection. Je vous prescris un antibiotique.',side:'right'},
      {s:'Paciente',es:'¿Cuándo lo tomo?',fr:'Quand est-ce que je le prends ?',side:'left'},
      {s:'Doctor',es:'Uno en la mañana y uno en la noche.',fr:'Un le matin et un le soir.',side:'right'},
      {s:'Paciente',es:'¿Por cuántos días?',fr:'Pendant combien de jours ?',side:'left'},
      {s:'Doctor',es:'Siete días. Y tome mucha agua.',fr:'Sept jours. Et buvez beaucoup d\'eau.',side:'right'},
      {s:'Paciente',es:'Gracias, doctor.',fr:'Merci, docteur.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Appeler pour une cita',img:'📞',dialogue:[
      {s:'Paciente',es:'Hola, quiero una cita con el doctor.',fr:'Bonjour, je veux un rendez-vous avec le médecin.',side:'left'},
      {s:'Recepcionista',es:'¿Para cuándo la necesita?',fr:'Pour quand vous en avez besoin ?',side:'right'},
      {s:'Paciente',es:'Para hoy si es posible. Traigo mucha calentura.',fr:'Pour aujourd\'hui si c\'est possible. J\'ai beaucoup de fièvre.',side:'left'},
      {s:'Recepcionista',es:'¿Cuántos grados tiene?',fr:'Vous avez combien de degrés ?',side:'right'},
      {s:'Paciente',es:'Treinta y ocho cinco.',fr:'Trente-huit cinq.',side:'left'},
      {s:'Recepcionista',es:'Pase a las cuatro de la tarde. Traiga su credencial.',fr:'Venez à seize heures. Apportez votre carte d\'identité.',side:'right'}
    ]}
   ],
   vocab:['¿Qué le pasa? = Qu\'est-ce qui ne va pas ?','Traigo calentura = J\'ai de la fièvre (traer courant en MX)','Me duele la garganta = J\'ai mal à la gorge','Desde ayer = Depuis hier','La tos = La toux','Una cita = Un rendez-vous','La credencial = La carte d\'identité (MX)'],
   quiz:[
    {q:'¿Cómo se dit "J\'ai de la fièvre" en México?',opts:['Tengo frío','Traigo calentura / tengo fiebre','Tengo tos','Tengo dolor'],ans:1},
    {q:'¿Qué significa "Me duele la garganta"?',opts:['J\'ai mal à la tête','J\'ai mal au ventre','J\'ai mal à la gorge','J\'ai mal au dos'],ans:2},
    {q:'¿Qué es la "credencial" en México?',opts:['Le passeport','La carte de crédit','La carte d\'identité / carte d\'électeur','Le permis de conduire'],ans:2}
   ]},

  /* 11 ── La météo */
  {id:'meteo2',level:2,emoji:'☀️',name:'El tiempo',sub:'Parler de la météo / Le climat au Mexique',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Parler du temps',img:'🌤️',dialogue:[
      {s:'Marta',es:'¡Qué calor tan horrible hoy, güey!',fr:'Quelle chaleur horrible aujourd\'hui !',side:'left'},
      {s:'Romain',es:'Sí, está muy caliente. ¿Cuántos grados hay?',fr:'Oui, il fait très chaud. Il fait combien de degrés ?',side:'right'},
      {s:'Marta',es:'Como treinta y cinco en el D.F.',fr:'Environ trente-cinq à Mexico.',side:'left'},
      {s:'Romain',es:'¡Híjole! ¿Hay alberca aquí?',fr:'Ah mince ! Il y a une piscine ici ?',side:'right'},
      {s:'Marta',es:'Sí, está en el hotel.',fr:'Oui, elle est à l\'hôtel.',side:'left'},
      {s:'Romain',es:'¡Órale, vamos!',fr:'D\'accord, allons-y !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Prévoir la sortie',img:'🌧️',dialogue:[
      {s:'Luis',es:'¿Salimos hoy?',fr:'On sort aujourd\'hui ?',side:'left'},
      {s:'Camille',es:'No sé. ¿Cómo está el tiempo?',fr:'Je ne sais pas. Il fait quel temps ?',side:'right'},
      {s:'Luis',es:'Está lloviendo. Son las lluvias del temporal.',fr:'Il pleut. C\'est les pluies de la saison.',side:'left'},
      {s:'Camille',es:'¿Traes paraguas o sombrilla?',fr:'Tu as un parapluie ?',side:'right'},
      {s:'Luis',es:'No. ¿Y tú?',fr:'Non. Et toi ?',side:'left'},
      {s:'Camille',es:'Yo sí. ¡Vamos juntos!',fr:'Moi oui. Allons-y ensemble !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Les saisons au Mexique',img:'🌿',dialogue:[
      {s:'Sara',es:'¿Cuál es tu temporada favorita en México?',fr:'Quelle est ta saison préférée au Mexique ?',side:'right'},
      {s:'Théo',es:'Me gusta la temporada seca. No llueve tanto.',fr:'J\'aime la saison sèche. Il ne pleut pas autant.',side:'left'},
      {s:'Sara',es:'En México hay temporada seca y temporada de lluvias.',fr:'Au Mexique il y a la saison sèche et la saison des pluies.',side:'right'},
      {s:'Théo',es:'¿Y cuándo es el temporal?',fr:'Et quand c\'est la saison des pluies ?',side:'left'},
      {s:'Sara',es:'De mayo a octubre. Hay chaparrones todos los días.',fr:'De mai à octobre. Il y a des averses tous les jours.',side:'right'},
      {s:'Théo',es:'¡Qué padre! Me gustan los chaparrones.',fr:'Super ! J\'aime les averses.',side:'left'}
    ]}
   ],
   vocab:['¡Qué calor! = Quelle chaleur !','Está lloviendo = Il pleut','El paraguas / la sombrilla = Le parapluie','La temporada de lluvias = La saison des pluies (MX)','La temporada seca = La saison sèche','El chaparrón = L\'averse (MX)','La alberca = La piscine (MX)'],
   quiz:[
    {q:'¿Cómo se dice "Il fait froid" en español?',opts:['Hace calor','Hay sol','Está lloviendo','Hace frío'],ans:3},
    {q:'¿Qué es un "chaparrón" en México?',opts:['Un nuage','Une tempête','Une averse','Du brouillard'],ans:2},
    {q:'¿Cómo se dice "La piscine" en México?',opts:['El jacuzzi','La bañera','La alberca','El lago'],ans:2}
   ]},

  /* 12 ── Trouver un logement */
  {id:'logement2',level:2,emoji:'🏠',name:'Buscar departamento',sub:'Chercher un logement / Louer un dépa',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Appeler pour un dépa',img:'📱',dialogue:[
      {s:'Cliente',es:'Hola, llamo por el departamento en renta.',fr:'Bonjour, j\'appelle pour le département en location.',side:'left'},
      {s:'Propietario',es:'Sí. ¿Para cuántas personas?',fr:'Oui. Pour combien de personnes ?',side:'right'},
      {s:'Cliente',es:'Para una persona. ¿Cuánto es la renta?',fr:'Pour une personne. Le loyer c\'est combien ?',side:'left'},
      {s:'Propietario',es:'Seis mil pesos al mes.',fr:'Six mille pesos par mois.',side:'right'},
      {s:'Cliente',es:'¿Los servicios están incluidos?',fr:'Les charges sont incluses ?',side:'left'},
      {s:'Propietario',es:'No, la luz y el agua son aparte.',fr:'Non, l\'électricité et l\'eau sont en plus.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Visiter le dépa',img:'🔑',dialogue:[
      {s:'Propietario',es:'La sala es grande y tiene mucha luz.',fr:'Le salon est grand et très lumineux.',side:'right'},
      {s:'Cliente',es:'¡Qué chido! ¿Cuántas recámaras tiene?',fr:'Super ! Il a combien de chambres ?',side:'left'},
      {s:'Propietario',es:'Dos recámaras y un baño.',fr:'Deux chambres et une salle de bain.',side:'right'},
      {s:'Cliente',es:'¿Tiene refrigerador?',fr:'Il y a un réfrigérateur ?',side:'left'},
      {s:'Propietario',es:'Sí, y también estufa y horno.',fr:'Oui, et aussi une cuisinière et un four.',side:'right'},
      {s:'Cliente',es:'¿Puedo pensarlo?',fr:'Je peux réfléchir ?',side:'left'}
    ]},
    {label:'Sit. 3',title:'Un problème',img:'🔧',dialogue:[
      {s:'Inquilino',es:'Hola, hay un problema. La llave del agua no jala.',fr:'Bonjour, il y a un problème. Le robinet ne fonctionne pas.',side:'left'},
      {s:'Propietario',es:'¿Desde cuándo?',fr:'Depuis quand ?',side:'right'},
      {s:'Inquilino',es:'Desde esta mañana.',fr:'Depuis ce matin.',side:'left'},
      {s:'Propietario',es:'¡Híjole! Mando al plomero ahorita.',fr:'Ah mince ! J\'envoie le plombier tout de suite.',side:'right'},
      {s:'Inquilino',es:'¿Va a venir hoy?',fr:'Il vient aujourd\'hui ?',side:'left'},
      {s:'Propietario',es:'Sí, ahorita mismo.',fr:'Oui, tout de suite.',side:'right'}
    ]}
   ],
   vocab:['La renta = Le loyer (MX)','La luz y el agua = L\'électricité et l\'eau','La recámara = La chambre (MX)','No jala = Ça ne fonctionne pas (argot MX)','El plomero = Le plombier (MX)','Ahorita mismo = Tout de suite / À l\'instant','La estufa = La cuisinière (MX)'],
   quiz:[
    {q:'¿Qué significa "La renta" en México?',opts:['La vente','Le loyer','La taxe','Le dépôt de garantie'],ans:1},
    {q:'¿Cómo se dit "La chambre" en México?',opts:['El cuarto','La recámara','Les deux sont corrects','La habitación'],ans:2},
    {q:'¿Qué significa "No jala" en argot mexicano?',opts:['Ça ne tire pas','Ça ne fonctionne pas','Ça ne marche pas vite','Ça ne convient pas'],ans:1}
   ]},

  /* 13 ── Parler de ses goûts */
  {id:'gustos2',level:2,emoji:'❤️',name:'Gustos y aficiones',sub:'Parler de ce qu\'on aime / Les loisirs',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Parler de musique',img:'🎵',dialogue:[
      {s:'Lucía',es:'¿Te gusta la música?',fr:'Tu aimes la musique ?',side:'right'},
      {s:'Paul',es:'Sí, mucho. Me gusta el rock.',fr:'Oui, beaucoup. J\'aime le rock.',side:'left'},
      {s:'Lucía',es:'¿Y el mariachi?',fr:'Et le mariachi ?',side:'right'},
      {s:'Paul',es:'También, pero no conozco mucho.',fr:'Aussi, mais je ne connais pas beaucoup.',side:'left'},
      {s:'Lucía',es:'¡Hay un concierto esta noche! ¿Vienes, cuate?',fr:'Il y a un concert ce soir ! Tu viens, l\'ami ?',side:'right'},
      {s:'Paul',es:'¡Órale! ¿A qué hora empieza?',fr:'D\'accord ! Ça commence à quelle heure ?',side:'left'}
    ]},
    {label:'Sit. 2',title:'Parler de sport',img:'⚽',dialogue:[
      {s:'Diego',es:'¿Practicas algún deporte, güey?',fr:'Tu pratiques un sport ?',side:'left'},
      {s:'Claire',es:'Sí, me gusta mucho el fútbol.',fr:'Oui, j\'aime beaucoup le football.',side:'right'},
      {s:'Diego',es:'¡Qué padre! ¿Ves el partido esta noche?',fr:'Super ! Tu regardes le match ce soir ?',side:'left'},
      {s:'Claire',es:'Sí. ¿También te gusta la lucha libre?',fr:'Oui. Tu aimes aussi la lucha libre ?',side:'right'},
      {s:'Diego',es:'¡Me encanta! Es muy chida.',fr:'J\'adore ! C\'est super.',side:'left'},
      {s:'Claire',es:'¡Qué chévere!',fr:'Cool !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Proposer une activité',img:'🎬',dialogue:[
      {s:'Ana',es:'¿Qué vas a hacer esta tarde?',fr:'Tu vas faire quoi cet après-midi ?',side:'left'},
      {s:'Marc',es:'Nada. ¿Por qué?',fr:'Rien. Pourquoi ?',side:'right'},
      {s:'Ana',es:'¿Quieres ir al cine?',fr:'Tu veux aller au cinéma ?',side:'left'},
      {s:'Marc',es:'¡Órale! ¿Qué ponen?',fr:'D\'accord ! Qu\'est-ce qu\'il y a ?',side:'right'},
      {s:'Ana',es:'Una película francesa. ¿Te gusta el cine francés?',fr:'Un film français. Tu aimes le cinéma français ?',side:'left'},
      {s:'Marc',es:'¡Me encanta! ¿A qué hora quedamos?',fr:'J\'adore ! On se retrouve à quelle heure ?',side:'right'}
    ]}
   ],
   vocab:['Me gusta = J\'aime','No me gusta = Je n\'aime pas','Me encanta = J\'adore','La lucha libre = La lutte libre (sport populaire MX)','El mariachi = Musique nationale mexicaine','El partido = Le match','¡Órale! = D\'accord ! / Allez ! (MX)'],
   quiz:[
    {q:'¿Cómo se dice "J\'adore" en español?',opts:['Me gusta','No me gusta','Me encanta','Odio'],ans:2},
    {q:'¿Qué es el "mariachi"?',opts:['Un sport','La musique nationale mexicaine','Un plat typique','Une danse moderne'],ans:1},
    {q:'¿Qué es la "lucha libre" en México?',opts:['La boxe','La lutte libre spectacle','Le catch américain','Le judo'],ans:1}
   ]},

  /* 14 ── Sortir le soir */
  {id:'fiesta2',level:2,emoji:'🎉',name:'Salir de noche',sub:'Sortir le soir / Vida nocturna en México',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Organiser une sortie',img:'🎊',dialogue:[
      {s:'Pablo',es:'¡Ey, qué onda! ¿Salimos esta noche?',fr:'Hé, quoi de neuf ! On sort ce soir ?',side:'left'},
      {s:'Lea',es:'¡Sí! ¿A dónde vamos?',fr:'Oui ! On va où ?',side:'right'},
      {s:'Pablo',es:'Hay un lugar muy chido en la Condesa.',fr:'Il y a un endroit super dans la Condesa.',side:'left'},
      {s:'Lea',es:'¡Qué padre! ¿A qué hora?',fr:'Super ! À quelle heure ?',side:'right'},
      {s:'Pablo',es:'A las diez. Aquí también se sale noche.',fr:'À dix heures. Ici aussi on sort tard.',side:'left'},
      {s:'Lea',es:'¡Órale! ¡Nos vemos!',fr:'D\'accord ! À tout à l\'heure !',side:'right'}
    ]},
    {label:'Sit. 2',title:'Dans un bar',img:'🍺',dialogue:[
      {s:'Marc',es:'¡Esta música está muy chida! ¿Bailamos?',fr:'Cette musique est super ! On danse ?',side:'left'},
      {s:'Inés',es:'¡Sí! Me encanta bailar.',fr:'Oui ! J\'adore danser.',side:'right'},
      {s:'Marc',es:'¿Quieres algo de tomar?',fr:'Tu veux quelque chose à boire ?',side:'left'},
      {s:'Inés',es:'Sí, un agua, por favor. Traigo mucho calor.',fr:'Oui, une eau, s\'il te plaît. J\'ai très chaud.',side:'right'},
      {s:'Marc',es:'¡Ahorita vengo!',fr:'Je reviens tout de suite !',side:'left'},
      {s:'Inés',es:'¡Órale!',fr:'D\'accord !',side:'right'}
    ]},
    {label:'Sit. 3',title:'Le lendemain',img:'😴',dialogue:[
      {s:'Carla',es:'¡Ey, qué onda! Llegué tardísimo a mi depa.',fr:'Hé, quoi de neuf ! Je suis rentré très tard chez moi.',side:'left'},
      {s:'Tom',es:'¡Yo también, güey! Pero estuvo muy chida la noche.',fr:'Moi aussi ! Mais la soirée était super.',side:'right'},
      {s:'Carla',es:'Sí, la gente estaba muy buena onda.',fr:'Oui, les gens étaient très sympa.',side:'left'},
      {s:'Tom',es:'¿Comemos juntos?',fr:'On mange ensemble ?',side:'right'},
      {s:'Carla',es:'¡Sí! Traigo un hambre horrible.',fr:'Oui ! J\'ai une faim terrible.',side:'left'},
      {s:'Tom',es:'¡Yo también! ¡Vamos a buscar tacos!',fr:'Moi aussi ! Allons chercher des tacos !',side:'right'}
    ]}
   ],
   vocab:['¡Salimos! = On sort !','¿A dónde vamos? = On va où ?','¡Órale! = D\'accord ! / Allez ! (MX)','¡Qué padre! / ¡Está chido! = Super ! / C\'est cool !','La Condesa = Quartier branché de Mexico','Buena onda = Sympas / Bonne ambiance (MX)','Traigo hambre = J\'ai faim (traer courant en MX)'],
   quiz:[
    {q:'¿Qué significa "¡Órale!" en México?',opts:['Au revoir !','Allons-y ! / D\'accord !','C\'est nul !','Peut-être !'],ans:1},
    {q:'¿Cómo se dit "J\'ai faim" en México?',opts:['Tengo sed','Traigo sueño','Traigo hambre / tengo hambre','Tengo frío'],ans:2},
    {q:'¿Qué significa "Buena onda" en México?',opts:['Bonne vague','Sympa / Bonne ambiance','Mauvaise humeur','Grande vitesse'],ans:1}
   ]}

];

var ALL_THEMES=LEVEL1_THEMES.concat(LEVEL2_THEMES);