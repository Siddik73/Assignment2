## 2024-05-18 - Pause WebGL Rendering Off-Screen
**Learning:** Three.js rendering loops consume significant GPU and CPU resources even when the `<canvas>` is scrolled out of the viewport. Continuous rendering of hidden elements causes unnecessary power drain and thermal throttling.
**Action:** Use `IntersectionObserver` to pause `renderer.render()` calls when the canvas container is no longer intersecting with the viewport.
