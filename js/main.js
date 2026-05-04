// document.addEventListener("DOMContentLoaded",function(){
//     //Render renderSkills
//     renderSkills();
//     initModal();
//     initContactValidation();
//     initThemeToggle();
//     filterProject();
//     searchProject();
//     updateLanguage();
//     createProjectCard();
//     typeEffect();
//     openProject();
//     showToast();
//     switchLang();
//     fetchGitHubProjects();
//     displayProjects(repos);





    

//     console.log("Portfolio Loaded Successfully 🚀");



// })
document.addEventListener("DOMContentLoaded", function () {

    initModal();              // keep this FIRST
    initContactValidation();

    renderSkills();
    initThemeToggle();
    initProjectFilter();
    filterProjects();
    initBackToTop();
    initTypingAnimation();
    initScrollSpy();

});