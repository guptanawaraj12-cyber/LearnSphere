// ===== GLOBAL VARIABLES =====
let currentNoteId = null;
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
let downloadCounts = JSON.parse(localStorage.getItem('downloadCounts')) || {};
let subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
let isAdminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';

// ===== DARK MODE =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        
        // Add animation
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

// ===== MOBILE NAVIGATION TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ===== SEARCH FUNCTIONALITY =====
const searchInput = document.getElementById('searchInput');
const searchBtn = document.querySelector('.search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Live search suggestions (optional)
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length > 2) {
            // Implement live search suggestions here
            console.log('Searching for:', query);
        }
    });
}

function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
        console.log('Searching for:', query);
        // Implement actual search logic here
        // For now, we'll show an alert
        alert(`Searching for: "${query}"\n\nThis feature will search through all notes, subjects, and classes.`);
    }
}

// ===== PDF VIEWER =====
function viewPDF(pdfUrl) {
    const modal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');
    const pdfTitle = document.getElementById('pdfTitle');
    
    // For demo purposes, using a sample PDF
    // In production, replace with actual PDF URLs
    pdfViewer.src = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`;
    pdfTitle.textContent = 'Viewing: ' + pdfUrl;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePDFViewer() {
    const modal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');
    
    modal.style.display = 'none';
    pdfViewer.src = '';
    document.body.style.overflow = 'auto';
}

function zoomIn() {
    // PDF zoom functionality
    console.log('Zoom In');
    alert('Zoom In feature - Use browser zoom (Ctrl/Cmd + +)');
}

function zoomOut() {
    // PDF zoom functionality
    console.log('Zoom Out');
    alert('Zoom Out feature - Use browser zoom (Ctrl/Cmd + -)');
}

function downloadCurrentPDF() {
    alert('Downloading PDF...\n\nIn production, this will download the current PDF file.');
}

// ===== DOWNLOAD COUNTER =====
function downloadNote(noteId) {
    // Increment download count
    if (!downloadCounts[noteId]) {
        downloadCounts[noteId] = 0;
    }
    downloadCounts[noteId]++;
    
    // Save to localStorage
    localStorage.setItem('downloadCounts', JSON.stringify(downloadCounts));
    
    // Update UI
    updateDownloadCount(noteId);
    
    // Show success message
    showNotification('Download started! 📥', 'success');
    
    // In production, trigger actual file download
    console.log(`Downloading note ${noteId}. Total downloads: ${downloadCounts[noteId]}`);
}

function updateDownloadCount(noteId) {
    const noteCard = document.querySelector(`[data-note-id="${noteId}"]`);
    if (noteCard) {
        const downloadSpan = noteCard.querySelector('.note-downloads');
        if (downloadSpan) {
            downloadSpan.innerHTML = `<i class="fas fa-download"></i> ${downloadCounts[noteId] || 0}`;
        }
    }
}

// ===== BOOKMARK SYSTEM =====
function toggleBookmark(noteId) {
    const index = bookmarks.indexOf(noteId);
    const bookmarkBtn = document.querySelector(`[data-note-id="${noteId}"] .btn-bookmark`);
    
    if (index > -1) {
        // Remove bookmark
        bookmarks.splice(index, 1);
        bookmarkBtn.classList.remove('active');
        bookmarkBtn.innerHTML = '<i class="far fa-bookmark"></i>';
        showNotification('Bookmark removed! 🔖', 'info');
    } else {
        // Add bookmark
        bookmarks.push(noteId);
        bookmarkBtn.classList.add('active');
        bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i>';
        showNotification('Bookmarked! ⭐', 'success');
    }
    
    // Save to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

// Load bookmarks on page load
function loadBookmarks() {
    bookmarks.forEach(noteId => {
        const bookmarkBtn = document.querySelector(`[data-note-id="${noteId}"] .btn-bookmark`);
        if (bookmarkBtn) {
            bookmarkBtn.classList.add('active');
            bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i>';
        }
    });
}

// ===== RATING SYSTEM =====
function rateNote(noteId, rating) {
    // Save rating to localStorage
    let ratings = JSON.parse(localStorage.getItem('ratings')) || {};
    if (!ratings[noteId]) {
        ratings[noteId] = [];
    }
    ratings[noteId].push(rating);
    localStorage.setItem('ratings', JSON.stringify(ratings));
    
    // Calculate average
    const avg = ratings[noteId].reduce((a, b) => a + b, 0) / ratings[noteId].length;
    
    showNotification(`Thank you for rating! Average: ${avg.toFixed(1)} ⭐`, 'success');
}

// ===== SOCIAL SHARING =====
function shareNote(noteId) {
    currentNoteId = noteId;
    const modal = document.getElementById('shareModal');
    const shareLink = document.getElementById('shareLink');
    
    // Generate share link (in production, use actual note URL)
    const url = `${window.location.origin}/note/${noteId}`;
    shareLink.value = url;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeShareModal() {
    const modal = document.getElementById('shareModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function shareOn(platform) {
    const url = document.getElementById('shareLink').value;
    const text = 'Check out this amazing note on Gyanu Notes!';
    
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
            break;
        case 'telegram':
            shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
        case 'email':
            shareUrl = `mailto:?subject=${encodeURIComponent('Check this out!')}&body=${encodeURIComponent(text + '\n\n' + url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

function copyShareLink() {
    const shareLink = document.getElementById('shareLink');
    shareLink.select();
    document.execCommand('copy');
    showNotification('Link copied to clipboard! 📋', 'success');
}

// ===== NEWSLETTER SUBSCRIPTION =====
const newsletterForm = document.getElementById('newsletterForm');
const newsletterMessage = document.getElementById('newsletterMessage');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('newsletterEmail').value.trim();
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage(newsletterMessage, 'Please enter a valid email address.', 'error');
            return;
        }
        
        // Check if already subscribed
        if (subscribers.includes(email)) {
            showMessage(newsletterMessage, 'You are already subscribed!', 'error');
            return;
        }
        
        // Add to subscribers
        subscribers.push(email);
        localStorage.setItem('subscribers', JSON.stringify(subscribers));
        
        // Show success message
        showMessage(newsletterMessage, 'Thank you for subscribing! 🎉', 'success');
        
        // Reset form
        newsletterForm.reset();
        
        // Update admin stats
        updateAdminStats();
    });
}

// ===== ADMIN PANEL =====

// Check admin login status
if (window.location.pathname.includes('admin.html')) {
    checkAdminLogin();
}

function checkAdminLogin() {
    const adminLogin = document.getElementById('adminLogin');
    const adminDashboard = document.getElementById('adminDashboard');
    
    if (isAdminLoggedIn) {
        adminLogin.style.display = 'none';
        adminDashboard.style.display = 'block';
        updateAdminStats();
    } else {
        adminLogin.style.display = 'block';
        adminDashboard.style.display = 'none';
    }
}

// Admin Login
const adminLoginForm = document.getElementById('adminLoginForm');
const loginMessage = document.getElementById('loginMessage');

if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('adminUsername').value.trim();
        const password = document.getElementById('adminPassword').value.trim();
        
        // Simple authentication (in production, use proper backend authentication)
        if (username === 'nawaraj' && password === '25december2007') {
            localStorage.setItem('adminLoggedIn', 'true');
            isAdminLoggedIn = true;
            showMessage(loginMessage, 'Login successful! Redirecting...', 'success');
            
            setTimeout(() => {
                checkAdminLogin();
            }, 1000);
        } else {
            showMessage(loginMessage, 'Invalid username or password!', 'error');
        }
    });
}

function logoutAdmin() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('adminLoggedIn');
        isAdminLoggedIn = false;
        window.location.reload();
    }
}

// Admin Tabs
function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName + 'Tab').classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Upload Notes Form
const uploadNotesForm = document.getElementById('uploadNotesForm');
const uploadMessage = document.getElementById('uploadMessage');

if (uploadNotesForm) {
    uploadNotesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('noteTitle').value.trim();
        const noteClass = document.getElementById('noteClass').value;
        const subject = document.getElementById('noteSubject').value;
        const chapter = document.getElementById('noteChapter').value.trim();
        const description = document.getElementById('noteDescription').value.trim();
        const file = document.getElementById('noteFile').files[0];
        
        // Validation
        if (!title || !noteClass || !subject || !chapter || !file) {
            showMessage(uploadMessage, 'Please fill in all required fields!', 'error');
            return;
        }
        
        // File size validation (10MB)
        if (file.size > 10 * 1024 * 1024) {
            showMessage(uploadMessage, 'File size must be less than 10MB!', 'error');
            return;
        }
        
        // File type validation
        if (file.type !== 'application/pdf') {
            showMessage(uploadMessage, 'Only PDF files are allowed!', 'error');
            return;
        }
        
        // Simulate upload (in production, send to backend)
        showMessage(uploadMessage, 'Uploading notes... Please wait.', 'success');
        
        setTimeout(() => {
            showMessage(uploadMessage, 'Notes uploaded successfully! 🎉', 'success');
            uploadNotesForm.reset();
            updateAdminStats();
        }, 2000);
    });
}

// Update Admin Statistics
function updateAdminStats() {
    // Total Notes
    const totalNotes = Object.keys(downloadCounts).length || 3; // Default 3 for demo
    document.getElementById('totalNotes').textContent = totalNotes;
    
    // Total Downloads
    const totalDownloads = Object.values(downloadCounts).reduce((a, b) => a + b, 0) || 746; // Demo value
    document.getElementById('totalDownloads').textContent = totalDownloads;
    
    // Total Subscribers
    document.getElementById('totalSubscribers').textContent = subscribers.length;
    document.getElementById('subscriberCount').textContent = subscribers.length;
    
    // Average Rating
    const avgRating = 4.5; // Demo value
    document.getElementById('avgRating').textContent = avgRating.toFixed(1);
    
    // Update subscribers table
    updateSubscribersTable();
}

// Update Subscribers Table
function updateSubscribersTable() {
    const tbody = document.getElementById('subscribersTableBody');
    if (!tbody) return;
    
    if (subscribers.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center;">No subscribers yet</td></tr>';
        return;
    }
    
    tbody.innerHTML = subscribers.map((email, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${email}</td>
            <td>${new Date().toISOString().split('T')[0]}</td>
            <td><span class="status-badge active">Active</span></td>
            <td>
                <button class="btn-icon btn-delete" onclick="removeSubscriber(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Remove Subscriber
function removeSubscriber(index) {
    if (confirm('Are you sure you want to remove this subscriber?')) {
        subscribers.splice(index, 1);
        localStorage.setItem('subscribers', JSON.stringify(subscribers));
        updateAdminStats();
        showNotification('Subscriber removed!', 'success');
    }
}

// Export Subscribers
function exportSubscribers() {
    if (subscribers.length === 0) {
        alert('No subscribers to export!');
        return;
    }
    
    // Create CSV content
    let csv = 'ID,Email,Subscribed Date,Status\n';
    subscribers.forEach((email, index) => {
        csv += `${index + 1},${email},${new Date().toISOString().split('T')[0]},Active\n`;
    });
    
    // Create download link
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'subscribers.csv';
    a.click();
    
    showNotification('Subscribers exported successfully! 📊', 'success');
}

// Edit Note
function editNote(noteId) {
    alert(`Edit note ${noteId}\n\nThis will open an edit form with the note details.`);
}

// Delete Note
function deleteNote(noteId) {
    if (confirm('Are you sure you want to delete this note?')) {
        // Remove from storage
        delete downloadCounts[noteId];
        localStorage.setItem('downloadCounts', JSON.stringify(downloadCounts));
        
        // Remove from UI
        const row = event.target.closest('tr');
        row.remove();
        
        updateAdminStats();
        showNotification('Note deleted successfully!', 'success');
    }
}

// Settings Form
const settingsForm = document.getElementById('settingsForm');
if (settingsForm) {
    settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Settings saved successfully! ⚙️', 'success');
    });
}

// ===== FOUNDER MODAL =====
const modal = document.getElementById('founderModal');
const openModalBtn = document.getElementById('openFounderModal');
const closeModalBtn = document.querySelector('.close');

if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Close modal when clicking outside
if (modal) {
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close all modals
        document.querySelectorAll('.modal').forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !subject || !message) {
            showMessage(formMessage, 'Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage(formMessage, 'Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission
        console.log('Form Data:', { name, email, phone, subject, message });

        showMessage(formMessage, 'Thank you for your message! We will get back to you soon. 📧', 'success');
        contactForm.reset();
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

// ===== UTILITY FUNCTIONS =====

function showMessage(element, text, type) {
    if (!element) return;
    
    element.textContent = text;
    element.className = `form-message ${type}`;
    element.style.display = 'block';

    setTimeout(() => {
        element.style.display = 'none';
    }, 5000);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    z-index: 999;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px)';
    scrollTopBtn.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0)';
    scrollTopBtn.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
});

// ===== LOADING ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s';
        document.body.style.opacity = '1';
    }, 100);
    
    // Load bookmarks
    loadBookmarks();
    
    // Update download counts
    Object.keys(downloadCounts).forEach(noteId => {
        updateDownloadCount(noteId);
    });
});

// ===== FORM INPUT ANIMATIONS =====
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'translateY(-2px)';
    });

    input.addEventListener('blur', () => {
        input.parentElement.style.transform = 'translateY(0)';
    });
});

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    // Update admin stats if on admin page
    if (window.location.pathname.includes('admin.html') && isAdminLoggedIn) {
        updateAdminStats();
    }
    
    // Load download counts for all notes
    document.querySelectorAll('[data-note-id]').forEach(card => {
        const noteId = card.getAttribute('data-note-id');
        updateDownloadCount(noteId);
    });
});

// ===== CONSOLE MESSAGE =====
console.log('%c🎓 Gyanu Notes - Knowledge Made Simple', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cWebsite developed with ❤️ for students', 'color: #64748b; font-size: 14px;');
console.log('%c✨ Enhanced with 10 Premium Features!', 'color: #10b981; font-size: 14px; font-weight: bold;');
console.log('%c1. Search Bar | 2. PDF Viewer | 3. Dark Mode | 4. Download Counter | 5. Recently Added', 'color: #64748b; font-size: 12px;');
console.log('%c6. Bookmark System | 7. Rating System | 8. Social Sharing | 9. Newsletter | 10. Admin Panel', 'color: #64748b; font-size: 12px;');