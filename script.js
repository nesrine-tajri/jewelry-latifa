


function sendWhatsAppMessage(event, element) {
  event.preventDefault(); // Prevent the default link behavior

  const phoneNumber = "212695150956"; // Your WhatsApp number


  
 // Get the product details dynamically
    const productContainer = element.closest(".product-idea");
    const productName = productContainer.querySelector(".product-name").innerText;
    const productPrice = productContainer.querySelector(".price").innerText;
    const productImage = productContainer.querySelector(".product-image").src;

    const message = `Hello, I would like to order the product: ${productName}. 
    Price: ${productPrice}.
    Here is the product image: ${productImage}`;
  // Check if the user is on mobile or desktop
  const isMobile = /iPhone|Android/i.test(navigator.userAgent);

  // Create the WhatsApp link
  const whatsappLink = isMobile
      ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  // Open the WhatsApp link
  window.open(whatsappLink, "_blank");
}




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