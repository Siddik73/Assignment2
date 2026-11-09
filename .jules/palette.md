## 2024-11-09 - Accessible interactive elements
**Learning:** Using generic `div` elements for interactive elements like the mini-game brick prevents keyboard navigation and screen reader access.
**Action:** Always use semantic `<button>` elements for clickable actions and provide an `aria-label` when the button content is purely visual or decorative.
