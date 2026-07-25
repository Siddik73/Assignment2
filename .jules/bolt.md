## 2024-07-25 - Optimize Three.js Rendering Loop
**Learning:** Three.js scenes with continuous `requestAnimationFrame` loops continue rendering even when scrolled out of view, unnecessarily consuming GPU resources.
**Action:** Always wrap the `renderer.render()` call inside the animation loop with a visibility check driven by an `IntersectionObserver`. Leave `requestAnimationFrame()` running to not block inputs tied to the frame loop.
