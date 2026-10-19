## 2024-10-19 - Three.js Rendering Optimizations
**Learning:** Three.js defaults to rendering constantly, even when the `<canvas>` element is off-screen. It also attempts to match the device's native pixel ratio, which can cause severe performance degradation on ultra-high resolution displays (like 3x+ mobile screens) with minimal visual benefit.
**Action:** Always cap `WebGLRenderer.setPixelRatio` to a maximum of 2, and use `IntersectionObserver` to pause `renderer.render()` calls when the canvas is not in the viewport to save GPU/CPU cycles.
