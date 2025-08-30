// ===== CMS Data (data.js) =====
const cmsData = {
  hero: {
    title: "Create, Learn, Inspire",
    subtitle: "Where Creativity Meets Community",
    ctaText: "Get Started",
    ctaLink: "#features"
  },
  features: [
    {
      title: "📚 Book Club",
      description: "Discover and share amazing books with our community.",
      ctaText: "Join Now",
      ctaLink: "#"
    },
    {
      title: "💡 Inspiration",
      description: "Find motivation, tips, and stories that uplift your spirit.",
      ctaText: "Get Inspired",
      ctaLink: "#"
    },
    {
      title: "🤝 Community",
      description: "Connect with youth, children, and women to learn and grow.",
      ctaText: "Join Community",
      ctaLink: "#"
    }
  ],
  about: {
    text: "Yn'G is a community dedicated to spreading love, learning, and creativity..."
  },
  blogs: [
    {
      title: "Book Reviews",
      summary: "Deep dives into inspiring books and learning resources.",
      link: "#",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Community Stories",
      summary: "Stories of growth, impact, and inspiration from our members.",
      link: "#",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Creativity Spotlight",
      summary: "Highlighting innovative projects and creative ideas from our community.",
      link: "#",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
    }
  ]
};

// ===== Main Script (script.js) =====

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

// ===== Load CMS Content =====
const data = cmsData;

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
      <img src="${b.image}" alt="${b.title}" style="width:100%; border-radius: 12px; margin-bottom: 1rem;" />
      <h3>${b.title}</h3>
      <p>${b.summary}</p>
      <button class="cta-btn" onclick="location.href='${b.link}'">Read More</button>
    </div>
  `).join('');
