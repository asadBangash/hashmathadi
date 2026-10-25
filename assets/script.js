
const menuBtn=document.querySelector('.menu');
const nav=document.querySelector('.navlinks');
if(menuBtn){menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const form=document.querySelector('#contactForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const s=document.querySelector('.form-status');if(s){s.style.display='block';s.textContent='Thank you. This demo form is ready to be connected to your email or backend.';} });}

if(window.lucide){lucide.createIcons();}

// Floating WhatsApp chat widget.
// Add your business WhatsApp number (country code + number, digits only) below.
// Example: const WHATSAPP_NUMBER = '15551234567';
const WHATSAPP_NUMBER = '';

(function initWhatsAppChat(){
  const icon=`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M19.11 17.44c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.82 1.02-.15.17-.3.2-.56.07-.26-.13-1.1-.4-2.09-1.29-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.59-1.41-.8-1.93-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.46.07-.7.33-.24.26-.91.89-.91 2.17 0 1.28.93 2.52 1.06 2.69.13.17 1.83 2.8 4.44 3.93.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.24-.17-.5-.3M16.03 26.67h-.01a10.58 10.58 0 0 1-5.39-1.48l-.39-.23-4.01 1.05 1.07-3.91-.25-.4a10.58 10.58 0 1 1 8.98 4.97m9-19.62A12.63 12.63 0 0 0 5.17 22.46L3.38 29l6.7-1.76A12.63 12.63 0 1 0 25.03 7.05"/></svg>`;

  const widget=document.createElement('div');
  widget.innerHTML=`
    <div class="whatsapp-tip">Chat with us</div>
    <div class="whatsapp-chat" id="whatsappChat" role="dialog" aria-label="WhatsApp chat">
      <div class="whatsapp-chat-head">
        <div><strong>Tawheed Hadi</strong><span>Typically replies on WhatsApp</span></div>
        <button class="whatsapp-close" type="button" aria-label="Close WhatsApp chat">×</button>
      </div>
      <div class="whatsapp-chat-body"><div class="whatsapp-bubble">Hello 👋<br>How can we help with your construction or engineering project?</div></div>
      <div class="whatsapp-chat-actions"><button class="whatsapp-chat-link" type="button">${icon}<span>Start WhatsApp Chat</span></button></div>
    </div>
    <button class="whatsapp-float" type="button" aria-label="Open WhatsApp chat">${icon}</button>`;
  document.body.appendChild(widget);

  const panel=document.getElementById('whatsappChat');
  const toggle=document.querySelector('.whatsapp-float');
  const close=document.querySelector('.whatsapp-close');
  const start=document.querySelector('.whatsapp-chat-link');
  toggle?.addEventListener('click',()=>panel?.classList.toggle('open'));
  close?.addEventListener('click',()=>panel?.classList.remove('open'));
  start?.addEventListener('click',()=>{
    const text=encodeURIComponent('Hello Tawheed Hadi Construction Services, I would like to discuss a project.');
    const url=WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}` : `https://wa.me/?text=${text}`;
    window.open(url,'_blank','noopener,noreferrer');
  });
})();
