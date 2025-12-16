// ==================== ORGANIZED BOOKS PAGE ====================

let currentClass = '8';
let currentSubjectFilter = 'all';
let searchTerm = '';

// Initialize page
function initializeBooksPage() {
    loadAllClassBooks();
    setupEventListeners();
    checkURLParams();
}

// Load books for all classes
function loadAllClassBooks() {
    Object.keys(booksDatabase).forEach(classNum => {
        loadBooksForClass(classNum);
    });
}

// Load books for a specific class
function loadBooksForClass(classNum) {
    const container = document.getElementById(`books-class-${classNum}`);
    if (!container) return;
    
    const classData = booksDatabase[classNum];
    let html = '';
    
    // Group books by subject
    Object.keys(classData).forEach(subject => {
        const books = classData[subject];
        const subjectName = subjectNames[subject] || subject;
        
        html += `
            <div class="subject-books-section" data-subject="${subject}">
                <div class="subject-header">
                    <h3>
                        <i class="${getSubjectIcon(subject)}"></i>
                        ${subjectName}
                    </h3>
                    <span class="books-count">${books.length} book${books.length !== 1 ? 's' : ''}</span>
                </div>
                
                <div class="books-grid">
                    ${books.map(book => createBookCard(book, classNum, subject)).join('')}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Create book card HTML
function createBookCard(book, classNum, subject) {
    return `
        <div class="book-card" data-title="${book.title.toLowerCase()}" data-author="${book.author.toLowerCase()}" data-publisher="${book.publisher.toLowerCase()}">
            <div class="book-image">
                <img src="${book.coverImage}" alt="${book.title}" onerror="this.src='https://via.placeholder.com/320x400/6366f1/ffffff?text=Book+Cover'">
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
    // Class tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const classNum = btn.dataset.class;
            switchClass(classNum);
        });
    });
    
    // Search input
    const searchInput = document.getElementById('searchBooks');
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        applyFilters();
    });
    
    // Clear search button
    const clearBtn = document.getElementById('clearSearch');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            document.getElementById('searchBooks').value = '';
            searchTerm = '';
            currentSubjectFilter = 'all';
            applyFilters();
        });
    }
    
    // Load subject pills for current class
    loadSubjectPills(currentClass);
    
    // Mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
    }
}

// Switch class tab
function switchClass(classNum) {
    currentClass = classNum;
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.class === classNum) {
            btn.classList.add('active');
        }
    });
    
    // Update active class container
    document.querySelectorAll('.class-books-container').forEach(container => {
        container.classList.remove('active');
    });
    document.getElementById(`class-${classNum}`).classList.add('active');
    
    // Load subject pills for new class
    loadSubjectPills(classNum);
    
    // Reset filters
    currentSubjectFilter = 'all';
    searchTerm = '';
    document.getElementById('searchBooks').value = '';
    
    // Apply filters
    applyFilters();
    
    // Scroll to top of books section
    document.querySelector('.books-content-section').scrollIntoView({ behavior: 'smooth' });
}

// Load subject filter pills
function loadSubjectPills(classNum) {
    const container = document.getElementById('subjectPills');
    const classData = booksDatabase[classNum];
    
    let html = `
        <button class="pill-btn active" data-subject="all">
            <i class="fas fa-th"></i> All Subjects
        </button>
    `;
    
    Object.keys(classData).forEach(subject => {
        const subjectName = subjectNames[subject] || subject;
        html += `
            <button class="pill-btn" data-subject="${subject}">
                <i class="${getSubjectIcon(subject)}"></i> ${subjectName}
            </button>
        `;
    });
    
    container.innerHTML = html;
    
    // Add click listeners to pills
    container.querySelectorAll('.pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentSubjectFilter = btn.dataset.subject;
            
            // Update active pill
            container.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            applyFilters();
        });
    });
}

// Apply filters
function applyFilters() {
    const activeContainer = document.querySelector('.class-books-container.active');
    const subjectSections = activeContainer.querySelectorAll('.subject-books-section');
    const noResultsMsg = document.getElementById('noResultsMessage');
    
    let hasVisibleBooks = false;
    
    subjectSections.forEach(section => {
        const subject = section.dataset.subject;
        const bookCards = section.querySelectorAll('.book-card');
        
        // Check if subject matches filter
        const subjectMatch = currentSubjectFilter === 'all' || subject === currentSubjectFilter;
        
        if (!subjectMatch) {
            section.style.display = 'none';
            return;
        }
        
        let visibleBooksInSection = 0;
        
        bookCards.forEach(card => {
            const title = card.dataset.title;
            const author = card.dataset.author;
            const publisher = card.dataset.publisher;
            
            const searchMatch = searchTerm === '' || 
                title.includes(searchTerm) ||
                author.includes(searchTerm) ||
                publisher.includes(searchTerm);
            
            if (searchMatch) {
                card.style.display = 'block';
                visibleBooksInSection++;
                hasVisibleBooks = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Hide section if no books visible
        section.style.display = visibleBooksInSection > 0 ? 'block' : 'none';
    });
    
    // Show/hide no results message
    if (hasVisibleBooks) {
        noResultsMsg.style.display = 'none';
        activeContainer.style.display = 'block';
    } else {
        noResultsMsg.style.display = 'flex';
        activeContainer.style.display = 'none';
    }
}

// Check URL parameters
function checkURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const classParam = urlParams.get('class');
    const subjectParam = urlParams.get('subject');
    
    if (classParam && booksDatabase[classParam]) {
        switchClass(classParam);
        
        if (subjectParam) {
            setTimeout(() => {
                const pillBtn = document.querySelector(`.pill-btn[data-subject="${subjectParam}"]`);
                if (pillBtn) {
                    pillBtn.click();
                }
            }, 100);
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializeBooksPage);