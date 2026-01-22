// ==================== NOTES SYSTEM ====================

console.log('📚 Notes system initializing...');

// ==================== LEVEL SWITCHING ====================

function showLevel(levelId) {
    console.log('🔄 Switching to level:', levelId);
    
    // Hide all level sections
    const sections = document.querySelectorAll('.level-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section
    const selectedSection = document.getElementById(levelId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        console.log('✅ Showing section:', levelId);
    } else {
        console.error('❌ Section not found:', levelId);
    }
    
    // Update active tab
    const tabs = document.querySelectorAll('.level-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Add active class to clicked tab
    const activeTab = Array.from(tabs).find(tab => 
        tab.textContent.toLowerCase().includes(levelId) ||
        tab.onclick?.toString().includes(levelId)
    );
    
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

// ==================== OPEN NOTES MODAL ====================

function openNotes(className, subjectName) {
    console.log(`📖 Opening notes for: ${className} - ${subjectName}`);
    
    // Check if content exists
    if (!window.notesContent) {
        console.error('❌ Content database not loaded!');
        alert('Content database not loaded. Please refresh the page.');
        return;
    }
    
    // Get subject data
    const classData = window.notesContent[className];
    
    if (!classData) {
        console.error(`❌ No content found for class: ${className}`);
        alert(`No content available for ${className}`);
        return;
    }
    
    const subjectData = classData[subjectName];
    
    if (!subjectData) {
        console.error(`❌ No content found for: ${className} ${subjectName}`);
        alert(`No content available for ${subjectName} in ${className}`);
        return;
    }
    
    console.log('✅ Found subject data:', subjectData.title);
    
    // Update modal title
    const modalTitle = document.getElementById('noteTitle');
    if (modalTitle) {
        modalTitle.textContent = subjectData.title;
    }
    
    // Generate topics list
    const noteContent = document.getElementById('noteContent');
    if (noteContent) {
        let html = `
            <div class="subject-info">
                <h3>${subjectData.title}</h3>
                <p>${subjectData.description}</p>
            </div>
            <div class="topics-list">
        `;
        
        subjectData.topics.forEach((topic, index) => {
            html += `
                <div class="topic-item" onclick="showTopicContent(${index}, '${className}', '${subjectName}')">
                    <div class="topic-header">
                        <h4><i class="fas fa-book-open"></i> ${topic.title}</h4>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        noteContent.innerHTML = html;
    }
    
    // Show modal
    const modal = document.getElementById('noteModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        console.log('✅ Modal opened');
    }
}

// ==================== SHOW TOPIC CONTENT ====================

function showTopicContent(topicIndex, className, subjectName) {
    console.log(`📄 Loading topic ${topicIndex} for ${className} - ${subjectName}`);
    
    const subjectData = window.notesContent[className][subjectName];
    const topic = subjectData.topics[topicIndex];
    
    if (!topic) {
        console.error('❌ Topic not found');
        return;
    }
    
    const noteContent = document.getElementById('noteContent');
    if (noteContent) {
        let html = `
            <div class="topic-navigation">
                <button onclick="openNotes('${className}', '${subjectName}')" class="back-btn">
                    <i class="fas fa-arrow-left"></i> Back to Topics
                </button>
            </div>
            <div class="topic-content">
                <h2>${topic.title}</h2>
                ${topic.content}
            </div>
        `;
        
        // Add PDF link if available
        if (topic.pdfUrl) {
            html += `
                <div class="resource-links">
                    <a href="${topic.pdfUrl}" target="_blank" class="resource-btn">
                        <i class="fas fa-file-pdf"></i> Download PDF
                    </a>
                </div>
            `;
        }
        
        // Add video link if available
        if (topic.videoUrl) {
            html += `
                <div class="resource-links">
                    <a href="${topic.videoUrl}" target="_blank" class="resource-btn">
                        <i class="fas fa-video"></i> Watch Video
                    </a>
                </div>
            `;
        }
        
        noteContent.innerHTML = html;
        noteContent.scrollTop = 0;
    }
}

// ==================== CLOSE MODAL ====================

function closeModal() {
    const modal = document.getElementById('noteModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        console.log('✅ Modal closed');
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('noteModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// ==================== DOWNLOAD PDF (FINAL WORKING VERSION) ====================

function downloadPDF() {
    const noteTitle = document.getElementById('noteTitle');
    const simpleContent = document.getElementById('simpleContent');
    const bookContent = document.getElementById('bookContent');

    const contentArea =
        simpleContent ||
        bookContent?.querySelector('.content-wrapper');

    if (!contentArea || !noteTitle) {
        alert('No content to download');
        return;
    }

    /* -------------------- Loading -------------------- */
    const loadingMsg = document.createElement('div');
    loadingMsg.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 16px;
        z-index: 999999;
    `;
    loadingMsg.textContent = 'Generating PDF...';
    document.body.appendChild(loadingMsg);

    /* -------------------- Clone Content -------------------- */
    const contentClone = contentArea.cloneNode(true);

    /* -------------------- Remove sidebar / UI -------------------- */
    contentClone.querySelectorAll(`
        nav, aside, header, footer,
        .sidebar, .toc, .menu,
        .floating-toc-btn,
        .floating-toc-panel,
        .topic-navigation,
        .back-btn
    `).forEach(el => el.remove());

    /* -------------------- Wrapper -------------------- */
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
        width: 210mm;
        padding: 15mm;
        background: white;
        font-family: Arial, sans-serif;
    `;

    wrapper.innerHTML = `
        <style>
            body { background: white; }

            /* hide any remaining fixed UI */
            nav, aside, header, footer {
                display: none !important;
            }

            h1 {
                font-size: 26px;
                text-align: center;
                margin-bottom: 18px;
                border-bottom: 3px solid #0070f3;
                padding-bottom: 12px;
            }

            h2 {
                font-size: 22px;
                margin: 22px 0 12px;
                page-break-after: avoid;
            }

            h3 {
                font-size: 18px;
                margin: 18px 0 10px;
                page-break-after: avoid;
            }

            p, li {
                font-size: 14px;
                line-height: 1.7;
                margin-bottom: 10px;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin: 14px 0;
                page-break-inside: avoid;
            }

            th, td {
                border: 1px solid #ccc;
                padding: 8px;
            }

            .content-section {
                page-break-inside: avoid;
            }
        </style>

        <h1>${noteTitle.textContent}</h1>

        <div style="text-align:center;font-size:12px;color:#666;margin-bottom:25px;">
            Gyanu Notes – Quality Education for Everyone
        </div>

        ${contentClone.innerHTML}

        <div style="margin-top:40px;border-top:1px solid #ddd;padding-top:10px;text-align:center;font-size:11px;color:#666;">
            © 2024 Gyanu Notes | Downloaded on ${new Date().toDateString()}
        </div>
    `;

    /* -------------------- PDF Options -------------------- */
    const opt = {
        margin: 0,
        filename: `${noteTitle.textContent}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    /* -------------------- Generate -------------------- */
    html2pdf()
        .set(opt)
        .from(wrapper)
        .save()
        .then(() => document.body.removeChild(loadingMsg))
        .catch(err => {
            console.error(err);
            document.body.removeChild(loadingMsg);
            alert('PDF generation failed');
        });
}


// ==================== PRINT NOTES ====================

function printNotes() {
    const noteContent = document.getElementById('noteContent');
    
    if (!noteContent) {
        alert('No content to print');
        return;
    }
    
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print Notes</title>');
    printWindow.document.write('<style>');
    printWindow.document.write(`
        body { 
            font-family: Arial, sans-serif; 
            padding: 20px; 
            line-height: 1.6;
        }
        h2, h3, h4 { 
            color: #333; 
            margin-top: 20px;
        }
        ul, ol { 
            margin-left: 20px; 
        }
        table { 
            border-collapse: collapse; 
            width: 100%; 
            margin: 20px 0;
        }
        th, td { 
            border: 1px solid #ddd; 
            padding: 8px; 
            text-align: left;
        }
        th { 
            background-color: #f2f2f2; 
        }
        .topic-navigation { 
            display: none; 
        }
    `);
    printWindow.document.write('</style></head><body>');
    printWindow.document.write(noteContent.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
    
    console.log('🖨️ Printing notes...');
}

// ==================== SEARCH FUNCTIONALITY ====================

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const clearSearchBtn = document.getElementById('clearSearch');

if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.trim();
        
        // Show/hide clear button
        if (clearSearchBtn) {
            clearSearchBtn.style.display = query ? 'flex' : 'none';
        }
        
        if (query.length < 2) {
            if (searchResults) {
                searchResults.style.display = 'none';
            }
            return;
        }
        
        performSearch(query);
    });
}

if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', function() {
        searchInput.value = '';
        searchResults.style.display = 'none';
        clearSearchBtn.style.display = 'none';
        searchInput.focus();
    });
}

function performSearch(query) {
    if (!window.notesContent) {
        console.error('❌ Content not loaded');
        return;
    }
    
    const results = [];
    const queryLower = query.toLowerCase();
    
    // Search through all content
    Object.keys(window.notesContent).forEach(className => {
        const classData = window.notesContent[className];
        
        Object.keys(classData).forEach(subjectName => {
            const subjectData = classData[subjectName];
            
            subjectData.topics.forEach((topic, topicIndex) => {
                // Search in title
                if (topic.title.toLowerCase().includes(queryLower)) {
                    results.push({
                        class: className,
                        subject: subjectName,
                        topic: topic.title,
                        topicIndex: topicIndex,
                        snippet: topic.title,
                        matchType: 'title'
                    });
                }
                
                // Search in content
                const contentText = topic.content.replace(/<[^>]*>/g, ' ').toLowerCase();
                if (contentText.includes(queryLower)) {
                    const index = contentText.indexOf(queryLower);
                    const start = Math.max(0, index - 50);
                    const end = Math.min(contentText.length, index + 100);
                    let snippet = contentText.substring(start, end);
                    
                    if (start > 0) snippet = '...' + snippet;
                    if (end < contentText.length) snippet = snippet + '...';
                    
                    results.push({
                        class: className,
                        subject: subjectName,
                        topic: topic.title,
                        topicIndex: topicIndex,
                        snippet: snippet,
                        matchType: 'content'
                    });
                }
            });
        });
    });
    
    displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
    if (!searchResults) return;
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="search-no-results">
                <i class="fas fa-search"></i>
                <p>No results found for "${query}"</p>
                <p style="font-size: 14px; margin-top: 8px;">Try different keywords or browse by class</p>
            </div>
        `;
        searchResults.style.display = 'block';
        return;
    }
    
    let html = `
        <div class="search-stats">
            Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"
        </div>
    `;
    
    // Limit to first 10 results
    results.slice(0, 10).forEach(result => {
        const highlightedSnippet = highlightText(result.snippet, query);
        
        html += `
            <div class="search-result-item" onclick="openSearchResult('${result.class}', '${result.subject}', ${result.topicIndex})">
                <div class="search-result-header">
                    <div>
                        <div class="search-result-title">${result.topic}</div>
                        <div class="search-result-meta">
                            <span><i class="fas fa-book"></i> ${result.class}</span>
                            <span><i class="fas fa-bookmark"></i> ${result.subject}</span>
                        </div>
                    </div>
                </div>
                <div class="search-result-snippet">${highlightedSnippet}</div>
            </div>
        `;
    });
    
    if (results.length > 10) {
        html += `
            <div class="search-stats">
                Showing first 10 results. Refine your search for more specific results.
            </div>
        `;
    }
    
    searchResults.innerHTML = html;
    searchResults.style.display = 'block';
}

function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

function openSearchResult(className, subjectName, topicIndex) {
    // Close search results
    if (searchResults) {
        searchResults.style.display = 'none';
    }
    if (searchInput) {
        searchInput.value = '';
    }
    if (clearSearchBtn) {
        clearSearchBtn.style.display = 'none';
    }
    
    // Open the note
    openNotes(className, subjectName);
    
    // Wait for modal to open, then show topic content
    setTimeout(() => {
        showTopicContent(topicIndex, className, subjectName);
    }, 100);
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', function() {
    console.log('📚 Notes system loaded');
    
    // Show school section by default
    showLevel('school');
    
    // Check if content is loaded
    if (window.notesContent) {
        const totalClasses = Object.keys(window.notesContent).length;
        console.log(`✅ Content loaded: ${totalClasses} classes available`);
    } else {
        console.error('❌ Content not loaded! Make sure content.js is included.');
    }
});

console.log('✅ Notes system initialized');
// ==================== BOOK-STYLE READER ====================

function openNotes(className, subjectName) {
    console.log(`📖 Opening notes for: ${className} - ${subjectName}`);
    
    // Check if content exists
    if (!window.notesContent) {
        console.error('❌ Content database not loaded!');
        alert('Content database not loaded. Please refresh the page.');
        return;
    }
    
    // Get subject data
    const classData = window.notesContent[className];
    
    if (!classData) {
        console.error(`❌ No content found for class: ${className}`);
        alert(`No content available for ${className}`);
        return;
    }
    
    const subjectData = classData[subjectName];
    
    if (!subjectData) {
        console.error(`❌ No content found for: ${className} ${subjectName}`);
        alert(`No content available for ${subjectName} in ${className}`);
        return;
    }
    
    console.log('✅ Found subject data:', subjectData.title);
    
    // Update modal title
    const modalTitle = document.getElementById('noteTitle');
    if (modalTitle) {
        modalTitle.textContent = subjectData.title;
    }
    
    // Generate book-style content with sidebar
    const noteContent = document.getElementById('noteContent');
    if (noteContent) {
        let html = `
            <div class="book-reader">
                <!-- Sidebar Table of Contents -->
                <div class="book-sidebar" id="bookSidebar">
                    <div class="sidebar-header">
                        <h3><i class="fas fa-list"></i> Table of Contents</h3>
                        <button class="toggle-sidebar" onclick="toggleSidebar()">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                    <div class="sidebar-content">
                        <ul class="toc-list">
        `;
        
        // Generate TOC
        subjectData.topics.forEach((topic, index) => {
            html += `
                <li class="toc-item ${index === 0 ? 'active' : ''}" onclick="scrollToTopic('topic-${index}')">
                    <i class="fas fa-book-open"></i>
                    <span>${topic.title}</span>
                </li>
            `;
        });
        
        html += `
                        </ul>
                    </div>
                    
                    <!-- Reading Progress -->
                    <div class="reading-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" id="progressFill"></div>
                        </div>
                        <p class="progress-text" id="progressText">0% Complete</p>
                    </div>
                </div>
                
                <!-- Main Content Area -->
                <div class="book-content" id="bookContent">
                    <div class="content-wrapper">
        `;
        
        // Generate content for each topic
        subjectData.topics.forEach((topic, index) => {
            html += `
                <div class="topic-section" id="topic-${index}" data-topic-index="${index}">
                    ${topic.content}
                </div>
            `;
            
            // Add divider between topics (except last one)
            if (index < subjectData.topics.length - 1) {
                html += `
                    <div class="topic-divider">
                        <span>• • •</span>
                    </div>
                `;
            }
        });
        
        html += `
                    </div>
                </div>
            </div>
        `;
        
        noteContent.innerHTML = html;
        
        // Initialize reading progress tracker
        initializeReadingProgress();
    }
    
    // Show modal
    const modal = document.getElementById('noteModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        console.log('✅ Modal opened');
    }
}

// Toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('bookSidebar');
    if (sidebar) {
        sidebar.classList.toggle('collapsed');
    }
}

// Scroll to specific topic
function scrollToTopic(topicId) {
    const topic = document.getElementById(topicId);
    const bookContent = document.getElementById('bookContent');
    
    if (topic && bookContent) {
        // Smooth scroll to topic
        topic.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Update active state in TOC
        document.querySelectorAll('.toc-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const topicIndex = topic.getAttribute('data-topic-index');
        const tocItems = document.querySelectorAll('.toc-item');
        if (tocItems[topicIndex]) {
            tocItems[topicIndex].classList.add('active');
        }
    }
}

// Initialize reading progress tracker
function initializeReadingProgress() {
    const bookContent = document.getElementById('bookContent');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (!bookContent || !progressFill || !progressText) return;
    
    bookContent.addEventListener('scroll', function() {
        const scrollTop = bookContent.scrollTop;
        const scrollHeight = bookContent.scrollHeight - bookContent.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        
        progressFill.style.width = scrollPercent + '%';
        progressText.textContent = Math.round(scrollPercent) + '% Complete';
        
        // Update active TOC item based on scroll position
        updateActiveTOC();
    });
}

// Update active TOC item based on visible content
function updateActiveTOC() {
    const bookContent = document.getElementById('bookContent');
    const topics = document.querySelectorAll('.topic-section');
    const tocItems = document.querySelectorAll('.toc-item');
    
    if (!bookContent || topics.length === 0) return;
    
    let activeIndex = 0;
    const scrollTop = bookContent.scrollTop + 100; // Offset for better UX
    
    topics.forEach((topic, index) => {
        if (topic.offsetTop <= scrollTop) {
            activeIndex = index;
        }
    });
    
    // Update active state
    tocItems.forEach((item, index) => {
        if (index === activeIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}