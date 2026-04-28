function filterProject(){
    const projectsContainer = document.getElementById("projects-container");
    if(!projectsContainer){
        console.log("Project container not found");
        return;
    }
    const projectFilter = document.createElement("project-filter");
    if(!projectFilter){
        console.log("Project filter not found");
        return;
    }
    projectsContainer.innerHTML="";
    projectsData.forEach(function(project){
        //to create an outer card
        const card=document.createElement("div");
        card.className="p-8 text-center bg-white rounded-3xl shadow-lg";

        //create icon
        const iconBox=document.createElement("div");
        iconBox.className="w-20 h-20 mx-auto mb-4 flex item-center justify-center ";

        //create icon text
        const iconText=document.createElement("span");
        iconText.className="text-2xl text-white font-bold";
        iconText.textContent=project.shortLabel;

        //puts icontext inside iconbox
        iconBox.appendChild(iconText);


        //create the project id
        const projectId=document.createElement("h2");
        projectId.className="text-xl font-bold mb-2";
        projectId.textContent=project.id;

        //create the project name
        const projectName=document.createElement("h2");
        projectName.className="text-xl font-bold mb-2";
        projectName.textContent=project.name;

        //create the project catagory
        const projectCategory=document.createElement("h2");
        projectCategory.className="text-xl font-bold mb-2";
        projectCategory.textContent=project.category;

        //create project description
        const projectDescription=document.createElement("p");
        projectDescription.className="text-sm";
        projectDescription.textContent=project.description;

        //appending all child elements to card
        card.appendChild(iconBox);
        card.appendChild(projectName);
        card.appendChild(projectDescription);
        //append card to projects container
        projectsContainer.appendChild(card);
    });
    console.log("projects container successfully");
}