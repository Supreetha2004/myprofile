const filterContainer = document.getElementById("project-filters");
const projectsContainer = document.getElementById("projects-container");

// Get unique categories
const categories = ["All", ...new Set(projectsData.map(p => p.category))];

// Render filter buttons
function renderFilters() {
  filterContainer.innerHTML = "";

  categories.forEach(category => {
    const btn = document.createElement("button");
    btn.innerText = category;

    btn.className =
      "px-4 py-2 border rounded hover:bg-blue-500 hover:text-white";

    btn.addEventListener("click", () => {
      filterProjects(category);

      // Active button highlight
      document.querySelectorAll("#project-filters button")
        .forEach(b => b.classList.remove("bg-blue-500", "text-white"));

      btn.classList.add("bg-blue-500", "text-white");
    });

    filterContainer.appendChild(btn);
  });
}

// Filter function
function filterProjects(category) {
  let filtered;

  if (category === "All") {
    filtered = projectsData;
  } else {
    filtered = projectsData.filter(project => project.category === category);
  }

  renderProjects(filtered);
}

// Reuse your render function
function renderProjects(projects) {
  projectsContainer.innerHTML = "";

  projects.forEach(project => {
    const card = document.createElement("div");

    card.className =
      "p-6 bg-white shadow rounded hover:scale-105 transition";

    card.innerHTML = `
      <h3 class="text-xl font-bold">${project.name}</h3>
      <p class="text-gray-600">${project.description}</p>

      <p class="text-sm mt-2 font-semibold">${project.category}</p>

      <div class="flex gap-4 mt-4">
        <a href="${project.liveDemo}" target="_blank"
          class="text-green-500 font-bold">🌐 Live</a>

        <a href="${project.github}" target="_blank"
          class="text-blue-500 font-bold">💻 Code</a>
      </div>
    `;

    projectsContainer.appendChild(card);
  });
}

// Init
renderFilters();
renderProjects(projectsData);