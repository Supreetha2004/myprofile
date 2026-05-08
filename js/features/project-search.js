// document.addEventListener("DOMContentLoaded", () => {

//   const searchInput = document.getElementById("project-search");
//   const projectsContainer = document.getElementById("projects-container");

//   // Safety check (VERY IMPORTANT)
//   if (!searchInput || !projectsContainer || typeof projectsData === "undefined") {
//     console.error("Missing elements or projectsData not loaded");
//     return;
//   }

//   // Render function
//   function renderProjects(projects) {
//     projectsContainer.innerHTML = "";

//     projects.forEach(project => {
//       const card = document.createElement("div");
//       card.className = "p-6 bg-white shadow rounded";

//       card.innerHTML = `
//         <h3 class="text-xl font-bold">${project.name}</h3>
//         <p class="text-gray-600">${project.description}</p>
//       `

//       projectsContainer.appendChild(card);
//     });
//   }

//   // Initial render
//   renderProjects(projectsData);

//   // SEARCH FEATURE
//   searchInput.addEventListener("input", function () {
//     const searchValue = this.value.toLowerCase();

//     const filteredProjects = projectsData.filter(project =>
//       project.name.toLowerCase().includes(searchValue) ||
//       project.description.toLowerCase().includes(searchValue) ||
//       project.category.toLowerCase().includes(searchValue)
//     );

//     renderProjects(filteredProjects);
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const searchInput = document.getElementById("project-search");
//   const projectsContainer = document.getElementById("projects-container");

//   // Safety check
//   if (!searchInput || !projectsContainer || typeof projectsData === "undefined") {
//     console.error("Search: Missing elements or projectsData not loaded");
//     return;
//   }

//   // ✅ Render function (same structure as filter file)
//   function renderProjects(projects) {
//     projectsContainer.innerHTML = "";

//     if (projects.length === 0) {
//       projectsContainer.innerHTML = "<p>No projects found</p>";
//       return;
//     }

//     projects.forEach(project => {
//       const card = document.createElement("div");
//       card.className = "p-6 bg-white shadow rounded";

//       card.innerHTML = `
//         <h3 class="text-xl font-bold">${project.name}</h3>
//         <p class="text-gray-600">${project.description}</p>
//         <span class="status-badge">${project.status || ""}</span>
//         <br/><br/>
//         ${project.github ? `<a href="${project.github}" target="_blank">GitHub</a>` : ""}
//       `;

//       projectsContainer.appendChild(card);
//     });
//   }

//   // ✅ SEARCH FEATURE
//   searchInput.addEventListener("input", function () {
//     const searchValue = this.value.toLowerCase().trim();

//     const filteredProjects = projectsData.filter(project =>
//       (project.name || "").toLowerCase().includes(searchValue) ||
//       (project.description || "").toLowerCase().includes(searchValue) ||
//       (project.category || "").toLowerCase().includes(searchValue)
//     );

//     renderProjects(filteredProjects);
//   });
// });
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("project-search");
  if (!searchInput || typeof projectsData === "undefined") return;

  searchInput.addEventListener("input", function () {
    const q = this.value.toLowerCase().trim();
    const filtered = projectsData.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.technologies || []).some(t => t.toLowerCase().includes(q))
    );
    renderProjects(filtered);
    // Reset filter buttons to "All"
    document.querySelectorAll("#project-filters button").forEach((b, i) => {
      b.classList.toggle("active", i === 0);
    });
  });
});