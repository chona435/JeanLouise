function Signup(){
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorDiv = document.getElementById('error');

    if (!username || !password) {
      errorDiv.textContent = 'All fields are required.';
    } else {
      errorDiv.textContent = '';
      alert('Signed up successfully!');
      window.location.href = "Log_in.html";
    }
  }