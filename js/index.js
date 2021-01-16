/***** FEATURES section *****/

// Indicators and tabs [array]
const tabIndicators = document.querySelectorAll("[data-tab-target]");
const tabs = document.querySelectorAll("[data-tab-content]");

// Loop through indicators and add click event handler
tabIndicators.forEach((tabIndicator) => {
  tabIndicator.addEventListener("click", () => {
    // Remove the active class from the previous indicator
    tabIndicators.forEach((tabIndicator) =>
      tabIndicator.classList.remove("features__indicator--active")
    );

    // Add active class to current indicator
    tabIndicator.classList.add("features__indicator--active");

    // Loop through tabs and remove the active class
    tabs.forEach((tab) => {
      tab.classList.remove("features__tab--active");
    });

    // Current tab
    const activeTab = document.querySelector(tabIndicator.dataset.tabTarget);
    // Add active class the to current tab
    activeTab.classList.add("features__tab--active");
  });
});

/***** FAQ section *****/

//  Questions, icons and answers [array]
const faqQuestions = document.querySelectorAll(".faq__btn");
const faqIcons = document.querySelectorAll(".faq__image");
const faqAnswers = document.querySelectorAll(".faq__answer");

// Loop through buttons and add click event handler
faqQuestions.forEach((faqQuestion) => {
  faqQuestion.addEventListener("click", () => {
    // Current question icon
    const CurrentFaqIcon = faqQuestion.children[0].children[0];

    // Current question answer
    const currentAnswerToShow = faqQuestion.parentElement.nextElementSibling;

    // Loop through icons and remove the active class
    faqIcons.forEach((faqIcon) => {
      // If and only if user clicks another faq question
      if (faqIcon !== CurrentFaqIcon) {
        faqIcon.classList.remove("active");
      }
    });

    // Loop through answers and remove the active class
    faqAnswers.forEach((faqAnswer) => {
      // If and only if user clicks another faq question
      if (faqAnswer !== currentAnswerToShow) {
        faqAnswer.classList.remove("active");
      }
    });

    // Rotate icon and change stroke color
    CurrentFaqIcon.classList.toggle("active");

    // Show answer
    currentAnswerToShow.classList.toggle("active");
  });
});

/***** FORM section *****/

// Form variables
const form = document.querySelector("form");
const formGroup = document.querySelector(".form__group");
const formIcon = document.querySelector(".form__icon");
const formError = document.querySelector(".form__group-error");

// Submit event handler
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Input field value
  let inputValue = document.querySelector("input[type='email']").value;

  if (inputValue === "") {
    // Show error message
    formGroup.classList.add("active");
    formIcon.style.display = "block";
    formError.classList.add("active");
  } else {
    formGroup.classList.remove("active");
    formIcon.style.display = "none";
    formError.classList.remove("active");

    // Clear input field
    document.querySelector("input[type='email']").value = "";

    setTimeout(() => {
      alert("Thanks for contacting us!");
    }, 100);
  }
});
