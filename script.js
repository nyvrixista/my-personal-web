document.addEventListener('DOMContentLoaded', () => {
  
  // FUNCTION 1: Dynamic Time-of-Day Greeting
  const greetingHeading = document.getElementById('tagguy');
  if (greetingHeading) {
    const currentHour = new Date().getHours();
    let greeting = "Hello! Welcome to my personal site!";

    if (currentHour < 12) {
      greeting = "☀️ Good morning! Welcome to my personal site!";
    } else if (currentHour < 18) {
      greeting = "🌤️ Good afternoon! Welcome to my personal site!";
    } else {
      greeting = "🌙 Good evening! Welcome to my personal site!";
    }
    
    greetingHeading.textContent = greeting;
  }

  // FUNCTION 2: Dynamic Copyright Year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // FUNCTION 3: Smooth Scroll to Top
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});




