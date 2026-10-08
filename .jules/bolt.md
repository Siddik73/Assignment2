## 2024-10-24 - Paused Offscreen WebGL Rendering
**Learning:** In scrollable pages with Three.js hero sections, leaving the render loop active when the canvas is out of view causes massive unnecessary CPU/GPU load.
**Action:** Always use `IntersectionObserver` to wrap `renderer.render()` in a visibility check for WebGL canvases that can be scrolled out of view.
