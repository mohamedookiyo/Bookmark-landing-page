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
