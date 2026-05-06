function initModal() {
    const trigger = document.getElementById("modal-trigger");
    const modal = document.getElementById("contact-modal");
    const close = document.getElementById("modal-close");

    trigger.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });

    close.addEventListener("click", () => {
        modal.classList.add("hidden");
        
    });
}