// Toggle mobile nav
const mobileBtn = document.getElementById("mobileBtn");
const mobileNav = document.getElementById("mobileNav");
const menuIcon = document.getElementById("menuIcon");

mobileBtn?.addEventListener("click", () => {
  if (!mobileNav) return;
  mobileNav.classList.toggle("hidden");
  // simple icon swap (burger <-> X)
  if (menuIcon) {
    menuIcon.innerHTML = mobileNav.classList.contains("hidden")
      ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />'
      : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
  }
});

// Theme toggle (light / dark using a CSS class on <html>)
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function setTheme(isDark) {
  if (isDark) root.classList.add("dark");
  else root.classList.remove("dark");
  localStorage.setItem("site-dark", isDark ? "1" : "0");
}

// initialize
const saved = localStorage.getItem("site-dark");
if (saved === "1") setTheme(true);

themeToggle?.addEventListener("click", () => {
  const isDark = root.classList.toggle("dark");
  setTheme(isDark);
});

// display current year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simple form submit handler (prevents reload)
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks! Message sent (demo).");
    form.reset();
  });
}
