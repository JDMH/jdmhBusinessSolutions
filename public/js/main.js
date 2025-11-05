// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Constants
    const NAVBAR_HEIGHT = 70;
    const TOAST_SHOW_DELAY = 10;
    const TOAST_DURATION = 5000;
    const TOAST_FADE_DURATION = 300;

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - NAVBAR_HEIGHT;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Show success message (in a real app, this would send to a server)
            showToast('Thank you for your message! We will get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Toast notification function
    function showToast(message, type = 'success') {
        // Remove existing toast if any
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'toast';
        
        const icon = document.createElement('span');
        icon.className = 'toast-icon';
        icon.textContent = type === 'success' ? '✓' : 'ℹ';
        
        const messageEl = document.createElement('span');
        messageEl.className = 'toast-message';
        messageEl.textContent = message;
        
        toast.appendChild(icon);
        toast.appendChild(messageEl);
        document.body.appendChild(toast);
        
        // Trigger animation
        setTimeout(() => toast.classList.add('show'), TOAST_SHOW_DELAY);
        
        // Remove after specified duration
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), TOAST_FADE_DURATION);
        }, TOAST_DURATION);
    }

    // Add scroll effect to navbar
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards and stats
    document.querySelectorAll('.service-card, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
