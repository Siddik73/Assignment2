## 2024-06-25 - GPU Idle Optimization

**Learning:** Unconditional `requestAnimationFrame` loops for Three.js canvases drain GPU and CPU continuously, even when off-screen.
**Action:** Always wrap heavy rendering logic (e.g., `renderer.render()`) in an `IntersectionObserver` visibility check.
