import { creatures } from "./data.js";
// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.


// -------------------------------------------------------------
// 1. AFFICHAGE
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
// -------------------------------------------------------------
// this is affichaage using template
// function affich(){

// const container=document.querySelector('#grid');
// const template=document.querySelector('#cards-template');

//     creatures.forEach((creature) => {
//         const clone=template.content.cloneNode(true);
//         const imgbox=clone.querySelector('.card-img')
//         const img=document.createElement('img')

//         img.src=creature.image
//         img.alt=creature.name
//         img.className='h-full w-full rounded-xl object-cover'

//         imgbox.querySelector('svg').replaceWith(img)
//         imgbox.querySelector('span').textContent=creature.id

//         clone.querySelector('.cre-name').textContent=creature.name;
//         clone.querySelector('.cre-type').textContent=creature.type;
//         clone.querySelector('.type-img').innerHTML=creature.icon;
//         clone.querySelector('.cre-niv').textContent=creature.level

//         container.appendChild(clone);
//         // console.log(clone)
//         // console.log(creatures);
// console.log(template);
// })};
// affich();


function affich() {
  const container = document.querySelector('#grid');

  container.innerHTML = creatures.map((creature) => `
    <article card-id=""${creature.id} class="cursor-pointer flex flex-col gap-3 rounded-card bg-ground border-4 border-brand-light p-3 pb-4 transition duration-300 hover:-translate-y-2 shadow-[0_0_30px_rgba(250,204,21,0.6)] hover:shadow-[0_0_45px_rgba(250,204,21,0.9)]">
      <div class="card-img relative flex h-64 items-center justify-center rounded-xl bg-brand-light">
        <img class="h-full w-full rounded-xl object-cover" src="${creature.image}" alt="${creature.name}" loading="lazy">
        <span class="absolute left-3 top-2 font-mono font-bold text-sm text-white">${creature.id}</span>
      </div>

      <div class="flex items-center flex-col gap-2 text-brand-dark">
        <div class="type-img flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-light shadow-[0_0_30px_rgba(250,204,21,0.6)] [&>svg]:h-6 [&>svg]:w-6" aria-hidden="true">
          ${creature.icon}
        </div>
        <h3 class="cre-name font-display text-sm font-bold">${creature.name}</h3>
        <span class="cre-type rounded-full bg-brand-light px-4 py-2 text-sm font-bold text-ink">${creature.type}</span>
      </div>

      <p class="cre-niv text-sm text-muted">${creature.level}</p>
      <button type="button" data-id="${creature.id}" class="btn-add btn-outline bg-brand text-line border-solid border-brand-light mt-auto shadow-[0_0_25px_rgba(250,204,21,0.6)]">Ajouter à l'équipe</button>
    </article>
  `).join('');

  document.querySelector('#creature-count').textContent = creatures.length;
}

affich();


// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------
function detail(){
    const detail=document.querySelector('#detail')
creatures.forEach((creature)=>{
    detail.innerHTML="";

     
     
    const card_detail=`   
          <div class="flex items-center justify-between">
            <span class="font-mono text-sm text-muted">${creature.id} · Détail</span>
            <button type="button" aria-label="Fermer le détail" class="btn-outline w-11 px-0">✕</button>
          </div>
          <div class="flex h-48 items-center justify-center rounded-2xl bg-brand-light">
            <img src="${creature.image}" alt="${creature.name}">
          </div>
          <div class="flex flex-wrap justify-between">
            <h2 class="font-display text-3xl font-extrabold text-brand">${creature.name}</h2>
            <span class="rounded-full bg-brand-light px-3 py-1 text-sm font-bold">${creature.type}</span>
          </div>
          <p class="text-cream">${creature.description}</p>
          <div class="flex flex-col gap-2 text-sm text-cream">
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold">HP</span><span class="h-3 rounded-full bg-ground"><span class="block h-3 w-[30%] rounded-full bg-brand"></span></span><span class="text-right font-mono">${creature.stats[0]}</span></div>
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold">Attaque</span><span class="h-3 rounded-full bg-ground"><span class="block h-3 w-[33%] rounded-full bg-brand"></span></span><span class="text-right font-mono">${creature.stats[1]}</span></div>
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold">Défense</span><span class="h-3 rounded-full bg-ground"><span class="block h-3 w-[43%] rounded-full bg-brand"></span></span><span class="text-right font-mono">${creature.stats[2]}</span></div>
          </div>
          <button type="button" class="btn-primary text-line border-2 border-brand-light"style="box-shadow: 0 0 30px rgba(250, 204, 21, 0.6);">Ajouter à l'équipe</button>
`

    detail.innerHTML+= card_detail

})}
detail()
// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -------------------------------------------------------------
