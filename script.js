document.getElementById("contactButton").addEventListener("click", function () {
    // Replace the number with your WhatsApp phone number in international format (without "+" or leading zeroes)
    const phoneNumber = "212618800217"; // Example: 212123456789 for Morocco
    const message = "Hello, I would like to inquire about your products.";
    
    // WhatsApp API link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Redirect the user to WhatsApp
    window.open(whatsappLink, "_blank");
  });



// Get elements
const options = document.getElementById("options");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

// Toggle menu visibility and change the icon
function toggleMenu() {
  if (options.style.display === "flex") {
    options.style.display = "none"; // Hide the menu
    resetIcons();
  } else {
    options.style.display = "flex"; // Show the menu
    showCloseIcon(); 
  }
}
// Show the close icon
function showCloseIcon() {
  menuIcon.style.display = "none"; // Hide the menu icon
  closeIcon.style.display = "block"; // Show the close icon
}

// Reset to the menu icon
function resetIcons() {
  options.style.display = "none"; // Hide the menu
  menuIcon.style.display = "block"; // Show the menu icon
  closeIcon.style.display = "none"; // Hide the close icon
}


// Listen for scroll events
window.addEventListener("scroll", () => {
  if (options.style.display === "flex") {
    resetIcons(); // Reset to the menu icon and hide the dropdown
  }
});