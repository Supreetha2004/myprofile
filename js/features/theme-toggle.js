const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn ? toggleBtn.querySelector(".theme-icon") : null;

function applyTheme(dark) {
  document.body.classList.toggle("dark", dark);
  if (icon) icon.textContent = dark ? "☾" : "☀";
}

const saved = localStorage.getItem("theme");
applyTheme(saved === "dark");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");
    applyTheme(!isDark);
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  });
}
