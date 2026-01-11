// ==================== ABOUT PAGE ANIMATIONS ====================

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString() + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString() + (element.dataset.suffix || '');
        }
    }, 16);
}

// Observe stat cards and trigger animation
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const statNumber = entry.target.querySelector('.stat-number');
            const targetValue = parseInt(statNumber.textContent.replace(/[^0-9]/g, ''));
            const suffix = statNumber.textContent.replace(/[0-9,]/g, '');
            
            statNumber.dataset.suffix = suffix;
            animateCounter(statNumber, targetValue);
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

// Observe all stat cards
document.querySelectorAll('.stat-card').forEach(card => {
    statObserver.observe(card);
});

// ==================== VALUE CARDS HOVER EFFECT ====================
document.querySelectorAll('.value-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-5px) scale(1)';
    });
});

// ==================== ABOUT IMAGE PLACEHOLDER ANIMATION ====================
const aboutImage = document.querySelector('.about-image-placeholder');
if (aboutImage) {
    let rotation = 0;
    setInterval(() => {
        rotation += 1;
        aboutImage.querySelector('i').style.transform = `rotate(${rotation}deg)`;
    }, 50);
}