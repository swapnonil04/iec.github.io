document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate server-side authentication (replace this with your actual authentication logic)
    if (authenticateUser(username, password)) {
      // Store user data in local storage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      // Redirect or perform other actions after successful login
      alert('Login successful!');
      window.location.href = 'acc.html';
    } else {
      alert('Invalid username or password');
    }
  });

  function authenticateUser(username, password) {
    // Replace this with your actual authentication logic
    // For simplicity, we'll use a hardcoded username and password
    return username === 'gopal' && password === 'gopalisgay';
  }
});
