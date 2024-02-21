document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const toggleNavButton = document.getElementById('toggleNav');
    const nav = document.querySelector('nav');
  
    toggleNavButton.addEventListener('click', function() {
      nav.classList.toggle('show');
    });
  });

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var formMessage = document.getElementById('formMessage');
  
    if (!email || !message) {
      event.preventDefault(); // Prevent form submission
      formMessage.innerHTML = 'Please fill in all fields.';
      formMessage.style.color = 'red';
    } else {
      formMessage.innerHTML = ''; // Clear any previous error message
    }
  });
  