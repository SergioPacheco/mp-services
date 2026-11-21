/* Paired AI before/after comparisons. Degrades gracefully if asset is not deployed. */
(()=>{'use strict';
const gallery=document.querySelector('#comparatifs-ia');
if(!gallery)return;
const cards=Array.from(gallery.querySelectorAll('[data-before-after]'));
const asset=new Image();
asset.onload=()=>{
 gallery.hidden=false;
 cards.forEach(card=>{
  const input=card.querySelector('.ba-range');
  const before=card.querySelector('.ba-before');
  const line=card.querySelector('.ba-divider');
  if(!input||!before||!line)return;
  const render=()=>{
   const n=Math.min(100,Math.max(0,Number(input.value)||0));
   before.style.clipPath='inset(0 '+(100-n)+'% 0 0)';
   line.style.left=n+'%';
   input.setAttribute('aria-valuetext',n+' pour cent de la vue avant');
  };
  input.addEventListener('input',render);
  render();
 });
 const old=document.querySelector('#inspirations');
 if(old)old.hidden=true;
};
asset.onerror=()=>{gallery.hidden=true;};
asset.src='assets/portfolio-ia.webp';
})();
