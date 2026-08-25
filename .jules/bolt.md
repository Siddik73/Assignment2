## 2024-08-25 - IntersectionObserver for WebGL
**Learning:** Three.js continuous rendering loops (requestAnimationFrame) will keep using GPU/CPU even when the canvas element is completely scrolled out of the viewport. Browsers do not automatically pause WebGL rendering for offscreen elements as they might for simple CSS animations.
**Action:** Always wrap continuous WebGL/Canvas rendering loops in an IntersectionObserver check to pause `renderer.render()` when the element `!isIntersecting` to save significant battery and performance on long, scrollable pages.
