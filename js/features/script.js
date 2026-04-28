async function fetchGitHubProjects() {
    try {
        const response = await fetch("https://api.github.com/users/Supreetha2004/repos");
        const repos = await response.json();

        displayProjects(repos);
    } catch (error) {
        console.log("Error:", error);
    }
}

function displayProjects(repos) {
    const container = document.getElementById("projects-container");

    repos.forEach(repo => {
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description"}</p>
            <a href="${repo.html_url}" target="_blank">View Code</a>
        `;

        container.appendChild(div);
    });
}

fetchGitHubProjects();