const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator");
let index = 0;

prev.addEventListener("click", function () {
  prevSLide();
  updateIndicator();
  reset();
});
next.addEventListener("click", function () {
  nextSlide();
  updateIndicator();
  reset();
});

function indicatorSlide() {
  for (let i = 0; i < slides.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = i + 1;
    div.setAttribute("onClick", "indicatorCLick(this)");
    div.id = i;
    if (i == 0) {
      div.className = "active";
    }
    indicator.appendChild(div);
  }
}
indicatorSlide();

function indicatorCLick(e) {
  console.log(e);
  index = e.id;
  changeSlide();
  updateIndicator();
}

function updateIndicator() {
  for (let i = 0; i < indicator.children.length; i++) {
    indicator.children[i].classList.remove("active");
  }
  indicator.children[index].classList.add("active");
}

function prevSLide() {
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  changeSlide();
}
function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeSlide();
}
function changeSlide() {
  for (let j = 0; j < slides.length; j++) {
    slides[j].classList.remove("active");
  }
  slides[index].classList.add("active");
}
function reset() {
  clearInterval(timer);
  timer = setInterval(autoPlay, 7000);
}
function autoPlay() {
  nextSlide();
  updateIndicator();
}
let timer = setInterval(autoPlay, 7000);
