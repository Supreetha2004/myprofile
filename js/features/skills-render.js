const skillsContainer = document.getElementById("skills-container");
const skillsFilterContainer = document.getElementById("skills-filters");

// Get categories
const skillCategories = ["All", ...new Set(skillsData.map(s => s.category))];

// Render filter buttons
function renderSkillFilters() {
  skillsFilterContainer.innerHTML = "";

  skillCategories.forEach(category => {
    const btn = document.createElement("button");
    btn.innerText = category;

    btn.className =
      "px-4 py-2 border rounded hover:bg-blue-500 hover:text-white";

    btn.addEventListener("click", () => {
      filterSkills(category);

      // active button
      document.querySelectorAll("#skills-filters button")
        .forEach(b => b.classList.remove("bg-blue-500", "text-white"));

      btn.classList.add("bg-blue-500", "text-white");
    });

    skillsFilterContainer.appendChild(btn);
  });
}

// Filter function
function filterSkills(category) {
  let filtered;

  if (category === "All") {
    filtered = skillsData;
  } else {
    filtered = skillsData.filter(skill => skill.category === category);
  }

  renderSkills(filtered);
}

// Render skills
function renderSkills(skills) {
  skillsContainer.innerHTML = "";

  skills.forEach(skill => {
    const div = document.createElement("div");

    div.className =
      "p-4 bg-white shadow rounded text-center hover:scale-105 transition";

    div.innerHTML = `
      <h3 class="font-bold">${skill.name}</h3>
      <p class="text-sm text-gray-500">${skill.category}</p>
    `;

    skillsContainer.appendChild(div);
  });
}

// Init
renderSkillFilters();
renderSkills(skillsData);