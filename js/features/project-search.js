function createProjectCard(project) {
    const card = document.createElement("div");

    card.className = "bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden";

    card.innerHTML = `
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
            <p class="text-gray-500 mb-4">${project.description}</p>

            <div class="flex flex-wrap gap-2 mb-4">
                ${project.tech.map(t => `
                    <span class="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                        ${t}
                    </span>`).join("")}
            </div>

            <div class="flex justify-between items-center">
                <button onclick="openProject('${project.title}','${project.description}')"
                    class="text-blue-600 font-medium hover:underline">
                    View Details →
                </button>

                <a href="${project.link}" target="_blank"
                    class="text-sm text-gray-600 hover:text-black">
                    Live ↗
                </a>
            </div>
        </div>
    `;

    return card;
}