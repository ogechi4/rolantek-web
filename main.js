$(document).ready(function() {
    // Initialize AOS
    AOS.init();
    
    // Your other JavaScript code goes here...
  });
  
  // Wait for the DOM to be ready
$(document).ready(function() {
  // Select all navigation links
  const navLinks = document.querySelectorAll('nav ul li a');

  // Add click event listeners to the links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Uncheck the checkbox to close the navigation menu
      document.getElementById('check').checked = false;
    });
  });
});
