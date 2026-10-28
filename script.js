SPA_READY.then(()=>{
  let current='all';
  function renderHome(){
    const selected=SPA_STORE.featured();
    const grid=document.querySelector('.animal-grid');
    grid.innerHTML=selected.map(a=>`<article class="animal-card" data-type="${a.species}"><a class="animal-open" href="animal.html?id=${a.id}" aria-label="Découvrir ${SPA_ESC(a.name)}"><div class="animal-photo home-portrait">${SPA_PHOTO(a)}<span class="animal-tag">${SPA_ESC(a.tag)}</span><span class="card-arrow" aria-hidden="true">→</span></div><div class="animal-info"><div><h3>${SPA_ESC(a.name)}</h3><span>${a.species==='chien'?'Chien':'Chat'} · ${SPA_ESC(a.ageLabel)} · ${a.sex==='male'?'Mâle':'Femelle'}</span></div><span class="personality">${SPA_ESC(a.traits[0]||'À découvrir')}</span></div></a></article>`).join('');
    if(!selected.length)grid.innerHTML='<p>Les prochains portraits seront bientôt disponibles.</p>';
    document.querySelector('[data-filter="all"] span').textContent=String(selected.length).padStart(2,'0');
    document.querySelectorAll('.animal-card').forEach(card=>card.hidden=current!=='all'&&card.dataset.type!==current);
    const hero=SPA_STORE.hero();const photo=document.querySelector('.hero-image');
    photo.querySelector('.hero-animal-link')?.remove();photo.querySelector('.hero-photo-layer')?.remove();
    photo.querySelector(':scope > img')?.remove();
    if(hero){
      photo.insertAdjacentHTML('afterbegin',`<div class="hero-photo-layer">${SPA_PHOTO(hero)}</div><a class="hero-animal-link" href="animal.html?id=${hero.id}" aria-label="Rencontrer ${SPA_ESC(hero.name)}"></a>`);
      photo.querySelector('.photo-caption>span:first-child').innerHTML=`${SPA_ESC(hero.name)},<br><em>une histoire à partager.</em>`;
      photo.querySelector('.photo-credit').textContent=hero.demo?'Photographie générée · Maquette':'Photo ajoutée à la maquette';
    }else{
      photo.querySelector('.photo-caption>span:first-child').innerHTML='De nouvelles histoires<br><em>à venir.</em>';
      photo.querySelector('.photo-credit').textContent='Maquette de démonstration';
    }
  }
  document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
    current=button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});renderHome();
  }));
  renderHome();document.addEventListener('catalogchange',renderHome);
});
