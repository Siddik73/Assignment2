## 2024-08-24 - Pausing 3D Rendering with IntersectionObserver
**Learning:** Found an opportunity to pause the heavy 3D requestAnimationFrame loop when the canvas container is completely off-screen, saving CPU/GPU cycles.
**Action:** Always consider adding IntersectionObserver for requestAnimationFrame loops tied to specific UI elements that scroll out of view.
