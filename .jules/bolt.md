## 2024-05-24 - Three.js Rendering Bottleneck on Scroll-Heavy Pages
**Learning:** Continuous `requestAnimationFrame` rendering in Three.js when the canvas is scrolled out of view causes unnecessary CPU/GPU load, affecting overall page performance and battery life on mobile.
**Action:** Always wrap `renderer.render()` inside `animate()` loops with a visibility check (e.g., `isRendering`) driven by an `IntersectionObserver` attached to the canvas container.
