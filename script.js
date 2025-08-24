// ------------------------
// Hamburger Menu Toggle
// ------------------------
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// ------------------------
// Smooth Scroll for Anchors
// ------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
    // Close menu on mobile after click
    if(navLinks.classList.contains('active')){
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// ------------------------
// Scroll Reveal Animations
// ------------------------
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

// ------------------------
// Optional: Card Hover Shadow Animation (JS fallback for older browsers)
// ------------------------
const cards = document.querySelectorAll('.card, .blog-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
    card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
  });
});
