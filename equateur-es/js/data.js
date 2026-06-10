/* ========================================
   Español Ecuador → Français 🇪🇨 – Données
   Vocabulaire, quiz et dialogues
   © 2026 Sébastien Godet
======================================== */

var LEVEL1_THEMES=[
  {id:'alpha',level:1,emoji:'🔤',name:'El Alfabeto',sub:'A, B, C… Z / El Alfabeto',type:'alpha',
   words:[
    {es:'A',fr:'a',em:'✈️'},{es:'B',fr:'bé',em:'🎈'},
    {es:'C',fr:'cé',em:'☕'},{es:'D',fr:'dé',em:'💃'},
    {es:'E',fr:'e',em:'🏫'},{es:'F',fr:'effe',em:'🌸'},
    {es:'G',fr:'jé',em:'🚉'},{es:'H',fr:'aché (muda)',em:'🏨'},
    {es:'I',fr:'i',em:'🏝️'},{es:'J',fr:'ji',em:'🌿'},
    {es:'K',fr:'ka',em:'⚖️'},{es:'L',fr:'elle',em:'🦁'},
    {es:'M',fr:'emme',em:'🏠'},{es:'N',fr:'enne',em:'🌙'},
    {es:'O',fr:'o',em:'🐦'},{es:'P',fr:'pé',em:'🍞'},
    {es:'Q',fr:'ku',em:'🏘️'},{es:'R',fr:'erre',em:'🌹'},
    {es:'S',fr:'esse',em:'☀️'},{es:'T',fr:'té',em:'🚂'},
    {es:'U',fr:'u (lèvres arrondies)',em:'1️⃣'},{es:'V',fr:'vé',em:'🌆'},
    {es:'W',fr:'doble vé',em:'🚃'},{es:'X',fr:'iks',em:'🎵'},
    {es:'Y',fr:'i griega',em:'🥛'},{es:'Z',fr:'zède',em:'0️⃣'}
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
  {id:'pres',level:1,emoji:'🙋',name:'Presentarse',sub:'Nombre, edad, país… / Se présenter',
   words:[
    {es:'El apellido',fr:'Le nom',em:'👨‍👩‍👧'},{es:'El nombre',fr:'Le prénom',em:'🏷️'},
    {es:'La nacionalidad',fr:'La nationalité',em:'🌍'},{es:'La edad',fr:'L\'âge',em:'🎂'},
    {es:'La profesión / el oficio',fr:'La profession',em:'💼'},{es:'El país',fr:'Le pays',em:'🗺️'},
    {es:'Francés / francesa',fr:'Français(e)',em:'🇫🇷'},{es:'Ecuatoriano / ecuatoriana',fr:'Équatorien(ne)',em:'🇪🇨'},
    {es:'Vivo en',fr:'J\'habite à',em:'🏠'},{es:'Soy / Estoy',fr:'Je suis',em:'🧑'},
    {es:'Tengo ... años',fr:'J\'ai ... ans',em:'🎈'},{es:'Me llamo',fr:'Je m\'appelle',em:'👋'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Je m\'appelle" en español?',opts:['Soy','Me llamo','Vivo','Tengo'],ans:1},
    {q:'¿Qué significa "El apellido"?',opts:['Le prénom','L\'âge','Le nom','La profession'],ans:2},
    {q:'¿Cómo se dice "J\'ai 25 ans" en español?',opts:['Soy 25 años','Vivo 25 años','Tengo 25 años','Hablo 25 años'],ans:2},
    {q:'¿Qué significa "La nacionalidad"?',opts:['Le pays','La ville','La profession','La nationalité'],ans:3},
    {q:'¿Cómo se dice "J\'habite à Paris" en español?',opts:['Soy en París','Vivo en París','Voy en París','Tengo París'],ans:1},
    {q:'¿Qué significa "El nombre"?',opts:['Le nom','Le prénom','L\'âge','La profession'],ans:1},
    {q:'¿Cómo se dice "Je suis équatorienne" en español?',opts:['Soy francesa','Soy ecuatoriana','Vivo Ecuador','Hablo ecuatoriana'],ans:1},
    {q:'¿Qué significa "La profesión"?',opts:['La nationalité','Le pays','La profession','L\'âge'],ans:2},
    {q:'¿Cómo se dice "Comment tu t\'appelles ?" en español?',opts:['¿Cuántos años tienes?','¿Cómo te llamas?','¿De dónde eres?','¿Cuál es tu profesión?'],ans:1},
    {q:'¿Qué significa "El país"?',opts:['La ville','Le continent','La rue','Le pays'],ans:3}
   ]},
  {id:'num',level:1,emoji:'🔢',name:'Los Números',sub:'Del cero al veinte / Zéro à vingt',
   words:[
    {es:'Cero',fr:'Zéro',em:'0️⃣'},{es:'Uno',fr:'Un',em:'1️⃣'},{es:'Dos',fr:'Deux',em:'2️⃣'},
    {es:'Tres',fr:'Trois',em:'3️⃣'},{es:'Cuatro',fr:'Quatre',em:'4️⃣'},{es:'Cinco',fr:'Cinq',em:'5️⃣'},
    {es:'Seis',fr:'Six',em:'6️⃣'},{es:'Siete',fr:'Sept',em:'7️⃣'},{es:'Ocho',fr:'Huit',em:'8️⃣'},
    {es:'Nueve',fr:'Neuf',em:'9️⃣'},{es:'Diez',fr:'Dix',em:'🔟'},
    {es:'Once',fr:'Onze',em:'1️⃣1️⃣'},{es:'Doce',fr:'Douze',em:'1️⃣2️⃣'},
    {es:'Trece',fr:'Treize',em:'1️⃣3️⃣'},{es:'Catorce',fr:'Quatorze',em:'1️⃣4️⃣'},
    {es:'Quince',fr:'Quinze',em:'1️⃣5️⃣'},{es:'Dieciséis',fr:'Seize',em:'1️⃣6️⃣'},
    {es:'Diecisiete',fr:'Dix-sept',em:'1️⃣7️⃣'},{es:'Dieciocho',fr:'Dix-huit',em:'1️⃣8️⃣'},
    {es:'Diecinueve',fr:'Dix-neuf',em:'1️⃣9️⃣'},{es:'Veinte',fr:'Vingt',em:'2️⃣0️⃣'}
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
    {q:'¿Cómo se dice 17 en español?',opts:['Dieciséis','Diecisiete','Dieciocho','Diecinueve'],ans:1},
    {q:'¿Qué número es "Once"?',opts:['10','12','13','11'],ans:3}
   ]},
  {id:'col',level:1,emoji:'🎨',name:'Los Colores',sub:'Rojo, azul, verde… / Les couleurs',
   words:[
    {es:'Rojo',fr:'Rouge',em:'❤️'},{es:'Azul',fr:'Bleu',em:'💙'},{es:'Verde',fr:'Vert',em:'💚'},
    {es:'Amarillo',fr:'Jaune',em:'💛'},{es:'Naranja',fr:'Orange',em:'🧡'},{es:'Blanco',fr:'Blanc',em:'🤍'},
    {es:'Negro',fr:'Noir',em:'🖤'},{es:'Rosado',fr:'Rose',em:'🩷'},
    {es:'Morado / violeta',fr:'Violet',em:'💜'},{es:'Café / marrón',fr:'Marron',em:'🤎'},
    {es:'Gris',fr:'Gris',em:'🩶'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Rouge" en español?',opts:['Azul','Rojo','Verde','Amarillo'],ans:1},
    {q:'¿Qué significa "Azul"?',opts:['Vert','Jaune','Bleu','Violet'],ans:2},
    {q:'¿Cómo se dice "Vert" en español?',opts:['Amarillo','Gris','Verde','Blanco'],ans:2},
    {q:'¿Qué significa "Negro"?',opts:['Blanc','Gris','Café','Noir'],ans:3},
    {q:'¿Cómo se dice "Jaune" en español?',opts:['Naranja','Amarillo','Rosado','Morado'],ans:1},
    {q:'¿Qué significa "Rosado"?',opts:['Rouge','Orange','Rose','Violet'],ans:2},
    {q:'¿Cómo se dice "Blanc" en español?',opts:['Blanco','Negro','Gris','Café'],ans:0},
    {q:'¿Qué significa "Morado / violeta"?',opts:['Bleu','Vert','Rouge','Violet'],ans:3},
    {q:'¿Cómo se dice "Marron" en español?',opts:['Gris','Café / marrón','Negro','Rojo'],ans:1},
    {q:'¿Qué significa "Naranja"?',opts:['Rouge','Jaune','Orange','Rose'],ans:2}
   ]},
  {id:'nour',level:1,emoji:'🍽️',name:'La Comida',sub:'Pan, legumbres, frutas… / La nourriture',
   words:[
    {es:'El pan',fr:'Le pain',em:'🍞'},{es:'El arroz',fr:'Le riz',em:'🍚'},
    {es:'El queso',fr:'Le fromage',em:'🧀'},{es:'La carne',fr:'La viande',em:'🥩'},
    {es:'El pollo',fr:'Le poulet',em:'🍗'},{es:'El pescado',fr:'Le poisson',em:'🐟'},
    {es:'La manzana',fr:'La pomme',em:'🍎'},{es:'El guineo / la banana',fr:'La banane',em:'🍌'},
    {es:'El tomate / el riñón',fr:'La tomate',em:'🍅'},{es:'La zanahoria',fr:'La carotte',em:'🥕'},
    {es:'El huevo',fr:'L\'œuf',em:'🥚'},{es:'La mantequilla',fr:'Le beurre',em:'🧈'},
    {es:'Las frutas',fr:'Les fruits',em:'🍉'},{es:'Las verduras / los vegetales',fr:'Les légumes',em:'🥦'},
    {es:'El caramelo / el dulce',fr:'Le bonbon',em:'🍬'},{es:'La sal',fr:'Le sel',em:'🧂'},
    {es:'La pimienta',fr:'Le poivre',em:'🌶️'},{es:'La lasaña / los fideos',fr:'Les pâtes',em:'🍝'},
    {es:'La papa',fr:'La pomme de terre',em:'🥔'},{es:'El maíz / el choclo',fr:'Le maïs',em:'🌽'},
    {es:'La cebolla',fr:'L\'oignon',em:'🧅'},{es:'La ensalada',fr:'La salade',em:'🥗'},
    {es:'El ajo',fr:'L\'ail',em:'🧄'},{es:'El pepino',fr:'Le concombre',em:'🥒'},
    {es:'La naranja',fr:'L\'orange',em:'🍊'},
    {es:'El limón',fr:'Le citron',em:'🍋'},{es:'La uva',fr:'Le raisin',em:'🍇'},
    {es:'La fresa / la frutilla',fr:'La fraise',em:'🍓'},{es:'La sandía',fr:'La pastèque',em:'🍉'},
    {es:'El maní',fr:'Les cacahuètes',em:'🥜'},
    {es:'El chocolate',fr:'Le chocolat',em:'🍫'},{es:'La miel',fr:'Le miel',em:'🍯'},
    {es:'El zapallo / el zambo',fr:'La citrouille',em:'🎃'},{es:'Los fréjoles / los porotos',fr:'Les haricots',em:'🫘'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le pain" en español?',opts:['El arroz','El pan','El queso','La mantequilla'],ans:1},
    {q:'¿Qué significa "El pollo"?',opts:['Le poisson','La viande','Le poulet','Le porc'],ans:2},
    {q:'¿Cómo se dice "L\'œuf" en español?',opts:['La mantequilla','El queso','La zanahoria','El huevo'],ans:3},
    {q:'¿Qué significa "Las verduras / los vegetales"?',opts:['Les fruits','Les céréales','Les légumes','Les boissons'],ans:2},
    {q:'¿Cómo se dice "La pomme" en español?',opts:['El guineo','La frutilla','La manzana','La naranja'],ans:2},
    {q:'¿Cómo se dice "La banane" en español ecuatoriano?',opts:['La manzana','La frutilla','El guineo / la banana','La naranja'],ans:2},
    {q:'¿Cómo se dice "La citrouille" en español ecuatoriano?',opts:['La zanahoria','El zapallo / el zambo','El maíz','La cebolla'],ans:1},
    {q:'¿Cómo se dice "Les haricots" en español ecuatoriano?',opts:['Los fideos','El maní','Los fréjoles / los porotos','El arroz'],ans:2},
    {q:'¿Cómo se dice "La pastèque" en español?',opts:['La frutilla','La sandía','La uva','La naranja'],ans:1},
    {q:'¿Qué significa "El maní"?',opts:['Les amandes','Les noix','Les cacahuètes','Les noisettes'],ans:2},
    {q:'¿Cómo se dice "La carotte" en español?',opts:['El pepino','La zanahoria','El tomate','La cebolla'],ans:1},
    {q:'¿Cómo se dice "La fraise" en español ecuatoriano?',opts:['El guineo','La sandía','La fresa / la frutilla','La uva'],ans:2}
   ]},
  {id:'bois',level:1,emoji:'🥤',name:'Las Bebidas',sub:'Agua, café, jugo… / Les boissons',
   words:[
    {es:'El agua',fr:'L\'eau',em:'💧'},{es:'El café',fr:'Le café',em:'☕'},{es:'El té',fr:'Le thé',em:'🍵'},
    {es:'El jugo',fr:'Le jus',em:'🧃'},{es:'La leche',fr:'Le lait',em:'🥛'},{es:'El vino',fr:'Le vin',em:'🍷'},
    {es:'La cerveza',fr:'La bière',em:'🍺'},{es:'La gaseosa / el refresco',fr:'Le soda',em:'🥤'},
    {es:'El agua caliente',fr:'L\'eau chaude',em:'♨️'},{es:'El agua fría',fr:'L\'eau froide',em:'🧊'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'eau" en español?',opts:['La leche','El jugo','El agua','El té'],ans:2},
    {q:'¿Qué significa "El café"?',opts:['Le thé','Le café','Le jus','Le lait'],ans:1},
    {q:'¿Cómo se dice "Le lait" en español?',opts:['La leche','El agua','El té','El jugo'],ans:0},
    {q:'¿Qué significa "El jugo"?',opts:['Le vin','La bière','La limonade','Le jus'],ans:3},
    {q:'¿Cómo se dice "Le vin" en español?',opts:['La cerveza','La gaseosa','El vino','El café'],ans:2},
    {q:'¿Qué significa "La cerveza"?',opts:['Le vin','La bière','La limonade','Le jus'],ans:1},
    {q:'¿Cómo se dice "Le thé" en español?',opts:['El café','El té','La leche','El agua'],ans:1},
    {q:'¿Qué significa "El agua fría"?',opts:['L\'eau chaude','L\'eau minérale','L\'eau froide','La glace'],ans:2}
   ]},
  {id:'fam',level:1,emoji:'👨‍👩‍👧',name:'La Familia',sub:'Papá, mamá, hijo… / La famille',
   words:[
    {es:'El papá / el padre',fr:'Le père',em:'👨'},{es:'La mamá / la madre',fr:'La mère',em:'👩'},
    {es:'El hijo',fr:'Le fils',em:'👦'},{es:'La hija',fr:'La fille',em:'👧'},
    {es:'El hermano',fr:'Le frère',em:'🧑'},{es:'La hermana',fr:'La sœur',em:'👧'},
    {es:'El abuelo',fr:'Le grand-père',em:'👴'},{es:'La abuela',fr:'La grand-mère',em:'👵'},
    {es:'El esposo / el marido',fr:'Le mari',em:'💍'},{es:'La esposa / la mujer',fr:'La femme',em:'💑'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le père" en español?',opts:['El marido','El hijo','El papá / el padre','El hermano'],ans:2},
    {q:'¿Qué significa "La mamá / la madre"?',opts:['La fille','La sœur','La grand-mère','La mère'],ans:3},
    {q:'¿Cómo se dice "Le frère" en español?',opts:['El hijo','El hermano','El papá','El marido'],ans:1},
    {q:'¿Qué significa "La hermana"?',opts:['La mère','La grand-mère','La sœur','La fille'],ans:2},
    {q:'¿Cómo se dice "Le grand-père" en español?',opts:['El papá','El marido','El hijo','El abuelo'],ans:3},
    {q:'¿Qué significa "La abuela"?',opts:['La mère','La grand-mère','La sœur','La fille'],ans:1},
    {q:'¿Cómo se dice "La fille" en español?',opts:['La hermana','La esposa','La hija','La mamá'],ans:2},
    {q:'¿Qué significa "El esposo / el marido"?',opts:['Le fils','Le frère','Le grand-père','Le mari'],ans:3}
   ]},
  {id:'emot',level:1,emoji:'😄',name:'Las Emociones',sub:'Alegre, triste… / Les émotions',
   words:[
    {es:'Alegre / contento',fr:'Joyeux / Joyeuse',em:'😄'},{es:'Triste',fr:'Triste',em:'😢'},
    {es:'Cansado / cansada',fr:'Fatigué(e)',em:'😴'},{es:'Enojado / bravo',fr:'Fâché(e)',em:'😠'},
    {es:'Estresado / agobiado',fr:'Stressé(e)',em:'😰'},{es:'Enfermo / malito',fr:'Malade',em:'🤒'},
    {es:'Contento / feliz',fr:'Content(e)',em:'😊'},{es:'Preocupado / angustiado',fr:'Inquiet / Inquiète',em:'😟'},
    {es:'Enamorado / enamorada',fr:'Amoureux / Amoureuse',em:'😍'},
    {es:'Decepcionado / frustrado',fr:'Déçu(e)',em:'😞'},
    {es:'Tener miedo',fr:'Avoir peur',em:'😨'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Joyeux" en español?',opts:['Triste','Cansado','Alegre / contento','Enfermo'],ans:2},
    {q:'¿Qué significa "Triste"?',opts:['Fatigué','Triste','Énervé','Malade'],ans:1},
    {q:'¿Cómo se dice "Fatigué" en español?',opts:['Estresado','Enfermo','Preocupado','Cansado / cansada'],ans:3},
    {q:'¿Qué significa "Enfermo / malito"?',opts:['Triste','Inquiet','Malade','Stressé'],ans:2},
    {q:'¿Cómo se dice "Énervé" en español?',opts:['Decepcionado','Enojado / bravo','Preocupado','Contento'],ans:1},
    {q:'¿Qué significa "Contento / feliz"?',opts:['Joyeux','Amoureux','Content','Effrayé'],ans:2},
    {q:'¿Cómo se dice "Inquiet" en español?',opts:['Estresado','Enamorado','Preocupado / angustiado','Decepcionado'],ans:2},
    {q:'¿Qué significa "Tener miedo"?',opts:['Avoir faim','Avoir peur','Avoir froid','Avoir sommeil'],ans:1}
   ]},
  {id:'log',level:1,emoji:'🏠',name:'La Vivienda',sub:'Sala, cocina… / Le logement',
   words:[
    {es:'La sala',fr:'Le salon',em:'🛋️'},{es:'La cocina',fr:'La cuisine',em:'🍳'},
    {es:'La habitación / el cuarto',fr:'La chambre',em:'🛏️'},{es:'El baño / la ducha',fr:'La salle de bain',em:'🚿'},
    {es:'El baño / el inodoro',fr:'Les toilettes',em:'🚽'},{es:'La entrada',fr:'L\'entrée',em:'🚪'},
    {es:'El garaje',fr:'Le garage',em:'🚗'},
    {es:'El comedor',fr:'La salle à manger',em:'🍽️'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le salon" en español?',opts:['La cocina','La habitación','La sala','El garaje'],ans:2},
    {q:'¿Qué significa "La cocina"?',opts:['La salle à manger','La cuisine','La salle de bain','Le salon'],ans:1},
    {q:'¿Cómo se dice "La chambre" en español?',opts:['La sala','La habitación / el cuarto','La entrada','El garaje'],ans:1},
    {q:'¿Qué significa "El baño / la ducha"?',opts:['Les toilettes','Le garage','La salle de bain','La salle à manger'],ans:2},
    {q:'¿Cómo se dice "La salle à manger" en español?',opts:['La sala','El comedor','La cocina','La habitación'],ans:1}
   ]},
  {id:'veth',level:1,emoji:'👗',name:'La Ropa',sub:'Camiseta, pantalón… / Les vêtements',
   words:[
    {es:'La camiseta',fr:'Le t-shirt',em:'👕'},{es:'El pantalón',fr:'Le pantalon',em:'👖'},
    {es:'El vestido',fr:'La robe',em:'👗'},{es:'La chaqueta / el saco',fr:'La veste',em:'🧥'},
    {es:'Los zapatos',fr:'Les chaussures',em:'👟'},{es:'El sombrero',fr:'Le chapeau',em:'🎩'},
    {es:'El abrigo',fr:'Le manteau',em:'🧥'},{es:'La bufanda',fr:'L\'écharpe',em:'🧣'},
    {es:'El bolso / la cartera',fr:'Le sac à main',em:'👜'},{es:'La camisa',fr:'La chemise',em:'👔'},
    {es:'La gorra',fr:'La casquette',em:'🧢'},{es:'Los calcetines / las medias',fr:'Les chaussettes',em:'🧦'},
    {es:'Los guantes',fr:'Les gants',em:'🧤'},{es:'El short / el bermuda',fr:'Le short',em:'🩳'},
    {es:'El suéter / el buzo',fr:'Le pull',em:'🧥'},
    {es:'El traje de baño',fr:'Le maillot de bain',em:'🩱'},
    {es:'La falda',fr:'La jupe',em:'👗'},{es:'El reloj de muñeca',fr:'La montre',em:'⌚'},
    {es:'El calzoncillo',fr:'Le slip',em:'🩲'},
    {es:'El gorro de lana',fr:'Le bonnet',em:'🎿'},
    {es:'El brasier / el sostén',fr:'Le soutien-gorge',em:'👙'},
    {es:'El bóxer',fr:'Le boxer',em:'🩳'},
    {es:'La calzoneta / la ropa interior',fr:'La culotte',em:'🩲'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le t-shirt" en español?',opts:['El suéter','La camisa','La camiseta','La chaqueta'],ans:2},
    {q:'¿Qué significa "El pantalón"?',opts:['Le short','Le pantalon','La jupe','Le vestido'],ans:1},
    {q:'¿Cómo se dice "Les chaussures" en español?',opts:['Los calcetines','Los guantes','Los zapatos','El sombrero'],ans:2},
    {q:'¿Qué significa "El abrigo"?',opts:['La bufanda','La chaqueta','Le bonnet','Le manteau'],ans:3},
    {q:'¿Cómo se dice "La casquette" en español?',opts:['El sombrero','La gorra','El gorro','El suéter'],ans:1},
    {q:'¿Qué significa "La bufanda"?',opts:['Les gants','Le manteau','L\'écharpe','Le bonnet'],ans:2},
    {q:'¿Cómo se dice "La robe" en español?',opts:['La falda','El vestido','La chaqueta','El suéter'],ans:1},
    {q:'¿Qué significa "Los calcetines / las medias"?',opts:['Les chaussures','Les gants','Les chaussettes','Le maillot de bain'],ans:2}
   ]},
  {id:'corps',level:1,emoji:'🧍',name:'El Cuerpo',sub:'Cabeza, brazo, pie… / Le corps',
   words:[
    {es:'La cabeza',fr:'La tête',em:'🗣️'},{es:'El brazo / los brazos',fr:'Le bras',em:'💪'},
    {es:'La mano / las manos',fr:'La main',em:'✋'},
    {es:'La pierna / las piernas',fr:'La jambe',em:'🦵'},
    {es:'El pie / los pies',fr:'Le pied',em:'🦶'},
    {es:'El ojo / los ojos',fr:'L\'œil / Les yeux',em:'👀'},
    {es:'La espalda',fr:'Le dos',em:'🔙'},{es:'La barriga / el estómago',fr:'Le ventre',em:'🫃'},
    {es:'El cerebro',fr:'Le cerveau',em:'🧠'},{es:'La oreja / las orejas',fr:'L\'oreille',em:'👂'},
    {es:'La nariz',fr:'Le nez',em:'👃'},{es:'La boca',fr:'La bouche',em:'👄'},
    {es:'El diente / los dientes',fr:'La dent',em:'🦷'},
    {es:'El hueso / los huesos',fr:'L\'os',em:'🦴'},
    {es:'El corazón',fr:'Le cœur',em:'❤️'},{es:'El dedo / los dedos',fr:'Le doigt',em:'☝️'},
    {es:'La lengua',fr:'La langue',em:'👅'},{es:'Los labios',fr:'Les lèvres',em:'💋'},
    {es:'El cabello / el pelo',fr:'Les cheveux',em:'💇‍♂️'},{es:'El cuello',fr:'Le cou',em:'🧣'},
    {es:'Las nalgas / los glúteos',fr:'Les fesses',em:'🍑'},{es:'La uña / las uñas',fr:'L\'ongle',em:'💅'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La tête" en español?',opts:['La nariz','La boca','La cabeza','El cuello'],ans:2},
    {q:'¿Qué significa "El ojo / los ojos"?',opts:['Les oreilles','Le nez','Les lèvres','Les yeux'],ans:3},
    {q:'¿Cómo se dice "La main" en español?',opts:['El pie','La pierna','El brazo','La mano / las manos'],ans:3},
    {q:'¿Qué significa "La nariz"?',opts:['La bouche','La nariz','L\'oreille','Le cou'],ans:1},
    {q:'¿Cómo se dice "La jambe" en español?',opts:['El brazo','La pierna','El pie','La espalda'],ans:1},
    {q:'¿Qué significa "El cerebro"?',opts:['Le cœur','L\'estomac','Le cerveau','L\'os'],ans:2},
    {q:'¿Cómo se dice "Les dents" en español?',opts:['Los labios','La lengua','El diente / los dientes','Las orejas'],ans:2},
    {q:'¿Qué significa "El corazón"?',opts:['Le cerveau','Le cœur','L\'os','Le dos'],ans:1}
   ]},
  {id:'anim',level:1,emoji:'🐘',name:'Los Animales',sub:'Perro, gato, caballo… / Les animaux',
   words:[
    {es:'El perro',fr:'Le chien',em:'🐶'},{es:'El gato',fr:'Le chat',em:'🐱'},
    {es:'El pájaro / el ave',fr:'L\'oiseau',em:'🐦'},{es:'El pez / el pescado',fr:'Le poisson',em:'🐟'},
    {es:'El caballo',fr:'Le cheval',em:'🐴'},{es:'La vaca',fr:'La vache',em:'🐮'},
    {es:'La gallina',fr:'La poule',em:'🐔'},{es:'El conejo',fr:'Le lapin',em:'🐰'},
    {es:'El burro',fr:'L\'âne',em:'🫏'},{es:'El chancho / el cerdo',fr:'Le cochon',em:'🐷'},
    {es:'El elefante',fr:'L\'éléphant',em:'🐘'},{es:'El tigre',fr:'Le tigre',em:'🐯'},
    {es:'El oso',fr:'L\'ours',em:'🐻'},{es:'El delfín',fr:'Le dauphin',em:'🐬'},
    {es:'La ballena',fr:'La baleine',em:'🐳'},{es:'El águila',fr:'L\'aigle',em:'🦅'},
    {es:'La rana',fr:'La grenouille',em:'🐸'},{es:'La serpiente / la culebra',fr:'Le serpent',em:'🐍'},
    {es:'El pato',fr:'Le canard',em:'🦆'},{es:'El pingüino',fr:'Le pingouin',em:'🐧'},
    {es:'La mariposa',fr:'Le papillon',em:'🦋'},{es:'La araña',fr:'L\'araignée',em:'🕷️'},
    {es:'El mosquito / el zancudo',fr:'Le moustique',em:'🦟'},
    {es:'La hormiga',fr:'La fourmi',em:'🐜'},{es:'El lagarto / la lagartija',fr:'Le lézard',em:'🦎'},
    {es:'El pollo (carne)',fr:'Le poulet',em:'🍗'},{es:'El gallo',fr:'Le coq',em:'🐓'},
    {es:'El chivo / la cabra',fr:'La chèvre',em:'🐐'},{es:'El cordero',fr:'L\'agneau',em:'🐑'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le chien" en español?',opts:['El gato','El caballo','El perro','El conejo'],ans:2},
    {q:'¿Qué significa "El gato"?',opts:['Le chien','Le chat','Le lapin','L\'oiseau'],ans:1},
    {q:'¿Cómo se dice "Le cheval" en español?',opts:['La vaca','El caballo','El oso','El chancho'],ans:1},
    {q:'¿Qué significa "La gallina"?',opts:['Le canard','Le coq','La poule','Le lapin'],ans:2},
    {q:'¿Cómo se dice "L\'éléphant" en español?',opts:['El tigre','La ballena','El elefante','El oso'],ans:2},
    {q:'¿Qué emoji corresponde al "burro" (âne)?',opts:['🐷','🐴','🫏','🐐'],ans:2},
    {q:'¿Cómo se dice "Le papillon" en español?',opts:['La hormiga','La mariposa','La araña','El mosquito'],ans:1},
    {q:'¿Qué significa "La serpiente / la culebra"?',opts:['Le lézard','La grenouille','Le serpent','L\'insecte'],ans:2},
    {q:'¿Cómo se dice "Le moustique" en español ecuatoriano?',opts:['La hormiga','La mariposa','La araña','El mosquito / el zancudo'],ans:3},
    {q:'¿Qué significa "El cordero"?',opts:['La vache','Le cochon','L\'agneau','La chèvre'],ans:2},
    {q:'¿Cómo se dice "Le coq" en español?',opts:['La gallina','El pollo','El gallo','El pato'],ans:2},
    {q:'¿Qué significa "El delfín"?',opts:['La baleine','Le requin','Le dauphin','Le poisson'],ans:2}
   ]},
  {id:'verb',level:1,emoji:'📝',name:'Los Verbos',sub:'Ser, tener, ir… / Les verbes principaux',
   words:[
    {es:'Soy / Estoy (ser/estar)',fr:'Je suis',em:'🧑'},{es:'Tengo (tener)',fr:'J\'ai',em:'🤲'},
    {es:'Hablo (hablar)',fr:'Je parle',em:'🗣️'},{es:'Vivo (vivir)',fr:'J\'habite',em:'🏠'},
    {es:'Voy (ir)',fr:'Je vais',em:'🚶'},{es:'Como (comer)',fr:'Je mange',em:'🍽️'},
    {es:'Bebo / tomo (beber)',fr:'Je bois',em:'🥤'},{es:'Me gusta / quiero (gustar)',fr:'J\'aime',em:'❤️'},
    {es:'Corro (correr)',fr:'Je cours',em:'🏃‍♂️'},{es:'Duermo (dormir)',fr:'Je dors',em:'😴'},
    {es:'Camino (caminar)',fr:'Je marche',em:'🚶‍♂️'},{es:'Leo (leer)',fr:'Je lis',em:'📖'},
    {es:'Escribo (escribir)',fr:'J\'écris',em:'✍️'},{es:'Escucho (escuchar)',fr:'J\'écoute',em:'🎧'},
    {es:'Miro / veo (mirar)',fr:'Je regarde',em:'👀'},{es:'Aprendo (aprender)',fr:'J\'apprends',em:'🧠'},
    {es:'Compro (comprar)',fr:'J\'achète',em:'🛒'},{es:'Vendo (vender)',fr:'Je vends',em:'💰'},
    {es:'Doy (dar)',fr:'Je donne',em:'🤲'},{es:'Llamo (llamar)',fr:'J\'appelle',em:'📞'},
    {es:'Cocino (cocinar)',fr:'Je cuisine',em:'🍳'},{es:'Limpio (limpiar)',fr:'Je nettoie',em:'🧹'},
    {es:'Me baño / me lavo (bañarse)',fr:'Je me lave',em:'🧼'},{es:'Tomo / cojo (tomar)',fr:'Je prends',em:'🤲'},
    {es:'Pienso (pensar)',fr:'Je pense',em:'🤔'},{es:'Manejo / conduzco (manejar)',fr:'Je conduis',em:'🚗'},
    {es:'Sonrío (sonreír)',fr:'Je souris',em:'😊'},{es:'Me voy (irse)',fr:'Je pars',em:'🚪'},
    {es:'Pago (pagar)',fr:'Je paie',em:'💳'},{es:'Llego (llegar)',fr:'J\'arrive',em:'🛬'},
    {es:'Pregunto / pido (preguntar)',fr:'Je demande',em:'🙋‍♂️'},
    {es:'Busco (buscar)',fr:'Je cherche',em:'🔍'},
    {es:'Trabajo (trabajar)',fr:'Je travaille',em:'💼'},
    {es:'Ofrezco / regalo (ofrecer)',fr:'J\'offre',em:'🎁'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "J\'ai" en español?',opts:['Soy','Voy','Tengo','Hablo'],ans:2},
    {q:'¿Qué significa "Como"?',opts:['Je bois','Je mange','Je dors','Je marche'],ans:1},
    {q:'¿Cómo se dice "Je vais" en español?',opts:['Soy','Tengo','Vengo','Voy'],ans:3},
    {q:'¿Qué significa "Hablo"?',opts:['J\'écoute','Je lis','Je parle','Je regarde'],ans:2},
    {q:'¿Cómo se dice "Je dors" en español?',opts:['Corro','Duermo','Camino','Leo'],ans:1},
    {q:'¿Qué significa "Compro"?',opts:['Je vends','Je cherche','Je paie','J\'achète'],ans:3},
    {q:'¿Cómo se dice "Je travaille" en español?',opts:['Limpio','Cocino','Trabajo','Manejo'],ans:2},
    {q:'¿Qué significa "Busco"?',opts:['Je trouve','Je cherche','Je demande','J\'achète'],ans:1},
    {q:'¿Cómo se dice "Je paie" en español?',opts:['Doy','Tomo','Vendo','Pago'],ans:3},
    {q:'¿Qué significa "Aprendo"?',opts:['J\'enseigne','J\'écoute','J\'apprends','Je lis'],ans:2},
    {q:'¿Cómo se dice "Je conduis" en español?',opts:['Corro','Camino','Manejo / conduzco','Me voy'],ans:2},
    {q:'¿Qué significa "Ofrezco / regalo"?',opts:['J\'achète','Je cherche','J\'offre','Je vends'],ans:2}
   ]},
  {id:'pays',level:1,emoji:'🌍',name:'Los Países',sub:'Francia, Ecuador… / Les pays',
   words:[
    {es:'Francia',fr:'La France',em:'🇫🇷'},{es:'Ecuador',fr:'L\'Équateur',em:'🇪🇨'},
    {es:'España',fr:'L\'Espagne',em:'🇪🇸'},{es:'Italia',fr:'L\'Italie',em:'🇮🇹'},
    {es:'Canadá',fr:'Le Canada',em:'🇨🇦'},{es:'Brasil',fr:'Le Brésil',em:'🇧🇷'},
    {es:'Colombia',fr:'La Colombie',em:'🇨🇴'},{es:'Argentina',fr:'L\'Argentine',em:'🇦🇷'},
    {es:'México',fr:'Le Mexique',em:'🇲🇽'},{es:'Chile',fr:'Le Chili',em:'🇨🇱'},
    {es:'Perú',fr:'Le Pérou',em:'🇵🇪'},{es:'Venezuela',fr:'Le Venezuela',em:'🇻🇪'},
    {es:'Bolivia',fr:'La Bolivie',em:'🇧🇴'},{es:'Paraguay',fr:'Le Paraguay',em:'🇵🇾'},
    {es:'Uruguay',fr:'L\'Uruguay',em:'🇺🇾'},{es:'Cuba',fr:'Cuba',em:'🇨🇺'},
    {es:'República Dominicana',fr:'La République Dominicaine',em:'🇩🇴'},
    {es:'Rusia',fr:'La Russie',em:'🇷🇺'},{es:'China',fr:'La Chine',em:'🇨🇳'},
    {es:'Estados Unidos',fr:'Les États-Unis',em:'🇺🇸'},
    {es:'Japón',fr:'Le Japon',em:'🇯🇵'},{es:'Etiopía',fr:'L\'Éthiopie',em:'🇪🇹'},
    {es:'Alemania',fr:'L\'Allemagne',em:'🇩🇪'},{es:'Reino Unido',fr:'Le Royaume-Uni',em:'🇬🇧'},
    {es:'Portugal',fr:'Le Portugal',em:'🇵🇹'},{es:'Bélgica',fr:'La Belgique',em:'🇧🇪'},
    {es:'Suiza',fr:'La Suisse',em:'🇨🇭'},{es:'Sudáfrica',fr:'L\'Afrique du Sud',em:'🇿🇦'},
    {es:'Marruecos',fr:'Le Maroc',em:'🇲🇦'},{es:'Kenia',fr:'Le Kenya',em:'🇰🇪'},
    {es:'Egipto',fr:'L\'Égypte',em:'🇪🇬'},{es:'Senegal',fr:'Le Sénégal',em:'🇸🇳'},
    {es:'Arabia Saudita',fr:'L\'Arabie saoudite',em:'🇸🇦'},{es:'Israel',fr:'Israël',em:'🇮🇱'},
    {es:'India',fr:'L\'Inde',em:'🇮🇳'},{es:'Corea del Sur',fr:'La Corée du Sud',em:'🇰🇷'},
    {es:'Turquía',fr:'La Turquie',em:'🇹🇷'},{es:'Nueva Zelanda',fr:'La Nouvelle-Zélande',em:'🇳🇿'},
    {es:'Australia',fr:'L\'Australie',em:'🇦🇺'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La France" en español?',opts:['Bélgica','Francia','Suiza','Portugal'],ans:1},
    {q:'¿Qué significa "Alemania"?',opts:['Autriche','Pays-Bas','Allemagne','Danemark'],ans:2},
    {q:'¿Cómo se dice "Le Brésil" en español?',opts:['Perú','Chile','Brasil','Bolivia'],ans:2},
    {q:'¿Qué significa "Reino Unido"?',opts:['Irlande','Royaume-Uni','Écosse','Danemark'],ans:1},
    {q:'¿Cómo se dice "Le Maroc" en español?',opts:['Egipto','Senegal','Marruecos','Sudáfrica'],ans:2},
    {q:'¿Qué significa "Corea del Sur"?',opts:['Japon','Chine','Vietnam','Corée du Sud'],ans:3},
    {q:'¿Cómo se dice "L\'Inde" en español?',opts:['Irán','India','Irak','Indonesia'],ans:1},
    {q:'¿Qué significa "Suiza"?',opts:['Suède','Slovénie','Suisse','Slovaquie'],ans:2},
    {q:'¿Cómo se dice "La Turquie" en español?',opts:['Túnez','Tailandia','Turquía','Tanzania'],ans:2},
    {q:'¿Qué significa "Nueva Zelanda"?',opts:['Nouvelle-Calédonie','Nouvelle-Guinée','Nouvelle-Zélande','Nouvelle-Écosse'],ans:2},
    {q:'¿Cómo se dice "La Colombie" en español?',opts:['Bolivia','Colombia','Chile','Ecuador'],ans:1},
    {q:'¿Qué significa "Estados Unidos"?',opts:['Canada','Mexique','États-Unis','Porto Rico'],ans:2}
   ]},
  {id:'plan',level:1,emoji:'🌿',name:'Las Plantas',sub:'Flor, árbol, selva… / Les plantes',
   words:[
    {es:'La flor',fr:'La fleur',em:'🌸'},{es:'El árbol',fr:'L\'arbre',em:'🌳'},
    {es:'El pasto / la hierba',fr:'L\'herbe',em:'🌿'},{es:'La hoja',fr:'La feuille',em:'🍃'},
    {es:'La rosa',fr:'La rose',em:'🌹'},{es:'El bosque / la selva',fr:'La forêt',em:'🌲'},
    {es:'El jardín',fr:'Le jardin',em:'🏡'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La fleur" en español?',opts:['La hoja','La flor','El pasto','La rosa'],ans:1},
    {q:'¿Qué significa "El árbol"?',opts:['La feuille','L\'herbe','L\'arbre','La fleur'],ans:2},
    {q:'¿Cómo se dice "La rose" en español?',opts:['La flor','La hoja','El pasto','La rosa'],ans:3},
    {q:'¿Qué significa "El bosque / la selva"?',opts:['Le jardin','La forêt','Le champ','Le parc'],ans:1},
    {q:'¿Cómo se dice "Le jardin" en español?',opts:['El bosque','El árbol','El jardín','La flor'],ans:2}
   ]},
  {id:'salut',level:1,emoji:'👋',name:'Los Saludos',sub:'Buenos días, gracias… / Les salutations',
   words:[
    {es:'Buenos días / buen día',fr:'Bonjour',em:'🌅'},{es:'Buenas tardes / noches',fr:'Bonsoir',em:'🌆'},
    {es:'Hola (informal)',fr:'Salut',em:'👋'},{es:'Adiós / chao',fr:'Au revoir',em:'👋'},
    {es:'Hasta luego / hasta pronto',fr:'À bientôt',em:'⏱️'},{es:'Buenas noches',fr:'Bonne nuit',em:'🌙'},
    {es:'Gracias',fr:'Merci',em:'🙏'},{es:'Por favor (formal)',fr:'S\'il vous plaît',em:'🤝'},
    {es:'Perdón / disculpe',fr:'Pardon',em:'🙇'},{es:'Sí',fr:'Oui',em:'✅'},
    {es:'No',fr:'Non',em:'❌'},{es:'¿Cómo estás? / ¿Qué tal?',fr:'Comment ça va ?',em:'🤗'},
    {es:'Estoy bien, gracias',fr:'Je vais bien, merci',em:'😊'},
    {es:'¡Qué bacán! / ¡Genial!',fr:'Super !',em:'🌟'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Bonjour" en español?',opts:['Hola','Buenas tardes','Buenos días / buen día','Buenas noches'],ans:2},
    {q:'¿Qué significa "Adiós / chao"?',opts:['À tout à l\'heure','Au revoir','Bonjour','Bonne nuit'],ans:1},
    {q:'¿Cómo se dice "Merci" en español?',opts:['Por favor','Perdón','Gracias','Sí'],ans:2},
    {q:'¿Qué significa "Hasta luego / hasta pronto"?',opts:['Adieu','À bientôt','Bonne nuit','Bonjour'],ans:1},
    {q:'¿Cómo se dice "S\'il vous plaît" en español?',opts:['Gracias','Perdón','Por favor','Sí'],ans:2},
    {q:'¿Qué significa "Buenas tardes / noches"?',opts:['Bonjour','Bonsoir','Bonne nuit (pour dormir)','À bientôt'],ans:1},
    {q:'¿Qué significa "¿Cómo estás?"?',opts:['Où es-tu ?','Comment tu t\'appelles ?','Comment vas-tu ?','Quel âge as-tu ?'],ans:2},
    {q:'¿Cómo se dice "Oui" en español?',opts:['No','Sí','Perdón','Gracias'],ans:1}
   ]},
  {id:'met',level:1,emoji:'💼',name:'Las Profesiones',sub:'Médico, cocinero… / Les professions',
   words:[
    {es:'El/la profesor(a)',fr:'Le professeur',em:'👩‍🏫'},{es:'El/la médico / el doctor',fr:'Le médecin',em:'👨‍⚕️'},
    {es:'El/la cocinero(a)',fr:'Le cuisinier',em:'👨‍🍳'},{es:'El/la estudiante',fr:'L\'étudiant(e)',em:'🎓'},
    {es:'El/la vendedor(a)',fr:'Le vendeur',em:'🏪'},{es:'El/la mesero(a)',fr:'Le serveur',em:'🍽️'},
    {es:'El/la chofer / el taxista',fr:'Le chauffeur',em:'🚗'},{es:'El/la enfermero(a)',fr:'L\'infirmier(ère)',em:'💉'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le médecin" en español?',opts:['El profesor','El/la médico / el doctor','El enfermero','El cocinero'],ans:1},
    {q:'¿Qué significa "El/la profesor(a)"?',opts:['L\'étudiant','Le directeur','Le professeur','Le concierge'],ans:2},
    {q:'¿Cómo se dice "Le cuisinier" en español?',opts:['El mesero','El vendedor','El chofer','El/la cocinero(a)'],ans:3},
    {q:'¿Qué significa "El/la estudiante"?',opts:['Le professeur','L\'étudiant','Le médecin','Le vendeur'],ans:1},
    {q:'¿Cómo se dice "L\'infirmier" en español?',opts:['El médico','El profesor','El/la enfermero(a)','El mesero'],ans:2}
   ]},
  {id:'trans',level:1,emoji:'🚌',name:'Los Transportes',sub:'Bus, tren, bici… / Les transports',
   words:[
    {es:'El autobús / el bus',fr:'Le bus',em:'🚌'},{es:'El tren',fr:'Le train',em:'🚂'},
    {es:'El carro / el auto',fr:'La voiture',em:'🚗'},{es:'La bicicleta',fr:'Le vélo',em:'🚴'},
    {es:'El metro',fr:'Le métro',em:'🚇'},{es:'El taxi',fr:'Le taxi',em:'🚕'},
    {es:'El avión',fr:'L\'avion',em:'✈️'},{es:'El ticket / el pasaje',fr:'Le ticket',em:'🎫'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le bus" en español?',opts:['El tren','El metro','El autobús / el bus','El taxi'],ans:2},
    {q:'¿Qué significa "El carro / el auto"?',opts:['Le train','La moto','La voiture','Le camion'],ans:2},
    {q:'¿Cómo se dice "L\'avion" en español?',opts:['El barco','El avión','La bicicleta','El metro'],ans:1},
    {q:'¿Qué significa "La bicicleta"?',opts:['La voiture','La moto','Le train','Le vélo'],ans:3},
    {q:'¿Cómo se dice "Le métro" en español?',opts:['El bus','El taxi','El metro','El tren'],ans:2}
   ]},
  {id:'lieux',level:1,emoji:'🏙️',name:'Los Lugares',sub:'Mercado, hospital… / Les lieux importants',
   words:[
    {es:'El supermercado',fr:'Le supermarché',em:'🛒'},{es:'La escuela / el colegio',fr:'L\'école',em:'🏫'},
    {es:'El hospital',fr:'L\'hôpital',em:'🏥'},{es:'El parque / la plaza',fr:'Le parc',em:'🌳'},
    {es:'El banco',fr:'La banque',em:'🏦'},{es:'La farmacia',fr:'La pharmacie',em:'💊'},
    {es:'La iglesia',fr:'L\'église',em:'⛪'},{es:'El municipio / la alcaldía',fr:'La mairie',em:'🏛️'},
    {es:'El campo / el sembrado',fr:'Le champ',em:'🌾'},{es:'El río / la quebrada',fr:'La rivière',em:'🏞️'},
    {es:'La calle / la avenida',fr:'La rue',em:'🛣️'},{es:'La ciudad',fr:'La ville',em:'🏙️'},
    {es:'La montaña / el cerro',fr:'La montagne',em:'⛰️'},{es:'El océano / el mar',fr:'L\'océan',em:'🌊'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La pharmacie" en español?',opts:['El banco','El hospital','La farmacia','El supermercado'],ans:2},
    {q:'¿Qué significa "La escuela / el colegio"?',opts:['La bibliothèque','L\'école','L\'université','L\'institut'],ans:1},
    {q:'¿Cómo se dice "L\'hôpital" en español?',opts:['La farmacia','El municipio','El hospital','El banco'],ans:2},
    {q:'¿Qué significa "El municipio / la alcaldía"?',opts:['L\'église','Le tribunal','La mairie','Le marché'],ans:2},
    {q:'¿Cómo se dice "La rivière" en español?',opts:['El océano','La montaña','El campo','El río / la quebrada'],ans:3},
    {q:'¿Qué significa "El supermercado"?',opts:['Le marché','Le supermarché','La boutique','L\'épicerie'],ans:1},
    {q:'¿Cómo se dice "La ville" en español?',opts:['La calle','El campo','La ciudad','La montaña'],ans:2},
    {q:'¿Qué significa "El banco"?',opts:['La pharmacie','La banque','La caisse','Le bureau'],ans:1}
   ]},
  {id:'orient',level:1,emoji:'🧭',name:'Orientarse',sub:'Izquierda, derecha… / S\'orienter',
   words:[
    {es:'A la izquierda',fr:'À gauche',em:'⬅️'},{es:'A la derecha',fr:'À droite',em:'➡️'},
    {es:'Todo recto / derecho',fr:'Tout droit',em:'⬆️'},{es:'Al lado',fr:'À côté',em:'↔️'},
    {es:'Frente / enfrente',fr:'En face',em:'🔄'},{es:'Lejos',fr:'Loin',em:'🌅'},
    {es:'Cerca',fr:'Près',em:'📍'},{es:'El mapa / el plano',fr:'Le plan',em:'🗺️'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "À gauche" en español?',opts:['A la derecha','Todo recto','A la izquierda','Enfrente'],ans:2},
    {q:'¿Qué significa "A la derecha"?',opts:['À gauche','Tout droit','À côté','À droite'],ans:3},
    {q:'¿Cómo se dice "Tout droit" en español?',opts:['A la izquierda','Todo recto / derecho','Enfrente','Al lado'],ans:1},
    {q:'¿Qué significa "Frente / enfrente"?',opts:['À côté','Derrière','En face','Près'],ans:2},
    {q:'¿Cómo se dice "Près" en español?',opts:['Lejos','Al lado','Cerca','Enfrente'],ans:2}
   ]},
  {id:'sante',level:1,emoji:'🏥',name:'La Salud',sub:'Médico, farmacia… / La santé',
   words:[
    {es:'El médico / el doctor',fr:'Le médecin',em:'👨‍⚕️'},{es:'El hospital',fr:'L\'hôpital',em:'🏥'},
    {es:'El medicamento / la medicina',fr:'Le médicament',em:'💊'},
    {es:'La receta médica',fr:'L\'ordonnance',em:'📋'},
    {es:'Tener dolor / doler',fr:'Avoir mal',em:'🤕'},{es:'La fiebre',fr:'La fièvre',em:'🌡️'},
    {es:'La tos',fr:'La toux',em:'😮‍💨'},{es:'La farmacia',fr:'La pharmacie',em:'🏪'},
    {es:'El/la enfermero(a)',fr:'L\'infirmier(ère)',em:'👨‍⚕️'},
    {es:'La vacuna',fr:'Le vaccin',em:'💉'},
    {es:'La inyección',fr:'L\'injection',em:'🩸'},
    {es:'La curita / el vendaje',fr:'Le pansement',em:'🩹'},
    {es:'La ambulancia',fr:'L\'ambulance',em:'🚑'},
    {es:'La emergencia / las urgencias',fr:'Les urgences',em:'🆘'},
    {es:'El/la paciente',fr:'Le patient',em:'🛏️'},
    {es:'La consulta médica',fr:'La consultation',em:'📋'},
    {es:'El termómetro',fr:'Le thermomètre',em:'🌡️'},
    {es:'La presión arterial',fr:'La tension artérielle',em:'🩺'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'hôpital" en español?',opts:['La farmacia','El hospital','Las urgencias','La consulta'],ans:1},
    {q:'¿Qué significa "La fiebre"?',opts:['La toux','La douleur','La fièvre','La grippe'],ans:2},
    {q:'¿Cómo se dice "Le vaccin" en español?',opts:['La inyección','La vacuna','El vendaje','El medicamento'],ans:1},
    {q:'¿Qué significa "La ambulancia"?',opts:['L\'hôpital','L\'urgence','L\'ambulance','Le médecin'],ans:2},
    {q:'¿Cómo se dice "L\'ordonnance" en español?',opts:['La consulta','El medicamento','La receta médica','La vacuna'],ans:2},
    {q:'¿Qué significa "La curita / el vendaje"?',opts:['L\'injection','Le thermomètre','Le pansement','Le médicament'],ans:2},
    {q:'¿Cómo se dice "Le thermomètre" en español?',opts:['La presión','El termómetro','La fiebre','La inyección'],ans:1},
    {q:'¿Qué significa "Las urgencias"?',opts:['Le médecin de garde','La salle d\'attente','Les urgences','La consultation'],ans:2}
   ]},
  {id:'objets',level:1,emoji:'🔑',name:'Objetos del Día',sub:'Teléfono, llaves… / Objets du quotidien',
   words:[
    {es:'El teléfono / el celular',fr:'Le téléphone',em:'📱'},
    {es:'Las llaves',fr:'Les clés',em:'🔑'},{es:'La billetera / el monedero',fr:'Le portefeuille',em:'👛'},
    {es:'La mochila',fr:'Le sac à dos',em:'🎒'},
    {es:'Los lentes / los anteojos',fr:'Les lunettes',em:'👓'},
    {es:'El papel',fr:'Le papier',em:'📄'},{es:'El esfero / el bolígrafo',fr:'Le stylo',em:'🖊️'},
    {es:'Las tijeras',fr:'Les ciseaux',em:'✂️'},{es:'El cargador',fr:'Le chargeur',em:'🔌'},
    {es:'La botella',fr:'La bouteille',em:'🍶'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Les clés" en español?',opts:['El esfero','Las tijeras','Las llaves','El cargador'],ans:2},
    {q:'¿Qué significa "El teléfono / el celular"?',opts:['La tablette','Le téléphone','L\'ordinateur','La radio'],ans:1},
    {q:'¿Cómo se dice "Le sac à dos" en español?',opts:['La billetera','El bolso','La mochila','El sombrero'],ans:2},
    {q:'¿Qué significa "El cargador"?',opts:['Le câble','L\'adaptateur','Le chargeur','La batterie'],ans:2},
    {q:'¿Cómo se dice "Le stylo" en español ecuatoriano?',opts:['El lápiz','El papel','El esfero / el bolígrafo','El libro'],ans:2},
    {q:'¿Qué significa "Los lentes / los anteojos"?',opts:['Les écouteurs','Les lunettes','Les gants','Les montres'],ans:1},
    {q:'¿Cómo se dice "Les ciseaux" en español?',opts:['El cuchillo','Las tijeras','El esfero','El papel'],ans:1},
    {q:'¿Cómo se dice "Le portefeuille" en español?',opts:['La mochila','Las llaves','La billetera / el monedero','El teléfono'],ans:2}
   ]}
];

var LEVEL2_THEMES=[
  {id:'alpha2',level:2,emoji:'🔤',name:'El Alfabeto',sub:'Deletrear en situación / Épeler en situation',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Nombre por teléfono',img:'📞',
     dialogue:[
      {s:'Agent',fr:'Bonjour, quel est votre nom de famille ?',es:'Buenos días, ¿cuál es su apellido?',side:'right'},
      {s:'Cliente',fr:'Je m\'appelle Rodríguez.',es:'Me llamo Rodríguez.',side:'left'},
      {s:'Agent',fr:'Pouvez-vous épeler, s\'il vous plaît ?',es:'¿Puede deletrearlo, por favor?',side:'right'},
      {s:'Cliente',fr:'R-O-D-R-I-G-U-E-Z.',es:'R-O-D-R-I-G-U-E-Z.',side:'left'},
      {s:'Agent',fr:'Merci, c\'est bien noté.',es:'Gracias, ya quedó anotado.',side:'right'}
     ]},
    {label:'Sit. 2',title:'Correo electrónico',img:'📧',
     dialogue:[
      {s:'Réceptionniste',fr:'Quelle est votre adresse email ?',es:'¿Cuál es su correo electrónico?',side:'right'},
      {s:'Luisa',fr:'C\'est luisa.rosa@gmail.com',es:'Es luisa punto rosa arroba gmail punto com.',side:'left'},
      {s:'Réceptionniste',fr:'Pouvez-vous épeler le nom ?',es:'¿Puede deletrear el nombre?',side:'right'},
      {s:'Luisa',fr:'Bien sûr : L-U-I-S-A. Point. R-O-S-A.',es:'Claro: L-U-I-S-A. Punto. R-O-S-A.',side:'left'},
      {s:'Réceptionniste',fr:'Parfait, merci beaucoup !',es:'¡Perfecto, muchas gracias!',side:'right'}
     ]},
    {label:'Sit. 3',title:'Nombre de la calle',img:'🏢',
     dialogue:[
      {s:'Employée',fr:'Quelle est votre adresse ?',es:'¿Cuál es su dirección?',side:'right'},
      {s:'María',fr:'J\'habite rue Beaubien.',es:'Vivo en la calle Beaubien.',side:'left'},
      {s:'Employée',fr:'Comment ça s\'écrit, Beaubien ?',es:'¿Cómo se escribe Beaubien?',side:'right'},
      {s:'María',fr:'B-E-A-U-B-I-E-N.',es:'B-E-A-U-B-I-E-N.',side:'left'},
      {s:'Employée',fr:'Très bien, merci.',es:'Muy bien, gracias.',side:'right'}
     ]}
   ],
   vocab:['Deletrear = Épeler','La letra = La lettre','¿Cómo se escribe? = Comment ça s\'écrit ?','¿Puede repetir? = Pouvez-vous répéter ?','Quedó anotado = C\'est noté'],
   quiz:[
    {q:'¿Qué significa "Deletrear"?',opts:['Épeler','Écrire','Parler','Lire'],ans:0},
    {q:'¿Qué significa "¿Cómo se escribe?"?',opts:['Comment ça se prononce ?','Comment ça s\'appelle ?','Comment ça s\'écrit ?','Combien de lettres ?'],ans:2},
    {q:'¿Qué significa "La letra"?',opts:['Le mot','La lettre','La phrase','Le livre'],ans:1}
   ]},
  {id:'pres2',level:2,emoji:'🙋',name:'Presentarse',sub:'En situación real / En situation réelle',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Encuentro amistoso',img:'🤝',
     dialogue:[
      {s:'Ana',fr:'Salut ! Je m\'appelle Ana. Et toi ?',es:'¡Hola! Me llamo Ana. ¿Y tú?',side:'left'},
      {s:'Pedro',fr:'Moi c\'est Pedro. Je viens de l\'Équateur.',es:'Yo soy Pedro. Vengo de Ecuador.',side:'right'},
      {s:'Ana',fr:'Ah super ! Tu habites à Lyon ?',es:'¡Qué bacán! ¿Vives en Lyon?',side:'left'},
      {s:'Pedro',fr:'Oui, depuis six mois. J\'ai vingt-huit ans.',es:'Sí, desde hace seis meses. Tengo veintiocho años.',side:'right'},
      {s:'Ana',fr:'Bienvenue ! Tu parles très bien français !',es:'¡Bienvenido! ¡Hablas muy bien el francés!',side:'left'}
     ]},
    {label:'Sit. 2',title:'Ambiente profesional',img:'💼',
     dialogue:[
      {s:'Directrice',fr:'Bonjour, je suis Madame Dupont.',es:'Buenos días, soy la señora Dupont.',side:'right'},
      {s:'Carlos',fr:'Bonjour Madame. Je m\'appelle Carlos Mora.',es:'Buenos días, señora. Me llamo Carlos Mora.',side:'left'},
      {s:'Directrice',fr:'Quelle est votre profession ?',es:'¿Cuál es su profesión?',side:'right'},
      {s:'Carlos',fr:'Je suis ingénieur. Je viens de Quito.',es:'Soy ingeniero. Vengo de Quito.',side:'left'},
      {s:'Directrice',fr:'Enchantée, monsieur Mora.',es:'Encantada, señor Mora.',side:'right'}
     ]},
    {label:'Sit. 3',title:'Llegada a una escuela',img:'🏫',
     dialogue:[
      {s:'Secrétaire',fr:'Bonjour, vous êtes nouveau ici ?',es:'Buenos días, ¿usted es nuevo aquí?',side:'right'},
      {s:'Luisa',fr:'Oui, je m\'appelle Luisa Pérez.',es:'Sí, me llamo Luisa Pérez.',side:'left'},
      {s:'Secrétaire',fr:'Quelle est votre nationalité ?',es:'¿Cuál es su nacionalidad?',side:'right'},
      {s:'Luisa',fr:'Je suis équatorienne. J\'ai trente ans.',es:'Soy ecuatoriana. Tengo treinta años.',side:'left'},
      {s:'Secrétaire',fr:'Bienvenue à l\'école !',es:'¡Bienvenida al colegio! ¡Que tenga buen día!',side:'right'}
     ]}
   ],
   vocab:['Me llamo = Je m\'appelle','Tengo ... años = J\'ai ... ans','Vengo de = Je viens de','Vivo en = J\'habite à','¡Bienvenido/a! = Bienvenue !','Encantado/a = Enchanté(e)'],
   quiz:[
    {q:'¿Qué significa "¡Bienvenido/a!"?',opts:['Au revoir','Bonjour','Bienvenue','Enchanté'],ans:2},
    {q:'¿Cómo se dice "J\'ai vingt ans" en español?',opts:['Soy veinte años','Tengo veinte años','Vengo veinte años','Vivo veinte'],ans:1},
    {q:'¿Qué significa "Encantado/a"?',opts:['Bonjour','Enchanté(e)','Merci','Pardon'],ans:1}
   ]},
  {id:'num2',level:2,emoji:'🔢',name:'Los Números',sub:'En situación real / En situation réelle',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Preguntar la hora',img:'⏰',dialogue:[
      {s:'Rosa',fr:'Excusez-moi, quelle heure est-il ?',es:'Disculpe, ¿qué hora es?',side:'left'},
      {s:'Passant',fr:'Il est deux heures et demie.',es:'Son las dos y media.',side:'right'},
      {s:'Rosa',fr:'Merci beaucoup !',es:'¡Muchas gracias!',side:'left'},
      {s:'Passant',fr:'De rien ! Bonne journée.',es:'¡De nada! Que tenga buen día.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Dar tu número de teléfono',img:'📱',dialogue:[
      {s:'Amie',fr:'C\'est quoi ton numéro de téléphone ?',es:'¿Cuál es tu número de teléfono?',side:'right'},
      {s:'María',fr:'C\'est le 06 32 15 20 11.',es:'Es el cero seis, treinta y dos, quince, veinte, once.',side:'left'},
      {s:'Amie',fr:'Zéro six, trente-deux... tu peux répéter ?',es:'Cero seis, treinta y dos... ¿puedes repetir?',side:'right'},
      {s:'María',fr:'Bien sûr ! 06 - 32 - 15 - 20 - 11.',es:'¡Claro! Cero seis - treinta y dos - quince - veinte - once.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Decir cuántos son',img:'👥',dialogue:[
      {s:'Hôtesse',fr:'Vous êtes combien de personnes ?',es:'¿Cuántas personas son?',side:'right'},
      {s:'Pedro',fr:'Nous sommes quatre : deux adultes et deux enfants.',es:'Somos cuatro: dos adultos y dos niños.',side:'left'},
      {s:'Hôtesse',fr:'Très bien. Vous avez réservé ?',es:'Muy bien. ¿Tienen reserva?',side:'right'},
      {s:'Pedro',fr:'Oui, au nom de Rodríguez. Pour vingt heures.',es:'Sí, a nombre de Rodríguez. Para las ocho de la noche.',side:'left'}
    ]}
   ],
   vocab:['¿Qué hora es? = Quelle heure est-il ?','Son las ... = Il est ... heures','¿Cuántos? = Combien ?','Somos = Nous sommes','El número = Le numéro'],
   quiz:[
    {q:'¿Cómo se pregunta la hora en español?',opts:['¿Cuál es la hora?','¿Qué hora es?','¿Es la hora?','¿Cuánto tiempo?'],ans:1},
    {q:'¿Qué significa "Somos cuatro"?',opts:['Nous avons quatre','Nous sommes quatre','Ils sont quatre','Il y en a quatre'],ans:1},
    {q:'¿Qué significa "Dos adultos"?',opts:['Deux personnes','Deux enfants','Deux adultes','Deux amis'],ans:2}
   ]},
  {id:'col2',level:2,emoji:'🎨',name:'Los Colores',sub:'En situación real / En situation réelle',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Color de una prenda',img:'👗',dialogue:[
      {s:'Amie',fr:'Tu aimes ma robe ?',es:'¿Te gusta mi vestido?',side:'right'},
      {s:'Luisa',fr:'Oui ! Elle est très belle. C\'est quelle couleur ?',es:'¡Sí! Es muy bonito. ¿De qué color es?',side:'left'},
      {s:'Amie',fr:'C\'est violet avec des fleurs roses.',es:'Es morado con flores rosadas.',side:'right'},
      {s:'Luisa',fr:'C\'est magnifique !',es:'¡Qué bacán! El rosado te queda muy bien.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Color de un auto perdido',img:'🚗',dialogue:[
      {s:'Policier',fr:'C\'est quoi votre voiture ?',es:'¿Cómo es su auto?',side:'right'},
      {s:'Marco',fr:'C\'est une voiture rouge, une Renault.',es:'Es un auto rojo, un Renault.',side:'left'},
      {s:'Policier',fr:'Rouge foncé ou rouge clair ?',es:'¿Rojo oscuro o rojo claro?',side:'right'},
      {s:'Marco',fr:'Rouge vif, presque orange.',es:'Rojo vivo, casi naranja.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Elegir un color de pintura',img:'🖌️',dialogue:[
      {s:'Vendeur',fr:'Quelle couleur pour votre salon ?',es:'¿Qué color quiere para la sala?',side:'right'},
      {s:'Ana',fr:'Je voudrais quelque chose de clair.',es:'Quisiera algo claro. Quizás blanco hueso.',side:'left'},
      {s:'Vendeur',fr:'Voici le blanc, le beige et le gris clair.',es:'Aquí tiene el blanco, el beige y el gris claro.',side:'right'},
      {s:'Ana',fr:'Je prends le beige, c\'est plus chaleureux.',es:'Me llevo el beige, es más cálido.',side:'left'}
    ]}
   ],
   vocab:['El color = La couleur','Rojo = Rouge','Azul = Bleu','Verde = Vert','Rosado = Rose','¿De qué color es? = C\'est quelle couleur ?','Oscuro = Foncé','Claro = Clair'],
   quiz:[
    {q:'¿Cómo se pregunta el color de algo en español?',opts:['¿De qué color es?','¿Cuál es el color?','¿Qué color tiene?','Todas estas respuestas'],ans:3},
    {q:'¿Qué significa "Rojo oscuro"?',opts:['Rouge clair','Rouge vif','Rouge foncé','Orange'],ans:2},
    {q:'¿Qué significa "Claro"?',opts:['Foncé','Clair','Grand','Beau'],ans:1}
   ]},
  {id:'nour2',level:2,emoji:'🍽️',name:'La Comida',sub:'Mercado, restaurante, compras / Marché, resto, courses',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'En el mercado',img:'🥦',dialogue:[
      {s:'Vendeur',fr:'Bonjour, qu\'est-ce qu\'il vous faut ?',es:'Buenos días, ¿qué necesita?',side:'right'},
      {s:'Rosa',fr:'Bonjour ! Je voudrais des tomates et des carottes.',es:'¡Buenos días! Quisiera tomates y zanahorias.',side:'left'},
      {s:'Vendeur',fr:'Combien de kilos ?',es:'¿Cuántos kilos?',side:'right'},
      {s:'Rosa',fr:'Un kilo de tomates et cinq cents grammes de carottes.',es:'Un kilo de tomates y medio kilo de zanahorias.',side:'left'},
      {s:'Vendeur',fr:'Voilà, c\'est trois euros.',es:'Aquí tiene, son tres euros.',side:'right'}
    ]},
    {label:'Sit. 2',title:'En el restaurante',img:'🍴',dialogue:[
      {s:'Serveur',fr:'Vous avez choisi ?',es:'¿Ya saben qué van a pedir?',side:'right'},
      {s:'Carlos',fr:'Oui. Je voudrais le poulet avec du riz.',es:'Sí. Quisiera el pollo con arroz, por favor.',side:'left'},
      {s:'Serveur',fr:'Et comme boisson ?',es:'¿Y para tomar?',side:'right'},
      {s:'Carlos',fr:'Une carafe d\'eau, s\'il vous plaît.',es:'Un jarro de agua, por favor.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Lista de compras',img:'🛒',dialogue:[
      {s:'Luisa',fr:'Je dois faire les courses. Tu as besoin de quelque chose ?',es:'Tengo que ir al supermercado. ¿Necesitas algo?',side:'left'},
      {s:'Pedro',fr:'Achète du pain et des œufs.',es:'Cómprate pan y huevos.',side:'right'},
      {s:'Luisa',fr:'D\'accord. Je voudrais aussi du fromage blanc.',es:'Bueno. También quiero queso blanco.',side:'left'},
      {s:'Pedro',fr:'Bonne idée ! Et n\'oublie pas le beurre.',es:'¡Qué bacán! Y no te olvides de la mantequilla.',side:'right'}
    ]}
   ],
   vocab:['Quisiera = Je voudrais','¿Cuánto? = Combien ?','Un kilo = Un kilo','¿Cuánto cuesta? = C\'est combien ?','Las compras = Les courses','¿Ya eligieron? = Vous avez choisi ?'],
   quiz:[
    {q:'¿Qué significa "Quisiera pollo"?',opts:['J\'ai du poulet','Je voudrais du poulet','Je vends du poulet','J\'aime le poulet'],ans:1},
    {q:'¿Cómo se dice "Les courses" en español?',opts:['El mercado','Las compras','La lista','Las ventas'],ans:1},
    {q:'¿Qué significa "¿Ya eligieron?"?',opts:['Avez-vous fini ?','Vous avez choisi ?','Que voulez-vous ?','Êtes-vous prêts ?'],ans:1}
   ]},
  {id:'bois2',level:2,emoji:'🥤',name:'Las Bebidas',sub:'Barra, invitado, supermercado / Comptoir, invité, supermarché',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Pedir en el mostrador',img:'☕',dialogue:[
      {s:'Barista',fr:'Bonjour, vous désirez ?',es:'Buenos días, ¿qué desea?',side:'right'},
      {s:'María',fr:'Un café allongé, s\'il vous plaît.',es:'Un café negro largo, por favor.',side:'left'},
      {s:'Barista',fr:'Sucre ?',es:'¿Azúcar?',side:'right'},
      {s:'María',fr:'Non merci, sans sucre.',es:'No gracias, sin azúcar.',side:'left'},
      {s:'Barista',fr:'Voilà, c\'est un euro cinquante.',es:'Aquí tiene, son un euro con cincuenta.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Ofrecer una bebida',img:'🍹',dialogue:[
      {s:'Hôte',fr:'Qu\'est-ce que tu veux boire ?',es:'¿Qué quieres tomar?',side:'right'},
      {s:'Invité',fr:'De l\'eau, s\'il te plaît.',es:'Agua, por favor.',side:'left'},
      {s:'Hôte',fr:'Eau plate ou gazeuse ?',es:'¿Natural o con gas?',side:'right'},
      {s:'Invité',fr:'Plate, merci. Et peut-être un jus après ?',es:'Natural, gracias. ¿Y quizás un jugo después?',side:'left'},
      {s:'Hôte',fr:'Bien sûr ! J\'ai du jus d\'orange frais.',es:'¡Claro! Tengo jugo de naranja recién hecho.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Comprar agua en el súper',img:'🛍️',dialogue:[
      {s:'Rosa',fr:'Excusez-moi, où est l\'eau en bouteille ?',es:'Disculpe, ¿dónde está el agua en botella?',side:'left'},
      {s:'Employé',fr:'Rayon numéro trois, au fond à gauche.',es:'Pasillo número tres, al fondo a la izquierda.',side:'right'},
      {s:'Rosa',fr:'Je voudrais un pack de six bouteilles.',es:'Quisiera un pack de seis botellas.',side:'left'},
      {s:'Employé',fr:'Il y a l\'eau de source et l\'eau minérale.',es:'Hay agua de manantial y agua mineral.',side:'right'}
    ]}
   ],
   vocab:['¿Qué desea? = Vous désirez ?','Sin azúcar = Sans sucre','Agua natural / sin gas = Eau plate','Agua con gas = Eau gazeuse','El pasillo = Le rayon / l\'allée'],
   quiz:[
    {q:'¿Qué significa "Sin azúcar"?',opts:['Avec du sucre','Sans sucre','Peu de sucre','À part le sucre'],ans:1},
    {q:'¿Cómo se dice "Eau gazeuse" en español?',opts:['Agua natural','Agua caliente','Agua con gas','Agua de manantial'],ans:2},
    {q:'¿Qué significa "¿Qué desea?"?',opts:['Combien ça coûte ?','Vous désirez ?','Avez-vous quelque chose ?','Vous aimez ?'],ans:1}
   ]},
  {id:'fam2',level:2,emoji:'👨‍👩‍👧',name:'La Familia',sub:'Fotos, hermanos, hijos / Photos, frères, enfants',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Presentar la familia en una foto',img:'📷',dialogue:[
      {s:'Ana',fr:'C\'est qui sur la photo ?',es:'¿Quién es esa persona en la foto?',side:'right'},
      {s:'Luisa',fr:'Là c\'est mon mari Carlos, et voici mes enfants.',es:'Ese es mi esposo Carlos, y estos son mis hijos.',side:'left'},
      {s:'Ana',fr:'Ils sont adorables ! Tu as combien d\'enfants ?',es:'¡Son adorables! ¿Cuántos hijos tienes?',side:'right'},
      {s:'Luisa',fr:'Trois : deux fils et une fille.',es:'Tres: dos varones y una niña.',side:'left'},
      {s:'Ana',fr:'Et tes parents, ils sont en Équateur ?',es:'¿Y tus papás, están en Ecuador?',side:'right'},
      {s:'Luisa',fr:'Oui, ma mère et mon père vivent à Guayaquil.',es:'Sí, mi mamá y mi papá viven en Guayaquil.',side:'left'}
     ]},
    {label:'Sit. 2',title:'Hermanos y hermanas',img:'👫',dialogue:[
      {s:'Voisine',fr:'Tu as des frères et sœurs ?',es:'¿Tienes hermanos?',side:'right'},
      {s:'Pedro',fr:'Oui, j\'ai deux frères et une sœur.',es:'Sí, tengo dos hermanos y una hermana.',side:'left'},
      {s:'Voisine',fr:'Tu es l\'aîné ou le plus jeune ?',es:'¿Eres el mayor o el menor?',side:'right'},
      {s:'Pedro',fr:'Je suis le plus jeune.',es:'Soy el menor. Mi hermano mayor tiene treinta y cinco años.',side:'left'}
     ]},
    {label:'Sit. 3',title:'Preguntar por los hijos',img:'🧒',dialogue:[
      {s:'Collègue',fr:'Comment vont tes enfants ?',es:'¿Cómo están tus hijos?',side:'right'},
      {s:'María',fr:'Très bien ! Ma fille entre à l\'école cette année.',es:'¡Muy bien gracias! Mi hija entra al colegio este año.',side:'left'},
      {s:'Collègue',fr:'Quel âge a-t-elle ?',es:'¿Cuántos años tiene?',side:'right'},
      {s:'María',fr:'Elle a six ans. Et mon fils a dix ans.',es:'Tiene seis años. Y mi hijo tiene diez.',side:'left'}
     ]}
   ],
   vocab:['La familia = La famille','Mis hijos = Mes enfants','Mi esposo = Mon mari','Mi mamá / mi madre = Ma mère','Mi papá / mi padre = Mon père','El mayor = L\'aîné','El menor = Le plus jeune'],
   quiz:[
    {q:'¿Qué significa "Mis hijos"?',opts:['Mes parents','Mes frères','Mes enfants','Mes grands-parents'],ans:2},
    {q:'¿Cómo se dice "L\'aîné" en español?',opts:['El menor','El grande','El mayor','El viejo'],ans:2},
    {q:'¿Qué significa "¿Cómo están tus hijos?"?',opts:['Où sont tes enfants ?','Combien d\'enfants as-tu ?','Comment vont tes enfants ?','Quel âge ont-ils ?'],ans:2}
   ]},
  {id:'emot2',level:2,emoji:'😄',name:'Las Emociones',sub:'Tristeza, cansancio, alegría / Tristesse, fatigue, joie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Por qué un amigo está triste',img:'😢',dialogue:[
      {s:'Ana',fr:'Tu n\'as pas l\'air bien. Ça va ?',es:'No se te ve bien. ¿Estás bien?',side:'right'},
      {s:'Carlos',fr:'Non, je suis triste.',es:'No, estoy triste. Tengo noticias de mi casa.',side:'left'},
      {s:'Ana',fr:'Qu\'est-ce qui se passe ?',es:'¿Qué pasó?',side:'right'},
      {s:'Carlos',fr:'Ma grand-mère est malade.',es:'Mi abuela está enferma.',side:'left'},
      {s:'Ana',fr:'Je suis vraiment désolée.',es:'Lo siento mucho. Aquí estoy si me necesitas.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Expresar cansancio',img:'😴',dialogue:[
      {s:'Partenaire',fr:'Tu rentres tard ! Tu es fatigué ?',es:'¡Llegas tarde! ¿Estás cansado?',side:'right'},
      {s:'Pedro',fr:'Oui, je suis épuisé.',es:'Sí, estoy agotado. Fue un día muy largo.',side:'left'},
      {s:'Partenaire',fr:'Tu veux manger quelque chose ?',es:'¿Quieres comer algo?',side:'right'},
      {s:'Pedro',fr:'Oui, j\'ai faim aussi.',es:'Sí, también tengo hambre. Estoy cansado y estresado.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Alegría por una buena noticia',img:'🎉',dialogue:[
      {s:'Luisa',fr:'J\'ai une grande nouvelle !',es:'¡Tengo una noticia grandísima!',side:'left'},
      {s:'Amie',fr:'Dis-moi ! Tu as l\'air super contente !',es:'¡Dime! ¡Se te ve muy contenta!',side:'right'},
      {s:'Luisa',fr:'J\'ai trouvé du travail ! Je suis tellement joyeuse !',es:'¡Encontré trabajo! ¡Estoy felicísima!',side:'left'},
      {s:'Amie',fr:'C\'est fantastique !',es:'¡Qué bacán! ¡Estoy muy feliz por ti!',side:'right'}
    ]}
   ],
   vocab:['Triste = Triste','Cansado/a = Fatigué(e)','Alegre / contento/a = Joyeux/se','Contento/a = Content(e)','Lo siento = Je suis désolé(e)','Agotado/a = Épuisé(e)','Una buena noticia = Une bonne nouvelle'],
   quiz:[
    {q:'¿Qué significa "Estoy agotado"?',opts:['Je suis triste','Je suis malade','Je suis épuisé','Je suis stressé'],ans:2},
    {q:'¿Cómo se dice "Je suis désolé" en español?',opts:['Estoy contento','Lo siento','Estoy cansado','Estoy enfermo'],ans:1},
    {q:'¿Qué significa "Una buena noticia"?',opts:['Une mauvaise nouvelle','Un bon livre','Une bonne nouvelle','Un bon moment'],ans:2}
   ]},
  {id:'log2',level:2,emoji:'🏠',name:'La Vivienda',sub:'Apartamento, objetos, tareas / Studio, objets, ménage',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Visitar un apartamento',img:'🏢',dialogue:[
      {s:'Propriétaire',fr:'Voici le studio.',es:'Este es el departamento. Tiene sala-cocina y baño.',side:'right'},
      {s:'María',fr:'C\'est lumineux ! Il y a des toilettes séparées ?',es:'¡Qué claro está! ¿El baño tiene inodoro aparte?',side:'left'},
      {s:'Propriétaire',fr:'Oui, les toilettes sont à côté de la salle de bain.',es:'Sí, el inodoro está al lado del baño.',side:'right'},
      {s:'María',fr:'C\'est combien le loyer par mois ?',es:'¿Cuánto es el arriendo mensual?',side:'left'},
      {s:'Propriétaire',fr:'Cinq cent cinquante euros, charges comprises.',es:'Quinientos cincuenta euros, todo incluido.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Buscar un objeto perdido',img:'🔍',dialogue:[
      {s:'Pedro',fr:'Tu as vu mes clés ?',es:'¿Viste mis llaves?',side:'right'},
      {s:'Ana',fr:'Non... regarde dans le salon.',es:'No... mira en la sala.',side:'left'},
      {s:'Pedro',fr:'Non, elles ne sont pas là.',es:'No, no están ahí.',side:'right'},
      {s:'Ana',fr:'Essaie la cuisine, ou peut-être dans la chambre.',es:'Prueba en la cocina, o quizás en el cuarto.',side:'left'},
      {s:'Pedro',fr:'Elles étaient sur la table de la cuisine !',es:'¡Estaban en la mesa de la cocina!',side:'right'}
    ]},
    {label:'Sit. 3',title:'Las tareas del hogar',img:'🧹',dialogue:[
      {s:'Luisa',fr:'C\'est ton tour de faire la vaisselle.',es:'Te toca lavar los platos.',side:'left'},
      {s:'Carlos',fr:'D\'accord. Et toi tu fais quoi ?',es:'Bueno. ¿Y tú qué haces?',side:'right'},
      {s:'Luisa',fr:'Je passe l\'aspirateur dans le salon.',es:'Paso la aspiradora en la sala.',side:'left'},
      {s:'Carlos',fr:'Et la chambre ?',es:'¿Y el cuarto?',side:'right'},
      {s:'Luisa',fr:'Je fais le lit après.',es:'Tiendo la cama después.',side:'left'}
    ]}
   ],
   vocab:['El arriendo = Le loyer','El baño = La salle de bain','El inodoro = Les toilettes','La sala = Le salon','La cocina = La cuisine','El cuarto / la habitación = La chambre','Lavar los platos = Faire la vaisselle'],
   quiz:[
    {q:'¿Qué significa "El arriendo"?',opts:['L\'appartement','Le loyer','La chambre','Le contrat'],ans:1},
    {q:'¿Cómo se dice "Faire la vaisselle" en español?',opts:['Tender la cama','Pasar la aspiradora','Lavar los platos','Limpiar'],ans:2},
    {q:'¿Qué significa "Luminoso"?',opts:['Petit','Lumineux / clair','Bruyant','Grand'],ans:1}
   ]},
  {id:'veth2',level:2,emoji:'👗',name:'La Ropa',sub:'Mañana, talla, prenda perdida / Matin, taille, veste perdue',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Vestirse por la mañana',img:'🌅',dialogue:[
      {s:'Enfant',fr:'Maman, je mets quoi aujourd\'hui ?',es:'Mamá, ¿qué me pongo hoy?',side:'right'},
      {s:'Maman',fr:'Il fait froid, mets ton manteau et ton écharpe.',es:'Hace frío, ponte el abrigo y la bufanda.',side:'left'},
      {s:'Enfant',fr:'Et mes chaussures rouges ?',es:'¿Y mis zapatos rojos?',side:'right'},
      {s:'Maman',fr:'Oui, et n\'oublie pas ton chapeau !',es:'Sí, ¡y no te olvides el sombrero!',side:'left'}
    ]},
    {label:'Sit. 2',title:'Comprar en la talla correcta',img:'🏪',dialogue:[
      {s:'Vendeur',fr:'Bonjour, je peux vous aider ?',es:'Buenos días, ¿le puedo ayudar?',side:'right'},
      {s:'Luisa',fr:'Je cherche ce pantalon en taille quarante.',es:'Sí, busco ese pantalón en talla cuarenta.',side:'left'},
      {s:'Vendeur',fr:'Voilà, en taille quarante.',es:'Un momento... aquí tiene, talla cuarenta.',side:'right'},
      {s:'Luisa',fr:'Merci, je peux l\'essayer ?',es:'Gracias, ¿me lo puedo probar?',side:'left'},
      {s:'Vendeur',fr:'Bien sûr, la cabine est là-bas.',es:'Claro, el probador está allá.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Buscar una prenda perdida',img:'🔍',dialogue:[
      {s:'Carlos',fr:'Excuse-moi, j\'ai oublié ma veste.',es:'Disculpa, olvidé mi chaqueta.',side:'left'},
      {s:'Serveur',fr:'De quelle couleur est-elle ?',es:'¿De qué color es?',side:'right'},
      {s:'Carlos',fr:'Elle est noire, avec une fermeture éclair.',es:'Es negra, con cierre.',side:'left'},
      {s:'Serveur',fr:'Voilà une veste noire.',es:'Espere... aquí hay una chaqueta negra.',side:'right'},
      {s:'Carlos',fr:'Oui c\'est la mienne ! Merci beaucoup !',es:'¡Sí, esa es la mía! ¡Muchísimas gracias!',side:'left'}
    ]}
   ],
   vocab:['La chaqueta / el saco = La veste','El abrigo = Le manteau','La talla = La taille','Los zapatos = Les chaussures','El probador = La cabine d\'essayage','Hace frío = Il fait froid'],
   quiz:[
    {q:'¿Qué significa "La talla" (para una prenda)?',opts:['La couleur','Le prix','La taille','Le modèle'],ans:2},
    {q:'¿Cómo se dice "La cabine d\'essayage" en español?',opts:['El almacén','El probador','El mostrador','El pasillo'],ans:1},
    {q:'¿Qué significa "Hace frío"?',opts:['Il fait chaud','Il fait du vent','Il fait froid','Il fait soleil'],ans:2}
   ]},
  {id:'corps2',level:2,emoji:'🧍',name:'El Cuerpo',sub:'Médico, deporte, físico / Médecin, sport, physique',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Explicar al médico dónde duele',img:'🏥',dialogue:[
      {s:'Médecin',fr:'Qu\'est-ce qui ne va pas ?',es:'¿Qué le pasa?',side:'right'},
      {s:'Pedro',fr:'J\'ai mal au dos et à la tête.',es:'Me duele la espalda y la cabeza.',side:'left'},
      {s:'Médecin',fr:'Depuis combien de temps ?',es:'¿Desde cuándo?',side:'right'},
      {s:'Pedro',fr:'Depuis deux jours. J\'ai aussi mal au ventre.',es:'Desde hace dos días. También me duele la barriga.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Lesión durante un deporte',img:'⚽',dialogue:[
      {s:'Entraîneur',fr:'Ça va ? Tu boites !',es:'¿Estás bien? ¡Estás cojeando!',side:'right'},
      {s:'Marco',fr:'J\'ai mal à la jambe. Je me suis blessé.',es:'Me duele la pierna. Me lastimé.',side:'left'},
      {s:'Entraîneur',fr:'C\'est le genou ou la cheville ?',es:'¿Es la rodilla o el tobillo?',side:'right'},
      {s:'Marco',fr:'La cheville. Je ne peux pas poser le pied.',es:'El tobillo. No puedo apoyar el pie.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Describir el físico de alguien',img:'👤',dialogue:[
      {s:'Policier',fr:'Décrivez la personne.',es:'Descríbame a la persona que busca.',side:'right'},
      {s:'Ana',fr:'C\'est un homme grand, avec les yeux bleus.',es:'Es un hombre alto, con ojos azules.',side:'left'},
      {s:'Policier',fr:'Il a les cheveux de quelle couleur ?',es:'¿De qué color tiene el cabello?',side:'right'},
      {s:'Ana',fr:'Il a les cheveux noirs, courts. Et il a une barbe.',es:'Tiene el cabello negro, corto. Y tiene barba.',side:'left'}
    ]}
   ],
   vocab:['Me duele... = J\'ai mal à...','La cabeza = La tête','La espalda = Le dos','La pierna = La jambe','El pie = Le pied','¿Desde cuándo? = Depuis combien de temps ?','Me lastimé = Je me suis blessé'],
   quiz:[
    {q:'¿Cómo se dice "J\'ai mal à la tête" en español?',opts:['Me duele la pierna','Me duele la cabeza','Me duele la espalda','Me duele la barriga'],ans:1},
    {q:'¿Qué significa "Me lastimé"?',opts:['Je suis fatigué','J\'ai de la fièvre','Je me suis blessé','Je suis malade'],ans:2},
    {q:'¿Qué significa "¿Desde cuándo?"?',opts:['Combien de temps reste-t-il ?','Depuis combien de temps ?','Pendant combien de temps ?','À quelle heure ?'],ans:1}
   ]},
  {id:'anim2',level:2,emoji:'🐘',name:'Los Animales',sub:'Mascota, calle, finca / Mascotte, rue, ferme',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Hablar de tu mascota',img:'🐶',dialogue:[
      {s:'Voisin',fr:'C\'est ton chien ? Il est beau !',es:'¿Ese es tu perro? ¡Qué bonito!',side:'right'},
      {s:'Luisa',fr:'Merci ! Il s\'appelle Coco. C\'est un labrador.',es:'¡Gracias! Se llama Coco. Es un labrador.',side:'left'},
      {s:'Voisin',fr:'Il a quel âge ?',es:'¿Cuántos años tiene?',side:'right'},
      {s:'Luisa',fr:'Il a trois ans. Il est très gentil.',es:'Tiene tres años. Es muy tranquilo.',side:'left'},
      {s:'Voisin',fr:'Moi j\'ai un chat.',es:'Yo tengo un gato. ¡No se llevan muy bien!',side:'right'}
    ]},
    {label:'Sit. 2',title:'Cruzarse con un perro en la calle',img:'🌳',dialogue:[
      {s:'Passant',fr:'Attention, il est méchant ?',es:'Ojo, ¿muerde?',side:'right'},
      {s:'Carlos',fr:'Non, ne vous inquiétez pas, il est très doux.',es:'No, no se preocupe, es muy manso.',side:'left'},
      {s:'Passant',fr:'Je peux le caresser ?',es:'¿Lo puedo acariciar?',side:'right'},
      {s:'Carlos',fr:'Oui, il adore ça !',es:'Sí, claro. ¡Le encanta!',side:'left'}
    ]},
    {label:'Sit. 3',title:'Visita a la finca',img:'🐄',dialogue:[
      {s:'Fermier',fr:'Bienvenue à la ferme ! Voilà les vaches.',es:'¡Bienvenidos a la finca! Allí están las vacas.',side:'right'},
      {s:'Enfant',fr:'Oh ! Et les poules, elles sont où ?',es:'¡Oh! ¿Y las gallinas dónde están?',side:'left'},
      {s:'Fermier',fr:'Les poules sont dans le poulailler. Et voilà le cheval !',es:'Las gallinas están en el gallinero. ¡Y ahí está el caballo!',side:'right'},
      {s:'Enfant',fr:'Je peux monter à cheval ?',es:'¿Puedo montar a caballo?',side:'left'},
      {s:'Fermier',fr:'Oui, avec le casque bien sûr !',es:'Sí, ¡con el casco, claro!',side:'right'}
    ]}
   ],
   vocab:['El perro = Le chien','El gato = Le chat','La vaca = La vache','La gallina = La poule','El caballo = Le cheval','Es manso / tranquilo = Il est doux','La finca / el rancho = La ferme'],
   quiz:[
    {q:'¿Qué significa "Es manso" (hablando de un animal)?',opts:['Il est laid','Il est doux','Il est agressif','Il est grand'],ans:1},
    {q:'¿Cómo se dice "La ferme" en español ecuatoriano?',opts:['El jardín','El bosque','La finca / el rancho','El campo'],ans:2},
    {q:'¿Qué significa "¿Lo puedo acariciar?"?',opts:['Puis-je l\'emmener ?','Puis-je le caresser ?','Puis-je le voir ?','Puis-je le garder ?'],ans:1}
   ]},
  {id:'verb2',level:2,emoji:'📝',name:'Los Verbos',sub:'Rutina, gustos, acciones / Routine, goûts, actions',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Rutina diaria',img:'⏰',dialogue:[
      {s:'Collègue',fr:'Tu te lèves à quelle heure ?',es:'¿A qué hora te levantas?',side:'right'},
      {s:'Pedro',fr:'Je me lève à six heures.',es:'Me levanto a las seis. Como y después voy al trabajo.',side:'left'},
      {s:'Collègue',fr:'Et le soir, tu fais quoi ?',es:'¿Y en la noche qué haces?',side:'right'},
      {s:'Pedro',fr:'Je mange, je lis un peu et je dors tôt.',es:'Como, leo un rato y me duermo temprano.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Expresar gustos',img:'❤️',dialogue:[
      {s:'Amie',fr:'Tu aimes la cuisine française ?',es:'¿Te gusta la comida francesa?',side:'right'},
      {s:'Luisa',fr:'Oui, j\'aime beaucoup !',es:'¡Sí, me encanta! Como queso con frecuencia.',side:'left'},
      {s:'Amie',fr:'Et tu aimes le vin ?',es:'¿Y te gusta el vino?',side:'right'},
      {s:'Luisa',fr:'Je bois un peu de vin, mais je préfère le jus.',es:'Tomo un poco de vino, pero prefiero el jugo.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Acciones del momento',img:'🏃',dialogue:[
      {s:'Chef',fr:'Qu\'est-ce que tu fais maintenant ?',es:'¿Qué estás haciendo ahora?',side:'right'},
      {s:'Carlos',fr:'Je parle au téléphone.',es:'Estoy hablando por teléfono. Tengo un cliente.',side:'left'},
      {s:'Chef',fr:'Tu vas à la réunion à midi ?',es:'¿Vas a la reunión al mediodía?',side:'right'},
      {s:'Carlos',fr:'Oui, je vais à la réunion. Je suis prêt.',es:'Sí, voy a la reunión. Estoy listo.',side:'left'}
    ]}
   ],
   vocab:['Voy = Je vais','Como = Je mange','Hablo = Je parle','Me gusta = J\'aime','Bebo / tomo = Je bois','Vivo = J\'habite','Soy / estoy = Je suis','Tengo = J\'ai'],
   quiz:[
    {q:'¿Qué significa "Voy al trabajo"?',opts:['J\'ai du travail','Je vais au travail','Je cherche du travail','J\'aime le travail'],ans:1},
    {q:'¿Cómo se dice "Je bois du jus" en español?',opts:['Como jugo','Voy al jugo','Tomo jugo','Tengo jugo'],ans:2},
    {q:'¿Qué significa "Me encanta / me gusta mucho"?',opts:['Je n\'aime pas','J\'aime un peu','J\'adore / j\'aime beaucoup','Je ne sais pas'],ans:2}
   ]},
  {id:'pays2',level:2,emoji:'🌍',name:'Los Países',sub:'Nacionalidad, vacaciones, sueños / Nationalité, vacances, rêves',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Preguntar la nacionalidad',img:'🗺️',dialogue:[
      {s:'Voisine',fr:'D\'où venez-vous ?',es:'¿De dónde es usted?',side:'right'},
      {s:'Ana',fr:'Je viens de l\'Équateur. Et vous ?',es:'Soy de Ecuador. ¿Y usted?',side:'left'},
      {s:'Voisine',fr:'Je suis française, de Lyon.',es:'Soy francesa, de Lyon.',side:'right'},
      {s:'Ana',fr:'Et vous connaissez la Colombie aussi ?',es:'¡Ah! ¿Y conoce Colombia también?',side:'left'},
      {s:'Voisine',fr:'Non, mais j\'adorerais y aller !',es:'No, ¡pero me encantaría ir!',side:'right'}
    ]},
    {label:'Sit. 2',title:'Hablar de las últimas vacaciones',img:'🏖️',dialogue:[
      {s:'Collègue',fr:'Tu es allé où en vacances ?',es:'¿A dónde fuiste de vacaciones?',side:'right'},
      {s:'Pedro',fr:'Je suis allé en Espagne, à Barcelone.',es:'Fui a España, a Barcelona.',side:'left'},
      {s:'Collègue',fr:'C\'était bien ?',es:'¿Estuvo bien?',side:'right'},
      {s:'Pedro',fr:'C\'était magnifique ! La nourriture était délicieuse.',es:'¡Estuvo espectacular! Y la comida estaba deliciosa.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Decir adónde te gustaría viajar',img:'✈️',dialogue:[
      {s:'Amie',fr:'Si tu pouvais voyager, tu irais où ?',es:'Si pudieras viajar, ¿a dónde irías?',side:'right'},
      {s:'Luisa',fr:'J\'irais au Canada. J\'adore la nature.',es:'Me iría a Canadá. Me encanta la naturaleza.',side:'left'},
      {s:'Amie',fr:'Moi je rêve d\'aller en Éthiopie.',es:'Yo sueño con ir a Etiopía.',side:'right'},
      {s:'Luisa',fr:'C\'est un pays magnifique. J\'aime aussi l\'Italie.',es:'¡Qué bacán! Ese país es precioso. También me gusta Italia.',side:'left'}
    ]}
   ],
   vocab:['¿De dónde es usted? = D\'où venez-vous ?','Vengo de = Je viens de','Las vacaciones = Les vacances','Fue / estuvo = C\'était','Me iría / iría = J\'irais','Sueño con = Je rêve de'],
   quiz:[
    {q:'¿Cómo se pregunta de dónde viene alguien (formal) en español?',opts:['¿De dónde eres?','¿De dónde es usted?','¿Cuál es tu nacionalidad?','¿Dónde vives?'],ans:1},
    {q:'¿Qué significa "Me iría a Canadá"?',opts:['Je suis allé au Canada','Je vis au Canada','J\'irais au Canada','Je veux aller au Canada'],ans:2},
    {q:'¿Qué significa "Sueño con viajar"?',opts:['J\'ai voyagé hier','Je rêve de voyager','Je veux réserver','J\'ai déjà voyagé'],ans:1}
   ]},
  {id:'plan2',level:2,emoji:'🌿',name:'Las Plantas',sub:'Floristería, casa, parque / Fleuriste, maison, parc',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Comprar flores en la floristería',img:'💐',dialogue:[
      {s:'Fleuriste',fr:'Bonjour, qu\'est-ce que je vous sers ?',es:'Buenos días, ¿en qué le sirvo?',side:'right'},
      {s:'María',fr:'Je voudrais un bouquet de roses rouges.',es:'Quisiera un ramo de rosas rojas, por favor.',side:'left'},
      {s:'Fleuriste',fr:'Pour une occasion spéciale ?',es:'¿Es para una ocasión especial?',side:'right'},
      {s:'María',fr:'Oui, pour l\'anniversaire de ma mère.',es:'Sí, para el cumpleaños de mi mamá.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Regar las plantas de la casa',img:'🪴',dialogue:[
      {s:'Voisine',fr:'Tu peux arroser mes plantes cette semaine ?',es:'¿Puedes regar mis plantas esta semana?',side:'right'},
      {s:'Luisa',fr:'Bien sûr ! Combien de fois par jour ?',es:'¡Claro! ¿Cuántas veces al día?',side:'left'},
      {s:'Voisine',fr:'Une fois par jour, le matin.',es:'Una vez al día, en la mañana.',side:'right'},
      {s:'Luisa',fr:'D\'accord, je mets la plante près de la fenêtre.',es:'Bueno, pongo la planta cerca de la ventana.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Paseo por el parque',img:'🌳',dialogue:[
      {s:'Pedro',fr:'Regarde ces arbres, ils sont magnifiques !',es:'¡Mira esos árboles, son preciosos!',side:'right'},
      {s:'Ana',fr:'Oui ! Et les fleurs dans le jardin sont belles.',es:'¡Sí! Y las flores del jardín también son bonitas.',side:'left'},
      {s:'Pedro',fr:'C\'est quoi comme arbre ça ?',es:'¿Qué árbol es ese?',side:'right'},
      {s:'Ana',fr:'C\'est un chêne. Et là c\'est une rose.',es:'Es un roble. Y esa es una rosa.',side:'left'}
    ]}
   ],
   vocab:['La flor = La fleur','El árbol = L\'arbre','La rosa = La rose','La hoja = La feuille','Regar = Arroser','El jardín = Le jardin','El ramo = Le bouquet'],
   quiz:[
    {q:'¿Cómo se dice "Arroser les plantes" en español?',opts:['Plantar flores','Regar las plantas','Cortar árboles','Poner rosas'],ans:1},
    {q:'¿Qué significa "El ramo"?',opts:['Le jardin','L\'arbre','Le bouquet','La fleur'],ans:2},
    {q:'¿Qué significa "Una vez al día"?',opts:['Deux fois par jour','Une fois par semaine','Une fois par jour','Chaque heure'],ans:2}
   ]},
  {id:'salut2',level:2,emoji:'👋',name:'Los Saludos',sub:'Tienda, vecino, despedida / Magasin, voisin, départ',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Entrar a una tienda',img:'🏪',dialogue:[
      {s:'Client',fr:'Bonjour !',es:'¡Buenos días!',side:'left'},
      {s:'Vendeur',fr:'Bonjour ! Bienvenue. Je peux vous aider ?',es:'¡Buenos días! Bienvenido. ¿Le puedo ayudar?',side:'right'},
      {s:'Client',fr:'Non merci, je regarde juste.',es:'No gracias, solo estoy mirando.',side:'left'},
      {s:'Vendeur',fr:'N\'hésitez pas si vous avez besoin.',es:'Claro. No dude en decirme si necesita algo.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Cruzarse con el vecino en el ascensor',img:'🛗',dialogue:[
      {s:'Voisin',fr:'Bonsoir ! Vous rentrez tard.',es:'¡Buenas noches! Regresa tarde esta noche.',side:'right'},
      {s:'Luisa',fr:'Bonsoir ! Oui, j\'étais au travail.',es:'¡Buenas noches! Sí, estaba en el trabajo.',side:'left'},
      {s:'Voisin',fr:'Bonne soirée quand même !',es:'¡Ah, que tenga buena noche de todas formas!',side:'right'},
      {s:'Luisa',fr:'Merci, vous aussi ! À bientôt !',es:'¡Gracias, igualmente! ¡Hasta pronto!',side:'left'}
    ]},
    {label:'Sit. 3',title:'Despedirse antes de irse',img:'🚪',dialogue:[
      {s:'Ana',fr:'Bon, je dois y aller maintenant.',es:'Bueno, me tengo que ir ya.',side:'left'},
      {s:'Pedro',fr:'Déjà ? Bonne route ! Et fais attention.',es:'¿Ya? ¡Que te vaya bien! Y ten cuidado.',side:'right'},
      {s:'Ana',fr:'Merci ! À bientôt ! Embrasse ta famille !',es:'¡Gracias! ¡Hasta pronto! ¡Saluda a tu familia!',side:'left'},
      {s:'Pedro',fr:'Bonne nuit ! Prends soin de toi !',es:'¡Buenas noches! ¡Cuídate!',side:'right'}
    ]}
   ],
   vocab:['Buenos días = Bonjour','Buenas tardes / noches = Bonsoir','Adiós / chao = Au revoir','Hasta pronto / hasta luego = À bientôt','Buenas noches = Bonne nuit','Gracias = Merci','Por favor = S\'il vous plaît'],
   quiz:[
    {q:'¿Qué significa "Hasta pronto"?',opts:['Adieu','À bientôt','Bonjour','Bonne nuit'],ans:1},
    {q:'¿Cuándo se usa "Buenas tardes / noches"?',opts:['Seulement le matin','Seulement au travail','En arrivant l\'après-midi ou le soir','Pour se dire au revoir pour toujours'],ans:2},
    {q:'¿Qué significa "¡Que te vaya bien!"?',opts:['Bon repos','Bon appétit','Bonne route / bonne continuation','Bon travail'],ans:2}
   ]},
  {id:'met2',level:2,emoji:'💼',name:'Las Profesiones',sub:'Preguntar, explicar, soñar / Demander, expliquer, rêver',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Preguntar la profesión',img:'🤝',dialogue:[
      {s:'Voisine',fr:'Qu\'est-ce que vous faites dans la vie ?',es:'¿A qué se dedica?',side:'right'},
      {s:'Carlos',fr:'Je suis cuisinier dans un restaurant.',es:'Soy cocinero en un restaurante.',side:'left'},
      {s:'Voisine',fr:'Vous travaillez le week-end ?',es:'¿Y trabaja los fines de semana?',side:'right'},
      {s:'Carlos',fr:'Oui, souvent. C\'est mon métier depuis dix ans.',es:'Sí, con frecuencia. Es mi oficio desde hace diez años.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Hablar del trabajo actual',img:'💻',dialogue:[
      {s:'Amie',fr:'Tu travailles où maintenant ?',es:'¿Dónde trabajas ahora?',side:'right'},
      {s:'María',fr:'Je suis infirmière à l\'hôpital.',es:'Soy enfermera en el hospital San Juan.',side:'left'},
      {s:'Amie',fr:'C\'est loin de chez toi ?',es:'¿Queda lejos de tu casa?',side:'right'},
      {s:'María',fr:'Non, vingt minutes en bus.',es:'No, veinte minutos en bus. Me encanta mi trabajo.',side:'left'}
    ]},
    {label:'Sit. 3',title:'El trabajo de tus sueños',img:'🌟',dialogue:[
      {s:'Prof',fr:'Quel est le métier de tes rêves ?',es:'¿Cuál es el trabajo de tus sueños?',side:'right'},
      {s:'Étudiant',fr:'Je voudrais être médecin.',es:'Quisiera ser médico. Me gusta ayudar a la gente.',side:'left'},
      {s:'Prof',fr:'C\'est un beau métier ! Et toi, Luisa ?',es:'¡Qué lindo oficio! ¿Y tú, Luisa?',side:'right'},
      {s:'Luisa',fr:'Moi, je veux être professeure de français !',es:'Yo quiero ser profesora de francés.',side:'left'},
      {s:'Prof',fr:'Excellent !',es:'¡Excelente! ¡Hacen falta buenos profesores!',side:'right'}
    ]}
   ],
   vocab:['¿A qué se dedica? = Qu\'est-ce que vous faites ?','Soy... = Je suis...','El oficio / la profesión = Le métier','Trabajo = Je travaille','Quisiera ser = Je voudrais être','El hospital = L\'hôpital'],
   quiz:[
    {q:'¿Cómo se pregunta "À quoi vous vous consacrez ?" en español (formal)?',opts:['¿Trabajas?','¿A qué se dedica?','¿Es su trabajo?','¿Tiene un oficio?'],ans:1},
    {q:'¿Qué significa "Quisiera ser médico"?',opts:['Je suis médecin','Je suis allé chez le médecin','Je voudrais être médecin','Je cherche un médecin'],ans:2},
    {q:'¿Qué significa "El oficio / la profesión"?',opts:['Le salaire','L\'entreprise','Le métier','L\'horaire'],ans:2}
   ]},
  {id:'trans2',level:2,emoji:'🚌',name:'Los Transportes',sub:'Autobús, taxi, tren / Bus, taxi, train',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Comprar un ticket de bus',img:'🚌',dialogue:[
      {s:'Luisa',fr:'Bonjour, un ticket pour le centre-ville.',es:'Buenos días, un pasaje para el centro, por favor.',side:'left'},
      {s:'Chauffeur',fr:'Voilà, c\'est un euro soixante.',es:'Aquí tiene, es un euro con sesenta.',side:'right'},
      {s:'Luisa',fr:'Je n\'ai pas de monnaie.',es:'No tengo sencillo. ¿Puedo pagar con cinco euros?',side:'left'},
      {s:'Chauffeur',fr:'Oui, voilà votre monnaie.',es:'Sí, aquí tiene su cambio.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Llamar un taxi',img:'🚕',dialogue:[
      {s:'Pedro',fr:'Bonjour, je voudrais un taxi pour l\'aéroport.',es:'Buenos días, quisiera un taxi para el aeropuerto.',side:'left'},
      {s:'Opérateur',fr:'D\'accord. C\'est à quelle adresse ?',es:'Bueno. ¿Cuál es la dirección?',side:'right'},
      {s:'Pedro',fr:'Quinze rue de la Paix.',es:'Calle de la Paz, número quince.',side:'left'},
      {s:'Opérateur',fr:'Le taxi arrive dans dix minutes.',es:'El taxi llega en diez minutos.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Validar el boleto en el andén',img:'🚂',dialogue:[
      {s:'Agent',fr:'Votre billet, s\'il vous plaît.',es:'Su boleto, por favor.',side:'right'},
      {s:'Ana',fr:'Le voici. J\'ai une réservation pour Paris.',es:'Aquí tiene. Tengo reserva para París.',side:'left'},
      {s:'Agent',fr:'Vous avez validé votre billet ?',es:'¿Validó su boleto?',side:'right'},
      {s:'Ana',fr:'Euh... non, comment on fait ?',es:'Eh... no, ¿cómo se hace?',side:'left'},
      {s:'Agent',fr:'Il faut le composter dans la machine là-bas.',es:'Tiene que sellarlo en la máquina de allá.',side:'right'}
    ]}
   ],
   vocab:['El ticket / el pasaje = Le ticket','El sencillo / el cambio = La monnaie','El aeropuerto = L\'aéroport','La estación de tren = La gare','Validar / sellar = Valider','El andén = Le quai'],
   quiz:[
    {q:'¿Qué significa "No tengo sencillo"?',opts:['Je n\'ai pas de ticket','Je n\'ai pas de monnaie','Je n\'ai pas d\'argent','Je n\'ai pas de carte'],ans:1},
    {q:'¿Cómo se dice "Le quai" en español?',opts:['El ticket','La estación','El andén','El bus'],ans:2},
    {q:'¿Qué significa "Sellar el boleto"?',opts:['Acheter le billet','Valider / composter le billet','Perdre le billet','Changer le billet'],ans:1}
   ]},
  {id:'lieux2',level:2,emoji:'🏙️',name:'Los Lugares',sub:'Urgencia, compras, campo / Urgence, courses, campagne',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Encontrar un edificio en urgencia',img:'🚨',dialogue:[
      {s:'María',fr:'Excusez-moi ! Où est la pharmacie la plus proche ?',es:'¡Disculpe! ¿Dónde está la farmacia más cercana?',side:'left'},
      {s:'Passant',fr:'La pharmacie ? C\'est à deux rues d\'ici, à gauche.',es:'¿La farmacia? Está a dos cuadras de aquí, a la izquierda.',side:'right'},
      {s:'María',fr:'Et l\'hôpital, c\'est loin ?',es:'¿Y el hospital, queda lejos?',side:'left'},
      {s:'Passant',fr:'Oui, prenez le bus numéro quatre.',es:'Sí, tome el autobús número cuatro.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Explicar dónde hacer las compras',img:'🛒',dialogue:[
      {s:'Voisine',fr:'Tu vas faire les courses ce matin ?',es:'¿Vas al mercado esta mañana?',side:'right'},
      {s:'Luisa',fr:'Oui, je vais au supermarché d\'abord, puis à la banque.',es:'Sí, voy al supermercado primero y después al banco.',side:'left'},
      {s:'Voisine',fr:'Il y a aussi une pharmacie à côté du supermarché.',es:'También hay una farmacia al lado del supermercado.',side:'right'},
      {s:'Luisa',fr:'Ah parfait, j\'en ai besoin aussi.',es:'Ah perfecto, también necesito ir ahí.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Describir un fin de semana en el campo',img:'🌾',dialogue:[
      {s:'Collègue',fr:'Vous avez passé un bon week-end ?',es:'¿Pasaron un buen fin de semana?',side:'right'},
      {s:'Pedro',fr:'Oui ! On est allés à la campagne.',es:'¡Sí! Fuimos al campo.',side:'left'},
      {s:'Collègue',fr:'C\'est beau la campagne en été !',es:'¡Qué bonito el campo en verano!',side:'right'},
      {s:'Pedro',fr:'Oui, et on s\'est promenés au bord de la rivière.',es:'Sí, y caminamos a orillas del río.',side:'left'}
    ]}
   ],
   vocab:['La farmacia = La pharmacie','El hospital = L\'hôpital','El supermercado = Le supermarché','El banco = La banque','El campo = La campagne','El río / la quebrada = La rivière','La alcaldía / el municipio = La mairie'],
   quiz:[
    {q:'¿Cómo se dice "La pharmacie" en español?',opts:['El hospital','El banco','La farmacia','La escuela'],ans:2},
    {q:'¿Qué significa "El campo"?',opts:['La ville','La plage','La campagne','La montagne'],ans:2},
    {q:'¿Qué significa "¡Es urgente!"?',opts:['C\'est important !','C\'est urgent !','C\'est loin !','C\'est fermé !'],ans:1}
   ]},
  {id:'orient2',level:2,emoji:'🧭',name:'Orientarse',sub:'Camino, taxi, tienda / Chemin, taxi, magasin',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Preguntar cómo llegar a la estación',img:'🚉',dialogue:[
      {s:'Ana',fr:'Excusez-moi, pour aller à la gare, s\'il vous plaît ?',es:'Disculpe, ¿por dónde se va a la estación, por favor?',side:'left'},
      {s:'Passant',fr:'Allez tout droit, puis tournez à gauche au feu.',es:'Siga recto y doble a la izquierda en el semáforo.',side:'right'},
      {s:'Ana',fr:'C\'est loin à pied ?',es:'¿Queda lejos a pie?',side:'left'},
      {s:'Passant',fr:'Non, environ dix minutes. C\'est en face du parc.',es:'No, unos diez minutos. Está frente al parque.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Guiar a un taxista',img:'🚕',dialogue:[
      {s:'Taxiste',fr:'Quelle adresse ?',es:'¿Cuál es la dirección?',side:'right'},
      {s:'Pedro',fr:'Huit rue de Rivoli, s\'il vous plaît.',es:'Calle de Rivoli, número ocho, por favor.',side:'left'},
      {s:'Taxiste',fr:'Je prends par le centre ?',es:'¿Voy por el centro?',side:'right'},
      {s:'Pedro',fr:'Oui. Après le pont, tournez à droite.',es:'Sí. Y después del puente, doble a la derecha.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Indicar dónde está una tienda',img:'🏪',dialogue:[
      {s:'Touriste',fr:'Il y a une boulangerie près d\'ici ?',es:'¿Hay una panadería cerca de aquí?',side:'right'},
      {s:'Luisa',fr:'Oui ! Elle est à côté de la pharmacie, en face du parc.',es:'¡Sí! Está al lado de la farmacia, frente al parque.',side:'left'},
      {s:'Touriste',fr:'C\'est à droite ou à gauche ?',es:'¿Queda a la derecha o a la izquierda?',side:'right'},
      {s:'Luisa',fr:'Allez tout droit, et c\'est à droite. Deux minutes à pied.',es:'Siga recto y queda a la derecha. Está muy cerca, a dos minutos a pie.',side:'left'}
    ]}
   ],
   vocab:['A la izquierda = À gauche','A la derecha = À droite','Todo recto / derecho = Tout droit','Enfrente / frente a = En face','Al lado = À côté','Lejos = Loin','Cerca = Près','El mapa / el plano = Le plan'],
   quiz:[
    {q:'¿Cómo se dice "Tout droit" en español?',opts:['A la izquierda','A la derecha','Todo recto / derecho','Enfrente'],ans:2},
    {q:'¿Qué significa "Frente al parque"?',opts:['À côté du parc','Dans le parc','En face du parc','Derrière le parc'],ans:2},
    {q:'¿Qué significa "Está muy cerca"?',opts:['C\'est très loin','C\'est très près','C\'est à droite','C\'est en face'],ans:1}
   ]},
  {id:'sante2',level:2,emoji:'🏥',name:'La Salud',sub:'Médico, síntomas, farmacia / Médecin, symptômes, pharmacie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Pedir una cita médica',img:'📅',dialogue:[
      {s:'Secrétaire',fr:'Cabinet du docteur Lefebvre, bonjour.',es:'Consultorio del doctor Lefebvre, buenos días.',side:'right'},
      {s:'María',fr:'Bonjour, je voudrais prendre un rendez-vous.',es:'Buenos días, quisiera pedir una cita, por favor.',side:'left'},
      {s:'Secrétaire',fr:'C\'est pour quel motif ?',es:'¿Por qué motivo?',side:'right'},
      {s:'María',fr:'J\'ai de la fièvre et une forte toux depuis trois jours.',es:'Tengo fiebre y mucha tos desde hace tres días.',side:'left'},
      {s:'Secrétaire',fr:'Vous pouvez venir demain à dix heures ?',es:'Bueno. ¿Puede venir mañana a las diez?',side:'right'}
    ]},
    {label:'Sit. 2',title:'Explicar síntomas al médico',img:'🩺',dialogue:[
      {s:'Médecin',fr:'Qu\'est-ce qui ne va pas ?',es:'Buenos días, ¿qué le pasa hoy?',side:'right'},
      {s:'Pedro',fr:'J\'ai très mal à la gorge et j\'ai de la fièvre.',es:'Me duele mucho la garganta y tengo fiebre.',side:'left'},
      {s:'Médecin',fr:'Depuis combien de jours ?',es:'¿Desde cuántos días?',side:'right'},
      {s:'Pedro',fr:'Depuis quatre jours.',es:'Desde hace cuatro días.',side:'left'},
      {s:'Médecin',fr:'C\'est une angine. Je vous fais une ordonnance.',es:'Es una amigdalitis. Le hago una receta.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Comprar medicamentos en la farmacia',img:'💊',dialogue:[
      {s:'Luisa',fr:'Bonjour, j\'ai une ordonnance.',es:'Buenos días, traigo una receta.',side:'left'},
      {s:'Pharmacien',fr:'Prenez-en un le matin et un le soir.',es:'Tome uno en la mañana y uno en la noche.',side:'right'},
      {s:'Luisa',fr:'Avec ou sans nourriture ?',es:'¿Con o sin comida?',side:'left'},
      {s:'Pharmacien',fr:'Avec de la nourriture, de préférence.',es:'Con comida, preferiblemente.',side:'right'},
      {s:'Luisa',fr:'Et quelque chose pour la toux aussi ?',es:'¿Y me puede dar algo para la tos también?',side:'left'},
      {s:'Pharmacien',fr:'Voici un sirop. Deux cuillères trois fois par jour.',es:'Sí, aquí tiene un jarabe. Dos cucharadas tres veces al día.',side:'right'}
    ]}
   ],
   vocab:['Una cita médica = Un rendez-vous','La receta médica = L\'ordonnance','El medicamento = Le médicament','Me duele... = J\'ai mal à...','La fiebre = La fièvre','La tos = La toux','El/la farmacéutico(a) = Le/la pharmacien(ne)'],
   quiz:[
    {q:'¿Cómo se dice "Un rendez-vous médical" en español?',opts:['Una visita','Una cita médica','Una receta','Una consulta'],ans:1},
    {q:'¿Qué significa "Tengo fiebre"?',opts:['J\'ai de la toux','J\'ai mal à la tête','J\'ai de la fièvre','Je suis fatigué'],ans:2},
    {q:'¿Qué significa "La receta médica"?',opts:['L\'hôpital','Le médecin','L\'ordonnance','Le médicament'],ans:2}
   ]},
  {id:'objets2',level:2,emoji:'🔑',name:'Objetos del Día',sub:'Llaves, esfero, cargador / Clés, stylo, chargeur',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Buscar las llaves antes de salir',img:'🔍',dialogue:[
      {s:'Carlos',fr:'Attends, je ne trouve pas mes clés !',es:'Espera, ¡no encuentro mis llaves!',side:'left'},
      {s:'Ana',fr:'Tu as regardé dans ton sac à dos ?',es:'¿Revisaste en tu mochila?',side:'right'},
      {s:'Carlos',fr:'Oui... et mon portefeuille, où il est ?',es:'Sí... ¡ah no! ¿Y mi billetera dónde está?',side:'left'},
      {s:'Ana',fr:'Je crois que tu l\'as laissé sur la table.',es:'Creo que la dejaste en la mesa de la sala.',side:'right'},
      {s:'Carlos',fr:'Ah oui ! Les voilà ! On peut partir.',es:'¡Ah sí! ¡Aquí están! Ya podemos irnos.',side:'left'},
      {s:'Ana',fr:'N\'oublie pas tes lunettes aussi !',es:'¡No te olvides los lentes tampoco!',side:'right'}
    ]},
    {label:'Sit. 2',title:'Pedir prestado un esfero',img:'✏️',dialogue:[
      {s:'Luisa',fr:'Excuse-moi, tu aurais un stylo à me prêter ?',es:'Disculpa, ¿me puedes prestar un esfero?',side:'left'},
      {s:'Collègue',fr:'Oui, bien sûr ! Tiens.',es:'Sí, claro. Toma.',side:'right'},
      {s:'Luisa',fr:'Merci ! Et tu aurais aussi une feuille de papier ?',es:'¡Gracias! ¿Y también tienes una hoja de papel?',side:'left'},
      {s:'Collègue',fr:'Oui, voilà. Tu en as besoin longtemps ?',es:'Sí, aquí tienes. ¿La necesitas por mucho tiempo?',side:'right'},
      {s:'Luisa',fr:'Non, juste cinq minutes.',es:'No, solo cinco minutos. Te lo devuelvo ya.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Pedir un cargador de celular',img:'🔌',dialogue:[
      {s:'Pedro',fr:'Mon téléphone est presque mort. Tu as un chargeur ?',es:'Mi celular está casi muerto. ¿Tienes un cargador?',side:'left'},
      {s:'María',fr:'Quel modèle de téléphone tu as ?',es:'¿Qué modelo de celular tienes?',side:'right'},
      {s:'Pedro',fr:'Un Samsung. Tu aurais un chargeur USB-C ?',es:'Un Samsung. ¿Tendrás un cargador USB-C?',side:'left'},
      {s:'María',fr:'Oui ! Le voilà. Tu peux le garder une heure.',es:'¡Sí! Aquí está. Puedes quedártelo una hora.',side:'right'},
      {s:'Pedro',fr:'Merci beaucoup, tu me sauves la vie !',es:'¡Muchísimas gracias, me salvaste la vida!',side:'left'}
    ]}
   ],
   vocab:['Las llaves = Les clés','La billetera / el monedero = Le portefeuille','La mochila = Le sac à dos','El esfero / el bolígrafo = Le stylo','La hoja = La feuille','El cargador = Le chargeur','Los lentes / los anteojos = Les lunettes'],
   quiz:[
    {q:'¿Cómo se dice "Les clés" en español?',opts:['La billetera','Las llaves','El esfero','La botella'],ans:1},
    {q:'¿Qué significa "¿Tienes un cargador?"?',opts:['Tu as un câble ?','Tu as un chargeur ?','Tu as un téléphone ?','Tu as de la batterie ?'],ans:1},
    {q:'¿Qué significa "¡Me salvaste la vida!"?',opts:['Tu me donnes la vie !','Tu m\'aides !','Tu m\'as sauvé la vie !','Tu es génial !'],ans:2}
   ]}
];

var ALL_THEMES=LEVEL1_THEMES.concat(LEVEL2_THEMES);
