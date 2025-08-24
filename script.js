// Select DOM elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const backToTop = document.getElementById('backToTop');
const darkModeToggle = document.getElementById('darkModeToggle');
const revealElements = document.querySelectorAll('.hero, .features, .blogs, .about, footer');

// Hamburger Toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Smooth Scroll + Close mobile menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === "#") return; // Prevent error for empty #
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
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

// Back to Top Button
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.textContent =
    document.body.classList.contains('dark-mode') ? "☀️ Light Mode" : "🌙 Dark Mode";
});
