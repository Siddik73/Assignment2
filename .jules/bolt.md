## 2024-05-18 - 3D Canvas Rendering
**Learning:** Three.js renders continuously in the background via requestAnimationFrame, eating CPU/GPU even when the canvas is scrolled entirely out of view.
**Action:** Always wrap the `renderer.render()` call in an IntersectionObserver check for 3D elements that can be scrolled off-screen.
