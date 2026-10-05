## 2024-05-24 - WebGL Render Loop Optimization
**Learning:** When verifying WebGL optimizations in apps using GSAP, overriding requestAnimationFrame isn't reliable due to GSAP's internal ticker. Overriding THREE.WebGLRenderer.prototype.render via Playwright's page.evaluate() can crash the context.
**Action:** Use page.add_init_script() to override native WebGL methods (WebGLRenderingContext.prototype.clear and WebGL2RenderingContext.prototype.clear) to track actual rendered frames without crashing.
