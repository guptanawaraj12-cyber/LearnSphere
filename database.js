// ==================== DATABASE OPERATIONS ====================

// ==================== NOTES OPERATIONS ====================

// Upload Note
async function uploadNote(noteData, file) {
    try {
        const user = auth.currentUser;
        if (!user) throw new Error('Must be logged in to upload');
        
        // Check if admin
        const isAdminUser = await isAdmin();
        if (!isAdminUser) throw new Error('Only admins can upload notes');
        
        // Upload file to Storage
        let fileURL = null;
        if (file) {
            const storageRef = storage.ref();
            const fileRef = storageRef.child(`notes/${Date.now()}_${file.name}`);
            const snapshot = await fileRef.put(file);
            fileURL = await snapshot.ref.getDownloadURL();
        }
        
        // Create note document
        const noteDoc = {
            title: noteData.title,
            description: noteData.description,
            class: noteData.class,
            subject: noteData.subject,
            fileURL: fileURL,
            fileName: file ? file.name : null,
            uploadedBy: user.uid,
            uploadedByName: user.displayName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            downloads: 0,
            views: 0
        };
        
        const docRef = await db.collection('notes').add(noteDoc);
        showNotification('success', 'Note uploaded successfully!');
        return docRef.id;
    } catch (error) {
        console.error('Upload note error:', error);
        showNotification('error', error.message);
        throw error;
    }
}

// Get Notes by Class and Subject
async function getNotesByClassAndSubject(className, subject) {
    try {
        const snapshot = await db.collection('notes')
            .where('class', '==', className)
            .where('subject', '==', subject)
            .orderBy('createdAt', 'desc')
            .get();
        
        const notes = [];
        snapshot.forEach(doc => {
            notes.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        return notes;
    } catch (error) {
        console.error('Get notes error:', error);
        throw error;
    }
}

// Get All Notes (Admin)
async function getAllNotes() {
    try {
        const snapshot = await db.collection('notes')
            .orderBy('createdAt', 'desc')
            .get();
        
        const notes = [];
        snapshot.forEach(doc => {
            notes.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        return notes;
    } catch (error) {
        console.error('Get all notes error:', error);
        throw error;
    }
}

// Get Single Note
async function getNote(noteId) {
    try {
        const doc = await db.collection('notes').doc(noteId).get();
        if (!doc.exists) throw new Error('Note not found');
        
        // Increment views
        await db.collection('notes').doc(noteId).update({
            views: firebase.firestore.FieldValue.increment(1)
        });
        
        return {
            id: doc.id,
            ...doc.data()
        };
    } catch (error) {
        console.error('Get note error:', error);
        throw error;
    }
}

// Update Note
async function updateNote(noteId, updateData) {
    try {
        const isAdminUser = await isAdmin();
        if (!isAdminUser) throw new Error('Only admins can update notes');
        
        await db.collection('notes').doc(noteId).update({
            ...updateData,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        showNotification('success', 'Note updated successfully!');
    } catch (error) {
        console.error('Update note error:', error);
        showNotification('error', error.message);
        throw error;
    }
}

// Delete Note
async function deleteNote(noteId) {
    try {
        const isAdminUser = await isAdmin();
        if (!isAdminUser) throw new Error('Only admins can delete notes');
        
        // Get note to delete file from storage
        const note = await getNote(noteId);
        
        // Delete file from storage if exists
        if (note.fileURL) {
            const fileRef = storage.refFromURL(note.fileURL);
            await fileRef.delete();
        }
        
        // Delete note document
        await db.collection('notes').doc(noteId).delete();
        
        showNotification('success', 'Note deleted successfully!');
    } catch (error) {
        console.error('Delete note error:', error);
        showNotification('error', error.message);
        throw error;
    }
}

// Search Notes
async function searchNotes(query) {
    try {
        const snapshot = await db.collection('notes').get();
        
        const notes = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            const searchText = `${data.title} ${data.description} ${data.subject}`.toLowerCase();
            
            if (searchText.includes(query.toLowerCase())) {
                notes.push({
                    id: doc.id,
                    ...data
                });
            }
        });
        
        return notes;
    } catch (error) {
        console.error('Search notes error:', error);
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
        
        if (favoriteIds.length === 0) return [];
        
        const notes = [];
        for (const noteId of favoriteIds) {
            try {
                const note = await getNote(noteId);
                notes.push(note);
            } catch (error) {
                console.error(`Error fetching note ${noteId}:`, error);
            }
        }
        
        return notes;
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
        
        // Increment download count
        await db.collection('notes').doc(noteId).update({
            downloads: firebase.firestore.FieldValue.increment(1)
        });
        
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

// ==================== ANALYTICS ====================

// Get Dashboard Stats (Admin)
async function getDashboardStats() {
    try {
        const isAdminUser = await isAdmin();
        if (!isAdminUser) throw new Error('Admin access required');
        
        // Get total users
        const usersSnapshot = await db.collection('users').get();
        const totalUsers = usersSnapshot.size;
        
        // Get total notes
        const notesSnapshot = await db.collection('notes').get();
        const totalNotes = notesSnapshot.size;
        
        // Calculate total downloads and views
        let totalDownloads = 0;
        let totalViews = 0;
        
        notesSnapshot.forEach(doc => {
            const data = doc.data();
            totalDownloads += data.downloads || 0;
            totalViews += data.views || 0;
        });
        
        return {
            totalUsers,
            totalNotes,
            totalDownloads,
            totalViews
        };
    } catch (error) {
        console.error('Get dashboard stats error:', error);
        throw error;
    }
}