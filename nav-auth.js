// ==================== DYNAMIC NAVIGATION AUTH LINKS ====================

// Wait for Firebase to load
// ==================== DYNAMIC NAVIGATION AUTH LINKS ====================

// Wait for Firebase to load
document.addEventListener('DOMContentLoaded', () => {
    // Check if Firebase is loaded
    if (typeof firebase === 'undefined') {
        console.log('Firebase not loaded, adding static auth links');
        addStaticAuthLinks();
        return;
    }
    
    // Wait for auth to initialize
    if (typeof auth !== 'undefined') {
        updateNavigation();
    } else {
        // Retry after a short delay
        setTimeout(() => {
            if (typeof auth !== 'undefined') {
                updateNavigation();
            } else {
                addStaticAuthLinks();
            }
        }, 1000);
    }
});

// Update navigation based on auth state
function updateNavigation() {
    auth.onAuthStateChanged(async (user) => {
        const navMenu = document.getElementById('navMenu');
        if (!navMenu) return;
        
        // Remove existing auth links
        const existingAuthLinks = navMenu.querySelectorAll('.auth-link');
        existingAuthLinks.forEach(link => link.remove());
        
        if (user) {
            // User is logged in
            console.log('User logged in:', user.email);
            
            // Add Dashboard link
            const dashboardLi = document.createElement('li');
            dashboardLi.className = 'auth-link';
            dashboardLi.innerHTML = '<a href="dashboard.html"><i class="fas fa-user"></i> Dashboard</a>';
            navMenu.appendChild(dashboardLi);
            
            // REMOVED: Admin link check
            
            // Add Logout link
            const logoutLi = document.createElement('li');
            logoutLi.className = 'auth-link';
            logoutLi.innerHTML = '<a href="#" onclick="handleLogout(event)"><i class="fas fa-sign-out-alt"></i> Logout</a>';
            navMenu.appendChild(logoutLi);
            
        } else {
            // User is not logged in
            console.log('User not logged in');
            
            // Add Login link
            const loginLi = document.createElement('li');
            loginLi.className = 'auth-link';
            loginLi.innerHTML = '<a href="login.html"><i class="fas fa-sign-in-alt"></i> Login</a>';
            navMenu.appendChild(loginLi);
            
            // Add Sign Up link
            const signupLi = document.createElement('li');
            signupLi.className = 'auth-link';
            signupLi.innerHTML = '<a href="signup.html"><i class="fas fa-user-plus"></i> Sign Up</a>';
            navMenu.appendChild(signupLi);
        }
    });
}

// Add static auth links if Firebase is not available
function addStaticAuthLinks() {
    const navMenu = document.getElementById('navMenu');
    if (!navMenu) return;
    
    // Remove existing auth links
    const existingAuthLinks = navMenu.querySelectorAll('.auth-link');
    existingAuthLinks.forEach(link => link.remove());
    
    // Add Login link
    const loginLi = document.createElement('li');
    loginLi.className = 'auth-link';
    loginLi.innerHTML = '<a href="login.html"><i class="fas fa-sign-in-alt"></i> Login</a>';
    navMenu.appendChild(loginLi);
    
    // Add Sign Up link
    const signupLi = document.createElement('li');
    signupLi.className = 'auth-link';
    signupLi.innerHTML = '<a href="signup.html"><i class="fas fa-user-plus"></i> Sign Up</a>';
    navMenu.appendChild(signupLi);
}

// Handle logout
function handleLogout(event) {
    event.preventDefault();
    if (typeof logout === 'function') {
        logout();
    } else {
        window.location.href = 'index.html';
    }
}