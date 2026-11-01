## 2024-03-24 - WebGL Rendering Loop Optimization
**Learning:** Found a performance bottleneck where Three.js WebGL continues rendering even when the canvas is scrolled entirely off-screen, needlessly consuming CPU and GPU resources.
**Action:** Always use an IntersectionObserver on the WebGL canvas container to pause the render loop (or skip the renderer.render call) when the element is not intersecting the viewport.
