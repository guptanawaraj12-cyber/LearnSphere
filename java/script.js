// Auto year
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle menu
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  toggle.classList.toggle("active");
});

// Smooth scroll active link
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });

  navItems.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});

// Fade-in on scroll
const fadeEls = document.querySelectorAll(
  ".hero-box, .notes-section, .about-section, .contact-section, .social-buttons"
);

function showOnScroll() {
  fadeEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add("show");
  });
}
window.addEventListener("scroll", showOnScroll);
showOnScroll();

// ===== LOGIN & SIGNUP POPUP LOGIC =====
const loginBtn = document.getElementById("login-btn");
const loginPopup = document.getElementById("login-popup");
const closeLogin = document.getElementById("close-login");

const signupPopup = document.getElementById("signup-popup");
const closeSignup = document.getElementById("close-signup");

const openSignup = document.getElementById("open-signup");
const openLogin = document.getElementById("open-login");

function toggleBodyScroll(disable) {
  document.body.style.overflow = disable ? "hidden" : "auto";
}

// Open Login
loginBtn.addEventListener("click", () => {
  loginPopup.classList.add("show");
  toggleBodyScroll(true);
});

// Close Login
closeLogin.addEventListener("click", () => {
  loginPopup.classList.remove("show");
  toggleBodyScroll(false);
});

// Close Signup
closeSignup.addEventListener("click", () => {
  signupPopup.classList.remove("show");
  toggleBodyScroll(false);
});

// Open Signup from Login
openSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginPopup.classList.remove("show");
  signupPopup.classList.add("show");
});

// Back to Login from Signup
openLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupPopup.classList.remove("show");
  loginPopup.classList.add("show");
});

// Close if clicking outside
window.addEventListener("click", (e) => {
  if (e.target === loginPopup) {
    loginPopup.classList.remove("show");
    toggleBodyScroll(false);
  }
  if (e.target === signupPopup) {
    signupPopup.classList.remove("show");
    toggleBodyScroll(false);
  }
});

// ===== SIGN UP VALIDATION =====
const signupForm = signupPopup.querySelector("form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const password = document.getElementById("signup-password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("signup-email").value.trim();

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill out all fields.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  alert("✅ Account created successfully! You can now log in.");
  signupPopup.classList.remove("show");
  loginPopup.classList.add("show");
  signupForm.reset();
});
