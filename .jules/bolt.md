## 2024-05-18 - Unnecessary WebGL rendering loop
**Learning:** Found an unnecessary continuous rendering loop in Three.js when the WebGL canvas is not visible on the screen.
**Action:** Use IntersectionObserver to pause the render loop when the canvas is off-screen.
