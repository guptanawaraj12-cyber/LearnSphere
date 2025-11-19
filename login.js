// Burger menu toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Toggle Login/Register Forms
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginToggle = document.getElementById('loginToggle');
const registerToggle = document.getElementById('registerToggle');

loginToggle.addEventListener('click', () => {
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
  loginToggle.classList.add('active');
  registerToggle.classList.remove('active');
});

registerToggle.addEventListener('click', () => {
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
  loginToggle.classList.remove('active');
  registerToggle.classList.add('active');
});

// ---------------- Users & Session ----------------
const usersKey = "gyanuUsers";

// Session functions
function setSession(user) {
  localStorage.setItem('gyanuSession', JSON.stringify(user));
}

function getSession() {
  return JSON.parse(localStorage.getItem('gyanuSession'));
}

function logout() {
  localStorage.removeItem('gyanuSession');
  alert("Logged out successfully!");
  window.location.href = "login.html";
}

// ---------------- Register ----------------
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  let users = JSON.parse(localStorage.getItem(usersKey)) || [];
  if(users.find(u => u.email === email)){
    alert("Email already registered!");
    return;
  }
  users.push({name,email,password});
  localStorage.setItem(usersKey, JSON.stringify(users));
  alert("Registration successful!");
  registerForm.reset();
  loginToggle.click(); // switch to login
});

// ---------------- Login ----------------
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  let users = JSON.parse(localStorage.getItem(usersKey)) || [];
  const user = users.find(u => u.email === email && u.password === password);
  if(user){
    setSession(user); // <-- session set
    alert(`Welcome back, ${user.name}!`);
    loginForm.reset();
    window.location.href = "notes.html"; // redirect
  } else {
    alert("Invalid email or password!");
  }
});
