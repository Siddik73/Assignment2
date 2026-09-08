## 2024-09-08 - Paused Off-screen Rendering
**Learning:** In a long single-page site with a 3D scene at the top, the WebGL renderer continuously draws frames even when the user has scrolled past it, consuming unnecessary CPU and GPU resources.
**Action:** Always use an `IntersectionObserver` to pause `renderer.render()` or `requestAnimationFrame` entirely when a WebGL canvas is no longer visible in the viewport.
