// ==================== SUBJECT DATA STRUCTURE ====================
const subjectsData = {
    class8: [
        { name: 'Science', icon: 'fa-flask' },
        { name: 'English', icon: 'fa-language' },
        { name: 'Nepali', icon: 'fa-book-reader' },
        { name: 'Computer', icon: 'fa-laptop-code' },
        { name: 'Mathematics', icon: 'fa-calculator' },
        { name: 'Social', icon: 'fa-globe' }
    ],
    class9: [
        { name: 'Science', icon: 'fa-flask' },
        { name: 'English', icon: 'fa-language' },
        { name: 'Nepali', icon: 'fa-book-reader' },
        { name: 'Computer', icon: 'fa-laptop-code' },
        { name: 'Mathematics', icon: 'fa-calculator' },
        { name: 'Accountancy', icon: 'fa-chart-line' },
        { name: 'Economics', icon: 'fa-coins' },
        { name: 'Social', icon: 'fa-globe' }
    ],
    class10: [
        { name: 'Science', icon: 'fa-flask' },
        { name: 'English', icon: 'fa-language' },
        { name: 'Nepali', icon: 'fa-book-reader' },
        { name: 'Computer', icon: 'fa-laptop-code' },
        { name: 'Mathematics', icon: 'fa-calculator' },
        { name: 'Accountancy', icon: 'fa-chart-line' },
        { name: 'Economics', icon: 'fa-coins' },
        { name: 'Social', icon: 'fa-globe' }
    ],
    class11: [
        { name: 'English', icon: 'fa-language' },
        { name: 'Nepali', icon: 'fa-book-reader' },
        { name: 'Computer', icon: 'fa-laptop-code' },
        { name: 'Mathematics', icon: 'fa-calculator' },
        { name: 'Physics', icon: 'fa-atom' },
        { name: 'Chemistry', icon: 'fa-vial' },
        { name: 'Biology', icon: 'fa-dna' }
    ],
    class12: [
        { name: 'English', icon: 'fa-language' },
        { name: 'Nepali', icon: 'fa-book-reader' },
        { name: 'Computer', icon: 'fa-laptop-code' },
        { name: 'Mathematics', icon: 'fa-calculator' },
        { name: 'Physics', icon: 'fa-atom' },
        { name: 'Chemistry', icon: 'fa-vial' },
        { name: 'Biology', icon: 'fa-dna' }
    ]
};

const ctevtData = {
    ha: {
        name: 'Health Assistant (HA)',
        years: {
            year1: [
                { name: 'Physics', icon: 'fa-atom' },
                { name: 'Chemistry', icon: 'fa-vial' },
                { name: 'Zoology', icon: 'fa-frog' },
                { name: 'Botany', icon: 'fa-leaf' },
                { name: 'Anatomy', icon: 'fa-user-md' },
                { name: 'Mathematics', icon: 'fa-calculator' }
            ],
            year2: [
                { name: 'Medicine I', icon: 'fa-pills' },
                { name: 'Surgery I', icon: 'fa-user-md' },
                { name: 'Chemical Pathology', icon: 'fa-flask' },
                { name: 'Obstetrics and Gynecology', icon: 'fa-baby' },
                { name: 'Basic Medical Procedures and First Aid', icon: 'fa-first-aid' },
                { name: 'Pharmacology and Pharmacy', icon: 'fa-prescription-bottle' },
                { name: 'Environmental Health', icon: 'fa-leaf' },
                { name: 'Health Education', icon: 'fa-book-medical' },
                { name: 'Primary Health Care / Family Health', icon: 'fa-home' }
            ],
            year3: [
                { name: 'Medicine II', icon: 'fa-pills' },
                { name: 'Surgery II', icon: 'fa-user-md' },
                { name: 'Health Management', icon: 'fa-hospital' },
                { name: 'Epidemiology and Community Diagnosis', icon: 'fa-chart-line' },
                { name: 'Comprehensive Clinical Practicum', icon: 'fa-stethoscope' },
                { name: 'Comprehensive Community Field Practicum', icon: 'fa-users' }
            ]
        }
    },
    pharmacy: {
        name: 'Pharmacy',
        years: {
            year1: [
                { name: 'Physics', icon: 'fa-atom' },
                { name: 'Chemistry', icon: 'fa-vial' },
                { name: 'Zoology', icon: 'fa-frog' },
                { name: 'Botany', icon: 'fa-leaf' },
                { name: 'Anatomy', icon: 'fa-user-md' },
                { name: 'Mathematics', icon: 'fa-calculator' }
            ],
            year2: [
                { name: 'Pharmacognosy', icon: 'fa-mortar-pestle' },
                { name: 'Biochemistry and Microbiology', icon: 'fa-microscope' },
                { name: 'Pathology', icon: 'fa-disease' },
                { name: 'Pharmacology', icon: 'fa-pills' },
                { name: 'Pharmaceutical Management', icon: 'fa-chart-line' },
                { name: 'Health Education, Health Care System, and First Aid', icon: 'fa-first-aid' }
            ],
            year3: [
                { name: 'Pharmacology and Therapeutics', icon: 'fa-pills' },
                { name: 'Pharmaceutics', icon: 'fa-prescription-bottle' },
                { name: 'Pharmaceutical Chemistry', icon: 'fa-flask' },
                { name: 'Hospital and Clinical Pharmacy', icon: 'fa-hospital' },
                { name: 'Forensic and Community Pharmacy', icon: 'fa-balance-scale' },
                { name: 'Pharmacoepidemiology and Environmental Health', icon: 'fa-leaf' },
                { name: 'Comprehensive Professional Field Practice', icon: 'fa-briefcase-medical' }
            ]
        }
    }
};

// ==================== SHOW SUBJECTS MODAL ====================
function showSubjects(classLevel) {
    const modal = document.getElementById('subjectModal');
    const modalTitle = document.getElementById('modalTitle');
    const subjectList = document.getElementById('subjectList');
    
    const className = classLevel.replace('class', 'Class ');
    modalTitle.textContent = `${className} - Select Subject`;
    
    const subjects = subjectsData[classLevel];
    subjectList.innerHTML = '';
    
    subjects.forEach(subject => {
        const subjectItem = document.createElement('div');
        subjectItem.className = 'subject-item';
        subjectItem.innerHTML = `
            <i class="fas ${subject.icon}"></i>
            <h4>${subject.name}</h4>
        `;
        subjectItem.onclick = () => openNotes(className, subject.name);
        subjectList.appendChild(subjectItem);
    });
    
    modal.style.display = 'block';
}

// ==================== SHOW CTEVT PROGRAM ====================
function showCTEVTProgram(program) {
    const modal = document.getElementById('subjectModal');
    const modalTitle = document.getElementById('modalTitle');
    const subjectList = document.getElementById('subjectList');
    
    const programData = ctevtData[program];
    modalTitle.textContent = `${programData.name} - Select Year`;
    
    subjectList.innerHTML = '';
    subjectList.style.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 1fr))';
    
    Object.keys(programData.years).forEach((year, index) => {
        const yearItem = document.createElement('div');
        yearItem.className = 'subject-item';
        yearItem.innerHTML = `
            <i class="fas fa-calendar-alt"></i>
            <h4>${index + 1}${getOrdinalSuffix(index + 1)} Year</h4>
        `;
        yearItem.onclick = () => showCTEVTYear(program, year, index + 1);
        subjectList.appendChild(yearItem);
    });
    
    modal.style.display = 'block';
}

// ==================== SHOW CTEVT YEAR SUBJECTS ====================
function showCTEVTYear(program, year, yearNumber) {
    const modal = document.getElementById('subjectModal');
    const modalTitle = document.getElementById('modalTitle');
    const subjectList = document.getElementById('subjectList');
    
    const programData = ctevtData[program];
    modalTitle.textContent = `${programData.name} - ${yearNumber}${getOrdinalSuffix(yearNumber)} Year`;
    
    const subjects = programData.years[year];
    subjectList.innerHTML = '';
    subjectList.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    
    subjects.forEach(subject => {
        const subjectItem = document.createElement('div');
        subjectItem.className = 'subject-item';
        subjectItem.innerHTML = `
            <i class="fas ${subject.icon}"></i>
            <h4>${subject.name}</h4>
        `;
        subjectItem.onclick = () => openNotes(`${programData.name} - Year ${yearNumber}`, subject.name);
        subjectList.appendChild(subjectItem);
    });
    
    modal.style.display = 'block';
}

// ==================== HELPER FUNCTION FOR ORDINAL SUFFIX ====================
function getOrdinalSuffix(num) {
    const j = num % 10;
    const k = num % 100;
    if (j === 1 && k !== 11) return 'st';
    if (j === 2 && k !== 12) return 'nd';
    if (j === 3 && k !== 13) return 'rd';
    return 'th';
}

// ==================== OPEN NOTES ====================
function openNotes(level, subject) {
    closeModal();
    
    const noteModal = document.getElementById('noteModal');
    const noteTitle = document.getElementById('noteTitle');
    const noteContent = document.getElementById('noteContent');
    
    noteTitle.textContent = `${subject} - ${level}`;
    
    // SAMPLE NOTE CONTENT - Replace this with your actual content
    // You can load content from your server or embed it directly
    noteContent.innerHTML = `
        <h2>Sample Note Content</h2>
        <p>This is a sample note for <strong>${subject}</strong> in <strong>${level}</strong>.</p>
        
        <h3>How to Add Your Content:</h3>
        <ol>
            <li><strong>Direct HTML:</strong> Replace this content with your HTML notes</li>
            <li><strong>Google Drive Images:</strong> Use the following format:
                <pre>&lt;img src="YOUR_GOOGLE_DRIVE_DIRECT_LINK" alt="Description"&gt;</pre>
            </li>
            <li><strong>External Content:</strong> Load content from your server using fetch API</li>
        </ol>
        
        <h3>Example Image from Google Drive:</h3>
        <p>To embed images from Google Drive:</p>
        <ol>
            <li>Upload image to Google Drive</li>
            <li>Right-click → Get link → Change to "Anyone with the link"</li>
            <li>Copy the file ID from the link</li>
            <li>Use this format: <code>https://drive.google.com/uc?export=view&id=FILE_ID</code></li>
        </ol>
        
        <h3>Important Topics:</h3>
        <ul>
            <li>Topic 1: Introduction</li>
            <li>Topic 2: Key Concepts</li>
            <li>Topic 3: Examples</li>
            <li>Topic 4: Practice Problems</li>
        </ul>
        
        <p><em>Note: This is demo content. Replace with your actual study materials.</em></p>
    `;
    
    noteModal.style.display = 'block';
}

// ==================== CLOSE MODALS ====================
function closeModal() {
    const modal = document.getElementById('subjectModal');
    modal.style.display = 'none';
}

function closeNoteModal() {
    const noteModal = document.getElementById('noteModal');
    noteModal.style.display = 'none';
}

// ==================== DOWNLOAD PDF ====================
function downloadPDF() {
    const noteContent = document.getElementById('noteContent');
    const noteTitle = document.getElementById('noteTitle').textContent;
    
    // Check if html2pdf is loaded
    if (typeof html2pdf === 'undefined') {
        alert('PDF library not loaded. Please refresh the page and try again.');
        return;
    }
    
    const opt = {
        margin: 1,
        filename: `${noteTitle}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(noteContent).save();
}

// ==================== CLOSE MODAL ON OUTSIDE CLICK ====================
window.onclick = function(event) {
    const subjectModal = document.getElementById('subjectModal');
    const noteModal = document.getElementById('noteModal');
    
    if (event.target === subjectModal) {
        subjectModal.style.display = 'none';
    }
    if (event.target === noteModal) {
        noteModal.style.display = 'none';
    }
}
// ==================== FIREBASE INTEGRATION ====================

// Override openNotes function to load from Firebase
const originalOpenNotes = openNotes;

openNotes = async function(level, subject) {
    closeModal();
    
    const noteModal = document.getElementById('noteModal');
    const noteTitle = document.getElementById('noteTitle');
    const noteContent = document.getElementById('noteContent');
    
    noteTitle.textContent = `${subject} - ${level}`;
    noteContent.innerHTML = '<p style="text-align: center; padding: 2rem;">Loading notes...</p>';
    
    noteModal.style.display = 'block';
    
    try {
        // Load notes from Firebase
        const notes = await getNotesByClassAndSubject(level, subject);
        
        if (notes.length === 0) {
            noteContent.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <i class="fas fa-inbox" style="font-size: 48px; color: var(--text-tertiary); margin-bottom: 1rem;"></i>
                    <h3>No notes available yet</h3>
                    <p style="color: var(--text-secondary);">Notes for this subject will be added soon.</p>
                </div>
            `;
            return;
        }
        
        // Display notes
        noteContent.innerHTML = notes.map(note => `
            <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-lg); margin-bottom: 1.5rem; border: 1px solid var(--border);">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                    <div>
                        <h3 style="margin-bottom: 0.5rem;">${note.title}</h3>
                        <p style="color: var(--text-secondary); font-size: 14px;">${note.description || ''}</p>
                    </div>
                    <div style="display: flex; gap: 0.5rem;">
                        ${auth.currentUser ? `
                            <button class="icon-btn" onclick="toggleFavoriteNote('${note.id}')" title="Add to favorites">
                                <i class="fas fa-heart"></i>
                            </button>
                        ` : ''}
                        ${note.fileURL ? `
                            <button class="icon-btn" onclick="downloadNoteFile('${note.id}', '${note.fileURL}', '${note.fileName}')" title="Download">
                                <i class="fas fa-download"></i>
                            </button>
                        ` : ''}
                    </div>
                </div>
                
                ${note.fileURL && note.fileURL.includes('.pdf') ? `
                    <iframe src="${note.fileURL}" style="width: 100%; height: 600px; border: 1px solid var(--border); border-radius: var(--radius-md);"></iframe>
                ` : note.fileURL ? `
                    <img src="${note.fileURL}" alt="${note.title}" style="max-width: 100%; border-radius: var(--radius-md);">
                ` : ''}
                
                <div style="display: flex; gap: 1rem; margin-top: 1rem; font-size: 13px; color: var(--text-tertiary);">
                    <span><i class="fas fa-eye"></i> ${note.views || 0} views</span>
                    <span><i class="fas fa-download"></i> ${note.downloads || 0} downloads</span>
                </div>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading notes:', error);
        noteContent.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <i class="fas fa-exclamation-triangle" style="font-size: 48px; color: #ff4444; margin-bottom: 1rem;"></i>
                <h3>Error loading notes</h3>
                <p style="color: var(--text-secondary);">Please try again later.</p>
            </div>
        `;
    }
};

// Toggle favorite note
async function toggleFavoriteNote(noteId) {
    if (!auth.currentUser) {
        showNotification('error', 'Please login to add favorites');
        return;
    }
    
    try {
        const userData = await getCurrentUserData();
        const isFavorite = (userData.favorites || []).includes(noteId);
        
        if (isFavorite) {
            await removeFromFavorites(noteId);
        } else {
            await addToFavorites(noteId);
        }
    } catch (error) {
        console.error('Error toggling favorite:', error);
    }
}

// Download note file
async function downloadNoteFile(noteId, fileURL, fileName) {
    try {
        await trackDownload(noteId);
        
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = fileName || 'note.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showNotification('success', 'Download started!');
    } catch (error) {
        console.error('Error downloading:', error);
    }
}

// Check if user is logged in and update UI
auth.onAuthStateChanged((user) => {
    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) return;
    
    // Remove existing auth links
    const existingAuthLinks = navMenu.querySelectorAll('.auth-link');
    existingAuthLinks.forEach(link => link.remove());
    
    if (user) {
        // Add dashboard and logout links
        const dashboardLi = document.createElement('li');
        dashboardLi.className = 'auth-link';
        dashboardLi.innerHTML = '<a href="dashboard.html">Dashboard</a>';
        navMenu.appendChild(dashboardLi);
        
        // Check if admin
        isAdmin().then(adminAccess => {
            if (adminAccess) {
                const adminLi = document.createElement('li');
                adminLi.className = 'auth-link';
                adminLi.innerHTML = '<a href="admin.html">Admin</a>';
                navMenu.appendChild(adminLi);
            }
        });
        
        const logoutLi = document.createElement('li');
        logoutLi.className = 'auth-link';
        logoutLi.innerHTML = '<a href="#" onclick="logout()">Logout</a>';
        navMenu.appendChild(logoutLi);
    } else {
        // Add login and signup links
        const loginLi = document.createElement('li');
        loginLi.className = 'auth-link';
        loginLi.innerHTML = '<a href="login.html">Login</a>';
        navMenu.appendChild(loginLi);
        
        const signupLi = document.createElement('li');
        signupLi.className = 'auth-link';
        signupLi.innerHTML = '<a href="signup.html">Sign Up</a>';
        navMenu.appendChild(signupLi);
    }
});