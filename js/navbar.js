//navbar
const toggle = document.querySelector("#toggle");
const mobile = document.querySelector(".menu-nav");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  mobile.classList.toggle("active");
});
