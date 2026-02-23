import { ICategoryDescDto } from "../models/iCategory";
/*
export  const CategoriesDesc: ICategoryDescDto[] = [
  {
    categoryId: 1,
    categoryName: 'Maïs',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 2,
    categoryName: 'Quinoa',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 3,
    categoryName: 'Aneth',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 4,
    categoryName: 'Anis',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 5,
    categoryName: 'Basilic',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 6,
    categoryName: 'Baume Mélisse',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 7,
    categoryName: 'Bourrache',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 8,
    categoryName: 'Carvi',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 9,
    categoryName: 'Cerfeuil',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 10,
    categoryName: 'Ciboulette',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 11,
    categoryName: 'Citronnelle',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 12,
    categoryName: 'Coriandre',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 13,
    categoryName: 'Cumin',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 14,
    categoryName: 'Fenugrec',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 15,
    categoryName: 'Hysope',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 16,
    categoryName: 'Livèche',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 17,
    categoryName: 'Marjolaine',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 18,
    categoryName: 'Menthe',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 19,
    categoryName: 'Menthe à chat',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 20,
    categoryName: 'Origan',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 21,
    categoryName: 'Persil',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 22,
    categoryName: 'Pimprenelle',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 23,
    categoryName: 'Romarin',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 24,
    categoryName: 'Rue',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 25,
    categoryName: 'Sarriette',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 26,
    categoryName: 'Sauge',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 27,
    categoryName: 'Stevia',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 28,
    categoryName: 'Thum',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 29,
    categoryName: 'Cerises de terre',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 30,
    categoryName: 'Fraises',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 31,
    categoryName: 'Melons',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 32,
    categoryName: 'Asperge',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 33,
    categoryName: 'Bette à carde',
    categoryDesc: "La bette à carde est une verdure à la fois jolie et délicieuse.  Elle remplace les épinards durant la saison chaude.   Elle est délicieuse poêlée avec des oignons et de l'ail.  On peut la semer directement en terre lorsque le sol se réchauffe et s'assèche vers la fin mai.  On récolte les feuilles extérieures pour en avoir toute la saison.  On conseille 2-4 plants par famille.",
    categoryActive: true
  },
  {
    categoryId: 34,
    categoryName: 'Cardon',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 35,
    categoryName: 'Céleri',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 36,
    categoryName: 'Chicorée',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 37,
    categoryName: 'Chou',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 38,
    categoryName: 'Chou-rave',
    categoryDesc: "Le Chou-rave est facile à cultiver et moins susceptible aux insectes que les autres légumes de la famille du chou.  C’est un joli bulbe (formé au niveau de la tige) qu’on récolte lorsqu’il atteint la taille d’une balle molle.  Très croquant et rafraîchissant en crudité, il peut également être cuit.  On conseille 2 à 3 choux-raves par personne.",
    categoryActive: true
  },
  {
    categoryId: 39,
    categoryName: 'Cresson',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 40,
    categoryName: 'Épinards',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 41,
    categoryName: 'Fenouil',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 42,
    categoryName: 'Kale',
    categoryDesc: "Le Kale est un légume feuille de la famille du chou qui résiste très bien aux températures froides. Il est particulièrement bien adapté à la culture d’automne. Le kale peut être servi en salade, cuit à la vapeur, ajouté aux omelettes et gratins et également aux smoothies. On suggère 1 à 2 plants par personne. Une couverture flottante en fin de saison permet de le récolter longtemps après les premiers gels.",
    categoryActive: true
  },
  {
    categoryId: 43,
    categoryName: 'Laitues',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 44,
    categoryName: 'Moutarde',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 45,
    categoryName: 'Oseille',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 46,
    categoryName: 'Pourpier',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 47,
    categoryName: 'Radicchio',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 48,
    categoryName: 'Rapini',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 49,
    categoryName: 'Rhubarbes',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 50,
    categoryName: 'Roquette',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 51,
    categoryName: 'Shiso',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 52,
    categoryName: 'Artichaut',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 53,
    categoryName: 'Brocoli',
    categoryDesc: "Le Brocoli est un légume très nutritif.  On peut planifier deux récoltes, une au début de l’été et une en automne.  Comme le brocoli est susceptible à l’invasion de plusieurs insectes une couverture flottante est recommandée pour sa culture.  Bien fertiliser avec un compost riche et des granules de fumier de poule pour obtenir de belles grosses têtes de brocoli.  On conseille 1 à 2 brocolis par personne.  Le brocoli continue de produire après la récolte de la tête principale.",
    categoryActive: true
  },
  {
    categoryId: 54,
    categoryName: 'Chou-fleur',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 55,
    categoryName: 'Arachide',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 56,
    categoryName: 'Aubergines',
    categoryDesc: 'L’Aubergine est un légume qui fait de magnifiques fleurs et est très productif si les conditions sont bonnes.  On conseille de les partir 8-10 semaines avant de mettre en terre soit au début du mois de mars.  Les semences germent mieux autour de 28 degré Celsius. Typiquement le plant sera dans un pot de 4po avant de transplanter pour une croissance optimale.  L’aubergine aime la chaleur, il ne faut pas la transplanter trop tôt.  On transplante après la date de dernier gel. On conseille 2-4 plants par famille.',
    categoryActive: true
  },
  {
    categoryId: 57,
    categoryName: 'Citrouille',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 58,
    categoryName: 'Concombres',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 59,
    categoryName: 'Courges',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 60,
    categoryName: 'Gourganes',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 61,
    categoryName: 'Haricots',
    categoryDesc: "Les Fèves ou Haricots sont faciles à cultiver et pleins de nutriments.  Les haricots aiment la chaleur et doivent être semés après les risques de gel.  Il existe des cultivars nains ou grimpants et les fèves varient par leurs formes et leurs couleurs.  On doit récolter régulièrement pour favoriser la production.  C’est un des légumes favoris de mes enfants légèrement cuits à la vapeur.  On conseille 15 plants de haricots nains par personne.  Les haricots grimpants produisent plus tardivement, mais sur une période plus longue.",
    categoryActive: true
  },
  {
    categoryId: 62,
    categoryName: 'Okra',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 63,
    categoryName: 'Pâtissons',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 64,
    categoryName: 'Piments',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 65,
    categoryName: 'Pois',
    categoryDesc: "Les Pois sont très faciles à cultiver (surtout au printemps) et délicieusement croquants et sucrés lorsque cueillis directement au potager.  Il existe plusieurs types de pois : les pois à écosser, les pois mange-tout ou pois sucré (bien dodus et ronds) et les pois des neiges (plus plats, un classique des sautés asiatiques).   On le sème tôt au printemps. C’est un légume qui préfère le froid, un des premiers légumes à déguster au jardin.  Il est dans la famille des légumineuses et fixe l’azote dont il a besoin, il demande donc peu de fertilisant.  On conseille de 16 à 20 plants par personne. ",
    categoryActive: true
  },
  {
    categoryId: 66,
    categoryName: 'Poivrons',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 67,
    categoryName: 'Soya',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 68,
    categoryName: 'Tomates',
    categoryDesc: "La Tomate est un incontournable au potager.  Récolter des tomates cerises et les déguster fraîchement cueillies de la vigne est un must! Il faut laisser à la tomate de l’espace pour réduire l’impact des maladies foliaires. Elle se cultive très bien en pot (40 cm ou plus) avec un bon tuteur.  Pour une récolte hâtive de tomates, partir les semis un bon 8 semaines avant le dernier gel.  La tomate aime être repiquée dans des pots de plus en plus gros, le pot final devra alors faire 20cm et être assez profond.  Pour le gros de vos plants de tomates 6 semaines avant le dernier gel est suffisant, un pot de yogourt de 650 ou 750 mL est alors suffisant pour le dernier pot.  On peut laisser les plants dehors très rapidement pour qu’ils soient vigoureux, mais en les rentrant durant la nuit.  On conseille 1-2 plants par personne, 4-6  si on fait des conserves.",
    categoryActive: true
  },
  {
    categoryId: 69,
    categoryName: 'Tomatillos',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 70,
    categoryName: 'Ail',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 71,
    categoryName: 'Betteraves',
    categoryDesc: "La Betterave est un joli légume racine coloré et sucré.  Elle est excellente marinée, cuite et même crue en salade.  Elle est semée au printemps pour une récolte d’été et à la fin de l’été pour une récolte d’automne.  La betterave est plus jolie et sucrée en automne.  Elle est facile à cultiver et le feuillage est joli et comestible.  On peut la semer aux deux semaines pour avoir des mini-betteraves en continu.  La mineuse de la feuille (insecte) peut affecter le feuillage, mais ne réduira pas la qualité des racines.  On conseille 9 plants de betterave par personne, surtout si on fait des conserves.  La betterave se conserve longtemps au frigo également.",
    categoryActive: true
  },
  {
    categoryId: 72,
    categoryName: 'Carottes',
    categoryDesc: "La Carotte est une favorite au jardin.  On la mange en crudité, en salade, marinée, cuite et en dessert.  Elle aime les sols bien ameublis en profondeur.  Il faut garder la surface du sol humide durant la période de germination qui peut prendre jusqu'à 14 jours. Attention à la mouche de la carotte, une couverture flottante sera peut-être nécessaire pour éviter les dégâts.  Une culture intercalaire avec l'oignon réduit également la mouche de la carotte.  La culture de la carotte d’automne donne des carottes plus sucrées, puisqu’un léger gel augmente la teneur en sucre.  24-36 carottes par personne sont suggérées, c’est un super légume de conservation.",
    categoryActive: true
  },
  {
    categoryId: 73,
    categoryName: 'Céleri-rave',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 74,
    categoryName: 'Navets',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 75,
    categoryName: 'Oignons',
    categoryDesc: "L'Oignon se cultive facilement à partir de la semence.  Les semis intérieur peut se faire à la volée en plateaux ou par groupe de 3-4 en multicellules.  Les plantules se séparent bien.  On doit à semer à l'intérieur tôt en mars.  On plante au jardin fin mai par groupe de 3.  L'oignon a besoin d'un bon apport de compost pour former un gros bulbe.  ",
    categoryActive: true
  },
  {
    categoryId: 76,
    categoryName: 'Panais',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 77,
    categoryName: 'Poireaux',
    categoryDesc: "La culture du Poireau ressemble à celle de l'oignon.  Il est par contre recommandé de recouvrir d'une couverture flottante pour protéger de la teigne du poireau. ",
    categoryActive: true
  },
  {
    categoryId: 78,
    categoryName: 'Radis',
    categoryDesc: "Le Radis est très facile à cultiver et surtout, il a une germination et une croissance rapide. C’est pourquoi il est apprécié par les enfants.  Croquant et piquant, le radis a beaucoup d’amateurs en crudité.  Il peut également être légèrement poêlé.  Le radis aime le froid, on ne le cultive généralement pas en milieu d’été.  C’est une primeur au printemps et un délice en automne!  Il faut le récolter dès que la rondeur se forme pour éviter qu’il soit trop piquant ou que le cœur soit creux. Respecter le nombre de jours pour la maturité aide beaucoup!  On suggère 9 à 12 radis par personne.",
    categoryActive: true
  },
  {
    categoryId: 79,
    categoryName: 'Salsifis',
    categoryDesc: "",
    categoryActive: true
  },
  {
    categoryId: 80,
    categoryName: 'Asclépiade',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 81,
    categoryName: 'Camomille',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 82,
    categoryName: 'Capucine',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 83,
    categoryName: 'Échinacée',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 84,
    categoryName: 'Géranium',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 85,
    categoryName: 'Lavande',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 86,
    categoryName: 'Marguerite',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 87,
    categoryName: 'Oeillet d inde',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 88,
    categoryName: 'Pavot',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 89,
    categoryName: 'Pensées',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 90,
    categoryName: 'Pétunia',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 91,
    categoryName: 'Souci',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 92,
    categoryName: 'Tabac',
    categoryDesc: '',
    categoryActive: true
  },
  {
    categoryId: 93,
    categoryName: 'Tournesol',
    categoryDesc: '',
    categoryActive: true
  },
];
*/