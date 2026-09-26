## 2024-09-26 - Semantic HTML and Dynamic Text Updates
**Learning:** Interactive elements like mini-game components built with non-semantic divs block keyboard users, and visual text updates without ARIA attributes remain hidden from screen readers.
**Action:** Always replace non-semantic clickable elements with semantic <button> tags, explicitly reset their default browser styles (appearance: none, padding: 0), and use aria-live="polite" on dynamically updating text containers.
