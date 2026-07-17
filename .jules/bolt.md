## 2024-05-24 - Suspending 3D Canvas Rendering Off-Screen
**Learning:** In a single-page scrolling application, continuously rendering a 3D Three.js scene (`renderer.render()`) when the canvas container is completely out of the viewport wastes significant CPU and GPU cycles, especially since the animation loop is driven by `requestAnimationFrame`.
**Action:** Always wrap the actual `render()` call in the animation loop with an `isRendering` flag, controlled by an `IntersectionObserver` that monitors the visibility of the canvas container.
