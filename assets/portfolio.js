/* MP Services: high-resolution per-project comparisons.
   Never display the old severely compressed atlas. Each pair loads independently.
   When images have not yet been uploaded, retain the existing Unsplash inspiration gallery. */
(()=>{'use strict';
const cards=[...document.querySelectorAll('[data-before-after]')];
if(!cards.length)return;
const loadImage=url=>new Promise((resolve,reject)=>{
 const image=new Image();
 image.onload=()=>image.naturalWidth>=700?resolve(image):reject(new Error('Image too small'));
 image.onerror=reject;
 image.src=url;
});
const applyCard=async card=>{
 const type=card.dataset.type;
 if(!/^(gyproc|peinture|parquet|carrelage|renovation)$/.test(type))return false;
 const beforeUrl='assets/'+type+'-avant.webp';
 const afterUrl='assets/'+type+'-apres.webp';
 try{
  await Promise.all([loadImage(beforeUrl),loadImage(afterUrl)]);
  const before=card.querySelector('.ba-before');
  const after=card.querySelector('.ba-after');
  const input=card.querySelector('.ba-range');
  const divider=card.querySelector('.ba-divider');
  if(!before||!after||!input||!divider)return false;
  before.style.backgroundImage='url("'+beforeUrl+'")';
  after.style.backgroundImage='url("'+afterUrl+'")';
  for(const el of [before,after]){
   el.style.backgroundSize='cover';
   el.style.backgroundPosition='center center';
  }
  const draw=()=>{
   const n=Math.max(0,Math.min(100,Number(input.value)||0));
   before.style.clipPath='inset(0 '+(100-n)+'% 0 0)';
   divider.style.left=n+'%';
   input.setAttribute('aria-valuetext',n+' pour cent de la photo avant');
  };
  input.addEventListener('input',draw);
  draw();
  card.hidden=false;
  return true;
 }catch(err){card.hidden=true;return false;}
};
cards.forEach(card=>card.hidden=true);
Promise.all(cards.map(applyCard)).then(results=>{
 const visible=results.filter(Boolean).length;
 const gallery=document.querySelector('#comparatifs-ia');
 if(gallery&&visible){
  gallery.hidden=false;
  const old=document.querySelector('#inspirations');
  if(old){old.hidden=true;old.id='inspirations-archive';gallery.id='inspirations';}
 }
 document.querySelectorAll('[data-ba-ready]').forEach(section=>{
  if(section.querySelector('.ba-card:not([hidden])'))section.hidden=false;
 });
});
})();