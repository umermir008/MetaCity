# MetaCity - 3D Virtual Real Estate Marketplace

A futuristic, fully responsive 3D animated website for virtual real estate and metaverse city marketplace built with HTML, Tailwind CSS, JavaScript, GSAP, and Three.js.

## 🌟 Features

### ✨ Visual & Interactive Elements
- **Fully Responsive Design** - Works seamlessly across all devices
- **3D Animations** - Interactive Three.js scenes with WebGL rendering
- **Glassmorphism UI** - Modern glass-like effects with neon cyberpunk styling
- **Smooth GSAP Animations** - Professional transitions and hover effects
- **Interactive 3D City Map** - Hover over buildings to see property details
- **Animated Counters** - Statistics that animate on scroll
- **Property Previews** - 3D models for different property types

### 🏗️ Website Sections
1. **Hero Section** - 3D animated futuristic skyline with call-to-action buttons
2. **About Section** - Rotating 3D building model with animated statistics
3. **Explore MetaCity** - Interactive 3D city map with hover tooltips
4. **Featured Properties** - Property cards with 3D previews and animations
5. **Video Showcase** - Cinematic video section with play button animation
6. **Investment Calculator** - Real-time ROI calculator with glassmorphic design
7. **Newsletter Signup** - Contact form with animated submission feedback
8. **Footer** - Social links with neon hover effects

### 🎨 Design Elements
- **Cyberpunk Color Scheme** - Neon cyan, pink, purple, and blue
- **Glassmorphism Effects** - Transparent backgrounds with blur effects
- **Neon Glow Animations** - Pulsing and glowing effects throughout
- **Smooth Transitions** - GSAP-powered animations with proper easing
- **Mobile-First Design** - Optimized for all screen sizes

### ⚡ Performance Features
- **Optimized 3D Rendering** - Efficient Three.js scenes with proper disposal
- **Lazy Loading** - Images and animations load as needed
- **Smooth 60fps Animations** - Hardware-accelerated animations
- **Responsive Canvas Sizing** - Automatic resizing for different viewports
- **Memory Management** - Proper cleanup of 3D resources

## 🚀 Getting Started

### Prerequisites
- Modern web browser with WebGL support
- Python 3.x (for local development server)

### Installation & Running
1. Download all files to your project directory
2. Open terminal/command prompt in the project folder
3. Run the development server:
   ```bash
   python -m http.server 8000
   ```
4. Open your browser and navigate to `http://localhost:8000`

### File Structure
```
project-folder/
├── index.html          # Main HTML structure
├── styles.css          # Cyberpunk glassmorphism styles
├── script.js           # Three.js and GSAP functionality
└── README.md           # This file
```

## 🛠️ Technical Implementation

### Technologies Used
- **HTML5** - Semantic structure with accessibility features
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Three.js** - 3D graphics and WebGL rendering
- **GSAP** - Professional animation library with ScrollTrigger
- **Vanilla JavaScript** - No additional frameworks for maximum performance

### Key Components

#### Three.js Scenes
- **Hero Scene**: Animated cityscape with camera movement
- **Building Scene**: Rotating building model with window details
- **City Scene**: Interactive city map with OrbitControls
- **Property Previews**: Individual 3D models for each property type

#### GSAP Animations
- **Scroll Triggers**: Section animations on scroll
- **Stagger Animations**: Menu items and cards animate in sequence
- **Interactive Feedback**: Button hover and click animations
- **Counter Animations**: Animated number counting
- **Form Feedback**: Submission animation with color changes

#### Interactive Elements
- **3D Object Interaction**: Hover effects on city buildings
- **Tooltip System**: Dynamic property information display
- **ROI Calculator**: Real-time investment calculations
- **Smooth Scrolling**: Animated navigation between sections
- **Responsive Navigation**: Mobile-friendly menu system

## 🎯 Features Breakdown

### 1. Hero Section
- 3D animated futuristic skyline background
- Dynamic camera movement with GSAP
- Glowing text effects with gradient animations
- Interactive CTA buttons with hover effects

### 2. Interactive City Map
- 25+ interactive 3D buildings
- Hover detection with raycasting
- Dynamic tooltips showing property details
- Smooth camera controls with OrbitControls

### 3. Property Cards
- 3D preview canvases for each property
- Staggered animation on scroll
- Hover effects with scale transformation
- Different building types (tower, apartment, villa)

### 4. Investment Calculator
- Real-time ROI calculations
- Animated result display
- Glassmorphic form design
- Interactive slider controls

### 5. Performance Optimizations
- Efficient render loops
- Proper canvas sizing and pixel ratio handling
- Memory cleanup for 3D objects
- Optimized animation performance

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

### Mobile Optimizations
- Reduced 3D complexity on smaller screens
- Touch-friendly interface elements
- Optimized canvas sizes for performance
- Simplified animations for better frame rates

## 🎨 Customization

### Colors
The neon color scheme can be customized in the Tailwind config:
```javascript
colors: {
    neon: {
        cyan: '#00FFFF',
        pink: '#FF006E',
        purple: '#8B5CF6',
        blue: '#0066FF',
        red: '#FF0040'
    }
}
```

### Animations
GSAP animations can be modified in the `script.js` file:
```javascript
gsap.to(element, {
    duration: 1,
    ease: "power2.out",
    // ... other properties
});
```

## 🔧 Browser Support

- **Chrome**: 80+ (recommended)
- **Firefox**: 75+
- **Safari**: 13.1+
- **Edge**: 80+

**Note**: WebGL support required for 3D features

## 📦 Dependencies

All dependencies are loaded via CDN:
- Three.js r128
- GSAP 3.12.2 with ScrollTrigger
- Tailwind CSS (latest)
- Google Fonts (Orbitron, Rajdhani)

## 🚀 Deployment

For production deployment:
1. Optimize images and assets
2. Enable gzip compression
3. Use a proper web server (Apache/Nginx)
4. Configure HTTPS for secure connections

## 🎯 Future Enhancements

- **Blender Integration**: Import custom 3D models
- **VR Support**: WebXR integration for immersive experience
- **Blockchain Integration**: Real NFT/cryptocurrency transactions
- **User Authentication**: Login system for property management
- **Advanced Analytics**: Investment tracking and portfolio management

## 🐛 Known Issues

- Loading time may vary based on device performance
- 3D scenes require WebGL-compatible browsers
- Performance may be limited on older mobile devices

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify as needed.

## 🤝 Contributing

To contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**MetaCity** - Step into the future of virtual real estate! 🌌