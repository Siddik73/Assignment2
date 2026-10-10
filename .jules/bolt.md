## 2026-10-10 - Pause Three.js rendering when canvas is out of view
**Learning:** Three.js render loops (`requestAnimationFrame(animate)`) continue firing even when the canvas is scrolled out of view, needlessly consuming CPU and GPU cycles.
**Action:** Use `IntersectionObserver` to detect when the canvas container is visible in the viewport, and conditionally execute `renderer.render(scene, camera)` only when the element is intersecting.
