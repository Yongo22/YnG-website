// Yn'G — Interactivity v1 (no extra CSS required)
document.addEventListener("DOMContentLoaded", () => {
  /* ---------- 1) Smooth scroll for internal links ---------- */
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          history.pushState(null, "", targetId);
        }
      }
    });
  });

  /* ---------- 2) Reveal on scroll (cards + hero text) ---------- */
  const revealEls = [
    ...document.querySelectorAll(".card"),
    ...document.querySelectorAll(".hero h1, .hero p, .hero .buttons")
  ];

  // Set initial hidden state via JS (no CSS needed)
  revealEls.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(14px)";
    el.style.transition = "opacity 600ms ease, transform 600ms ease";
    el.style.transitionDelay = `${Math.min(i * 80, 400)}ms`; // slight stagger
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.opacity = "1";
        el.style.transform = "none";
        io.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => io.observe(el));

  /* ---------- 3) Floating "Back to top" button ---------- */
  const toTop = document.createElement("button");
  toTop.setAttribute("aria-label", "Back to top");
  toTop.textContent = "↑";
  Object.assign(toTop.style, {
    position: "fixed",
    right: "18px",
    bottom: "18px",
    width: "42px",
    height: "42px",
    borderRadius: "10px",
    border: "1px solid rgba(0,0,0,.08)",
    background: "white",
    boxShadow: "0 10px 20px rgba(0,0,0,.08)",
    fontSize: "20px",
    cursor: "pointer",
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "9999"
  });
  document.body.appendChild(toTop);

  window.addEventListener("scroll", () => {
    toTop.style.display = window.scrollY > 300 ? "flex" : "none";
  });

  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- 4) Button ripple effect (nice feedback) ---------- */
  const rippleTargets = document.querySelectorAll(".btn, .btn-primary, .btn-outline, .btn-secondary");
  rippleTargets.forEach(btn => {
    btn.style.position ||= "relative";
    btn.style.overflow = "hidden";
    btn.addEventListener("click", e => {
      const circle = document.createElement("span");
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      Object.assign(circle.style, {
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: "rgba(14,165,233,.25)", // soft blue
        transform: "scale(0)",
        opacity: "0.9",
        pointerEvents: "none",
        transition: "transform 500ms ease, opacity 700ms ease"
      });

      btn.appendChild(circle);
      requestAnimationFrame(() => {
        circle.style.transform = "scale(1)";
        circle.style.opacity = "0";
      });
      setTimeout(() => circle.remove(), 700);
    });
  });

  /* ---------- 5) Sticky header shadow (if a header exists) ---------- */
  const header = document.querySelector("header");
  if (header) {
    header.style.transition = "box-shadow 200ms ease, background 200ms ease";
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        header.style.boxShadow = "0 8px 24px rgba(0,0,0,.08)";
        header.style.background = "rgba(255,255,255,.7)";
        header.style.backdropFilter = "saturate(180%) blur(10px)";
      } else {
        header.style.boxShadow = "none";
        header.style.background = "";
        header.style.backdropFilter = "";
      }
    });
  }
});
