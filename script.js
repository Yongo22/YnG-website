// ===== Mobile Menu =====
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// ===== Back to Top Button =====
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Scroll Reveal =====
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
});

// ===== Load CMS Content from JSON =====
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Hero Section
    const heroTitle = document.querySelector('.hero h2');
    const heroSubtitle = document.querySelector('.hero p');
    const heroButton = document.querySelector('.hero .cta-btn');

    heroTitle.textContent = data.hero.title;
    heroSubtitle.textContent = data.hero.subtitle;
    heroButton.textContent = data.hero.ctaText;
    heroButton.onclick = () => {
      document.querySelector(data.hero.ctaLink).scrollIntoView({ behavior: 'smooth' });
    };

    // Features Section
    const featuresSection = document.querySelector('#features');
    featuresSection.innerHTML = `<h2>Our Focus</h2>` +
      data.features.map(f => `
      <div class="card reveal">
        <h3>${f.title}</h3>
        <p>${f.description}</p>
        <button class="cta-btn" onclick="location.href='${f.ctaLink}'">${f.ctaText}</button>
      </div>
    `).join('');

    // About Section
    const aboutSection = document.querySelector('#about p');
    aboutSection.textContent = data.about.text;

    // Blogs Section
    const blogsSection = document.querySelector('#blogs');
    blogsSection.innerHTML = `<h2>Our Blog</h2>` +
      data.blogs.map(b => `
      <div class="card reveal">
        <h3>${b.title}</h3>
        <p>${b.summary}</p>
        <button class="cta-btn" onclick="location.href='${b.link}'">Read More</button>
      </div>
    `).join('');
  });
