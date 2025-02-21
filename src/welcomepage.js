// Example: After the welcome animation, you could redirect or load new content.
document.addEventListener('DOMContentLoaded', () => {
    const welcome = document.getElementById('welcome');
  
    // Listen for the end of the animation
    welcome.addEventListener('animationend', () => {
      // Here you could load a new page, hide the welcome element, or perform other actions.
      console.log('Welcome animation finished');
      // For example, you could remove the welcome screen from the DOM:
      // welcome.style.display = 'none';
    });
  });
  