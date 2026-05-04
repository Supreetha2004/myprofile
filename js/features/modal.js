// const openBtn = document.getElementById("openModal");
// const modal = document.getElementById("modal");
// const closeBtn = document.getElementById("closeModal");

// // OPEN
// openBtn.onclick = function () {
//   modal.style.display = "flex";
// };

// // CLOSE (X)
// closeBtn.onclick = function () {
//   modal.style.display = "none";
// };

// // CLOSE when clicking outside
// window.onclick = function (e) {
//   if (e.target === modal) {
//     modal.style.display = "none";
//   }
// };
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