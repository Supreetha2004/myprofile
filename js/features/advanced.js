// ===== Scroll Progress Bar =====
window.addEventListener("scroll", function () {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / height) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
});

// ===== Typing Animation =====
const roles = [
    "Full-Stack Developer",
    "MERN Enthusiast",
    "Competitive Programmer"
];

let i = 0, j = 0, current = "", isDeleting = false;

function typeEffect() {
    current = roles[i];

    if (!isDeleting) {
        document.getElementById("typing-text").textContent = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        document.getElementById("typing-text").textContent = current.substring(0, j--);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// ===== Back to Top =====
const backBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backBtn.classList.remove("hidden");
    } else {
        backBtn.classList.add("hidden");
    }
});

backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Smooth Scroll =====
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// ===== Project Modal =====
function openProject(title, desc) {
    document.getElementById("project-title").textContent = title;
    document.getElementById("project-desc").textContent = desc;
    document.getElementById("project-modal").classList.remove("hidden");
}

document.getElementById("project-close").onclick = () => {
    document.getElementById("project-modal").classList.add("hidden");
};

// ===== Toast =====
function showToast() {
    const toast = document.getElementById("toast");
    toast.classList.remove("hidden");
    setTimeout(() => toast.classList.add("hidden"), 3000);
}

// Hook into form submit
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    showToast();
});

// ===== Theme Persistence =====
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("bg-black", "text-white");
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("bg-black");
    document.body.classList.toggle("text-white");

    if (document.body.classList.contains("bg-black")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});