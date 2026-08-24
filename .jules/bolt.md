## 2024-08-17 - Pause off-screen rendering
**Learning:** Three.js renderers run continuously inside `requestAnimationFrame`, causing unnecessary GPU and CPU overhead when the canvas is not in the viewport.
**Action:** Use an `IntersectionObserver` to track the canvas visibility and conditionally bypass the `renderer.render` call inside the animation loop when off-screen.
