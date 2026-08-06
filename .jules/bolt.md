## 2024-11-20 - WebGL Render Optimization
**Learning:** In Three.js applications, blindly calling `renderer.render()` within the `requestAnimationFrame` loop wastes significant GPU and CPU cycles when the canvas is scrolled entirely off-screen, a common scenario in single-page scrolling sites.
**Action:** Use an `IntersectionObserver` to track the visibility of the canvas container. Conditionally call `renderer.render()` only when `isIntersecting` is true, while keeping the `requestAnimationFrame` loop running to avoid breaking internal logic or background tracking.
