## 2024-10-24 - Three.js IntersectionObserver Double-Rendering Issue
**Learning:** When implementing an IntersectionObserver to control a requestAnimationFrame loop (e.g., for Three.js), the observer fires asynchronously on initialization. Assuming it starts as true and directly calling animate() will queue duplicate animation frames, causing a severe double-rendering performance regression.
**Action:** Initialize the state variable (isRendering) to false and explicitly track state transitions (if (isRendering && !wasRendering)) before restarting the animation loop.
