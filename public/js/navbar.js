const ham = document.querySelector(".nav__ham");
const menu = document.querySelector("#mennu");

ham.addEventListener("click", () => {
  menu.classList.toggle("d-none");
});
