const scriptURL = "https://script.google.com/macros/s/AKfycbzIJvx55k-WXfHIDjq_8UEbTb60unEL9Yy3GFjsgFXMnal7apQPK3jye8djcaG2QKoGzw/exec";
const form = document.forms["samadi-tech-form"];

form.addEventListener("submit", (e) => {
  const notif = document.querySelector(".notif");
  notif.classList.toggle("active");
  console.log(notif);

  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      notif.classList.toggle("active");
      alert("Pesan anda sudah dikirim.");
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
