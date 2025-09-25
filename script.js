<<<<<<< HEAD
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
=======
// MetaCity - 3D Interactive Website with Three.js and GSAP

class MetaCityApp {
    constructor() {
        this.scenes = {};
        this.renderers = {};
        this.cameras = {};
        this.controls = {};
        this.isLoaded = false;
        
        this.init();
    }

    init() {
        this.initGSAP();
        this.initThreeJS();
        this.initAnimations();
        this.initInteractivity();
        this.initCalculator();
        this.handleResize();
        
        // Initialize after DOM is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }

    initGSAP() {
        gsap.registerPlugin(ScrollTrigger);
        
        // Set default easing
        gsap.defaults({
            duration: 1,
            ease: "power2.out"
        });
    }

    initThreeJS() {
        this.initHeroScene();
        this.initBuildingScene();
        this.initCityScene();
        this.initPropertyPreviews();
    }

    initHeroScene() {
        const canvas = document.getElementById('hero-canvas');
        if (!canvas) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);

        // Create futuristic city skyline
        this.createCityscape(scene);
        
        // Camera position
        camera.position.set(0, 5, 20);
        camera.lookAt(0, 0, 0);

        // Store references
        this.scenes.hero = scene;
        this.cameras.hero = camera;
        this.renderers.hero = renderer;

        // Animate camera
        this.animateHeroCamera();
    }

    createCityscape(scene) {
        const buildings = [];
        const colors = [0x00FFFF, 0xFF006E, 0x8B5CF6, 0x0066FF];
        
        // Create multiple buildings
        for (let i = 0; i < 15; i++) {
            const height = Math.random() * 8 + 2;
            const width = Math.random() * 2 + 0.5;
            const depth = Math.random() * 2 + 0.5;
            
            const geometry = new THREE.BoxGeometry(width, height, depth);
            const material = new THREE.MeshPhongMaterial({
                color: colors[Math.floor(Math.random() * colors.length)],
                transparent: true,
                opacity: 0.8,
                emissive: colors[Math.floor(Math.random() * colors.length)],
                emissiveIntensity: 0.1
            });
            
            const building = new THREE.Mesh(geometry, material);
            building.position.x = (Math.random() - 0.5) * 40;
            building.position.y = height / 2;
            building.position.z = (Math.random() - 0.5) * 30;
            
            buildings.push(building);
            scene.add(building);
        }

        // Add lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0x00FFFF, 0.8);
        directionalLight.position.set(5, 10, 5);
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0xFF006E, 1, 100);
        pointLight.position.set(-10, 10, 10);
        scene.add(pointLight);

        return buildings;
    }

    animateHeroCamera() {
        const camera = this.cameras.hero;
        
        gsap.to(camera.position, {
            duration: 20,
            x: "+=5",
            z: "+=10",
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });

        gsap.to(camera.rotation, {
            duration: 15,
            y: "+=0.3",
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });
    }

    initBuildingScene() {
        const canvas = document.getElementById('building-canvas');
        if (!canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);

        // Create rotating building
        const geometry = new THREE.BoxGeometry(2, 6, 2);
        const material = new THREE.MeshPhongMaterial({
            color: 0x00FFFF,
            transparent: true,
            opacity: 0.9,
            emissive: 0x003333,
            emissiveIntensity: 0.2
        });
        
        const building = new THREE.Mesh(geometry, material);
        scene.add(building);

        // Add details to building
        this.addBuildingDetails(building, scene);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0x00FFFF, 1);
        directionalLight.position.set(5, 10, 5);
        scene.add(directionalLight);

        camera.position.set(0, 3, 8);
        camera.lookAt(0, 0, 0);

        this.scenes.building = scene;
        this.cameras.building = camera;
        this.renderers.building = renderer;

        // Animate building rotation
        gsap.to(building.rotation, {
            duration: 10,
            y: Math.PI * 2,
            ease: "none",
            repeat: -1
        });
    }

    addBuildingDetails(building, scene) {
        // Add windows
        const windowGeometry = new THREE.PlaneGeometry(0.3, 0.4);
        const windowMaterial = new THREE.MeshBasicMaterial({
            color: 0xFFFF00,
            transparent: true,
            opacity: 0.8
        });

        // Create windows on each face
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 8; j++) {
                const window = new THREE.Mesh(windowGeometry, windowMaterial);
                const angle = (i / 4) * Math.PI * 2;
                const radius = 1.01;
                
                window.position.x = Math.cos(angle) * radius;
                window.position.z = Math.sin(angle) * radius;
                window.position.y = -2.5 + (j * 0.7);
                window.lookAt(0, window.position.y, 0);
                
                building.add(window);
            }
        }
    }

    initCityScene() {
        const canvas = document.getElementById('city-canvas');
        if (!canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000011, 1);

        // Create interactive city
        const cityBuildings = this.createInteractiveCity(scene);

        // Add controls
        const controls = new THREE.OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = true;
        controls.enablePan = true;
        controls.maxPolarAngle = Math.PI / 2;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0x00FFFF, 0.8);
        directionalLight.position.set(10, 20, 10);
        scene.add(directionalLight);

        camera.position.set(0, 15, 25);
        camera.lookAt(0, 0, 0);

        this.scenes.city = scene;
        this.cameras.city = camera;
        this.renderers.city = renderer;
        this.controls.city = controls;
        this.cityBuildings = cityBuildings;

        // Setup interaction
        this.setupCityInteraction(canvas, camera, cityBuildings);
    }

    createInteractiveCity(scene) {
        const buildings = [];
        const properties = [
            { name: "Cyber Tower Alpha", price: "2.5 ETH", color: 0x00FFFF },
            { name: "Neo Apartment", price: "1.8 ETH", color: 0xFF006E },
            { name: "Quantum Villa", price: "4.2 ETH", color: 0x8B5CF6 },
            { name: "Digital Plaza", price: "3.1 ETH", color: 0x0066FF },
            { name: "Virtual Mansion", price: "6.8 ETH", color: 0xFF0040 }
        ];

        for (let i = 0; i < 25; i++) {
            const height = Math.random() * 6 + 2;
            const width = Math.random() * 1.5 + 0.8;
            const depth = Math.random() * 1.5 + 0.8;
            
            const geometry = new THREE.BoxGeometry(width, height, depth);
            const propertyData = properties[Math.floor(Math.random() * properties.length)];
            
            const material = new THREE.MeshPhongMaterial({
                color: propertyData.color,
                transparent: true,
                opacity: 0.8,
                emissive: propertyData.color,
                emissiveIntensity: 0.1
            });
            
            const building = new THREE.Mesh(geometry, material);
            building.position.x = (Math.random() - 0.5) * 30;
            building.position.y = height / 2;
            building.position.z = (Math.random() - 0.5) * 30;
            
            // Store property data
            building.userData = propertyData;
            building.userData.originalColor = propertyData.color;
            building.userData.originalEmissive = propertyData.color;
            
            buildings.push(building);
            scene.add(building);
        }

        return buildings;
    }

    setupCityInteraction(canvas, camera, buildings) {
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const tooltip = document.getElementById('property-tooltip');
        let hoveredBuilding = null;

        const onMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(buildings);

            // Reset previous hover
            if (hoveredBuilding) {
                hoveredBuilding.material.emissiveIntensity = 0.1;
                hoveredBuilding.scale.set(1, 1, 1);
            }

            if (intersects.length > 0) {
                hoveredBuilding = intersects[0].object;
                
                // Highlight building
                hoveredBuilding.material.emissiveIntensity = 0.3;
                gsap.to(hoveredBuilding.scale, {
                    duration: 0.3,
                    x: 1.1,
                    y: 1.1,
                    z: 1.1,
                    ease: "power2.out"
                });

                // Show tooltip
                const userData = hoveredBuilding.userData;
                document.getElementById('tooltip-name').textContent = userData.name;
                document.getElementById('tooltip-price').textContent = userData.price;
                
                tooltip.style.display = 'block';
                tooltip.style.left = event.clientX + 'px';
                tooltip.style.top = event.clientY - 60 + 'px';
            } else {
                hoveredBuilding = null;
                tooltip.style.display = 'none';
            }
        };

        const onMouseLeave = () => {
            if (hoveredBuilding) {
                hoveredBuilding.material.emissiveIntensity = 0.1;
                hoveredBuilding.scale.set(1, 1, 1);
            }
            tooltip.style.display = 'none';
        };

        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseleave', onMouseLeave);
    }

    initPropertyPreviews() {
        const canvases = document.querySelectorAll('.property-preview');
        
        canvases.forEach((canvas, index) => {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x000000, 0);

            // Create different building types
            const propertyType = canvas.dataset.property;
            this.createPropertyModel(scene, propertyType, index);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0x00FFFF, 1);
            directionalLight.position.set(5, 10, 5);
            scene.add(directionalLight);

            camera.position.set(0, 2, 5);
            camera.lookAt(0, 0, 0);

            this.scenes[`property-${index}`] = scene;
            this.cameras[`property-${index}`] = camera;
            this.renderers[`property-${index}`] = renderer;
        });
    }

    createPropertyModel(scene, type, index) {
        const colors = [0x00FFFF, 0xFF006E, 0x8B5CF6];
        const color = colors[index % colors.length];

        let geometry, material, mesh;

        switch(type) {
            case 'tower':
                geometry = new THREE.BoxGeometry(1, 4, 1);
                break;
            case 'apartment':
                geometry = new THREE.BoxGeometry(2, 2, 1.5);
                break;
            case 'villa':
                geometry = new THREE.BoxGeometry(2.5, 1.5, 2.5);
                break;
            default:
                geometry = new THREE.BoxGeometry(1.5, 3, 1.5);
        }

        material = new THREE.MeshPhongMaterial({
            color: color,
            transparent: true,
            opacity: 0.9,
            emissive: color,
            emissiveIntensity: 0.1
        });

        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Animate rotation
        gsap.to(mesh.rotation, {
            duration: 8,
            y: Math.PI * 2,
            ease: "none",
            repeat: -1
        });

        return mesh;
    }

    initAnimations() {
        this.setupScrollAnimations();
        this.setupCounterAnimations();
        this.setupButtonAnimations();
    }

    setupScrollAnimations() {
        // Hero section animations
        gsap.fromTo("#hero h1", {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out"
        });

        gsap.fromTo(".hero-btn", {
>>>>>>> 17efac0bff129fcef902e44379c3ec782f531eae
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
<<<<<<< HEAD
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
=======
            delay: 0.5,
            stagger: 0.2,
            ease: "power2.out"
        });

        // Section animations
        gsap.utils.toArray("section").forEach((section, index) => {
            if (index === 0) return; // Skip hero section

            gsap.fromTo(section, {
                opacity: 0,
                y: 100
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Property cards stagger animation
        gsap.fromTo(".property-card", {
            opacity: 0,
            y: 50,
            scale: 0.9
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#properties",
                start: "top 70%"
            }
        });
    }

    setupCounterAnimations() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            if (!target) return;

            ScrollTrigger.create({
                trigger: counter,
                start: "top 80%",
                onEnter: () => {
                    gsap.fromTo(counter, {
                        innerHTML: 0
                    }, {
                        innerHTML: target,
                        duration: 2,
                        ease: "power2.out",
                        snap: { innerHTML: 1 },
                        onUpdate: function() {
                            counter.innerHTML = Math.ceil(this.targets()[0].innerHTML).toLocaleString();
                        }
                    });
                }
>>>>>>> 17efac0bff129fcef902e44379c3ec782f531eae
            });
        });
    }

<<<<<<< HEAD
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
=======
    setupButtonAnimations() {
        const buttons = document.querySelectorAll('button');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            button.addEventListener('mousedown', () => {
                gsap.to(button, {
                    scale: 0.95,
                    duration: 0.1
                });
            });

            button.addEventListener('mouseup', () => {
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.1
                });
            });
        });
    }

    initInteractivity() {
        this.setupMobileMenu();
        this.setupVideoPlayer();
        this.setupFormHandling();
        this.setupSmoothScrolling();
    }

    setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.querySelector('nav .hidden');
        
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                // Rotate button
                gsap.to(mobileMenuBtn, {
                    rotation: "+=180",
                    duration: 0.3
                });
                
                // Toggle menu (implement mobile menu if needed)
                console.log('Mobile menu clicked');
            });
        }
    }

    setupVideoPlayer() {
        const playBtn = document.getElementById('play-btn');
        const videoOverlay = document.getElementById('video-overlay');
        
        if (playBtn) {
            playBtn.addEventListener('click', () => {
                gsap.to(playBtn, {
                    scale: 0,
                    rotation: 180,
                    duration: 0.5,
                    ease: "power2.inOut"
                });
                
                gsap.to(videoOverlay, {
                    opacity: 0,
                    duration: 0.8,
                    delay: 0.2,
                    onComplete: () => {
                        videoOverlay.style.display = 'none';
                    }
                });
            });
        }
    }

    setupFormHandling() {
        const form = document.getElementById('newsletter-form');
        
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                // Animate submission
                gsap.to(submitBtn, {
                    scale: 0.95,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1
                });
                
                submitBtn.textContent = 'Joining...';
                
                // Simulate form submission
                setTimeout(() => {
                    submitBtn.textContent = 'Welcome to MetaCity!';
                    gsap.fromTo(submitBtn, {
                        backgroundColor: '#00FFFF'
                    }, {
                        backgroundColor: '#00FF00',
                        duration: 0.5
                    });
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        form.reset();
                    }, 2000);
                }, 1500);
            });
        }
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    gsap.to(window, {
                        duration: 1.5,
                        scrollTo: target,
                        ease: "power2.inOut"
                    });
                }
            });
        });
    }

    initCalculator() {
        const propertySelect = document.getElementById('property-type');
        const periodSlider = document.getElementById('investment-period');
        const periodDisplay = document.getElementById('period-display');
        const calculateBtn = document.getElementById('calculate-btn');

        if (periodSlider && periodDisplay) {
            periodSlider.addEventListener('input', (e) => {
                const months = e.target.value;
                periodDisplay.textContent = `${months} months`;
                document.getElementById('investment-period-display').textContent = `${months} months`;
            });
        }

        if (calculateBtn) {
            calculateBtn.addEventListener('click', () => {
                this.calculateROI();
            });
        }

        if (propertySelect) {
            propertySelect.addEventListener('change', () => {
                this.updateInvestmentAmount();
            });
        }
    }

    updateInvestmentAmount() {
        const propertySelect = document.getElementById('property-type');
        const initialInvestment = document.getElementById('initial-investment');
        
        if (propertySelect && initialInvestment) {
            const value = propertySelect.value;
            initialInvestment.textContent = `${value} ETH`;
        }
    }

    calculateROI() {
        const propertyType = document.getElementById('property-type').value;
        const period = document.getElementById('investment-period').value;
        
        const initialAmount = parseFloat(propertyType);
        const months = parseInt(period);
        const annualGrowth = 0.15; // 15% annual growth
        const monthlyGrowth = annualGrowth / 12;
        
        const estimatedValue = initialAmount * Math.pow(1 + monthlyGrowth, months);
        const roi = estimatedValue - initialAmount;
        
        // Animate the results
        const estimatedValueEl = document.getElementById('estimated-value');
        const totalROIEl = document.getElementById('total-roi');
        
        gsap.fromTo([estimatedValueEl, totalROIEl], {
            scale: 1,
            color: '#FFFFFF'
        }, {
            scale: 1.1,
            color: '#00FFFF',
            duration: 0.5,
            yoyo: true,
            repeat: 1
        });
        
        // Update values with animation
        gsap.to({ value: 0 }, {
            value: estimatedValue,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: function() {
                estimatedValueEl.textContent = `${this.targets()[0].value.toFixed(2)} ETH`;
            }
        });
        
        gsap.to({ value: 0 }, {
            value: roi,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: function() {
                totalROIEl.textContent = `+${this.targets()[0].value.toFixed(2)} ETH`;
            }
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Update controls
        Object.values(this.controls).forEach(control => {
            if (control && control.update) {
                control.update();
            }
        });

        // Render all scenes
        Object.entries(this.renderers).forEach(([key, renderer]) => {
            if (renderer && this.scenes[key] && this.cameras[key]) {
                renderer.render(this.scenes[key], this.cameras[key]);
            }
        });
    }

    handleResize() {
        window.addEventListener('resize', () => {
            Object.entries(this.renderers).forEach(([key, renderer]) => {
                const canvas = renderer.domElement;
                const camera = this.cameras[key];
                
                if (camera && canvas) {
                    camera.aspect = canvas.clientWidth / canvas.clientHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
                }
            });
        });
    }

    start() {
        this.isLoaded = true;
        this.animate();
        
        // Trigger initial animations
        gsap.fromTo('body', {
            opacity: 0
        }, {
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        });
    }
}

// Initialize the application
const metaCity = new MetaCityApp();
>>>>>>> 17efac0bff129fcef902e44379c3ec782f531eae
