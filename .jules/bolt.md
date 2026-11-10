## 2024-05-24 - WebGL High-DPI Performance Degradation
**Learning:** Passing `window.devicePixelRatio` directly to Three.js `renderer.setPixelRatio()` on high-density displays (e.g. Retina or mobile screens with pixel ratios of 3 or 4) forces the GPU to render millions of unnecessary pixels, causing severe FPS drops with negligible visual improvement.
**Action:** Always cap `devicePixelRatio` to a maximum of 2 (e.g., `Math.min(window.devicePixelRatio, 2)`) to maintain optimal performance without sacrificing visual sharpness in WebGL applications.
