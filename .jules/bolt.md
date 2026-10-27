## 2024-10-27 - Uncapped 3D Rendering Overheads
**Learning:** Continuous 3D canvas rendering without viewport visibility checks in a single-page or scrolling application is a severe performance anti-pattern that unnecessarily wastes GPU cycles and battery life.
**Action:** Always wrap `requestAnimationFrame` render calls in an `IntersectionObserver` check to ensure the WebGL renderer only processes frames when the canvas is within the active viewport.
