const translations = {
    en: {
        title: "Supreetha C.R",
        role: "Full-Stack developer | MERN enthusiast | Competitive Programmer",
        projects: "My Projects",
        skills: "Skills",
        contact: "Contact Me",
        searchPlaceholder: "Search projects..."
    },
    kn: {
        title: "ಸುಪ್ರೀತಾ ಸಿ.ಆರ್",
        role: "ಫುಲ್-ಸ್ಟಾಕ್ ಡೆವಲಪರ್ | MERN ಆಸಕ್ತಿ | ಸ್ಪರ್ಧಾತ್ಮಕ ಪ್ರೋಗ್ರಾಮರ್",
        projects: "ನನ್ನ ಪ್ರಾಜೆಕ್ಟ್ಗಳು",
        skills: "ಕೌಶಲ್ಯಗಳು",
        contact: "ನನ್ನನ್ನು ಸಂಪರ್ಕಿಸಿ",
        searchPlaceholder: "ಪ್ರಾಜೆಕ್ಟ್ ಹುಡುಕಿ..."
    },
    hi: {
    title: "सुप्रीथा सी.आर",
    role: "फुल-स्टैक डेवलपर | MERN उत्साही | प्रतिस्पर्धी प्रोग्रामर",
    projects: "मेरे प्रोजेक्ट्स",
    skills: "कौशल",
    contact: "मुझसे संपर्क करें",
    searchPlaceholder: "प्रोजेक्ट खोजें..."
}
};
let currentLang = "en";
const langToggle = document.getElementById("lang-toggle");

function updateLanguage(lang) {
    currentLang = lang;

    document.querySelector("h1").textContent = translations[lang].title;
    document.querySelector("p").textContent = translations[lang].role;
    document.querySelector("#projects h2").textContent = translations[lang].projects;
    document.querySelector("#skills h2").textContent = translations[lang].skills;
    document.querySelector("#contact-modal h3").textContent = translations[lang].contact;

    document.getElementById("project-search").placeholder = translations[lang].searchPlaceholder;
}
langToggle.addEventListener("click", function () {
    const newLang = currentLang === "en" ? "kn" : "en";
    updateLanguage(newLang);
});