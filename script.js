// script.js

let scene, camera, renderer, brick;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let isCanvasVisible = true;

function init3D() {
    const container = document.getElementById('canvas-container');

    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.bias = -0.001;
    scene.add(directionalLight);

    const spotLight = new THREE.SpotLight(0xff4444, 1);
    spotLight.position.set(-5, -5, 5);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 1;
    scene.add(spotLight);

    // The Brick
    const geometry = new THREE.BoxGeometry(4, 2, 2);

    // Create a rough material simulating brick
    const material = new THREE.MeshStandardMaterial({
        color: 0xaa3333,
        roughness: 0.9,
        metalness: 0.1,
    });

    // Add texture bump map simulation (using basic noise if texture not loaded, but since we are simple, we use a basic material with rough properties)
    brick = new THREE.Mesh(geometry, material);
    brick.castShadow = true;
    brick.receiveShadow = true;

    // Initial rotation for better viewing angle
    brick.rotation.x = 0.5;
    brick.rotation.y = -0.5;

    scene.add(brick);

    // Initial animation (floating)
    gsap.to(brick.position, {
        y: 0.3,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });

    gsap.to(brick.rotation, {
        y: brick.rotation.y + Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "linear"
    });

    // Interaction setup
    setupInteraction(container);

    // Window Resize
    window.addEventListener('resize', onWindowResize, false);

    // Performance optimization: Pause rendering when canvas is not visible
    const observer = new IntersectionObserver((entries) => {
        isCanvasVisible = entries[0].isIntersecting;
    });
    observer.observe(container);

    // Render loop
    animate();
}

function setupInteraction(container) {
    // Mouse Events
    container.addEventListener('mousedown', (e) => {
        isDragging = true;
    });

    container.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaMove = {
                x: e.offsetX - previousMousePosition.x,
                y: e.offsetY - previousMousePosition.y
            };

            const rotationSpeed = 0.005;

            brick.rotation.y += deltaMove.x * rotationSpeed;
            brick.rotation.x += deltaMove.y * rotationSpeed;

            // Optional: Pause auto-rotation when interacting
            gsap.killTweensOf(brick.rotation);
        }

        previousMousePosition = {
            x: e.offsetX,
            y: e.offsetY
        };
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;

        // Resume slow rotation
        gsap.to(brick.rotation, {
            y: brick.rotation.y + Math.PI * 2,
            duration: 20,
            repeat: -1,
            ease: "linear"
        });
    });

    // Initial position tracking
    container.addEventListener('mouseenter', (e) => {
        previousMousePosition = {
            x: e.offsetX,
            y: e.offsetY
        };
    });
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    // Only render when the canvas is in the viewport to save CPU/GPU
    if (isCanvasVisible) {
        renderer.render(scene, camera);
    }
}

function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    const revealElements = document.querySelectorAll(".gs-reveal");

    revealElements.forEach((elem) => {
        gsap.fromTo(elem,
            { autoAlpha: 0, y: 50 },
            {
                duration: 1.5,
                autoAlpha: 1,
                y: 0,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
}

function initMiniGame() {
    const brick2D = document.getElementById('brick-2d');
    const hitCounter = document.getElementById('hit-counter');
    const message = document.getElementById('durability-message');

    let hits = 0;

    brick2D.addEventListener('click', () => {
        hits++;
        hitCounter.innerText = `${hits} Hits`;

        // Shake animation
        gsap.to(brick2D, {
            x: () => (Math.random() - 0.5) * 10,
            y: () => (Math.random() - 0.5) * 10,
            rotation: () => (Math.random() - 0.5) * 5,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            onComplete: () => {
                gsap.set(brick2D, { x: 0, y: 0, rotation: 0 });
            }
        });

        // Messages based on hits
        if (hits === 1) {
            message.innerText = "Did you feel that? Nothing happened.";
        } else if (hits === 5) {
            message.innerText = "Still perfect.";
        } else if (hits === 10) {
            message.innerText = "You cannot break what is already solid.";
        } else if (hits === 20) {
            message.innerText = "Perfection cannot be broken.";
            message.style.color = "#ff3333";
            // Make it glow
            gsap.to(brick2D, {
                boxShadow: "0 0 50px #ff3333",
                duration: 1
            });
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    init3D();
    initScrollAnimations();
    initMiniGame();
});
