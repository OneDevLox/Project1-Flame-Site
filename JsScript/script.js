// MOBILE NAV TOGGLE (unchanged)
const openBtn = document.getElementById("image-open");
const closeBtn = document.getElementById("image-close");
const navHolder = document.querySelector(".nav-holder");

if (openBtn && closeBtn && navHolder) {
  openBtn.addEventListener("click", () => {
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    navHolder.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
    navHolder.classList.remove("open");
  });
}

// INTERSECTION OBSERVER FOR SECTIONS
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".about-us, .home, .blog, .feedback").forEach((section) => {
  observer.observe(section);
});

