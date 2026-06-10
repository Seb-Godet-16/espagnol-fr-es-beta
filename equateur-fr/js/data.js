/* ========================================
   Français → Español Ecuador 🇫🇷 – Données
   Vocabulaire, quiz et dialogues
   © 2026 Sébastien Godet
======================================== */

var LEVEL1_THEMES=[
  {id:'alpha',level:1,emoji:'🔤',name:'L\'Alphabet',sub:'A, B, C… Z / El Alfabeto',type:'alpha',
   words:[
    {fr:'A',es:'a',em:'✈️'},{fr:'B',es:'bé',em:'🎈'},
    {fr:'C',es:'cé',em:'☕'},{fr:'D',es:'dé',em:'💃'},
    {fr:'E',es:'e',em:'🏫'},{fr:'F',es:'effe',em:'🌸'},
    {fr:'G',es:'jé',em:'🚉'},{fr:'H',es:'aché (muda)',em:'🏨'},
    {fr:'I',es:'i',em:'🏝️'},{fr:'J',es:'ji',em:'🌿'},
    {fr:'K',es:'ka',em:'⚖️'},{fr:'L',es:'elle',em:'🦁'},
    {fr:'M',es:'emme',em:'🏠'},{fr:'N',es:'enne',em:'🌙'},
    {fr:'O',es:'o',em:'🐦'},{fr:'P',es:'pé',em:'🍞'},
    {fr:'Q',es:'ku',em:'🏘️'},{fr:'R',es:'erre',em:'🌹'},
    {fr:'S',es:'esse',em:'☀️'},{fr:'T',es:'té',em:'🚂'},
    {fr:'U',es:'u (labios redondeados)',em:'1️⃣'},{fr:'V',es:'vé',em:'🌆'},
    {fr:'W',es:'doble vé',em:'🚃'},{fr:'X',es:'iks',em:'🎵'},
    {fr:'Y',es:'i griega',em:'🥛'},{fr:'Z',es:'zède',em:'0️⃣'}
   ],
   quiz10:[
    {q:'¿Qué letra escuchas?',audio:'B',opts:['A','B','C','D'],ans:1},
    {q:'¿Qué letra escuchas?',audio:'G',opts:['J','K','G','H'],ans:2},
    {q:'¿Qué letra escuchas?',audio:'R',opts:['A','R','L','N'],ans:1},
    {q:'¿Qué letra escuchas?',audio:'U',opts:['U','O','I','E'],ans:0},
    {q:'¿Qué letra escuchas?',audio:'W',opts:['V','W','X','Y'],ans:1},
    {q:'¿Qué letra escuchas?',audio:'Z',opts:['S','X','Z','C'],ans:2},
    {q:'¿Qué letra escuchas?',audio:'H',opts:['H','F','M','N'],ans:0},
    {q:'¿Qué letra escuchas?',audio:'K',opts:['C','G','K','Q'],ans:2},
    {q:'¿Qué letra escuchas?',audio:'Y',opts:['I','U','Y','E'],ans:2},
    {q:'¿Qué letra escuchas?',audio:'P',opts:['B','D','P','T'],ans:2}
   ]},
  {id:'pres',level:1,emoji:'🙋',name:'Se Présenter',sub:'Nom, âge, pays… / Presentarse',
   words:[
    {fr:'Le nom',es:'El apellido',em:'👨‍👩‍👧'},{fr:'Le prénom',es:'El nombre',em:'🏷️'},
    {fr:'La nationalité',es:'La nacionalidad',em:'🌍'},{fr:'L\'âge',es:'La edad',em:'🎂'},
    {fr:'La profession',es:'La profesión / el oficio',em:'💼'},{fr:'Le pays',es:'El país',em:'🗺️'},
    {fr:'Français(e)',es:'Francés / francesa',em:'🇫🇷'},{fr:'Équatorien(ne)',es:'Ecuatoriano / ecuatoriana',em:'🇪🇨'},
    {fr:'J\'habite à',es:'Vivo en',em:'🏠'},{fr:'Je suis',es:'Soy / Estoy',em:'🧑'},
    {fr:'J\'ai ... ans',es:'Tengo ... años',em:'🎈'},{fr:'Je m\'appelle',es:'Me llamo',em:'👋'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Me llamo" en francés?',opts:['Je suis','Je m\'appelle','J\'habite','J\'ai'],ans:1},
    {q:'¿Qué significa "Le nom"?',opts:['El nombre','La edad','El apellido','La profesión'],ans:2},
    {q:'¿Cómo se dice "Tengo 25 años" en francés?',opts:['Je suis 25 ans','J\'habite 25 ans','J\'ai 25 ans','Je parle 25 ans'],ans:2},
    {q:'¿Qué significa "La nationalité"?',opts:['El país','La ciudad','La profesión','La nacionalidad'],ans:3},
    {q:'¿Cómo se dice "Vivo en París" en francés?',opts:['Je suis à Paris','J\'habite à Paris','Je vais à Paris','J\'ai Paris'],ans:1},
    {q:'¿Qué significa "Le prénom"?',opts:['El apellido','El nombre','La edad','La profesión'],ans:1},
    {q:'¿Cómo se dice "Soy ecuatoriano" en francés?',opts:['Je suis français','Je suis équatorien','J\'habite Ecuador','Je parle ecuatoriano'],ans:1},
    {q:'¿Qué significa "La profession"?',opts:['La nacionalidad','El país','La profesión','La edad'],ans:2},
    {q:'¿Cómo se dice "¿Cómo te llamas?" en francés?',opts:['Quel âge as-tu ?','Comment t\'appelles-tu ?','D\'où viens-tu ?','Quelle est ta profession ?'],ans:1},
    {q:'¿Qué significa "Le pays"?',opts:['La ciudad','El continente','La calle','El país'],ans:3}
   ]},
  {id:'num',level:1,emoji:'🔢',name:'Les Nombres',sub:'Zéro à vingt / Del cero al veinte',
   words:[
    {fr:'Zéro',es:'Cero',em:'0️⃣'},{fr:'Un',es:'Uno',em:'1️⃣'},{fr:'Deux',es:'Dos',em:'2️⃣'},
    {fr:'Trois',es:'Tres',em:'3️⃣'},{fr:'Quatre',es:'Cuatro',em:'4️⃣'},{fr:'Cinq',es:'Cinco',em:'5️⃣'},
    {fr:'Six',es:'Seis',em:'6️⃣'},{fr:'Sept',es:'Siete',em:'7️⃣'},{fr:'Huit',es:'Ocho',em:'8️⃣'},
    {fr:'Neuf',es:'Nueve',em:'9️⃣'},{fr:'Dix',es:'Diez',em:'🔟'},
    {fr:'Onze',es:'Once',em:'1️⃣1️⃣'},{fr:'Douze',es:'Doce',em:'1️⃣2️⃣'},
    {fr:'Treize',es:'Trece',em:'1️⃣3️⃣'},{fr:'Quatorze',es:'Catorce',em:'1️⃣4️⃣'},
    {fr:'Quinze',es:'Quince',em:'1️⃣5️⃣'},{fr:'Seize',es:'Dieciséis',em:'1️⃣6️⃣'},
    {fr:'Dix-sept',es:'Diecisiete',em:'1️⃣7️⃣'},{fr:'Dix-huit',es:'Dieciocho',em:'1️⃣8️⃣'},
    {fr:'Dix-neuf',es:'Diecinueve',em:'1️⃣9️⃣'},{fr:'Vingt',es:'Veinte',em:'2️⃣0️⃣'}
   ],
   quiz10:[
    {q:'¿Qué número es "Cinq"?',opts:['4','6','5','7'],ans:2},
    {q:'¿Cómo se dice 12 en francés?',opts:['Onze','Douze','Treize','Dix'],ans:1},
    {q:'¿Cómo se dice 16 en francés?',opts:['Quinze','Dix-sept','Seize','Treize'],ans:2},
    {q:'¿Qué número es "Neuf"?',opts:['7','8','10','9'],ans:3},
    {q:'¿Cómo se dice 20 en francés?',opts:['Dix-neuf','Vingt','Quinze','Dix-huit'],ans:1},
    {q:'¿Qué número es "Treize"?',opts:['12','11','14','13'],ans:3},
    {q:'¿Cómo se dice 8 en francés?',opts:['Sept','Neuf','Huit','Six'],ans:2},
    {q:'¿Qué número es "Quatorze"?',opts:['15','13','14','12'],ans:2},
    {q:'¿Cómo se dice 17 en francés?',opts:['Dix-six','Dix-sept','Seize','Dix-huit'],ans:1},
    {q:'¿Qué número es "Onze"?',opts:['10','12','13','11'],ans:3}
   ]},
  {id:'col',level:1,emoji:'🎨',name:'Les Couleurs',sub:'Rouge, bleu, vert… / Los colores',
   words:[
    {fr:'Rouge',es:'Rojo',em:'❤️'},{fr:'Bleu',es:'Azul',em:'💙'},{fr:'Vert',es:'Verde',em:'💚'},
    {fr:'Jaune',es:'Amarillo',em:'💛'},{fr:'Orange',es:'Naranja',em:'🧡'},{fr:'Blanc',es:'Blanco',em:'🤍'},
    {fr:'Noir',es:'Negro',em:'🖤'},{fr:'Rose',es:'Rosado',em:'🩷'},
    {fr:'Violet',es:'Morado / violeta',em:'💜'},{fr:'Marron',es:'Café / marrón',em:'🤎'},
    {fr:'Gris',es:'Gris',em:'🩶'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Rojo" en francés?',opts:['Bleu','Rouge','Vert','Jaune'],ans:1},
    {q:'¿Qué significa "Bleu"?',opts:['Verde','Amarillo','Azul','Morado'],ans:2},
    {q:'¿Cómo se dice "Verde" en francés?',opts:['Jaune','Gris','Vert','Blanc'],ans:2},
    {q:'¿Qué significa "Noir"?',opts:['Blanco','Gris','Café','Negro'],ans:3},
    {q:'¿Cómo se dice "Amarillo" en francés?',opts:['Orange','Jaune','Rose','Violet'],ans:1},
    {q:'¿Qué significa "Rose"?',opts:['Rojo','Naranja','Rosado','Morado'],ans:2},
    {q:'¿Cómo se dice "Blanco" en francés?',opts:['Blanc','Noir','Gris','Marron'],ans:0},
    {q:'¿Qué significa "Violet"?',opts:['Azul','Verde','Rojo','Morado'],ans:3},
    {q:'¿Cómo se dice "Café / Marrón" en francés?',opts:['Gris','Marron','Noir','Rouge'],ans:1},
    {q:'¿Qué significa "Orange"?',opts:['Rojo','Amarillo','Naranja','Rosado'],ans:2}
   ]},
  {id:'nour',level:1,emoji:'🍽️',name:'La Nourriture',sub:'Pain, légumes, fruits… / La comida',
   words:[
    {fr:'Le pain',es:'El pan',em:'🍞'},{fr:'Le riz',es:'El arroz',em:'🍚'},
    {fr:'Le fromage',es:'El queso',em:'🧀'},{fr:'La viande',es:'La carne',em:'🥩'},
    {fr:'Le poulet',es:'El pollo',em:'🍗'},{fr:'Le poisson',es:'El pescado',em:'🐟'},
    {fr:'La pomme',es:'La manzana',em:'🍎'},{fr:'La banane',es:'El guineo / la banana',em:'🍌'},
    {fr:'La tomate',es:'El tomate / el riñón',em:'🍅'},{fr:'La carotte',es:'La zanahoria',em:'🥕'},
    {fr:'L\'œuf',es:'El huevo',em:'🥚'},{fr:'Le beurre',es:'La mantequilla',em:'🧈'},
    {fr:'Les fruits',es:'Las frutas',em:'🍉'},{fr:'Les légumes',es:'Las verduras / los vegetales',em:'🥦'},
    {fr:'Le bonbon',es:'El caramelo / el dulce',em:'🍬'},{fr:'Le sel',es:'La sal',em:'🧂'},
    {fr:'Le poivre',es:'La pimienta',em:'🌶️'},{fr:'Les pâtes',es:'La lasaña / los fideos',em:'🍝'},
    {fr:'La pomme de terre',es:'La papa',em:'🥔'},{fr:'Le maïs',es:'El maíz / el choclo',em:'🌽'},
    {fr:'L\'oignon',es:'La cebolla',em:'🧅'},{fr:'La salade',es:'La ensalada',em:'🥗'},
    {fr:'L\'ail',es:'El ajo',em:'🧄'},{fr:'Le concombre',es:'El pepino',em:'🥒'},
    {fr:'L\'orange',es:'La naranja',em:'🍊'},
    {fr:'Le citron',es:'El limón',em:'🍋'},{fr:'Le raisin',es:'La uva',em:'🍇'},
    {fr:'La fraise',es:'La fresa / la frutilla',em:'🍓'},{fr:'La pastèque',es:'La sandía',em:'🍉'},
    {fr:'Les cacahuètes',es:'El maní',em:'🥜'},
    {fr:'Le chocolat',es:'El chocolate',em:'🍫'},{fr:'Le miel',es:'La miel',em:'🍯'},
    {fr:'La citrouille',es:'El zapallo / el zambo',em:'🎃'},{fr:'Les haricots',es:'Los fréjoles / los porotos',em:'🫘'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El pan" en francés?',opts:['Le riz','Le pain','Le fromage','Le beurre'],ans:1},
    {q:'¿Qué significa "Le poulet"?',opts:['El pescado','La carne','El pollo','El cerdo'],ans:2},
    {q:'¿Cómo se dice "El huevo" en francés?',opts:['Le beurre','Le fromage','La carotte','L\'œuf'],ans:3},
    {q:'¿Qué significa "Les légumes"?',opts:['Las frutas','Los cereales','Las verduras','Las bebidas'],ans:2},
    {q:'¿Cómo se dice "La manzana" en francés?',opts:['La banane','La fraise','La pomme','L\'orange'],ans:2},
    {q:'¿Cómo se llama "el guineo" en francés?',opts:['La pomme','La fraise','La banane','L\'orange'],ans:2},
    {q:'¿Cómo se llama "el zapallo" en francés?',opts:['La carotte','La citrouille','Le maïs','L\'oignon'],ans:1},
    {q:'¿Cómo se llaman "los fréjoles" en francés?',opts:['Les pâtes','Les cacahuètes','Les haricots','Le riz'],ans:2},
    {q:'¿Cómo se llama "la sandía" en francés?',opts:['La fraise','La pastèque','Le raisin','L\'orange'],ans:1},
    {q:'¿Cómo se dice "El maní" en francés?',opts:['Les amandes','Les noix','Les cacahuètes','Les noisettes'],ans:2},
    {q:'¿Cómo se dice "La zanahoria" en francés?',opts:['Le concombre','La carotte','La tomate','L\'oignon'],ans:1},
    {q:'¿Cómo se dice "La fresa" en francés?',opts:['La banane','La pastèque','La fraise','Le raisin'],ans:2}
   ]},
  {id:'bois',level:1,emoji:'🥤',name:'Les Boissons',sub:'Eau, café, jus… / Las bebidas',
   words:[
    {fr:'L\'eau',es:'El agua',em:'💧'},{fr:'Le café',es:'El café',em:'☕'},{fr:'Le thé',es:'El té',em:'🍵'},
    {fr:'Le jus',es:'El jugo',em:'🧃'},{fr:'Le lait',es:'La leche',em:'🥛'},{fr:'Le vin',es:'El vino',em:'🍷'},
    {fr:'La bière',es:'La cerveza',em:'🍺'},{fr:'Le soda',es:'La gaseosa / el refresco',em:'🥤'},
    {fr:'L\'eau chaude',es:'El agua caliente',em:'♨️'},{fr:'L\'eau froide',es:'El agua fría',em:'🧊'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El agua" en francés?',opts:['Le lait','Le jus','L\'eau','Le thé'],ans:2},
    {q:'¿Qué significa "Le café"?',opts:['El té','El café','El jugo','La leche'],ans:1},
    {q:'¿Cómo se dice "La leche" en francés?',opts:['Le lait','L\'eau','Le thé','Le jus'],ans:0},
    {q:'¿Qué significa "Le jus"?',opts:['El vino','La cerveza','La gaseosa','El jugo'],ans:3},
    {q:'¿Cómo se dice "El vino" en francés?',opts:['La bière','Le soda','Le vin','Le café'],ans:2},
    {q:'¿Qué significa "La bière"?',opts:['El vino','La cerveza','La gaseosa','El jugo'],ans:1},
    {q:'¿Cómo se dice "El té" en francés?',opts:['Le café','Le thé','Le lait','L\'eau'],ans:1},
    {q:'¿Qué significa "L\'eau froide"?',opts:['El agua caliente','El agua mineral','El agua fría','El hielo'],ans:2}
   ]},
  {id:'fam',level:1,emoji:'👨‍👩‍👧',name:'La Famille',sub:'Père, mère, fils… / La familia',
   words:[
    {fr:'Le père',es:'El papá / el padre',em:'👨'},{fr:'La mère',es:'La mamá / la madre',em:'👩'},
    {fr:'Le fils',es:'El hijo',em:'👦'},{fr:'La fille',es:'La hija',em:'👧'},
    {fr:'Le frère',es:'El hermano',em:'🧑'},{fr:'La sœur',es:'La hermana',em:'👧'},
    {fr:'Le grand-père',es:'El abuelo',em:'👴'},{fr:'La grand-mère',es:'La abuela',em:'👵'},
    {fr:'Le mari',es:'El esposo / el marido',em:'💍'},{fr:'La femme',es:'La esposa / la mujer',em:'💑'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El padre" en francés?',opts:['Le mari','Le fils','Le père','Le frère'],ans:2},
    {q:'¿Qué significa "La mère"?',opts:['La hija','La hermana','La abuela','La madre'],ans:3},
    {q:'¿Cómo se dice "El hermano" en francés?',opts:['Le fils','Le frère','Le père','Le mari'],ans:1},
    {q:'¿Qué significa "La sœur"?',opts:['La madre','La abuela','La hermana','La hija'],ans:2},
    {q:'¿Cómo se dice "El abuelo" en francés?',opts:['Le père','Le mari','Le fils','Le grand-père'],ans:3},
    {q:'¿Qué significa "La grand-mère"?',opts:['La madre','La abuela','La hermana','La hija'],ans:1},
    {q:'¿Cómo se dice "La hija" en francés?',opts:['La sœur','La femme','La fille','La mère'],ans:2},
    {q:'¿Qué significa "Le mari"?',opts:['El hijo','El hermano','El abuelo','El esposo'],ans:3}
   ]},
  {id:'emot',level:1,emoji:'😄',name:'Les Émotions',sub:'Joyeux, triste… / Las emociones',
   words:[
    {fr:'Joyeux / Joyeuse',es:'Alegre / contento',em:'😄'},{fr:'Triste',es:'Triste',em:'😢'},
    {fr:'Fatigué(e)',es:'Cansado / cansada',em:'😴'},{fr:'Fâché(e)',es:'Enojado / bravo',em:'😠'},
    {fr:'Stressé(e)',es:'Estresado / agobiado',em:'😰'},{fr:'Malade',es:'Enfermo / malito',em:'🤒'},
    {fr:'Content(e)',es:'Contento / feliz',em:'😊'},{fr:'Inquiet / Inquiète',es:'Preocupado / angustiado',em:'😟'},
    {fr:'Amoureux / Amoureuse',es:'Enamorado / enamorada',em:'😍'},
    {fr:'Déçu(e)',es:'Decepcionado / frustrado',em:'😞'},
    {fr:'Avoir peur',es:'Tener miedo',em:'😨'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Alegre" en francés?',opts:['Triste','Fatigué','Joyeux','Malade'],ans:2},
    {q:'¿Qué significa "Triste"?',opts:['Cansado','Triste','Enojado','Enfermo'],ans:1},
    {q:'¿Cómo se dice "Cansado" en francés?',opts:['Stressé','Malade','Inquiet','Fatigué'],ans:3},
    {q:'¿Qué significa "Malade"?',opts:['Triste','Preocupado','Enfermo','Estresado'],ans:2},
    {q:'¿Cómo se dice "Enojado" en francés?',opts:['Déçu','Fâché','Inquiet','Content'],ans:1},
    {q:'¿Qué significa "Content(e)"?',opts:['Alegre','Enamorado','Contento','Asustado'],ans:2},
    {q:'¿Cómo se dice "Preocupado" en francés?',opts:['Stressé','Amoureux','Inquiet','Déçu'],ans:2},
    {q:'¿Qué significa "Avoir peur"?',opts:['Tener hambre','Tener miedo','Tener frío','Tener sueño'],ans:1}
   ]},
  {id:'log',level:1,emoji:'🏠',name:'Le Logement',sub:'Salon, cuisine… / La vivienda',
   words:[
    {fr:'Le salon',es:'La sala',em:'🛋️'},{fr:'La cuisine',es:'La cocina',em:'🍳'},
    {fr:'La chambre',es:'La habitación / el cuarto',em:'🛏️'},{fr:'La salle de bain',es:'El baño / la ducha',em:'🚿'},
    {fr:'Les toilettes',es:'El baño / el inodoro',em:'🚽'},{fr:'L\'entrée',es:'La entrada',em:'🚪'},
    {fr:'Le garage',es:'El garaje',em:'🚗'},
    {fr:'La salle à manger',es:'El comedor',em:'🍽️'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La sala" en francés?',opts:['La cuisine','La chambre','Le salon','Le garage'],ans:2},
    {q:'¿Qué significa "La cuisine"?',opts:['El comedor','La cocina','El baño','La sala'],ans:1},
    {q:'¿Cómo se dice "La habitación" en francés?',opts:['Le salon','La chambre','L\'entrée','Le garage'],ans:1},
    {q:'¿Qué significa "La salle de bain"?',opts:['El inodoro','El garaje','El baño','El comedor'],ans:2},
    {q:'¿Cómo se dice "El comedor" en francés?',opts:['Le salon','La salle à manger','La cuisine','La chambre'],ans:1}
   ]},
  {id:'veth',level:1,emoji:'👗',name:'Les Vêtements',sub:'T-shirt, pantalon… / La ropa',
   words:[
    {fr:'Le t-shirt',es:'La camiseta',em:'👕'},{fr:'Le pantalon',es:'El pantalón',em:'👖'},
    {fr:'La robe',es:'El vestido',em:'👗'},{fr:'La veste',es:'La chaqueta / el saco',em:'🧥'},
    {fr:'Les chaussures',es:'Los zapatos',em:'👟'},{fr:'Le chapeau',es:'El sombrero',em:'🎩'},
    {fr:'Le manteau',es:'El abrigo',em:'🧥'},{fr:'L\'écharpe',es:'La bufanda',em:'🧣'},
    {fr:'Le sac à main',es:'El bolso / la cartera',em:'👜'},{fr:'La chemise',es:'La camisa',em:'👔'},
    {fr:'La casquette',es:'La gorra',em:'🧢'},{fr:'Les chaussettes',es:'Los calcetines / las medias',em:'🧦'},
    {fr:'Les gants',es:'Los guantes',em:'🧤'},{fr:'Le short',es:'El short / el bermuda',em:'🩳'},
    {fr:'Le pull',es:'El suéter / el buzo',em:'🧥'},
    {fr:'Le maillot de bain',es:'El traje de baño',em:'🩱'},
    {fr:'La jupe',es:'La falda',em:'👗'},{fr:'La montre',es:'El reloj de muñeca',em:'⌚'},
    {fr:'Le slip',es:'El calzoncillo',em:'🩲'},
    {fr:'Le bonnet',es:'El gorro de lana',em:'🎿'},
    {fr:'Le soutien-gorge',es:'El brasier / el sostén',em:'👙'},
    {fr:'Le boxer',es:'El bóxer',em:'🩳'},
    {fr:'La culotte',es:'La calzoneta / la ropa interior',em:'🩲'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La camiseta" en francés?',opts:['Le pull','La chemise','Le t-shirt','La veste'],ans:2},
    {q:'¿Qué significa "Le pantalon"?',opts:['El short','El pantalón','La falda','El vestido'],ans:1},
    {q:'¿Cómo se dice "Los zapatos" en francés?',opts:['Les chaussettes','Les gants','Les chaussures','Le chapeau'],ans:2},
    {q:'¿Qué significa "Le manteau"?',opts:['La bufanda','La chaqueta','El gorro','El abrigo'],ans:3},
    {q:'¿Cómo se dice "La gorra" en francés?',opts:['Le chapeau','La casquette','Le bonnet','Le pull'],ans:1},
    {q:'¿Qué significa "L\'écharpe"?',opts:['Los guantes','El abrigo','La bufanda','El gorro'],ans:2},
    {q:'¿Cómo se dice "El vestido" en francés?',opts:['La jupe','La robe','La veste','Le pull'],ans:1},
    {q:'¿Qué significa "Les chaussettes"?',opts:['Los zapatos','Los guantes','Los calcetines','El traje de baño'],ans:2}
   ]},
  {id:'corps',level:1,emoji:'🧍',name:'Le Corps',sub:'Tête, bras, pied… / El cuerpo',
   words:[
    {fr:'La tête',es:'La cabeza',em:'🗣️'},{fr:'Les bras / Le bras',es:'El brazo / los brazos',em:'💪'},
    {fr:'La main / Les mains',es:'La mano / las manos',em:'✋'},
    {fr:'La jambe / Les jambes',es:'La pierna / las piernas',em:'🦵'},
    {fr:'Le pied / Les pieds',es:'El pie / los pies',em:'🦶'},
    {fr:'L\'œil / Les yeux',es:'El ojo / los ojos',em:'👀'},
    {fr:'Le dos',es:'La espalda',em:'🔙'},{fr:'Le ventre',es:'La barriga / el estómago',em:'🫃'},
    {fr:'Le cerveau',es:'El cerebro',em:'🧠'},{fr:'L\'oreille / Les oreilles',es:'La oreja / las orejas',em:'👂'},
    {fr:'Le nez',es:'La nariz',em:'👃'},{fr:'La bouche',es:'La boca',em:'👄'},
    {fr:'La dent / Les dents',es:'El diente / los dientes',em:'🦷'},
    {fr:'L\'os / Les os',es:'El hueso / los huesos',em:'🦴'},
    {fr:'Le cœur',es:'El corazón',em:'❤️'},{fr:'Le doigt / Les doigts',es:'El dedo / los dedos',em:'☝️'},
    {fr:'La langue',es:'La lengua',em:'👅'},{fr:'Les lèvres',es:'Los labios',em:'💋'},
    {fr:'Les cheveux',es:'El cabello / el pelo',em:'💇‍♂️'},{fr:'Le cou',es:'El cuello',em:'🧣'},
    {fr:'Les fesses',es:'Las nalgas / los glúteos',em:'🍑'},{fr:'L\'ongle / Les ongles',es:'La uña / las uñas',em:'💅'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La cabeza" en francés?',opts:['Le nez','La bouche','La tête','Le cou'],ans:2},
    {q:'¿Qué significa "Les yeux"?',opts:['Las orejas','La nariz','Los labios','Los ojos'],ans:3},
    {q:'¿Cómo se dice "La mano" en francés?',opts:['Le pied','La jambe','Le bras','La main'],ans:3},
    {q:'¿Qué significa "Le nez"?',opts:['La boca','La nariz','La oreja','El cuello'],ans:1},
    {q:'¿Cómo se dice "La pierna" en francés?',opts:['Le bras','La jambe','Le pied','Le dos'],ans:1},
    {q:'¿Qué significa "Le cerveau"?',opts:['El corazón','El estómago','El cerebro','El hueso'],ans:2},
    {q:'¿Cómo se dice "Los dientes" en francés?',opts:['Los labios','La lengua','Les dents','Las orejas'],ans:2},
    {q:'¿Qué significa "Le cœur"?',opts:['El cerebro','El corazón','El hueso','La espalda'],ans:1}
   ]},
  {id:'anim',level:1,emoji:'🐘',name:'Les Animaux',sub:'Chat, chien, cheval… / Los animales',
   words:[
    {fr:'Le chien',es:'El perro',em:'🐶'},{fr:'Le chat',es:'El gato',em:'🐱'},
    {fr:'L\'oiseau',es:'El pájaro / el ave',em:'🐦'},{fr:'Le poisson',es:'El pez / el pescado',em:'🐟'},
    {fr:'Le cheval',es:'El caballo',em:'🐴'},{fr:'La vache',es:'La vaca',em:'🐮'},
    {fr:'La poule',es:'La gallina',em:'🐔'},{fr:'Le lapin',es:'El conejo',em:'🐰'},
    {fr:'L\'âne',es:'El burro',em:'🫏'},{fr:'Le cochon',es:'El chancho / el cerdo',em:'🐷'},
    {fr:'L\'éléphant',es:'El elefante',em:'🐘'},{fr:'Le tigre',es:'El tigre',em:'🐯'},
    {fr:'L\'ours',es:'El oso',em:'🐻'},{fr:'Le dauphin',es:'El delfín',em:'🐬'},
    {fr:'La baleine',es:'La ballena',em:'🐳'},{fr:'L\'aigle',es:'El águila',em:'🦅'},
    {fr:'La grenouille',es:'La rana',em:'🐸'},{fr:'Le serpent',es:'La serpiente / la culebra',em:'🐍'},
    {fr:'Le canard',es:'El pato',em:'🦆'},{fr:'Le pingouin',es:'El pingüino',em:'🐧'},
    {fr:'Le papillon',es:'La mariposa',em:'🦋'},{fr:'L\'araignée',es:'La araña',em:'🕷️'},
    {fr:'Le moustique',es:'El mosquito / el zancudo',em:'🦟'},
    {fr:'La fourmi',es:'La hormiga',em:'🐜'},{fr:'Le lézard',es:'El lagarto / la lagartija',em:'🦎'},
    {fr:'Le poulet',es:'El pollo (carne)',em:'🍗'},{fr:'Le coq',es:'El gallo',em:'🐓'},
    {fr:'La chèvre',es:'El chivo / la cabra',em:'🐐'},{fr:'L\'agneau',es:'El cordero',em:'🐑'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El perro" en francés?',opts:['Le chat','Le cheval','Le chien','Le lapin'],ans:2},
    {q:'¿Qué significa "Le chat"?',opts:['El perro','El gato','El conejo','El pájaro'],ans:1},
    {q:'¿Cómo se dice "El caballo" en francés?',opts:['La vache','Le cheval','L\'ours','Le cochon'],ans:1},
    {q:'¿Qué significa "La poule"?',opts:['El pato','El gallo','La gallina','El conejo'],ans:2},
    {q:'¿Cómo se dice "El elefante" en francés?',opts:['Le tigre','La baleine','L\'éléphant','L\'ours'],ans:2},
    {q:'¿Qué emoji corresponde al "âne" (burro)?',opts:['🐷','🐴','🫏','🐐'],ans:2},
    {q:'¿Cómo se dice "La mariposa" en francés?',opts:['La fourmi','Le papillon','L\'araignée','Le moustique'],ans:1},
    {q:'¿Qué significa "Le serpent"?',opts:['El lagarto','La rana','La serpiente','El insecto'],ans:2},
    {q:'¿Cómo se dice "El mosquito" en francés?',opts:['La fourmi','Le papillon','L\'araignée','Le moustique'],ans:3},
    {q:'¿Qué significa "L\'agneau"?',opts:['La vaca','El chancho','El cordero','La cabra'],ans:2},
    {q:'¿Cómo se dice "El gallo" en francés?',opts:['La poule','Le poulet','Le coq','Le canard'],ans:2},
    {q:'¿Qué significa "Le dauphin"?',opts:['La ballena','El tiburón','El delfín','El pez'],ans:2}
   ]},
  {id:'verb',level:1,emoji:'📝',name:'Les Verbes Principaux',sub:'Être, avoir, aller… / Los verbos',
   words:[
    {fr:'Je suis',es:'Soy / Estoy (être)',em:'🧑'},{fr:'J\'ai',es:'Tengo (avoir)',em:'🤲'},
    {fr:'Je parle',es:'Hablo (parler)',em:'🗣️'},{fr:'J\'habite',es:'Vivo (habiter)',em:'🏠'},
    {fr:'Je vais',es:'Voy (aller)',em:'🚶'},{fr:'Je mange',es:'Como (manger)',em:'🍽️'},
    {fr:'Je bois',es:'Bebo / tomo (boire)',em:'🥤'},{fr:'J\'aime',es:'Me gusta / quiero (aimer)',em:'❤️'},
    {fr:'Je cours',es:'Corro (courir)',em:'🏃‍♂️'},{fr:'Je dors',es:'Duermo (dormir)',em:'😴'},
    {fr:'Je marche',es:'Camino (marcher)',em:'🚶‍♂️'},{fr:'Je lis',es:'Leo (lire)',em:'📖'},
    {fr:'J\'écris',es:'Escribo (écrire)',em:'✍️'},{fr:'J\'écoute',es:'Escucho (écouter)',em:'🎧'},
    {fr:'Je regarde',es:'Miro / veo (regarder)',em:'👀'},{fr:'J\'apprends',es:'Aprendo (apprendre)',em:'🧠'},
    {fr:'J\'achète',es:'Compro (acheter)',em:'🛒'},{fr:'Je vends',es:'Vendo (vendre)',em:'💰'},
    {fr:'Je donne',es:'Doy (donner)',em:'🤲'},{fr:'J\'appelle',es:'Llamo (appeler)',em:'📞'},
    {fr:'Je cuisine',es:'Cocino (cuisiner)',em:'🍳'},{fr:'Je nettoie',es:'Limpio (nettoyer)',em:'🧹'},
    {fr:'Je me lave',es:'Me baño / me lavo (se laver)',em:'🧼'},{fr:'Je prends',es:'Tomo / cojo (prendre)',em:'🤲'},
    {fr:'Je pense',es:'Pienso (penser)',em:'🤔'},{fr:'Je conduis',es:'Manejo / conduzco (conduire)',em:'🚗'},
    {fr:'Je souris',es:'Sonrío (sourire)',em:'😊'},{fr:'Je pars',es:'Me voy (partir)',em:'🚪'},
    {fr:'Je paie',es:'Pago (payer)',em:'💳'},{fr:'J\'arrive',es:'Llego (arriver)',em:'🛬'},
    {fr:'Je demande',es:'Pregunto / pido (demander)',em:'🙋‍♂️'},
    {fr:'Je cherche',es:'Busco (chercher)',em:'🔍'},
    {fr:'Je travaille',es:'Trabajo (travailler)',em:'💼'},
    {fr:'J\'offre',es:'Ofrezco / regalo (offrir)',em:'🎁'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Yo tengo" en francés?',opts:['Je suis','Je vais','J\'ai','Je parle'],ans:2},
    {q:'¿Qué significa "Je mange"?',opts:['Bebo','Como','Duermo','Camino'],ans:1},
    {q:'¿Cómo se dice "Yo voy" en francés?',opts:['Je suis','J\'ai','Je viens','Je vais'],ans:3},
    {q:'¿Qué significa "Je parle"?',opts:['Escucho','Leo','Hablo','Miro'],ans:2},
    {q:'¿Cómo se dice "Yo duermo" en francés?',opts:['Je cours','Je dors','Je marche','Je lis'],ans:1},
    {q:'¿Qué significa "J\'achète"?',opts:['Vendo','Busco','Pago','Compro'],ans:3},
    {q:'¿Cómo se dice "Yo trabajo" en francés?',opts:['Je nettoie','Je cuisine','Je travaille','Je conduis'],ans:2},
    {q:'¿Qué significa "Je cherche"?',opts:['Encuentro','Busco','Pregunto','Compro'],ans:1},
    {q:'¿Cómo se dice "Yo pago" en francés?',opts:['Je donne','Je prends','Je vends','Je paie'],ans:3},
    {q:'¿Qué significa "J\'apprends"?',opts:['Enseño','Escucho','Aprendo','Leo'],ans:2},
    {q:'¿Cómo se dice "Yo manejo" en francés?',opts:['Je cours','Je marche','Je conduis','Je pars'],ans:2},
    {q:'¿Qué significa "J\'offre"?',opts:['Compro','Busco','Regalo / ofrezco','Vendo'],ans:2}
   ]},
  {id:'pays',level:1,emoji:'🌍',name:'Les Pays',sub:'France, Équateur… / Los países',
   words:[
    {fr:'La France',es:'Francia',em:'🇫🇷'},{fr:'L\'Équateur',es:'Ecuador',em:'🇪🇨'},
    {fr:'L\'Espagne',es:'España',em:'🇪🇸'},{fr:'L\'Italie',es:'Italia',em:'🇮🇹'},
    {fr:'Le Canada',es:'Canadá',em:'🇨🇦'},{fr:'Le Brésil',es:'Brasil',em:'🇧🇷'},
    {fr:'La Colombie',es:'Colombia',em:'🇨🇴'},{fr:'L\'Argentine',es:'Argentina',em:'🇦🇷'},
    {fr:'Le Mexique',es:'México',em:'🇲🇽'},{fr:'Le Chili',es:'Chile',em:'🇨🇱'},
    {fr:'Le Pérou',es:'Perú',em:'🇵🇪'},{fr:'Le Venezuela',es:'Venezuela',em:'🇻🇪'},
    {fr:'La Bolivie',es:'Bolivia',em:'🇧🇴'},{fr:'Le Paraguay',es:'Paraguay',em:'🇵🇾'},
    {fr:'L\'Uruguay',es:'Uruguay',em:'🇺🇾'},{fr:'Cuba',es:'Cuba',em:'🇨🇺'},
    {fr:'La République Dominicaine',es:'República Dominicana',em:'🇩🇴'},
    {fr:'La Russie',es:'Rusia',em:'🇷🇺'},{fr:'La Chine',es:'China',em:'🇨🇳'},
    {fr:'Les États-Unis',es:'Estados Unidos',em:'🇺🇸'},
    {fr:'Le Japon',es:'Japón',em:'🇯🇵'},{fr:'L\'Éthiopie',es:'Etiopía',em:'🇪🇹'},
    {fr:'L\'Allemagne',es:'Alemania',em:'🇩🇪'},{fr:'Le Royaume-Uni',es:'Reino Unido',em:'🇬🇧'},
    {fr:'Le Portugal',es:'Portugal',em:'🇵🇹'},{fr:'La Belgique',es:'Bélgica',em:'🇧🇪'},
    {fr:'La Suisse',es:'Suiza',em:'🇨🇭'},{fr:'L\'Afrique du Sud',es:'Sudáfrica',em:'🇿🇦'},
    {fr:'Le Maroc',es:'Marruecos',em:'🇲🇦'},{fr:'Le Kenya',es:'Kenia',em:'🇰🇪'},
    {fr:'L\'Égypte',es:'Egipto',em:'🇪🇬'},{fr:'Le Sénégal',es:'Senegal',em:'🇸🇳'},
    {fr:'L\'Arabie saoudite',es:'Arabia Saudita',em:'🇸🇦'},{fr:'Israël',es:'Israel',em:'🇮🇱'},
    {fr:'L\'Inde',es:'India',em:'🇮🇳'},{fr:'La Corée du Sud',es:'Corea del Sur',em:'🇰🇷'},
    {fr:'La Turquie',es:'Turquía',em:'🇹🇷'},{fr:'La Nouvelle-Zélande',es:'Nueva Zelanda',em:'🇳🇿'},
    {fr:'L\'Australie',es:'Australia',em:'🇦🇺'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Francia" en francés?',opts:['La Belgique','La France','La Suisse','Le Portugal'],ans:1},
    {q:'¿Qué significa "L\'Allemagne"?',opts:['Austria','Países Bajos','Alemania','Dinamarca'],ans:2},
    {q:'¿Cómo se dice "Brasil" en francés?',opts:['Le Pérou','Le Chili','Le Brésil','La Bolivie'],ans:2},
    {q:'¿Qué significa "Le Royaume-Uni"?',opts:['Irlanda','Reino Unido','Escocia','Dinamarca'],ans:1},
    {q:'¿Cómo se dice "Marruecos" en francés?',opts:['L\'Égypte','Le Sénégal','Le Maroc','L\'Afrique du Sud'],ans:2},
    {q:'¿Qué significa "La Corée du Sud"?',opts:['Japón','China','Vietnam','Corea del Sur'],ans:3},
    {q:'¿Cómo se dice "India" en francés?',opts:['L\'Iran','L\'Inde','L\'Irak','L\'Indonésie'],ans:1},
    {q:'¿Qué significa "La Suisse"?',opts:['Suecia','Eslovenia','Suiza','Eslovaquia'],ans:2},
    {q:'¿Cómo se dice "Turquía" en francés?',opts:['La Tunisie','La Thaïlande','La Turquie','La Tanzanie'],ans:2},
    {q:'¿Qué significa "La Nouvelle-Zélande"?',opts:['Nueva Caledonia','Nueva Guinea','Nueva Zelanda','Nueva Escocia'],ans:2},
    {q:'¿Cómo se dice "Colombia" en francés?',opts:['La Bolivie','La Colombie','Le Chili','L\'Équateur'],ans:1},
    {q:'¿Qué significa "Les États-Unis"?',opts:['Canadá','México','Estados Unidos','Puerto Rico'],ans:2}
   ]},
  {id:'plan',level:1,emoji:'🌿',name:'Les Plantes',sub:'Fleur, arbre, forêt… / Las plantas',
   words:[
    {fr:'La fleur',es:'La flor',em:'🌸'},{fr:'L\'arbre',es:'El árbol',em:'🌳'},
    {fr:'L\'herbe',es:'El pasto / la hierba',em:'🌿'},{fr:'La feuille',es:'La hoja',em:'🍃'},
    {fr:'La rose',es:'La rosa',em:'🌹'},{fr:'La forêt',es:'El bosque / la selva',em:'🌲'},
    {fr:'Le jardin',es:'El jardín',em:'🏡'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La flor" en francés?',opts:['La feuille','La fleur','L\'herbe','La rose'],ans:1},
    {q:'¿Qué significa "L\'arbre"?',opts:['La hoja','El pasto','El árbol','La flor'],ans:2},
    {q:'¿Cómo se dice "La rosa" en francés?',opts:['La fleur','La feuille','L\'herbe','La rose'],ans:3},
    {q:'¿Qué significa "La forêt"?',opts:['El jardín','El bosque','El campo','El parque'],ans:1},
    {q:'¿Cómo se dice "El jardín" en francés?',opts:['La forêt','L\'arbre','Le jardin','La fleur'],ans:2}
   ]},
  {id:'salut',level:1,emoji:'👋',name:'Les Salutations',sub:'Bonjour, merci… / Los saludos',
   words:[
    {fr:'Bonjour',es:'Buenos días / buen día',em:'🌅'},{fr:'Bonsoir',es:'Buenas tardes / noches',em:'🌆'},
    {fr:'Salut',es:'Hola (informal)',em:'👋'},{fr:'Au revoir',es:'Adiós / chao',em:'👋'},
    {fr:'À bientôt',es:'Hasta luego / hasta pronto',em:'⏱️'},{fr:'Bonne nuit',es:'Buenas noches',em:'🌙'},
    {fr:'Merci',es:'Gracias',em:'🙏'},{fr:'S\'il vous plaît',es:'Por favor (formal)',em:'🤝'},
    {fr:'Pardon',es:'Perdón / disculpe',em:'🙇'},{fr:'Oui',es:'Sí',em:'✅'},
    {fr:'Non',es:'No',em:'❌'},{fr:'Comment ça va ?',es:'¿Cómo estás? / ¿Qué tal?',em:'🤗'},
    {fr:'Je vais bien, merci',es:'Estoy bien, gracias',em:'😊'},
    {fr:'Super !',es:'¡Qué bacán! / ¡Genial!',em:'🌟'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Buenos días" en francés?',opts:['Salut','Bonsoir','Bonjour','Bonne nuit'],ans:2},
    {q:'¿Qué significa "Au revoir"?',opts:['Hasta luego','Adiós','Hola','Buenas noches'],ans:1},
    {q:'¿Cómo se dice "Gracias" en francés?',opts:['S\'il vous plaît','Pardon','Merci','Oui'],ans:2},
    {q:'¿Qué significa "À bientôt"?',opts:['Adiós para siempre','Hasta pronto','Buenas noches','Hola'],ans:1},
    {q:'¿Cómo se dice "Por favor" (formal) en francés?',opts:['Merci','Pardon','S\'il vous plaît','Oui'],ans:2},
    {q:'¿Qué significa "Bonsoir"?',opts:['Buenos días','Buenas tardes/noches','Buenas noches (al dormir)','Hasta luego'],ans:1},
    {q:'¿Qué significa "Comment ça va ?"?',opts:['¿Dónde estás?','¿Cómo te llamas?','¿Cómo estás?','¿Cuántos años tienes?'],ans:2},
    {q:'¿Cómo se dice "Sí" en francés?',opts:['Non','Oui','Pardon','Merci'],ans:1}
   ]},
  {id:'met',level:1,emoji:'💼',name:'Les Professions',sub:'Médecin, cuisinier… / Las profesiones',
   words:[
    {fr:'Le professeur',es:'El/la profesor(a)',em:'👩‍🏫'},{fr:'Le médecin',es:'El/la médico / el doctor',em:'👨‍⚕️'},
    {fr:'Le cuisinier',es:'El/la cocinero(a)',em:'👨‍🍳'},{fr:'L\'étudiant(e)',es:'El/la estudiante',em:'🎓'},
    {fr:'Le vendeur',es:'El/la vendedor(a)',em:'🏪'},{fr:'Le serveur',es:'El/la mesero(a)',em:'🍽️'},
    {fr:'Le chauffeur',es:'El/la chofer / el taxista',em:'🚗'},{fr:'L\'infirmier(ère)',es:'El/la enfermero(a)',em:'💉'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El médico" en francés?',opts:['Le professeur','Le médecin','L\'infirmier','Le cuisinier'],ans:1},
    {q:'¿Qué significa "Le professeur"?',opts:['El estudiante','El director','El profesor','El conserje'],ans:2},
    {q:'¿Cómo se dice "El cocinero" en francés?',opts:['Le serveur','Le vendeur','Le chauffeur','Le cuisinier'],ans:3},
    {q:'¿Qué significa "L\'étudiant(e)"?',opts:['El profesor','El estudiante','El médico','El vendedor'],ans:1},
    {q:'¿Cómo se dice "El enfermero" en francés?',opts:['Le médecin','Le professeur','L\'infirmier','Le serveur'],ans:2}
   ]},
  {id:'trans',level:1,emoji:'🚌',name:'Les Transports',sub:'Bus, train, vélo… / Los transportes',
   words:[
    {fr:'Le bus',es:'El autobús / el bus',em:'🚌'},{fr:'Le train',es:'El tren',em:'🚂'},
    {fr:'La voiture',es:'El carro / el auto',em:'🚗'},{fr:'Le vélo',es:'La bicicleta',em:'🚴'},
    {fr:'Le métro',es:'El metro',em:'🚇'},{fr:'Le taxi',es:'El taxi',em:'🚕'},
    {fr:'L\'avion',es:'El avión',em:'✈️'},{fr:'Le ticket',es:'El ticket / el pasaje',em:'🎫'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El autobús" en francés?',opts:['Le train','Le métro','Le bus','Le taxi'],ans:2},
    {q:'¿Qué significa "La voiture"?',opts:['El tren','La moto','El carro','El camión'],ans:2},
    {q:'¿Cómo se dice "El avión" en francés?',opts:['Le bateau','L\'avion','Le vélo','Le métro'],ans:1},
    {q:'¿Qué significa "Le vélo"?',opts:['El carro','La moto','El tren','La bicicleta'],ans:3},
    {q:'¿Cómo se dice "El metro" en francés?',opts:['Le bus','Le taxi','Le métro','Le train'],ans:2}
   ]},
  {id:'lieux',level:1,emoji:'🏙️',name:'Les Lieux Importants',sub:'Marché, hôpital… / Los lugares',
   words:[
    {fr:'Le supermarché',es:'El supermercado',em:'🛒'},{fr:'L\'école',es:'La escuela / el colegio',em:'🏫'},
    {fr:'L\'hôpital',es:'El hospital',em:'🏥'},{fr:'Le parc',es:'El parque / la plaza',em:'🌳'},
    {fr:'La banque',es:'El banco',em:'🏦'},{fr:'La pharmacie',es:'La farmacia',em:'💊'},
    {fr:'L\'église',es:'La iglesia',em:'⛪'},{fr:'La mairie',es:'El municipio / la alcaldía',em:'🏛️'},
    {fr:'Le champ',es:'El campo / el sembrado',em:'🌾'},{fr:'La rivière',es:'El río / la quebrada',em:'🏞️'},
    {fr:'La rue',es:'La calle / la avenida',em:'🛣️'},{fr:'La ville',es:'La ciudad',em:'🏙️'},
    {fr:'La montagne',es:'La montaña / el cerro',em:'⛰️'},{fr:'L\'océan',es:'El océano / el mar',em:'🌊'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La farmacia" en francés?',opts:['La banque','L\'hôpital','La pharmacie','Le supermarché'],ans:2},
    {q:'¿Qué significa "L\'école"?',opts:['La biblioteca','La escuela','El instituto','La universidad'],ans:1},
    {q:'¿Cómo se dice "El hospital" en francés?',opts:['La pharmacie','La mairie','L\'hôpital','La banque'],ans:2},
    {q:'¿Qué significa "La mairie"?',opts:['La iglesia','El tribunal','La alcaldía','El mercado'],ans:2},
    {q:'¿Cómo se dice "El río" en francés?',opts:['L\'océan','La montagne','Le champ','La rivière'],ans:3},
    {q:'¿Qué significa "Le supermarché"?',opts:['El mercado','El supermercado','La tienda','La tienda de barrio'],ans:1},
    {q:'¿Cómo se dice "La ciudad" en francés?',opts:['La rue','Le champ','La ville','La montagne'],ans:2},
    {q:'¿Qué significa "La banque"?',opts:['La farmacia','El banco','La caja','La oficina'],ans:1}
   ]},
  {id:'orient',level:1,emoji:'🧭',name:'S\'Orienter',sub:'Gauche, droite… / Orientarse',
   words:[
    {fr:'À gauche',es:'A la izquierda',em:'⬅️'},{fr:'À droite',es:'A la derecha',em:'➡️'},
    {fr:'Tout droit',es:'Todo recto / derecho',em:'⬆️'},{fr:'À côté',es:'Al lado',em:'↔️'},
    {fr:'En face',es:'Frente / enfrente',em:'🔄'},{fr:'Loin',es:'Lejos',em:'🌅'},
    {fr:'Près',es:'Cerca',em:'📍'},{fr:'Le plan',es:'El mapa / el plano',em:'🗺️'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "A la izquierda" en francés?',opts:['À droite','Tout droit','À gauche','En face'],ans:2},
    {q:'¿Qué significa "À droite"?',opts:['A la izquierda','Todo recto','Al lado','A la derecha'],ans:3},
    {q:'¿Cómo se dice "Todo recto" en francés?',opts:['À gauche','Tout droit','En face','À côté'],ans:1},
    {q:'¿Qué significa "En face"?',opts:['Al lado','Detrás','Enfrente','Cerca'],ans:2},
    {q:'¿Cómo se dice "Cerca" en francés?',opts:['Loin','À côté','Près','En face'],ans:2}
   ]},
  {id:'sante',level:1,emoji:'🏥',name:'La Santé',sub:'Médecin, pharmacie… / La salud',
   words:[
    {fr:'Le médecin',es:'El médico / el doctor',em:'👨‍⚕️'},{fr:'L\'hôpital',es:'El hospital',em:'🏥'},
    {fr:'Le médicament',es:'El medicamento / la medicina',em:'💊'},
    {fr:'L\'ordonnance',es:'La receta médica',em:'📋'},
    {fr:'Avoir mal',es:'Tener dolor / doler',em:'🤕'},{fr:'La fièvre',es:'La fiebre',em:'🌡️'},
    {fr:'La toux',es:'La tos',em:'😮‍💨'},{fr:'La pharmacie',es:'La farmacia',em:'🏪'},
    {fr:'L\'infirmier / L\'infirmière',es:'El/la enfermero(a)',em:'👨‍⚕️'},
    {fr:'Le vaccin',es:'La vacuna',em:'💉'},
    {fr:'L\'injection',es:'La inyección',em:'🩸'},
    {fr:'Le pansement',es:'La curita / el vendaje',em:'🩹'},
    {fr:'L\'ambulance',es:'La ambulancia',em:'🚑'},
    {fr:'Les urgences',es:'La emergencia / las urgencias',em:'🆘'},
    {fr:'Le patient',es:'El/la paciente',em:'🛏️'},
    {fr:'La consultation',es:'La consulta médica',em:'📋'},
    {fr:'Le thermomètre',es:'El termómetro',em:'🌡️'},
    {fr:'La tension artérielle',es:'La presión arterial',em:'🩺'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "El hospital" en francés?',opts:['La pharmacie','L\'hôpital','Les urgences','La consultation'],ans:1},
    {q:'¿Qué significa "La fièvre"?',opts:['La tos','El dolor','La fiebre','La gripe'],ans:2},
    {q:'¿Cómo se dice "La vacuna" en francés?',opts:['L\'injection','Le vaccin','Le pansement','Le médicament'],ans:1},
    {q:'¿Qué significa "L\'ambulance"?',opts:['El hospital','La emergencia','La ambulancia','El médico'],ans:2},
    {q:'¿Cómo se dice "La receta médica" en francés?',opts:['La consultation','Le médicament','L\'ordonnance','Le vaccin'],ans:2},
    {q:'¿Qué significa "Le pansement"?',opts:['La inyección','El termómetro','La curita / vendaje','El medicamento'],ans:2},
    {q:'¿Cómo se dice "El termómetro" en francés?',opts:['La tension','Le thermomètre','La fièvre','L\'injection'],ans:1},
    {q:'¿Qué significa "Les urgences"?',opts:['El médico de guardia','La sala de espera','La emergencia','La consulta'],ans:2}
   ]},
  {id:'objets',level:1,emoji:'🔑',name:'Objets du Quotidien',sub:'Téléphone, clés… / Objetos del día',
   words:[
    {fr:'Le téléphone',es:'El teléfono / el celular',em:'📱'},
    {fr:'Les clés',es:'Las llaves',em:'🔑'},{fr:'Le portefeuille',es:'La billetera / el monedero',em:'👛'},
    {fr:'Le sac à dos',es:'La mochila',em:'🎒'},
    {fr:'Les lunettes',es:'Los lentes / los anteojos',em:'👓'},
    {fr:'Le papier',es:'El papel',em:'📄'},{fr:'Le stylo',es:'El esfero / el bolígrafo',em:'🖊️'},
    {fr:'Les ciseaux',es:'Las tijeras',em:'✂️'},{fr:'Le chargeur',es:'El cargador',em:'🔌'},
    {fr:'La bouteille',es:'La botella',em:'🍶'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Las llaves" en francés?',opts:['Le stylo','Les ciseaux','Les clés','Le chargeur'],ans:2},
    {q:'¿Qué significa "Le téléphone"?',opts:['La tableta','El celular','El computador','La radio'],ans:1},
    {q:'¿Cómo se dice "La mochila" en francés?',opts:['Le portefeuille','Le sac à main','Le sac à dos','Le chapeau'],ans:2},
    {q:'¿Qué significa "Le chargeur"?',opts:['El cable','El adaptador','El cargador','La batería'],ans:2},
    {q:'¿Cómo se dice "El esfero" en francés?',opts:['Le crayon','Le papier','Le stylo','Le livre'],ans:2},
    {q:'¿Qué significa "Les lunettes"?',opts:['Los audífonos','Los lentes','Los guantes','Los relojes'],ans:1},
    {q:'¿Cómo se dice "Las tijeras" en francés?',opts:['Le couteau','Les ciseaux','Le stylo','Le papier'],ans:1},
    {q:'¿Cómo se dice "La billetera" en francés?',opts:['Le sac à dos','Les clés','Le portefeuille','Le téléphone'],ans:2}
   ]}
];

var LEVEL2_THEMES=[
  {id:'alpha2',level:2,emoji:'🔤',name:'L\'Alphabet',sub:'Épeler en situation / Deletrear',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Nombre por teléfono',img:'📞',
     dialogue:[
      {s:'Agente',fr:'Bonjour, quel est votre nom de famille ?',tr:'Buenos días, ¿cuál es su apellido?',side:'right'},
      {s:'Clienta',fr:'Je m\'appelle Rodríguez.',tr:'Me llamo Rodríguez.',side:'left'},
      {s:'Agente',fr:'Pouvez-vous épeler, s\'il vous plaît ?',tr:'¿Puede deletrearlo, por favor?',side:'right'},
      {s:'Clienta',fr:'R-O-D-R-I-G-U-E-Z.',tr:'R-O-D-R-I-G-U-E-Z.',side:'left'},
      {s:'Agente',fr:'Merci, c\'est bien noté.',tr:'Gracias, ya quedó anotado.',side:'right'}
     ]},
    {label:'Sit. 2',title:'Correo electrónico',img:'📧',
     dialogue:[
      {s:'Recepcionista',fr:'Quelle est votre adresse email ?',tr:'¿Cuál es su correo electrónico?',side:'right'},
      {s:'Luisa',fr:'C\'est luisa point rosa arobase gmail point com.',tr:'Es luisa.rosa@gmail.com.',side:'left'},
      {s:'Recepcionista',fr:'Pouvez-vous épeler le nom ?',tr:'¿Puede deletrear el nombre?',side:'right'},
      {s:'Luisa',fr:'L-U-I-S-A. Point. R-O-S-A.',tr:'L-U-I-S-A. Punto. R-O-S-A.',side:'left'},
      {s:'Recepcionista',fr:'Parfait, merci beaucoup !',tr:'¡Perfecto, muchas gracias!',side:'right'}
     ]},
    {label:'Sit. 3',title:'Nombre de calle',img:'🏢',
     dialogue:[
      {s:'Funcionaria',fr:'Quelle est votre adresse ?',tr:'¿Cuál es su dirección?',side:'right'},
      {s:'María',fr:'Je vis rue Beaubien.',tr:'Vivo en la calle Beaubien.',side:'left'},
      {s:'Funcionaria',fr:'Comment ça s\'écrit, Beaubien ?',tr:'¿Cómo se escribe Beaubien?',side:'right'},
      {s:'María',fr:'B-E-A-U-B-I-E-N.',tr:'B-E-A-U-B-I-E-N.',side:'left'},
      {s:'Funcionaria',fr:'Très bien, merci.',tr:'Muy bien, gracias.',side:'right'}
     ]}
   ],
   vocab:['Épeler = Deletrear','La lettre = La letra','Comment ça s\'écrit ? = ¿Cómo se escribe?','Pouvez-vous répéter ? = ¿Puede repetir?','C\'est noté = Quedó anotado'],
   quiz:[
    {q:'¿Qué significa "Épeler"?',opts:['Deletrear','Escribir','Hablar','Leer'],ans:0},
    {q:'¿Qué significa "Comment ça s\'écrit ?"?',opts:['¿Cómo se pronuncia?','¿Cómo se llama?','¿Cómo se escribe?','¿Cuántas letras?'],ans:2},
    {q:'¿Qué significa "La lettre"?',opts:['La palabra','La letra','La frase','El libro'],ans:1}
   ]},
  {id:'pres2',level:2,emoji:'🙋',name:'Se Présenter',sub:'En situation réelle / En situación real',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Encuentro amistoso',img:'🤝',
     dialogue:[
      {s:'Ana',fr:'Salut ! Je m\'appelle Ana. Et toi ?',tr:'¡Hola! Me llamo Ana. ¿Y tú?',side:'left'},
      {s:'Pedro',fr:'Moi c\'est Pedro. Je viens de l\'Équateur.',tr:'Yo soy Pedro. Vengo de Ecuador.',side:'right'},
      {s:'Ana',fr:'Ah super ! Tu habites à Lyon ?',tr:'¡Qué bacán! ¿Vives en Lyon?',side:'left'},
      {s:'Pedro',fr:'Oui, depuis six mois. J\'ai vingt-huit ans.',tr:'Sí, desde hace seis meses. Tengo veintiocho años.',side:'right'},
      {s:'Ana',fr:'Bienvenue ! Tu parles très bien français !',tr:'¡Bienvenido! ¡Hablas muy bien el francés!',side:'left'}
     ]},
    {label:'Sit. 2',title:'Ámbito profesional',img:'💼',
     dialogue:[
      {s:'Directora',fr:'Bonjour, je suis Madame Dupont.',tr:'Buenos días, soy la señora Dupont.',side:'right'},
      {s:'Carlos',fr:'Bonjour Madame. Je m\'appelle Carlos Mora.',tr:'Buenos días, señora. Me llamo Carlos Mora.',side:'left'},
      {s:'Directora',fr:'Quelle est votre profession ?',tr:'¿Cuál es su profesión?',side:'right'},
      {s:'Carlos',fr:'Je suis ingénieur. Je viens de Quito.',tr:'Soy ingeniero. Vengo de Quito.',side:'left'},
      {s:'Directora',fr:'Enchantée, monsieur Mora.',tr:'Encantada, señor Mora.',side:'right'}
     ]},
    {label:'Sit. 3',title:'Llegada a una escuela',img:'🏫',
     dialogue:[
      {s:'Secretaria',fr:'Bonjour, vous êtes nouveau ici ?',tr:'Buenos días, ¿usted es nuevo aquí?',side:'right'},
      {s:'Luisa',fr:'Oui, je m\'appelle Luisa Pérez.',tr:'Sí, me llamo Luisa Pérez.',side:'left'},
      {s:'Secretaria',fr:'Quelle est votre nationalité ?',tr:'¿Cuál es su nacionalidad?',side:'right'},
      {s:'Luisa',fr:'Je suis équatorienne. J\'ai trente ans.',tr:'Soy ecuatoriana. Tengo treinta años.',side:'left'},
      {s:'Secretaria',fr:'Bienvenue à l\'école ! Bonne journée !',tr:'¡Bienvenida al colegio! ¡Que tenga buen día!',side:'right'}
     ]}
   ],
   vocab:['Je m\'appelle = Me llamo','J\'ai ... ans = Tengo ... años','Je viens de = Vengo de','J\'habite à = Vivo en','Bienvenue ! = ¡Bienvenido/a!','Enchanté(e) = Encantado/a'],
   quiz:[
    {q:'¿Qué significa "Bienvenue"?',opts:['Adiós','Buenos días','Bienvenido','Encantado'],ans:2},
    {q:'¿Cómo se dice "Tengo veinte años" en francés?',opts:['Je suis vingt ans','J\'ai vingt ans','Je viens vingt ans','J\'habite vingt'],ans:1},
    {q:'¿Qué significa "Enchanté(e)"?',opts:['Buenos días','Encantado/a','Gracias','Perdón'],ans:1}
   ]},
  {id:'num2',level:2,emoji:'🔢',name:'Les Nombres',sub:'En situation réelle / En situación real',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Preguntar la hora',img:'⏰',dialogue:[
      {s:'Rosa',fr:'Excusez-moi, quelle heure est-il ?',tr:'Disculpe, ¿qué hora es?',side:'left'},
      {s:'Transeúnte',fr:'Il est deux heures et demie.',tr:'Son las dos y media.',side:'right'},
      {s:'Rosa',fr:'Merci beaucoup !',tr:'¡Muchas gracias!',side:'left'},
      {s:'Transeúnte',fr:'De rien ! Bonne journée.',tr:'¡De nada! Que tenga buen día.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Dar el número de teléfono',img:'📱',dialogue:[
      {s:'Amiga',fr:'C\'est quoi ton numéro de téléphone ?',tr:'¿Cuál es tu número de teléfono?',side:'right'},
      {s:'María',fr:'C\'est le zéro six, trente-deux, quinze, vingt, onze.',tr:'Es el 06 32 15 20 11.',side:'left'},
      {s:'Amiga',fr:'Zéro six, trente-deux... tu peux répéter ?',tr:'Cero seis, treinta y dos... ¿puedes repetir?',side:'right'},
      {s:'María',fr:'Bien sûr ! Zéro six - trente-deux - quinze - vingt - onze.',tr:'¡Claro! 06 - 32 - 15 - 20 - 11.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Decir cuántas personas',img:'👥',dialogue:[
      {s:'Anfitriona',fr:'Vous êtes combien de personnes ?',tr:'¿Cuántas personas son?',side:'right'},
      {s:'Pedro',fr:'Nous sommes quatre : deux adultes et deux enfants.',tr:'Somos cuatro: dos adultos y dos niños.',side:'left'},
      {s:'Anfitriona',fr:'Très bien. Vous avez réservé ?',tr:'Muy bien. ¿Tienen reserva?',side:'right'},
      {s:'Pedro',fr:'Oui, au nom de Rodríguez. Pour vingt heures.',tr:'Sí, a nombre de Rodríguez. Para las ocho de la noche.',side:'left'}
    ]}
   ],
   vocab:['Quelle heure est-il ? = ¿Qué hora es?','Il est ... heures = Son las ... / Es la...','Combien ? = ¿Cuántos?','Nous sommes = Somos','Le numéro = El número'],
   quiz:[
    {q:'¿Cómo se pregunta la hora en francés?',opts:['Quelle est l\'heure ?','Quelle heure est-il ?','Il est combien ?','C\'est l\'heure ?'],ans:1},
    {q:'¿Qué significa "Nous sommes quatre"?',opts:['Tenemos cuatro','Somos cuatro','Ellos son cuatro','Hay cuatro'],ans:1},
    {q:'¿Qué significa "Deux adultes"?',opts:['Dos personas','Dos niños','Dos adultos','Dos amigos'],ans:2}
   ]},
  {id:'col2',level:2,emoji:'🎨',name:'Les Couleurs',sub:'En situation réelle / En situación real',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Color de una prenda',img:'👗',dialogue:[
      {s:'Amiga',fr:'Tu aimes ma robe ?',tr:'¿Te gusta mi vestido?',side:'right'},
      {s:'Luisa',fr:'Oui ! Elle est très belle. C\'est quelle couleur exactement ?',tr:'¡Sí! Es muy bonito. ¿De qué color es exactamente?',side:'left'},
      {s:'Amiga',fr:'C\'est violet avec des fleurs roses.',tr:'Es morado con flores rosadas.',side:'right'},
      {s:'Luisa',fr:'C\'est magnifique ! Le rose te va très bien.',tr:'¡Qué bacán! El rosado te queda muy bien.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Color de un auto perdido',img:'🚗',dialogue:[
      {s:'Policía',fr:'C\'est quoi votre voiture ?',tr:'¿Cómo es su auto?',side:'right'},
      {s:'Marco',fr:'C\'est une voiture rouge, une Renault.',tr:'Es un auto rojo, un Renault.',side:'left'},
      {s:'Policía',fr:'Rouge foncé ou rouge clair ?',tr:'¿Rojo oscuro o rojo claro?',side:'right'},
      {s:'Marco',fr:'Rouge vif, presque orange.',tr:'Rojo vivo, casi naranja.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Elegir un color de pintura',img:'🖌️',dialogue:[
      {s:'Vendedor',fr:'Quelle couleur pour votre salon ?',tr:'¿Qué color quiere para la sala?',side:'right'},
      {s:'Ana',fr:'Je voudrais quelque chose de clair. Peut-être blanc cassé.',tr:'Quisiera algo claro. Quizás blanco hueso.',side:'left'},
      {s:'Vendedor',fr:'Voici le blanc, le beige et le gris clair.',tr:'Aquí tiene el blanco, el beige y el gris claro.',side:'right'},
      {s:'Ana',fr:'Je prends le beige, c\'est plus chaleureux.',tr:'Me llevo el beige, es más cálido.',side:'left'}
    ]}
   ],
   vocab:['La couleur = El color','Rouge = Rojo','Bleu = Azul','Vert = Verde','Rose = Rosado','C\'est quelle couleur ? = ¿De qué color es?','Foncé = Oscuro','Clair = Claro'],
   quiz:[
    {q:'¿Cómo se pregunta el color de algo?',opts:['C\'est quelle couleur ?','Quelle est la couleur ?','De quelle couleur ?','Todas estas respuestas'],ans:3},
    {q:'¿Qué significa "Rouge foncé"?',opts:['Rojo claro','Rojo vivo','Rojo oscuro','Naranja'],ans:2},
    {q:'¿Qué significa "Clair"?',opts:['Oscuro','Claro','Grande','Bonito'],ans:1}
   ]},
  {id:'nour2',level:2,emoji:'🍽️',name:'La Nourriture',sub:'Marché, resto, courses / Mercado, restaurante',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'En el mercado',img:'🥦',dialogue:[
      {s:'Vendedor',fr:'Bonjour, qu\'est-ce qu\'il vous faut ?',tr:'Buenos días, ¿qué necesita?',side:'right'},
      {s:'Rosa',fr:'Bonjour ! Je voudrais des tomates et des carottes.',tr:'¡Buenos días! Quisiera tomates y zanahorias.',side:'left'},
      {s:'Vendedor',fr:'Combien de kilos ?',tr:'¿Cuántos kilos?',side:'right'},
      {s:'Rosa',fr:'Un kilo de tomates et cinq cents grammes de carottes.',tr:'Un kilo de tomates y medio kilo de zanahorias.',side:'left'},
      {s:'Vendedor',fr:'Voilà, c\'est trois euros.',tr:'Aquí tiene, son tres euros.',side:'right'}
    ]},
    {label:'Sit. 2',title:'En el restaurante',img:'🍴',dialogue:[
      {s:'Mesero',fr:'Vous avez choisi ?',tr:'¿Ya saben qué van a pedir?',side:'right'},
      {s:'Carlos',fr:'Oui. Je voudrais le poulet avec du riz, s\'il vous plaît.',tr:'Sí. Quisiera el pollo con arroz, por favor.',side:'left'},
      {s:'Mesero',fr:'Et comme boisson ?',tr:'¿Y para tomar?',side:'right'},
      {s:'Carlos',fr:'Une carafe d\'eau, s\'il vous plaît.',tr:'Un jarro de agua, por favor.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Lista de compras',img:'🛒',dialogue:[
      {s:'Luisa',fr:'Je dois faire les courses. Tu as besoin de quelque chose ?',tr:'Tengo que ir al supermercado. ¿Necesitas algo?',side:'left'},
      {s:'Pedro',fr:'Achète du pain et des œufs.',tr:'Cómprate pan y huevos.',side:'right'},
      {s:'Luisa',fr:'D\'accord. Je voudrais aussi du fromage blanc.',tr:'Bueno. También quiero queso blanco.',side:'left'},
      {s:'Pedro',fr:'Bonne idée ! Et n\'oublie pas le beurre.',tr:'¡Qué bacán! Y no te olvides de la mantequilla.',side:'right'}
    ]}
   ],
   vocab:['Je voudrais = Quisiera / me gustaría','Combien ? = ¿Cuánto?','Un kilo = Un kilo','C\'est combien ? = ¿Cuánto es? / ¿Cuánto cuesta?','Les courses = Las compras / el mercado','Vous avez choisi ? = ¿Ya eligieron?'],
   quiz:[
    {q:'¿Qué significa "Je voudrais du poulet"?',opts:['Tengo pollo','Quisiera pollo','Vendo pollo','Me gusta el pollo'],ans:1},
    {q:'¿Cómo se dice "Las compras" en francés?',opts:['Le marché','Les courses','La liste','Les achats'],ans:1},
    {q:'¿Qué significa "Vous avez choisi ?"?',opts:['¿Ya terminaron?','¿Ya eligieron?','¿Qué quieren?','¿Están listos?'],ans:1}
   ]},
  {id:'bois2',level:2,emoji:'🥤',name:'Les Boissons',sub:'Comptoir, invité, supermarché',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Pedir en el mostrador',img:'☕',dialogue:[
      {s:'Barista',fr:'Bonjour, vous désirez ?',tr:'Buenos días, ¿qué desea?',side:'right'},
      {s:'María',fr:'Un café allongé, s\'il vous plaît.',tr:'Un café negro largo, por favor.',side:'left'},
      {s:'Barista',fr:'Sucre ?',tr:'¿Azúcar?',side:'right'},
      {s:'María',fr:'Non merci, sans sucre.',tr:'No gracias, sin azúcar.',side:'left'},
      {s:'Barista',fr:'Voilà, c\'est un euro cinquante.',tr:'Aquí tiene, son un euro con cincuenta.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Ofrecer bebida a un invitado',img:'🍹',dialogue:[
      {s:'Anfitrión',fr:'Qu\'est-ce que tu veux boire ?',tr:'¿Qué quieres tomar?',side:'right'},
      {s:'Invitado',fr:'De l\'eau, s\'il te plaît.',tr:'Agua, por favor.',side:'left'},
      {s:'Anfitrión',fr:'Eau plate ou gazeuse ?',tr:'¿Natural o con gas?',side:'right'},
      {s:'Invitado',fr:'Plate, merci. Et peut-être un jus après ?',tr:'Natural, gracias. ¿Y quizás un jugo después?',side:'left'},
      {s:'Anfitrión',fr:'Bien sûr ! J\'ai du jus d\'orange frais.',tr:'¡Claro! Tengo jugo de naranja recién hecho.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Comprar agua en el supermercado',img:'🛍️',dialogue:[
      {s:'Rosa',fr:'Excusez-moi, où est l\'eau en bouteille ?',tr:'Disculpe, ¿dónde está el agua en botella?',side:'left'},
      {s:'Empleado',fr:'Rayon numéro trois, au fond à gauche.',tr:'Pasillo número tres, al fondo a la izquierda.',side:'right'},
      {s:'Rosa',fr:'Je voudrais un pack de six bouteilles.',tr:'Quisiera un pack de seis botellas.',side:'left'},
      {s:'Empleado',fr:'Il y a l\'eau de source et l\'eau minérale.',tr:'Hay agua de manantial y agua mineral.',side:'right'}
    ]}
   ],
   vocab:['Vous désirez ? = ¿Qué desea?','Sans sucre = Sin azúcar','Eau plate = Agua natural / sin gas','Eau gazeuse = Agua con gas','Un pack = Un paquete','Le rayon = El pasillo / la sección'],
   quiz:[
    {q:'¿Qué significa "Sans sucre"?',opts:['Con azúcar','Sin azúcar','Poco azúcar','Aparte el azúcar'],ans:1},
    {q:'¿Cómo se dice "Agua con gas" en francés?',opts:['Eau plate','Eau chaude','Eau gazeuse','Eau de source'],ans:2},
    {q:'¿Qué significa "Vous désirez ?"?',opts:['¿Cuánto cuesta?','¿Qué desea?','¿Tiene algo?','¿Le gusta?'],ans:1}
   ]},
  {id:'fam2',level:2,emoji:'👨‍👩‍👧',name:'La Famille',sub:'Photos, frères, enfants / Fotos, hermanos, hijos',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Presentar la familia en una foto',img:'📷',dialogue:[
      {s:'Ana',fr:'C\'est qui sur la photo ?',tr:'¿Quién es esa persona en la foto?',side:'right'},
      {s:'Luisa',fr:'Là c\'est mon mari Carlos, et voici mes enfants.',tr:'Ese es mi esposo Carlos, y estos son mis hijos.',side:'left'},
      {s:'Ana',fr:'Ils sont adorables ! Tu as combien d\'enfants ?',tr:'¡Son adorables! ¿Cuántos hijos tienes?',side:'right'},
      {s:'Luisa',fr:'Trois : deux fils et une fille.',tr:'Tres: dos varones y una niña.',side:'left'},
      {s:'Ana',fr:'Et tes parents, ils sont en Équateur ?',tr:'¿Y tus papás, están en Ecuador?',side:'right'},
      {s:'Luisa',fr:'Oui, ma mère et mon père vivent à Guayaquil.',tr:'Sí, mi mamá y mi papá viven en Guayaquil.',side:'left'}
     ]},
    {label:'Sit. 2',title:'Hermanos y hermanas',img:'👫',dialogue:[
      {s:'Vecina',fr:'Tu as des frères et sœurs ?',tr:'¿Tienes hermanos?',side:'right'},
      {s:'Pedro',fr:'Oui, j\'ai deux frères et une sœur.',tr:'Sí, tengo dos hermanos y una hermana.',side:'left'},
      {s:'Vecina',fr:'Tu es l\'aîné ou le plus jeune ?',tr:'¿Eres el mayor o el menor?',side:'right'},
      {s:'Pedro',fr:'Je suis le plus jeune. Mon frère aîné a trente-cinq ans.',tr:'Soy el menor. Mi hermano mayor tiene treinta y cinco años.',side:'left'}
     ]},
    {label:'Sit. 3',title:'Preguntar por los hijos',img:'🧒',dialogue:[
      {s:'Colega',fr:'Comment vont tes enfants ?',tr:'¿Cómo están tus hijos?',side:'right'},
      {s:'María',fr:'Très bien merci ! Ma fille entre à l\'école cette année.',tr:'¡Muy bien gracias! Mi hija entra al colegio este año.',side:'left'},
      {s:'Colega',fr:'Quel âge a-t-elle ?',tr:'¿Cuántos años tiene?',side:'right'},
      {s:'María',fr:'Elle a six ans. Et mon fils a dix ans.',tr:'Tiene seis años. Y mi hijo tiene diez.',side:'left'}
     ]}
   ],
   vocab:['La famille = La familia','Mes enfants = Mis hijos','Mon mari = Mi esposo / mi marido','Ma mère = Mi mamá / mi madre','Mon père = Mi papá / mi padre','L\'aîné = El/la mayor','Le plus jeune = El/la menor'],
   quiz:[
    {q:'¿Qué significa "Mes enfants"?',opts:['Mis padres','Mis hermanos','Mis hijos','Mis abuelos'],ans:2},
    {q:'¿Cómo se dice "El mayor" (en edad) en francés?',opts:['Le plus jeune','Le grand','L\'aîné','Le vieux'],ans:2},
    {q:'¿Qué significa "Comment vont tes enfants ?"?',opts:['¿Dónde están tus hijos?','¿Cuántos hijos tienes?','¿Cómo están tus hijos?','¿Qué edad tienen?'],ans:2}
   ]},
  {id:'emot2',level:2,emoji:'😄',name:'Les Émotions',sub:'Tristesse, fatigue, joie / Tristeza, cansancio, alegría',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'¿Por qué está triste un amigo?',img:'😢',dialogue:[
      {s:'Ana',fr:'Tu n\'as pas l\'air bien. Ça va ?',tr:'No se te ve bien. ¿Estás bien?',side:'right'},
      {s:'Carlos',fr:'Non, je suis triste. J\'ai des nouvelles de chez moi.',tr:'No, estoy triste. Tengo noticias de mi casa.',side:'left'},
      {s:'Ana',fr:'Qu\'est-ce qui se passe ?',tr:'¿Qué pasó?',side:'right'},
      {s:'Carlos',fr:'Ma grand-mère est malade.',tr:'Mi abuela está enferma.',side:'left'},
      {s:'Ana',fr:'Je suis vraiment désolée. Je suis là si tu as besoin.',tr:'Lo siento mucho. Aquí estoy si me necesitas.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Expresar cansancio',img:'😴',dialogue:[
      {s:'Pareja',fr:'Tu rentres tard ! Tu es fatigué ?',tr:'¡Llegas tarde! ¿Estás cansado?',side:'right'},
      {s:'Pedro',fr:'Oui, je suis épuisé. C\'était une longue journée.',tr:'Sí, estoy agotado. Fue un día muy largo.',side:'left'},
      {s:'Pareja',fr:'Tu veux manger quelque chose ?',tr:'¿Quieres comer algo?',side:'right'},
      {s:'Pedro',fr:'Oui, j\'ai faim aussi. Je suis fatigué et stressé.',tr:'Sí, también tengo hambre. Estoy cansado y estresado.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Alegría por una buena noticia',img:'🎉',dialogue:[
      {s:'Luisa',fr:'J\'ai une grande nouvelle !',tr:'¡Tengo una noticia grandísima!',side:'left'},
      {s:'Amiga',fr:'Dis-moi ! Tu as l\'air super contente !',tr:'¡Dime! ¡Se te ve muy contenta!',side:'right'},
      {s:'Luisa',fr:'J\'ai trouvé du travail ! Je suis tellement joyeuse !',tr:'¡Encontré trabajo! ¡Estoy felicísima!',side:'left'},
      {s:'Amiga',fr:'C\'est fantastique ! Je suis très heureuse pour toi !',tr:'¡Qué bacán! ¡Estoy muy feliz por ti!',side:'right'}
    ]}
   ],
   vocab:['Triste = Triste','Fatigué(e) = Cansado/a','Joyeux/se = Alegre / contento/a','Content(e) = Contento/a','Je suis désolé(e) = Lo siento / disculpa','Épuisé(e) = Agotado/a','Une bonne nouvelle = Una buena noticia'],
   quiz:[
    {q:'¿Qué significa "Je suis épuisé"?',opts:['Estoy triste','Estoy enfermo','Estoy agotado','Estoy estresado'],ans:2},
    {q:'¿Cómo se dice "Lo siento" en francés?',opts:['Je suis content','Je suis désolé','Je suis fatigué','Je suis malade'],ans:1},
    {q:'¿Qué significa "Une bonne nouvelle"?',opts:['Una mala noticia','Un buen libro','Una buena noticia','Un buen momento'],ans:2}
   ]},
  {id:'log2',level:2,emoji:'🏠',name:'Le Logement',sub:'Studio, objets, ménage / Apartamento, objetos',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Visitar un apartamento en arriendo',img:'🏢',dialogue:[
      {s:'Propietario',fr:'Voici le studio. Il y a un salon-cuisine et une salle de bain.',tr:'Este es el departamento. Tiene sala-cocina y baño.',side:'right'},
      {s:'María',fr:'C\'est lumineux ! Il y a des toilettes séparées ?',tr:'¡Qué claro está! ¿El baño tiene inodoro aparte?',side:'left'},
      {s:'Propietario',fr:'Oui, les toilettes sont à côté de la salle de bain.',tr:'Sí, el inodoro está al lado del baño.',side:'right'},
      {s:'María',fr:'C\'est combien le loyer par mois ?',tr:'¿Cuánto es el arriendo mensual?',side:'left'},
      {s:'Propietario',fr:'Cinq cent cinquante euros, charges comprises.',tr:'Quinientos cincuenta euros, todo incluido.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Buscar un objeto perdido',img:'🔍',dialogue:[
      {s:'Pedro',fr:'Tu as vu mes clés ?',tr:'¿Viste mis llaves?',side:'right'},
      {s:'Ana',fr:'No... regarde dans le salon.',tr:'No... mira en la sala.',side:'left'},
      {s:'Pedro',fr:'Non, elles ne sont pas là.',tr:'No, no están ahí.',side:'right'},
      {s:'Ana',fr:'Essaie la cuisine, ou peut-être dans la chambre.',tr:'Prueba en la cocina, o quizás en el cuarto.',side:'left'},
      {s:'Pedro',fr:'Ah oui ! Elles étaient sur la table de la cuisine !',tr:'¡Ah sí! ¡Estaban en la mesa de la cocina!',side:'right'}
    ]},
    {label:'Sit. 3',title:'Las tareas del hogar',img:'🧹',dialogue:[
      {s:'Luisa',fr:'C\'est ton tour de faire la vaisselle.',tr:'Te toca lavar los platos.',side:'left'},
      {s:'Carlos',fr:'D\'accord. Et toi tu fais quoi ?',tr:'Bueno. ¿Y tú qué haces?',side:'right'},
      {s:'Luisa',fr:'Je passe l\'aspirateur dans le salon.',tr:'Paso la aspiradora en la sala.',side:'left'},
      {s:'Carlos',fr:'Et la chambre ?',tr:'¿Y el cuarto?',side:'right'},
      {s:'Luisa',fr:'Je fais le lit après.',tr:'Tiendo la cama después.',side:'left'}
    ]}
   ],
   vocab:['Le loyer = El arriendo / el alquiler','La salle de bain = El baño','Les toilettes = El baño / el inodoro','Le salon = La sala','La cuisine = La cocina','La chambre = El cuarto / la habitación','Faire la vaisselle = Lavar los platos'],
   quiz:[
    {q:'¿Qué significa "Le loyer"?',opts:['El departamento','El arriendo','El cuarto','El contrato'],ans:1},
    {q:'¿Cómo se dice "Lavar los platos" en francés?',opts:['Faire le lit','Passer l\'aspirateur','Faire la vaisselle','Nettoyer'],ans:2},
    {q:'¿Qué significa "Lumineux"?',opts:['Pequeño','Claro / luminoso','Ruidoso','Grande'],ans:1}
   ]},
  {id:'veth2',level:2,emoji:'👗',name:'Les Vêtements',sub:'Matin, taille, veste perdue / Mañana, talla, ropa perdida',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Vestirse en la mañana',img:'🌅',dialogue:[
      {s:'Niño',fr:'Maman, je mets quoi aujourd\'hui ?',tr:'Mamá, ¿qué me pongo hoy?',side:'right'},
      {s:'Mamá',fr:'Il fait froid, mets ton manteau et ton écharpe.',tr:'Hace frío, ponte el abrigo y la bufanda.',side:'left'},
      {s:'Niño',fr:'Et mes chaussures rouges ?',tr:'¿Y mis zapatos rojos?',side:'right'},
      {s:'Mamá',fr:'Oui, et n\'oublie pas ton chapeau !',tr:'Sí, ¡y no te olvides el sombrero!',side:'left'}
    ]},
    {label:'Sit. 2',title:'Comprar en la talla correcta',img:'🏪',dialogue:[
      {s:'Vendedor',fr:'Bonjour, je peux vous aider ?',tr:'Buenos días, ¿le puedo ayudar?',side:'right'},
      {s:'Luisa',fr:'Oui, je cherche ce pantalon en taille quarante.',tr:'Sí, busco ese pantalón en talla cuarenta.',side:'left'},
      {s:'Vendedor',fr:'Un instant... voilà, en taille quarante.',tr:'Un momento... aquí tiene, talla cuarenta.',side:'right'},
      {s:'Luisa',fr:'Merci, je peux l\'essayer ?',tr:'Gracias, ¿me lo puedo probar?',side:'left'},
      {s:'Vendedor',fr:'Bien sûr, la cabine est là-bas.',tr:'Claro, el probador está allá.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Buscar una chaqueta perdida',img:'🔍',dialogue:[
      {s:'Carlos',fr:'Excuse-moi, j\'ai oublié ma veste.',tr:'Disculpa, olvidé mi chaqueta.',side:'left'},
      {s:'Mesero',fr:'De quelle couleur est-elle ?',tr:'¿De qué color es?',side:'right'},
      {s:'Carlos',fr:'Elle est noire, avec une fermeture éclair.',tr:'Es negra, con cierre.',side:'left'},
      {s:'Mesero',fr:'Attendez... voilà une veste noire.',tr:'Espere... aquí hay una chaqueta negra.',side:'right'},
      {s:'Carlos',fr:'Oui c\'est la mienne ! Merci beaucoup !',tr:'¡Sí, esa es la mía! ¡Muchísimas gracias!',side:'left'}
    ]}
   ],
   vocab:['La veste = La chaqueta / el saco','Le manteau = El abrigo','La taille = La talla','Les chaussures = Los zapatos','La cabine d\'essayage = El probador','Il fait froid = Hace frío'],
   quiz:[
    {q:'¿Qué significa "La taille" (en ropa)?',opts:['El color','El precio','La talla','El modelo'],ans:2},
    {q:'¿Cómo se dice "El probador" en francés?',opts:['Le magasin','La cabine d\'essayage','Le comptoir','Le rayon'],ans:1},
    {q:'¿Qué significa "Il fait froid"?',opts:['Hace calor','Hace viento','Hace frío','Hace sol'],ans:2}
   ]},
  {id:'corps2',level:2,emoji:'🧍',name:'Le Corps',sub:'Médecin, sport, physique / Médico, deporte, físico',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Explicarle al médico dónde duele',img:'🏥',dialogue:[
      {s:'Médico',fr:'Qu\'est-ce qui ne va pas ?',tr:'¿Qué le pasa?',side:'right'},
      {s:'Pedro',fr:'J\'ai mal au dos et à la tête.',tr:'Me duele la espalda y la cabeza.',side:'left'},
      {s:'Médico',fr:'Depuis combien de temps ?',tr:'¿Desde cuándo?',side:'right'},
      {s:'Pedro',fr:'Depuis deux jours. J\'ai aussi mal au ventre.',tr:'Desde hace dos días. También me duele la barriga.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Lesión en el deporte',img:'⚽',dialogue:[
      {s:'Entrenador',fr:'Ça va ? Tu boites !',tr:'¿Estás bien? ¡Estás cojeando!',side:'right'},
      {s:'Marco',fr:'J\'ai mal à la jambe. Je me suis blessé.',tr:'Me duele la pierna. Me lastimé.',side:'left'},
      {s:'Entrenador',fr:'C\'est le genou ou la cheville ?',tr:'¿Es la rodilla o el tobillo?',side:'right'},
      {s:'Marco',fr:'La cheville. Je ne peux pas poser le pied.',tr:'El tobillo. No puedo apoyar el pie.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Describir el físico de alguien',img:'👤',dialogue:[
      {s:'Policía',fr:'Décrivez la personne que vous cherchez.',tr:'Descríbame a la persona que busca.',side:'right'},
      {s:'Ana',fr:'C\'est un homme grand, avec les yeux bleus.',tr:'Es un hombre alto, con ojos azules.',side:'left'},
      {s:'Policía',fr:'Il a les cheveux de quelle couleur ?',tr:'¿De qué color tiene el cabello?',side:'right'},
      {s:'Ana',fr:'Il a les cheveux noirs, courts. Et il a une barbe.',tr:'Tiene el cabello negro, corto. Y tiene barba.',side:'left'}
    ]}
   ],
   vocab:['J\'ai mal à... = Me duele...','La tête = La cabeza','Le dos = La espalda','La jambe = La pierna','Le pied = El pie','Depuis combien de temps ? = ¿Desde cuándo?','Je me suis blessé = Me lastimé'],
   quiz:[
    {q:'¿Cómo se dice "Me duele la cabeza" en francés?',opts:['J\'ai mal à la jambe','J\'ai mal à la tête','J\'ai mal au dos','J\'ai mal au ventre'],ans:1},
    {q:'¿Qué significa "Je me suis blessé"?',opts:['Estoy cansado','Tengo fiebre','Me lastimé','Estoy enfermo'],ans:2},
    {q:'¿Qué significa "Depuis combien de temps ?"?',opts:['¿Cuánto tiempo falta?','¿Desde cuándo?','¿Por cuánto tiempo?','¿A qué hora?'],ans:1}
   ]},
  {id:'anim2',level:2,emoji:'🐘',name:'Les Animaux',sub:'Mascotte, rue, ferme / Mascota, calle, finca',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Hablar de tu mascota',img:'🐶',dialogue:[
      {s:'Vecino',fr:'C\'est ton chien ? Il est beau !',tr:'¿Ese es tu perro? ¡Qué bonito!',side:'right'},
      {s:'Luisa',fr:'Merci ! Il s\'appelle Coco. C\'est un labrador.',tr:'¡Gracias! Se llama Coco. Es un labrador.',side:'left'},
      {s:'Vecino',fr:'Il a quel âge ?',tr:'¿Cuántos años tiene?',side:'right'},
      {s:'Luisa',fr:'Il a trois ans. Il est très gentil.',tr:'Tiene tres años. Es muy tranquilo.',side:'left'},
      {s:'Vecino',fr:'Moi j\'ai un chat. Ils ne s\'aiment pas trop !',tr:'Yo tengo un gato. ¡No se llevan muy bien!',side:'right'}
    ]},
    {label:'Sit. 2',title:'Cruzarse con un perro en la calle',img:'🌳',dialogue:[
      {s:'Transeúnte',fr:'Attention, il est méchant ?',tr:'Ojo, ¿muerde?',side:'right'},
      {s:'Carlos',fr:'Non, ne vous inquiétez pas, il est très doux.',tr:'No, no se preocupe, es muy manso.',side:'left'},
      {s:'Transeúnte',fr:'Je peux le caresser ?',tr:'¿Lo puedo acariciar?',side:'right'},
      {s:'Carlos',fr:'Oui, bien sûr ! Il adore ça.',tr:'Sí, claro. ¡Le encanta!',side:'left'}
    ]},
    {label:'Sit. 3',title:'Visita a la finca',img:'🐄',dialogue:[
      {s:'Granjero',fr:'Bienvenue à la ferme ! Voilà les vaches.',tr:'¡Bienvenidos a la finca! Allí están las vacas.',side:'right'},
      {s:'Niño',fr:'Oh ! Et les poules, elles sont où ?',tr:'¡Oh! ¿Y las gallinas dónde están?',side:'left'},
      {s:'Granjero',fr:'Les poules sont dans le poulailler. Et voilà le cheval !',tr:'Las gallinas están en el gallinero. ¡Y ahí está el caballo!',side:'right'},
      {s:'Niño',fr:'Je peux monter à cheval ?',tr:'¿Puedo montar a caballo?',side:'left'},
      {s:'Granjero',fr:'Oui, avec le casque bien sûr !',tr:'Sí, ¡con el casco, claro!',side:'right'}
    ]}
   ],
   vocab:['Le chien = El perro','Le chat = El gato','La vache = La vaca','La poule = La gallina','Le cheval = El caballo','Il est doux = Es manso / tranquilo','La ferme = La finca / el rancho'],
   quiz:[
    {q:'¿Qué significa "Il est doux" (hablando de un animal)?',opts:['Es feo','Es manso','Es agresivo','Es grande'],ans:1},
    {q:'¿Cómo se dice "La finca" en francés?',opts:['Le jardin','La forêt','La ferme','Le champ'],ans:2},
    {q:'¿Qué significa "Je peux le caresser ?"?',opts:['¿Lo puedo llevar?','¿Lo puedo acariciar?','¿Lo puedo ver?','¿Me lo puedo quedar?'],ans:1}
   ]},
  {id:'verb2',level:2,emoji:'📝',name:'Les Verbes Principaux',sub:'Routine, goûts, actions / Rutina, gustos, acciones',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Rutina diaria',img:'⏰',dialogue:[
      {s:'Colega',fr:'Tu te lèves à quelle heure ?',tr:'¿A qué hora te levantas?',side:'right'},
      {s:'Pedro',fr:'Je me lève à six heures. Je mange, puis je vais au travail.',tr:'Me levanto a las seis. Como y después voy al trabajo.',side:'left'},
      {s:'Colega',fr:'Et le soir, tu fais quoi ?',tr:'¿Y en la noche qué haces?',side:'right'},
      {s:'Pedro',fr:'Je mange, je lis un peu et je dors tôt.',tr:'Como, leo un rato y me duermo temprano.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Expresar gustos',img:'❤️',dialogue:[
      {s:'Amiga',fr:'Tu aimes la cuisine française ?',tr:'¿Te gusta la comida francesa?',side:'right'},
      {s:'Luisa',fr:'Oui, j\'aime beaucoup ! Je mange souvent du fromage.',tr:'¡Sí, me encanta! Como queso con frecuencia.',side:'left'},
      {s:'Amiga',fr:'Et tu aimes le vin ?',tr:'¿Y te gusta el vino?',side:'right'},
      {s:'Luisa',fr:'Je bois un peu de vin, mais je préfère le jus.',tr:'Tomo un poco de vino, pero prefiero el jugo.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Acciones del momento',img:'🏃',dialogue:[
      {s:'Jefe',fr:'Qu\'est-ce que tu fais maintenant ?',tr:'¿Qué estás haciendo ahora?',side:'right'},
      {s:'Carlos',fr:'Je parle au téléphone. J\'ai un client.',tr:'Estoy hablando por teléfono. Tengo un cliente.',side:'left'},
      {s:'Jefe',fr:'D\'accord. Et tu vas à la réunion à midi ?',tr:'Bueno. ¿Vas a la reunión al mediodía?',side:'right'},
      {s:'Carlos',fr:'Oui, je vais à la réunion. Je suis prêt.',tr:'Sí, voy a la reunión. Estoy listo.',side:'left'}
    ]}
   ],
   vocab:['Je vais = Voy','Je mange = Como','Je parle = Hablo','J\'aime = Me gusta / quiero','Je bois = Bebo / tomo','J\'habite = Vivo','Je suis = Soy / estoy','J\'ai = Tengo'],
   quiz:[
    {q:'¿Qué significa "Je vais au travail"?',opts:['Tengo trabajo','Voy al trabajo','Busco trabajo','Me gusta el trabajo'],ans:1},
    {q:'¿Cómo se dice "Tomo jugo" en francés?',opts:['Je mange du jus','Je vais du jus','Je bois du jus','J\'ai du jus'],ans:2},
    {q:'¿Qué significa "J\'aime beaucoup"?',opts:['No me gusta','Me gusta poco','Me encanta / me gusta mucho','No sé'],ans:2}
   ]},
  {id:'pays2',level:2,emoji:'🌍',name:'Les Pays',sub:'Nationalité, vacances, rêves / Nacionalidad, vacaciones',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Preguntar la nacionalidad',img:'🗺️',dialogue:[
      {s:'Vecina',fr:'D\'où venez-vous ?',tr:'¿De dónde es usted?',side:'right'},
      {s:'Ana',fr:'Je viens de l\'Équateur. Et vous ?',tr:'Soy de Ecuador. ¿Y usted?',side:'left'},
      {s:'Vecina',fr:'Je suis française, de Lyon.',tr:'Soy francesa, de Lyon.',side:'right'},
      {s:'Ana',fr:'Ah ! Et vous connaissez la Colombie aussi ?',tr:'¡Ah! ¿Y conoce Colombia también?',side:'left'},
      {s:'Vecina',fr:'Non, mais j\'adorerais y aller !',tr:'No, ¡pero me encantaría ir!',side:'right'}
    ]},
    {label:'Sit. 2',title:'Hablar de las últimas vacaciones',img:'🏖️',dialogue:[
      {s:'Colega',fr:'Tu es allé où en vacances ?',tr:'¿A dónde fuiste de vacaciones?',side:'right'},
      {s:'Pedro',fr:'Je suis allé en Espagne, à Barcelone.',tr:'Fui a España, a Barcelona.',side:'left'},
      {s:'Colega',fr:'C\'était bien ?',tr:'¿Estuvo bien?',side:'right'},
      {s:'Pedro',fr:'C\'était magnifique ! Et la nourriture était délicieuse.',tr:'¡Estuvo espectacular! Y la comida estaba deliciosa.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Decir a dónde viajaría',img:'✈️',dialogue:[
      {s:'Amiga',fr:'Si tu pouvais voyager, tu irais où ?',tr:'Si pudieras viajar, ¿a dónde irías?',side:'right'},
      {s:'Luisa',fr:'J\'irais au Canada. J\'adore la nature.',tr:'Me iría a Canadá. Me encanta la naturaleza.',side:'left'},
      {s:'Amiga',fr:'Moi je rêve d\'aller en Éthiopie.',tr:'Yo sueño con ir a Etiopía.',side:'right'},
      {s:'Luisa',fr:'Oh ! C\'est un pays magnifique. J\'aime aussi l\'Italie.',tr:'¡Qué bacán! Ese país es precioso. También me gusta Italia.',side:'left'}
    ]}
   ],
   vocab:['D\'où venez-vous ? = ¿De dónde es usted?','Je viens de = Vengo de','Les vacances = Las vacaciones','C\'était = Fue / estuvo','J\'irais = Me iría / iría','Je rêve de = Sueño con'],
   quiz:[
    {q:'¿Cómo se pregunta de dónde viene alguien (formal)?',opts:['Tu viens d\'où ?','D\'où venez-vous ?','Quelle est ta nationalité ?','Tu habites où ?'],ans:1},
    {q:'¿Qué significa "J\'irais au Canada"?',opts:['Fui a Canadá','Vivo en Canadá','Me iría a Canadá','Quiero ir a Canadá'],ans:2},
    {q:'¿Qué significa "Je rêve de voyager"?',opts:['Viajé ayer','Sueño con viajar','Quiero reservar','Ya he viajado'],ans:1}
   ]},
  {id:'plan2',level:2,emoji:'🌿',name:'Les Plantes',sub:'Fleuriste, maison, parc / Floristería, casa, parque',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Comprar flores en la floristería',img:'💐',dialogue:[
      {s:'Florista',fr:'Bonjour, qu\'est-ce que je vous sers ?',tr:'Buenos días, ¿en qué le sirvo?',side:'right'},
      {s:'María',fr:'Je voudrais un bouquet de roses rouges, s\'il vous plaît.',tr:'Quisiera un ramo de rosas rojas, por favor.',side:'left'},
      {s:'Florista',fr:'Pour une occasion spéciale ?',tr:'¿Es para una ocasión especial?',side:'right'},
      {s:'María',fr:'Oui, pour l\'anniversaire de ma mère.',tr:'Sí, para el cumpleaños de mi mamá.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Regar las plantas de la casa',img:'🪴',dialogue:[
      {s:'Vecina',fr:'Tu peux arroser mes plantes cette semaine ?',tr:'¿Puedes regar mis plantas esta semana?',side:'right'},
      {s:'Luisa',fr:'Bien sûr ! Combien de fois par jour ?',tr:'¡Claro! ¿Cuántas veces al día?',side:'left'},
      {s:'Vecina',fr:'Une fois par jour, le matin.',tr:'Una vez al día, en la mañana.',side:'right'},
      {s:'Luisa',fr:'D\'accord, je mets la plante près de la fenêtre.',tr:'Bueno, pongo la planta cerca de la ventana.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Paseo en el parque',img:'🌳',dialogue:[
      {s:'Pedro',fr:'Regarde ces arbres, ils sont magnifiques !',tr:'Mira esos árboles, ¡son preciosos!',side:'right'},
      {s:'Ana',fr:'Oui ! Et les fleurs dans le jardin sont belles aussi.',tr:'¡Sí! Y las flores del jardín también son bonitas.',side:'left'},
      {s:'Pedro',fr:'C\'est quoi comme arbre ça ?',tr:'¿Qué árbol es ese?',side:'right'},
      {s:'Ana',fr:'C\'est un chêne. Et là c\'est une rose.',tr:'Es un roble. Y esa es una rosa.',side:'left'}
    ]}
   ],
   vocab:['La fleur = La flor','L\'arbre = El árbol','La rose = La rosa','La feuille = La hoja','Arroser = Regar','Le jardin = El jardín','Le bouquet = El ramo'],
   quiz:[
    {q:'¿Cómo se dice "Regar las plantas" en francés?',opts:['Planter les fleurs','Arroser les plantes','Couper les arbres','Mettre les roses'],ans:1},
    {q:'¿Qué significa "Le bouquet"?',opts:['El jardín','El árbol','El ramo','La flor'],ans:2},
    {q:'¿Qué significa "Une fois par jour"?',opts:['Dos veces al día','Una vez a la semana','Una vez al día','Cada hora'],ans:2}
   ]},
  {id:'salut2',level:2,emoji:'👋',name:'Les Salutations',sub:'Magasin, voisin, départ / Tienda, vecino, despedida',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Entrar a una tienda',img:'🏪',dialogue:[
      {s:'Cliente',fr:'Bonjour !',tr:'¡Buenos días!',side:'left'},
      {s:'Vendedor',fr:'Bonjour ! Bienvenue. Je peux vous aider ?',tr:'¡Buenos días! Bienvenido. ¿Le puedo ayudar?',side:'right'},
      {s:'Cliente',fr:'Non merci, je regarde juste.',tr:'No gracias, solo estoy mirando.',side:'left'},
      {s:'Vendedor',fr:'Bien sûr ! N\'hésitez pas si vous avez besoin.',tr:'Claro. No dude en decirme si necesita algo.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Ver al vecino en el ascensor',img:'🛗',dialogue:[
      {s:'Vecino',fr:'Bonsoir ! Vous rentrez tard ce soir.',tr:'¡Buenas noches! Regresa tarde esta noche.',side:'right'},
      {s:'Luisa',fr:'Bonsoir ! Oui, j\'étais au travail.',tr:'¡Buenas noches! Sí, estaba en el trabajo.',side:'left'},
      {s:'Vecino',fr:'Ah, bonne soirée quand même !',tr:'¡Ah, que tenga buena noche de todas formas!',side:'right'},
      {s:'Luisa',fr:'Merci, vous aussi ! À bientôt !',tr:'¡Gracias, igualmente! ¡Hasta pronto!',side:'left'}
    ]},
    {label:'Sit. 3',title:'Despedirse antes de irse',img:'🚪',dialogue:[
      {s:'Ana',fr:'Bon, je dois y aller maintenant.',tr:'Bueno, me tengo que ir ya.',side:'left'},
      {s:'Pedro',fr:'Déjà ? Bonne route ! Et fais attention.',tr:'¿Ya? ¡Que te vaya bien! Y ten cuidado.',side:'right'},
      {s:'Ana',fr:'Merci ! À bientôt ! Embrasse ta famille !',tr:'¡Gracias! ¡Hasta pronto! ¡Saluda a tu familia!',side:'left'},
      {s:'Pedro',fr:'Bonne nuit ! Prends soin de toi !',tr:'¡Buenas noches! ¡Cuídate!',side:'right'}
    ]}
   ],
   vocab:['Bonjour = Buenos días / buenas','Bonsoir = Buenas tardes / buenas noches','Au revoir = Adiós / chao','À bientôt = Hasta pronto / hasta luego','Bonne nuit = Buenas noches','Merci = Gracias','S\'il vous plaît = Por favor'],
   quiz:[
    {q:'¿Qué significa "À bientôt"?',opts:['Adiós para siempre','Hasta pronto','Buenos días','Buenas noches'],ans:1},
    {q:'¿Cuándo se usa "Bonsoir"?',opts:['Solo en la mañana','Solo en el trabajo','Al llegar en la tarde-noche','Al despedirse para siempre'],ans:2},
    {q:'¿Qué significa "Bonne route !"?',opts:['Buen descanso','Buen provecho','Que te vaya bien / buen viaje','Buen trabajo'],ans:2}
   ]},
  {id:'met2',level:2,emoji:'💼',name:'Les Professions',sub:'Demander, expliquer, rêver / Preguntar, explicar, soñar',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Preguntar la profesión',img:'🤝',dialogue:[
      {s:'Vecina',fr:'Qu\'est-ce que vous faites dans la vie ?',tr:'¿A qué se dedica?',side:'right'},
      {s:'Carlos',fr:'Je suis cuisinier dans un restaurant.',tr:'Soy cocinero en un restaurante.',side:'left'},
      {s:'Vecina',fr:'Ah, comme c\'est bien ! Et vous travaillez le week-end ?',tr:'¡Qué bien! ¿Y trabaja los fines de semana?',side:'right'},
      {s:'Carlos',fr:'Oui, souvent. C\'est mon métier depuis dix ans.',tr:'Sí, con frecuencia. Es mi oficio desde hace diez años.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Hablar del trabajo actual',img:'💻',dialogue:[
      {s:'Amiga',fr:'Tu travailles où maintenant ?',tr:'¿Dónde trabajas ahora?',side:'right'},
      {s:'María',fr:'Je suis infirmière à l\'hôpital Saint-Jean.',tr:'Soy enfermera en el hospital San Juan.',side:'left'},
      {s:'Amiga',fr:'C\'est loin de chez toi ?',tr:'¿Queda lejos de tu casa?',side:'right'},
      {s:'María',fr:'Non, vingt minutes en bus. J\'aime beaucoup mon travail.',tr:'No, veinte minutos en bus. Me encanta mi trabajo.',side:'left'}
    ]},
    {label:'Sit. 3',title:'El trabajo de los sueños',img:'🌟',dialogue:[
      {s:'Profe',fr:'Quel est le métier de tes rêves ?',tr:'¿Cuál es el trabajo de tus sueños?',side:'right'},
      {s:'Estudiante',fr:'Je voudrais être médecin. J\'aime aider les gens.',tr:'Quisiera ser médico. Me gusta ayudar a la gente.',side:'left'},
      {s:'Profe',fr:'C\'est un beau métier ! Et toi, Luisa ?',tr:'¡Qué lindo oficio! ¿Y tú, Luisa?',side:'right'},
      {s:'Luisa',fr:'Moi, je veux être professeur de français !',tr:'Yo quiero ser profesora de francés.',side:'left'},
      {s:'Profe',fr:'Excellent ! On a besoin de bons professeurs !',tr:'¡Excelente! ¡Hacen falta buenos profesores!',side:'right'}
    ]}
   ],
   vocab:['Qu\'est-ce que vous faites ? = ¿A qué se dedica?','Je suis... = Soy...','Le métier = El oficio / la profesión','Je travaille = Trabajo','Je voudrais être = Quisiera ser','L\'hôpital = El hospital'],
   quiz:[
    {q:'¿Cómo se pregunta "¿A qué se dedica?" (formal) en francés?',opts:['Tu travailles ?','Qu\'est-ce que vous faites ?','C\'est votre travail ?','Vous avez un métier ?'],ans:1},
    {q:'¿Qué significa "Je voudrais être médecin"?',opts:['Soy médico','Fui al médico','Quisiera ser médico','Busco un médico'],ans:2},
    {q:'¿Qué significa "Le métier"?',opts:['El salario','La empresa','El oficio / la profesión','El horario'],ans:2}
   ]},
  {id:'trans2',level:2,emoji:'🚌',name:'Les Transports',sub:'Bus, taxi, train / Autobús, taxi, tren',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Comprar un pasaje de bus',img:'🚌',dialogue:[
      {s:'Luisa',fr:'Bonjour, un ticket pour le centre-ville, s\'il vous plaît.',tr:'Buenos días, un pasaje para el centro, por favor.',side:'left'},
      {s:'Chofer',fr:'Voilà, c\'est un euro soixante.',tr:'Aquí tiene, es un euro con sesenta.',side:'right'},
      {s:'Luisa',fr:'Je n\'ai pas de monnaie. Je peux payer avec cinq euros ?',tr:'No tengo sencillo. ¿Puedo pagar con cinco euros?',side:'left'},
      {s:'Chofer',fr:'Oui, voilà votre monnaie.',tr:'Sí, aquí tiene su cambio.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Pedir un taxi',img:'🚕',dialogue:[
      {s:'Pedro',fr:'Bonjour, je voudrais un taxi pour l\'aéroport.',tr:'Buenos días, quisiera un taxi para el aeropuerto.',side:'left'},
      {s:'Operador',fr:'D\'accord. C\'est à quelle adresse ?',tr:'Bueno. ¿Cuál es la dirección?',side:'right'},
      {s:'Pedro',fr:'Quinze rue de la Paix, dans le troisième arrondissement.',tr:'Calle de la Paz, número quince, en el tercer sector.',side:'left'},
      {s:'Operador',fr:'Le taxi arrive dans dix minutes.',tr:'El taxi llega en diez minutos.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Validar el boleto en el andén',img:'🚂',dialogue:[
      {s:'Agente',fr:'Votre billet, s\'il vous plaît.',tr:'Su boleto, por favor.',side:'right'},
      {s:'Ana',fr:'Le voici. J\'ai une réservation pour Paris.',tr:'Aquí tiene. Tengo reserva para París.',side:'left'},
      {s:'Agente',fr:'Vous avez validé votre billet ?',tr:'¿Validó su boleto?',side:'right'},
      {s:'Ana',fr:'Euh... non, comment on fait ?',tr:'Eh... no, ¿cómo se hace?',side:'left'},
      {s:'Agente',fr:'Il faut le composter dans la machine là-bas.',tr:'Tiene que sellarlo en la máquina de allá.',side:'right'}
    ]}
   ],
   vocab:['Le ticket = El ticket / el pasaje','La monnaie = El sencillo / el cambio','L\'aéroport = El aeropuerto','La gare = La estación de tren','Valider = Validar / sellar','Composter = Sellar el boleto','Le quai = El andén'],
   quiz:[
    {q:'¿Qué significa "Je n\'ai pas de monnaie"?',opts:['No tengo pasaje','No tengo sencillo','No tengo plata','No tengo tarjeta'],ans:1},
    {q:'¿Cómo se dice "El andén" en francés?',opts:['Le ticket','La gare','Le quai','Le bus'],ans:2},
    {q:'¿Qué significa "Composter le billet"?',opts:['Comprar el boleto','Sellar / validar el boleto','Perder el boleto','Cambiar el boleto'],ans:1}
   ]},
  {id:'lieux2',level:2,emoji:'🏙️',name:'Les Lieux Importants',sub:'Urgence, courses, campagne / Lugares importantes',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Buscar un edificio con urgencia',img:'🚨',dialogue:[
      {s:'María',fr:'Excusez-moi ! Où est la pharmacie la plus proche ?',tr:'¡Disculpe! ¿Dónde está la farmacia más cercana?',side:'left'},
      {s:'Transeúnte',fr:'La pharmacie ? C\'est à deux rues d\'ici, à gauche.',tr:'¿La farmacia? Está a dos cuadras de aquí, a la izquierda.',side:'right'},
      {s:'María',fr:'Et l\'hôpital, c\'est loin ?',tr:'¿Y el hospital, queda lejos?',side:'left'},
      {s:'Transeúnte',fr:'Oui, prenez le bus numéro quatre.',tr:'Sí, tome el autobús número cuatro.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Explicar a dónde ir de compras',img:'🛒',dialogue:[
      {s:'Vecina',fr:'Tu vas faire les courses ce matin ?',tr:'¿Vas al mercado esta mañana?',side:'right'},
      {s:'Luisa',fr:'Oui, je vais au supermarché d\'abord, puis à la banque.',tr:'Sí, voy al supermercado primero y después al banco.',side:'left'},
      {s:'Vecina',fr:'Il y a aussi une pharmacie à côté du supermarché.',tr:'También hay una farmacia al lado del supermercado.',side:'right'},
      {s:'Luisa',fr:'Ah parfait, j\'en ai besoin aussi.',tr:'Ah perfecto, también necesito ir ahí.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Describir un fin de semana en el campo',img:'🌾',dialogue:[
      {s:'Colega',fr:'Vous avez passé un bon week-end ?',tr:'¿Pasaron un buen fin de semana?',side:'right'},
      {s:'Pedro',fr:'Oui ! On est allés à la campagne.',tr:'¡Sí! Fuimos al campo.',side:'left'},
      {s:'Colega',fr:'C\'est beau la campagne en été !',tr:'¡Qué bonito el campo en verano!',side:'right'},
      {s:'Pedro',fr:'Oui, et on s\'est promenés au bord de la rivière.',tr:'Sí, y caminamos a orillas del río.',side:'left'}
    ]}
   ],
   vocab:['La pharmacie = La farmacia','L\'hôpital = El hospital','Le supermarché = El supermercado','La banque = El banco','La campagne = El campo','La rivière = El río / la quebrada','La mairie = La alcaldía / el municipio'],
   quiz:[
    {q:'¿Cómo se dice "La farmacia" en francés?',opts:['L\'hôpital','La banque','La pharmacie','L\'école'],ans:2},
    {q:'¿Qué significa "La campagne"?',opts:['La ciudad','La playa','El campo','La montaña'],ans:2},
    {q:'¿Qué significa "C\'est urgent !"?',opts:['¡Es importante!','¡Es urgente!','¡Está lejos!','¡Está cerrado!'],ans:1}
   ]},
  {id:'orient2',level:2,emoji:'🧭',name:'S\'Orienter',sub:'Chemin, taxi, magasin / Camino, taxi, tienda',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Preguntar cómo llegar a la estación',img:'🚉',dialogue:[
      {s:'Ana',fr:'Excusez-moi, pour aller à la gare, s\'il vous plaît ?',tr:'Disculpe, ¿por dónde se va a la estación, por favor?',side:'left'},
      {s:'Transeúnte',fr:'Allez tout droit, puis tournez à gauche au feu.',tr:'Siga recto y doble a la izquierda en el semáforo.',side:'right'},
      {s:'Ana',fr:'C\'est loin à pied ?',tr:'¿Queda lejos a pie?',side:'left'},
      {s:'Transeúnte',fr:'Non, environ dix minutes. C\'est en face du parc.',tr:'No, unos diez minutos. Está frente al parque.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Guiar a un taxista',img:'🚕',dialogue:[
      {s:'Taxista',fr:'Quelle adresse ?',tr:'¿Cuál es la dirección?',side:'right'},
      {s:'Pedro',fr:'Huit rue de Rivoli, s\'il vous plaît.',tr:'Calle de Rivoli, número ocho, por favor.',side:'left'},
      {s:'Taxista',fr:'D\'accord, je prends par le centre ?',tr:'Bueno, ¿voy por el centro?',side:'right'},
      {s:'Pedro',fr:'Oui. Et après le pont, tournez à droite.',tr:'Sí. Y después del puente, doble a la derecha.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Indicar dónde está una tienda',img:'🏪',dialogue:[
      {s:'Turista',fr:'Il y a une boulangerie près d\'ici ?',tr:'¿Hay una panadería cerca de aquí?',side:'right'},
      {s:'Luisa',fr:'Oui ! Elle est à côté de la pharmacie, en face du parc.',tr:'¡Sí! Está al lado de la farmacia, frente al parque.',side:'left'},
      {s:'Turista',fr:'C\'est à droite ou à gauche ?',tr:'¿Queda a la derecha o a la izquierda?',side:'right'},
      {s:'Luisa',fr:'Allez tout droit, et c\'est à droite. C\'est très près, deux minutes à pied.',tr:'Siga recto y queda a la derecha. Está muy cerca, a dos minutos a pie.',side:'left'}
    ]}
   ],
   vocab:['À gauche = A la izquierda','À droite = A la derecha','Tout droit = Todo recto / derecho','En face = Enfrente / frente a','À côté = Al lado','Loin = Lejos','Près = Cerca','Le plan = El mapa / el plano'],
   quiz:[
    {q:'¿Cómo se dice "Todo recto" en francés?',opts:['À gauche','À droite','Tout droit','En face'],ans:2},
    {q:'¿Qué significa "En face du parc"?',opts:['Al lado del parque','En el parque','Frente al parque','Detrás del parque'],ans:2},
    {q:'¿Qué significa "C\'est très près"?',opts:['Está muy lejos','Está muy cerca','Está a la derecha','Está enfrente'],ans:1}
   ]},
  {id:'sante2',level:2,emoji:'🏥',name:'La Santé',sub:'Médecin, symptômes, pharmacie / Médico, síntomas',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Pedir cita médica',img:'📅',dialogue:[
      {s:'Secretaria',fr:'Cabinet du docteur Lefebvre, bonjour.',tr:'Consultorio del doctor Lefebvre, buenos días.',side:'right'},
      {s:'María',fr:'Bonjour, je voudrais prendre un rendez-vous, s\'il vous plaît.',tr:'Buenos días, quisiera pedir una cita, por favor.',side:'left'},
      {s:'Secretaria',fr:'C\'est pour quel motif ?',tr:'¿Por qué motivo?',side:'right'},
      {s:'María',fr:'J\'ai de la fièvre et une forte toux depuis trois jours.',tr:'Tengo fiebre y mucha tos desde hace tres días.',side:'left'},
      {s:'Secretaria',fr:'D\'accord. Vous pouvez venir demain à dix heures ?',tr:'Bueno. ¿Puede venir mañana a las diez?',side:'right'}
    ]},
    {label:'Sit. 2',title:'Explicar los síntomas al médico',img:'🩺',dialogue:[
      {s:'Médico',fr:'Bonjour, qu\'est-ce qui ne va pas aujourd\'hui ?',tr:'Buenos días, ¿qué le pasa hoy?',side:'right'},
      {s:'Pedro',fr:'J\'ai très mal à la gorge et j\'ai de la fièvre.',tr:'Me duele mucho la garganta y tengo fiebre.',side:'left'},
      {s:'Médico',fr:'Depuis combien de jours ?',tr:'¿Desde cuántos días?',side:'right'},
      {s:'Pedro',fr:'Depuis quatre jours.',tr:'Desde hace cuatro días.',side:'left'},
      {s:'Médico',fr:'C\'est une angine. Je vous fais une ordonnance.',tr:'Es una amigdalitis. Le hago una receta.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Comprar medicamentos en la farmacia',img:'💊',dialogue:[
      {s:'Luisa',fr:'Bonjour, j\'ai une ordonnance.',tr:'Buenos días, traigo una receta.',side:'left'},
      {s:'Farmaceuta',fr:'Bonjour. Voici les médicaments. Prenez-en un le matin et un le soir.',tr:'Buenos días. Aquí tiene los medicamentos. Tome uno en la mañana y uno en la noche.',side:'right'},
      {s:'Luisa',fr:'Avec ou sans nourriture ?',tr:'¿Con o sin comida?',side:'left'},
      {s:'Farmaceuta',fr:'Avec de la nourriture, de préférence.',tr:'Con comida, preferiblemente.',side:'right'},
      {s:'Luisa',fr:'Et je peux avoir quelque chose pour la toux aussi ?',tr:'¿Y me puede dar algo para la tos también?',side:'left'},
      {s:'Farmaceuta',fr:'Oui, voici un sirop. Deux cuillères trois fois par jour.',tr:'Sí, aquí tiene un jarabe. Dos cucharadas tres veces al día.',side:'right'}
    ]}
   ],
   vocab:['Un rendez-vous = Una cita médica','L\'ordonnance = La receta médica','Le médicament = El medicamento','J\'ai mal à... = Me duele...','La fièvre = La fiebre','La toux = La tos','Le pharmacien = El/la farmacéutico(a)'],
   quiz:[
    {q:'¿Cómo se dice "Una cita médica" en francés?',opts:['Une visite','Un rendez-vous','Une ordonnance','Une consultation'],ans:1},
    {q:'¿Qué significa "J\'ai de la fièvre"?',opts:['Tengo tos','Me duele la cabeza','Tengo fiebre','Estoy cansado'],ans:2},
    {q:'¿Qué significa "L\'ordonnance"?',opts:['El hospital','El médico','La receta médica','El medicamento'],ans:2}
   ]},
  {id:'objets2',level:2,emoji:'🔑',name:'Objets du Quotidien',sub:'Clés, stylo, chargeur / Llaves, esfero, cargador',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Buscar las llaves antes de salir',img:'🔍',dialogue:[
      {s:'Carlos',fr:'Attends, je ne trouve pas mes clés !',tr:'Espera, ¡no encuentro mis llaves!',side:'left'},
      {s:'Ana',fr:'Tu as regardé dans ton sac à dos ?',tr:'¿Revisaste en tu mochila?',side:'right'},
      {s:'Carlos',fr:'Oui... ah non ! Et mon portefeuille, où il est ?',tr:'Sí... ¡ah no! ¿Y mi billetera dónde está?',side:'left'},
      {s:'Ana',fr:'Je crois que tu l\'as laissé sur la table du salon.',tr:'Creo que la dejaste en la mesa de la sala.',side:'right'},
      {s:'Carlos',fr:'Ah oui ! Les voilà ! On peut partir maintenant.',tr:'¡Ah sí! ¡Aquí están! Ya podemos irnos.',side:'left'},
      {s:'Ana',fr:'N\'oublie pas tes lunettes aussi !',tr:'¡No te olvides los lentes tampoco!',side:'right'}
    ]},
    {label:'Sit. 2',title:'Pedir prestado un esfero o papel',img:'✏️',dialogue:[
      {s:'Luisa',fr:'Excuse-moi, tu aurais un stylo à me prêter ?',tr:'Disculpa, ¿me puedes prestar un esfero?',side:'left'},
      {s:'Colega',fr:'Oui, bien sûr ! Tiens.',tr:'Sí, claro. Toma.',side:'right'},
      {s:'Luisa',fr:'Merci ! Et tu aurais aussi une feuille de papier ?',tr:'¡Gracias! ¿Y también tienes una hoja de papel?',side:'left'},
      {s:'Colega',fr:'Oui, voilà. Tu en as besoin pour longtemps ?',tr:'Sí, aquí tienes. ¿La necesitas por mucho tiempo?',side:'right'},
      {s:'Luisa',fr:'Non, juste cinq minutes. Je te rends ça tout de suite.',tr:'No, solo cinco minutos. Te lo devuelvo ya.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Pedir un cargador de teléfono',img:'🔌',dialogue:[
      {s:'Pedro',fr:'Mon téléphone est presque mort. Tu as un chargeur ?',tr:'Mi celular está casi muerto. ¿Tienes un cargador?',side:'left'},
      {s:'María',fr:'Quel modèle de téléphone tu as ?',tr:'¿Qué modelo de celular tienes?',side:'right'},
      {s:'Pedro',fr:'Un Samsung. Tu aurais un chargeur USB-C ?',tr:'Un Samsung. ¿Tendrás un cargador USB-C?',side:'left'},
      {s:'María',fr:'Oui ! Le voilà. Tu peux le garder une heure.',tr:'¡Sí! Aquí está. Puedes quedártelo una hora.',side:'right'},
      {s:'Pedro',fr:'Merci beaucoup, tu me sauves la vie !',tr:'¡Muchísimas gracias, me salvaste la vida!',side:'left'}
    ]}
   ],
   vocab:['Les clés = Las llaves','Le portefeuille = La billetera','Le sac à dos = La mochila','Le stylo = El esfero / el bolígrafo','La feuille = La hoja de papel','Le chargeur = El cargador','Les lunettes = Los lentes / los anteojos'],
   quiz:[
    {q:'¿Cómo se dice "Las llaves" en francés?',opts:['Le portefeuille','Les clés','Le stylo','La bouteille'],ans:1},
    {q:'¿Qué significa "Tu as un chargeur ?"?',opts:['¿Tienes un cable?','¿Tienes un cargador?','¿Tienes un celular?','¿Tienes batería?'],ans:1},
    {q:'¿Qué significa "Tu me sauves la vie !"?',opts:['¡Me das la vida!','¡Me ayudas!','¡Me salvaste la vida!','¡Eres genial!'],ans:2}
   ]}
];

var ALL_THEMES=LEVEL1_THEMES.concat(LEVEL2_THEMES);
