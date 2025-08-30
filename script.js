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

// ===== Optional: Rotating Hero Text =====
const heroMain = document.querySelector(".hero-text");
const heroTexts = [
  "Create, Learn, Inspire",
  "Ignite Your Creativity",
  "Inspire. Create. Uplift.",
  "Where Ideas Meet Impact"
];
let heroIndex = 0;

function rotateHeroText() {
  heroIndex = (heroIndex + 1) % heroTexts.length;
  heroMain.classList.remove("fade-in");
  
  setTimeout(() => {
    heroMain.textContent = heroTexts[heroIndex];
    heroMain.classList.add("fade-in");
  }, 300);
}

// Rotate every 6 seconds
setInterval(rotateHeroText, 6000);
