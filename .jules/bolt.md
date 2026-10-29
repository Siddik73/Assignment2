## 2024-10-29 - Three.js Canvas Visibility Optimization
**Learning:** Rendering a Three.js scene continuously even when it's not visible in the viewport consumes unnecessary CPU/GPU resources. This is especially true for a hero section canvas that user scrolls past.
**Action:** Use IntersectionObserver to track the visibility of the canvas container and only call `renderer.render` when `isIntersecting` is true, saving resources when the canvas is off-screen.
