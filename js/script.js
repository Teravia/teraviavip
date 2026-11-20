// Menu seluler
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

// Buka/tutup submenu (seluler)
document.querySelectorAll('.sub-toggle').forEach(btn => {
  btn.addEventListener('click', () => btn.parentElement.classList.toggle('open'));
});

// Animasi muncul saat terlihat di layar
const items = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('show'); observer.unobserve(e.target); }
  });
}, { threshold: 0.15 });
items.forEach((el, i) => { el.style.transitionDelay = (i * 0.08) + 's'; observer.observe(el); });
