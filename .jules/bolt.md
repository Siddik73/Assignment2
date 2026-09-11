## 2024-09-11 - Rendering offscreen content
**Learning:** Three.js scenes continue rendering continuously via requestAnimationFrame, even when they scroll completely out of the viewport. This causes constant CPU and GPU usage on static content heavy sites.
**Action:** Use IntersectionObserver on the WebGL container to pause renderer.render() when the canvas isn't visible, saving significant battery and resources without affecting user experience.
