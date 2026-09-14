## 2024-09-14 - Pausing Three.js rendering using IntersectionObserver
**Learning:** Rendering continuous 3D scenes when the canvas is scrolled out of view unnecessarily consumes CPU/GPU resources. This represents an easy performance win by monitoring element visibility.
**Action:** Use an `IntersectionObserver` to toggle a global flag (`isRendering`) that prevents `renderer.render()` execution inside the `requestAnimationFrame` loop when the container is off-screen.
