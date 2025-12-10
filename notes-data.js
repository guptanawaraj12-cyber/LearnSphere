// ==================== COMPLETE NOTES DATABASE ====================
// Easy to add more notes - just copy the structure and modify content

const notesDatabase = {
    
    // ==================== PHYSICS NOTES ====================
    physics: [
        {
            id: 1,
            title: "Mechanics - Motion in a Straight Line",
            description: "Complete notes on kinematics, equations of motion, velocity, acceleration and graphs",
            class: "11",
            date: "2024-01-15",
            views: 2450,
            tags: ["mechanics", "motion", "kinematics", "velocity", "acceleration"],
            content: `
                <h2>Introduction to Motion</h2>
                <p>Motion is the change in position of an object with respect to time. In this chapter, we study motion in a straight line, also called one-dimensional motion.</p>
                
                <h3>1. Basic Concepts</h3>
                <h4>Position and Displacement</h4>
                <p><strong>Position:</strong> The location of an object at a particular instant of time.</p>
                <p><strong>Displacement:</strong> The change in position of an object. It is a vector quantity.</p>
                <p>Formula: <code>Δx = x₂ - x₁</code></p>
                
                <h4>Distance vs Displacement</h4>
                <ul>
                    <li><strong>Distance:</strong> Total path length covered (scalar)</li>
                    <li><strong>Displacement:</strong> Shortest distance between initial and final position (vector)</li>
                </ul>
                
                <h3>2. Velocity and Speed</h3>
                <h4>Average Velocity</h4>
                <p>Average velocity is the displacement divided by time interval.</p>
                <p><strong>Formula:</strong> <code>v_avg = Δx / Δt</code></p>
                
                <h4>Instantaneous Velocity</h4>
                <p>Velocity at a particular instant of time.</p>
                <p><strong>Formula:</strong> <code>v = dx/dt</code></p>
                
                <h3>3. Acceleration</h3>
                <p>Acceleration is the rate of change of velocity with respect to time.</p>
                <p><strong>Average Acceleration:</strong> <code>a_avg = Δv / Δt</code></p>
                <p><strong>Instantaneous Acceleration:</strong> <code>a = dv/dt = d²x/dt²</code></p>
                
                <h3>4. Equations of Motion</h3>
                <p>For uniformly accelerated motion, we have three equations:</p>
                
                <h4>First Equation</h4>
                <p><code>v = u + at</code></p>
                <p>Where: v = final velocity, u = initial velocity, a = acceleration, t = time</p>
                
                <h4>Second Equation</h4>
                <p><code>s = ut + ½at²</code></p>
                <p>Where: s = displacement</p>
                
                <h4>Third Equation</h4>
                <p><code>v² = u² + 2as</code></p>
                
                <h3>5. Graphical Representation</h3>
                <h4>Position-Time Graph</h4>
                <ul>
                    <li>Slope gives velocity</li>
                    <li>Straight line → uniform velocity</li>
                    <li>Curved line → non-uniform velocity</li>
                </ul>
                
                <h4>Velocity-Time Graph</h4>
                <ul>
                    <li>Slope gives acceleration</li>
                    <li>Area under curve gives displacement</li>
                    <li>Horizontal line → uniform velocity</li>
                </ul>
                
                <h3>6. Free Fall</h3>
                <p>Motion under gravity alone is called free fall.</p>
                <ul>
                    <li>Acceleration due to gravity: <code>g = 9.8 m/s²</code></li>
                    <li>For upward motion: <code>a = -g</code></li>
                    <li>For downward motion: <code>a = +g</code></li>
                </ul>
                
                <h3>Practice Problems</h3>
                <p><strong>Problem 1:</strong> A car accelerates from rest to 20 m/s in 5 seconds. Find the acceleration.</p>
                <p><strong>Solution:</strong></p>
                <p>Given: u = 0, v = 20 m/s, t = 5 s</p>
                <p>Using v = u + at</p>
                <p>20 = 0 + a(5)</p>
                <p>a = 4 m/s²</p>
                
                <p><strong>Problem 2:</strong> A ball is thrown vertically upward with velocity 30 m/s. Find maximum height reached.</p>
                <p><strong>Solution:</strong></p>
                <p>Given: u = 30 m/s, v = 0 (at max height), a = -9.8 m/s²</p>
                <p>Using v² = u² + 2as</p>
                <p>0 = (30)² + 2(-9.8)s</p>
                <p>s = 900 / 19.6 = 45.9 m</p>
                
                <h3>Important Points to Remember</h3>
                <ul>
                    <li>Displacement can be zero even if distance is not zero</li>
                    <li>Average speed ≥ magnitude of average velocity</li>
                    <li>Acceleration can be negative (retardation/deceleration)</li>
                    <li>At maximum height, velocity = 0 but acceleration = g</li>
                    <li>Time of ascent = Time of descent (for projectile motion)</li>
                </ul>
            `
        },
        {
            id: 2,
            title: "Newton's Laws of Motion",
            description: "Detailed explanation of three laws with examples, applications and problem solving",
            class: "11",
            date: "2024-01-20",
            views: 2100,
            tags: ["newton", "laws", "force", "mechanics"],
            content: `
                <h2>Newton's Laws of Motion</h2>
                <p>Sir Isaac Newton formulated three fundamental laws that describe the relationship between motion and forces.</p>
                
                <h3>1. Newton's First Law (Law of Inertia)</h3>
                <p><strong>Statement:</strong> An object at rest stays at rest and an object in motion stays in motion with the same speed and direction unless acted upon by an external force.</p>
                
                <h4>Inertia</h4>
                <p>Inertia is the tendency of an object to resist changes in its state of motion.</p>
                <ul>
                    <li><strong>Inertia of Rest:</strong> Tendency to remain at rest</li>
                    <li><strong>Inertia of Motion:</strong> Tendency to remain in motion</li>
                    <li><strong>Inertia of Direction:</strong> Tendency to maintain direction</li>
                </ul>
                
                <h4>Examples</h4>
                <ul>
                    <li>Passengers jerk forward when a bus suddenly stops</li>
                    <li>Dust particles fall off when a carpet is beaten</li>
                    <li>Athletes run before taking a long jump</li>
                </ul>
                
                <h3>2. Newton's Second Law (Law of Acceleration)</h3>
                <p><strong>Statement:</strong> The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.</p>
                
                <h4>Mathematical Form</h4>
                <p><code>F = ma</code></p>
                <p>Where: F = Force (Newton), m = mass (kg), a = acceleration (m/s²)</p>
                
                <h4>Unit of Force</h4>
                <p>1 Newton = 1 kg × 1 m/s²</p>
                <p>One newton is the force required to give a mass of 1 kg an acceleration of 1 m/s²</p>
                
                <h3>3. Newton's Third Law (Action-Reaction Law)</h3>
                <p><strong>Statement:</strong> For every action, there is an equal and opposite reaction.</p>
                
                <h4>Examples</h4>
                <ul>
                    <li>Walking: We push ground backward, ground pushes us forward</li>
                    <li>Swimming: We push water backward, water pushes us forward</li>
                    <li>Rocket propulsion: Gases expelled downward, rocket moves upward</li>
                    <li>Recoil of gun: Bullet moves forward, gun moves backward</li>
                </ul>
                
                <h3>Practice Problems</h3>
                <p><strong>Problem 1:</strong> A force of 50 N acts on a mass of 10 kg. Find acceleration.</p>
                <p><strong>Solution:</strong></p>
                <p>F = ma</p>
                <p>50 = 10 × a</p>
                <p>a = 5 m/s²</p>
                
                <p><strong>Problem 2:</strong> A 1000 kg car accelerates from 0 to 20 m/s in 10 seconds. Find the force.</p>
                <p><strong>Solution:</strong></p>
                <p>a = (v - u) / t = (20 - 0) / 10 = 2 m/s²</p>
                <p>F = ma = 1000 × 2 = 2000 N</p>
            `
        },
        {
            id: 3,
            title: "Work, Energy and Power",
            description: "Work done by force, kinetic and potential energy, conservation of energy, power",
            class: "11",
            date: "2024-02-01",
            views: 1890,
            tags: ["work", "energy", "power", "conservation"],
            content: `
                <h2>Work, Energy and Power</h2>
                
                <h3>1. Work</h3>
                <p><strong>Definition:</strong> Work is said to be done when a force acts on an object and the object moves in the direction of force.</p>
                
                <h4>Formula</h4>
                <p><code>W = F × s × cos θ</code></p>
                <p>Where: W = Work, F = Force, s = displacement, θ = angle between F and s</p>
                
                <h4>Unit of Work</h4>
                <p>SI Unit: Joule (J)</p>
                <p>1 Joule = 1 Newton × 1 meter</p>
                
                <h3>2. Energy</h3>
                <p><strong>Definition:</strong> Energy is the capacity to do work.</p>
                
                <h4>Kinetic Energy (KE)</h4>
                <p>Energy possessed by a body due to its motion.</p>
                <p><strong>Formula:</strong> <code>KE = ½mv²</code></p>
                
                <h4>Potential Energy (PE)</h4>
                <p>Energy possessed by a body due to its position.</p>
                <p><strong>Formula:</strong> <code>PE = mgh</code></p>
                
                <h3>3. Conservation of Energy</h3>
                <p><strong>Law:</strong> Energy can neither be created nor destroyed; it can only be transformed from one form to another.</p>
                
                <h3>4. Power</h3>
                <p><strong>Definition:</strong> Power is the rate of doing work.</p>
                <p><strong>Formula:</strong> <code>P = W / t</code></p>
                <p>Unit: Watt (W)</p>
                
                <h3>Practice Problems</h3>
                <p><strong>Problem 1:</strong> A 2 kg object moves with velocity 10 m/s. Find its kinetic energy.</p>
                <p><strong>Solution:</strong></p>
                <p>KE = ½mv² = ½ × 2 × (10)² = 100 J</p>
            `
        },
        {
            id: 4,
            title: "Electricity and Magnetism",
            description: "Electric field, magnetic field, electromagnetic induction, and applications",
            class: "12",
            date: "2024-02-05",
            views: 1650,
            tags: ["electricity", "magnetism", "induction", "field"],
            content: `
                <h2>Electricity and Magnetism</h2>
                
                <h3>1. Electric Charge</h3>
                <p>Electric charge is a fundamental property of matter that causes it to experience a force in an electromagnetic field.</p>
                
                <h4>Properties of Charge</h4>
                <ul>
                    <li>Like charges repel, unlike charges attract</li>
                    <li>Charge is quantized: q = ne</li>
                    <li>Charge is conserved</li>
                </ul>
                
                <h3>2. Coulomb's Law</h3>
                <p><strong>Formula:</strong> <code>F = k(q₁q₂)/r²</code></p>
                <p>Where: k = 9 × 10⁹ Nm²/C²</p>
                
                <h3>3. Electric Field</h3>
                <p><strong>Definition:</strong> Electric field is the region around a charge where another charge experiences a force.</p>
                <p><strong>Formula:</strong> <code>E = F/q = kQ/r²</code></p>
                
                <h3>4. Ohm's Law</h3>
                <p><code>V = IR</code></p>
                <p>Where: V = voltage, I = current, R = resistance</p>
                
                <h3>5. Magnetic Field</h3>
                <p>Region around a magnet where magnetic force is experienced.</p>
                
                <h3>Practice Problems</h3>
                <p><strong>Problem 1:</strong> A conductor has resistance 10 Ω. If 2 A current flows, find voltage.</p>
                <p><strong>Solution:</strong></p>
                <p>V = IR = 2 × 10 = 20 V</p>
            `
        },
        {
            id: 5,
            title: "Thermodynamics - Laws and Applications",
            description: "First, second, and third laws of thermodynamics with applications",
            class: "11",
            date: "2024-02-15",
            views: 1420,
            tags: ["thermodynamics", "heat", "energy", "laws"],
            content: `
                <h2>Thermodynamics</h2>
                
                <h3>1. Introduction</h3>
                <p>Thermodynamics is the study of heat, work, and energy transformations.</p>
                
                <h3>2. First Law of Thermodynamics</h3>
                <p><strong>Statement:</strong> Energy can neither be created nor destroyed, only transformed.</p>
                <p><strong>Formula:</strong> <code>ΔU = Q - W</code></p>
                <p>Where: ΔU = change in internal energy, Q = heat added, W = work done</p>
                
                <h3>3. Second Law of Thermodynamics</h3>
                <p>Heat cannot spontaneously flow from a colder body to a hotter body.</p>
                
                <h3>4. Heat Transfer</h3>
                <ul>
                    <li><strong>Conduction:</strong> Transfer through direct contact</li>
                    <li><strong>Convection:</strong> Transfer through fluid movement</li>
                    <li><strong>Radiation:</strong> Transfer through electromagnetic waves</li>
                </ul>
                
                <h3>Practice Problems</h3>
                <p><strong>Problem 1:</strong> A system absorbs 500 J of heat and does 200 J of work. Find change in internal energy.</p>
                <p><strong>Solution:</strong></p>
                <p>ΔU = Q - W = 500 - 200 = 300 J</p>
            `
        },
        {
    id: 50,
    title: "Waves - Sound and Light",
    description: "Complete guide to wave motion, sound waves, light waves, interference and diffraction",
    class: "11",
    date: "2024-02-10",
    views: 1850,
    tags: ["waves", "sound", "light", "interference", "diffraction"],
    content: `
        <h2>Waves</h2>
        
        <h3>1. Introduction to Waves</h3>
        <p>A wave is a disturbance that transfers energy from one point to another without transferring matter.</p>
        
        <h4>Types of Waves</h4>
        <ul>
            <li><strong>Mechanical Waves:</strong> Require medium (sound, water waves)</li>
            <li><strong>Electromagnetic Waves:</strong> Don't require medium (light, radio waves)</li>
        </ul>
        
        <h4>Based on Particle Motion:</h4>
        <ul>
            <li><strong>Transverse Waves:</strong> Particle motion perpendicular to wave direction</li>
            <li><strong>Longitudinal Waves:</strong> Particle motion parallel to wave direction</li>
        </ul>
        
        <h3>2. Wave Parameters</h3>
        
        <h4>Wavelength (λ)</h4>
        <p>Distance between two consecutive crests or troughs.</p>
        
        <h4>Frequency (f)</h4>
        <p>Number of waves passing a point per second.</p>
        <p>Unit: Hertz (Hz)</p>
        
        <h4>Time Period (T)</h4>
        <p>Time taken for one complete wave to pass a point.</p>
        <p><code>T = 1/f</code></p>
        
        <h4>Wave Speed (v)</h4>
        <p><code>v = fλ</code></p>
        
        <h4>Amplitude (A)</h4>
        <p>Maximum displacement from equilibrium position.</p>
        
        <h3>3. Wave Equation</h3>
        <p>For a wave traveling in positive x-direction:</p>
        <p><code>y = A sin(kx - ωt + φ)</code></p>
        
        <p>Where:</p>
        <ul>
            <li>k = 2π/λ (wave number)</li>
            <li>ω = 2πf (angular frequency)</li>
            <li>φ = phase constant</li>
        </ul>
        
        <h3>4. Sound Waves</h3>
        
        <h4>Nature of Sound</h4>
        <p>Sound is a longitudinal mechanical wave that requires a medium.</p>
        
        <h4>Speed of Sound</h4>
        <p>In air at 0°C: v = 331 m/s</p>
        <p>In air at temperature T: <code>v = 331 + 0.6T</code> m/s</p>
        
        <h4>Speed in Different Media:</h4>
        <table>
            <tr>
                <th>Medium</th>
                <th>Speed (m/s)</th>
            </tr>
            <tr>
                <td>Air (0°C)</td>
                <td>331</td>
            </tr>
            <tr>
                <td>Air (20°C)</td>
                <td>343</td>
            </tr>
            <tr>
                <td>Water</td>
                <td>1480</td>
            </tr>
            <tr>
                <td>Steel</td>
                <td>5960</td>
            </tr>
        </table>
        
        <h4>Characteristics of Sound</h4>
        <ul>
            <li><strong>Pitch:</strong> Related to frequency (high frequency = high pitch)</li>
            <li><strong>Loudness:</strong> Related to amplitude (intensity)</li>
            <li><strong>Quality/Timbre:</strong> Related to waveform</li>
        </ul>
        
        <h4>Intensity of Sound</h4>
        <p><code>I = P/A</code> (Power per unit area)</p>
        <p>Unit: W/m²</p>
        
        <h4>Sound Level (Decibel)</h4>
        <p><code>β = 10 log(I/I₀)</code> dB</p>
        <p>Where I₀ = 10⁻¹² W/m² (threshold of hearing)</p>
        
        <h3>5. Doppler Effect</h3>
        <p>Apparent change in frequency due to relative motion between source and observer.</p>
        
        <h4>Formula:</h4>
        <p><code>f' = f[(v ± v₀)/(v ∓ vₛ)]</code></p>
        
        <p>Where:</p>
        <ul>
            <li>f' = observed frequency</li>
            <li>f = actual frequency</li>
            <li>v = speed of sound</li>
            <li>v₀ = speed of observer</li>
            <li>vₛ = speed of source</li>
        </ul>
        
        <h4>Sign Convention:</h4>
        <ul>
            <li>Observer moving towards source: +v₀</li>
            <li>Observer moving away from source: -v₀</li>
            <li>Source moving towards observer: -vₛ</li>
            <li>Source moving away from observer: +vₛ</li>
        </ul>
        
        <h3>6. Superposition of Waves</h3>
        <p>When two or more waves overlap, the resultant displacement is the sum of individual displacements.</p>
        
        <h4>Principle of Superposition:</h4>
        <p><code>y = y₁ + y₂ + y₃ + ...</code></p>
        
        <h3>7. Interference</h3>
        <p>Superposition of two waves of same frequency traveling in same direction.</p>
        
        <h4>Constructive Interference</h4>
        <p>Path difference = nλ (n = 0, 1, 2, ...)</p>
        <p>Phase difference = 2nπ</p>
        <p>Amplitude: A = A₁ + A₂</p>
        
        <h4>Destructive Interference</h4>
        <p>Path difference = (n + ½)λ</p>
        <p>Phase difference = (2n + 1)π</p>
        <p>Amplitude: A = |A₁ - A₂|</p>
        
        <h3>8. Standing Waves</h3>
        <p>Formed by superposition of two identical waves traveling in opposite directions.</p>
        
        <h4>Equation:</h4>
        <p><code>y = 2A sin(kx) cos(ωt)</code></p>
        
        <h4>Nodes and Antinodes:</h4>
        <ul>
            <li><strong>Nodes:</strong> Points of zero amplitude (distance = λ/2)</li>
            <li><strong>Antinodes:</strong> Points of maximum amplitude (distance = λ/2)</li>
        </ul>
        
        <h4>Standing Waves in Strings</h4>
        <p>For string fixed at both ends:</p>
        <p><code>f = (n/2L)√(T/μ)</code></p>
        
        <p>Where:</p>
        <ul>
            <li>n = 1, 2, 3, ... (harmonic number)</li>
            <li>L = length of string</li>
            <li>T = tension</li>
            <li>μ = mass per unit length</li>
        </ul>
        
        <h3>9. Beats</h3>
        <p>Periodic variation in intensity when two waves of slightly different frequencies interfere.</p>
        
        <h4>Beat Frequency:</h4>
        <p><code>f_beat = |f₁ - f₂|</code></p>
        
        <h3>10. Resonance</h3>
        <p>Large amplitude oscillations when driving frequency equals natural frequency.</p>
        
        <h4>Applications:</h4>
        <ul>
            <li>Musical instruments</li>
            <li>Radio tuning</li>
            <li>Microwave ovens</li>
        </ul>
        
        <h3>Practice Problems</h3>
        
        <p><strong>Problem 1:</strong> A wave has frequency 500 Hz and wavelength 0.6 m. Find its speed.</p>
        <p><strong>Solution:</strong></p>
        <p>v = fλ = 500 × 0.6 = 300 m/s</p>
        
        <p><strong>Problem 2:</strong> Speed of sound in air at 20°C is 343 m/s. Find wavelength of 1000 Hz sound.</p>
        <p><strong>Solution:</strong></p>
        <p>λ = v/f = 343/1000 = 0.343 m = 34.3 cm</p>
        
        <p><strong>Problem 3:</strong> A car horn has frequency 400 Hz. If car moves at 30 m/s towards stationary observer, find observed frequency. (v_sound = 340 m/s)</p>
        <p><strong>Solution:</strong></p>
        <p>f' = f[v/(v - vₛ)] = 400[340/(340 - 30)]</p>
        <p>f' = 400[340/310] = 438.7 Hz</p>
        
        <p><strong>Problem 4:</strong> Two tuning forks produce 5 beats per second. If one has frequency 256 Hz, find frequency of other.</p>
        <p><strong>Solution:</strong></p>
        <p>f_beat = |f₁ - f₂|</p>
        <p>5 = |256 - f₂|</p>
        <p>f₂ = 251 Hz or 261 Hz</p>
        
        <p><strong>Problem 5:</strong> A string of length 1 m and mass 2 g is under tension 80 N. Find fundamental frequency.</p>
        <p><strong>Solution:</strong></p>
        <p>μ = m/L = 0.002/1 = 0.002 kg/m</p>
        <p>f = (1/2L)√(T/μ) = (1/2)√(80/0.002)</p>
        <p>f = 0.5 × 200 = 100 Hz</p>
        
        <h3>Important Formulas Summary</h3>
        <ul>
            <li>Wave speed: v = fλ</li>
            <li>Wave equation: y = A sin(kx - ωt)</li>
            <li>Speed of sound: v = 331 + 0.6T m/s</li>
            <li>Doppler effect: f' = f[(v ± v₀)/(v ∓ vₛ)]</li>
            <li>Beat frequency: f_beat = |f₁ - f₂|</li>
            <li>String frequency: f = (n/2L)√(T/μ)</li>
        </ul>
        
        <h3>Key Points to Remember</h3>
        <ul>
            <li>Sound requires medium, light doesn't</li>
            <li>Speed of sound increases with temperature</li>
            <li>Constructive interference: path difference = nλ</li>
            <li>Destructive interference: path difference = (n + ½)λ</li>
            <li>Distance between nodes = λ/2</li>
            <li>Fundamental frequency has n = 1</li>
            <li>Beats occur when frequencies are close</li>
        </ul>
    `
},
{
    id: 51,
    title: "Optics - Ray and Wave Optics",
    description: "Reflection, refraction, lenses, mirrors, interference, diffraction and polarization",
    class: "12",
    date: "2024-02-12",
    views: 2150,
    tags: ["optics", "light", "reflection", "refraction", "lenses"],
    content: `
        <h2>Optics</h2>
        
        <h3>Part 1: Ray Optics (Geometrical Optics)</h3>
        
        <h4>1.1 Reflection of Light</h4>
        
        <h4>Laws of Reflection:</h4>
        <ol>
            <li>Incident ray, reflected ray, and normal lie in same plane</li>
            <li>Angle of incidence = Angle of reflection (i = r)</li>
        </ol>
        
        <h4>Types of Reflection:</h4>
        <ul>
            <li><strong>Regular Reflection:</strong> From smooth surfaces (mirrors)</li>
            <li><strong>Diffuse Reflection:</strong> From rough surfaces</li>
        </ul>
        
        <h4>1.2 Spherical Mirrors</h4>
        
        <h4>Concave Mirror (Converging)</h4>
        <p>Reflecting surface curves inward.</p>
        
        <h4>Convex Mirror (Diverging)</h4>
        <p>Reflecting surface curves outward.</p>
        
        <h4>Mirror Formula:</h4>
        <p><code>1/f = 1/v + 1/u</code></p>
        
        <p>Where:</p>
        <ul>
            <li>f = focal length</li>
            <li>v = image distance</li>
            <li>u = object distance</li>
        </ul>
        
        <h4>Magnification:</h4>
        <p><code>m = -v/u = h'/h</code></p>
        
        <h4>Sign Convention (New Cartesian):</h4>
        <ul>
            <li>Distances measured from pole</li>
            <li>Left of mirror: negative</li>
            <li>Right of mirror: positive</li>
            <li>Upward: positive</li>
            <li>Downward: negative</li>
        </ul>
        
        <h4>Relation between f and R:</h4>
        <p><code>f = R/2</code></p>
        
        <h4>1.3 Refraction of Light</h4>
        
        <h4>Laws of Refraction:</h4>
        <ol>
            <li>Incident ray, refracted ray, and normal lie in same plane</li>
            <li>Snell's Law: <code>n₁ sin i = n₂ sin r</code></li>
        </ol>
        
        <h4>Refractive Index:</h4>
        <p><code>n = c/v</code></p>
        <p>Where c = speed of light in vacuum, v = speed in medium</p>
        
        <h4>Relative Refractive Index:</h4>
        <p><code>₁n₂ = n₂/n₁ = v₁/v₂</code></p>
        
        <h4>1.4 Total Internal Reflection</h4>
        <p>Occurs when light travels from denser to rarer medium at angle greater than critical angle.</p>
        
        <h4>Critical Angle:</h4>
        <p><code>sin C = n₂/n₁ = 1/n</code> (when n₂ = 1)</p>
        
        <h4>Applications:</h4>
        <ul>
            <li>Optical fibers</li>
            <li>Prisms in binoculars</li>
            <li>Diamonds sparkle</li>
            <li>Mirage</li>
        </ul>
        
        <h4>1.5 Refraction through Prism</h4>
        
        <h4>Angle of Deviation:</h4>
        <p><code>δ = i + e - A</code></p>
        
        <p>Where:</p>
        <ul>
            <li>δ = angle of deviation</li>
            <li>i = angle of incidence</li>
            <li>e = angle of emergence</li>
            <li>A = angle of prism</li>
        </ul>
        
        <h4>At Minimum Deviation:</h4>
        <p><code>n = sin[(A + δₘ)/2] / sin(A/2)</code></p>
        
        <h4>1.6 Lenses</h4>
        
        <h4>Types:</h4>
        <ul>
            <li><strong>Convex Lens (Converging):</strong> Thicker at center</li>
            <li><strong>Concave Lens (Diverging):</strong> Thinner at center</li>
        </ul>
        
        <h4>Lens Formula:</h4>
        <p><code>1/f = 1/v - 1/u</code></p>
        
        <h4>Lens Maker's Formula:</h4>
        <p><code>1/f = (n - 1)(1/R₁ - 1/R₂)</code></p>
        
        <h4>Power of Lens:</h4>
        <p><code>P = 1/f</code> (f in meters)</p>
        <p>Unit: Diopter (D)</p>
        
        <h4>Combination of Lenses:</h4>
        <p><code>P = P₁ + P₂ + P₃ + ...</code></p>
        <p><code>1/f = 1/f₁ + 1/f₂ + 1/f₃ + ...</code></p>
        
        <h3>Part 2: Wave Optics</h3>
        
        <h4>2.1 Huygens' Principle</h4>
        <p>Every point on a wavefront acts as a source of secondary wavelets.</p>
        
        <h4>2.2 Interference of Light</h4>
        
        <h4>Conditions for Interference:</h4>
        <ul>
            <li>Two sources must be coherent</li>
            <li>Same frequency and constant phase difference</li>
        </ul>
        
        <h4>Young's Double Slit Experiment</h4>
        
        <h4>Fringe Width:</h4>
        <p><code>β = λD/d</code></p>
        
        <p>Where:</p>
        <ul>
            <li>β = fringe width</li>
            <li>λ = wavelength</li>
            <li>D = distance from slits to screen</li>
            <li>d = distance between slits</li>
        </ul>
        
        <h4>Position of Bright Fringes:</h4>
        <p><code>y = nλD/d</code> (n = 0, 1, 2, ...)</p>
        
        <h4>Position of Dark Fringes:</h4>
        <p><code>y = (n + ½)λD/d</code></p>
        
        <h4>2.3 Diffraction</h4>
        <p>Bending of light around obstacles or through apertures.</p>
        
        <h4>Single Slit Diffraction</h4>
        
        <h4>Position of Minima:</h4>
        <p><code>a sin θ = nλ</code> (n = 1, 2, 3, ...)</p>
        
        <h4>Width of Central Maximum:</h4>
        <p><code>w = 2λD/a</code></p>
        
        <h4>2.4 Polarization</h4>
        <p>Restriction of vibrations of light to a single plane.</p>
        
        <h4>Methods of Polarization:</h4>
        <ul>
            <li>Polarization by reflection</li>
            <li>Polarization by refraction</li>
            <li>Polarization by scattering</li>
            <li>Polarization by selective absorption</li>
        </ul>
        
        <h4>Brewster's Law:</h4>
        <p><code>tan iₚ = n</code></p>
        <p>Where iₚ = polarizing angle</p>
        
        <h4>Malus' Law:</h4>
        <p><code>I = I₀ cos²θ</code></p>
        <p>Where θ = angle between polarizer and analyzer</p>
        
        <h3>Practice Problems</h3>
        
        <p><strong>Problem 1:</strong> Object placed 30 cm from concave mirror of focal length 20 cm. Find image position and magnification.</p>
        <p><strong>Solution:</strong></p>
        <p>Given: u = -30 cm, f = -20 cm</p>
        <p>1/f = 1/v + 1/u</p>
        <p>1/(-20) = 1/v + 1/(-30)</p>
        <p>1/v = -1/20 + 1/30 = -1/60</p>
        <p>v = -60 cm (real, inverted)</p>
        <p>m = -v/u = -(-60)/(-30) = -2</p>
        
        <p><strong>Problem 2:</strong> Light travels from air (n=1) to glass (n=1.5). If angle of incidence is 60°, find angle of refraction.</p>
        <p><strong>Solution:</strong></p>
        <p>n₁ sin i = n₂ sin r</p>
        <p>1 × sin 60° = 1.5 × sin r</p>
        <p>sin r = 0.866/1.5 = 0.577</p>
        <p>r = 35.3°</p>
        
        <p><strong>Problem 3:</strong> Critical angle for glass-air interface is 42°. Find refractive index of glass.</p>
        <p><strong>Solution:</strong></p>
        <p>sin C = 1/n</p>
        <p>n = 1/sin 42° = 1/0.669 = 1.49</p>
        
        <p><strong>Problem 4:</strong> In Young's experiment, d = 0.5 mm, D = 1 m, λ = 600 nm. Find fringe width.</p>
        <p><strong>Solution:</strong></p>
        <p>β = λD/d = (600 × 10⁻⁹ × 1)/(0.5 × 10⁻³)</p>
        <p>β = 1.2 × 10⁻³ m = 1.2 mm</p>
        
        <p><strong>Problem 5:</strong> Two lenses of power +2D and -3D are placed in contact. Find focal length of combination.</p>
        <p><strong>Solution:</strong></p>
        <p>P = P₁ + P₂ = 2 + (-3) = -1 D</p>
        <p>f = 1/P = 1/(-1) = -1 m = -100 cm</p>
        
        <h3>Important Formulas Summary</h3>
        
        <h4>Mirrors and Lenses:</h4>
        <ul>
            <li>Mirror formula: 1/f = 1/v + 1/u</li>
            <li>Lens formula: 1/f = 1/v - 1/u</li>
            <li>Magnification: m = -v/u</li>
            <li>Power: P = 1/f (in meters)</li>
        </ul>
        
        <h4>Refraction:</h4>
        <ul>
            <li>Snell's law: n₁ sin i = n₂ sin r</li>
            <li>Critical angle: sin C = 1/n</li>
            <li>Refractive index: n = c/v</li>
        </ul>
        
        <h4>Wave Optics:</h4>
        <ul>
            <li>Fringe width: β = λD/d</li>
            <li>Diffraction minima: a sin θ = nλ</li>
            <li>Malus' law: I = I₀ cos²θ</li>
        </ul>
    `
},
{
    id: 52,
    title: "Modern Physics - Atoms and Nuclei",
    description: "Atomic models, radioactivity, nuclear reactions, and quantum physics",
    class: "12",
    date: "2024-02-14",
    views: 1920,
    tags: ["modern physics", "atoms", "nuclei", "radioactivity", "quantum"],
    content: `
        <h2>Modern Physics</h2>
        
        <h3>Chapter 1: Dual Nature of Matter and Radiation</h3>
        
        <h4>1.1 Photoelectric Effect</h4>
        <p>Emission of electrons when light falls on a metal surface.</p>
        
        <h4>Einstein's Photoelectric Equation:</h4>
        <p><code>hf = φ + KEₘₐₓ</code></p>
        <p><code>KEₘₐₓ = hf - φ = eV₀</code></p>
        
        <p>Where:</p>
        <ul>
            <li>h = Planck's constant = 6.626 × 10⁻³⁴ J·s</li>
            <li>f = frequency of light</li>
            <li>φ = work function</li>
            <li>V₀ = stopping potential</li>
        </ul>
        
        <h4>Threshold Frequency:</h4>
        <p><code>f₀ = φ/h</code></p>
        
        <h4>Key Observations:</h4>
        <ul>
            <li>Instantaneous emission</li>
            <li>No time lag</li>
            <li>Depends on frequency, not intensity</li>
            <li>Intensity affects number of electrons, not energy</li>
        </ul>
        
        <h4>1.2 De Broglie Wavelength</h4>
        <p>Matter has wave properties.</p>
        
        <h4>Formula:</h4>
        <p><code>λ = h/p = h/mv</code></p>
        
        <p>For electron accelerated through potential V:</p>
        <p><code>λ = h/√(2meV)</code></p>
        <p><code>λ = 12.27/√V</code> Å</p>
        
        <h3>Chapter 2: Atoms</h3>
        
        <h4>2.1 Atomic Models</h4>
        
        <h4>Thomson's Model (1904)</h4>
        <p>Plum pudding model - positive sphere with embedded electrons.</p>
        
        <h4>Rutherford's Model (1911)</h4>
        <ul>
            <li>Small, dense, positive nucleus</li>
            <li>Electrons revolve around nucleus</li>
            <li>Most of atom is empty space</li>
        </ul>
        
        <h4>Limitations:</h4>
        <ul>
            <li>Accelerating electron should radiate energy</li>
            <li>Atom should collapse</li>
            <li>Cannot explain line spectra</li>
        </ul>
        
        <h4>2.2 Bohr's Model (1913)</h4>
        
        <h4>Postulates:</h4>
        <ol>
            <li>Electrons revolve in fixed orbits without radiating energy</li>
            <li>Angular momentum is quantized: <code>mvr = nh/2π</code></li>
            <li>Energy is emitted/absorbed when electron jumps between orbits</li>
        </ol>
        
        <h4>Radius of nth Orbit:</h4>
        <p><code>rₙ = n²h²ε₀/πme²</code></p>
        <p><code>rₙ = 0.529n²</code> Å (for hydrogen)</p>
        
        <h4>Energy of nth Orbit:</h4>
        <p><code>Eₙ = -13.6/n²</code> eV (for hydrogen)</p>
        
        <h4>Velocity of Electron:</h4>
        <p><code>vₙ = e²/2ε₀nh</code></p>
        
        <h4>2.3 Hydrogen Spectrum</h4>
        
        <h4>Energy of Photon:</h4>
        <p><code>E = hf = hc/λ</code></p>
        
        <h4>Rydberg Formula:</h4>
        <p><code>1/λ = R(1/n₁² - 1/n₂²)</code></p>
        <p>Where R = 1.097 × 10⁷ m⁻¹ (Rydberg constant)</p>
        
        <h4>Spectral Series:</h4>
        <table>
            <tr>
                <th>Series</th>
                <th>n₁</th>
                <th>n₂</th>
                <th>Region</th>
            </tr>
            <tr>
                <td>Lyman</td>
                <td>1</td>
                <td>2, 3, 4...</td>
                <td>UV</td>
            </tr>
            <tr>
                <td>Balmer</td>
                <td>2</td>
                <td>3, 4, 5...</td>
                <td>Visible</td>
            </tr>
            <tr>
                <td>Paschen</td>
                <td>3</td>
                <td>4, 5, 6...</td>
                <td>IR</td>
            </tr>
            <tr>
                <td>Brackett</td>
                <td>4</td>
                <td>5, 6, 7...</td>
                <td>IR</td>
            </tr>
            <tr>
                <td>Pfund</td>
                <td>5</td>
                <td>6, 7, 8...</td>
                <td>IR</td>
            </tr>
        </table>
        
        <h3>Chapter 3: Nuclei</h3>
        
        <h4>3.1 Nuclear Structure</h4>
        
        <h4>Notation:</h4>
        <p>ᴬ_Z X</p>
        <ul>
            <li>A = mass number (protons + neutrons)</li>
            <li>Z = atomic number (protons)</li>
            <li>N = neutron number = A - Z</li>
        </ul>
        
        <h4>Nuclear Size:</h4>
        <p><code>R = R₀A^(1/3)</code></p>
        <p>Where R₀ = 1.2 × 10⁻¹⁵ m = 1.2 fm</p>
        
        <h4>3.2 Mass Defect and Binding Energy</h4>
        
        <h4>Mass Defect:</h4>
        <p><code>Δm = [Zmₚ + Nmₙ - M]</code></p>
        
        <h4>Binding Energy:</h4>
        <p><code>BE = Δmc²</code></p>
        <p><code>BE = 931.5 × Δm</code> MeV (if Δm in amu)</p>
        
        <h4>Binding Energy per Nucleon:</h4>
        <p><code>BE/A</code></p>
        <p>Maximum at Fe-56 (~8.8 MeV)</p>
        
        <h4>3.3 Radioactivity</h4>
        <p>Spontaneous emission of radiation from unstable nuclei.</p>
        
        <h4>Types of Radiation:</h4>
        <table>
            <tr>
                <th>Type</th>
                <th>Nature</th>
                <th>Charge</th>
                <th>Mass</th>
                <th>Penetration</th>
            </tr>
            <tr>
                <td>Alpha (α)</td>
                <td>He nucleus</td>
                <td>+2e</td>
                <td>4 amu</td>
                <td>Low</td>
            </tr>
            <tr>
                <td>Beta (β)</td>
                <td>Electron</td>
                <td>-e</td>
                <td>~0</td>
                <td>Medium</td>
            </tr>
            <tr>
                <td>Gamma (γ)</td>
                <td>EM wave</td>
                <td>0</td>
                <td>0</td>
                <td>High</td>
            </tr>
        </table>
        
        <h4>3.4 Radioactive Decay Law</h4>
        
        <h4>Decay Equation:</h4>
        <p><code>N = N₀e^(-λt)</code></p>
        
        <p>Where:</p>
        <ul>
            <li>N = number of nuclei at time t</li>
            <li>N₀ = initial number</li>
            <li>λ = decay constant</li>
        </ul>
        
        <h4>Half-Life:</h4>
        <p><code>T₁/₂ = 0.693/λ</code></p>
        
        <h4>Mean Life:</h4>
        <p><code>τ = 1/λ</code></p>
        
        <h4>Activity:</h4>
        <p><code>A = λN = A₀e^(-λt)</code></p>
        <p>Unit: Becquerel (Bq) = 1 decay/second</p>
        <p>1 Curie = 3.7 × 10¹⁰ Bq</p>
        
        <h4>3.5 Nuclear Reactions</h4>
        
        <h4>Nuclear Fission</h4>
        <p>Splitting of heavy nucleus into lighter nuclei.</p>
        <p>Example: ²³⁵U + ¹n → ¹⁴¹Ba + ⁹²Kr + 3¹n + Energy</p>
        <p>Energy released: ~200 MeV per fission</p>
        
        <h4>Nuclear Fusion</h4>
        <p>Combining light nuclei to form heavier nucleus.</p>
        <p>Example: ²H + ³H → ⁴He + ¹n + 17.6 MeV</p>
        
        <h4>Applications:</h4>
        <ul>
            <li>Nuclear power plants (fission)</li>
            <li>Sun's energy (fusion)</li>
            <li>Nuclear weapons</li>
            <li>Medical applications</li>
        </ul>
        
        <h3>Practice Problems</h3>
        
        <p><strong>Problem 1:</strong> Work function of metal is 2 eV. Light of wavelength 400 nm falls on it. Find maximum KE of photoelectrons.</p>
        <p><strong>Solution:</strong></p>
        <p>E = hc/λ = (6.626 × 10⁻³⁴ × 3 × 10⁸)/(400 × 10⁻⁹)</p>
        <p>E = 4.97 × 10⁻¹⁹ J = 3.1 eV</p>
        <p>KEₘₐₓ = E - φ = 3.1 - 2 = 1.1 eV</p>
        
        <p><strong>Problem 2:</strong> Find de Broglie wavelength of electron accelerated through 100 V.</p>
        <p><strong>Solution:</strong></p>
        <p>λ = 12.27/√V = 12.27/√100 = 1.227 Å</p>
        
        <p><strong>Problem 3:</strong> Find energy of electron in n=3 orbit of hydrogen.</p>
        <p><strong>Solution:</strong></p>
        <p>E₃ = -13.6/3² = -13.6/9 = -1.51 eV</p>
        
        <p><strong>Problem 4:</strong> Half-life of radioactive substance is 10 days. Find decay constant.</p>
        <p><strong>Solution:</strong></p>
        <p>λ = 0.693/T₁/₂ = 0.693/10 = 0.0693 day⁻¹</p>
        
        <p><strong>Problem 5:</strong> Mass defect of nucleus is 0.5 amu. Find binding energy.</p>
        <p><strong>Solution:</strong></p>
        <p>BE = 931.5 × Δm = 931.5 × 0.5 = 465.75 MeV</p>
        
        <h3>Important Constants</h3>
        <ul>
            <li>Planck's constant: h = 6.626 × 10⁻³⁴ J·s</li>
            <li>Speed of light: c = 3 × 10⁸ m/s</li>
            <li>Electron charge: e = 1.6 × 10⁻¹⁹ C</li>
            <li>Electron mass: mₑ = 9.1 × 10⁻³¹ kg</li>
            <li>Proton mass: mₚ = 1.673 × 10⁻²⁷ kg</li>
            <li>Neutron mass: mₙ = 1.675 × 10⁻²⁷ kg</li>
            <li>1 eV = 1.6 × 10⁻¹⁹ J</li>
            <li>1 amu = 931.5 MeV/c²</li>
        </ul>
        
        <h3>Key Formulas Summary</h3>
        <ul>
            <li>Photoelectric: KEₘₐₓ = hf - φ</li>
            <li>De Broglie: λ = h/p</li>
            <li>Bohr's energy: Eₙ = -13.6/n² eV</li>
            <li>Rydberg: 1/λ = R(1/n₁² - 1/n₂²)</li>
            <li>Decay: N = N₀e^(-λt)</li>
            <li>Half-life: T₁/₂ = 0.693/λ</li>
            <li>Binding energy: BE = Δmc²</li>
        </ul>
    `
},
    ],

    // ==================== CHEMISTRY NOTES ====================
    chemistry: [
       
        {
            id: 7,
            title: "Chemical Bonding",
            description: "Ionic, covalent, and metallic bonds with examples",
            class: "11",
            date: "2024-01-25",
            views: 1980,
            tags: ["bonding", "ionic", "covalent", "metallic"],
            content: `
                <h2>Chemical Bonding</h2>
                
                <h3>1. Types of Bonds</h3>
                
                <h4>Ionic Bond</h4>
                <p>Bond formed by complete transfer of electrons.</p>
                <p>Example: NaCl</p>
                
                <h4>Covalent Bond</h4>
                <p>Bond formed by sharing of electrons.</p>
                <p>Example: H₂, O₂, N₂</p>
                
                <h4>Metallic Bond</h4>
                <p>Bond formed by delocalized electrons in metals.</p>
                
                <h3>2. Lewis Structures</h3>
                <p>Show valence electrons as dots around atomic symbols.</p>
                
                <h3>3. VSEPR Theory</h3>
                <p>Electron pairs repel each other and arrange to minimize repulsion.</p>
                
                <table>
                    <tr>
                        <th>Electron Pairs</th>
                        <th>Geometry</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Linear</td>
                        <td>CO₂</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Trigonal Planar</td>
                        <td>BF₃</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Tetrahedral</td>
                        <td>CH₄</td>
                    </tr>
                </table>
            `
        },
        {
            id: 8,
            title: "Periodic Table and Trends",
            description: "Periodic properties, trends, and element classification",
            class: "11",
            date: "2024-02-05",
            views: 2350,
            tags: ["periodic table", "trends", "elements"],
            content: `
                <h2>Periodic Table</h2>
                
                <h3>1. Organization</h3>
                <p>Elements arranged by increasing atomic number.</p>
                
                <h3>2. Periodic Trends</h3>
                
                <h4>Atomic Radius</h4>
                <ul>
                    <li>Decreases across period (left to right)</li>
                    <li>Increases down group (top to bottom)</li>
                </ul>
                
                <h4>Ionization Energy</h4>
                <ul>
                    <li>Increases across period</li>
                    <li>Decreases down group</li>
                </ul>
                
                <h4>Electronegativity</h4>
                <ul>
                    <li>Increases across period</li>
                    <li>Decreases down group</li>
                </ul>
                
                <h3>3. Groups</h3>
                <ul>
                    <li>Group 1: Alkali Metals</li>
                    <li>Group 2: Alkaline Earth Metals</li>
                    <li>Group 17: Halogens</li>
                    <li>Group 18: Noble Gases</li>
                </ul>
            `
        },
        {
    id: 6,
    title: "Organic Chemistry - Reaction Mechanisms",
    description: "Complete guide to organic reactions, mechanisms, reagents and name reactions",
    class: "12",
    date: "2024-02-16",
    views: 2280,
    tags: ["organic", "reactions", "mechanisms", "reagents"],
    content: `
        <h2>Organic Chemistry - Reaction Mechanisms</h2>
        
        <h3>Chapter 1: Types of Organic Reactions</h3>
        
        <h4>1.1 Substitution Reactions</h4>
        <p>One atom or group is replaced by another.</p>
        
        <h4>Nucleophilic Substitution (SN)</h4>
        <p>Nucleophile attacks electron-deficient carbon.</p>
        
        <h4>SN1 Mechanism (Unimolecular)</h4>
        <p>Two-step process:</p>
        <ol>
            <li>Formation of carbocation (slow, rate-determining)</li>
            <li>Attack by nucleophile (fast)</li>
        </ol>
        
        <p><strong>Example:</strong> (CH₃)₃C-Br + OH⁻ → (CH₃)₃C-OH + Br⁻</p>
        
        <h4>Characteristics of SN1:</h4>
        <ul>
            <li>Rate = k[substrate]</li>
            <li>Favored by tertiary halides</li>
            <li>Polar protic solvents</li>
            <li>Racemization occurs</li>
            <li>Carbocation rearrangement possible</li>
        </ul>
        
        <h4>SN2 Mechanism (Bimolecular)</h4>
        <p>One-step process with transition state.</p>
        
        <p><strong>Example:</strong> CH₃-Br + OH⁻ → CH₃-OH + Br⁻</p>
        
        <h4>Characteristics of SN2:</h4>
        <ul>
            <li>Rate = k[substrate][nucleophile]</li>
            <li>Favored by primary halides</li>
            <li>Polar aprotic solvents</li>
            <li>Inversion of configuration (Walden inversion)</li>
            <li>No carbocation, no rearrangement</li>
        </ul>
        
        <h4>Electrophilic Substitution</h4>
        <p>Electrophile attacks electron-rich center.</p>
        
        <h4>Aromatic Electrophilic Substitution</h4>
        <p>Common in benzene and derivatives.</p>
        
        <h4>General Mechanism:</h4>
        <ol>
            <li>Generation of electrophile</li>
            <li>Formation of σ-complex (arenium ion)</li>
            <li>Loss of proton to restore aromaticity</li>
        </ol>
        
        <h4>1.2 Addition Reactions</h4>
        <p>Two molecules combine to form a single product.</p>
        
        <h4>Electrophilic Addition</h4>
        <p>Common in alkenes and alkynes.</p>
        
        <h4>Markovnikov's Rule:</h4>
        <p>In addition of HX to unsymmetrical alkene, H goes to carbon with more H atoms.</p>
        
        <p><strong>Example:</strong></p>
        <p>CH₃-CH=CH₂ + HBr → CH₃-CHBr-CH₃ (major)</p>
        
        <h4>Anti-Markovnikov Addition (Peroxide Effect):</h4>
        <p>In presence of peroxide, Br goes to carbon with more H.</p>
        <p>Only works with HBr.</p>
        
        <h4>1.3 Elimination Reactions</h4>
        <p>Removal of atoms/groups to form double/triple bond.</p>
        
        <h4>E1 Mechanism</h4>
        <p>Two-step process via carbocation.</p>
        
        <h4>E2 Mechanism</h4>
        <p>One-step concerted process.</p>
        
        <h4>Saytzeff's Rule:</h4>
        <p>Major product is more substituted alkene.</p>
        
        <h4>1.4 Oxidation-Reduction Reactions</h4>
        
        <h4>Oxidation:</h4>
        <ul>
            <li>Addition of oxygen</li>
            <li>Removal of hydrogen</li>
            <li>Increase in oxidation state</li>
        </ul>
        
        <h4>Reduction:</h4>
        <ul>
            <li>Addition of hydrogen</li>
            <li>Removal of oxygen</li>
            <li>Decrease in oxidation state</li>
        </ul>
        
        <h3>Chapter 2: Important Organic Reactions</h3>
        
        <h4>2.1 Reactions of Alkanes</h4>
        
        <h4>Halogenation</h4>
        <p>CH₄ + Cl₂ → CH₃Cl + HCl (in presence of light)</p>
        
        <h4>Mechanism:</h4>
        <ol>
            <li>Initiation: Cl₂ → 2Cl·</li>
            <li>Propagation: CH₄ + Cl· → CH₃· + HCl</li>
            <li>CH₃· + Cl₂ → CH₃Cl + Cl·</li>
            <li>Termination: Cl· + Cl· → Cl₂</li>
        </ol>
        
        <h4>Reactivity Order:</h4>
        <p>Tertiary H > Secondary H > Primary H</p>
        
        <h4>2.2 Reactions of Alkenes</h4>
        
        <h4>Hydrogenation</h4>
        <p>CH₂=CH₂ + H₂ → CH₃-CH₃ (Ni/Pt/Pd catalyst)</p>
        
        <h4>Halogenation</h4>
        <p>CH₂=CH₂ + Br₂ → CH₂Br-CH₂Br</p>
        
        <h4>Hydrohalogenation</h4>
        <p>CH₃-CH=CH₂ + HBr → CH₃-CHBr-CH₃ (Markovnikov)</p>
        
        <h4>Hydration</h4>
        <p>CH₂=CH₂ + H₂O → CH₃-CH₂OH (H⁺ catalyst)</p>
        
        <h4>Oxidation</h4>
        <p><strong>Mild oxidation (KMnO₄, cold, dilute):</strong></p>
        <p>R-CH=CH-R → R-CH(OH)-CH(OH)-R (glycol)</p>
        
        <p><strong>Strong oxidation (KMnO₄, hot, conc.):</strong></p>
        <p>Breaks C=C bond, forms carboxylic acids/ketones</p>
        
        <h4>Ozonolysis</h4>
        <p>R-CH=CH-R + O₃ → RCHO + RCHO</p>
        
        <h4>Polymerization</h4>
        <p>nCH₂=CH₂ → (-CH₂-CH₂-)ₙ (polyethylene)</p>
        
        <h4>2.3 Reactions of Alkynes</h4>
        
        <h4>Hydrogenation</h4>
        <p><strong>Complete:</strong> RC≡CR + 2H₂ → RCH₂-CH₂R</p>
        <p><strong>Partial (Lindlar's catalyst):</strong> RC≡CR + H₂ → RCH=CHR (cis)</p>
        
        <h4>Halogenation</h4>
        <p>RC≡CR + 2Br₂ → RCBr₂-CBr₂R</p>
        
        <h4>Hydration</h4>
        <p>HC≡CH + H₂O → CH₃CHO (acetaldehyde)</p>
        <p>RC≡CH + H₂O → RCOCH₃ (ketone)</p>
        
        <h4>2.4 Reactions of Benzene</h4>
        
        <h4>Nitration</h4>
        <p>C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O (H₂SO₄ catalyst)</p>
        <p>Electrophile: NO₂⁺ (nitronium ion)</p>
        
        <h4>Sulphonation</h4>
        <p>C₆H₆ + H₂SO₄ → C₆H₅SO₃H + H₂O</p>
        <p>Electrophile: SO₃</p>
        
        <h4>Halogenation</h4>
        <p>C₆H₆ + Cl₂ → C₆H₅Cl + HCl (FeCl₃ catalyst)</p>
        <p>Electrophile: Cl⁺</p>
        
        <h4>Friedel-Crafts Alkylation</h4>
        <p>C₆H₆ + CH₃Cl → C₆H₅CH₃ + HCl (AlCl₃ catalyst)</p>
        <p>Electrophile: CH₃⁺</p>
        
        <h4>Friedel-Crafts Acylation</h4>
        <p>C₆H₆ + CH₃COCl → C₆H₅COCH₃ + HCl (AlCl₃ catalyst)</p>
        <p>Electrophile: CH₃CO⁺</p>
        
        <h3>Chapter 3: Alcohols, Phenols and Ethers</h3>
        
        <h4>3.1 Reactions of Alcohols</h4>
        
        <h4>Oxidation</h4>
        <p><strong>Primary alcohol:</strong> RCH₂OH → RCHO → RCOOH</p>
        <p><strong>Secondary alcohol:</strong> R₂CHOH → R₂C=O</p>
        <p><strong>Tertiary alcohol:</strong> No oxidation (resistant)</p>
        
        <h4>Dehydration</h4>
        <p>CH₃CH₂OH → CH₂=CH₂ + H₂O (conc. H₂SO₄, 170°C)</p>
        
        <h4>Esterification</h4>
        <p>ROH + RCOOH → RCOOR + H₂O (H⁺ catalyst)</p>
        
        <h4>Reaction with HX</h4>
        <p>ROH + HX → RX + H₂O</p>
        <p>Reactivity: HI > HBr > HCl</p>
        
        <h4>Lucas Test</h4>
        <p>Distinguishes 1°, 2°, 3° alcohols using ZnCl₂/HCl</p>
        <ul>
            <li>Tertiary: Immediate turbidity</li>
            <li>Secondary: 5-10 minutes</li>
            <li>Primary: No reaction at room temp</li>
        </ul>
        
        <h4>3.2 Reactions of Phenols</h4>
        
        <h4>Acidity</h4>
        <p>C₆H₅OH + NaOH → C₆H₅ONa + H₂O</p>
        <p>Phenol is more acidic than alcohol due to resonance stabilization.</p>
        
        <h4>Electrophilic Substitution</h4>
        <p>-OH is ortho-para directing and activating.</p>
        
        <p><strong>Nitration:</strong></p>
        <p>C₆H₅OH + 3HNO₃ → 2,4,6-trinitrophenol (picric acid)</p>
        
        <p><strong>Bromination:</strong></p>
        <p>C₆H₅OH + 3Br₂ → C₆H₂Br₃OH (2,4,6-tribromophenol)</p>
        <p>White precipitate - test for phenol</p>
        
        <h4>Kolbe's Reaction</h4>
        <p>C₆H₅ONa + CO₂ → C₆H₄(OH)COOH (salicylic acid)</p>
        
        <h4>Reimer-Tiemann Reaction</h4>
        <p>C₆H₅OH + CHCl₃ + NaOH → C₆H₄(OH)CHO (salicylaldehyde)</p>
        
        <h3>Chapter 4: Aldehydes and Ketones</h3>
        
        <h4>4.1 Nucleophilic Addition Reactions</h4>
        
        <h4>Addition of HCN</h4>
        <p>RCHO + HCN → RCH(OH)CN (cyanohydrin)</p>
        
        <h4>Addition of Grignard Reagent</h4>
        <p>RCHO + R'MgX → RCH(OH)R' (alcohol)</p>
        
        <h4>Aldol Condensation</h4>
        <p>2CH₃CHO → CH₃CH(OH)CH₂CHO (aldol)</p>
        <p>Further: → CH₃CH=CHCHO (crotonaldehyde)</p>
        
        <h4>Cannizzaro Reaction</h4>
        <p>For aldehydes without α-H:</p>
        <p>2HCHO + NaOH → CH₃OH + HCOONa</p>
        
        <h4>4.2 Oxidation and Reduction</h4>
        
        <h4>Oxidation</h4>
        <p><strong>Aldehydes:</strong> RCHO → RCOOH (easily oxidized)</p>
        <p><strong>Ketones:</strong> Resistant to oxidation</p>
        
        <h4>Reduction</h4>
        <p>RCHO + H₂ → RCH₂OH (Ni catalyst)</p>
        <p>R₂C=O + H₂ → R₂CHOH</p>
        
        <h4>4.3 Tests for Aldehydes</h4>
        
        <h4>Fehling's Test</h4>
        <p>RCHO + Fehling's → Red precipitate (Cu₂O)</p>
        <p>Ketones don't give this test</p>
        
        <h4>Tollens' Test (Silver Mirror)</h4>
        <p>RCHO + [Ag(NH₃)₂]⁺ → Ag (mirror) + RCOO⁻</p>
        
        <h4>Iodoform Test</h4>
        <p>CH₃COR + I₂ + NaOH → CHI₃ (yellow ppt)</p>
        <p>For methyl ketones and CH₃CH(OH)-</p>
        
        <h3>Chapter 5: Carboxylic Acids and Derivatives</h3>
        
        <h4>5.1 Reactions of Carboxylic Acids</h4>
        
        <h4>Acidity</h4>
        <p>RCOOH ⇌ RCOO⁻ + H⁺</p>
        <p>Stronger than alcohols, weaker than mineral acids</p>
        
        <h4>Esterification</h4>
        <p>RCOOH + R'OH → RCOOR' + H₂O (H⁺ catalyst)</p>
        
        <h4>Formation of Acid Chloride</h4>
        <p>RCOOH + PCl₅ → RCOCl + POCl₃ + HCl</p>
        
        <h4>Formation of Amide</h4>
        <p>RCOOH + NH₃ → RCOONH₄ → RCONH₂ + H₂O (heat)</p>
        
        <h4>Decarboxylation</h4>
        <p>RCOONa + NaOH → RH + Na₂CO₃ (soda lime)</p>
        
        <h4>Hell-Volhard-Zelinsky Reaction</h4>
        <p>RCOOH + Cl₂/Br₂ → RCHClCOOH (α-halogenation)</p>
        
        <h3>Chapter 6: Amines</h3>
        
        <h4>6.1 Basicity of Amines</h4>
        <p>RNH₂ + H₂O ⇌ RNH₃⁺ + OH⁻</p>
        
        <h4>Basicity Order (in gas phase):</h4>
        <p>3° > 2° > 1° > NH₃</p>
        
        <h4>Basicity Order (in aqueous solution):</h4>
        <p>2° > 1° > 3° > NH₃</p>
        
        <h4>6.2 Reactions of Amines</h4>
        
        <h4>Alkylation</h4>
        <p>RNH₂ + R'X → RR'NH + HX</p>
        
        <h4>Acylation</h4>
        <p>RNH₂ + CH₃COCl → RNHCOCH₃ + HCl</p>
        
        <h4>Carbylamine Reaction</h4>
        <p>RNH₂ + CHCl₃ + KOH → RNC (isocyanide)</p>
        <p>Foul smell - test for 1° amines</p>
        
        <h4>Diazotization</h4>
        <p>C₆H₅NH₂ + NaNO₂ + HCl → C₆H₅N₂⁺Cl⁻ (0-5°C)</p>
        
        <h4>Coupling Reaction</h4>
        <p>C₆H₅N₂⁺Cl⁻ + C₆H₅OH → C₆H₅-N=N-C₆H₄OH (azo dye)</p>
        
        <h4>Hinsberg Test</h4>
        <p>Distinguishes 1°, 2°, 3° amines using C₆H₅SO₂Cl</p>
        <ul>
            <li>1° amine: Soluble in alkali</li>
            <li>2° amine: Insoluble in alkali</li>
            <li>3° amine: No reaction</li>
        </ul>
        
        <h3>Practice Problems</h3>
        
        <p><strong>Problem 1:</strong> Predict major product: CH₃-CH=CH₂ + HBr →</p>
        <p><strong>Solution:</strong></p>
        <p>CH₃-CHBr-CH₃ (Markovnikov's rule)</p>
        
        <p><strong>Problem 2:</strong> What happens when ethanol is heated with conc. H₂SO₄ at 170°C?</p>
        <p><strong>Solution:</strong></p>
        <p>CH₃CH₂OH → CH₂=CH₂ + H₂O (dehydration)</p>
        
        <p><strong>Problem 3:</strong> How to distinguish between 1° and 2° alcohol?</p>
        <p><strong>Solution:</strong></p>
        <p>Lucas test or oxidation:</p>
        <ul>
            <li>1° alcohol → aldehyde → acid</li>
            <li>2° alcohol → ketone (stops)</li>
        </ul>
        
        <p><strong>Problem 4:</strong> Write product: C₆H₅OH + Br₂(aq) →</p>
        <p><strong>Solution:</strong></p>
        <p>2,4,6-tribromophenol (white precipitate)</p>
        
        <p><strong>Problem 5:</strong> Which gives iodoform test?</p>
        <p><strong>Solution:</strong></p>
        <p>Compounds with CH₃CO- or CH₃CH(OH)- group:</p>
        <ul>
            <li>Acetone (CH₃COCH₃)</li>
            <li>Ethanol (CH₃CH₂OH)</li>
            <li>Acetaldehyde (CH₃CHO)</li>
        </ul>
        
        <h3>Important Name Reactions Summary</h3>
        
        <table>
            <tr>
                <th>Reaction</th>
                <th>Reagent</th>
                <th>Product</th>
            </tr>
            <tr>
                <td>Markovnikov</td>
                <td>HX to alkene</td>
                <td>H to more H carbon</td>
            </tr>
            <tr>
                <td>Anti-Markovnikov</td>
                <td>HBr + peroxide</td>
                <td>Br to more H carbon</td>
            </tr>
            <tr>
                <td>Friedel-Crafts</td>
                <td>RX/RCOCl + AlCl₃</td>
                <td>Alkyl/acyl benzene</td>
            </tr>
            <tr>
                <td>Kolbe's</td>
                <td>Phenol + CO₂</td>
                <td>Salicylic acid</td>
            </tr>
            <tr>
                <td>Reimer-Tiemann</td>
                <td>Phenol + CHCl₃</td>
                <td>Salicylaldehyde</td>
            </tr>
            <tr>
                <td>Aldol</td>
                <td>2 aldehydes + base</td>
                <td>β-hydroxy aldehyde</td>
            </tr>
            <tr>
                <td>Cannizzaro</td>
                <td>2 RCHO (no α-H)</td>
                <td>Alcohol + acid</td>
            </tr>
            <tr>
                <td>Carbylamine</td>
                <td>1° amine + CHCl₃</td>
                <td>Isocyanide</td>
            </tr>
        </table>
        
        <h3>Key Points to Remember</h3>
        <ul>
            <li>SN1: Tertiary halides, polar protic solvents</li>
            <li>SN2: Primary halides, polar aprotic solvents</li>
            <li>Markovnikov: H to more H carbon</li>
            <li>Saytzeff: More substituted alkene is major</li>
            <li>Phenol more acidic than alcohol</li>
            <li>Aldehydes easily oxidized, ketones resistant</li>
            <li>-OH is ortho-para directing</li>
            <li>-NO₂ is meta directing</li>
        </ul>
    `
},
{
    id: 9,
    title: "Chemical Kinetics and Equilibrium",
    description: "Rate of reaction, order, molecularity, equilibrium constant and Le Chatelier's principle",
    class: "12",
    date: "2024-02-18",
    views: 1950,
    tags: ["kinetics", "equilibrium", "rate", "reaction"],
    content: `
        <h2>Chemical Kinetics and Equilibrium</h2>
        
        <h3>Part 1: Chemical Kinetics</h3>
        
        <h4>1.1 Rate of Reaction</h4>
        <p>Change in concentration of reactant or product per unit time.</p>
        
        <h4>Formula:</h4>
        <p><code>Rate = -d[R]/dt = +d[P]/dt</code></p>
        
        <h4>Units:</h4>
        <p>mol L⁻¹ s⁻¹ or M s⁻¹</p>
        
        <h4>Average Rate:</h4>
        <p><code>r_avg = Δ[R]/Δt</code></p>
        
        <h4>Instantaneous Rate:</h4>
        <p><code>r_inst = d[R]/dt</code> (at specific time)</p>
        
        <h4>1.2 Factors Affecting Rate</h4>
        
        <h4>1. Concentration</h4>
        <p>Higher concentration → more collisions → faster rate</p>
        
        <h4>2. Temperature</h4>
        <p>Higher temperature → more kinetic energy → faster rate</p>
        
        <h4>3. Catalyst</h4>
        <p>Lowers activation energy → faster rate</p>
        
        <h4>4. Surface Area</h4>
        <p>Larger surface area → more collisions → faster rate</p>
        
        <h4>5. Nature of Reactants</h4>
        <p>Ionic reactions faster than covalent</p>
        
        <h4>1.3 Rate Law</h4>
        <p>For reaction: aA + bB → products</p>
        <p><code>Rate = k[A]ˣ[B]ʸ</code></p>
        
        <p>Where:</p>
        <ul>
            <li>k = rate constant</li>
            <li>x, y = order with respect to A, B</li>
            <li>x + y = overall order</li>
        </ul>
        
        <h4>1.4 Order of Reaction</h4>
        <p>Sum of powers of concentration terms in rate law.</p>
        
        <h4>Zero Order (n = 0)</h4>
        <p>Rate = k[A]⁰ = k</p>
        <p>Rate independent of concentration</p>
        
        <h4>Integrated Rate Law:</h4>
        <p><code>[A] = [A]₀ - kt</code></p>
        
        <h4>Half-life:</h4>
        <p><code>t₁/₂ = [A]₀/2k</code></p>
        
        <h4>Units of k:</h4>
        <p>mol L⁻¹ s⁻¹</p>
        
        <h4>First Order (n = 1)</h4>
        <p>Rate = k[A]</p>
        
        <h4>Integrated Rate Law:</h4>
        <p><code>ln[A] = ln[A]₀ - kt</code></p>
        <p><code>log[A] = log[A]₀ - kt/2.303</code></p>
        
        <h4>Half-life:</h4>
        <p><code>t₁/₂ = 0.693/k</code></p>
        <p>Independent of initial concentration</p>
        
        <h4>Units of k:</h4>
        <p>s⁻¹ or time⁻¹</p>
        
        <h4>Second Order (n = 2)</h4>
        <p>Rate = k[A]²</p>
        
        <h4>Integrated Rate Law:</h4>
        <p><code>1/[A] = 1/[A]₀ + kt</code></p>
        
        <h4>Half-life:</h4>
        <p><code>t₁/₂ = 1/(k[A]₀)</code></p>
        
        <h4>Units of k:</h4>
        <p>L mol⁻¹ s⁻¹</p>
        
        <h4>1.5 Molecularity</h4>
        <p>Number of molecules participating in elementary step.</p>
        
        <ul>
            <li><strong>Unimolecular:</strong> A → Products</li>
            <li><strong>Bimolecular:</strong> A + B → Products</li>
            <li><strong>Trimolecular:</strong> A + B + C → Products (rare)</li>
        </ul>
        
        <h4>Difference: Order vs Molecularity</h4>
        <table>
            <tr>
                <th>Order</th>
                <th>Molecularity</th>
            </tr>
            <tr>
                <td>Experimental</td>
                <td>Theoretical</td>
            </tr>
            <tr>
                <td>Can be fraction</td>
                <td>Always integer</td>
            </tr>
            <tr>
                <td>For overall reaction</td>
                <td>For elementary step</td>
            </tr>
        </table>
        
        <h4>1.6 Collision Theory</h4>
        <p>For reaction to occur:</p>
        <ol>
            <li>Molecules must collide</li>
            <li>With sufficient energy (≥ Ea)</li>
            <li>With proper orientation</li>
        </ol>
        
        <h4>Activation Energy (Ea):</h4>
        <p>Minimum energy required for reaction.</p>
        
        <h4>1.7 Arrhenius Equation</h4>
        <p><code>k = Ae^(-Ea/RT)</code></p>
        
        <p>Taking log:</p>
        <p><code>ln k = ln A - Ea/RT</code></p>
        <p><code>log k = log A - Ea/(2.303RT)</code></p>
        
        <h4>Temperature Dependence:</h4>
        <p><code>log(k₂/k₁) = (Ea/2.303R)[1/T₁ - 1/T₂]</code></p>
        
        <h4>1.8 Catalysis</h4>
        <p>Catalyst increases rate by providing alternate pathway with lower Ea.</p>
        
        <h4>Types:</h4>
        <ul>
            <li><strong>Homogeneous:</strong> Same phase as reactants</li>
            <li><strong>Heterogeneous:</strong> Different phase</li>
        </ul>
        
        <h4>Characteristics:</h4>
        <ul>
            <li>Not consumed in reaction</li>
            <li>Small amount needed</li>
            <li>Doesn't change equilibrium position</li>
            <li>Specific to reaction</li>
        </ul>
        
        <h3>Part 2: Chemical Equilibrium</h3>
        
        <h4>2.1 Reversible Reactions</h4>
        <p>Reactions that proceed in both directions.</p>
        <p><code>A + B ⇌ C + D</code></p>
        
        <h4>2.2 Equilibrium State</h4>
        <p>State where forward and backward rates are equal.</p>
        
        <h4>Characteristics:</h4>
        <ul>
            <li>Dynamic equilibrium</li>
            <li>Concentrations constant</li>
            <li>Macroscopic properties constant</li>
            <li>Can be approached from either direction</li>
        </ul>
        
        <h4>2.3 Law of Mass Action</h4>
        <p>For: aA + bB ⇌ cC + dD</p>
        
        <h4>Equilibrium Constant (Kc):</h4>
        <p><code>Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ</code></p>
        
        <h4>For Gases (Kp):</h4>
        <p><code>Kp = (Pc)ᶜ(Pd)ᵈ / (Pa)ᵃ(Pb)ᵇ</code></p>
        
        <h4>Relation:</h4>
        <p><code>Kp = Kc(RT)^Δn</code></p>
        <p>Where Δn = (c + d) - (a + b)</p>
        
        <h4>2.4 Significance of K</h4>
        <ul>
            <li><strong>K >> 1:</strong> Products favored</li>
            <li><strong>K << 1:</strong> Reactants favored</li>
            <li><strong>K ≈ 1:</strong> Both present in significant amounts</li>
        </ul>
        
        <h4>2.5 Reaction Quotient (Q)</h4>
        <p>Same expression as K but for non-equilibrium state.</p>
        
        <ul>
            <li><strong>Q < K:</strong> Forward reaction proceeds</li>
            <li><strong>Q > K:</strong> Backward reaction proceeds</li>
            <li><strong>Q = K:</strong> System at equilibrium</li>
        </ul>
        
        <h4>2.6 Le Chatelier's Principle</h4>
        <p>If stress is applied to equilibrium, system shifts to relieve stress.</p>
        
        <h4>Effect of Concentration</h4>
        <ul>
            <li>Increase reactant → shifts right</li>
            <li>Increase product → shifts left</li>
            <li>Decrease reactant → shifts left</li>
            <li>Decrease product → shifts right</li>
        </ul>
        
        <h4>Effect of Pressure (for gases)</h4>
        <ul>
            <li>Increase pressure → shifts to side with fewer moles</li>
            <li>Decrease pressure → shifts to side with more moles</li>
            <li>No effect if Δn = 0</li>
        </ul>
        
        <h4>Effect of Temperature</h4>
        <ul>
            <li><strong>Exothermic (ΔH < 0):</strong>
                <ul>
                    <li>Increase T → shifts left (K decreases)</li>
                    <li>Decrease T → shifts right (K increases)</li>
                </ul>
            </li>
            <li><strong>Endothermic (ΔH > 0):</strong>
                <ul>
                    <li>Increase T → shifts right (K increases)</li>
                    <li>Decrease T → shifts left (K decreases)</li>
                </ul>
            </li>
        </ul>
        
        <h4>Effect of Catalyst</h4>
        <p>No effect on equilibrium position, only speeds up attainment.</p>
        
        <h4>2.7 Ionic Equilibrium</h4>
        
        <h4>Acids and Bases</h4>
        
        <h4>Arrhenius Theory:</h4>
        <ul>
            <li>Acid: Produces H⁺ in water</li>
            <li>Base: Produces OH⁻ in water</li>
        </ul>
        
        <h4>Bronsted-Lowry Theory:</h4>
        <ul>
            <li>Acid: Proton donor</li>
            <li>Base: Proton acceptor</li>
        </ul>
        
        <h4>Lewis Theory:</h4>
        <ul>
            <li>Acid: Electron pair acceptor</li>
            <li>Base: Electron pair donor</li>
        </ul>
        
        <h4>pH Scale</h4>
        <p><code>pH = -log[H⁺]</code></p>
        <p><code>pOH = -log[OH⁻]</code></p>
        <p><code>pH + pOH = 14</code> (at 25°C)</p>
        
        <h4>For Water:</h4>
        <p><code>Kw = [H⁺][OH⁻] = 10⁻¹⁴</code> (at 25°C)</p>
        
        <h4>Weak Acid Equilibrium:</h4>
        <p>HA ⇌ H⁺ + A⁻</p>
        <p><code>Ka = [H⁺][A⁻]/[HA]</code></p>
        
        <h4>Weak Base Equilibrium:</h4>
        <p>BOH ⇌ B⁺ + OH⁻</p>
        <p><code>Kb = [B⁺][OH⁻]/[BOH]</code></p>
        
        <h4>Relation:</h4>
        <p><code>Ka × Kb = Kw</code></p>
        
        <h4>2.8 Buffer Solutions</h4>
        <p>Solutions that resist change in pH on addition of small amounts of acid/base.</p>
        
        <h4>Types:</h4>
        <ul>
            <li><strong>Acidic Buffer:</strong> Weak acid + its salt (CH₃COOH + CH₃COONa)</li>
            <li><strong>Basic Buffer:</strong> Weak base + its salt (NH₄OH + NH₄Cl)</li>
        </ul>
        
        <h4>Henderson-Hasselbalch Equation:</h4>
        <p>For acidic buffer:</p>
        <p><code>pH = pKa + log([Salt]/[Acid])</code></p>
        
        <p>For basic buffer:</p>
        <p><code>pOH = pKb + log([Salt]/[Base])</code></p>
        
        <h4>2.9 Solubility Equilibrium</h4>
        
        <h4>Solubility Product (Ksp):</h4>
        <p>For: AxBy ⇌ xA^y+ + yB^x-</p>
        <p><code>Ksp = [A^y+]ˣ[B^x-]ʸ</code></p>
        
        <h4>Precipitation:</h4>
        <ul>
            <li>If ionic product > Ksp: Precipitation occurs</li>
            <li>If ionic product < Ksp: No precipitation</li>
            <li>If ionic product = Ksp: Saturated solution</li>
        </ul>
        
        <h3>Practice Problems</h3>
        
        <p><strong>Problem 1:</strong> For first order reaction, k = 0.693 min⁻¹. Find half-life.</p>
        <p><strong>Solution:</strong></p>
        <p>t₁/₂ = 0.693/k = 0.693/0.693 = 1 minute</p>
        
        <p><strong>Problem 2:</strong> For N₂ + 3H₂ ⇌ 2NH₃, Kc = 0.5. Find Kp at 400 K.</p>
        <p><strong>Solution:</strong></p>
        <p>Δn = 2 - (1 + 3) = -2</p>
        <p>Kp = Kc(RT)^Δn = 0.5(0.082 × 400)^(-2)</p>
        <p>Kp = 0.5/(32.8)² = 4.65 × 10⁻⁴</p>
        
        <p><strong>Problem 3:</strong> [H⁺] = 10⁻⁵ M. Find pH and pOH.</p>
        <p><strong>Solution:</strong></p>
        <p>pH = -log(10⁻⁵) = 5</p>
        <p>pOH = 14 - 5 = 9</p>
        
        <p><strong>Problem 4:</strong> For weak acid, Ka = 10⁻⁵. Find Kb of conjugate base.</p>
        <p><strong>Solution:</strong></p>
        <p>Ka × Kb = Kw</p>
        <p>Kb = 10⁻¹⁴/10⁻⁵ = 10⁻⁹</p>
        
        <p><strong>Problem 5:</strong> Ksp of AgCl = 10⁻¹⁰. Find solubility.</p>
        <p><strong>Solution:</strong></p>
        <p>AgCl ⇌ Ag⁺ + Cl⁻</p>
        <p>Ksp = [Ag⁺][Cl⁻] = s²</p>
        <p>s = √(10⁻¹⁰) = 10⁻⁵ M</p>
        
        <h3>Important Formulas Summary</h3>
        
        <h4>Kinetics:</h4>
        <ul>
            <li>Zero order: [A] = [A]₀ - kt</li>
            <li>First order: ln[A] = ln[A]₀ - kt</li>
            <li>Second order: 1/[A] = 1/[A]₀ + kt</li>
            <li>Arrhenius: k = Ae^(-Ea/RT)</li>
        </ul>
        
        <h4>Equilibrium:</h4>
        <ul>
            <li>Kp = Kc(RT)^Δn</li>
            <li>pH = -log[H⁺]</li>
            <li>pH + pOH = 14</li>
            <li>Ka × Kb = Kw</li>
            <li>pH = pKa + log([Salt]/[Acid])</li>
        </ul>
        
        <h3>Key Points</h3>
        <ul>
            <li>Order determined experimentally</li>
            <li>Molecularity always integer</li>
            <li>Catalyst doesn't change K</li>
            <li>K depends only on temperature</li>
            <li>Le Chatelier: system opposes stress</li>
            <li>Buffer resists pH change</li>
            <li>Ksp for sparingly soluble salts</li>
        </ul>
    `
},
{
    id: 10,
    title: "Electrochemistry - Cells and Electrolysis",
    description: "Galvanic cells, electrolytic cells, Nernst equation, conductance and Faraday's laws",
    class: "12",
    date: "2024-02-20",
    views: 1780,
    tags: ["electrochemistry", "cells", "electrolysis", "nernst"],
    content: `
        <h2>Electrochemistry</h2>
        
        <h3>Chapter 1: Electrochemical Cells</h3>
        
        <h4>1.1 Introduction</h4>
        <p>Electrochemistry deals with interconversion of chemical and electrical energy.</p>
        
        <h4>Types of Cells:</h4>
        <ul>
            <li><strong>Galvanic/Voltaic Cell:</strong> Chemical → Electrical energy</li>
            <li><strong>Electrolytic Cell:</strong> Electrical → Chemical energy</li>
        </ul>
        
        <h4>1.2 Galvanic Cell</h4>
        <p>Spontaneous redox reaction produces electricity.</p>
        
        <h4>Example: Daniell Cell</h4>
        <p><strong>Anode (oxidation):</strong> Zn → Zn²⁺ + 2e⁻</p>
        <p><strong>Cathode (reduction):</strong> Cu²⁺ + 2e⁻ → Cu</p>
        <p><strong>Overall:</strong> Zn + Cu²⁺ → Zn²⁺ + Cu</p>
        
        <h4>Cell Representation:</h4>
        <p>Zn | Zn²⁺ (1M) || Cu²⁺ (1M) | Cu</p>
        
        <h4>Conventions:</h4>
        <ul>
            <li>Anode (oxidation) on left</li>
            <li>Cathode (reduction) on right</li>
            <li>Single line (|) = phase boundary</li>
            <li>Double line (||) = salt bridge</li>
        </ul>
        
        <h4>1.3 Electrode Potential</h4>
        <p>Tendency of electrode to lose or gain electrons.</p>
        
        <h4>Standard Electrode Potential (E°):</h4>
        <p>Measured at 25°C, 1 atm, 1 M concentration.</p>
        
        <h4>Standard Hydrogen Electrode (SHE):</h4>
        <p>Reference electrode with E° = 0.00 V</p>
        <p>2H⁺ + 2e⁻ ⇌ H₂</p>
        
        <h4>1.4 EMF of Cell</h4>
        <p><code>E°cell = E°cathode - E°anode</code></p>
        <p><code>E°cell = E°reduction - E°oxidation</code></p>
        
        <h4>For Daniell Cell:</h4>
        <p>E°cell = E°Cu²⁺/Cu - E°Zn²⁺/Zn</p>
        <p>E°cell = 0.34 - (-0.76) = 1.10 V</p>
        
        <h4>1.5 Nernst Equation</h4>
        <p>Relates EMF to concentration.</p>
        
        <h4>For General Reaction:</h4>
        <p>aA + bB → cC + dD</p>
        
        <p><code>E = E° - (RT/nF) ln Q</code></p>
        <p><code>E = E° - (0.0591/n) log Q</code> (at 25°C)</p>
        
        <p>Where:</p>
        <ul>
            <li>R = 8.314 J K⁻¹ mol⁻¹</li>
            <li>T = temperature (K)</li>
            <li>n = number of electrons</li>
            <li>F = 96500 C mol⁻¹ (Faraday constant)</li>
            <li>Q = reaction quotient</li>
        </ul>
        
        <h4>For Single Electrode:</h4>
        <p>M^n+ + ne⁻ → M</p>
        <p><code>E = E° - (0.0591/n) log(1/[M^n+])</code></p>
        <p><code>E = E° + (0.0591/n) log[M^n+]</code></p>
        
        <h4>1.6 Gibbs Energy and EMF</h4>
        <p><code>ΔG = -nFE</code></p>
        <p><code>ΔG° = -nFE°</code></p>
        
        <h4>Spontaneity:</h4>
        <ul>
            <li>E° > 0: ΔG° < 0 (spontaneous)</li>
            <li>E° < 0: ΔG° > 0 (non-spontaneous)</li>
            <li>E° = 0: ΔG° = 0 (equilibrium)</li>
        </ul>
        
        <h4>1.7 Equilibrium Constant</h4>
        <p>At equilibrium, E = 0:</p>
        <p><code>E° = (0.0591/n) log K</code></p>
        <p><code>log K = nE°/0.0591</code></p>
        
        <h4>1.8 Types of Electrodes</h4>
        
        <h4>Gas Electrode</h4>
        <p>Example: H₂ | H⁺ (Pt)</p>
        <p>2H⁺ + 2e⁻ ⇌ H₂</p>
        
        <h4>Metal-Metal Ion Electrode</h4>
        <p>Example: Zn | Zn²⁺</p>
        <p>Zn²⁺ + 2e⁻ ⇌ Zn</p>
        
        <h4>Metal-Insoluble Salt Electrode</h4>
        <p>Example: Ag | AgCl | Cl⁻ (Calomel electrode)</p>
        <p>AgCl + e⁻ ⇌ Ag + Cl⁻</p>
        
        <h4>Redox Electrode</h4>
        <p>Example: Pt | Fe²⁺, Fe³⁺</p>
        <p>Fe³⁺ + e⁻ ⇌ Fe²⁺</p>
        
        <h3>Chapter 2: Conductance</h3>
        
        <h4>2.1 Electrical Conductance</h4>
        <p>Ability to conduct electricity.</p>
        
        <h4>Conductance (G):</h4>
        <p><code>G = 1/R</code></p>
        <p>Unit: Siemens (S) or mho (℧)</p>
        
        <h4>Conductivity (κ):</h4>
        <p><code>κ = G × (l/A)</code></p>
        <p>Unit: S m⁻¹ or S cm⁻¹</p>
        
        <h4>2.2 Molar Conductivity (Λm)</h4>
        <p><code>Λm = κ/c</code></p>
        
        <p>Where c = concentration (mol m⁻³)</p>
        <p>Unit: S m² mol⁻¹</p>
        
        <h4>Variation with Concentration:</h4>
        <ul>
            <li><strong>Strong electrolytes:</strong> Λm increases slightly with dilution</li>
            <li><strong>Weak electrolytes:</strong> Λm increases sharply with dilution</li>
        </ul>
        
        <h4>2.3 Kohlrausch's Law</h4>
        <p>At infinite dilution, molar conductivity is sum of individual ion conductivities.</p>
        
        <p><code>Λ°m = λ°+ + λ°-</code></p>
        
        <h4>Applications:</h4>
        <ol>
            <li>Calculate Λ°m of weak electrolyte</li>
            <li>Calculate degree of dissociation</li>
            <li>Calculate solubility of sparingly soluble salt</li>
        </ol>
        
        <h4>Degree of Dissociation (α):</h4>
        <p><code>α = Λm/Λ°m</code></p>
        
        <h3>Chapter 3: Electrolysis</h3>
        
        <h4>3.1 Electrolytic Cell</h4>
        <p>Non-spontaneous reaction driven by external voltage.</p>
        
        <h4>Differences: Galvanic vs Electrolytic</h4>
        <table>
            <tr>
                <th>Galvanic</th>
                <th>Electrolytic</th>
            </tr>
            <tr>
                <td>Spontaneous</td>
                <td>Non-spontaneous</td>
            </tr>
            <tr>
                <td>Chemical → Electrical</td>
                <td>Electrical → Chemical</td>
            </tr>
            <tr>
                <td>Anode negative</td>
                <td>Anode positive</td>
            </tr>
            <tr>
                <td>Cathode positive</td>
                <td>Cathode negative</td>
            </tr>
        </table>
        
        <h4>3.2 Faraday's Laws of Electrolysis</h4>
        
        <h4>First Law:</h4>
        <p>Mass deposited is proportional to quantity of charge.</p>
        <p><code>m ∝ Q</code></p>
        <p><code>m = ZQ = Zit</code></p>
        
        <p>Where Z = electrochemical equivalent</p>
        
        <h4>Second Law:</h4>
        <p>For same charge, mass deposited is proportional to equivalent weight.</p>
        <p><code>m₁/m₂ = E₁/E₂</code></p>
        
        <h4>Combined Form:</h4>
        <p><code>m = (E × i × t) / F</code></p>
        <p><code>m = (M × i × t) / (n × F)</code></p>
        
        <p>Where:</p>
        <ul>
            <li>E = equivalent weight</li>
            <li>M = molar mass</li>
            <li>n = number of electrons</li>
            <li>F = 96500 C mol⁻¹</li>
        </ul>
        
        <h4>3.3 Products of Electrolysis</h4>
        
        <h4>At Cathode (Reduction):</h4>
        <p>Less positive ion reduced first.</p>
        <p>Order: Metal ions > H⁺ > alkali/alkaline earth metals</p>
        
        <h4>At Anode (Oxidation):</h4>
        <p>More negative ion oxidized first.</p>
        <p>Order: Anions > OH⁻ > oxyanions</p>
        
        <h4>3.4 Applications of Electrolysis</h4>
        
        <h4>1. Electroplating</h4>
        <p>Coating one metal with another.</p>
        <p>Example: Silver plating, gold plating</p>
        
        <h4>2. Electrorefining</h4>
        <p>Purification of metals.</p>
        <p>Example: Copper refining</p>
        
        <h4>3. Extraction of Metals</h4>
        <p>Example: Al from Al₂O₃, Na from NaCl</p>
        
        <h4>4. Production of Chemicals</h4>
        <p>Example: NaOH, Cl₂, H₂ from brine</p>
        
        <h3>Chapter 4: Batteries</h3>
        
        <h4>4.1 Primary Cells</h4>
        <p>Cannot be recharged.</p>
        
        <h4>Dry Cell (Leclanche Cell)</h4>
        <p>Anode: Zn container</p>
        <p>Cathode: Carbon rod + MnO₂</p>
        <p>Electrolyte: NH₄Cl + ZnCl₂ paste</p>
        <p>E = 1.5 V</p>
        
        <h4>4.2 Secondary Cells</h4>
        <p>Can be recharged.</p>
        
        <h4>Lead-Acid Battery</h4>
        <p><strong>Discharge:</strong></p>
        <p>Anode: Pb + SO₄²⁻ → PbSO₄ + 2e⁻</p>
        <p>Cathode: PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O</p>
        <p>E = 2 V per cell</p>
        
        <h4>Lithium-Ion Battery</h4>
        <p>Anode: Graphite (LiC₆)</p>
        <p>Cathode: Metal oxide (LiCoO₂)</p>
        <p>E = 3.7 V</p>
        
        <h4>4.3 Fuel Cells</h4>
        <p>Continuous supply of reactants.</p>
        
        <h4>H₂-O₂ Fuel Cell</h4>
        <p>Anode: 2H₂ + 4OH⁻ → 4H₂O + 4e⁻</p>
        <p>Cathode: O₂ + 2H₂O + 4e⁻ → 4OH⁻</p>
        <p>Overall: 2H₂ + O₂ → 2H₂O</p>
        <p>E = 1.23 V</p>
        
        <h3>Practice Problems</h3>
        
        <p><strong>Problem 1:</strong> Calculate E°cell for: Zn | Zn²⁺ || Ag⁺ | Ag</p>
        <p>Given: E°Zn²⁺/Zn = -0.76 V, E°Ag⁺/Ag = 0.80 V</p>
        <p><strong>Solution:</strong></p>
        <p>E°cell = E°cathode - E°anode</p>
        <p>E°cell = 0.80 - (-0.76) = 1.56 V</p>
        
        <p><strong>Problem 2:</strong> For Cu²⁺ + 2e⁻ → Cu, E° = 0.34 V. Find E when [Cu²⁺] = 0.01 M.</p>
        <p><strong>Solution:</strong></p>
        <p>E = E° + (0.0591/2) log[Cu²⁺]</p>
        <p>E = 0.34 + (0.0591/2) log(0.01)</p>
        <p>E = 0.34 + 0.02955(-2)</p>
        <p>E = 0.34 - 0.0591 = 0.28 V</p>
        
        <p><strong>Problem 3:</strong> Calculate ΔG° for cell with E° = 1.1 V, n = 2.</p>
        <p><strong>Solution:</strong></p>
        <p>ΔG° = -nFE°</p>
        <p>ΔG° = -2 × 96500 × 1.1</p>
        <p>ΔG° = -212300 J = -212.3 kJ</p>
        
        <p><strong>Problem 4:</strong> How much Cu is deposited by 2 A current for 1 hour? (Cu = 63.5)</p>
        <p><strong>Solution:</strong></p>
        <p>m = (M × i × t)/(n × F)</p>
        <p>m = (63.5 × 2 × 3600)/(2 × 96500)</p>
        <p>m = 2.37 g</p>
        
        <p><strong>Problem 5:</strong> For weak acid, Λm = 50 S cm² mol⁻¹, Λ°m = 400 S cm² mol⁻¹. Find α.</p>
        <p><strong>Solution:</strong></p>
        <p>α = Λm/Λ°m = 50/400 = 0.125 = 12.5%</p>
        
        <h3>Important Formulas Summary</h3>
        <ul>
            <li>E°cell = E°cathode - E°anode</li>
            <li>Nernst: E = E° - (0.0591/n) log Q</li>
            <li>ΔG° = -nFE°</li>
            <li>log K = nE°/0.0591</li>
            <li>Λm = κ/c</li>
            <li>α = Λm/Λ°m</li>
            <li>m = (M × i × t)/(n × F)</li>
        </ul>
        
        <h3>Key Points</h3>
        <ul>
            <li>Galvanic: spontaneous, produces electricity</li>
            <li>Electrolytic: non-spontaneous, consumes electricity</li>
            <li>SHE: reference electrode, E° = 0</li>
            <li>Positive E°: spontaneous reaction</li>
            <li>Nernst equation: relates E to concentration</li>
            <li>Kohlrausch's law: for infinite dilution</li>
            <li>Faraday's laws: quantitative electrolysis</li>
        </ul>
    `
},
    ],

    // ==================== BIOLOGY NOTES ====================
    biology: [
        {
            id: 11,
            title: "Cell Biology - Structure and Function",
            description: "Cell organelles, membrane structure, and cell division",
            class: "11",
            date: "2024-01-22",
            views: 2100,
            tags: ["cell", "organelles", "mitosis"],
            content: `
                <h2>Cell Biology</h2>
                
                <h3>1. Cell Theory</h3>
                <ul>
                    <li>All living organisms are made of cells</li>
                    <li>Cell is the basic unit of life</li>
                    <li>All cells arise from pre-existing cells</li>
                </ul>
                
                <h3>2. Cell Organelles</h3>
                
                <h4>Nucleus</h4>
                <p>Control center of the cell, contains DNA.</p>
                
                <h4>Mitochondria</h4>
                <p>Powerhouse of the cell, produces ATP.</p>
                
                <h4>Ribosomes</h4>
                <p>Protein synthesis.</p>
                
                <h4>Endoplasmic Reticulum</h4>
                <ul>
                    <li><strong>Rough ER:</strong> Protein synthesis</li>
                    <li><strong>Smooth ER:</strong> Lipid synthesis</li>
                </ul>
                
                <h4>Golgi Apparatus</h4>
                <p>Packaging and modification of proteins.</p>
                
                <h3>3. Cell Division</h3>
                
                <h4>Mitosis</h4>
                <p>Produces two identical daughter cells.</p>
                <p>Phases: Prophase, Metaphase, Anaphase, Telophase</p>
                
                <h4>Meiosis</h4>
                <p>Produces four non-identical gametes.</p>
                <p>Two divisions: Meiosis I and Meiosis II</p>
            `
        },
        {
            id: 12,
            title: "Genetics and Heredity",
            description: "Mendelian genetics, DNA structure, and inheritance patterns",
            class: "12",
            date: "2024-02-08",
            views: 1890,
            tags: ["genetics", "DNA", "heredity"],
            content: `
                <h2>Genetics</h2>
                
                <h3>1. Mendel's Laws</h3>
                
                <h4>Law of Segregation</h4>
                <p>Each parent contributes one allele for each trait.</p>
                
                <h4>Law of Independent Assortment</h4>
                <p>Genes for different traits are inherited independently.</p>
                
                <h3>2. DNA Structure</h3>
                <p>Double helix structure discovered by Watson and Crick.</p>
                <ul>
                    <li>Made of nucleotides</li>
                    <li>Base pairs: A-T, G-C</li>
                    <li>Sugar-phosphate backbone</li>
                </ul>
                
                <h3>3. Inheritance Patterns</h3>
                <ul>
                    <li><strong>Dominant:</strong> Expressed when present</li>
                    <li><strong>Recessive:</strong> Expressed only when homozygous</li>
                    <li><strong>Codominance:</strong> Both alleles expressed</li>
                </ul>
                
                <h3>Practice Problems</h3>
                <p><strong>Problem 1:</strong> Cross between Tt × Tt. Find offspring ratio.</p>
                <p><strong>Solution:</strong></p>
                <p>TT : Tt : tt = 1 : 2 : 1</p>
                <p>Phenotype ratio = 3 : 1 (Tall : Short)</p>
            `
        }
    ],

    // ==================== MATHEMATICS NOTES ====================
    mathematics: [
        {
            id: 16,
            title: "Calculus - Limits and Continuity",
            description: "Complete guide to limits, continuity, and derivatives",
            class: "11",
            date: "2024-01-12",
            views: 3200,
            tags: ["calculus", "limits", "continuity", "derivatives"],
            content: `
                <h2>Limits and Continuity</h2>
                
                <h3>1. Introduction to Limits</h3>
                <p><strong>Definition:</strong> The limit of a function f(x) as x approaches a is the value that f(x) gets closer to.</p>
                
                <h4>Notation</h4>
                <p><code>lim(x→a) f(x) = L</code></p>
                
                <h3>2. Properties of Limits</h3>
                <h4>Sum Rule</h4>
                <p><code>lim(x→a) [f(x) + g(x)] = L + M</code></p>
                
                <h4>Product Rule</h4>
                <p><code>lim(x→a) [f(x) × g(x)] = L × M</code></p>
                
                <h4>Quotient Rule</h4>
                <p><code>lim(x→a) [f(x) / g(x)] = L / M</code> (if M ≠ 0)</p>
                
                <h3>3. Standard Limits</h3>
                <ul>
                    <li><code>lim(x→0) (sin x)/x = 1</code></li>
                    <li><code>lim(x→0) (1 - cos x)/x = 0</code></li>
                    <li><code>lim(x→0) (eˣ - 1)/x = 1</code></li>
                    <li><code>lim(x→∞) (1 + 1/x)ˣ = e</code></li>
                </ul>
                
                <h3>4. Continuity</h3>
                <p>A function f(x) is continuous at x = a if:</p>
                <ol>
                    <li>f(a) is defined</li>
                    <li>lim(x→a) f(x) exists</li>
                    <li>lim(x→a) f(x) = f(a)</li>
                </ol>
                
                <h3>Practice Problems</h3>
                <p><strong>Problem 1:</strong> Evaluate lim(x→2) (x² - 4)/(x - 2)</p>
                <p><strong>Solution:</strong></p>
                <p>Factor: (x + 2)(x - 2)/(x - 2)</p>
                <p>Cancel: x + 2</p>
                <p>lim(x→2) (x + 2) = 4</p>
            `
        },
        {
            id: 17,
            title: "Trigonometry - Functions and Identities",
            description: "All trigonometric functions, identities, and equations",
            class: "11",
            date: "2024-01-28",
            views: 2850,
            tags: ["trigonometry", "functions", "identities"],
            content: `
                <h2>Trigonometry</h2>
                
                <h3>1. Trigonometric Ratios</h3>
                <ul>
                    <li>sin θ = Opposite / Hypotenuse</li>
                    <li>cos θ = Adjacent / Hypotenuse</li>
                    <li>tan θ = Opposite / Adjacent</li>
                    <li>cot θ = 1 / tan θ</li>
                    <li>sec θ = 1 / cos θ</li>
                    <li>cosec θ = 1 / sin θ</li>
                </ul>
                
                <h3>2. Fundamental Identities</h3>
                <ul>
                    <li>sin²θ + cos²θ = 1</li>
                    <li>1 + tan²θ = sec²θ</li>
                    <li>1 + cot²θ = cosec²θ</li>
                </ul>
                
                <h3>3. Angle Sum Formulas</h3>
                <ul>
                    <li>sin(A + B) = sin A cos B + cos A sin B</li>
                    <li>cos(A + B) = cos A cos B - sin A sin B</li>
                    <li>tan(A + B) = (tan A + tan B) / (1 - tan A tan B)</li>
                </ul>
                
                <h3>4. Double Angle Formulas</h3>
                <ul>
                    <li>sin 2θ = 2 sin θ cos θ</li>
                    <li>cos 2θ = cos²θ - sin²θ</li>
                    <li>tan 2θ = 2 tan θ / (1 - tan²θ)</li>
                </ul>
            `
        },
        {
            id: 18,
            title: "Vectors and 3D Geometry",
            description: "Vector operations, dot product, cross product, and 3D geometry",
            class: "12",
            date: "2024-02-06",
            views: 2450,
            tags: ["vectors", "3d geometry", "operations"],
            content: `
                <h2>Vectors</h2>
                
                <h3>1. Vector Basics</h3>
                <p>A vector has both magnitude and direction.</p>
                <p>Notation: <code>→a</code> or <strong>a</strong></p>
                
                <h3>2. Vector Operations</h3>
                
                <h4>Addition</h4>
                <p>→a + →b = (a₁ + b₁)î + (a₂ + b₂)ĵ + (a₃ + b₃)k̂</p>
                
                <h4>Scalar Multiplication</h4>
                <p>k→a = ka₁î + ka₂ĵ + ka₃k̂</p>
                
                <h3>3. Dot Product</h3>
                <p>→a · →b = |→a| |→b| cos θ</p>
                <p>→a · →b = a₁b₁ + a₂b₂ + a₃b₃</p>
                
                <h3>4. Cross Product</h3>
                <p>→a × →b = |→a| |→b| sin θ n̂</p>
                <p>Magnitude gives area of parallelogram</p>
                
                <h3>Practice Problems</h3>
                <p><strong>Problem 1:</strong> Find →a · →b if →a = 2î + 3ĵ and →b = 4î + 5ĵ</p>
                <p><strong>Solution:</strong></p>
                <p>→a · →b = (2)(4) + (3)(5) = 8 + 15 = 23</p>
            `
        }
    ],

    // ==================== COMPUTER SCIENCE NOTES ====================
    computer: [
        {
            id: 21,
            title: "Data Structures and Algorithms",
            description: "Arrays, linked lists, stacks, queues, trees, and sorting algorithms",
            class: "bachelor",
            date: "2024-01-10",
            views: 3500,
            tags: ["dsa", "algorithms", "data structures"],
            content: `
                <h2>Data Structures and Algorithms</h2>
                
                <h3>1. Arrays</h3>
                <p>Collection of elements stored in contiguous memory.</p>
                
                <h4>Operations</h4>
                <ul>
                    <li>Access: O(1)</li>
                    <li>Search: O(n)</li>
                    <li>Insertion: O(n)</li>
                    <li>Deletion: O(n)</li>
                </ul>
                
                <h3>2. Linked Lists</h3>
                <p>Linear data structure with nodes pointing to next node.</p>
                
                <h4>Types</h4>
                <ul>
                    <li>Singly Linked List</li>
                    <li>Doubly Linked List</li>
                    <li>Circular Linked List</li>
                </ul>
                
                <h3>3. Stacks</h3>
                <p>LIFO (Last In First Out) structure.</p>
                
                <h4>Operations</h4>
                <ul>
                    <li>Push: O(1)</li>
                    <li>Pop: O(1)</li>
                    <li>Peek: O(1)</li>
                </ul>
                
                <h3>4. Queues</h3>
                <p>FIFO (First In First Out) structure.</p>
                
                <h4>Operations</h4>
                <ul>
                    <li>Enqueue: O(1)</li>
                    <li>Dequeue: O(1)</li>
                </ul>
                
                <h3>5. Sorting Algorithms</h3>
                
                <table>
                    <tr>
                        <th>Algorithm</th>
                        <th>Best</th>
                        <th>Average</th>
                        <th>Worst</th>
                    </tr>
                    <tr>
                        <td>Bubble Sort</td>
                        <td>O(n)</td>
                        <td>O(n²)</td>
                        <td>O(n²)</td>
                    </tr>
                    <tr>
                        <td>Merge Sort</td>
                        <td>O(n log n)</td>
                        <td>O(n log n)</td>
                        <td>O(n log n)</td>
                    </tr>
                    <tr>
                        <td>Quick Sort</td>
                        <td>O(n log n)</td>
                        <td>O(n log n)</td>
                        <td>O(n²)</td>
                    </tr>
                </table>
            `
        },
        {
            id: 22,
            title: "Object-Oriented Programming in C++",
            description: "Classes, objects, inheritance, polymorphism, and encapsulation",
            class: "11",
            date: "2024-01-24",
            views: 2980,
            tags: ["oop", "cpp", "programming"],
            content: `
                <h2>Object-Oriented Programming</h2>
                
                <h3>1. Classes and Objects</h3>
                <p>Class is a blueprint, object is an instance.</p>
                
                <pre><code>class Student {
private:
    string name;
    int age;
public:
    void setData(string n, int a) {
        name = n;
        age = a;
    }
    void display() {
        cout << name << " " << age;
    }
};</code></pre>
                
                <h3>2. Four Pillars of OOP</h3>
                
                <h4>Encapsulation</h4>
                <p>Bundling data and methods together.</p>
                
                <h4>Inheritance</h4>
                <p>Acquiring properties from parent class.</p>
                
                <h4>Polymorphism</h4>
                <p>Same function, different behavior.</p>
                
                <h4>Abstraction</h4>
                <p>Hiding implementation details.</p>
            `
        },
        {
            id: 23,
            title: "Database Management Systems",
            description: "SQL, normalization, ER diagrams, and database design",
            class: "12",
            date: "2024-02-04",
            views: 2650,
            tags: ["dbms", "sql", "database"],
            content: `
                <h2>Database Management Systems</h2>
                
                <h3>1. Introduction to DBMS</h3>
                <p>Software for creating and managing databases.</p>
                
                <h3>2. SQL Commands</h3>
                
                <h4>DDL (Data Definition Language)</h4>
                <ul>
                    <li>CREATE</li>
                    <li>ALTER</li>
                    <li>DROP</li>
                </ul>
                
                <h4>DML (Data Manipulation Language)</h4>
                <ul>
                    <li>SELECT</li>
                    <li>INSERT</li>
                    <li>UPDATE</li>
                    <li>DELETE</li>
                </ul>
                
                <h3>3. Normalization</h3>
                <ul>
                    <li>1NF: No repeating groups</li>
                    <li>2NF: No partial dependency</li>
                    <li>3NF: No transitive dependency</li>
                </ul>
                
                <h3>Example Queries</h3>
                <pre><code>-- Create table
CREATE TABLE Students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);

-- Insert data
INSERT INTO Students VALUES (1, 'John', 20);

-- Select data
SELECT * FROM Students WHERE age > 18;</code></pre>
            `
        }
    ],

    // ==================== ACCOUNTANCY NOTES ====================
    accountancy: [
        {
            id: 33,
            title: "Financial Accounting - Journal Entries",
            description: "Complete guide to journal entries, ledger posting, and trial balance",
            class: "11",
            date: "2024-01-14",
            views: 2650,
            tags: ["accounting", "journal", "ledger"],
            content: `
                <h2>Journal Entries</h2>
                
                <h3>1. Double Entry System</h3>
                <p>Every transaction has two aspects - debit and credit.</p>
                
                <h3>2. Golden Rules</h3>
                
                <h4>Personal Account</h4>
                <p>Debit: The receiver</p>
                <p>Credit: The giver</p>
                
                <h4>Real Account</h4>
                <p>Debit: What comes in</p>
                <p>Credit: What goes out</p>
                
                <h4>Nominal Account</h4>
                <p>Debit: All expenses and losses</p>
                <p>Credit: All incomes and gains</p>
                
                <h3>3. Common Entries</h3>
                
                <h4>Capital Introduced</h4>
                <pre>Cash A/c                Dr.     100,000
    To Capital A/c                  100,000
(Being capital introduced)</pre>
                
                <h4>Purchase of Goods</h4>
                <pre>Purchase A/c            Dr.     50,000
    To Cash A/c                     50,000
(Being goods purchased)</pre>
                
                <h4>Sale of Goods</h4>
                <pre>Cash A/c                Dr.     60,000
    To Sales A/c                    60,000
(Being goods sold)</pre>
            `
        },
        {
            id: 34,
            title: "Final Accounts Preparation",
            description: "Trading account, P&L account, and balance sheet",
            class: "12",
            date: "2024-02-02",
            views: 2420,
            tags: ["final accounts", "balance sheet", "p&l"],
            content: `
                <h2>Final Accounts</h2>
                
                <h3>1. Trading Account</h3>
                <p>Shows gross profit or loss.</p>
                
                <h4>Format</h4>
                <table>
                    <tr>
                        <th>Particulars</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <td>Opening Stock</td>
                        <td>XXX</td>
                    </tr>
                    <tr>
                        <td>Purchases</td>
                        <td>XXX</td>
                    </tr>
                    <tr>
                        <td>Less: Closing Stock</td>
                        <td>(XXX)</td>
                    </tr>
                    <tr>
                        <td>Cost of Goods Sold</td>
                        <td>XXX</td>
                    </tr>
                    <tr>
                        <td>Sales</td>
                        <td>XXX</td>
                    </tr>
                    <tr>
                        <td><strong>Gross Profit</strong></td>
                        <td><strong>XXX</strong></td>
                    </tr>
                </table>
                
                <h3>2. Profit & Loss Account</h3>
                <p>Shows net profit or loss.</p>
                
                <h3>3. Balance Sheet</h3>
                <p>Shows financial position on a particular date.</p>
                
                <h4>Format</h4>
                <table>
                    <tr>
                        <th>Liabilities</th>
                        <th>Amount</th>
                        <th>Assets</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <td>Capital</td>
                        <td>XXX</td>
                        <td>Fixed Assets</td>
                        <td>XXX</td>
                    </tr>
                    <tr>
                        <td>Liabilities</td>
                        <td>XXX</td>
                        <td>Current Assets</td>
                        <td>XXX</td>
                    </tr>
                </table>
            `
        }
    ],

    // ==================== ECONOMICS NOTES ====================
    economics: [
        {
            id: 37,
            title: "Microeconomics - Demand and Supply",
            description: "Law of demand, supply, market equilibrium, and elasticity",
            class: "11",
            date: "2024-01-17",
            views: 2320,
            tags: ["microeconomics", "demand", "supply"],
            content: `
                <h2>Demand and Supply</h2>
                
                <h3>1. Law of Demand</h3>
                <p>As price increases, quantity demanded decreases, and vice versa.</p>
                
                <h3>2. Law of Supply</h3>
                <p>As price increases, quantity supplied increases, and vice versa.</p>
                
                <h3>3. Market Equilibrium</h3>
                <p>Point where quantity demanded equals quantity supplied.</p>
                
                <h3>4. Elasticity of Demand</h3>
                <p><code>PED = (% change in Qd) / (% change in Price)</code></p>
                
                <h4>Types</h4>
                <ul>
                    <li>Elastic (Ed > 1)</li>
                    <li>Unit Elastic (Ed = 1)</li>
                    <li>Inelastic (Ed < 1)</li>
                </ul>
                
                <h3>Practice Problems</h3>
                <p><strong>Problem 1:</strong> Price increases from Rs. 10 to Rs. 12, Qd decreases from 100 to 80. Find PED.</p>
                <p><strong>Solution:</strong></p>
                <p>% change in Qd = -20%</p>
                <p>% change in P = 20%</p>
                <p>PED = -20% / 20% = -1 (Unit elastic)</p>
            `
        },
        {
            id: 38,
            title: "Macroeconomics - National Income",
            description: "GDP, GNP, NNP, and national income calculation",
            class: "12",
            date: "2024-02-09",
            views: 2050,
            tags: ["macroeconomics", "gdp", "national income"],
            content: `
                <h2>National Income</h2>
                
                <h3>1. Concepts</h3>
                
                <h4>GDP (Gross Domestic Product)</h4>
                <p>Total value of goods and services produced within a country.</p>
                
                <h4>GNP (Gross National Product)</h4>
                <p>GDP + Net factor income from abroad</p>
                
                <h4>NNP (Net National Product)</h4>
                <p>GNP - Depreciation</p>
                
                <h4>National Income</h4>
                <p>NNP at factor cost</p>
                
                <h3>2. Methods of Calculation</h3>
                <ul>
                    <li>Product Method</li>
                    <li>Income Method</li>
                    <li>Expenditure Method</li>
                </ul>
                
                <h3>3. Formulas</h3>
                <ul>
                    <li>GNP = GDP + NFIA</li>
                    <li>NNP = GNP - Depreciation</li>
                    <li>NI = NNP - Indirect Taxes + Subsidies</li>
                </ul>
            `
        }
    ],

    // ==================== BUSINESS STUDIES NOTES ====================
    business: [
        {
            id: 41,
            title: "Principles of Management",
            description: "Planning, organizing, staffing, directing, and controlling",
            class: "bachelor",
            date: "2024-01-11",
            views: 2580,
            tags: ["management", "principles", "functions"],
            content: `
                <h2>Principles of Management</h2>
                
                <h3>1. Functions of Management</h3>
                
                <h4>Planning</h4>
                <p>Deciding in advance what to do, how to do, when to do, and who will do it.</p>
                
                <h4>Organizing</h4>
                <p>Arranging resources and tasks to achieve objectives.</p>
                
                <h4>Staffing</h4>
                <p>Recruiting, selecting, and training employees.</p>
                
                <h4>Directing</h4>
                <p>Guiding and motivating employees.</p>
                
                <h4>Controlling</h4>
                <p>Monitoring performance and taking corrective action.</p>
                
                <h3>2. Levels of Management</h3>
                <ul>
                    <li>Top Management</li>
                    <li>Middle Management</li>
                    <li>Lower Management</li>
                </ul>
                
                <h3>3. Management Skills</h3>
                <ul>
                    <li>Technical Skills</li>
                    <li>Human Skills</li>
                    <li>Conceptual Skills</li>
                </ul>
            `
        },
        {
            id: 42,
            title: "Marketing Management",
            description: "Marketing mix, segmentation, targeting, and positioning",
            class: "bachelor",
            date: "2024-01-26",
            views: 2340,
            tags: ["marketing", "4p", "segmentation"],
            content: `
                <h2>Marketing Management</h2>
                
                <h3>1. Marketing Mix (4Ps)</h3>
                
                <h4>Product</h4>
                <p>Goods or services offered to customers.</p>
                
                <h4>Price</h4>
                <p>Amount charged for the product.</p>
                
                <h4>Place</h4>
                <p>Distribution channels and locations.</p>
                
                <h4>Promotion</h4>
                <p>Communication to inform and persuade customers.</p>
                
                <h3>2. Market Segmentation</h3>
                <p>Dividing market into distinct groups.</p>
                
                <h4>Bases</h4>
                <ul>
                    <li>Geographic</li>
                    <li>Demographic</li>
                    <li>Psychographic</li>
                    <li>Behavioral</li>
                </ul>
                
                <h3>3. STP Model</h3>
                <ul>
                    <li>Segmentation</li>
                    <li>Targeting</li>
                    <li>Positioning</li>
                </ul>
            `
        }
    ],

    // ==================== ENGLISH NOTES ====================
    english: [
        {
            id: 26,
            title: "Grammar Essentials - Tenses",
            description: "Complete guide to all English tenses with examples",
            class: "11",
            date: "2024-01-16",
            views: 2450,
            tags: ["grammar", "tenses", "english"],
            content: `
                <h2>English Tenses</h2>
                
                <h3>1. Present Tense</h3>
                
                <h4>Simple Present</h4>
                <p>Used for habitual actions and universal truths.</p>
                <p>Example: I study every day.</p>
                
                <h4>Present Continuous</h4>
                <p>Used for ongoing actions.</p>
                <p>Example: I am studying now.</p>
                
                <h4>Present Perfect</h4>
                <p>Used for completed actions with present relevance.</p>
                <p>Example: I have studied this chapter.</p>
                
                <h3>2. Past Tense</h3>
                
                <h4>Simple Past</h4>
                <p>Used for completed actions in the past.</p>
                <p>Example: I studied yesterday.</p>
                
                <h4>Past Continuous</h4>
                <p>Used for ongoing actions in the past.</p>
                <p>Example: I was studying at 8 PM.</p>
                
                <h3>3. Future Tense</h3>
                
                <h4>Simple Future</h4>
                <p>Used for future actions.</p>
                <p>Example: I will study tomorrow.</p>
            `
        },
        {
            id: 27,
            title: "Essay Writing Techniques",
            description: "How to write effective essays and compositions",
            class: "12",
            date: "2024-02-03",
            views: 2180,
            tags: ["essay", "writing", "composition"],
            content: `
                <h2>Essay Writing</h2>
                
                <h3>1. Structure</h3>
                
                <h4>Introduction</h4>
                <ul>
                    <li>Hook the reader</li>
                    <li>Provide background</li>
                    <li>State thesis</li>
                </ul>
                
                <h4>Body Paragraphs</h4>
                <ul>
                    <li>Topic sentence</li>
                    <li>Supporting details</li>
                    <li>Examples</li>
                    <li>Concluding sentence</li>
                </ul>
                
                <h4>Conclusion</h4>
                <ul>
                    <li>Restate thesis</li>
                    <li>Summarize main points</li>
                    <li>Final thought</li>
                </ul>
                
                <h3>2. Types of Essays</h3>
                <ul>
                    <li>Narrative</li>
                    <li>Descriptive</li>
                    <li>Expository</li>
                    <li>Argumentative</li>
                </ul>
            `
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = notesDatabase;
}