// Premium IDEKU ADVISORY Website Interactions

document.addEventListener('DOMContentLoaded', function() {
    // Page Loader
    const pageLoader = document.createElement('div');
    pageLoader.className = 'page-loader';
    pageLoader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">
                <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M20 80 L20 20 L35 20 L50 35 L65 20 L80 20 L80 80 L65 80 L65 50 L50 65 L35 50 L35 80 Z"/>
                </svg>
            </div>
            <h4>Loading Excellence...</h4>
        </div>
    `;
    document.body.appendChild(pageLoader);

    // Hide loader after page load
    window.addEventListener('load', function() {
        setTimeout(() => {
            pageLoader.classList.add('hidden');
            setTimeout(() => {
                pageLoader.remove();
            }, 500);
        }, 1000);
    });

    // Enhanced Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animateElements = document.querySelectorAll('.custom-block, .team-member-card, .record-card, .contact-info-wrapper');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Enhanced Service Cards Interaction
    const serviceCards = document.querySelectorAll('.custom-block');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            
            // Add financial icons animation
            const icon = document.createElement('div');
            icon.innerHTML = '<i class="bi-graph-up-arrow"></i>';
            icon.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                color: var(--success-green);
                font-size: 1.5rem;
                opacity: 0;
                animation: fadeInScale 0.5s ease-out forwards;
            `;
            this.appendChild(icon);
            
            setTimeout(() => icon.remove(), 2000);
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px) scale(1)';
        });
    });

    // Enhanced Team Cards with Financial Elements
    const teamCards = document.querySelectorAll('.team-member-card');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add floating financial symbols
            const symbols = ['$', '€', '¥', '£', '%'];
            const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            
            const floatingSymbol = document.createElement('div');
            floatingSymbol.textContent = randomSymbol;
            floatingSymbol.style.cssText = `
                position: absolute;
                top: 20px;
                right: 20px;
                color: var(--premium-gold);
                font-size: 1.2rem;
                font-weight: bold;
                opacity: 0;
                animation: floatUp 2s ease-out forwards;
                pointer-events: none;
            `;
            this.appendChild(floatingSymbol);
            
            setTimeout(() => floatingSymbol.remove(), 2000);
        });
    });

    // Enhanced Search Form
    const searchInput = document.querySelector('#keyword');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.boxShadow = '0 10px 30px rgba(30, 64, 175, 0.2)';
        });

        searchInput.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
            this.parentElement.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });

        // Add search suggestions
        const suggestions = [
            'Financial Planning', 'Tax Preparation', 'Accounting Services', 
            'Business Consulting', 'Payroll Management', 'Audit Services'
        ];

        searchInput.addEventListener('input', function() {
            const value = this.value.toLowerCase();
            if (value.length > 2) {
                const matches = suggestions.filter(s => s.toLowerCase().includes(value));
                // You can implement dropdown suggestions here
            }
        });
    }

    // Enhanced Contact Form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        const formInputs = contactForm.querySelectorAll('.form-control');
        
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateY(-2px)';
                this.style.borderColor = 'var(--primary-blue)';
            });

            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateY(0)';
                if (!this.value) {
                    this.style.borderColor = 'rgba(30, 64, 175, 0.1)';
                }
            });
        });

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = 'var(--success-green)';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    this.reset();
                }, 2000);
            }, 1500);
        });
    }

    // Enhanced Live Chat Button
    const liveChatBtn = document.querySelector('#liveChatBtn');
    if (liveChatBtn) {
        // Add pulsing animation
        setInterval(() => {
            liveChatBtn.style.animation = 'pulse 1s ease-in-out';
            setTimeout(() => {
                liveChatBtn.style.animation = '';
            }, 1000);
        }, 5000);

        liveChatBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (rect.width / 2 - size / 2) + 'px';
            ripple.style.top = (rect.height / 2 - size / 2) + 'px';
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    }

    // Add Financial Background Elements
    function addFinancialElements() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (!section.querySelector('.financial-bg-elements')) {
                const bgElements = document.createElement('div');
                bgElements.className = 'financial-bg-elements';
                
                const icons = ['bi-calculator', 'bi-graph-up', 'bi-currency-dollar', 'bi-pie-chart'];
                for (let i = 0; i < 4; i++) {
                    const icon = document.createElement('i');
                    icon.className = `bi ${icons[i]} financial-icon`;
                    bgElements.appendChild(icon);
                }
                
                section.style.position = 'relative';
                section.appendChild(bgElements);
            }
        });
    }

    addFinancialElements();

    // Enhanced Record Cards Animation
    const recordCards = document.querySelectorAll('.record-card');
    recordCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        
        card.addEventListener('mouseenter', function() {
            const number = this.querySelector('.record-number');
            if (number) {
                const finalValue = parseInt(number.textContent);
                let currentValue = 0;
                const increment = finalValue / 20;
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        number.textContent = finalValue + (number.textContent.includes('+') ? '+' : '');
                        clearInterval(counter);
                    } else {
                        number.textContent = Math.floor(currentValue) + (number.textContent.includes('+') ? '+' : '');
                    }
                }, 50);
            }
        });
    });

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInScale {
            0% { opacity: 0; transform: scale(0.5); }
            100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes floatUp {
            0% { opacity: 0; transform: translateY(0); }
            50% { opacity: 1; transform: translateY(-10px); }
            100% { opacity: 0; transform: translateY(-20px); }
        }
        
        @keyframes ripple {
            to { transform: scale(4); opacity: 0; }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
    `;
    document.head.appendChild(style);

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounced scroll handler
    const debouncedScrollHandler = debounce(function() {
        // Scroll-based animations can be added here
    }, 10);

    window.addEventListener('scroll', debouncedScrollHandler);
});