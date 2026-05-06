window.addEventListener("scroll", () => {
  const bar = document.getElementById("scroll-progress-bar");
  if (!bar) return;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = ((window.scrollY / total) * 100) + "%";
  
});
