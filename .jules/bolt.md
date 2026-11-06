## 2024-11-06 - Off-screen 3D rendering wastes resources
**Learning:** Three.js and GSAP scenes typically hook into requestAnimationFrame. When elements with heavy rendering logic (like a 3D canvas) scroll out of view, continuing to execute renderer.render() wastes CPU/GPU resources even though the user cannot see it.
**Action:** Always implement an IntersectionObserver to pause expensive renderer.render() calls when the container element is off-screen.
