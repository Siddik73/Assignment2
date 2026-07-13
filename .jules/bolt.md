## 2024-11-20 - WebGL Render Loop Visibility Optimization
**Learning:** The continuous `requestAnimationFrame` loop in Three.js will keep executing `renderer.render` even when the canvas is completely scrolled out of view, needlessly consuming CPU and GPU cycles.
**Action:** Use an `IntersectionObserver` on the 3D canvas container to set a visibility flag, and wrap the `renderer.render()` call in the animation loop so it only executes when the canvas is actually visible on the screen.
