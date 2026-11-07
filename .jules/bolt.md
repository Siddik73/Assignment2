## 2024-05-24 - WebGL Rendering Optimization
**Learning:** Continuous WebGL rendering (`renderer.render()`) in `requestAnimationFrame` drains CPU/GPU and battery even when the canvas is scrolled out of view.
**Action:** Use `IntersectionObserver` to detect when the canvas container is off-screen and skip the `renderer.render()` call inside the animation loop to save resources.
