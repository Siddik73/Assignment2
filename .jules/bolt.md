## 2024-09-17 - IntersectionObserver for Three.js Rendering
**Learning:** Three.js continuous rendering loops (`requestAnimationFrame`) can consume unnecessary CPU/GPU resources when the canvas is scrolled out of view.
**Action:** Always wrap `renderer.render` in an visibility check using `IntersectionObserver` on landing pages with 3D elements to pause rendering when off-screen.
