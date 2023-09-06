const openBtn = document.getElementById("open-btn");
const modalContainer = document.getElementById("modal-container");
const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", function() {
  modalContainer.style.display = "none";
  openBtn.style.display = "block";
});

window.addEventListener("click", function(e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
    openBtn.style.display = "block";
  }
});