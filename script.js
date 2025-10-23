function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(id);
  if(el) el.classList.add('active');
  // update nav active state
  document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
  document.querySelectorAll('.nav-links li').forEach(li => {
    if(li.textContent.trim().toLowerCase() === id) li.classList.add('active');
  });
  // close mobile nav
  document.querySelector('.nav-links')?.classList.remove('active');
}

function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if(!links) return;
  links.classList.toggle('active');
}

function toggleLanguageMenu() {
  const menu = document.getElementById('languageMenu');
  if(!menu) return;
  menu.classList.toggle('active');
  document.querySelector('.language-btn')?.classList.toggle('active');
}

function changeLanguage(code) {
  const flags = { en: '🇺🇸', pt: '🇧🇷', es: '🇪🇸', ru: '🇷🇺', hi: '🇮🇳', zh: '🇨🇳', ja: '🇯🇵' };
  document.getElementById('currentFlag').textContent = flags[code] || '🏳️';
  toggleLanguageMenu();
}

document.addEventListener('click', function(e){
  const menu = document.getElementById('languageMenu');
  if(!menu) return;
  const btn = document.querySelector('.language-btn');
  if(btn && !btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('active');
    btn.classList.remove('active');
  }
});

document.querySelectorAll('.menu-toggle').forEach(btn => btn.addEventListener('click', toggleMenu));

window.addEventListener('scroll', function(){
  const nav = document.querySelector('.navbar');
  if(!nav) return;
  if(window.scrollY > 20) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
});

(function updatePriceWidget(){
  const priceEl = document.getElementById('priceValue');
  const changeEl = document.getElementById('priceChange');
  if(priceEl) priceEl.textContent = '$0.000001076';
  if(changeEl) { changeEl.textContent = '+0.00%'; changeEl.classList.remove('loading'); changeEl.classList.add('positive'); }
})();

window.addEventListener("load", () => {
  if (window.location.hash) {
    const pageId = window.location.hash.substring(1); 
    if (typeof showPage === "function") {
      showPage(pageId);
    }
  }
});
window.addEventListener('hashchange', () => {
  const pageId = window.location.hash.slice(1) || 'home';
  if (document.getElementById(pageId)) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    document.querySelectorAll('.nav-links li').forEach(li => {
      if(li.textContent.trim().toLowerCase() === pageId) li.classList.add('active');
    });
  }
});
if (!window.location.hash && document.getElementById('home')) {
}
