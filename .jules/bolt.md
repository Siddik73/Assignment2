## 2024-11-20 - Pause off-screen 3D rendering
**Learning:** Three.js continuous render loop (`requestAnimationFrame`) keeps running even when the canvas is scrolled out of view, consuming significant CPU/GPU resources and draining battery unnecessarily.
**Action:** Always use an `IntersectionObserver` on the 3D canvas container to toggle a rendering flag, pausing the `renderer.render()` call when the canvas is off-screen.
