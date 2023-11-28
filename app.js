document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (authenticateUser(username, password)) {
      // Store user data in local storage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      alert('Login successful!');
      window.location.href = 'acc.html';
    } else {
      alert('Invalid username or password');
    }
  });

  function authenticateUser(username, password) {
    return username === 'user123' && password === 'password123';
  }
});
