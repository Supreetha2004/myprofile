const skillsContainer = document.getElementById("skills-container");
const skillsFilterContainer = document.getElementById("skills-filters");

const skillCategories = ["All", ...new Set(skillsData.map(s => s.category))];

function renderSkillFilters() {
  skillsFilterContainer.innerHTML = "";
  skillCategories.forEach((category, i) => {
    const btn = document.createElement("button");
    btn.innerText = category;
    if (i === 0) btn.classList.add("active");
    btn.addEventListener("click", () => {
      document.querySelectorAll("#skills-filters button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterSkills(category);
    });
    skillsFilterContainer.appendChild(btn);
  });
}

function filterSkills(category) {
  const filtered = category === "All" ? skillsData : skillsData.filter(s => s.category === category);
  renderSkills(filtered);
}

function renderSkills(skills) {
  skillsContainer.innerHTML = "";
  skills.forEach(skill => {
    const div = document.createElement("div");
    div.className = "skill-card";
    div.innerHTML = `
      <div class="skill-initial">${skill.shortLabel || skill.name[0]}</div>
      <div class="skill-name">${skill.name}</div>
      <div class="skill-cat">${skill.category}</div>
    `;
    skillsContainer.appendChild(div);
  });
}
renderSkillFilters();
renderSkills(skillsData);
