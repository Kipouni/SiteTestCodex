SPA_READY.then(() => {
let allAnimals = window.SPA_ANIMALS;
const form = document.querySelector('#catalog-filters');
const grid = document.querySelector('#catalog-grid');
const count = document.querySelector('#result-count');
const empty = document.querySelector('#empty-results');
const search = form.elements.q;
let species = 'all';
let favoritesOnly = false;
const speciesButtons = [...document.querySelectorAll('[data-species]')];
const savedButton = document.querySelector('#saved-filter');
const heart = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg>';
function readLocation() {
  const params = new URLSearchParams(location.search);
  species = ['chien','chat'].includes(params.get('espece')) ? params.get('espece') : 'all';
  search.value = params.get('q') || '';
  ['age','sexe','tri'].forEach(key => { const field = form.elements[key]; const value = params.get(key); field.value = [...field.options].some(option => option.value === value) ? value : field.options[0].value; });
  favoritesOnly = params.get('favoris') === '1';
}
function card(animal) {
  const saved = SPA_SAVED.has(animal.id);
  return `<article class="companion-card"><div class="companion-visual"><a class="portrait" href="animal.html?id=${animal.id}" aria-label="Découvrir ${SPA_ESC(animal.name)}">${SPA_PHOTO(animal)}</a>${animal.age >= 8 ? '<span class="portrait-badge">Les belles années continuent</span>' : ''}<button class="save-animal" data-save="${animal.id}" aria-pressed="${saved}" aria-label="${saved ? 'Retirer' : 'Ajouter'} ${SPA_ESC(animal.name)} ${saved ? 'des' : 'aux'} coups de cœur">${heart}</button></div><div class="companion-heading"><h3><a href="animal.html?id=${animal.id}">${SPA_ESC(animal.name)}</a></h3><span>${animal.sex === 'male' ? 'Mâle' : 'Femelle'} · ${SPA_ESC(animal.ageLabel)}</span></div><p class="companion-tag">${SPA_ESC(animal.tag)}</p><div class="card-bottom"><div class="trait-list">${animal.traits.map(t=>`<span>${SPA_ESC(t)}</span>`).join('')}</div><a class="profile-arrow" href="animal.html?id=${animal.id}" aria-label="Lire l’histoire de ${SPA_ESC(animal.name)}">→</a></div></article>`;
}
function render(updateURL = true) {
  allAnimals = window.SPA_ANIMALS;
  speciesButtons.forEach(button=>button.querySelector('span').textContent=String(allAnimals.filter(a=>button.dataset.species==='all'||a.species===button.dataset.species).length).padStart(2,'0'));
  const senior=allAnimals.find(a=>a.age>=8);
  const feature=document.querySelector('.senior-feature');
  feature.hidden=!senior;
  if(senior){feature.href='animal.html?id='+senior.id;feature.querySelector('.portrait').innerHTML=SPA_PHOTO(senior);feature.querySelector('.text-link').textContent='Rencontrer '+senior.name+' →';}
  const query = search.value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const age = form.elements.age.value;
  const sex = form.elements.sexe.value;
  let animals = allAnimals.filter(a => (species === 'all' || a.species === species) && (!sex || a.sex === sex) && (!favoritesOnly || SPA_SAVED.has(a.id)) && (!age || (age === 'jeune' && a.age < 2) || (age === 'adulte' && a.age >= 2 && a.age < 8) || (age === 'senior' && a.age >= 8)) && `${SPA_ESC(a.name)} ${SPA_ESC(a.tag)} ${a.traits.join(' ')}`.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(query));
  if (form.elements.tri.value === 'nom') animals.sort((a,b)=>a.name.localeCompare(b.name,'fr'));
  if (form.elements.tri.value === 'age') animals.sort((a,b)=>a.age-b.age);
  speciesButtons.forEach(button=>{ const active = button.dataset.species === species; button.setAttribute('aria-pressed',String(active)); });
  savedButton.setAttribute('aria-pressed', String(favoritesOnly));
  document.querySelector('#saved-count').textContent = allAnimals.filter(a=>SPA_SAVED.has(a.id)).length;
  count.textContent = `${animals.length} ${animals.length === 1 ? 'compagnon à découvrir' : 'compagnons à découvrir'}`;
  grid.innerHTML = animals.map(card).join('');
  empty.hidden = animals.length > 0;
  if (animals.length > 0 && animals.length % 3 === 1) grid.insertAdjacentHTML('beforeend', '<aside class="catalog-note"><span class="eyebrow">UNE RENCONTRE, PAS UNE CASE À COCHER</span><h3>Le bon compagnon<br>vous surprendra <em>peut-être.</em></h3><p>Un caractère, un rythme de vie, une complicité. L’équipe du refuge vous aide à trouver la rencontre qui vous ressemble.</p><a class="text-link" href="#parcours">Comment se passe une adoption ? →</a></aside>');
  if (updateURL) {
    const params = new URLSearchParams();
    if (species !== 'all') params.set('espece',species);
    if (search.value) params.set('q',search.value);
    ['age','sexe','tri'].forEach(key=>{if(form.elements[key].value) params.set(key,form.elements[key].value);});
    if(favoritesOnly) params.set('favoris','1');
    try { history.replaceState(null,'',`${location.pathname}${params.size ? '?'+params : ''}${location.hash}`); } catch {}
  }
}
speciesButtons.forEach(button=>button.addEventListener('click',()=>{species=button.dataset.species;render();}));
savedButton.addEventListener('click',()=>{favoritesOnly=!favoritesOnly;render();});
form.addEventListener('submit',event=>event.preventDefault());
form.addEventListener('input',()=>render());
document.querySelectorAll('[data-reset]').forEach(button=>button.addEventListener('click',()=>{form.reset();species='all';favoritesOnly=false;render();search.focus();}));
grid.addEventListener('click',event=>{
  const button=event.target.closest('[data-save]');if(!button)return;
  const id=button.dataset.save;const oldButtons=[...grid.querySelectorAll('[data-save]')];const index=oldButtons.indexOf(button);
  SPA_SAVED.toggle(id);render();
  const next=grid.querySelector(`[data-save="${id}"]`) || grid.querySelectorAll('[data-save]')[Math.min(index,grid.querySelectorAll('[data-save]').length-1)] || savedButton;
  next.focus({preventScroll:true});
});
window.addEventListener('popstate',()=>{readLocation();render(false);});
readLocation();render(false);
document.addEventListener('catalogchange',()=>render(false));

});
