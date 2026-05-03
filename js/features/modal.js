const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");

// OPEN
openBtn.onclick = function () {
  modal.style.display = "flex";
};

// CLOSE (X)
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// CLOSE when clicking outside
window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};