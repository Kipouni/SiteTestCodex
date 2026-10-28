/* Base locale de la maquette. Aucune authentification ni publication serveur. */
(() => {
  const seed = SPA_ANIMALS.map((animal,index)=>({...animal,status:'disponible',featured:index<3,demo:true}));
  let state = {version:1,revision:0,animals:seed,heroId:'milo'};
  let db = null;
  let available = false;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  window.SPA_ESC = esc;
  const text = (value,max=5000) => {if(typeof value !== 'string' || value.length>max) throw Error('Un texte est absent ou trop long.');return value.trim();};
  function normalize(raw) {
    if(!raw || raw.version!==1 || !Array.isArray(raw.animals) || raw.animals.length>200) throw Error('Sauvegarde incompatible : format attendu SPA version 1, 200 fiches maximum.');
    const ids=new Set();
    const animals=raw.animals.map(a=>{
      if(!a || typeof a.id!=='string' || !/^[a-z0-9-]{1,80}$/.test(a.id) || ids.has(a.id)) throw Error('Identifiant de fiche invalide ou dupliqué.');
      ids.add(a.id);
      if(!['chien','chat'].includes(a.species)||!['male','femelle'].includes(a.sex)||!['disponible','adopte','archive'].includes(a.status))throw Error('Espèce, sexe ou statut invalide.');
      if(typeof a.age!=='number'||!Number.isFinite(a.age)||a.age<0||a.age>40)throw Error('L’âge doit être compris entre 0 et 40 ans.');
      const item={id:a.id,name:text(a.name,60),species:a.species,sex:a.sex,age:a.age,size:text(a.size,40),tag:text(a.tag,100),status:a.status,featured:a.featured===true,demo:a.demo===true};
      if(!item.name)throw Error('Le prénom est obligatoire.');
      item.ageLabel=a.age<1?`${Math.round(a.age*12)} mois`:`${Number(a.age.toFixed(1)).toLocaleString('fr')} ${a.age===1?'an':'ans'}`;
      for(const key of ['intro','story','home','needs','dogs','cats','children'])item[key]=text(a[key]??'');
      if(!Array.isArray(a.traits)||a.traits.length>5)throw Error('Cinq traits de caractère maximum.');
      item.traits=a.traits.map(t=>text(t,40)).filter(Boolean);
      if(a.image){
        if(typeof a.image!=='string'||a.image.length>4500000||!(a.image==='assets/hero-dog.png'||/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/]+=*$/.test(a.image))) throw Error('Photo non prise en charge : utilisez un fichier JPG, PNG ou WebP.');
        item.image=a.image;
      } else if(Number.isInteger(a.cell)&&a.cell>=0&&a.cell<=5)item.cell=a.cell;
      else throw Error('Chaque fiche doit comporter une photo.');
      return item;
    });
    return {version:1,revision:Number.isSafeInteger(raw.revision)?raw.revision:0,animals,heroId:typeof raw.heroId==='string'&&ids.has(raw.heroId)?raw.heroId:''};
  }
  function expose(){
    window.SPA_ANIMALS=state.animals.filter(a=>a.status==='disponible');
    window.SPA_PHOTO=a=>a.image?`<img src="${esc(a.image)}" alt="Portrait de ${esc(a.name)}" loading="lazy">`:`<img class="sheet-photo" style="--col:${a.cell%3};--row:${Math.floor(a.cell/3)}" src="assets/animal-portraits.png" alt="Portrait d’illustration de ${esc(a.name)}" loading="lazy">`;
  }
  const request = req=>new Promise((resolve,reject)=>{req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});
  async function reload(){if(!db)return;const record=await request(db.transaction('state').objectStore('state').get('catalog'));if(record){state=normalize(record);expose();document.dispatchEvent(new Event('catalogchange'));}}
  const channel=typeof BroadcastChannel==='function'?new BroadcastChannel('spa-catalog'):null;
  channel?.addEventListener('message',()=>reload().catch(()=>{}));
  window.addEventListener('focus',()=>reload().catch(()=>{}));
  window.SPA_STORE={
    get available(){return available;},
    snapshot:()=>structuredClone(state),
    validate:normalize,
    hero:()=>SPA_ANIMALS.find(a=>a.id===state.heroId)||SPA_ANIMALS.find(a=>a.featured)||SPA_ANIMALS[0],
    featured:()=>{const marked=SPA_ANIMALS.filter(a=>a.featured);return [...marked,...SPA_ANIMALS.filter(a=>!a.featured)].slice(0,3);},
    async save(value){
      if(!available)throw Error('Le stockage local est indisponible. Ouvrez le site via un serveur local et autorisez le stockage du navigateur.');
      const next=normalize(value);
      await new Promise((resolve,reject)=>{
        const tx=db.transaction('state','readwrite');const os=tx.objectStore('state');const get=os.get('catalog');let failure;
        get.onsuccess=()=>{
          const revision=get.result?.revision||0;
          if(revision!==value.revision){failure=Error('Une autre fenêtre a modifié le catalogue. Rechargez la gestion avant de recommencer.');tx.abort();return;}
          next.revision=revision+1;os.put(next,'catalog');
        };
        tx.oncomplete=resolve;
        tx.onabort=()=>reject(failure||Error('Enregistrement impossible : stockage plein ou non autorisé. Votre modification n’a pas été enregistrée.'));
        tx.onerror=()=>{};
      });
      state=next;expose();document.dispatchEvent(new Event('catalogchange'));channel?.postMessage('changed');
    }
  };
  window.SPA_READY=(async()=>{
    try{
      const open=indexedDB.open('spa-oyonnax-maquette',1);
      open.onupgradeneeded=()=>open.result.createObjectStore('state');
      db=await request(open);
      const stored=await request(db.transaction('state').objectStore('state').get('catalog'));
      if(stored)state=normalize(stored);
      available=true;
    }catch(error){console.warn('Gestion locale indisponible :',error.message);}
    expose();
  })();
})();
