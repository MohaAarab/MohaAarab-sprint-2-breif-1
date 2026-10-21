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

// const water=<svg width="35px" height="35px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#d4a017"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Environment / Water_Drop"> <path id="Vector" d="M16.0001 13.3848C16.0001 14.6088 15.526 15.7828 14.6821 16.6483C14.203 17.1397 13.6269 17.5091 13 17.7364M19 13.6923C19 7.11538 12 2 12 2C12 2 5 7.11538 5 13.6923C5 15.6304 5.7375 17.4893 7.05025 18.8598C8.36301 20.2302 10.1436 20.9994 12.0001 20.9994C13.8566 20.9994 15.637 20.2298 16.9497 18.8594C18.2625 17.4889 19 15.6304 19 13.6923Z" stroke="#d4a017" stroke-width="1.032" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>

const darkness='<svg fill="#d4a017" width="35px" height="35px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" stroke="#d4a017" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3,11.985A9.811,9.811,0,0,0,12.569,22a9.528,9.528,0,0,0,8.309-5.059,1,1,0,0,0-.947-1.477l-.11.008c-.131.01-.263.02-.4.02a7.811,7.811,0,0,1-7.569-8.015,8.378,8.378,0,0,1,1.016-4A1,1,0,0,0,11.923,2,9.855,9.855,0,0,0,3,11.985Zm7.343-7.652a10.382,10.382,0,0,0-.488,3.144A9.89,9.89,0,0,0,18.137,17.4,7.4,7.4,0,0,1,12.569,20,7.811,7.811,0,0,1,5,11.985,7.992,7.992,0,0,1,10.343,4.333Z"></path></g></svg>'

const light='<svg fill="#d4a017" width="35px" height="35px" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#d4a017" stroke-width="0.00032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>light</title> <path d="M11.875 6v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.813 0.375-1.219 1.156-1.219s1.156 0.406 1.156 1.219zM14.219 9.25l1.438-2.031c0.469-0.625 1.063-0.75 1.656-0.313s0.656 1 0.188 1.688l-1.438 2c-0.469 0.688-1.031 0.75-1.656 0.313-0.594-0.438-0.656-0.969-0.188-1.656zM5.781 7.25l1.469 2c0.469 0.688 0.406 1.219-0.219 1.656-0.594 0.469-1.156 0.375-1.625-0.313l-1.469-2c-0.469-0.688-0.406-1.219 0.219-1.656 0.594-0.469 1.156-0.375 1.625 0.313zM10.719 11.125c2.688 0 4.875 2.188 4.875 4.875 0 2.656-2.188 4.813-4.875 4.813s-4.875-2.156-4.875-4.813c0-2.688 2.188-4.875 4.875-4.875zM1.594 11.813l2.375 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.75 0.969-1.563 0.719l-2.313-0.75c-0.781-0.25-1.063-0.75-0.844-1.5 0.25-0.719 0.75-0.938 1.531-0.688zM17.5 12.563l2.344-0.75c0.813-0.25 1.313-0.031 1.531 0.688 0.25 0.75-0.031 1.25-0.844 1.469l-2.313 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.031-1.219 0.813-1.469zM10.719 18.688c1.5 0 2.719-1.219 2.719-2.688 0-1.5-1.219-2.719-2.719-2.719s-2.688 1.219-2.688 2.719c0 1.469 1.188 2.688 2.688 2.688zM0.906 17.969l2.344-0.75c0.781-0.25 1.313-0.063 1.531 0.688 0.25 0.75-0.031 1.219-0.813 1.469l-2.375 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.063-1.219 0.844-1.469zM18.219 17.219l2.344 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.719 0.969-1.531 0.719l-2.344-0.781c-0.813-0.25-1.031-0.719-0.813-1.469 0.25-0.75 0.75-0.938 1.531-0.688zM3.938 23.344l1.469-1.969c0.469-0.688 1.031-0.781 1.625-0.313 0.625 0.438 0.688 0.969 0.219 1.656l-1.469 1.969c-0.469 0.688-1.031 0.813-1.656 0.375-0.594-0.438-0.656-1.031-0.188-1.719zM16.063 21.375l1.438 1.969c0.469 0.688 0.406 1.281-0.188 1.719s-1.188 0.281-1.656-0.344l-1.438-2c-0.469-0.688-0.406-1.219 0.188-1.656 0.625-0.438 1.188-0.375 1.656 0.313zM11.875 23.469v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.844 0.375-1.25 1.156-1.25s1.156 0.406 1.156 1.25z"></path> </g></svg>'

const devin='<svg fill="#d4a017" height="35px" width="35px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 59.32 59.32" xml:space="preserve" stroke="#d4a017" stroke-width="0.00059318"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M45.533,36.085c-0.423-2.783-2.271-5.156-4.713-6.426c2.442-1.27,4.29-3.643,4.713-6.427l0.026-0.178 c0.459-3.32-0.651-6.703-3.047-9.283L29.659,0L16.805,13.773c-2.395,2.578-3.504,5.961-3.045,9.283l0.026,0.177 c0.423,2.783,2.271,5.156,4.713,6.426c-2.442,1.27-4.291,3.643-4.713,6.426l-0.026,0.179c-0.459,3.32,0.651,6.703,3.047,9.283 L29.66,59.318l12.854-13.773c2.395-2.578,3.504-5.961,3.045-9.283L45.533,36.085z M34.653,29.56l0.002,0.099l-0.002,0.099 c-0.047,2.367-1.772,4.347-4.014,4.802c0.004,0.034,0.02,0.064,0.02,0.099c0,1.103,0.897,2,2,2s2-0.897,2-2c0-0.552,0.448-1,1-1 s1,0.448,1,1c0,2.206-1.794,4-4,4c-1.2,0-2.266-0.542-3-1.382c-0.734,0.84-1.8,1.382-3,1.382c-2.206,0-4-1.794-4-4 c0-0.552,0.448-1,1-1s1,0.448,1,1c0,1.103,0.897,2,2,2s2-0.897,2-2c0-0.035,0.016-0.065,0.02-0.099 c-2.242-0.455-3.967-2.434-4.014-4.802l-0.002-0.099l0.002-0.099c0.047-2.367,1.772-4.347,4.014-4.802 c-0.004-0.034-0.02-0.064-0.02-0.099c0-1.103-0.897-2-2-2s-2,0.897-2,2c0,0.552-0.448,1-1,1s-1-0.448-1-1c0-2.206,1.794-4,4-4 c1.2,0,2.266,0.542,3,1.382c0.734-0.84,1.8-1.382,3-1.382c2.206,0,4,1.794,4,4c0,0.552-0.448,1-1,1s-1-0.448-1-1 c0-1.103-0.897-2-2-2s-2,0.897-2,2c0,0.035-0.016,0.065-0.02,0.099C32.882,25.213,34.606,27.193,34.653,29.56z"></path> </g> </g></svg>'

const earth='<svg width="35px" height="35px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#d4a017" stroke="#d4a017" stroke-width="0.00512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#d4a017" d="M166.83 19.52c-28.898.023-61.718 16.366-86.002 55.16 70.773-24.38 69.905 19.077 130.02 36.95 12.785 18.24 21.513 41.086 27.45 72.214 1.056 9.14 1.425 18.935 1.495 29.078.16 23.53-1.74 48.726-3.072 69.72v.008c-.405 6.982 2.976 17.98 9.282 29.364 2.745 4.956 6.048 9.978 9.584 14.9 2.945-59.286 1.044-113.128 11.27-161.432 7.12-19.412 16.723-35.71 28.833-49.156 67.6-14.804 59.14-58.506 140.966-33.137-32.607-39-72.186-55.092-104.357-54.516-43.914.786-74.014 32.628-53.743 79.654-11.398 13.628-20.738 29.502-27.87 47.6-5.473-19.157-12.575-35.512-21.55-49.703 14.37-51.287-19.7-86.736-62.307-86.704zm35.234 169.918l-75.488 1.767-69.416 94.99 72.125 67.22 89.992-8.677-89.04 36.268-57.38-54.893 37.702 84.155 110.41 28.816-99.382-4.197 5.566 12.425L294.17 494.85 422 423.97v-.01l-31.676-45.116-94.816 42.367 99.135-72.116 28.097 41.947 1.78-79.19-66.54-78.248-55.644-12.608-24.406 36.445 6.95 26.154-9.353 14.8c-.525 15.73-1.216 31.995-2.38 48.768l23.2 32.524-36.1 41.71 15.515 31.862-37.116-35.465 33.95-39.223-11.094-15.55-4.88-5.268c-10.016-10.814-19.717-23.594-26.968-36.682-4.9-8.843-8.81-17.798-10.6-26.716l-18.118-36.536L216.27 217.8l.554-.048-14.76-28.315z"></path></g></svg>'

export const creatures = [
  {
    id: "#001",
    name: "Dragon Blanc aux Yeux Bleus",
    type: "Lumière",
    icon: light,
    level: "Niveau 8",
    stats: { hp: 800, attack: 300, defence: 250 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/89631139.jpg",
    description: "Un dragon légendaire d'une puissance incroyable, très rare et très redouté de tous ses adversaires."
  },
  {
    id: "#002",
    name: "Magicien Sombre",
    type: "Ténèbres",
    icon: darkness,
    level: "Niveau 7",
    stats: { hp: 700, attack: 250, defence: 210 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/46986414.jpg",
    description: "Le magicien le plus puissant en matière d'attaque et de défense. Il maîtrise de nombreux sorts."
  },
  {
    id: "#003",
    name: "Dragon Noir aux Yeux Rouges",
    type: "Ténèbres",
    icon: darkness,
    level: "Niveau 7",
    stats: { hp: 650, attack: 240, defence: 200 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/74677422.jpg",
    description: "Un dragon noir au regard rouge perçant. Sa fureur est telle que peu osent l'affronter."
  },
  {
    id: "#004",
    name: "Exodia le Interdit",
    type: "Ténèbres",
    icon: darkness,
    level: "Niveau 3",
    stats: { hp: 999, attack: 100, defence: 100 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/33396948.jpg",
    description: "Une créature scellée en cinq morceaux. Celui qui les réunit tous remporte le duel immédiatement."
  },
  {
    id: "#005",
    name: "Crâne Invoqué",
    type: "Ténèbres",
    icon: darkness,
    level: "Niveau 6",
    stats: { hp: 600, attack: 250, defence: 120 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/70781052.jpg",
    description: "Un démon redoutable qui frappe ses ennemis avec des éclairs. Il est fort en attaque mais fragile en défense."
  },
  {
    id: "#006",
    name: "Slifer le Dragon du Ciel",
    type: "Divin",
    icon: darkness,
    level: "Niveau 10",
    stats: { hp: 999, attack: 400, defence: 400 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/10000020.jpg",
    description: "Un dieu égyptien en forme de dragon rouge. Sa force grandit avec le nombre de cartes en main."
  },
  {
    id: "#007",
    name: "Obélisque le Tourmenteur",
    type: "Divin",
    icon:devin,
    level: "Niveau 10",
    stats: { hp: 999, attack: 400, defence: 400 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/10000000.jpg",
    description: "Un géant divin d'une force colossale. Un seul de ses coups peut détruire tout le terrain adverse."
  },
  {
    id: "#008",
    name: "Soldat Lustre Noir",
    type: "Terre",
    icon: earth,
    level: "Niveau 8",
    stats: { hp: 800, attack: 300, defence: 250 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/5405694.jpg",
    description: "Un guerrier d'élite qui apparaît lors d'un rituel secret. Sa lame noire tranche tout sur son passage."
  },
  {
    id: "#009",
    name: "Gardien Celte",
    type: "Terre",
    icon: earth,
    level: "Niveau 4",
    stats: { hp: 400, attack: 140, defence: 120 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/91152256.jpg",
    description: "Un elfe guerrier agile, armé d'une épée. Il se bat avec courage malgré sa petite taille."
  },
  {
    id: "#010",
    name: "Kuriboh",
    type: "Ténèbres",
    icon: darkness,
    level: "Niveau 1",
    stats: { hp: 100, attack: 30, defence: 20 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/40640057.jpg",
    description: "Une petite boule de poils mignonne mais très utile : elle peut protéger son maître des gros dégâts."
  },
  {
    id: "#011",
    name: "Magicienne des Ténèbres",
    type: "Ténèbres",
    icon: darkness,
    level: "Niveau 6",
    stats: { hp: 600, attack: 200, defence: 170 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/38033121.jpg",
    description: "Une jeune magicienne talentueuse, élève du Magicien Sombre. Elle utilise sa magie avec précision."
  },
  {
    id: "#012",
    name: "Elfe Mystique",
    type: "Lumière",
    icon: light,
    level: "Niveau 4",
    stats: { hp: 450, attack: 80, defence: 200 },
    image: "https://images.ygoprodeck.com/images/cards_cropped/15025844.jpg",
    description: "Une elfe discrète qui protège ses alliés. Elle n'attaque pas beaucoup mais sa défense est solide."
  }
];
 