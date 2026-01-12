// ==================== GYANU NOTES CONTENT DATABASE ====================
// Complete notes structure for all classes and subjects

const notesContent = {
    
    // ==================== CLASS 8 ====================
    "Class 8": {
        "Mathematics": {
            title: "Class 8 Mathematics",
            description: "Complete mathematics notes for Class 8 covering all chapters",
            topics: [
                {
                    title: "Chapter 1: Rational Numbers",
                    content: `
                        <h2>Rational Numbers</h2>
                        
                        <h3>Introduction</h3>
                        <p>A rational number is a number that can be expressed as a fraction p/q where p and q are integers and q ≠ 0.</p>
                        
                        <h3>Properties of Rational Numbers</h3>
                        <ul>
                            <li><strong>Closure Property:</strong> Sum, difference, and product of two rational numbers is always a rational number</li>
                            <li><strong>Commutative Property:</strong> a + b = b + a and a × b = b × a</li>
                            <li><strong>Associative Property:</strong> (a + b) + c = a + (b + c)</li>
                            <li><strong>Distributive Property:</strong> a × (b + c) = (a × b) + (a × c)</li>
                        </ul>
                        
                        <h3>Examples</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>Q1:</strong> Add 2/3 and 4/5</p>
                            <p><strong>Solution:</strong></p>
                            <p>LCM of 3 and 5 = 15</p>
                            <p>2/3 = (2×5)/(3×5) = 10/15</p>
                            <p>4/5 = (4×3)/(5×3) = 12/15</p>
                            <p>Sum = 10/15 + 12/15 = 22/15</p>
                        </div>
                        
                        <h3>Practice Problems</h3>
                        <ol>
                            <li>Find the sum of 3/7 and 2/5</li>
                            <li>Multiply 5/6 by 3/4</li>
                            <li>Divide 7/8 by 2/3</li>
                        </ol>
                    `
                },
                {
                    title: "Chapter 2: Linear Equations in One Variable",
                    content: `
                        <h2>Linear Equations in One Variable</h2>
                        
                        <h3>Definition</h3>
                        <p>An equation of the form ax + b = 0, where a ≠ 0, is called a linear equation in one variable.</p>
                        
                        <h3>Steps to Solve</h3>
                        <ol>
                            <li>Simplify both sides of the equation</li>
                            <li>Move all terms with variable to one side</li>
                            <li>Move all constants to the other side</li>
                            <li>Divide both sides by coefficient of variable</li>
                        </ol>
                        
                        <h3>Example</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>Solve:</strong> 3x + 5 = 20</p>
                            <p><strong>Solution:</strong></p>
                            <p>Step 1: 3x = 20 - 5</p>
                            <p>Step 2: 3x = 15</p>
                            <p>Step 3: x = 15/3</p>
                            <p><strong>Answer:</strong> x = 5</p>
                        </div>
                    `
                },
                {
                    title: "Chapter 3: Understanding Quadrilaterals",
                    content: `
                        <h2>Understanding Quadrilaterals</h2>
                        
                        <h3>What is a Quadrilateral?</h3>
                        <p>A quadrilateral is a polygon with four sides, four vertices, and four angles.</p>
                        
                        <h3>Types of Quadrilaterals</h3>
                        <ul>
                            <li><strong>Parallelogram:</strong> Opposite sides are parallel and equal</li>
                            <li><strong>Rectangle:</strong> All angles are 90°, opposite sides equal</li>
                            <li><strong>Square:</strong> All sides equal, all angles 90°</li>
                            <li><strong>Rhombus:</strong> All sides equal, opposite angles equal</li>
                            <li><strong>Trapezium:</strong> One pair of opposite sides parallel</li>
                        </ul>
                        
                        <h3>Properties</h3>
                        <p>Sum of all interior angles of a quadrilateral = 360°</p>
                    `
                },
                {
                    title: "Chapter 4: Practical Geometry",
                    content: `
                        <h2>Practical Geometry</h2>
                        <h3>Construction of Quadrilaterals</h3>
                        <p>Learn to construct different types of quadrilaterals using compass and ruler.</p>
                    `
                },
                {
                    title: "Chapter 5: Data Handling",
                    content: `
                        <h2>Data Handling</h2>
                        <h3>Topics Covered</h3>
                        <ul>
                            <li>Organizing Data</li>
                            <li>Frequency Distribution</li>
                            <li>Bar Graphs and Histograms</li>
                            <li>Circle Graphs (Pie Charts)</li>
                            <li>Probability</li>
                        </ul>
                    `
                }
            ]
        },
        
        "Science": {
            title: "Class 8 Science",
            description: "Complete science notes covering Physics, Chemistry, and Biology",
            topics: [
                {
                    title: "Chapter 1: Crop Production and Management",
                    content: `
                        <h2>Crop Production and Management</h2>
                        
                        <h3>Agricultural Practices</h3>
                        <ol>
                            <li><strong>Preparation of Soil:</strong> Turning and loosening of soil using plough</li>
                            <li><strong>Sowing:</strong> Planting seeds in the soil at proper depth and distance</li>
                            <li><strong>Adding Manure and Fertilizers:</strong> Providing nutrients to plants</li>
                            <li><strong>Irrigation:</strong> Supplying water to crops at regular intervals</li>
                            <li><strong>Protection from Weeds:</strong> Removing unwanted plants</li>
                            <li><strong>Harvesting:</strong> Cutting and gathering mature crops</li>
                            <li><strong>Storage:</strong> Keeping grains safe from pests and moisture</li>
                        </ol>
                        
                        <h3>Types of Crops</h3>
                        <ul>
                            <li><strong>Kharif Crops:</strong> Sown in rainy season (June-July), harvested in September-October. Examples: Rice, Maize, Cotton</li>
                            <li><strong>Rabi Crops:</strong> Sown in winter (October-November), harvested in March-April. Examples: Wheat, Gram, Mustard</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 2: Microorganisms: Friend and Foe",
                    content: `
                        <h2>Microorganisms: Friend and Foe</h2>
                        
                        <h3>What are Microorganisms?</h3>
                        <p>Microorganisms are tiny living organisms that cannot be seen with naked eyes. They can only be seen under a microscope.</p>
                        
                        <h3>Types of Microorganisms</h3>
                        <ul>
                            <li><strong>Bacteria:</strong> Single-celled organisms</li>
                            <li><strong>Viruses:</strong> Smallest microorganisms</li>
                            <li><strong>Fungi:</strong> Can be unicellular or multicellular</li>
                            <li><strong>Protozoa:</strong> Single-celled animals</li>
                            <li><strong>Algae:</strong> Contain chlorophyll</li>
                        </ul>
                        
                        <h3>Useful Microorganisms</h3>
                        <ul>
                            <li>Making curd, bread, and cheese</li>
                            <li>Production of antibiotics</li>
                            <li>Nitrogen fixation in soil</li>
                            <li>Decomposition of organic waste</li>
                        </ul>
                        
                        <h3>Harmful Microorganisms</h3>
                        <ul>
                            <li>Cause diseases in humans, animals, and plants</li>
                            <li>Food spoilage</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 3: Synthetic Fibres and Plastics",
                    content: `
                        <h2>Synthetic Fibres and Plastics</h2>
                        
                        <h3>Synthetic Fibres</h3>
                        <p>Fibres made by humans using chemical substances are called synthetic fibres.</p>
                        
                        <h3>Types of Synthetic Fibres</h3>
                        <ul>
                            <li><strong>Rayon:</strong> Made from wood pulp</li>
                            <li><strong>Nylon:</strong> First fully synthetic fibre</li>
                            <li><strong>Polyester:</strong> Used in making clothes and bottles</li>
                            <li><strong>Acrylic:</strong> Synthetic wool</li>
                        </ul>
                        
                        <h3>Plastics</h3>
                        <p>Plastics are polymers that can be molded into different shapes.</p>
                        
                        <h3>Types of Plastics</h3>
                        <ul>
                            <li><strong>Thermoplastics:</strong> Can be bent and reshaped (e.g., PVC, Polythene)</li>
                            <li><strong>Thermosetting Plastics:</strong> Cannot be reshaped (e.g., Bakelite, Melamine)</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 4: Materials: Metals and Non-Metals",
                    content: `
                        <h2>Materials: Metals and Non-Metals</h2>
                        
                        <h3>Properties of Metals</h3>
                        <ul>
                            <li>Lustrous (shiny)</li>
                            <li>Good conductors of heat and electricity</li>
                            <li>Malleable (can be beaten into sheets)</li>
                            <li>Ductile (can be drawn into wires)</li>
                            <li>Sonorous (produce sound when struck)</li>
                        </ul>
                        
                        <h3>Properties of Non-Metals</h3>
                        <ul>
                            <li>Dull appearance</li>
                            <li>Poor conductors of heat and electricity</li>
                            <li>Brittle (break easily)</li>
                            <li>Non-sonorous</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 5: Coal and Petroleum",
                    content: `
                        <h2>Coal and Petroleum</h2>
                        
                        <h3>Formation of Coal</h3>
                        <p>Coal was formed millions of years ago from dead vegetation under high pressure and temperature. This process is called carbonization.</p>
                        
                        <h3>Products from Coal</h3>
                        <ul>
                            <li>Coke</li>
                            <li>Coal tar</li>
                            <li>Coal gas</li>
                        </ul>
                        
                        <h3>Petroleum</h3>
                        <p>Petroleum was formed from dead marine organisms. It is refined to get various products.</p>
                        
                        <h3>Products from Petroleum</h3>
                        <ul>
                            <li>Petrol</li>
                            <li>Diesel</li>
                            <li>Kerosene</li>
                            <li>LPG</li>
                            <li>Paraffin wax</li>
                        </ul>
                    `
                }
            ]
        },
        
        "English": {
            title: "Class 8 English",
            description: "English grammar, literature, and writing skills",
            topics: [
                {
                    title: "Grammar: Parts of Speech",
                    content: `
                        <h2>Parts of Speech</h2>
                        
                        <h3>1. Noun</h3>
                        <p>A word that names a person, place, thing, or idea.</p>
                        <p><strong>Examples:</strong> boy, school, book, happiness</p>
                        
                        <h3>2. Pronoun</h3>
                        <p>A word that takes the place of a noun.</p>
                        <p><strong>Examples:</strong> he, she, it, they, we</p>
                        
                        <h3>3. Verb</h3>
                        <p>A word that shows action or state of being.</p>
                        <p><strong>Examples:</strong> run, jump, is, are, was</p>
                        
                        <h3>4. Adjective</h3>
                        <p>A word that describes a noun.</p>
                        <p><strong>Examples:</strong> beautiful, tall, smart, red</p>
                        
                        <h3>5. Adverb</h3>
                        <p>A word that describes a verb, adjective, or another adverb.</p>
                        <p><strong>Examples:</strong> quickly, very, well, often</p>
                        
                        <h3>6. Preposition</h3>
                        <p>A word that shows relationship between noun/pronoun and other words.</p>
                        <p><strong>Examples:</strong> in, on, at, under, between</p>
                        
                        <h3>7. Conjunction</h3>
                        <p>A word that connects words, phrases, or clauses.</p>
                        <p><strong>Examples:</strong> and, but, or, because, although</p>
                        
                        <h3>8. Interjection</h3>
                        <p>A word that expresses strong emotion.</p>
                        <p><strong>Examples:</strong> Oh! Wow! Alas! Hurray!</p>
                    `
                },
                {
                    title: "Grammar: Tenses",
                    content: `
                        <h2>Tenses</h2>
                        
                        <h3>Present Tense</h3>
                        <ul>
                            <li><strong>Simple Present:</strong> I play cricket.</li>
                            <li><strong>Present Continuous:</strong> I am playing cricket.</li>
                            <li><strong>Present Perfect:</strong> I have played cricket.</li>
                            <li><strong>Present Perfect Continuous:</strong> I have been playing cricket.</li>
                        </ul>
                        
                        <h3>Past Tense</h3>
                        <ul>
                            <li><strong>Simple Past:</strong> I played cricket.</li>
                            <li><strong>Past Continuous:</strong> I was playing cricket.</li>
                            <li><strong>Past Perfect:</strong> I had played cricket.</li>
                            <li><strong>Past Perfect Continuous:</strong> I had been playing cricket.</li>
                        </ul>
                        
                        <h3>Future Tense</h3>
                        <ul>
                            <li><strong>Simple Future:</strong> I will play cricket.</li>
                            <li><strong>Future Continuous:</strong> I will be playing cricket.</li>
                            <li><strong>Future Perfect:</strong> I will have played cricket.</li>
                            <li><strong>Future Perfect Continuous:</strong> I will have been playing cricket.</li>
                        </ul>
                    `
                }
            ]
        },
        
        "Social Studies": {
            title: "Class 8 Social Studies",
            description: "History, Geography, Civics, and Economics",
            topics: [
                {
                    title: "History: The Modern Period",
                    content: `
                        <h2>The Modern Period</h2>
                        <h3>Key Topics</h3>
                        <ul>
                            <li>British Rule in India</li>
                            <li>Freedom Struggle</li>
                            <li>Social and Religious Reforms</li>
                        </ul>
                    `
                },
                {
                    title: "Geography: Resources",
                    content: `
                        <h2>Resources</h2>
                        <h3>Types of Resources</h3>
                        <ul>
                            <li><strong>Natural Resources:</strong> Air, water, soil, minerals</li>
                            <li><strong>Human Resources:</strong> People and their skills</li>
                            <li><strong>Human-made Resources:</strong> Buildings, roads, machines</li>
                        </ul>
                    `
                }
            ]
        },
        
        "Nepali": {
            title: "Class 8 Nepali",
            description: "नेपाली व्याकरण र साहित्य",
            topics: [
                {
                    title: "व्याकरण: संज्ञा र सर्वनाम",
                    content: `
                        <h2>संज्ञा र सर्वनाम</h2>
                        
                        <h3>संज्ञा</h3>
                        <p>व्यक्ति, वस्तु, स्थान वा भावको नाम जनाउने शब्दलाई संज्ञा भनिन्छ।</p>
                        
                        <h3>संज्ञाका प्रकार</h3>
                        <ul>
                            <li><strong>व्यक्तिवाचक संज्ञा:</strong> राम, सीता, काठमाडौं</li>
                            <li><strong>जातिवाचक संज्ञा:</strong> मान्छे, गाई, किताब</li>
                            <li><strong>भाववाचक संज्ञा:</strong> खुशी, दुःख, प्रेम</li>
                        </ul>
                        
                        <h3>सर्वनाम</h3>
                        <p>संज्ञाको सट्टा प्रयोग हुने शब्दलाई सर्वनाम भनिन्छ।</p>
                        <p><strong>उदाहरण:</strong> म, तिमी, उनी, हामी, तिमीहरू</p>
                    `
                }
            ]
        }
    },
    
    // ==================== CLASS 9 ====================
    "Class 9": {
        "Mathematics": {
            title: "Class 9 Mathematics",
            description: "Complete mathematics notes for Class 9",
            topics: [
                {
                    title: "Chapter 1: Number Systems",
                    content: `
                        <h2>Number Systems</h2>
                        
                        <h3>Types of Numbers</h3>
                        <ul>
                            <li><strong>Natural Numbers (N):</strong> 1, 2, 3, 4, ...</li>
                            <li><strong>Whole Numbers (W):</strong> 0, 1, 2, 3, ...</li>
                            <li><strong>Integers (Z):</strong> ..., -2, -1, 0, 1, 2, ...</li>
                            <li><strong>Rational Numbers (Q):</strong> Numbers that can be expressed as p/q where q ≠ 0</li>
                            <li><strong>Irrational Numbers:</strong> Numbers that cannot be expressed as p/q (e.g., √2, π)</li>
                            <li><strong>Real Numbers (R):</strong> All rational and irrational numbers</li>
                        </ul>
                        
                        <h3>Properties of Irrational Numbers</h3>
                        <ul>
                            <li>Sum of rational and irrational is irrational</li>
                            <li>Product of non-zero rational and irrational is irrational</li>
                            <li>√2, √3, √5, π, e are irrational</li>
                        </ul>
                        
                        <h3>Laws of Exponents</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p>a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></p>
                            <p>a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m-n</sup></p>
                            <p>(a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup></p>
                            <p>a<sup>0</sup> = 1</p>
                            <p>a<sup>-m</sup> = 1/a<sup>m</sup></p>
                        </div>
                    `
                },
                {
                    title: "Chapter 2: Polynomials",
                    content: `
                        <h2>Polynomials</h2>
                        
                        <h3>Definition</h3>
                        <p>An algebraic expression of the form p(x) = a<sub>n</sub>x<sup>n</sup> + a<sub>n-1</sub>x<sup>n-1</sup> + ... + a<sub>1</sub>x + a<sub>0</sub> is called a polynomial.</p>
                        
                        <h3>Types of Polynomials</h3>
                        <ul>
                            <li><strong>Linear Polynomial:</strong> ax + b (degree 1)</li>
                            <li><strong>Quadratic Polynomial:</strong> ax² + bx + c (degree 2)</li>
                            <li><strong>Cubic Polynomial:</strong> ax³ + bx² + cx + d (degree 3)</li>
                        </ul>
                        
                        <h3>Remainder Theorem</h3>
                        <p>If p(x) is divided by (x - a), then remainder = p(a)</p>
                        
                        <h3>Factor Theorem</h3>
                        <p>If p(a) = 0, then (x - a) is a factor of p(x)</p>
                        
                        <h3>Algebraic Identities</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p>(a + b)² = a² + 2ab + b²</p>
                            <p>(a - b)² = a² - 2ab + b²</p>
                            <p>a² - b² = (a + b)(a - b)</p>
                            <p>(a + b)³ = a³ + 3a²b + 3ab² + b³</p>
                            <p>(a - b)³ = a³ - 3a²b + 3ab² - b³</p>
                            <p>a³ + b³ = (a + b)(a² - ab + b²)</p>
                            <p>a³ - b³ = (a - b)(a² + ab + b²)</p>
                        </div>
                    `
                },
                {
                    title: "Chapter 3: Coordinate Geometry",
                    content: `
                        <h2>Coordinate Geometry</h2>
                        
                        <h3>Cartesian Plane</h3>
                        <p>A plane formed by two perpendicular number lines (x-axis and y-axis) intersecting at origin (0, 0).</p>
                        
                        <h3>Distance Formula</h3>
                        <p>Distance between two points (x₁, y₁) and (x₂, y₂):</p>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p>d = √[(x₂ - x₁)² + (y₂ - y₁)²]</p>
                        </div>
                        
                        <h3>Section Formula</h3>
                        <p>Point dividing line segment joining (x₁, y₁) and (x₂, y₂) in ratio m:n:</p>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p>x = (mx₂ + nx₁)/(m + n)</p>
                            <p>y = (my₂ + ny₁)/(m + n)</p>
                        </div>
                    `
                },
                {
                    title: "Chapter 4: Linear Equations in Two Variables",
                    content: `
                        <h2>Linear Equations in Two Variables</h2>
                        
                        <h3>Standard Form</h3>
                        <p>ax + by + c = 0, where a, b, c are real numbers and a, b ≠ 0</p>
                        
                        <h3>Solution Methods</h3>
                        <ul>
                            <li><strong>Graphical Method:</strong> Plot both equations and find intersection point</li>
                            <li><strong>Substitution Method:</strong> Express one variable in terms of other</li>
                            <li><strong>Elimination Method:</strong> Eliminate one variable by addition/subtraction</li>
                            <li><strong>Cross Multiplication Method:</strong> Direct formula method</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 5: Euclid's Geometry",
                    content: `
                        <h2>Introduction to Euclid's Geometry</h2>
                        
                        <h3>Euclid's Axioms</h3>
                        <ol>
                            <li>Things which are equal to the same thing are equal to one another</li>
                            <li>If equals are added to equals, the wholes are equal</li>
                            <li>If equals are subtracted from equals, the remainders are equal</li>
                            <li>Things which coincide with one another are equal to one another</li>
                            <li>The whole is greater than the part</li>
                        </ol>
                    `
                }
            ]
        },
        
        "Science": {
            title: "Class 9 Science",
            description: "Physics, Chemistry, and Biology for Class 9",
            topics: [
                {
                    title: "Chapter 1: Matter in Our Surroundings",
                    content: `
                        <h2>Matter in Our Surroundings</h2>
                        
                        <h3>Characteristics of Matter</h3>
                        <ul>
                            <li>Matter is made up of particles</li>
                            <li>Particles have space between them</li>
                            <li>Particles are continuously moving</li>
                            <li>Particles attract each other</li>
                        </ul>
                        
                        <h3>States of Matter</h3>
                        <ul>
                            <li><strong>Solid:</strong> Fixed shape and volume, particles closely packed</li>
                            <li><strong>Liquid:</strong> Fixed volume but no fixed shape, particles less closely packed</li>
                            <li><strong>Gas:</strong> No fixed shape or volume, particles far apart</li>
                        </ul>
                        
                        <h3>Change of State</h3>
                        <ul>
                            <li><strong>Melting:</strong> Solid → Liquid</li>
                            <li><strong>Freezing:</strong> Liquid → Solid</li>
                            <li><strong>Evaporation:</strong> Liquid → Gas</li>
                            <li><strong>Condensation:</strong> Gas → Liquid</li>
                            <li><strong>Sublimation:</strong> Solid → Gas (directly)</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 2: Is Matter Around Us Pure?",
                    content: `
                        <h2>Is Matter Around Us Pure?</h2>
                        
                        <h3>Mixtures</h3>
                        <p>A mixture contains two or more substances mixed together.</p>
                        
                        <h3>Types of Mixtures</h3>
                        <ul>
                            <li><strong>Homogeneous Mixture:</strong> Uniform composition (e.g., salt solution)</li>
                            <li><strong>Heterogeneous Mixture:</strong> Non-uniform composition (e.g., sand and water)</li>
                        </ul>
                        
                        <h3>Separation Methods</h3>
                        <ul>
                            <li><strong>Filtration:</strong> Separate insoluble solid from liquid</li>
                            <li><strong>Evaporation:</strong> Separate dissolved solid from liquid</li>
                            <li><strong>Distillation:</strong> Separate liquids with different boiling points</li>
                            <li><strong>Chromatography:</strong> Separate colored components</li>
                        </ul>
                        
                        <h3>Pure Substances</h3>
                        <ul>
                            <li><strong>Elements:</strong> Made of only one type of atom (e.g., Gold, Oxygen)</li>
                            <li><strong>Compounds:</strong> Made of two or more elements chemically combined (e.g., Water, Salt)</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 3: Atoms and Molecules",
                    content: `
                        <h2>Atoms and Molecules</h2>
                        
                        <h3>Laws of Chemical Combination</h3>
                        <ul>
                            <li><strong>Law of Conservation of Mass:</strong> Mass is neither created nor destroyed</li>
                            <li><strong>Law of Constant Proportions:</strong> Elements in a compound are in fixed ratio by mass</li>
                        </ul>
                        
                        <h3>Atom</h3>
                        <p>The smallest particle of an element that can exist.</p>
                        
                        <h3>Molecule</h3>
                        <p>The smallest particle of a substance that can exist independently.</p>
                        
                        <h3>Atomic Mass and Molecular Mass</h3>
                        <p><strong>Atomic Mass:</strong> Mass of one atom of an element</p>
                        <p><strong>Molecular Mass:</strong> Sum of atomic masses of all atoms in a molecule</p>
                        
                        <h3>Mole Concept</h3>
                        <p>1 mole = 6.022 × 10²³ particles (Avogadro's number)</p>
                    `
                },
                {
                    title: "Chapter 4: Structure of the Atom",
                    content: `
                        <h2>Structure of the Atom</h2>
                        
                        <h3>Subatomic Particles</h3>
                        <ul>
                            <li><strong>Proton:</strong> Positive charge, mass ≈ 1 amu</li>
                            <li><strong>Neutron:</strong> No charge, mass ≈ 1 amu</li>
                            <li><strong>Electron:</strong> Negative charge, negligible mass</li>
                        </ul>
                        
                        <h3>Atomic Models</h3>
                        <ul>
                            <li><strong>Thomson's Model:</strong> Plum pudding model</li>
                            <li><strong>Rutherford's Model:</strong> Nuclear model</li>
                            <li><strong>Bohr's Model:</strong> Electrons in fixed orbits</li>
                        </ul>
                        
                        <h3>Atomic Number and Mass Number</h3>
                        <p><strong>Atomic Number (Z):</strong> Number of protons</p>
                        <p><strong>Mass Number (A):</strong> Protons + Neutrons</p>
                    `
                },
                {
                    title: "Chapter 5: The Fundamental Unit of Life",
                    content: `
                        <h2>The Fundamental Unit of Life - Cell</h2>
                        
                        <h3>Cell Theory</h3>
                        <ul>
                            <li>All living organisms are made of cells</li>
                            <li>Cell is the basic unit of life</li>
                            <li>All cells arise from pre-existing cells</li>
                        </ul>
                        
                        <h3>Types of Cells</h3>
                        <ul>
                            <li><strong>Prokaryotic:</strong> No nucleus (e.g., bacteria)</li>
                            <li><strong>Eukaryotic:</strong> Well-defined nucleus (e.g., plant and animal cells)</li>
                        </ul>
                        
                        <h3>Cell Organelles</h3>
                        <ul>
                            <li><strong>Nucleus:</strong> Controls cell activities</li>
                            <li><strong>Mitochondria:</strong> Powerhouse of cell</li>
                            <li><strong>Chloroplast:</strong> Photosynthesis (in plants)</li>
                            <li><strong>Ribosomes:</strong> Protein synthesis</li>
                            <li><strong>Endoplasmic Reticulum:</strong> Transport system</li>
                            <li><strong>Golgi Apparatus:</strong> Packaging and dispatch</li>
                        </ul>
                    `
                }
            ]
        },
        
        "English": {
            title: "Class 9 English",
            description: "English literature and language",
            topics: [
                {
                    title: "Grammar: Active and Passive Voice",
                    content: `
                        <h2>Active and Passive Voice</h2>
                        
                        <h3>Active Voice</h3>
                        <p>Subject performs the action.</p>
                        <p><strong>Example:</strong> Ram writes a letter.</p>
                        
                        <h3>Passive Voice</h3>
                        <p>Subject receives the action.</p>
                        <p><strong>Example:</strong> A letter is written by Ram.</p>
                        
                        <h3>Rules for Conversion</h3>
                        <ol>
                            <li>Object of active becomes subject of passive</li>
                            <li>Verb changes to "be + past participle"</li>
                            <li>Subject of active becomes object with "by"</li>
                        </ol>
                    `
                },
                {
                    title: "Grammar: Direct and Indirect Speech",
                    content: `
                        <h2>Direct and Indirect Speech</h2>
                        
                        <h3>Direct Speech</h3>
                        <p>Exact words of the speaker in quotation marks.</p>
                        <p><strong>Example:</strong> He said, "I am going home."</p>
                        
                        <h3>Indirect Speech</h3>
                        <p>Reporting what someone said without quotation marks.</p>
                        <p><strong>Example:</strong> He said that he was going home.</p>
                        
                        <h3>Rules for Conversion</h3>
                        <ul>
                            <li>Remove quotation marks</li>
                            <li>Use 'that' as conjunction</li>
                            <li>Change pronouns as per context</li>
                            <li>Change tense (present → past)</li>
                            <li>Change time and place words</li>
                        </ul>
                    `
                }
            ]
        },
        
        "Social Studies": {
            title: "Class 9 Social Studies",
            description: "History, Geography, Political Science, and Economics",
            topics: [
                {
                    title: "History: The French Revolution",
                    content: `
                        <h2>The French Revolution</h2>
                        
                        <h3>Causes</h3>
                        <ul>
                            <li>Social inequality</li>
                            <li>Economic crisis</li>
                            <li>Weak monarchy</li>
                            <li>Influence of Enlightenment ideas</li>
                        </ul>
                        
                        <h3>Key Events</h3>
                        <ul>
                            <li>Storming of Bastille (1789)</li>
                            <li>Declaration of Rights of Man</li>
                            <li>Reign of Terror</li>
                            <li>Rise of Napoleon</li>
                        </ul>
                    `
                },
                {
                    title: "Geography: India - Size and Location",
                    content: `
                        <h2>India - Size and Location</h2>
                        
                        <h3>Location</h3>
                        <ul>
                            <li>Latitude: 8°4'N to 37°6'N</li>
                            <li>Longitude: 68°7'E to 97°25'E</li>
                            <li>Tropic of Cancer divides India</li>
                        </ul>
                        
                        <h3>Neighbors</h3>
                        <ul>
                            <li>Pakistan, Afghanistan (West)</li>
                            <li>China, Nepal, Bhutan (North)</li>
                            <li>Myanmar, Bangladesh (East)</li>
                            <li>Sri Lanka, Maldives (South - across sea)</li>
                        </ul>
                    `
                }
            ]
        },
        
        "Nepali": {
            title: "Class 9 Nepali",
            description: "नेपाली भाषा र साहित्य",
            topics: [
                {
                    title: "व्याकरण: क्रिया र क्रियाविशेषण",
                    content: `
                        <h2>क्रिया र क्रियाविशेषण</h2>
                        
                        <h3>क्रिया</h3>
                        <p>कुनै काम वा क्रियाकलाप जनाउने शब्दलाई क्रिया भनिन्छ।</p>
                        <p><strong>उदाहरण:</strong> खान, पढ्न, लेख्न, दौडनु</p>
                        
                        <h3>क्रियाका प्रकार</h3>
                        <ul>
                            <li><strong>सकर्मक क्रिया:</strong> कर्म चाहिने (खान, पढ्न)</li>
                            <li><strong>अकर्मक क्रिया:</strong> कर्म नचाहिने (हाँस्नु, रुनु)</li>
                        </ul>
                        
                        <h3>क्रियाविशेषण</h3>
                        <p>क्रियाको विशेषता बताउने शब्दलाई क्रियाविशेषण भनिन्छ।</p>
                        <p><strong>उदाहरण:</strong> छिटो, बिस्तारै, राम्रोसँग</p>
                    `
                }
            ]
        }
    },
    
    // ==================== CLASS 10 ====================
    "Class 10": {
        "Mathematics": {
            title: "Class 10 Mathematics",
            description: "Complete mathematics notes for Class 10 - CBSE/SEE",
            topics: [
                {
                    title: "Chapter 1: Real Numbers",
                    content: `
                        <h2>Real Numbers</h2>
                        
                        <h3>Euclid's Division Lemma</h3>
                        <p>For any two positive integers a and b, there exist unique integers q and r such that:</p>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p style="text-align: center; font-size: 1.2em;"><strong>a = bq + r, where 0 ≤ r < b</strong></p>
                        </div>
                        
                        <h3>Fundamental Theorem of Arithmetic</h3>
                        <p>Every composite number can be expressed as a product of primes, and this factorization is unique (except for the order of factors).</p>
                        
                        <h3>HCF and LCM</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>For any two positive integers a and b:</strong></p>
                            <p>HCF(a, b) × LCM(a, b) = a × b</p>
                        </div>
                        
                        <h3>Irrational Numbers</h3>
                        <p>Let p be a prime number. If p divides a², then p divides a.</p>
                        <p><strong>Proof that √2 is irrational:</strong> Assume √2 = p/q (in lowest terms), then 2q² = p², which leads to contradiction.</p>
                        
                        <h3>Decimal Expansion</h3>
                        <ul>
                            <li><strong>Terminating:</strong> Denominator has only 2 and 5 as prime factors</li>
                            <li><strong>Non-terminating repeating:</strong> Rational numbers</li>
                            <li><strong>Non-terminating non-repeating:</strong> Irrational numbers</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 2: Polynomials",
                    content: `
                        <h2>Polynomials</h2>
                        
                        <h3>Quadratic Polynomial</h3>
                        <p>A polynomial of degree 2: p(x) = ax² + bx + c, where a ≠ 0</p>
                        
                        <h3>Zeros of a Polynomial</h3>
                        <p>A real number α is a zero of polynomial p(x) if p(α) = 0</p>
                        
                        <h3>Relationship between Zeros and Coefficients</h3>
                        <p>For quadratic polynomial ax² + bx + c:</p>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>Sum of zeros (α + β) = -b/a</strong></p>
                            <p><strong>Product of zeros (αβ) = c/a</strong></p>
                        </div>
                        
                        <p>For cubic polynomial ax³ + bx² + cx + d:</p>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>α + β + γ = -b/a</strong></p>
                            <p><strong>αβ + βγ + γα = c/a</strong></p>
                            <p><strong>αβγ = -d/a</strong></p>
                        </div>
                        
                        <h3>Division Algorithm</h3>
                        <p>If p(x) and g(x) are polynomials with g(x) ≠ 0, then:</p>
                        <p><strong>p(x) = g(x) × q(x) + r(x)</strong></p>
                        <p>where degree of r(x) < degree of g(x)</p>
                    `
                },
                {
                    title: "Chapter 3: Pair of Linear Equations in Two Variables",
                    content: `
                        <h2>Pair of Linear Equations in Two Variables</h2>
                        
                        <h3>General Form</h3>
                        <p>a₁x + b₁y + c₁ = 0</p>
                        <p>a₂x + b₂y + c₂ = 0</p>
                        
                        <h3>Graphical Method</h3>
                        <ul>
                            <li><strong>Intersecting lines:</strong> Unique solution (a₁/a₂ ≠ b₁/b₂)</li>
                            <li><strong>Coincident lines:</strong> Infinitely many solutions (a₁/a₂ = b₁/b₂ = c₁/c₂)</li>
                            <li><strong>Parallel lines:</strong> No solution (a₁/a₂ = b₁/b₂ ≠ c₁/c₂)</li>
                        </ul>
                        
                        <h3>Algebraic Methods</h3>
                        <ol>
                            <li><strong>Substitution Method</strong></li>
                            <li><strong>Elimination Method</strong></li>
                            <li><strong>Cross Multiplication Method</strong></li>
                        </ol>
                        
                        <h3>Cross Multiplication Formula</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p>x/(b₁c₂ - b₂c₁) = y/(c₁a₂ - c₂a₁) = 1/(a₁b₂ - a₂b₁)</p>
                        </div>
                    `
                },
                {
                    title: "Chapter 4: Quadratic Equations",
                    content: `
                        <h2>Quadratic Equations</h2>
                        
                        <h3>Standard Form</h3>
                        <p>ax² + bx + c = 0, where a ≠ 0</p>
                        
                        <h3>Methods of Solution</h3>
                        
                        <h4>1. Factorization Method</h4>
                        <p>Express as (x - α)(x - β) = 0</p>
                        
                        <h4>2. Completing the Square</h4>
                        <p>Convert to (x + p)² = q form</p>
                        
                        <h4>3. Quadratic Formula</h4>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p style="text-align: center; font-size: 1.2em;">
                                <strong>x = [-b ± √(b² - 4ac)] / 2a</strong>
                            </p>
                        </div>
                        
                        <h3>Nature of Roots (Discriminant)</h3>
                        <p>D = b² - 4ac</p>
                        <ul>
                            <li><strong>D > 0:</strong> Two distinct real roots</li>
                            <li><strong>D = 0:</strong> Two equal real roots</li>
                            <li><strong>D < 0:</strong> No real roots</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 5: Arithmetic Progressions",
                    content: `
                        <h2>Arithmetic Progressions (AP)</h2>
                        
                        <h3>Definition</h3>
                        <p>A sequence where difference between consecutive terms is constant.</p>
                        <p><strong>Example:</strong> 2, 5, 8, 11, 14, ... (common difference d = 3)</p>
                        
                        <h3>General Term (nth term)</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>aₙ = a + (n - 1)d</strong></p>
                            <p>where a = first term, d = common difference, n = term number</p>
                        </div>
                        
                        <h3>Sum of n Terms</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>Sₙ = n/2 [2a + (n - 1)d]</strong></p>
                            <p>or</p>
                            <p><strong>Sₙ = n/2 [a + l]</strong></p>
                            <p>where l = last term</p>
                        </div>
                        
                        <h3>Example</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>Find sum of first 20 terms of AP: 3, 7, 11, 15, ...</strong></p>
                            <p>a = 3, d = 4, n = 20</p>
                            <p>S₂₀ = 20/2 [2(3) + (20-1)(4)]</p>
                            <p>S₂₀ = 10 [6 + 76] = 820</p>
                        </div>
                    `
                },
                {
                    title: "Chapter 6: Triangles",
                    content: `
                        <h2>Triangles</h2>
                        
                        <h3>Similar Triangles</h3>
                        <p>Two triangles are similar if:</p>
                        <ul>
                            <li>Corresponding angles are equal</li>
                            <li>Corresponding sides are proportional</li>
                        </ul>
                        
                        <h3>Criteria for Similarity</h3>
                        <ol>
                            <li><strong>AAA (Angle-Angle-Angle):</strong> All corresponding angles equal</li>
                            <li><strong>SSS (Side-Side-Side):</strong> All corresponding sides proportional</li>
                            <li><strong>SAS (Side-Angle-Side):</strong> Two sides proportional and included angle equal</li>
                        </ol>
                        
                        <h3>Pythagoras Theorem</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>In a right triangle: (Hypotenuse)² = (Base)² + (Perpendicular)²</strong></p>
                            <p>AC² = AB² + BC²</p>
                        </div>
                        
                        <h3>Basic Proportionality Theorem (Thales Theorem)</h3>
                        <p>If a line is drawn parallel to one side of a triangle, it divides the other two sides proportionally.</p>
                    `
                },
                {
                    title: "Chapter 7: Coordinate Geometry",
                    content: `
                        <h2>Coordinate Geometry</h2>
                        
                        <h3>Distance Formula</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>Distance between (x₁, y₁) and (x₂, y₂):</strong></p>
                            <p>d = √[(x₂ - x₁)² + (y₂ - y₁)²]</p>
                        </div>
                        
                        <h3>Section Formula</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>Point dividing line in ratio m:n:</strong></p>
                            <p>x = (mx₂ + nx₁)/(m + n)</p>
                            <p>y = (my₂ + ny₁)/(m + n)</p>
                        </div>
                        
                        <h3>Midpoint Formula</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>Midpoint of line joining (x₁, y₁) and (x₂, y₂):</strong></p>
                            <p>x = (x₁ + x₂)/2, y = (y₁ + y₂)/2</p>
                        </div>
                        
                        <h3>Area of Triangle</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>Area with vertices (x₁, y₁), (x₂, y₂), (x₃, y₃):</strong></p>
                            <p>Area = ½ |x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|</p>
                        </div>
                    `
                },
                {
                    title: "Chapter 8: Trigonometry",
                    content: `
                        <h2>Introduction to Trigonometry</h2>
                        
                        <h3>Trigonometric Ratios</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>sin θ = Perpendicular/Hypotenuse</strong></p>
                            <p><strong>cos θ = Base/Hypotenuse</strong></p>
                            <p><strong>tan θ = Perpendicular/Base</strong></p>
                            <p><strong>cosec θ = 1/sin θ</strong></p>
                            <p><strong>sec θ = 1/cos θ</strong></p>
                            <p><strong>cot θ = 1/tan θ</strong></p>
                        </div>
                        
                        <h3>Trigonometric Identities</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>sin²θ + cos²θ = 1</strong></p>
                            <p><strong>1 + tan²θ = sec²θ</strong></p>
                            <p><strong>1 + cot²θ = cosec²θ</strong></p>
                        </div>
                        
                        <h3>Values of Trigonometric Ratios</h3>
                        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                            <tr style="background: var(--bg-secondary);">
                                <th style="border: 1px solid var(--border); padding: 8px;">Angle</th>
                                <th style="border: 1px solid var(--border); padding: 8px;">0°</th>
                                <th style="border: 1px solid var(--border); padding: 8px;">30°</th>
                                <th style="border: 1px solid var(--border); padding: 8px;">45°</th>
                                <th style="border: 1px solid var(--border); padding: 8px;">60°</th>
                                <th style="border: 1px solid var(--border); padding: 8px;">90°</th>
                            </tr>
                            <tr>
                                <td style="border: 1px solid var(--border); padding: 8px;"><strong>sin θ</strong></td>
                                <td style="border: 1px solid var(--border); padding: 8px;">0</td>
                                <td style="border: 1px solid var(--border); padding: 8px;">1/2</td>
                                <td style="border: 1px solid var(--border); padding: 8px;">1/√2</td>
                                <td style="border: 1px solid var(--border); padding: 8px;">√3/2</td>
                                <td style="border: 1px solid var(--border); padding: 8px;">1</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid var(--border); padding: 8px;"><strong>cos θ</strong></td>
                                <td style="border: 1px solid var(--border); padding: 8px;">1</td>
                                <td style="border: 1px solid var(--border); padding: 8px;">√3/2</td>
                                <td style="border: 1px solid var(--border); padding: 8px;">1/√2</td>
                                <td style="border: 1px solid var(--border); padding: 8px;">1/2</td>
                                <td style="border: 1px solid var(--border); padding: 8px;">0</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid var(--border); padding: 8px;"><strong>tan θ</strong></td>
                                <td style="border: 1px solid var(--border); padding: 8px;">0</td>
                                <td style="border: 1px solid var(--border); padding: 8px;">1/√3</td>
                                <td style="border: 1px solid var(--border); padding: 8px;">1</td>
                                <td style="border: 1px solid var(--border); padding: 8px;">√3</td>
                                <td style="border: 1px solid var(--border); padding: 8px;">∞</td>
                            </tr>
                        </table>
                    `
                },
                {
                    title: "Chapter 9: Circles",
                    content: `
                        <h2>Circles</h2>
                        
                        <h3>Tangent to a Circle</h3>
                        <p>A line that touches the circle at exactly one point.</p>
                        
                        <h3>Properties</h3>
                        <ul>
                            <li>Tangent is perpendicular to radius at point of contact</li>
                            <li>Two tangents from external point are equal in length</li>
                            <li>Angle between tangent and chord equals angle in alternate segment</li>
                        </ul>
                        
                        <h3>Length of Tangent</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>If tangent from point P to circle with center O and radius r:</strong></p>
                            <p>Length of tangent = √(OP² - r²)</p>
                        </div>
                    `
                },
                {
                    title: "Chapter 10: Surface Areas and Volumes",
                    content: `
                        <h2>Surface Areas and Volumes</h2>
                        
                        <h3>Cube</h3>
                        <ul>
                            <li>Surface Area = 6a²</li>
                            <li>Volume = a³</li>
                        </ul>
                        
                        <h3>Cuboid</h3>
                        <ul>
                            <li>Surface Area = 2(lb + bh + hl)</li>
                            <li>Volume = l × b × h</li>
                        </ul>
                        
                        <h3>Cylinder</h3>
                        <ul>
                            <li>Curved Surface Area = 2πrh</li>
                            <li>Total Surface Area = 2πr(r + h)</li>
                            <li>Volume = πr²h</li>
                        </ul>
                        
                        <h3>Cone</h3>
                        <ul>
                            <li>Curved Surface Area = πrl (l = slant height)</li>
                            <li>Total Surface Area = πr(r + l)</li>
                            <li>Volume = (1/3)πr²h</li>
                        </ul>
                        
                        <h3>Sphere</h3>
                        <ul>
                            <li>Surface Area = 4πr²</li>
                            <li>Volume = (4/3)πr³</li>
                        </ul>
                        
                        <h3>Hemisphere</h3>
                        <ul>
                            <li>Curved Surface Area = 2πr²</li>
                            <li>Total Surface Area = 3πr²</li>
                            <li>Volume = (2/3)πr³</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 11: Statistics",
                    content: `
                        <h2>Statistics</h2>
                        
                        <h3>Mean</h3>
                        <p><strong>Direct Method:</strong> Mean = Σx/n</p>
                        <p><strong>For Grouped Data:</strong> Mean = Σfx/Σf</p>
                        
                        <h3>Median</h3>
                        <p>Middle value when data is arranged in order</p>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>For Grouped Data:</strong></p>
                            <p>Median = l + [(n/2 - cf)/f] × h</p>
                            <p>where l = lower limit of median class, cf = cumulative frequency before median class, f = frequency of median class, h = class width</p>
                        </div>
                        
                        <h3>Mode</h3>
                        <p>Value that appears most frequently</p>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>For Grouped Data:</strong></p>
                            <p>Mode = l + [(f₁ - f₀)/(2f₁ - f₀ - f₂)] × h</p>
                            <p>where l = lower limit of modal class, f₁ = frequency of modal class, f₀ = frequency of class before modal class, f₂ = frequency of class after modal class</p>
                        </div>
                        
                        <h3>Cumulative Frequency Curve (Ogive)</h3>
                        <p>Graph of cumulative frequency against upper class boundaries</p>
                    `
                },
                {
                    title: "Chapter 12: Probability",
                    content: `
                        <h2>Probability</h2>
                        
                        <h3>Definition</h3>
                        <p>Probability measures the likelihood of an event occurring.</p>
                        
                        <h3>Formula</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>P(E) = Number of favorable outcomes / Total number of outcomes</strong></p>
                        </div>
                        
                        <h3>Properties</h3>
                        <ul>
                            <li>0 ≤ P(E) ≤ 1</li>
                            <li>P(sure event) = 1</li>
                            <li>P(impossible event) = 0</li>
                            <li>P(not E) = 1 - P(E)</li>
                        </ul>
                        
                        <h3>Example</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>A die is thrown. Find probability of getting:</strong></p>
                            <p>(a) An even number: P(E) = 3/6 = 1/2</p>
                            <p>(b) A number greater than 4: P(E) = 2/6 = 1/3</p>
                            <p>(c) A prime number: P(E) = 3/6 = 1/2</p>
                        </div>
                    `
                }
            ]
        },
        
        "Science": {
            title: "Class 10 Science",
            description: "Physics, Chemistry, and Biology for Class 10",
            topics: [
                {
                    title: "Chapter 1: Chemical Reactions and Equations",
                    content: `
                        <h2>Chemical Reactions and Equations</h2>
                        
                        <h3>Chemical Equation</h3>
                        <p>Representation of chemical reaction using symbols and formulas.</p>
                        
                        <h3>Balanced Chemical Equation</h3>
                        <p>Number of atoms of each element is same on both sides.</p>
                        <p><strong>Example:</strong> 2H₂ + O₂ → 2H₂O</p>
                        
                        <h3>Types of Chemical Reactions</h3>
                        <ul>
                            <li><strong>Combination:</strong> A + B → AB</li>
                            <li><strong>Decomposition:</strong> AB → A + B</li>
                            <li><strong>Displacement:</strong> A + BC → AC + B</li>
                            <li><strong>Double Displacement:</strong> AB + CD → AD + CB</li>
                            <li><strong>Redox:</strong> Oxidation and reduction occur together</li>
                        </ul>
                        
                        <h3>Effects of Chemical Reactions</h3>
                        <ul>
                            <li>Change in state</li>
                            <li>Change in color</li>
                            <li>Evolution of gas</li>
                            <li>Change in temperature</li>
                            <li>Formation of precipitate</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 2: Acids, Bases and Salts",
                    content: `
                        <h2>Acids, Bases and Salts</h2>
                        
                        <h3>Acids</h3>
                        <p>Substances that taste sour and turn blue litmus red.</p>
                        <p><strong>Examples:</strong> HCl, H₂SO₄, HNO₃</p>
                        
                        <h3>Bases</h3>
                        <p>Substances that taste bitter and turn red litmus blue.</p>
                        <p><strong>Examples:</strong> NaOH, KOH, Ca(OH)₂</p>
                        
                        <h3>pH Scale</h3>
                        <ul>
                            <li>pH < 7: Acidic</li>
                            <li>pH = 7: Neutral</li>
                            <li>pH > 7: Basic</li>
                        </ul>
                        
                        <h3>Salts</h3>
                        <p>Formed by neutralization reaction between acid and base.</p>
                        <p><strong>Acid + Base → Salt + Water</strong></p>
                        
                        <h3>Common Salts</h3>
                        <ul>
                            <li><strong>NaCl:</strong> Common salt</li>
                            <li><strong>NaHCO₃:</strong> Baking soda</li>
                            <li><strong>Na₂CO₃.10H₂O:</strong> Washing soda</li>
                            <li><strong>CaSO₄.½H₂O:</strong> Plaster of Paris</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 3: Metals and Non-metals",
                    content: `
                        <h2>Metals and Non-metals</h2>
                        
                        <h3>Physical Properties of Metals</h3>
                        <ul>
                            <li>Lustrous</li>
                            <li>Good conductors of heat and electricity</li>
                            <li>Malleable and ductile</li>
                            <li>Sonorous</li>
                            <li>High melting and boiling points</li>
                        </ul>
                        
                        <h3>Chemical Properties of Metals</h3>
                        <ul>
                            <li>React with oxygen to form oxides</li>
                            <li>React with water to form hydroxides</li>
                            <li>React with acids to form salts and hydrogen</li>
                            <li>Displacement reactions</li>
                        </ul>
                        
                        <h3>Reactivity Series</h3>
                        <p>K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au</p>
                        
                        <h3>Extraction of Metals</h3>
                        <ul>
                            <li><strong>Highly reactive:</strong> Electrolytic reduction</li>
                            <li><strong>Moderately reactive:</strong> Reduction with carbon</li>
                            <li><strong>Less reactive:</strong> Heating alone</li>
                        </ul>
                        
                        <h3>Corrosion</h3>
                        <p>Gradual eating away of metals due to reaction with environment.</p>
                        <p><strong>Example:</strong> Rusting of iron (Fe₂O₃.xH₂O)</p>
                    `
                },
                {
                    title: "Chapter 4: Carbon and its Compounds",
                    content: `
                        <h2>Carbon and its Compounds</h2>
                        
                        <h3>Covalent Bonding</h3>
                        <p>Sharing of electrons between atoms.</p>
                        
                        <h3>Allotropes of Carbon</h3>
                        <ul>
                            <li><strong>Diamond:</strong> Hardest natural substance</li>
                            <li><strong>Graphite:</strong> Good conductor of electricity</li>
                            <li><strong>Fullerenes:</strong> C₆₀ (Buckminsterfullerene)</li>
                        </ul>
                        
                        <h3>Hydrocarbons</h3>
                        <ul>
                            <li><strong>Saturated:</strong> Alkanes (C-C single bonds)</li>
                            <li><strong>Unsaturated:</strong> Alkenes (C=C), Alkynes (C≡C)</li>
                        </ul>
                        
                        <h3>Functional Groups</h3>
                        <ul>
                            <li><strong>Alcohol:</strong> -OH</li>
                            <li><strong>Aldehyde:</strong> -CHO</li>
                            <li><strong>Ketone:</strong> >C=O</li>
                            <li><strong>Carboxylic Acid:</strong> -COOH</li>
                        </ul>
                        
                        <h3>Important Reactions</h3>
                        <ul>
                            <li><strong>Combustion:</strong> Burning in oxygen</li>
                            <li><strong>Oxidation:</strong> Addition of oxygen</li>
                            <li><strong>Addition:</strong> Adding atoms to unsaturated compounds</li>
                            <li><strong>Substitution:</strong> Replacing atoms in saturated compounds</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 5: Life Processes",
                    content: `
                        <h2>Life Processes</h2>
                        
                        <h3>Nutrition</h3>
                        <p><strong>Autotrophic:</strong> Make own food (plants - photosynthesis)</p>
                        <p><strong>Heterotrophic:</strong> Depend on others for food (animals)</p>
                        
                        <h3>Human Digestive System</h3>
                        <ul>
                            <li><strong>Mouth:</strong> Mechanical and chemical digestion begins</li>
                            <li><strong>Stomach:</strong> Protein digestion</li>
                            <li><strong>Small Intestine:</strong> Complete digestion and absorption</li>
                            <li><strong>Large Intestine:</strong> Water absorption</li>
                        </ul>
                        
                        <h3>Respiration</h3>
                        <p><strong>Aerobic:</strong> With oxygen (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy)</p>
                        <p><strong>Anaerobic:</strong> Without oxygen (produces less energy)</p>
                        
                        <h3>Transportation</h3>
                        <ul>
                            <li><strong>Blood:</strong> Carries oxygen, nutrients, waste</li>
                            <li><strong>Heart:</strong> Pumps blood (4 chambers)</li>
                            <li><strong>Blood Vessels:</strong> Arteries, veins, capillaries</li>
                        </ul>
                        
                        <h3>Excretion</h3>
                        <p>Removal of metabolic waste</p>
                        <ul>
                            <li><strong>Kidneys:</strong> Filter blood, form urine</li>
                            <li><strong>Nephron:</strong> Functional unit of kidney</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 6: Control and Coordination",
                    content: `
                        <h2>Control and Coordination</h2>
                        
                        <h3>Nervous System</h3>
                        <ul>
                            <li><strong>Central Nervous System:</strong> Brain and spinal cord</li>
                            <li><strong>Peripheral Nervous System:</strong> Nerves</li>
                        </ul>
                        
                        <h3>Reflex Action</h3>
                        <p>Automatic response to stimulus without conscious thought.</p>
                        <p><strong>Reflex Arc:</strong> Receptor → Sensory neuron → Spinal cord → Motor neuron → Effector</p>
                        
                        <h3>Hormones</h3>
                        <p>Chemical messengers secreted by endocrine glands.</p>
                        
                        <h3>Important Hormones</h3>
                        <ul>
                            <li><strong>Insulin:</strong> Regulates blood sugar (Pancreas)</li>
                            <li><strong>Thyroxine:</strong> Controls metabolism (Thyroid)</li>
                            <li><strong>Adrenaline:</strong> Emergency hormone (Adrenal)</li>
                            <li><strong>Growth Hormone:</strong> Controls growth (Pituitary)</li>
                            <li><strong>Testosterone:</strong> Male sex hormone</li>
                            <li><strong>Estrogen:</strong> Female sex hormone</li>
                        </ul>
                        
                        <h3>Plant Hormones</h3>
                        <ul>
                            <li><strong>Auxin:</strong> Cell elongation, phototropism</li>
                            <li><strong>Gibberellin:</strong> Stem growth</li>
                            <li><strong>Cytokinin:</strong> Cell division</li>
                            <li><strong>Abscisic Acid:</strong> Inhibits growth</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 7: How Do Organisms Reproduce?",
                    content: `
                        <h2>How Do Organisms Reproduce?</h2>
                        
                        <h3>Asexual Reproduction</h3>
                        <p>Single parent, no gamete formation</p>
                        <ul>
                            <li><strong>Fission:</strong> Binary (Amoeba), Multiple (Plasmodium)</li>
                            <li><strong>Fragmentation:</strong> Spirogyra</li>
                            <li><strong>Regeneration:</strong> Planaria, Hydra</li>
                            <li><strong>Budding:</strong> Yeast, Hydra</li>
                            <li><strong>Vegetative Propagation:</strong> Stem, root, leaf</li>
                            <li><strong>Spore Formation:</strong> Rhizopus, ferns</li>
                        </ul>
                        
                        <h3>Sexual Reproduction</h3>
                        <p>Two parents, involves gamete formation and fertilization</p>
                        
                        <h3>Human Reproductive System</h3>
                        <p><strong>Male:</strong> Testes produce sperms</p>
                        <p><strong>Female:</strong> Ovaries produce eggs</p>
                        
                        <h3>Fertilization and Development</h3>
                        <ul>
                            <li>Fertilization in fallopian tube</li>
                            <li>Implantation in uterus</li>
                            <li>Development of embryo</li>
                            <li>Gestation period: 9 months</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 8: Heredity and Evolution",
                    content: `
                        <h2>Heredity and Evolution</h2>
                        
                        <h3>Mendel's Laws</h3>
                        <ul>
                            <li><strong>Law of Dominance:</strong> Dominant trait expresses in F₁</li>
                            <li><strong>Law of Segregation:</strong> Alleles separate during gamete formation</li>
                            <li><strong>Law of Independent Assortment:</strong> Different traits inherited independently</li>
                        </ul>
                        
                        <h3>Sex Determination</h3>
                        <p>In humans: XX (female), XY (male)</p>
                        
                        <h3>Evolution</h3>
                        <p>Gradual change in species over time</p>
                        
                        <h3>Evidence of Evolution</h3>
                        <ul>
                            <li>Fossils</li>
                            <li>Homologous organs</li>
                            <li>Analogous organs</li>
                            <li>Vestigial organs</li>
                        </ul>
                        
                        <h3>Darwin's Theory</h3>
                        <p>Natural selection - survival of the fittest</p>
                    `
                },
                {
                    title: "Chapter 9: Light - Reflection and Refraction",
                    content: `
                        <h2>Light - Reflection and Refraction</h2>
                        
                        <h3>Laws of Reflection</h3>
                        <ul>
                            <li>Angle of incidence = Angle of reflection</li>
                            <li>Incident ray, reflected ray, and normal lie in same plane</li>
                        </ul>
                        
                        <h3>Spherical Mirrors</h3>
                        <p><strong>Concave Mirror:</strong> Converging mirror</p>
                        <p><strong>Convex Mirror:</strong> Diverging mirror</p>
                        
                        <h3>Mirror Formula</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>1/f = 1/v + 1/u</strong></p>
                            <p><strong>Magnification (m) = -v/u = h'/h</strong></p>
                        </div>
                        
                        <h3>Refraction</h3>
                        <p>Bending of light when it passes from one medium to another</p>
                        
                        <h3>Snell's Law</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>n₁ sin i = n₂ sin r</strong></p>
                            <p>where n = refractive index</p>
                        </div>
                        
                        <h3>Lens Formula</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>1/f = 1/v - 1/u</strong></p>
                            <p><strong>Power (P) = 1/f (in meters)</strong></p>
                        </div>
                    `
                },
                {
                    title: "Chapter 10: Electricity",
                    content: `
                        <h2>Electricity</h2>
                        
                        <h3>Electric Current</h3>
                        <p>Flow of electric charge</p>
                        <p><strong>I = Q/t</strong> (Ampere)</p>
                        
                        <h3>Ohm's Law</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>V = IR</strong></p>
                            <p>where V = Voltage, I = Current, R = Resistance</p>
                        </div>
                        
                        <h3>Resistance in Series and Parallel</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>Series:</strong> R = R₁ + R₂ + R₃</p>
                            <p><strong>Parallel:</strong> 1/R = 1/R₁ + 1/R₂ + 1/R₃</p>
                        </div>
                        
                        <h3>Electric Power</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>P = VI = I²R = V²/R</strong></p>
                            <p><strong>Energy = P × t</strong></p>
                        </div>
                        
                        <h3>Heating Effect</h3>
                        <p><strong>H = I²Rt</strong> (Joule's Law)</p>
                    `
                },
                {
                    title: "Chapter 11: Magnetic Effects of Electric Current",
                    content: `
                        <h2>Magnetic Effects of Electric Current</h2>
                        
                        <h3>Magnetic Field</h3>
                        <p>Region around a magnet where magnetic force is experienced</p>
                        
                        <h3>Right Hand Thumb Rule</h3>
                        <p>If thumb points in direction of current, fingers show direction of magnetic field</p>
                        
                        <h3>Fleming's Left Hand Rule</h3>
                        <p>For direction of force on current-carrying conductor in magnetic field</p>
                        <p><strong>First finger:</strong> Field, <strong>Second finger:</strong> Current, <strong>Thumb:</strong> Motion</p>
                        
                        <h3>Electromagnetic Induction</h3>
                        <p>Production of electric current by changing magnetic field</p>
                        
                        <h3>Fleming's Right Hand Rule</h3>
                        <p>For direction of induced current</p>
                        
                        <h3>Domestic Electric Circuit</h3>
                        <ul>
                            <li><strong>Live Wire:</strong> Red (220V)</li>
                            <li><strong>Neutral Wire:</strong> Black (0V)</li>
                            <li><strong>Earth Wire:</strong> Green (safety)</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 12: Our Environment",
                    content: `
                        <h2>Our Environment</h2>
                        
                        <h3>Ecosystem</h3>
                        <p>Interaction between living organisms and their environment</p>
                        
                        <h3>Food Chain</h3>
                        <p>Transfer of energy from one organism to another</p>
                        <p><strong>Example:</strong> Grass → Grasshopper → Frog → Snake → Eagle</p>
                        
                        <h3>Trophic Levels</h3>
                        <ul>
                            <li><strong>Producers:</strong> Plants (autotrophs)</li>
                            <li><strong>Primary Consumers:</strong> Herbivores</li>
                            <li><strong>Secondary Consumers:</strong> Carnivores</li>
                            <li><strong>Tertiary Consumers:</strong> Top carnivores</li>
                            <li><strong>Decomposers:</strong> Bacteria, fungi</li>
                        </ul>
                        
                        <h3>10% Law</h3>
                        <p>Only 10% of energy is transferred to next trophic level</p>
                        
                        <h3>Ozone Layer</h3>
                        <p>Protects from harmful UV radiation</p>
                        <p><strong>Ozone Depletion:</strong> Caused by CFCs</p>
                        
                        <h3>Waste Management</h3>
                        <ul>
                            <li><strong>Biodegradable:</strong> Decomposed by microorganisms</li>
                            <li><strong>Non-biodegradable:</strong> Cannot be decomposed (plastics)</li>
                        </ul>
                    `
                }
            ]
        },
        
        "English": {
            title: "Class 10 English",
            description: "English literature, grammar, and writing skills",
            topics: [
                {
                    title: "Grammar: Modals",
                    content: `
                        <h2>Modals</h2>
                        
                        <h3>What are Modals?</h3>
                        <p>Auxiliary verbs that express necessity, possibility, permission, or ability.</p>
                        
                        <h3>Common Modals</h3>
                        <ul>
                            <li><strong>Can/Could:</strong> Ability, permission, possibility</li>
                            <li><strong>May/Might:</strong> Permission, possibility</li>
                            <li><strong>Will/Would:</strong> Future, willingness, habit</li>
                            <li><strong>Shall/Should:</strong> Suggestion, obligation</li>
                            <li><strong>Must:</strong> Necessity, strong obligation</li>
                            <li><strong>Ought to:</strong> Moral obligation</li>
                        </ul>
                        
                        <h3>Examples</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>Can:</strong> I can swim.</p>
                            <p><strong>May:</strong> May I come in?</p>
                            <p><strong>Must:</strong> You must study hard.</p>
                            <p><strong>Should:</strong> You should help others.</p>
                        </div>
                    `
                },
                {
                    title: "Writing: Letter Writing",
                    content: `
                        <h2>Letter Writing</h2>
                        
                        <h3>Formal Letter Format</h3>
                        <ol>
                            <li>Sender's address</li>
                            <li>Date</li>
                            <li>Receiver's address</li>
                            <li>Subject</li>
                            <li>Salutation (Dear Sir/Madam)</li>
                            <li>Body (Introduction, Main content, Conclusion)</li>
                            <li>Closing (Yours faithfully/sincerely)</li>
                            <li>Signature</li>
                        </ol>
                        
                        <h3>Informal Letter Format</h3>
                        <ol>
                            <li>Sender's address</li>
                            <li>Date</li>
                            <li>Salutation (Dear friend/name)</li>
                            <li>Body</li>
                            <li>Closing (Yours lovingly/affectionately)</li>
                            <li>Signature</li>
                        </ol>
                    `
                }
            ]
        },
        
        "Social Studies": {
            title: "Class 10 Social Studies",
            description: "History, Geography, Political Science, and Economics",
            topics: [
                {
                    title: "History: Nationalism in Europe",
                    content: `
                        <h2>The Rise of Nationalism in Europe</h2>
                        
                        <h3>French Revolution (1789)</h3>
                        <p>Marked the beginning of nationalism in Europe</p>
                        
                        <h3>Napoleon Bonaparte</h3>
                        <ul>
                            <li>Spread revolutionary ideas across Europe</li>
                            <li>Introduced Civil Code (1804)</li>
                            <li>Abolished feudalism</li>
                        </ul>
                        
                        <h3>Unification of Italy</h3>
                        <ul>
                            <li><strong>Key Leaders:</strong> Mazzini, Cavour, Garibaldi</li>
                            <li><strong>Victor Emmanuel II:</strong> First king of unified Italy</li>
                        </ul>
                        
                        <h3>Unification of Germany</h3>
                        <ul>
                            <li><strong>Otto von Bismarck:</strong> Architect of German unification</li>
                            <li><strong>Kaiser William I:</strong> Emperor of Germany</li>
                        </ul>
                    `
                },
                {
                    title: "Geography: Resources and Development",
                    content: `
                        <h2>Resources and Development</h2>
                        
                        <h3>Types of Resources</h3>
                        <ul>
                            <li><strong>On basis of origin:</strong> Biotic, Abiotic</li>
                            <li><strong>On basis of exhaustibility:</strong> Renewable, Non-renewable</li>
                            <li><strong>On basis of ownership:</strong> Individual, Community, National, International</li>
                            <li><strong>On basis of development:</strong> Potential, Developed, Stock, Reserves</li>
                        </ul>
                        
                        <h3>Soil Types in India</h3>
                        <ul>
                            <li><strong>Alluvial Soil:</strong> Most widespread, very fertile</li>
                            <li><strong>Black Soil:</strong> Cotton cultivation, Deccan plateau</li>
                            <li><strong>Red Soil:</strong> Low fertility, crystalline rocks</li>
                            <li><strong>Laterite Soil:</strong> High temperature and rainfall areas</li>
                            <li><strong>Arid Soil:</strong> Desert regions</li>
                            <li><strong>Forest Soil:</strong> Hilly and mountainous areas</li>
                        </ul>
                        
                        <h3>Soil Erosion</h3>
                        <p>Removal of topsoil by wind, water, or human activities</p>
                        
                        <h3>Soil Conservation</h3>
                        <ul>
                            <li>Contour ploughing</li>
                            <li>Terrace farming</li>
                            <li>Strip cropping</li>
                            <li>Afforestation</li>
                        </ul>
                    `
                },
                {
                    title: "Political Science: Power Sharing",
                    content: `
                        <h2>Power Sharing</h2>
                        
                        <h3>Why Power Sharing is Desirable?</h3>
                        <ul>
                            <li>Reduces conflict among different groups</li>
                            <li>Ensures political stability</li>
                            <li>Respects diversity</li>
                            <li>Promotes democracy</li>
                        </ul>
                        
                        <h3>Forms of Power Sharing</h3>
                        <ul>
                            <li><strong>Horizontal:</strong> Among different organs (Legislature, Executive, Judiciary)</li>
                            <li><strong>Vertical:</strong> Among different levels (Central, State, Local)</li>
                            <li><strong>Social:</strong> Among different social groups</li>
                            <li><strong>Political:</strong> Among political parties</li>
                        </ul>
                        
                        <h3>Belgium Model</h3>
                        <p>Complex power-sharing arrangement to accommodate linguistic diversity</p>
                        
                        <h3>Sri Lankan Model</h3>
                        <p>Majoritarianism led to civil war</p>
                    `
                },
                {
                    title: "Economics: Development",
                    content: `
                        <h2>Development</h2>
                        
                        <h3>What is Development?</h3>
                        <p>Improvement in quality of life and economic well-being</p>
                        
                        <h3>Indicators of Development</h3>
                        <ul>
                            <li><strong>Per Capita Income:</strong> Average income per person</li>
                            <li><strong>Literacy Rate:</strong> Percentage of literate population</li>
                            <li><strong>Life Expectancy:</strong> Average lifespan</li>
                            <li><strong>Infant Mortality Rate:</strong> Deaths per 1000 live births</li>
                        </ul>
                        
                        <h3>Human Development Index (HDI)</h3>
                        <p>Composite index measuring:</p>
                        <ul>
                            <li>Life expectancy</li>
                            <li>Education</li>
                            <li>Per capita income</li>
                        </ul>
                        
                        <h3>Sustainable Development</h3>
                        <p>Development that meets present needs without compromising future generations</p>
                    `
                }
            ]
        },
        
        "Nepali": {
            title: "Class 10 Nepali",
            description: "नेपाली भाषा, साहित्य र व्याकरण",
            topics: [
                {
                    title: "व्याकरण: वाच्य",
                    content: `
                        <h2>वाच्य</h2>
                        
                        <h3>वाच्यका प्रकार</h3>
                        <ul>
                            <li><strong>कर्तृवाच्य:</strong> कर्ताले क्रिया गर्छ (रामले खाना खायो)</li>
                            <li><strong>कर्मवाच्य:</strong> कर्ममा जोड (रामद्वारा खाना खाइयो)</li>
                            <li><strong>भाववाच्य:</strong> भावमा जोड (मबाट हिँडिएन)</li>
                        </ul>
                        
                        <h3>उदाहरण</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>कर्तृवाच्य:</strong> सीताले पत्र लेख्छे।</p>
                            <p><strong>कर्मवाच्य:</strong> सीताद्वारा पत्र लेखिन्छ।</p>
                        </div>
                    `
                },
                {
                    title: "साहित्य: कविता विश्लेषण",
                    content: `
                        <h2>कविता विश्लेषण</h2>
                        
                        <h3>कविता विश्लेषणका आधार</h3>
                        <ul>
                            <li><strong>विषयवस्तु:</strong> कवितामा के भनिएको छ?</li>
                            <li><strong>भाषाशैली:</strong> कस्तो भाषा प्रयोग गरिएको छ?</li>
                            <li><strong>छन्द र लय:</strong> कस्तो छन्द र लय छ?</li>
                            <li><strong>अलंकार:</strong> कस्ता अलंकारहरू प्रयोग भएका छन्?</li>
                            <li><strong>सन्देश:</strong> कविताले के सन्देश दिन्छ?</li>
                        </ul>
                    `
                }
            ]
        }
    },
    
    // ==================== CLASS 11 ====================
    "Class 11": {
        "Mathematics": {
            title: "Class 11 Mathematics",
            description: "Advanced mathematics for Class 11",
            topics: [
                {
                    title: "Chapter 1: Sets",
                    content: `
                        <h2>Sets</h2>
                        
                        <h3>Definition</h3>
                        <p>A set is a well-defined collection of distinct objects.</p>
                        
                        <h3>Types of Sets</h3>
                        <ul>
                            <li><strong>Empty Set (∅):</strong> Set with no elements</li>
                            <li><strong>Finite Set:</strong> Set with countable elements</li>
                            <li><strong>Infinite Set:</strong> Set with uncountable elements</li>
                            <li><strong>Universal Set (U):</strong> Set containing all elements under consideration</li>
                            <li><strong>Subset:</strong> A ⊆ B if all elements of A are in B</li>
                            <li><strong>Power Set:</strong> Set of all subsets</li>
                        </ul>
                        
                        <h3>Set Operations</h3>
                        <ul>
                            <li><strong>Union (A ∪ B):</strong> All elements in A or B or both</li>
                            <li><strong>Intersection (A ∩ B):</strong> Common elements in A and B</li>
                            <li><strong>Difference (A - B):</strong> Elements in A but not in B</li>
                            <li><strong>Complement (A'):</strong> Elements in U but not in A</li>
                        </ul>
                        
                        <h3>De Morgan's Laws</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>(A ∪ B)' = A' ∩ B'</strong></p>
                            <p><strong>(A ∩ B)' = A' ∪ B'</strong></p>
                        </div>
                        
                        <h3>Venn Diagrams</h3>
                        <p>Pictorial representation of sets and their relationships</p>
                    `
                },
                {
                    title: "Chapter 2: Relations and Functions",
                    content: `
                        <h2>Relations and Functions</h2>
                        
                        <h3>Relation</h3>
                        <p>A relation R from set A to set B is a subset of A × B</p>
                        
                        <h3>Types of Relations</h3>
                        <ul>
                            <li><strong>Reflexive:</strong> (a, a) ∈ R for all a ∈ A</li>
                            <li><strong>Symmetric:</strong> If (a, b) ∈ R, then (b, a) ∈ R</li>
                            <li><strong>Transitive:</strong> If (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R</li>
                            <li><strong>Equivalence Relation:</strong> Reflexive, Symmetric, and Transitive</li>
                        </ul>
                        
                        <h3>Function</h3>
                        <p>A relation f from A to B where each element of A has unique image in B</p>
                        
                        <h3>Types of Functions</h3>
                        <ul>
                            <li><strong>One-One (Injective):</strong> Different elements have different images</li>
                            <li><strong>Onto (Surjective):</strong> Every element in codomain has pre-image</li>
                            <li><strong>Bijective:</strong> Both one-one and onto</li>
                            <li><strong>Identity Function:</strong> f(x) = x</li>
                            <li><strong>Constant Function:</strong> f(x) = c</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 3: Trigonometric Functions",
                    content: `
                        <h2>Trigonometric Functions</h2>
                        
                        <h3>Radian Measure</h3>
                        <p>180° = π radians</p>
                        <p>1 radian = 180°/π ≈ 57.3°</p>
                        
                        <h3>Trigonometric Identities</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>sin²θ + cos²θ = 1</strong></p>
                            <p><strong>1 + tan²θ = sec²θ</strong></p>
                            <p><strong>1 + cot²θ = cosec²θ</strong></p>
                        </div>
                        
                        <h3>Compound Angle Formulas</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>sin(A ± B) = sinA cosB ± cosA sinB</strong></p>
                            <p><strong>cos(A ± B) = cosA cosB ∓ sinA sinB</strong></p>
                            <p><strong>tan(A ± B) = (tanA ± tanB)/(1 ∓ tanA tanB)</strong></p>
                        </div>
                        
                        <h3>Multiple Angle Formulas</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>sin2A = 2sinA cosA</strong></p>
                            <p><strong>cos2A = cos²A - sin²A = 2cos²A - 1 = 1 - 2sin²A</strong></p>
                            <p><strong>tan2A = 2tanA/(1 - tan²A)</strong></p>
                        </div>
                    `
                }
            ]
        },
        
        "Physics": {
            title: "Class 11 Physics",
            description: "Physics for Class 11 - Mechanics, Thermodynamics, Waves",
            topics: [
                {
                    title: "Chapter 1: Physical World and Measurement",
                    content: `
                        <h2>Physical World and Measurement</h2>
                        
                        <h3>Fundamental Forces</h3>
                        <ul>
                            <li><strong>Gravitational Force:</strong> Weakest, infinite range</li>
                            <li><strong>Electromagnetic Force:</strong> Infinite range</li>
                            <li><strong>Strong Nuclear Force:</strong> Strongest, short range</li>
                            <li><strong>Weak Nuclear Force:</strong> Short range</li>
                        </ul>
                        
                        <h3>SI Units</h3>
                        <p><strong>Base Units:</strong> meter (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), candela (cd)</p>
                        
                        <h3>Dimensional Analysis</h3>
                        <p>Used to check correctness of equations and derive relationships</p>
                        <p><strong>Dimensions of common quantities:</strong></p>
                        <ul>
                            <li>Velocity: [LT⁻¹]</li>
                            <li>Acceleration: [LT⁻²]</li>
                            <li>Force: [MLT⁻²]</li>
                            <li>Energy: [ML²T⁻²]</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 2: Kinematics",
                    content: `
                        <h2>Kinematics</h2>
                        
                        <h3>Equations of Motion</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>v = u + at</strong></p>
                            <p><strong>s = ut + ½at²</strong></p>
                            <p><strong>v² = u² + 2as</strong></p>
                        </div>
                        
                        <h3>Projectile Motion</h3>
                        <ul>
                            <li><strong>Time of Flight:</strong> T = 2u sinθ/g</li>
                            <li><strong>Maximum Height:</strong> H = u² sin²θ/2g</li>
                            <li><strong>Range:</strong> R = u² sin2θ/g</li>
                        </ul>
                        
                        <h3>Circular Motion</h3>
                        <ul>
                            <li><strong>Angular Velocity:</strong> ω = θ/t</li>
                            <li><strong>Linear Velocity:</strong> v = rω</li>
                            <li><strong>Centripetal Acceleration:</strong> a = v²/r = rω²</li>
                        </ul>
                    `
                }
            ]
        },
        
        "Chemistry": {
            title: "Class 11 Chemistry",
            description: "Chemistry for Class 11 - Atomic Structure, Chemical Bonding",
            topics: [
                {
                    title: "Chapter 1: Some Basic Concepts of Chemistry",
                    content: `
                        <h2>Some Basic Concepts of Chemistry</h2>
                        
                        <h3>Laws of Chemical Combination</h3>
                        <ul>
                            <li><strong>Law of Conservation of Mass:</strong> Mass is neither created nor destroyed</li>
                            <li><strong>Law of Definite Proportions:</strong> Elements in compound are in fixed ratio</li>
                            <li><strong>Law of Multiple Proportions:</strong> When two elements combine in different ratios</li>
                            <li><strong>Gay-Lussac's Law:</strong> Gases combine in simple whole number ratios</li>
                            <li><strong>Avogadro's Law:</strong> Equal volumes of gases at same T and P contain equal molecules</li>
                        </ul>
                        
                        <h3>Mole Concept</h3>
                        <p><strong>1 mole = 6.022 × 10²³ particles (Avogadro's number)</strong></p>
                        <p><strong>Molar Mass:</strong> Mass of 1 mole of substance</p>
                        
                        <h3>Stoichiometry</h3>
                        <p>Calculation of reactants and products in chemical reactions</p>
                        
                        <h3>Limiting Reagent</h3>
                        <p>Reactant that is completely consumed and limits product formation</p>
                    `
                },
                {
                    title: "Chapter 2: Structure of Atom",
                    content: `
                        <h2>Structure of Atom</h2>
                        
                        <h3>Atomic Models</h3>
                        <ul>
                            <li><strong>Thomson's Model:</strong> Plum pudding model</li>
                            <li><strong>Rutherford's Model:</strong> Nuclear model</li>
                            <li><strong>Bohr's Model:</strong> Electrons in fixed orbits</li>
                        </ul>
                        
                        <h3>Quantum Numbers</h3>
                        <ul>
                            <li><strong>Principal (n):</strong> Energy level (1, 2, 3, ...)</li>
                            <li><strong>Azimuthal (l):</strong> Subshell (0 to n-1)</li>
                            <li><strong>Magnetic (m):</strong> Orbital orientation (-l to +l)</li>
                            <li><strong>Spin (s):</strong> Electron spin (+½ or -½)</li>
                        </ul>
                        
                        <h3>Electronic Configuration</h3>
                        <p><strong>Aufbau Principle:</strong> Electrons fill lower energy orbitals first</p>
                        <p><strong>Pauli Exclusion Principle:</strong> No two electrons can have same quantum numbers</p>
                        <p><strong>Hund's Rule:</strong> Maximum unpaired electrons in degenerate orbitals</p>
                    `
                }
            ]
        },
        
        "Biology": {
            title: "Class 11 Biology",
            description: "Biology for Class 11 - Diversity, Cell Biology, Plant Physiology",
            topics: [
                {
                    title: "Chapter 1: The Living World",
                    content: `
                        <h2>The Living World</h2>
                        
                        <h3>Characteristics of Living Organisms</h3>
                        <ul>
                            <li>Growth</li>
                            <li>Reproduction</li>
                            <li>Metabolism</li>
                            <li>Cellular organization</li>
                            <li>Consciousness</li>
                        </ul>
                        
                        <h3>Taxonomy</h3>
                        <p>Science of classification of organisms</p>
                        
                        <h3>Taxonomic Hierarchy</h3>
                        <p>Kingdom → Phylum → Class → Order → Family → Genus → Species</p>
                        
                        <h3>Binomial Nomenclature</h3>
                        <p>Two-word naming system (Genus species)</p>
                        <p><strong>Example:</strong> Homo sapiens (humans)</p>
                    `
                },
                {
                    title: "Chapter 2: Biological Classification",
                    content: `
                        <h2>Biological Classification</h2>
                        
                        <h3>Five Kingdom Classification</h3>
                        <ul>
                            <li><strong>Monera:</strong> Prokaryotic, unicellular (bacteria)</li>
                            <li><strong>Protista:</strong> Eukaryotic, unicellular (amoeba, paramecium)</li>
                            <li><strong>Fungi:</strong> Eukaryotic, heterotrophic (mushrooms, yeast)</li>
                            <li><strong>Plantae:</strong> Eukaryotic, autotrophic (plants)</li>
                            <li><strong>Animalia:</strong> Eukaryotic, heterotrophic (animals)</li>
                        </ul>
                        
                        <h3>Virus</h3>
                        <p>Non-cellular, obligate parasites</p>
                        <p>Contain DNA or RNA, not both</p>
                    `
                }
            ]
        }
    },
    
    // ==================== CLASS 12 ====================
    "Class 12": {
        "Mathematics": {
            title: "Class 12 Mathematics",
            description: "Advanced mathematics for Class 12",
            topics: [
                {
                    title: "Chapter 1: Relations and Functions",
                    content: `
                        <h2>Relations and Functions</h2>
                        
                        <h3>Types of Relations</h3>
                        <ul>
                            <li><strong>Reflexive:</strong> (a, a) ∈ R for all a</li>
                            <li><strong>Symmetric:</strong> If (a, b) ∈ R, then (b, a) ∈ R</li>
                            <li><strong>Transitive:</strong> If (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R</li>
                            <li><strong>Equivalence Relation:</strong> Reflexive, Symmetric, and Transitive</li>
                        </ul>
                        
                        <h3>Types of Functions</h3>
                        <ul>
                            <li><strong>One-One (Injective):</strong> Different elements have different images</li>
                            <li><strong>Onto (Surjective):</strong> Every element in codomain has pre-image</li>
                            <li><strong>Bijective:</strong> Both one-one and onto</li>
                        </ul>
                        
                        <h3>Inverse Function</h3>
                        <p>If f: A → B is bijective, then f⁻¹: B → A exists</p>
                        <p><strong>Property:</strong> f(f⁻¹(x)) = x and f⁻¹(f(x)) = x</p>
                        
                        <h3>Composite Function</h3>
                        <p>(fog)(x) = f(g(x))</p>
                    `
                },
                {
                    title: "Chapter 2: Inverse Trigonometric Functions",
                    content: `
                        <h2>Inverse Trigonometric Functions</h2>
                        
                        <h3>Principal Values</h3>
                        <ul>
                            <li><strong>sin⁻¹x:</strong> [-π/2, π/2]</li>
                            <li><strong>cos⁻¹x:</strong> [0, π]</li>
                            <li><strong>tan⁻¹x:</strong> (-π/2, π/2)</li>
                        </ul>
                        
                        <h3>Properties</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>sin⁻¹(-x) = -sin⁻¹x</strong></p>
                            <p><strong>cos⁻¹(-x) = π - cos⁻¹x</strong></p>
                            <p><strong>tan⁻¹(-x) = -tan⁻¹x</strong></p>
                            <p><strong>sin⁻¹x + cos⁻¹x = π/2</strong></p>
                            <p><strong>tan⁻¹x + cot⁻¹x = π/2</strong></p>
                        </div>
                    `
                },
                {
                    title: "Chapter 3: Matrices",
                    content: `
                        <h2>Matrices</h2>
                        
                        <h3>Types of Matrices</h3>
                        <ul>
                            <li><strong>Row Matrix:</strong> 1 × n</li>
                            <li><strong>Column Matrix:</strong> m × 1</li>
                            <li><strong>Square Matrix:</strong> m × m</li>
                            <li><strong>Diagonal Matrix:</strong> Non-diagonal elements are zero</li>
                            <li><strong>Identity Matrix:</strong> Diagonal elements are 1</li>
                            <li><strong>Zero Matrix:</strong> All elements are zero</li>
                        </ul>
                        
                        <h3>Operations on Matrices</h3>
                        <ul>
                            <li><strong>Addition:</strong> Same order matrices</li>
                            <li><strong>Multiplication:</strong> (m × n) × (n × p) = (m × p)</li>
                            <li><strong>Transpose:</strong> A' or Aᵀ</li>
                        </ul>
                        
                        <h3>Properties</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>(A + B)' = A' + B'</strong></p>
                            <p><strong>(AB)' = B'A'</strong></p>
                            <p><strong>(A')' = A</strong></p>
                        </div>
                    `
                },
                {
                    title: "Chapter 4: Determinants",
                    content: `
                        <h2>Determinants</h2>
                        
                        <h3>Determinant of 2×2 Matrix</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p>|A| = ad - bc</p>
                            <p>where A = [a b; c d]</p>
                        </div>
                        
                        <h3>Properties of Determinants</h3>
                        <ul>
                            <li>|A'| = |A|</li>
                            <li>If two rows/columns are identical, |A| = 0</li>
                            <li>If row/column is multiplied by k, determinant is multiplied by k</li>
                            <li>|AB| = |A| × |B|</li>
                        </ul>
                        
                        <h3>Cofactor and Adjoint</h3>
                        <p><strong>Cofactor:</strong> Cᵢⱼ = (-1)^(i+j) × Mᵢⱼ</p>
                        <p><strong>Adjoint:</strong> adj(A) = [Cᵢⱼ]'</p>
                        
                        <h3>Inverse of Matrix</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>A⁻¹ = adj(A) / |A|</strong></p>
                            <p>Exists only if |A| ≠ 0</p>
                        </div>
                    `
                },
                {
                    title: "Chapter 5: Continuity and Differentiability",
                    content: `
                        <h2>Continuity and Differentiability</h2>
                        
                        <h3>Continuity</h3>
                        <p>Function f(x) is continuous at x = a if:</p>
                        <ul>
                            <li>f(a) exists</li>
                            <li>lim(x→a) f(x) exists</li>
                            <li>lim(x→a) f(x) = f(a)</li>
                        </ul>
                        
                        <h3>Differentiability</h3>
                        <p>f(x) is differentiable at x = a if:</p>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p>f'(a) = lim(h→0) [f(a+h) - f(a)] / h exists</p>
                        </div>
                        
                        <h3>Important Results</h3>
                        <ul>
                            <li>Every differentiable function is continuous</li>
                            <li>Continuous function may not be differentiable</li>
                        </ul>
                        
                        <h3>Derivatives of Standard Functions</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p>d/dx(xⁿ) = nxⁿ⁻¹</p>
                            <p>d/dx(sin x) = cos x</p>
                            <p>d/dx(cos x) = -sin x</p>
                            <p>d/dx(eˣ) = eˣ</p>
                            <p>d/dx(ln x) = 1/x</p>
                        </div>
                    `
                },
                {
                    title: "Chapter 6: Application of Derivatives",
                    content: `
                        <h2>Application of Derivatives</h2>
                        
                        <h3>Rate of Change</h3>
                        <p>dy/dx represents rate of change of y with respect to x</p>
                        
                        <h3>Increasing and Decreasing Functions</h3>
                        <ul>
                            <li><strong>Increasing:</strong> f'(x) > 0</li>
                            <li><strong>Decreasing:</strong> f'(x) < 0</li>
                        </ul>
                        
                        <h3>Maxima and Minima</h3>
                        <p><strong>Critical Points:</strong> f'(x) = 0</p>
                        <ul>
                            <li><strong>Local Maximum:</strong> f''(x) < 0</li>
                            <li><strong>Local Minimum:</strong> f''(x) > 0</li>
                        </ul>
                        
                        <h3>Tangent and Normal</h3>
                        <p><strong>Slope of tangent at (x₁, y₁):</strong> m = f'(x₁)</p>
                        <p><strong>Slope of normal:</strong> -1/m</p>
                    `
                },
                {
                    title: "Chapter 7: Integrals",
                    content: `
                        <h2>Integrals</h2>
                        
                        <h3>Indefinite Integral</h3>
                        <p>∫f(x)dx = F(x) + C, where F'(x) = f(x)</p>
                        
                        <h3>Standard Integrals</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p>∫xⁿdx = xⁿ⁺¹/(n+1) + C</p>
                            <p>∫sin x dx = -cos x + C</p>
                            <p>∫cos x dx = sin x + C</p>
                            <p>∫eˣdx = eˣ + C</p>
                            <p>∫(1/x)dx = ln|x| + C</p>
                        </div>
                        
                        <h3>Methods of Integration</h3>
                        <ul>
                            <li><strong>Substitution Method</strong></li>
                            <li><strong>Integration by Parts:</strong> ∫u dv = uv - ∫v du</li>
                            <li><strong>Partial Fractions</strong></li>
                        </ul>
                        
                        <h3>Definite Integral</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p>∫ₐᵇ f(x)dx = F(b) - F(a)</p>
                        </div>
                        
                        <h3>Properties</h3>
                        <ul>
                            <li>∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx</li>
                            <li>∫ₐᵇ f(x)dx = ∫ₐᶜ f(x)dx + ∫ᶜᵇ f(x)dx</li>
                            <li>∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 8: Application of Integrals",
                    content: `
                        <h2>Application of Integrals</h2>
                        
                        <h3>Area Under Curve</h3>
                        <p>Area between curve y = f(x) and x-axis from x = a to x = b:</p>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>A = ∫ₐᵇ f(x)dx</strong></p>
                        </div>
                        
                        <h3>Area Between Two Curves</h3>
                        <p>Area between y = f(x) and y = g(x):</p>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>A = ∫ₐᵇ |f(x) - g(x)|dx</strong></p>
                        </div>
                    `
                },
                {
                    title: "Chapter 9: Differential Equations",
                    content: `
                        <h2>Differential Equations</h2>
                        
                        <h3>Order and Degree</h3>
                        <p><strong>Order:</strong> Highest derivative</p>
                        <p><strong>Degree:</strong> Power of highest derivative</p>
                        
                        <h3>Types of Differential Equations</h3>
                        <ul>
                            <li><strong>Variable Separable:</strong> dy/dx = f(x)g(y)</li>
                            <li><strong>Homogeneous:</strong> dy/dx = f(y/x)</li>
                            <li><strong>Linear:</strong> dy/dx + Py = Q</li>
                        </ul>
                        
                        <h3>Solution of Linear DE</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>IF = e^(∫P dx)</strong></p>
                            <p><strong>Solution: y × IF = ∫Q × IF dx + C</strong></p>
                        </div>
                    `
                },
                {
                    title: "Chapter 10: Vector Algebra",
                    content: `
                        <h2>Vector Algebra</h2>
                        
                        <h3>Vector Representation</h3>
                        <p>Vector: Quantity with magnitude and direction</p>
                        <p><strong>Position Vector:</strong> a⃗ = xî + yĵ + zk̂</p>
                        
                        <h3>Dot Product (Scalar Product)</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>a⃗ · b⃗ = |a⃗||b⃗|cos θ</strong></p>
                            <p><strong>a⃗ · b⃗ = a₁b₁ + a₂b₂ + a₃b₃</strong></p>
                        </div>
                        
                        <h3>Cross Product (Vector Product)</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>a⃗ × b⃗ = |a⃗||b⃗|sin θ n̂</strong></p>
                            <p>Direction: Right-hand rule</p>
                        </div>
                        
                        <h3>Properties</h3>
                        <ul>
                            <li>a⃗ · b⃗ = b⃗ · a⃗ (Commutative)</li>
                            <li>a⃗ × b⃗ = -b⃗ × a⃗ (Anti-commutative)</li>
                            <li>a⃗ · a⃗ = |a⃗|²</li>
                            <li>a⃗ × a⃗ = 0⃗</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 11: Three Dimensional Geometry",
                    content: `
                        <h2>Three Dimensional Geometry</h2>
                        
                        <h3>Direction Cosines and Ratios</h3>
                        <p><strong>Direction Cosines:</strong> l, m, n where l² + m² + n² = 1</p>
                        <p><strong>Direction Ratios:</strong> a, b, c proportional to l, m, n</p>
                        
                        <h3>Equation of Line</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>Vector Form:</strong> r⃗ = a⃗ + λb⃗</p>
                            <p><strong>Cartesian Form:</strong> (x-x₁)/a = (y-y₁)/b = (z-z₁)/c</p>
                        </div>
                        
                        <h3>Equation of Plane</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>Vector Form:</strong> r⃗ · n⃗ = d</p>
                            <p><strong>Cartesian Form:</strong> ax + by + cz = d</p>
                        </div>
                        
                        <h3>Angle Between Lines/Planes</h3>
                        <p>Use dot product of direction vectors/normal vectors</p>
                    `
                },
                {
                    title: "Chapter 12: Linear Programming",
                    content: `
                        <h2>Linear Programming</h2>
                        
                        <h3>Components</h3>
                        <ul>
                            <li><strong>Objective Function:</strong> Function to maximize/minimize</li>
                            <li><strong>Constraints:</strong> Linear inequalities</li>
                            <li><strong>Feasible Region:</strong> Region satisfying all constraints</li>
                            <li><strong>Optimal Solution:</strong> Best value of objective function</li>
                        </ul>
                        
                        <h3>Graphical Method</h3>
                        <ol>
                            <li>Plot all constraints</li>
                            <li>Find feasible region</li>
                            <li>Find corner points</li>
                            <li>Evaluate objective function at corner points</li>
                            <li>Select optimal value</li>
                        </ol>
                        
                        <h3>Types of Solutions</h3>
                        <ul>
                            <li><strong>Unique Solution:</strong> One optimal point</li>
                            <li><strong>Multiple Solutions:</strong> Objective function parallel to constraint</li>
                            <li><strong>Unbounded Solution:</strong> Feasible region unbounded</li>
                            <li><strong>No Solution:</strong> Infeasible problem</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 13: Probability",
                    content: `
                        <h2>Probability</h2>
                        
                        <h3>Conditional Probability</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>P(A|B) = P(A ∩ B) / P(B)</strong></p>
                        </div>
                        
                        <h3>Multiplication Theorem</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>P(A ∩ B) = P(A) × P(B|A)</strong></p>
                        </div>
                        
                        <h3>Independent Events</h3>
                        <p>Events A and B are independent if:</p>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>P(A ∩ B) = P(A) × P(B)</strong></p>
                        </div>
                        
                        <h3>Bayes' Theorem</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>P(E₁|A) = [P(E₁) × P(A|E₁)] / [Σ P(Eᵢ) × P(A|Eᵢ)]</strong></p>
                        </div>
                        
                        <h3>Random Variables</h3>
                        <p><strong>Probability Distribution:</strong> Function giving probability for each value</p>
                        <p><strong>Mean (μ):</strong> E(X) = Σ xᵢ P(xᵢ)</p>
                        <p><strong>Variance (σ²):</strong> E(X²) - [E(X)]²</p>
                        
                        <h3>Binomial Distribution</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>P(X = r) = ⁿCᵣ pʳ qⁿ⁻ʳ</strong></p>
                            <p>where n = trials, p = probability of success, q = 1-p</p>
                        </div>
                    `
                }
            ]
        },
        
        "Physics": {
            title: "Class 12 Physics",
            description: "Physics for Class 12 - Electromagnetism, Modern Physics",
            topics: [
                {
                    title: "Chapter 1: Electric Charges and Fields",
                    content: `
                        <h2>Electric Charges and Fields</h2>
                        
                        <h3>Properties of Charge</h3>
                        <ul>
                            <li>Additive in nature</li>
                            <li>Conserved</li>
                            <li>Quantized (q = ne)</li>
                        </ul>
                        
                        <h3>Coulomb's Law</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>F = k q₁q₂/r²</strong></p>
                            <p>where k = 9 × 10⁹ Nm²/C²</p>
                        </div>
                        
                        <h3>Electric Field</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>E = F/q = kQ/r²</strong></p>
                        </div>
                        
                        <h3>Gauss's Law</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>Φ = q/ε₀</strong></p>
                            <p>where Φ = electric flux, ε₀ = permittivity of free space</p>
                        </div>
                    `
                },
                {
                    title: "Chapter 2: Electrostatic Potential and Capacitance",
                    content: `
                        <h2>Electrostatic Potential and Capacitance</h2>
                        
                        <h3>Electric Potential</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>V = W/q = kQ/r</strong></p>
                        </div>
                        
                        <h3>Potential Difference</h3>
                        <p>V = -∫E·dr</p>
                        
                        <h3>Capacitance</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>C = Q/V</strong></p>
                            <p><strong>Parallel Plate:</strong> C = ε₀A/d</p>
                        </div>
                        
                        <h3>Energy Stored</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>U = ½CV² = ½QV = Q²/2C</strong></p>
                        </div>
                        
                        <h3>Capacitors in Series and Parallel</h3>
                        <ul>
                            <li><strong>Series:</strong> 1/C = 1/C₁ + 1/C₂</li>
                            <li><strong>Parallel:</strong> C = C₁ + C₂</li>
                        </ul>
                    `
                }
            ]
        },
        
        "Chemistry": {
            title: "Class 12 Chemistry",
            description: "Chemistry for Class 12 - Organic, Inorganic, Physical",
            topics: [
                {
                    title: "Chapter 1: The Solid State",
                    content: `
                        <h2>The Solid State</h2>
                        
                        <h3>Types of Solids</h3>
                        <ul>
                            <li><strong>Crystalline:</strong> Regular arrangement (NaCl, diamond)</li>
                            <li><strong>Amorphous:</strong> Irregular arrangement (glass, rubber)</li>
                        </ul>
                        
                        <h3>Crystal Lattice</h3>
                        <p>Regular 3D arrangement of points in space</p>
                        
                        <h3>Unit Cell</h3>
                        <p>Smallest repeating unit of crystal lattice</p>
                        
                        <h3>Types of Unit Cells</h3>
                        <ul>
                            <li><strong>Simple Cubic:</strong> Z = 1</li>
                            <li><strong>Body-Centered Cubic (BCC):</strong> Z = 2</li>
                            <li><strong>Face-Centered Cubic (FCC):</strong> Z = 4</li>
                        </ul>
                        
                        <h3>Packing Efficiency</h3>
                        <ul>
                            <li><strong>Simple Cubic:</strong> 52.4%</li>
                            <li><strong>BCC:</strong> 68%</li>
                            <li><strong>FCC/HCP:</strong> 74%</li>
                        </ul>
                    `
                },
                {
                    title: "Chapter 2: Solutions",
                    content: `
                        <h2>Solutions</h2>
                        
                        <h3>Concentration Terms</h3>
                        <ul>
                            <li><strong>Molarity (M):</strong> Moles of solute / Liters of solution</li>
                            <li><strong>Molality (m):</strong> Moles of solute / kg of solvent</li>
                            <li><strong>Mole Fraction (X):</strong> Moles of component / Total moles</li>
                            <li><strong>Mass Percentage:</strong> (Mass of solute / Mass of solution) × 100</li>
                        </ul>
                        
                        <h3>Raoult's Law</h3>
                        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><strong>P = P₀ × X</strong></p>
                            <p>where P = vapor pressure, P₀ = vapor pressure of pure solvent, X = mole fraction</p>
                        </div>
                        
                        <h3>Colligative Properties</h3>
                        <ul>
                            <li><strong>Relative Lowering of Vapor Pressure</strong></li>
                            <li><strong>Elevation in Boiling Point:</strong> ΔTb = Kb × m</li>
                            <li><strong>Depression in Freezing Point:</strong> ΔTf = Kf × m</li>
                            <li><strong>Osmotic Pressure:</strong> π = CRT</li>
                        </ul>
                    `
                }
            ]
        },
        
        "Biology": {
            title: "Class 12 Biology",
            description: "Biology for Class 12 - Reproduction, Genetics, Evolution",
            topics: [
                {
                    title: "Chapter 1: Reproduction in Organisms",
                    content: `
                        <h2>Reproduction in Organisms</h2>
                        
                        <h3>Types of Reproduction</h3>
                        <ul>
                            <li><strong>Asexual:</strong> Single parent, no gametes</li>
                            <li><strong>Sexual:</strong> Two parents, gamete fusion</li>
                        </ul>
                        
                        <h3>Asexual Reproduction Methods</h3>
                        <ul>
                            <li><strong>Binary Fission:</strong> Amoeba, bacteria</li>
                            <li><strong>Budding:</strong> Yeast, Hydra</li>
                            <li><strong>Fragmentation:</strong> Spirogyra</li>
                            <li><strong>Regeneration:</strong> Planaria</li>
                            <li><strong>Vegetative Propagation:</strong> Plants</li>
                        </ul>
                        
                        <h3>Sexual Reproduction</h3>
                        <p><strong>Phases:</strong></p>
                        <ol>
                            <li>Pre-fertilization (Gametogenesis)</li>
                            <li>Fertilization</li>
                            <li>Post-fertilization (Development)</li>
                        </ol>
                    `
                },
                {
                    title: "Chapter 2: Sexual Reproduction in Flowering Plants",
                    content: `
                        <h2>Sexual Reproduction in Flowering Plants</h2>
                        
                        <h3>Flower Structure</h3>
                        <ul>
                            <li><strong>Stamen:</strong> Male reproductive part (anther + filament)</li>
                            <li><strong>Carpel:</strong> Female reproductive part (stigma + style + ovary)</li>
                        </ul>
                        
                        <h3>Pollination</h3>
                        <p>Transfer of pollen from anther to stigma</p>
                        <ul>
                            <li><strong>Self-pollination:</strong> Same flower</li>
                            <li><strong>Cross-pollination:</strong> Different flowers</li>
                        </ul>
                        
                        <h3>Double Fertilization</h3>
                        <p>Unique to angiosperms</p>
                        <ul>
                            <li>One male gamete fuses with egg (syngamy) → Zygote (2n)</li>
                            <li>Other male gamete fuses with polar nuclei → Endosperm (3n)</li>
                        </ul>
                        
                        <h3>Seed and Fruit Formation</h3>
                        <ul>
                            <li><strong>Seed:</strong> Develops from ovule</li>
                            <li><strong>Fruit:</strong> Develops from ovary</li>
                        </ul>
                    `
                }
            ]
        }
    },
    
    // ==================== CTEVT PROGRAMS ====================

"HA Year 1": {
    "Physics": {
        title: "Physics - HA Year 1",
        description: "Fundamental physics for health sciences",
        topics: [
            {
                title: "Chapter 1: Introduction to Physics",
                content: `
                    <h2>Introduction to Physics</h2>
                    
                    <h3>Basic Concepts</h3>
                    <p>Physics is the study of matter, energy, and their interactions.</p>
                    
                    <h3>Physical Quantities</h3>
                    <ul>
                        <li><strong>Fundamental Quantities:</strong> Length, Mass, Time, Temperature</li>
                        <li><strong>Derived Quantities:</strong> Velocity, Acceleration, Force, Energy</li>
                    </ul>
                    
                    <h3>Units and Measurements</h3>
                    <p>SI Units are the standard units used in physics.</p>
                `
            }
        ]
    },
    "Chemistry": {
        title: "Chemistry - HA Year 1",
        description: "Basic chemistry for health assistant students",
        topics: [
            {
                title: "Chapter 1: Introduction to Chemistry",
                content: `
                    <h2>Introduction to Chemistry</h2>
                    
                    <h3>What is Chemistry?</h3>
                    <p>Chemistry is the science that deals with the composition, structure, and properties of matter.</p>
                    
                    <h3>Branches of Chemistry</h3>
                    <ul>
                        <li><strong>Organic Chemistry:</strong> Study of carbon compounds</li>
                        <li><strong>Inorganic Chemistry:</strong> Study of non-carbon compounds</li>
                        <li><strong>Physical Chemistry:</strong> Study of physical properties</li>
                        <li><strong>Biochemistry:</strong> Chemistry of living organisms</li>
                    </ul>
                `
            }
        ]
    },
    "Zoology": {
        title: "Zoology - HA Year 1",
        description: "Study of animal life and biology",
        topics: [
            {
                title: "Chapter 1: Introduction to Zoology",
                content: `
                    <h2>Introduction to Zoology</h2>
                    
                    <h3>What is Zoology?</h3>
                    <p>Zoology is the scientific study of animals, including their structure, function, behavior, and evolution.</p>
                    
                    <h3>Classification of Animals</h3>
                    <ul>
                        <li><strong>Invertebrates:</strong> Animals without backbone</li>
                        <li><strong>Vertebrates:</strong> Animals with backbone</li>
                    </ul>
                `
            }
        ]
    },
    "Botany": {
        title: "Botany - HA Year 1",
        description: "Study of plant life and biology",
        topics: [
            {
                title: "Chapter 1: Introduction to Botany",
                content: `
                    <h2>Introduction to Botany</h2>
                    
                    <h3>What is Botany?</h3>
                    <p>Botany is the scientific study of plants, including their structure, growth, reproduction, and classification.</p>
                    
                    <h3>Plant Classification</h3>
                    <ul>
                        <li><strong>Algae:</strong> Simple aquatic plants</li>
                        <li><strong>Bryophytes:</strong> Mosses and liverworts</li>
                        <li><strong>Pteridophytes:</strong> Ferns</li>
                        <li><strong>Gymnosperms:</strong> Cone-bearing plants</li>
                        <li><strong>Angiosperms:</strong> Flowering plants</li>
                    </ul>
                `
            }
        ]
    },
    "Anatomy": {
        title: "Anatomy - HA Year 1",
        description: "Human body structure and organization",
        topics: [
            {
                title: "Chapter 1: Introduction to Human Anatomy",
                content: `
                    <h2>Introduction to Human Anatomy</h2>
                    
                    <h3>What is Anatomy?</h3>
                    <p>Anatomy is the science that studies the structure of the body and the relationships between body parts.</p>
                    
                    <h3>Anatomical Position</h3>
                    <p>Standard reference position for describing body parts and locations.</p>
                    
                    <h3>Body Systems</h3>
                    <ul>
                        <li>Skeletal System</li>
                        <li>Muscular System</li>
                        <li>Cardiovascular System</li>
                        <li>Respiratory System</li>
                        <li>Digestive System</li>
                        <li>Nervous System</li>
                        <li>Endocrine System</li>
                        <li>Urinary System</li>
                        <li>Reproductive System</li>
                    </ul>
                `
            }
        ]
    },
    "Mathematics": {
        title: "Mathematics - HA Year 1",
        description: "Mathematical concepts for health sciences",
        topics: [
            {
                title: "Chapter 1: Basic Mathematics",
                content: `
                    <h2>Basic Mathematics</h2>
                    
                    <h3>Number Systems</h3>
                    <ul>
                        <li>Natural Numbers</li>
                        <li>Whole Numbers</li>
                        <li>Integers</li>
                        <li>Rational Numbers</li>
                        <li>Real Numbers</li>
                    </ul>
                    
                    <h3>Medical Mathematics</h3>
                    <ul>
                        <li>Drug dosage calculations</li>
                        <li>Percentage calculations</li>
                        <li>Ratio and proportion</li>
                        <li>Statistical analysis</li>
                    </ul>
                `
            }
        ]
    }
},

"HA Year 2": {
    "Medicine I": {
        title: "Medicine I - HA Year 2",
        description: "Introduction to medical sciences and patient care",
        topics: [
            {
                title: "Chapter 1: Introduction to Medicine",
                content: `
                    <h2>Introduction to Medicine</h2>
                    
                    <h3>Basic Medical Concepts</h3>
                    <p>Understanding disease, diagnosis, and treatment principles.</p>
                    
                    <h3>Common Medical Conditions</h3>
                    <ul>
                        <li>Infectious diseases</li>
                        <li>Cardiovascular diseases</li>
                        <li>Respiratory diseases</li>
                        <li>Gastrointestinal disorders</li>
                    </ul>
                `
            }
        ]
    },
    "Surgery I": {
        title: "Surgery I - HA Year 2",
        description: "Basic surgical principles and procedures",
        topics: [
            {
                title: "Chapter 1: Introduction to Surgery",
                content: `
                    <h2>Introduction to Surgery</h2>
                    
                    <h3>Surgical Principles</h3>
                    <p>Basic concepts of surgical care and aseptic techniques.</p>
                    
                    <h3>Pre-operative Care</h3>
                    <ul>
                        <li>Patient preparation</li>
                        <li>Consent procedures</li>
                        <li>Pre-operative assessment</li>
                    </ul>
                `
            }
        ]
    },
    "Chemical Pathology": {
        title: "Chemical Pathology - HA Year 2",
        description: "Biochemical analysis in disease diagnosis",
        topics: [
            {
                title: "Chapter 1: Introduction to Chemical Pathology",
                content: `
                    <h2>Introduction to Chemical Pathology</h2>
                    
                    <h3>Clinical Biochemistry</h3>
                    <p>Study of chemical aspects of human disease.</p>
                    
                    <h3>Laboratory Tests</h3>
                    <ul>
                        <li>Blood glucose testing</li>
                        <li>Liver function tests</li>
                        <li>Kidney function tests</li>
                        <li>Lipid profile</li>
                    </ul>
                `
            }
        ]
    },
    "Obstetrics and Gynecology": {
        title: "Obstetrics and Gynecology - HA Year 2",
        description: "Women's health and reproductive care",
        topics: [
            {
                title: "Chapter 1: Introduction to Obstetrics and Gynecology",
                content: `
                    <h2>Introduction to Obstetrics and Gynecology</h2>
                    
                    <h3>Obstetrics</h3>
                    <p>Care of pregnant women, childbirth, and postpartum period.</p>
                    
                    <h3>Gynecology</h3>
                    <p>Health of female reproductive system.</p>
                    
                    <h3>Key Topics</h3>
                    <ul>
                        <li>Antenatal care</li>
                        <li>Normal delivery</li>
                        <li>Postnatal care</li>
                        <li>Family planning</li>
                    </ul>
                `
            }
        ]
    },
    "Basic Medical Procedures and First Aid": {
        title: "Basic Medical Procedures and First Aid - HA Year 2",
        description: "Essential medical procedures and emergency care",
        topics: [
            {
                title: "Chapter 1: First Aid Principles",
                content: `
                    <h2>First Aid Principles</h2>
                    
                    <h3>What is First Aid?</h3>
                    <p>Immediate care given to injured or ill person before professional medical help arrives.</p>
                    
                    <h3>Basic Life Support</h3>
                    <ul>
                        <li>CPR (Cardiopulmonary Resuscitation)</li>
                        <li>Airway management</li>
                        <li>Bleeding control</li>
                        <li>Shock management</li>
                    </ul>
                    
                    <h3>Common Medical Procedures</h3>
                    <ul>
                        <li>Vital signs measurement</li>
                        <li>Injection techniques</li>
                        <li>Wound dressing</li>
                        <li>Catheterization</li>
                    </ul>
                `
            }
        ]
    },
    "Pharmacology and Pharmacy": {
        title: "Pharmacology and Pharmacy - HA Year 2",
        description: "Study of drugs and their effects",
        topics: [
            {
                title: "Chapter 1: Introduction to Pharmacology",
                content: `
                    <h2>Introduction to Pharmacology</h2>
                    
                    <h3>What is Pharmacology?</h3>
                    <p>Science of drugs and their effects on living systems.</p>
                    
                    <h3>Drug Classification</h3>
                    <ul>
                        <li>Antibiotics</li>
                        <li>Analgesics</li>
                        <li>Antihypertensives</li>
                        <li>Antidiabetics</li>
                    </ul>
                    
                    <h3>Pharmacy Practice</h3>
                    <ul>
                        <li>Drug dispensing</li>
                        <li>Drug storage</li>
                        <li>Patient counseling</li>
                    </ul>
                `
            }
        ]
    },
    "Environmental Health": {
        title: "Environmental Health - HA Year 2",
        description: "Health aspects of environment and sanitation",
        topics: [
            {
                title: "Chapter 1: Introduction to Environmental Health",
                content: `
                    <h2>Introduction to Environmental Health</h2>
                    
                    <h3>Environmental Factors</h3>
                    <ul>
                        <li>Water quality and sanitation</li>
                        <li>Air pollution</li>
                        <li>Waste management</li>
                        <li>Food safety</li>
                    </ul>
                `
            }
        ]
    },
    "Health Education": {
        title: "Health Education - HA Year 2",
        description: "Promoting health awareness and education",
        topics: [
            {
                title: "Chapter 1: Principles of Health Education",
                content: `
                    <h2>Principles of Health Education</h2>
                    
                    <h3>Health Promotion</h3>
                    <p>Enabling people to increase control over their health.</p>
                    
                    <h3>Health Education Methods</h3>
                    <ul>
                        <li>Individual counseling</li>
                        <li>Group education</li>
                        <li>Community campaigns</li>
                        <li>Mass media</li>
                    </ul>
                `
            }
        ]
    },
    "Primary Health Care / Family Health": {
        title: "Primary Health Care / Family Health - HA Year 2",
        description: "Community-based healthcare and family wellness",
        topics: [
            {
                title: "Chapter 1: Primary Health Care",
                content: `
                    <h2>Primary Health Care</h2>
                    
                    <h3>PHC Principles</h3>
                    <ul>
                        <li>Accessibility</li>
                        <li>Community participation</li>
                        <li>Preventive care</li>
                        <li>Appropriate technology</li>
                    </ul>
                    
                    <h3>Family Health</h3>
                    <ul>
                        <li>Maternal health</li>
                        <li>Child health</li>
                        <li>Family planning</li>
                        <li>Nutrition</li>
                    </ul>
                `
            }
        ]
    }
},

"HA Year 3": {
    "Medicine II": {
        title: "Medicine II - HA Year 3",
        description: "Advanced medical sciences and clinical practice",
        topics: [
            {
                title: "Chapter 1: Advanced Medicine",
                content: `
                    <h2>Advanced Medicine</h2>
                    
                    <h3>Complex Medical Conditions</h3>
                    <p>Advanced study of disease management and treatment.</p>
                    
                    <h3>Clinical Skills</h3>
                    <ul>
                        <li>Patient assessment</li>
                        <li>Diagnosis procedures</li>
                        <li>Treatment planning</li>
                        <li>Follow-up care</li>
                    </ul>
                `
            }
        ]
    },
    "Surgery II": {
        title: "Surgery II - HA Year 3",
        description: "Advanced surgical procedures and care",
        topics: [
            {
                title: "Chapter 1: Advanced Surgery",
                content: `
                    <h2>Advanced Surgery</h2>
                    
                    <h3>Surgical Procedures</h3>
                    <p>Advanced surgical techniques and post-operative care.</p>
                    
                    <h3>Surgical Specialties</h3>
                    <ul>
                        <li>General surgery</li>
                        <li>Orthopedic surgery</li>
                        <li>Emergency surgery</li>
                    </ul>
                `
            }
        ]
    },
    "Health Management": {
        title: "Health Management - HA Year 3",
        description: "Healthcare administration and management",
        topics: [
            {
                title: "Chapter 1: Introduction to Health Management",
                content: `
                    <h2>Introduction to Health Management</h2>
                    
                    <h3>Healthcare Management</h3>
                    <p>Planning, organizing, and managing healthcare services.</p>
                    
                    <h3>Key Areas</h3>
                    <ul>
                        <li>Health facility management</li>
                        <li>Human resource management</li>
                        <li>Financial management</li>
                        <li>Quality assurance</li>
                    </ul>
                `
            }
        ]
    },
    "Epidemiology and Community Diagnosis": {
        title: "Epidemiology and Community Diagnosis - HA Year 3",
        description: "Disease patterns and community health assessment",
        topics: [
            {
                title: "Chapter 1: Introduction to Epidemiology",
                content: `
                    <h2>Introduction to Epidemiology</h2>
                    
                    <h3>What is Epidemiology?</h3>
                    <p>Study of distribution and determinants of health conditions in populations.</p>
                    
                    <h3>Epidemiological Methods</h3>
                    <ul>
                        <li>Disease surveillance</li>
                        <li>Outbreak investigation</li>
                        <li>Data analysis</li>
                        <li>Community diagnosis</li>
                    </ul>
                `
            }
        ]
    },
    "Comprehensive Clinical Practicum": {
        title: "Comprehensive Clinical Practicum - HA Year 3",
        description: "Hands-on clinical training and practice",
        topics: [
            {
                title: "Chapter 1: Clinical Practice",
                content: `
                    <h2>Clinical Practice</h2>
                    
                    <h3>Clinical Training</h3>
                    <p>Practical application of medical knowledge in clinical settings.</p>
                    
                    <h3>Practice Areas</h3>
                    <ul>
                        <li>Outpatient department</li>
                        <li>Inpatient care</li>
                        <li>Emergency services</li>
                        <li>Specialized clinics</li>
                    </ul>
                `
            }
        ]
    },
    "Comprehensive Community Field Practicum": {
        title: "Comprehensive Community Field Practicum - HA Year 3",
        description: "Community-based health practice and fieldwork",
        topics: [
            {
                title: "Chapter 1: Community Field Practice",
                content: `
                    <h2>Community Field Practice</h2>
                    
                    <h3>Community Health Work</h3>
                    <p>Practical experience in community health settings.</p>
                    
                    <h3>Field Activities</h3>
                    <ul>
                        <li>Community health assessment</li>
                        <li>Health education campaigns</li>
                        <li>Disease prevention programs</li>
                        <li>Community mobilization</li>
                    </ul>
                `
            }
        ]
    }
},

// ==================== PHARMACY PROGRAM ====================

"Pharmacy Year 1": {
    "Physics": {
        title: "Physics - Pharmacy Year 1",
        description: "Fundamental physics for pharmaceutical sciences",
        topics: [
            {
                title: "Chapter 1: Introduction to Physics",
                content: `
                    <h2>Introduction to Physics</h2>
                    
                    <h3>Physical Principles in Pharmacy</h3>
                    <p>Application of physics in pharmaceutical sciences.</p>
                    
                    <h3>Key Topics</h3>
                    <ul>
                        <li>Mechanics</li>
                        <li>Thermodynamics</li>
                        <li>Optics</li>
                        <li>Electricity</li>
                    </ul>
                `
            }
        ]
    },
    "Chemistry": {
        title: "Chemistry - Pharmacy Year 1",
        description: "Chemical principles for pharmacy students",
        topics: [
            {
                title: "Chapter 1: Pharmaceutical Chemistry",
                content: `
                    <h2>Pharmaceutical Chemistry</h2>
                    
                    <h3>Chemical Concepts</h3>
                    <p>Chemistry fundamentals for drug development and analysis.</p>
                    
                    <h3>Topics</h3>
                    <ul>
                        <li>Organic chemistry</li>
                        <li>Inorganic chemistry</li>
                        <li>Analytical chemistry</li>
                    </ul>
                `
            }
        ]
    },
    "Zoology": {
        title: "Zoology - Pharmacy Year 1",
        description: "Animal biology for pharmaceutical sciences",
        topics: [
            {
                title: "Chapter 1: Zoology in Pharmacy",
                content: `
                    <h2>Zoology in Pharmacy</h2>
                    
                    <h3>Animal Biology</h3>
                    <p>Understanding animal systems relevant to drug development.</p>
                `
            }
        ]
    },
    "Botany": {
        title: "Botany - Pharmacy Year 1",
        description: "Plant biology and medicinal plants",
        topics: [
            {
                title: "Chapter 1: Pharmaceutical Botany",
                content: `
                    <h2>Pharmaceutical Botany</h2>
                    
                    <h3>Medicinal Plants</h3>
                    <p>Study of plants used in medicine and drug preparation.</p>
                    
                    <h3>Important Medicinal Plants</h3>
                    <ul>
                        <li>Tulsi (Holy Basil)</li>
                        <li>Neem</li>
                        <li>Aloe Vera</li>
                        <li>Ginger</li>
                    </ul>
                `
            }
        ]
    },
    "Anatomy": {
        title: "Anatomy - Pharmacy Year 1",
        description: "Human anatomy for pharmacy students",
        topics: [
            {
                title: "Chapter 1: Human Anatomy",
                content: `
                    <h2>Human Anatomy</h2>
                    
                    <h3>Body Systems</h3>
                    <p>Understanding human body structure for pharmaceutical applications.</p>
                `
            }
        ]
    },
    "Mathematics": {
        title: "Mathematics - Pharmacy Year 1",
        description: "Mathematical concepts for pharmaceutical calculations",
        topics: [
            {
                title: "Chapter 1: Pharmaceutical Mathematics",
                content: `
                    <h2>Pharmaceutical Mathematics</h2>
                    
                    <h3>Calculations</h3>
                    <ul>
                        <li>Dosage calculations</li>
                        <li>Dilution and concentration</li>
                        <li>Percentage calculations</li>
                        <li>Statistical analysis</li>
                    </ul>
                `
            }
        ]
    }
},

"Pharmacy Year 2": {
    "Pharmacognosy": {
        title: "Pharmacognosy - Pharmacy Year 2",
        description: "Study of medicinal drugs from natural sources",
        topics: [
            {
                title: "Chapter 1: Introduction to Pharmacognosy",
                content: `
                    <h2>Introduction to Pharmacognosy</h2>
                    
                    <h3>Natural Drug Sources</h3>
                    <p>Study of medicines derived from plants, animals, and minerals.</p>
                    
                    <h3>Important Topics</h3>
                    <ul>
                        <li>Crude drugs</li>
                        <li>Phytochemistry</li>
                        <li>Quality control</li>
                        <li>Herbal medicines</li>
                    </ul>
                `
            }
        ]
    },
    "Biochemistry and Microbiology": {
        title: "Biochemistry and Microbiology - Pharmacy Year 2",
        description: "Chemical processes and microorganisms in pharmacy",
        topics: [
            {
                title: "Chapter 1: Biochemistry",
                content: `
                    <h2>Biochemistry</h2>
                    
                    <h3>Biomolecules</h3>
                    <ul>
                        <li>Carbohydrates</li>
                        <li>Proteins</li>
                        <li>Lipids</li>
                        <li>Nucleic acids</li>
                    </ul>
                    
                    <h3>Microbiology</h3>
                    <ul>
                        <li>Bacteria</li>
                        <li>Viruses</li>
                        <li>Fungi</li>
                        <li>Sterilization methods</li>
                    </ul>
                `
            }
        ]
    },
    "Pathology": {
        title: "Pathology - Pharmacy Year 2",
        description: "Study of disease processes",
        topics: [
            {
                title: "Chapter 1: Introduction to Pathology",
                content: `
                    <h2>Introduction to Pathology</h2>
                    
                    <h3>Disease Mechanisms</h3>
                    <p>Understanding how diseases develop and progress.</p>
                    
                    <h3>Types of Pathology</h3>
                    <ul>
                        <li>General pathology</li>
                        <li>Systemic pathology</li>
                        <li>Clinical pathology</li>
                    </ul>
                `
            }
        ]
    },
    "Pharmacology": {
        title: "Pharmacology - Pharmacy Year 2",
        description: "Study of drug actions and effects",
        topics: [
            {
                title: "Chapter 1: General Pharmacology",
                content: `
                    <h2>General Pharmacology</h2>
                    
                    <h3>Drug Actions</h3>
                    <p>How drugs work in the body.</p>
                    
                    <h3>Key Concepts</h3>
                    <ul>
                        <li>Pharmacokinetics (ADME)</li>
                        <li>Pharmacodynamics</li>
                        <li>Drug interactions</li>
                        <li>Adverse effects</li>
                    </ul>
                `
            }
        ]
    },
    "Pharmaceutical Management": {
        title: "Pharmaceutical Management - Pharmacy Year 2",
        description: "Pharmacy business and management",
        topics: [
            {
                title: "Chapter 1: Pharmacy Management",
                content: `
                    <h2>Pharmacy Management</h2>
                    
                    <h3>Management Principles</h3>
                    <ul>
                        <li>Inventory management</li>
                        <li>Financial management</li>
                        <li>Human resource management</li>
                        <li>Quality assurance</li>
                    </ul>
                `
            }
        ]
    },
    "Health Education, Health Care System, and First Aid": {
        title: "Health Education, Health Care System, and First Aid - Pharmacy Year 2",
        description: "Health promotion and emergency care",
        topics: [
            {
                title: "Chapter 1: Health Education",
                content: `
                    <h2>Health Education</h2>
                    
                    <h3>Health Promotion</h3>
                    <p>Educating communities about health and wellness.</p>
                    
                    <h3>Healthcare System</h3>
                    <p>Understanding healthcare delivery in Nepal.</p>
                    
                    <h3>First Aid</h3>
                    <ul>
                        <li>Basic life support</li>
                        <li>Emergency care</li>
                        <li>Wound management</li>
                    </ul>
                `
            }
        ]
    }
},

"Pharmacy Year 3": {
    "Pharmacology and Therapeutics": {
        title: "Pharmacology and Therapeutics - Pharmacy Year 3",
        description: "Advanced drug therapy and treatment",
        topics: [
            {
                title: "Chapter 1: Clinical Pharmacology",
                content: `
                    <h2>Clinical Pharmacology</h2>
                    
                    <h3>Therapeutic Applications</h3>
                    <p>Using drugs to treat diseases effectively.</p>
                    
                    <h3>Drug Therapy</h3>
                    <ul>
                        <li>Cardiovascular drugs</li>
                        <li>Antimicrobial agents</li>
                        <li>Endocrine drugs</li>
                        <li>CNS drugs</li>
                    </ul>
                `
            }
        ]
    },
    "Pharmaceutics": {
        title: "Pharmaceutics - Pharmacy Year 3",
        description: "Drug formulation and delivery systems",
        topics: [
            {
                title: "Chapter 1: Dosage Forms",
                content: `
                    <h2>Dosage Forms</h2>
                    
                    <h3>Formulation Science</h3>
                    <p>Design and development of drug delivery systems.</p>
                    
                    <h3>Types of Dosage Forms</h3>
                    <ul>
                        <li>Tablets</li>
                        <li>Capsules</li>
                        <li>Injections</li>
                        <li>Suspensions</li>
                        <li>Ointments</li>
                    </ul>
                `
            }
        ]
    },
    "Pharmaceutical Chemistry": {
        title: "Pharmaceutical Chemistry - Pharmacy Year 3",
        description: "Chemical analysis and drug synthesis",
        topics: [
            {
                title: "Chapter 1: Drug Chemistry",
                content: `
                    <h2>Drug Chemistry</h2>
                    
                    <h3>Chemical Analysis</h3>
                    <p>Analyzing drug composition and purity.</p>
                    
                    <h3>Drug Synthesis</h3>
                    <p>Chemical methods for drug preparation.</p>
                `
            }
        ]
    },
    "Hospital and Clinical Pharmacy": {
        title: "Hospital and Clinical Pharmacy - Pharmacy Year 3",
        description: "Pharmacy practice in hospital settings",
        topics: [
            {
                title: "Chapter 1: Hospital Pharmacy Practice",
                content: `
                    <h2>Hospital Pharmacy Practice</h2>
                    
                    <h3>Clinical Pharmacy Services</h3>
                    <ul>
                        <li>Drug dispensing</li>
                        <li>Patient counseling</li>
                        <li>Drug information services</li>
                        <li>Therapeutic drug monitoring</li>
                    </ul>
                `
            }
        ]
    },
    "Forensic and Community Pharmacy": {
        title: "Forensic and Community Pharmacy - Pharmacy Year 3",
        description: "Legal aspects and community pharmacy practice",
        topics: [
            {
                title: "Chapter 1: Forensic Pharmacy",
                content: `
                    <h2>Forensic Pharmacy</h2>
                    
                    <h3>Legal Aspects</h3>
                    <ul>
                        <li>Drug laws and regulations</li>
                        <li>Pharmacy ethics</li>
                        <li>Narcotic control</li>
                    </ul>
                    
                    <h3>Community Pharmacy</h3>
                    <ul>
                        <li>Retail pharmacy practice</li>
                        <li>Patient care services</li>
                        <li>Health screening</li>
                    </ul>
                `
            }
        ]
    },
    "Pharmacoepidemiology and Environmental Health": {
        title: "Pharmacoepidemiology and Environmental Health - Pharmacy Year 3",
        description: "Drug use patterns and environmental health",
        topics: [
            {
                title: "Chapter 1: Pharmacoepidemiology",
                content: `
                    <h2>Pharmacoepidemiology</h2>
                    
                    <h3>Drug Use Studies</h3>
                    <p>Studying drug use patterns in populations.</p>
                    
                    <h3>Environmental Health</h3>
                    <ul>
                        <li>Environmental pollution</li>
                        <li>Occupational health</li>
                        <li>Sanitation</li>
                    </ul>
                `
            }
        ]
    },
    "Comprehensive Professional Field Practice": {
        title: "Comprehensive Professional Field Practice - Pharmacy Year 3",
        description: "Practical pharmacy training and fieldwork",
        topics: [
            {
                title: "Chapter 1: Professional Practice",
                content: `
                    <h2>Professional Practice</h2>
                    
                    <h3>Field Training</h3>
                    <p>Hands-on experience in various pharmacy settings.</p>
                    
                    <h3>Practice Areas</h3>
                    <ul>
                        <li>Community pharmacy</li>
                        <li>Hospital pharmacy</li>
                        <li>Industrial pharmacy</li>
                        <li>Regulatory affairs</li>
                    </ul>
                `
            }
        ]
    }
}
}


// Export for use in other files
window.notesContent = notesContent;

console.log('📚 Content database loaded successfully!');
console.log('📊 Total classes:', Object.keys(notesContent).length);
console.log('📝 Available classes:', Object.keys(notesContent).join(', '));