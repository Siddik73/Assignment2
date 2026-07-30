## 2026-07-30 - Pausing Off-Screen WebGL Rendering
**Learning:** The continuous WebGL render loop (Three.js) in this straightforward HTML project was constantly rendering the 3D brick even when the hero section was scrolled out of view, wasting GPU cycles.
**Action:** Conditionally wrap only the `renderer.render()` call in the visibility condition while keeping the `requestAnimationFrame()` loop running. This stops expensive GPU work while ensuring background tracking or inputs tied to the animation frame aren't blocked.
