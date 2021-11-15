//navbar toggle
const toggle = document.querySelector("#toggle");
const mobile = document.querySelector(".menu-nav");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  mobile.classList.toggle("active");
});

// auto hide
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("nav").style.top = "0";
//   } else {
//     document.getElementById("nav").style.top = "-200px";
//   }
//   prevScrollpos = currentScrollPos;
// };
