## 2024-08-18 - Avoid Off-Screen WebGL Rendering
**Learning:** The continuous `requestAnimationFrame` loop in Three.js will constantly trigger the expensive WebGL `renderer.render()` function at 60fps, even when the 3D canvas is entirely off-screen, causing unnecessary CPU/GPU overhead.
**Action:** Use an `IntersectionObserver` on the canvas container to track visibility, and conditionally wrap the `renderer.render()` call inside the animation loop to skip execution when `isIntersecting` is false.
