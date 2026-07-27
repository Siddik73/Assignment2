## 2026-07-27 - IntersectionObserver Three.js Render Pause
**Learning:** When optimizing Three.js continuous rendering loops with an IntersectionObserver to pause off-screen rendering, conditionally wrap only the renderer.render() call in the visibility condition while keeping the requestAnimationFrame() loop running. This stops expensive GPU work while ensuring background tracking or inputs tied to the animation frame aren't blocked.
**Action:** Apply this pattern for canvas rendering loops.
