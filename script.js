// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
  mainNav.classList.toggle("open");
  const isOpen = mainNav.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu after a navigation link is selected
const navLinks = mainNav.querySelectorAll("a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Keep the copyright year current
document.getElementById("year").textContent = new Date().getFullYear();
