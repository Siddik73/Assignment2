## 2024-10-30 - Pause Three.js rendering when canvas is off-screen
**Learning:** The Three.js canvas `#canvas-container` in the hero section continues to render using `requestAnimationFrame` even when the user has scrolled past it. In a pure static site without build tools, this unnecessarily consumes CPU/GPU resources and battery.
**Action:** Implement an `IntersectionObserver` in `script.js` to track the visibility of the hero section or the canvas itself, and conditionally pause/resume the `requestAnimationFrame` loop based on the `isIntersecting` property.
