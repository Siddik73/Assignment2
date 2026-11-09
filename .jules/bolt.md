## 2024-05-14 - Three.js Off-Screen Rendering Drain
**Learning:** The application's 3D header continues to render and drain GPU resources even when scrolled out of view.
**Action:** Always use IntersectionObserver to pause requestAnimationFrame loops for off-screen canvas elements.
