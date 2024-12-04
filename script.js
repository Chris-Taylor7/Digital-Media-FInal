// Get the button and the animated box
const button = document.getElementById('animate-btn');
const animatedBox = document.querySelector('.animated-box');

// Add an event listener to trigger animation on button click
button.addEventListener('click', () => {
    // Add the class that triggers the animation
    animatedBox.classList.add('animate');
});
