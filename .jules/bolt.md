## 2024-07-26 - Three.js Off-Screen Rendering Loop
**Learning:** When using an IntersectionObserver to pause Three.js rendering for off-screen elements, pausing the entire requestAnimationFrame loop can block background tracking or other inputs tied to that loop.
**Action:** Conditionally wrap only the `renderer.render()` call inside the animation loop to stop expensive GPU work, while keeping `requestAnimationFrame()` running continuously.
