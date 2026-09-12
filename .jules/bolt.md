## 2024-05-14 - Pause Off-Screen 3D Rendering
**Learning:** Three.js `requestAnimationFrame` continuously calls `renderer.render` even when the canvas is not visible to the user (e.g., scrolled off-screen), which uselessly consumes GPU/CPU resources on static sites with scroll content.
**Action:** Always implement an `IntersectionObserver` on the 3D canvas container to toggle a visibility flag, and wrap the `renderer.render()` call in an `if (isVisible)` check to save performance on scrollable sites.
