const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn ? toggleBtn.querySelector(".theme-icon") : null;

function applyTheme(isLight) {
  document.body.classList.toggle("light", isLight);
  if (icon) icon.textContent = isLight ? "◑" : "◑";
  if (icon) icon.style.transform = isLight ? "scaleX(-1)" : "scaleX(1)";
}

const saved = localStorage.getItem("theme");
applyTheme(saved === "light");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light");
    applyTheme(!isLight);
    localStorage.setItem("theme", !isLight ? "light" : "dark");
  });
}
