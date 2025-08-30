// ===== Mobile Menu =====
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// ===== Back to Top =====
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Scroll Reveal =====
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// ===== Load CMS Content Safely =====
const CMS_URL = 'https://yongo22.github.io/YnG-website/data.json';

fetch(CMS_URL)
  .then(res => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  })
  .then(data => {
    // Hero
    document.querySelector('.hero h2').textContent = data.hero.title;
    document.querySelector('.hero p').textContent = data.hero.subtitle;
    const heroBtn = document.querySelector('.hero .cta-btn');
    heroBtn.textContent = data.hero.ctaText;
    heroBtn.onclick = () => {
      document.querySelector(data.hero.ctaLink).scrollIntoView({ behavior: 'smooth' });
    };

    // Features
    const featuresSection = document.querySelector('#features');
    featuresSection.innerHTML = `<h2>Our Focus</h2><div class="cards-container">` +
      data.features.map(f => `
        <div class="card reveal">
          <h3>${f.title}</h3>
          <p>${f.description}</p>
          <button class="cta-btn" onclick="location.href='${f.ctaLink}'">${f.ctaText}</button>
        </div>
      `).join('') + `</div>`;

    // About
    document.querySelector('#about p').textContent = data.about.text;

    // Blogs
    const blogsSection = document.querySelector('#blogs');
    blogsSection.innerHTML = `<h2>Our Blog</h2><div class="cards-container">` +
      data.blogs.map(b => `
        <div class="card reveal">
          <img src="${b.image}" alt="${b.title}" />
          <h3>${b.title}</h3>
          <p>${b.summary}</p>
          <button class="cta-btn" onclick="location.href='${b.link}'">Read More</button>
        </div>
      `).join('') + `</div>`;
  })
  .catch(err => {
    console.error("Failed to load CMS data:", err);
    document.querySelector('#features').innerHTML = "<p>Content failed to load. Please try again later.</p>";
  });
