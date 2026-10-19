## 2024-10-19 - Three.js Rendering Optimizations
**Learning:** Three.js defaults to rendering constantly, even when the `<canvas>` element is off-screen. It also attempts to match the device's native pixel ratio, which can cause severe performance degradation on ultra-high resolution displays (like 3x+ mobile screens) with minimal visual benefit.
**Action:** Always cap `WebGLRenderer.setPixelRatio` to a maximum of 2, and use `IntersectionObserver` to pause `renderer.render()` calls when the canvas is not in the viewport to save GPU/CPU cycles.

## 2024-10-19 - Fixing Netlify CI Submodule Issues
**Learning:** Adding `netlify.toml` with `GIT_SUBMODULE_FETCH = "false"` isn't always enough if the repository contains broken or unauthorized submodule tracking pointers (like a deleted `.gitmodules` file but lingering gitlink entries). Netlify's deployment can still fail when it attempts to initialize or clone the repo tree.
**Action:** When a repository has broken submodule links that cause CI failures, explicitly remove them using `git rm --cached <submodule-path>` and physically delete the directory if necessary before submission to ensure a clean build tree.
