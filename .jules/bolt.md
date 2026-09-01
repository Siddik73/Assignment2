## 2024-05-15 - Unnecessary 3D rendering loop
**Learning:** Continuous `requestAnimationFrame` for 3D rendering consumes CPU/GPU resources even when the canvas is not in the viewport.
**Action:** Use `IntersectionObserver` to pause the rendering loop when the canvas is off-screen.
