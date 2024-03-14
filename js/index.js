var topImg = "../assets/img/top-module-image.png";
var alertBox = document.querySelector("#alert-box-icon");
var alertDiv = document.querySelector("#alert-box-div");
var navbar = document.querySelector(".top-bar");
var shadowBox = document.querySelector("#shadow-box-navbar");
var topCarousel = document.querySelector(".top-carousel");
var countClient = 0;
var countPatient = 0;
var countAdministration = 0;
var countReduction = 0;
alertBox.addEventListener("click", () => {
  alertDiv.style.height = "0";
  alertDiv.style.padding = "0";
  alertDiv.style.overflow = "hidden";
  navbar.style.top = "0rem";
  topCarousel.style.marginTop = "4.2rem";
  shadowBox.style.top = "0rem";
});
window.addEventListener("scroll", function () {
  var box1 = document.querySelector("#box1");
  var box2 = document.querySelector("#box2");
  var box3 = document.querySelector("#box3");
  var img = document.querySelector("#box-img");

  var boxRect1 = box1.getBoundingClientRect();
  var viewportHeight = window.innerHeight;
  var boxRect2 = box2.getBoundingClientRect();
  var viewportHeight = window.innerHeight;
  var boxRect3 = box3.getBoundingClientRect();
  var viewportHeight = window.innerHeight;

  if (
    boxRect1.top < viewportHeight / 2 &&
    boxRect1.bottom > viewportHeight / 2
  ) {
    box1.classList.add("active-box");
    box2.classList.remove("active-box");
    box3.classList.remove("active-box");
    img.src = topImg;
  } else if (
    boxRect2.top < viewportHeight / 2 &&
    boxRect2.bottom > viewportHeight / 2
  ) {
    box2.classList.add("active-box");
    box1.classList.remove("active-box");
    box3.classList.remove("active-box");
    img.src = "../assets/img/pro-lap1.png";
  } else if (
    boxRect3.top < viewportHeight / 2 &&
    boxRect3.bottom > viewportHeight / 2
  ) {
    box3.classList.add("active-box");
    box1.classList.remove("active-box");
    box2.classList.remove("active-box");
    img.src = topImg;
  }
});

// window.addEventListener("scroll", () => {
//   var counterClient = document.querySelector("#counter-client");
//   var counterRect = document.querySelector(".strategic-flex");
//   var countRect = counterRect.getBoundingClientRect();

//   function updateCounterDisplay() {
//     counterClient.textContent = countClient;
//   }

//   function incrementCount() {
//     if (countClient < 10) countClient++;
//     updateCounterDisplay();
//   }

//   if (countRect.top === 487) {
//     console.log(countRect);
//     var interval = setInterval(incrementCount, 10000);
//   } else {
//     // clearInterval(interval);
//   }
// });

window.addEventListener("scroll", () => {
  var counterClient = document.querySelector("#counter-client");
  var counterPatient = document.querySelector("#counter-patient");
  var counterReduction = document.querySelector("#counter-reduction");
  var counterAdministration = document.querySelector("#counter-administration");
  var counterRect = document.querySelector(".strategic-flex");
  var countRect = counterRect.getBoundingClientRect();
  var counterClientInterval;
  var counterPatientInterval;
  var counterReductionInterval;
  var counterAdministrationInterval;

  // CounterClient
  function updateCounterClientDisplay() {
    counterClient.textContent = countClient;
  }

  function incrementCounterClient() {
    if (countClient < 10) {
      countClient++;
      updateCounterClientDisplay();
    } else {
      clearInterval(counterClientInterval);
    }
  }

  if (countRect.top <= window.innerHeight && countRect.bottom >= 0) {
    counterClientInterval = setInterval(incrementCounterClient, 500);
  }

  // CounterPatient
  function updateCounterPatientDisplay() {
    counterPatient.textContent = countPatient;
  }

  function incrementCounterPatient() {
    if (countPatient < 50) {
      countPatient++;
      updateCounterPatientDisplay();
    } else {
      clearInterval(counterPatientInterval);
    }
  }

  if (countRect.top <= window.innerHeight && countRect.bottom >= 0) {
    counterPatientInterval = setInterval(incrementCounterPatient, 500);
  }
  // CounterReduction
  function updateCounterReductionDisplay() {
    counterReduction.textContent = countReduction;
  }

  function incrementCounterReduction() {
    if (countReduction < 30) {
      countReduction++;
      updateCounterReductionDisplay();
    } else {
      clearInterval(counterReductionInterval);
    }
  }

  if (countRect.top <= window.innerHeight && countRect.bottom >= 0) {
    counterReductionInterval = setInterval(incrementCounterReduction, 500);
  }

  // CounterAdministration
  function updateCounterAdministrationDisplay() {
    counterAdministration.textContent = countAdministration;
  }

  function incrementCounterAdministration() {
    if (countAdministration < 40) {
      countAdministration++;
      updateCounterAdministrationDisplay();
    } else {
      clearInterval(counterAdministrationInterval);
    }
  }

  if (countRect.top <= window.innerHeight && countRect.bottom >= 0) {
    counterAdministrationInterval = setInterval(
      incrementCounterAdministration,
      500
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.getElementById("carouselExampleAutoplaying");
  var buttons = document.querySelectorAll(".externalButton");
  carousel.addEventListener("slide.bs.carousel", function (event) {
    var activeIndex = event.to;
    buttons.forEach(function (button) {
      button.classList.remove("active-button");
    });
    console.log(buttons);
    buttons[activeIndex].classList.add("active-button");
  });
});
