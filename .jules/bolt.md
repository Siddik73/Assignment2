## 2026-08-01 - Three.js Off-Screen Rendering
**Learning:** Pausing off-screen rendering saves GPU resources, but conditionally wrapping only the `renderer.render()` call while keeping `requestAnimationFrame()` running prevents blocking background tracking or inputs tied to the animation frame.
**Action:** Use `IntersectionObserver` to toggle a visibility flag and apply the flag strictly around the render call, not the animation loop.
