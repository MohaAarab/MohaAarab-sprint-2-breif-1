// =============================================================
// data.js — les créatures de VOTRE univers
// =============================================================
// TODO : remplissez ce tableau avec au moins 12 créatures
// (Pokémon, Digimon ou Yu-Gi-Oh!), en respectant ce format :
//
// {
//   id: "#001",                                   // "#" suivi de 3 chiffres
//   name: "Exemple",                              // texte
//   type: "Feu",                                  // une valeur d'une liste fixe
//   level: "Base",                                // texte
//   stats: { hp: 45, attack: 49, defence: 49 },   // 3 nombres de 0 à 999
//   image: "https://example.com/001.png",         // lien https vers une image
//   description: "Une courte description."        // 10 à 200 caractères
// }
//
// Pensez à citer la source de vos images dans le README.

const creatures = [
  {
    id: "#001",
    name: "Dragon Blanc aux Yeux Bleus",
    type: "Lumière",
    level: "Niveau 8",
    stats: { hp: 800, attack: 300, defence: 250 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/89631139.jpg",
    description: "Un dragon légendaire d'une puissance incroyable, très rare et très redouté de tous ses adversaires."
  },
  {
    id: "#002",
    name: "Magicien Sombre",
    type: "Ténèbres",
    level: "Niveau 7",
    stats: { hp: 700, attack: 250, defence: 210 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/46986414.jpg",
    description: "Le magicien le plus puissant en matière d'attaque et de défense. Il maîtrise de nombreux sorts."
  },
  {
    id: "#003",
    name: "Dragon Noir aux Yeux Rouges",
    type: "Ténèbres",
    level: "Niveau 7",
    stats: { hp: 650, attack: 240, defence: 200 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/74677422.jpg",
    description: "Un dragon noir au regard rouge perçant. Sa fureur est telle que peu osent l'affronter."
  },
  {
    id: "#004",
    name: "Exodia le Interdit",
    type: "Ténèbres",
    level: "Niveau 3",
    stats: { hp: 999, attack: 100, defence: 100 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/33396948.jpg",
    description: "Une créature scellée en cinq morceaux. Celui qui les réunit tous remporte le duel immédiatement."
  },
  {
    id: "#005",
    name: "Crâne Invoqué",
    type: "Ténèbres",
    level: "Niveau 6",
    stats: { hp: 600, attack: 250, defence: 120 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/70781052.jpg",
    description: "Un démon redoutable qui frappe ses ennemis avec des éclairs. Il est fort en attaque mais fragile en défense."
  },
  {
    id: "#006",
    name: "Slifer le Dragon du Ciel",
    type: "Divin",
    level: "Niveau 10",
    stats: { hp: 999, attack: 400, defence: 400 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/10000020.jpg",
    description: "Un dieu égyptien en forme de dragon rouge. Sa force grandit avec le nombre de cartes en main."
  },
  {
    id: "#007",
    name: "Obélisque le Tourmenteur",
    type: "Divin",
    level: "Niveau 10",
    stats: { hp: 999, attack: 400, defence: 400 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/10000000.jpg",
    description: "Un géant divin d'une force colossale. Un seul de ses coups peut détruire tout le terrain adverse."
  },
  {
    id: "#008",
    name: "Soldat Lustre Noir",
    type: "Terre",
    level: "Niveau 8",
    stats: { hp: 800, attack: 300, defence: 250 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/5405694.jpg",
    description: "Un guerrier d'élite qui apparaît lors d'un rituel secret. Sa lame noire tranche tout sur son passage."
  },
  {
    id: "#009",
    name: "Gardien Celte",
    type: "Terre",
    level: "Niveau 4",
    stats: { hp: 400, attack: 140, defence: 120 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/91152256.jpg",
    description: "Un elfe guerrier agile, armé d'une épée. Il se bat avec courage malgré sa petite taille."
  },
  {
    id: "#010",
    name: "Kuriboh",
    type: "Ténèbres",
    level: "Niveau 1",
    stats: { hp: 100, attack: 30, defence: 20 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/40640057.jpg",
    description: "Une petite boule de poils mignonne mais très utile : elle peut protéger son maître des gros dégâts."
  },
  {
    id: "#011",
    name: "Magicienne des Ténèbres",
    type: "Ténèbres",
    level: "Niveau 6",
    stats: { hp: 600, attack: 200, defence: 170 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/38033121.jpg",
    description: "Une jeune magicienne talentueuse, élève du Magicien Sombre. Elle utilise sa magie avec précision."
  },
  {
    id: "#012",
    name: "Elfe Mystique",
    type: "Lumière",
    level: "Niveau 4",
    stats: { hp: 450, attack: 80, defence: 200 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/15025844.jpg",
    description: "Une elfe discrète qui protège ses alliés. Elle n'attaque pas beaucoup mais sa défense est solide."
  }
];
