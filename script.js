// ===== Dark Mode Toggle =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.toggle('dark-mode', savedTheme === 'dark');
updateThemeToggle();

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeToggle();
});

function updateThemeToggle() {
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Smooth Scroll Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== Animate on Scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInUp');
            // Optional: unobserve after animation
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all skill items and project cards
document.querySelectorAll('.skill-item, .project-card').forEach(el => {
    el.classList.add('animate__animated');
    observer.observe(el);
});

// ===== Form Submission =====
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(this);
    
    // Simple validation
    const name = this.querySelector('input[placeholder="Your Name"]').value;
    const email = this.querySelector('input[placeholder="Your Email"]').value;
    const subject = this.querySelector('input[placeholder="Subject"]').value;
    const message = this.querySelector('textarea[placeholder="Your Message"]').value;
    
    if (name && email && subject && message) {
        // Show success message
        alert('Thank you for your message! I\'ll get back to you soon.');
        
        // Reset form
        this.reset();
        
        // In a real application, you would send this data to a server
        console.log({
            name: name,
            email: email,
            subject: subject,
            message: message
        });
    } else {
        alert('Please fill in all fields');
    }
});

// ===== Add Scroll Animation to Navbar =====
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===== Animated Counter for Skills (Optional) =====
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                // The animation is handled by CSS
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        counterObserver.observe(bar);
    });
}

animateSkillBars();

// ===== Parallax Effect (Optional) =====
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroImage = document.querySelector('.floating-card');
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
});

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});