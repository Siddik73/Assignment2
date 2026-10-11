## 2026-10-11 - WebGL Off-screen Rendering
**Learning:** The 3D scene in the hero section continuously renders via `requestAnimationFrame` even when the user scrolls past it, needlessly consuming CPU/GPU resources on a long scrolling page.
**Action:** Use an `IntersectionObserver` to pause `renderer.render(scene, camera)` when the canvas container is no longer visible in the viewport.
