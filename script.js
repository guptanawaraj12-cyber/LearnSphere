// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ==================== MOBILE MENU TOGGLE ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.feature-card, .subject-card, .class-card, .value-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==================== ACTIVE NAV LINK ====================
const currentLocation = location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// ==================== SEARCH MODAL ====================

const searchToggle = document.getElementById('searchToggle');
const searchModal = document.getElementById('searchModal');
const closeSearch = document.getElementById('closeSearch');
const modalSearchInput = document.getElementById('modalSearchInput');

// Open search modal
if (searchToggle) {
    searchToggle.addEventListener('click', () => {
        searchModal.classList.add('active');
        setTimeout(() => {
            modalSearchInput.focus();
        }, 100);
    });
}

// Close search modal
if (closeSearch) {
    closeSearch.addEventListener('click', () => {
        searchModal.classList.remove('active');
        modalSearchInput.value = '';
    });
}

// Close on overlay click
if (searchModal) {
    const overlay = searchModal.querySelector('.search-modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', () => {
            searchModal.classList.remove('active');
            modalSearchInput.value = '';
        });
    }
}

// Search on Enter
if (modalSearchInput) {
    modalSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = modalSearchInput.value.trim();
            if (query) {
                window.location.href = `notes.html?search=${encodeURIComponent(query)}`;
            } else {
                window.location.href = 'notes.html';
            }
        }
    });
}

// Global keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl+K or Cmd+K to open search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (searchModal) {
            searchModal.classList.add('active');
            setTimeout(() => {
                if (modalSearchInput) modalSearchInput.focus();
            }, 100);
        }
    }
    
    // Escape to close
    if (e.key === 'Escape') {
        if (searchModal && searchModal.classList.contains('active')) {
            searchModal.classList.remove('active');
            if (modalSearchInput) modalSearchInput.value = '';
        }
    }
});

console.log('🔍 Search modal initialized');