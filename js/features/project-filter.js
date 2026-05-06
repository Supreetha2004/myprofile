const filterContainer = document.getElementById("project-filters");
const projectsContainer = document.getElementById("projects-container");
const countElement = document.getElementById("project-count");

const categories = ["All", ...new Set(projectsData.map(p => p.category))];

function renderFilters() {
  filterContainer.innerHTML = "";
  categories.forEach((category, i) => {
    const btn = document.createElement("button");
    btn.innerText = category;
    if (i === 0) btn.classList.add("active");
    btn.addEventListener("click", () => {
      document.querySelectorAll("#project-filters button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterProjects(category);
    });
    filterContainer.appendChild(btn);
  });
}

function filterProjects(category) {
  const filtered = category === "All" ? projectsData : projectsData.filter(p => p.category === category);
  renderProjects(filtered);
}

function renderProjects(projects) {
  projectsContainer.innerHTML = "";
  if (countElement) countElement.textContent = `${projects.length} project${projects.length !== 1 ? 's' : ''} found`;

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "proj-card";

    const statusClass = project.status === "Live" ? "" : "demo";
    const statusBadge = project.status
      ? `<span class="proj-status ${statusClass}">${project.status}</span>` : "";

    const techTags = (project.technologies || [])
      .map(t => `<span class="proj-tag">${t}</span>`).join("");

    const liveLink = project.liveDemo && !["LiveDemo", "http://127.0.0.1:5500/W4/D5/portfolio-project/index.html"].includes(project.liveDemo)
      ? `<a href="${project.liveDemo}" target="_blank" class="proj-link">🌐 Live Demo</a>` : "";
    const ghLink = project.github && !["Github"].includes(project.github)
      ? `<a href="${project.github}" target="_blank" class="proj-link">💻 Source</a>` : "";

    card.innerHTML = `
      <div class="proj-header">
        <h3 class="proj-title">${project.name}</h3>
        ${statusBadge}
      </div>
      <p class="proj-desc">${project.description}</p>
      ${techTags ? `<div class="proj-tags">${techTags}</div>` : ""}
      ${liveLink || ghLink ? `<div class="proj-links">${liveLink}${ghLink}</div>` : ""}
    `;

    projectsContainer.appendChild(card);
  });
}

renderFilters();
renderProjects(projectsData);
