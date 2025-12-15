// ==================== BOOKS PAGE JAVASCRIPT ====================

let allBooks = [];
let filteredBooks = [];

// Initialize page
function initializeBooksPage() {
    loadAllBooks();
    displayBooks(allBooks);
    setupEventListeners();
}

// Load all books from database
function loadAllBooks() {
    allBooks = [];
    
    // Loop through all classes
    Object.keys(booksDatabase).forEach(classNum => {
        // Loop through all subjects in each class
        Object.keys(booksDatabase[classNum]).forEach(subject => {
            // Add each book with class and subject info
            booksDatabase[classNum][subject].forEach(book => {
                allBooks.push({
                    ...book,
                    class: classNum,
                    subject: subject,
                    subjectName: subjectNames[subject] || subject
                });
            });
        });
    });
    
    filteredBooks = [...allBooks];
}

// Display books in grid
function displayBooks(books) {
    const grid = document.getElementById('booksGrid');
    const noMessage = document.getElementById('noBooksMessage');
    const resultsCount = document.getElementById('resultsCount');
    
    if (books.length === 0) {
        grid.innerHTML = '';
        noMessage.style.display = 'block';
        resultsCount.textContent = 'No books found';
        return;
    }
    
    noMessage.style.display = 'none';
    resultsCount.textContent = `Showing ${books.length} book${books.length !== 1 ? 's' : ''}`;
    
    grid.innerHTML = books.map(book => `
        <div class="book-card" data-class="${book.class}" data-subject="${book.subject}">
            <div class="book-image">
                <img src="${book.coverImage}" alt="${book.title}" onerror="this.src='images/books/placeholder.jpg'">
                <div class="book-badge">Class ${book.class}</div>
                ${book.price === 'Free' || book.price === 'निःशुल्क' ? 
                    '<div class="free-badge">FREE</div>' : ''}
            </div>
            
            <div class="book-content">
                <div class="book-subject-tag">${book.subjectName}</div>
                <h3 class="book-title">${book.title}</h3>
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
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    const classFilter = document.getElementById('classFilter');
    const subjectFilter = document.getElementById('subjectFilter');
    const searchInput = document.getElementById('searchBooks');
    const resetBtn = document.getElementById('resetFilters');
    
    // Class filter
    classFilter.addEventListener('change', applyFilters);
    
    // Subject filter
    subjectFilter.addEventListener('change', applyFilters);
    
    // Search input
    searchInput.addEventListener('input', applyFilters);
    
    // Reset button
    resetBtn.addEventListener('click', resetFilters);
    
    // Mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
    }
}

// Apply filters
function applyFilters() {
    const classFilter = document.getElementById('classFilter').value;
    const subjectFilter = document.getElementById('subjectFilter').value;
    const searchTerm = document.getElementById('searchBooks').value.toLowerCase();
    
    filteredBooks = allBooks.filter(book => {
        // Class filter
        const classMatch = classFilter === 'all' || book.class === classFilter;
        
        // Subject filter
        const subjectMatch = subjectFilter === 'all' || book.subject === subjectFilter;
        
        // Search filter
        const searchMatch = searchTerm === '' || 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.publisher.toLowerCase().includes(searchTerm) ||
            book.description.toLowerCase().includes(searchTerm);
        
        return classMatch && subjectMatch && searchMatch;
    });
    
    displayBooks(filteredBooks);
}

// Reset filters
function resetFilters() {
    document.getElementById('classFilter').value = 'all';
    document.getElementById('subjectFilter').value = 'all';
    document.getElementById('searchBooks').value = '';
    
    filteredBooks = [...allBooks];
    displayBooks(filteredBooks);
}

// Check URL parameters for direct filtering
function checkURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const classParam = urlParams.get('class');
    const subjectParam = urlParams.get('subject');
    
    if (classParam) {
        document.getElementById('classFilter').value = classParam;
    }
    
    if (subjectParam) {
        document.getElementById('subjectFilter').value = subjectParam;
    }
    
    if (classParam || subjectParam) {
        applyFilters();
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeBooksPage();
    checkURLParams();
});