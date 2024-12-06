// Add an event listener to trigger animation on button click
button.addEventListener('click', () => {
    // Add the class that triggers the animation
    animatedBox.classList.add('animate');

    // Optional: Remove the class after animation completes to allow re-triggering
    setTimeout(() => {
        animatedBox.classList.remove('animate');
    }, 2000); // Match the duration of the animation (2s)
});
