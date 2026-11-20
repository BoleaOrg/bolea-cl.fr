// Smooth scrolling is handled in CSS (scroll-behavior + scroll-margin-top).

const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

function setMenuOpen(open) {
    menuToggle.classList.toggle('active', open);
    navMenu.classList.toggle('active', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
}

menuToggle.addEventListener('click', () => {
    setMenuOpen(!navMenu.classList.contains('active'));
});

// Close the mobile menu after choosing a link, clicking outside, or pressing Escape
document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('click', e => {
    if (!e.target.closest('.navbar')) setMenuOpen(false);
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') setMenuOpen(false);
});

// Navbar shadow once the page is scrolled
const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
