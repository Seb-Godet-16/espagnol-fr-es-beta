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
    {es:'X',fr:'equis',em:'🎵'},{es:'Y',fr:'ye o i griega',em:'🥛'},
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
  {id:'pres',level:1,emoji:'🙋',name:'Presentarse',sub:'Nombre, edad, ciudad… / Se présenter',
   words:[
    {es:'El apellido',fr:'Le nom de famille',em:'👨‍👩‍👧'},{es:'El nombre',fr:'Le prénom',em:'🏷️'},
    {es:'La nacionalidad',fr:'La nationalité',em:'🌍'},{es:'La edad',fr:'L\'âge',em:'🎂'},
    {es:'La profesión o el oficio',fr:'La profession',em:'💼'},{es:'El país',fr:'Le pays',em:'🗺️'},
    {es:'Francés o francesa',fr:'Français(e)',em:'🇫🇷'},{es:'Español o española',fr:'Espagnol(e)',em:'🇪🇸'},
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
    {q:'¿Qué número es "Catorce"?',opts:['15','13','14','12'],ans:2}
   ]},
  {id:'col',level:1,emoji:'🎨',name:'Los Colores',sub:'Rojo, azul, verde… / Les couleurs',
   words:[
    {es:'Rojo',fr:'Rouge',em:'❤️'},{es:'Azul',fr:'Bleu',em:'💙'},{es:'Verde',fr:'Vert',em:'💚'},
    {es:'Amarillo',fr:'Jaune',em:'💛'},{es:'Naranja',fr:'Orange',em:'🧡'},{es:'Blanco',fr:'Blanc',em:'🤍'},
    {es:'Negro',fr:'Noir',em:'🖤'},{es:'Rosa o rosado',fr:'Rose',em:'🩷'},
    {es:'Morado o violeta',fr:'Violet',em:'💜'},{es:'Marrón o café',fr:'Marron',em:'🤎'},
    {es:'Gris',fr:'Gris',em:'🩶'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Rouge" en español?',opts:['Azul','Rojo','Verde','Amarillo'],ans:1},
    {q:'¿Qué significa "Azul"?',opts:['Vert','Jaune','Bleu','Violet'],ans:2},
    {q:'¿Cómo se dice "Vert" en español?',opts:['Amarillo','Gris','Verde','Blanco'],ans:2},
    {q:'¿Qué significa "Negro"?',opts:['Blanc','Gris','Marron','Noir'],ans:3},
    {q:'¿Cómo se dice "Jaune" en español?',opts:['Naranja','Amarillo','Rosa','Morado'],ans:1},
    {q:'¿Qué significa "Rosa o rosado"?',opts:['Rouge','Orange','Rose','Violet'],ans:2},
    {q:'¿Cómo se dice "Blanc" en español?',opts:['Blanco','Negro','Gris','Marrón'],ans:0}
   ]},
  {id:'nour',level:1,emoji:'🍽️',name:'La Comida',sub:'Pan, verduras, tapas… / La nourriture',
   words:[
    {es:'El pan',fr:'Le pain',em:'🍞'},{es:'El arroz',fr:'Le riz',em:'🍚'},
    {es:'El queso',fr:'Le fromage',em:'🧀'},{es:'La carne',fr:'La viande',em:'🥩'},
    {es:'El pollo',fr:'Le poulet',em:'🍗'},{es:'El pescado',fr:'Le poisson',em:'🐟'},
    {es:'La manzana',fr:'La pomme',em:'🍎'},{es:'El plátano o la banana',fr:'La banane',em:'🍌'},
    {es:'El tomate',fr:'La tomate',em:'🍅'},{es:'La zanahoria',fr:'La carotte',em:'🥕'},
    {es:'El huevo',fr:'L\'œuf',em:'🥚'},{es:'La mantequilla',fr:'Le beurre',em:'🧈'},
    {es:'Las frutas',fr:'Les fruits',em:'🍉'},{es:'Las verduras',fr:'Les légumes',em:'🥦'},
    {es:'La patata o las patatas fritas',fr:'La pomme de terre / les frites',em:'🥔'},
    {es:'El jamón (serrano o ibérico)',fr:'Le jambon (serrano / ibérique)',em:'🥩'},
    {es:'El chorizo',fr:'Le chorizo',em:'🌭'},{es:'El aceite de oliva',fr:'L\'huile d\'olive',em:'🫒'},
    {es:'La sal',fr:'Le sel',em:'🧂'},{es:'La pimienta',fr:'Le poivre',em:'🌶️'},
    {es:'Los macarrones o la pasta',fr:'Les pâtes',em:'🍝'},
    {es:'La naranja',fr:'L\'orange',em:'🍊'},{es:'El limón',fr:'Le citron',em:'🍋'},
    {es:'La fresa',fr:'La fraise',em:'🍓'},{es:'La sandía',fr:'La pastèque',em:'🍉'},
    {es:'La cebolla',fr:'L\'oignon',em:'🧅'},{es:'El ajo',fr:'L\'ail',em:'🧄'},
    {es:'El pepino',fr:'Le concombre',em:'🥒'},{es:'La ensalada',fr:'La salade',em:'🥗'},
    {es:'El chocolate',fr:'Le chocolat',em:'🍫'},{es:'La miel',fr:'Le miel',em:'🍯'}
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
    {es:'El agua',fr:'L\'eau',em:'💧'},{es:'El café (solo)',fr:'Le café noir',em:'☕'},
    {es:'El café con leche',fr:'Le café au lait',em:'☕'},{es:'El té',fr:'Le thé',em:'🍵'},
    {es:'El zumo (de naranja)',fr:'Le jus (d\'orange)',em:'🍊'},{es:'La leche',fr:'Le lait',em:'🥛'},
    {es:'El vino (tinto o blanco)',fr:'Le vin (rouge / blanc)',em:'🍷'},
    {es:'La cerveza',fr:'La bière',em:'🍺'},{es:'El refresco o la gaseosa',fr:'Le soda',em:'🥤'},
    {es:'La sangría',fr:'La sangria',em:'🍷'},{es:'El cortado',fr:'Le café avec un nuage de lait',em:'☕'},
    {es:'El agua con gas',fr:'L\'eau gazeuse',em:'🫧'}
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
  {id:'fam',level:1,emoji:'👨‍👩‍👧',name:'La Familia',sub:'Papá, mamá, hijo… / La famille',
   words:[
    {es:'El padre o el papá',fr:'Le père',em:'👨'},{es:'La madre o la mamá',fr:'La mère',em:'👩'},
    {es:'El hijo',fr:'Le fils',em:'👦'},{es:'La hija',fr:'La fille',em:'👧'},
    {es:'El hermano',fr:'Le frère',em:'🧑'},{es:'La hermana',fr:'La sœur',em:'👧'},
    {es:'El abuelo',fr:'Le grand-père',em:'👴'},{es:'La abuela',fr:'La grand-mère',em:'👵'},
    {es:'El marido o el esposo',fr:'Le mari',em:'💍'},{es:'La mujer o la esposa',fr:'La femme',em:'💑'},
    {es:'El tío o la tía',fr:'L\'oncle / la tante (aussi : mec/nana en argot)',em:'😄'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le père" en español?',opts:['El marido','El hijo','El padre o el papá','El hermano'],ans:2},
    {q:'¿Qué significa "La madre o la mamá"?',opts:['La fille','La sœur','La grand-mère','La mère'],ans:3},
    {q:'¿Cómo se dice "Le frère" en español?',opts:['El hijo','El hermano','El papá','El marido'],ans:1},
    {q:'¿Qué significa "La hermana"?',opts:['La mère','La grand-mère','La sœur','La fille'],ans:2},
    {q:'¿Cómo se dice "Le grand-père" en español?',opts:['El papá','El marido','El hijo','El abuelo'],ans:3},
    {q:'¿Qué significa "La abuela"?',opts:['La mère','La grand-mère','La sœur','La fille'],ans:1},
    {q:'¿Cómo se dice "La fille" en español?',opts:['La hermana','La esposa','La hija','La mamá'],ans:2},
    {q:'En argot español, "tío o tía" puede significar…',opts:['Père / mère','Mec / nana','Frère / sœur','Patron / patronne'],ans:1}
   ]},
  {id:'emot',level:1,emoji:'😄',name:'Las Emociones',sub:'Alegre, cansado… / Les émotions',
   words:[
    {es:'Alegre o contento',fr:'Joyeux / Content',em:'😄'},{es:'Triste',fr:'Triste',em:'😢'},
    {es:'Cansado o cansada',fr:'Fatigué(e)',em:'😴'},{es:'Enfadado o enojado',fr:'Fâché(e) / Énervé(e)',em:'😠'},
    {es:'Estresado o agobiado',fr:'Stressé(e)',em:'😰'},{es:'Enfermo o malito',fr:'Malade',em:'🤒'},
    {es:'Contento o feliz',fr:'Content(e) / Heureux(se)',em:'😊'},
    {es:'Preocupado o angustiado',fr:'Inquiet / Inquiète',em:'😟'},
    {es:'Enamorado o enamorada',fr:'Amoureux / Amoureuse',em:'😍'},
    {es:'Decepcionado o frustrado',fr:'Déçu(e)',em:'😞'},
    {es:'Tener miedo',fr:'Avoir peur',em:'😨'},
    {es:'¡Qué guay! o ¡Mola!',fr:'C\'est super ! / C\'est cool !',em:'🌟'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Énervé" en español de España?',opts:['Decepcionado','Enfadado','Preocupado','Contento'],ans:1},
    {q:'¿Cómo se dice "Joyeux" en español?',opts:['Triste','Cansado','Alegre o contento','Enfermo'],ans:2},
    {q:'¿Cómo se dice "Fatigué" en español?',opts:['Estresado','Enfermo','Preocupado','Cansado o cansada'],ans:3},
    {q:'¿Qué significa "Enfadado" en España?',opts:['Fatigué','Content','Fâché / Énervé','Malade'],ans:2},
        {q:'¿Qué significa "¡Mola!" en argot español?',opts:['Ça m\'énerve !','C\'est nul !','C\'est super ! / C\'est cool !','J\'ai peur !'],ans:2},
    {q:'¿Cómo se dice "Inquiet" en español?',opts:['Estresado','Enamorado','Preocupado o angustiado','Decepcionado'],ans:2},
    {q:'¿Qué significa "Tener miedo"?',opts:['Avoir faim','Avoir peur','Avoir froid','Avoir sommeil'],ans:1}
   ]},
  {id:'log',level:1,emoji:'🏠',name:'La Vivienda',sub:'Salón, cocina… / Le logement',
   words:[
    {es:'El salón o el comedor',fr:'Le salon / la salle à manger',em:'🛋️'},{es:'La cocina',fr:'La cuisine',em:'🍳'},
    {es:'La habitación o el cuarto',fr:'La chambre',em:'🛏️'},{es:'El cuarto de baño o el baño',fr:'La salle de bain',em:'🚿'},
    {es:'El aseo o el váter',fr:'Les toilettes',em:'🚽'},{es:'La entrada o el recibidor',fr:'L\'entrée',em:'🚪'},
    {es:'El garaje',fr:'Le garage',em:'🚗'},{es:'El piso o el apartamento',fr:'L\'appartement',em:'🏢'},
    {es:'La casa',fr:'La maison',em:'🏠'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le salon" en español de España?',opts:['La cocina','La habitación','El salón','El garaje'],ans:2},
    {q:'¿Qué significa "La cocina"?',opts:['La salle à manger','La cuisine','La salle de bain','Le salon'],ans:1},
    {q:'¿Cómo se dice "La chambre" en español?',opts:['El salón','La habitación o el cuarto','La entrada','El garaje'],ans:1},
    {q:'¿Qué significa "El aseo o el váter" en España?',opts:['La salle de bain','Le garage','Les toilettes','La salle à manger'],ans:2},
    {q:'¿Cómo se dice "L\'appartement" en España?',opts:['La casa','La entrada','El piso o el apartamento','La habitación'],ans:2}
   ]},
  {id:'veth',level:1,emoji:'👗',name:'La Ropa',sub:'Camiseta, pantalón… / Les vêtements',
   words:[
    {es:'La camiseta',fr:'Le t-shirt',em:'👕'},{es:'El pantalón (vaquero o tejano)',fr:'Le pantalon (jean)',em:'👖'},
    {es:'El vestido o La falda',fr:'La robe / la jupe',em:'👗'},{es:'La chaqueta',fr:'La veste',em:'🧥'},
    {es:'Los zapatos o las zapatillas',fr:'Les chaussures / les baskets',em:'👟'},
    {es:'El sombrero o la gorra',fr:'Le chapeau / la casquette',em:'🎩'},
    {es:'El abrigo',fr:'Le manteau',em:'🧥'},{es:'La bufanda',fr:'L\'écharpe',em:'🧣'},
    {es:'El bolso o el bolsillo',fr:'Le sac / la poche',em:'👜'},
    {es:'La camisa',fr:'La chemise',em:'👔'},{es:'Los calcetines',fr:'Les chaussettes',em:'🧦'},
    {es:'Los guantes',fr:'Les gants',em:'🧤'},{es:'El jersey o el suéter',fr:'Le pull',em:'🧥'},
    {es:'El traje de baño o el bañador',fr:'Le maillot de bain',em:'🩱'},
    {es:'El reloj (de pulsera)',fr:'La montre',em:'⌚'},
    {es:'Los pantalones cortos o el short',fr:'Le short',em:'🩳'},
    {es:'El gorro',fr:'Le bonnet',em:'🎿'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le t-shirt" en español?',opts:['El jersey','La camisa','La camiseta','La chaqueta'],ans:2},
    {q:'¿Qué significa "El pantalón vaquero o tejano"?',opts:['Le short','Le jean','La jupe','Le survêtement'],ans:1},
    {q:'¿Cómo se dice "Les chaussures" en español?',opts:['Los calcetines','Los guantes','Los zapatos o las zapatillas','El sombrero'],ans:2},
    {q:'¿Cómo se dice "Le pull" en España?',opts:['La bufanda','La chaqueta','El jersey o el suéter','El abrigo'],ans:2},
    {q:'¿Cómo se dice "Le maillot de bain" en España?',opts:['El bañador o el traje de baño','El gorro','El short','Los calcetines'],ans:0},
    {q:'¿Qué significa "La bufanda"?',opts:['Les gants','Le manteau','L\'écharpe','Le bonnet'],ans:2},
    {q:'¿Cómo se dice "La robe" en español?',opts:['La falda','El vestido','La chaqueta','El jersey'],ans:1},
    {q:'¿Qué significa "Los calcetines"?',opts:['Les chaussures','Les gants','Les chaussettes','Le maillot de bain'],ans:2}
   ]},
  {id:'corps',level:1,emoji:'🧍',name:'El Cuerpo',sub:'Cabeza, brazo, pie… / Le corps',
   words:[
    {es:'La cabeza',fr:'La tête',em:'🗣️'},{es:'El brazo o los brazos',fr:'Le bras / les bras',em:'💪'},
    {es:'La mano o las manos',fr:'La main / les mains',em:'✋'},{es:'La pierna o las piernas',fr:'La jambe / les jambes',em:'🦵'},
    {es:'El pie o los pies',fr:'Le pied / les pieds',em:'🦶'},{es:'El ojo o los ojos',fr:'L\'œil / les yeux',em:'👀'},
    {es:'La espalda',fr:'Le dos',em:''},{es:'La barriga o el estómago',fr:'Le ventre',em:'🫃'},
    {es:'El cerebro',fr:'Le cerveau',em:'🧠'},{es:'La oreja o las orejas',fr:'L\'oreille / les oreilles',em:'👂'},
    {es:'La nariz',fr:'Le nez',em:'👃'},{es:'La boca',fr:'La bouche',em:'👄'},
    {es:'El diente o los dientes',fr:'La dent / les dents',em:'🦷'},{es:'El hueso o los huesos',fr:'L\'os / les os',em:'🦴'},
    {es:'El corazón',fr:'Le cœur',em:'❤️'},{es:'El dedo o los dedos',fr:'Le doigt / les doigts',em:'☝️'},
    {es:'La lengua',fr:'La langue',em:'👅'},{es:'Los labios',fr:'Les lèvres',em:'💋'},
    {es:'El pelo o el cabello',fr:'Les cheveux',em:'💇‍♂️'},{es:'El cuello',fr:'Le cou',em:''},
    {es:'La uña o las uñas',fr:'L\'ongle / les ongles',em:'💅'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La tête" en español?',opts:['La nariz','La boca','La cabeza','El cuello'],ans:2},
    {q:'¿Qué significa "Los ojos"?',opts:['Les oreilles','Le nez','Les lèvres','Les yeux'],ans:3},
    {q:'¿Cómo se dice "La main" en español?',opts:['El pie','La pierna','El brazo','La mano'],ans:3},
    {q:'¿Qué significa "La nariz"?',opts:['La bouche','Le nez','L\'oreille','Le cou'],ans:1},
    {q:'¿Cómo se dice "La jambe" en español?',opts:['El brazo','La pierna','El pie','La espalda'],ans:1},
    {q:'¿Qué significa "El cerebro"?',opts:['Le cœur','L\'estomac','Le cerveau','L\'os'],ans:2},
    {q:'¿Cómo se dice "Les dents" en español?',opts:['Los labios','La lengua','Los dientes','Las orejas'],ans:2},
    {q:'¿Qué significa "El corazón"?',opts:['Le cerveau','Le cœur','L\'os','Le dos'],ans:1}
   ]},
  {id:'anim',level:1,emoji:'🐘',name:'Los Animales',sub:'Perro, gato, toro… / Les animaux',
   words:[
    {es:'El perro',fr:'Le chien',em:'🐶'},{es:'El gato',fr:'Le chat',em:'🐱'},
    {es:'El pájaro o el ave',fr:'L\'oiseau',em:'🐦'},{es:'El pez o el pescado',fr:'Le poisson',em:'🐟'},
    {es:'El caballo',fr:'Le cheval',em:'🐴'},{es:'La vaca',fr:'La vache',em:'🐮'},
    {es:'La gallina',fr:'La poule',em:'🐔'},{es:'El conejo',fr:'Le lapin',em:'🐰'},
    {es:'El toro',fr:'Le taureau',em:'🐂'},{es:'El cerdo',fr:'Le cochon',em:'🐷'},
    {es:'El elefante',fr:'L\'éléphant',em:'🐘'},{es:'El tigre',fr:'Le tigre',em:'🐯'},
    {es:'El oso',fr:'L\'ours',em:'🐻'},{es:'El delfín',fr:'Le dauphin',em:'🐬'},
    {es:'La ballena',fr:'La baleine',em:'🐳'},{es:'El águila',fr:'L\'aigle',em:'🦅'},
    {es:'La rana',fr:'La grenouille',em:'🐸'},{es:'La serpiente',fr:'Le serpent',em:'🐍'},
    {es:'El pato',fr:'Le canard',em:'🦆'},{es:'La mariposa',fr:'Le papillon',em:'🦋'},
    {es:'La araña',fr:'L\'araignée',em:'🕷️'},{es:'El mosquito',fr:'Le moustique',em:'🦟'},
    {es:'La hormiga',fr:'La fourmi',em:'🐜'},{es:'El lagarto',fr:'Le lézard',em:'🦎'},
    {es:'El gallo',fr:'Le coq',em:'🐓'},{es:'El cordero',fr:'L\'agneau',em:'🐑'},
    {es:'La cabra',fr:'La chèvre',em:'🐐'},{es:'El burro',fr:'L\'âne',em:'🫏'}
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
  {id:'verb',level:1,emoji:'📝',name:'Los Verbos',sub:'Ser, tener, ir… / Les verbes principaux',
   words:[
    {es:'Ser o estar',fr:'Être',em:'🧑',conj:{es:['Yo soy/estoy','Tú eres/estás','Él/Ella es/está','Nosotros somos/estamos','Vosotros sois/estáis','Ellos/Ellas son/están'],fr:['Je suis','Tu es','Il/Elle est','Nous sommes','Vous êtes','Ils/Elles sont']}},
    {es:'Tener',fr:'Avoir',em:'🤲',conj:{es:['Yo tengo','Tú tienes','Él/Ella tiene','Nosotros tenemos','Vosotros tenéis','Ellos/Ellas tienen'],fr:['J\'ai','Tu as','Il/Elle a','Nous avons','Vous avez','Ils/Elles ont']}},
    {es:'Hablar',fr:'Parler',em:'🗣️',conj:{es:['Yo hablo','Tú hablas','Él/Ella habla','Nosotros hablamos','Vosotros habláis','Ellos/Ellas hablan'],fr:['Je parle','Tu parles','Il/Elle parle','Nous parlons','Vous parlez','Ils/Elles parlent']}},
    {es:'Vivir',fr:'Habiter',em:'🏠',conj:{es:['Yo vivo','Tú vives','Él/Ella vive','Nosotros vivimos','Vosotros vivís','Ellos/Ellas viven'],fr:['J\'habite','Tu habites','Il/Elle habite','Nous habitons','Vous habitez','Ils/Elles habitent']}},
    {es:'Ir',fr:'Aller',em:'🚶',conj:{es:['Yo voy','Tú vas','Él/Ella va','Nosotros vamos','Vosotros vais','Ellos/Ellas van'],fr:['Je vais','Tu vas','Il/Elle va','Nous allons','Vous allez','Ils/Elles vont']}},
    {es:'Comer',fr:'Manger',em:'🍽️',conj:{es:['Yo como','Tú comes','Él/Ella come','Nosotros comemos','Vosotros coméis','Ellos/Ellas comen'],fr:['Je mange','Tu manges','Il/Elle mange','Nous mangeons','Vous mangez','Ils/Elles mangent']}},
    {es:'Beber',fr:'Boire',em:'🥤',conj:{es:['Yo bebo','Tú bebes','Él/Ella bebe','Nosotros bebemos','Vosotros bebéis','Ellos/Ellas beben'],fr:['Je bois','Tu bois','Il/Elle boit','Nous buvons','Vous buvez','Ils/Elles boivent']}},
    {es:'Gustar',fr:'Aimer',em:'❤️',conj:{es:['Me gusta','Te gusta','Le gusta','Nos gusta','Os gusta','Les gusta'],fr:['J\'aime','Tu aimes','Il/Elle aime','Nous aimons','Vous aimez','Ils/Elles aiment']}},
    {es:'Correr',fr:'Courir',em:'🏃‍♂️',conj:{es:['Yo corro','Tú corres','Él/Ella corre','Nosotros corremos','Vosotros corréis','Ellos/Ellas corren'],fr:['Je cours','Tu cours','Il/Elle court','Nous courons','Vous courez','Ils/Elles courent']}},
    {es:'Dormir',fr:'Dormir',em:'😴',conj:{es:['Yo duermo','Tú duermes','Él/Ella duerme','Nosotros dormimos','Vosotros dormís','Ellos/Ellas duermen'],fr:['Je dors','Tu dors','Il/Elle dort','Nous dormons','Vous dormez','Ils/Elles dorment']}},
    {es:'Caminar',fr:'Marcher',em:'🚶‍♂️',conj:{es:['Yo camino','Tú caminas','Él/Ella camina','Nosotros caminamos','Vosotros camináis','Ellos/Ellas caminan'],fr:['Je marche','Tu marches','Il/Elle marche','Nous marchons','Vous marchez','Ils/Elles marchent']}},
    {es:'Leer',fr:'Lire',em:'📖',conj:{es:['Yo leo','Tú lees','Él/Ella lee','Nosotros leemos','Vosotros leéis','Ellos/Ellas leen'],fr:['Je lis','Tu lis','Il/Elle lit','Nous lisons','Vous lisez','Ils/Elles lisent']}},
    {es:'Escribir',fr:'Écrire',em:'✍️',conj:{es:['Yo escribo','Tú escribes','Él/Ella escribe','Nosotros escribimos','Vosotros escribís','Ellos/Ellas escriben'],fr:['J\'écris','Tu écris','Il/Elle écrit','Nous écrivons','Vous écrivez','Ils/Elles écrivent']}},
    {es:'Escuchar',fr:'Écouter',em:'🎧',conj:{es:['Yo escucho','Tú escuchas','Él/Ella escucha','Nosotros escuchamos','Vosotros escucháis','Ellos/Ellas escuchan'],fr:['J\'écoute','Tu écoutes','Il/Elle écoute','Nous écoutons','Vous écoutez','Ils/Elles écoutent']}},
    {es:'Mirar',fr:'Regarder',em:'👀',conj:{es:['Yo miro','Tú miras','Él/Ella mira','Nosotros miramos','Vosotros miráis','Ellos/Ellas miran'],fr:['Je regarde','Tu regardes','Il/Elle regarde','Nous regardons','Vous regardez','Ils/Elles regardent']}},
    {es:'Aprender',fr:'Apprendre',em:'🧠',conj:{es:['Yo aprendo','Tú aprendes','Él/Ella aprende','Nosotros aprendemos','Vosotros aprendéis','Ellos/Ellas aprenden'],fr:['J\'apprends','Tu apprends','Il/Elle apprend','Nous apprenons','Vous apprenez','Ils/Elles apprennent']}},
    {es:'Comprar',fr:'Acheter',em:'🛒',conj:{es:['Yo compro','Tú compras','Él/Ella compra','Nosotros compramos','Vosotros compráis','Ellos/Ellas compran'],fr:['J\'achète','Tu achètes','Il/Elle achète','Nous achetons','Vous achetez','Ils/Elles achètent']}},
    {es:'Vender',fr:'Vendre',em:'💰',conj:{es:['Yo vendo','Tú vendes','Él/Ella vende','Nosotros vendemos','Vosotros vendéis','Ellos/Ellas venden'],fr:['Je vends','Tu vends','Il/Elle vend','Nous vendons','Vous vendez','Ils/Elles vendent']}},
    {es:'Dar',fr:'Donner',em:'🤲',conj:{es:['Yo doy','Tú das','Él/Ella da','Nosotros damos','Vosotros dais','Ellos/Ellas dan'],fr:['Je donne','Tu donnes','Il/Elle donne','Nous donnons','Vous donnez','Ils/Elles donnent']}},
    {es:'Llamar',fr:'Appeler',em:'📞',conj:{es:['Yo llamo','Tú llamas','Él/Ella llama','Nosotros llamamos','Vosotros llamáis','Ellos/Ellas llaman'],fr:['J\'appelle','Tu appelles','Il/Elle appelle','Nous appelons','Vous appelez','Ils/Elles appellent']}},
    {es:'Cocinar',fr:'Cuisiner',em:'🍳',conj:{es:['Yo cocino','Tú cocinas','Él/Ella cocina','Nosotros cocinamos','Vosotros cocináis','Ellos/Ellas cocinan'],fr:['Je cuisine','Tu cuisines','Il/Elle cuisine','Nous cuisinons','Vous cuisinez','Ils/Elles cuisinent']}},
    {es:'Limpiar',fr:'Nettoyer',em:'🧹',conj:{es:['Yo limpio','Tú limpias','Él/Ella limpia','Nosotros limpiamos','Vosotros limpiais','Ellos/Ellas limpian'],fr:['Je nettoie','Tu nettoies','Il/Elle nettoie','Nous nettoyons','Vous nettoyez','Ils/Elles nettoient']}},
    {es:'Ducharse',fr:'Se doucher',em:'🧼',conj:{es:['Yo me ducho','Tú te duchas','Él/Ella se ducha','Nosotros nos duchamos','Vosotros os ducháis','Ellos/Ellas se duchan'],fr:['Je me douche','Tu te douches','Il/Elle se douche','Nous nous douchons','Vous vous douchez','Ils/Elles se douchent']}},
    {es:'Coger',fr:'Prendre',em:'🤲',conj:{es:['Yo cojo','Tú coges','Él/Ella coge','Nosotros cogemos','Vosotros cogéis','Ellos/Ellas cogen'],fr:['Je prends','Tu prends','Il/Elle prend','Nous prenons','Vous prenez','Ils/Elles prennent']}},
    {es:'Pensar',fr:'Penser',em:'🤔',conj:{es:['Yo pienso','Tú piensas','Él/Ella piensa','Nosotros pensamos','Vosotros pensáis','Ellos/Ellas piensan'],fr:['Je pense','Tu penses','Il/Elle pense','Nous pensons','Vous pensez','Ils/Elles pensent']}},
    {es:'Conducir',fr:'Conduire',em:'🚗',conj:{es:['Yo conduzco','Tú conduces','Él/Ella conduce','Nosotros conducimos','Vosotros conducís','Ellos/Ellas conducen'],fr:['Je conduis','Tu conduis','Il/Elle conduit','Nous conduisons','Vous conduisez','Ils/Elles conduisent']}},
    {es:'Sonreír',fr:'Sourire',em:'😊',conj:{es:['Yo sonrío','Tú sonríes','Él/Ella sonríe','Nosotros sonreímos','Vosotros sonreís','Ellos/Ellas sonríen'],fr:['Je souris','Tu souris','Il/Elle sourit','Nous sourions','Vous souriez','Ils/Elles sourient']}},
    {es:'Irse',fr:'Partir',em:'🚪',conj:{es:['Yo me voy','Tú te vas','Él/Ella se va','Nosotros nos vamos','Vosotros os vais','Ellos/Ellas se van'],fr:['Je pars','Tu pars','Il/Elle part','Nous partons','Vous partez','Ils/Elles partent']}},
    {es:'Pagar',fr:'Payer',em:'💳',conj:{es:['Yo pago','Tú pagas','Él/Ella paga','Nosotros pagamos','Vosotros pagáis','Ellos/Ellas pagan'],fr:['Je paie','Tu paies','Il/Elle paie','Nous payons','Vous payez','Ils/Elles paient']}},
    {es:'Llegar',fr:'Arriver',em:'🛬',conj:{es:['Yo llego','Tú llegas','Él/Ella llega','Nosotros llegamos','Vosotros llegáis','Ellos/Ellas llegan'],fr:['J\'arrive','Tu arrives','Il/Elle arrive','Nous arrivons','Vous arrivez','Ils/Elles arrivent']}},
    {es:'Preguntar',fr:'Demander',em:'🙋‍♂️',conj:{es:['Yo pregunto','Tú preguntas','Él/Ella pregunta','Nosotros preguntamos','Vosotros preguntáis','Ellos/Ellas preguntan'],fr:['Je demande','Tu demandes','Il/Elle demande','Nous demandons','Vous demandez','Ils/Elles demandent']}},
    {es:'Buscar',fr:'Chercher',em:'🔍',conj:{es:['Yo busco','Tú buscas','Él/Ella busca','Nosotros buscamos','Vosotros buscáis','Ellos/Ellas buscan'],fr:['Je cherche','Tu cherches','Il/Elle cherche','Nous cherchons','Vous cherchez','Ils/Elles cherchent']}},
    {es:'Trabajar',fr:'Travailler',em:'💼',conj:{es:['Yo trabajo','Tú trabajas','Él/Ella trabaja','Nosotros trabajamos','Vosotros trabajáis','Ellos/Ellas trabajan'],fr:['Je travaille','Tu travailles','Il/Elle travaille','Nous travaillons','Vous travaillez','Ils/Elles travaillent']}},
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
  {id:'pays',level:1,emoji:'🌍',name:'Los Países',sub:'Francia, España… / Les pays',
   words:[
    {es:'Francia',fr:'La France',em:'🇫🇷'},{es:'España',fr:'L\'Espagne',em:'🇪🇸'},
    {es:'Portugal',fr:'Le Portugal',em:'🇵🇹'},{es:'Italia',fr:'L\'Italie',em:'🇮🇹'},
    {es:'Alemania',fr:'L\'Allemagne',em:'🇩🇪'},{es:'Reino Unido',fr:'Le Royaume-Uni',em:'🇬🇧'},
    {es:'Bélgica',fr:'La Belgique',em:'🇧🇪'},{es:'Suiza',fr:'La Suisse',em:'🇨🇭'},
    {es:'Países Bajos',fr:'Les Pays-Bas',em:'🇳🇱'},{es:'Canadá',fr:'Le Canada',em:'🇨🇦'},
    {es:'Brasil',fr:'Le Brésil',em:'🇧🇷'},{es:'Colombia',fr:'La Colombie',em:'🇨🇴'},
    {es:'Argentina',fr:'L\'Argentine',em:'🇦🇷'},{es:'México',fr:'Le Mexique',em:'🇲🇽'},
    {es:'Marruecos',fr:'Le Maroc',em:'🇲🇦'},{es:'China',fr:'La Chine',em:'🇨🇳'},
    {es:'Japón',fr:'Le Japon',em:'🇯🇵'},{es:'Estados Unidos',fr:'Les États-Unis',em:'🇺🇸'},
    {es:'Rusia',fr:'La Russie',em:'🇷🇺'},{es:'India',fr:'L\'Inde',em:'🇮🇳'},
    {es:'Turquía',fr:'La Turquie',em:'🇹🇷'},{es:'Grecia',fr:'La Grèce',em:'🇬🇷'},
    {es:'Australia',fr:'L\'Australie',em:'🇦🇺'},{es:'Sudáfrica',fr:'L\'Afrique du Sud',em:'🇿🇦'}
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
{id:'plan',level:1,emoji:'🌿',name:'Las Plantas',sub:'Flor, árbol, bosque… / Les plantes',
   words:[
    {es:'La flor',fr:'La fleur',em:'🌸'},{es:'El árbol',fr:'L\'arbre',em:'🌳'},
    {es:'El césped o la hierba',fr:'L\'herbe',em:'🌿'},{es:'La hoja',fr:'La feuille',em:'🍃'},
    {es:'La rosa',fr:'La rose',em:'🌹'},{es:'El bosque',fr:'La forêt',em:'🌲'},
    {es:'El jardín',fr:'Le jardin',em:'🏡'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La fleur" en español?',opts:['La hoja','La flor','El césped','La rosa'],ans:1},
    {q:'¿Qué significa "El árbol"?',opts:['La feuille','L\'herbe','L\'arbre','La fleur'],ans:2},
    {q:'¿Cómo se dice "La rose" en español?',opts:['La flor','La hoja','El césped','La rosa'],ans:3},
    {q:'¿Qué significa "El bosque"?',opts:['Le jardin','La forêt','Le champ','Le parc'],ans:1},
    {q:'¿Cómo se dice "Le jardin" en español?',opts:['El bosque','El árbol','El jardín','La flor'],ans:2}
   ]},
  {id:'salut',level:1,emoji:'👋',name:'Los Saludos',sub:'Buenos días, gracias… / Les salutations',
   words:[
    {es:'Buenos días o buen día',fr:'Bonjour (le matin)',em:'🌅'},{es:'Buenas tardes',fr:'Bonne après-midi',em:'🌆'},
    {es:'Buenas noches',fr:'Bonsoir / Bonne nuit',em:'🌙'},{es:'¡Hola!',fr:'Salut !',em:'👋'},
    {es:'Adiós o hasta luego',fr:'Au revoir / À bientôt',em:'👋'},{es:'Hasta pronto',fr:'À bientôt',em:'⏱️'},
    {es:'Gracias o Muchas gracias',fr:'Merci / Merci beaucoup',em:'🙏'},
    {es:'Por favor o De nada',fr:'S\'il vous plaît / De rien',em:'🤝'},
    {es:'Perdona o Perdone',fr:'Pardon / Excusez-moi',em:'🙇'},
    {es:'¡Venga! o ¡Vale!',fr:'Allez ! / D\'accord !',em:'👍'},
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
    {q:'¿Qué significa "Adiós o hasta luego"?',opts:['À tout à l\'heure','Au revoir / À bientôt','Bonjour','Bonne nuit'],ans:1},
    {q:'¿Cómo se dice "Merci" en español?',opts:['Por favor','Perdona','Gracias','Sí'],ans:2},
    {q:'¿Qué significa "¡Vale!" en España?',opts:['Adieu','Allons-y !','D\'accord !','Bonne nuit'],ans:2},
    {q:'¿Cómo se dice "S\'il vous plaît" en español?',opts:['Gracias','Perdona','Por favor','Sí'],ans:2},
    {q:'¿Qué significa "¡Venga!" en España?',opts:['Viens !','Allez ! / D\'accord !','Non !','Peut-être !'],ans:1},
    {q:'¿Qué significa "¿Cómo estás?"?',opts:['Où es-tu ?','Comment tu t\'appelles ?','Comment vas-tu ?','Quel âge as-tu ?'],ans:2},
    {q:'¿Qué significa "¡Qué chulo!"?',opts:['Comme c\'est bizarre !','Comme c\'est cool !','Comme c\'est triste !','Comme c\'est grand !'],ans:1}
   ]},
  {id:'met',level:1,emoji:'💼',name:'Las Profesiones',sub:'Médico, profe… / Les professions',
   words:[
    {es:'El profesora o la profesora o el/la profe',fr:'Le/la professeur(e)',em:'👩‍🏫'},
    {es:'El/la médico o el doctor',fr:'Le médecin',em:'🩺'},
    {es:'El cocinero o la cocinera',fr:'Le cuisinier / la cuisinière',em:'👨‍🍳'},
    {es:'El/la estudiante',fr:'L\'étudiant(e)',em:'🎓'},
    {es:'El vendedor o la vendedora',fr:'Le vendeur / la vendeuse',em:'🏪'},
    {es:'El camarero o la camarera',fr:'Le serveur / la serveuse',em:'🍽️'},
    {es:'El/la taxista o el conductor',fr:'Le chauffeur de taxi',em:'🚗'},
    {es:'El enfermero o la enfermera',fr:'L\'infirmier(ère)',em:'👨‍⚕️'},
    {es:'El fontanero o la fontanera',fr:'Le/la plombier(ère)',em:'🔧'},
    {es:'El informático o la informática',fr:'L\'informaticien(ne)',em:'💻'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le médecin" en español?',opts:['El profesor','El médico o el doctor','El enfermero','El cocinero'],ans:1},
    {q:'¿Qué significa "El profe" en España?',opts:['L\'étudiant','Le directeur','Le professeur (familier)','Le concierge'],ans:2},
    {q:'¿Cómo se dice "Le serveur / la serveuse" en España?',opts:['El mesero','El camarero o la camarera','El chofer','El vendedor'],ans:1},
    {q:'¿Qué significa "La estudiante"?',opts:['La professeure','L\'étudiante','Le médecin','La vendeuse'],ans:1},
    {q:'¿Cómo se dice "L\'infirmier" en español?',opts:['El médico','El profesor','El/la enfermero(a)','El camarero'],ans:2}
   ]},
  {id:'trans',level:1,emoji:'🚌',name:'Los Transportes',sub:'Metro, tren, coche… / Les transports',
   words:[
    {es:'El autobús o el bus',fr:'Le bus',em:'🚌'},{es:'El trenE',fr:'Le train',em:'🚂'},
    {es:'El coche o el carro',fr:'La voiture',em:'🚗'},{es:'La bicicleta o la bici',fr:'Le vélo',em:'🚴'},
    {es:'El metro',fr:'Le métro',em:'🚇'},{es:'El taxi',fr:'Le taxi',em:'🚕'},
    {es:'El avión',fr:'L\'avion',em:'✈️'},{es:'El billete o el ticket',fr:'Le billet / le ticket',em:'🎫'},
    {es:'La moto',fr:'La moto',em:'🏍️'},{es:'El tranvía',fr:'Le tramway',em:'🚊'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "Le bus" en español?',opts:['El tren','El metro','El autobús o el bus','El taxi'],ans:2},
    {q:'¿Cómo se dice "La voiture" en España?',opts:['La moto','El coche o el carro','El tranvía','El camión'],ans:1},
    {q:'¿Cómo se dice "L\'avion" en español?',opts:['El barco','El avión','La bicicleta','El metro'],ans:1},
    {q:'¿Cómo se dice "Le billet" en España?',opts:['El pasaje','El sencillo','El billete o el ticket','La tarjeta'],ans:2}
   ]},
  {id:'lieux',level:1,emoji:'🏙️',name:'Los Lugares',sub:'Mercado, plaza, bar… / Les lieux importants',
   words:[
    {es:'El supermercado',fr:'Le supermarché',em:'🛒'},
    {es:'La guardería',fr:'L\'école maternelle',em:'🧸'},
    {es:'El colegio',fr:'L\'école primaire',em:'🎒'},
    {es:'La ESO',fr:'Le collège',em:'📚'},
    {es:'El instituto',fr:'Le lycée',em:'🎓'},
    {es:'La universidad',fr:'L\'université',em:'🏛️'},
    {es:'El hospital',fr:'L\'hôpital',em:'🏥'},
    {es:'El parque',fr:'Le parc',em:'🌳'},
    {es:'La plaza',fr:'La place',em:'⛲'},
    {es:'El banco',fr:'La banque',em:'🏦'},
    {es:'La farmacia',fr:'La pharmacie',em:'💊'},
    {es:'La iglesia',fr:'L\'église',em:'⛪'},
    {es:'El ayuntamiento',fr:'La mairie',em:'🏛️'},
    {es:'El bar o el café',fr:'Le bar / le café',em:'☕'},
    {es:'La calle o la avenida',fr:'La rue / l\'avenue',em:'🛣️'},
    {es:'El río',fr:'La rivière',em:'🏞️'},
    {es:'La playa',fr:'La plage',em:'🏖️'},
    {es:'La ciudad',fr:'La ville',em:'🏙️'},
    {es:'El pueblo',fr:'Le village',em:'🏡'},
    {es:'El campo',fr:'La campagne',em:'🌾'},
    {es:'La montaña o la sierra',fr:'La montagne / la chaîne de montagnes',em:'⛰️'},
    {es:'El mar o el océano',fr:'La mer / l\'océan',em:'🌊'},
    {es:'La taberna o el mesón',fr:'La taverne / l\'auberge',em:'🍷'},
    {es:'La manzana o la cuadra',fr:'Le pâté de maisons',em:'🏘️'}
   ],
   quiz10:[
    {q:'¿Cómo se dice "La pharmacie" en español?',opts:['El banco','El hospital','La farmacia','El supermercado'],ans:2},
    {q:'¿Cómo se dice "La mairie" en España?',opts:['La iglesia','El tribunal','El ayuntamiento','El mercado'],ans:2},
    {q:'¿Cómo se dice "L\'hôpital" en español?',opts:['La farmacia','El ayuntamiento','El hospital','El banco'],ans:2},
    {q:'¿Qué es típicamente español y se encuentra en cada barrio?',opts:['Le supermarché','Le bar / le café','La pharmacie','L\'école'],ans:1},
    {q:'¿Cómo se dice "La mer" en español?',opts:['El río','La montaña','El mar','El lago'],ans:2},
    {q:'¿Qué significa "El ayuntamiento"?',opts:['Le tribunal','La mairie','Le parlement','L\'université'],ans:1},
    {q:'¿Cómo se dice "La ville" en español?',opts:['La calle','El pueblo','La ciudad','La montaña'],ans:2},
    {q:'¿Qué significa "El banco"?',opts:['La pharmacie','La banque','La caisse','Le bureau'],ans:1}
   ]},
  {id:'orient',level:1,emoji:'🧭',name:'Orientarse',sub:'Izquierda, derecha… / S\'orienter',
   words:[
    {es:'A la izquierda',fr:'À gauche',em:'⬅️'},{es:'A la derecha',fr:'À droite',em:'➡️'},
    {es:'Todo recto o derecho',fr:'Tout droit',em:'⬆️'},{es:'Al lado',fr:'À côté',em:'↔️'},
    {es:'Enfrente o frente a',fr:'En face',em:'🔄'},{es:'Lejos',fr:'Loin',em:'🌅'},
    {es:'Cerca',fr:'Près / tout près',em:'📍'},{es:'El mapa o el plano',fr:'Le plan / la carte',em:'🗺️'},
    {es:'Detrás',fr:'Derrière',em:'🔙'},
    {es:'Delante',fr:'Devant',em:'🔜'}
    ],
   quiz10:[
    {q:'¿Cómo se dice "À gauche" en español?',opts:['A la derecha','Todo recto','A la izquierda','Enfrente'],ans:2},
    {q:'¿Qué significa "A la derecha"?',opts:['À gauche','Tout droit','À côté','À droite'],ans:3},
    {q:'¿Cómo se dice "Tout droit" en español?',opts:['A la izquierda','Todo recto o derecho','Enfrente','Al lado'],ans:1},
    {q:'¿Qué significa "Enfrente o frente a"?',opts:['À côté','Derrière','En face','Près'],ans:2},
    {q:'¿Cómo se dice "Près" en español?',opts:['Lejos','Al lado','Cerca','Enfrente'],ans:2}
   ]},
  {id:'sante',level:1,emoji:'🏥',name:'La Salud',sub:'Médico, farmacia… / La santé',
   words:[
    {es:'El médico o el doctor',fr:'Le médecin',em:'🩺'},{es:'El hospital',fr:'L\'hôpital',em:'🏥'},
    {es:'El medicamento o el fármaco',fr:'Le médicament',em:'💊'},
    {es:'La receta médica',fr:'L\'ordonnance',em:'📋'},
    {es:'Tener dolor o doler',fr:'Avoir mal',em:'🤕'},{es:'La fiebre',fr:'La fièvre',em:'🌡️'},
    {es:'La tos',fr:'La toux',em:'😮‍💨'},{es:'La farmacia',fr:'La pharmacie',em:'🏪'},
    {es:'El enfermero o la enfermera',fr:'L\'infirmier(ère)',em:'👨‍⚕️'},
    {es:'La vacuna',fr:'Le vaccin',em:'💉'},{es:'La tirita o el vendaje',fr:'Le pansement',em:'🩹'},
    {es:'La ambulancia',fr:'L\'ambulance',em:'🚑'},
    {es:'Las urgencias o el servicio de urgencias',fr:'Les urgences',em:'🆘'},
    {es:'El/la paciente',fr:'Le/la patient(e)',em:'🛏️'},
    {es:'La consulta médica o la cita',fr:'La consultation / le rendez-vous',em:'📋'},
    {es:'El termómetro',fr:'Le thermomètre',em:'🌡️'},
    {es:'El pañuelo',fr:'Le mouchoir',em:'🤧'},
    {es:'La pastilla',fr:'Le comprimé / le cachet',em:'💊'},
   ],
   quiz10:[
    {q:'¿Cómo se dice "L\'hôpital" en español?',opts:['La farmacia','El hospital','Las urgencias','La consulta'],ans:1},
    {q:'¿Qué significa "La fiebre"?',opts:['La toux','La douleur','La fièvre','La grippe'],ans:2},
    {q:'¿Cómo se dice "Le vaccin" en español?',opts:['La tirita','La vacuna','El vendaje','El medicamento'],ans:1},
    {q:'¿Cómo se dice "Le pansement" en España?',opts:['La inyección','La vacuna','La tirita o el vendaje','El medicamento'],ans:2},
    {q:'¿Cómo se dice "L\'ordonnance" en español?',opts:['La consulta','El medicamento','La receta médica','La vacuna'],ans:2},
    {q:'¿Cómo se dice "Les urgences" en español?',opts:['El médico de guardia','La sala de espera','Las urgencias','La consulta'],ans:2},
    {q:'¿Cómo se dice "Le thermomètre" en español?',opts:['La presión','El termómetro','La fiebre','La inyección'],ans:1},
    {q:'¿Cómo se dice "Un rendez-vous médical" en español?',opts:['Una visita','Una cita médica','Una receta','Una consulta'],ans:1}
   ]},
  {id:'objets',level:1,emoji:'🔑',name:'Objetos del Día',sub:'Teléfono, llaves… / Objets du quotidien',
   words:[
    {es:'El teléfono',fr:'Le téléphone',em:'☎️'},
    {es:'El móvil',fr:'Le portable',em:'📱'},
    {es:'Las llaves',fr:'Les clés',em:'🔑'},{es:'La cartera o el monedero',fr:'Le portefeuille / le porte-monnaie',em:'👛'},
    {es:'La mochila',fr:'Le sac à dos',em:'🎒'},
    {es:'Las gafas',fr:'Les lunettes',em:'👓'},
    {es:'El papel',fr:'Le papier',em:'📄'},{es:'El bolígrafo o el boli',fr:'Le stylo / le bic',em:'🖊️'},
    {es:'Las tijeras',fr:'Les ciseaux',em:'✂️'},{es:'El cargador',fr:'Le chargeur',em:'🔌'},
    {es:'La botella',fr:'La bouteille',em:'🍶'},{es:'El ordenador',fr:'L\'ordinateur',em:'💻'},
    {es:'El paraguas',fr:'Le parapluie',em:'☂️'},
    {es:'El vaso',fr:'Le verre',em:'🥛'},
    {es:'La taza',fr:'La tasse',em:'☕'},
    {es:'El plato',fr:'L\'assiette',em:'🍽️'},
    {es:'La cuchara',fr:'La cuillère',em:'🥄'},
    {es:'El tenedor',fr:'La fourchette',em:'🍴'},
    {es:'El cuchillo',fr:'Le couteau',em:'🔪'},
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
    {q:'¿Cómo se dice "Le stylo" en España (familier)?',opts:['El lápiz','El papel','El bolígrafo o el boli','El libro'],ans:2},
    {q:'¿Cómo se dice "Le portefeuille" en español?',opts:['La mochila','Las llaves','La cartera o el monedero','El teléfono'],ans:2},
    {q:'¿Qué significa "El espejo"?',opts:['La fenêtre','Le miroir','Le tableau','La porte'],ans:1},
    {q:'¿Cómo se dice "La serviette" en español?',opts:['La almohada','El jabón','La toalla','El vaso'],ans:2},
    {q:'¿Qué significa "La cuchara"?',opts:['Le couteau','La fourchette','La cuillère','L\'assiette'],ans:2},
    {q:'¿Cómo se dice "Le parapluie" en español?',opts:['El abrigo','El paraguas','La bufanda','El impermeable'],ans:1},
    {q:'¿Qué significa "La almohada"?',opts:['La couverture','Le matelas','Le drap','L\'oreiller'],ans:3},
   ]}
];

var LEVEL2_THEMES=[
  {id:'alpha2',level:2,emoji:'🔤',name:'El Alfabeto',sub:'Deletrear en situación / Épeler en situation',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Nombre por teléfono',img:'📞',
     dialogue:[
      {s:'Agente',fr:'Buenos días, ¿cuál es su apellido?',es:'Buenos días, ¿cuál es su apellido?',side:'right'},
      {s:'Cliente',fr:'Me llamo García.',es:'Me llamo García.',side:'left'},
      {s:'Agente',fr:'¿Puede deletrearlo, por favor?',es:'¿Puede deletrearlo, por favor?',side:'right'},
      {s:'Cliente',fr:'G-A-R-C-Í-A.',es:'G-A-R-C-Í-A.',side:'left'},
      {s:'Agente',fr:'Perfecto, gracias.',es:'Perfecto, muchas gracias.',side:'right'}
     ]},
    {label:'Sit. 2',title:'Correo electrónico',img:'📧',
     dialogue:[
      {s:'Recepcionista',fr:'¿Cuál es su correo electrónico?',es:'¿Cuál es su correo electrónico?',side:'right'},
      {s:'Luisa',fr:'Es luisa.ramos@gmail.com',es:'Es luisa punto ramos arroba gmail punto com.',side:'left'},
      {s:'Recepcionista',fr:'¿Puede deletrear el nombre?',es:'¿Puede deletrear el nombre?',side:'right'},
      {s:'Luisa',fr:'Claro: L-U-I-S-A. Punto. R-A-M-O-S.',es:'Claro que sí: L-U-I-S-A. Punto. R-A-M-O-S.',side:'left'},
      {s:'Recepcionista',fr:'¡Perfecto, muchas gracias!',es:'¡Perfecto, muchas gracias!',side:'right'}
     ]},
    {label:'Sit. 3',title:'Nombre de la calle',img:'🏢',
     dialogue:[
      {s:'Empleada',fr:'¿Cuál es su dirección?',es:'¿Cuál es su dirección?',side:'right'},
      {s:'María',fr:'Vivo en la calle Alcalá.',es:'Vivo en la calle Alcalá.',side:'left'},
      {s:'Empleada',fr:'¿Cómo se escribe Alcalá?',es:'¿Cómo se escribe Alcalá?',side:'right'},
      {s:'María',fr:'A-L-C-A-L-Á. Con tilde en la última a.',es:'A-L-C-A-L-Á. Con tilde en la última a.',side:'left'},
      {s:'Empleada',fr:'Muy bien, gracias.',es:'Muy bien, gracias.',side:'right'}
     ]}
   ],
   vocab:['Deletrear = Épeler','La letra = La lettre','¿Cómo se escribe? = Comment ça s\'écrit ?','¿Puede repetir? = Pouvez-vous répéter ?','Con tilde = Avec accent','¿Vale? = D\'accord ?'],
   quiz:[
    {q:'¿Qué significa "Deletrear"?',opts:['Épeler','Écrire','Parler','Lire'],ans:0},
    {q:'¿Qué significa "¿Cómo se escribe?"?',opts:['Comment ça se prononce ?','Comment ça s\'appelle ?','Comment ça s\'écrit ?','Combien de lettres ?'],ans:2},
    {q:'¿Qué significa "Con tilde"?',opts:['Avec un point','Avec une virgule','Avec un accent','Avec une majuscule'],ans:2}
   ]},
  {id:'pres2',level:2,emoji:'🙋',name:'Presentarse',sub:'En situación real / En situation réelle',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Encuentro entre amigos',img:'🤝',
     dialogue:[
      {s:'Ana',fr:'¡Hola! Me llamo Ana. ¿Y tú?',es:'¡Hola! Me llamo Ana. ¿Y tú?',side:'left'},
      {s:'Pedro',fr:'Yo soy Pedro. Soy de Sevilla.',es:'Yo soy Pedro. Soy de Sevilla.',side:'right'},
      {s:'Ana',fr:'¡Qué guay! ¿Vives aquí?',es:'¡Qué guay! ¿Vives aquí en Madrid?',side:'left'},
      {s:'Pedro',fr:'Sí, desde hace seis meses. Tengo veintiocho años.',es:'Sí, desde hace seis meses. Tengo veintiocho años.',side:'right'},
      {s:'Ana',fr:'¡Bienvenido! ¡Hablas muy bien el español, tío!',es:'¡Bienvenido! ¡Hablas muy bien el español, tío!',side:'left'}
     ]},
    {label:'Sit. 2',title:'Ambiente profesional',img:'💼',
     dialogue:[
      {s:'Directora',fr:'Buenos días, soy la señora Martín.',es:'Buenos días, soy la señora Martín.',side:'right'},
      {s:'Carlos',fr:'Buenos días, señora. Me llamo Carlos Fernández.',es:'Buenos días, señora. Me llamo Carlos Fernández.',side:'left'},
      {s:'Directora',fr:'¿Cuál es su profesión?',es:'¿Cuál es su profesión?',side:'right'},
      {s:'Carlos',fr:'Soy ingeniero. Vengo de Barcelona.',es:'Soy ingeniero. Vengo de Barcelona.',side:'left'},
      {s:'Directora',fr:'Encantada, señor Fernández.',es:'Encantada, señor Fernández.',side:'right'}
     ]},
    {label:'Sit. 3',title:'Llegada al instituto',img:'🏫',
     dialogue:[
      {s:'Secretaria',fr:'Buenos días, ¿eres nuevo aquí?',es:'Buenos días, ¿eres nuevo aquí?',side:'right'},
      {s:'Luisa',fr:'Sí, me llamo Luisa Pérez.',es:'Sí, me llamo Luisa Pérez.',side:'left'},
      {s:'Secretaria',fr:'¿Cuál es tu nacionalidad?',es:'¿Cuál es tu nacionalidad?',side:'right'},
      {s:'Luisa',fr:'Soy francesa. Tengo treinta años.',es:'Soy francesa. Tengo treinta años.',side:'left'},
      {s:'Secretaria',fr:'¡Bienvenida al instituto! ¡Que tengas un buen día!',es:'¡Bienvenida al instituto! ¡Que tengas un buen día!',side:'right'}
     ]}
   ],
   vocab:['Me llamo = Je m\'appelle','Tengo ... años = J\'ai ... ans','Vengo de = Je viens de','Vivo en = J\'habite à','¡Bienvenido/a! = Bienvenue !','Encantado/a = Enchanté(e)','¡Tío o tía! = Mec / nana (familier)'],
   quiz:[
    {q:'¿Qué significa "¡Bienvenido/a!"?',opts:['Au revoir','Bonjour','Bienvenue','Enchanté'],ans:2},
    {q:'¿Cómo se dice "J\'ai vingt ans" en español?',opts:['Soy veinte años','Tengo veinte años','Vengo veinte años','Vivo veinte'],ans:1},
    {q:'¿Qué significa "¡Tío!" en argot español?',opts:['Mon oncle !','Monsieur !','Mec ! (familier)','Attention !'],ans:2}
   ]},
  {id:'num2',level:2,emoji:'🔢',name:'Los Números',sub:'En situación real / En situation réelle',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Preguntar la hora',img:'⏰',dialogue:[
      {s:'Rosa',fr:'Oye, ¿qué hora es?',es:'Oye, ¿qué hora es?',side:'left'},
      {s:'Paseante',fr:'Son las dos y media.',es:'Son las dos y media.',side:'right'},
      {s:'Rosa',fr:'¡Muchas gracias!',es:'¡Muchas gracias!',side:'left'},
      {s:'Paseante',fr:'¡De nada! Buenas tardes.',es:'¡De nada! Buenas tardes.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Dar tu número de móvil',img:'📱',dialogue:[
      {s:'Amiga',fr:'¿Cuál es tu número de móvil?',es:'¿Cuál es tu número de móvil?',side:'right'},
      {s:'María',fr:'Es el 634 15 20 11.',es:'Es el seis, tres, cuatro — quince — veinte — once.',side:'left'},
      {s:'Amiga',fr:'Seis, tres, cuatro... ¿puedes repetir?',es:'Seis, tres, cuatro... ¿puedes repetir?',side:'right'},
      {s:'María',fr:'Claro: 6-3-4 / 15 / 20 / 11.',es:'¡Claro! 6-3-4 — quince — veinte — once.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Decir cuántos sois',img:'👥',dialogue:[
      {s:'Anfitrión',fr:'¿Cuántos sois?',es:'¿Cuántos sois?',side:'right'},
      {s:'Pedro',fr:'Somos cuatro: dos adultos y dos niños.',es:'Somos cuatro: dos adultos y dos niños.',side:'left'},
      {s:'Anfitrión',fr:'Muy bien. ¿Tenéis reserva?',es:'Muy bien. ¿Tenéis reserva?',side:'right'},
      {s:'Pedro',fr:'Sí, a nombre de Rodríguez. Para las ocho.',es:'Sí, a nombre de Rodríguez. Para las ocho de la noche.',side:'left'}
     ]}
   ],
   vocab:['¿Qué hora es? = Quelle heure est-il ?','Son las ... = Il est ... heures','¿Cuántos sois? = Vous êtes combien ?','Somos = Nous sommes','El número de móvil = Le numéro de portable','Tenéis = Vous avez (vosotros)'],
   quiz:[
    {q:'¿Cómo se pregunta la hora en español?',opts:['¿Cuál es la hora?','¿Qué hora es?','¿Es la hora?','¿Cuánto tiempo?'],ans:1},
    {q:'¿Qué significa "¿Cuántos sois?"?',opts:['Vous avez quoi ?','Vous êtes combien ?','Ils sont combien ?','Il y en a combien ?'],ans:1},
    {q:'¿Por qué "¿Tenéis reserva?" usa "tenéis" y no "tienen"?',opts:['C\'est une erreur','Car c\'est le pluriel de "tú" (vosotros)','Car c\'est le futur','Car c\'est le passé'],ans:1}
   ]},
  {id:'col2',level:2,emoji:'🎨',name:'Los Colores',sub:'En situación real / En situation réelle',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Color de una prenda',img:'👗',dialogue:[
      {s:'Amiga',fr:'¿Te gusta mi vestido?',es:'¿Te gusta mi vestido?',side:'right'},
      {s:'Luisa',fr:'¡Sí! Es muy bonito. ¿De qué color es?',es:'¡Sí! Es muy bonito, tía. ¿De qué color es?',side:'left'},
      {s:'Amiga',fr:'Es morado con flores rosas.',es:'Es morado con flores rosas.',side:'right'},
      {s:'Luisa',fr:'¡Qué chulo! El rosa te queda muy bien.',es:'¡Qué chulo! El rosa te queda muy bien.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Color de un coche perdido',img:'🚗',dialogue:[
      {s:'Policía',fr:'¿Cómo es su coche?',es:'¿Cómo es su coche?',side:'right'},
      {s:'Marco',fr:'Es un coche rojo, un Seat.',es:'Es un coche rojo, un Seat León.',side:'left'},
      {s:'Policía',fr:'¿Rojo oscuro o rojo claro?',es:'¿Rojo oscuro o rojo claro?',side:'right'},
      {s:'Marco',fr:'Rojo vivo, casi naranja.',es:'Rojo vivo, casi naranja.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Elegir un color de pintura',img:'🖌️',dialogue:[
      {s:'Vendedor',fr:'¿Qué color quiere para el salón?',es:'¿Qué color quiere para el salón?',side:'right'},
      {s:'Ana',fr:'Quisiera algo claro. Quizás blanco roto.',es:'Quisiera algo claro. Quizás blanco roto.',side:'left'},
      {s:'Vendedor',fr:'Aquí tiene el blanco, el beige y el gris claro.',es:'Aquí tiene el blanco, el beige y el gris claro.',side:'right'},
      {s:'Ana',fr:'Me llevo el beige, es más cálido.',es:'Me llevo el beige, es más cálido. ¡Qué guay la muestra!',side:'left'}
     ]}
   ],
   vocab:['El color = La couleur','¿De qué color es? = C\'est quelle couleur ?','Oscuro = Foncé','Claro = Clair','¡Qué chulo! = Comme c\'est cool !','¡Guay! = Super ! / Cool !'],
   quiz:[
    {q:'¿Cómo se pregunta el color de algo en español?',opts:['¿De qué color es?','¿Cuál es el color?','¿Qué color tiene?','Todas estas respuestas'],ans:3},
    {q:'¿Qué significa "Rojo oscuro"?',opts:['Rouge clair','Rouge vif','Rouge foncé','Orange'],ans:2},
    {q:'¿Qué significa "¡Qué chulo!" en España?',opts:['Comme c\'est bizarre !','Comme c\'est cool !','Comme c\'est grand !','Comme c\'est petit !'],ans:1}
   ]},
  {id:'nour2',level:2,emoji:'🍽️',name:'La Comida',sub:'Mercado, restaurante, tapas / Marché, resto, tapas',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'En el mercado',img:'🥦',dialogue:[
      {s:'Vendedor',fr:'Buenos días, ¿qué va a querer?',es:'¡Buenos días! ¿Qué va a querer?',side:'right'},
      {s:'Rosa',fr:'¡Buenos días! Quisiera tomates y zanahorias.',es:'¡Buenos días! Quisiera tomates y zanahorias.',side:'left'},
      {s:'Vendedor',fr:'¿Cuántos kilos?',es:'¿Cuántos kilos?',side:'right'},
      {s:'Rosa',fr:'Un kilo de tomates y medio kilo de zanahorias.',es:'Un kilo de tomates y medio kilo de zanahorias.',side:'left'},
      {s:'Vendedor',fr:'Aquí tiene, son tres euros.',es:'Aquí tiene, son tres euros. ¡Muy fresquitos!',side:'right'}
    ]},
    {label:'Sit. 2',title:'En el restaurante o el bar',img:'🍴',dialogue:[
      {s:'Camarero',fr:'¡Buenas! ¿Qué vais a tomar?',es:'¡Buenas! ¿Qué vais a tomar?',side:'right'},
      {s:'Carlos',fr:'Para mí, el menú del día. ¿Qué hay de primero?',es:'Para mí, el menú del día. ¿Qué hay de primero?',side:'left'},
      {s:'Camarero',fr:'Hay sopa o ensalada.',es:'Hay sopa o ensalada.',side:'right'},
      {s:'Carlos',fr:'La ensalada, y de segundo el pollo con patatas.',es:'La ensalada, y de segundo el pollo con patatas.',side:'left'},
      {s:'Camarero',fr:'¿Y para beber?',es:'¿Y para beber?',side:'right'},
      {s:'Carlos',fr:'Una caña, por favor.',es:'Una caña, por favor.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Pedir tapas',img:'🫒',dialogue:[
      {s:'Camarero',fr:'¿Os pongo algo para picar?',es:'¿Os pongo algo para picar?',side:'right'},
      {s:'Ana',fr:'Sí, ponednos una ración de patatas bravas y una de jamón.',es:'Sí, ponednos una ración de patatas bravas y una de jamón.',side:'left'},
      {s:'Camarero',fr:'¿Ibérico o serrano?',es:'¿Ibérico o serrano?',side:'right'},
      {s:'Ana',fr:'Ibérico, por favor. ¡Que aproveche!',es:'Ibérico, por favor. ¡Es que mola más!',side:'left'}
     ]}
   ],
   vocab:['Quisiera = Je voudrais','¿Qué vais a tomar? = Qu\'est-ce que vous prenez ? (vosotros)','El menú del día = Le menu du jour','Una caña = Un demi (bière)','Las tapas = Les tapas','Las patatas bravas = Pommes de terre épicées','¿Os pongo algo? = Je vous mets quelque chose ? (vosotros)'],
   quiz:[
    {q:'¿Qué significa "Quisiera pollo"?',opts:['J\'ai du poulet','Je voudrais du poulet','Je vends du poulet','J\'aime le poulet'],ans:1},
    {q:'¿Qué es "Una caña" en España?',opts:['Un verre de vin','Un café','Un demi (bière pression)','Un jus d\'orange'],ans:2},
    {q:'¿Qué significa "¿Qué vais a tomar?"?',opts:['Avez-vous fini ?','Qu\'est-ce que vous prenez ? (vosotros)','Que voulez-vous ?','Êtes-vous prêts ?'],ans:1}
   ]},
  {id:'bois2',level:2,emoji:'🥤',name:'Las Bebidas',sub:'Bar, terraza, supermercado / Bar, terrasse, supermarché',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Pedir en el bar',img:'☕',dialogue:[
      {s:'Camarero',fr:'¡Buenas! ¿Qué te pongo?',es:'¡Buenas! ¿Qué te pongo?',side:'right'},
      {s:'María',fr:'Un café con leche, por favor.',es:'Un café con leche, por favor.',side:'left'},
      {s:'Camarero',fr:'¿Largo o corto?',es:'¿Largo o corto?',side:'right'},
      {s:'María',fr:'Largo, gracias.',es:'Largo, gracias.',side:'left'},
      {s:'Camarero',fr:'¿Algo más? ¿Una tostada?',es:'¿Algo más? ¿Una tostada?',side:'right'},
      {s:'María',fr:'¡Venga, una tostada con tomate!',es:'¡Venga, una tostada con tomate!',side:'right'}
    ]},
    {label:'Sit. 2',title:'Ofrecer bebida en casa',img:'🍹',dialogue:[
      {s:'Anfitrión',fr:'¿Qué queréis beber?',es:'¿Qué queréis beber?',side:'right'},
      {s:'Invitado',fr:'Agua, por favor.',es:'Agua, por favor.',side:'left'},
      {s:'Anfitrión',fr:'¿Con gas o sin gas?',es:'¿Con gas o sin gas?',side:'right'},
      {s:'Invitado',fr:'Sin gas, gracias. ¿Y tenéis zumo?',es:'Sin gas, gracias. ¿Y tenéis zumo?',side:'left'},
      {s:'Anfitrión',fr:'¡Claro! Tengo zumo de naranja recién hecho.',es:'¡Claro que sí! Tengo zumo de naranja recién exprimido.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Comprar agua en el súper',img:'🛍️',dialogue:[
      {s:'Rosa',fr:'Perdona, ¿dónde está el agua?',es:'Perdona, ¿dónde está el agua embotellada?',side:'left'},
      {s:'Empleado',fr:'En el pasillo tres, al fondo a la izquierda.',es:'En el pasillo tres, al fondo a la izquierda.',side:'right'},
      {s:'Rosa',fr:'¿Y tenéis agua con gas?',es:'¿Y tenéis agua con gas?',side:'left'},
      {s:'Empleado',fr:'Sí, está justo al lado del agua sin gas.',es:'Sí, está justo al lado del agua sin gas.',side:'right'}
     ]}
   ],
   vocab:['¿Qué te pongo? = Qu\'est-ce que je te sers ?','¡Venga! = Allez-y ! / D\'accord !','El zumo = Le jus','Agua con gas o sin gas = Eau gazeuse / plate','El pasillo = Le rayon / l\'allée','Recién exprimido = Fraîchement pressé','¿Queréis? = Vous voulez ? (vosotros)'],
   quiz:[
    {q:'¿Qué significa "¿Qué te pongo?" en un bar español?',opts:['Qu\'est-ce que tu poses ?','Qu\'est-ce que je te sers ?','Qu\'est-ce que tu veux me dire ?','Qu\'est-ce que tu cherches ?'],ans:1},
    {q:'¿Cómo se dice "Eau gazeuse" en español?',opts:['Agua natural','Agua caliente','Agua con gas','Agua de manantial'],ans:2},
    {q:'¿Qué significa "¡Venga, una tostada!"?',opts:['Non, merci !','Allez, une tartine grillée !','Je veux une pizza !','C\'est trop cher !'],ans:1}
   ]},
  {id:'fam2',level:2,emoji:'👨‍👩‍👧',name:'La Familia',sub:'Fotos, hermanos, hijos / Photos, frères, enfants',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Presentar la familia en una foto',img:'📷',dialogue:[
      {s:'Ana',fr:'¿Quién es esa persona en la foto?',es:'¿Quién es esa persona en la foto?',side:'right'},
      {s:'Luisa',fr:'Ese es mi marido Carlos, y estos son mis hijos.',es:'Ese es mi marido Carlos, y estos son mis hijos.',side:'left'},
      {s:'Ana',fr:'¡Son adorables! ¿Cuántos hijos tenéis?',es:'¡Son adorables! ¿Cuántos hijos tenéis?',side:'right'},
      {s:'Luisa',fr:'Tres: dos chicos y una chica.',es:'Tres: dos chicos y una chica.',side:'left'},
      {s:'Ana',fr:'¿Y vuestros padres, están en España?',es:'¿Y vuestros padres, están en España?',side:'right'},
      {s:'Luisa',fr:'Sí, mi madre y mi padre viven en Sevilla.',es:'Sí, mi madre y mi padre viven en Sevilla.',side:'left'}
     ]},
    {label:'Sit. 2',title:'Hermanos y hermanas',img:'👫',dialogue:[
      {s:'Vecina',fr:'¿Tienes hermanos?',es:'¿Tienes hermanos?',side:'right'},
      {s:'Pedro',fr:'Sí, tengo dos hermanos y una hermana.',es:'Sí, tengo dos hermanos y una hermana.',side:'left'},
      {s:'Vecina',fr:'¿Eres el mayor o el pequeño?',es:'¿Eres el mayor o el pequeño?',side:'right'},
      {s:'Pedro',fr:'Soy el pequeño. Mi hermano mayor tiene treinta y cinco años.',es:'Soy el pequeño. Mi hermano mayor tiene treinta y cinco años.',side:'left'}
     ]},
    {label:'Sit. 3',title:'Preguntar por los hijos',img:'🧒',dialogue:[
      {s:'Compañero',fr:'¿Cómo están tus hijos?',es:'¿Cómo están tus hijos?',side:'right'},
      {s:'María',fr:'¡Muy bien! Mi hija empieza el cole este año.',es:'¡Muy bien, gracias! Mi hija empieza el cole este año.',side:'left'},
      {s:'Compañero',fr:'¿Cuántos años tiene?',es:'¿Cuántos años tiene?',side:'right'},
      {s:'María',fr:'Tiene seis años. Y mi hijo tiene diez.',es:'Tiene seis años. Y mi hijo tiene diez.',side:'left'}
     ]}
   ],
   vocab:['La familia = La famille','Mis hijos = Mes enfants','Mi marido = Mon mari','Mi madre o mi mamá = Ma mère','Mi padre / mi papá = Mon père','El mayor = L\'aîné','El pequeño o el menor = Le plus jeune','Vuestros = Vos (vosotros)'],
   quiz:[
    {q:'¿Qué significa "Mis hijos"?',opts:['Mes parents','Mes frères','Mes enfants','Mes grands-parents'],ans:2},
    {q:'¿Cómo se dice "L\'aîné" en español?',opts:['El menor','El grande','El mayor','El viejo'],ans:2},
    {q:'¿Por qué se dice "¿Cuántos hijos tenéis?" y no "tienen"?',opts:['C\'est une erreur','Car on parle à vosotros (pluriel de tú)','Car c\'est le futur','Car c\'est formel'],ans:1}
   ]},
  {id:'emot2',level:2,emoji:'😄',name:'Las Emociones',sub:'Tristeza, cansancio, alegría o Tristesse, fatigue, joie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Por qué un amigo está triste',img:'😢',dialogue:[
      {s:'Ana',fr:'Tío, no tienes buena cara. ¿Estás bien?',es:'Tío, no tienes buena cara. ¿Estás bien?',side:'right'},
      {s:'Carlos',fr:'No, estoy triste. Tengo noticias de mi familia.',es:'No, estoy triste. Tengo noticias de mi familia.',side:'left'},
      {s:'Ana',fr:'¿Qué ha pasado?',es:'¿Qué ha pasado?',side:'right'},
      {s:'Carlos',fr:'Mi abuela está enferma.',es:'Mi abuela está enferma.',side:'left'},
      {s:'Ana',fr:'Lo siento mucho. Aquí estoy si me necesitas.',es:'Lo siento mucho. Aquí estoy si me necesitas.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Expresar cansancio',img:'😴',dialogue:[
      {s:'Pareja',fr:'¡Llegas tarde! ¿Estás cansado?',es:'¡Llegas tarde! ¿Estás cansado?',side:'right'},
      {s:'Pedro',fr:'Sí, estoy agotado. Ha sido un día muy largo.',es:'Sí, estoy agotado. Ha sido un día muy largo.',side:'left'},
      {s:'Pareja',fr:'¿Quieres comer algo?',es:'¿Quieres cenar algo?',side:'right'},
      {s:'Pedro',fr:'Sí, también tengo hambre. Estoy cansado y estresado.',es:'Sí, también tengo hambre. Estoy hecho polvo.',side:'left'}
     ]},
    {label:'Sit. 3',title:'Alegría por una buena noticia',img:'🎉',dialogue:[
      {s:'Luisa',fr:'¡Tengo una noticia genial!',es:'¡Tengo una noticia genial!',side:'left'},
      {s:'Amiga',fr:'¡Dime! ¡Se te ve muy contenta!',es:'¡Dime! ¡Se te ve muy contenta!',side:'right'},
      {s:'Luisa',fr:'¡He encontrado trabajo! ¡Estoy felicísima!',es:'¡He encontrado trabajo! ¡Estoy felicísima!',side:'left'},
      {s:'Amiga',fr:'¡Qué guay! ¡Me alegro muchísimo por ti!',es:'¡Qué guay! ¡Me alegro muchísimo por ti!',side:'right'}
     ]}
   ],
   vocab:['Triste = Triste','Cansado/a = Fatigué(e)','Alegre / contento/a = Joyeux/se','Lo siento = Je suis désolé(e)','Agotado/a = Épuisé(e)','Estoy hecho polvo = Je suis à plat (argot)','¡Qué guay! = Super ! / Génial !','¡Me alegro! = Je suis content(e) pour toi !'],
   quiz:[
    {q:'¿Qué significa "Estoy agotado"?',opts:['Je suis triste','Je suis malade','Je suis épuisé','Je suis stressé'],ans:2},
    {q:'¿Qué significa "Estoy hecho polvo" en argot español?',opts:['Je suis en colère','Je suis à plat / épuisé','Je suis malade','Je suis stressé'],ans:1},
    {q:'¿Cómo se dice "Je suis désolé" en español?',opts:['Estoy contento','Lo siento','Estoy cansado','Estoy enfermo'],ans:1}
   ]},
  {id:'log2',level:2,emoji:'🏠',name:'La Vivienda',sub:'Piso, objetos, tareas / Appartement, objets, ménage',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Visitar un piso',img:'🏢',dialogue:[
      {s:'Propietario',fr:'Este es el piso. Tiene salón-cocina y baño.',es:'Este es el piso. Tiene salón-cocina y baño.',side:'right'},
      {s:'María',fr:'¡Qué luminoso! ¿El aseo tiene váter aparte?',es:'¡Qué luminoso! ¿El aseo tiene váter aparte?',side:'left'},
      {s:'Propietario',fr:'Sí, el váter está al lado del cuarto de baño.',es:'Sí, el váter está al lado del cuarto de baño.',side:'right'},
      {s:'María',fr:'¿Cuánto es el alquiler mensual?',es:'¿Cuánto es el alquiler mensual?',side:'left'},
      {s:'Propietario',fr:'Ochocientos euros, gastos incluidos.',es:'Ochocientos euros, gastos incluidos.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Buscar un objeto perdido',img:'🔍',dialogue:[
      {s:'Pedro',fr:'¿Has visto mis llaves?',es:'¿Has visto mis llaves?',side:'right'},
      {s:'Ana',fr:'No... mira en el salón.',es:'No... mira en el salón.',side:'left'},
      {s:'Pedro',fr:'No, no están ahí.',es:'No, no están ahí.',side:'right'},
      {s:'Ana',fr:'Prueba en la cocina, o quizás en el cuarto.',es:'Prueba en la cocina, o quizás en el cuarto.',side:'left'},
      {s:'Pedro',fr:'¡Estaban encima de la mesa de la cocina!',es:'¡Estaban encima de la mesa de la cocina! ¡Anda!',side:'right'}
     ]},
    {label:'Sit. 3',title:'Las tareas del hogar',img:'🧹',dialogue:[
      {s:'Luisa',fr:'Te toca fregar los platos.',es:'Te toca fregar los platos.',side:'left'},
      {s:'Carlos',fr:'Vale. ¿Y tú qué haces?',es:'Vale. ¿Y tú qué haces?',side:'right'},
      {s:'Luisa',fr:'Paso el aspirador en el salón.',es:'Paso el aspirador en el salón.',side:'left'},
      {s:'Carlos',fr:'¿Y la habitación?',es:'¿Y la habitación?',side:'right'},
      {s:'Luisa',fr:'Hago la cama después.',es:'Hago la cama después.',side:'left'}
     ]}
   ],
   vocab:['El alquiler = Le loyer','El salón = Le salon','El cuarto de baño = La salle de bain','El váter o el aseo = Les toilettes','La cocina = La cuisine','La habitación = La chambre','Fregar los platos = Faire la vaisselle','¡Anda! = Oh là là ! / Tiens ! (surprise)'],
   quiz:[
    {q:'¿Qué significa "El alquiler"?',opts:['L\'appartement','Le loyer','La chambre','Le contrat'],ans:1},
    {q:'¿Cómo se dice "Faire la vaisselle" en España?',opts:['Tender la cama','Pasar el aspirador','Fregar los platos','Limpiar'],ans:2},
    {q:'¿Qué significa "¡Anda!" en España?',opts:['Marche !','C\'est loin !','Oh là là ! / Tiens ! (surprise)','Dépêche-toi !'],ans:2}
   ]},
  {id:'veth2',level:2,emoji:'👗',name:'La Ropa',sub:'Por la mañana, talla, ropa perdida / Matin, taille, vêtement perdu',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Vestirse por la mañana',img:'🌅',dialogue:[
      {s:'Niño',fr:'Mamá, ¿qué me pongo hoy?',es:'Mamá, ¿qué me pongo hoy?',side:'right'},
      {s:'Mamá',fr:'Hace frío, ponte el abrigo y la bufanda.',es:'Hace frío, ponte el abrigo y la bufanda.',side:'left'},
      {s:'Niño',fr:'¿Y mis zapatillas rojas?',es:'¿Y mis zapatillas rojas?',side:'right'},
      {s:'Mamá',fr:'Sí, ¡y no te olvides el gorro!',es:'Sí, ¡y no te olvides el gorro!',side:'left'}
    ]},
    {label:'Sit. 2',title:'Comprar en la talla correcta',img:'🏪',dialogue:[
      {s:'Vendedor',fr:'¡Buenas! ¿En qué te puedo ayudar?',es:'¡Buenas! ¿En qué te puedo ayudar?',side:'right'},
      {s:'Luisa',fr:'Busco ese pantalón en la talla cuarenta.',es:'Busco ese pantalón en la talla cuarenta.',side:'left'},
      {s:'Vendedor',fr:'Un momento... aquí tienes, talla cuarenta.',es:'Un momento... aquí tienes, talla cuarenta.',side:'right'},
      {s:'Luisa',fr:'Gracias, ¿me lo puedo probar?',es:'Gracias, ¿me lo puedo probar?',side:'left'},
      {s:'Vendedor',fr:'Claro, el probador está allí.',es:'Claro, el probador está allí.',side:'right'}
     ]},
    {label:'Sit. 3',title:'Buscar una chaqueta perdida',img:'🔍',dialogue:[
      {s:'Carlos',fr:'Oye, me he dejado la chaqueta.',es:'Oye, me he dejado la chaqueta.',side:'left'},
      {s:'Camarero',fr:'¿De qué color es?',es:'¿De qué color es?',side:'right'},
      {s:'Carlos',fr:'Es negra, con cremallera.',es:'Es negra, con cremallera.',side:'left'},
      {s:'Camarero',fr:'Espere... aquí hay una chaqueta negra.',es:'Espere... aquí hay una chaqueta negra.',side:'right'},
      {s:'Carlos',fr:'¡Sí, esa es la mía! ¡Muchas gracias!',es:'¡Sí, esa es la mía! ¡Muchas gracias, tío!',side:'left'}
     ]}
   ],
   vocab:['La chaqueta = La veste','El abrigo = Le manteau','La talla = La taille','Las zapatillas = Les baskets','El probador = La cabine d\'essayage','Hace frío = Il fait froid','La cremallera = La fermeture éclair','Me he dejado = J\'ai oublié (passé composé)'],
   quiz:[
    {q:'¿Qué significa "La talla" (para una prenda)?',opts:['La couleur','Le prix','La taille','Le modèle'],ans:2},
    {q:'¿Cómo se dice "La cabine d\'essayage" en español?',opts:['El almacén','El probador','El mostrador','El pasillo'],ans:1},
    {q:'¿Qué significa "Me he dejado la chaqueta"?',opts:['J\'ai perdu la veste','J\'ai oublié la veste','J\'ai trouvé la veste','J\'ai lavé la veste'],ans:1}
   ]},
  {id:'corps2',level:2,emoji:'🧍',name:'El Cuerpo',sub:'Médico, deporte, físico / Médecin, sport, physique',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Explicar al médico dónde duele',img:'🏥',dialogue:[
      {s:'Médico',fr:'¿Qué le pasa?',es:'¿Qué le pasa?',side:'right'},
      {s:'Pedro',fr:'Me duele la espalda y la cabeza.',es:'Me duele la espalda y la cabeza.',side:'left'},
      {s:'Médico',fr:'¿Desde cuándo?',es:'¿Desde cuándo?',side:'right'},
      {s:'Pedro',fr:'Desde hace dos días. También me duele la barriga.',es:'Desde hace dos días. También me duele la barriga.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Lesión durante un deporte',img:'⚽',dialogue:[
      {s:'Entrenador',fr:'¿Estás bien? ¡Cojeas!',es:'¿Estás bien? ¡Cojeas!',side:'right'},
      {s:'Marco',fr:'Me duele la pierna. Me he hecho daño.',es:'Me duele la pierna. Me he hecho daño.',side:'left'},
      {s:'Entrenador',fr:'¿Es la rodilla o el tobillo?',es:'¿Es la rodilla o el tobillo?',side:'right'},
      {s:'Marco',fr:'El tobillo. No puedo apoyar el pie.',es:'El tobillo. No puedo apoyar el pie.',side:'left'}
     ]},
    {label:'Sit. 3',title:'Describir el físico de alguien',img:'👤',dialogue:[
      {s:'Policía',fr:'Descríbame a la persona.',es:'Descríbame a la persona.',side:'right'},
      {s:'Ana',fr:'Es un hombre alto, con los ojos azules.',es:'Es un hombre alto, con los ojos azules.',side:'left'},
      {s:'Policía',fr:'¿De qué color tiene el pelo?',es:'¿De qué color tiene el pelo?',side:'right'},
      {s:'Ana',fr:'Tiene el pelo negro, corto. Y tiene barba.',es:'Tiene el pelo negro, corto. Y lleva barba.',side:'left'}
     ]}
   ],
   vocab:['Me duele... = J\'ai mal à...','La cabeza = La tête','La espalda = Le dos','La pierna = La jambe','El pie = Le pied','¿Desde cuándo? = Depuis combien de temps ?','Me he hecho daño = Je me suis blessé'],
   quiz:[
    {q:'¿Cómo se dice "J\'ai mal à la tête" en español?',opts:['Me duele la pierna','Me duele la cabeza','Me duele la espalda','Me duele la barriga'],ans:1},
    {q:'¿Qué significa "Me he hecho daño"?',opts:['Je suis fatigué','J\'ai de la fièvre','Je me suis blessé','Je suis malade'],ans:2},
    {q:'¿Qué significa "¿Desde cuándo?"?',opts:['Combien de temps reste-t-il ?','Depuis combien de temps ?','Pendant combien de temps ?','À quelle heure ?'],ans:1}
   ]},
  {id:'anim2',level:2,emoji:'🐘',name:'Los Animales',sub:'Mascota, campo, toro / Animal de compagnie, campagne, taureau',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Hablar de tu mascota',img:'🐶',dialogue:[
      {s:'Vecino',fr:'¿Ese es tu perro? ¡Qué mono!',es:'¿Ese es tu perro? ¡Qué mono!',side:'right'},
      {s:'Luisa',fr:'¡Gracias! Se llama Manchas. Es un labrador.',es:'¡Gracias! Se llama Manchas. Es un labrador.',side:'left'},
      {s:'Vecino',fr:'¿Cuántos años tiene?',es:'¿Cuántos años tiene?',side:'right'},
      {s:'Luisa',fr:'Tiene tres años. Es muy bueno.',es:'Tiene tres años. Es muy bueno y dócil.',side:'left'},
      {s:'Vecino',fr:'Yo tengo un gato. ¡No se llevan muy bien!',es:'Yo tengo un gato. ¡No se llevan muy bien!',side:'right'}
    ]},
    {label:'Sit. 2',title:'Cruzarse con un perro en la calle',img:'🌳',dialogue:[
      {s:'Paseante',fr:'¡Ojo! ¿Muerde?',es:'¡Ojo! ¿Muerde?',side:'right'},
      {s:'Carlos',fr:'No, no se preocupe, es muy bueno.',es:'No, no se preocupe, es muy bueno.',side:'left'},
      {s:'Paseante',fr:'¿Lo puedo acariciar?',es:'¿Lo puedo acariciar?',side:'right'},
      {s:'Carlos',fr:'Sí, claro. ¡Le encanta!',es:'Sí, claro. ¡Le encanta!',side:'left'}
     ]},
    {label:'Sit. 3',title:'Visita a la finca o al campo',img:'🐄',dialogue:[
      {s:'Granjero',fr:'¡Bienvenidos! Allí están las vacas.',es:'¡Bienvenidos! Allí están las vacas.',side:'right'},
      {s:'Niño',fr:'¡Oh! ¿Y las gallinas dónde están?',es:'¡Oh! ¿Y las gallinas dónde están?',side:'left'},
      {s:'Granjero',fr:'Las gallinas están en el gallinero. ¡Y ahí está el toro!',es:'Las gallinas están en el gallinero. ¡Y ahí está el toro!',side:'right'},
      {s:'Niño',fr:'¡Qué grande! ¿Puedo dar de comer a los caballos?',es:'¡Qué grande! ¿Puedo dar de comer a los caballos?',side:'left'},
      {s:'Granjero',fr:'Sí, con cuidado.',es:'Sí, con cuidado. ¡Que no te muerdan los dedos!',side:'right'}
     ]}
   ],
   vocab:['El perro = Le chien','El gato = Le chat','La vaca = La vache','La gallina = La poule','El toro = Le taureau','Es muy bueno o dócil = Il est gentil / docile','¡Qué mono! = Comme c\'est mignon ! (argot)'],
   quiz:[
    {q:'¿Qué significa "¡Qué mono!" en España?',opts:['Quel singe !','Comme c\'est mignon !','Comme c\'est bizarre !','Comme c\'est grand !'],ans:1},
    {q:'¿Cuál es el animal símbolo de las fiestas en España?',opts:['El caballo','El gato','El toro','El águila'],ans:2},
    {q:'¿Qué significa "¿Lo puedo acariciar?"?',opts:['Puis-je l\'emmener ?','Puis-je le caresser ?','Puis-je le voir ?','Puis-je le garder ?'],ans:1}
   ]},
  {id:'verb2',level:2,emoji:'📝',name:'Los Verbos',sub:'Rutina, gustos, vosotros / Routine, goûts, vosotros',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Rutina diaria',img:'⏰',dialogue:[
      {s:'Compañero',fr:'¿A qué hora te levantas?',es:'¿A qué hora te levantas?',side:'right'},
      {s:'Pedro',fr:'Me levanto a las siete. Desayuno y me voy al curro.',es:'Me levanto a las siete. Desayuno y me voy al curro.',side:'left'},
      {s:'Compañero',fr:'¿Y por la noche qué haces?',es:'¿Y por la noche qué haces?',side:'right'},
      {s:'Pedro',fr:'Ceno, veo un poco la tele y me acuesto pronto.',es:'Ceno, veo un poco la tele y me acuesto pronto.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Expresar gustos',img:'❤️',dialogue:[
      {s:'Amiga',fr:'¿Os gusta la comida francesa?',es:'¿Os gusta la comida francesa?',side:'right'},
      {s:'Luisa',fr:'¡Sí, nos encanta! Comemos queso con mucha frecuencia.',es:'¡Sí, nos encanta! Comemos queso con mucha frecuencia.',side:'left'},
      {s:'Amiga',fr:'¿Y os gusta el vino?',es:'¿Y os gusta el vino?',side:'right'},
      {s:'Luisa',fr:'Bebemos algo de vino, pero preferimos la cerveza.',es:'Bebemos algo de vino, pero preferimos la cerveza.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Acciones del momento',img:'🏃',dialogue:[
      {s:'Jefe',fr:'¿Qué estás haciendo ahora?',es:'¿Qué estás haciendo ahora?',side:'right'},
      {s:'Carlos',fr:'Estoy hablando por teléfono. Tengo un cliente.',es:'Estoy hablando por teléfono. Tengo un cliente.',side:'left'},
      {s:'Jefe',fr:'¿Vais a la reunión al mediodía?',es:'¿Vais a la reunión al mediodía?',side:'right'},
      {s:'Carlos',fr:'Sí, vamos a la reunión. Estamos listos.',es:'Sí, vamos a la reunión. Estamos listos.',side:'left'}
     ]}
   ],
   vocab:['Voy = Je vais','Como = Je mange','Hablo = Je parle','Me gusta = J\'aime','Bebo = Je bois','Vivo = J\'habite','Soy o estoy = Je suis','Tengo = J\'ai','El curro = Le boulot (argot)','Vais / vamos = Vous allez / nous allons','Os gusta = Vous aimez (vosotros)'],
   quiz:[
    {q:'¿Qué significa "Voy al curro"?',opts:['Je cherche du travail','Je rentre du travail','Je vais au boulot','Je quitte le travail'],ans:2},
    {q:'¿Por qué se dice "¿Vais a la reunión?" y no "¿Vais a la reunión?"?',opts:['C\'est une erreur','Car c\'est le pluriel de tú (vosotros)','Car c\'est le futur','Car c\'est une question'],ans:1},
    {q:'¿Qué significa "Os gusta" en España?',opts:['Tu aimes','Il aime','Vous aimez (vosotros)','J\'aime'],ans:2}
   ]},
  {id:'pays2',level:2,emoji:'🌍',name:'Los Países',sub:'Nacionalidad, vacaciones, sueños / Nationalité, vacances, rêves',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Preguntar la nacionalidad',img:'🗺️',dialogue:[
      {s:'Vecina',fr:'¿De dónde sois?',es:'¿De dónde sois?',side:'right'},
      {s:'Ana',fr:'Somos de Francia. ¿Y vosotros?',es:'Somos de Francia. ¿Y vosotros?',side:'left'},
      {s:'Vecina',fr:'Somos españoles, de Valencia.',es:'Somos españoles, de Valencia.',side:'right'},
      {s:'Ana',fr:'¡Qué guay! ¿Y conocéis el sur de Francia?',es:'¡Qué guay! ¿Y conocéis el sur de Francia?',side:'left'},
      {s:'Vecina',fr:'¡Sí! Fuimos a Biarritz el año pasado.',es:'¡Sí! Fuimos a Biarritz el año pasado.',side:'right'}
     ]},
    {label:'Sit. 2',title:'Hablar de las últimas vacaciones',img:'🏖️',dialogue:[
      {s:'Compañero',fr:'¿Adónde fuisteis de vacaciones?',es:'¿Adónde fuisteis de vacaciones?',side:'right'},
      {s:'Pedro',fr:'Fuimos a Portugal, a Lisboa.',es:'Fuimos a Portugal, a Lisboa.',side:'left'},
      {s:'Compañero',fr:'¿Qué tal estuvo?',es:'¿Qué tal estuvo?',side:'right'},
      {s:'Pedro',fr:'¡Genial! La comida estaba buenísima.',es:'¡Genial! La comida estaba buenísima.',side:'left'}
     ]},
    {label:'Sit. 3',title:'Decir adónde te gustaría viajar',img:'✈️',dialogue:[
      {s:'Amiga',fr:'Si pudierais viajar, ¿adónde iríais?',es:'Si pudierais viajar, ¿adónde iríais?',side:'right'},
      {s:'Luisa',fr:'Nos iríamos a Japón. Nos encanta la cultura.',es:'Nos iríamos a Japón. Nos encanta la cultura.',side:'left'},
      {s:'Amiga',fr:'Yo sueño con ir a la India.',es:'Yo sueño con ir a la India.',side:'right'},
      {s:'Luisa',fr:'¡Qué chulo! Ese país es precioso.',es:'¡Qué chulo! Ese país es precioso. También mola Italia.',side:'left'}
     ]}
   ],
   vocab:['¿De dónde sois? = D\'où êtes-vous ? (vosotros)','Venimos de = Nous venons de','Las vacaciones = Les vacances','Estuvo o fue = C\'était','Nos iríamos = Nous irions','Sueño con = Je rêve de','Fuisteis = Vous êtes allés (vosotros)','Conocéis = Vous connaissez (vosotros)'],
   quiz:[
    {q:'¿Por qué se dice "¿De dónde sois?" y no "¿De dónde son?"?',opts:['C\'est une erreur','Car c\'est vosotros (pluriel de tú)','Car c\'est le futur','Car c\'est formel'],ans:1},
    {q:'¿Qué significa "Nos iríamos a Japón"?',opts:['Nous sommes allés au Japon','Nous vivons au Japon','Nous irions au Japon','Nous voulons aller au Japon'],ans:2},
    {q:'¿Qué significa "Sueño con viajar"?',opts:['J\'ai voyagé hier','Je rêve de voyager','Je veux réserver','J\'ai déjà voyagé'],ans:1}
   ]},
{id:'plan2',level:2,emoji:'🌿',name:'Las Plantas',sub:'Floristería, casa, parque / Fleuriste, maison, parc',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Comprar flores en la floristería',img:'💐',dialogue:[
      {s:'Fleuriste',fr:'Bonjour, qu\'est-ce que je vous sers ?',es:'Buenos días, ¿en qué puedo ayudarle?',side:'right'},
      {s:'María',fr:'Je voudrais un bouquet de roses rouges.',es:'Quisiera un ramo de rosas rojas, por favor.',side:'left'},
      {s:'Fleuriste',fr:'Pour une occasion spéciale ?',es:'¿Es para una ocasión especial?',side:'right'},
      {s:'María',fr:'Oui, pour l\'anniversaire de ma mère.',es:'Sí, para el cumpleaños de mi madre.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Regar las plantas de la casa',img:'🪴',dialogue:[
      {s:'Voisine',fr:'Tu peux arroser mes plantes cette semaine ?',es:'¿Puedes regar mis plantas esta semana?',side:'right'},
      {s:'Luisa',fr:'Bien sûr ! Combien de fois par jour ?',es:'¡Claro! ¿Cuántas veces al día?',side:'left'},
      {s:'Voisine',fr:'Une fois par jour, le matin.',es:'Una vez al día, por la mañana.',side:'right'},
      {s:'Luisa',fr:'D\'accord, je mets la plante près de la fenêtre.',es:'De acuerdo, pongo la planta cerca de la ventana.',side:'left'}
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
    {q:'¿Qué significa "Une fois par jour"?',opts:['Deux fois par jour','Une fois par semaine','Une fois par jour','Chaque heure'],ans:2}
   ]},
  {id:'salut2',level:2,emoji:'👋',name:'Los Saludos',sub:'Tienda, vecino, despedida / Magasin, voisin, départ',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Entrar a una tienda',img:'🏪',dialogue:[
      {s:'Cliente',fr:'¡Buenos días!',es:'¡Buenos días!',side:'left'},
      {s:'Vendedor',fr:'¡Hola! ¿En qué os puedo ayudar?',es:'¡Hola! ¿En qué os puedo ayudar?',side:'right'},
      {s:'Cliente',fr:'No, gracias, solo estamos mirando.',es:'No, gracias, solo estamos mirando.',side:'left'},
      {s:'Vendedor',fr:'Claro. No dudéis en pedirme si necesitáis algo.',es:'Claro. No dudéis en pedirme si necesitáis algo.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Cruzarse con el vecino en el ascensor',img:'🛗',dialogue:[
      {s:'Vecino',fr:'¡Buenas noches! ¡Llegáis tarde!',es:'¡Buenas noches! ¡Llegáis tarde!',side:'right'},
      {s:'Luisa',fr:'¡Buenas! Sí, estábamos en el trabajo.',es:'¡Buenas! Sí, estábamos trabajando hasta tarde.',side:'left'},
      {s:'Vecino',fr:'¡Que descanséis!',es:'¡Que descanséis!',side:'right'},
      {s:'Luisa',fr:'¡Gracias, igualmente! ¡Hasta luego!',es:'¡Gracias, igualmente! ¡Hasta luego!',side:'left'}
    ]},
    {label:'Sit. 3',title:'Despedirse antes de irse',img:'🚪',dialogue:[
      {s:'Ana',fr:'Bueno, me tengo que ir ya.',es:'Bueno, me tengo que ir ya.',side:'left'},
      {s:'Pedro',fr:'¿Ya? ¡Que te vaya bien! ¡Con cuidado!',es:'¿Ya? ¡Que te vaya bien! ¡Con cuidado!',side:'right'},
      {s:'Ana',fr:'¡Gracias! ¡Hasta pronto! ¡Saludos a tu familia!',es:'¡Gracias! ¡Hasta pronto! ¡Saludos a tu familia!',side:'left'},
      {s:'Pedro',fr:'¡Buenas noches! ¡Cuídate!',es:'¡Buenas noches! ¡Cuídate mucho!',side:'right'}
     ]}
   ],
   vocab:['Buenos días = Bonjour','Buenas tardes o noches = Bonsoir','Adiós o hasta luego = Au revoir','Hasta pronto = À bientôt','¡Que descanséis! = Bonne nuit / Bonne soirée (vosotros)','¡Venga! o ¡Vale! = Allez ! / D\'accord !','No dudéis = N\'hésitez pas (vosotros)'],
   quiz:[
    {q:'¿Qué significa "Hasta pronto"?',opts:['Adieu','À bientôt','Bonjour','Bonne nuit'],ans:1},
    {q:'¿Por qué se dice "¡Que descanséis!" y no "¡Que descansen!"?',opts:['C\'est une erreur','Car c\'est vosotros (pluriel de tú)','Car c\'est un souhait','Car c\'est le futur'],ans:1},
    {q:'¿Qué significa "¡Que te vaya bien!"?',opts:['Bon repos','Bon appétit','Bonne continuation','Bon travail'],ans:2}
   ]},
  {id:'met2',level:2,emoji:'💼',name:'Las Profesiones',sub:'Preguntar, explicar, soñar / Demander, expliquer, rêver',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Preguntar la profesión',img:'🤝',dialogue:[
      {s:'Vecina',fr:'¿A qué te dedicas?',es:'¿A qué te dedicas?',side:'right'},
      {s:'Carlos',fr:'Soy cocinero en un restaurante.',es:'Soy cocinero en un restaurante.',side:'left'},
      {s:'Vecina',fr:'¿Y trabajáis los fines de semana?',es:'¿Y trabajáis los fines de semana?',side:'right'},
      {s:'Carlos',fr:'Sí, con frecuencia. Es mi oficio desde hace diez años.',es:'Sí, con frecuencia. Es mi oficio desde hace diez años.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Hablar del trabajo actual',img:'💻',dialogue:[
      {s:'Amiga',fr:'¿Dónde trabajas ahora?',es:'¿Dónde trabajas ahora?',side:'right'},
      {s:'María',fr:'Soy enfermera en el hospital.',es:'Soy enfermera en el hospital La Paz.',side:'left'},
      {s:'Amiga',fr:'¿Queda lejos de tu casa?',es:'¿Queda lejos de tu piso?',side:'right'},
      {s:'María',fr:'No, veinte minutos en metro. Me encanta mi trabajo.',es:'No, veinte minutos en metro. ¡Me mola mucho mi trabajo!',side:'left'}
    ]},
    {label:'Sit. 3',title:'El trabajo de tus sueños',img:'🌟',dialogue:[
      {s:'Profe',fr:'¿Cuál es el trabajo de vuestros sueños?',es:'¿Cuál es el trabajo de vuestros sueños?',side:'right'},
      {s:'Estudiante',fr:'Quisiera ser médico. Me gusta ayudar a la gente.',es:'Quisiera ser médico. Me gusta ayudar a la gente.',side:'left'},
      {s:'Profe',fr:'¡Qué bonito! ¿Y tú, Luisa?',es:'¡Qué bonito! ¿Y tú, Luisa?',side:'right'},
      {s:'Luisa',fr:'Yo quiero ser profesora de francés.',es:'Yo quiero ser profe de francés.',side:'left'},
      {s:'Profe',fr:'¡Excelente! ¡Hacen falta buenos profesores!',es:'¡Excelente! ¡Hacen falta buenos profes!',side:'right'}
     ]}
   ],
   vocab:['¿A qué te dedicas? = À quoi tu te consacres ?','Soy... = Je suis...','El oficio o la profesión = Le métier','Trabajo = Je travaille','Quisiera ser = Je voudrais être','¡Me mola! = Ça me plaît ! (argot)','Vuestros = Votre / vos (vosotros)'],
   quiz:[
    {q:'¿Cómo se pregunta la profesión de forma informal en España?',opts:['¿Trabajas?','¿A qué te dedicas?','¿Es tu trabajo?','¿Tienes un oficio?'],ans:1},
    {q:'¿Qué significa "Quisiera ser médico"?',opts:['Je suis médecin','Je suis allé chez le médecin','Je voudrais être médecin','Je cherche un médecin'],ans:2},
    {q:'¿Qué significa "¡Me mola mucho mi trabajo!" en argot español?',opts:['Je déteste mon travail','Mon travail m\'ennuie','J\'adore vraiment mon travail','Mon travail est difficile'],ans:2}
   ]},
  {id:'trans2',level:2,emoji:'🚌',name:'Los Transportes',sub:'Metro, AVE, autobús / Métro, TGV, bus',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Comprar un billete de metro',img:'🚇',dialogue:[
      {s:'Luisa',fr:'Perdona, ¿cómo se compra el billete de metro?',es:'Perdona, ¿cómo se compra el billete de metro?',side:'left'},
      {s:'Empleado',fr:'En la máquina de allí. ¿Cuántos viajes necesitas?',es:'En la máquina de allí. ¿Cuántos viajes necesitáis?',side:'right'},
      {s:'Luisa',fr:'Un billete sencillo, por favor.',es:'Un billete sencillo, por favor.',side:'left'},
      {s:'Empleado',fr:'Son dos euros.',es:'Son dos euros.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Coger un taxi',img:'🚕',dialogue:[
      {s:'Pedro',fr:'¡Taxi! Al aeropuerto de Barajas, por favor.',es:'¡Taxi! Al aeropuerto de Barajas, por favor.',side:'left'},
      {s:'Taxista',fr:'¿A qué terminal?',es:'¿A qué terminal?',side:'right'},
      {s:'Pedro',fr:'A la T4, por favor.',es:'A la T4, por favor.',side:'left'},
      {s:'Taxista',fr:'Perfecto. ¿Tiene prisa?',es:'Perfecto. ¿Tiene prisa?',side:'right'},
      {s:'Pedro',fr:'Sí, salgo en dos horas.',es:'Sí, salgo en dos horas. ¡Venga!',side:'left'}
     ]},
    {label:'Sit. 3',title:'Sacar el billete del AVE',img:'🚂',dialogue:[
      {s:'Empleado',fr:'¿Para dónde quiere el billete?',es:'¿Para dónde quiere el billete?',side:'right'},
      {s:'Ana',fr:'Un billete para Barcelona, para el AVE de las diez.',es:'Un billete para Barcelona, para el AVE de las diez.',side:'left'},
      {s:'Empleado',fr:'¿De ida o de ida y vuelta?',es:'¿De ida o de ida y vuelta?',side:'right'},
      {s:'Ana',fr:'De ida y vuelta, por favor.',es:'De ida y vuelta, por favor.',side:'left'},
      {s:'Empleado',fr:'Son ochenta y cinco euros.',es:'Son ochenta y cinco euros. ¿Prefiere ventana o pasillo?',side:'right'}
     ]}
   ],
   vocab:['El billete (sencillo o de ida y vuelta) = Le billet (simple / aller-retour)','El AVE = Le TGV espagnol (Alta Velocidad Española)','El aeropuerto = L\'aéroport','La estación de tren o Renfe = La gare / la SNCF espagnole','Coger el metro o el taxi = Prendre le métro / le taxi','Ventana / pasillo = Fenêtre / couloir'],
   quiz:[
    {q:'¿Qué es el AVE en España?',opts:['Un bus touristique','Le TGV espagnol (Alta Velocidad)','Un tramway','Un taxi collectif'],ans:1},
    {q:'¿Qué significa "Un billete de ida y vuelta"?',opts:['Un billet simple','Un billet aller-retour','Un abonnement mensuel','Un billet premium'],ans:1},
    {q:'¿Qué significa "Coger el autobús" en España?',opts:['Rater le bus','Chercher le bus','Prendre le bus','Attendre le bus'],ans:2}
   ]},
  {id:'lieux2',level:2,emoji:'🏙️',name:'Los Lugares',sub:'Urgencia, compras, pueblo / Urgence, courses, village',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Encontrar la farmacia de guardia',img:'🚨',dialogue:[
      {s:'María',fr:'¡Perdona! ¿Dónde está la farmacia de guardia más cercana?',es:'¡Perdona! ¿Dónde está la farmacia de guardia más cercana?',side:'left'},
      {s:'Paseante',fr:'¿La farmacia? Está a dos manzanas de aquí, a la izquierda.',es:'¿La farmacia? Está a dos manzanas de aquí, a la izquierda.',side:'right'},
      {s:'María',fr:'¿Y el hospital, queda lejos?',es:'¿Y el hospital, queda lejos?',side:'left'},
      {s:'Paseante',fr:'Sí, coge el metro, línea tres.',es:'Sí, coge el metro, línea tres.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Ir al mercado y al banco',img:'🛒',dialogue:[
      {s:'Vecina',fr:'¿Vais al mercado esta mañana?',es:'¿Vais al mercado esta mañana?',side:'right'},
      {s:'Luisa',fr:'Sí, vamos primero al supermercado y después al banco.',es:'Sí, vamos primero al supermercado y después al banco.',side:'left'},
      {s:'Vecina',fr:'También hay una farmacia al lado del supermercado.',es:'También hay una farmacia al lado del súper.',side:'right'},
      {s:'Luisa',fr:'¡Genial, también necesito ir ahí!',es:'¡Genial, también necesito ir ahí!',side:'left'}
    ]},
    {label:'Sit. 3',title:'Describir un fin de semana en el pueblo',img:'🌾',dialogue:[
      {s:'Compañero',fr:'¿Qué tal el fin de semana?',es:'¿Qué tal el fin de semana?',side:'right'},
      {s:'Pedro',fr:'¡Genial! Fuimos al pueblo de mis abuelos.',es:'¡Genial! Fuimos al pueblo de mis abuelos.',side:'left'},
      {s:'Compañero',fr:'¡Qué bonito el campo en verano!',es:'¡Qué bonito el campo en verano!',side:'right'},
      {s:'Pedro',fr:'Sí, y fuimos a la fiesta mayor del pueblo.',es:'Sí, y fuimos a la fiesta mayor del pueblo. ¡Fue genial!',side:'left'}
     ]}
   ],
   vocab:['La farmacia de guardia = La pharmacie de garde','El hospital = L\'hôpital','El supermercado o el súper = Le supermarché','El banco = La banque','El pueblo = Le village','La fiesta mayor = La fête du village','Vais = Vous allez (vosotros)'],
   quiz:[
    {q:'¿Qué es "La farmacia de guardia" en España?',opts:['La pharmacie principale','La pharmacie de garde (ouverte la nuit)','La pharmacie universitaire','La pharmacie de l\'hôpital'],ans:1},
    {q:'¿Qué significa "El pueblo" en España?',opts:['La ville','La plage','Le village','La montagne'],ans:2},
    {q:'¿Qué significa "La fiesta mayor"?',opts:['Un grand bal','La fête nationale','La fête du village','Un concert'],ans:2}
   ]},
  {id:'orient2',level:2,emoji:'🧭',name:'Orientarse',sub:'Camino, taxi, barrio / Chemin, taxi, quartier',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Preguntar cómo llegar a la estación',img:'🚉',dialogue:[
      {s:'Ana',fr:'Perdona, ¿por dónde se va a la estación de Atocha?',es:'Perdona, ¿por dónde se va a la estación de Atocha?',side:'left'},
      {s:'Paseante',fr:'Sigue todo recto y gira a la izquierda en el semáforo.',es:'Sigue todo recto y gira a la izquierda en el semáforo.',side:'right'},
      {s:'Ana',fr:'¿Queda lejos a pie?',es:'¿Queda lejos a pie?',side:'left'},
      {s:'Paseante',fr:'No, unos diez minutos. Está enfrente del parque.',es:'No, unos diez minutos. Está enfrente del parque.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Guiar a un taxista',img:'🚕',dialogue:[
      {s:'Taxista',fr:'¿A dónde vais?',es:'¿A dónde vais?',side:'right'},
      {s:'Pedro',fr:'A la Gran Vía, número ocho, por favor.',es:'A la Gran Vía, número ocho, por favor.',side:'left'},
      {s:'Taxista',fr:'¿Voy por el centro?',es:'¿Voy por el centro?',side:'right'},
      {s:'Pedro',fr:'Sí. Y después del puente, girad a la derecha.',es:'Sí. Y después del puente, gira a la derecha.',side:'left'}
     ]},
    {label:'Sit. 3',title:'Indicar dónde está una tienda',img:'🏪',dialogue:[
      {s:'Turista',fr:'¿Hay una panadería cerca de aquí?',es:'¿Hay una panadería cerca de aquí?',side:'right'},
      {s:'Luisa',fr:'¡Sí! Está al lado de la farmacia, enfrente del parque.',es:'¡Sí! Está al lado de la farmacia, enfrente del parque.',side:'left'},
      {s:'Turista',fr:'¿Queda a la derecha o a la izquierda?',es:'¿Queda a la derecha o a la izquierda?',side:'right'},
      {s:'Luisa',fr:'Sigue todo recto y está a la derecha. Muy cerca, a dos minutos a pie.',es:'Sigue todo recto y está a la derecha. Muy cerca, a dos minutos a pie.',side:'left'}
     ]}
   ],
   vocab:['A la izquierda = À gauche','A la derecha = À droite','Todo recto = Tout droit','Enfrente o frente a = En face','Al lado = À côté','Lejos = Loin','Cerca = Près','La manzana = Le pâté de maisons'],
   quiz:[
    {q:'¿Cómo se dice "Tout droit" en español?',opts:['A la izquierda','A la derecha','Todo recto','Enfrente'],ans:2},
    {q:'¿Qué significa "Frente al parque"?',opts:['À côté du parc','Dans le parc','En face du parc','Derrière le parc'],ans:2},
    {q:'¿Qué significa "Está muy cerca"?',opts:['C\'est très loin','C\'est très près','C\'est à droite','C\'est en face'],ans:1}
   ]},
  {id:'sante2',level:2,emoji:'🏥',name:'La Salud',sub:'Médico, síntomas, farmacia / Médecin, symptômes, pharmacie',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Pedir cita en el centro de salud',img:'📅',dialogue:[
      {s:'Recepcionista',fr:'Centro de salud, buenos días.',es:'Centro de salud, buenos días.',side:'right'},
      {s:'María',fr:'Buenos días, quisiera pedir cita con el médico.',es:'Buenos días, quisiera pedir cita con el médico.',side:'left'},
      {s:'Recepcionista',fr:'¿Por qué motivo?',es:'¿Por qué motivo?',side:'right'},
      {s:'María',fr:'Tengo fiebre y mucha tos desde hace tres días.',es:'Tengo fiebre y mucha tos desde hace tres días.',side:'left'},
      {s:'Recepcionista',fr:'¿Puede venir mañana a las diez?',es:'¿Puede venir mañana a las diez?',side:'right'}
    ]},
    {label:'Sit. 2',title:'Explicar síntomas al médico',img:'🩺',dialogue:[
      {s:'Médico',fr:'Buenos días, ¿qué le pasa hoy?',es:'Buenos días, ¿qué le pasa hoy?',side:'right'},
      {s:'Pedro',fr:'Me duele mucho la garganta y tengo fiebre.',es:'Me duele mucho la garganta y tengo fiebre.',side:'left'},
      {s:'Médico',fr:'¿Desde cuántos días?',es:'¿Desde cuántos días?',side:'right'},
      {s:'Pedro',fr:'Desde hace cuatro días.',es:'Desde hace cuatro días.',side:'left'},
      {s:'Médico',fr:'Es una angina. Le hago una receta.',es:'Es una angina. Le hago una receta.',side:'right'}
     ]},
    {label:'Sit. 3',title:'Comprar medicamentos en la farmacia',img:'💊',dialogue:[
      {s:'Luisa',fr:'Buenos días, traigo una receta.',es:'Buenos días, traigo una receta.',side:'left'},
      {s:'Farmacéutico',fr:'Tome uno por la mañana y uno por la noche.',es:'Tome uno por la mañana y uno por la noche.',side:'right'},
      {s:'Luisa',fr:'¿Con o sin comida?',es:'¿Con o sin comida?',side:'left'},
      {s:'Farmacéutico',fr:'Con comida, preferiblemente.',es:'Con comida, preferiblemente.',side:'right'},
      {s:'Luisa',fr:'¿Y tiene algo para la tos también?',es:'¿Y tiene algo para la tos también?',side:'left'},
      {s:'Farmacéutico',fr:'Sí, aquí tiene un jarabe. Dos cucharadas tres veces al día.',es:'Sí, aquí tiene un jarabe. Dos cucharadas tres veces al día.',side:'right'}
     ]}
   ],
   vocab:['Una cita médica = Un rendez-vous médical','El centro de salud = Le centre de santé','La receta médica = L\'ordonnance','El medicamento o el fármaco = Le médicament','Me duele... = J\'ai mal à...','La fiebre = La fièvre','La tos = La toux','El/la farmacéutico(a) = Le/la pharmacien(ne)'],
   quiz:[
    {q:'¿Cómo se llama el lugar donde se pide cita con el médico en España?',opts:['El hospital','El centro de salud','La clínica privada','La farmacia'],ans:1},
    {q:'¿Qué significa "Tengo fiebre"?',opts:['J\'ai de la toux','J\'ai mal à la tête','J\'ai de la fièvre','Je suis fatigué'],ans:2},
    {q:'¿Qué significa "La receta médica"?',opts:['L\'hôpital','Le médecin','L\'ordonnance','Le médicament'],ans:2}
   ]},
  {id:'objets2',level:2,emoji:'🔑',name:'Objetos del Día',sub:'Llaves, boli, cargador, móvil / Clés, stylo, chargeur, portable',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Buscar las llaves antes de salir',img:'🔍',dialogue:[
      {s:'Carlos',fr:'¡Espera, no encuentro las llaves!',es:'¡Espera, no encuentro las llaves!',side:'left'},
      {s:'Ana',fr:'¿Has mirado en la mochila?',es:'¿Has mirado en la mochila?',side:'right'},
      {s:'Carlos',fr:'Sí... y la cartera, ¿dónde está?',es:'Sí... ¡ah, no! ¿Y la cartera dónde está?',side:'left'},
      {s:'Ana',fr:'Creo que la dejaste encima de la mesa del salón.',es:'Creo que la dejaste encima de la mesa del salón.',side:'right'},
      {s:'Carlos',fr:'¡Ah sí! ¡Aquí están! Ya podemos irnos.',es:'¡Ah sí! ¡Aquí están! Ya podemos irnos.',side:'left'},
      {s:'Ana',fr:'¡No te olvides las gafas tampoco!',es:'¡No te olvides las gafas tampoco!',side:'right'}
    ]},
    {label:'Sit. 2',title:'Pedir prestado un boli',img:'✏️',dialogue:[
      {s:'Luisa',fr:'Oye, ¿me puedes dejar un boli?',es:'Oye, ¿me puedes dejar un boli?',side:'left'},
      {s:'Compañero',fr:'Sí, claro. Toma.',es:'Sí, claro. Toma.',side:'right'},
      {s:'Luisa',fr:'¡Gracias! ¿Y tienes también una hoja de papel?',es:'¡Gracias! ¿Y tienes también una hoja de papel?',side:'left'},
      {s:'Compañero',fr:'Sí, aquí tienes. ¿La necesitas mucho tiempo?',es:'Sí, aquí tienes. ¿La necesitas mucho tiempo?',side:'right'},
      {s:'Luisa',fr:'No, solo cinco minutos. Te lo devuelvo enseguida.',es:'No, solo cinco minutos. Te lo devuelvo enseguida.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Pedir el cargador del móvil',img:'🔌',dialogue:[
      {s:'Pedro',fr:'Mi móvil está a punto de quedarse sin batería. ¿Tienes un cargador?',es:'Mi móvil está a punto de quedarse sin batería. ¿Tienes un cargador?',side:'left'},
      {s:'María',fr:'¿Qué modelo de móvil tienes?',es:'¿Qué modelo de móvil tienes?',side:'right'},
      {s:'Pedro',fr:'Un Samsung. ¿Tendrás un cargador USB-C?',es:'Un Samsung. ¿Tendrás un cargador USB-C?',side:'left'},
      {s:'María',fr:'¡Sí! Aquí está. Puedes quedártelo una hora.',es:'¡Sí! Aquí está. Puedes quedártelo una hora.',side:'right'},
      {s:'Pedro',fr:'¡Muchísimas gracias, me has salvado la vida!',es:'¡Muchísimas gracias, ¡me has salvado la vida!',side:'left'}
     ]}
   ],
   vocab:['Las llaves = Les clés','La cartera o el monedero = Le portefeuille','La mochila = Le sac à dos','El bolígrafo o el boli = Le stylo / le bic','La hoja = La feuille','El cargador = Le chargeur','Las gafas = Les lunettes','El móvil = Le portable'],
   quiz:[
    {q:'¿Cómo se dice "Les clés" en español?',opts:['La cartera','Las llaves','El boli','La botella'],ans:1},
    {q:'¿Cómo se dice "Le portable" en España?',opts:['El ordenador','El boli','El móvil','La tableta'],ans:2},
    {q:'¿Qué significa "¡Me has salvado la vida!"?',opts:['Tu me donnes la vie !','Tu m\'aides un peu !','Tu m\'as sauvé la vie !','Tu es génial !'],ans:2}
   ]}
];

var ALL_THEMES=LEVEL1_THEMES.concat(LEVEL2_THEMES);
