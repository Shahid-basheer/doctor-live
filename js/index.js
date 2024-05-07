function loadReCaptchaScript() {
  var script = document.createElement("script");
  script.src =
    "https://www.google.com/recaptcha/api.js?render=6LeQTdQpAAAAAH6dqcMl-GKG7O0ntz-2w1fY6uEo";
  document.head.appendChild(script);
}
loadReCaptchaScript();

var topImg = "./assets/img/innovative1.svg";
var whatsapp = document.querySelector(".whatsapp-icon");
var whatsapp1 = document.querySelector(".whatsapp-icon1");
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

// Innovative module for desktop
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
    img.src = "./assets/img/innovative2.svg";
    img.style.transition = "2s linear";
    img.style.width = "100%";
    img.style.height = "20rem";
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

// Counter for desktop
window.addEventListener("scroll", () => {
  if (window.innerWidth > 1000) {
    var counterClient = document.querySelector("#counter-client");
    var counterPatient = document.querySelector("#counter-patient");
    var counterReduction = document.querySelector("#counter-reduction");
    var counterAdministration = document.querySelector(
      "#counter-administration"
    );
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
  }
});
// Counter for mobile
window.addEventListener("scroll", () => {
  if (window.innerWidth < 1000) {
    var counterClient = document.querySelector("#counter-client1");
    var counterPatient = document.querySelector("#counter-patient1");
    var counterReduction = document.querySelector("#counter-reduction1");
    var counterAdministration = document.querySelector(
      "#counter-administration1"
    );
    var counterRect = document.querySelector(".mobile-strategic-flex");
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
  }
});

// Success Unveiled for desktop
document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.getElementById("carouselExampleAutoplaying");
  var buttons = document.querySelectorAll(".externalButton");
  if (window.innerWidth > 1000) {
    carousel.addEventListener("slide.bs.carousel", function (event) {
      var activeIndex = event.to;
      buttons.forEach(function (button) {
        button.classList.remove("active-button");
      });
      buttons[activeIndex].classList.add("active-button");
    });
  }
});
// Success Unveiled for mobile
document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.getElementById("carouselExampleAutoplaying1");
  var buttons = document.querySelectorAll(".externalButton1");
  if (window.innerWidth < 1000) {
    carousel.addEventListener("slide.bs.carousel", function (event) {
      var activeIndex = event.to;
      buttons.forEach(function (button) {
        button.classList.remove("active-button");
      });
      buttons[activeIndex].classList.add("active-button");
    });
  }
});

// Tailored Module for Desktop
document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.getElementById("carouselExampleIndicators");
  var svgs = document.querySelectorAll(".desktop button > svg ");
  var prevActiveSVG = null;
  if (window.innerWidth > 1000) {
    carousel.addEventListener("slide.bs.carousel", function (event) {
      var activeIndex = event.to;
      svgs[0].classList.remove("active-svg");
      if (prevActiveSVG) {
        prevActiveSVG.style.fill = "";
        var prevPaths = prevActiveSVG.querySelectorAll("path");
        prevPaths.forEach(function (path) {
          path.style.fill = "";
        });
      }
      var newActiveSVG = svgs[activeIndex];
      newActiveSVG.style.fill = "blue";
      prevActiveSVG = newActiveSVG;
      var newPaths = newActiveSVG.querySelectorAll("path");
      newPaths.forEach(function (path) {
        path.style.fill = "#fff";
      });
      svgs[activeIndex].style.fill = "#121891";
    });
  }
});
// Tailored Module for Mobile
document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.getElementById("carouselExampleIndicators1");
  var svgs = document.querySelectorAll(".mobile button > svg");
  var prevActiveSVG = null;
  if (window.innerWidth < 1000) {
    console.log("mobile", svgs);
    carousel.addEventListener("slide.bs.carousel", function (event) {
      var activeIndex = event.to;
      svgs[0].classList.remove("active-svg");
      if (prevActiveSVG) {
        prevActiveSVG.style.fill = "";
        var prevPaths = prevActiveSVG.querySelectorAll("path");
        prevPaths.forEach(function (path) {
          path.style.fill = "";
        });
      }
      var newActiveSVG = svgs[activeIndex];
      newActiveSVG.style.fill = "blue";
      prevActiveSVG = newActiveSVG;
      var newPaths = newActiveSVG.querySelectorAll("path");
      newPaths.forEach(function (path) {
        path.style.fill = "#fff";
      });
      svgs[activeIndex].style.fill = "#121891";
    });
  }
});

// whatsapp icon show for desktop

whatsapp.style.display = "none";
document.addEventListener("scroll", (event) => {
  var scrollY = window.scrollY;
  if (scrollY > 1500) {
    whatsapp.style.display = "block";
  } else {
    whatsapp.style.display = "none";
  }
});
// whatsapp icon show for mobile

whatsapp1.style.display = "none";
document.addEventListener("scroll", (event) => {
  var scrollY = window.scrollY;
  if (scrollY > 1500) {
    whatsapp1.style.display = "block";
  } else {
    whatsapp1.style.display = "none";
  }
});

// Form submission

var form1 = document.getElementById("my-form1");
var form2 = document.getElementById("my-form2");
var form3 = document.getElementById("my-form3");
var form4 = document.getElementById("my-form4");

async function handleSubmit(event) {
  event.preventDefault();
  var token;
  try {
    token = await grecaptcha.execute(
      "6LeQTdQpAAAAAH6dqcMl-GKG7O0ntz-2w1fY6uEo",
      {
        action: "submit",
      }
    );

    if (token) {
      console.log("reCAPTCHA token",token);
    } else {
      console.error("Error: Invalid reCAPTCHA token.", token);
    }
  } catch (error) {
    console.error("Error executing reCAPTCHA:", error);
  }
  console.log(token,'token')
  if (!token.length) {
    return;
  }
  console.log("success recaptcha");
  var status = document.getElementById("my-form-status");
  var modal = document.querySelector(".thanks-modal");
  var thanksModal1 = document.querySelector(".thanks-modal1");
  var modal1 = document.querySelector(".modal1");
  var modal2 = document.querySelector(".modal2");
  var modalBackDrop = document.querySelector(".modal-backdrop");
  var closeButton = document.querySelectorAll(".close");
  closeButton.forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.remove("show");
      modal.style.display = "none";
      modal.setAttribute("aria-modal", "false");
      thanksModal1.classList.remove("show");
      thanksModal1.style.display = "none";
      thanksModal1.setAttribute("aria-modal", "false");
      modal1.classList.remove("show");
      modal2.classList.remove("show");
      modalBackDrop.classList.remove("show");
      modal1.style.display = "none";
      modal2.style.display = "none";
      modalBackDrop.style.display = "none";
      modal1.setAttribute("aria-modal", "false");
      modal2.setAttribute("aria-modal", "false");
    });
  });

  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: "post",
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        // For desktop
        modal.classList.add("show");
        modal.style.display = "block";
        modal.setAttribute("aria-modal", "true");
        modal.addEventListener("click", function (e) {
          if (e.target === modal) {
            modal.classList.remove("show");
            modal.style.display = "none";
            modal.setAttribute("aria-modal", "false");
            window.location.reload();
          }
          console.log("reload.............", e.target, "    ", modal);
        });
        // For Mobile
        thanksModal1.classList.add("show");
        thanksModal1.style.display = "block";
        thanksModal1.setAttribute("aria-modal", "true");
        thanksModal1.addEventListener("click", function (e) {
          if (e.target === thanksModal1) {
            thanksModal1.classList.remove("show");
            thanksModal1.style.display = "none";
            thanksModal1.setAttribute("aria-modal", "false");
            window.location.reload();
          }
        });
        form1.reset();
        form2.reset();
        form3.reset();
        form4.reset();
        modal1.classList.remove("show");
        modal2.classList.remove("show");
        modalBackDrop.classList.remove("show");
        modal1.style.display = "none";
        modal2.style.display = "none";
        modalBackDrop.style.display = "none";
        modal1.setAttribute("aria-modal", "false");
        modal2.setAttribute("aria-modal", "false");
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form1.addEventListener("submit", handleSubmit);
form2.addEventListener("submit", handleSubmit);
form3.addEventListener("submit", handleSubmit);
form4.addEventListener("submit", handleSubmit);
// Animation why choose for desktop

var animationTriggered = false;

document.addEventListener("scroll", function () {
  if (!animationTriggered) {
    var scrollTop = window.scrollY;
    var leftDivs = document.querySelectorAll(".left-slide");
    var rightDivs = document.querySelectorAll(".right-slide");
    var anyInViewport =
      Array.from(leftDivs).some(function (leftDiv) {
        var rect = leftDiv.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
      }) ||
      Array.from(rightDivs).some(function (rightDiv) {
        var rect = rightDiv.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
      });

    if (anyInViewport) {
      Array.from(leftDivs).forEach(function (leftDiv) {
        leftDiv.style.left = "0";
        leftDiv.style.animation = "leftSlide linear 2s";
      });
      Array.from(rightDivs).forEach(function (rightDiv) {
        rightDiv.style.right = "0";
        rightDiv.style.animation = "rightSlide linear 2s";
      });
      animationTriggered = true;
    }
  }
});

// animation why choose for mobile
var animationTriggeredMobile = false;

document.addEventListener("scroll", function () {
  if (!animationTriggeredMobile) {
    var scrollTop = window.scrollY;
    var leftDivs = document.querySelectorAll(".left-slide-mobile");
    var rightDivs = document.querySelectorAll(".right-slide-mobile");
    var anyInViewport =
      Array.from(leftDivs).some(function (leftDiv) {
        var rect = leftDiv.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
      }) ||
      Array.from(rightDivs).some(function (rightDiv) {
        var rect = rightDiv.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
      });

    if (anyInViewport) {
      Array.from(leftDivs).forEach(function (leftDiv) {
        leftDiv.style.left = "0";
        leftDiv.style.animation = "leftSlide linear 2s";
      });
      Array.from(rightDivs).forEach(function (rightDiv) {
        rightDiv.style.right = "0";
        rightDiv.style.animation = "rightSlide linear 2s";
      });
      animationTriggeredMobile = true;
    }
  }
});
