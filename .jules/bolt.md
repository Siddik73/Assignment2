## 2026-08-23 - Pausing WebGL Rendering Off-Screen
**Learning:** The `requestAnimationFrame` loop executes continuously, even when a canvas element is scrolled out of the user's view, needlessly consuming significant CPU and GPU resources to render an unseen 3D scene.
**Action:** Use an `IntersectionObserver` to track the visibility of the WebGL canvas container and conditionally skip the `renderer.render(scene, camera)` call within the animation loop when the element is off-screen. This pattern drastically reduces resource usage on pages with scrollable content.
