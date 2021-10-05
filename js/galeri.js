const nextImg = document.querySelector(".next"),
  prevImg = document.querySelector(".prev"),
  zoom = document.querySelector(".zoom"),
  itemImg = document.querySelectorAll(".gambar"),
  close = document.querySelector(".close"),
  imgZoom = document.querySelector(".zoom-glr");

close.onclick = () => {
  zoom.classList.toggle("active");
};

for (let i = 0; i < itemImg.length; i++) {
  itemImg[i].onclick = (e) => {
    //tampil gambar
    function preview() {
      zoom.classList.toggle("active");
      imgZoom.src = itemImg[i].src;
    }
    preview();
    //tombol sebelum
    function sebelum() {
      prevImg.onclick = () => {
        i--;
        imgZoom.src = itemImg[i].src;
        if (i == 0) {
          prevImg.style.display = "none";
        } else {
          prevImg.style.display = "block";

          nextImg.style.display = "block";
        }
      };
    }
    sebelum();

    //tombol sebelum
    function setelah() {
      nextImg.onclick = () => {
        i++;
        imgZoom.src = itemImg[i].src;
        if (i > itemImg.length - 2) {
          nextImg.style.display = "none";
        } else {
          nextImg.style.display = "block";

          prevImg.style.display = "block";
        }
      };
    }
    setelah();

    if (i == 0) {
      prevImg.style.display = "none";
    } else {
      nextImg.style.display = "block";

      prevImg.style.display = "block";
    }
    if (i > itemImg.length - 2) {
      nextImg.style.display = "none";
    } else {
      nextImg.style.display = "block";

      prevImg.style.display = "block";
    }
  };
}
