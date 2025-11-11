// Toggle nav on mobile
function toggleMenu(){
  const menu = document.getElementById('menu');
  const isOpen = menu.classList.toggle('open');
  const btn = document.querySelector('.burger');
  if (btn) btn.setAttribute('aria-expanded', String(isOpen));
}

// Simple form handling (demo)
function handleSubmit(e){
  e.preventDefault();
  const status = document.getElementById('form-status');
  if (status) status.textContent = '¡Gracias! Su solicitud fue enviada. Nos comunicaremos pronto.';
  e.target.reset();
}

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Activate nav links on scroll
const sections = ['inicio','sobre','productos','servicios','contacto'];
const links = sections.map(id=>({id, el: document.querySelector(`.menu a[href="#${id}"]`)}));
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    const id = entry.target.id;
    const link = links.find(l=>l.id===id)?.el;
    if(link){ link.classList.toggle('active', entry.isIntersecting && entry.intersectionRatio>0.3); }
  });
}, {root:null, threshold:[0.3], rootMargin:'-20% 0px -60% 0px'});
sections.forEach(id=>{ const el=document.getElementById(id); if(el) obs.observe(el); });
