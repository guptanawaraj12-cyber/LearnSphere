// ==================== CLASS BOOKS PAGE ====================

const urlParams = new URLSearchParams(window.location.search);
const currentClass = urlParams.get('class');
let searchTerm = '';

// Initialize page
function initializeClassBooksPage() {
    if (!currentClass || !booksDatabase[currentClass]) {
        showError();
        return;
    }

    updatePageInfo();
    loadSubjects();
    setupEventListeners();
}

// Update page information
function updatePageInfo() {
    const classNames = {
        '8': 'Class 8',
        '9': 'Class 9',
        '10': 'Class 10',
        '11': 'Class 11',
        '12': 'Class 12'
    };

    const className = classNames[currentClass] || `Class ${currentClass}`;
    
    document.title = `${className} Books - Recommended Textbooks | Gyanu Note`;
    document.getElementById('pageTitle').textContent = `${className} Books`;
    document.getElementById('pageSubtitle').textContent = 'Recommended textbooks and guide books for all subjects';
    document.getElementById('breadcrumb').innerHTML = `
        <a href="index.html">Home</a> / 
        <a href="books.html">Books</a> / 
        <span>${className}</span>
    `;
    document.getElementById('sectionTitle').textContent = `${className} Books by Subject`;
}

// Load subjects
function loadSubjects() {
    const container = document.getElementById('subjectsContainer');
    const classData = booksDatabase[currentClass];
    
    let html = '';
    
    Object.keys(classData).forEach((subject, index) => {
        const books = classData[subject];
        const subjectName = subjectNames[subject] || subject;
        const subjectIcon = getSubjectIcon(subject);
        
        html += `
            <div class="subject-accordion-item" data-subject="${subject}">
                <div class="subject-accordion-header" onclick="toggleSubject('${subject}')">
                    <div class="subject-info">
                        <i class="${subjectIcon}"></i>
                        <h3>${subjectName}</h3>
                        <span class="books-count">${books.length} book${books.length !== 1 ? 's' : ''}</span>
                    </div>
                    <i class="fas fa-chevron-down toggle-icon"></i>
                </div>
                
                <div class="subject-accordion-content" id="subject-${subject}">
                    <div class="books-grid">
                        ${books.map(book => createBookCard(book)).join('')}
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Create book card
function createBookCard(book) {
    return `
        <div class="book-card" data-title="${book.title.toLowerCase()}" data-author="${book.author.toLowerCase()}" data-publisher="${book.publisher.toLowerCase()}">
            <div class="book-image">
                <img src="${book.coverImage}" alt="${book.title}" onerror="this.src='https://via.placeholder.com/280x350/6366f1/ffffff?text=Book+Cover'">
                ${book.price === 'Free' || book.price === 'निःशुल्क' ? 
                    '<div class="free-badge">FREE</div>' : ''}
            </div>
            
            <div class="book-content">
                <h4 class="book-title">${book.title}</h4>
                <p class="book-author">
                    <i class="fas fa-user"></i> ${book.author}
                </p>
                <p class="book-publisher">
                    <i class="fas fa-building"></i> ${book.publisher}
                </p>
                <p class="book-description">${book.description}</p>
                
                <div class="book-meta">
                    <span><i class="fas fa-file-alt"></i> ${book.pages} pages</span>
                    <span><i class="fas fa-language"></i> ${book.language}</span>
                </div>
                
                <div class="book-price">
                    <span class="price-tag">${book.price}</span>
                </div>
                
                <div class="book-actions">
                    ${book.downloadLink !== '#' ? 
                        `<a href="${book.downloadLink}" class="btn-download" download>
                            <i class="fas fa-download"></i> Download
                        </a>` : 
                        `<button class="btn-download btn-disabled" disabled>
                            <i class="fas fa-download"></i> Coming Soon
                        </button>`
                    }
                    ${book.buyLink !== '#' ? 
                        `<a href="${book.buyLink}" class="btn-buy" target="_blank">
                            <i class="fas fa-shopping-cart"></i> Buy Now
                        </a>` : 
                        `<button class="btn-buy btn-disabled" disabled>
                            <i class="fas fa-shopping-cart"></i> Not Available
                        </button>`
                    }
                </div>
                
                <div class="book-isbn">
                    <small>ISBN: ${book.isbn}</small>
                </div>
            </div>
        </div>
    `;
}

// Toggle subject accordion
function toggleSubject(subject) {
    const content = document.getElementById(`subject-${subject}`);
    const item = content.closest('.subject-accordion-item');
    const icon = item.querySelector('.toggle-icon');
    
    // Close all other subjects
    document.querySelectorAll('.subject-accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.subject-accordion-content').style.maxHeight = null;
        }
    });
    
    // Toggle current subject
    item.classList.toggle('active');
    
    if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
    } else {
        content.style.maxHeight = null;
    }
}

// Get subject icon
function getSubjectIcon(subject) {
    const icons = {
        'science': 'fas fa-flask',
        'math': 'fas fa-calculator',
        'english': 'fas fa-book',
        'nepali': 'fas fa-language',
        'computer': 'fas fa-laptop-code',
        'optional-math': 'fas fa-square-root-alt',
        'economics': 'fas fa-chart-line',
        'accounts': 'fas fa-file-invoice-dollar',
        'physics': 'fas fa-atom',
        'chemistry': 'fas fa-flask',
        'biology': 'fas fa-dna'
    };
    return icons[subject] || 'fas fa-book';
}

// Setup event listeners
function setupEventListeners() {
    const searchInput = document.getElementById('searchBooks');
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        applySearch();
    });
    
    // Mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
    }
}

// Apply search filter
function applySearch() {
    const subjects = document.querySelectorAll('.subject-accordion-item');
    const noResults = document.getElementById('noResults');
    let hasResults = false;
    
    subjects.forEach(subject => {
        const bookCards = subject.querySelectorAll('.book-card');
        let visibleBooks = 0;
        
        bookCards.forEach(card => {
            const title = card.dataset.title;
            const author = card.dataset.author;
            const publisher = card.dataset.publisher;
            
            const matches = searchTerm === '' || 
                title.includes(searchTerm) ||
                author.includes(searchTerm) ||
                publisher.includes(searchTerm);
            
            if (matches) {
                card.style.display = 'block';
                visibleBooks++;
                hasResults = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Hide subject if no books match
        if (visibleBooks === 0) {
            subject.style.display = 'none';
        } else {
            subject.style.display = 'block';
            // Auto-expand if searching
            if (searchTerm !== '') {
                subject.classList.add('active');
                const content = subject.querySelector('.subject-accordion-content');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        }
    });
    
    // Show/hide no results message
    if (hasResults) {
        noResults.style.display = 'none';
    } else {
        noResults.style.display = 'flex';
    }
}

// Show error
function showError() {
    document.getElementById('pageTitle').textContent = 'Class Not Found';
    document.getElementById('subjectsContainer').innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            <h2>Oops!</h2>
            <p>The requested class was not found.</p>
            <a href="books.html" class="btn-primary">Back to Books</a>
        </div>
    `;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializeClassBooksPage);