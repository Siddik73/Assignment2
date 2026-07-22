## 2024-05-24 - IntersectionObserver for Three.js Rendering
**Learning:** In applications using Three.js with simple render loops, unconditionally calling `requestAnimationFrame` wastes CPU/GPU cycles when the canvas is off-screen.
**Action:** Always wrap the main `requestAnimationFrame` render loop invocation with an `IntersectionObserver` observing the canvas container, ensuring rendering is paused (`cancelAnimationFrame`) when not intersecting, and resumed when visible.
