## 2024-05-24 - IntersectionObserver for Three.js Rendering Loops
**Learning:** In Three.js applications, rendering when the canvas is off-screen consumes unnecessary GPU resources.
**Action:** Conditionally wrap only the `renderer.render()` call in an `IntersectionObserver` visibility check while keeping the `requestAnimationFrame()` loop running to ensure background tracking isn't blocked.
