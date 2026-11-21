/* Paired AI simulations: mouse, touch and keyboard; hidden until sprite loads. */
(()=>{'use strict';
const cards=Array.from(document.querySelectorAll('[data-before-after]'));
if(!cards.length)return;
const gallery=document.querySelector('#comparatifs-ia');
const asset=new Image();
asset.onload=()=>{
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
 document.querySelectorAll('[data-ba-ready]').forEach(x=>{x.hidden=false;});
 if(gallery){
  gallery.hidden=false;
  const old=document.querySelector('#inspirations');
  if(old){old.hidden=true;old.id='inspirations-archive';gallery.id='inspirations';}
 }
};
asset.onerror=()=>document.querySelectorAll('[data-ba-ready]').forEach(x=>x.hidden=true);
asset.src='assets/portfolio-ia.webp';
})();
