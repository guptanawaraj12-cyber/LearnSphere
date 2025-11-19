const notesContainer = document.getElementById('notesContainer');
const classFilter = document.getElementById('classFilter');
const subjectFilter = document.getElementById('subjectFilter');

const noteContentDiv = document.getElementById('noteContent');
const noteTitleEl = document.getElementById('noteTitle');
const noteTextEl = document.getElementById('noteText');
const downloadBtn = document.getElementById('downloadBtn');

// Hamburger menu toggle
const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Full sample notes for Classes 8–12 NEB subjects
const notes = [
  // Class 8
  { title: "Math Chapter 1", class: 8, subject: "Math", content: "Class 8 Math Chapter 1 content..." },
  { title: "Science Chapter 1", class: 8, subject: "Science", content: "Class 8 Science Chapter 1 content..." },
  { title: "English Chapter 1", class: 8, subject: "English", content: "Class 8 English Chapter 1 content..." },

  // Class 9
  { title: "Math Chapter 1", class: 9, subject: "Math", content: "Class 9 Math Chapter 1 content..." },
  { title: "Physics Chapter 1", class: 9, subject: "Physics", content: "Class 9 Physics Chapter 1 content..." },
  { title: "Nepali Chapter 1", class: 9, subject: "Nepali", content: "Class 9 Nepali Chapter 1 content..." },

  // Class 10
  { title: "Math Chapter 1", class: 10, subject: "Math", content: "Class 10 Math Chapter 1 content..." },
  { title: "Chemistry Chapter 1", class: 10, subject: "Chemistry", content: "Class 10 Chemistry Chapter 1 content..." },
  { title: "English Chapter 1", class: 10, subject: "English", content: "Class 10 English Chapter 1 content..." },

  // Class 11
  { title: "Physics Chapter 1", class: 11, subject: "Physics", content: "Class 11 Physics Chapter 1 content..." },
  { title: "Chemistry Chapter 1", class: 11, subject: "Chemistry", content: "Class 11 Chemistry Chapter 1 content..." },
  { title: "Biology Chapter 1", class: 11, subject: "Biology", content: "Class 11 Biology Chapter 1 content..." },
  { title: "Math Chapter 1", class: 11, subject: "Math", content: "Class 11 Math Chapter 1 content..." },

  // Class 12
  { title: "Physics Chapter 1", class: 12, subject: "Physics", content: "Class 12 Physics Chapter 1 content..." },
  { title: "Chemistry Chapter 1", class: 12, subject: "Chemistry", content: "Class 12 Chemistry Chapter 1 content..." },
  { title: "Biology Chapter 1", class: 12, subject: "Biology", content: "Class 12 Biology Chapter 1 content..." },
  { title: "Math Chapter 1", class: 12, subject: "Math", content: "Class 12 Math Chapter 1 content..." },
  { title: "Economics Chapter 1", class: 12, subject: "Economics", content: "Class 12 Economics Chapter 1 content..." }
];

// Display notes list
function displayNotes(filteredNotes) {
  notesContainer.innerHTML = '';
  noteContentDiv.style.display = 'none';
  downloadBtn.style.display = 'inline-block';

  if (filteredNotes.length === 0) {
    noteContentDiv.style.display = 'block';
    noteTitleEl.textContent = "";
    noteTextEl.textContent = "Sorry, note is not available.";
    downloadBtn.style.display = 'none';
    return;
  }

  filteredNotes.forEach(note => {
    const noteCard = document.createElement('div');
    noteCard.className = 'note-card';
    noteCard.innerHTML = `
      <h3>${note.title}</h3>
      <p>Class: ${note.class} | Subject: ${note.subject}</p>
      <button class="viewBtn">View Note</button>
    `;
    notesContainer.appendChild(noteCard);

    noteCard.querySelector('.viewBtn').addEventListener('click', () => showNote(note));
  });
}

// Show note content
function showNote(note) {
  noteTitleEl.textContent = note.title;
  noteTextEl.textContent = note.content;
  noteContentDiv.style.display = 'block';
  downloadBtn.style.display = 'inline-block';

  downloadBtn.onclick = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(note.content, 180);
    doc.text(lines, 10, 10);
    doc.save(`${note.title}.pdf`);
  };

  noteContentDiv.scrollIntoView({ behavior: 'smooth' });
}

// Filter notes
function filterNotes() {
  const selectedClass = classFilter.value;
  const selectedSubject = subjectFilter.value;

  const filtered = notes.filter(note => {
    const matchesClass = selectedClass === 'all' || note.class == selectedClass;
    const matchesSubject = selectedSubject === 'all' || note.subject === selectedSubject;
    return matchesClass && matchesSubject;
  });

  displayNotes(filtered);
}

// Initial display
displayNotes(notes);

// Event listeners
classFilter.addEventListener('change', filterNotes);
subjectFilter.addEventListener('change', filterNotes);
