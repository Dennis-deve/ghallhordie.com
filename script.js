<<<<<<< HEAD
// Array of background images from the internet


// Initialize the first background on page load
document.addEventListener('DOMContentLoaded', changeBackground);

// Display the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Function to fade in the encouragement section
document.addEventListener('DOMContentLoaded', function () {
  const encouragementSection = document.querySelector('.encouragement-section');
  encouragementSection.style.opacity = 0;
  encouragementSection.style.transition = 'opacity 2s ease-in-out';

  // Delay the appearance by 1 second for a smooth effect
  setTimeout(() => {
    encouragementSection.style.opacity = 1;
  }, 1000);
});
=======
// List of background image URLs
const images = [
    "https://images.unsplash.com/photo-1508919801845-fc2ae1bc45c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Dark, subtle hearts background
    "https://images.unsplash.com/photo-1516275787386-4e95e79ea4e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Dark purple and pink glow
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Romantic hearts and stars
    "https://images.unsplash.com/photo-1533142266415-ac591a4a3f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"  // Elegant dark gradient with soft glow
  ];
  
  // Select the background container
  const backgroundContainer = document.querySelector('.background-container');
  let currentImageIndex = 0;
  
  // Function to change the background image
  function changeBackground() {
    backgroundContainer.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  
  // Set interval to change the background every 5 seconds
  setInterval(changeBackground, 5000); // Change every 5 seconds
  
  // Initial background load
  changeBackground();
  
  // Display the current year in the footer
  document.getElementById("year").textContent = new Date().getFullYear();
  
>>>>>>> 5d7b3fc4a5ca818ae08ed3c4c26ba73aae079798
