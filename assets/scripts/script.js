const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
function toggleMenu() {
  mobileMenu.classList.toggle("hidden");
}

menuBtn.addEventListener("click", () => toggleMenu());
mobileMenu.addEventListener("click", (e) => {
  console.log(e.target.nodeName);
  if (e.target.nodeName != "DIV") toggleMenu();
});

// ------------------------------------------------------------------------------------------------

const Modal = document.getElementById("modal");

function toggleModal() {
  Modal.classList.toggle("hidden");
}

document.body.querySelectorAll("button").forEach((button) =>
  button.addEventListener("click", () => {
    console.log(button.type);
    switch (button.type) {
      case "submit": {
        Modal.querySelector("h2").innerText = "Ожидайте обратный звонок!";
        Modal.querySelector("form").remove();
        break;
      }
      default:
        toggleModal();
    }
  })
);

Modal.addEventListener("click", (e) => {
  if (e.target.id == "closeModalBtn") {
    toggleModal();
  }
});
