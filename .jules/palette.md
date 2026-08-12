## 2024-08-12 - Converting interactive divs to buttons
**Learning:** When converting non-semantic HTML elements (like `div`) to semantic interactive elements (like `button`) for accessibility improvements, browser default styles (like padding, outline, and display properties) can cause visual regressions.
**Action:** Explicitly apply CSS resets (e.g., `padding: 0`, `outline: none`, `display: block`) to the new element in the stylesheet to preserve existing layout.
