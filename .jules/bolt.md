## 2024-08-08 - Pausing Three.js off-screen rendering
**Learning:** Background Three.js rendering loops (using `requestAnimationFrame`) will consume continuous 60FPS CPU/GPU cycles even when the `<canvas>` element is completely scrolled out of the viewport. This needlessly drains device batteries.
**Action:** Always wrap `renderer.render()` inside `requestAnimationFrame` with an `isCanvasVisible` check, toggled by an `IntersectionObserver` observing the canvas container. Let the empty rAF loop run to resume rendering instantly when visible.
