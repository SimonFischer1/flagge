const toast=document.getElementById('toast');
function showToast(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(window.tt);window.tt=setTimeout(()=>toast.classList.remove('show'),2800)}
document.querySelectorAll('[data-toast]').forEach(b=>b.addEventListener('click',()=>showToast(b.dataset.toast)));
document.getElementById('applyForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=new FormData(e.currentTarget).get('name');
  showToast(`Danke ${name}! Deine FlaggeWest-Anfrage ist vorgemerkt.`);
  e.currentTarget.reset();
});
document.getElementById('menuBtn').addEventListener('click',()=>{
  const nav=document.querySelector('.nav-links');
  const open=nav.dataset.open==='1';
  nav.dataset.open=open?'0':'1';
  nav.style.cssText=open?'':'display:flex;position:absolute;top:78px;left:12px;right:12px;padding:20px;flex-direction:column;background:#071015;border:1px solid #ffffff14;border-radius:18px';
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('seen')})
},{threshold:.12});
document.querySelectorAll('.section,.manifesto,.story-card,.feature').forEach(x=>observer.observe(x));
