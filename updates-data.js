// ==================== LATEST UPDATES DATABASE ====================

const latestUpdates = [
    {
        id: 'u001',
        type: 'note', // 'note', 'book', 'announcement'
        title: 'Class 10 Science Chapter 5 - Chemical Reactions',
        description: 'Complete notes with diagrams and solved examples',
        class: '10',
        subject: 'Science',
        link: 'note-detail.html?id=n10s5',
        date: '2024-12-17',
        badge: 'New',
        icon: 'fas fa-file-alt'
    },
    {
        id: 'u002',
        type: 'book',
        title: 'Class 12 Physics Guide - Asmita Publication',
        description: 'Complete board exam preparation guide with solutions',
        class: '12',
        subject: 'Physics',
        link: 'class-books.html?class=12',
        date: '2024-12-16',
        badge: 'New',
        icon: 'fas fa-book'
    },
    {
        id: 'u003',
        type: 'note',
        title: 'Class 11 Chemistry - Organic Chemistry Notes',
        description: 'Detailed notes on organic chemistry reactions',
        class: '11',
        subject: 'Chemistry',
        link: 'class-notes.html?class=11&subject=chemistry',
        date: '2024-12-15',
        badge: 'Updated',
        icon: 'fas fa-file-alt'
    },
    {
        id: 'u004',
        type: 'book',
        title: 'Class 9 Mathematics Solution Book',
        description: 'Step-by-step solutions for all math problems',
        class: '9',
        subject: 'Mathematics',
        link: 'class-books.html?class=9',
        date: '2024-12-14',
        badge: 'New',
        icon: 'fas fa-book'
    },
    {
        id: 'u005',
        type: 'announcement',
        title: 'SEE 2025 Exam Routine Published',
        description: 'Check the official SEE exam schedule for 2025',
        class: '10',
        subject: 'General',
        link: '#',
        date: '2024-12-13',
        badge: 'Important',
        icon: 'fas fa-bullhorn'
    },
    {
        id: 'u006',
        type: 'note',
        title: 'Class 8 English Grammar - Tenses',
        description: 'Complete guide to all tenses with examples',
        class: '8',
        subject: 'English',
        link: 'class-notes.html?class=8&subject=english',
        date: '2024-12-12',
        badge: 'New',
        icon: 'fas fa-file-alt'
    },
    {
        id: 'u007',
        type: 'book',
        title: 'Class 11 Biology Textbook - CDC Nepal',
        description: 'Official NEB curriculum biology textbook',
        class: '11',
        subject: 'Biology',
        link: 'class-books.html?class=11',
        date: '2024-12-11',
        badge: 'New',
        icon: 'fas fa-book'
    },
    {
        id: 'u008',
        type: 'note',
        title: 'Class 12 Math - Calculus Complete Notes',
        description: 'Differentiation and integration with solved problems',
        class: '12',
        subject: 'Mathematics',
        link: 'class-notes.html?class=12&subject=math',
        date: '2024-12-10',
        badge: 'Updated',
        icon: 'fas fa-file-alt'
    }
];

// Helper function to get recent updates
function getRecentUpdates(limit = 6) {
    return latestUpdates.slice(0, limit);
}

// Helper function to format date
function formatUpdateDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}