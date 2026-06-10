/* ========================================
   Français → Oromo 🇪🇹 – Données
   Vocabulaire, quiz et dialogues
   © 2026 Sébastien Godet
======================================== */

var LEVEL1_THEMES = [
  {id:'alpha',level:1,emoji:'🔤',
   name:'L\'Alphabet',
   sub:'A, B, C… Z <span class="or">Qubee Faransaayii</span>',
   type:'alpha',
   words:[
    {fr:'A',es:'a',em:'✈️'},{fr:'B',es:'bé',em:'🎈'},
    {fr:'C',es:'cé',em:'☕'},{fr:'D',es:'dé',em:'💃'},
    {fr:'E',es:'e',em:'🏫'},{fr:'F',es:'effe',em:'🌸'},
    {fr:'G',es:'jé',em:'🚉'},{fr:'H',es:'aché — hin dhagahamu',em:'🏨'},
    {fr:'I',es:'i',em:'🏝️'},{fr:'J',es:'ji',em:'🌿'},
    {fr:'K',es:'ka',em:'⚖️'},{fr:'L',es:'elle',em:'🦁'},
    {fr:'M',es:'emme',em:'🏠'},{fr:'N',es:'enne',em:'🌙'},
    {fr:'O',es:'o',em:'🐦'},{fr:'P',es:'pé',em:'🍞'},
    {fr:'Q',es:'ku',em:'🏘️'},{fr:'R',es:'erre',em:'🌹'},
    {fr:'S',es:'esse',em:'☀️'},{fr:'T',es:'té',em:'🚂'},
    {fr:'U',es:'u — afaan marqifamee',em:'1️⃣'},{fr:'V',es:'vé',em:'🌆'},
    {fr:'W',es:'doble vé',em:'🚃'},{fr:'X',es:'iks',em:'🎵'},
    {fr:'Y',es:'i griega',em:'🥛'},{fr:'Z',es:'zède',em:'0️⃣'}
   ],
   quiz10:[
    {q:'Quelle lettre entends-tu ? <span class="or">Qubee kami dhagahde?</span>',audio:'B',opts:['A','B','C','D'],ans:1},
    {q:'Quelle lettre entends-tu ? <span class="or">Qubee kami dhagahde?</span>',audio:'G',opts:['J','K','G','H'],ans:2},
    {q:'Quelle lettre entends-tu ? <span class="or">Qubee kami dhagahde?</span>',audio:'R',opts:['A','R','L','N'],ans:1},
    {q:'Quelle lettre entends-tu ? <span class="or">Qubee kami dhagahde?</span>',audio:'U',opts:['U','O','I','E'],ans:0},
    {q:'Quelle lettre entends-tu ? <span class="or">Qubee kami dhagahde?</span>',audio:'W',opts:['V','W','X','Y'],ans:1},
    {q:'Quelle lettre entends-tu ? <span class="or">Qubee kami dhagahde?</span>',audio:'Z',opts:['S','X','Z','C'],ans:2},
    {q:'Quelle lettre entends-tu ? <span class="or">Qubee kami dhagahde?</span>',audio:'H',opts:['H','F','M','N'],ans:0},
    {q:'Quelle lettre entends-tu ? <span class="or">Qubee kami dhagahde?</span>',audio:'K',opts:['C','G','K','Q'],ans:2},
    {q:'Quelle lettre entends-tu ? <span class="or">Qubee kami dhagahde?</span>',audio:'Y',opts:['I','U','Y','E'],ans:2},
    {q:'Quelle lettre entends-tu ? <span class="or">Qubee kami dhagahde?</span>',audio:'P',opts:['B','D','P','T'],ans:2}
   ]},

  {id:'pres',level:1,emoji:'🙋',
   name:'Se présenter',
   sub:'Nom, âge, pays… <span class="or">Of beeksisuu</span>',
   words:[
    {fr:'Le nom',es:'Maqaa maatii',em:'👨‍👩‍👧'},{fr:'Le prénom',es:'Maqaa dhalootaa',em:'🏷️'},
    {fr:'La nationalité',es:'Biyyummaa',em:'🌍'},{fr:'L\'âge',es:'Umurii',em:'🎂'},
    {fr:'La profession',es:'Hojii / ogummaa',em:'💼'},{fr:'Le pays',es:'Biyya',em:'🗺️'},
    {fr:'Français(e)',es:'Faransaayii',em:'🇫🇷'},{fr:'Éthiopien(ne)',es:'Itoophiyaa',em:'🇪🇹'},
    {fr:'J\'habite à',es:'Bakka jiraadhu',em:'🏠'},{fr:'Je suis',es:'Ani nan ta\'a / jira',em:'🧑'},
    {fr:'J\'ai ... ans',es:'Waggaa ... qaba',em:'🎈'},{fr:'Je m\'appelle',es:'Maqaan koo... jedhama',em:'👋'}
   ],
   quiz10:[
    {q:'Que signifie «Je m\'appelle» ? <span class="or">"Je m\'appelle" — hiikni isaa maal?</span>',opts:['Ani jira','Maqaan koo... jedhama','Bakka jiraadhu','Waggaa ... qaba'],ans:1},
    {q:'Comment dit-on «Le nom» en oromo ? <span class="or">"Le nom" — Oromoon maal jedhama?</span>',opts:['Maqaa dhalootaa','Umurii','Maqaa maatii','Hojii'],ans:2},
    {q:'Que signifie «J\'ai 25 ans» ? <span class="or">"J\'ai 25 ans" — hiikni maal?</span>',opts:['Waggaa 25 jiraadha','Waggaa 25 barseessa','Waggaa 25 qaba','Waggaa 25 beeka'],ans:2},
    {q:'Comment dit-on «La nationalité» en français ? <span class="or">"Biyyummaa" — Faransaayin maal?</span>',opts:['Le pays','La profession','La nationalité','L\'âge'],ans:2},
    {q:'Que signifie «J\'habite à Paris» ? <span class="or">"J\'habite à Paris" — hiikni maal?</span>',opts:['Paarisitti deemaa','Paarisitti barseessa','Paarisitti jiraadha','Paarisirraa dhufaa'],ans:2},
    {q:'Comment dit-on «Le prénom» en oromo ? <span class="or">"Le prénom" — Oromoon maal?</span>',opts:['Maqaa maatii','Maqaa dhalootaa','Umurii','Hojii'],ans:1},
    {q:'Comment dit-on «Je suis éthiopien» en français ? <span class="or">"Ani Itoophiyaadha" — Faransaayin maal?</span>',opts:['Je suis français','Je suis éthiopien','J\'habite en Éthiopie','Je parle éthiopien'],ans:1},
    {q:'Comment dit-on «La profession» en oromo ? <span class="or">"La profession" — Oromoon maal?</span>',opts:['Biyyummaa','Biyya','Hojii / ogummaa','Umurii'],ans:2},
    {q:'Comment traduit-on «Comment tu t\'appelles ?» ? <span class="or">Afaan Faransaayin maal?</span>',opts:['Quel âge as-tu ?','Comment t\'appelles-tu ?','D\'où viens-tu ?','Quelle est ta profession ?'],ans:1},
    {q:'Comment dit-on «Le pays» en oromo ? <span class="or">"Le pays" — Oromoon maal?</span>',opts:['Magaalaa','Kutaa lafaa','Biyya','Karaa'],ans:2}
   ]},

  {id:'num',level:1,emoji:'🔢',
   name:'Les nombres',
   sub:'0 à 20 <span class="or">Lakkoofsa</span>',
   words:[
    {fr:'Zéro',es:'Zeeroo',em:'0️⃣'},{fr:'Un',es:'Tokko',em:'1️⃣'},
    {fr:'Deux',es:'Lama',em:'2️⃣'},{fr:'Trois',es:'Sadii',em:'3️⃣'},
    {fr:'Quatre',es:'Afur',em:'4️⃣'},{fr:'Cinq',es:'Shan',em:'5️⃣'},
    {fr:'Six',es:'Ja\'a',em:'6️⃣'},{fr:'Sept',es:'Torba',em:'7️⃣'},
    {fr:'Huit',es:'Saddeet',em:'8️⃣'},{fr:'Neuf',es:'Sagal',em:'9️⃣'},
    {fr:'Dix',es:'Kudhan',em:'🔟'},{fr:'Onze',es:'Kudha tokko',em:'1️⃣1️⃣'},
    {fr:'Douze',es:'Kudha lama',em:'1️⃣2️⃣'},{fr:'Treize',es:'Kudha sadii',em:'1️⃣3️⃣'},
    {fr:'Quatorze',es:'Kudha afur',em:'1️⃣4️⃣'},{fr:'Quinze',es:'Kudha shan',em:'1️⃣5️⃣'},
    {fr:'Seize',es:'Kudha ja\'a',em:'1️⃣6️⃣'},{fr:'Dix-sept',es:'Kudha torba',em:'1️⃣7️⃣'},
    {fr:'Dix-huit',es:'Kudha saddeet',em:'1️⃣8️⃣'},{fr:'Dix-neuf',es:'Kudha sagal',em:'1️⃣9️⃣'},
    {fr:'Vingt',es:'Digdama',em:'2️⃣0️⃣'}
   ],
   quiz10:[
    {q:'«Cinq» — quel chiffre est-ce ? <span class="or">lakkoofsi isaa maal?</span>',opts:['4','6','5','7'],ans:2},
    {q:'Comment dit-on 12 en français ? <span class="or">12 Faransaayin maal?</span>',opts:['Onze','Douze','Treize','Dix'],ans:1},
    {q:'Comment dit-on 16 en français ? <span class="or">16 Faransaayin maal?</span>',opts:['Quinze','Dix-sept','Seize','Treize'],ans:2},
    {q:'«Neuf» — quel chiffre est-ce ? <span class="or">lakkoofsi isaa maal?</span>',opts:['7','8','10','9'],ans:3},
    {q:'Comment dit-on 20 en français ? <span class="or">20 Faransaayin maal?</span>',opts:['Dix-neuf','Vingt','Quinze','Dix-huit'],ans:1},
    {q:'«Treize» — quel chiffre est-ce ? <span class="or">lakkoofsi isaa maal?</span>',opts:['12','11','14','13'],ans:3},
    {q:'Comment dit-on 8 en français ? <span class="or">8 Faransaayin maal?</span>',opts:['Sept','Neuf','Huit','Six'],ans:2},
    {q:'«Quatorze» — quel chiffre est-ce ? <span class="or">lakkoofsi isaa maal?</span>',opts:['15','13','14','12'],ans:2},
    {q:'Comment dit-on 17 en français ? <span class="or">17 Faransaayin maal?</span>',opts:['Dix-six','Dix-sept','Seize','Dix-huit'],ans:1},
    {q:'«Onze» — quel chiffre est-ce ? <span class="or">lakkoofsi isaa maal?</span>',opts:['10','12','13','11'],ans:3}
   ]},

  {id:'col',level:1,emoji:'🎨',
   name:'Les couleurs',
   sub:'Rouge, bleu, vert… <span class="or">Halluu</span>',
   words:[
    {fr:'Rouge',es:'Diimaa',em:'❤️'},{fr:'Bleu',es:'Cuquliisa',em:'💙'},
    {fr:'Vert',es:'Magariisa',em:'💚'},{fr:'Jaune',es:'Keelloo',em:'💛'},
    {fr:'Orange',es:'Burtukaana',em:'🧡'},{fr:'Blanc',es:'Adii',em:'🤍'},
    {fr:'Noir',es:'Gurraacha',em:'🖤'},{fr:'Rose',es:'Roozii / pinki',em:'🩷'},
    {fr:'Violet',es:'Urgessa / dhadhaa',em:'💜'},{fr:'Marron',es:'Magaala / bunni',em:'🤎'},
    {fr:'Gris',es:'Garaacha / giriizii',em:'🩶'}
   ],
   quiz10:[
    {q:'Comment dit-on «Rouge» en oromo ? <span class="or">"Diimaa" Faransaayin maal?</span>',opts:['Bleu','Rouge','Vert','Jaune'],ans:1},
    {q:'Que signifie «Bleu» ? <span class="or">"Bleu" — hiikni isaa maal?</span>',opts:['Magariisa','Keelloo','Cuquliisa','Urgessa'],ans:2},
    {q:'Comment dit-on «Vert» en oromo ? <span class="or">"Magariisa" Faransaayin maal?</span>',opts:['Jaune','Gris','Vert','Blanc'],ans:2},
    {q:'Que signifie «Noir» ? <span class="or">"Noir" — hiikni isaa maal?</span>',opts:['Adii','Garaacha','Magaala','Gurraacha'],ans:3},
    {q:'Comment dit-on «Jaune» en oromo ? <span class="or">"Keelloo" Faransaayin maal?</span>',opts:['Orange','Jaune','Rose','Violet'],ans:1},
    {q:'Que signifie «Rose» ? <span class="or">"Rose" — hiikni isaa maal?</span>',opts:['Diimaa','Burtukaana','Roozii','Urgessa'],ans:2},
    {q:'Comment dit-on «Blanc» en oromo ? <span class="or">"Adii" Faransaayin maal?</span>',opts:['Blanc','Noir','Gris','Marron'],ans:0},
    {q:'Que signifie «Violet» ? <span class="or">"Violet" — hiikni isaa maal?</span>',opts:['Cuquliisa','Magariisa','Diimaa','Urgessa'],ans:3},
    {q:'Comment dit-on «Marron» en oromo ? <span class="or">"Magaala/bunni" Faransaayin maal?</span>',opts:['Gris','Marron','Noir','Rouge'],ans:1},
    {q:'Que signifie «Orange» ? <span class="or">"Orange" — hiikni isaa maal?</span>',opts:['Diimaa','Keelloo','Burtukaana','Roozii'],ans:2}
   ]},

  {id:'nour',level:1,emoji:'🍽️',
   name:'La nourriture',
   sub:'Pain, légumes, fruits… <span class="or">Nyaata</span>',
   words:[
    {fr:'Le pain',es:'Buddeena',em:'🍞'},{fr:'Le riz',es:'Ruuzii',em:'🍚'},
    {fr:'Le fromage',es:'Chiiznii',em:'🧀'},{fr:'La viande',es:'Foon',em:'🥩'},
    {fr:'Le poulet',es:'Foon lukkuu',em:'🍗'},{fr:'Le poisson',es:'Qurxumii',em:'🐟'},
    {fr:'La pomme',es:'Poomii / tufaa',em:'🍎'},{fr:'La banane',es:'Muuzii',em:'🍌'},
    {fr:'La tomate',es:'Timaatimii',em:'🍅'},{fr:'La carotte',es:'Karoota',em:'🥕'},
    {fr:'L\'œuf',es:'Hanqaaquu',em:'🥚'},{fr:'Le beurre',es:'Dhadhaa / batar',em:'🧈'},
    {fr:'Les fruits',es:'Fuduraa mi\'aawaa',em:'🍉'},{fr:'Les légumes',es:'Kuduraa',em:'🥦'},
    {fr:'Le bonbon',es:'Sibiricoo / moo\'aa',em:'🍬'},{fr:'Le sel',es:'Soogiddaa',em:'🧂'},
    {fr:'Le poivre',es:'Barbaree',em:'🌶️'},{fr:'Les pâtes',es:'Makaronii',em:'🍝'},
    {fr:'La pomme de terre',es:'Diimtuu / qocaa',em:'🥔'},{fr:'Le maïs',es:'Boqqolloo',em:'🌽'},
    {fr:'L\'oignon',es:'Qullubbii',em:'🧅'},{fr:'La salade',es:'Salaadhaa',em:'🥗'},
    {fr:'L\'ail',es:'Adaamii',em:'🧄'},{fr:'Le concombre',es:'Khiyaarii',em:'🥒'},
    {fr:'L\'orange',es:'Burtukaana',em:'🍊'},{fr:'Le citron',es:'Liimoo',em:'🍋'},
    {fr:'Le raisin',es:'Wooyinii / injirii',em:'🍇'},{fr:'La fraise',es:'Xaaxii / firaazii',em:'🍓'},
    {fr:'La pastèque',es:'Baaqqee / garbuu bishaanii',em:'🍉'},
    {fr:'Les cacahuètes',es:'Loltuu / dhadhaqa',em:'🥜'},
    {fr:'Le chocolat',es:'Shaakalaatii',em:'🍫'},{fr:'Le miel',es:'Damma',em:'🍯'},
    {fr:'La citrouille',es:'Boodheessa',em:'🎃'},{fr:'Les haricots',es:'Daadhii / loomii',em:'🫘'}
   ],
   quiz10:[
    {q:'Comment dit-on «Le pain» en oromo ? <span class="or">"Buddeena" Faransaayin maal?</span>',opts:['Le riz','Le pain','Le fromage','Le beurre'],ans:1},
    {q:'Que signifie «Le poulet» ? <span class="or">"Le poulet" — hiikni isaa maal?</span>',opts:['Qurxumii','Foon','Foon lukkuu','Hanqaaquu'],ans:2},
    {q:'Comment dit-on «L\'œuf» en oromo ? <span class="or">"Hanqaaquu" Faransaayin maal?</span>',opts:['Le beurre','Le fromage','La carotte','L\'œuf'],ans:3},
    {q:'Que signifie «Les légumes» ? <span class="or">"Les légumes" — hiikni isaa maal?</span>',opts:['Fuduraa','Damma','Kuduraa','Dhugaatii'],ans:2},
    {q:'Comment dit-on «La pomme» en oromo ? <span class="or">"Poomii / tufaa" Faransaayin maal?</span>',opts:['La banane','La fraise','La pomme','L\'orange'],ans:2},
    {q:'Comment dit-on «La banane» en oromo ? <span class="or">"Muuzii" Faransaayin maal?</span>',opts:['La pomme','La fraise','La banane','L\'orange'],ans:2},
    {q:'Comment dit-on «La citrouille» en oromo ? <span class="or">"Boodheessa" Faransaayin maal?</span>',opts:['La carotte','La citrouille','Le maïs','L\'oignon'],ans:1},
    {q:'Comment dit-on «Les haricots» en oromo ? <span class="or">"Daadhii / loomii" Faransaayin maal?</span>',opts:['Les pâtes','Les cacahuètes','Les haricots','Le riz'],ans:2},
    {q:'Comment dit-on «La pastèque» en oromo ? <span class="or">"Baaqqee" Faransaayin maal?</span>',opts:['La fraise','La pastèque','Le raisin','L\'orange'],ans:1},
    {q:'Comment dit-on «Les cacahuètes» en oromo ? <span class="or">"Loltuu / dhadhaqa" Faransaayin maal?</span>',opts:['Les amandes','Les noix','Les cacahuètes','Les noisettes'],ans:2},
    {q:'Comment dit-on «La carotte» en oromo ? <span class="or">"Karoota" Faransaayin maal?</span>',opts:['Le concombre','La carotte','La tomate','L\'oignon'],ans:1},
    {q:'Comment dit-on «La fraise» en oromo ? <span class="or">"Xaaxii / firaazii" Faransaayin maal?</span>',opts:['La banane','La pastèque','La fraise','Le raisin'],ans:2}
   ]},

  {id:'bois',level:1,emoji:'🥤',
   name:'Les boissons',
   sub:'Eau, café, jus… <span class="or">Dhugaatii</span>',
   words:[
    {fr:'L\'eau',es:'Bishaan',em:'💧'},{fr:'Le café',es:'Bunaa',em:'☕'},
    {fr:'Le thé',es:'Shaayii',em:'🍵'},{fr:'Le jus',es:'Juusii',em:'🧃'},
    {fr:'Le lait',es:'Aannan',em:'🥛'},{fr:'Le vin',es:'Wayinii',em:'🍷'},
    {fr:'La bière',es:'Biiraa',em:'🍺'},{fr:'Le soda',es:'Dhugaatii sodaa / gasii',em:'🥤'},
    {fr:'L\'eau chaude',es:'Bishaan ho\'aa',em:'♨️'},{fr:'L\'eau froide',es:'Bishaan qabbanaa\'aa',em:'🧊'}
   ],
   quiz10:[
    {q:'Comment dit-on «L\'eau» en oromo ? <span class="or">"Bishaan" Faransaayin maal?</span>',opts:['Le lait','Le jus','L\'eau','Le thé'],ans:2},
    {q:'Que signifie «Le café» ? <span class="or">"Le café" — hiikni isaa maal?</span>',opts:['Shaayii','Bunaa','Juusii','Aannan'],ans:1},
    {q:'Comment dit-on «Le lait» en oromo ? <span class="or">"Aannan" Faransaayin maal?</span>',opts:['Le lait','L\'eau','Le thé','Le jus'],ans:0},
    {q:'Que signifie «Le jus» ? <span class="or">"Le jus" — hiikni isaa maal?</span>',opts:['Wayinii','Biiraa','Sodaa','Juusii'],ans:3},
    {q:'Comment dit-on «Le vin» en oromo ? <span class="or">"Wayinii" Faransaayin maal?</span>',opts:['La bière','Le soda','Le vin','Le café'],ans:2},
    {q:'Que signifie «La bière» ? <span class="or">"La bière" — hiikni isaa maal?</span>',opts:['Wayinii','Biiraa','Sodaa','Juusii'],ans:1},
    {q:'Comment dit-on «Le thé» en oromo ? <span class="or">"Shaayii" Faransaayin maal?</span>',opts:['Le café','Le thé','Le lait','L\'eau'],ans:1},
    {q:'Que signifie «L\'eau froide» ? <span class="or">"L\'eau froide" — hiikni isaa maal?</span>',opts:['Bishaan ho\'aa','Bishaan dhugaatii','Bishaan qabbanaa\'aa','Cabbii'],ans:2}
   ]},

  {id:'fam',level:1,emoji:'👨‍👩‍👧',
   name:'La famille',
   sub:'Père, mère, fils… <span class="or">Maatii</span>',
   words:[
    {fr:'Le père',es:'Abbaa',em:'👨'},{fr:'La mère',es:'Haadha',em:'👩'},
    {fr:'Le fils',es:'Ilma',em:'👦'},{fr:'La fille',es:'Intala',em:'👧'},
    {fr:'Le frère',es:'Obboleessa',em:'🧑'},{fr:'La sœur',es:'Obboleettii',em:'👧'},
    {fr:'Le grand-père',es:'Akaakoo / Abbaa-abbaa',em:'👴'},
    {fr:'La grand-mère',es:'Haadha-haadha',em:'👵'},
    {fr:'Le mari',es:'Abbaa manaa',em:'💍'},
    {fr:'La femme',es:'Haadha manaa / niitii',em:'💑'}
   ],
   quiz10:[
    {q:'Comment dit-on «Le père» en oromo ? <span class="or">"Abbaa" Faransaayin maal?</span>',opts:['Le mari','Le fils','Le père','Le frère'],ans:2},
    {q:'Que signifie «La mère» ? <span class="or">"La mère" — hiikni isaa maal?</span>',opts:['Intala','Obboleettii','Akaakoo','Haadha'],ans:3},
    {q:'Comment dit-on «Le frère» en oromo ? <span class="or">"Obboleessa" Faransaayin maal?</span>',opts:['Le fils','Le frère','Le père','Le mari'],ans:1},
    {q:'Que signifie «La sœur» ? <span class="or">"La sœur" — hiikni isaa maal?</span>',opts:['Haadha','Akaakoo','Obboleettii','Intala'],ans:2},
    {q:'Comment dit-on «Le grand-père» en oromo ? <span class="or">"Akaakoo" Faransaayin maal?</span>',opts:['Le père','Le mari','Le fils','Le grand-père'],ans:3},
    {q:'Que signifie «La grand-mère» ? <span class="or">"La grand-mère" — hiikni isaa maal?</span>',opts:['Haadha','Haadha-haadha','Obboleettii','Intala'],ans:1},
    {q:'Comment dit-on «La fille» en oromo ? <span class="or">"Intala" Faransaayin maal?</span>',opts:['La sœur','La femme','La fille','La mère'],ans:2},
    {q:'Que signifie «Le mari» ? <span class="or">"Le mari" — hiikni isaa maal?</span>',opts:['Ilma','Obboleessa','Akaakoo','Abbaa manaa'],ans:3}
   ]},

  {id:'emot',level:1,emoji:'😄',
   name:'Les émotions',
   sub:'Joyeux, triste… <span class="or">Miira</span>',
   words:[
    {fr:'Joyeux / Joyeuse',es:'Gammadaa / boonaa',em:'😄'},
    {fr:'Triste',es:'Gaddaa',em:'😢'},
    {fr:'Fatigué(e)',es:'Dadhabaa / hifataa',em:'😴'},
    {fr:'Fâché(e)',es:'Haromsaa / aarsaa',em:'😠'},
    {fr:'Stressé(e)',es:'Miira dhiphoo',em:'😰'},
    {fr:'Malade',es:'Dhukkubsataa',em:'🤒'},
    {fr:'Content(e)',es:'Quufa / gammadaa',em:'😊'},
    {fr:'Inquiet / Inquiète',es:'Yaaddoo / sodaataa',em:'😟'},
    {fr:'Amoureux / Amoureuse',es:'Jaalalaan guutamaa',em:'😍'},
    {fr:'Déçu(e)',es:'Abdii kutaa',em:'😞'},
    {fr:'Avoir peur',es:'Sodaachuu',em:'😨'}
   ],
   quiz10:[
    {q:'Comment dit-on «Joyeux» en oromo ? <span class="or">"Gammadaa" Faransaayin maal?</span>',opts:['Triste','Fatigué','Joyeux','Malade'],ans:2},
    {q:'Que signifie «Triste» ? <span class="or">"Triste" — hiikni isaa maal?</span>',opts:['Dadhabaa','Gaddaa','Haromsaa','Dhukkubsataa'],ans:1},
    {q:'Comment dit-on «Fatigué» en oromo ? <span class="or">"Dadhabaa" Faransaayin maal?</span>',opts:['Stressé','Malade','Inquiet','Fatigué'],ans:3},
    {q:'Que signifie «Malade» ? <span class="or">"Malade" — hiikni isaa maal?</span>',opts:['Gaddaa','Yaaddoo','Dhukkubsataa','Dhiphoo'],ans:2},
    {q:'Comment dit-on «Fâché» en oromo ? <span class="or">"Haromsaa / aarsaa" Faransaayin maal?</span>',opts:['Déçu','Fâché','Inquiet','Content'],ans:1},
    {q:'Que signifie «Content(e)» ? <span class="or">"Content(e)" — hiikni isaa maal?</span>',opts:['Gammadaa','Jaalalaan','Quufa / gammadaa','Sodaataa'],ans:2},
    {q:'Comment dit-on «Inquiet» en oromo ? <span class="or">"Yaaddoo" Faransaayin maal?</span>',opts:['Stressé','Amoureux','Inquiet','Déçu'],ans:2},
    {q:'Que signifie «Avoir peur» ? <span class="or">"Avoir peur" — hiikni isaa maal?</span>',opts:['Beela\'uu','Sodaachuu','Qabbana\'uu','Dhukkubuu'],ans:1}
   ]},

  {id:'log',level:1,emoji:'🏠',
   name:'La maison',
   sub:'Salon, cuisine… <span class="or">Mana</span>',
   words:[
    {fr:'Le salon',es:'Kutaa keessummaa',em:'🛋️'},
    {fr:'La cuisine',es:'Booji\'aa / cucoo',em:'🍳'},
    {fr:'La chambre',es:'Kutaa ciisichaa',em:'🛏️'},
    {fr:'La salle de bain',es:'Mana dhiqannaa',em:'🚿'},
    {fr:'Les toilettes',es:'Mana buqqee',em:'🚽'},
    {fr:'L\'entrée',es:'Seensa / balbala',em:'🚪'},
    {fr:'Le garage',es:'Garaajii',em:'🚗'},
    {fr:'La salle à manger',es:'Kutaa nyaataa',em:'🍽️'}
   ],
   quiz10:[
    {q:'Comment dit-on «Le salon» en oromo ? <span class="or">"Kutaa keessummaa" Faransaayin maal?</span>',opts:['La cuisine','La chambre','Le salon','Le garage'],ans:2},
    {q:'Que signifie «La cuisine» ? <span class="or">"La cuisine" — hiikni isaa maal?</span>',opts:['Kutaa nyaataa','Booji\'aa','Mana dhiqannaa','Kutaa keessummaa'],ans:1},
    {q:'Comment dit-on «La chambre» en oromo ? <span class="or">"Kutaa ciisichaa" Faransaayin maal?</span>',opts:['Le salon','La chambre','L\'entrée','Le garage'],ans:1},
    {q:'Que signifie «La salle de bain» ? <span class="or">"La salle de bain" — hiikni isaa maal?</span>',opts:['Mana buqqee','Garaajii','Mana dhiqannaa','Kutaa nyaataa'],ans:2},
    {q:'Comment dit-on «La salle à manger» en oromo ? <span class="or">"Kutaa nyaataa" Faransaayin maal?</span>',opts:['Le salon','La salle à manger','La cuisine','La chambre'],ans:1}
   ]},

  {id:'veth',level:1,emoji:'👗',
   name:'Les vêtements',
   sub:'T-shirt, pantalon… <span class="or">Uffata</span>',
   words:[
    {fr:'Le t-shirt',es:'Shaareetii / tii-shirtii',em:'👕'},
    {fr:'Le pantalon',es:'Suruubaa',em:'👖'},
    {fr:'La robe',es:'Qanxaa / roobii dheeraa',em:'👗'},
    {fr:'La veste',es:'Jaakeetii',em:'🧥'},
    {fr:'Les chaussures',es:'Kophee',em:'👟'},
    {fr:'Le chapeau',es:'Gaachaa / tuuffaa',em:'🎩'},
    {fr:'Le manteau',es:'Kootii / uffata qabbanaa',em:'🧥'},
    {fr:'L\'écharpe',es:'Hidhata morma',em:'🧣'},
    {fr:'Le sac à main',es:'Baasii harka',em:'👜'},
    {fr:'La chemise',es:'Shurtii / kamiizii',em:'👔'},
    {fr:'La casquette',es:'Gaachaa gulaalaa',em:'🧢'},
    {fr:'Les chaussettes',es:'Kaawwii miilla',em:'🧦'},
    {fr:'Les gants',es:'Harkuu uffata',em:'🧤'},
    {fr:'Le short',es:'Suruubaa gabaabaa',em:'🩳'},
    {fr:'Le pull',es:'Puluubii / suweetera',em:'🧥'},
    {fr:'Le maillot de bain',es:'Uffata daakuu',em:'🩱'},
    {fr:'La jupe',es:'Qanxaa gabaabaa',em:'👗'},
    {fr:'La montre',es:'Sa\'atii harka',em:'⌚'},
    {fr:'Le slip',es:'Suruubaa keessaa',em:'🩲'},
    {fr:'Le bonnet',es:'Gaachaa oya',em:'🎿'},
    {fr:'Le soutien-gorge',es:'Braaziyeeraa',em:'👙'},
    {fr:'Le boxer',es:'Boksaraa',em:'🩳'},
    {fr:'La culotte',es:'Suruubaa keessaa dubartii',em:'🩲'}
   ],
   quiz10:[
    {q:'Comment dit-on «Le t-shirt» en oromo ? <span class="or">"Shaareetii" Faransaayin maal?</span>',opts:['Le pull','La chemise','Le t-shirt','La veste'],ans:2},
    {q:'Que signifie «Le pantalon» ? <span class="or">"Le pantalon" — hiikni isaa maal?</span>',opts:['Suruubaa gabaabaa','Suruubaa','Qanxaa','Roobii'],ans:1},
    {q:'Comment dit-on «Les chaussures» en oromo ? <span class="or">"Kophee" Faransaayin maal?</span>',opts:['Les chaussettes','Les gants','Les chaussures','Le chapeau'],ans:2},
    {q:'Que signifie «Le manteau» ? <span class="or">"Le manteau" — hiikni isaa maal?</span>',opts:['Hidhata morma','Jaakeetii','Gaachaa','Kootii / uffata qabbanaa'],ans:3},
    {q:'Comment dit-on «La casquette» en oromo ? <span class="or">"Gaachaa gulaalaa" Faransaayin maal?</span>',opts:['Le chapeau','La casquette','Le bonnet','Le pull'],ans:1},
    {q:'Que signifie «L\'écharpe» ? <span class="or">"L\'écharpe" — hiikni isaa maal?</span>',opts:['Harkuu uffata','Kootii','Hidhata morma','Gaachaa oya'],ans:2},
    {q:'Comment dit-on «La robe» en oromo ? <span class="or">"Qanxaa dheeraa" Faransaayin maal?</span>',opts:['La jupe','La robe','La veste','Le pull'],ans:1},
    {q:'Que signifie «Les chaussettes» ? <span class="or">"Les chaussettes" — hiikni isaa maal?</span>',opts:['Kophee','Harkuu uffata','Kaawwii miilla','Uffata daakuu'],ans:2}
   ]},

  {id:'corps',level:1,emoji:'🧍',
   name:'Le corps',
   sub:'Tête, bras, pied… <span class="or">Qaamaa</span>',
   words:[
    {fr:'La tête',es:'Mataa',em:'🗣️'},{fr:'Les bras / Le bras',es:'Harkaa / harkootni',em:'💪'},
    {fr:'La main / Les mains',es:'Harka / harkaotni',em:'✋'},
    {fr:'La jambe / Les jambes',es:'Miila / miilaotni',em:'🦵'},
    {fr:'Le pied / Les pieds',es:'Miila gadii / caafii',em:'🦶'},
    {fr:'L\'œil / Les yeux',es:'Ija / iji',em:'👀'},
    {fr:'Le dos',es:'Dugda',em:'🔙'},{fr:'Le ventre',es:'Garaa',em:'🫃'},
    {fr:'Le cerveau',es:'Sammuu',em:'🧠'},{fr:'L\'oreille / Les oreilles',es:'Gurra / gurrootni',em:'👂'},
    {fr:'Le nez',es:'Funyaan',em:'👃'},{fr:'La bouche',es:'Afaan / muccii',em:'👄'},
    {fr:'La dent / Les dents',es:'Ilkaan / ilkaanootni',em:'🦷'},
    {fr:'L\'os / Les os',es:'Lafee / lafeewwan',em:'🦴'},
    {fr:'Le cœur',es:'Onnee',em:'❤️'},{fr:'Le doigt / Les doigts',es:'Quba / qubaotni',em:'☝️'},
    {fr:'La langue',es:'Arraba',em:'👅'},{fr:'Les lèvres',es:'Mucucii',em:'💋'},
    {fr:'Les cheveux',es:'Rifeensa / furii',em:'💇‍♂️'},{fr:'Le cou',es:'Morma',em:'🧣'},
    {fr:'Les fesses',es:'Marga / fundo',em:'🍑'},
    {fr:'L\'ongle / Les ongles',es:'Qubee miila / harka',em:'💅'}
   ],
   quiz10:[
    {q:'Comment dit-on «La tête» en oromo ? <span class="or">"Mataa" Faransaayin maal?</span>',opts:['Le nez','La bouche','La tête','Le cou'],ans:2},
    {q:'Que signifie «Les yeux» ? <span class="or">"Les yeux" — hiikni isaa maal?</span>',opts:['Gurrootni','Funyaan','Mucucii','Iji'],ans:3},
    {q:'Comment dit-on «La main» en oromo ? <span class="or">"Harka" Faransaayin maal?</span>',opts:['Le pied','La jambe','Le bras','La main'],ans:3},
    {q:'Que signifie «Le nez» ? <span class="or">"Le nez" — hiikni isaa maal?</span>',opts:['Afaan','Funyaan','Gurra','Morma'],ans:1},
    {q:'Comment dit-on «La jambe» en oromo ? <span class="or">"Miila" Faransaayin maal?</span>',opts:['Le bras','La jambe','Le pied','Le dos'],ans:1},
    {q:'Que signifie «Le cerveau» ? <span class="or">"Le cerveau" — hiikni isaa maal?</span>',opts:['Onnee','Garaa','Sammuu','Lafee'],ans:2},
    {q:'Comment dit-on «Les dents» en oromo ? <span class="or">"Ilkaanootni" Faransaayin maal?</span>',opts:['Les lèvres','La langue','Les dents','Les oreilles'],ans:2},
    {q:'Que signifie «Le cœur» ? <span class="or">"Le cœur" — hiikni isaa maal?</span>',opts:['Sammuu','Onnee','Lafee','Dugda'],ans:1}
   ]},

  {id:'anim',level:1,emoji:'🐘',
   name:'Les animaux',
   sub:'Chat, chien, cheval… <span class="or">Bineensa</span>',
   words:[
    {fr:'Le chien',es:'Saree',em:'🐶'},{fr:'Le chat',es:'Adurree',em:'🐱'},
    {fr:'L\'oiseau',es:'Shimbiraa',em:'🐦'},{fr:'Le poisson',es:'Qurxumii',em:'🐟'},
    {fr:'Le cheval',es:'Farda',em:'🐴'},{fr:'La vache',es:'Sa\'aa / loon',em:'🐮'},
    {fr:'La poule',es:'Lukkuu',em:'🐔'},{fr:'Le lapin',es:'Raabbitii',em:'🐰'},
    {fr:'L\'âne',es:'Harree',em:'🫏'},{fr:'Le cochon',es:'Booyee',em:'🐷'},
    {fr:'L\'éléphant',es:'Arba',em:'🐘'},{fr:'Le tigre',es:'Qeerransaa',em:'🐯'},
    {fr:'L\'ours',es:'Arjii',em:'🐻'},{fr:'Le dauphin',es:'Qurxumii doolfinii',em:'🐬'},
    {fr:'La baleine',es:'Haroo / balayinii',em:'🐳'},{fr:'L\'aigle',es:'Harreessaa',em:'🦅'},
    {fr:'La grenouille',es:'Booyyee / bulbulaa',em:'🐸'},{fr:'Le serpent',es:'Bofa',em:'🐍'},
    {fr:'Le canard',es:'Boromii',em:'🦆'},{fr:'Le pingouin',es:'Pinguwinii',em:'🐧'},
    {fr:'Le papillon',es:'Labaalee',em:'🦋'},{fr:'L\'araignée',es:'Haraandhoo',em:'🕷️'},
    {fr:'Le moustique',es:'Salgee / masqoo',em:'🦟'},
    {fr:'La fourmi',es:'Raayyoo',em:'🐜'},{fr:'Le lézard',es:'Qoqobbii',em:'🦎'},
    {fr:'Le poulet',es:'Lukkuu (foon)',em:'🍗'},{fr:'Le coq',es:'Kormaa',em:'🐓'},
    {fr:'La chèvre',es:'Re\'ee',em:'🐐'},{fr:'L\'agneau',es:'Hoolaa / damma',em:'🐑'}
   ],
   quiz10:[
    {q:'Comment dit-on «Le chien» en oromo ? <span class="or">"Saree" Faransaayin maal?</span>',opts:['Le chat','Le cheval','Le chien','Le lapin'],ans:2},
    {q:'Que signifie «Le chat» ? <span class="or">"Le chat" — hiikni isaa maal?</span>',opts:['Saree','Adurree','Raabbitii','Shimbiraa'],ans:1},
    {q:'Comment dit-on «Le cheval» en oromo ? <span class="or">"Farda" Faransaayin maal?</span>',opts:['La vache','Le cheval','L\'ours','Le cochon'],ans:1},
    {q:'Que signifie «La poule» ? <span class="or">"La poule" — hiikni isaa maal?</span>',opts:['Boromii','Kormaa','Lukkuu','Raabbitii'],ans:2},
    {q:'Comment dit-on «L\'éléphant» en oromo ? <span class="or">"Arba" Faransaayin maal?</span>',opts:['Le tigre','La baleine','L\'éléphant','L\'ours'],ans:2},
    {q:'Que signifie «L\'âne» ? <span class="or">"L\'âne" — quel emoji correspond?</span>',opts:['🐷','🐴','🫏','🐐'],ans:2},
    {q:'Comment dit-on «Le papillon» en oromo ? <span class="or">"Labaalee" Faransaayin maal?</span>',opts:['La fourmi','Le papillon','L\'araignée','Le moustique'],ans:1},
    {q:'Que signifie «Le serpent» ? <span class="or">"Le serpent" — hiikni isaa maal?</span>',opts:['Qoqobbii','Booyyee','Bofa','Haraandhoo'],ans:2},
    {q:'Comment dit-on «Le moustique» en oromo ? <span class="or">"Salgee / masqoo" Faransaayin maal?</span>',opts:['La fourmi','Le papillon','L\'araignée','Le moustique'],ans:3},
    {q:'Que signifie «L\'agneau» ? <span class="or">"L\'agneau" — hiikni isaa maal?</span>',opts:['Sa\'aa','Booyee','Hoolaa','Re\'ee'],ans:2},
    {q:'Comment dit-on «Le coq» en oromo ? <span class="or">"Kormaa" Faransaayin maal?</span>',opts:['La poule','Le poulet','Le coq','Le canard'],ans:2},
    {q:'Que signifie «Le dauphin» ? <span class="or">"Le dauphin" — hiikni isaa maal?</span>',opts:['Haroo','Qurxumii','Qurxumii doolfinii','Balayinii'],ans:2}
   ]},

  {id:'verb',level:1,emoji:'📝',
   name:'Les verbes principaux',
   sub:'Être, avoir, aller… <span class="or">Lagatoota ijoo</span>',
   words:[
    {fr:'Je suis',es:'Ani nan ta\'a (être)',em:'🧑'},{fr:'J\'ai',es:'Qaba (avoir)',em:'🤲'},
    {fr:'Je parle',es:'Dubbadha (parler)',em:'🗣️'},{fr:'J\'habite',es:'Jiraadha (habiter)',em:'🏠'},
    {fr:'Je vais',es:'Deemaa (aller)',em:'🚶'},{fr:'Je mange',es:'Nyaadha (manger)',em:'🍽️'},
    {fr:'Je bois',es:'Dhugaa (boire)',em:'🥤'},{fr:'J\'aime',es:'Jaaladha (aimer)',em:'❤️'},
    {fr:'Je cours',es:'Fiigaa (courir)',em:'🏃‍♂️'},{fr:'Je dors',es:'Ciisaa (dormir)',em:'😴'},
    {fr:'Je marche',es:'Deema miilaan (marcher)',em:'🚶‍♂️'},{fr:'Je lis',es:'Dubbisa (lire)',em:'📖'},
    {fr:'J\'écris',es:'Barreessa (écrire)',em:'✍️'},{fr:'J\'écoute',es:'Dhagahaa (écouter)',em:'🎧'},
    {fr:'Je regarde',es:'Ilaala (regarder)',em:'👀'},{fr:'J\'apprends',es:'Baraa (apprendre)',em:'🧠'},
    {fr:'J\'achète',es:'Bita (acheter)',em:'🛒'},{fr:'Je vends',es:'Gurguradha (vendre)',em:'💰'},
    {fr:'Je donne',es:'Kennaa (donner)',em:'🤲'},{fr:'J\'appelle',es:'Waamaa (appeler)',em:'📞'},
    {fr:'Je cuisine',es:'Qopheessaa (cuisiner)',em:'🍳'},{fr:'Je nettoie',es:'Qulqulleessaa (nettoyer)',em:'🧹'},
    {fr:'Je me lave',es:'Dhiqadha (se laver)',em:'🧼'},{fr:'Je prends',es:'Fudhaa (prendre)',em:'🤲'},
    {fr:'Je pense',es:'Yaada (penser)',em:'🤔'},{fr:'Je conduis',es:'Konkolaachisaa (conduire)',em:'🚗'},
    {fr:'Je souris',es:'Koflaadha (sourire)',em:'😊'},{fr:'Je pars',es:'Deemaa (partir)',em:'🚪'},
    {fr:'Je paie',es:'Kaffalaa (payer)',em:'💳'},{fr:'J\'arrive',es:'Gahaa (arriver)',em:'🛬'},
    {fr:'Je demande',es:'Gaafadha (demander)',em:'🙋‍♂️'},{fr:'Je cherche',es:'Barbaadhaa (chercher)',em:'🔍'},
    {fr:'Je travaille',es:'Hojjedha (travailler)',em:'💼'},{fr:'J\'offre',es:'Kenna / reega (offrir)',em:'🎁'}
   ],
   quiz10:[
    {q:'Comment dit-on «J\'ai» en oromo ? <span class="or">"Qaba (avoir)" Faransaayin maal?</span>',opts:['Je suis','Je vais','J\'ai','Je parle'],ans:2},
    {q:'Que signifie «Je mange» ? <span class="or">"Je mange" — hiikni isaa maal?</span>',opts:['Dhugaa','Nyaadha','Ciisaa','Deema miilaan'],ans:1},
    {q:'Comment dit-on «Je vais» en oromo ? <span class="or">"Deemaa (aller)" Faransaayin maal?</span>',opts:['Je suis','J\'ai','Je viens','Je vais'],ans:3},
    {q:'Que signifie «Je parle» ? <span class="or">"Je parle" — hiikni isaa maal?</span>',opts:['Dhagahaa','Dubbisa','Dubbadha','Ilaala'],ans:2},
    {q:'Comment dit-on «Je dors» en oromo ? <span class="or">"Ciisaa (dormir)" Faransaayin maal?</span>',opts:['Je cours','Je dors','Je marche','Je lis'],ans:1},
    {q:'Que signifie «J\'achète» ? <span class="or">"J\'achète" — hiikni isaa maal?</span>',opts:['Gurguradha','Barbaadhaa','Kaffalaa','Bita'],ans:3},
    {q:'Comment dit-on «Je travaille» en oromo ? <span class="or">"Hojjedha (travailler)" Faransaayin maal?</span>',opts:['Je nettoie','Je cuisine','Je travaille','Je conduis'],ans:2},
    {q:'Que signifie «Je cherche» ? <span class="or">"Je cherche" — hiikni isaa maal?</span>',opts:['Argadha','Barbaadhaa','Gaafadha','Bita'],ans:1},
    {q:'Comment dit-on «Je paie» en oromo ? <span class="or">"Kaffalaa (payer)" Faransaayin maal?</span>',opts:['Je donne','Je prends','Je vends','Je paie'],ans:3},
    {q:'Que signifie «J\'apprends» ? <span class="or">"J\'apprends" — hiikni isaa maal?</span>',opts:['Barsiisaa','Dhagahaa','Baraa','Dubbisa'],ans:2},
    {q:'Comment dit-on «Je conduis» en oromo ? <span class="or">"Konkolaachisaa (conduire)" Faransaayin maal?</span>',opts:['Je cours','Je marche','Je conduis','Je pars'],ans:2},
    {q:'Que signifie «J\'offre» ? <span class="or">"J\'offre" — hiikni isaa maal?</span>',opts:['Bita','Barbaadhaa','Kenna / reega','Gurguradha'],ans:2}
   ]},

  {id:'pays',level:1,emoji:'🌍',
   name:'Les pays',
   sub:'France, Éthiopie… <span class="or">Biyyoota</span>',
   words:[
    {fr:'La France',es:'Faransaayii',em:'🇫🇷'},{fr:'L\'Éthiopie',es:'Itoophiyaa',em:'🇪🇹'},
    {fr:'L\'Espagne',es:'Ispeenii',em:'🇪🇸'},{fr:'L\'Italie',es:'Xaaliyaanii',em:'🇮🇹'},
    {fr:'Le Canada',es:'Kanadaa',em:'🇨🇦'},{fr:'Le Brésil',es:'Biraazil',em:'🇧🇷'},
    {fr:'La Colombie',es:'Kolombiiyaa',em:'🇨🇴'},{fr:'L\'Argentine',es:'Arjentiinaa',em:'🇦🇷'},
    {fr:'Le Mexique',es:'Meksikoo',em:'🇲🇽'},{fr:'La Russie',es:'Raashiyaa',em:'🇷🇺'},
    {fr:'La Chine',es:'Chaayinaa',em:'🇨🇳'},{fr:'Les États-Unis',es:'Ameerikaa Gamtooftuu',em:'🇺🇸'},
    {fr:'Le Japon',es:'Jappaan',em:'🇯🇵'},{fr:'L\'Allemagne',es:'Jarmanii',em:'🇩🇪'},
    {fr:'Le Royaume-Uni',es:'Biriteen',em:'🇬🇧'},{fr:'Le Portugal',es:'Porchugaal',em:'🇵🇹'},
    {fr:'La Belgique',es:'Beeljiyam',em:'🇧🇪'},{fr:'La Suisse',es:'Suwiizerlaand',em:'🇨🇭'},
    {fr:'L\'Afrique du Sud',es:'Afrikaa Kibbaa',em:'🇿🇦'},{fr:'Le Maroc',es:'Maarokoo',em:'🇲🇦'},
    {fr:'Le Kenya',es:'Keeniyaa',em:'🇰🇪'},{fr:'L\'Égypte',es:'Masrii / Eejipti',em:'🇪🇬'},
    {fr:'Le Sénégal',es:'Senagaal',em:'🇸🇳'},{fr:'L\'Inde',es:'Indiyaa',em:'🇮🇳'},
    {fr:'La Corée du Sud',es:'Kooriyaa Kibbaa',em:'🇰🇷'},{fr:'La Turquie',es:'Turkii',em:'🇹🇷'},
    {fr:'L\'Australie',es:'Ostiraaliyaa',em:'🇦🇺'},{fr:'L\'Arabie saoudite',es:'Arabiyaa Sa\'uudii',em:'🇸🇦'},
    {fr:'Israël',es:'Israa\'eel',em:'🇮🇱'},{fr:'La Nouvelle-Zélande',es:'Ziilaand Haaraa',em:'🇳🇿'}
   ],
   quiz10:[
    {q:'Comment dit-on «La France» en oromo ? <span class="or">"Faransaayii" Faransaayin maal?</span>',opts:['La Belgique','La France','La Suisse','Le Portugal'],ans:1},
    {q:'Que signifie «L\'Allemagne» ? <span class="or">"L\'Allemagne" — hiikni isaa maal?</span>',opts:['Ostiraaliyaa','Biriteen','Jarmanii','Denmaarki'],ans:2},
    {q:'Comment dit-on «Le Brésil» en oromo ? <span class="or">"Biraazil" Faransaayin maal?</span>',opts:['Le Pérou','Le Chili','Le Brésil','La Bolivie'],ans:2},
    {q:'Que signifie «Le Royaume-Uni» ? <span class="or">"Le Royaume-Uni" — hiikni isaa maal?</span>',opts:['Ayarlaand','Biriteen','Iskootlaand','Denmaarki'],ans:1},
    {q:'Comment dit-on «Le Maroc» en oromo ? <span class="or">"Maarokoo" Faransaayin maal?</span>',opts:['L\'Égypte','Le Sénégal','Le Maroc','L\'Afrique du Sud'],ans:2},
    {q:'Que signifie «La Corée du Sud» ? <span class="or">"La Corée du Sud" — hiikni isaa maal?</span>',opts:['Jappaan','Chaayinaa','Viiyeetnaami','Kooriyaa Kibbaa'],ans:3},
    {q:'Comment dit-on «L\'Inde» en oromo ? <span class="or">"Indiyaa" Faransaayin maal?</span>',opts:['L\'Iran','L\'Inde','L\'Irak','L\'Indonésie'],ans:1},
    {q:'Que signifie «La Suisse» ? <span class="or">"La Suisse" — hiikni isaa maal?</span>',opts:['Siwiiden','Sloweeniyaa','Suwiizerlaand','Slowaakiyaa'],ans:2},
    {q:'Comment dit-on «La Turquie» en oromo ? <span class="or">"Turkii" Faransaayin maal?</span>',opts:['La Tunisie','La Thaïlande','La Turquie','La Tanzanie'],ans:2},
    {q:'Que signifie «Les États-Unis» ? <span class="or">"Les États-Unis" — hiikni isaa maal?</span>',opts:['Kanadaa','Meksikoo','Ameerikaa Gamtooftuu','Kuba'],ans:2},
    {q:'Comment dit-on «Le Kenya» en oromo ? <span class="or">"Keeniyaa" Faransaayin maal?</span>',opts:['L\'Égypte','Le Maroc','Le Kenya','Le Sénégal'],ans:2},
    {q:'Que signifie «L\'Australie» ? <span class="or">"L\'Australie" — hiikni isaa maal?</span>',opts:['Ostiraaliyaa','Niwu Ziilaand','Fiijii','Paapuwa'],ans:0}
   ]},

  {id:'plan',level:1,emoji:'🌿',
   name:'Les plantes',
   sub:'Fleur, arbre, forêt… <span class="or">Biqiltuu</span>',
   words:[
    {fr:'La fleur',es:'Garbuu / biiftuu',em:'🌸'},{fr:'L\'arbre',es:'Muka',em:'🌳'},
    {fr:'L\'herbe',es:'Cirracha / qoraan',em:'🌿'},{fr:'La feuille',es:'Dahannoo / fardaas muka',em:'🍃'},
    {fr:'La rose',es:'Rooziis / biiftuu diimaa',em:'🌹'},{fr:'La forêt',es:'Bosonaa',em:'🌲'},
    {fr:'Le jardin',es:'Gardeenii / dachee biqiltuu',em:'🏡'}
   ],
   quiz10:[
    {q:'Comment dit-on «La fleur» en oromo ? <span class="or">"Garbuu / biiftuu" Faransaayin maal?</span>',opts:['La feuille','La fleur','L\'herbe','La rose'],ans:1},
    {q:'Que signifie «L\'arbre» ? <span class="or">"L\'arbre" — hiikni isaa maal?</span>',opts:['Qoraan','Cirracha','Muka','Garbuu'],ans:2},
    {q:'Comment dit-on «La rose» en oromo ? <span class="or">"Rooziis / biiftuu diimaa" Faransaayin maal?</span>',opts:['La fleur','La feuille','L\'herbe','La rose'],ans:3},
    {q:'Que signifie «La forêt» ? <span class="or">"La forêt" — hiikni isaa maal?</span>',opts:['Gardeenii','Bosonaa','Laga','Dirree'],ans:1},
    {q:'Comment dit-on «Le jardin» en oromo ? <span class="or">"Gardeenii" Faransaayin maal?</span>',opts:['La forêt','L\'arbre','Le jardin','La fleur'],ans:2}
   ]},

  {id:'salut',level:1,emoji:'👋',
   name:'Les salutations',
   sub:'Bonjour, merci… <span class="or">Nagaa / Erga</span>',
   words:[
    {fr:'Bonjour',es:'Akkam / Nagaa ganama',em:'🌅'},{fr:'Bonsoir',es:'Nagaa galgalaa',em:'🌆'},
    {fr:'Salut',es:'Eegee / akkam (salphatti)',em:'👋'},{fr:'Au revoir',es:'Nagaan deemi / tura',em:'👋'},
    {fr:'À bientôt',es:'Yeroo dhiyootti walargina',em:'⏱️'},{fr:'Bonne nuit',es:'Halkan nagaa',em:'🌙'},
    {fr:'Merci',es:'Galatoomaa',em:'🙏'},{fr:'S\'il vous plaît',es:'Maaloo (kabajaan)',em:'🤝'},
    {fr:'Pardon',es:'Dhiifama / maaloo',em:'🙇'},{fr:'Oui',es:'Eeyyee',em:'✅'},
    {fr:'Non',es:'Lakkii',em:'❌'},{fr:'Comment ça va ?',es:'Maal jirta? / Akkam jirta?',em:'🤗'},
    {fr:'Je vais bien, merci',es:'Nagaan jira, galatoomaa',em:'😊'},{fr:'Super !',es:'Baayee gaarii! / Ajaa\'ib!',em:'🌟'}
   ],
   quiz10:[
    {q:'Comment dit-on «Bonjour» en oromo ? <span class="or">"Nagaa ganama" Faransaayin maal?</span>',opts:['Salut','Bonsoir','Bonjour','Bonne nuit'],ans:2},
    {q:'Que signifie «Au revoir» ? <span class="or">"Au revoir" — hiikni isaa maal?</span>',opts:['Yeroo dhiyootti','Nagaan deemi','Eegee','Halkan nagaa'],ans:1},
    {q:'Comment dit-on «Merci» en oromo ? <span class="or">"Galatoomaa" Faransaayin maal?</span>',opts:['S\'il vous plaît','Pardon','Merci','Oui'],ans:2},
    {q:'Que signifie «À bientôt» ? <span class="or">"À bientôt" — hiikni isaa maal?</span>',opts:['Yeroo hundumaa','Yeroo dhiyootti walargina','Halkan nagaa','Eegee'],ans:1},
    {q:'Comment dit-on «S\'il vous plaît» en oromo ? <span class="or">"Maaloo (kabajaan)" Faransaayin maal?</span>',opts:['Merci','Pardon','S\'il vous plaît','Oui'],ans:2},
    {q:'Quand utilise-t-on «Bonsoir» ? <span class="or">"Bonsoir" — yoom fayyadamna?</span>',opts:['Ganama','Hojii irratti qofa','Galgala / halkan seenuu','Yeroo nagaa galuu'],ans:2},
    {q:'Que signifie «Comment ça va ?» ? <span class="or">"Comment ça va ?" — hiikni isaa maal?</span>',opts:['Eessa jirta?','Maqaan kee eenyu?','Maal jirta?','Umurii kee meeqa?'],ans:2},
    {q:'Comment dit-on «Oui» en oromo ? <span class="or">"Eeyyee" Faransaayin maal?</span>',opts:['Non','Oui','Pardon','Merci'],ans:1}
   ]},

  {id:'met',level:1,emoji:'💼',
   name:'Les professions',
   sub:'Médecin, cuisinier… <span class="or">Ogummaawwan</span>',
   words:[
    {fr:'Le professeur',es:'Barsiisaa / baarsisuu',em:'👩‍🏫'},{fr:'Le médecin',es:'Dokitaraa / walgaaraa',em:'👨‍⚕️'},
    {fr:'Le cuisinier',es:'Bishingootaa / qopheessaa nyaataa',em:'👨‍🍳'},{fr:'L\'étudiant(e)',es:'Barattuu / barataawwan',em:'🎓'},
    {fr:'Le vendeur',es:'Gurgurtaa / daldalaa',em:'🏪'},{fr:'Le serveur',es:'Simbituu / tajaajilaa',em:'🍽️'},
    {fr:'Le chauffeur',es:'Konkolaachisaa / shoofeeree',em:'🚗'},{fr:'L\'infirmier(ère)',es:'Naarsii / tajaajilaa mana yaalaa',em:'💉'}
   ],
   quiz10:[
    {q:'Comment dit-on «Le médecin» en oromo ? <span class="or">"Dokitaraa" Faransaayin maal?</span>',opts:['Le professeur','Le médecin','L\'infirmier','Le cuisinier'],ans:1},
    {q:'Que signifie «Le professeur» ? <span class="or">"Le professeur" — hiikni isaa maal?</span>',opts:['Barattuu','Hogganaa','Barsiisaa','Simbituu'],ans:2},
    {q:'Comment dit-on «Le cuisinier» en oromo ? <span class="or">"Bishingootaa" Faransaayin maal?</span>',opts:['Le serveur','Le vendeur','Le chauffeur','Le cuisinier'],ans:3},
    {q:'Que signifie «L\'étudiant(e)» ? <span class="or">"L\'étudiant(e)" — hiikni isaa maal?</span>',opts:['Barsiisaa','Barattuu','Dokitaraa','Gurgurtaa'],ans:1},
    {q:'Comment dit-on «L\'infirmier» en oromo ? <span class="or">"Naarsii" Faransaayin maal?</span>',opts:['Le médecin','Le professeur','L\'infirmier','Le serveur'],ans:2}
   ]},

  {id:'trans',level:1,emoji:'🚌',
   name:'Les transports',
   sub:'Bus, train, vélo… <span class="or">Geejjiba</span>',
   words:[
    {fr:'Le bus',es:'Baasii / otobisii',em:'🚌'},{fr:'Le train',es:'Ittii / gaara',em:'🚂'},
    {fr:'La voiture',es:'Konkolaataa',em:'🚗'},{fr:'Le vélo',es:'Baasiikilii',em:'🚴'},
    {fr:'Le métro',es:'Meetiroo',em:'🚇'},{fr:'Le taxi',es:'Taksii / baajajii',em:'🚕'},
    {fr:'L\'avion',es:'Xiyyaaraa',em:'✈️'},{fr:'Le ticket',es:'Bileetii / tikeetii',em:'🎫'}
   ],
   quiz10:[
    {q:'Comment dit-on «Le bus» en oromo ? <span class="or">"Baasii / otobisii" Faransaayin maal?</span>',opts:['Le train','Le métro','Le bus','Le taxi'],ans:2},
    {q:'Que signifie «La voiture» ? <span class="or">"La voiture" — hiikni isaa maal?</span>',opts:['Ittii','Baasiikilii','Konkolaataa','Baajajii'],ans:2},
    {q:'Comment dit-on «L\'avion» en oromo ? <span class="or">"Xiyyaaraa" Faransaayin maal?</span>',opts:['Le bateau','L\'avion','Le vélo','Le métro'],ans:1},
    {q:'Que signifie «Le vélo» ? <span class="or">"Le vélo" — hiikni isaa maal?</span>',opts:['Konkolaataa','Baajajii','Ittii','Baasiikilii'],ans:3},
    {q:'Comment dit-on «Le métro» en oromo ? <span class="or">"Meetiroo" Faransaayin maal?</span>',opts:['Le bus','Le taxi','Le métro','Le train'],ans:2}
   ]},

  {id:'lieux',level:1,emoji:'🏙️',
   name:'Les lieux importants',
   sub:'Marché, hôpital… <span class="or">Bakkoota murteessoo</span>',
   words:[
    {fr:'Le supermarché',es:'Suparmaarketii',em:'🛒'},{fr:'L\'école',es:'Mana barumsaa',em:'🏫'},
    {fr:'L\'hôpital',es:'Mana yaalaa / hospitaala',em:'🏥'},{fr:'Le parc',es:'Paarkii / dirree qoosaa',em:'🌳'},
    {fr:'La banque',es:'Baankii',em:'🏦'},{fr:'La pharmacie',es:'Farmaasiiyaa / dukkaana qoricha',em:'💊'},
    {fr:'L\'église',es:'Kiliisiyaa / chaarchii',em:'⛪'},{fr:'La mairie',es:'Mana nageenyaa / mootummaa magaalaa',em:'🏛️'},
    {fr:'Le champ',es:'Dirree / lafa qonna',em:'🌾'},{fr:'La rivière',es:'Laga / haroo xiqqaa',em:'🏞️'},
    {fr:'La rue',es:'Karaa / daandii',em:'🛣️'},{fr:'La ville',es:'Magaalaa',em:'🏙️'},
    {fr:'La montagne',es:'Tullu / gaarreen',em:'⛰️'},{fr:'L\'océan',es:'Galaanaa',em:'🌊'}
   ],
   quiz10:[
    {q:'Comment dit-on «La pharmacie» en oromo ? <span class="or">"Farmaasiiyaa" Faransaayin maal?</span>',opts:['La banque','L\'hôpital','La pharmacie','Le supermarché'],ans:2},
    {q:'Que signifie «L\'école» ? <span class="or">"L\'école" — hiikni isaa maal?</span>',opts:['Mana kitaabaa','Mana barumsaa','Yuniversitii','Mana qorannoo'],ans:1},
    {q:'Comment dit-on «L\'hôpital» en oromo ? <span class="or">"Mana yaalaa" Faransaayin maal?</span>',opts:['La pharmacie','La mairie','L\'hôpital','La banque'],ans:2},
    {q:'Que signifie «La mairie» ? <span class="or">"La mairie" — hiikni isaa maal?</span>',opts:['Kiliisiyaa','Mana murtii','Mana nageenyaa / mootummaa magaalaa','Gabaa'],ans:2},
    {q:'Comment dit-on «La rivière» en oromo ? <span class="or">"Laga" Faransaayin maal?</span>',opts:['L\'océan','La montagne','Le champ','La rivière'],ans:3},
    {q:'Que signifie «Le supermarché» ? <span class="or">"Le supermarché" — hiikni isaa maal?</span>',opts:['Gabaa','Suparmaarketii','Dukkaana','Abastoo'],ans:1},
    {q:'Comment dit-on «La ville» en oromo ? <span class="or">"Magaalaa" Faransaayin maal?</span>',opts:['La rue','Le champ','La ville','La montagne'],ans:2},
    {q:'Que signifie «La banque» ? <span class="or">"La banque" — hiikni isaa maal?</span>',opts:['Farmaasiiyaa','Baankii','Kasaa','Waajjira'],ans:1}
   ]},

  {id:'orient',level:1,emoji:'🧭',
   name:'S\'orienter',
   sub:'Gauche, droite… <span class="or">Kallattii</span>',
   words:[
    {fr:'À gauche',es:'Bitaa / gama bitaatti',em:'⬅️'},{fr:'À droite',es:'Mirga / gama mirgaatti',em:'➡️'},
    {fr:'Tout droit',es:'Kallattiin / diriiraan',em:'⬆️'},{fr:'À côté',es:'Cinaa / bira',em:'↔️'},
    {fr:'En face',es:'Fuuldura / guddaa',em:'🔄'},{fr:'Loin',es:'Fagoo',em:'🌅'},
    {fr:'Près',es:'Dhiyoo / cinaa',em:'📍'},{fr:'Le plan',es:'Kaartaa / maappii',em:'🗺️'}
   ],
   quiz10:[
    {q:'Comment dit-on «À gauche» en oromo ? <span class="or">"Gama bitaatti" Faransaayin maal?</span>',opts:['À droite','Tout droit','À gauche','En face'],ans:2},
    {q:'Que signifie «À droite» ? <span class="or">"À droite" — hiikni isaa maal?</span>',opts:['Gama bitaatti','Kallattiin','Cinaa','Gama mirgaatti'],ans:3},
    {q:'Comment dit-on «Tout droit» en oromo ? <span class="or">"Kallattiin / diriiraan" Faransaayin maal?</span>',opts:['À gauche','Tout droit','En face','À côté'],ans:1},
    {q:'Que signifie «En face» ? <span class="or">"En face" — hiikni isaa maal?</span>',opts:['Cinaa','Duubaa','Fuuldura','Dhiyoo'],ans:2},
    {q:'Comment dit-on «Près» en oromo ? <span class="or">"Dhiyoo / cinaa" Faransaayin maal?</span>',opts:['Loin','À côté','Près','En face'],ans:2}
   ]},

  {id:'sante',level:1,emoji:'🏥',
   name:'La santé',
   sub:'Médecin, pharmacie… <span class="or">Fayyaa</span>',
   words:[
    {fr:'Le médecin',es:'Dokitaraa / walgaaraa',em:'👨‍⚕️'},{fr:'L\'hôpital',es:'Mana yaalaa',em:'🏥'},
    {fr:'Le médicament',es:'Qoricha / dawaa',em:'💊'},{fr:'L\'ordonnance',es:'Waraqaa qoricha dokitaraa',em:'📋'},
    {fr:'Avoir mal',es:'Dhukkubachuu / rakkatuu',em:'🤕'},{fr:'La fièvre',es:'Ho\'aa qaamaa / dhukkuba ho\'aa',em:'🌡️'},
    {fr:'La toux',es:'Qufaa',em:'😮‍💨'},{fr:'La pharmacie',es:'Farmaasiiyaa',em:'🏪'},
    {fr:'L\'infirmier / L\'infirmière',es:'Naarsii',em:'👨‍⚕️'},{fr:'Le vaccin',es:'Tallaalaa',em:'💉'},
    {fr:'L\'injection',es:'Icciitii / inijeekshinii',em:'🩸'},{fr:'Le pansement',es:'Hidhataa madaa',em:'🩹'},
    {fr:'L\'ambulance',es:'Konkolaataa hatattamaa',em:'🚑'},{fr:'Les urgences',es:'Hatattamaa / mana yaalaa ariifachisaa',em:'🆘'},
    {fr:'Le patient',es:'Dhukkubsataa',em:'🛏️'},{fr:'La consultation',es:'Yaala dokitaraa',em:'📋'},
    {fr:'Le thermomètre',es:'Maaraqaa / termoomeetara',em:'🌡️'},{fr:'La tension artérielle',es:'Dhiibbaa dhiigaa',em:'🩺'}
   ],
   quiz10:[
    {q:'Comment dit-on «L\'hôpital» en oromo ? <span class="or">"Mana yaalaa" Faransaayin maal?</span>',opts:['La pharmacie','L\'hôpital','Les urgences','La consultation'],ans:1},
    {q:'Que signifie «La fièvre» ? <span class="or">"La fièvre" — hiikni isaa maal?</span>',opts:['Qufaa','Dhukkubachuu','Ho\'aa qaamaa','Madaa'],ans:2},
    {q:'Comment dit-on «Le vaccin» en oromo ? <span class="or">"Tallaalaa" Faransaayin maal?</span>',opts:['L\'injection','Le vaccin','Le pansement','Le médicament'],ans:1},
    {q:'Que signifie «L\'ambulance» ? <span class="or">"L\'ambulance" — hiikni isaa maal?</span>',opts:['Mana yaalaa','Hatattamaa','Konkolaataa hatattamaa','Dokitaraa'],ans:2},
    {q:'Comment dit-on «L\'ordonnance» en oromo ? <span class="or">"Waraqaa qoricha dokitaraa" Faransaayin maal?</span>',opts:['La consultation','Le médicament','L\'ordonnance','Le vaccin'],ans:2},
    {q:'Que signifie «Le pansement» ? <span class="or">"Le pansement" — hiikni isaa maal?</span>',opts:['Inijeekshinii','Termoomeetara','Hidhataa madaa','Qoricha'],ans:2},
    {q:'Comment dit-on «Le thermomètre» en oromo ? <span class="or">"Termoomeetara" Faransaayin maal?</span>',opts:['La tension','Le thermomètre','La fièvre','L\'injection'],ans:1},
    {q:'Que signifie «Les urgences» ? <span class="or">"Les urgences" — hiikni isaa maal?</span>',opts:['Dokitaraa tuuraa','Kutaa eegaa','Hatattamaa / ariifachisaa','Yaala'],ans:2}
   ]},

  {id:'objets',level:1,emoji:'🔑',
   name:'Objets du quotidien',
   sub:'Téléphone, clés… <span class="or">Wantoota guyyaa guyyaa</span>',
   words:[
    {fr:'Le téléphone',es:'Bilbilaa / mobaayilii',em:'📱'},{fr:'Les clés',es:'Cufaa / kilii',em:'🔑'},
    {fr:'Le portefeuille',es:'Wantoota maallaqqaa',em:'👛'},{fr:'Le sac à dos',es:'Baasii duubaa / moraalii',em:'🎒'},
    {fr:'Les lunettes',es:'Ibsaa ija',em:'👓'},{fr:'Le papier',es:'Waraqaa',em:'📄'},
    {fr:'Le stylo',es:'Qalmee / biiiroo',em:'🖊️'},{fr:'Les ciseaux',es:'Siizaraa / muraasaa',em:'✂️'},
    {fr:'Le chargeur',es:'Chaarjara / guutuu battery',em:'🔌'},{fr:'La bouteille',es:'Qooqaa / botelee',em:'🍶'}
   ],
   quiz10:[
    {q:'Comment dit-on «Les clés» en oromo ? <span class="or">"Cufaa / kilii" Faransaayin maal?</span>',opts:['Le stylo','Les ciseaux','Les clés','Le chargeur'],ans:2},
    {q:'Que signifie «Le téléphone» ? <span class="or">"Le téléphone" — hiikni isaa maal?</span>',opts:['Teebileetii','Mobaayilii / bilbilaa','Kompiyuutaraa','Raadiyoo'],ans:1},
    {q:'Comment dit-on «Le sac à dos» en oromo ? <span class="or">"Baasii duubaa / moraalii" Faransaayin maal?</span>',opts:['Le portefeuille','Le sac à main','Le sac à dos','Le chapeau'],ans:2},
    {q:'Que signifie «Le chargeur» ? <span class="or">"Le chargeur" — hiikni isaa maal?</span>',opts:['Kaabila','Adaaptara','Chaarjara','Baatarii'],ans:2},
    {q:'Comment dit-on «Le stylo» en oromo ? <span class="or">"Qalmee / biiiroo" Faransaayin maal?</span>',opts:['Le crayon','Le papier','Le stylo','Le livre'],ans:2},
    {q:'Que signifie «Les lunettes» ? <span class="or">"Les lunettes" — hiikni isaa maal?</span>',opts:['Dhaggeeffataa','Ibsaa ija','Harkuu uffata','Sa\'atii'],ans:1},
    {q:'Comment dit-on «Les ciseaux» en oromo ? <span class="or">"Siizaraa / muraasaa" Faransaayin maal?</span>',opts:['Le couteau','Les ciseaux','Le stylo','Le papier'],ans:1},
    {q:'Comment dit-on «Le portefeuille» en oromo ? <span class="or">"Wantoota maallaqqaa" Faransaayin maal?</span>',opts:['Le sac à dos','Les clés','Le portefeuille','Le téléphone'],ans:2}
   ]}
];

var LEVEL2_THEMES = [
  {id:'alpha2',level:2,emoji:'🔤',name:'L\'Alphabet',sub:'Épeler, téléphone… <span class="or">Qubee haalaa keessatti</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Maqaa bilbilaan hima',img:'📞',dialogue:[
      {s:'Bakkalcoo',fr:'Bonjour, quel est votre nom de famille ?',tr:'Akkam, maqaa maatii keessan maalidhaa?',side:'right'},
      {s:'Birtuu',fr:'Je m\'appelle Tadesse.',tr:'Maqaan koo Taaddasaa.',side:'left'},
      {s:'Bakkalcoo',fr:'Pouvez-vous épeler, s\'il vous plaît ?',tr:'Sirritti qubee qubeedhaan hima, maaloo?',side:'right'},
      {s:'Birtuu',fr:'T-A-D-E-S-S-E.',tr:'T-A-D-E-S-S-E.',side:'left'},
      {s:'Bakkalcoo',fr:'Merci, c\'est bien noté.',tr:'Galatoomaa, barreeffame.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Email address',img:'📧',dialogue:[
      {s:'Keessummeessaa',fr:'Quelle est votre adresse email ?',tr:'Teessoon email keessan maalidhaa?',side:'right'},
      {s:'Lalisaa',fr:'C\'est lalisa point birru arobase gmail point com.',tr:'Lalisa.birru@gmail.com.',side:'left'},
      {s:'Keessummeessaa',fr:'Pouvez-vous épeler le nom ?',tr:'Maqaa qubee qubeedhaan himu ni dandeessaa?',side:'right'},
      {s:'Lalisaa',fr:'L-A-L-I-S-A. Point. B-I-R-R-U.',tr:'L-A-L-I-S-A. Tuqaa. B-I-R-R-U.',side:'left'},
      {s:'Keessummeessaa',fr:'Parfait, merci beaucoup !',tr:'Baayee gaarii, galatoomaa!',side:'right'}
    ]},
    {label:'Sit. 3',title:'Maqaa karaa hima',img:'🏢',dialogue:[
      {s:'Hojjataa',fr:'Quelle est votre adresse ?',tr:'Teessoon keessan maalidhaa?',side:'right'},
      {s:'Caaltuu',fr:'Je vis rue Beaubien.',tr:'Karaa Boobiyaan jiraadha.',side:'left'},
      {s:'Hojjataa',fr:'Comment ça s\'écrit, Beaubien ?',tr:'Boobiyaan akkamitti barreeffama?',side:'right'},
      {s:'Caaltuu',fr:'B-E-A-U-B-I-E-N.',tr:'B-E-A-U-B-I-E-N.',side:'left'},
      {s:'Hojjataa',fr:'Très bien, merci.',tr:'Baayee gaarii, galatoomaa.',side:'right'}
    ]}
   ],
   vocab:['Épeler = Qubee qubeedhaan hima','La lettre = Qubee','Comment ça s\'écrit ? = Akkamitti barreeffama?','Pouvez-vous répéter ? = Deebi\'ii himi, maaloo?','C\'est noté = Barreeffame / galteeffame'],
   quiz:[
    {q:'Que signifie «Épeler» ? <span class="or">"Épeler" — hiikni isaa maal?</span>',opts:['Qubee qubeedhaan hima','Barreessa','Dubbadha','Dubbisa'],ans:0},
    {q:'Que signifie «Comment ça s\'écrit ?» ? <span class="or">"Comment ça s\'écrit ?" — hiikni isaa maal?</span>',opts:['Akkamitti dubbatama?','Maqaan kee eenyu?','Akkamitti barreeffama?','Qubeen meeqa qaba?'],ans:2},
    {q:'Que signifie «La lettre» ? <span class="or">"La lettre" — hiikni isaa maal?</span>',opts:['Jecha','Qubee','Gabaasaa','Kitaaba'],ans:1}
   ]},

  {id:'pres2',level:2,emoji:'🙋',name:'Se présenter',sub:'Rencontre, travail… <span class="or">Of beeksisuu</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Hiriyaa haaraa walbaruu',img:'🤝',dialogue:[
      {s:'Birookee',fr:'Salut ! Je m\'appelle Ana. Et toi ?',tr:'Eegee! Maqaan koo Birookee. Ati oo?',side:'left'},
      {s:'Damisee',fr:'Moi c\'est Pedro. Je viens d\'Éthiopie.',tr:'Ani Daamisee. Itoophiyaarraa dhufaa.',side:'right'},
      {s:'Birookee',fr:'Ah super ! Tu habites à Lyon ?',tr:'Ajaa\'ib! Liyoonitti jirtaa?',side:'left'},
      {s:'Damisee',fr:'Oui, depuis six mois. J\'ai vingt-huit ans.',tr:'Eeyyee, ji\'a jaha as. Waggaa digdama saddeet qaba.',side:'right'},
      {s:'Birookee',fr:'Bienvenue ! Tu parles très bien français !',tr:'Baga nagaan dhuftan! Afaan Faransaayii baayee gaarii dubbatta!',side:'left'}
    ]},
    {label:'Sit. 2',title:'Hojii keessatti of beeksisuu',img:'💼',dialogue:[
      {s:'Hoggantuun',fr:'Bonjour, je suis Madame Dupont.',tr:'Akkam, Adde Duupoon jedhama.',side:'right'},
      {s:'Taaddaleewaa',fr:'Bonjour Madame. Je m\'appelle Carlos Mora.',tr:'Akkam Adde. Maqaan koo Taaddalee Boggalee.',side:'left'},
      {s:'Hoggantuun',fr:'Quelle est votre profession ?',tr:'Hojiin keessan maalidhaa?',side:'right'},
      {s:'Taaddaleewaa',fr:'Je suis ingénieur. Je viens d\'Addis Abeba.',tr:'Injinara. Finfinneerraa dhufaa.',side:'left'},
      {s:'Hoggantuun',fr:'Enchantée, monsieur Mora.',tr:'Baasee gammadde, obbo Boggalee.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Mana barumsaatti galuun',img:'🏫',dialogue:[
      {s:'Simbituu',fr:'Bonjour, vous êtes nouveau ici ?',tr:'Akkam, asitti haaraa mootii?',side:'right'},
      {s:'Saalamaawit',fr:'Oui, je m\'appelle Luisa Pérez.',tr:'Eeyyee, maqaan koo Saalamaawit Dassaa.',side:'left'},
      {s:'Simbituu',fr:'Quelle est votre nationalité ?',tr:'Biyyummaan keessan maalidhaa?',side:'right'},
      {s:'Saalamaawit',fr:'Je suis éthiopienne, d\'Oromia. J\'ai trente ans.',tr:'Itoophiyaadha, Oromiyaarraa. Waggaa soddoma qaba.',side:'left'},
      {s:'Simbituu',fr:'Bienvenue à l\'école ! Bonne journée !',tr:'Mana barumsaatti baga nagaan dhufte! Guyyaa gaarii!',side:'right'}
    ]}
   ],
   vocab:['Je m\'appelle = Maqaan koo... jedhama','J\'ai ... ans = Waggaa ... qaba','Je viens de = ...rraa dhufaa','J\'habite à = ...tti jiraadha','Bienvenue ! = Baga nagaan dhuftan!','Enchanté(e) = Baasee gammadde'],
   quiz:[
    {q:'Que signifie «Bienvenue» ? <span class="or">"Bienvenue" — hiikni isaa maal?</span>',opts:['Nagaan deemi','Akkam / Nagaa','Baga nagaan dhuftan','Galatoomaa'],ans:2},
    {q:'Comment dit-on «J\'ai vingt ans» ? <span class="or">"Waggaa digdama qaba" Faransaayin maal?</span>',opts:['Je suis vingt ans','J\'ai vingt ans','Je viens vingt ans','J\'habite vingt'],ans:1},
    {q:'Que signifie «Enchanté(e)» ? <span class="or">"Enchanté(e)" — hiikni isaa maal?</span>',opts:['Akkam','Baasee gammadde','Galatoomaa','Dhiifama'],ans:1}
   ]},

  {id:'num2',level:2,emoji:'🔢',name:'Les nombres',sub:'Heure, téléphone… <span class="or">Lakkoofsa</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Sa\'atii gaafachuu',img:'⏰',dialogue:[
      {s:'Roobee',fr:'Excusez-moi, quelle heure est-il ?',tr:'Dhiifama, sa\'atiin meeqadha?',side:'left'},
      {s:'Dabbalee',fr:'Il est deux heures et demie.',tr:'Sa\'atii lama fi walakkaa.',side:'right'},
      {s:'Roobee',fr:'Merci beaucoup !',tr:'Baayee galatoomaa!',side:'left'},
      {s:'Dabbalee',fr:'De rien ! Bonne journée.',tr:'Wanti hin jiru! Guyyaa gaarii.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Lakkoofsa bilbilaa kennuu',img:'📱',dialogue:[
      {s:'Hiriyaa',fr:'C\'est quoi ton numéro de téléphone ?',tr:'Lakkoofsi bilbilaa kee meeqadha?',side:'right'},
      {s:'Geetuu',fr:'C\'est le zéro six, trente-deux, quinze, vingt, onze.',tr:'Kan 06 32 15 20 11 dha.',side:'left'},
      {s:'Hiriyaa',fr:'Zéro six, trente-deux... tu peux répéter ?',tr:'Kurnaa ja\'a, soddoma lama... deebi\'ii himi?',side:'right'},
      {s:'Geetuu',fr:'Bien sûr ! Zéro six - trente-deux - quinze - vingt - onze.',tr:'Eeyyee! 06 - 32 - 15 - 20 - 11.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Namoota meeqa jiraniiru gaafachuu',img:'👥',dialogue:[
      {s:'Keessummeessaa',fr:'Vous êtes combien de personnes ?',tr:'Namoota meeqa?',side:'right'},
      {s:'Hundeessaa',fr:'Nous sommes quatre : deux adultes et deux enfants.',tr:'Afur: gurguddaa lama fi daa\'immaan lama.',side:'left'},
      {s:'Keessummeessaa',fr:'Très bien. Vous avez réservé ?',tr:'Baayee gaarii. Dirqisiftanii jirtuu?',side:'right'},
      {s:'Hundeessaa',fr:'Oui, au nom de Tadesse. Pour vingt heures.',tr:'Eeyyee, Taaddasaa maqaatti. Sa\'atii digdamaarratti.',side:'left'}
    ]}
   ],
   vocab:['Quelle heure est-il ? = Sa\'atiin meeqadha?','Il est ... heures = Sa\'atii... dha','Combien ? = Meeqa?','Nous sommes = Nuti ... jirra','Le numéro = Lakkoofsa'],
   quiz:[
    {q:'Comment demande-t-on l\'heure ? <span class="or">Faransaayin akkamitti gaafatama?</span>',opts:['Quelle est l\'heure ?','Quelle heure est-il ?','Il est combien ?','C\'est l\'heure ?'],ans:1},
    {q:'Que signifie «Nous sommes quatre» ? <span class="or">"Nous sommes quatre" — hiikni isaa maal?</span>',opts:['Afur qabna','Nuti afur jirra','Isaan afur jiru','Afur jira'],ans:1},
    {q:'Que signifie «Deux adultes» ? <span class="or">"Deux adultes" — hiikni isaa maal?</span>',opts:['Namoota lama','Daa\'imman lama','Gurguddaa lama','Hiriyoota lama'],ans:2}
   ]},

  {id:'col2',level:2,emoji:'🎨',name:'Les couleurs',sub:'Vêtements, voiture… <span class="or">Halluu</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Uffata halluu',img:'👗',dialogue:[
      {s:'Hiriyaa',fr:'Tu aimes ma robe ?',tr:'Roobii koo jaalatta?',side:'right'},
      {s:'Caaltuu',fr:'Oui ! Elle est très belle. C\'est quelle couleur exactement ?',tr:'Eeyyee! Baayee bareedduu. Halluun isaa maaliidhaa?',side:'left'},
      {s:'Hiriyaa',fr:'C\'est violet avec des fleurs roses.',tr:'Urgessa halluu fi biiftuu roozii qaba.',side:'right'},
      {s:'Caaltuu',fr:'C\'est magnifique ! Le rose te va très bien.',tr:'Ajaa\'ib! Halluun roozii siif baayee bareedduu.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Konkolaataa dhabamee barbaacha',img:'🚗',dialogue:[
      {s:'Poolisii',fr:'C\'est quoi votre voiture ?',tr:'Konkolaataan keessan akkamiidhaa?',side:'right'},
      {s:'Daanyuu',fr:'C\'est une voiture rouge, une Renault.',tr:'Konkolaataa diimaa, Rinoo.',side:'left'},
      {s:'Poolisii',fr:'Rouge foncé ou rouge clair ?',tr:'Diimaa dukkanaa moo diimaa ifa?',side:'right'},
      {s:'Daanyuu',fr:'Rouge vif, presque orange.',tr:'Diimaa adii, burtukaanaa fakkaata.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Halluu mana filachuuf',img:'🖌️',dialogue:[
      {s:'Gurgurtaa',fr:'Quelle couleur pour votre salon ?',tr:'Kutaa keessummaa keessaniif halluu maalii barbaaddu?',side:'right'},
      {s:'Tigist',fr:'Je voudrais quelque chose de clair. Peut-être blanc cassé.',tr:'Waan ifa ta\'e barbaadaa. Belkamii adii ni ta\'a.',side:'left'},
      {s:'Gurgurtaa',fr:'Voici le blanc, le beige et le gris clair.',tr:'Kunoo adii, beejii fi garaacha ifaa.',side:'right'},
      {s:'Tigist',fr:'Je prends le beige, c\'est plus chaleureux.',tr:'Beejii fudhaa, ho\'aa caala.',side:'left'}
    ]}
   ],
   vocab:['La couleur = Halluu','Rouge = Diimaa','Bleu = Cuquliisa','Vert = Magariisa','Rose = Roozii','C\'est quelle couleur ? = Halluun isaa maaliidhaa?','Foncé = Dukkanaa','Clair = Ifaa'],
   quiz:[
    {q:'Comment demande-t-on la couleur ? <span class="or">Akkamiitti gaafatama?</span>',opts:['C\'est quelle couleur ?','Quelle est la couleur ?','De quelle couleur ?','Toutes les réponses'],ans:3},
    {q:'Que signifie «Rouge foncé» ? <span class="or">"Rouge foncé" — hiikni isaa maal?</span>',opts:['Diimaa ifaa','Diimaa adii','Diimaa dukkanaa','Burtukaana'],ans:2},
    {q:'Que signifie «Clair» ? <span class="or">"Clair" — hiikni isaa maal?</span>',opts:['Dukkanaa','Ifaa','Guddo','Bareedduu'],ans:1}
   ]},

  {id:'nour2',level:2,emoji:'🍽️',name:'La nourriture',sub:'Marché, restaurant… <span class="or">Nyaata</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Gabaa keessatti',img:'🥦',dialogue:[
      {s:'Gurgurtaa',fr:'Bonjour, qu\'est-ce qu\'il vous faut ?',tr:'Akkam, maal barbaadduu?',side:'right'},
      {s:'Warqituu',fr:'Bonjour ! Je voudrais des tomates et des carottes.',tr:'Akkam! Timaatimii fi karoota barbaadaa.',side:'left'},
      {s:'Gurgurtaa',fr:'Combien de kilos ?',tr:'Kiiloogiraamii meeqa?',side:'right'},
      {s:'Warqituu',fr:'Un kilo de tomates et cinq cents grammes de carottes.',tr:'Kiiloogiraamii tokko timaatimii fi giraamii dhibba shan karoota.',side:'left'},
      {s:'Gurgurtaa',fr:'Voilà, c\'est trois euros.',tr:'Kunoo, birrii sadii.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Mana nyaataa keessatti',img:'🍴',dialogue:[
      {s:'Simbituu',fr:'Vous avez choisi ?',tr:'Maal nyaachuu barbaaddu filattu?',side:'right'},
      {s:'Geetachoo',fr:'Oui. Je voudrais le poulet avec du riz, s\'il vous plaît.',tr:'Eeyyee. Foon lukkuu ruuzii wajjin, maaloo.',side:'left'},
      {s:'Simbituu',fr:'Et comme boisson ?',tr:'Dhugaatii maaltu?',side:'right'},
      {s:'Geetachoo',fr:'Une carafe d\'eau, s\'il vous plaît.',tr:'Bishaan tokko, maaloo.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Gabaa bituuf deemuu',img:'🛒',dialogue:[
      {s:'Lalisaa',fr:'Je dois faire les courses. Tu as besoin de quelque chose ?',tr:'Suparmaarketii deemuu qaba. Waan barbaadduu qabduu?',side:'left'},
      {s:'Girmaa',fr:'Achète du pain et des œufs.',tr:'Buddeena fi hanqaaquu bitadhu.',side:'right'},
      {s:'Lalisaa',fr:'D\'accord. Je voudrais aussi du fromage pour faire de l\'injera.',tr:'Tole. Chiiznii nis barbaadaa injeera gochuuf.',side:'left'},
      {s:'Girmaa',fr:'Bonne idée ! Et n\'oublie pas le beurre.',tr:'Yaada gaarii! Dhadhaa irraanfachuu dhiisi.',side:'right'}
    ]}
   ],
   vocab:['Je voudrais = Barbaadaa / barbaada turaa','Combien ? = Meeqa?','Un kilo = Kiiloogiraamii tokko','C\'est combien ? = Gatiin isaa meeqadha?','Les courses = Gabaa bituu','Vous avez choisi ? = Maal filattu?'],
   quiz:[
    {q:'Que signifie «Je voudrais du poulet» ? <span class="or">"Je voudrais du poulet" — hiikni isaa maal?</span>',opts:['Foon lukkuu qaba','Foon lukkuu barbaadaa','Foon lukkuu gurguraa','Foon lukkuu jaaladha'],ans:1},
    {q:'Comment dit-on «Les courses» ? <span class="or">"Gabaa bituu" Faransaayin maal?</span>',opts:['Le marché','Les courses','La liste','Les achats'],ans:1},
    {q:'Que signifie «Vous avez choisi ?» ? <span class="or">"Vous avez choisi ?" — hiikni isaa maal?</span>',opts:['Xumurtu?','Maal filattu?','Maal barbaaddu?','Qophaa\'aniittuu?'],ans:1}
   ]},

  {id:'bois2',level:2,emoji:'🥤',name:'Les boissons',sub:'Comptoir, invité… <span class="or">Dhugaatii</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Adda irratti gaafachuu',img:'☕',dialogue:[
      {s:'Daldalaa',fr:'Bonjour, vous désirez ?',tr:'Akkam, maal barbaadduu?',side:'right'},
      {s:'Tigist',fr:'Un café allongé, s\'il vous plaît.',tr:'Bunaa guutuu, maaloo.',side:'left'},
      {s:'Daldalaa',fr:'Sucre ?',tr:'Sukkaara?',side:'right'},
      {s:'Tigist',fr:'Non merci, sans sucre.',tr:'Galatoomaa lakkii, sukkaaraa malee.',side:'left'},
      {s:'Daldalaa',fr:'Voilà, c\'est un euro cinquante.',tr:'Kunoo, birrii tokko fi walakkaa.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Keessummaaf dhugaatii kennuu',img:'🍹',dialogue:[
      {s:'Masaraa',fr:'Qu\'est-ce que tu veux boire ?',tr:'Maal dhuguu barbaadda?',side:'right'},
      {s:'Keessumaa',fr:'De l\'eau, s\'il te plaît.',tr:'Bishaan, maaloo.',side:'left'},
      {s:'Masaraa',fr:'Eau plate ou gazeuse ?',tr:'Bishaan sadan moo gasii wajjin?',side:'right'},
      {s:'Keessumaa',fr:'Plate, merci. Et peut-être un jus après ?',tr:'Sadan, galatoomaa. Erga san juusii ni ta\'a?',side:'left'},
      {s:'Masaraa',fr:'Bien sûr ! J\'ai du jus d\'orange frais.',tr:'Eeyyee! Juusii burtukaana haraya qaba.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Bishaan suparmaarketii bituuf',img:'🛍️',dialogue:[
      {s:'Roobee',fr:'Excusez-moi, où est l\'eau en bouteille ?',tr:'Dhiifama, bishaan qooqaa eessaa argadha?',side:'left'},
      {s:'Hojjataa',fr:'Rayon numéro trois, au fond à gauche.',tr:'Kutaa lakkoofsa sadii, gara bitaatti duubatti.',side:'right'},
      {s:'Roobee',fr:'Je voudrais un pack de six bouteilles.',tr:'Packa qooqaa ja\'a barbaadaa.',side:'left'},
      {s:'Hojjataa',fr:'Il y a l\'eau de source et l\'eau minérale.',tr:'Bishaan burqaa fi bishaan mineeriilaa jira.',side:'right'}
    ]}
   ],
   vocab:['Vous désirez ? = Maal barbaadduu?','Sans sucre = Sukkaaraa malee','Eau plate = Bishaan sadan','Eau gazeuse = Bishaan gasii wajjin','Un pack = Pakka tokko','Le rayon = Kutaa / saanqaa'],
   quiz:[
    {q:'Que signifie «Sans sucre» ? <span class="or">"Sans sucre" — hiikni isaa maal?</span>',opts:['Sukkaara wajjin','Sukkaaraa malee','Sukkaara xiqqaa','Sukkaara adda ta\'e'],ans:1},
    {q:'Comment dit-on «Eau gazeuse» ? <span class="or">"Bishaan gasii wajjin" Faransaayin maal?</span>',opts:['Eau plate','Eau chaude','Eau gazeuse','Eau de source'],ans:2},
    {q:'Que signifie «Vous désirez ?» ? <span class="or">"Vous désirez ?" — hiikni isaa maal?</span>',opts:['Gatiin isaa meeqa?','Maal barbaadduu?','Waan qabduu?','Jaalaltuu?'],ans:1}
   ]},

  {id:'fam2',level:2,emoji:'👨‍👩‍👧',name:'La famille',sub:'Photos, enfants… <span class="or">Maatii</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Suuraa keessatti maatii dhiheessuu',img:'📷',dialogue:[
      {s:'Birookee',fr:'C\'est qui sur la photo ?',tr:'Suuraa keessa eenyu isaan?',side:'right'},
      {s:'Lalisaa',fr:'Là c\'est mon mari, et voici mes enfants.',tr:'Kunoo abbaa manaa koo, kanneen immoo daa\'imman koo.',side:'left'},
      {s:'Birookee',fr:'Ils sont adorables ! Tu as combien d\'enfants ?',tr:'Ajaa\'ib! Daa\'imman meeqa qabdaa?',side:'right'},
      {s:'Lalisaa',fr:'Trois : deux fils et une fille.',tr:'Sadii: ilmaan lama, intala tokko.',side:'left'},
      {s:'Birookee',fr:'Et tes parents, ils sont en Éthiopie ?',tr:'Abbaa fi haadhoon kee Itoophiyaattiittuu?',side:'right'},
      {s:'Lalisaa',fr:'Oui, ma mère et mon père vivent à Shashamane.',tr:'Eeyyee, haadha fi abbaan koo Shaashamannee jiraataa.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Obboloota',img:'👫',dialogue:[
      {s:'Ollaa',fr:'Tu as des frères et sœurs ?',tr:'Obboloota qabdaa?',side:'right'},
      {s:'Lataa',fr:'Oui, j\'ai deux frères et une sœur.',tr:'Eeyyee, obboloota dhiiraa lama fi obboleettii tokko qaba.',side:'left'},
      {s:'Ollaa',fr:'Tu es l\'aîné ou le plus jeune ?',tr:'Ilmoo hangafaa moo quxisummaadha?',side:'right'},
      {s:'Lataa',fr:'Je suis le plus jeune. Mon frère aîné a trente-cinq ans.',tr:'Quxisummaa. Obboleessa hangafan koo waggaa soddoma shan qaba.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Daa\'imman gaafachuu',img:'🧒',dialogue:[
      {s:'Hojjataa',fr:'Comment vont tes enfants ?',tr:'Daa\'imman kee maal jiruu?',side:'right'},
      {s:'Tigist',fr:'Très bien ! Ma fille entre à l\'école cette année.',tr:'Baayee gaarii! Intala koo kun waggaa kana mana barumsaa galti.',side:'left'},
      {s:'Hojjataa',fr:'Quel âge a-t-elle ?',tr:'Waggaa meeqa qabdi?',side:'right'},
      {s:'Tigist',fr:'Elle a six ans. Et mon fils a dix ans.',tr:'Waggaa ja\'a qabdi. Ilmi koo immoo waggaa kudhan qaba.',side:'left'}
    ]}
   ],
   vocab:['La famille = Maatii','Mes enfants = Daa\'imman koo','Mon mari = Abbaa manaa koo','Ma mère = Haadha koo','Mon père = Abbaa koo','L\'aîné = Hangafa','Le plus jeune = Quxisummaa'],
   quiz:[
    {q:'Que signifie «Mes enfants» ? <span class="or">"Mes enfants" — hiikni isaa maal?</span>',opts:['Maatii koo','Obboloota koo','Daa\'imman koo','Akaakoo koo'],ans:2},
    {q:'Comment dit-on «L\'aîné» ? <span class="or">"Hangafa" Faransaayin maal?</span>',opts:['Le plus jeune','Le grand','L\'aîné','Le vieux'],ans:2},
    {q:'Que signifie «Comment vont tes enfants ?» ? <span class="or">"Comment vont tes enfants ?" — hiikni isaa maal?</span>',opts:['Daa\'imman kee eessa jiruu?','Daa\'imman kee meeqa?','Daa\'imman kee maal jiruu?','Waggaa meeqa qabuu?'],ans:2}
   ]},

  {id:'emot2',level:2,emoji:'😄',name:'Les émotions',sub:'Tristesse, joie… <span class="or">Miira</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Maaliif hiriyaan gaddaa?',img:'😢',dialogue:[
      {s:'Tigist',fr:'Tu n\'as pas l\'air bien. Ça va ?',tr:'Toltuu hin fakkaattu. Maal jirta?',side:'right'},
      {s:'Geetachoo',fr:'Non, je suis triste. J\'ai des nouvelles de chez moi.',tr:'Lakkii, gaddaa. Oduu mana kiyyaa qaba.',side:'left'},
      {s:'Tigist',fr:'Qu\'est-ce qui se passe ?',tr:'Maal ta\'e?',side:'right'},
      {s:'Geetachoo',fr:'Ma grand-mère est malade.',tr:'Haadha-haadha koo dhukkubsataa jirti.',side:'left'},
      {s:'Tigist',fr:'Je suis vraiment désolée. Je suis là si tu as besoin.',tr:'Dhugaadhaan na gadda. Yoo na barbaadde asiin jira.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Dadhabuu ibsuu',img:'😴',dialogue:[
      {s:'Niitii',fr:'Tu rentres tard ! Tu es fatigué ?',tr:'Gara boodetti dhufte! Dadhabde?',side:'right'},
      {s:'Hundeessaa',fr:'Oui, je suis épuisé. C\'était une longue journée.',tr:'Eeyyee, baayee dadhabee. Guyyaan dheeraa ture.',side:'left'},
      {s:'Niitii',fr:'Tu veux manger quelque chose ?',tr:'Waan nyaachuu barbaadda?',side:'right'},
      {s:'Hundeessaa',fr:'Oui, j\'ai faim aussi. Je suis fatigué et stressé.',tr:'Eeyyee, beelaan nis jira. Dadhabee fi dhiphatee.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Oduu gaarii irraa gammachuu',img:'🎉',dialogue:[
      {s:'Caaltuu',fr:'J\'ai une grande nouvelle !',tr:'Oduu gurguddoo qaba!',side:'left'},
      {s:'Hiriyaa',fr:'Dis-moi ! Tu as l\'air super contente !',tr:'Naa himi! Baayee gammachuu fakkaatta!',side:'right'},
      {s:'Caaltuu',fr:'J\'ai trouvé du travail ! Je suis tellement joyeuse !',tr:'Hojii argadhe! Baayee gammachuu!',side:'left'},
      {s:'Hiriyaa',fr:'C\'est fantastique ! Je suis très heureuse pour toi !',tr:'Ajaa\'ib! Siif gammadee!',side:'right'}
    ]}
   ],
   vocab:['Triste = Gaddaa','Fatigué(e) = Dadhabaa','Joyeux/se = Gammadaa','Content(e) = Quufa / gammadaa','Je suis désolé(e) = Na gadda / dhiifama','Épuisé(e) = Baayee dadhabaa','Une bonne nouvelle = Oduu gaarii'],
   quiz:[
    {q:'Que signifie «Je suis épuisé» ? <span class="or">"Je suis épuisé" — hiikni isaa maal?</span>',opts:['Gaddaa','Dhukkubsataa','Baayee dadhabaa','Dhiphataa'],ans:2},
    {q:'Comment dit-on «Je suis désolé» ? <span class="or">"Na gadda / dhiifama" Faransaayin maal?</span>',opts:['Je suis content','Je suis désolé','Je suis fatigué','Je suis malade'],ans:1},
    {q:'Que signifie «Une bonne nouvelle» ? <span class="or">"Une bonne nouvelle" — hiikni isaa maal?</span>',opts:['Oduu hamaa','Kitaaba gaarii','Oduu gaarii','Sa\'atii gaarii'],ans:2}
   ]},

  {id:'log2',level:2,emoji:'🏠',name:'La maison',sub:'Appartement, ménage… <span class="or">Mana</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Mana kiraatti ilaaluu',img:'🏢',dialogue:[
      {s:'Manaataa',fr:'Voici le studio. Il y a un salon-cuisine et une salle de bain.',tr:'Kunoo mana xiqqaa. Kutaa keessummaa-booji\'aa fi mana dhiqannaa qaba.',side:'right'},
      {s:'Tigist',fr:'C\'est lumineux ! Il y a des toilettes séparées ?',tr:'Ibsaa dha! Mana buqqee adda ta\'ee qabaa?',side:'left'},
      {s:'Manaataa',fr:'Oui, les toilettes sont à côté de la salle de bain.',tr:'Eeyyee, mana buqqee mana dhiqannaa cina jira.',side:'right'},
      {s:'Tigist',fr:'C\'est combien le loyer par mois ?',tr:'Ji\'a tokkootti kiraatin isaa meeqadha?',side:'left'},
      {s:'Manaataa',fr:'Cinq cent cinquante euros, charges comprises.',tr:'Dhibba shan fi shantama yuuroo, hunda of keessaa qabatee.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Wanta dhabame barbaacha',img:'🔍',dialogue:[
      {s:'Daanyuu',fr:'Tu as vu mes clés ?',tr:'Cufa koo argte?',side:'right'},
      {s:'Tigist',fr:'No... regarde dans le salon.',tr:'Lakkii... kutaa keessummaa keessa ilaali.',side:'left'},
      {s:'Daanyuu',fr:'Non, elles ne sont pas là.',tr:'Lakkii, achii hin jiran.',side:'right'},
      {s:'Tigist',fr:'Essaie la cuisine, ou peut-être dans la chambre.',tr:'Booji\'aa yaalii, yookiin kutaa ciisichaa keessa ta\'a.',side:'left'},
      {s:'Daanyuu',fr:'Ah oui ! Elles étaient sur la table de la cuisine !',tr:'Eeyyee! Gabatee booji\'aa irratti turan!',side:'right'}
    ]},
    {label:'Sit. 3',title:'Hojii mana',img:'🧹',dialogue:[
      {s:'Caaltuu',fr:'C\'est ton tour de faire la vaisselle.',tr:'Siif sirna meeshaalee dhiquu.',side:'left'},
      {s:'Roobee',fr:'D\'accord. Et toi tu fais quoi ?',tr:'Tole. Ati maal goota?',side:'right'},
      {s:'Caaltuu',fr:'Je passe l\'aspirateur dans le salon.',tr:'Kutaa keessummaa vaakyummii godha.',side:'left'},
      {s:'Roobee',fr:'Et la chambre ?',tr:'Kutaa ciisichaa hoo?',side:'right'},
      {s:'Caaltuu',fr:'Je fais le lit après.',tr:'Siree booda godha.',side:'left'}
    ]}
   ],
   vocab:['Le loyer = Kiraa','La salle de bain = Mana dhiqannaa','Les toilettes = Mana buqqee','Le salon = Kutaa keessummaa','La cuisine = Booji\'aa','La chambre = Kutaa ciisichaa','Faire la vaisselle = Meeshaalee dhiquu'],
   quiz:[
    {q:'Que signifie «Le loyer» ? <span class="or">"Le loyer" — hiikni isaa maal?</span>',opts:['Mana','Kiraa','Kutaa','Waliigaltee'],ans:1},
    {q:'Comment dit-on «Faire la vaisselle» ? <span class="or">"Meeshaalee dhiquu" Faransaayin maal?</span>',opts:['Faire le lit','Passer l\'aspirateur','Faire la vaisselle','Nettoyer'],ans:2},
    {q:'Que signifie «Lumineux» ? <span class="or">"Lumineux" — hiikni isaa maal?</span>',opts:['Xiqqaa','Ibsaa / ifa','Dhageessisaa','Gurguddaa'],ans:1}
   ]},

  {id:'veth2',level:2,emoji:'👗',name:'Les vêtements',sub:'Matin, taille… <span class="or">Uffata</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Ganama uffachuu',img:'🌅',dialogue:[
      {s:'Ilma',fr:'Maman, je mets quoi aujourd\'hui ?',tr:'Haadhoo, har\'a maal ufa?',side:'right'},
      {s:'Haadha',fr:'Il fait froid, mets ton manteau et ton écharpe.',tr:'Qabbanaa\'aa dha, kootii kee fi hidhata morma kee ufi.',side:'left'},
      {s:'Ilma',fr:'Et mes chaussures rouges ?',tr:'Kophee koo diimaa hoo?',side:'right'},
      {s:'Haadha',fr:'Oui, et n\'oublie pas ton chapeau !',tr:'Eeyyee, tuuffaa kee irraanfachuu dhiisi!',side:'left'}
    ]},
    {label:'Sit. 2',title:'Saayizii sirrii bituuf',img:'🏪',dialogue:[
      {s:'Gurgurtaa',fr:'Bonjour, je peux vous aider ?',tr:'Akkam, gargaaruu danda\'a?',side:'right'},
      {s:'Caaltuu',fr:'Oui, je cherche ce pantalon en taille quarante.',tr:'Eeyyee, suruubaa kana saayizii afurtami barbaadaa.',side:'left'},
      {s:'Gurgurtaa',fr:'Un instant... voilà, en taille quarante.',tr:'Daqiiqaa... kunoo, saayizii afurtami.',side:'right'},
      {s:'Caaltuu',fr:'Merci, je peux l\'essayer ?',tr:'Galatoomaa, yaaluun ni danda\'amaa?',side:'left'},
      {s:'Gurgurtaa',fr:'Bien sûr, la cabine est là-bas.',tr:'Eeyyee, kutaan yaaluu achii jira.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Jaakeetii dhabame barbaacha',img:'🔍',dialogue:[
      {s:'Daanyuu',fr:'Excuse-moi, j\'ai oublié ma veste.',tr:'Dhiifama, jaakeetii koo irraanfadhe.',side:'left'},
      {s:'Simbituu',fr:'De quelle couleur est-elle ?',tr:'Halluun isaa maaliidhaa?',side:'right'},
      {s:'Daanyuu',fr:'Elle est noire, avec une fermeture éclair.',tr:'Gurraacha, kilqii wajjin.',side:'left'},
      {s:'Simbituu',fr:'Attendez... voilà une veste noire.',tr:'Eeggadhu... kunoo jaakeetii gurraacha.',side:'right'},
      {s:'Daanyuu',fr:'Oui c\'est la mienne ! Merci beaucoup !',tr:'Eeyyee kan kiyyaa! Baayee galatoomaa!',side:'left'}
    ]}
   ],
   vocab:['La veste = Jaakeetii','Le manteau = Kootii / uffata qabbanaa','La taille = Saayizii','Les chaussures = Kophee','La cabine d\'essayage = Kutaa yaaluu','Il fait froid = Qabbanaa\'aa dha'],
   quiz:[
    {q:'Que signifie «La taille» (dans les vêtements) ? <span class="or">"La taille" — hiikni isaa maal?</span>',opts:['Halluu','Gatii','Saayizii','Moodeelii'],ans:2},
    {q:'Comment dit-on «La cabine d\'essayage» ? <span class="or">"Kutaa yaaluu" Faransaayin maal?</span>',opts:['Le magasin','La cabine d\'essayage','Le comptoir','Le rayon'],ans:1},
    {q:'Que signifie «Il fait froid» ? <span class="or">"Il fait froid" — hiikni isaa maal?</span>',opts:['Ho\'aa dha','Qilleensaa dha','Qabbanaa\'aa dha','Adiin jira'],ans:2}
   ]},

  {id:'corps2',level:2,emoji:'🧍',name:'Le corps',sub:'Médecin, sport… <span class="or">Qaamaa</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dokitaaraatti eessa dhukkuba jennaan',img:'🏥',dialogue:[
      {s:'Dokitaraa',fr:'Qu\'est-ce qui ne va pas ?',tr:'Maal qabda?',side:'right'},
      {s:'Hundeessaa',fr:'J\'ai mal au dos et à la tête.',tr:'Dugda fi mataa koo na dhukkuba.',side:'left'},
      {s:'Dokitaraa',fr:'Depuis combien de temps ?',tr:'Yoomirraa kaasee?',side:'right'},
      {s:'Hundeessaa',fr:'Depuis deux jours. J\'ai aussi mal au ventre.',tr:'Guyyaa lama kaasee. Garaa nis na dhukkuba.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Ispoortii keessatti madaa',img:'⚽',dialogue:[
      {s:'Leenjistuu',fr:'Ça va ? Tu boites !',tr:'Maal jirta? Jilbeeffachuun deemaa jirta!',side:'right'},
      {s:'Daanyuu',fr:'J\'ai mal à la jambe. Je me suis blessé.',tr:'Miilaan koo na dhukkuba. Madaa\'e.',side:'left'},
      {s:'Leenjistuu',fr:'C\'est le genou ou la cheville ?',tr:'Jilba moo jirma miilaa?',side:'right'},
      {s:'Daanyuu',fr:'La cheville. Je ne peux pas poser le pied.',tr:'Jirma miilaa. Miila koo gad kaa\'uu hin danda\'u.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Nama ibsuu',img:'👤',dialogue:[
      {s:'Poolisii',fr:'Décrivez la personne que vous cherchez.',tr:'Nama barbaacha jirtu ibsaa.',side:'right'},
      {s:'Tigist',fr:'C\'est un homme grand, avec les yeux bleus.',tr:'Dhiira guddaa, ija cuquliisaa qaba.',side:'left'},
      {s:'Poolisii',fr:'Il a les cheveux de quelle couleur ?',tr:'Rifeensa isaa halluun maalidhaa?',side:'right'},
      {s:'Tigist',fr:'Il a les cheveux noirs, courts. Et il a une barbe.',tr:'Rifeensa gurraacha, gabaabaa qaba. Foon fuulaa nis qaba.',side:'left'}
    ]}
   ],
   vocab:['J\'ai mal à... = ...koo na dhukkuba','La tête = Mataa','Le dos = Dugda','La jambe = Miila','Le pied = Caafii miilaa','Depuis combien de temps ? = Yoomirraa kaasee?','Je me suis blessé = Madaa\'e'],
   quiz:[
    {q:'Comment dit-on «J\'ai mal à la tête» ? <span class="or">"Mataa koo na dhukkuba" Faransaayin maal?</span>',opts:['J\'ai mal à la jambe','J\'ai mal à la tête','J\'ai mal au dos','J\'ai mal au ventre'],ans:1},
    {q:'Que signifie «Je me suis blessé» ? <span class="or">"Je me suis blessé" — hiikni isaa maal?</span>',opts:['Dadhabee','Ho\'aa qaamaa qaba','Madaa\'e','Dhukkubsataa'],ans:2},
    {q:'Que signifie «Depuis combien de temps ?» ? <span class="or">"Depuis combien de temps ?" — hiikni isaa maal?</span>',opts:['Yeroo meeqa booda?','Yoomirraa kaasee?','Yeroo meeqaaf?','Sa\'atii meeqaatti?'],ans:1}
   ]},

  {id:'anim2',level:2,emoji:'🐘',name:'Les animaux',sub:'Mascotte, ferme… <span class="or">Bineensa</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Beelladaa kee waa\'ee hima',img:'🐶',dialogue:[
      {s:'Ollaa',fr:'C\'est ton chien ? Il est beau !',tr:'Saree kee? Bareedduu!',side:'right'},
      {s:'Caaltuu',fr:'Merci ! Il s\'appelle Coco. C\'est un labrador.',tr:'Galatoomaa! Maqaan isaa Kookoo. Labiraadoor dha.',side:'left'},
      {s:'Ollaa',fr:'Il a quel âge ?',tr:'Waggaa meeqa qaba?',side:'right'},
      {s:'Caaltuu',fr:'Il a trois ans. Il est très gentil.',tr:'Waggaa sadii qaba. Baayee toltuu dha.',side:'left'},
      {s:'Ollaa',fr:'Moi j\'ai un chat. Ils ne s\'aiment pas trop !',tr:'Ani adurree qaba. Baayee waliigaluu hin jaalatan!',side:'right'}
    ]},
    {label:'Sit. 2',title:'Karaa irratti saree waliin walitti bu\'uu',img:'🌳',dialogue:[
      {s:'Namicha',fr:'Attention, il est méchant ?',tr:'Eeggaddhu, na ciniinaa?',side:'right'},
      {s:'Daanyuu',fr:'Non, ne vous inquiétez pas, il est très doux.',tr:'Lakkii, hin yaadda\'iin, baayee toltuu dha.',side:'left'},
      {s:'Namicha',fr:'Je peux le caresser ?',tr:'Harkaan tuquu ni danda\'aa?',side:'right'},
      {s:'Daanyuu',fr:'Oui, bien sûr ! Il adore ça.',tr:'Eeyyee, eeyyee! Baayee jaaladha.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Qonnaa ilaaluu',img:'🐄',dialogue:[
      {s:'Qonnaataa',fr:'Bienvenue à la ferme ! Voilà les vaches.',tr:'Qonnaatti baga nagaan dhufte! Kunoo sa\'ootni.',side:'right'},
      {s:'Daa\'imaa',fr:'Oh ! Et les poules, elles sont où ?',tr:'Oo! Lukkuuwwan eessa jiru?',side:'left'},
      {s:'Qonnaataa',fr:'Les poules sont dans le poulailler. Et voilà le cheval !',tr:'Lukkuuwwan manaa lukkuuu keessa jiru. Kunoo fardaa!',side:'right'},
      {s:'Daa\'imaa',fr:'Je peux monter à cheval ?',tr:'Farda irratti olbahuun ni danda\'amaa?',side:'left'},
      {s:'Qonnaataa',fr:'Oui, avec le casque bien sûr !',tr:'Eeyyee, hulluuqqoo wajjin eeyyee!',side:'right'}
    ]}
   ],
   vocab:['Le chien = Saree','Le chat = Adurree','La vache = Sa\'aa / loon','La poule = Lukkuu','Le cheval = Farda','Il est doux = Toltuu / manso dha','La ferme = Qonnaa / qotee bulaa'],
   quiz:[
    {q:'Que signifie «Il est doux» (pour un animal) ? <span class="or">"Il est doux" — hiikni isaa maal?</span>',opts:['Fokkuu dha','Toltuu / manso dha','Hamaa dha','Gurguddaa dha'],ans:1},
    {q:'Comment dit-on «La ferme» ? <span class="or">"Qonnaa / qotee bulaa" Faransaayin maal?</span>',opts:['Le jardin','La forêt','La ferme','Le champ'],ans:2},
    {q:'Que signifie «Je peux le caresser ?» ? <span class="or">"Je peux le caresser ?" — hiikni isaa maal?</span>',opts:['Fudhachuu ni danda\'aa?','Harkaan tuquu ni danda\'aa?','Ilaaluu ni danda\'aa?','Kaa\'uu ni danda\'aa?'],ans:1}
   ]},

  {id:'verb2',level:2,emoji:'📝',name:'Les verbes',sub:'Routine, goûts… <span class="or">Lagatoota</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Hojii guyyaa guyyaa',img:'⏰',dialogue:[
      {s:'Hojjataa',fr:'Tu te lèves à quelle heure ?',tr:'Sa\'atii meeqaatti ka\'ata?',side:'right'},
      {s:'Hundeessaa',fr:'Je me lève à six heures. Je mange, puis je vais au travail.',tr:'Sa\'atii ja\'aatti ka\'a. Nyaadhee erga san hojii deemsisa.',side:'left'},
      {s:'Hojjataa',fr:'Et le soir, tu fais quoi ?',tr:'Galgala maal goota?',side:'right'},
      {s:'Hundeessaa',fr:'Je mange, je lis un peu et je dors tôt.',tr:'Nyaadhee daqiiqaa dubbisee sa\'atii duraan ciisaa.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Jaalala ibsuu',img:'❤️',dialogue:[
      {s:'Hiriyaa',fr:'Tu aimes la cuisine française ?',tr:'Nyaata Faransaayii jaalatta?',side:'right'},
      {s:'Caaltuu',fr:'Oui, j\'aime beaucoup ! Je mange souvent du fromage.',tr:'Eeyyee, baayee jaaladha! Yeroo hedduu chiiznii nyaadha.',side:'left'},
      {s:'Hiriyaa',fr:'Et tu aimes le vin ?',tr:'Wayinii jaalattaa?',side:'right'},
      {s:'Caaltuu',fr:'Je bois un peu de vin, mais je préfère le jus.',tr:'Wayinii xiqqaa dhuga, garuu juusii caala jaaladha.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Ammas hojjetaa jira',img:'🏃',dialogue:[
      {s:'Abbaasaa',fr:'Qu\'est-ce que tu fais maintenant ?',tr:'Amma maal goota?',side:'right'},
      {s:'Daanyuu',fr:'Je parle au téléphone. J\'ai un client.',tr:'Bilbiladhaa jira. Maamilaan qaba.',side:'left'},
      {s:'Abbaasaa',fr:'D\'accord. Et tu vas à la réunion à midi ?',tr:'Tole. Walga\'ii guyyaa walakkaarratti ni deemtaa?',side:'right'},
      {s:'Daanyuu',fr:'Oui, je vais à la réunion. Je suis prêt.',tr:'Eeyyee, walga\'iitti deemsisa. Qophaa\'ee jira.',side:'left'}
    ]}
   ],
   vocab:['Je vais = Deemaa','Je mange = Nyaadha','Je parle = Dubbadha','J\'aime = Jaaladha','Je bois = Dhugaa','J\'habite = Jiraadha','Je suis = Nan ta\'a / jira','J\'ai = Qaba'],
   quiz:[
    {q:'Que signifie «Je vais au travail» ? <span class="or">"Je vais au travail" — hiikni isaa maal?</span>',opts:['Hojii qaba','Hojii deemsisa','Hojii barbaacha jira','Hojii jaaladha'],ans:1},
    {q:'Comment dit-on «Je bois du jus» ? <span class="or">"Juusii dhugaa" Faransaayin maal?</span>',opts:['Je mange du jus','Je vais du jus','Je bois du jus','J\'ai du jus'],ans:2},
    {q:'Que signifie «J\'aime beaucoup» ? <span class="or">"J\'aime beaucoup" — hiikni isaa maal?</span>',opts:['Hin jaaladu','Xiqqaan jaaladha','Baayee jaaladha','Hin beeku'],ans:2}
   ]},

  {id:'pays2',level:2,emoji:'🌍',name:'Les pays',sub:'Nationalité, voyages… <span class="or">Biyyoota</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Biyyummaa gaafachuu',img:'🗺️',dialogue:[
      {s:'Ollaa',fr:'D\'où venez-vous ?',tr:'Eessaarraa dhuftanii?',side:'right'},
      {s:'Tigist',fr:'Je viens d\'Éthiopie. Et vous ?',tr:'Itoophiyaarraa dhufaa. Isin oo?',side:'left'},
      {s:'Ollaa',fr:'Je suis française, de Lyon.',tr:'Ani Faransaayii, Liyoonii.',side:'right'},
      {s:'Tigist',fr:'Ah ! Et vous connaissez le Kenya aussi ?',tr:'Oo! Keeniyaa nis beektuu?',side:'left'},
      {s:'Ollaa',fr:'Non, mais j\'adorerais y aller !',tr:'Lakkii, garuu achitti deemuu baayee barbaadaa!',side:'right'}
    ]},
    {label:'Sit. 2',title:'Boqonnaa darbe waa\'ee hima',img:'🏖️',dialogue:[
      {s:'Hojjataa',fr:'Tu es allé où en vacances ?',tr:'Boqonnaa keessatti eessa deemte?',side:'right'},
      {s:'Hundeessaa',fr:'Je suis allé en France, à Paris.',tr:'Faransaayii, Paarisitti deeme.',side:'left'},
      {s:'Hojjataa',fr:'C\'était bien ?',tr:'Miidhagaa ture?',side:'right'},
      {s:'Hundeessaa',fr:'C\'était magnifique ! Et la nourriture était délicieuse.',tr:'Baayee miidhagaa ture! Nyaataan isaa mi\'aawaa ture.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Biyya deemuu barbaaddu',img:'✈️',dialogue:[
      {s:'Hiriyaa',fr:'Si tu pouvais voyager, tu irais où ?',tr:'Yoo socho\'uu dandeesse, eessa deemta turte?',side:'right'},
      {s:'Caaltuu',fr:'J\'irais au Canada. J\'adore la nature.',tr:'Kanadaatti deemsisa turte. Uumaa baayee jaaladha.',side:'left'},
      {s:'Hiriyaa',fr:'Moi je rêve d\'aller en Éthiopie.',tr:'Ani Itoophiyaatti deemuu abdii qaba.',side:'right'},
      {s:'Caaltuu',fr:'Oh ! C\'est un pays magnifique. J\'aime aussi l\'Italie.',tr:'Oo! Biyyi miidhagaadha. Xaaliyaaniin nis jaaladha.',side:'left'}
    ]}
   ],
   vocab:['D\'où venez-vous ? = Eessaarraa dhuftanii?','Je viens de = ...rraa dhufaa','Les vacances = Boqonnaa / gurbaa','C\'était = Ture','J\'irais = Deemsisa turte','Je rêve de = Abdii qaba / hawwa'],
   quiz:[
    {q:'Comment demande-t-on «D\'où venez-vous ?» ? <span class="or">Faransaayin akkamitti gaafatama?</span>',opts:['Tu viens d\'où ?','D\'où venez-vous ?','Quelle est ta nationalité ?','Tu habites où ?'],ans:1},
    {q:'Que signifie «J\'irais au Canada» ? <span class="or">"J\'irais au Canada" — hiikni isaa maal?</span>',opts:['Kanadaatti deeme','Kanadatti jiraadha','Kanadaatti deemsisa turte','Kanadaa barbaadaa'],ans:2},
    {q:'Que signifie «Je rêve de voyager» ? <span class="or">"Je rêve de voyager" — hiikni isaa maal?</span>',opts:['Kaleessa socho\'e','Socho\'uu hawwa / abdii qaba','Bakka dirqisifadhe','Duraan socho\'uu jaaladhe'],ans:1}
   ]},

  {id:'plan2',level:2,emoji:'🌿',name:'Les plantes',sub:'Fleuriste, jardin… <span class="or">Biqiltuu</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Biiftuu dukkaana keessatti bituuf',img:'💐',dialogue:[
      {s:'Biiftuu gurgurtaa',fr:'Bonjour, qu\'est-ce que je vous sers ?',tr:'Akkam, maal si tajaajila?',side:'right'},
      {s:'Warqituu',fr:'Je voudrais un bouquet de roses rouges, s\'il vous plaît.',tr:'Qooboo rooziis diimaa barbaadaa, maaloo.',side:'left'},
      {s:'Biiftuu gurgurtaa',fr:'Pour une occasion spéciale ?',tr:'Yeroo addaaf?',side:'right'},
      {s:'Warqituu',fr:'Oui, pour l\'anniversaire de ma mère.',tr:'Eeyyee, guyyaa dhalootaa haadhaa koof.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Biqiltuu mana bishaan xuuxuu',img:'🪴',dialogue:[
      {s:'Ollaa',fr:'Tu peux arroser mes plantes cette semaine ?',tr:'Torbee kana biqiltuu koo bishaan gochuu ni dandeessaa?',side:'right'},
      {s:'Caaltuu',fr:'Bien sûr ! Combien de fois par jour ?',tr:'Eeyyee! Guyyaatti yeroo meeqa?',side:'left'},
      {s:'Ollaa',fr:'Une fois par jour, le matin.',tr:'Guyyaatti yeroo tokko, ganama.',side:'right'},
      {s:'Caaltuu',fr:'D\'accord, je mets la plante près de la fenêtre.',tr:'Tole, biqiltuu foddaa cina kaa\'a.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Paarkii keessa deemuu',img:'🌳',dialogue:[
      {s:'Daanyuu',fr:'Regarde ces arbres, ils sont magnifiques !',tr:'Mukicha ilaalii, baayee miidhagaadhu!',side:'right'},
      {s:'Tigist',fr:'Oui ! Et les fleurs dans le jardin sont belles aussi.',tr:'Eeyyee! Biiftuun gardeenii keessa jiru nis bareedduu.',side:'left'},
      {s:'Daanyuu',fr:'C\'est quoi comme arbre ça ?',tr:'Mukin kun gosa maaliidhaa?',side:'right'},
      {s:'Tigist',fr:'C\'est un chêne. Et là c\'est une rose.',tr:'Muka Isheen. Achan rooziis biiftuu.',side:'left'}
    ]}
   ],
   vocab:['La fleur = Garbuu / biiftuu','L\'arbre = Muka','La rose = Rooziis / biiftuu diimaa','La feuille = Dahannoo muka','Arroser = Bishaan gochuu / sararuu','Le jardin = Gardeenii','Le bouquet = Qooboo biiftuu'],
   quiz:[
    {q:'Comment dit-on «Arroser les plantes» ? <span class="or">"Bishaan gochuu" Faransaayin maal?</span>',opts:['Planter les fleurs','Arroser les plantes','Couper les arbres','Mettre les roses'],ans:1},
    {q:'Que signifie «Le bouquet» ? <span class="or">"Le bouquet" — hiikni isaa maal?</span>',opts:['Gardeenii','Muka','Qooboo biiftuu','Garbuu'],ans:2},
    {q:'Que signifie «Une fois par jour» ? <span class="or">"Une fois par jour" — hiikni isaa maal?</span>',opts:['Guyyaatti yeroo lama','Torbatti yeroo tokko','Guyyaatti yeroo tokko','Sa\'atiitti deddeebi\'aa'],ans:2}
   ]},

  {id:'salut2',level:2,emoji:'👋',name:'Les salutations',sub:'Magasin, voisin… <span class="or">Nagaa</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Dukkaana seenuu',img:'🏪',dialogue:[
      {s:'Maamilaa',fr:'Bonjour !',tr:'Akkam!',side:'left'},
      {s:'Gurgurtaa',fr:'Bonjour ! Bienvenue. Je peux vous aider ?',tr:'Akkam! Baga nagaan dhufte. Gargaaruu ni danda\'aa?',side:'right'},
      {s:'Maamilaa',fr:'Non merci, je regarde juste.',tr:'Galatoomaa lakkii, ilaaluma jira.',side:'left'},
      {s:'Gurgurtaa',fr:'Bien sûr ! N\'hésitez pas si vous avez besoin.',tr:'Eeyyee! Yoo waan barbaadde jiraate na gaafadhu.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Ollaa fuuldura laaftoo keessatti',img:'🛗',dialogue:[
      {s:'Ollaa',fr:'Bonsoir ! Vous rentrez tard ce soir.',tr:'Nagaa galgalaa! Har\'a galgala dhufte.',side:'right'},
      {s:'Caaltuu',fr:'Bonsoir ! Oui, j\'étais au travail.',tr:'Nagaa galgalaa! Eeyyee, hojii irraan ture.',side:'left'},
      {s:'Ollaa',fr:'Ah, bonne soirée quand même !',tr:'Oo, galgala gaarii!',side:'right'},
      {s:'Caaltuu',fr:'Merci, vous aussi ! À bientôt !',tr:'Galatoomaa, isinillee! Yeroo dhiyootti!',side:'left'}
    ]},
    {label:'Sit. 3',title:'Nagaa dhumaatii dura',img:'🚪',dialogue:[
      {s:'Tigist',fr:'Bon, je dois y aller maintenant.',tr:'Ee, amma deemuu qaba.',side:'left'},
      {s:'Hundeessaa',fr:'Déjà ? Bonne route ! Et fais attention.',tr:'Ammallee? Gara gaarii! Ofiigarteessa.',side:'right'},
      {s:'Tigist',fr:'Merci ! À bientôt ! Embrasse ta famille !',tr:'Galatoomaa! Yeroo dhiyootti! Maatii kee nagaa geessisi!',side:'left'},
      {s:'Hundeessaa',fr:'Bonne nuit ! Prends soin de toi !',tr:'Halkan nagaa! Ofiigarteessa!',side:'right'}
    ]}
   ],
   vocab:['Bonjour = Akkam / Nagaa','Bonsoir = Nagaa galgalaa','Au revoir = Nagaan deemi','À bientôt = Yeroo dhiyootti walargina','Bonne nuit = Halkan nagaa','Merci = Galatoomaa','S\'il vous plaît = Maaloo'],
   quiz:[
    {q:'Que signifie «À bientôt» ? <span class="or">"À bientôt" — hiikni isaa maal?</span>',opts:['Gara dhumaa nagaan tura','Yeroo dhiyootti walargina','Nagaa ganama','Halkan nagaa'],ans:1},
    {q:'Quand utilise-t-on «Bonsoir» ? <span class="or">"Bonsoir" — yoom fayyadamna?</span>',opts:['Ganama qofa','Hojii irratti qofa','Galgala / halkan seenuu','Yeroo dhumaatii qofa'],ans:2},
    {q:'Que signifie «Bonne route !» ? <span class="or">"Bonne route !" — hiikni isaa maal?</span>',opts:['Boqonnaa gaarii','Nyaata gaarii','Gara gaarii / socho\'uu gaarii','Hojii gaarii'],ans:2}
   ]},

  {id:'met2',level:2,emoji:'💼',name:'Les professions',sub:'Demander, expliquer… <span class="or">Ogummaa</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Hojii gaafachuu',img:'🤝',dialogue:[
      {s:'Ollaa',fr:'Qu\'est-ce que vous faites dans la vie ?',tr:'Jireenya keessatti maal hojjetta?',side:'right'},
      {s:'Geetachoo',fr:'Je suis cuisinier dans un restaurant.',tr:'Mana nyaataa keessatti bishingootaa.',side:'left'},
      {s:'Ollaa',fr:'Ah, comme c\'est bien ! Et vous travaillez le week-end ?',tr:'Ajaa\'ib! Torbanitti hojjettaa?',side:'right'},
      {s:'Geetachoo',fr:'Oui, souvent. C\'est mon métier depuis dix ans.',tr:'Eeyyee, yeroo hedduu. Ogummaa koo waggaa kudhanaa ture.',side:'left'}
    ]},
    {label:'Sit. 2',title:'Hojii ammaatii waa\'ee hima',img:'💻',dialogue:[
      {s:'Hiriyaa',fr:'Tu travailles où maintenant ?',tr:'Amma eessa hojjetta?',side:'right'},
      {s:'Warqituu',fr:'Je suis infirmière à l\'hôpital Saint-Jean.',tr:'Mana yaalaa Sentin Jeen keessatti naarsii dha.',side:'left'},
      {s:'Hiriyaa',fr:'C\'est loin de chez toi ?',tr:'Mana keetirraa fagoo?',side:'right'},
      {s:'Warqituu',fr:'Non, vingt minutes en bus. J\'aime beaucoup mon travail.',tr:'Lakkii, daqiiqaa digdama baasiidhaan. Hojii koo baayee jaaladha.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Hawwii hojii',img:'🌟',dialogue:[
      {s:'Barsiisaa',fr:'Quel est le métier de tes rêves ?',tr:'Hawwii keessan hojiin isaa maalidhaa?',side:'right'},
      {s:'Barattuu',fr:'Je voudrais être médecin. J\'aime aider les gens.',tr:'Dokitaraa ta\'uu barbaadaa. Namoota gargaaruu jaaladha.',side:'left'},
      {s:'Barsiisaa',fr:'C\'est un beau métier ! Et toi, Chaltu ?',tr:'Ogummaa bareedduu! Ati oo Caaltuu?',side:'right'},
      {s:'Caaltuu',fr:'Moi, je veux être professeur de français !',tr:'Ani barsiisaa Afaan Faransaayii ta\'uu barbaadaa!',side:'left'},
      {s:'Barsiisaa',fr:'Excellent ! On a besoin de bons professeurs !',tr:'Baayee gaarii! Barsiisota gaariin nu barbaachisu!',side:'right'}
    ]}
   ],
   vocab:['Qu\'est-ce que vous faites ? = Maal hojjetta?','Je suis... = Ani ... dha','Le métier = Ogummaa / hojii','Je travaille = Hojjedha','Je voudrais être = ...ta\'uu barbaadaa','L\'hôpital = Mana yaalaa'],
   quiz:[
    {q:'Comment demande-t-on «Qu\'est-ce que vous faites ?» (poli) ? <span class="or">Faransaayin maal?</span>',opts:['Tu travailles ?','Qu\'est-ce que vous faites ?','C\'est votre travail ?','Vous avez un métier ?'],ans:1},
    {q:'Que signifie «Je voudrais être médecin» ? <span class="or">"Je voudrais être médecin" — hiikni isaa maal?</span>',opts:['Dokitaraa dha','Dokitaraa deemsise','Dokitaraa ta\'uu barbaadaa','Dokitaraa barbaacha jira'],ans:2},
    {q:'Que signifie «Le métier» ? <span class="or">"Le métier" — hiikni isaa maal?</span>',opts:['Mindaa','Dhaabbata','Ogummaa / hojii','Sa\'atii hojii'],ans:2}
   ]},

  {id:'trans2',level:2,emoji:'🚌',name:'Les transports',sub:'Bus, taxi, train… <span class="or">Geejjiba</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Bileetii baasii bituuf',img:'🚌',dialogue:[
      {s:'Caaltuu',fr:'Bonjour, un ticket pour le centre-ville, s\'il vous plaît.',tr:'Akkam, bileetii magaalaa gidduuf, maaloo.',side:'left'},
      {s:'Shoofeeree',fr:'Voilà, c\'est un euro soixante.',tr:'Kunoo, yuuroo tokko fi jaatama.',side:'right'},
      {s:'Caaltuu',fr:'Je n\'ai pas de monnaie. Je peux payer avec cinq euros ?',tr:'Shillingii hin qabduu. Yuuroo shan kaffaluu ni danda\'aa?',side:'left'},
      {s:'Shoofeeree',fr:'Oui, voilà votre monnaie.',tr:'Eeyyee, kunoo jijjiirama keessan.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Taksii gaafachuu',img:'🚕',dialogue:[
      {s:'Hundeessaa',fr:'Bonjour, je voudrais un taxi pour l\'aéroport.',tr:'Akkam, xiyyaara dhaabbataaf taksii barbaadaa.',side:'left'},
      {s:'Daldalaa',fr:'D\'accord. C\'est à quelle adresse ?',tr:'Tole. Teessoon keessan maalidhaa?',side:'right'},
      {s:'Hundeessaa',fr:'Quinze rue de la Paix, dans le troisième arrondissement.',tr:'Karaa Nagaa kudha shan, kutaa sadaffaa keessatti.',side:'left'},
      {s:'Daldalaa',fr:'Le taxi arrive dans dix minutes.',tr:'Taksiiin daqiiqaa kudhanitti dhufa.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Bileetii ittii mirkaneessuu',img:'🚂',dialogue:[
      {s:'Bakkalcoo',fr:'Votre billet, s\'il vous plaît.',tr:'Bileetii keessan, maaloo.',side:'right'},
      {s:'Tigist',fr:'Le voici. J\'ai une réservation pour Paris.',tr:'Kunoo. Paarisiitiif dirqisiifannaa qaba.',side:'left'},
      {s:'Bakkalcoo',fr:'Vous avez validé votre billet ?',tr:'Bileetii keessan mirkaneessitanii jirtuu?',side:'right'},
      {s:'Tigist',fr:'Euh... non, comment on fait ?',tr:'Ee... lakkii, akkamitti godhamaa?',side:'left'},
      {s:'Bakkalcoo',fr:'Il faut le composter dans la machine là-bas.',tr:'Maashinicha keessatti mirkaneessuu qabdu, achitti.',side:'right'}
    ]}
   ],
   vocab:['Le ticket = Bileetii / tikeetii','La monnaie = Shillingii / jijjiirama','L\'aéroport = Buufata xiyyaaraa','La gare = Buufata ittii','Valider = Mirkaneessuu','Composter = Bileetii mirkaneessuu','Le quai = Andenii'],
   quiz:[
    {q:'Que signifie «Je n\'ai pas de monnaie» ? <span class="or">"Je n\'ai pas de monnaie" — hiikni isaa maal?</span>',opts:['Bileetii hin qabuu','Shillingii hin qabuu','Maallaqqaa hin qabuu','Kaardii hin qabuu'],ans:1},
    {q:'Comment dit-on «Le quai» ? <span class="or">"Andenii" Faransaayin maal?</span>',opts:['Le ticket','La gare','Le quai','Le bus'],ans:2},
    {q:'Que signifie «Composter le billet» ? <span class="or">"Composter le billet" — hiikni isaa maal?</span>',opts:['Bileetii bituuf','Bileetii mirkaneessuu / xiyyiixsuu','Bileetii dhaabuuf','Bileetii jijjiiruu'],ans:1}
   ]},

  {id:'lieux2',level:2,emoji:'🏙️',name:'Les lieux importants',sub:'Urgence, courses… <span class="or">Bakkoota murteessoo</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Hatattamaan mana barbaacha',img:'🚨',dialogue:[
      {s:'Warqituu',fr:'Excusez-moi ! Où est la pharmacie la plus proche ?',tr:'Dhiifama! Farmaasiiyaan dhiyoon eessa jiraa?',side:'left'},
      {s:'Namicha',fr:'La pharmacie ? C\'est à deux rues d\'ici, à gauche.',tr:'Farmaasiiyaan? Karaa lama as, gama bitaatti.',side:'right'},
      {s:'Warqituu',fr:'Et l\'hôpital, c\'est loin ?',tr:'Mana yaalaan oo, fagoo?',side:'left'},
      {s:'Namicha',fr:'Oui, prenez le bus numéro quatre.',tr:'Eeyyee, baasii lakkoofsa afur fudhaa.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Gabaa deemuu ibsuu',img:'🛒',dialogue:[
      {s:'Ollaa',fr:'Tu vas faire les courses ce matin ?',tr:'Har\'a ganama gabaa deemtaa?',side:'right'},
      {s:'Caaltuu',fr:'Oui, je vais au supermarché d\'abord, puis à la banque.',tr:'Eeyyee, duraan suparmaarketii, erga san baankii.',side:'left'},
      {s:'Ollaa',fr:'Il y a aussi une pharmacie à côté du supermarché.',tr:'Suparmaarketii cina farmaasiiyaan nis jira.',side:'right'},
      {s:'Caaltuu',fr:'Ah parfait, j\'en ai besoin aussi.',tr:'Ee baayee gaarii, san nis barbaadaa.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Dirree / ganda guyyaa boqonnaa',img:'🌾',dialogue:[
      {s:'Hojjataa',fr:'Vous avez passé un bon week-end ?',tr:'Torbanitti boqonnaa gaarii dabarte?',side:'right'},
      {s:'Hundeessaa',fr:'Oui ! On est allés à la campagne.',tr:'Eeyyee! Lafa qonnaa deemne.',side:'left'},
      {s:'Hojjataa',fr:'C\'est beau la campagne en été !',tr:'Baranaa lafti qonnaa miidhagaadha!',side:'right'},
      {s:'Hundeessaa',fr:'Oui, et on s\'est promenés au bord de la rivière.',tr:'Eeyyee, cinaa laga deemne.',side:'left'}
    ]}
   ],
   vocab:['La pharmacie = Farmaasiiyaa','L\'hôpital = Mana yaalaa','Le supermarché = Suparmaarketii','La banque = Baankii','La campagne = Lafa qonnaa / ganda','La rivière = Laga xiqqaa','La mairie = Mana nageenyaa / mootummaa'],
   quiz:[
    {q:'Comment dit-on «La pharmacie» ? <span class="or">"Farmaasiiyaa" Faransaayin maal?</span>',opts:['L\'hôpital','La banque','La pharmacie','L\'école'],ans:2},
    {q:'Que signifie «La campagne» ? <span class="or">"La campagne" — hiikni isaa maal?</span>',opts:['Magaalaa','Beacha','Lafa qonnaa / ganda','Tullu'],ans:2},
    {q:'Que signifie «C\'est urgent !» ? <span class="or">"C\'est urgent !" — hiikni isaa maal?</span>',opts:['Murteessaadha!','Hatattamaa dha!','Fagoodha!','Cufaadha!'],ans:1}
   ]},

  {id:'orient2',level:2,emoji:'🧭',name:'S\'orienter',sub:'Chemin, taxi… <span class="or">Kallattii</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Buufata ittii akkamitti deemina gaafachuu',img:'🚉',dialogue:[
      {s:'Tigist',fr:'Excusez-moi, pour aller à la gare, s\'il vous plaît ?',tr:'Dhiifama, buufata ittiif karaan akkamiidhaa, maaloo?',side:'left'},
      {s:'Namicha',fr:'Allez tout droit, puis tournez à gauche au feu.',tr:'Kallattiin deemi, erga san ibsaa gara bitaatti garagali.',side:'right'},
      {s:'Tigist',fr:'C\'est loin à pied ?',tr:'Miilaan fagoo?',side:'left'},
      {s:'Namicha',fr:'Non, environ dix minutes. C\'est en face du parc.',tr:'Lakkii, daqiiqaa kudhan ta\'a. Paarkii fuuldura dha.',side:'right'}
    ]},
    {label:'Sit. 2',title:'Taksiif kallattii kennuu',img:'🚕',dialogue:[
      {s:'Shoofeeree',fr:'Quelle adresse ?',tr:'Teessoon maalidhaa?',side:'right'},
      {s:'Daanyuu',fr:'Huit rue de Rivoli, s\'il vous plaît.',tr:'Karaa Rivoli saddetii, maaloo.',side:'left'},
      {s:'Shoofeeree',fr:'D\'accord, je prends par le centre ?',tr:'Tole, gidduudhaan deemuu?',side:'right'},
      {s:'Daanyuu',fr:'Oui. Et après le pont, tournez à droite.',tr:'Eeyyee. Riqichaa booda gama mirgaatti garagali.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Dukkaana eessa akka jiru ibsuu',img:'🏪',dialogue:[
      {s:'Daalataa',fr:'Il y a une boulangerie près d\'ici ?',tr:'Mana buddeenaa dhiyoo as jiraa?',side:'right'},
      {s:'Caaltuu',fr:'Oui ! Elle est à côté de la pharmacie, en face du parc.',tr:'Eeyyee! Farmaasiiyaa cina, paarkii fuuldura dha.',side:'left'},
      {s:'Daalataa',fr:'C\'est à droite ou à gauche ?',tr:'Mirga moo bitaa?',side:'right'},
      {s:'Caaltuu',fr:'Allez tout droit, et c\'est à droite.',tr:'Kallattiin deemi, gama mirgaatti jira.',side:'left'},
      {s:'Caaltuu',fr:'Non, c\'est très près, deux minutes à pied.',tr:'Lakkii, baayee dhiyoo, daqiiqaa lama miilaan.',side:'left'}
    ]}
   ],
   vocab:['À gauche = Gama bitaatti','À droite = Gama mirgaatti','Tout droit = Kallattiin / diriiraan','En face = Fuuldura','À côté = Cinaa','Loin = Fagoo','Près = Dhiyoo','Le plan = Kaartaa / maappii'],
   quiz:[
    {q:'Comment dit-on «Tout droit» ? <span class="or">"Kallattiin / diriiraan" Faransaayin maal?</span>',opts:['À gauche','À droite','Tout droit','En face'],ans:2},
    {q:'Que signifie «En face du parc» ? <span class="or">"En face du parc" — hiikni isaa maal?</span>',opts:['Paarkii cinaa','Paarkii keessaa','Paarkii fuuldura','Paarkii duuba'],ans:2},
    {q:'Que signifie «C\'est très près» ? <span class="or">"C\'est très près" — hiikni isaa maal?</span>',opts:['Baayee fagoo dha','Baayee dhiyoo dha','Gama mirgaa dha','Fuuldura dha'],ans:1}
   ]},

  {id:'sante2',level:2,emoji:'🏥',name:'La santé',sub:'Médecin, pharmacie… <span class="or">Fayyaa</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Yaala dokitaraa gaafachuu',img:'📅',dialogue:[
      {s:'Simbituu',fr:'Cabinet du docteur Lefebvre, bonjour.',tr:'Waajjira dokitar Lefebvre, akkam.',side:'right'},
      {s:'Warqituu',fr:'Bonjour, je voudrais prendre un rendez-vous, s\'il vous plaît.',tr:'Akkam, yaala gaafachuu barbaadaa, maaloo.',side:'left'},
      {s:'Simbituu',fr:'C\'est pour quel motif ?',tr:'Sababaan isaa maalidhaa?',side:'right'},
      {s:'Warqituu',fr:'J\'ai de la fièvre et une forte toux depuis trois jours.',tr:'Ho\'aa qaamaa fi qufaa cimaa guyyaa sadii qaba.',side:'left'},
      {s:'Simbituu',fr:'D\'accord. Vous pouvez venir demain à dix heures ?',tr:'Tole. Boru sa\'atii kudhanitti dhufuu ni dandeessuu?',side:'right'}
    ]},
    {label:'Sit. 2',title:'Dokitaaraatti mallattoo ibsuu',img:'🩺',dialogue:[
      {s:'Dokitaraa',fr:'Bonjour, qu\'est-ce qui ne va pas aujourd\'hui ?',tr:'Akkam, har\'a maal qabda?',side:'right'},
      {s:'Hundeessaa',fr:'J\'ai très mal à la gorge et j\'ai de la fièvre.',tr:'Mormi koo baayee na dhukkuba fi ho\'aa qaamaa qaba.',side:'left'},
      {s:'Dokitaraa',fr:'Depuis combien de jours ?',tr:'Guyyaa meeqarraa kaasee?',side:'right'},
      {s:'Hundeessaa',fr:'Depuis quatre jours.',tr:'Guyyaa afurrraa kaasee.',side:'left'},
      {s:'Dokitaraa',fr:'Non, c\'est une angine. Je vous fais une ordonnance.',tr:'Lakkii, baayyee hamaa miti, dhukkuba morma dha. Waraqaa qoricha siif barreessa.',side:'right'}
    ]},
    {label:'Sit. 3',title:'Farmaasiiyaatti qoricha bituuf',img:'💊',dialogue:[
      {s:'Caaltuu',fr:'Bonjour, j\'ai une ordonnance.',tr:'Akkam, waraqaa qoricha qaba.',side:'left'},
      {s:'Farmaasiisitaa',fr:'Bonjour. Voici les médicaments. Prenez-en un le matin et un le soir.',tr:'Akkam. Kunoo qorichootni. Ganama tokko fi galgala tokko fudhaa.',side:'right'},
      {s:'Caaltuu',fr:'Avec ou sans nourriture ?',tr:'Nyaata wajjin moo malee?',side:'left'},
      {s:'Farmaasiisitaa',fr:'Avec de la nourriture, de préférence.',tr:'Nyaata wajjin, caalaatti gaarii dha.',side:'right'},
      {s:'Caaltuu',fr:'Et je peux avoir quelque chose pour la toux aussi ?',tr:'Qufaaf nis waan tokko kennituu?',side:'left'},
      {s:'Farmaasiisitaa',fr:'Oui, voici un sirop. Deux cuillères trois fois par jour.',tr:'Eeyyee, kunoo siraappii. Siiqii lama guyyaatti yeroo sadii.',side:'right'}
    ]}
   ],
   vocab:['Un rendez-vous = Yeroo yaala dirqisiifame','L\'ordonnance = Waraqaa qoricha dokitaraa','Le médicament = Qoricha / dawaa','J\'ai mal à... = ...koo na dhukkuba','La fièvre = Ho\'aa qaamaa','La toux = Qufaa','Le pharmacien = Farmaasiistaa'],
   quiz:[
    {q:'Comment dit-on «Un rendez-vous» ? <span class="or">"Yeroo yaala dirqisiifame" Faransaayin maal?</span>',opts:['Une visite','Un rendez-vous','Une ordonnance','Une consultation'],ans:1},
    {q:'Que signifie «J\'ai de la fièvre» ? <span class="or">"J\'ai de la fièvre" — hiikni isaa maal?</span>',opts:['Qufaa qaba','Mataan na dhukkuba','Ho\'aa qaamaa qaba','Dadhabaa'],ans:2},
    {q:'Que signifie «L\'ordonnance» ? <span class="or">"L\'ordonnance" — hiikni isaa maal?</span>',opts:['Mana yaalaa','Dokitaraa','Waraqaa qoricha dokitaraa','Qoricha'],ans:2}
   ]},

  {id:'objets2',level:2,emoji:'🔑',name:'Objets du quotidien',sub:'Clés, stylo, chargeur… <span class="or">Wantoota</span>',type:'dialog',
   situations:[
    {label:'Sit. 1',title:'Cufaa barbaachaa bahuudha duratti',img:'🔍',dialogue:[
      {s:'Daanyuu',fr:'Attends, je ne trouve pas mes clés !',tr:'Eeggadhu, cufaa koo argachuu hin dandeenye!',side:'left'},
      {s:'Tigist',fr:'Tu as regardé dans ton sac à dos ?',tr:'Baasii duubaa kee ilaalte?',side:'right'},
      {s:'Daanyuu',fr:'Oui... ah non ! Et mon portefeuille, où il est ?',tr:'Eeyyee... oo lakkii! Wantoota maallaqqaa koo oo, eessa jiraa?',side:'left'},
      {s:'Tigist',fr:'Je crois que tu l\'as laissé sur la table du salon.',tr:'Gabatee kutaa keessummaa irratti dhiiste jedheen yaada.',side:'right'},
      {s:'Daanyuu',fr:'Ah oui ! Les voilà ! On peut partir maintenant.',tr:'Eeyyee! Kunoo jiru! Amma deemuu dandeenyaa.',side:'left'},
      {s:'Tigist',fr:'N\'oublie pas tes lunettes aussi !',tr:'Ibsaa ija kees nis irraanfachuu dhiisi!',side:'right'}
    ]},
    {label:'Sit. 2',title:'Qalmee yookiin waraqaa liqeeffachuu',img:'✏️',dialogue:[
      {s:'Caaltuu',fr:'Excuse-moi, tu aurais un stylo à me prêter ?',tr:'Dhiifama, qalmee liqeessuu ni dandeessaa?',side:'left'},
      {s:'Hojjataa',fr:'Oui, bien sûr ! Tiens.',tr:'Eeyyee, eeyyee! Fudhaa.',side:'right'},
      {s:'Caaltuu',fr:'Merci ! Et tu aurais aussi une feuille de papier ?',tr:'Galatoomaa! Waraqaa nis qabdaa?',side:'left'},
      {s:'Hojjataa',fr:'Oui, voilà. Tu en as besoin pour longtemps ?',tr:'Eeyyee, kunoo. Yeroo dheeraa barbaadda?',side:'right'},
      {s:'Caaltuu',fr:'Non, juste cinq minutes. Je te rends ça tout de suite.',tr:'Lakkii, daqiiqaa shan qofa. Hatattamaan si deebisa.',side:'left'}
    ]},
    {label:'Sit. 3',title:'Chaarjara mobaayilaa gaafachuu',img:'🔌',dialogue:[
      {s:'Hundeessaa',fr:'Mon téléphone est presque mort. Tu as un chargeur ?',tr:'Mobaayilii koo dhumarratti jira. Chaarjara qabdaa?',side:'left'},
      {s:'Warqituu',fr:'Quel modèle de téléphone tu as ?',tr:'Mobaayilii kee moodeelii maaliidhaa?',side:'right'},
      {s:'Hundeessaa',fr:'Un Samsung. Tu aurais un chargeur USB-C ?',tr:'Saamsung. Chaarjara USB-C ni qabduu?',side:'left'},
      {s:'Warqituu',fr:'Oui ! Le voilà. Tu peux le garder une heure.',tr:'Eeyyee! Kunoo. Sa\'atii tokko qabachuu dandeessa.',side:'right'},
      {s:'Hundeessaa',fr:'Merci beaucoup, tu me sauves la vie !',tr:'Baayee galatoomaa, jireenya koo baraartu!',side:'left'}
    ]}
   ],
   vocab:['Les clés = Cufaa / kilii','Le portefeuille = Wantoota maallaqqaa','Le sac à dos = Baasii duubaa / moraalii','Le stylo = Qalmee / biiiroo','La feuille = Waraqaa tokko','Le chargeur = Chaarjara','Les lunettes = Ibsaa ija'],
   quiz:[
    {q:'Comment dit-on «Les clés» ? <span class="or">"Cufaa / kilii" Faransaayin maal?</span>',opts:['Le portefeuille','Les clés','Le stylo','La bouteille'],ans:1},
    {q:'Que signifie «Tu as un chargeur ?» ? <span class="or">"Tu as un chargeur ?" — hiikni isaa maal?</span>',opts:['Kaabila qabdaa?','Chaarjara qabdaa?','Mobaayilii qabdaa?','Baatarii qabdaa?'],ans:1},
    {q:'Que signifie «Tu me sauves la vie !» ? <span class="or">"Tu me sauves la vie !" — hiikni isaa maal?</span>',opts:['Jireenya koo naaf kenneera!','Na gargaarteera!','Jireenya koo baraartu!','Baayee namaa dha!'],ans:2}
   ]}
];

var ALL_THEMES = LEVEL1_THEMES.concat(LEVEL2_THEMES);
