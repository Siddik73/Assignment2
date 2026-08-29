## 2024-08-29 - Three.js Rendering Optimization
**Learning:** In a long-scrolling static site with a Three.js hero section, the WebGL renderer continues to execute `renderer.render(scene, camera)` on every animation frame even when the canvas is scrolled entirely out of view. This causes continuous, unnecessary CPU and GPU usage overhead.
**Action:** Always wrap the `renderer.render()` call inside the `requestAnimationFrame` loop with an `IntersectionObserver` visibility check for the canvas container. If it's not visible, skip the render step to save significant battery and system resources.
