## 2026-07-29 - Optimization Three.js Loop
**Learning:** When optimizing Three.js continuous rendering loops with an IntersectionObserver, conditionally wrap only the renderer.render() call in the visibility condition while keeping the requestAnimationFrame() loop running.
**Action:** Apply this to stop expensive GPU work without blocking background tracking.
