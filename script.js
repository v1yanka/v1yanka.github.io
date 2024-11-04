// Smooth scroll to contact section
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Hamburger Menu for Mobile
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});
