## 2024-05-15 - Unnecessary 3D Rendering on Scroll
**Learning:** The Three.js animation loop was continuously calling `renderer.render()` even when the user scrolled past the hero section, wasting CPU/GPU resources on a canvas that wasn't visible.
**Action:** Use an `IntersectionObserver` to track the canvas container's visibility and only invoke `renderer.render()` when `isIntersecting` is true, effectively pausing the heavy 3D rendering pipeline for off-screen content.
