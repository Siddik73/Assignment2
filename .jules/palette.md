## 2024-08-27 - Minigame Div Button Accessibility
**Learning:** In a canvas-heavy site, custom interactive elements (like the brick minigame) implemented as `div`s lack native keyboard support and screen reader context, making the main interaction invisible to AT.
**Action:** Always prefer semantic `<button>` elements for custom interactions instead of `<div>` elements with click handlers to guarantee out-of-the-box keyboard operability and accessible naming.
