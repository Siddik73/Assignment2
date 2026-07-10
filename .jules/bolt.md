## 2024-05-24 - WebGL Rendering Loop Optimization
**Learning:** Continuous `requestAnimationFrame` and `renderer.render()` execution off-screen is a significant performance anti-pattern in Three.js, consuming unnecessary CPU/GPU resources and draining battery.
**Action:** Use an `IntersectionObserver` to track the canvas container's visibility and skip the rendering phase (`renderer.render(scene, camera)`) when `isIntersecting` is false.
