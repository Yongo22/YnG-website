// ===== Mobile Menu =====
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// ===== Dark Mode =====
const darkModeToggle = document.getElementById("darkModeToggle");
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
}
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
});

// ===== Back to Top & Scroll Reveal =====
const backToTop = document.getElementById("backToTop");
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";

  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ===== Rotating Hero Background =====
const hero = document.querySelector(".hero");
const backgrounds = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=80"
];
let current = 0;
function changeBackground() {
  hero.style.background = `linear-gradient(rgba(0,68,102,0.6), rgba(0,68,102,0.6)), url("${backgrounds[current]}") no-repeat center center/cover`;
  current = (current + 1) % backgrounds.length;
}
changeBackground();
setInterval(changeBackground, 8000);
