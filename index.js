const btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.target.style.color = "green";
  });
});
