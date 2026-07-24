## 2024-07-24 - Pausing off-screen WebGL renders
**Learning:** Three.js will continuously run `renderer.render()` on every animation frame, even if the canvas is completely out of the viewport, which consumes unnecessary GPU resources on long, scrollable pages.
**Action:** Use an `IntersectionObserver` to track when the canvas container is intersecting the viewport, and conditionally skip the `renderer.render()` call when it's not visible, saving CPU/GPU cycles.
