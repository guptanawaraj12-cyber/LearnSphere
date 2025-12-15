// ==================== BOOKS DATABASE ====================

const booksDatabase = {
    // CLASS 8 BOOKS
    '8': {
        science: [
            {
                id: 'b8s1',
                title: 'Science Book - Class 8',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official textbook for Class 8 Science covering Physics, Chemistry, and Biology',
                coverImage: 'images/books/class-8-science.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 250,
                language: 'English',
                isbn: '978-9937-0-0000-0'
            },
            {
                id: 'b8s2',
                title: 'Science Guide - Class 8',
                author: 'Asmita Publication',
                publisher: 'Asmita Books',
                description: 'Complete guide with solved questions and practice problems',
                coverImage: 'images/books/class-8-science-guide.jpg',
                price: 'Rs. 450',
                downloadLink: '#',
                buyLink: '#',
                pages: 320,
                language: 'English',
                isbn: '978-9937-0-0001-0'
            }
        ],
        math: [
            {
                id: 'b8m1',
                title: 'Mathematics - Class 8',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official mathematics textbook for Class 8',
                coverImage: 'images/books/class-8-math.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 280,
                language: 'English',
                isbn: '978-9937-0-0002-0'
            },
            {
                id: 'b8m2',
                title: 'Math Solution Book - Class 8',
                author: 'Sukunda Pustak Bhawan',
                publisher: 'Sukunda Publication',
                description: 'Step-by-step solutions for all math problems',
                coverImage: 'images/books/class-8-math-solution.jpg',
                price: 'Rs. 400',
                downloadLink: '#',
                buyLink: '#',
                pages: 300,
                language: 'English',
                isbn: '978-9937-0-0003-0'
            }
        ],
        english: [
            {
                id: 'b8e1',
                title: 'English - Class 8',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official English textbook for Class 8',
                coverImage: 'images/books/class-8-english.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 200,
                language: 'English',
                isbn: '978-9937-0-0004-0'
            }
        ],
        nepali: [
            {
                id: 'b8n1',
                title: 'नेपाली - कक्षा ८',
                author: 'CDC Nepal',
                publisher: 'पाठ्यक्रम विकास केन्द्र',
                description: 'कक्षा ८ को आधिकारिक नेपाली पाठ्यपुस्तक',
                coverImage: 'images/books/class-8-nepali.jpg',
                price: 'निःशुल्क',
                downloadLink: '#',
                buyLink: '#',
                pages: 220,
                language: 'Nepali',
                isbn: '978-9937-0-0005-0'
            }
        ],
        computer: [
            {
                id: 'b8c1',
                title: 'Computer Science - Class 8',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Introduction to computers and basic programming',
                coverImage: 'images/books/class-8-computer.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 180,
                language: 'English',
                isbn: '978-9937-0-0006-0'
            }
        ],
        'optional-math': [
            {
                id: 'b8om1',
                title: 'Optional Mathematics - Class 8',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Advanced mathematics for Class 8',
                coverImage: 'images/books/class-8-optional-math.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 300,
                language: 'English',
                isbn: '978-9937-0-0007-0'
            }
        ]
    },

    // CLASS 9 BOOKS
    '9': {
        science: [
            {
                id: 'b9s1',
                title: 'Science Book - Class 9',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official textbook for Class 9 Science',
                coverImage: 'images/books/class-9-science.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 280,
                language: 'English',
                isbn: '978-9937-0-0010-0'
            },
            {
                id: 'b9s2',
                title: 'Science Guide - Class 9',
                author: 'Asmita Publication',
                publisher: 'Asmita Books',
                description: 'Complete guide with solved questions',
                coverImage: 'images/books/class-9-science-guide.jpg',
                price: 'Rs. 500',
                downloadLink: '#',
                buyLink: '#',
                pages: 350,
                language: 'English',
                isbn: '978-9937-0-0011-0'
            }
        ],
        math: [
            {
                id: 'b9m1',
                title: 'Mathematics - Class 9',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official mathematics textbook for Class 9',
                coverImage: 'images/books/class-9-math.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 300,
                language: 'English',
                isbn: '978-9937-0-0012-0'
            }
        ],
        english: [
            {
                id: 'b9e1',
                title: 'English - Class 9',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official English textbook for Class 9',
                coverImage: 'images/books/class-9-english.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 220,
                language: 'English',
                isbn: '978-9937-0-0013-0'
            }
        ],
        nepali: [
            {
                id: 'b9n1',
                title: 'नेपाली - कक्षा ९',
                author: 'CDC Nepal',
                publisher: 'पाठ्यक्रम विकास केन्द्र',
                description: 'कक्षा ९ को आधिकारिक नेपाली पाठ्यपुस्तक',
                coverImage: 'images/books/class-9-nepali.jpg',
                price: 'निःशुल्क',
                downloadLink: '#',
                buyLink: '#',
                pages: 240,
                language: 'Nepali',
                isbn: '978-9937-0-0014-0'
            }
        ],
        computer: [
            {
                id: 'b9c1',
                title: 'Computer Science - Class 9',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Programming and database fundamentals',
                coverImage: 'images/books/class-9-computer.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 200,
                language: 'English',
                isbn: '978-9937-0-0015-0'
            }
        ],
        'optional-math': [
            {
                id: 'b9om1',
                title: 'Optional Mathematics - Class 9',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Advanced mathematics for Class 9',
                coverImage: 'images/books/class-9-optional-math.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 320,
                language: 'English',
                isbn: '978-9937-0-0016-0'
            }
        ],
        economics: [
            {
                id: 'b9ec1',
                title: 'Economics - Class 9',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Basic economics concepts for Class 9',
                coverImage: 'images/books/class-9-economics.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 180,
                language: 'English',
                isbn: '978-9937-0-0017-0'
            }
        ],
        accounts: [
            {
                id: 'b9a1',
                title: 'Accountancy - Class 9',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Introduction to accounting principles',
                coverImage: 'images/books/class-9-accounts.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 200,
                language: 'English',
                isbn: '978-9937-0-0018-0'
            }
        ]
    },

    // CLASS 10 BOOKS
    '10': {
        science: [
            {
                id: 'b10s1',
                title: 'Science Book - Class 10',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official textbook for Class 10 Science - Board Exam',
                coverImage: 'images/books/class-10-science.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 300,
                language: 'English',
                isbn: '978-9937-0-0020-0'
            },
            {
                id: 'b10s2',
                title: 'Science Guide - Class 10',
                author: 'Asmita Publication',
                publisher: 'Asmita Books',
                description: 'Complete board exam preparation guide',
                coverImage: 'images/books/class-10-science-guide.jpg',
                price: 'Rs. 550',
                downloadLink: '#',
                buyLink: '#',
                pages: 400,
                language: 'English',
                isbn: '978-9937-0-0021-0'
            },
            {
                id: 'b10s3',
                title: 'Science Model Questions - Class 10',
                author: 'Sukunda Pustak Bhawan',
                publisher: 'Sukunda Publication',
                description: 'Previous year questions and model papers',
                coverImage: 'images/books/class-10-science-model.jpg',
                price: 'Rs. 350',
                downloadLink: '#',
                buyLink: '#',
                pages: 250,
                language: 'English',
                isbn: '978-9937-0-0022-0'
            }
        ],
        math: [
            {
                id: 'b10m1',
                title: 'Mathematics - Class 10',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official mathematics textbook for Class 10',
                coverImage: 'images/books/class-10-math.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 320,
                language: 'English',
                isbn: '978-9937-0-0023-0'
            },
            {
                id: 'b10m2',
                title: 'Math Solution Book - Class 10',
                author: 'Sukunda Pustak Bhawan',
                publisher: 'Sukunda Publication',
                description: 'Complete solutions for board exam',
                coverImage: 'images/books/class-10-math-solution.jpg',
                price: 'Rs. 500',
                downloadLink: '#',
                buyLink: '#',
                pages: 380,
                language: 'English',
                isbn: '978-9937-0-0024-0'
            }
        ],
        english: [
            {
                id: 'b10e1',
                title: 'English - Class 10',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official English textbook for Class 10',
                coverImage: 'images/books/class-10-english.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 240,
                language: 'English',
                isbn: '978-9937-0-0025-0'
            }
        ],
        nepali: [
            {
                id: 'b10n1',
                title: 'नेपाली - कक्षा १०',
                author: 'CDC Nepal',
                publisher: 'पाठ्यक्रम विकास केन्द्र',
                description: 'कक्षा १० को आधिकारिक नेपाली पाठ्यपुस्तक',
                coverImage: 'images/books/class-10-nepali.jpg',
                price: 'निःशुल्क',
                downloadLink: '#',
                buyLink: '#',
                pages: 260,
                language: 'Nepali',
                isbn: '978-9937-0-0026-0'
            }
        ],
        computer: [
            {
                id: 'b10c1',
                title: 'Computer Science - Class 10',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Advanced programming and web development',
                coverImage: 'images/books/class-10-computer.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 220,
                language: 'English',
                isbn: '978-9937-0-0027-0'
            }
        ],
        'optional-math': [
            {
                id: 'b10om1',
                title: 'Optional Mathematics - Class 10',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Advanced mathematics for Class 10',
                coverImage: 'images/books/class-10-optional-math.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 340,
                language: 'English',
                isbn: '978-9937-0-0028-0'
            }
        ],
        economics: [
            {
                id: 'b10ec1',
                title: 'Economics - Class 10',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Economics for Class 10 board exam',
                coverImage: 'images/books/class-10-economics.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 200,
                language: 'English',
                isbn: '978-9937-0-0029-0'
            }
        ],
        accounts: [
            {
                id: 'b10a1',
                title: 'Accountancy - Class 10',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Accounting for Class 10 board exam',
                coverImage: 'images/books/class-10-accounts.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 220,
                language: 'English',
                isbn: '978-9937-0-0030-0'
            }
        ]
    },

    // CLASS 11 BOOKS
    '11': {
        physics: [
            {
                id: 'b11p1',
                title: 'Physics - Class 11',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official Physics textbook for Class 11 NEB',
                coverImage: 'images/books/class-11-physics.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 350,
                language: 'English',
                isbn: '978-9937-0-0031-0'
            },
            {
                id: 'b11p2',
                title: 'Physics Guide - Class 11',
                author: 'Asmita Publication',
                publisher: 'Asmita Books',
                description: 'Complete guide with solved numericals',
                coverImage: 'images/books/class-11-physics-guide.jpg',
                price: 'Rs. 650',
                downloadLink: '#',
                buyLink: '#',
                pages: 450,
                language: 'English',
                isbn: '978-9937-0-0032-0'
            }
        ],
        chemistry: [
            {
                id: 'b11c1',
                title: 'Chemistry - Class 11',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official Chemistry textbook for Class 11 NEB',
                coverImage: 'images/books/class-11-chemistry.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 330,
                language: 'English',
                isbn: '978-9937-0-0033-0'
            },
            {
                id: 'b11c2',
                title: 'Chemistry Guide - Class 11',
                author: 'Asmita Publication',
                publisher: 'Asmita Books',
                description: 'Complete guide with reactions and mechanisms',
                coverImage: 'images/books/class-11-chemistry-guide.jpg',
                price: 'Rs. 600',
                downloadLink: '#',
                buyLink: '#',
                pages: 420,
                language: 'English',
                isbn: '978-9937-0-0034-0'
            }
        ],
        math: [
            {
                id: 'b11m1',
                title: 'Mathematics - Class 11',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official Mathematics textbook for Class 11 NEB',
                coverImage: 'images/books/class-11-math.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 380,
                language: 'English',
                isbn: '978-9937-0-0035-0'
            },
            {
                id: 'b11m2',
                title: 'Math Solution - Class 11',
                author: 'Sukunda Pustak Bhawan',
                publisher: 'Sukunda Publication',
                description: 'Step-by-step solutions for all problems',
                coverImage: 'images/books/class-11-math-solution.jpg',
                price: 'Rs. 700',
                downloadLink: '#',
                buyLink: '#',
                pages: 500,
                language: 'English',
                isbn: '978-9937-0-0036-0'
            }
        ],
        biology: [
            {
                id: 'b11b1',
                title: 'Biology - Class 11',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official Biology textbook for Class 11 NEB',
                coverImage: 'images/books/class-11-biology.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 360,
                language: 'English',
                isbn: '978-9937-0-0037-0'
            },
            {
                id: 'b11b2',
                title: 'Biology Guide - Class 11',
                author: 'Asmita Publication',
                publisher: 'Asmita Books',
                description: 'Complete guide with diagrams and explanations',
                coverImage: 'images/books/class-11-biology-guide.jpg',
                price: 'Rs. 600',
                downloadLink: '#',
                buyLink: '#',
                pages: 440,
                language: 'English',
                isbn: '978-9937-0-0038-0'
            }
        ],
        english: [
            {
                id: 'b11e1',
                title: 'English - Class 11',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official English textbook for Class 11 NEB',
                coverImage: 'images/books/class-11-english.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 280,
                language: 'English',
                isbn: '978-9937-0-0039-0'
            }
        ],
        nepali: [
            {
                id: 'b11n1',
                title: 'नेपाली - कक्षा ११',
                author: 'CDC Nepal',
                publisher: 'पाठ्यक्रम विकास केन्द्र',
                description: 'कक्षा ११ को आधिकारिक नेपाली पाठ्यपुस्तक',
                coverImage: 'images/books/class-11-nepali.jpg',
                price: 'निःशुल्क',
                downloadLink: '#',
                buyLink: '#',
                pages: 300,
                language: 'Nepali',
                isbn: '978-9937-0-0040-0'
            }
        ]
    },

    // CLASS 12 BOOKS
    '12': {
        physics: [
            {
                id: 'b12p1',
                title: 'Physics - Class 12',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official Physics textbook for Class 12 NEB Board',
                coverImage: 'images/books/class-12-physics.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 370,
                language: 'English',
                isbn: '978-9937-0-0041-0'
            },
            {
                id: 'b12p2',
                title: 'Physics Guide - Class 12',
                author: 'Asmita Publication',
                publisher: 'Asmita Books',
                description: 'Complete board exam preparation guide',
                coverImage: 'images/books/class-12-physics-guide.jpg',
                price: 'Rs. 700',
                downloadLink: '#',
                buyLink: '#',
                pages: 480,
                language: 'English',
                isbn: '978-9937-0-0042-0'
            },
            {
                id: 'b12p3',
                title: 'Physics Model Questions - Class 12',
                author: 'Sukunda Pustak Bhawan',
                publisher: 'Sukunda Publication',
                description: 'Previous year questions and model papers',
                coverImage: 'images/books/class-12-physics-model.jpg',
                price: 'Rs. 400',
                downloadLink: '#',
                buyLink: '#',
                pages: 300,
                language: 'English',
                isbn: '978-9937-0-0043-0'
            }
        ],
        chemistry: [
            {
                id: 'b12c1',
                title: 'Chemistry - Class 12',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official Chemistry textbook for Class 12 NEB Board',
                coverImage: 'images/books/class-12-chemistry.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 350,
                language: 'English',
                isbn: '978-9937-0-0044-0'
            },
            {
                id: 'b12c2',
                title: 'Chemistry Guide - Class 12',
                author: 'Asmita Publication',
                publisher: 'Asmita Books',
                description: 'Complete board exam preparation guide',
                coverImage: 'images/books/class-12-chemistry-guide.jpg',
                price: 'Rs. 650',
                downloadLink: '#',
                buyLink: '#',
                pages: 450,
                language: 'English',
                isbn: '978-9937-0-0045-0'
            }
        ],
        math: [
            {
                id: 'b12m1',
                title: 'Mathematics - Class 12',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official Mathematics textbook for Class 12 NEB Board',
                coverImage: 'images/books/class-12-math.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 400,
                language: 'English',
                isbn: '978-9937-0-0046-0'
            },
            {
                id: 'b12m2',
                title: 'Math Solution - Class 12',
                author: 'Sukunda Pustak Bhawan',
                publisher: 'Sukunda Publication',
                description: 'Complete solutions for board exam',
                coverImage: 'images/books/class-12-math-solution.jpg',
                price: 'Rs. 750',
                downloadLink: '#',
                buyLink: '#',
                pages: 550,
                language: 'English',
                isbn: '978-9937-0-0047-0'
            }
        ],
        biology: [
            {
                id: 'b12b1',
                title: 'Biology - Class 12',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official Biology textbook for Class 12 NEB Board',
                coverImage: 'images/books/class-12-biology.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 380,
                language: 'English',
                isbn: '978-9937-0-0048-0'
            },
            {
                id: 'b12b2',
                title: 'Biology Guide - Class 12',
                author: 'Asmita Publication',
                publisher: 'Asmita Books',
                description: 'Complete board exam preparation guide',
                coverImage: 'images/books/class-12-biology-guide.jpg',
                price: 'Rs. 650',
                downloadLink: '#',
                buyLink: '#',
                pages: 470,
                language: 'English',
                isbn: '978-9937-0-0049-0'
            }
        ],
        english: [
            {
                id: 'b12e1',
                title: 'English - Class 12',
                author: 'CDC Nepal',
                publisher: 'Curriculum Development Centre',
                description: 'Official English textbook for Class 12 NEB Board',
                coverImage: 'images/books/class-12-english.jpg',
                price: 'Free',
                downloadLink: '#',
                buyLink: '#',
                pages: 300,
                language: 'English',
                isbn: '978-9937-0-0050-0'
            }
        ],
        nepali: [
            {
                id: 'b12n1',
                title: 'नेपाली - कक्षा १२',
                author: 'CDC Nepal',
                publisher: 'पाठ्यक्रम विकास केन्द्र',
                description: 'कक्षा १२ को आधिकारिक नेपाली पाठ्यपुस्तक',
                coverImage: 'images/books/class-12-nepali.jpg',
                price: 'निःशुल्क',
                downloadLink: '#',
                buyLink: '#',
                pages: 320,
                language: 'Nepali',
                isbn: '978-9937-0-0051-0'
            }
        ]
    }
};

// Subject names mapping
const subjectNames = {
    'science': 'Science',
    'math': 'Mathematics',
    'english': 'English',
    'nepali': 'Nepali',
    'computer': 'Computer Science',
    'optional-math': 'Optional Mathematics',
    'economics': 'Economics',
    'accounts': 'Accountancy',
    'physics': 'Physics',
    'chemistry': 'Chemistry',
    'biology': 'Biology'
};