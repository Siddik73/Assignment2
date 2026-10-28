## 2024-05-24 - Pausing Off-Screen WebGL Rendering
**Learning:** The Three.js canvas in the hero section continued to call `renderer.render(scene, camera)` unconditionally on every frame even after the user scrolled down, wasting significant GPU/CPU resources on an off-screen element.
**Action:** Always use an `IntersectionObserver` to track WebGL canvas visibility and skip rendering (or pause the render loop entirely) when the canvas is not in the viewport.
