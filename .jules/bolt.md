## 2024-05-18 - Pause WebGL Rendering Off-Screen
**Learning:** In this codebase, the continuous `requestAnimationFrame` loop keeps the Three.js `renderer.render()` active even when the `#canvas-container` is completely out of view (e.g., scrolled down). This consumes unnecessary CPU/GPU resources for off-screen rendering.
**Action:** Use an `IntersectionObserver` on the WebGL container element to track visibility and conditionally skip the expensive `renderer.render()` call when the container is not visible.
