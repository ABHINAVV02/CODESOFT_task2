function toggleMenu() {
    document.querySelector('.navbar-menu').classList.toggle('active');
}
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});