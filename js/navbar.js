//navbar toggle
const toggle = document.querySelector("#toggle");
const mobile = document.querySelector(".menu-nav");
const listMenu = document.querySelectorAll(".list-menu");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  mobile.classList.toggle("active");
  
});

//link active 
listMenu.forEach((list) => { 
  list.addEventListener("click",function(){
    listMenu.forEach((l) => { 
      l.classList.remove("active");
    });
    list.classList.add("active");
  })
})



/*scrolll */
const menuLink = document.querySelectorAll(".menuList a");

menuLink.forEach((l) => { 
  l.addEventListener("click",function(e){
    e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
        top: offsetTop-80,
        behavior: "smooth"
      });
  })
});

//jika ingin mengambil posisi scroll

 // window.addEventListener("scroll",()=>{
//   let posisi=document.documentElement.scrollTop;
//   console.log(posisi);
//   if(posisi > 800){
//     window.location.href = "profile.html";
//   }
// });


// listMenu.addEventListener("click", () => {
//   toggle.classList.toggle("active");
//   mobile.classList.toggle("active");
  
// });
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
