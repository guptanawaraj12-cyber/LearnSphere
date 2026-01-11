// ==================== AUTHENTICATION SYSTEM ====================

// Check if user is logged in
function checkAuth() {
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged(user => {
            if (user) {
                resolve(user);
            } else {
                reject('Not authenticated');
            }
        });
    });
}

// Sign Up with Email/Password
async function signUp(email, password, displayName) {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        // Update profile
        await user.updateProfile({
            displayName: displayName
        });
        
        // Create user document in Firestore
        await db.collection('users').doc(user.uid).set({
            uid: user.uid,
            email: email,
            displayName: displayName,
            role: 'student',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            favorites: [],
            downloads: []
        });
        
        showNotification('success', 'Account created successfully!');
        return user;
    } catch (error) {
        console.error('Sign up error:', error);
        showNotification('error', error.message);
        throw error;
    }
}

// Login with Email/Password
async function login(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        showNotification('success', 'Logged in successfully!');
        return userCredential.user;
    } catch (error) {
        console.error('Login error:', error);
        showNotification('error', error.message);
        throw error;
    }
}

// Login with Google
async function loginWithGoogle() {
    try {
        const result = await auth.signInWithPopup(googleProvider);
        const user = result.user;
        
        // Check if user document exists
        const userDoc = await db.collection('users').doc(user.uid).get();
        
        if (!userDoc.exists) {
            // Create user document for new Google users
            await db.collection('users').doc(user.uid).set({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                role: 'student',
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                favorites: [],
                downloads: []
            });
        }
        
        showNotification('success', 'Logged in with Google!');
        return user;
    } catch (error) {
        console.error('Google login error:', error);
        showNotification('error', error.message);
        throw error;
    }
}

// Logout
async function logout() {
    try {
        await auth.signOut();
        showNotification('success', 'Logged out successfully!');
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Logout error:', error);
        showNotification('error', error.message);
    }
}

// Reset Password
async function resetPassword(email) {
    try {
        await auth.sendPasswordResetEmail(email);
        showNotification('success', 'Password reset email sent!');
    } catch (error) {
        console.error('Reset password error:', error);
        showNotification('error', error.message);
        throw error;
    }
}

// Get Current User Data
async function getCurrentUserData() {
    try {
        const user = auth.currentUser;
        if (!user) throw new Error('No user logged in');
        
        const userDoc = await db.collection('users').doc(user.uid).get();
        return userDoc.data();
    } catch (error) {
        console.error('Get user data error:', error);
        throw error;
    }
}

// Update User Profile
async function updateUserProfile(data) {
    try {
        const user = auth.currentUser;
        if (!user) throw new Error('No user logged in');
        
        await db.collection('users').doc(user.uid).update(data);
        showNotification('success', 'Profile updated!');
    } catch (error) {
        console.error('Update profile error:', error);
        showNotification('error', error.message);
        throw error;
    }
}

// Check if user is admin
async function isAdmin() {
    try {
        const userData = await getCurrentUserData();
        return userData.role === 'admin';
    } catch (error) {
        return false;
    }
}
