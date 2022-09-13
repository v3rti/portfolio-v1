const menu = document.querySelector("#menu");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", e => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
})