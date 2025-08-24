// Select DOM elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const revealElements = document.querySelectorAll('.hero, .features, .blogs, footer');

// Hamburger Toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu on link click + smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// Scroll Reveal with Intersection Observer (more performant than scroll event)
const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target); // stop observing once revealed
    }
  });
}, observerOptions);

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(50px)';
  observer.observe(el);
});
