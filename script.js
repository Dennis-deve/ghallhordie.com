
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
