// ==================== DATABASE OPERATIONS ====================

// ==================== USER OPERATIONS ====================

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

// ==================== FAVORITES OPERATIONS ====================

// Add to Favorites
async function addToFavorites(noteId) {
    try {
        const user = auth.currentUser;
        if (!user) throw new Error('Must be logged in');
        
        await db.collection('users').doc(user.uid).update({
            favorites: firebase.firestore.FieldValue.arrayUnion(noteId)
        });
        
        showNotification('success', 'Added to favorites!');
    } catch (error) {
        console.error('Add to favorites error:', error);
        showNotification('error', error.message);
        throw error;
    }
}

// Remove from Favorites
async function removeFromFavorites(noteId) {
    try {
        const user = auth.currentUser;
        if (!user) throw new Error('Must be logged in');
        
        await db.collection('users').doc(user.uid).update({
            favorites: firebase.firestore.FieldValue.arrayRemove(noteId)
        });
        
        showNotification('success', 'Removed from favorites!');
    } catch (error) {
        console.error('Remove from favorites error:', error);
        showNotification('error', error.message);
        throw error;
    }
}

// Get User Favorites
async function getUserFavorites() {
    try {
        const user = auth.currentUser;
        if (!user) throw new Error('Must be logged in');
        
        const userData = await getCurrentUserData();
        const favoriteIds = userData.favorites || [];
        
        return favoriteIds;
    } catch (error) {
        console.error('Get favorites error:', error);
        throw error;
    }
}

// ==================== DOWNLOAD TRACKING ====================

// Track Download
async function trackDownload(noteId) {
    try {
        const user = auth.currentUser;
        
        // Track in user's download history if logged in
        if (user) {
            await db.collection('users').doc(user.uid).update({
                downloads: firebase.firestore.FieldValue.arrayUnion({
                    noteId: noteId,
                    downloadedAt: new Date()
                })
            });
        }
    } catch (error) {
        console.error('Track download error:', error);
    }
}

// ==================== CONTACT FORM OPERATIONS ====================

// Submit Contact Form
async function submitContactForm(formData) {
    try {
        const contactDoc = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            status: 'unread',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            userId: auth.currentUser ? auth.currentUser.uid : null
        };
        
        const docRef = await db.collection('contacts').add(contactDoc);
        showNotification('success', 'Message sent successfully! We\'ll get back to you soon.');
        return docRef.id;
    } catch (error) {
        console.error('Submit contact form error:', error);
        showNotification('error', 'Failed to send message. Please try again.');
        throw error;
    }
}

console.log('✅ Database functions loaded (User-only version)');