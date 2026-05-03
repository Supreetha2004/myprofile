document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("project-search");
  const projectsContainer = document.getElementById("projects-container");

  // Safety check (VERY IMPORTANT)
  if (!searchInput || !projectsContainer || typeof projectsData === "undefined") {
    console.error("Missing elements or projectsData not loaded");
    return;
  }

  // Render function
  function renderProjects(projects) {
    projectsContainer.innerHTML = "";

    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "p-6 bg-white shadow rounded";

      card.innerHTML = `
        <h3 class="text-xl font-bold">${project.name}</h3>
        <p class="text-gray-600">${project.description}</p>

        <div class="flex gap-4 mt-4">
          <a href="${project.liveDemo}" target="_blank" class="text-green-500 font-bold">🌐 Live</a>
          <a href="${project.github}" target="_blank" class="text-blue-500 font-bold">💻 Code</a>
        </div>
      `;

      projectsContainer.appendChild(card);
    });
  }

  // Initial render
  renderProjects(projectsData);

  // SEARCH FEATURE
  searchInput.addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();

    const filteredProjects = projectsData.filter(project =>
      project.name.toLowerCase().includes(searchValue) ||
      project.description.toLowerCase().includes(searchValue) ||
      project.category.toLowerCase().includes(searchValue)
    );

    renderProjects(filteredProjects);
  });

});