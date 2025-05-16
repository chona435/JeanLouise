document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("themeToggle");
  const body = document.body;

  // Load saved theme from localStorage
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const theme = body.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem("theme", theme);
  });
});

window.addEventListener('DOMContentLoaded', () => {
    const nameField = document.getElementById('userName');
    const emailField = document.getElementById('userEmail');
    const messageField = document.getElementById('userMessage');
    const contactForm = document.getElementById('contactForm');

    const modal = document.getElementById('popupModal');
    const closeBtn = document.querySelector('.close-btn');

    // Load saved data
    nameField.value = localStorage.getItem('contactName') || '';
    emailField.value = localStorage.getItem('contactEmail') || '';
    messageField.value = localStorage.getItem('contactMessage') || '';

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Save to localStorage
      localStorage.setItem('contactName', nameField.value);
      localStorage.setItem('contactEmail', emailField.value);
      localStorage.setItem('contactMessage', messageField.value);

      // Show modal popup
      modal.style.display = 'block';
    });

    // Close modal on click of the X button
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Close modal if user clicks outside the modal content
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });