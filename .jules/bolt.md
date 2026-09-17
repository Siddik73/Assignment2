## 2024-09-17 - Pause off-screen 3D rendering with IntersectionObserver
**Learning:** For web apps using Three.js or similar WebGL frameworks, continuous rendering when the canvas is off-screen consumes significant CPU/GPU resources unnecessarily.
**Action:** Use the `IntersectionObserver` API to monitor the canvas container's visibility and pause the `requestAnimationFrame` loop by cancelling pending frames and halting rendering calls when it scrolls out of view.
