## 2024-05-14 - Canvas off-screen rendering
**Learning:** Continuous WebGL rendering (`requestAnimationFrame` with `renderer.render()`) continues even when the `<canvas>` is scrolled entirely off-screen, creating a huge and unnecessary CPU/GPU overhead on long-scrolling static sites.
**Action:** Use an `IntersectionObserver` on the canvas container to toggle rendering dynamically.
