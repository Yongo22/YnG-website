// ===== Simple CMS Admin =====

// Sample initial data (load your data.json content here)
let cmsData = {
  hero: { title: "", subtitle: "", ctaText: "", ctaLink: "" },
  features: [],
  about: { text: "" },
  blogs: []
};

// ===== Hero Inputs =====
const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");
const heroCTA = document.getElementById("heroCTA");
const heroCTALink = document.getElementById("heroCTALink");

[heroTitle, heroSubtitle, heroCTA, heroCTALink].forEach(input => {
  input.addEventListener("input", () => {
    cmsData.hero.title = heroTitle.value;
    cmsData.hero.subtitle = heroSubtitle.value;
    cmsData.hero.ctaText = heroCTA.value;
    cmsData.hero.ctaLink = heroCTALink.value;
  });
});

// ===== Features =====
const featuresContainer = document.getElementById("featuresContainer");
const addFeatureBtn = document.getElementById("addFeature");

function renderFeatures() {
  featuresContainer.innerHTML = "";
  cmsData.features.forEach((f, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <input placeholder="Feature Title" value="${f.title}" data-index="${index}" data-key="title">
      <input placeholder="Feature Description" value="${f.description}" data-index="${index}" data-key="description">
      <input placeholder="Feature CTA Text" value="${f.ctaText}" data-index="${index}" data-key="ctaText">
      <input placeholder="Feature CTA Link" value="${f.ctaLink}" data-index="${index}" data-key="ctaLink">
      <button data-index="${index}" class="removeFeature">Remove</button>
      <hr>
    `;
    featuresContainer.appendChild(div);
  });

  document.querySelectorAll("input[data-key]").forEach(input => {
    input.addEventListener("input", e => {
      const idx = e.target.dataset.index;
      const key = e.target.dataset.key;
      cmsData.features[idx][key] = e.target.value;
    });
  });

  document.querySelectorAll(".removeFeature").forEach(btn => {
    btn.addEventListener("click", e => {
      cmsData.features.splice(e.target.dataset.index, 1);
      renderFeatures();
    });
  });
}

addFeatureBtn.addEventListener("click", () => {
  cmsData.features.push({ title: "", description: "", ctaText: "", ctaLink: "" });
  renderFeatures();
});

// ===== About =====
const aboutText = document.getElementById("aboutText");
aboutText.addEventListener("input", () => cmsData.about.text = aboutText.value);

// ===== Blogs =====
const blogsContainer = document.getElementById("blogsContainer");
const addBlogBtn = document.getElementById("addBlog");

function renderBlogs() {
  blogsContainer.innerHTML = "";
  cmsData.blogs.forEach((b, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <input placeholder="Blog Title" value="${b.title}" data-index="${index}" data-key="title">
      <input placeholder="Blog Summary" value="${b.summary}" data-index="${index}" data-key="summary">
      <input placeholder="Blog Link" value="${b.link}" data-index="${index}" data-key="link">
      <input placeholder="Blog Image URL" value="${b.image}" data-index="${index}" data-key="image">
      <button data-index="${index}" class="removeBlog">Remove</button>
      <hr>
    `;
    blogsContainer.appendChild(div);
  });

  document.querySelectorAll("input[data-key]").forEach(input => {
    input.addEventListener("input", e => {
      const idx = e.target.dataset.index;
      const key = e.target.dataset.key;
      if (e.target.closest("section").id === "blogs") {
        cmsData.blogs[idx][key] = e.target.value;
      }
    });
  });

  document.querySelectorAll(".removeBlog").forEach(btn => {
    btn.addEventListener("click", e => {
      cmsData.blogs.splice(e.target.dataset.index, 1);
      renderBlogs();
    });
  });
}

addBlogBtn.addEventListener("click", () => {
  cmsData.blogs.push({ title: "", summary: "", link: "#", image: "" });
  renderBlogs();
});

// ===== Download JSON =====
document.getElementById("downloadJSON").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(cmsData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.json";
  a.click();
  URL.revokeObjectURL(url);
});
