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

// ==================== DOWNLOAD PDF ====================

function downloadPDF() {
    const noteContent = document.getElementById('noteContent');
    const noteTitle = document.getElementById('noteTitle');
    
    if (!noteContent || !noteTitle) {
        alert('No content to download');
        return;
    }
    
    const opt = {
        margin: 1,
        filename: `${noteTitle.textContent}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(noteContent).save();
    console.log('📥 Downloading PDF...');
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