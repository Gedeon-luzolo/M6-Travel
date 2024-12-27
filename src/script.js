// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-navy/95", "backdrop-blur-sm");
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-navy/95", "backdrop-blur-sm");
  }
});

// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
}
