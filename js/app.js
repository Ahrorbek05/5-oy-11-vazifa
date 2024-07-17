let users = JSON.parse(localStorage.getItem('users')) || [];

function Login() {
  document.getElementById('register-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}

function Register() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('register-form').style.display = 'block';
}

function register() {
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  if (username && password) {
    const userExists = users.find(user => user.username === username);
    if (userExists) {
      alert('This user already exists');
    } else {
      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful');
      Login();
    }
  } else {
    alert('Please fill in all fields');
  }
}

function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  if (username && password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      alert('Login successful');
      Register();
    } else {
      alert('Incorrect username or password');
    }
  } else {
    alert('Please fill in all fields');
  }
}
if (users.length > 0) {
  Login();
}