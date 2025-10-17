// sticky navbar
let navbar = document.querySelector(".nav-bar");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 74) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// toggle humbarger icon
let humbarger = document.querySelector("#humbarger");
let navMenu = document.querySelector(".nav-menu");
let icon = humbarger.querySelector("i");

humbarger.addEventListener("click", function () {
  navMenu.classList.toggle("show-menu");
  humbarger.classList.toggle("active");

  if (humbarger.classList.contains("active")) {
    icon.classList.replace("fa-bars", "fa-xmark");
  } else {
    icon.classList.replace("fa-xmark", "fa-bars");
  }
});
