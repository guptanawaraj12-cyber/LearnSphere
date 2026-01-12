// ==================== NOTES CONTENT DATABASE ====================

const notesContent = {
    // ==================== SECONDARY LEVEL ====================
    "Class 8": {
        "Mathematics": {
            title: "Class 8 Mathematics",
            description: "Complete mathematics notes for Class 8",
            topics: [
                {
                    title: "Chapter 1: Rational Numbers",
                    content: `
                        <h2>Rational Numbers</h2>
                        
                        <h3>What are Rational Numbers?</h3>
                        <p>A rational number is a number that can be expressed as a fraction p/q where p and q are integers and q ≠ 0.</p>
                        
                        <h3>Examples:</h3>
                        <ul>
                            <li>1/2 is a rational number</li>
                            <li>-3/4 is a rational number</li>
                            <li>5 is a rational number (can be written as 5/1)</li>
                            <li>0 is a rational number (can be written as 0/1)</li>
                        </ul>
                        
                        <h3>Properties of Rational Numbers:</h3>
                        <ol>
                            <li><strong>Closure Property:</strong> Sum of two rational numbers is always rational</li>
                            <li><strong>Commutative Property:</strong> a + b = b + a</li>
                            <li><strong>Associative Property:</strong> (a + b) + c = a + (b + c)</li>
                            <li><strong>Identity Element:</strong> 0 is the additive identity</li>
                        </ol>
                        
                        <h3>Practice Problems:</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>Q1:</strong> Add 2/3 and 4/5</p>
                            <p><strong>Solution:</strong> (2×5 + 4×3) / (3×5) = (10 + 12) / 15 = 22/15</p>
                        </div>
                    `,
                    pdfUrl: "https://example.com/class8-math-ch1.pdf", // Optional
                    videoUrl: "https://youtube.com/watch?v=xxxxx" // Optional
                },
                {
                    title: "Chapter 2: Linear Equations",
                    content: `
                        <h2>Linear Equations in One Variable</h2>
                        
                        <h3>Definition:</h3>
                        <p>An equation of the form ax + b = 0, where a ≠ 0, is called a linear equation in one variable.</p>
                        
                        <h3>Standard Form:</h3>
                        <p>ax + b = 0</p>
                        
                        <h3>Steps to Solve:</h3>
                        <ol>
                            <li>Simplify both sides of the equation</li>
                            <li>Move all terms with variable to one side</li>
                            <li>Move all constants to the other side</li>
                            <li>Divide both sides by coefficient of variable</li>
                        </ol>
                        
                        <h3>Example:</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>Solve:</strong> 3x + 5 = 20</p>
                            <p><strong>Step 1:</strong> 3x = 20 - 5</p>
                            <p><strong>Step 2:</strong> 3x = 15</p>
                            <p><strong>Step 3:</strong> x = 15/3</p>
                            <p><strong>Answer:</strong> x = 5</p>
                        </div>
                    `
                }
            ]
        },
        "Science": {
            title: "Class 8 Science",
            description: "Complete science notes for Class 8",
            topics: [
                {
                    title: "Chapter 1: Crop Production and Management",
                    content: `
                        <h2>Crop Production and Management</h2>
                        
                        <h3>Agricultural Practices:</h3>
                        <ol>
                            <li><strong>Preparation of Soil:</strong> Turning and loosening of soil</li>
                            <li><strong>Sowing:</strong> Planting seeds in the soil</li>
                            <li><strong>Adding Manure and Fertilizers:</strong> Providing nutrients</li>
                            <li><strong>Irrigation:</strong> Supplying water to crops</li>
                            <li><strong>Protection from Weeds:</strong> Removing unwanted plants</li>
                            <li><strong>Harvesting:</strong> Cutting and gathering crops</li>
                            <li><strong>Storage:</strong> Keeping crops safe</li>
                        </ol>
                        
                        <h3>Types of Crops:</h3>
                        <ul>
                            <li><strong>Kharif Crops:</strong> Sown in rainy season (June-July)</li>
                            <li><strong>Rabi Crops:</strong> Sown in winter season (October-November)</li>
                        </ul>
                        
                        <img src="https://via.placeholder.com/600x300?text=Crop+Production+Diagram" alt="Crop Production" style="max-width: 100%; border-radius: 8px; margin: 1rem 0;">
                    `
                }
            ]
        },
        "English": {
            title: "Class 8 English",
            description: "Complete English notes for Class 8",
            topics: [
                {
                    title: "Grammar: Parts of Speech",
                    content: `
                        <h2>Parts of Speech</h2>
                        
                        <h3>8 Parts of Speech:</h3>
                        
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <h4>1. Noun</h4>
                            <p>A word that names a person, place, thing, or idea.</p>
                            <p><strong>Examples:</strong> boy, school, book, happiness</p>
                        </div>
                        
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <h4>2. Pronoun</h4>
                            <p>A word that takes the place of a noun.</p>
                            <p><strong>Examples:</strong> he, she, it, they, we</p>
                        </div>
                        
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <h4>3. Verb</h4>
                            <p>A word that shows action or state of being.</p>
                            <p><strong>Examples:</strong> run, jump, is, are, was</p>
                        </div>
                        
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <h4>4. Adjective</h4>
                            <p>A word that describes a noun.</p>
                            <p><strong>Examples:</strong> beautiful, tall, smart, red</p>
                        </div>
                    `
                }
            ]
        }
    },
    
    "Class 9": {
        "Mathematics": {
            title: "Class 9 Mathematics",
            description: "Complete mathematics notes for Class 9",
            topics: [
                {
                    title: "Chapter 1: Number Systems",
                    content: `
                        <h2>Number Systems</h2>
                        
                        <h3>Types of Numbers:</h3>
                        <ul>
                            <li><strong>Natural Numbers (N):</strong> 1, 2, 3, 4, ...</li>
                            <li><strong>Whole Numbers (W):</strong> 0, 1, 2, 3, ...</li>
                            <li><strong>Integers (Z):</strong> ..., -2, -1, 0, 1, 2, ...</li>
                            <li><strong>Rational Numbers (Q):</strong> Numbers that can be expressed as p/q</li>
                            <li><strong>Irrational Numbers:</strong> Numbers that cannot be expressed as p/q</li>
                            <li><strong>Real Numbers (R):</strong> All rational and irrational numbers</li>
                        </ul>
                        
                        <h3>Important Formulas:</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>√(a × b) = √a × √b</strong></p>
                            <p><strong>√(a/b) = √a / √b</strong></p>
                            <p><strong>(√a + √b)(√a - √b) = a - b</strong></p>
                        </div>
                    `
                }
            ]
        },
        "Science": {
            title: "Class 9 Science",
            description: "Complete science notes for Class 9",
            topics: [
                {
                    title: "Chapter 1: Matter in Our Surroundings",
                    content: `
                        <h2>Matter in Our Surroundings</h2>
                        
                        <h3>What is Matter?</h3>
                        <p>Anything that occupies space and has mass is called matter.</p>
                        
                        <h3>Characteristics of Matter:</h3>
                        <ol>
                            <li>Matter is made up of particles</li>
                            <li>Particles have space between them</li>
                            <li>Particles are continuously moving</li>
                            <li>Particles attract each other</li>
                        </ol>
                        
                        <h3>States of Matter:</h3>
                        <ul>
                            <li><strong>Solid:</strong> Fixed shape and volume</li>
                            <li><strong>Liquid:</strong> Fixed volume but no fixed shape</li>
                            <li><strong>Gas:</strong> No fixed shape or volume</li>
                        </ul>
                    `
                }
            ]
        }
    },
    
    "Class 10": {
        "Mathematics": {
            title: "Class 10 Mathematics",
            description: "Complete mathematics notes for Class 10",
            topics: [
                {
                    title: "Chapter 1: Real Numbers",
                    content: `
                        <h2>Real Numbers</h2>
                        
                        <h3>Euclid's Division Lemma:</h3>
                        <p>For any two positive integers a and b, there exist unique integers q and r such that:</p>
                        <p style="text-align: center; font-size: 1.2em; margin: 1rem 0;"><strong>a = bq + r, where 0 ≤ r < b</strong></p>
                        
                        <h3>Fundamental Theorem of Arithmetic:</h3>
                        <p>Every composite number can be expressed as a product of primes, and this factorization is unique.</p>
                        
                        <h3>HCF and LCM:</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>HCF × LCM = Product of two numbers</strong></p>
                            <p><strong>Example:</strong> HCF(12, 18) × LCM(12, 18) = 12 × 18</p>
                        </div>
                    `
                }
            ]
        }
    },
    
    // ==================== HIGHER SECONDARY ====================
    "Class 11": {
        "Mathematics": {
            title: "Class 11 Mathematics",
            description: "Complete mathematics notes for Class 11",
            topics: [
                {
                    title: "Chapter 1: Sets",
                    content: `
                        <h2>Sets</h2>
                        
                        <h3>Definition:</h3>
                        <p>A set is a well-defined collection of distinct objects.</p>
                        
                        <h3>Types of Sets:</h3>
                        <ul>
                            <li><strong>Empty Set:</strong> A set with no elements (∅)</li>
                            <li><strong>Finite Set:</strong> A set with countable elements</li>
                            <li><strong>Infinite Set:</strong> A set with uncountable elements</li>
                            <li><strong>Universal Set:</strong> Set containing all elements under consideration</li>
                        </ul>
                        
                        <h3>Set Operations:</h3>
                        <ul>
                            <li><strong>Union (A ∪ B):</strong> All elements in A or B</li>
                            <li><strong>Intersection (A ∩ B):</strong> Common elements in A and B</li>
                            <li><strong>Difference (A - B):</strong> Elements in A but not in B</li>
                            <li><strong>Complement (A'):</strong> Elements not in A</li>
                        </ul>
                    `
                }
            ]
        }
    },
    
    "Class 12": {
        "Mathematics": {
            title: "Class 12 Mathematics",
            description: "Complete mathematics notes for Class 12",
            topics: [
                {
                    title: "Chapter 1: Relations and Functions",
                    content: `
                        <h2>Relations and Functions</h2>
                        
                        <h3>Types of Relations:</h3>
                        <ul>
                            <li><strong>Reflexive:</strong> (a, a) ∈ R for all a</li>
                            <li><strong>Symmetric:</strong> If (a, b) ∈ R, then (b, a) ∈ R</li>
                            <li><strong>Transitive:</strong> If (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R</li>
                            <li><strong>Equivalence:</strong> Reflexive, Symmetric, and Transitive</li>
                        </ul>
                        
                        <h3>Types of Functions:</h3>
                        <ul>
                            <li><strong>One-One (Injective):</strong> Different elements have different images</li>
                            <li><strong>Onto (Surjective):</strong> Every element in codomain has a pre-image</li>
                            <li><strong>Bijective:</strong> Both one-one and onto</li>
                        </ul>
                    `
                }
            ]
        }
    },
    
    // ==================== CTEVT ====================
    "HA Year 1": {
        "Anatomy": {
            title: "Human Anatomy - Year 1",
            description: "Complete anatomy notes for HA Year 1",
            topics: [
                {
                    title: "Chapter 1: Introduction to Anatomy",
                    content: `
                        <h2>Introduction to Human Anatomy</h2>
                        
                        <h3>What is Anatomy?</h3>
                        <p>Anatomy is the science that studies the structure of the body and the relationships between body parts.</p>
                        
                        <h3>Branches of Anatomy:</h3>
                        <ul>
                            <li><strong>Gross Anatomy:</strong> Study of structures visible to naked eye</li>
                            <li><strong>Microscopic Anatomy:</strong> Study of structures using microscope</li>
                            <li><strong>Developmental Anatomy:</strong> Study of structural changes from conception to maturity</li>
                            <li><strong>Pathological Anatomy:</strong> Study of diseased organs</li>
                        </ul>
                        
                        <h3>Anatomical Position:</h3>
                        <p>Standard reference position where body is standing upright, feet together, arms at sides, palms facing forward.</p>
                    `
                }
            ]
        }
    },
    
    "Pharmacy Year 1": {
        "Pharmaceutics": {
            title: "Pharmaceutics - Year 1",
            description: "Complete pharmaceutics notes for Pharmacy Year 1",
            topics: [
                {
                    title: "Chapter 1: Introduction to Pharmaceutics",
                    content: `
                        <h2>Introduction to Pharmaceutics</h2>
                        
                        <h3>Definition:</h3>
                        <p>Pharmaceutics is the science of dosage form design and drug delivery systems.</p>
                        
                        <h3>Dosage Forms:</h3>
                        <ul>
                            <li><strong>Solid:</strong> Tablets, Capsules, Powders</li>
                            <li><strong>Liquid:</strong> Solutions, Suspensions, Emulsions</li>
                            <li><strong>Semi-solid:</strong> Ointments, Creams, Gels</li>
                            <li><strong>Gaseous:</strong> Aerosols, Inhalers</li>
                        </ul>
                        
                        <h3>Routes of Administration:</h3>
                        <ol>
                            <li>Oral</li>
                            <li>Parenteral (Injection)</li>
                            <li>Topical</li>
                            <li>Inhalation</li>
                        </ol>
                    `
                }
            ]
        }
    }
};

// Export for use in other files
window.notesContent = notesContent;