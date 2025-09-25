// NeuroAI JavaScript - 3D Animations and Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Smooth scrolling for navigation links
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

    // Hero Section Animations
    function initHeroAnimations() {
        // Hero title fade in with neon glow
        gsap.fromTo('.hero-title', {
            opacity: 0,
            y: 50,
            scale: 0.8
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out',
            delay: 0.5
        });

        // Hero subtitle fade in
        gsap.fromTo('.hero-subtitle', {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            delay: 1
        });

        // Floating brain animation enhancement
        gsap.to('.floating-animation', {
            y: -20,
            rotation: 5,
            duration: 3,
            ease: 'power2.inOut',
            yoyo: true,
            repeat: -1
        });

        // Button hover ripple effects
        document.querySelectorAll('.ripple-effect').forEach(button => {
            button.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            button.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            button.addEventListener('click', function(e) {
                // Create ripple effect
                const rect = this.getBoundingClientRect();
                const ripple = document.createElement('span');
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(0, 212, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    pointer-events: none;
                    z-index: 1;
                `;

                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);

                gsap.to(ripple, {
                    scale: 2,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    onComplete: () => ripple.remove()
                });
            });
        });
    }

    // About Section Animations
    function initAboutAnimations() {
        // 3D image rotation on scroll
        gsap.to('.about-image img', {
            rotationY: 15,
            rotationX: 5,
            scale: 1.05,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.about-image',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });

        // Text fade in from right
        gsap.fromTo('.about-text', {
            opacity: 0,
            x: 50
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.about-text',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        // List items animate in sequence
        gsap.fromTo('.about-text li', {
            opacity: 0,
            x: 30
        }, {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.about-text ul',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Features Section Animations
    function initFeaturesAnimations() {
        // Feature cards slide in sequentially with 3D effects
        gsap.fromTo('.feature-card', {
            opacity: 0,
            y: 80,
            rotationY: -15
        }, {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#features',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });

        // Enhanced hover effects for feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    rotationY: 10,
                    rotationX: 5,
                    z: 50,
                    scale: 1.05,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    rotationY: 0,
                    rotationX: 0,
                    z: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });
        });
    }

    // How It Works Section Animations
    function initHowItWorksAnimations() {
        // Steps animate in one by one
        gsap.fromTo('.step-card', {
            opacity: 0,
            y: 50,
            scale: 0.8
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.3,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '#how-it-works',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });

        // Progress bar animation
        gsap.fromTo('.progress-bar', {
            scaleX: 0
        }, {
            scaleX: 1,
            duration: 2,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '.progress-bar',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Video Section Animations
    function initVideoAnimations() {
        // Video container fade in with scale
        gsap.fromTo('.video-container', {
            opacity: 0,
            scale: 0.8,
            y: 30
        }, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#video',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });

        // Pulsing play button effect (if custom play button exists)
        const playButton = document.querySelector('.play-button');
        if (playButton) {
            gsap.to(playButton, {
                scale: 1.1,
                duration: 1,
                ease: 'power2.inOut',
                yoyo: true,
                repeat: -1
            });
        }
    }

    // Pricing Section Animations
    function initPricingAnimations() {
        // Pricing cards pop up with 3D effects
        gsap.fromTo('.pricing-card', {
            opacity: 0,
            y: 60,
            rotationX: -20
        }, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '#pricing',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });

        // Enhanced 3D hover effects for pricing cards
        document.querySelectorAll('.pricing-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    rotationY: 5,
                    rotationX: 5,
                    z: 30,
                    scale: 1.02,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    rotationY: 0,
                    rotationX: 0,
                    z: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });
        });
    }

    // Testimonials Carousel
    function initTestimonialsCarousel() {
        const testimonials = [
            {
                name: 'John Smith',
                position: 'CEO, TechCorp',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                text: '"NeuroAI has revolutionized our business operations. We\'ve seen a 300% increase in efficiency since implementing their AI workflows."'
            },
            {
                name: 'Sarah Johnson',
                position: 'CTO, InnovateLabs',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                text: '"The predictive analytics feature has transformed how we make business decisions. Highly recommended for any tech company."'
            },
            {
                name: 'Michael Chen',
                position: 'Founder, StartupXYZ',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                text: '"NeuroAI\'s seamless integrations saved us months of development time. The ROI has been incredible."'
            }
        ];

        let currentTestimonial = 0;
        const testimonialSlide = document.querySelector('.testimonial-slide');

        function updateTestimonial() {
            const testimonial = testimonials[currentTestimonial];
            testimonialSlide.innerHTML = `
                <div class="flex items-center mb-6">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-16 h-16 rounded-full mr-4">
                    <div>
                        <h4 class="font-semibold">${testimonial.name}</h4>
                        <p class="text-gray-400">${testimonial.position}</p>
                    </div>
                </div>
                <p class="text-lg italic">${testimonial.text}</p>
                <div class="flex text-yellow-400 mt-4">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            `;

            gsap.fromTo(testimonialSlide, {
                opacity: 0,
                x: 50
            }, {
                opacity: 1,
                x: 0,
                duration: 0.6,
                ease: 'power2.out'
            });

            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        }

        // Auto-scroll testimonials
        setInterval(updateTestimonial, 5000);

        // Initial animation
        gsap.fromTo('.testimonial-slide', {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#testimonials',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Contact Section Animations
    function initContactAnimations() {
        // Form inputs glow effect on focus
        document.querySelectorAll('.glow-on-focus').forEach(input => {
            input.addEventListener('focus', function() {
                gsap.to(this, {
                    boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
                    borderColor: '#00d4ff',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            input.addEventListener('blur', function() {
                gsap.to(this, {
                    boxShadow: '0 0 0 rgba(0, 212, 255, 0)',
                    borderColor: '#374151',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        // Contact form animation
        gsap.fromTo('.contact-form', {
            opacity: 0,
            x: -50
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });

        // Form submission with animation
        const contactForm = document.querySelector('.contact-form');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formEntries = Object.fromEntries(formData);
            
            // Animate submit button
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            gsap.to(submitBtn, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut'
            });
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = '#10b981';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 1500);
        });
    }

    // Footer Animations
    function initFooterAnimations() {
        // Footer slide up animation
        gsap.fromTo('footer', {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: 'footer',
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        });

        // Social icons glow on hover
        document.querySelectorAll('.social-icon').forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    scale: 1.2,
                    textShadow: '0 0 15px currentColor',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            icon.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    scale: 1,
                    textShadow: '0 0 0 currentColor',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }

    // Parallax Background Effects
    function initParallaxEffects() {
        // Parallax scrolling for background images
        gsap.utils.toArray('.parallax-bg').forEach(bg => {
            gsap.to(bg, {
                yPercent: -50,
                ease: 'none',
                scrollTrigger: {
                    trigger: bg,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });
    }

    // Navbar Background on Scroll
    function initNavbarAnimation() {
        const navbar = document.querySelector('nav');
        
        ScrollTrigger.create({
            start: 'top -80',
            end: 99999,
            toggleClass: {
                className: 'bg-black bg-opacity-95 backdrop-blur-md shadow-lg',
                targets: navbar
            }
        });
    }

    // Mobile Menu Toggle
    function initMobileMenu() {
        const menuToggle = document.querySelector('.md\\:hidden button');
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'md:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 backdrop-blur-sm hidden';
        mobileMenu.innerHTML = `
            <div class="px-6 py-4 space-y-4">
                <a href="#home" class="block hover:text-blue-400 transition-colors">Home</a>
                <a href="#about" class="block hover:text-blue-400 transition-colors">About</a>
                <a href="#features" class="block hover:text-blue-400 transition-colors">Features</a>
                <a href="#pricing" class="block hover:text-blue-400 transition-colors">Pricing</a>
                <a href="#contact" class="block hover:text-blue-400 transition-colors">Contact</a>
            </div>
        `;
        
        menuToggle.parentElement.appendChild(mobileMenu);
        
        menuToggle.addEventListener('click', function() {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                gsap.fromTo(mobileMenu, {
                    opacity: 0,
                    y: -20
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            } else {
                gsap.to(mobileMenu, {
                    opacity: 0,
                    y: -20,
                    duration: 0.3,
                    ease: 'power2.out',
                    onComplete: () => mobileMenu.classList.add('hidden')
                });
            }
        });
    }

    // Loading Animation
    function initLoadingAnimation() {
        // Create loading overlay
        const loadingOverlay = document.createElement('div');
        loadingOverlay.className = 'fixed inset-0 bg-black z-50 flex items-center justify-center';
        loadingOverlay.innerHTML = `
            <div class="text-center">
                <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <div class="text-xl font-semibold neon-glow">NeuroAI</div>
                <div class="text-gray-400">Loading Intelligence...</div>
            </div>
        `;
        
        document.body.appendChild(loadingOverlay);
        
        // Remove loading overlay after page load
        window.addEventListener('load', () => {
            gsap.to(loadingOverlay, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out',
                onComplete: () => loadingOverlay.remove()
            });
        });
    }

    // Performance Optimizations
    function initPerformanceOptimizations() {
        // Lazy load images
        const images = document.querySelectorAll('img[src*="unsplash"]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('opacity-0');
                    img.onload = () => {
                        gsap.to(img, {
                            opacity: 1,
                            duration: 0.5,
                            ease: 'power2.out'
                        });
                    };
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
        
        // Throttle scroll events
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) {
                cancelAnimationFrame(scrollTimeout);
            }
            scrollTimeout = requestAnimationFrame(() => {
                // Custom scroll handling if needed
            });
        });
    }

    // Initialize all animations and interactions
    function init() {
        initLoadingAnimation();
        initHeroAnimations();
        initAboutAnimations();
        initFeaturesAnimations();
        initHowItWorksAnimations();
        initVideoAnimations();
        initPricingAnimations();
        initTestimonialsCarousel();
        initContactAnimations();
        initFooterAnimations();
        initParallaxEffects();
        initNavbarAnimation();
        initMobileMenu();
        initPerformanceOptimizations();
        
        console.log('NeuroAI website initialized successfully! 🚀');
    }

    // Start the show
    init();
});

// Custom cursor effect (optional enhancement)
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: 'power2.out'
        });
    }
});

// Add custom cursor styles
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .custom-cursor {
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(0,212,255,0.8) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
    }
`;
document.head.appendChild(cursorStyle);

// Create custom cursor element
const customCursor = document.createElement('div');
customCursor.className = 'custom-cursor';
document.body.appendChild(customCursor);