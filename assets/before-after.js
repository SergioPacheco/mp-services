/* Progressive enhancement for authenticated before/after photo pairs only. */
(()=>{'use strict';
document.querySelectorAll('[data-before-after]').forEach(widget=>{
 const range=widget.querySelector('input[type="range"]');
 const before=widget.querySelector('.before-after-before');
 const divider=widget.querySelector('.before-after-divider');
 if(!range||!before||!divider)return;
 const update=()=>{
  const position=Math.min(100,Math.max(0,Number(range.value)||0));
  before.style.clipPath='inset(0 '+(100-position)+'% 0 0)';
  divider.style.left=position+'%';
  range.setAttribute('aria-valuetext',position+' % de la photographie avant');
 };
 range.addEventListener('input',update);
 update();
});
})();