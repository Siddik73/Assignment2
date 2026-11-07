## 2024-05-24 - Interactive div to accessible button
**Learning:** The mini-game brick was a `<div>` acting as a button without keyboard accessibility or screen reader context.
**Action:** Always convert interactive divs to `<button>` elements with `aria-label` and `:focus-visible` styles to ensure full accessibility for interactive elements.
