// ==================== CLASS OVERVIEW PAGE ====================

// Get URL parameter
const urlParams = new URLSearchParams(window.location.search);
const currentClass = urlParams.get('class');

// Subject configurations (same as in class-notes-dynamic.js)
const subjectConfig = {
    '8': {
        name: 'Class 8',
        description: 'Complete study materials for Class 8 students covering all major subjects according to the latest curriculum.',
        subjects: {
            'science': { name: 'Science', icon: 'fas fa-flask', color: '#10b981' },
            'math': { name: 'Mathematics', icon: 'fas fa-calculator', color: '#3b82f6' },
            'english': { name: 'English', icon: 'fas fa-book', color: '#8b5cf6' },
            'nepali': { name: 'Nepali', icon: 'fas fa-language', color: '#ef4444' },
            'computer': { name: 'Computer Science', icon: 'fas fa-laptop-code', color: '#06b6d4' },
            'optional-math': { name: 'Optional Mathematics', icon: 'fas fa-square-root-alt', color: '#f59e0b' }
        }
    },
    '9': {
        name: 'Class 9',
        description: 'Comprehensive Class 9 notes for all subjects to help you excel in your studies and prepare for board exams.',
        subjects: {
            'science': { name: 'Science', icon: 'fas fa-flask', color: '#10b981' },
            'math': { name: 'Mathematics', icon: 'fas fa-calculator', color: '#3b82f6' },
            'english': { name: 'English', icon: 'fas fa-book', color: '#8b5cf6' },
            'nepali': { name: 'Nepali', icon: 'fas fa-language', color: '#ef4444' },
            'computer': { name: 'Computer Science', icon: 'fas fa-laptop-code', color: '#06b6d4' },
            'optional-math': { name: 'Optional Mathematics', icon: 'fas fa-square-root-alt', color: '#f59e0b' },
            'economics': { name: 'Economics', icon: 'fas fa-chart-line', color: '#ec4899' },
            'accounts': { name: 'Accountancy', icon: 'fas fa-file-invoice-dollar', color: '#14b8a6' }
        }
    },
    '10': {
        name: 'Class 10',
        description: 'Complete Class 10 board exam preparation materials for all subjects with previous year questions and practice papers.',
        subjects: {
            'science': { name: 'Science', icon: 'fas fa-flask', color: '#10b981' },
            'math': { name: 'Mathematics', icon: 'fas fa-calculator', color: '#3b82f6' },
            'english': { name: 'English', icon: 'fas fa-book', color: '#8b5cf6' },
            'nepali': { name: 'Nepali', icon: 'fas fa-language', color: '#ef4444' },
            'computer': { name: 'Computer Science', icon: 'fas fa-laptop-code', color: '#06b6d4' },
            'optional-math': { name: 'Optional Mathematics', icon: 'fas fa-square-root-alt', color: '#f59e0b' },
            'economics': { name: 'Economics', icon: 'fas fa-chart-line', color: '#ec4899' },
            'accounts': { name: 'Accountancy', icon: 'fas fa-file-invoice-dollar', color: '#14b8a6' }
        }
    },
    '11': {
        name: 'Class 11',
        description: 'Advanced level Class 11 notes for Science stream covering Physics, Chemistry, Biology, Mathematics, English, and Nepali.',
        subjects: {
            'physics': { name: 'Physics', icon: 'fas fa-atom', color: '#3b82f6' },
            'chemistry': { name: 'Chemistry', icon: 'fas fa-flask', color: '#10b981' },
            'math': { name: 'Mathematics', icon: 'fas fa-calculator', color: '#f59e0b' },
            'biology': { name: 'Biology', icon: 'fas fa-dna', color: '#10b981' },
            'english': { name: 'English', icon: 'fas fa-book', color: '#8b5cf6' },
            'nepali': { name: 'Nepali', icon: 'fas fa-language', color: '#ef4444' }
        }
    },
    '12': {
        name: 'Class 12',
        description: 'Complete Class 12 board exam preparation with comprehensive notes for all subjects following NEB curriculum.',
        subjects: {
            'physics': { name: 'Physics', icon: 'fas fa-atom', color: '#3b82f6' },
            'chemistry': { name: 'Chemistry', icon: 'fas fa-flask', color: '#10b981' },
            'math': { name: 'Mathematics', icon: 'fas fa-calculator', color: '#f59e0b' },
            'biology': { name: 'Biology', icon: 'fas fa-dna', color: '#10b981' },
            'english': { name: 'English', icon: 'fas fa-book', color: '#8b5cf6' },
            'nepali': { name: 'Nepali', icon: 'fas fa-language', color: '#ef4444' }
        }
    }
};

// Initialize page
function initializePage() {
    if (!currentClass || !subjectConfig[currentClass]) {
        showError();
        return;
    }

    const classData = subjectConfig[currentClass];
    
    // Update page title and meta
    document.title = `${classData.name} Notes - All Subjects | Gyanu Note`;
    
    // Update header
    document.getElementById('pageTitle').textContent = `${classData.name} Notes`;
    document.getElementById('pageSubtitle').textContent = 'Complete Study Materials for All Subjects';
    document.getElementById('breadcrumb').innerHTML = `
        <a href="index.html">Home</a> / 
        <a href="index.html#classes">Notes</a> / 
        <span>${classData.name}</span>
    `;
    
    // Update intro
    document.getElementById('classIntro').innerHTML = `
        <h2>${classData.name} Study Notes - All Subjects</h2>
        <p>${classData.description}</p>
    `;
    
    // Update tips heading
    document.getElementById('tipsHeading').textContent = `${classData.name} Study Tips`;
    
    // Load subjects
    loadSubjects(classData);
    
    // Load related classes
    loadRelatedClasses();
}

// Load subjects grid
function loadSubjects(classData) {
    const grid = document.getElementById('subjectsGrid');
    
    grid.innerHTML = Object.keys(classData.subjects).map(subjectKey => {
        const subject = classData.subjects[subjectKey];
        return `
            <a href="class-notes.html?class=${currentClass}&subject=${subjectKey}" class="subject-card-large">
                <div class="subject-icon" style="background: ${subject.color};">
                    <i class="${subject.icon}"></i>
                </div>
                <h3>${subject.name}</h3>
                <p>Complete ${classData.name} ${subject.name} notes with examples and practice problems</p>
                <span class="notes-badge">View Notes</span>
                <div class="subject-arrow">
                    <i class="fas fa-arrow-right"></i>
                </div>
            </a>
        `;
    }).join('');
}

// Load related classes
function loadRelatedClasses() {
    const container = document.getElementById('relatedClasses');
    const allClasses = ['8', '9', '10', '11', '12'];
    const otherClasses = allClasses.filter(cls => cls !== currentClass).slice(0, 3);
    
    container.innerHTML = otherClasses.map(cls => {
        const classData = subjectConfig[cls];
        return `
            <a href="class-overview.html?class=${cls}" class="class-card">
                <h3>${classData.name} Notes</h3>
                <p>${classData.description.substring(0, 80)}...</p>
            </a>
        `;
    }).join('');
}

// Show error
function showError() {
    document.getElementById('pageTitle').textContent = 'Class Not Found';
    document.getElementById('classIntro').innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            <h2>Oops!</h2>
            <p>The requested class was not found.</p>
            <a href="index.html#classes" class="btn-primary">Browse All Classes</a>
        </div>
    `;
    document.getElementById('subjectsGrid').innerHTML = '';
}

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
}

// Initialize
document.addEventListener('DOMContentLoaded', initializePage);