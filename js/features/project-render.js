function renderProjects(projects) {
  projectsContainer.innerHTML = "";

  // ✅ Update count
  countElement.textContent = `${projects.length} project(s) found`;

  projects.forEach(project => {
    const card = document.createElement("div");

    card.className = "p-6 bg-white shadow rounded";

    card.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
    `;
    projectsContainer.appendChild(card);
  });
}