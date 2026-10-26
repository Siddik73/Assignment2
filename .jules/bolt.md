## 2024-10-26 - Pausing Off-Screen WebGL Rendering
**Learning:** Three.js applications often continue rendering at 60fps even when the canvas is completely out of the viewport (e.g., scrolled past). This consumes significant CPU/GPU resources unnecessarily, leading to a performance bottleneck.
**Action:** Always implement an `IntersectionObserver` for full-page WebGL backgrounds to pause the `requestAnimationFrame` loop and `renderer.render()` when the canvas container is no longer intersecting the viewport.
