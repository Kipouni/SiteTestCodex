SPA_READY.then(()=>{
  const form=document.querySelector('#animal-form');
  const dialog=document.querySelector('#editor-dialog');
  const list=document.querySelector('#management-list');
  const message=document.querySelector('#management-message');
  const error=document.querySelector('#editor-error');
  const save=document.querySelector('#save-animal');
  const heroForm=document.querySelector('#hero-form');
  const importDialog=document.querySelector('#import-dialog');
  let draft=null,editSnapshot=null,pendingImport=null,photoBusy=false,dirty=false,editGeneration=0,uploadSequence=0;
  const say=(text,isError=false)=>{message.textContent=text;message.dataset.error=String(isError);};
  const statusName={disponible:'Disponible',adopte:'Adopté',archive:'Archivé'};
  function render(){
    const snapshot=SPA_STORE.snapshot();const active=snapshot.animals.filter(a=>a.status==='disponible');
    const filter=document.querySelector('#status-filter').value;
    const animals=snapshot.animals.filter(a=>filter==='all'||a.status===filter);
    document.querySelector('#management-count').textContent=`${active.length} disponibles · ${snapshot.animals.filter(a=>a.status==='adopte').length} adoptés · ${snapshot.animals.filter(a=>a.status==='archive').length} archivés`;
    list.innerHTML=animals.map(a=>`<article class="managed-card"><div class="portrait">${SPA_PHOTO(a)}</div><div><h3>${SPA_ESC(a.name)}</h3><p>${a.species==='chien'?'Chien':'Chat'} · ${SPA_ESC(a.ageLabel)}</p><span class="status-badge status-${a.status}">${statusName[a.status]}</span></div><label class="check-label"><input type="checkbox" data-feature="${a.id}" ${a.featured&&a.status==='disponible'?'checked':''} ${a.status!=='disponible'||!SPA_STORE.available?'disabled':''}>À l’accueil</label><div class="manage-actions"><button data-edit="${a.id}">Modifier ${SPA_ESC(a.name)}</button>${a.status==='disponible'?`<button data-status="adopte" data-id="${a.id}">Marquer adopté</button><button data-status="archive" data-id="${a.id}">Archiver</button><a href="animal.html?id=${a.id}">Voir la fiche</a>`:`<button data-status="disponible" data-id="${a.id}">Remettre disponible</button>`}</div></article>`).join('')||'<p>Aucune fiche dans cette sélection.</p>';
    heroForm.elements.hero.innerHTML='<option value="">Choix automatique</option>'+active.map(a=>`<option value="${a.id}">${SPA_ESC(a.name)}</option>`).join('');
    heroForm.elements.hero.value=active.some(a=>a.id===snapshot.heroId)?snapshot.heroId:'';
    document.querySelector('#storage-status').textContent=SPA_STORE.available?'Enregistrement local disponible. Pensez à exporter régulièrement.':'Stockage indisponible : consultation possible, enregistrement désactivé.';
    document.querySelector('#add-animal').disabled=!SPA_STORE.available;
    heroForm.querySelector('button').disabled=!SPA_STORE.available;
    list.querySelectorAll('[data-status]').forEach(b=>b.disabled=!SPA_STORE.available);
  }
  function checkFeatured(state){if(state.animals.filter(a=>a.status==='disponible'&&a.featured).length>3)throw Error('Trois fiches sont déjà prioritaires sur l’accueil. Décochez « À l’accueil » sur une autre fiche, puis réessayez.');}
  function showPhoto(){document.querySelector('#editor-photo').innerHTML=draft.image||Number.isInteger(draft.cell)?SPA_PHOTO(draft):'<span>Sa photo</span>';}
  function openEditor(id){
    editGeneration++;editSnapshot=SPA_STORE.snapshot();
    draft=id?structuredClone(editSnapshot.animals.find(a=>a.id===id)):{id:typeof crypto.randomUUID==='function'?crypto.randomUUID():'animal-'+Date.now(),name:'',species:'chien',sex:'male',age:1,size:'Moyen',tag:'',traits:[],intro:'',story:'',home:'',needs:'',dogs:'À évaluer avec l’équipe',cats:'À évaluer avec l’équipe',children:'À discuter selon le foyer',status:'disponible',featured:false,demo:false};
    form.reset();
    for(const field of ['name','species','sex','size','tag','intro','story','home','needs','dogs','cats','children','status'])form.elements[field].value=draft[field];
    form.elements.ageUnit.value=draft.age<1||!Number.isInteger(draft.age)?'mois':'ans';
    form.elements.age.value=form.elements.ageUnit.value==='mois'?Math.round(draft.age*12):draft.age;
    form.elements.featured.checked=draft.featured;
    form.elements.traits.value=draft.traits.join(', ');
    form.elements.photo.required=!draft.image&&!Number.isInteger(draft.cell);
    document.querySelector('#editor-title').textContent=id?'Modifier '+draft.name:'Ajouter un animal';
    error.textContent='';photoBusy=false;dirty=false;save.disabled=!SPA_STORE.available;showPhoto();dialog.showModal();form.elements.name.focus();
  }
  function closeEditor(){if(dirty&&!window.confirm('Fermer sans enregistrer les modifications de cette fiche ?'))return;editGeneration++;dialog.close();}
  document.querySelector('#add-animal').addEventListener('click',()=>openEditor());
  document.querySelector('#close-editor').addEventListener('click',closeEditor);
  document.querySelector('#cancel-editor').addEventListener('click',closeEditor);
  dialog.addEventListener('cancel',event=>{event.preventDefault();closeEditor();});
  form.addEventListener('input',()=>{dirty=true;});
  form.elements.photo.addEventListener('change',async()=>{
    const file=form.elements.photo.files[0];if(!file)return;
    const generation=editGeneration;const upload=++uploadSequence;
    photoBusy=true;save.disabled=true;error.textContent='';
    let url;
    try{
      if(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>8*1024*1024)throw Error('Choisissez une photo JPG, PNG ou WebP de moins de 8 Mo.');
      url=URL.createObjectURL(file);const img=new Image();img.src=url;await img.decode();
      const ratio=Math.min(1,1400/Math.max(img.naturalWidth,img.naturalHeight));
      const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(img.naturalWidth*ratio));canvas.height=Math.max(1,Math.round(img.naturalHeight*ratio));
      const ctx=canvas.getContext('2d');ctx.fillStyle='#ffffff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(img,0,0,canvas.width,canvas.height);
      if(generation!==editGeneration||upload!==uploadSequence)return;
      draft.image=canvas.toDataURL('image/jpeg',.85);delete draft.cell;draft.demo=false;dirty=true;form.elements.photo.required=false;showPhoto();
    }catch(e){if(generation===editGeneration&&upload===uploadSequence){error.textContent=e.message;form.elements.photo.value='';}}
    finally{if(url)URL.revokeObjectURL(url);if(generation===editGeneration&&upload===uploadSequence){photoBusy=false;save.disabled=!SPA_STORE.available;}}
  });
  form.addEventListener('submit',async event=>{
    event.preventDefault();if(photoBusy)return;save.disabled=true;error.textContent='';
    try{
      const value={...draft};
      for(const field of ['name','species','sex','size','tag','intro','story','home','needs','dogs','cats','children','status'])value[field]=form.elements[field].value.trim();
      value.age=Number(form.elements.age.value)/(form.elements.ageUnit.value==='mois'?12:1);
      value.traits=form.elements.traits.value.split(',').map(t=>t.trim()).filter(Boolean);
      value.featured=form.elements.featured.checked;
      const next=structuredClone(editSnapshot);const index=next.animals.findIndex(a=>a.id===value.id);
      if(index<0)next.animals.push(value);else next.animals[index]=value;
      checkFeatured(next);await SPA_STORE.save(next);dirty=false;dialog.close();say('La fiche de '+value.name+' est enregistrée. Le catalogue et l’accueil utilisent maintenant ces informations.');
    }catch(e){error.textContent=e.message;}finally{save.disabled=!SPA_STORE.available;}
  });
  list.addEventListener('click',async event=>{
    const edit=event.target.closest('[data-edit]');if(edit){openEditor(edit.dataset.edit);return;}
    const button=event.target.closest('[data-status]');if(!button)return;
    button.disabled=true;
    try{const state=SPA_STORE.snapshot();const a=state.animals.find(a=>a.id===button.dataset.id);a.status=button.dataset.status;if(a.status!=='disponible')a.featured=false;checkFeatured(state);await SPA_STORE.save(state);say(a.name+' : '+statusName[a.status]+'.');}catch(e){say(e.message,true);render();}
  });
  list.addEventListener('change',async event=>{
    const box=event.target.closest('[data-feature]');if(!box)return;
    try{const state=SPA_STORE.snapshot();state.animals.find(a=>a.id===box.dataset.feature).featured=box.checked;checkFeatured(state);await SPA_STORE.save(state);say('La sélection de l’accueil est mise à jour.');}catch(e){say(e.message,true);render();}
  });
  heroForm.addEventListener('submit',async event=>{event.preventDefault();try{const state=SPA_STORE.snapshot();state.heroId=heroForm.elements.hero.value;await SPA_STORE.save(state);say('La grande photo de l’accueil est mise à jour.');}catch(e){say(e.message,true);}});
  document.querySelector('#status-filter').addEventListener('change',render);
  document.querySelector('#export-data').addEventListener('click',()=>{
    const blob=new Blob([JSON.stringify(SPA_STORE.snapshot(),null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='spa-animaux-'+new Date().toISOString().slice(0,10)+'.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);say('Sauvegarde préparée : conservez le fichier JSON téléchargé.');
  });
  document.querySelector('#import-data').addEventListener('change',async event=>{
    const file=event.target.files[0];if(!file)return;
    try{if(file.size>40*1024*1024)throw Error('Sauvegarde trop volumineuse : 40 Mo maximum.');pendingImport=SPA_STORE.validate(JSON.parse(await file.text()));pendingImport.revision=SPA_STORE.snapshot().revision;checkFeatured(pendingImport);document.querySelector('#import-summary').textContent=`Cette sauvegarde contient ${pendingImport.animals.length} fiche(s).`;document.querySelector('#import-error').textContent='';importDialog.showModal();}catch(e){say('Import refusé : '+e.message,true);}finally{event.target.value='';}
  });
  document.querySelector('#cancel-import').addEventListener('click',()=>importDialog.close());
  document.querySelector('#confirm-import').addEventListener('click',async event=>{
    event.target.disabled=true;
    try{await SPA_STORE.save(pendingImport);importDialog.close();say('Sauvegarde importée. Le catalogue et l’accueil sont à jour.');}catch(e){document.querySelector('#import-error').textContent=e.message;}finally{event.target.disabled=false;}
  });
  document.querySelector('#file-notice').hidden=location.protocol!=='file:';
  document.addEventListener('catalogchange',render);render();
});
