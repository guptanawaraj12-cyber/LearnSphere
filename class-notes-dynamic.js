// ==================== DYNAMIC CLASS NOTES SYSTEM ====================

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const currentClass = urlParams.get('class');
const currentSubject = urlParams.get('subject');

// Subject configurations for all classes
const subjectConfig = {
    '8': {
        subjects: {
            'science': {
                name: 'Science',
                icon: 'fas fa-flask',
                description: 'Complete Class 8 Science notes covering Physics, Chemistry, and Biology',
                topics: ['Matter', 'Force and Motion', 'Energy', 'Living Organisms', 'Environment'],
                color: '#10b981'
            },
            'math': {
                name: 'Mathematics',
                icon: 'fas fa-calculator',
                description: 'Class 8 Math notes with solved examples and practice problems',
                topics: ['Algebra', 'Geometry', 'Mensuration', 'Statistics', 'Probability'],
                color: '#3b82f6'
            },
            'english': {
                name: 'English',
                icon: 'fas fa-book',
                description: 'English grammar, literature, and writing skills for Class 8',
                topics: ['Grammar', 'Comprehension', 'Writing', 'Literature', 'Vocabulary'],
                color: '#8b5cf6'
            },
            'nepali': {
                name: 'Nepali',
                icon: 'fas fa-language',
                description: 'नेपाली व्याकरण र साहित्य - कक्षा ८',
                topics: ['व्याकरण', 'रचना', 'साहित्य', 'कविता', 'निबन्ध'],
                color: '#ef4444'
            },
            'computer': {
                name: 'Computer Science',
                icon: 'fas fa-laptop-code',
                description: 'Basic computer concepts, MS Office, and programming fundamentals',
                topics: ['Computer Basics', 'MS Office', 'Internet', 'Programming', 'Digital Literacy'],
                color: '#06b6d4'
            },
            'optional-math': {
                name: 'Optional Mathematics',
                icon: 'fas fa-square-root-alt',
                description: 'Advanced math topics for Class 8 optional mathematics',
                topics: ['Advanced Algebra', 'Trigonometry', 'Coordinate Geometry', 'Sets', 'Logic'],
                color: '#f59e0b'
            }
        }
    },
    '9': {
        subjects: {
            'science': {
                name: 'Science',
                icon: 'fas fa-flask',
                description: 'Complete Class 9 Science notes - Physics, Chemistry, Biology',
                topics: ['Motion', 'Force', 'Energy', 'Matter', 'Living World', 'Natural Resources'],
                color: '#10b981'
            },
            'math': {
                name: 'Mathematics',
                icon: 'fas fa-calculator',
                description: 'Class 9 Math notes with solved problems',
                topics: ['Number System', 'Algebra', 'Geometry', 'Coordinate Geometry', 'Mensuration'],
                color: '#3b82f6'
            },
            'english': {
                name: 'English',
                icon: 'fas fa-book',
                description: 'English language and literature for Class 9',
                topics: ['Grammar', 'Comprehension', 'Writing Skills', 'Literature', 'Poetry'],
                color: '#8b5cf6'
            },
            'nepali': {
                name: 'Nepali',
                icon: 'fas fa-language',
                description: 'नेपाली भाषा र साहित्य - कक्षा ९',
                topics: ['व्याकरण', 'रचना', 'साहित्य', 'कविता', 'कथा'],
                color: '#ef4444'
            },
            'computer': {
                name: 'Computer Science',
                icon: 'fas fa-laptop-code',
                description: 'Computer fundamentals and programming for Class 9',
                topics: ['Computer Systems', 'Programming', 'Database', 'Web Technology', 'Networking'],
                color: '#06b6d4'
            },
            'optional-math': {
                name: 'Optional Mathematics',
                icon: 'fas fa-square-root-alt',
                description: 'Advanced mathematics for Class 9',
                topics: ['Algebra', 'Trigonometry', 'Geometry', 'Statistics', 'Probability'],
                color: '#f59e0b'
            },
            'economics': {
                name: 'Economics',
                icon: 'fas fa-chart-line',
                description: 'Basic economics concepts for Class 9',
                topics: ['Microeconomics', 'Macroeconomics', 'Money', 'Banking', 'Trade'],
                color: '#ec4899'
            },
            'accounts': {
                name: 'Accountancy',
                icon: 'fas fa-file-invoice-dollar',
                description: 'Accounting principles and practice for Class 9',
                topics: ['Accounting Basics', 'Journal', 'Ledger', 'Trial Balance', 'Financial Statements'],
                color: '#14b8a6'
            }
        }
    },
    '10': {
        subjects: {
            'science': {
                name: 'Science',
                icon: 'fas fa-flask',
                description: 'Complete Class 10 Science notes for board exam preparation',
                topics: ['Chemical Reactions', 'Acids & Bases', 'Metals', 'Life Processes', 'Electricity'],
                color: '#10b981'
            },
            'math': {
                name: 'Mathematics',
                icon: 'fas fa-calculator',
                description: 'Class 10 Math notes for board exam',
                topics: ['Real Numbers', 'Polynomials', 'Linear Equations', 'Quadratic Equations', 'Trigonometry'],
                color: '#3b82f6'
            },
            'english': {
                name: 'English',
                icon: 'fas fa-book',
                description: 'English for Class 10 board exam',
                topics: ['Grammar', 'Comprehension', 'Writing', 'Literature', 'Poetry Analysis'],
                color: '#8b5cf6'
            },
            'nepali': {
                name: 'Nepali',
                icon: 'fas fa-language',
                description: 'नेपाली - कक्षा १० बोर्ड परीक्षा',
                topics: ['व्याकरण', 'रचना', 'साहित्य', 'कविता', 'गद्य'],
                color: '#ef4444'
            },
            'computer': {
                name: 'Computer Science',
                icon: 'fas fa-laptop-code',
                description: 'Computer Science for Class 10',
                topics: ['Programming', 'Database Management', 'Web Development', 'Networking', 'Cyber Security'],
                color: '#06b6d4'
            },
            'optional-math': {
                name: 'Optional Mathematics',
                icon: 'fas fa-square-root-alt',
                description: 'Advanced mathematics for Class 10',
                topics: ['Algebra', 'Trigonometry', 'Coordinate Geometry', 'Calculus Basics', 'Statistics'],
                color: '#f59e0b'
            },
            'economics': {
                name: 'Economics',
                icon: 'fas fa-chart-line',
                description: 'Economics for Class 10',
                topics: ['Economic Development', 'Money & Credit', 'Globalization', 'Consumer Rights', 'Sectors'],
                color: '#ec4899'
            },
            'accounts': {
                name: 'Accountancy',
                icon: 'fas fa-file-invoice-dollar',
                description: 'Accountancy for Class 10',
                topics: ['Financial Accounting', 'Partnership', 'Company Accounts', 'Cash Flow', 'Ratio Analysis'],
                color: '#14b8a6'
            }
        }
    },
    '11': {
        subjects: {
            'physics': {
                name: 'Physics',
                icon: 'fas fa-atom',
                description: 'Complete Class 11 Physics notes with solved numericals',
                topics: ['Mechanics', 'Heat', 'Optics', 'Sound', 'Modern Physics'],
                color: '#3b82f6'
            },
            'chemistry': {
                name: 'Chemistry',
                icon: 'fas fa-flask',
                description: 'Class 11 Chemistry notes with reactions',
                topics: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Chemical Bonding'],
                color: '#10b981'
            },
            'math': {
                name: 'Mathematics',
                icon: 'fas fa-calculator',
                description: 'Class 11 Math notes with solved problems',
                topics: ['Algebra', 'Trigonometry', 'Calculus', 'Coordinate Geometry', 'Statistics'],
                color: '#f59e0b'
            },
            'biology': {
                name: 'Biology',
                icon: 'fas fa-dna',
                description: 'Class 11 Biology notes with diagrams',
                topics: ['Botany', 'Zoology', 'Cell Biology', 'Genetics', 'Ecology'],
                color: '#10b981'
            },
            'english': {
                name: 'English',
                icon: 'fas fa-book',
                description: 'English language and literature for Class 11',
                topics: ['Grammar', 'Comprehension', 'Writing', 'Literature', 'Poetry'],
                color: '#8b5cf6'
            },
            'nepali': {
                name: 'Nepali',
                icon: 'fas fa-language',
                description: 'नेपाली भाषा र साहित्य - कक्षा ११',
                topics: ['व्याकरण', 'रचना', 'साहित्य', 'कविता', 'निबन्ध'],
                color: '#ef4444'
            }
        }
    },
    '12': {
        subjects: {
            'physics': {
                name: 'Physics',
                icon: 'fas fa-atom',
                description: 'Class 12 Physics notes for board exam',
                topics: ['Electromagnetism', 'Modern Physics', 'Electronics', 'Nuclear Physics'],
                color: '#3b82f6'
            },
            'chemistry': {
                name: 'Chemistry',
                icon: 'fas fa-flask',
                description: 'Class 12 Chemistry notes for board exam',
                topics: ['Organic Chemistry', 'Chemical Kinetics', 'Electrochemistry', 'Coordination Compounds'],
                color: '#10b981'
            },
            'math': {
                name: 'Mathematics',
                icon: 'fas fa-calculator',
                description: 'Class 12 Math notes for board exam',
                topics: ['Calculus', 'Vectors', 'Probability', 'Differential Equations', '3D Geometry'],
                color: '#f59e0b'
            },
            'biology': {
                name: 'Biology',
                icon: 'fas fa-dna',
                description: 'Class 12 Biology notes for board exam',
                topics: ['Reproduction', 'Genetics', 'Biotechnology', 'Evolution', 'Ecology'],
                color: '#10b981'
            },
            'english': {
                name: 'English',
                icon: 'fas fa-book',
                description: 'English for Class 12 board exam',
                topics: ['Grammar', 'Comprehension', 'Writing', 'Literature', 'Poetry Analysis'],
                color: '#8b5cf6'
            },
            'nepali': {
                name: 'Nepali',
                icon: 'fas fa-language',
                description: 'नेपाली - कक्षा १२ बोर्ड परीक्षा',
                topics: ['व्याकरण', 'रचना', 'साहित्य', 'कविता', 'गद्य'],
                color: '#ef4444'
            }
        }
    }
};

// SEO data for each class-subject combination
const seoData = {
    generateTitle: (cls, subject) => {
        const subj = subjectConfig[cls]?.subjects[subject];
        if (!subj) return 'Class Notes - Gyanu Note';
        return `Class ${cls} ${subj.name} Notes PDF - Complete NEB Syllabus 2024 | Gyanu Note`;
    },
    generateDescription: (cls, subject) => {
        const subj = subjectConfig[cls]?.subjects[subject];
        if (!subj) return 'Complete study notes for students';
        return `Free Class ${cls} ${subj.name} notes PDF download. ${subj.description}. Grade ${cls} study materials for Nepal students.`;
    },
    generateKeywords: (cls, subject) => {
        const subj = subjectConfig[cls]?.subjects[subject];
        if (!subj) return 'class notes, study materials';
        return `class ${cls} ${subject} notes, class ${cls} ${subj.name.toLowerCase()} notes pdf, grade ${cls} ${subject} notes, NEB ${subject} notes, class ${cls} notes Nepal`;
    }
};

// Initialize page
function initializePage() {
    if (!currentClass || !currentSubject) {
        showError('Invalid URL. Please select a class and subject.');
        return;
    }

    const classData = subjectConfig[currentClass];
    const subjectData = classData?.subjects[currentSubject];

    if (!subjectData) {
        showError('Subject not found for this class.');
        return;
    }

    // Update SEO meta tags
    updateSEO(currentClass, currentSubject, subjectData);

    // Update page header
    updateHeader(currentClass, subjectData);

    // Load main content
    loadMainContent(currentClass, subjectData);

    // Load sidebar
    loadSidebar(currentClass, currentSubject);
    

    // Load notes
    loadNotes(currentClass, currentSubject);

    // Load related subjects
    loadRelatedSubjects(currentClass, currentSubject);
}

// Update SEO meta tags
function updateSEO(cls, subject, subjectData) {
    document.title = seoData.generateTitle(cls, subject);
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', seoData.generateDescription(cls, subject));
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.setAttribute('content', seoData.generateKeywords(cls, subject));
    }
}

// Update page header
function updateHeader(cls, subjectData) {
    document.getElementById('pageTitle').textContent = `Class ${cls} ${subjectData.name} Notes`;
    document.getElementById('pageSubtitle').textContent = 'Complete NEB Syllabus - Free PDF Download';
    
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = `
        <a href="index.html">Home</a> / 
        <a href="index.html#classes">Notes</a> / 
        <a href="class-overview.html?class=${cls}">Class ${cls}</a> / 
        <span>${subjectData.name}</span>
    `;
}

// Load main content
function loadMainContent(cls, subjectData) {
    const mainContent = document.getElementById('mainContent');
    
    mainContent.innerHTML = `
        <h2>Class ${cls} ${subjectData.name} Notes - Complete Study Material</h2>
        <p>${subjectData.description}. Our comprehensive notes cover all topics from the NEB curriculum with clear explanations, examples, and practice problems.</p>
        
        <h3>Topics Covered in Class ${cls} ${subjectData.name}</h3>
        <div class="topics-list">
            ${subjectData.topics.map(topic => `
                <div class="topic-item">
                    <i class="fas fa-check-circle"></i>
                    <span>${topic}</span>
                </div>
            `).join('')}
        </div>
        
        <h3>Why Choose Our Class ${cls} ${subjectData.name} Notes?</h3>
        <div class="features-list">
            <div class="feature-item">
                <i class="fas fa-check-circle"></i>
                <div>
                    <h4>Complete Syllabus Coverage</h4>
                    <p>All chapters from the official Class ${cls} ${subjectData.name} textbook covered in detail.</p>
                </div>
            </div>
            <div class="feature-item">
                <i class="fas fa-check-circle"></i>
                <div>
                    <h4>Easy to Understand</h4>
                    <p>Complex concepts explained in simple language with examples.</p>
                </div>
            </div>
            <div class="feature-item">
                <i class="fas fa-check-circle"></i>
                <div>
                    <h4>Free PDF Download</h4>
                    <p>Download all notes in PDF format for offline study.</p>
                </div>
            </div>
            <div class="feature-item">
                <i class="fas fa-check-circle"></i>
                <div>
                    <h4>Exam Focused</h4>
                    <p>Notes designed for terminal and board exam preparation.</p>
                </div>
            </div>
        </div>
        
        <h3>Study Tips for Class ${cls} ${subjectData.name}</h3>
        <div class="tips-box">
            <ul>
                <li>📚 Study regularly - consistency is key</li>
                <li>✍️ Practice problems daily</li>
                <li>📝 Make your own summary notes</li>
                <li>🎯 Focus on understanding concepts</li>
                <li>⏰ Solve previous year questions</li>
                <li>👥 Discuss with friends and teachers</li>
            </ul>
        </div>
    `;
}

// Load sidebar
function loadSidebar(cls, currentSubj) {
    const sidebar = document.getElementById('sidebar');
    const classData = subjectConfig[cls];
    
    // Get other subjects in same class
    const otherSubjects = Object.keys(classData.subjects)
        .filter(subj => subj !== currentSubj)
        .slice(0, 5);
    
    sidebar.innerHTML = `
        <div class="sidebar-widget">
            <h3>Other Class ${cls} Subjects</h3>
            <ul class="quick-links">
                ${otherSubjects.map(subj => {
                    const subjData = classData.subjects[subj];
                    return `
                        <li>
                            <a href="class-notes.html?class=${cls}&subject=${subj}">
                                <i class="${subjData.icon}"></i> ${subjData.name}
                            </a>
                        </li>
                    `;
                }).join('')}
            </ul>
        </div>
        
        <div class="sidebar-widget cta-widget">
            <h3>Need Help?</h3>
            <p>Have questions about ${classData.subjects[currentSubj].name}?</p>
            <a href="contact.html" class="btn-cta">Contact Us</a>
        </div>
    `;
}

// Load notes from database
function loadNotes(cls, subject) {
    const container = document.getElementById('notesContainer');
    const heading = document.getElementById('notesHeading');
    
    heading.textContent = `Browse Class ${cls} ${subjectConfig[cls].subjects[subject].name} Notes`;
    
    // Get notes from database based on class and subject
    let notes = [];
    
    // Map subject names to database keys
    const subjectMap = {
        'science': 'science',
        'math': 'mathematics',
        'english': 'english',
        'nepali': 'nepali',
        'computer': 'computer',
        'optional-math': 'optionalMath',
        'economics': 'economics',
        'accounts': 'accounts',
        'physics': 'physics',
        'chemistry': 'chemistry',
        'biology': 'biology'
    };
    
    const dbKey = subjectMap[subject];
    
    if (notesDatabase[dbKey]) {
        notes = notesDatabase[dbKey].filter(note => note.class === cls);
    }
    
    if (notes.length > 0) {
        container.innerHTML = notes.map(note => `
            <div class="note-card">
                <div class="note-icon">
                    <i class="${subjectConfig[cls].subjects[subject].icon}"></i>
                </div>
                <h3>${note.title}</h3>
                <p>${note.description}</p>
                <div class="note-meta">
                    <span><i class="fas fa-eye"></i> ${note.views} views</span>
                    <span><i class="fas fa-calendar"></i> ${note.date}</span>
                </div>
                <a href="note-detail.html?id=${note.id}" class="btn-read">
                    <i class="fas fa-arrow-right"></i> Read Notes
                </a>
            </div>
        `).join('');
    } else {
        container.innerHTML = '<p class="no-notes">Notes coming soon! Check back later.</p>';
    }
}

// Load related subjects
function loadRelatedSubjects(cls, currentSubj) {
    const container = document.getElementById('relatedContainer');
    const heading = document.getElementById('relatedHeading');
    const classData = subjectConfig[cls];
    
    heading.textContent = `Explore Other Class ${cls} Subjects`;
    
    // Get other subjects (max 4)
    const otherSubjects = Object.keys(classData.subjects)
        .filter(subj => subj !== currentSubj)
        .slice(0, 4);
    
    container.innerHTML = otherSubjects.map(subj => {
        const subjData = classData.subjects[subj];
        return `
            <a href="class-notes.html?class=${cls}&subject=${subj}" class="subject-card">
                <i class="${subjData.icon}"></i>
                <h3>${subjData.name}</h3>
                <p>${subjData.description}</p>
            </a>
        `;
    }).join('');
}

// Show error message
function showError(message) {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            <h2>Oops!</h2>
            <p>${message}</p>
            <a href="index.html#classes" class="btn-primary">Browse All Classes</a>
        </div>
    `;
    
    document.getElementById('sidebar').innerHTML = '';
    document.getElementById('notesContainer').innerHTML = '';
    document.getElementById('relatedContainer').innerHTML = '';
}

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializePage);