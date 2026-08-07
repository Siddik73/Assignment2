## 2024-08-07 - Pause off-screen Three.js rendering
**Learning:** Three.js `requestAnimationFrame` render loops run continuously by default, consuming CPU/GPU cycles even when the canvas is scrolled out of view.
**Action:** Use an `IntersectionObserver` on the canvas container to conditionally skip `renderer.render()` when it is off-screen.
