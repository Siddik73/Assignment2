## 2026-07-16 - [Pause Three.js rendering when canvas is off-screen]
**Learning:** Three.js requestAnimationFrame loops run continuously and consume CPU/GPU even when the canvas is scrolled out of view.
**Action:** Use an `IntersectionObserver` to pause the animation loop by calling `cancelAnimationFrame` when the canvas is no longer intersecting the viewport, and resume it when it becomes visible again.
