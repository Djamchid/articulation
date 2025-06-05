/**
 * Lexique structuré pour le jeu de prononciation
 * Généré automatiquement à partir de words.json et homophone.json
 * 
 * Structure: {
 *   "mot": {
 *     "prononciation": "transcription_phonétique", // provenant de homophone.json ou null si inconnue
 *     "homophones": ["mot1", "mot2", ...] // mots ayant la même prononciation
 *   }
 * }
 */

const lexique = {
  "abandonné": {
    "homophones": [
      "abandonnée",
      "abandonnés",
      "abandonnées",
      "abandonnez",
      "abandonner"
    ],
    "prononciation": "ab@done"
  },
  "abeille": {
    "homophones": [
      "abeilles"
    ],
    "prononciation": "abEj"
  },
  "abricot": {
    "homophones": [
      "abricots"
    ],
    "prononciation": "abRiko"
  },
  "absent": {
    "homophones": [
      "absents"
    ],
    "prononciation": "aps@"
  },
  "accident": {
    "homophones": [
      "accidents"
    ],
    "prononciation": "aksid@"
  },
  "accompagner": {
    "homophones": [
      "accompagné",
      "accompagnez",
      "accompagnées",
      "accompagniez",
      "accompagnée",
      "accompagnés"
    ],
    "prononciation": "ak§paNe"
  },
  "accoucher": {
    "homophones": [
      "accouchez",
      "accouchées",
      "accouché",
      "accouchés",
      "accouchée"
    ],
    "prononciation": "akuSe"
  },
  "accrocher": {
    "homophones": [
      "accrochés",
      "accrochée",
      "accrochées",
      "accrochez",
      "accroché"
    ],
    "prononciation": "akRoSe"
  },
  "acheter": {
    "homophones": [
      "achetée",
      "achetés",
      "achetées",
      "acheté",
      "achetez"
    ],
    "prononciation": "aS°te"
  },
  "adresse": {
    "homophones": [
      "adresses",
      "adressent"
    ],
    "prononciation": "adREs"
  },
  "adroit": {
    "homophones": [
      "adroits"
    ],
    "prononciation": "adRwa"
  },
  "adulte": {
    "homophones": [
      "adultes"
    ],
    "prononciation": "adylt"
  },
  "affaire": {
    "homophones": [
      "affaires",
      "affairent"
    ],
    "prononciation": "afER"
  },
  "affiche": {
    "homophones": [
      "affiches",
      "affichent"
    ],
    "prononciation": "afiS"
  },
  "agacé": {
    "homophones": [
      "agacez",
      "agacer",
      "agacés",
      "agacée",
      "agacées"
    ],
    "prononciation": "agase"
  },
  "agité": {
    "homophones": [
      "agitez",
      "agiter",
      "agitées",
      "agitée",
      "agités"
    ],
    "prononciation": "aZite"
  },
  "agneau": {
    "homophones": [
      "agneaux"
    ],
    "prononciation": "aNo"
  },
  "aider": {
    "homophones": [],
    "prononciation": "ede"
  },
  "aigle": {
    "homophones": [
      "aigles"
    ],
    "prononciation": "Egl"
  },
  "aiguille": {
    "homophones": [
      "aiguilles"
    ],
    "prononciation": "eg8ij"
  },
  "aile": {
    "homophones": [
      "ailes",
      "elles",
      "elle",
      "hèle"
    ],
    "prononciation": "El"
  },
  "aimer": {
    "homophones": [
      "aimé",
      "aimées",
      "aimés",
      "aimée"
    ],
    "prononciation": "eme"
  },
  "air": {
    "homophones": [
      "erre",
      "ers",
      "haires",
      "ères",
      "airs",
      "aire",
      "erres",
      "ère",
      "haire",
      "hère",
      "errent",
      "hères",
      "aires"
    ],
    "prononciation": "ER"
  },
  "ajouter": {
    "homophones": [
      "ajouté",
      "ajoutées",
      "ajoutez",
      "ajoutée",
      "ajoutés"
    ],
    "prononciation": "aZute"
  },
  "album": {
    "homophones": [
      "albums"
    ],
    "prononciation": "albOm"
  },
  "aliments": {
    "homophones": [
      "aliment"
    ],
    "prononciation": "alim@"
  },
  "aller": {
    "homophones": [
      "halé",
      "haler",
      "halez",
      "hâlé",
      "allées",
      "allez",
      "allers",
      "hâlées",
      "halée",
      "halés",
      "allée",
      "allés",
      "allé",
      "hâlée",
      "hâlés"
    ],
    "prononciation": "ale"
  },
  "allumer": {
    "homophones": [
      "allumées",
      "allumés",
      "allumée",
      "allumé",
      "allumez"
    ],
    "prononciation": "alyme"
  },
  "allumette": {
    "homophones": [
      "allumettes"
    ],
    "prononciation": "alymEt"
  },
  "alphabet": {
    "homophones": [
      "alphabets"
    ],
    "prononciation": "alfabE"
  },
  "ambulance": {
    "homophones": [
      "ambulances"
    ],
    "prononciation": "@byl@s"
  },
  "amener": {
    "homophones": [
      "amenez",
      "amenées",
      "amenée",
      "amenés"
    ],
    "prononciation": "am°ne"
  },
  "ami": {
    "homophones": [
      "amies",
      "amie",
      "amis"
    ],
    "prononciation": "ami"
  },
  "amour": {
    "homophones": [
      "amours"
    ],
    "prononciation": "amuR"
  },
  "ampoule": {
    "homophones": [
      "ampoules"
    ],
    "prononciation": "@pul"
  },
  "amusant": {
    "homophones": [
      "amusants"
    ],
    "prononciation": "amyz@"
  },
  "an": {
    "homophones": [
      "en",
      "han",
      "ans"
    ],
    "prononciation": "@"
  },
  "ananas": {
    "homophones": [],
    "prononciation": "anana"
  },
  "ancien": {
    "homophones": [
      "anciens"
    ],
    "prononciation": "@sj5"
  },
  "angle": {
    "homophones": [
      "angles"
    ],
    "prononciation": "@gl"
  },
  "animal": {
    "homophones": [
      "animales",
      "animale"
    ],
    "prononciation": "animal"
  },
  "animaux": {
    "homophones": [],
    "prononciation": "animo"
  },
  "anniversaire": {
    "homophones": [
      "anniversaires"
    ],
    "prononciation": "anivERsER"
  },
  "année": {
    "homophones": [
      "années"
    ],
    "prononciation": "ane"
  },
  "anorak": {
    "homophones": [
      "anoraks"
    ],
    "prononciation": "anoRak"
  },
  "appareil": {
    "homophones": [
      "appareille",
      "appareils",
      "appareillent"
    ],
    "prononciation": "apaREj"
  },
  "appartement": {
    "homophones": [
      "appartements"
    ],
    "prononciation": "apaRt°m@"
  },
  "appeler": {
    "homophones": [
      "appelées",
      "appelé",
      "appelés",
      "appelée",
      "appelez"
    ],
    "prononciation": "ap°le"
  },
  "apporter": {
    "homophones": [
      "apporté",
      "apportés",
      "apportée",
      "apportez",
      "apportées"
    ],
    "prononciation": "apORte"
  },
  "appuyer": {
    "homophones": [
      "appuyés",
      "appuyée",
      "appuyé",
      "appuyées",
      "appuyiez",
      "appuyez"
    ],
    "prononciation": "ap8ije"
  },
  "appétit": {
    "homophones": [
      "appétits"
    ],
    "prononciation": "apeti"
  },
  "après": {
    "homophones": [
      "apprêts",
      "apprêt"
    ],
    "prononciation": "apRE"
  },
  "aquarium": {
    "homophones": [
      "aquariums"
    ],
    "prononciation": "akwaRjOm"
  },
  "araignée": {
    "homophones": [
      "araignées"
    ],
    "prononciation": "aRENe"
  },
  "arbre": {
    "homophones": [
      "arbres"
    ],
    "prononciation": "aRbR"
  },
  "arc": {
    "homophones": [
      "arcs",
      "arque",
      "arquent"
    ],
    "prononciation": "aRk"
  },
  "arc-en-ciel": {
    "homophones": [
      "arcs-en-ciel"
    ],
    "prononciation": "aRk@sjEl"
  },
  "argent": {
    "homophones": [
      "argents"
    ],
    "prononciation": "aRZ@"
  },
  "armoire": {
    "homophones": [
      "armoires"
    ],
    "prononciation": "aRmwaR"
  },
  "arracher": {
    "homophones": [
      "arrachez",
      "arraché",
      "arrachée",
      "arrachés",
      "arrachées"
    ],
    "prononciation": "aRaSe"
  },
  "arrivée": {
    "homophones": [
      "arrivés",
      "arrivées",
      "arriver",
      "arrivez",
      "arrivé"
    ],
    "prononciation": "aRive"
  },
  "arrière": {
    "homophones": [
      "arrières"
    ],
    "prononciation": "aRjER"
  },
  "arroser": {
    "homophones": [
      "arrosé",
      "arrosez",
      "arrosés",
      "arrosée",
      "arrosées"
    ],
    "prononciation": "aRoze"
  },
  "arrosoir": {
    "homophones": [
      "arrosoirs"
    ],
    "prononciation": "aRozwaR"
  },
  "ascenseur": {
    "homophones": [
      "ascenseurs"
    ],
    "prononciation": "as@s9R"
  },
  "aspirateur": {
    "homophones": [
      "aspirateurs"
    ],
    "prononciation": "aspiRat9R"
  },
  "assez": {
    "homophones": [],
    "prononciation": "ase"
  },
  "assiette": {
    "homophones": [
      "assiettes"
    ],
    "prononciation": "asjEt"
  },
  "assis": {
    "homophones": [
      "assit",
      "assît"
    ],
    "prononciation": "asi"
  },
  "attaché": {
    "homophones": [
      "attachées",
      "attachés",
      "attachée",
      "attachez",
      "attacher"
    ],
    "prononciation": "ataSe"
  },
  "attendre": {
    "homophones": [],
    "prononciation": "at@dR"
  },
  "attention": {
    "homophones": [
      "attentions"
    ],
    "prononciation": "at@sj§"
  },
  "atterrir": {
    "homophones": [],
    "prononciation": "ateRiR"
  },
  "attraper": {
    "homophones": [
      "attrapez",
      "attrapée",
      "attrapés",
      "attrapé",
      "attrapées"
    ],
    "prononciation": "atRape"
  },
  "au": {
    "homophones": [
      "o",
      "ô",
      "haut",
      "eaux",
      "eau",
      "ho",
      "oh",
      "hauts",
      "aux",
      "aulx"
    ],
    "prononciation": "o"
  },
  "au-delà": {
    "homophones": [],
    "prononciation": "od°la"
  },
  "au-dessous": {
    "homophones": [],
    "prononciation": "od°su"
  },
  "au-dessus": {
    "homophones": [],
    "prononciation": "od°sy"
  },
  "autant": {
    "homophones": [
      "autan",
      "ôtant"
    ],
    "prononciation": "ot@"
  },
  "auto": {
    "homophones": [
      "autos"
    ],
    "prononciation": "oto"
  },
  "autour": {
    "homophones": [
      "autours"
    ],
    "prononciation": "otuR"
  },
  "avaler": {
    "homophones": [
      "avalé",
      "avalez",
      "avalées",
      "avalée",
      "avalés"
    ],
    "prononciation": "avale"
  },
  "avancer": {
    "homophones": [
      "avancé",
      "avancez",
      "avancées",
      "avancés",
      "avancée"
    ],
    "prononciation": "av@se"
  },
  "avant": {
    "homophones": [
      "avants",
      "avent"
    ],
    "prononciation": "av@"
  },
  "avec": {
    "homophones": [],
    "prononciation": "avEk"
  },
  "avion": {
    "homophones": [
      "avions"
    ],
    "prononciation": "avj§"
  },
  "aéroport": {
    "homophones": [
      "aéroports"
    ],
    "prononciation": "aeRopOR"
  },
  "bagages": {
    "homophones": [
      "baguage",
      "bagage"
    ],
    "prononciation": "bagaZ"
  },
  "bagarre": {
    "homophones": [
      "bagarrent",
      "bagarres"
    ],
    "prononciation": "bagaR"
  },
  "bague": {
    "homophones": [
      "bagues"
    ],
    "prononciation": "bag"
  },
  "baguette": {
    "homophones": [
      "baguettes"
    ],
    "prononciation": "bagEt"
  },
  "bain": {
    "homophones": [
      "bains",
      "ben"
    ],
    "prononciation": "b5"
  },
  "baiser": {
    "homophones": [
      "baisées",
      "baisée",
      "baisés",
      "baisé",
      "baisers"
    ],
    "prononciation": "beze"
  },
  "balai": {
    "homophones": [
      "ballaient",
      "ballet",
      "balaient",
      "ballets",
      "balaie",
      "balais",
      "balaies"
    ],
    "prononciation": "balE"
  },
  "balançoire": {
    "homophones": [
      "balançoires"
    ],
    "prononciation": "bal@swaR"
  },
  "balayer": {
    "homophones": [
      "balayés",
      "balayée",
      "balayé",
      "balayées"
    ],
    "prononciation": "baleje"
  },
  "balcon": {
    "homophones": [
      "balcons"
    ],
    "prononciation": "balk§"
  },
  "baleine": {
    "homophones": [
      "baleines"
    ],
    "prononciation": "balEn"
  },
  "balle": {
    "homophones": [
      "balles",
      "bale",
      "bals",
      "bal",
      "bales"
    ],
    "prononciation": "bal"
  },
  "ballon": {
    "homophones": [
      "ballons"
    ],
    "prononciation": "bal§"
  },
  "banane": {
    "homophones": [
      "bananes"
    ],
    "prononciation": "banan"
  },
  "banc": {
    "homophones": [
      "bancs",
      "bans",
      "ban"
    ],
    "prononciation": "b@"
  },
  "bande": {
    "homophones": [
      "bandent",
      "bandes"
    ],
    "prononciation": "b@d"
  },
  "barbe": {
    "homophones": [
      "barbent",
      "barbes"
    ],
    "prononciation": "baRb"
  },
  "barboter": {
    "homophones": [
      "barboté"
    ],
    "prononciation": "baRbote"
  },
  "barbouillé": {
    "homophones": [
      "barbouiller",
      "barbouillée",
      "barbouillés",
      "barbouillées"
    ],
    "prononciation": "baRbuje"
  },
  "barque": {
    "homophones": [
      "barques"
    ],
    "prononciation": "baRk"
  },
  "barre": {
    "homophones": [
      "bars",
      "barres",
      "barrent",
      "bar"
    ],
    "prononciation": "baR"
  },
  "barreau": {
    "homophones": [
      "barreaux"
    ],
    "prononciation": "baRo"
  },
  "barrette": {
    "homophones": [
      "barrettes"
    ],
    "prononciation": "baREt"
  },
  "bas": {
    "homophones": [
      "bats",
      "bâts",
      "bât",
      "bah",
      "bat"
    ],
    "prononciation": "ba"
  },
  "bassin": {
    "homophones": [
      "bassins"
    ],
    "prononciation": "bas5"
  },
  "bassine": {
    "homophones": [
      "bassines"
    ],
    "prononciation": "basin"
  },
  "bateau": {
    "homophones": [
      "bateaux"
    ],
    "prononciation": "bato"
  },
  "battre": {
    "homophones": [],
    "prononciation": "batR"
  },
  "bavoir": {
    "homophones": [
      "bavoirs"
    ],
    "prononciation": "bavwaR"
  },
  "beau": {
    "homophones": [
      "beaux",
      "baux",
      "baud",
      "bau",
      "bot"
    ],
    "prononciation": "bo"
  },
  "beaucoup": {
    "homophones": [],
    "prononciation": "boku"
  },
  "bec": {
    "homophones": [
      "becs"
    ],
    "prononciation": "bEk"
  },
  "belle": {
    "homophones": [
      "belles",
      "bêle",
      "bel",
      "bêlent"
    ],
    "prononciation": "bEl"
  },
  "bercer": {
    "homophones": [
      "bercé",
      "bercez",
      "bercés",
      "bercée"
    ],
    "prononciation": "bERse"
  },
  "beurre": {
    "homophones": [
      "beur",
      "boer",
      "ber",
      "beurres"
    ],
    "prononciation": "b9R"
  },
  "biberon": {
    "homophones": [
      "biberons"
    ],
    "prononciation": "bib°R§"
  },
  "bibliothèque": {
    "homophones": [
      "bibliothèques"
    ],
    "prononciation": "biblijotEk"
  },
  "bicyclette": {
    "homophones": [
      "bicyclettes"
    ],
    "prononciation": "bisiklEt"
  },
  "bien": {
    "homophones": [
      "biens"
    ],
    "prononciation": "bj5"
  },
  "bifteck": {
    "homophones": [
      "beefsteak",
      "biftecks",
      "biftèque",
      "biftèques",
      "beefsteaks"
    ],
    "prononciation": "biftEk"
  },
  "bijoux": {
    "homophones": [
      "bijou"
    ],
    "prononciation": "biZu"
  },
  "bille": {
    "homophones": [
      "billes"
    ],
    "prononciation": "bij"
  },
  "billet": {
    "homophones": [
      "billets"
    ],
    "prononciation": "bijE"
  },
  "biscuit": {
    "homophones": [
      "biscuits"
    ],
    "prononciation": "bisk8i"
  },
  "bisous": {
    "homophones": [
      "bisou",
      "bizou"
    ],
    "prononciation": "bizu"
  },
  "bizarre": {
    "homophones": [
      "bizarres"
    ],
    "prononciation": "bizaR"
  },
  "bleu": {
    "homophones": [
      "bleus",
      "bleue",
      "bleues"
    ],
    "prononciation": "bl2"
  },
  "blond": {
    "homophones": [
      "blonds"
    ],
    "prononciation": "bl§"
  },
  "boire": {
    "homophones": [],
    "prononciation": "bwaR"
  },
  "bois": {
    "homophones": [
      "boit"
    ],
    "prononciation": "bwa"
  },
  "boisson": {
    "homophones": [
      "boissons"
    ],
    "prononciation": "bwas§"
  },
  "bol": {
    "homophones": [
      "bols"
    ],
    "prononciation": "bOl"
  },
  "bon": {
    "homophones": [
      "bond",
      "bons",
      "bonds"
    ],
    "prononciation": "b§"
  },
  "bonbon": {
    "homophones": [
      "bonbons"
    ],
    "prononciation": "b§b§"
  },
  "bondir": {
    "homophones": [
      "bondirent"
    ],
    "prononciation": "b§diR"
  },
  "bonhomme": {
    "homophones": [
      "bonhommes"
    ],
    "prononciation": "bonOm"
  },
  "bonnet": {
    "homophones": [
      "bonnets"
    ],
    "prononciation": "bonE"
  },
  "bord": {
    "homophones": [
      "bords",
      "bore"
    ],
    "prononciation": "bOR"
  },
  "bosser": {
    "homophones": [
      "bossez",
      "bossé"
    ],
    "prononciation": "bose"
  },
  "bottes": {
    "homophones": [
      "bottent",
      "botte",
      "bote"
    ],
    "prononciation": "bOt"
  },
  "bouche": {
    "homophones": [
      "bouchent",
      "bouches",
      "bush"
    ],
    "prononciation": "buS"
  },
  "boucher": {
    "homophones": [
      "bouché",
      "bouchers",
      "bouchez",
      "bouchées",
      "bouchée",
      "bouchés"
    ],
    "prononciation": "buSe"
  },
  "boucherie": {
    "homophones": [
      "boucheries"
    ],
    "prononciation": "buS°Ri"
  },
  "bouchon": {
    "homophones": [
      "bouchons"
    ],
    "prononciation": "buS§"
  },
  "bouder": {
    "homophones": [
      "boudée",
      "boudés",
      "boudez",
      "boudé"
    ],
    "prononciation": "bude"
  },
  "bouger": {
    "homophones": [
      "bougée",
      "bougées",
      "bougez",
      "bougé"
    ],
    "prononciation": "buZe"
  },
  "bouillir": {
    "homophones": [],
    "prononciation": "bujiR"
  },
  "boulanger": {
    "homophones": [
      "boulangers"
    ],
    "prononciation": "bul@Ze"
  },
  "boulangerie": {
    "homophones": [
      "boulangeries"
    ],
    "prononciation": "bul@Z°Ri"
  },
  "boule": {
    "homophones": [
      "boules",
      "boulle",
      "boulent"
    ],
    "prononciation": "bul"
  },
  "bouquet": {
    "homophones": [
      "bouquets"
    ],
    "prononciation": "bukE"
  },
  "bourgeon": {
    "homophones": [
      "bourgeons"
    ],
    "prononciation": "buRZ§"
  },
  "bousculer": {
    "homophones": [
      "bousculés",
      "bousculée",
      "bousculé",
      "bousculées",
      "bousculez"
    ],
    "prononciation": "buskyle"
  },
  "bouteille": {
    "homophones": [
      "bouteilles"
    ],
    "prononciation": "butEj"
  },
  "boutique": {
    "homophones": [
      "boutiques"
    ],
    "prononciation": "butik"
  },
  "bouton": {
    "homophones": [
      "boutons"
    ],
    "prononciation": "but§"
  },
  "bracelet": {
    "homophones": [
      "bracelets"
    ],
    "prononciation": "bRas°lE"
  },
  "branche": {
    "homophones": [
      "branches",
      "branchent"
    ],
    "prononciation": "bR@S"
  },
  "bras": {
    "homophones": [],
    "prononciation": "bRa"
  },
  "bretelle": {
    "homophones": [
      "bretelles"
    ],
    "prononciation": "bR°tEl"
  },
  "bricolage": {
    "homophones": [
      "bricolages"
    ],
    "prononciation": "bRikolaZ"
  },
  "brosse": {
    "homophones": [
      "brossent",
      "brosses"
    ],
    "prononciation": "bROs"
  },
  "brouette": {
    "homophones": [
      "brouettes"
    ],
    "prononciation": "bRuEt"
  },
  "brouillard": {
    "homophones": [
      "brouillards"
    ],
    "prononciation": "bRujaR"
  },
  "bruit": {
    "homophones": [
      "bruits"
    ],
    "prononciation": "bR8i"
  },
  "brun": {
    "homophones": [
      "brin",
      "bruns"
    ],
    "prononciation": "bR1"
  },
  "buisson": {
    "homophones": [
      "buissons"
    ],
    "prononciation": "b8is§"
  },
  "bulle": {
    "homophones": [
      "bulles",
      "bull",
      "bulls"
    ],
    "prononciation": "byl"
  },
  "bureau": {
    "homophones": [
      "bureaux"
    ],
    "prononciation": "byRo"
  },
  "bus": {
    "homophones": [
      "busse"
    ],
    "prononciation": "bys"
  },
  "bébé": {
    "homophones": [
      "bébés"
    ],
    "prononciation": "bebe"
  },
  "cabane": {
    "homophones": [
      "cabanes"
    ],
    "prononciation": "kaban"
  },
  "cabinet": {
    "homophones": [
      "cabinets"
    ],
    "prononciation": "kabinE"
  },
  "cacher": {
    "homophones": [
      "cachez",
      "cachées",
      "caché",
      "kacher",
      "cachés",
      "cachée"
    ],
    "prononciation": "kaSe"
  },
  "cadeau": {
    "homophones": [
      "cadeaux"
    ],
    "prononciation": "kado"
  },
  "cadenas": {
    "homophones": [],
    "prononciation": "kad°na"
  },
  "café": {
    "homophones": [
      "cafés"
    ],
    "prononciation": "kafe"
  },
  "cage": {
    "homophones": [
      "cages"
    ],
    "prononciation": "kaZ"
  },
  "cagoule": {
    "homophones": [
      "cagoules"
    ],
    "prononciation": "kagul"
  },
  "cahier": {
    "homophones": [
      "caillé",
      "caillée",
      "cahiers",
      "caillées",
      "cailler"
    ],
    "prononciation": "kaje"
  },
  "caillou": {
    "homophones": [
      "cailloux"
    ],
    "prononciation": "kaju"
  },
  "caisse": {
    "homophones": [
      "caisses"
    ],
    "prononciation": "kEs"
  },
  "calendrier": {
    "homophones": [
      "calendriers"
    ],
    "prononciation": "kal@dRije"
  },
  "calme": {
    "homophones": [
      "calmes",
      "calment"
    ],
    "prononciation": "kalm"
  },
  "camarade": {
    "homophones": [
      "camarades"
    ],
    "prononciation": "kamaRad"
  },
  "camion": {
    "homophones": [
      "camions"
    ],
    "prononciation": "kamj§"
  },
  "camp": {
    "homophones": [
      "quant",
      "quand",
      "camps"
    ],
    "prononciation": "k@"
  },
  "campagne": {
    "homophones": [
      "campagnes"
    ],
    "prononciation": "k@paN"
  },
  "camper": {
    "homophones": [
      "campées",
      "campez",
      "campé",
      "campés",
      "campée"
    ],
    "prononciation": "k@pe"
  },
  "caméscope": {
    "homophones": [
      "caméscopes"
    ],
    "prononciation": "kameskOp"
  },
  "canapé": {
    "homophones": [
      "canapés"
    ],
    "prononciation": "kanape"
  },
  "canard": {
    "homophones": [
      "canards"
    ],
    "prononciation": "kanaR"
  },
  "caniveau": {
    "homophones": [
      "caniveaux"
    ],
    "prononciation": "kanivo"
  },
  "caprice": {
    "homophones": [
      "caprices"
    ],
    "prononciation": "kapRis"
  },
  "car": {
    "homophones": [
      "quarre",
      "quarts",
      "carre",
      "quart",
      "carrent",
      "carres",
      "cars",
      "care"
    ],
    "prononciation": "kaR"
  },
  "caravane": {
    "homophones": [
      "caravanes"
    ],
    "prononciation": "kaRavan"
  },
  "caresse": {
    "homophones": [
      "caresses",
      "caressent"
    ],
    "prononciation": "kaREs"
  },
  "caresser": {
    "homophones": [
      "caressées",
      "caressés",
      "caressée",
      "caressé"
    ],
    "prononciation": "kaRese"
  },
  "carnet": {
    "homophones": [
      "carnets"
    ],
    "prononciation": "kaRnE"
  },
  "carotte": {
    "homophones": [
      "carottent",
      "carottes"
    ],
    "prononciation": "kaROt"
  },
  "carreau": {
    "homophones": [
      "carreaux"
    ],
    "prononciation": "kaRo"
  },
  "carrefour": {
    "homophones": [
      "carrefours"
    ],
    "prononciation": "kaR°fuR"
  },
  "carré": {
    "homophones": [
      "carrés",
      "carrée",
      "carrer",
      "quarrez",
      "carrées"
    ],
    "prononciation": "kaRe"
  },
  "cartable": {
    "homophones": [
      "cartables"
    ],
    "prononciation": "kaRtabl"
  },
  "carton": {
    "homophones": [
      "cartons"
    ],
    "prononciation": "kaRt§"
  },
  "casier": {
    "homophones": [
      "casiers"
    ],
    "prononciation": "kazje"
  },
  "casque": {
    "homophones": [
      "casques",
      "casquent"
    ],
    "prononciation": "kask"
  },
  "casquette": {
    "homophones": [
      "casquettes"
    ],
    "prononciation": "kaskEt"
  },
  "casser": {
    "homophones": [
      "cassé",
      "cassées",
      "cassés",
      "cassée",
      "cassez"
    ],
    "prononciation": "kase"
  },
  "casserole": {
    "homophones": [
      "casseroles"
    ],
    "prononciation": "kas°ROl"
  },
  "cassette": {
    "homophones": [
      "cassettes"
    ],
    "prononciation": "kasEt"
  },
  "catalogue": {
    "homophones": [
      "catalogues",
      "cataloguent"
    ],
    "prononciation": "katalOg"
  },
  "cauchemar": {
    "homophones": [
      "cauchemars"
    ],
    "prononciation": "koS°maR"
  },
  "cave": {
    "homophones": [
      "caves"
    ],
    "prononciation": "kav"
  },
  "ceinture": {
    "homophones": [
      "ceinturent",
      "ceintures"
    ],
    "prononciation": "s5tyR"
  },
  "cerceau": {
    "homophones": [
      "cerceaux"
    ],
    "prononciation": "sERso"
  },
  "cerf": {
    "homophones": [
      "serres",
      "sert",
      "serf",
      "serrent",
      "serre",
      "serfs",
      "cerfs"
    ],
    "prononciation": "sER"
  },
  "cerf-volant": {
    "homophones": [
      "cerfs-volants"
    ],
    "prononciation": "sERvol@"
  },
  "cerise": {
    "homophones": [
      "cerises"
    ],
    "prononciation": "s°Riz"
  },
  "chaise": {
    "homophones": [
      "chaises"
    ],
    "prononciation": "SEz"
  },
  "chambre": {
    "homophones": [
      "chambrent",
      "chambres"
    ],
    "prononciation": "S@bR"
  },
  "champ": {
    "homophones": [
      "chant",
      "chand",
      "chants",
      "champs"
    ],
    "prononciation": "S@"
  },
  "champignon": {
    "homophones": [
      "champignons"
    ],
    "prononciation": "S@piN§"
  },
  "chance": {
    "homophones": [
      "chances"
    ],
    "prononciation": "S@s"
  },
  "changeant": {
    "homophones": [
      "changeants"
    ],
    "prononciation": "S@Z@"
  },
  "changer": {
    "homophones": [
      "changez",
      "changées",
      "changé",
      "changés",
      "changée"
    ],
    "prononciation": "S@Ze"
  },
  "chanson": {
    "homophones": [
      "chansons"
    ],
    "prononciation": "S@s§"
  },
  "chanter": {
    "homophones": [
      "chantée",
      "chantés",
      "chantées",
      "chanté",
      "chantez"
    ],
    "prononciation": "S@te"
  },
  "chapeau": {
    "homophones": [
      "chapeaux"
    ],
    "prononciation": "Sapo"
  },
  "charcuterie": {
    "homophones": [
      "charcuteries"
    ],
    "prononciation": "SaRkyt°Ri"
  },
  "charger": {
    "homophones": [
      "chargée",
      "chargés",
      "chargé",
      "chargées",
      "chargez"
    ],
    "prononciation": "SaRZe"
  },
  "chariot": {
    "homophones": [
      "chariots"
    ],
    "prononciation": "SaRjo"
  },
  "chasser": {
    "homophones": [
      "chassé",
      "chassée",
      "chassés",
      "chassées",
      "chassez"
    ],
    "prononciation": "Sase"
  },
  "chasseur": {
    "homophones": [
      "chasseurs"
    ],
    "prononciation": "Sas9R"
  },
  "chat": {
    "homophones": [
      "schah",
      "shahs",
      "chah",
      "chas",
      "shah",
      "chats"
    ],
    "prononciation": "Sa"
  },
  "chaud": {
    "homophones": [
      "chauds",
      "shows",
      "show",
      "chaut",
      "chaux"
    ],
    "prononciation": "So"
  },
  "chauffer": {
    "homophones": [
      "chauffé",
      "chauffées",
      "chauffés",
      "chauffée",
      "chauffez"
    ],
    "prononciation": "Sofe"
  },
  "chaussettes": {
    "homophones": [
      "chaussette"
    ],
    "prononciation": "SosEt"
  },
  "chausson": {
    "homophones": [
      "chaussons"
    ],
    "prononciation": "Sos§"
  },
  "chaussures": {
    "homophones": [
      "chaussure"
    ],
    "prononciation": "SosyR"
  },
  "chemin": {
    "homophones": [
      "chemins"
    ],
    "prononciation": "S°m5"
  },
  "cheminée": {
    "homophones": [
      "cheminées",
      "cheminer",
      "cheminé"
    ],
    "prononciation": "S°mine"
  },
  "chemise": {
    "homophones": [
      "chemises"
    ],
    "prononciation": "S°miz"
  },
  "chenille": {
    "homophones": [
      "chenilles"
    ],
    "prononciation": "S°nij"
  },
  "cher": {
    "homophones": [
      "chers",
      "chaires",
      "chaire",
      "chairs",
      "chères",
      "chair",
      "chère",
      "cherres"
    ],
    "prononciation": "SER"
  },
  "chercher": {
    "homophones": [
      "cherchés",
      "cherchée",
      "cherchées",
      "cherché",
      "cherchez"
    ],
    "prononciation": "SERSe"
  },
  "cheval": {
    "homophones": [],
    "prononciation": "S°val"
  },
  "cheveux": {
    "homophones": [
      "cheveu"
    ],
    "prononciation": "S°v2"
  },
  "cheville": {
    "homophones": [
      "chevilles"
    ],
    "prononciation": "S°vij"
  },
  "chez": {
    "homophones": [],
    "prononciation": "Se"
  },
  "chien": {
    "homophones": [
      "chiens"
    ],
    "prononciation": "Sj5"
  },
  "chiffon": {
    "homophones": [
      "chiffons"
    ],
    "prononciation": "Sif§"
  },
  "chiffre": {
    "homophones": [
      "chiffrent",
      "chiffres"
    ],
    "prononciation": "SifR"
  },
  "chocolat": {
    "homophones": [
      "chocolats"
    ],
    "prononciation": "Sokola"
  },
  "choisir": {
    "homophones": [
      "choisirent"
    ],
    "prononciation": "SwaziR"
  },
  "chose": {
    "homophones": [
      "choses"
    ],
    "prononciation": "Soz"
  },
  "chou": {
    "homophones": [
      "choux"
    ],
    "prononciation": "Su"
  },
  "chouette": {
    "homophones": [
      "chouettes"
    ],
    "prononciation": "SwEt"
  },
  "chronologie": {
    "homophones": [],
    "prononciation": "kRonoloZi"
  },
  "chuchoter": {
    "homophones": [
      "chuchotez",
      "chuchoté",
      "chuchotée",
      "chuchotés",
      "chuchotées"
    ],
    "prononciation": "SySote"
  },
  "chut": {
    "homophones": [
      "chutent",
      "chute",
      "chutes"
    ],
    "prononciation": "Syt"
  },
  "chèvre": {
    "homophones": [
      "chèvres"
    ],
    "prononciation": "SEvR"
  },
  "ciel": {
    "homophones": [
      "ciels"
    ],
    "prononciation": "sjEl"
  },
  "cigarette": {
    "homophones": [
      "cigarettes"
    ],
    "prononciation": "sigaREt"
  },
  "cigogne": {
    "homophones": [
      "cigognes"
    ],
    "prononciation": "sigON"
  },
  "cil": {
    "homophones": [
      "cils",
      "sil",
      "sils"
    ],
    "prononciation": "sil"
  },
  "cimetière": {
    "homophones": [
      "cimetières"
    ],
    "prononciation": "sim°tjER"
  },
  "cinq": {
    "homophones": [],
    "prononciation": "s5k"
  },
  "cinéma": {
    "homophones": [
      "cinémas"
    ],
    "prononciation": "sinema"
  },
  "cirque": {
    "homophones": [
      "cirques"
    ],
    "prononciation": "siRk"
  },
  "ciseaux": {
    "homophones": [
      "ciseau"
    ],
    "prononciation": "sizo"
  },
  "citron": {
    "homophones": [
      "citrons"
    ],
    "prononciation": "sitR§"
  },
  "citrouille": {
    "homophones": [
      "citrouilles"
    ],
    "prononciation": "sitRuj"
  },
  "claire": {
    "homophones": [
      "clair",
      "clairs",
      "claires",
      "clerc",
      "clercs"
    ],
    "prononciation": "klER"
  },
  "classe": {
    "homophones": [
      "classent",
      "classes",
      "class"
    ],
    "prononciation": "klas"
  },
  "clignoter": {
    "homophones": [
      "clignoté"
    ],
    "prononciation": "kliNote"
  },
  "cloche": {
    "homophones": [
      "cloches",
      "clochent"
    ],
    "prononciation": "klOS"
  },
  "clocher": {
    "homophones": [
      "cloché",
      "clochers"
    ],
    "prononciation": "kloSe"
  },
  "clou": {
    "homophones": [
      "clouent",
      "cloue",
      "clous"
    ],
    "prononciation": "klu"
  },
  "clown": {
    "homophones": [
      "clowns"
    ],
    "prononciation": "klun"
  },
  "clé": {
    "homophones": [
      "clef",
      "clés",
      "clefs"
    ],
    "prononciation": "kle"
  },
  "clémentine": {
    "homophones": [],
    "prononciation": "klem@tin"
  },
  "coccinelle": {
    "homophones": [
      "coccinelles"
    ],
    "prononciation": "koksinEl"
  },
  "cochon": {
    "homophones": [
      "cochons"
    ],
    "prononciation": "koS§"
  },
  "cocotte": {
    "homophones": [
      "cocotent",
      "cocottes"
    ],
    "prononciation": "kokOt"
  },
  "coffre": {
    "homophones": [
      "coffres",
      "coffrent"
    ],
    "prononciation": "kOfR"
  },
  "coffret": {
    "homophones": [
      "coffrait",
      "coffrets",
      "coffraient"
    ],
    "prononciation": "kofRE"
  },
  "coiffeur": {
    "homophones": [
      "coiffeurs"
    ],
    "prononciation": "kwaf9R"
  },
  "coin": {
    "homophones": [
      "coins",
      "coing",
      "coings"
    ],
    "prononciation": "kw5"
  },
  "collant": {
    "homophones": [
      "collants"
    ],
    "prononciation": "kol@"
  },
  "colle": {
    "homophones": [
      "col",
      "cols",
      "collent",
      "colles"
    ],
    "prononciation": "kOl"
  },
  "coller": {
    "homophones": [
      "collées",
      "collé",
      "collés",
      "collée",
      "colée",
      "collez"
    ],
    "prononciation": "kole"
  },
  "collier": {
    "homophones": [
      "colliers",
      "colliez"
    ],
    "prononciation": "kolje"
  },
  "coloriage": {
    "homophones": [
      "coloriages"
    ],
    "prononciation": "koloRjaZ"
  },
  "colorier": {
    "homophones": [
      "coloriée",
      "coloriés",
      "colorié",
      "coloriées",
      "coloriez"
    ],
    "prononciation": "koloRje"
  },
  "colère": {
    "homophones": [
      "colères",
      "collèrent"
    ],
    "prononciation": "kolER"
  },
  "commencer": {
    "homophones": [
      "commencé",
      "commencée",
      "commencés",
      "commencées",
      "commencez"
    ],
    "prononciation": "kom@se"
  },
  "comparer": {
    "homophones": [
      "comparé",
      "comparée",
      "comparés",
      "comparées",
      "comparez"
    ],
    "prononciation": "k§paRe"
  },
  "concombre": {
    "homophones": [
      "concombres"
    ],
    "prononciation": "k§k§bR"
  },
  "conduire": {
    "homophones": [],
    "prononciation": "k§d8iR"
  },
  "confiture": {
    "homophones": [
      "confitures"
    ],
    "prononciation": "k§fityR"
  },
  "confortable": {
    "homophones": [
      "confortables"
    ],
    "prononciation": "k§fORtabl"
  },
  "consoler": {
    "homophones": [
      "consolées",
      "consolée",
      "consolés",
      "consolez",
      "consolé"
    ],
    "prononciation": "k§sole"
  },
  "consommer": {
    "homophones": [
      "consommez",
      "consommées",
      "consommé",
      "consommée",
      "consommés"
    ],
    "prononciation": "k§some"
  },
  "construire": {
    "homophones": [],
    "prononciation": "k§stR8iR"
  },
  "content": {
    "homophones": [
      "contents",
      "comptant",
      "contant"
    ],
    "prononciation": "k§t@"
  },
  "continuer": {
    "homophones": [
      "continuées",
      "continué",
      "continués",
      "continuée"
    ],
    "prononciation": "k§tin8e"
  },
  "contraire": {
    "homophones": [
      "contraires"
    ],
    "prononciation": "k§tRER"
  },
  "contre": {
    "homophones": [
      "contres",
      "contrent"
    ],
    "prononciation": "k§tR"
  },
  "copain": {
    "homophones": [
      "copains"
    ],
    "prononciation": "kop5"
  },
  "copier": {
    "homophones": [
      "copiées",
      "copiée",
      "copiés",
      "copiez",
      "copié"
    ],
    "prononciation": "kopje"
  },
  "coq": {
    "homophones": [
      "coque",
      "coqs",
      "coques"
    ],
    "prononciation": "kOk"
  },
  "coquelicot": {
    "homophones": [
      "coquelicots"
    ],
    "prononciation": "kOk°liko"
  },
  "coquet": {
    "homophones": [
      "coquets"
    ],
    "prononciation": "kokE"
  },
  "coquetier": {
    "homophones": [
      "coquetiers"
    ],
    "prononciation": "kOk°tje"
  },
  "coquillage": {
    "homophones": [
      "coquillages"
    ],
    "prononciation": "kokijaZ"
  },
  "coquille": {
    "homophones": [
      "coquilles"
    ],
    "prononciation": "kokij"
  },
  "coquin": {
    "homophones": [
      "coquins"
    ],
    "prononciation": "kok5"
  },
  "corbeau": {
    "homophones": [
      "corbeaux"
    ],
    "prononciation": "kORbo"
  },
  "corbeille": {
    "homophones": [
      "corbeilles"
    ],
    "prononciation": "kORbEj"
  },
  "corde": {
    "homophones": [
      "cordes"
    ],
    "prononciation": "kORd"
  },
  "corps": {
    "homophones": [
      "cor",
      "cors"
    ],
    "prononciation": "kOR"
  },
  "cou": {
    "homophones": [
      "coût",
      "couds",
      "coûts",
      "coud",
      "cous",
      "coup",
      "coups"
    ],
    "prononciation": "ku"
  },
  "coucher": {
    "homophones": [
      "couchés",
      "couchée",
      "couché",
      "couchées",
      "couchez",
      "couchers"
    ],
    "prononciation": "kuSe"
  },
  "coude": {
    "homophones": [
      "coudes",
      "coudent"
    ],
    "prononciation": "kud"
  },
  "coudre": {
    "homophones": [],
    "prononciation": "kudR"
  },
  "couette": {
    "homophones": [
      "couettes"
    ],
    "prononciation": "kwEt"
  },
  "couleur": {
    "homophones": [
      "couleurs"
    ],
    "prononciation": "kul9R"
  },
  "couloir": {
    "homophones": [
      "couloirs"
    ],
    "prononciation": "kulwaR"
  },
  "coup": {
    "homophones": [
      "coût",
      "cou",
      "couds",
      "coûts",
      "coud",
      "cous",
      "coups"
    ],
    "prononciation": "ku"
  },
  "couper": {
    "homophones": [
      "coupée",
      "coupés",
      "coupées",
      "coupé",
      "coupez"
    ],
    "prononciation": "kupe"
  },
  "courir": {
    "homophones": [],
    "prononciation": "kuRiR"
  },
  "couronne": {
    "homophones": [
      "couronnent",
      "couronnes"
    ],
    "prononciation": "kuROn"
  },
  "courrier": {
    "homophones": [
      "courriez",
      "couriez",
      "courriers"
    ],
    "prononciation": "kuRje"
  },
  "cours": {
    "homophones": [
      "courent",
      "courts",
      "cour",
      "courre",
      "coures",
      "court",
      "coure"
    ],
    "prononciation": "kuR"
  },
  "course": {
    "homophones": [
      "coursent",
      "courses"
    ],
    "prononciation": "kuRs"
  },
  "court": {
    "homophones": [
      "courent",
      "courts",
      "cour",
      "courre",
      "coures",
      "cours",
      "coure"
    ],
    "prononciation": "kuR"
  },
  "cousin": {
    "homophones": [
      "cousins"
    ],
    "prononciation": "kuz5"
  },
  "cousine": {
    "homophones": [
      "cousines"
    ],
    "prononciation": "kuzin"
  },
  "coussin": {
    "homophones": [
      "coussins"
    ],
    "prononciation": "kus5"
  },
  "couteau": {
    "homophones": [
      "couteaux"
    ],
    "prononciation": "kuto"
  },
  "couver": {
    "homophones": [
      "couvez",
      "couvées",
      "couvée",
      "couvés",
      "couvé"
    ],
    "prononciation": "kuve"
  },
  "couvercle": {
    "homophones": [
      "couvercles"
    ],
    "prononciation": "kuvERkl"
  },
  "couvert": {
    "homophones": [
      "couverts"
    ],
    "prononciation": "kuvER"
  },
  "couverture": {
    "homophones": [
      "couvertures"
    ],
    "prononciation": "kuvERtyR"
  },
  "crabe": {
    "homophones": [
      "crabes"
    ],
    "prononciation": "kRab"
  },
  "cracher": {
    "homophones": [
      "crachez",
      "crachées",
      "crashée",
      "crachée",
      "crachés",
      "craché",
      "crashé",
      "crasher"
    ],
    "prononciation": "kRaSe"
  },
  "craie": {
    "homophones": [
      "craies",
      "crêt"
    ],
    "prononciation": "kRE"
  },
  "crapaud": {
    "homophones": [
      "crapauds"
    ],
    "prononciation": "kRapo"
  },
  "cravate": {
    "homophones": [
      "cravates"
    ],
    "prononciation": "kRavat"
  },
  "crayon": {
    "homophones": [
      "crayons"
    ],
    "prononciation": "kREj§"
  },
  "creux": {
    "homophones": [],
    "prononciation": "kR2"
  },
  "crevette": {
    "homophones": [
      "crevettes"
    ],
    "prononciation": "kR°vEt"
  },
  "cri": {
    "homophones": [
      "cries",
      "crient",
      "crie",
      "cris"
    ],
    "prononciation": "kRi"
  },
  "crier": {
    "homophones": [
      "criées",
      "criez",
      "criée",
      "criés",
      "crié"
    ],
    "prononciation": "kRije"
  },
  "crochet": {
    "homophones": [
      "crochets",
      "crochaient",
      "crochait"
    ],
    "prononciation": "kRoSE"
  },
  "crocodile": {
    "homophones": [
      "crocodiles"
    ],
    "prononciation": "kRokodil"
  },
  "croix": {
    "homophones": [
      "croîs",
      "croît",
      "croies",
      "croient",
      "crois",
      "croit",
      "croie"
    ],
    "prononciation": "kRwa"
  },
  "croquer": {
    "homophones": [
      "croqué",
      "croquez",
      "croquées",
      "croquée",
      "croqués"
    ],
    "prononciation": "kRoke"
  },
  "cru": {
    "homophones": [
      "crû",
      "crues",
      "crût",
      "crue",
      "crut",
      "crus"
    ],
    "prononciation": "kRy"
  },
  "cruel": {
    "homophones": [
      "cruelle",
      "cruelles",
      "cruels"
    ],
    "prononciation": "kRyEl"
  },
  "crèche": {
    "homophones": [
      "crèches",
      "crèchent"
    ],
    "prononciation": "kRES"
  },
  "cube": {
    "homophones": [
      "cubes"
    ],
    "prononciation": "kyb"
  },
  "cueillir": {
    "homophones": [
      "cueillirent"
    ],
    "prononciation": "k9jiR"
  },
  "cuillère": {
    "homophones": [
      "cuillers",
      "cuiller",
      "cuillères"
    ],
    "prononciation": "k8ijER"
  },
  "cuire": {
    "homophones": [
      "cuir",
      "cuirs"
    ],
    "prononciation": "k8iR"
  },
  "cuisine": {
    "homophones": [
      "cuisines",
      "cuisinent"
    ],
    "prononciation": "k8izin"
  },
  "cuisiner": {
    "homophones": [
      "cuisinées",
      "cuisinez",
      "cuisiné",
      "cuisinée",
      "cuisinés"
    ],
    "prononciation": "k8izine"
  },
  "cuisinière": {
    "homophones": [
      "cuisinières"
    ],
    "prononciation": "k8izinjER"
  },
  "cuisse": {
    "homophones": [
      "cuisses"
    ],
    "prononciation": "k8is"
  },
  "cuit": {
    "homophones": [
      "cuis",
      "cuits"
    ],
    "prononciation": "k8i"
  },
  "culotte": {
    "homophones": [
      "culottes"
    ],
    "prononciation": "kylOt"
  },
  "curieux": {
    "homophones": [],
    "prononciation": "kyRj2"
  },
  "cuvette": {
    "homophones": [
      "cuvettes"
    ],
    "prononciation": "kyvEt"
  },
  "cygne": {
    "homophones": [
      "signes",
      "signent",
      "cygnes",
      "signe"
    ],
    "prononciation": "siN"
  },
  "céréales": {
    "homophones": [
      "céréale"
    ],
    "prononciation": "seReal"
  },
  "dame": {
    "homophones": [
      "dames",
      "dament"
    ],
    "prononciation": "dam"
  },
  "danger": {
    "homophones": [
      "dangers"
    ],
    "prononciation": "d@Ze"
  },
  "dangereux": {
    "homophones": [],
    "prononciation": "d@Z°R2"
  },
  "dans": {
    "homophones": [
      "dam",
      "dents",
      "dams",
      "dent"
    ],
    "prononciation": "d@"
  },
  "danse": {
    "homophones": [
      "dense",
      "denses",
      "danses",
      "dansent"
    ],
    "prononciation": "d@s"
  },
  "danser": {
    "homophones": [
      "dansée",
      "dansez",
      "dansé"
    ],
    "prononciation": "d@se"
  },
  "dauphin": {
    "homophones": [
      "dauphins"
    ],
    "prononciation": "dof5"
  },
  "de": {
    "homophones": [],
    "prononciation": "d°"
  },
  "debout": {
    "homophones": [],
    "prononciation": "d°bu"
  },
  "dedans": {
    "homophones": [],
    "prononciation": "d°d@"
  },
  "dehors": {
    "homophones": [],
    "prononciation": "d2OR"
  },
  "demain": {
    "homophones": [
      "demains"
    ],
    "prononciation": "d°m5"
  },
  "demander": {
    "homophones": [
      "demandez",
      "demandé",
      "demandés",
      "demandée",
      "demandées"
    ],
    "prononciation": "d°m@de"
  },
  "demi": {
    "homophones": [
      "demies",
      "demis",
      "demie"
    ],
    "prononciation": "d°mi"
  },
  "dentifrice": {
    "homophones": [
      "dentifrices"
    ],
    "prononciation": "d@tifRis"
  },
  "dentiste": {
    "homophones": [
      "dentistes"
    ],
    "prononciation": "d@tist"
  },
  "dernier": {
    "homophones": [
      "derniers"
    ],
    "prononciation": "dERnje"
  },
  "derrière": {
    "homophones": [
      "derrières"
    ],
    "prononciation": "dERjER"
  },
  "descendre": {
    "homophones": [],
    "prononciation": "des@dR"
  },
  "dessert": {
    "homophones": [
      "desserrent",
      "dessers",
      "desserre",
      "desserts"
    ],
    "prononciation": "desER"
  },
  "dessin": {
    "homophones": [
      "dessein",
      "dessins",
      "desseins",
      "déceint"
    ],
    "prononciation": "des5"
  },
  "dessiner": {
    "homophones": [
      "dessinée",
      "dessinés",
      "dessinées",
      "dessiné",
      "dessinez"
    ],
    "prononciation": "desine"
  },
  "deux": {
    "homophones": [],
    "prononciation": "d2"
  },
  "devant": {
    "homophones": [
      "devants"
    ],
    "prononciation": "d°v@"
  },
  "devoir": {
    "homophones": [
      "devoirs"
    ],
    "prononciation": "d°vwaR"
  },
  "dictionnaire": {
    "homophones": [
      "dictionnaires"
    ],
    "prononciation": "diksjonER"
  },
  "difficile": {
    "homophones": [
      "difficiles"
    ],
    "prononciation": "difisil"
  },
  "différence": {
    "homophones": [
      "différences"
    ],
    "prononciation": "difeR@s"
  },
  "différent": {
    "homophones": [
      "différents",
      "différant",
      "différends",
      "différend"
    ],
    "prononciation": "difeR@"
  },
  "dimanche": {
    "homophones": [
      "dimanches"
    ],
    "prononciation": "dim@S"
  },
  "dindon": {
    "homophones": [
      "dindons"
    ],
    "prononciation": "d5d§"
  },
  "dinosaure": {
    "homophones": [
      "dinosaures"
    ],
    "prononciation": "dinozoR"
  },
  "dire": {
    "homophones": [
      "dires",
      "dirent"
    ],
    "prononciation": "diR"
  },
  "directeur": {
    "homophones": [
      "directeurs"
    ],
    "prononciation": "diREkt9R"
  },
  "directrice": {
    "homophones": [
      "directrices"
    ],
    "prononciation": "diREktRis"
  },
  "discuter": {
    "homophones": [
      "discutés",
      "discutée",
      "discutées",
      "discuté",
      "discutez"
    ],
    "prononciation": "diskyte"
  },
  "distribuer": {
    "homophones": [
      "distribuées",
      "distribué",
      "distribués",
      "distribuée"
    ],
    "prononciation": "distRib8e"
  },
  "dix": {
    "homophones": [
      "dissent"
    ],
    "prononciation": "dis"
  },
  "docteur": {
    "homophones": [
      "docteurs"
    ],
    "prononciation": "dOkt9R"
  },
  "doigt": {
    "homophones": [
      "doit",
      "dois",
      "doigts"
    ],
    "prononciation": "dwa"
  },
  "domino": {
    "homophones": [
      "dominos"
    ],
    "prononciation": "domino"
  },
  "donner": {
    "homophones": [
      "donnez",
      "donné",
      "données",
      "donnés",
      "donnée"
    ],
    "prononciation": "done"
  },
  "dormir": {
    "homophones": [
      "dormirent"
    ],
    "prononciation": "dORmiR"
  },
  "dossier": {
    "homophones": [
      "dossiers"
    ],
    "prononciation": "dosje"
  },
  "douche": {
    "homophones": [
      "douches",
      "douchent"
    ],
    "prononciation": "duS"
  },
  "doucher": {
    "homophones": [
      "douchez",
      "douché",
      "douchés",
      "douchée"
    ],
    "prononciation": "duSe"
  },
  "douillet": {
    "homophones": [
      "douillait",
      "douillets"
    ],
    "prononciation": "dujE"
  },
  "doux": {
    "homophones": [],
    "prononciation": "du"
  },
  "drapeau": {
    "homophones": [
      "drapeaux"
    ],
    "prononciation": "dRapo"
  },
  "droit": {
    "homophones": [
      "droits"
    ],
    "prononciation": "dRwa"
  },
  "du": {
    "homophones": [
      "due",
      "dut",
      "dus",
      "dû",
      "dût",
      "dues"
    ],
    "prononciation": "dy"
  },
  "dur": {
    "homophones": [
      "durent",
      "dures",
      "dure",
      "durs"
    ],
    "prononciation": "dyR"
  },
  "dé": {
    "homophones": [
      "des",
      "dés"
    ],
    "prononciation": "de"
  },
  "débordé": {
    "homophones": [
      "débordées",
      "débordez",
      "déborder",
      "débordés",
      "débordée"
    ],
    "prononciation": "debORde"
  },
  "début": {
    "homophones": [
      "débuts"
    ],
    "prononciation": "deby"
  },
  "déchirer": {
    "homophones": [
      "déchirés",
      "déchirée",
      "déchirées",
      "déchirez",
      "déchiré"
    ],
    "prononciation": "deSiRe"
  },
  "décoller": {
    "homophones": [
      "décollé",
      "décollées",
      "décollez",
      "décollée",
      "décollés"
    ],
    "prononciation": "dekole"
  },
  "décorer": {
    "homophones": [
      "décoré",
      "décorez",
      "décorées",
      "décorée",
      "décorés"
    ],
    "prononciation": "dekoRe"
  },
  "découpage": {
    "homophones": [
      "découpages"
    ],
    "prononciation": "dekupaZ"
  },
  "découper": {
    "homophones": [
      "découpé",
      "découpez",
      "découpées",
      "découpée",
      "découpés"
    ],
    "prononciation": "dekupe"
  },
  "défendre": {
    "homophones": [],
    "prononciation": "def@dR"
  },
  "défilé": {
    "homophones": [
      "défilée",
      "défilés",
      "défiler",
      "défilez"
    ],
    "prononciation": "defile"
  },
  "déguisement": {
    "homophones": [
      "déguisements"
    ],
    "prononciation": "degiz°m@"
  },
  "déguisé": {
    "homophones": [
      "déguisées",
      "déguisés",
      "déguisée",
      "déguiser",
      "déguisez"
    ],
    "prononciation": "degize"
  },
  "déjeuner": {
    "homophones": [
      "déjeuné",
      "déjeuners",
      "déjeunez"
    ],
    "prononciation": "deZ9ne"
  },
  "délicieux": {
    "homophones": [],
    "prononciation": "delisj2"
  },
  "démarrer": {
    "homophones": [
      "démarrée",
      "démarrés",
      "démarrées",
      "démarrez",
      "démarré"
    ],
    "prononciation": "demaRe"
  },
  "démolir": {
    "homophones": [
      "démolirent"
    ],
    "prononciation": "demoliR"
  },
  "déménager": {
    "homophones": [
      "déménagez",
      "déménagé",
      "déménagée",
      "déménagés"
    ],
    "prononciation": "demenaZe"
  },
  "départ": {
    "homophones": [
      "dépare",
      "départs"
    ],
    "prononciation": "depaR"
  },
  "dépasser": {
    "homophones": [
      "dépassées",
      "dépassée",
      "dépassés",
      "dépassé",
      "dépassez"
    ],
    "prononciation": "depase"
  },
  "déranger": {
    "homophones": [
      "dérangez",
      "dérangés",
      "dérangée",
      "dérangé",
      "dérangées"
    ],
    "prononciation": "deR@Ze"
  },
  "désobéir": {
    "homophones": [],
    "prononciation": "dezobeiR"
  },
  "désordre": {
    "homophones": [
      "désordres"
    ],
    "prononciation": "dezORdR"
  },
  "détester": {
    "homophones": [
      "détesté",
      "détestez",
      "détestée",
      "détestés"
    ],
    "prononciation": "detEste"
  },
  "détruire": {
    "homophones": [],
    "prononciation": "detR8iR"
  },
  "déçu": {
    "homophones": [
      "déçus",
      "déçut",
      "déçue",
      "déçues"
    ],
    "prononciation": "desy"
  },
  "effacer": {
    "homophones": [
      "effacée",
      "effacés",
      "effacez",
      "effacé",
      "effacées"
    ],
    "prononciation": "efase"
  },
  "effort": {
    "homophones": [
      "efforts"
    ],
    "prononciation": "efOR"
  },
  "effrayer": {
    "homophones": [
      "effrayées",
      "effrayé",
      "effrayée",
      "effrayés"
    ],
    "prononciation": "efREje"
  },
  "embouteillage": {
    "homophones": [
      "embouteillages"
    ],
    "prononciation": "@butEjaZ"
  },
  "emmener": {
    "homophones": [
      "emmenées",
      "emmenez",
      "emmené",
      "emmenée",
      "emmenés"
    ],
    "prononciation": "@m°ne"
  },
  "emporter": {
    "homophones": [
      "emportée",
      "emportés",
      "emportées",
      "emporté",
      "emportez"
    ],
    "prononciation": "@pORte"
  },
  "enceinte": {
    "homophones": [
      "enceintes"
    ],
    "prononciation": "@s5t"
  },
  "encore": {
    "homophones": [
      "encor"
    ],
    "prononciation": "@kOR"
  },
  "endives": {
    "homophones": [
      "endive"
    ],
    "prononciation": "@div"
  },
  "endroit": {
    "homophones": [
      "endroits"
    ],
    "prononciation": "@dRwa"
  },
  "enfant": {
    "homophones": [
      "enfants"
    ],
    "prononciation": "@f@"
  },
  "enfermer": {
    "homophones": [
      "enfermées",
      "enfermée",
      "enfermés",
      "enfermé",
      "enfermez"
    ],
    "prononciation": "@fERme"
  },
  "enfiler": {
    "homophones": [
      "enfilées",
      "enfilez",
      "enfilé",
      "enfilée",
      "enfilés"
    ],
    "prononciation": "@file"
  },
  "enfoncer": {
    "homophones": [
      "enfoncez",
      "enfoncée",
      "enfoncés",
      "enfoncé",
      "enfoncées"
    ],
    "prononciation": "@f§se"
  },
  "engin": {
    "homophones": [
      "engins"
    ],
    "prononciation": "@Z5"
  },
  "enlever": {
    "homophones": [
      "enlevé",
      "enlevés",
      "enlevée",
      "enlevez",
      "enlevées"
    ],
    "prononciation": "@l°ve"
  },
  "ensemble": {
    "homophones": [
      "ensembles"
    ],
    "prononciation": "@s@bl"
  },
  "entendre": {
    "homophones": [],
    "prononciation": "@t@dR"
  },
  "enterrer": {
    "homophones": [
      "enterrées",
      "enterrés",
      "enterrée",
      "enterré"
    ],
    "prononciation": "@teRe"
  },
  "entier": {
    "homophones": [
      "entiers"
    ],
    "prononciation": "@tje"
  },
  "entonnoir": {
    "homophones": [
      "entonnoirs"
    ],
    "prononciation": "@tonwaR"
  },
  "entouré": {
    "homophones": [
      "entourer",
      "entourez",
      "entourée",
      "entourés",
      "entourées"
    ],
    "prononciation": "@tuRe"
  },
  "entrée": {
    "homophones": [
      "entrés",
      "entrées",
      "entré",
      "entrez",
      "entrer"
    ],
    "prononciation": "@tRe"
  },
  "enveloppe": {
    "homophones": [
      "enveloppes",
      "enveloppent"
    ],
    "prononciation": "@v°lOp"
  },
  "envie": {
    "homophones": [
      "envient",
      "envies"
    ],
    "prononciation": "@vi"
  },
  "envoler": {
    "homophones": [
      "envolez",
      "envolées",
      "envolé",
      "envolés",
      "envolée"
    ],
    "prononciation": "@vole"
  },
  "envoyer": {
    "homophones": [
      "envoyée",
      "envoyés",
      "envoyées",
      "envoyiez",
      "envoyez",
      "envoyé"
    ],
    "prononciation": "@vwaje"
  },
  "escabeau": {
    "homophones": [
      "escabeaux"
    ],
    "prononciation": "Eskabo"
  },
  "escalader": {
    "homophones": [
      "escaladée",
      "escaladés",
      "escaladez",
      "escaladées",
      "escaladé"
    ],
    "prononciation": "Eskalade"
  },
  "escalier": {
    "homophones": [
      "escaliers"
    ],
    "prononciation": "Eskalje"
  },
  "escargot": {
    "homophones": [
      "escargots"
    ],
    "prononciation": "EskaRgo"
  },
  "essayer": {
    "homophones": [
      "essayez"
    ],
    "prononciation": "eseje"
  },
  "essence": {
    "homophones": [
      "essences"
    ],
    "prononciation": "es@s"
  },
  "essuyer": {
    "homophones": [
      "essuyé",
      "essuyés",
      "essuyée",
      "essuyées"
    ],
    "prononciation": "es8ije"
  },
  "expliquer": {
    "homophones": [
      "expliquée",
      "expliqués",
      "expliqué",
      "expliquées",
      "expliquez"
    ],
    "prononciation": "Eksplike"
  },
  "extérieur": {
    "homophones": [
      "extérieure",
      "extérieurs",
      "extérieures"
    ],
    "prononciation": "EksteRj9R"
  },
  "fabriquer": {
    "homophones": [
      "fabriquée",
      "fabriqués",
      "fabriqué",
      "fabriquez",
      "fabriquées"
    ],
    "prononciation": "fabRike"
  },
  "facile": {
    "homophones": [
      "faciles"
    ],
    "prononciation": "fasil"
  },
  "facteur": {
    "homophones": [
      "facteurs"
    ],
    "prononciation": "fakt9R"
  },
  "faire": {
    "homophones": [
      "ferre",
      "fers",
      "fer",
      "fère"
    ],
    "prononciation": "fER"
  },
  "fais": {
    "homophones": [
      "faits",
      "faix",
      "fait"
    ],
    "prononciation": "fE"
  },
  "falloir": {
    "homophones": [],
    "prononciation": "falwaR"
  },
  "farce": {
    "homophones": [
      "farces"
    ],
    "prononciation": "faRs"
  },
  "farine": {
    "homophones": [
      "farines"
    ],
    "prononciation": "faRin"
  },
  "fatigue": {
    "homophones": [
      "fatigues",
      "fatiguent"
    ],
    "prononciation": "fatig"
  },
  "faute": {
    "homophones": [
      "fautes"
    ],
    "prononciation": "fot"
  },
  "fauteuil": {
    "homophones": [
      "fauteuils"
    ],
    "prononciation": "fot9j"
  },
  "femme": {
    "homophones": [
      "femmes"
    ],
    "prononciation": "fam"
  },
  "ferme": {
    "homophones": [
      "ferment",
      "fermes"
    ],
    "prononciation": "fERm"
  },
  "fermer": {
    "homophones": [
      "fermé",
      "fermées",
      "fermée",
      "fermés",
      "fermez"
    ],
    "prononciation": "fERme"
  },
  "fermier": {
    "homophones": [
      "fermiez",
      "fermiers"
    ],
    "prononciation": "fERmje"
  },
  "fesses": {
    "homophones": [
      "fesse",
      "fèces"
    ],
    "prononciation": "fEs"
  },
  "feu": {
    "homophones": [
      "feux",
      "feue"
    ],
    "prononciation": "f2"
  },
  "feuille": {
    "homophones": [
      "feuilles"
    ],
    "prononciation": "f9j"
  },
  "feutre": {
    "homophones": [
      "feutres",
      "feutrent"
    ],
    "prononciation": "f2tR"
  },
  "ficelle": {
    "homophones": [
      "ficelles"
    ],
    "prononciation": "fisEl"
  },
  "figure": {
    "homophones": [
      "figurent",
      "figures"
    ],
    "prononciation": "figyR"
  },
  "fil": {
    "homophones": [
      "filent",
      "file",
      "files"
    ],
    "prononciation": "fil"
  },
  "filet": {
    "homophones": [
      "filets",
      "filaient",
      "filais",
      "filait",
      "filai"
    ],
    "prononciation": "filE"
  },
  "fille": {
    "homophones": [
      "filles"
    ],
    "prononciation": "fij"
  },
  "film": {
    "homophones": [
      "filmes",
      "filment",
      "films",
      "filme"
    ],
    "prononciation": "film"
  },
  "fils": {
    "homophones": [
      "fisse",
      "fissent"
    ],
    "prononciation": "fis"
  },
  "fin": {
    "homophones": [
      "feints",
      "faims",
      "fins",
      "faim",
      "feins",
      "feint"
    ],
    "prononciation": "f5"
  },
  "finir": {
    "homophones": [
      "finirent"
    ],
    "prononciation": "finiR"
  },
  "fièvre": {
    "homophones": [
      "fièvres"
    ],
    "prononciation": "fjEvR"
  },
  "flamme": {
    "homophones": [
      "flammes"
    ],
    "prononciation": "flam"
  },
  "flaque": {
    "homophones": [
      "flaques",
      "flac"
    ],
    "prononciation": "flak"
  },
  "fleur": {
    "homophones": [
      "fleurent",
      "fleure",
      "fleurs"
    ],
    "prononciation": "fl9R"
  },
  "fleuriste": {
    "homophones": [
      "fleuristes"
    ],
    "prononciation": "fl9Rist"
  },
  "flocon": {
    "homophones": [
      "flocons"
    ],
    "prononciation": "flok§"
  },
  "flotter": {
    "homophones": [
      "flotté",
      "flottés",
      "flottée",
      "flottez",
      "flottées"
    ],
    "prononciation": "flote"
  },
  "flèche": {
    "homophones": [
      "flèches"
    ],
    "prononciation": "flES"
  },
  "foin": {
    "homophones": [
      "foins"
    ],
    "prononciation": "fw5"
  },
  "foire": {
    "homophones": [
      "foires",
      "foirent"
    ],
    "prononciation": "fwaR"
  },
  "foncé": {
    "homophones": [
      "foncée",
      "foncés",
      "foncées",
      "foncez",
      "foncer"
    ],
    "prononciation": "f§se"
  },
  "fond": {
    "homophones": [
      "font",
      "fonds",
      "fonts"
    ],
    "prononciation": "f§"
  },
  "fontaine": {
    "homophones": [
      "fontaines"
    ],
    "prononciation": "f§tEn"
  },
  "forme": {
    "homophones": [
      "forment",
      "formes"
    ],
    "prononciation": "fORm"
  },
  "fort": {
    "homophones": [
      "forts",
      "fore",
      "for",
      "fors",
      "forent"
    ],
    "prononciation": "fOR"
  },
  "fou": {
    "homophones": [
      "fous",
      "fout"
    ],
    "prononciation": "fu"
  },
  "fouiller": {
    "homophones": [
      "fouillée",
      "fouillés",
      "fouillez",
      "fouilliez",
      "fouillées",
      "fouillé"
    ],
    "prononciation": "fuje"
  },
  "four": {
    "homophones": [
      "fourrent",
      "fourre",
      "fours"
    ],
    "prononciation": "fuR"
  },
  "fourchette": {
    "homophones": [
      "fourchettes"
    ],
    "prononciation": "fuRSEt"
  },
  "fraise": {
    "homophones": [
      "fraises"
    ],
    "prononciation": "fREz"
  },
  "framboise": {
    "homophones": [
      "framboises"
    ],
    "prononciation": "fR@bwaz"
  },
  "frange": {
    "homophones": [
      "franges",
      "frangent"
    ],
    "prononciation": "fR@Z"
  },
  "frapper": {
    "homophones": [
      "frappé",
      "frappez",
      "frappés",
      "frappée",
      "frappées"
    ],
    "prononciation": "fRape"
  },
  "frein": {
    "homophones": [
      "freins"
    ],
    "prononciation": "fR5"
  },
  "frites": {
    "homophones": [
      "frite",
      "fritte"
    ],
    "prononciation": "fRit"
  },
  "froid": {
    "homophones": [
      "froids"
    ],
    "prononciation": "fRwa"
  },
  "fromage": {
    "homophones": [
      "fromages"
    ],
    "prononciation": "fRomaZ"
  },
  "front": {
    "homophones": [
      "fronts"
    ],
    "prononciation": "fR§"
  },
  "frotter": {
    "homophones": [
      "frottez",
      "frotté",
      "frottée",
      "frottés",
      "frottées"
    ],
    "prononciation": "fRote"
  },
  "fruit": {
    "homophones": [
      "fruits"
    ],
    "prononciation": "fR8i"
  },
  "frère": {
    "homophones": [
      "frères"
    ],
    "prononciation": "fRER"
  },
  "fumer": {
    "homophones": [
      "fumé",
      "fumées",
      "fumée",
      "fumés",
      "fumez"
    ],
    "prononciation": "fyme"
  },
  "fumée": {
    "homophones": [
      "fumé",
      "fumées",
      "fumés",
      "fumez",
      "fumer"
    ],
    "prononciation": "fyme"
  },
  "fusil": {
    "homophones": [
      "fusils"
    ],
    "prononciation": "fyzi"
  },
  "fusée": {
    "homophones": [
      "fusé",
      "fuser",
      "fusées"
    ],
    "prononciation": "fyze"
  },
  "fève": {
    "homophones": [
      "fèves"
    ],
    "prononciation": "fEv"
  },
  "gagner": {
    "homophones": [
      "gagniez",
      "gagnées",
      "gagnée",
      "gagnés",
      "gagné",
      "gagnez"
    ],
    "prononciation": "gaNe"
  },
  "galette": {
    "homophones": [
      "galettes"
    ],
    "prononciation": "galEt"
  },
  "galoper": {
    "homophones": [
      "galopé",
      "galopez"
    ],
    "prononciation": "galope"
  },
  "gant": {
    "homophones": [
      "gants"
    ],
    "prononciation": "g@"
  },
  "garage": {
    "homophones": [
      "garages"
    ],
    "prononciation": "gaRaZ"
  },
  "garder": {
    "homophones": [
      "gardé",
      "gardée",
      "gardés",
      "gardez",
      "gardées"
    ],
    "prononciation": "gaRde"
  },
  "gardien": {
    "homophones": [
      "gardiens"
    ],
    "prononciation": "gaRdj5"
  },
  "gare": {
    "homophones": [
      "gares",
      "garent"
    ],
    "prononciation": "gaR"
  },
  "garer": {
    "homophones": [
      "garez",
      "garées",
      "garé",
      "garés",
      "garée"
    ],
    "prononciation": "gaRe"
  },
  "garçon": {
    "homophones": [
      "garçons"
    ],
    "prononciation": "gaRs§"
  },
  "gauche": {
    "homophones": [
      "gauches"
    ],
    "prononciation": "goS"
  },
  "gelé": {
    "homophones": [
      "gelez",
      "geler",
      "gelées",
      "gelés",
      "gelée"
    ],
    "prononciation": "Z°le"
  },
  "genou": {
    "homophones": [
      "genoux"
    ],
    "prononciation": "Z°nu"
  },
  "gentil": {
    "homophones": [
      "gentils"
    ],
    "prononciation": "Z@ti"
  },
  "girafe": {
    "homophones": [
      "girafes"
    ],
    "prononciation": "ZiRaf"
  },
  "glace": {
    "homophones": [
      "glass",
      "glasses",
      "glacent",
      "glaces"
    ],
    "prononciation": "glas"
  },
  "glaçon": {
    "homophones": [
      "glaçons"
    ],
    "prononciation": "glas§"
  },
  "glisser": {
    "homophones": [
      "glissées",
      "glissez",
      "glissés",
      "glissée",
      "glissé"
    ],
    "prononciation": "glise"
  },
  "gobelet": {
    "homophones": [
      "gobelets"
    ],
    "prononciation": "gOb°lE"
  },
  "gomme": {
    "homophones": [
      "gomment",
      "gommes"
    ],
    "prononciation": "gOm"
  },
  "gonfler": {
    "homophones": [
      "gonflée",
      "gonflés",
      "gonflé",
      "gonflez",
      "gonflées"
    ],
    "prononciation": "g§fle"
  },
  "gorge": {
    "homophones": [
      "gorges",
      "gorgent"
    ],
    "prononciation": "gORZ"
  },
  "gourde": {
    "homophones": [
      "gourdes"
    ],
    "prononciation": "guRd"
  },
  "gourmand": {
    "homophones": [
      "gourmands"
    ],
    "prononciation": "guRm@"
  },
  "goutte": {
    "homophones": [
      "goûte",
      "goûtes",
      "goûtent",
      "gouttes"
    ],
    "prononciation": "gut"
  },
  "grain": {
    "homophones": [
      "grains"
    ],
    "prononciation": "gR5"
  },
  "graine": {
    "homophones": [
      "graines",
      "grène"
    ],
    "prononciation": "gREn"
  },
  "graines": {
    "homophones": [
      "graine",
      "grène"
    ],
    "prononciation": "gREn"
  },
  "grand": {
    "homophones": [
      "grands"
    ],
    "prononciation": "gR@"
  },
  "grand-mère": {
    "homophones": [
      "grands-mères",
      "grand-mères"
    ],
    "prononciation": "gR@mER"
  },
  "grand-père": {
    "homophones": [
      "grands-pères"
    ],
    "prononciation": "gR@pER"
  },
  "grandir": {
    "homophones": [
      "grandirent"
    ],
    "prononciation": "gR@diR"
  },
  "grands-parents": {
    "homophones": [],
    "prononciation": "gR@paR@"
  },
  "gratter": {
    "homophones": [
      "grattez",
      "gratté",
      "grattée",
      "grattés",
      "grattées"
    ],
    "prononciation": "gRate"
  },
  "grenouille": {
    "homophones": [
      "grenouilles"
    ],
    "prononciation": "gR°nuj"
  },
  "griffe": {
    "homophones": [
      "griffes",
      "griffent"
    ],
    "prononciation": "gRif"
  },
  "griffer": {
    "homophones": [
      "griffées",
      "griffé",
      "griffée",
      "griffés"
    ],
    "prononciation": "gRife"
  },
  "grignoter": {
    "homophones": [
      "grignotée",
      "grignotés",
      "grignoté",
      "grignotées"
    ],
    "prononciation": "gRiNote"
  },
  "griller": {
    "homophones": [
      "grillée",
      "grillé",
      "grillés",
      "grilliez",
      "grillées",
      "grillez"
    ],
    "prononciation": "gRije"
  },
  "grimace": {
    "homophones": [
      "grimacent",
      "grimasse",
      "grimaces"
    ],
    "prononciation": "gRimas"
  },
  "grimper": {
    "homophones": [
      "grimpés",
      "grimpée",
      "grimpé",
      "grimpez",
      "grimpées"
    ],
    "prononciation": "gR5pe"
  },
  "gris": {
    "homophones": [],
    "prononciation": "gRi"
  },
  "gronder": {
    "homophones": [
      "grondés",
      "grondée",
      "grondé",
      "grondez"
    ],
    "prononciation": "gR§de"
  },
  "gros": {
    "homophones": [
      "grau"
    ],
    "prononciation": "gRo"
  },
  "grotte": {
    "homophones": [
      "grottes"
    ],
    "prononciation": "gROt"
  },
  "groupé": {
    "homophones": [
      "groupées",
      "groupez",
      "grouper",
      "groupés",
      "groupée"
    ],
    "prononciation": "gRupe"
  },
  "grue": {
    "homophones": [
      "grues"
    ],
    "prononciation": "gRy"
  },
  "guetter": {
    "homophones": [
      "gaieté",
      "guetté",
      "guettées",
      "gaîté",
      "guettée",
      "guettés"
    ],
    "prononciation": "gete"
  },
  "guirlande": {
    "homophones": [
      "guirlandes"
    ],
    "prononciation": "giRl@d"
  },
  "guéri": {
    "homophones": [
      "guérît",
      "guéries",
      "guérit",
      "guéris",
      "guérie"
    ],
    "prononciation": "geRi"
  },
  "guérir": {
    "homophones": [],
    "prononciation": "geRiR"
  },
  "gymnastique": {
    "homophones": [
      "gymnastiques"
    ],
    "prononciation": "Zimnastik"
  },
  "géant": {
    "homophones": [
      "géants"
    ],
    "prononciation": "Ze@"
  },
  "habiter": {
    "homophones": [
      "habitez",
      "habitée",
      "habités",
      "habitées",
      "habité"
    ],
    "prononciation": "abite"
  },
  "habits": {
    "homophones": [
      "habit"
    ],
    "prononciation": "abi"
  },
  "hamster": {
    "homophones": [
      "hamsters"
    ],
    "prononciation": "amstER"
  },
  "hanche": {
    "homophones": [
      "anche",
      "hanches"
    ],
    "prononciation": "@S"
  },
  "handicapé": {
    "homophones": [
      "handicapées",
      "handicapée",
      "handicapés",
      "handicaper"
    ],
    "prononciation": "@dikape"
  },
  "haricot": {
    "homophones": [
      "haricots"
    ],
    "prononciation": "aRiko"
  },
  "herbe": {
    "homophones": [
      "herbes"
    ],
    "prononciation": "ERb"
  },
  "heure": {
    "homophones": [
      "heurts",
      "heur",
      "heures",
      "heurs",
      "heurt"
    ],
    "prononciation": "9R"
  },
  "heureux": {
    "homophones": [],
    "prononciation": "2R2"
  },
  "hibou": {
    "homophones": [
      "hiboux"
    ],
    "prononciation": "ibu"
  },
  "hier": {
    "homophones": [],
    "prononciation": "jER"
  },
  "hippopotame": {
    "homophones": [
      "hippopotames"
    ],
    "prononciation": "ipopotam"
  },
  "hirondelle": {
    "homophones": [
      "hirondelles"
    ],
    "prononciation": "iR§dEl"
  },
  "histoire": {
    "homophones": [
      "histoires"
    ],
    "prononciation": "istwaR"
  },
  "hiver": {
    "homophones": [
      "hivers"
    ],
    "prononciation": "ivER"
  },
  "homme": {
    "homophones": [
      "hommes",
      "hom"
    ],
    "prononciation": "Om"
  },
  "horloge": {
    "homophones": [
      "horloges"
    ],
    "prononciation": "ORlOZ"
  },
  "huile": {
    "homophones": [
      "huiles",
      "huilent"
    ],
    "prononciation": "8il"
  },
  "huit": {
    "homophones": [],
    "prononciation": "8it"
  },
  "humeur": {
    "homophones": [
      "humeurs"
    ],
    "prononciation": "ym9R"
  },
  "humide": {
    "homophones": [
      "humides"
    ],
    "prononciation": "ymid"
  },
  "hurlait": {
    "homophones": [
      "hurlai",
      "hurlaient",
      "hurlais"
    ],
    "prononciation": "yRlE"
  },
  "hélicoptère": {
    "homophones": [
      "hélicoptères"
    ],
    "prononciation": "elikOptER"
  },
  "hérisson": {
    "homophones": [
      "hérissons"
    ],
    "prononciation": "eRis§"
  },
  "hésiter": {
    "homophones": [
      "hésitez",
      "hésité"
    ],
    "prononciation": "ezite"
  },
  "ici": {
    "homophones": [],
    "prononciation": "isi"
  },
  "idée": {
    "homophones": [
      "idées"
    ],
    "prononciation": "ide"
  },
  "images": {
    "homophones": [
      "image"
    ],
    "prononciation": "imaZ"
  },
  "imaginer": {
    "homophones": [
      "imaginez",
      "imaginé",
      "imaginées",
      "imaginée",
      "imaginés"
    ],
    "prononciation": "imaZine"
  },
  "imiter": {
    "homophones": [
      "imité",
      "imitées",
      "imitez",
      "imités",
      "imitée"
    ],
    "prononciation": "imite"
  },
  "immense": {
    "homophones": [
      "immenses"
    ],
    "prononciation": "im@s"
  },
  "immeuble": {
    "homophones": [
      "immeubles"
    ],
    "prononciation": "im9bl"
  },
  "immobile": {
    "homophones": [
      "immobiles"
    ],
    "prononciation": "imobil"
  },
  "important": {
    "homophones": [
      "importants"
    ],
    "prononciation": "5pORt@"
  },
  "impossible": {
    "homophones": [
      "impossibles"
    ],
    "prononciation": "5posibl"
  },
  "incendie": {
    "homophones": [
      "incendient",
      "incendies"
    ],
    "prononciation": "5s@di"
  },
  "infirmier": {
    "homophones": [
      "infirmiers"
    ],
    "prononciation": "5fiRmje"
  },
  "infirmière": {
    "homophones": [
      "infirmières"
    ],
    "prononciation": "5fiRmjER"
  },
  "inonder": {
    "homophones": [
      "inondez",
      "inondé",
      "inondées",
      "inondés",
      "inondée"
    ],
    "prononciation": "in§de"
  },
  "insecte": {
    "homophones": [
      "insectes"
    ],
    "prononciation": "5sEkt"
  },
  "instable": {
    "homophones": [
      "instables"
    ],
    "prononciation": "5stabl"
  },
  "installer": {
    "homophones": [
      "installés",
      "installée",
      "installé",
      "installées",
      "installez"
    ],
    "prononciation": "5stale"
  },
  "instrument": {
    "homophones": [
      "instruments"
    ],
    "prononciation": "5stRym@"
  },
  "inséparable": {
    "homophones": [
      "inséparables"
    ],
    "prononciation": "5sepaRabl"
  },
  "intrus": {
    "homophones": [],
    "prononciation": "5tRy"
  },
  "intéressant": {
    "homophones": [
      "intéressants"
    ],
    "prononciation": "5teREs@"
  },
  "intérieur": {
    "homophones": [
      "intérieurs",
      "intérieure",
      "intérieures"
    ],
    "prononciation": "5teRj9R"
  },
  "invitation": {
    "homophones": [
      "invitations"
    ],
    "prononciation": "5vitasj§"
  },
  "invité": {
    "homophones": [
      "invitez",
      "inviter",
      "invitées",
      "invités",
      "invitée"
    ],
    "prononciation": "5vite"
  },
  "jaloux": {
    "homophones": [],
    "prononciation": "Zalu"
  },
  "jamais": {
    "homophones": [],
    "prononciation": "ZamE"
  },
  "jambes": {
    "homophones": [
      "jambe"
    ],
    "prononciation": "Z@b"
  },
  "jambon": {
    "homophones": [
      "jambons"
    ],
    "prononciation": "Z@b§"
  },
  "jardin": {
    "homophones": [
      "jardins"
    ],
    "prononciation": "ZaRd5"
  },
  "jardiner": {
    "homophones": [
      "jardiné"
    ],
    "prononciation": "ZaRdine"
  },
  "jaune": {
    "homophones": [
      "jaunes"
    ],
    "prononciation": "Zon"
  },
  "je": {
    "homophones": [],
    "prononciation": "Z°"
  },
  "jean": {
    "homophones": [
      "gins",
      "djinns",
      "gin",
      "djinn"
    ],
    "prononciation": "dZin"
  },
  "jeudi": {
    "homophones": [
      "jeudis"
    ],
    "prononciation": "Z2di"
  },
  "jeune": {
    "homophones": [
      "jeunes"
    ],
    "prononciation": "Z9n"
  },
  "joie": {
    "homophones": [
      "joies",
      "jouât",
      "joua"
    ],
    "prononciation": "Zwa"
  },
  "jolie": {
    "homophones": [
      "jolies",
      "jolis",
      "joli"
    ],
    "prononciation": "Zoli"
  },
  "jongler": {
    "homophones": [
      "jonglez",
      "jonglé"
    ],
    "prononciation": "Z§gle"
  },
  "jonquille": {
    "homophones": [
      "jonquilles"
    ],
    "prononciation": "Z§kij"
  },
  "joue": {
    "homophones": [
      "jouent",
      "joues",
      "jougs",
      "joug"
    ],
    "prononciation": "Zu"
  },
  "jouet": {
    "homophones": [
      "jouets",
      "jouait",
      "jouais",
      "jouaient",
      "jouai"
    ],
    "prononciation": "ZwE"
  },
  "jour": {
    "homophones": [
      "jours"
    ],
    "prononciation": "ZuR"
  },
  "journaux": {
    "homophones": [],
    "prononciation": "ZuRno"
  },
  "journée": {
    "homophones": [
      "journées"
    ],
    "prononciation": "ZuRne"
  },
  "joyeux": {
    "homophones": [],
    "prononciation": "Zwaj2"
  },
  "jumeau": {
    "homophones": [
      "jumeaux"
    ],
    "prononciation": "Zymo"
  },
  "jumelles": {
    "homophones": [
      "jumelle"
    ],
    "prononciation": "ZymEl"
  },
  "jus": {
    "homophones": [],
    "prononciation": "Zy"
  },
  "kangourou": {
    "homophones": [
      "kangourous"
    ],
    "prononciation": "k@guRu"
  },
  "kiwi": {
    "homophones": [
      "kiwis"
    ],
    "prononciation": "kiwi"
  },
  "lac": {
    "homophones": [
      "lacs",
      "lack",
      "laques",
      "laque"
    ],
    "prononciation": "lak"
  },
  "lacet": {
    "homophones": [
      "lacets",
      "lassai",
      "lassaient",
      "laçais",
      "laçait",
      "lassait",
      "lassais"
    ],
    "prononciation": "lasE"
  },
  "laine": {
    "homophones": [
      "laines"
    ],
    "prononciation": "lEn"
  },
  "laisse": {
    "homophones": [
      "laisses",
      "laissent"
    ],
    "prononciation": "lEs"
  },
  "laisser": {
    "homophones": [
      "laissées",
      "laissée",
      "laissés",
      "laissé"
    ],
    "prononciation": "lese"
  },
  "lait": {
    "homophones": [
      "lai",
      "lei",
      "let",
      "lez",
      "laid",
      "laie",
      "lais",
      "lès",
      "laits",
      "laids",
      "laies"
    ],
    "prononciation": "lE"
  },
  "lame": {
    "homophones": [
      "lames"
    ],
    "prononciation": "lam"
  },
  "lampe": {
    "homophones": [
      "lampent",
      "lampes"
    ],
    "prononciation": "l@p"
  },
  "lancer": {
    "homophones": [
      "lancés",
      "lancée",
      "lancé",
      "lancers",
      "lancez",
      "lancées"
    ],
    "prononciation": "l@se"
  },
  "langue": {
    "homophones": [
      "langues"
    ],
    "prononciation": "l@g"
  },
  "lapin": {
    "homophones": [
      "lapins"
    ],
    "prononciation": "lap5"
  },
  "large": {
    "homophones": [
      "larges"
    ],
    "prononciation": "laRZ"
  },
  "lavabo": {
    "homophones": [
      "lavabos"
    ],
    "prononciation": "lavabo"
  },
  "lave-linge": {
    "homophones": [],
    "prononciation": "lavl5Z"
  },
  "laver": {
    "homophones": [
      "lavez",
      "lavé",
      "lavées",
      "lavés",
      "lavée"
    ],
    "prononciation": "lave"
  },
  "lecture": {
    "homophones": [
      "lectures"
    ],
    "prononciation": "lEktyR"
  },
  "lent": {
    "homophones": [
      "lents"
    ],
    "prononciation": "l@"
  },
  "lessive": {
    "homophones": [
      "lessives"
    ],
    "prononciation": "lesiv"
  },
  "lettre": {
    "homophones": [
      "lettres"
    ],
    "prononciation": "lEtR"
  },
  "lever": {
    "homophones": [
      "levé",
      "levers",
      "levée",
      "levés",
      "levées",
      "levez"
    ],
    "prononciation": "l°ve"
  },
  "ligne": {
    "homophones": [
      "lignes"
    ],
    "prononciation": "liN"
  },
  "linge": {
    "homophones": [
      "linges"
    ],
    "prononciation": "l5Z"
  },
  "liquide": {
    "homophones": [
      "liquident",
      "liquides"
    ],
    "prononciation": "likid"
  },
  "lire": {
    "homophones": [
      "lyres",
      "lyre",
      "lires"
    ],
    "prononciation": "liR"
  },
  "lis": {
    "homophones": [
      "lices",
      "lys",
      "lisse",
      "lice",
      "lisses",
      "lissent"
    ],
    "prononciation": "lis"
  },
  "lisse": {
    "homophones": [
      "lis",
      "lices",
      "lys",
      "lice",
      "lisses",
      "lissent"
    ],
    "prononciation": "lis"
  },
  "liste": {
    "homophones": [
      "listes"
    ],
    "prononciation": "list"
  },
  "litre": {
    "homophones": [
      "litres"
    ],
    "prononciation": "litR"
  },
  "livre": {
    "homophones": [
      "livrent",
      "livres"
    ],
    "prononciation": "livR"
  },
  "loin": {
    "homophones": [],
    "prononciation": "lw5"
  },
  "long": {
    "homophones": [
      "longs"
    ],
    "prononciation": "l§"
  },
  "louche": {
    "homophones": [
      "louches",
      "louchent"
    ],
    "prononciation": "luS"
  },
  "loup": {
    "homophones": [
      "loups",
      "loues",
      "loue",
      "louent"
    ],
    "prononciation": "lu"
  },
  "loupe": {
    "homophones": [
      "loupent",
      "loupes"
    ],
    "prononciation": "lup"
  },
  "lourd": {
    "homophones": [
      "lur",
      "lourds"
    ],
    "prononciation": "luR"
  },
  "luge": {
    "homophones": [
      "luges"
    ],
    "prononciation": "lyZ"
  },
  "lumière": {
    "homophones": [
      "lumières"
    ],
    "prononciation": "lymjER"
  },
  "lundi": {
    "homophones": [
      "lundis"
    ],
    "prononciation": "l1di"
  },
  "lune": {
    "homophones": [
      "lunes",
      "l'une"
    ],
    "prononciation": "lyn"
  },
  "lunettes": {
    "homophones": [
      "lunette"
    ],
    "prononciation": "lynEt"
  },
  "lutin": {
    "homophones": [
      "lutins"
    ],
    "prononciation": "lyt5"
  },
  "là": {
    "homophones": [
      "las",
      "la"
    ],
    "prononciation": "la"
  },
  "lèvres": {
    "homophones": [
      "lèvre"
    ],
    "prononciation": "lEvR"
  },
  "lécher": {
    "homophones": [
      "léchés",
      "léchée",
      "léché",
      "léchées",
      "léchez"
    ],
    "prononciation": "leSe"
  },
  "léger": {
    "homophones": [
      "légers"
    ],
    "prononciation": "leZe"
  },
  "légumes": {
    "homophones": [
      "légume"
    ],
    "prononciation": "legym"
  },
  "lézard": {
    "homophones": [
      "lézards"
    ],
    "prononciation": "lezaR"
  },
  "machine": {
    "homophones": [
      "machines"
    ],
    "prononciation": "maSin"
  },
  "madame": {
    "homophones": [
      "mme"
    ],
    "prononciation": "madam"
  },
  "magasin": {
    "homophones": [
      "magasins"
    ],
    "prononciation": "magaz5"
  },
  "magazine": {
    "homophones": [
      "magasine",
      "magasines",
      "magazines"
    ],
    "prononciation": "magazin"
  },
  "magicien": {
    "homophones": [
      "magiciens"
    ],
    "prononciation": "maZisj5"
  },
  "magie": {
    "homophones": [
      "magies"
    ],
    "prononciation": "maZi"
  },
  "magnétoscope": {
    "homophones": [
      "magnétoscopes"
    ],
    "prononciation": "maNetoskOp"
  },
  "maigre": {
    "homophones": [
      "maigres"
    ],
    "prononciation": "mEgR"
  },
  "maillot": {
    "homophones": [
      "maillots",
      "mayo"
    ],
    "prononciation": "majo"
  },
  "main": {
    "homophones": [
      "maints",
      "maint",
      "mains"
    ],
    "prononciation": "m5"
  },
  "maintenant": {
    "homophones": [],
    "prononciation": "m5t°n@"
  },
  "maison": {
    "homophones": [
      "maisons"
    ],
    "prononciation": "mEz§"
  },
  "mal": {
    "homophones": [
      "malles",
      "male",
      "mâle",
      "mâles",
      "males",
      "malle"
    ],
    "prononciation": "mal"
  },
  "malade": {
    "homophones": [
      "malades"
    ],
    "prononciation": "malad"
  },
  "maladroit": {
    "homophones": [
      "maladroits"
    ],
    "prononciation": "maladRwa"
  },
  "maman": {
    "homophones": [
      "mamans"
    ],
    "prononciation": "mam@"
  },
  "manche": {
    "homophones": [
      "manches"
    ],
    "prononciation": "m@S"
  },
  "manger": {
    "homophones": [
      "mangées",
      "mangé",
      "mangez",
      "mangée",
      "mangés"
    ],
    "prononciation": "m@Ze"
  },
  "manquer": {
    "homophones": [
      "manquées",
      "manqué",
      "manquée",
      "manqués",
      "manquez"
    ],
    "prononciation": "m@ke"
  },
  "manteau": {
    "homophones": [
      "manteaux",
      "mentaux"
    ],
    "prononciation": "m@to"
  },
  "manège": {
    "homophones": [
      "manèges"
    ],
    "prononciation": "manEZ"
  },
  "maquillage": {
    "homophones": [
      "maquillages"
    ],
    "prononciation": "makijaZ"
  },
  "maquiller": {
    "homophones": [
      "maquillé",
      "maquillez",
      "maquilliez",
      "maquillées",
      "maquillés",
      "maquillée"
    ],
    "prononciation": "makije"
  },
  "marchand": {
    "homophones": [
      "marchands",
      "marchant"
    ],
    "prononciation": "maRS@"
  },
  "marche": {
    "homophones": [
      "marchent",
      "marches"
    ],
    "prononciation": "maRS"
  },
  "marché": {
    "homophones": [
      "marcher",
      "marchez",
      "marchées",
      "marchés"
    ],
    "prononciation": "maRSe"
  },
  "mardi": {
    "homophones": [
      "mardis"
    ],
    "prononciation": "maRdi"
  },
  "mare": {
    "homophones": [
      "marc",
      "marres",
      "marre",
      "marrent",
      "marcs",
      "mares"
    ],
    "prononciation": "maR"
  },
  "marguerite": {
    "homophones": [
      "marguerites"
    ],
    "prononciation": "maRg°Rit"
  },
  "mariage": {
    "homophones": [
      "mariages"
    ],
    "prononciation": "maRjaZ"
  },
  "marin": {
    "homophones": [
      "marins"
    ],
    "prononciation": "maR5"
  },
  "marionnette": {
    "homophones": [
      "marionnettes"
    ],
    "prononciation": "maRjonEt"
  },
  "marron": {
    "homophones": [
      "marrons"
    ],
    "prononciation": "maR§"
  },
  "marteau": {
    "homophones": [
      "marteaux"
    ],
    "prononciation": "maRto"
  },
  "masque": {
    "homophones": [
      "masquent",
      "masques"
    ],
    "prononciation": "mask"
  },
  "matelas": {
    "homophones": [],
    "prononciation": "mat°la"
  },
  "maternelle": {
    "homophones": [
      "maternelles",
      "maternel",
      "maternels"
    ],
    "prononciation": "matERnEl"
  },
  "matin": {
    "homophones": [
      "mâtins",
      "matins",
      "mâtin"
    ],
    "prononciation": "mat5"
  },
  "mauvais": {
    "homophones": [],
    "prononciation": "movE"
  },
  "meilleur": {
    "homophones": [
      "meilleures",
      "meilleurs",
      "meilleure"
    ],
    "prononciation": "mEj9R"
  },
  "melon": {
    "homophones": [
      "melons"
    ],
    "prononciation": "m°l§"
  },
  "mensonge": {
    "homophones": [
      "mensonges"
    ],
    "prononciation": "m@s§Z"
  },
  "menton": {
    "homophones": [
      "mentons"
    ],
    "prononciation": "m@t§"
  },
  "mer": {
    "homophones": [
      "mère",
      "maires",
      "maire",
      "mers",
      "mères"
    ],
    "prononciation": "mER"
  },
  "mercredi": {
    "homophones": [
      "mercredis"
    ],
    "prononciation": "mERkR°di"
  },
  "mesurer": {
    "homophones": [
      "mesurés",
      "mesurée",
      "mesurez",
      "mesuré",
      "mesurées"
    ],
    "prononciation": "m°zyRe"
  },
  "mettre": {
    "homophones": [
      "maîtres",
      "maître",
      "mètres",
      "mètre"
    ],
    "prononciation": "mEtR"
  },
  "meuble": {
    "homophones": [
      "meubles",
      "meublent"
    ],
    "prononciation": "m9bl"
  },
  "micro": {
    "homophones": [
      "micros"
    ],
    "prononciation": "mikRo"
  },
  "midi": {
    "homophones": [
      "midis"
    ],
    "prononciation": "midi"
  },
  "mie": {
    "homophones": [
      "mies",
      "mis",
      "mit",
      "mi",
      "mît"
    ],
    "prononciation": "mi"
  },
  "miel": {
    "homophones": [
      "miels",
      "mielle"
    ],
    "prononciation": "mjEl"
  },
  "mieux": {
    "homophones": [],
    "prononciation": "mj2"
  },
  "milieu": {
    "homophones": [
      "milieux"
    ],
    "prononciation": "milj2"
  },
  "mince": {
    "homophones": [
      "minces"
    ],
    "prononciation": "m5s"
  },
  "mine": {
    "homophones": [
      "mines",
      "min",
      "minent"
    ],
    "prononciation": "min"
  },
  "minuit": {
    "homophones": [
      "mi-nuit",
      "minuits"
    ],
    "prononciation": "min8i"
  },
  "minute": {
    "homophones": [
      "minutes",
      "mn"
    ],
    "prononciation": "minyt"
  },
  "mixer": {
    "homophones": [
      "mixé",
      "mixés",
      "mixée"
    ],
    "prononciation": "mikse"
  },
  "modèle": {
    "homophones": [
      "modèles",
      "modèlent",
      "model"
    ],
    "prononciation": "modEl"
  },
  "moi": {
    "homophones": [
      "mois"
    ],
    "prononciation": "mwa"
  },
  "moineau": {
    "homophones": [
      "moineaux"
    ],
    "prononciation": "mwano"
  },
  "moins": {
    "homophones": [],
    "prononciation": "mw5"
  },
  "moitié": {
    "homophones": [
      "moitiés"
    ],
    "prononciation": "mwatje"
  },
  "moment": {
    "homophones": [
      "moments",
      "moman"
    ],
    "prononciation": "mom@"
  },
  "monde": {
    "homophones": [
      "mondes"
    ],
    "prononciation": "m§d"
  },
  "monnaie": {
    "homophones": [
      "monnaies"
    ],
    "prononciation": "monE"
  },
  "monsieur": {
    "homophones": [],
    "prononciation": "m°sj2"
  },
  "montagne": {
    "homophones": [
      "montagnes"
    ],
    "prononciation": "m§taN"
  },
  "monter": {
    "homophones": [
      "monté",
      "montez",
      "montées",
      "montés",
      "montée"
    ],
    "prononciation": "m§te"
  },
  "montre": {
    "homophones": [
      "montrent",
      "montres"
    ],
    "prononciation": "m§tR"
  },
  "montrer": {
    "homophones": [
      "montrés",
      "montrée",
      "montré",
      "montrez",
      "montrées"
    ],
    "prononciation": "m§tRe"
  },
  "monument": {
    "homophones": [
      "monuments"
    ],
    "prononciation": "monym@"
  },
  "morceau": {
    "homophones": [
      "morceaux"
    ],
    "prononciation": "mORso"
  },
  "mordre": {
    "homophones": [],
    "prononciation": "mORdR"
  },
  "mort": {
    "homophones": [
      "mores",
      "mords",
      "morts",
      "mors",
      "more",
      "mord"
    ],
    "prononciation": "mOR"
  },
  "mot": {
    "homophones": [
      "maux",
      "mots"
    ],
    "prononciation": "mo"
  },
  "moteur": {
    "homophones": [
      "moteurs"
    ],
    "prononciation": "mot9R"
  },
  "moto": {
    "homophones": [
      "motos"
    ],
    "prononciation": "moto"
  },
  "mouche": {
    "homophones": [
      "mouchent",
      "mouches"
    ],
    "prononciation": "muS"
  },
  "mouchoir": {
    "homophones": [
      "mouchoirs"
    ],
    "prononciation": "muSwaR"
  },
  "mouette": {
    "homophones": [
      "mouettes"
    ],
    "prononciation": "mwEt"
  },
  "moufles": {
    "homophones": [
      "moufle"
    ],
    "prononciation": "mufl"
  },
  "mouiller": {
    "homophones": [
      "mouillée",
      "mouillés",
      "mouillé",
      "mouillées",
      "mouillez"
    ],
    "prononciation": "muje"
  },
  "moule": {
    "homophones": [
      "moulent",
      "moules"
    ],
    "prononciation": "mul"
  },
  "moulin": {
    "homophones": [
      "moulins"
    ],
    "prononciation": "mul5"
  },
  "mourir": {
    "homophones": [],
    "prononciation": "muRiR"
  },
  "mousse": {
    "homophones": [
      "mousses",
      "moussent"
    ],
    "prononciation": "mus"
  },
  "moustache": {
    "homophones": [
      "moustaches"
    ],
    "prononciation": "mustaS"
  },
  "moustique": {
    "homophones": [
      "moustiques"
    ],
    "prononciation": "mustik"
  },
  "mouton": {
    "homophones": [
      "moutons"
    ],
    "prononciation": "mut§"
  },
  "moyen": {
    "homophones": [
      "moyens"
    ],
    "prononciation": "mwaj5"
  },
  "muet": {
    "homophones": [
      "muait",
      "muai",
      "muaient",
      "muets"
    ],
    "prononciation": "m8E"
  },
  "muguet": {
    "homophones": [
      "muguets"
    ],
    "prononciation": "mygE"
  },
  "multicolore": {
    "homophones": [
      "multicolores"
    ],
    "prononciation": "myltikolOR"
  },
  "mur": {
    "homophones": [
      "mûre",
      "mûrs",
      "mures",
      "murs",
      "mure",
      "murent",
      "mûres",
      "mûr"
    ],
    "prononciation": "myR"
  },
  "muscle": {
    "homophones": [
      "musclent",
      "muscles"
    ],
    "prononciation": "myskl"
  },
  "musique": {
    "homophones": [
      "musiques"
    ],
    "prononciation": "myzik"
  },
  "mètre": {
    "homophones": [
      "mettre",
      "maîtres",
      "maître",
      "mètres"
    ],
    "prononciation": "mEtR"
  },
  "méchant": {
    "homophones": [
      "méchants"
    ],
    "prononciation": "meS@"
  },
  "médecin": {
    "homophones": [
      "médecins"
    ],
    "prononciation": "mEds5"
  },
  "médicament": {
    "homophones": [
      "médicaments"
    ],
    "prononciation": "medikam@"
  },
  "mélanger": {
    "homophones": [
      "mélangé",
      "mélangée",
      "mélangés",
      "mélangées",
      "mélangez"
    ],
    "prononciation": "mel@Ze"
  },
  "ménage": {
    "homophones": [
      "ménagent",
      "ménages"
    ],
    "prononciation": "menaZ"
  },
  "métal": {
    "homophones": [],
    "prononciation": "metal"
  },
  "nager": {
    "homophones": [
      "nagez",
      "nagé"
    ],
    "prononciation": "naZe"
  },
  "nain": {
    "homophones": [
      "nains"
    ],
    "prononciation": "n5"
  },
  "nappe": {
    "homophones": [
      "nap",
      "nappes"
    ],
    "prononciation": "nap"
  },
  "navet": {
    "homophones": [
      "navets"
    ],
    "prononciation": "navE"
  },
  "navire": {
    "homophones": [
      "navires"
    ],
    "prononciation": "naviR"
  },
  "neige": {
    "homophones": [
      "neiges"
    ],
    "prononciation": "nEZ"
  },
  "neiger": {
    "homophones": [
      "neigé"
    ],
    "prononciation": "neZe"
  },
  "nettoyer": {
    "homophones": [
      "nettoyée",
      "nettoyés",
      "nettoyées",
      "nettoyez",
      "nettoyé"
    ],
    "prononciation": "netwaje"
  },
  "neuf": {
    "homophones": [
      "neufs"
    ],
    "prononciation": "n9f"
  },
  "nez": {
    "homophones": [
      "ney",
      "né",
      "nées",
      "née",
      "nés"
    ],
    "prononciation": "ne"
  },
  "nid": {
    "homophones": [
      "nie",
      "ni",
      "nies",
      "nids",
      "nient"
    ],
    "prononciation": "ni"
  },
  "noir": {
    "homophones": [
      "noire",
      "noirs",
      "noires"
    ],
    "prononciation": "nwaR"
  },
  "noisette": {
    "homophones": [
      "noisettes"
    ],
    "prononciation": "nwazEt"
  },
  "noix": {
    "homophones": [
      "noies",
      "noient",
      "noie",
      "noua"
    ],
    "prononciation": "nwa"
  },
  "nom": {
    "homophones": [
      "non",
      "noms"
    ],
    "prononciation": "n§"
  },
  "nombre": {
    "homophones": [
      "nombres"
    ],
    "prononciation": "n§bR"
  },
  "nourrir": {
    "homophones": [
      "nourrirent"
    ],
    "prononciation": "nuRiR"
  },
  "nourriture": {
    "homophones": [
      "nourritures"
    ],
    "prononciation": "nuRityR"
  },
  "nouveau": {
    "homophones": [
      "nouveaux"
    ],
    "prononciation": "nuvo"
  },
  "noyau": {
    "homophones": [
      "noyaux"
    ],
    "prononciation": "nwajo"
  },
  "nu": {
    "homophones": [
      "nues",
      "nue",
      "nus"
    ],
    "prononciation": "ny"
  },
  "nuage": {
    "homophones": [
      "nuages"
    ],
    "prononciation": "n8aZ"
  },
  "nuageux": {
    "homophones": [],
    "prononciation": "n8aZ2"
  },
  "nuit": {
    "homophones": [
      "nuis",
      "nuits",
      "nui"
    ],
    "prononciation": "n8i"
  },
  "numéro": {
    "homophones": [
      "numéros"
    ],
    "prononciation": "nymeRo"
  },
  "né": {
    "homophones": [
      "nez",
      "ney",
      "nées",
      "née",
      "nés"
    ],
    "prononciation": "ne"
  },
  "objet": {
    "homophones": [
      "objets"
    ],
    "prononciation": "ObZE"
  },
  "obligé": {
    "homophones": [
      "obliger",
      "obligez",
      "obligées",
      "obligée",
      "obligés"
    ],
    "prononciation": "obliZe"
  },
  "obéir": {
    "homophones": [
      "obéirent"
    ],
    "prononciation": "obeiR"
  },
  "odeur": {
    "homophones": [
      "odeurs"
    ],
    "prononciation": "od9R"
  },
  "offrir": {
    "homophones": [
      "offrirent"
    ],
    "prononciation": "ofRiR"
  },
  "ogre": {
    "homophones": [
      "ogres"
    ],
    "prononciation": "OgR"
  },
  "oie": {
    "homophones": [
      "wouah",
      "oies",
      "ois",
      "oit",
      "oye",
      "ouah"
    ],
    "prononciation": "wa"
  },
  "oignon": {
    "homophones": [
      "oignons"
    ],
    "prononciation": "ON§"
  },
  "oiseau": {
    "homophones": [
      "oiseaux"
    ],
    "prononciation": "wazo"
  },
  "ombre": {
    "homophones": [
      "hombre",
      "ombres"
    ],
    "prononciation": "§bR"
  },
  "ongle": {
    "homophones": [
      "ongles"
    ],
    "prononciation": "§gl"
  },
  "or": {
    "homophones": [
      "ord",
      "ore",
      "ort",
      "ors",
      "hors"
    ],
    "prononciation": "OR"
  },
  "orage": {
    "homophones": [
      "orages"
    ],
    "prononciation": "oRaZ"
  },
  "orange": {
    "homophones": [
      "oranges"
    ],
    "prononciation": "oR@Z"
  },
  "orchestre": {
    "homophones": [
      "orchestres",
      "orchestrent"
    ],
    "prononciation": "ORkEstR"
  },
  "ordinateur": {
    "homophones": [
      "ordinateurs"
    ],
    "prononciation": "ORdinat9R"
  },
  "ordonnance": {
    "homophones": [
      "ordonnances"
    ],
    "prononciation": "ORdon@s"
  },
  "ordre": {
    "homophones": [
      "ordres"
    ],
    "prononciation": "ORdR"
  },
  "oreille": {
    "homophones": [
      "oreilles"
    ],
    "prononciation": "oREj"
  },
  "oreiller": {
    "homophones": [
      "oreillers"
    ],
    "prononciation": "oReje"
  },
  "os": {
    "homophones": [],
    "prononciation": "Os"
  },
  "oublier": {
    "homophones": [
      "oubliée",
      "oubliés",
      "oubliiez",
      "oubliées",
      "oubliez",
      "oublié"
    ],
    "prononciation": "ublije"
  },
  "ouragan": {
    "homophones": [
      "ouragans"
    ],
    "prononciation": "uRag@"
  },
  "ours": {
    "homophones": [
      "ourse",
      "ourses"
    ],
    "prononciation": "uRs"
  },
  "outils": {
    "homophones": [
      "outil"
    ],
    "prononciation": "uti"
  },
  "ouvrier": {
    "homophones": [
      "ouvriers"
    ],
    "prononciation": "uvRije"
  },
  "ouvrir": {
    "homophones": [
      "ouvrirent"
    ],
    "prononciation": "uvRiR"
  },
  "page": {
    "homophones": [
      "pages"
    ],
    "prononciation": "paZ"
  },
  "paille": {
    "homophones": [
      "pailles"
    ],
    "prononciation": "paj"
  },
  "pain": {
    "homophones": [
      "pins",
      "peins",
      "peint",
      "pin",
      "peints",
      "pains"
    ],
    "prononciation": "p5"
  },
  "paire": {
    "homophones": [
      "pair",
      "paires",
      "perds",
      "pères",
      "pers",
      "perd",
      "pairs",
      "père"
    ],
    "prononciation": "pER"
  },
  "paix": {
    "homophones": [
      "pais",
      "paie",
      "paies",
      "pet",
      "paît",
      "pets",
      "paient"
    ],
    "prononciation": "pE"
  },
  "palais": {
    "homophones": [
      "palet",
      "palets"
    ],
    "prononciation": "palE"
  },
  "pamplemousse": {
    "homophones": [
      "pamplemousses"
    ],
    "prononciation": "p@pl°mus"
  },
  "panda": {
    "homophones": [
      "pandas"
    ],
    "prononciation": "p@da"
  },
  "panier": {
    "homophones": [
      "paniers"
    ],
    "prononciation": "panje"
  },
  "panne": {
    "homophones": [
      "pane",
      "paonne",
      "pannes"
    ],
    "prononciation": "pan"
  },
  "panneau": {
    "homophones": [
      "pano",
      "panos",
      "panneaux"
    ],
    "prononciation": "pano"
  },
  "pansement": {
    "homophones": [
      "pansements"
    ],
    "prononciation": "p@s°m@"
  },
  "pantalon": {
    "homophones": [
      "pantalons"
    ],
    "prononciation": "p@tal§"
  },
  "panthère": {
    "homophones": [
      "panthères"
    ],
    "prononciation": "p@tER"
  },
  "papa": {
    "homophones": [
      "papas"
    ],
    "prononciation": "papa"
  },
  "papier": {
    "homophones": [
      "papiers"
    ],
    "prononciation": "papje"
  },
  "papillon": {
    "homophones": [
      "papillons"
    ],
    "prononciation": "papij§"
  },
  "paquet": {
    "homophones": [
      "paquets"
    ],
    "prononciation": "pakE"
  },
  "parapluie": {
    "homophones": [
      "parapluies"
    ],
    "prononciation": "paRapl8i"
  },
  "parasol": {
    "homophones": [
      "parasols"
    ],
    "prononciation": "paRasOl"
  },
  "parc": {
    "homophones": [
      "parquent",
      "parque",
      "parcs"
    ],
    "prononciation": "paRk"
  },
  "parcours": {
    "homophones": [
      "parcourent",
      "parcourt",
      "parcoure"
    ],
    "prononciation": "paRkuR"
  },
  "pardon": {
    "homophones": [
      "pardons"
    ],
    "prononciation": "paRd§"
  },
  "pareil": {
    "homophones": [
      "pareille",
      "pareils",
      "pareilles"
    ],
    "prononciation": "paREj"
  },
  "parents": {
    "homophones": [
      "parent",
      "parant"
    ],
    "prononciation": "paR@"
  },
  "parfum": {
    "homophones": [
      "parfums"
    ],
    "prononciation": "paRf1"
  },
  "parking": {
    "homophones": [
      "parkings"
    ],
    "prononciation": "paRkiG"
  },
  "parler": {
    "homophones": [
      "parlez",
      "parlers",
      "parlée",
      "parlés",
      "parlées",
      "parlé"
    ],
    "prononciation": "paRle"
  },
  "part": {
    "homophones": [
      "parr",
      "pars",
      "pare",
      "par",
      "parts"
    ],
    "prononciation": "paR"
  },
  "partager": {
    "homophones": [
      "partagés",
      "partagée",
      "partagées",
      "partagé",
      "partagez"
    ],
    "prononciation": "paRtaZe"
  },
  "partie": {
    "homophones": [
      "partit",
      "partis",
      "partît",
      "parties",
      "parti",
      "party"
    ],
    "prononciation": "paRti"
  },
  "partir": {
    "homophones": [
      "partirent"
    ],
    "prononciation": "paRtiR"
  },
  "pas": {
    "homophones": [
      "pât",
      "pa"
    ],
    "prononciation": "pa"
  },
  "passage": {
    "homophones": [
      "passages"
    ],
    "prononciation": "pasaZ"
  },
  "passer": {
    "homophones": [
      "passée",
      "passés",
      "passez",
      "passé",
      "passées"
    ],
    "prononciation": "pase"
  },
  "passerelle": {
    "homophones": [
      "passerelles"
    ],
    "prononciation": "pas°REl"
  },
  "patauger": {
    "homophones": [
      "pataugez",
      "pataugé"
    ],
    "prononciation": "patoZe"
  },
  "patient": {
    "homophones": [
      "patients"
    ],
    "prononciation": "pasj@"
  },
  "patte": {
    "homophones": [
      "pâtes",
      "pâte",
      "pattes",
      "pat"
    ],
    "prononciation": "pat"
  },
  "payer": {
    "homophones": [
      "payées",
      "payés",
      "payée",
      "payé",
      "payez"
    ],
    "prononciation": "peje"
  },
  "pays": {
    "homophones": [],
    "prononciation": "pei"
  },
  "paysage": {
    "homophones": [
      "paysages"
    ],
    "prononciation": "peizaZ"
  },
  "peigne": {
    "homophones": [
      "peignent",
      "peignes"
    ],
    "prononciation": "pEN"
  },
  "peindre": {
    "homophones": [],
    "prononciation": "p5dR"
  },
  "peinture": {
    "homophones": [
      "peintures"
    ],
    "prononciation": "p5tyR"
  },
  "pelle": {
    "homophones": [
      "pelles",
      "pèles",
      "pèle",
      "pèlent"
    ],
    "prononciation": "pEl"
  },
  "peluche": {
    "homophones": [
      "peluches"
    ],
    "prononciation": "p°lyS"
  },
  "pendule": {
    "homophones": [
      "pendules"
    ],
    "prononciation": "p@dyl"
  },
  "penser": {
    "homophones": [
      "pansées",
      "pansé",
      "pensez",
      "pensées",
      "pansez",
      "panser",
      "pensé",
      "pensés",
      "pensée",
      "pansés",
      "pansée"
    ],
    "prononciation": "p@se"
  },
  "pente": {
    "homophones": [
      "pentes",
      "pantes",
      "pante"
    ],
    "prononciation": "p@t"
  },
  "percer": {
    "homophones": [
      "percées",
      "percée",
      "percés",
      "percé",
      "percez"
    ],
    "prononciation": "pERse"
  },
  "perdre": {
    "homophones": [],
    "prononciation": "pERdR"
  },
  "perle": {
    "homophones": [
      "perlent",
      "perles"
    ],
    "prononciation": "pERl"
  },
  "perroquet": {
    "homophones": [
      "perroquets"
    ],
    "prononciation": "pERokE"
  },
  "persil": {
    "homophones": [],
    "prononciation": "pERsi"
  },
  "personne": {
    "homophones": [
      "personnes"
    ],
    "prononciation": "pERsOn"
  },
  "peser": {
    "homophones": [
      "pesez"
    ],
    "prononciation": "p2ze"
  },
  "petit": {
    "homophones": [
      "petits"
    ],
    "prononciation": "p°ti"
  },
  "petit-fils": {
    "homophones": [
      "petits-fils"
    ],
    "prononciation": "p°tifis"
  },
  "peu": {
    "homophones": [
      "peut",
      "peux",
      "peuh"
    ],
    "prononciation": "p2"
  },
  "peur": {
    "homophones": [],
    "prononciation": "p2R"
  },
  "pharmacie": {
    "homophones": [
      "pharmacies"
    ],
    "prononciation": "faRmasi"
  },
  "pharmacien": {
    "homophones": [
      "pharmaciens"
    ],
    "prononciation": "faRmasj5"
  },
  "phoque": {
    "homophones": [
      "phoques",
      "focs",
      "foc"
    ],
    "prononciation": "fOk"
  },
  "photographier": {
    "homophones": [
      "photographié",
      "photographiés",
      "photographiée",
      "photographiez",
      "photographiées"
    ],
    "prononciation": "fotogRafje"
  },
  "photos": {
    "homophones": [
      "photo"
    ],
    "prononciation": "foto"
  },
  "pied": {
    "homophones": [
      "pieds"
    ],
    "prononciation": "pje"
  },
  "pierre": {
    "homophones": [
      "pier",
      "pierres"
    ],
    "prononciation": "pjER"
  },
  "pigeon": {
    "homophones": [
      "pigeons"
    ],
    "prononciation": "piZ§"
  },
  "pile": {
    "homophones": [
      "piles",
      "pilent"
    ],
    "prononciation": "pil"
  },
  "pilote": {
    "homophones": [
      "pilotent",
      "pilotes"
    ],
    "prononciation": "pilOt"
  },
  "pin": {
    "homophones": [
      "pins",
      "pain",
      "peins",
      "peint",
      "peints",
      "pains"
    ],
    "prononciation": "p5"
  },
  "pinceau": {
    "homophones": [
      "pinceaux"
    ],
    "prononciation": "p5so"
  },
  "pion": {
    "homophones": [
      "pions"
    ],
    "prononciation": "pj§"
  },
  "pique-niquer": {
    "homophones": [
      "pique-niqué",
      "pique-niquez"
    ],
    "prononciation": "piknike"
  },
  "piqué": {
    "homophones": [
      "piquez",
      "piquer",
      "piquées",
      "piquée",
      "piqués"
    ],
    "prononciation": "pike"
  },
  "piscine": {
    "homophones": [
      "piscines"
    ],
    "prononciation": "pisin"
  },
  "placard": {
    "homophones": [
      "placards"
    ],
    "prononciation": "plakaR"
  },
  "place": {
    "homophones": [
      "placent",
      "places"
    ],
    "prononciation": "plas"
  },
  "plafond": {
    "homophones": [
      "plafonds"
    ],
    "prononciation": "plaf§"
  },
  "plage": {
    "homophones": [
      "plages"
    ],
    "prononciation": "plaZ"
  },
  "plaire": {
    "homophones": [],
    "prononciation": "plER"
  },
  "planche": {
    "homophones": [
      "planches",
      "planchent"
    ],
    "prononciation": "pl@S"
  },
  "plante": {
    "homophones": [
      "plantes",
      "plantent"
    ],
    "prononciation": "pl@t"
  },
  "planter": {
    "homophones": [
      "plantés",
      "plantée",
      "plantées",
      "planté",
      "plantez"
    ],
    "prononciation": "pl@te"
  },
  "plastique": {
    "homophones": [
      "plastiques",
      "plastic"
    ],
    "prononciation": "plastik"
  },
  "plat": {
    "homophones": [
      "plats"
    ],
    "prononciation": "pla"
  },
  "plateau": {
    "homophones": [
      "plateaux"
    ],
    "prononciation": "plato"
  },
  "plein": {
    "homophones": [
      "pleins",
      "plaint",
      "plains",
      "plaints",
      "plain"
    ],
    "prononciation": "pl5"
  },
  "pleurer": {
    "homophones": [],
    "prononciation": "pl2Re"
  },
  "pleuvoir": {
    "homophones": [],
    "prononciation": "pl2vwaR"
  },
  "pliage": {
    "homophones": [
      "pliages"
    ],
    "prononciation": "plijaZ"
  },
  "plier": {
    "homophones": [
      "pliés",
      "pliée",
      "pliées",
      "plié",
      "pliez"
    ],
    "prononciation": "plije"
  },
  "plongeoir": {
    "homophones": [
      "plongeoirs"
    ],
    "prononciation": "pl§ZwaR"
  },
  "plongée": {
    "homophones": [
      "plongés",
      "plongé",
      "plonger",
      "plongez",
      "plongées"
    ],
    "prononciation": "pl§Ze"
  },
  "pluie": {
    "homophones": [
      "pluies"
    ],
    "prononciation": "pl8i"
  },
  "plume": {
    "homophones": [
      "plumes",
      "plument"
    ],
    "prononciation": "plym"
  },
  "plus": {
    "homophones": [
      "plusse"
    ],
    "prononciation": "plys"
  },
  "pneu": {
    "homophones": [
      "pneus"
    ],
    "prononciation": "pn2"
  },
  "poche": {
    "homophones": [
      "poches"
    ],
    "prononciation": "pOS"
  },
  "poignet": {
    "homophones": [
      "poignait",
      "poignets",
      "poignaient"
    ],
    "prononciation": "pwaNE"
  },
  "pointe": {
    "homophones": [
      "pointent",
      "pointes"
    ],
    "prononciation": "pw5t"
  },
  "pointu": {
    "homophones": [
      "pointus",
      "pointue",
      "pointues"
    ],
    "prononciation": "pw5ty"
  },
  "poire": {
    "homophones": [
      "poires"
    ],
    "prononciation": "pwaR"
  },
  "poireaux": {
    "homophones": [
      "poireau"
    ],
    "prononciation": "pwaRo"
  },
  "poison": {
    "homophones": [
      "poisons"
    ],
    "prononciation": "pwaz§"
  },
  "poisson": {
    "homophones": [
      "poissons"
    ],
    "prononciation": "pwas§"
  },
  "poli": {
    "homophones": [
      "polies",
      "polit",
      "polis",
      "polie",
      "poly"
    ],
    "prononciation": "poli"
  },
  "police": {
    "homophones": [
      "polissent",
      "polices"
    ],
    "prononciation": "polis"
  },
  "policier": {
    "homophones": [
      "policiers"
    ],
    "prononciation": "polisje"
  },
  "pomme": {
    "homophones": [
      "pommes"
    ],
    "prononciation": "pOm"
  },
  "pompe": {
    "homophones": [
      "pompent",
      "pompes"
    ],
    "prononciation": "p§p"
  },
  "pompier": {
    "homophones": [
      "pompiers"
    ],
    "prononciation": "p§pje"
  },
  "poney": {
    "homophones": [
      "poneys"
    ],
    "prononciation": "ponE"
  },
  "pont": {
    "homophones": [
      "ponds",
      "ponts",
      "pond"
    ],
    "prononciation": "p§"
  },
  "port": {
    "homophones": [
      "pores",
      "porcs",
      "porc",
      "pore",
      "ports"
    ],
    "prononciation": "pOR"
  },
  "porte": {
    "homophones": [
      "portes",
      "portent"
    ],
    "prononciation": "pORt"
  },
  "portemanteau": {
    "homophones": [
      "portemanteaux"
    ],
    "prononciation": "pORt°m@to"
  },
  "porter": {
    "homophones": [],
    "prononciation": "poRte"
  },
  "portière": {
    "homophones": [
      "portières"
    ],
    "prononciation": "pORtjER"
  },
  "poser": {
    "homophones": [
      "posés",
      "posée",
      "posées",
      "posé",
      "posez",
      "pauser",
      "pausez"
    ],
    "prononciation": "poze"
  },
  "poster": {
    "homophones": [
      "postés",
      "postée",
      "postées",
      "postez",
      "posté"
    ],
    "prononciation": "pOste"
  },
  "potage": {
    "homophones": [
      "potages"
    ],
    "prononciation": "potaZ"
  },
  "poubelle": {
    "homophones": [
      "poubelles"
    ],
    "prononciation": "pubEl"
  },
  "pouf": {
    "homophones": [
      "poufs",
      "pouffes",
      "pouffe",
      "pouffent"
    ],
    "prononciation": "puf"
  },
  "poule": {
    "homophones": [
      "poules",
      "pool"
    ],
    "prononciation": "pul"
  },
  "poulet": {
    "homophones": [
      "poulets"
    ],
    "prononciation": "pulE"
  },
  "poupée": {
    "homophones": [
      "poupées"
    ],
    "prononciation": "pupe"
  },
  "poursuivre": {
    "homophones": [],
    "prononciation": "puRs8ivR"
  },
  "pousser": {
    "homophones": [
      "poussé",
      "poussée",
      "poussés",
      "poussées",
      "poussez"
    ],
    "prononciation": "puse"
  },
  "poussette": {
    "homophones": [
      "poucettes",
      "poucette",
      "poussettes"
    ],
    "prononciation": "pusEt"
  },
  "poussin": {
    "homophones": [
      "poussins"
    ],
    "prononciation": "pus5"
  },
  "poussière": {
    "homophones": [
      "poussières"
    ],
    "prononciation": "pusjER"
  },
  "pouvoir": {
    "homophones": [
      "pouvoirs"
    ],
    "prononciation": "puvwaR"
  },
  "prairie": {
    "homophones": [
      "prairies"
    ],
    "prononciation": "pReRi"
  },
  "premier": {
    "homophones": [
      "premiers"
    ],
    "prononciation": "pR2mje"
  },
  "prendre": {
    "homophones": [],
    "prononciation": "pR@dR"
  },
  "presque": {
    "homophones": [],
    "prononciation": "pREsk"
  },
  "presser": {
    "homophones": [
      "pressé",
      "pressée",
      "pressés",
      "pressées"
    ],
    "prononciation": "pRese"
  },
  "prince": {
    "homophones": [
      "princes"
    ],
    "prononciation": "pR5s"
  },
  "princesse": {
    "homophones": [
      "princesses"
    ],
    "prononciation": "pR5sEs"
  },
  "privé": {
    "homophones": [
      "privés",
      "privée",
      "privées",
      "priver",
      "privez"
    ],
    "prononciation": "pRive"
  },
  "prix": {
    "homophones": [
      "pris",
      "prit",
      "prie",
      "prient",
      "prît",
      "pries"
    ],
    "prononciation": "pRi"
  },
  "profond": {
    "homophones": [
      "profonds"
    ],
    "prononciation": "pRof§"
  },
  "promenade": {
    "homophones": [
      "promenades"
    ],
    "prononciation": "pROmnad"
  },
  "promettre": {
    "homophones": [],
    "prononciation": "pRomEtR"
  },
  "propre": {
    "homophones": [
      "propres"
    ],
    "prononciation": "pROpR"
  },
  "protéger": {
    "homophones": [
      "protégée",
      "protégés",
      "protégé",
      "protégées",
      "protégez"
    ],
    "prononciation": "pRoteZe"
  },
  "prudent": {
    "homophones": [
      "prudents"
    ],
    "prononciation": "pRyd@"
  },
  "prune": {
    "homophones": [
      "prunes"
    ],
    "prononciation": "pRyn"
  },
  "près": {
    "homophones": [
      "prêts",
      "prêt"
    ],
    "prononciation": "pRE"
  },
  "préau": {
    "homophones": [
      "préaux"
    ],
    "prononciation": "pReo"
  },
  "préférer": {
    "homophones": [
      "préférée",
      "préférés",
      "préféré",
      "préférées",
      "préférez"
    ],
    "prononciation": "pRefeRe"
  },
  "prénom": {
    "homophones": [
      "prénoms"
    ],
    "prononciation": "pRen§"
  },
  "préparer": {
    "homophones": [
      "préparés",
      "préparée",
      "préparez",
      "préparé",
      "préparées"
    ],
    "prononciation": "pRepaRe"
  },
  "présent": {
    "homophones": [
      "présents"
    ],
    "prononciation": "pRez@"
  },
  "puis": {
    "homophones": [
      "puy",
      "puits"
    ],
    "prononciation": "p8i"
  },
  "pull-over": {
    "homophones": [
      "pull-overs"
    ],
    "prononciation": "pylovER"
  },
  "punir": {
    "homophones": [],
    "prononciation": "pyniR"
  },
  "purée": {
    "homophones": [
      "puerez",
      "purées"
    ],
    "prononciation": "pyRe"
  },
  "puzzle": {
    "homophones": [
      "puzzles"
    ],
    "prononciation": "p9z9l"
  },
  "pyjama": {
    "homophones": [
      "pyjamas"
    ],
    "prononciation": "piZama"
  },
  "père": {
    "homophones": [
      "pair",
      "paires",
      "perds",
      "pères",
      "pers",
      "perd",
      "pairs",
      "paire"
    ],
    "prononciation": "pER"
  },
  "pédale": {
    "homophones": [
      "pédales",
      "pédalent"
    ],
    "prononciation": "pedal"
  },
  "pédaler": {
    "homophones": [
      "pédalées",
      "pédalé"
    ],
    "prononciation": "pedale"
  },
  "quai": {
    "homophones": [],
    "prononciation": "kE"
  },
  "quartier": {
    "homophones": [
      "quartiers"
    ],
    "prononciation": "kaRtje"
  },
  "quatre": {
    "homophones": [],
    "prononciation": "katR"
  },
  "question": {
    "homophones": [
      "questions"
    ],
    "prononciation": "kEstj§"
  },
  "queue": {
    "homophones": [
      "queues"
    ],
    "prononciation": "k2"
  },
  "raconter": {
    "homophones": [
      "racontées",
      "racontés",
      "racontée",
      "raconté",
      "racontez"
    ],
    "prononciation": "Rak§te"
  },
  "radiateur": {
    "homophones": [
      "radiateurs"
    ],
    "prononciation": "Radjat9R"
  },
  "radio": {
    "homophones": [
      "radiaux",
      "radios"
    ],
    "prononciation": "Radjo"
  },
  "radis": {
    "homophones": [],
    "prononciation": "Radi"
  },
  "raisin": {
    "homophones": [
      "raisins"
    ],
    "prononciation": "REz5"
  },
  "ramasser": {
    "homophones": [
      "ramassée",
      "ramassés",
      "ramassé",
      "ramassez",
      "ramassées"
    ],
    "prononciation": "Ramase"
  },
  "ramer": {
    "homophones": [
      "ramés",
      "ramée",
      "ramées",
      "ramé",
      "ramez"
    ],
    "prononciation": "Rame"
  },
  "rampe": {
    "homophones": [
      "rampent",
      "rampes"
    ],
    "prononciation": "R@p"
  },
  "ramper": {
    "homophones": [
      "rampée",
      "rampé",
      "rampez"
    ],
    "prononciation": "R@pe"
  },
  "ranger": {
    "homophones": [
      "rangées",
      "rangez",
      "rangés",
      "rangée",
      "rangé"
    ],
    "prononciation": "R@Ze"
  },
  "rapide": {
    "homophones": [
      "rapides"
    ],
    "prononciation": "Rapid"
  },
  "raquette": {
    "homophones": [
      "rackets",
      "rackette",
      "raquettes",
      "racket"
    ],
    "prononciation": "RakEt"
  },
  "rasoir": {
    "homophones": [
      "rasoirs"
    ],
    "prononciation": "RazwaR"
  },
  "rat": {
    "homophones": [
      "rats",
      "ra",
      "ras",
      "raz"
    ],
    "prononciation": "Ra"
  },
  "rater": {
    "homophones": [
      "ratez",
      "raté",
      "ratées",
      "ratée",
      "ratés"
    ],
    "prononciation": "Rate"
  },
  "rayon": {
    "homophones": [
      "rayons"
    ],
    "prononciation": "REj§"
  },
  "rayure": {
    "homophones": [
      "rayures"
    ],
    "prononciation": "RejyR"
  },
  "recette": {
    "homophones": [
      "recettes"
    ],
    "prononciation": "R°sEt"
  },
  "recevoir": {
    "homophones": [],
    "prononciation": "R°s°vwaR"
  },
  "recommencer": {
    "homophones": [
      "recommencé",
      "recommencées",
      "recommencez",
      "recommencés",
      "recommencée"
    ],
    "prononciation": "R°kom@se"
  },
  "recoudre": {
    "homophones": [],
    "prononciation": "R°kudR"
  },
  "reculer": {
    "homophones": [
      "reculez",
      "reculé",
      "reculée",
      "reculés",
      "reculées"
    ],
    "prononciation": "R°kyle"
  },
  "refuser": {
    "homophones": [
      "refusez",
      "refusé",
      "refusés",
      "refusée",
      "refusées"
    ],
    "prononciation": "R°fyze"
  },
  "regard": {
    "homophones": [
      "regards"
    ],
    "prononciation": "R°gaR"
  },
  "regarder": {
    "homophones": [
      "regardés",
      "regardée",
      "regardées",
      "regardez",
      "regardé"
    ],
    "prononciation": "R°gaRde"
  },
  "remercier": {
    "homophones": [
      "remerciée",
      "remerciés",
      "remercié",
      "remerciez"
    ],
    "prononciation": "R°mERsje"
  },
  "remettre": {
    "homophones": [],
    "prononciation": "R°mEtR"
  },
  "remplacer": {
    "homophones": [
      "remplacez",
      "remplacé",
      "remplacées",
      "remplacée",
      "remplacés"
    ],
    "prononciation": "R@plase"
  },
  "remplir": {
    "homophones": [
      "remplirent"
    ],
    "prononciation": "R@pliR"
  },
  "remuer": {
    "homophones": [
      "remuées",
      "remué",
      "remuée",
      "remués"
    ],
    "prononciation": "R°m8e"
  },
  "renard": {
    "homophones": [
      "renards"
    ],
    "prononciation": "R°naR"
  },
  "rencontrer": {
    "homophones": [
      "rencontrés",
      "rencontrée",
      "rencontrez",
      "rencontré",
      "rencontrées"
    ],
    "prononciation": "R@k§tRe"
  },
  "rendre": {
    "homophones": [],
    "prononciation": "R@dR"
  },
  "rentrer": {
    "homophones": [
      "rentrées",
      "rentrez",
      "rentrée",
      "rentrés",
      "rentré"
    ],
    "prononciation": "R@tRe"
  },
  "renverser": {
    "homophones": [
      "renversez",
      "renversé",
      "renversées",
      "renversés",
      "renversée"
    ],
    "prononciation": "R@vERse"
  },
  "repas": {
    "homophones": [],
    "prononciation": "R°pa"
  },
  "repasser": {
    "homophones": [
      "repassées",
      "repassez",
      "repassé",
      "repassée",
      "repassés"
    ],
    "prononciation": "R°pase"
  },
  "requin": {
    "homophones": [
      "requins"
    ],
    "prononciation": "R°k5"
  },
  "respirer": {
    "homophones": [
      "respiré",
      "respirez",
      "respirées",
      "respirés",
      "respirée"
    ],
    "prononciation": "REspiRe"
  },
  "ressembler": {
    "homophones": [
      "ressemblé",
      "ressemblez"
    ],
    "prononciation": "R°s@ble"
  },
  "restaurant": {
    "homophones": [
      "restaurants"
    ],
    "prononciation": "REstoR@"
  },
  "rester": {
    "homophones": [
      "restez",
      "resté",
      "restées",
      "restés",
      "restée"
    ],
    "prononciation": "REste"
  },
  "retard": {
    "homophones": [
      "retards"
    ],
    "prononciation": "R°taR"
  },
  "retarder": {
    "homophones": [
      "retardez",
      "retardé",
      "retardées",
      "retardés",
      "retardée"
    ],
    "prononciation": "R°taRde"
  },
  "retour": {
    "homophones": [
      "retours"
    ],
    "prononciation": "R°tuR"
  },
  "retourner": {
    "homophones": [
      "retournés",
      "retournée",
      "retourné",
      "retournées",
      "retournez"
    ],
    "prononciation": "R°tuRne"
  },
  "retrouver": {
    "homophones": [
      "retrouvées",
      "retrouvés",
      "retrouvée",
      "retrouvez",
      "retrouvé"
    ],
    "prononciation": "R°tRuve"
  },
  "revenir": {
    "homophones": [],
    "prononciation": "R°v°niR"
  },
  "revoir": {
    "homophones": [],
    "prononciation": "R°vwaR"
  },
  "rhinocéros": {
    "homophones": [],
    "prononciation": "RinoseROs"
  },
  "riche": {
    "homophones": [
      "riches"
    ],
    "prononciation": "RiS"
  },
  "rideaux": {
    "homophones": [
      "rideau"
    ],
    "prononciation": "Rido"
  },
  "rire": {
    "homophones": [
      "rires",
      "rirent"
    ],
    "prononciation": "RiR"
  },
  "rivière": {
    "homophones": [
      "rivières"
    ],
    "prononciation": "RivjER"
  },
  "riz": {
    "homophones": [
      "ries",
      "rît",
      "ri",
      "rie",
      "rit",
      "ris",
      "rient"
    ],
    "prononciation": "Ri"
  },
  "robe": {
    "homophones": [
      "robes"
    ],
    "prononciation": "ROb"
  },
  "robinet": {
    "homophones": [
      "robinets"
    ],
    "prononciation": "RobinE"
  },
  "rocher": {
    "homophones": [
      "rochers"
    ],
    "prononciation": "RoSe"
  },
  "roi": {
    "homophones": [
      "rois",
      "roua",
      "roy"
    ],
    "prononciation": "Rwa"
  },
  "rond": {
    "homophones": [
      "ronds",
      "romps",
      "rompt",
      "ron"
    ],
    "prononciation": "R§"
  },
  "rondelle": {
    "homophones": [
      "rondelles"
    ],
    "prononciation": "R§dEl"
  },
  "ronfler": {
    "homophones": [
      "ronflez",
      "ronflé"
    ],
    "prononciation": "R§fle"
  },
  "ronger": {
    "homophones": [
      "rongées",
      "rongée",
      "rongés",
      "rongé",
      "rongez"
    ],
    "prononciation": "R§Ze"
  },
  "rosé": {
    "homophones": [
      "rosées",
      "roser",
      "rosée",
      "rosés"
    ],
    "prononciation": "Roze"
  },
  "rouge": {
    "homophones": [
      "rouges"
    ],
    "prononciation": "RuZ"
  },
  "roulade": {
    "homophones": [
      "roulades"
    ],
    "prononciation": "Rulad"
  },
  "rouleau": {
    "homophones": [
      "rouleaux"
    ],
    "prononciation": "Rulo"
  },
  "rouler": {
    "homophones": [
      "roulés",
      "roulée",
      "roulées",
      "roulez",
      "roulé"
    ],
    "prononciation": "Rule"
  },
  "route": {
    "homophones": [
      "routes"
    ],
    "prononciation": "Rut"
  },
  "ruban": {
    "homophones": [
      "rubans"
    ],
    "prononciation": "Ryb@"
  },
  "rue": {
    "homophones": [
      "ruent",
      "ru",
      "rues",
      "rus"
    ],
    "prononciation": "Ry"
  },
  "rugueux": {
    "homophones": [],
    "prononciation": "Ryg2"
  },
  "réciter": {
    "homophones": [
      "récitée",
      "récités",
      "récitées",
      "récité",
      "récitez"
    ],
    "prononciation": "Resite"
  },
  "récréation": {
    "homophones": [
      "récréations"
    ],
    "prononciation": "RekReasj§"
  },
  "réfrigérateur": {
    "homophones": [
      "réfrigérateurs"
    ],
    "prononciation": "RefRiZeRat9R"
  },
  "réparer": {
    "homophones": [
      "réparez",
      "réparées",
      "réparé",
      "réparés",
      "réparée"
    ],
    "prononciation": "RepaRe"
  },
  "répondre": {
    "homophones": [],
    "prononciation": "Rep§dR"
  },
  "répéter": {
    "homophones": [
      "répétée",
      "répétés",
      "répété",
      "répétées",
      "répétez"
    ],
    "prononciation": "Repete"
  },
  "réussir": {
    "homophones": [
      "réussirent"
    ],
    "prononciation": "ReysiR"
  },
  "réveil": {
    "homophones": [
      "réveils",
      "réveilles",
      "réveillent",
      "réveille"
    ],
    "prononciation": "RevEj"
  },
  "sable": {
    "homophones": [
      "sables"
    ],
    "prononciation": "sabl"
  },
  "sac": {
    "homophones": [
      "saquent",
      "sacque",
      "saque",
      "sacs"
    ],
    "prononciation": "sak"
  },
  "sage": {
    "homophones": [
      "sages"
    ],
    "prononciation": "saZ"
  },
  "saigner": {
    "homophones": [
      "saigné",
      "saignées",
      "saignés",
      "saignée"
    ],
    "prononciation": "seNe"
  },
  "saison": {
    "homophones": [
      "saisons"
    ],
    "prononciation": "sEz§"
  },
  "salade": {
    "homophones": [
      "salades"
    ],
    "prononciation": "salad"
  },
  "saladier": {
    "homophones": [
      "saladiers"
    ],
    "prononciation": "saladje"
  },
  "salle": {
    "homophones": [
      "sals",
      "sale",
      "sales",
      "salles"
    ],
    "prononciation": "sal"
  },
  "saluer": {
    "homophones": [
      "salués",
      "saluée",
      "saluées",
      "salué"
    ],
    "prononciation": "sal8e"
  },
  "samedi": {
    "homophones": [
      "samedis"
    ],
    "prononciation": "sam°di"
  },
  "sang": {
    "homophones": [
      "sans",
      "cent",
      "cents",
      "sent",
      "sangs"
    ],
    "prononciation": "s@"
  },
  "santé": {
    "homophones": [
      "santés",
      "sentez"
    ],
    "prononciation": "s@te"
  },
  "sapin": {
    "homophones": [
      "sapins"
    ],
    "prononciation": "sap5"
  },
  "sardines": {
    "homophones": [
      "sardine"
    ],
    "prononciation": "saRdin"
  },
  "saut": {
    "homophones": [
      "sceaux",
      "sauts",
      "seau",
      "sceau",
      "seaux",
      "sots",
      "sot"
    ],
    "prononciation": "so"
  },
  "sauter": {
    "homophones": [
      "sauté",
      "sautées",
      "sautez",
      "sautée",
      "sautés"
    ],
    "prononciation": "sote"
  },
  "savoir": {
    "homophones": [
      "savoirs"
    ],
    "prononciation": "savwaR"
  },
  "savon": {
    "homophones": [
      "savons"
    ],
    "prononciation": "sav§"
  },
  "scie": {
    "homophones": [
      "scies",
      "cis",
      "scient",
      "ci",
      "si",
      "sis"
    ],
    "prononciation": "si"
  },
  "sec": {
    "homophones": [
      "secs"
    ],
    "prononciation": "sEk"
  },
  "sel": {
    "homophones": [
      "scellent",
      "selles",
      "celle",
      "celles",
      "sels",
      "cèle",
      "scelle",
      "selle"
    ],
    "prononciation": "sEl"
  },
  "semaine": {
    "homophones": [
      "semaines"
    ],
    "prononciation": "s°mEn"
  },
  "semelle": {
    "homophones": [
      "semelles"
    ],
    "prononciation": "s°mEl"
  },
  "sens": {
    "homophones": [
      "cens"
    ],
    "prononciation": "s@s"
  },
  "sentir": {
    "homophones": [
      "sentirent"
    ],
    "prononciation": "s@tiR"
  },
  "sept": {
    "homophones": [
      "cet",
      "cette",
      "c'est",
      "sets",
      "set"
    ],
    "prononciation": "sEt"
  },
  "serpent": {
    "homophones": [
      "serpents"
    ],
    "prononciation": "sERp@"
  },
  "serviette": {
    "homophones": [
      "serviettes"
    ],
    "prononciation": "sERvjEt"
  },
  "servir": {
    "homophones": [
      "servirent"
    ],
    "prononciation": "sERviR"
  },
  "seul": {
    "homophones": [
      "seules",
      "seule",
      "seuls"
    ],
    "prononciation": "s9l"
  },
  "shampoing": {
    "homophones": [
      "shampooing",
      "shampooings",
      "schampooing",
      "shampoings"
    ],
    "prononciation": "S@pw5"
  },
  "sieste": {
    "homophones": [
      "siestes"
    ],
    "prononciation": "sjEst"
  },
  "sifflet": {
    "homophones": [
      "sifflaient",
      "sifflait",
      "sifflais",
      "sifflai",
      "sifflets"
    ],
    "prononciation": "siflE"
  },
  "signe": {
    "homophones": [
      "signes",
      "signent",
      "cygne",
      "cygnes"
    ],
    "prononciation": "siN"
  },
  "silence": {
    "homophones": [
      "silences"
    ],
    "prononciation": "sil@s"
  },
  "singe": {
    "homophones": [
      "singes",
      "singent"
    ],
    "prononciation": "s5Z"
  },
  "six": {
    "homophones": [],
    "prononciation": "sis"
  },
  "siège": {
    "homophones": [
      "sièges",
      "siègent"
    ],
    "prononciation": "sjEZ"
  },
  "ski": {
    "homophones": [
      "skie",
      "skis",
      "skient",
      "skies"
    ],
    "prononciation": "ski"
  },
  "soif": {
    "homophones": [
      "soifs"
    ],
    "prononciation": "swaf"
  },
  "soigner": {
    "homophones": [
      "soigné",
      "soignez",
      "soigniez",
      "soignées",
      "soignés",
      "soignée"
    ],
    "prononciation": "swaNe"
  },
  "soir": {
    "homophones": [
      "soirs"
    ],
    "prononciation": "swaR"
  },
  "sol": {
    "homophones": [
      "soles",
      "sols",
      "sole"
    ],
    "prononciation": "sOl"
  },
  "soldat": {
    "homophones": [
      "solda",
      "soldât",
      "soldats"
    ],
    "prononciation": "sOlda"
  },
  "soleil": {
    "homophones": [
      "soleils"
    ],
    "prononciation": "solEj"
  },
  "solide": {
    "homophones": [
      "solides"
    ],
    "prononciation": "solid"
  },
  "sombre": {
    "homophones": [
      "sombres",
      "sombrent"
    ],
    "prononciation": "s§bR"
  },
  "sommeil": {
    "homophones": [
      "sommeils",
      "sommeille",
      "sommeillent"
    ],
    "prononciation": "somEj"
  },
  "sommet": {
    "homophones": [
      "sommets",
      "sommais",
      "sommait",
      "sommai"
    ],
    "prononciation": "somE"
  },
  "sonnette": {
    "homophones": [
      "sonnettes"
    ],
    "prononciation": "sonEt"
  },
  "sonné": {
    "homophones": [
      "sonner",
      "sonnez",
      "sonnée",
      "sonnés",
      "sonnées"
    ],
    "prononciation": "sone"
  },
  "sorcière": {
    "homophones": [
      "sorcières"
    ],
    "prononciation": "sORsjER"
  },
  "sortie": {
    "homophones": [
      "sortît",
      "sorties",
      "sorti",
      "sortit",
      "sortis"
    ],
    "prononciation": "sORti"
  },
  "sortir": {
    "homophones": [
      "sortirent"
    ],
    "prononciation": "sORtiR"
  },
  "soufflet": {
    "homophones": [
      "soufflait",
      "soufflais",
      "soufflaient",
      "soufflai",
      "soufflets"
    ],
    "prononciation": "suflE"
  },
  "souffrir": {
    "homophones": [
      "souffrirent"
    ],
    "prononciation": "sufRiR"
  },
  "souhaiter": {
    "homophones": [
      "souhaité",
      "souhaitée",
      "souhaités",
      "souhaitées"
    ],
    "prononciation": "swete"
  },
  "soulever": {
    "homophones": [
      "soulevée",
      "soulevés",
      "soulevé",
      "soulevez",
      "soulevées"
    ],
    "prononciation": "sul°ve"
  },
  "soupe": {
    "homophones": [
      "soupes",
      "soupent"
    ],
    "prononciation": "sup"
  },
  "souple": {
    "homophones": [
      "souples"
    ],
    "prononciation": "supl"
  },
  "sourcils": {
    "homophones": [
      "sourcil"
    ],
    "prononciation": "suRsi"
  },
  "sourd": {
    "homophones": [
      "sourds"
    ],
    "prononciation": "suR"
  },
  "sourire": {
    "homophones": [
      "sourirent",
      "sourires"
    ],
    "prononciation": "suRiR"
  },
  "souris": {
    "homophones": [
      "sourie",
      "sourit",
      "souri",
      "sourît",
      "souries",
      "sourient"
    ],
    "prononciation": "suRi"
  },
  "sous": {
    "homophones": [
      "soûl",
      "saoul",
      "soue",
      "saouls",
      "soûls",
      "sou"
    ],
    "prononciation": "su"
  },
  "souvent": {
    "homophones": [],
    "prononciation": "suv@"
  },
  "spectacle": {
    "homophones": [
      "spectacles"
    ],
    "prononciation": "spEktakl"
  },
  "sport": {
    "homophones": [
      "spore",
      "sports",
      "spores"
    ],
    "prononciation": "spOR"
  },
  "square": {
    "homophones": [
      "squares"
    ],
    "prononciation": "skwaR"
  },
  "squelette": {
    "homophones": [
      "squelettes"
    ],
    "prononciation": "sk°lEt"
  },
  "stylo": {
    "homophones": [
      "stylos"
    ],
    "prononciation": "stilo"
  },
  "sucer": {
    "homophones": [
      "sucée",
      "sucés",
      "sucé",
      "sucées",
      "sucez"
    ],
    "prononciation": "syse"
  },
  "sucre": {
    "homophones": [
      "sucrent",
      "sucres"
    ],
    "prononciation": "sykR"
  },
  "suivant": {
    "homophones": [
      "suivants"
    ],
    "prononciation": "s8iv@"
  },
  "suivre": {
    "homophones": [],
    "prononciation": "s8ivR"
  },
  "sur": {
    "homophones": [
      "surent",
      "sûrs",
      "sûre",
      "sûres",
      "surs",
      "sure",
      "sûr",
      "sures"
    ],
    "prononciation": "syR"
  },
  "surprise": {
    "homophones": [
      "surprises"
    ],
    "prononciation": "syRpRiz"
  },
  "surveiller": {
    "homophones": [
      "surveillés",
      "surveillée",
      "surveillé",
      "surveillées"
    ],
    "prononciation": "syRveje"
  },
  "sécher": {
    "homophones": [
      "séchés",
      "séchée",
      "séchées",
      "séchez",
      "séché"
    ],
    "prononciation": "seSe"
  },
  "séparer": {
    "homophones": [
      "séparé",
      "séparez",
      "séparés",
      "séparée",
      "séparées"
    ],
    "prononciation": "sepaRe"
  },
  "sérieux": {
    "homophones": [],
    "prononciation": "seRj2"
  },
  "table": {
    "homophones": [
      "tables"
    ],
    "prononciation": "tabl"
  },
  "tableau": {
    "homophones": [
      "tableaux"
    ],
    "prononciation": "tablo"
  },
  "tablier": {
    "homophones": [
      "tabliers"
    ],
    "prononciation": "tablije"
  },
  "tabouret": {
    "homophones": [
      "tabourets"
    ],
    "prononciation": "tabuRE"
  },
  "tache": {
    "homophones": [
      "tâchent",
      "tâche",
      "taches",
      "tâches",
      "tachent"
    ],
    "prononciation": "taS"
  },
  "taille": {
    "homophones": [
      "tailles",
      "thaï",
      "thaïs",
      "thaïe",
      "taillent"
    ],
    "prononciation": "taj"
  },
  "taille-crayon": {
    "homophones": [
      "taille-crayons"
    ],
    "prononciation": "tajkREj§"
  },
  "tailler": {
    "homophones": [
      "taillé",
      "taillez",
      "taillées",
      "taillés",
      "taillée"
    ],
    "prononciation": "taje"
  },
  "talon": {
    "homophones": [
      "talons",
      "tallons"
    ],
    "prononciation": "tal§"
  },
  "tambour": {
    "homophones": [
      "tambours"
    ],
    "prononciation": "t@buR"
  },
  "tampon": {
    "homophones": [
      "tampons"
    ],
    "prononciation": "t@p§"
  },
  "taper": {
    "homophones": [
      "tapez",
      "tapé",
      "tapés",
      "tapée",
      "tapées"
    ],
    "prononciation": "tape"
  },
  "tapis": {
    "homophones": [
      "tapie",
      "tapi",
      "tapit",
      "tapies"
    ],
    "prononciation": "tapi"
  },
  "tard": {
    "homophones": [
      "tares",
      "tare"
    ],
    "prononciation": "taR"
  },
  "tarte": {
    "homophones": [
      "tartes"
    ],
    "prononciation": "taRt"
  },
  "tartine": {
    "homophones": [
      "tartinent",
      "tartines"
    ],
    "prononciation": "taRtin"
  },
  "tas": {
    "homophones": [
      "ta"
    ],
    "prononciation": "ta"
  },
  "taupe": {
    "homophones": [
      "taupes"
    ],
    "prononciation": "top"
  },
  "temps": {
    "homophones": [
      "tend",
      "taons",
      "tans",
      "tant",
      "taon",
      "tan",
      "tends"
    ],
    "prononciation": "t@"
  },
  "tendre": {
    "homophones": [
      "tendres"
    ],
    "prononciation": "t@dR"
  },
  "tenir": {
    "homophones": [],
    "prononciation": "t°niR"
  },
  "tente": {
    "homophones": [
      "tentes",
      "tentent",
      "tante",
      "tantes"
    ],
    "prononciation": "t@t"
  },
  "terminer": {
    "homophones": [
      "terminées",
      "terminé",
      "terminez",
      "terminés",
      "terminée"
    ],
    "prononciation": "tERmine"
  },
  "terrain": {
    "homophones": [
      "terrains"
    ],
    "prononciation": "tER5"
  },
  "terre": {
    "homophones": [
      "ter",
      "terrent",
      "taire",
      "terres"
    ],
    "prononciation": "tER"
  },
  "terrible": {
    "homophones": [
      "terribles"
    ],
    "prononciation": "tERibl"
  },
  "terrier": {
    "homophones": [
      "terriers"
    ],
    "prononciation": "tERje"
  },
  "thermomètre": {
    "homophones": [
      "thermomètres"
    ],
    "prononciation": "tERmomEtR"
  },
  "ticket": {
    "homophones": [
      "tiquai",
      "tickets",
      "tiquais",
      "tiquait",
      "tiquaient"
    ],
    "prononciation": "tikE"
  },
  "tige": {
    "homophones": [
      "tiges"
    ],
    "prononciation": "tiZ"
  },
  "tigre": {
    "homophones": [
      "tigres"
    ],
    "prononciation": "tigR"
  },
  "timbre": {
    "homophones": [
      "timbres"
    ],
    "prononciation": "t5bR"
  },
  "tirer": {
    "homophones": [
      "tirés",
      "tirée",
      "tiré",
      "tirez",
      "tirées"
    ],
    "prononciation": "tiRe"
  },
  "tiroir": {
    "homophones": [
      "tiroirs"
    ],
    "prononciation": "tiRwaR"
  },
  "tissu": {
    "homophones": [
      "tissue",
      "tissus",
      "tissues"
    ],
    "prononciation": "tisy"
  },
  "titre": {
    "homophones": [
      "titres"
    ],
    "prononciation": "titR"
  },
  "toboggan": {
    "homophones": [
      "toboggans"
    ],
    "prononciation": "tobog@"
  },
  "toilettes": {
    "homophones": [
      "toilette"
    ],
    "prononciation": "twalEt"
  },
  "toit": {
    "homophones": [
      "toi",
      "toits"
    ],
    "prononciation": "twa"
  },
  "tomate": {
    "homophones": [
      "tomates"
    ],
    "prononciation": "tomat"
  },
  "tomber": {
    "homophones": [
      "tombé",
      "tombez",
      "tombées",
      "tombée",
      "tombés"
    ],
    "prononciation": "t§be"
  },
  "tonnerre": {
    "homophones": [
      "toner",
      "tonnerres"
    ],
    "prononciation": "tonER"
  },
  "torchon": {
    "homophones": [
      "torchons"
    ],
    "prononciation": "tORS§"
  },
  "tordu": {
    "homophones": [
      "tordues",
      "tordus",
      "tordue"
    ],
    "prononciation": "tORdy"
  },
  "tortue": {
    "homophones": [
      "tortues",
      "tortus",
      "tortu"
    ],
    "prononciation": "tORty"
  },
  "toucher": {
    "homophones": [
      "touchers",
      "touchez",
      "touché",
      "touchée",
      "touchés",
      "touchées"
    ],
    "prononciation": "tuSe"
  },
  "toujours": {
    "homophones": [],
    "prononciation": "tuZuR"
  },
  "tournevis": {
    "homophones": [],
    "prononciation": "tuRn°vis"
  },
  "tours": {
    "homophones": [
      "tour"
    ],
    "prononciation": "tuR"
  },
  "tracteur": {
    "homophones": [
      "tracteurs"
    ],
    "prononciation": "tRakt9R"
  },
  "train": {
    "homophones": [
      "trains"
    ],
    "prononciation": "tR5"
  },
  "traire": {
    "homophones": [],
    "prononciation": "tRER"
  },
  "trampoline": {
    "homophones": [],
    "prononciation": "tR@polin"
  },
  "tranche": {
    "homophones": [
      "tranchent",
      "tranches"
    ],
    "prononciation": "tR@S"
  },
  "tranquille": {
    "homophones": [
      "tranquilles"
    ],
    "prononciation": "tR@kil"
  },
  "transparent": {
    "homophones": [
      "transparents"
    ],
    "prononciation": "tR@spaR@"
  },
  "transpirer": {
    "homophones": [
      "transpirez",
      "transpiré"
    ],
    "prononciation": "tR@spiRe"
  },
  "transporter": {
    "homophones": [
      "transportées",
      "transportez",
      "transportée",
      "transportés",
      "transporté"
    ],
    "prononciation": "tR@spORte"
  },
  "travail": {
    "homophones": [
      "travaillent",
      "travaille",
      "travailles"
    ],
    "prononciation": "tRavaj"
  },
  "travailler": {
    "homophones": [
      "travaillée",
      "travaillés",
      "travaillées",
      "travaillé",
      "travaillez"
    ],
    "prononciation": "tRavaje"
  },
  "travaux": {
    "homophones": [],
    "prononciation": "tRavo"
  },
  "traversée": {
    "homophones": [
      "traverser",
      "traversez",
      "traversées",
      "traversé",
      "traversés"
    ],
    "prononciation": "tRavERse"
  },
  "tremper": {
    "homophones": [
      "trempées",
      "trempés",
      "trempée",
      "trempez",
      "trempé"
    ],
    "prononciation": "tR@pe"
  },
  "tricher": {
    "homophones": [
      "trichez",
      "trichée",
      "triché",
      "trichées"
    ],
    "prononciation": "tRiSe"
  },
  "tricot": {
    "homophones": [
      "tricots"
    ],
    "prononciation": "tRiko"
  },
  "tricoter": {
    "homophones": [
      "tricotez",
      "tricoté",
      "tricotées",
      "tricotés",
      "tricotée"
    ],
    "prononciation": "tRikote"
  },
  "tricycle": {
    "homophones": [
      "tricycles"
    ],
    "prononciation": "tRisikl"
  },
  "trier": {
    "homophones": [
      "triez",
      "trillé",
      "trié",
      "triés",
      "triée",
      "triées"
    ],
    "prononciation": "tRije"
  },
  "triste": {
    "homophones": [
      "tristes"
    ],
    "prononciation": "tRist"
  },
  "trois": {
    "homophones": [],
    "prononciation": "tRwa"
  },
  "trompette": {
    "homophones": [
      "trompettes"
    ],
    "prononciation": "tR§pEt"
  },
  "trop": {
    "homophones": [
      "trots",
      "trot"
    ],
    "prononciation": "tRo"
  },
  "trottoir": {
    "homophones": [
      "trottoirs"
    ],
    "prononciation": "tRotwaR"
  },
  "trou": {
    "homophones": [
      "trous",
      "troue",
      "trouent"
    ],
    "prononciation": "tRu"
  },
  "trousse": {
    "homophones": [
      "trousses"
    ],
    "prononciation": "tRus"
  },
  "trouver": {
    "homophones": [
      "trouvée",
      "trouvés",
      "trouvé",
      "trouvez",
      "trouvées"
    ],
    "prononciation": "tRuve"
  },
  "très": {
    "homophones": [
      "trait",
      "trais",
      "traie",
      "traits"
    ],
    "prononciation": "tRE"
  },
  "trésor": {
    "homophones": [
      "trésors"
    ],
    "prononciation": "tRezOR"
  },
  "tube": {
    "homophones": [
      "tubes"
    ],
    "prononciation": "tyb"
  },
  "tulipe": {
    "homophones": [
      "tulipes"
    ],
    "prononciation": "tylip"
  },
  "tunnel": {
    "homophones": [
      "tunnels"
    ],
    "prononciation": "tynEl"
  },
  "tuyau": {
    "homophones": [
      "tuyaux"
    ],
    "prononciation": "t8ijo"
  },
  "télécommande": {
    "homophones": [
      "télécommandes"
    ],
    "prononciation": "telekom@d"
  },
  "téléphone": {
    "homophones": [
      "téléphonent",
      "téléphones"
    ],
    "prononciation": "telefOn"
  },
  "téléphoner": {
    "homophones": [
      "téléphonés",
      "téléphoné",
      "téléphonées",
      "téléphonez"
    ],
    "prononciation": "telefone"
  },
  "télévision": {
    "homophones": [
      "télévisions"
    ],
    "prononciation": "televizj§"
  },
  "téter": {
    "homophones": [
      "tétée",
      "tétées",
      "tété"
    ],
    "prononciation": "tete"
  },
  "uniforme": {
    "homophones": [
      "uniformes"
    ],
    "prononciation": "ynifORm"
  },
  "univers": {
    "homophones": [],
    "prononciation": "ynivER"
  },
  "usine": {
    "homophones": [
      "usines"
    ],
    "prononciation": "yzin"
  },
  "usé": {
    "homophones": [
      "usez",
      "user",
      "usée",
      "usés",
      "usées"
    ],
    "prononciation": "yze"
  },
  "utile": {
    "homophones": [
      "utiles"
    ],
    "prononciation": "ytil"
  },
  "vacances": {
    "homophones": [
      "vacance"
    ],
    "prononciation": "vak@s"
  },
  "vache": {
    "homophones": [
      "vaches"
    ],
    "prononciation": "vaS"
  },
  "vague": {
    "homophones": [
      "vagues",
      "vaguent"
    ],
    "prononciation": "vag"
  },
  "vaisselle": {
    "homophones": [
      "vaisselles"
    ],
    "prononciation": "vEsEl"
  },
  "valise": {
    "homophones": [
      "valises"
    ],
    "prononciation": "valiz"
  },
  "vanter": {
    "homophones": [
      "ventées",
      "venté",
      "vantez",
      "venter",
      "vantée",
      "vantés",
      "vantées",
      "ventés",
      "ventée",
      "vanté"
    ],
    "prononciation": "v@te"
  },
  "vase": {
    "homophones": [
      "vases"
    ],
    "prononciation": "vaz"
  },
  "vendre": {
    "homophones": [],
    "prononciation": "v@dR"
  },
  "vendredi": {
    "homophones": [
      "vendredis"
    ],
    "prononciation": "v@dR°di"
  },
  "venir": {
    "homophones": [],
    "prononciation": "v°niR"
  },
  "ventre": {
    "homophones": [
      "ventres"
    ],
    "prononciation": "v@tR"
  },
  "verre": {
    "homophones": [
      "verres",
      "ver",
      "vert",
      "vers",
      "vair",
      "verts"
    ],
    "prononciation": "vER"
  },
  "vers": {
    "homophones": [
      "verres",
      "ver",
      "vert",
      "vair",
      "verre",
      "verts"
    ],
    "prononciation": "vER"
  },
  "veste": {
    "homophones": [
      "vestes"
    ],
    "prononciation": "vEst"
  },
  "viande": {
    "homophones": [
      "viandes"
    ],
    "prononciation": "vj@d"
  },
  "vide": {
    "homophones": [
      "vides",
      "vident"
    ],
    "prononciation": "vid"
  },
  "vider": {
    "homophones": [
      "vidés",
      "vidée",
      "vidées",
      "videz",
      "vidé"
    ],
    "prononciation": "vide"
  },
  "vieux": {
    "homophones": [],
    "prononciation": "vj2"
  },
  "village": {
    "homophones": [
      "villages"
    ],
    "prononciation": "vilaZ"
  },
  "ville": {
    "homophones": [
      "vil",
      "viles",
      "villes",
      "vils",
      "vile"
    ],
    "prononciation": "vil"
  },
  "vin": {
    "homophones": [
      "vains",
      "vînt",
      "vint",
      "vins",
      "vingt",
      "vain"
    ],
    "prononciation": "v5"
  },
  "virage": {
    "homophones": [
      "virages"
    ],
    "prononciation": "viRaZ"
  },
  "vis": {
    "homophones": [
      "visse",
      "vices",
      "vice",
      "vissent"
    ],
    "prononciation": "vis"
  },
  "visage": {
    "homophones": [
      "visages"
    ],
    "prononciation": "vizaZ"
  },
  "visiter": {
    "homophones": [
      "visitez",
      "visité",
      "visités",
      "visitée",
      "visitées"
    ],
    "prononciation": "vizite"
  },
  "vitesse": {
    "homophones": [
      "vitesses"
    ],
    "prononciation": "vitEs"
  },
  "vitre": {
    "homophones": [
      "vitres"
    ],
    "prononciation": "vitR"
  },
  "vivant": {
    "homophones": [
      "vivants"
    ],
    "prononciation": "viv@"
  },
  "vivre": {
    "homophones": [
      "vivres"
    ],
    "prononciation": "vivR"
  },
  "voile": {
    "homophones": [
      "voilent",
      "voiles"
    ],
    "prononciation": "vwal"
  },
  "voir": {
    "homophones": [
      "voire"
    ],
    "prononciation": "vwaR"
  },
  "voisin": {
    "homophones": [
      "voisins"
    ],
    "prononciation": "vwaz5"
  },
  "voiture": {
    "homophones": [
      "voitures"
    ],
    "prononciation": "vwatyR"
  },
  "voix": {
    "homophones": [
      "voient",
      "voies",
      "voit",
      "vois",
      "voie",
      "voua"
    ],
    "prononciation": "vwa"
  },
  "volet": {
    "homophones": [
      "volaient",
      "volets",
      "volai",
      "volley",
      "volais",
      "volait"
    ],
    "prononciation": "volE"
  },
  "vouloir": {
    "homophones": [
      "vouloirs"
    ],
    "prononciation": "vulwaR"
  },
  "voyage": {
    "homophones": [
      "voyagent",
      "voyages"
    ],
    "prononciation": "vwajaZ"
  },
  "voyager": {
    "homophones": [
      "voyagez",
      "voyagé"
    ],
    "prononciation": "vwajaZe"
  },
  "véhicule": {
    "homophones": [
      "véhicules",
      "véhiculent"
    ],
    "prononciation": "veikyl"
  },
  "vélo": {
    "homophones": [
      "vélos"
    ],
    "prononciation": "velo"
  },
  "vétérinaire": {
    "homophones": [
      "vétérinaires"
    ],
    "prononciation": "veteRinER"
  },
  "wagon": {
    "homophones": [
      "wagons"
    ],
    "prononciation": "vag§"
  },
  "xylophone": {
    "homophones": [
      "xylophones"
    ],
    "prononciation": "gzilofOn"
  },
  "yaourt": {
    "homophones": [
      "yaourts"
    ],
    "prononciation": "jauRt"
  },
  "yeux": {
    "homophones": [],
    "prononciation": "j2"
  },
  "zoo": {
    "homophones": [
      "zoos"
    ],
    "prononciation": "zoo"
  },
  "zèbre": {
    "homophones": [
      "zèbrent",
      "zèbres"
    ],
    "prononciation": "zEbR"
  },
  "zéro": {
    "homophones": [
      "zéros"
    ],
    "prononciation": "zeRo"
  },
  "à": {
    "homophones": [
      "a",
      "ah",
      "as",
      "ha"
    ],
    "prononciation": "a"
  },
  "écarté": {
    "homophones": [
      "écartée",
      "écartés",
      "écartées",
      "écartez",
      "écarter"
    ],
    "prononciation": "ekaRte"
  },
  "échanger": {
    "homophones": [
      "échangées",
      "échangez",
      "échangé",
      "échangés",
      "échangée"
    ],
    "prononciation": "eS@Ze"
  },
  "écharpe": {
    "homophones": [
      "écharpent",
      "écharpes"
    ],
    "prononciation": "eSaRp"
  },
  "échasse": {
    "homophones": [
      "échasses"
    ],
    "prononciation": "eSas"
  },
  "échasses": {
    "homophones": [
      "échasse"
    ],
    "prononciation": "eSas"
  },
  "échelle": {
    "homophones": [
      "échelles"
    ],
    "prononciation": "eSEl"
  },
  "éclabousser": {
    "homophones": [
      "éclaboussé",
      "éclaboussez",
      "éclaboussées",
      "éclaboussés",
      "éclaboussée"
    ],
    "prononciation": "eklabuse"
  },
  "éclair": {
    "homophones": [
      "éclaires",
      "éclairent",
      "éclairs",
      "éclaire"
    ],
    "prononciation": "eklER"
  },
  "éclairer": {
    "homophones": [
      "éclairée",
      "éclairés",
      "éclairées",
      "éclairé"
    ],
    "prononciation": "ekleRe"
  },
  "éclater": {
    "homophones": [
      "éclatées",
      "éclaté",
      "éclatez",
      "éclatés",
      "éclatée"
    ],
    "prononciation": "eklate"
  },
  "école": {
    "homophones": [
      "écoles"
    ],
    "prononciation": "ekOl"
  },
  "écorce": {
    "homophones": [
      "écorces"
    ],
    "prononciation": "ekORs"
  },
  "écouter": {
    "homophones": [
      "écoutez",
      "écouté",
      "écoutés",
      "écoutée",
      "écoutées"
    ],
    "prononciation": "ekute"
  },
  "écran": {
    "homophones": [
      "écrans"
    ],
    "prononciation": "ekR@"
  },
  "écrasé": {
    "homophones": [
      "écrasez",
      "écraser",
      "écrasées",
      "écrasés",
      "écrasée"
    ],
    "prononciation": "ekRaze"
  },
  "écrire": {
    "homophones": [],
    "prononciation": "ekRiR"
  },
  "écriture": {
    "homophones": [
      "écritures"
    ],
    "prononciation": "ekRityR"
  },
  "écureuil": {
    "homophones": [
      "écureuils"
    ],
    "prononciation": "ekyR9j"
  },
  "égal": {
    "homophones": [
      "égales",
      "égalent",
      "égale"
    ],
    "prononciation": "egal"
  },
  "élastique": {
    "homophones": [
      "élastiques"
    ],
    "prononciation": "elastik"
  },
  "électrique": {
    "homophones": [
      "électriques"
    ],
    "prononciation": "elEktRik"
  },
  "éloigner": {
    "homophones": [
      "éloignées",
      "éloignez",
      "éloigné",
      "éloignée",
      "éloignés"
    ],
    "prononciation": "elwaNe"
  },
  "élève": {
    "homophones": [
      "élèvent",
      "élèves"
    ],
    "prononciation": "elEv"
  },
  "éléphant": {
    "homophones": [
      "éléphants"
    ],
    "prononciation": "elef@"
  },
  "énervé": {
    "homophones": [
      "énerver",
      "énervez",
      "énervées",
      "énervée",
      "énervés"
    ],
    "prononciation": "enERve"
  },
  "énorme": {
    "homophones": [
      "énormes"
    ],
    "prononciation": "enORm"
  },
  "épais": {
    "homophones": [],
    "prononciation": "epE"
  },
  "épaule": {
    "homophones": [
      "épaules",
      "épaulent"
    ],
    "prononciation": "epol"
  },
  "épingle": {
    "homophones": [
      "épingles",
      "épinglent"
    ],
    "prononciation": "ep5gl"
  },
  "éplucher": {
    "homophones": [
      "épluché",
      "épluchée",
      "épluchés",
      "épluchez",
      "épluchées"
    ],
    "prononciation": "eplySe"
  },
  "épluchure": {
    "homophones": [
      "épluchures"
    ],
    "prononciation": "eplySyR"
  },
  "éponge": {
    "homophones": [
      "épongent",
      "éponges"
    ],
    "prononciation": "ep§Z"
  },
  "épée": {
    "homophones": [
      "épées"
    ],
    "prononciation": "epe"
  },
  "équipe": {
    "homophones": [
      "équipent",
      "équipes"
    ],
    "prononciation": "ekip"
  },
  "étagère": {
    "homophones": [
      "étagères"
    ],
    "prononciation": "etaZER"
  },
  "étaler": {
    "homophones": [
      "étalée",
      "étalés",
      "étalé",
      "étalées",
      "étalez"
    ],
    "prononciation": "etale"
  },
  "étang": {
    "homophones": [
      "étangs",
      "étend",
      "étant",
      "étends"
    ],
    "prononciation": "et@"
  },
  "éteindre": {
    "homophones": [],
    "prononciation": "et5dR"
  },
  "éternuer": {
    "homophones": [
      "éternué"
    ],
    "prononciation": "etERn8e"
  },
  "étiquette": {
    "homophones": [
      "étiquettes",
      "étiquettent"
    ],
    "prononciation": "etikEt"
  },
  "étoile": {
    "homophones": [
      "étoilent",
      "étoiles"
    ],
    "prononciation": "etwal"
  },
  "étroit": {
    "homophones": [
      "étroits"
    ],
    "prononciation": "etRwa"
  },
  "étude": {
    "homophones": [
      "études"
    ],
    "prononciation": "etyd"
  },
  "étudier": {
    "homophones": [
      "étudiées",
      "étudiés",
      "étudiée",
      "étudiez",
      "étudié"
    ],
    "prononciation": "etydje"
  },
  "été": {
    "homophones": [
      "étés"
    ],
    "prononciation": "ete"
  },
  "évier": {
    "homophones": [
      "éviers"
    ],
    "prononciation": "evje"
  }
};

// Export pour utilisation dans d'autres modules
export default lexique;