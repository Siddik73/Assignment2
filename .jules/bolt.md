## 2024-10-12 - WebGL rendering optimization
**Learning:** Rendering a WebGL canvas when it is out of the viewport wastes CPU and GPU resources, and uncapped pixel ratios degrade performance on 3x DPI screens.
**Action:** Always use an IntersectionObserver to skip out-of-view renders and cap devicePixelRatio to 2 for Three.js projects.
