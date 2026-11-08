## 2024-05-17 - WebGL Render Optimization
**Learning:** Three.js requestAnimationFrame loops continuously execute renderer.render() even when the canvas is scrolled out of view, consuming unnecessary GPU and CPU resources in visually rich sites.
**Action:** Use IntersectionObserver to track canvas visibility and conditionally pause WebGL rendering when off-screen to improve page performance during scrolling.
