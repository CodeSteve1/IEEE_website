// Enhanced ECCI6 Conference Website JavaScript - No Notifications Version

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initSmoothScrolling();
    initScrollAnimations();
    initStatsCounter();
    initFormHandling();
    initActiveNavigation();
    initTimelineAnimations();
    initRegistrationButtons();
    initPaperSubmissionInteractions();
    initTemplateDownloadTracking();
    initMapInteractions();
    initEnhancedThemeInteractions();
    initSubmissionGuidelines();
    initEnhancedAnimations();
    initLoadingEffects();
});

// Enhanced Navigation Toggle for Mobile
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Enhanced hamburger menu animation
            const spans = navToggle.querySelectorAll('span');
            if (!isExpanded) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768 && navMenu.classList.contains('active')) {
                   navToggle.click(); // Simulate a click to properly close the menu
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 && navMenu.classList.contains('active') && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.click(); // Simulate a click to properly close
            }
        });
    }
}

// Enhanced Smooth Scrolling (for single-page sections if any remain)
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = target.offsetTop - navbarHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Enhanced Registration button functionality
function initRegistrationButtons() {
    const registerButtons = document.querySelectorAll('a[href*="registration.html"]');
    
    registerButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Enhanced loading state
            const originalText = this.textContent;
            
            this.textContent = 'Loading...';
            this.style.pointerEvents = 'none';
            this.style.opacity = '0.7';
            
            setTimeout(() => {
                window.location.href = this.href;
            }, 500);
        });
    });
}

// Enhanced Paper Submission Interactions
function initPaperSubmissionInteractions() {
    // EasyChair submission button
    const easyChairButton = document.querySelector('a[href*="easychair.org"]');
    if (easyChairButton) {
        easyChairButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show submission guidelines first
            showSubmissionModal();
            
            // Then redirect after user acknowledgment
            // The redirection is handled by the modal's "Proceed" button
        });
    }
    
    // IEEE resource links with tracking
    const ieeeLinks = document.querySelectorAll('a[href*="ieee.org"], a[href*="drive.google.com"], a[href*="overleaf.com"]');
    ieeeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const linkText = this.textContent;
            const linkType = this.href.includes('drive.google.com') ? 'Sample Format' : 
                             this.href.includes('overleaf.com') ? 'LaTeX Template' : 'IEEE Resource';
            
            // Track the click
            console.log(`IEEE Resource accessed: ${linkType} - ${linkText}`);
        });
    });
    
    // Enhanced submission guidelines interaction
    const guidelineCards = document.querySelectorAll('.enhanced-guideline-card');
    guidelineCards.forEach(card => {
        card.addEventListener('click', function() {
            const content = this.querySelector('ul');
            
            if (content) {
                // Highlight the guidelines
                content.style.backgroundColor = 'var(--color-bg-2)';
                content.style.padding = 'var(--space-12)';
                content.style.borderRadius = 'var(--radius-base)';
                content.style.transition = 'all 0.3s ease';
                
                setTimeout(() => {
                    content.style.backgroundColor = '';
                    content.style.padding = '';
                }, 3000);
            }
        });
    });
    
    // Publication info interaction
    const publicationItems = document.querySelectorAll('.enhanced-publication-item');
    publicationItems.forEach(item => {
        item.addEventListener('click', function() {
            // Visual feedback only
            this.style.transform = 'translateX(12px)';
            setTimeout(() => {
                this.style.transform = 'translateX(8px)';
            }, 200);
        });
    });
}

// Enhanced Template Download Tracking
function initTemplateDownloadTracking() {
    const templateButtons = document.querySelectorAll('.enhanced-template-card .btn');
    
    templateButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const templateCard = this.closest('.enhanced-template-card');
            const templateType = templateCard.querySelector('h4').textContent;
            
            // Enhanced visual feedback
            templateCard.style.transform = 'scale(1.05)';
            templateCard.style.boxShadow = 'var(--shadow-lg)';
            
            setTimeout(() => {
                templateCard.style.transform = '';
                templateCard.style.boxShadow = '';
            }, 300);
            
            // Track the download
            console.log(`Template downloaded: ${templateType}`);
            
            // Add download count (in a real app, this would sync with backend)
            const downloadCount = localStorage.getItem(`download_${templateType}`) || 0;
            localStorage.setItem(`download_${templateType}`, parseInt(downloadCount) + 1);
        });
    });
}

// Enhanced Map Interactions
function initMapInteractions() {
    const mapContainer = document.querySelector('.enhanced-map');
    const mapEmbed = document.querySelector('.map-embed');
    
    if (mapContainer && mapEmbed) {
        // Enhanced hover effect for map info items
        const mapInfoItems = document.querySelectorAll('.enhanced-map-info li');
        mapInfoItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'rgba(var(--color-primary-rgb, 33, 128, 141), 0.1)';
                this.style.padding = '8px 12px';
                this.style.borderRadius = '6px';
                this.style.transition = 'all 0.3s ease';
                this.style.borderLeft = '4px solid var(--color-primary)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'transparent';
                this.style.padding = '0';
                this.style.borderLeft = 'none';
            });
        });
    }
}

// Enhanced Theme Interactions
function initEnhancedThemeInteractions() {
    const themeCards = document.querySelectorAll('.enhanced-theme-card');
    
    themeCards.forEach(card => {
        card.addEventListener('click', function() {
            // Enhanced visual feedback
            this.style.transform = 'translateY(-12px) scale(1.02)';
            
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
        
        // Add hover sound effect simulation
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.theme-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.theme-icon');
            if (icon) {
                icon.style.transform = '';
            }
        });
    });
}

// Submission Guidelines Modal System
function initSubmissionGuidelines() {
    // Create modal HTML
    const modalHTML = `
        <div id="submission-modal" class="modal hidden">
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h3>📋 ECCI6 Submission Guidelines</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="guideline-section">
                        <h4>🎯 Quick Checklist Before Submission</h4>
                        <ul>
                            <li>✅ Paper follows IEEE conference format</li>
                            <li>✅ Maximum 6 pages including references</li>
                            <li>✅ PDF format only</li>
                            <li>✅ Author names removed for blind review</li>
                            <li>✅ Abstract is 150-250 words</li>
                            <li>✅ 4-6 keywords provided</li>
                            <li>✅ All references properly formatted</li>
                        </ul>
                    </div>
                    <div class="guideline-section">
                        <h4>📝 Required Documents</h4>
                        <ul>
                            <li>Main paper (PDF format)</li>
                            <li>Copyright form (after acceptance)</li>
                            <li>Camera-ready version (final submission)</li>
                        </ul>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn--primary" id="proceed-to-easychair">Proceed to EasyChair</button>
                    <button class="btn btn--outline" id="review-guidelines-close">Review Guidelines</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to document
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Modal event listeners
    const modal = document.getElementById('submission-modal');
    const modalClose = modal.querySelector('.modal-close');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const proceedButton = document.getElementById('proceed-to-easychair');
    const reviewButton = document.getElementById('review-guidelines-close');

    modalClose.addEventListener('click', closeSubmissionModal);
    modalOverlay.addEventListener('click', closeSubmissionModal);
    proceedButton.addEventListener('click', proceedToEasyChair);
    reviewButton.addEventListener('click', closeSubmissionModal);
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeSubmissionModal();
        }
    });
}

// Modal functions
function showSubmissionModal() {
    const modal = document.getElementById('submission-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeSubmissionModal() {
    const modal = document.getElementById('submission-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function proceedToEasyChair() {
    closeSubmissionModal();
    setTimeout(() => {
        window.open('https://easychair.org/conferences/?conf=ecci6-2026', '_blank');
    }, 500);
}

// Global functions for button clicks
window.showSubmissionGuidelines = function() {
    showSubmissionModal();
}

window.showReviewProcess = function() {
    const reviewInfo = `
        <div class="review-process-info">
            <h4>📊 ECCI6 Review Process</h4>
            <div class="process-steps">
                <div class="step">
                    <span class="step-number">1</span>
                    <div class="step-content">
                        <h5>Initial Screening</h5>
                        <p>Papers are checked for format compliance and scope relevance</p>
                    </div>
                </div>
                <div class="step">
                    <span class="step-number">2</span>
                    <div class="step-content">
                        <h5>Peer Review</h5>
                        <p>Double-blind review by minimum 3 experts in the field</p>
                    </div>
                </div>
                <div class="step">
                    <span class="step-number">3</span>
                    <div class="step-content">
                        <h5>Decision</h5>
                        <p>Accept/Reject decision based on reviewer recommendations</p>
                    </div>
                </div>
                <div class="step">
                    <span class="step-number">4</span>
                    <div class="step-content">
                        <h5>Camera Ready</h5>
                        <p>Final version incorporating reviewer feedback</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    showCustomModal('Review Process', reviewInfo);
}

// Enhanced scroll animations with intersection observer
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.enhanced-card, .patron-card, .committee-member, .enhanced-theme-card, .enhanced-registration-card, .enhanced-stat-card, .enhanced-contact-item, .enhanced-guideline-card, .enhanced-policy-card, .timeline-item, .enhanced-template-card');
    
    // Add fade-in class to elements
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // Enhanced intersection observer with staggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }, index * 50);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Enhanced timeline animations
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animate timeline marker
                const marker = entry.target.querySelector('.timeline-marker');
                if (marker) {
                    marker.style.transform = 'translateY(-50%) scale(1.2)';
                    setTimeout(() => {
                        marker.style.transform = 'translateY(-50%) scale(1)';
                    }, 300);
                }
            }
        });
    }, {
        threshold: 0.3
    });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.2}s`;
        timelineObserver.observe(item);
    });
}

// Enhanced statistics counter animation
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2500; // Longer duration for better effect
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format number with commas and animation
            const formattedNumber = Math.floor(current).toLocaleString();
            element.textContent = formattedNumber;
            
            // Add pulsing effect when reaching target
            if (current === target) {
                element.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 200);
            }
        }, 16);
    };
    
    // Enhanced intersection observer for stats section
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                statNumbers.forEach((stat, index) => {
                    setTimeout(() => {
                        animateCounter(stat);
                    }, index * 200);
                });
            }
        });
    }, {
        threshold: 0.5
    });
    
    const statsSection = document.querySelector('.enhanced-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

// Enhanced form handling with validation
function initFormHandling() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        // Add real-time validation
        const formInputs = contactForm.querySelectorAll('.form-control');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Enhanced validation
            let isValid = true;
            
            if (!name || name.length < 2) {
                showFieldError('name', 'Please enter a valid name (at least 2 characters)');
                isValid = false;
            }
            
            if (!email || !isValidEmail(email)) {
                showFieldError('email', 'Please enter a valid email address');
                isValid = false;
            }
            
            if (!subject || subject.length < 5) {
                showFieldError('subject', 'Please enter a subject (at least 5 characters)');
                isValid = false;
            }
            
            if (!message || message.length < 10) {
                showFieldError('message', 'Please enter a detailed message (at least 10 characters)');
                isValid = false;
            }
            
            if (!isValid) {
                return;
            }
            
            // Enhanced form submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            submitButton.style.opacity = '0.7';
            
            // Simulate API call with progress
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += 10;
                submitButton.textContent = `Sending... ${progress}%`;
                
                if (progress >= 100) {
                    clearInterval(progressInterval);
                    
                    // Success visual feedback
                    submitButton.textContent = '✅ Message Sent!';
                    submitButton.style.backgroundColor = 'var(--color-success)';
                    
                    this.reset();
                    
                    setTimeout(() => {
                        submitButton.textContent = originalText;
                        submitButton.disabled = false;
                        submitButton.style.opacity = '1';
                        submitButton.style.backgroundColor = '';
                    }, 3000);
                }
            }, 150);
        });
    }
}

// Field validation helpers
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('id');
    
    switch(fieldName) {
        case 'name':
            if (!value || value.length < 2) {
                showFieldError(fieldName, 'Name must be at least 2 characters');
                return false;
            }
            break;
        case 'email':
            if (!value || !isValidEmail(value)) {
                showFieldError(fieldName, 'Please enter a valid email address');
                return false;
            }
            break;
        case 'subject':
            if (!value || value.length < 5) {
                showFieldError(fieldName, 'Subject must be at least 5 characters');
                return false;
            }
            break;
        case 'message':
            if (!value || value.length < 10) {
                showFieldError(fieldName, 'Message must be at least 10 characters');
                return false;
            }
            break;
    }
    
    clearFieldError(fieldName);
    return true;
}

function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const existingError = field.parentNode.querySelector('.field-error');
    
    if (existingError) {
        existingError.textContent = message;
    } else {
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.color = 'var(--color-error)';
        errorElement.style.fontSize = 'var(--font-size-sm)';
        errorElement.style.marginTop = 'var(--space-4)';
        field.parentNode.appendChild(errorElement);
    }
    
    field.style.borderColor = 'var(--color-error)';
}

function clearFieldError(fieldName) {
    const field = typeof fieldName === 'string' ? document.getElementById(fieldName) : fieldName;
    const errorElement = field.parentNode.querySelector('.field-error');
    
    if (errorElement) {
        errorElement.remove();
    }
    
    field.style.borderColor = '';
}

// **FIXED** Enhanced active navigation highlighting on scroll
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a.nav-link[href^="#"]');
    const navbar = document.querySelector('.navbar');
    
    if (sections.length === 0 || navLinks.length === 0) return;

    const navbarHeight = navbar ? navbar.offsetHeight : 70;

    const observer = new IntersectionObserver(entries => {
        let activeId = '';
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeId = entry.target.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === `#${activeId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

    }, { 
        rootMargin: `-${navbarHeight}px 0px -${window.innerHeight - navbarHeight - 150}px 0px`,
        threshold: 0.5
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Enhanced animations and effects
function initEnhancedAnimations() {
    // Add staggered animations for cards
    const cardGroups = document.querySelectorAll('.themes-grid, .committee-grid, .template-grid');
    
    cardGroups.forEach(group => {
        const cards = group.querySelectorAll('.enhanced-theme-card, .committee-member, .enhanced-template-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cardsArray = Array.from(cards);
                    cardsArray.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            });
        }, { threshold: 0.2 });
        
        // Initially hide cards
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
        });
        
        observer.observe(group);
    });
}

// Loading effects
function initLoadingEffects() {
    // Add loading skeleton for cards
    const cards = document.querySelectorAll('.enhanced-card, .enhanced-theme-card, .enhanced-template-card');
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });
    
    // Reveal cards with delay
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }, 100);
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showCustomModal(title, content) {
    // Remove existing custom modal if any
    closeCustomModal();

    // Create custom modal
    const modalHTML = `
        <div id="custom-modal" class="modal">
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
                <div class="modal-footer">
                    <button class="btn btn--primary" id="custom-modal-close">Got it!</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    const modal = document.getElementById('custom-modal');
    const modalClose = modal.querySelector('.modal-close');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const gotItButton = document.getElementById('custom-modal-close');
    
    modalClose.addEventListener('click', closeCustomModal);
    modalOverlay.addEventListener('click', closeCustomModal);
    gotItButton.addEventListener('click', closeCustomModal);
    
    document.body.style.overflow = 'hidden';
}

function closeCustomModal() {
    const modal = document.getElementById('custom-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press Escape to close modals
    if (e.key === 'Escape') {
        closeSubmissionModal();
        closeCustomModal();
    }
});

// Page load completion
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate hero content on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Log performance
    const loadTime = performance.now();
    console.log(`🚀 ECCI6 Enhanced Website loaded in ${Math.round(loadTime)}ms`);
    console.log('✅ All enhanced components initialized successfully');
});

// Error handling
window.addEventListener('unhandledrejection', function(event) {
    console.warn('Unhandled promise rejection:', event.reason);
});

// Initialize service worker for better performance (if available)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // In a real implementation, you would register a service worker here
        console.log('Service Worker support detected');
    });
}
