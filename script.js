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
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
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
            });
        });
    }

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