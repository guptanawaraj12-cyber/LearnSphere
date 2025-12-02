// ===== AUTHENTICATION SYSTEM =====

// Get users from localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// ===== CHECK IF USER IS LOGGED IN =====
function checkAuth() {
    const publicPages = ['index.html', 'notes.html', 'books.html', 'about.html', 'contact.html', 'login.html', 'admin.html', ''];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (!currentUser && !publicPages.includes(currentPage)) {
        window.location.href = 'login.html';
    }
    
    // Update navigation if user is logged in
    if (currentUser) {
        updateNavigation();
    }
}

// ===== UPDATE NAVIGATION FOR LOGGED IN USERS =====
function updateNavigation() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    
    // Remove login link if exists
    const loginLink = navLinks.querySelector('a[href="login.html"]');
    if (loginLink) {
        loginLink.parentElement.remove();
    }
    
    // Add dashboard link if not exists
    if (!navLinks.querySelector('a[href="dashboard.html"]')) {
        const dashboardLi = document.createElement('li');
        dashboardLi.innerHTML = '<a href="dashboard.html"><i class="fas fa-tachometer-alt"></i> Dashboard</a>';
        navLinks.appendChild(dashboardLi);
    }
}

// ===== SHOW LOGIN/SIGNUP FORMS =====
function showLogin() {
    document.getElementById('loginBox').style.display = 'block';
    document.getElementById('signupBox').style.display = 'none';
}

function showSignup() {
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('signupBox').style.display = 'block';
}

// ===== TOGGLE PASSWORD VISIBILITY =====
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// ===== LOGIN FORM =====
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
        const rememberMe = document.getElementById('rememberMe').checked;
        
        // Find user
        const user = users.find(u => u.email === email);
        
        if (!user) {
            showAuthMessage(loginMessage, 'No account found with this email!', 'error');
            return;
        }
        
        if (user.password !== password) {
            showAuthMessage(loginMessage, 'Incorrect password!', 'error');
            return;
        }
        
        // Login successful
        currentUser = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            class: user.class,
            phone: user.phone || '',
            school: user.school || '',
            bio: user.bio || '',
            joinedDate: user.joinedDate
        };
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
        }
        
        showAuthMessage(loginMessage, 'Login successful! Redirecting...', 'success');
        
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
    });
}

// ===== SIGNUP FORM =====
const signupForm = document.getElementById('signupForm');
const signupMessage = document.getElementById('signupMessage');

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const firstName = document.getElementById('signupFirstName').value.trim();
        const lastName = document.getElementById('signupLastName').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const studentClass = document.getElementById('signupClass').value;
        const password = document.getElementById('signupPassword').value.trim();
        const confirmPassword = document.getElementById('signupConfirmPassword').value.trim();
        const agreeTerms = document.getElementById('agreeTerms').checked;
        
        // Validation
        if (!firstName || !lastName || !email || !studentClass || !password || !confirmPassword) {
            showAuthMessage(signupMessage, 'Please fill in all fields!', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAuthMessage(signupMessage, 'Please enter a valid email address!', 'error');
            return;
        }
        
        // Password validation
        if (password.length < 8) {
            showAuthMessage(signupMessage, 'Password must be at least 8 characters!', 'error');
            return;
        }
        
        if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
            showAuthMessage(signupMessage, 'Password must contain letters and numbers!', 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            showAuthMessage(signupMessage, 'Passwords do not match!', 'error');
            return;
        }
        
        if (!agreeTerms) {
            showAuthMessage(signupMessage, 'Please agree to the Terms & Conditions!', 'error');
            return;
        }
        
        // Check if email already exists
        if (users.find(u => u.email === email)) {
            showAuthMessage(signupMessage, 'An account with this email already exists!', 'error');
            return;
        }
        
        // Create new user
        const newUser = {
            id: Date.now(),
            firstName,
            lastName,
            email,
            class: studentClass,
            password,
            phone: '',
            school: '',
            bio: '',
            joinedDate: new Date().toISOString(),
            bookmarks: [],
            downloads: [],
            points: 0
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        showAuthMessage(signupMessage, 'Account created successfully! Redirecting to login...', 'success');
        
        setTimeout(() => {
            showLogin();
            document.getElementById('loginEmail').value = email;
        }, 1500);
    });
}

// ===== SOCIAL LOGIN =====
function socialLogin(provider) {
    alert(`Social login with ${provider} is not yet implemented.\n\nIn production, this would connect to ${provider}'s OAuth API.`);
}

// ===== LOGOUT =====
function logoutUser() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('rememberMe');
        currentUser = null;
        window.location.href = 'index.html';
    }
}

// ===== LOAD USER DATA ON DASHBOARD =====
function loadUserDashboard() {
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    
    // Update user name
    const userName = document.getElementById('userName');
    if (userName) {
        userName.textContent = currentUser.firstName;
    }
    
    // Update profile info
    const profileName = document.getElementById('profileName');
    const profileClass = document.getElementById('profileClass');
    const profileEmail = document.getElementById('profileEmail');
    const profileJoined = document.getElementById('profileJoined');
    
    if (profileName) {
        profileName.textContent = `${currentUser.firstName} ${currentUser.lastName}`;
    }
    if (profileClass) {
        profileClass.textContent = `Class ${currentUser.class}`;
    }
    if (profileEmail) {
        profileEmail.textContent = currentUser.email;
    }
    if (profileJoined) {
        const joinDate = new Date(currentUser.joinedDate);
        profileJoined.textContent = `Joined ${joinDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`;
    }
    
    // Load user stats
    loadUserStats();
}

// ===== LOAD USER STATS =====
function loadUserStats() {
    const user = users.find(u => u.id === currentUser.id);
    if (!user) return;
    
    // Bookmarks
    const bookmarksCount = user.bookmarks ? user.bookmarks.length : 0;
    const userBookmarks = document.getElementById('userBookmarks');
    const profileBookmarks = document.getElementById('profileBookmarks');
    if (userBookmarks) userBookmarks.textContent = bookmarksCount;
    if (profileBookmarks) profileBookmarks.textContent = bookmarksCount;
    
    // Downloads
    const downloadsCount = user.downloads ? user.downloads.length : 0;
    const userDownloads = document.getElementById('userDownloads');
    const profileDownloads = document.getElementById('profileDownloads');
    if (userDownloads) userDownloads.textContent = downloadsCount;
    if (profileDownloads) profileDownloads.textContent = downloadsCount;
    
    // Points
    const points = user.points || 0;
    const userPoints = document.getElementById('userPoints');
    const profilePoints = document.getElementById('profilePoints');
    if (userPoints) userPoints.textContent = points;
    if (profilePoints) profilePoints.textContent = points;
    
    // Study time (demo)
    const studyTime = document.getElementById('studyTime');
    if (studyTime) studyTime.textContent = '12h';
}

// ===== LOAD USER PROFILE =====
function loadUserProfile() {
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    
    const user = users.find(u => u.id === currentUser.id);
    if (!user) return;
    
    // Personal Info
    const editFirstName = document.getElementById('editFirstName');
    const editLastName = document.getElementById('editLastName');
    const editEmail = document.getElementById('editEmail');
    const editClass = document.getElementById('editClass');
    const editPhone = document.getElementById('editPhone');
    const editSchool = document.getElementById('editSchool');
    const editBio = document.getElementById('editBio');
    
    if (editFirstName) editFirstName.value = user.firstName;
    if (editLastName) editLastName.value = user.lastName;
    if (editEmail) editEmail.value = user.email;
    if (editClass) editClass.value = user.class;
    if (editPhone) editPhone.value = user.phone || '';
    if (editSchool) editSchool.value = user.school || '';
    if (editBio) editBio.value = user.bio || '';
    
    loadUserStats();
}

// ===== UPDATE PERSONAL INFO =====
const personalInfoForm = document.getElementById('personalInfoForm');
const personalInfoMessage = document.getElementById('personalInfoMessage');

if (personalInfoForm) {
    personalInfoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const firstName = document.getElementById('editFirstName').value.trim();
        const lastName = document.getElementById('editLastName').value.trim();
        const studentClass = document.getElementById('editClass').value;
        const phone = document.getElementById('editPhone').value.trim();
        const school = document.getElementById('editSchool').value.trim();
        const bio = document.getElementById('editBio').value.trim();
        
        // Update user
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex].firstName = firstName;
            users[userIndex].lastName = lastName;
            users[userIndex].class = studentClass;
            users[userIndex].phone = phone;
            users[userIndex].school = school;
            users[userIndex].bio = bio;
            
            localStorage.setItem('users', JSON.stringify(users));
            
            // Update current user
            currentUser.firstName = firstName;
            currentUser.lastName = lastName;
            currentUser.class = studentClass;
            currentUser.phone = phone;
            currentUser.school = school;
            currentUser.bio = bio;
            
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            showAuthMessage(personalInfoMessage, 'Profile updated successfully! ✅', 'success');
        }
    });
}

// ===== CHANGE PASSWORD =====
const changePasswordForm = document.getElementById('changePasswordForm');
const passwordMessage = document.getElementById('passwordMessage');

if (changePasswordForm) {
    changePasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const currentPassword = document.getElementById('currentPassword').value.trim();
        const newPassword = document.getElementById('newPassword').value.trim();
        const confirmNewPassword = document.getElementById('confirmNewPassword').value.trim();
        
        const user = users.find(u => u.id === currentUser.id);
        
        if (user.password !== currentPassword) {
            showAuthMessage(passwordMessage, 'Current password is incorrect!', 'error');
            return;
        }
        
        if (newPassword.length < 8) {
            showAuthMessage(passwordMessage, 'New password must be at least 8 characters!', 'error');
            return;
        }
        
        if (!/[A-Za-z]/.test(newPassword) || !/[0-9]/.test(newPassword)) {
            showAuthMessage(passwordMessage, 'Password must contain letters and numbers!', 'error');
            return;
        }
        
        if (newPassword !== confirmNewPassword) {
            showAuthMessage(passwordMessage, 'Passwords do not match!', 'error');
            return;
        }
        
        // Update password
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        
        showAuthMessage(passwordMessage, 'Password changed successfully! 🔒', 'success');
        changePasswordForm.reset();
    });
}

// ===== PREFERENCES FORM =====
const preferencesForm = document.getElementById('preferencesForm');
const preferencesMessage = document.getElementById('preferencesMessage');

if (preferencesForm) {
    preferencesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showAuthMessage(preferencesMessage, 'Preferences saved successfully! ⚙️', 'success');
    });
}

// ===== NOTIFICATIONS FORM =====
const notificationsForm = document.getElementById('notificationsForm');
const notificationsMessage = document.getElementById('notificationsMessage');

if (notificationsForm) {
    notificationsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showAuthMessage(notificationsMessage, 'Notification settings saved! 🔔', 'success');
    });
}

// ===== PROFILE TABS =====
function showProfileTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all menu items
    document.querySelectorAll('.profile-menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName + 'Tab').classList.add('active');
    
    // Add active class to clicked menu item
    event.target.classList.add('active');
}

// ===== CHANGE AVATAR =====
function changeAvatar() {
    alert('Avatar upload feature coming soon!\n\nYou will be able to upload your profile picture.');
}

// ===== DELETE ACCOUNT =====
function deleteAccount() {
    const confirmation = prompt('This action cannot be undone!\n\nType "DELETE" to confirm:');
    
    if (confirmation === 'DELETE') {
        // Remove user from users array
        users = users.filter(u => u.id !== currentUser.id);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Clear current user
        localStorage.removeItem('currentUser');
        
        alert('Your account has been deleted. We\'re sorry to see you go! 😢');
        window.location.href = 'index.html';
    }
}

// ===== UTILITY FUNCTION =====
function showAuthMessage(element, text, type) {
    if (!element) return;
    
    element.textContent = text;
    element.className = `auth-message ${type}`;
    element.style.display = 'block';
    
    setTimeout(() => {
        element.style.display = 'none';
    }, 5000);
}

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    
    // Load dashboard data if on dashboard page
    if (window.location.pathname.includes('dashboard.html')) {
        loadUserDashboard();
    }
    
    // Load profile data if on profile page
    if (window.location.pathname.includes('profile.html')) {
        loadUserProfile();
    }
});

// ===== VIEW NOTE FUNCTION =====
function viewNote(noteId) {
    window.location.href = `notes.html?note=${noteId}`;
}