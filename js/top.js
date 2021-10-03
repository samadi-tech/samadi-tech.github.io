var btn = $("#top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
