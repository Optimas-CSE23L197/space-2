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

// active navigation
let navLinks = document.querySelectorAll(".nav-menu ul li a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function (e) {
    for (let j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("activee");
    }
    this.classList.add("activee");
  });
}

// validate name
function validateName(name) {
  const namePattern = /^[A-Za-z\s'-]+$/;

  if (!namePattern.test(name.trim())) {
    return false; // if name is invalid then it return error
  }
  return true; // else return true
}

// validate the subscribe form
let fullName = document.querySelector("#f_name");
let email = document.querySelector("#email");
let submitBtn = document.querySelector("#subscribe-submit");
let form = document.querySelector("#subscribeForm");

// error
let nameError = document.querySelector("#nameError");
let emailError = document.querySelector("#emailError");
let optionError = document.querySelector("#optionError");
let success = document.querySelector("#success");

// handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Always clear old error messages
  nameError.style.display = "none";
  emailError.style.display = "none";
  optionError.style.display = "none";
  success.style.display = "none";

  // catch all value
  const nameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  let option = document.querySelector('input[name="interest"]:checked');

  if (nameValue === "") {
    nameError.style.display = "block";
    nameError.innerText = "Name is missing";
    return;
  } else if (!validateName(nameValue)) {
    nameError.style.display = "block";
    nameError.innerText = "Enter a valid name";
    return;
  } else if (nameValue.length < 3) {
    nameError.style.display = "block";
    nameError.innerText = "Name is too short";
    return;
  }

  if (emailValue === "") {
    emailError.style.display = "block";
    emailError.innerText = "Email is missing";
    return;
  } else if (!emailValue.includes("@")) {
    emailError.style.display = "block";
    emailError.innerText = "Enter a valid email";
    return;
  } else if (emailValue.length < 5) {
    emailError.style.display = "block";
    emailError.innerText = "Email is too short";
    return;
  }

  if (!option) {
    optionError.style.display = "block";
    optionError.innerText = "Chose an option";
    return;
  }

  success.style.display = "block";
  success.innerText = "Submit Successfully!";
  form.submit();
});

// click to top
let scrollBtn = document.querySelector("#scrollBtn");

window.addEventListener("scroll", function () {
  // page scroll
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  // display area height
  let windowHeight = this.window.innerHeight;
  // total document height
  let docHeight = this.document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= docHeight - 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
