// Display the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Function to fade in the message section
document.addEventListener('DOMContentLoaded', function () {
  const messageSection = document.querySelector('.message-section');
  messageSection.style.opacity = 0;
  messageSection.style.transition = 'opacity 2s ease-in-out';

  setTimeout(() => {
    messageSection.style.opacity = 1;
  }, 1000);
});

// Function to play multiple videos in the hero section
document.addEventListener('DOMContentLoaded', function () {
  const videos = [
    'images/V1.mp4',
    'images/V2.mp4',
    'images/V3.mp4',
   
  ];
  
  let currentVideoIndex = 0;
  const heroVideo = document.querySelector('.hero-video');
  
  heroVideo.src = videos[currentVideoIndex];
  heroVideo.play();
  
  heroVideo.addEventListener('ended', function () {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    heroVideo.src = videos[currentVideoIndex];
    heroVideo.play();
  });
});
