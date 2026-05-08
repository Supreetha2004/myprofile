
document.addEventListener("DOMContentLoaded", () => {
  const filterContainer = document.getElementById("project-filters");
  if (!filterContainer || typeof projectsData === "undefined") return;

  const categories = ["All", ...new Set(projectsData.map(p => p.category))];

  function renderFilters() {
    filterContainer.innerHTML = "";
    categories.forEach((category, i) => {
      const btn = document.createElement("button");
      btn.textContent = category;
      if (i === 0) btn.classList.add("active");
      btn.addEventListener("click", () => {
        document.querySelectorAll("#project-filters button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filtered = category === "All" ? projectsData : projectsData.filter(p => p.category === category);
        renderProjects(filtered);
      });
      filterContainer.appendChild(btn);
    });
  }

  renderFilters();
  renderProjects(projectsData);
});