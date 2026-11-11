## 2024-12-19 - Pause 3D rendering when off-screen
**Learning:** Three.js `requestAnimationFrame` loops run continuously even when the canvas is completely scrolled out of view, consuming CPU/GPU resources unnecessarily.
**Action:** Always wrap `requestAnimationFrame` and rendering logic with an `IntersectionObserver` to pause rendering for off-screen 3D elements, improving page performance.
