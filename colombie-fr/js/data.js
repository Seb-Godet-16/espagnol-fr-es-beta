/* ========================================
   data.js – Francés para colombianos
   Contenido: vocabulario y diálogos
   Langue cible : FRANÇAIS  |  Langue source : Español colombiano
   © 2026 Sébastien Godet
======================================== */

const THEMES = [
  // ── NIVEL 1 ──────────────────────────────────────────────────────────
  {
    id: "salutations",
    level: 1,
    emoji: "👋",
    name: "Salutations",
    sub: "Saludos",
    tabs: ["Tarjetas", "Quiz", "Pronunciación"],
    cards: [
      { fr: "Bonjour", es: "Buenos días / Buenas tardes", emoji: "☀️" },
      { fr: "Bonsoir", es: "Buenas noches (al saludar)", emoji: "🌙" },
      { fr: "Bonne nuit", es: "Buenas noches (al despedirse)", emoji: "😴" },
      { fr: "Salut", es: "¡Hola! (informal)", emoji: "✌️" },
      { fr: "Au revoir", es: "Adiós / Hasta luego", emoji: "👋" },
      { fr: "À bientôt", es: "Hasta pronto", emoji: "🔜" },
      { fr: "À demain", es: "Hasta mañana", emoji: "📅" },
      { fr: "Bienvenue", es: "Bienvenido/a", emoji: "🎉" },
      { fr: "Enchanté(e)", es: "Mucho gusto / Un placer", emoji: "🤝" },
      { fr: "Comment ça va ?", es: "¿Cómo estás? / ¿Cómo vas?", emoji: "😊" },
      { fr: "Ça va bien", es: "Estoy bien", emoji: "👍" },
      { fr: "Comme ci comme ça", es: "Más o menos / Ahí ahí", emoji: "🤷" },
      { fr: "Et toi ?", es: "¿Y tú? (informal)", emoji: "👉" },
      { fr: "Merci", es: "Gracias", emoji: "🙏" },
      { fr: "De rien", es: "De nada / No hay de qué", emoji: "😌" },
      { fr: "S'il vous plaît", es: "Por favor (formal)", emoji: "🙏" },
      { fr: "Excusez-moi", es: "Disculpe (formal)", emoji: "🤚" },
      { fr: "Pardon", es: "Perdón / Lo siento", emoji: "😔" },
    ],
    quiz: [
      { emoji: "☀️", question: "¿Cómo se dice «Buenos días» en francés?", options: ["Bonsoir", "Bonjour", "Salut", "Au revoir"], answer: 1 },
      { emoji: "🌙", question: "¿Cómo se dice «Buenas noches (al llegar)» en francés?", options: ["Bonjour", "Bonne nuit", "Bonsoir", "À bientôt"], answer: 2 },
      { emoji: "👋", question: "¿Cómo se dice «Adiós» en francés?", options: ["Merci", "Salut", "Au revoir", "De rien"], answer: 2 },
      { emoji: "🤝", question: "¿Cómo se dice «Mucho gusto» en francés?", options: ["Bienvenue", "Enchanté(e)", "Bonjour", "Pardon"], answer: 1 },
      { emoji: "🙏", question: "¿Cómo se dice «Por favor» en francés (formal)?", options: ["Merci", "De rien", "S'il vous plaît", "Pardon"], answer: 2 },
      { emoji: "😊", question: "¿Cómo se dice «¿Cómo estás?» en francés?", options: ["Et toi ?", "Ça va bien", "Comment ça va ?", "Comme ci comme ça"], answer: 2 },
      { emoji: "🤷", question: "¿Cómo se dice «Más o menos» en francés?", options: ["Ça va bien", "À bientôt", "Comme ci comme ça", "De rien"], answer: 2 },
      { emoji: "😔", question: "¿Cómo se dice «Perdón» en francés?", options: ["Excusez-moi", "Pardon", "S'il vous plaît", "Merci"], answer: 1 },
    ]
  },

  {
    id: "chiffres",
    level: 1,
    emoji: "🔢",
    name: "Les chiffres",
    sub: "Los números",
    tabs: ["Tarjetas", "Quiz"],
    cards: [
      { fr: "Zéro", es: "Cero", emoji: "0️⃣" },
      { fr: "Un / Une", es: "Uno / Una", emoji: "1️⃣" },
      { fr: "Deux", es: "Dos", emoji: "2️⃣" },
      { fr: "Trois", es: "Tres", emoji: "3️⃣" },
      { fr: "Quatre", es: "Cuatro", emoji: "4️⃣" },
      { fr: "Cinq", es: "Cinco", emoji: "5️⃣" },
      { fr: "Six", es: "Seis", emoji: "6️⃣" },
      { fr: "Sept", es: "Siete", emoji: "7️⃣" },
      { fr: "Huit", es: "Ocho", emoji: "8️⃣" },
      { fr: "Neuf", es: "Nueve", emoji: "9️⃣" },
      { fr: "Dix", es: "Diez", emoji: "🔟" },
      { fr: "Vingt", es: "Veinte", emoji: "2️⃣0️⃣" },
      { fr: "Trente", es: "Treinta", emoji: "🔢" },
      { fr: "Cinquante", es: "Cincuenta", emoji: "5️⃣0️⃣" },
      { fr: "Cent", es: "Cien", emoji: "💯" },
      { fr: "Mille", es: "Mil", emoji: "🏆" },
    ],
    quiz: [
      { emoji: "3️⃣", question: "¿Cómo se dice «tres» en francés?", options: ["Deux", "Quatre", "Trois", "Sept"], answer: 2 },
      { emoji: "5️⃣", question: "¿Cómo se dice «cinco» en francés?", options: ["Six", "Cinq", "Quatre", "Sept"], answer: 1 },
      { emoji: "8️⃣", question: "¿Cómo se dice «ocho» en francés?", options: ["Neuf", "Sept", "Huit", "Dix"], answer: 2 },
      { emoji: "2️⃣0️⃣", question: "¿Cómo se dice «veinte» en francés?", options: ["Dix", "Trente", "Cent", "Vingt"], answer: 3 },
      { emoji: "💯", question: "¿Cómo se dice «cien» en francés?", options: ["Mille", "Cent", "Cinquante", "Vingt"], answer: 1 },
    ]
  },

  {
    id: "couleurs",
    level: 1,
    emoji: "🎨",
    name: "Les couleurs",
    sub: "Los colores",
    tabs: ["Tarjetas", "Quiz"],
    cards: [
      { fr: "Rouge", es: "Rojo", emoji: "🔴" },
      { fr: "Bleu", es: "Azul", emoji: "🔵" },
      { fr: "Vert", es: "Verde", emoji: "🟢" },
      { fr: "Jaune", es: "Amarillo", emoji: "🟡" },
      { fr: "Orange", es: "Naranja", emoji: "🟠" },
      { fr: "Noir", es: "Negro", emoji: "⚫" },
      { fr: "Blanc", es: "Blanco", emoji: "⚪" },
      { fr: "Gris", es: "Gris", emoji: "🩶" },
      { fr: "Rose", es: "Rosado / Rosa", emoji: "🌸" },
      { fr: "Violet", es: "Morado / Violeta", emoji: "🟣" },
      { fr: "Marron", es: "Marrón / Café", emoji: "🟫" },
      { fr: "Beige", es: "Beige / Crema", emoji: "🏜️" },
    ],
    quiz: [
      { emoji: "🔴", question: "¿Cómo se dice «rojo» en francés?", options: ["Bleu", "Rouge", "Rose", "Orange"], answer: 1 },
      { emoji: "🟡", question: "¿Cómo se dice «amarillo» en francés?", options: ["Vert", "Jaune", "Orange", "Beige"], answer: 1 },
      { emoji: "⚫", question: "¿Cómo se dice «negro» en francés?", options: ["Blanc", "Gris", "Noir", "Marron"], answer: 2 },
      { emoji: "🌸", question: "¿Cómo se dice «rosado» en francés?", options: ["Rouge", "Violet", "Rose", "Beige"], answer: 2 },
      { emoji: "🟫", question: "¿Cómo se dice «café» en francés?", options: ["Gris", "Beige", "Marron", "Noir"], answer: 2 },
    ]
  },

  {
    id: "famille",
    level: 1,
    emoji: "👨‍👩‍👧",
    name: "La famille",
    sub: "La familia",
    tabs: ["Tarjetas", "Quiz"],
    cards: [
      { fr: "Le père", es: "El papá / El padre", emoji: "👨" },
      { fr: "La mère", es: "La mamá / La madre", emoji: "👩" },
      { fr: "Le fils", es: "El hijo", emoji: "👦" },
      { fr: "La fille", es: "La hija", emoji: "👧" },
      { fr: "Le frère", es: "El hermano", emoji: "🧑" },
      { fr: "La sœur", es: "La hermana", emoji: "👧" },
      { fr: "Le grand-père", es: "El abuelo", emoji: "👴" },
      { fr: "La grand-mère", es: "La abuela", emoji: "👵" },
      { fr: "L'oncle", es: "El tío", emoji: "👨" },
      { fr: "La tante", es: "La tía", emoji: "👩" },
      { fr: "Le cousin / La cousine", es: "El primo / La prima", emoji: "🧒" },
      { fr: "Le mari", es: "El esposo / El marido", emoji: "💍" },
      { fr: "La femme", es: "La esposa / La mujer", emoji: "💍" },
      { fr: "Les enfants", es: "Los niños / Los hijos", emoji: "👶" },
      { fr: "Le bébé", es: "El bebé", emoji: "🍼" },
    ],
    quiz: [
      { emoji: "👴", question: "¿Cómo se dice «abuelo» en francés?", options: ["Le père", "Le grand-père", "L'oncle", "Le frère"], answer: 1 },
      { emoji: "👧", question: "¿Cómo se dice «hija» en francés?", options: ["La sœur", "La mère", "La fille", "La tante"], answer: 2 },
      { emoji: "💍", question: "¿Cómo se dice «esposo» en francés?", options: ["Le fils", "Le mari", "Le frère", "Le père"], answer: 1 },
      { emoji: "🍼", question: "¿Cómo se dice «bebé» en francés?", options: ["L'enfant", "Le fils", "Le bébé", "Le cousin"], answer: 2 },
      { emoji: "👵", question: "¿Cómo se dice «abuela» en francés?", options: ["La mère", "La grand-mère", "La tante", "La femme"], answer: 1 },
    ]
  },

  {
    id: "nourriture",
    level: 1,
    emoji: "🍽️",
    name: "La nourriture",
    sub: "La comida",
    tabs: ["Tarjetas", "Quiz"],
    cards: [
      { fr: "Le pain", es: "El pan", emoji: "🍞" },
      { fr: "Le fromage", es: "El queso", emoji: "🧀" },
      { fr: "Le beurre", es: "La mantequilla", emoji: "🧈" },
      { fr: "L'œuf", es: "El huevo", emoji: "🥚" },
      { fr: "Le lait", es: "La leche", emoji: "🥛" },
      { fr: "L'eau", es: "El agua", emoji: "💧" },
      { fr: "Le café", es: "El café / El tinto", emoji: "☕" },
      { fr: "Le jus", es: "El jugo", emoji: "🥤" },
      { fr: "La viande", es: "La carne", emoji: "🥩" },
      { fr: "Le poulet", es: "El pollo", emoji: "🍗" },
      { fr: "Le poisson", es: "El pescado", emoji: "🐟" },
      { fr: "Les légumes", es: "Las verduras / Los vegetales", emoji: "🥦" },
      { fr: "Les fruits", es: "Las frutas", emoji: "🍎" },
      { fr: "La pomme de terre", es: "La papa", emoji: "🥔" },
      { fr: "Le riz", es: "El arroz", emoji: "🍚" },
      { fr: "La soupe", es: "La sopa", emoji: "🍲" },
      { fr: "Le dessert", es: "El postre", emoji: "🍮" },
      { fr: "Le sucre", es: "El azúcar", emoji: "🍬" },
      { fr: "Le sel", es: "La sal", emoji: "🧂" },
    ],
    quiz: [
      { emoji: "🧀", question: "¿Cómo se dice «queso» en francés?", options: ["Le beurre", "Le pain", "Le fromage", "Le lait"], answer: 2 },
      { emoji: "☕", question: "¿Cómo se dice «tinto» (café) en francés?", options: ["Le jus", "Le café", "L'eau", "Le lait"], answer: 1 },
      { emoji: "🥔", question: "¿Cómo se dice «papa» en francés?", options: ["Le riz", "La soupe", "La pomme de terre", "Les légumes"], answer: 2 },
      { emoji: "🍗", question: "¿Cómo se dice «pollo» en francés?", options: ["La viande", "Le poisson", "Le poulet", "Le bœuf"], answer: 2 },
      { emoji: "🍞", question: "¿Cómo se dice «pan» en francés?", options: ["Le pain", "Le fromage", "Le beurre", "Le sucre"], answer: 0 },
    ]
  },

  {
    id: "corps",
    level: 1,
    emoji: "🧍",
    name: "Le corps",
    sub: "El cuerpo",
    tabs: ["Tarjetas", "Quiz"],
    cards: [
      { fr: "La tête", es: "La cabeza", emoji: "🗣️" },
      { fr: "Les yeux", es: "Los ojos", emoji: "👀" },
      { fr: "Le nez", es: "La nariz", emoji: "👃" },
      { fr: "La bouche", es: "La boca", emoji: "👄" },
      { fr: "L'oreille", es: "La oreja / El oído", emoji: "👂" },
      { fr: "Les cheveux", es: "El cabello / El pelo", emoji: "💇" },
      { fr: "Le cou", es: "El cuello", emoji: "🧣" },
      { fr: "Les épaules", es: "Los hombros", emoji: "💪" },
      { fr: "Le bras", es: "El brazo", emoji: "💪" },
      { fr: "La main", es: "La mano", emoji: "✋" },
      { fr: "Le ventre", es: "El estómago / La barriga", emoji: "🤰" },
      { fr: "La jambe", es: "La pierna", emoji: "🦵" },
      { fr: "Le pied", es: "El pie", emoji: "🦶" },
      { fr: "Le dos", es: "La espalda", emoji: "🔙" },
      { fr: "Le cœur", es: "El corazón", emoji: "❤️" },
    ],
    quiz: [
      { emoji: "👀", question: "¿Cómo se dice «los ojos» en francés?", options: ["Le nez", "La bouche", "Les yeux", "Les oreilles"], answer: 2 },
      { emoji: "✋", question: "¿Cómo se dice «la mano» en francés?", options: ["Le bras", "La main", "Le pied", "Le dos"], answer: 1 },
      { emoji: "🗣️", question: "¿Cómo se dice «la cabeza» en francés?", options: ["Le cou", "La tête", "Le ventre", "Le cœur"], answer: 1 },
      { emoji: "🦵", question: "¿Cómo se dice «la pierna» en francés?", options: ["Le pied", "La jambe", "Le dos", "Le bras"], answer: 1 },
      { emoji: "👃", question: "¿Cómo se dice «la nariz» en francés?", options: ["La bouche", "L'oreille", "Le nez", "Les cheveux"], answer: 2 },
    ]
  },

  {
    id: "animaux",
    level: 1,
    emoji: "🐾",
    name: "Les animaux",
    sub: "Los animales",
    tabs: ["Tarjetas", "Quiz"],
    cards: [
      { fr: "Le chien", es: "El perro", emoji: "🐶" },
      { fr: "Le chat", es: "El gato", emoji: "🐱" },
      { fr: "Le cheval", es: "El caballo", emoji: "🐴" },
      { fr: "La vache", es: "La vaca", emoji: "🐄" },
      { fr: "Le cochon", es: "El cerdo / El marrano", emoji: "🐷" },
      { fr: "La poule", es: "La gallina", emoji: "🐔" },
      { fr: "Le lapin", es: "El conejo", emoji: "🐰" },
      { fr: "L'oiseau", es: "El pájaro", emoji: "🐦" },
      { fr: "Le poisson", es: "El pez / El pescado", emoji: "🐟" },
      { fr: "La grenouille", es: "La rana", emoji: "🐸" },
      { fr: "Le lion", es: "El león", emoji: "🦁" },
      { fr: "L'éléphant", es: "El elefante", emoji: "🐘" },
      { fr: "Le serpent", es: "La serpiente / La culebra", emoji: "🐍" },
      { fr: "Le papillon", es: "La mariposa", emoji: "🦋" },
    ],
    quiz: [
      { emoji: "🐶", question: "¿Cómo se dice «perro» en francés?", options: ["Le chat", "Le cheval", "Le chien", "Le lapin"], answer: 2 },
      { emoji: "🐄", question: "¿Cómo se dice «vaca» en francés?", options: ["La poule", "La vache", "La grenouille", "Le cochon"], answer: 1 },
      { emoji: "🦋", question: "¿Cómo se dice «mariposa» en francés?", options: ["L'oiseau", "Le papillon", "Le poisson", "Le lapin"], answer: 1 },
      { emoji: "🦁", question: "¿Cómo se dice «león» en francés?", options: ["L'éléphant", "Le lion", "Le serpent", "Le cheval"], answer: 1 },
      { emoji: "🐸", question: "¿Cómo se dice «rana» en francés?", options: ["Le cochon", "La grenouille", "L'oiseau", "Le chat"], answer: 1 },
    ]
  },

  {
    id: "alphabet",
    level: 1,
    emoji: "🔤",
    name: "L'alphabet",
    sub: "El alfabeto",
    tabs: ["Alfabeto", "Pronunciación"],
    letters: [
      { l: "A", name: "a", ex: "ami", exes: "amigo" },
      { l: "B", name: "bé", ex: "bonjour", exes: "hola" },
      { l: "C", name: "cé", ex: "café", exes: "café/tinto" },
      { l: "D", name: "dé", ex: "demain", exes: "mañana" },
      { l: "E", name: "e", ex: "école", exes: "colegio" },
      { l: "F", name: "effe", ex: "famille", exes: "familia" },
      { l: "G", name: "gé", ex: "garçon", exes: "niño" },
      { l: "H", name: "ache", ex: "heure", exes: "hora" },
      { l: "I", name: "i", ex: "ici", exes: "aquí" },
      { l: "J", name: "ji", ex: "jour", exes: "día" },
      { l: "K", name: "ka", ex: "kilo", exes: "kilo" },
      { l: "L", name: "elle", ex: "livre", exes: "libro" },
      { l: "M", name: "emme", ex: "maison", exes: "casa" },
      { l: "N", name: "enne", ex: "nom", exes: "nombre" },
      { l: "O", name: "o", ex: "orange", exes: "naranja" },
      { l: "P", name: "pé", ex: "père", exes: "papá" },
      { l: "Q", name: "ku", ex: "question", exes: "pregunta" },
      { l: "R", name: "erre", ex: "rue", exes: "calle" },
      { l: "S", name: "esse", ex: "soleil", exes: "sol" },
      { l: "T", name: "té", ex: "temps", exes: "tiempo" },
      { l: "U", name: "u", ex: "une", exes: "una" },
      { l: "V", name: "vé", ex: "ville", exes: "ciudad" },
      { l: "W", name: "double vé", ex: "week-end", exes: "fin de semana" },
      { l: "X", name: "iks", ex: "exemple", exes: "ejemplo" },
      { l: "Y", name: "i grec", ex: "yeux", exes: "ojos" },
      { l: "Z", name: "zède", ex: "zéro", exes: "cero" },
    ]
  },

  // ── NIVEL 2 ──────────────────────────────────────────────────────────
  {
    id: "cafe",
    level: 2,
    emoji: "☕",
    name: "Au café",
    sub: "En el café",
    tabs: ["Diálogo", "Vocabulario", "Quiz"],
    situation: {
      scene: "☕🥐",
      title: "Au café parisien",
      titleEs: "En un café parisino",
      description: "Estás en un café en París y quieres pedir algo.",
      dialogues: [
        {
          id: "commande",
          label: "Pedir",
          bubbles: [
            { speaker: "Serveur", side: "left", fr: "Bonjour ! Qu'est-ce que vous désirez ?", es: "¡Buenos días! ¿Qué desea usted?" },
            { speaker: "Tú", side: "right", fr: "Bonjour ! Un café, s'il vous plaît.", es: "¡Buenos días! Un café, por favor." },
            { speaker: "Serveur", side: "left", fr: "Avec du lait ou sans lait ?", es: "¿Con leche o sin leche?" },
            { speaker: "Tú", side: "right", fr: "Sans lait, merci. Et un croissant aussi.", es: "Sin leche, gracias. Y un croissant también." },
            { speaker: "Serveur", side: "left", fr: "Très bien. Voilà !", es: "Muy bien. ¡Aquí tiene!" },
          ]
        },
        {
          id: "addition",
          label: "La cuenta",
          bubbles: [
            { speaker: "Tú", side: "right", fr: "L'addition, s'il vous plaît !", es: "¡La cuenta, por favor!" },
            { speaker: "Serveur", side: "left", fr: "Ça fait 4 euros 50, s'il vous plaît.", es: "Son 4 euros con 50, por favor." },
            { speaker: "Tú", side: "right", fr: "Voilà 5 euros. Gardez la monnaie.", es: "Aquí tiene 5 euros. Quédese con el cambio." },
            { speaker: "Serveur", side: "left", fr: "Merci beaucoup ! Bonne journée !", es: "¡Muchas gracias! ¡Que tenga un buen día!" },
          ]
        }
      ],
      vocab: [
        { fr: "un café", es: "un café / un tinto" },
        { fr: "un croissant", es: "un croissant" },
        { fr: "s'il vous plaît", es: "por favor (formal)" },
        { fr: "l'addition", es: "la cuenta" },
        { fr: "voilà", es: "aquí tiene / listo" },
        { fr: "sans lait", es: "sin leche" },
        { fr: "avec du lait", es: "con leche" },
        { fr: "la monnaie", es: "el cambio / las monedas" },
        { fr: "bonne journée", es: "buen día / que le vaya bien" },
        { fr: "qu'est-ce que vous désirez ?", es: "¿qué desea?" },
      ],
      quizzes: [
        { question: "¿Cómo se pide la cuenta en francés?", options: ["Voilà !", "L'addition, s'il vous plaît !", "Bonne journée !", "Avec du lait ?"], answer: 1 },
        { question: "¿Cómo se dice «sin leche» en francés?", options: ["Avec du lait", "Sans sucre", "Sans lait", "Pas de café"], answer: 2 },
        { question: "¿Cómo se dice «aquí tiene» (al entregar algo) en francés?", options: ["Merci", "Voilà", "S'il vous plaît", "De rien"], answer: 1 },
        { question: "¿Cómo se dice «que le vaya bien» en francés?", options: ["Au revoir", "Bonne nuit", "Bonne journée", "À bientôt"], answer: 2 },
      ]
    }
  },

  {
    id: "transport",
    level: 2,
    emoji: "🚇",
    name: "Les transports",
    sub: "El transporte",
    tabs: ["Diálogo", "Vocabulario", "Quiz"],
    situation: {
      scene: "🚇🗺️",
      title: "Dans le métro",
      titleEs: "En el metro",
      description: "Estás en el metro de París y necesitas orientarte.",
      dialogues: [
        {
          id: "direction",
          label: "Preguntar",
          bubbles: [
            { speaker: "Tú", side: "right", fr: "Excusez-moi, pour aller à la Tour Eiffel ?", es: "Disculpe, ¿para ir a la Torre Eiffel?" },
            { speaker: "Parisien", side: "left", fr: "Prenez la ligne 6 jusqu'à Bir-Hakeim.", es: "Tome la línea 6 hasta Bir-Hakeim." },
            { speaker: "Tú", side: "right", fr: "C'est direct ?", es: "¿Es directo?" },
            { speaker: "Parisien", side: "left", fr: "Oui, c'est direct. Descendez à Bir-Hakeim.", es: "Sí, es directo. Bájese en Bir-Hakeim." },
            { speaker: "Tú", side: "right", fr: "Merci beaucoup !", es: "¡Muchas gracias!" },
          ]
        },
        {
          id: "ticket",
          label: "Ticket",
          bubbles: [
            { speaker: "Tú", side: "right", fr: "Un ticket, s'il vous plaît.", es: "Un tiquete, por favor." },
            { speaker: "Agent", side: "left", fr: "En carnet ou à l'unité ?", es: "¿En talonario o individual?" },
            { speaker: "Tú", side: "right", fr: "À l'unité, s'il vous plaît.", es: "Individual, por favor." },
            { speaker: "Agent", side: "left", fr: "Ça fait 2 euros 10.", es: "Son 2 euros con 10." },
          ]
        }
      ],
      vocab: [
        { fr: "le métro", es: "el metro / el trans-milenio (en Bogotá)" },
        { fr: "la ligne", es: "la línea" },
        { fr: "le ticket", es: "el tiquete / el pasaje" },
        { fr: "la station", es: "la estación" },
        { fr: "descendre", es: "bajarse" },
        { fr: "c'est direct", es: "es directo" },
        { fr: "pour aller à…", es: "para ir a…" },
        { fr: "prenez la ligne", es: "tome la línea" },
        { fr: "jusqu'à", es: "hasta" },
        { fr: "à gauche / à droite", es: "a la izquierda / a la derecha" },
      ],
      quizzes: [
        { question: "¿Cómo se pregunta cómo ir a un lugar en francés?", options: ["Où est la station ?", "Pour aller à… ?", "C'est direct ?", "Un ticket, s'il vous plaît."], answer: 1 },
        { question: "¿Cómo se dice «bajarse» (del metro) en francés?", options: ["Monter", "Prendre", "Descendre", "Aller"], answer: 2 },
        { question: "¿Cómo se dice «hasta» (la próxima estación) en francés?", options: ["Avec", "Depuis", "Jusqu'à", "Pour"], answer: 2 },
        { question: "¿Cómo se dice «a la derecha» en francés?", options: ["À gauche", "Tout droit", "À droite", "En face"], answer: 2 },
      ]
    }
  },

  {
    id: "shopping",
    level: 2,
    emoji: "🛍️",
    name: "Le shopping",
    sub: "De compras",
    tabs: ["Diálogo", "Vocabulario", "Quiz"],
    situation: {
      scene: "🛍️👗",
      title: "Dans une boutique",
      titleEs: "En una tienda",
      description: "Estás de compras en una tienda de ropa en Francia.",
      dialogues: [
        {
          id: "essayage",
          label: "Probarse",
          bubbles: [
            { speaker: "Vendeur", side: "left", fr: "Bonjour ! Je peux vous aider ?", es: "¡Hola! ¿Le puedo ayudar?" },
            { speaker: "Tú", side: "right", fr: "Oui, je cherche une veste bleue.", es: "Sí, estoy buscando una chaqueta azul." },
            { speaker: "Vendeur", side: "left", fr: "Quelle est votre taille ?", es: "¿Cuál es su talla?" },
            { speaker: "Tú", side: "right", fr: "Du 42, s'il vous plaît.", es: "La 42, por favor." },
            { speaker: "Vendeur", side: "left", fr: "Voilà ! Vous pouvez l'essayer.", es: "¡Aquí tiene! Puede probársela." },
          ]
        },
        {
          id: "prix",
          label: "El precio",
          bubbles: [
            { speaker: "Tú", side: "right", fr: "C'est combien ?", es: "¿Cuánto cuesta?" },
            { speaker: "Vendeur", side: "left", fr: "Ça coûte 45 euros.", es: "Cuesta 45 euros." },
            { speaker: "Tú", side: "right", fr: "C'est trop cher. Vous avez quelque chose de moins cher ?", es: "Es muy caro. ¿Tiene algo más barato?" },
            { speaker: "Vendeur", side: "left", fr: "Oui, ce modèle coûte 28 euros.", es: "Sí, este modelo cuesta 28 euros." },
            { speaker: "Tú", side: "right", fr: "Parfait ! Je le prends.", es: "¡Perfecto! Me lo llevo." },
          ]
        }
      ],
      vocab: [
        { fr: "chercher", es: "buscar" },
        { fr: "la taille", es: "la talla" },
        { fr: "essayer", es: "probarse" },
        { fr: "c'est combien ?", es: "¿cuánto cuesta? / ¿a cómo está?" },
        { fr: "ça coûte", es: "cuesta" },
        { fr: "trop cher", es: "muy caro" },
        { fr: "moins cher", es: "más barato" },
        { fr: "je le prends", es: "me lo llevo / lo compro" },
        { fr: "la boutique", es: "la tienda / el almacén" },
        { fr: "parfait", es: "perfecto / ¡listo!" },
      ],
      quizzes: [
        { question: "¿Cómo se pregunta el precio de algo en francés?", options: ["Vous avez la taille ?", "C'est combien ?", "Je le prends.", "Ça coûte cher."], answer: 1 },
        { question: "¿Cómo se dice «me lo llevo» en francés?", options: ["Je cherche", "Essayer", "Je le prends", "Moins cher"], answer: 2 },
        { question: "¿Cómo se dice «muy caro» en francés?", options: ["Trop cher", "Moins cher", "Parfait", "La taille"], answer: 0 },
        { question: "¿Cómo se dice «la talla» en francés?", options: ["La boutique", "Le prix", "La taille", "L'essayage"], answer: 2 },
      ]
    }
  },

  {
    id: "sante",
    level: 2,
    emoji: "🏥",
    name: "La santé",
    sub: "La salud",
    tabs: ["Diálogo", "Vocabulario", "Quiz"],
    situation: {
      scene: "🏥💊",
      title: "Chez le médecin",
      titleEs: "En el médico",
      description: "No te sientes bien y vas al médico en Francia.",
      dialogues: [
        {
          id: "consultation",
          label: "Consulta",
          bubbles: [
            { speaker: "Médecin", side: "left", fr: "Bonjour, qu'est-ce qui ne va pas ?", es: "Buenos días, ¿qué le pasa?" },
            { speaker: "Tú", side: "right", fr: "J'ai mal à la tête et j'ai de la fièvre.", es: "Me duele la cabeza y tengo fiebre." },
            { speaker: "Médecin", side: "left", fr: "Depuis combien de temps ?", es: "¿Desde cuándo?" },
            { speaker: "Tú", side: "right", fr: "Depuis hier soir.", es: "Desde anoche." },
            { speaker: "Médecin", side: "left", fr: "Je vais vous examiner. Ouvrez la bouche.", es: "Le voy a examinar. Abra la boca." },
          ]
        },
        {
          id: "ordonnance",
          label: "Receta",
          bubbles: [
            { speaker: "Médecin", side: "left", fr: "Vous avez une angine. Je vous prescris des antibiotiques.", es: "Tiene amigdalitis. Le receto antibióticos." },
            { speaker: "Tú", side: "right", fr: "Est-ce grave ?", es: "¿Es grave?" },
            { speaker: "Médecin", side: "left", fr: "Non, pas du tout. Reposez-vous et buvez beaucoup d'eau.", es: "No, para nada. Descanse y tome mucha agua." },
            { speaker: "Tú", side: "right", fr: "Merci docteur.", es: "Gracias, doctor." },
          ]
        }
      ],
      vocab: [
        { fr: "j'ai mal à…", es: "me duele…" },
        { fr: "j'ai de la fièvre", es: "tengo fiebre / calentura" },
        { fr: "depuis quand ?", es: "¿desde cuándo?" },
        { fr: "l'ordonnance", es: "la receta médica" },
        { fr: "les médicaments", es: "los medicamentos / las drogas" },
        { fr: "la pharmacie", es: "la farmacia / la droguería" },
        { fr: "reposez-vous", es: "descanse" },
        { fr: "buvez de l'eau", es: "tome agua" },
        { fr: "est-ce grave ?", es: "¿es grave?" },
        { fr: "pas du tout", es: "para nada" },
      ],
      quizzes: [
        { question: "¿Cómo se dice «me duele la cabeza» en francés?", options: ["J'ai de la fièvre", "J'ai mal à la tête", "Je suis fatigué", "Je tousse"], answer: 1 },
        { question: "¿Cómo se dice «la farmacia» en francés?", options: ["L'hôpital", "La clinique", "La pharmacie", "Le cabinet"], answer: 2 },
        { question: "¿Cómo se dice «¿es grave?» en francés?", options: ["Pas du tout ?", "Est-ce grave ?", "Depuis quand ?", "Qu'est-ce qui ne va pas ?"], answer: 1 },
        { question: "¿Cómo se dice «la receta médica» en francés?", options: ["Les médicaments", "L'ordonnance", "La consultation", "Les antibiotiques"], answer: 1 },
      ]
    }
  },

  {
    id: "travail",
    level: 2,
    emoji: "💼",
    name: "Le travail",
    sub: "El trabajo",
    tabs: ["Diálogo", "Vocabulario", "Quiz"],
    situation: {
      scene: "💼🏢",
      title: "Au bureau",
      titleEs: "En la oficina",
      description: "Primer día de trabajo en una empresa francesa.",
      dialogues: [
        {
          id: "presentation",
          label: "Presentarse",
          bubbles: [
            { speaker: "Collègue", side: "left", fr: "Bonjour ! Vous êtes le nouveau collègue ?", es: "¡Buenos días! ¿Usted es el nuevo compañero?" },
            { speaker: "Tú", side: "right", fr: "Oui, je m'appelle Carlos. Je suis colombien.", es: "Sí, me llamo Carlos. Soy colombiano." },
            { speaker: "Collègue", side: "left", fr: "Enchanté ! Bienvenue dans l'équipe.", es: "¡Mucho gusto! Bienvenido al equipo." },
            { speaker: "Tú", side: "right", fr: "Merci ! Je suis très content d'être ici.", es: "¡Gracias! Estoy muy contento de estar aquí." },
          ]
        },
        {
          id: "reunion",
          label: "Reunión",
          bubbles: [
            { speaker: "Chef", side: "left", fr: "La réunion commence à 10h. Vous êtes prêt ?", es: "La reunión empieza a las 10. ¿Está listo?" },
            { speaker: "Tú", side: "right", fr: "Oui, je suis prêt. De quoi allons-nous parler ?", es: "Sí, estoy listo. ¿De qué vamos a hablar?" },
            { speaker: "Chef", side: "left", fr: "Du nouveau projet avec la Colombie.", es: "Del nuevo proyecto con Colombia." },
            { speaker: "Tú", side: "right", fr: "Parfait ! C'est mon domaine.", es: "¡Perfecto! Es mi área." },
          ]
        }
      ],
      vocab: [
        { fr: "le travail", es: "el trabajo" },
        { fr: "le bureau", es: "la oficina / el escritorio" },
        { fr: "le collègue", es: "el compañero / el colega" },
        { fr: "la réunion", es: "la reunión" },
        { fr: "le chef / la cheffe", es: "el jefe / la jefa" },
        { fr: "je suis prêt(e)", es: "estoy listo/a" },
        { fr: "de quoi… ?", es: "¿de qué…?" },
        { fr: "le projet", es: "el proyecto" },
        { fr: "l'équipe", es: "el equipo" },
        { fr: "commencer", es: "empezar / comenzar" },
      ],
      quizzes: [
        { question: "¿Cómo se dice «la reunión» en francés?", options: ["Le bureau", "La réunion", "Le projet", "L'équipe"], answer: 1 },
        { question: "¿Cómo se dice «estoy listo» en francés?", options: ["Je suis content", "Je commence", "Je suis prêt", "Je travaille"], answer: 2 },
        { question: "¿Cómo se dice «el/la jefe/a» en francés?", options: ["Le collègue", "L'équipe", "Le chef", "Le bureau"], answer: 2 },
        { question: "¿Cómo se dice «empezar» en francés?", options: ["Parler", "Commencer", "Travailler", "Finir"], answer: 1 },
      ]
    }
  },
];