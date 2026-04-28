function renderSkills(){
    const skillsContainer=document.getElementById("skills-container")
    if(!skillsContainer){
        console.log("skills container not found");
        return;
    }


    skillsContainer.innerHTML="";
    skillsData.forEach(function(skill){
        //to create an outer card
        const card=document.createElement("div");
        card.className="p-8 text-center bg-white rounded-3xl shadow-lg";


        //create icon
        const iconBox=document.createElement("div");
        iconBox.className="w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex item-center justify-center ";

        //create icon text
        const iconText=document.createElement("span");
        iconText.className="text-2xl text-white font-bold";
        iconText.textContent=skill.shortLabel;

        //puts icontext inside iconbox
        iconBox.appendChild(iconText);

        //create the skill name
        const skillName=document.createElement("h3");
        skillName.className="text-xl font-bold mb-2";
        skillName.textContent=skill.name;

        //create skill description
        const skillDescription=document.createElement("p");
        skillDescription.className="text-sm";
        skillDescription.textContent=skill.description;

        //appending all child elements to card
        card.appendChild(iconBox);
        card.appendChild(skillName);
        card.appendChild(skillDescription);
        //append card to skills container
        skillsContainer.appendChild(card);
    });
    console.log("skills rendered successfully");
    
}