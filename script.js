// Hamburger Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if(navLinks.classList.contains('active')){
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// Scroll Reveal
const revealElements = document.querySelectorAll('.hero, .features, .blogs, footer');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if(boxTop < triggerBottom){
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    } else {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
