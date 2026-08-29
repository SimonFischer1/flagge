const events = [
  // Hier später Events eintragen, z.B.:
  // {date:"12.10.2026 · 19:00", title:"Kneipen-Rallye", text:"Wir ziehen los.", location:"Start: FlaggeWest", bring:"Gute Laune · Ausweis · ggf. Regenschirm"}
];
const eventsEl=document.getElementById("events");
function renderEvents(){
 if(!events.length){
  eventsEl.innerHTML=`<div class="empty-events"><div class="big">🫠</div><h3>Noch keine nice EVENTS.</h3><p>Aber vielleicht bald! Sobald hier etwas passiert, stehen hier <b>wann · wo · was · was mitnehmen</b> – versprochen.</p></div>`;
  return;
 }
 eventsEl.innerHTML=events.map(e=>`<article class="event"><div class="date">${e.date}</div><h3>${escapeHtml(e.title)}</h3><p>${escapeHtml(e.text)}</p><div class="meta">📍 ${escapeHtml(e.location)}<br>🎒 Mitnehmen: ${escapeHtml(e.bring)}</div></article>`).join("");
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
renderEvents();
const menu=document.getElementById("menu"), nav=document.getElementById("nav");
menu.addEventListener("click",()=>nav.style.display=nav.style.display==="flex"?"none":"flex");
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{if(innerWidth<=850)nav.style.display="none"}));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.style.animation="fadeUp .7s ease both"}),{threshold:.12});
document.querySelectorAll(".feature,.event,.manifesto-box").forEach(el=>io.observe(el));
const style=document.createElement("style");style.textContent="@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}";document.head.appendChild(style);