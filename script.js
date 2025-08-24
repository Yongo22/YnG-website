// Select DOM elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const revealElements = document.querySelectorAll('.hero, .features, .blogs, footer');

// Hamburger Toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Smooth Scroll + Close mobile menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const hash = this.getAttribute('href');

    // Skip invalid or empty hashes
    if (!hash || hash === '#' || !document.querySelector(hash)) return;

    const target = document.querySelector(hash);
    target.scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu if open
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// Scroll Reveal using Intersection Observer
const observerOptions = { threshold: 0.15 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(50px)';
  observer.observe(el);
});
