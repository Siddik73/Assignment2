## 2024-11-06 - Accessible Interactive DOM Elements
**Learning:** Interactive DOM-based mini-games (like a clickable div) often lack semantic roles and keyboard accessibility, while their dynamic feedback is missed by screen readers.
**Action:** Always convert custom interactive elements to semantic `<button>` elements, apply `display: block` to prevent layout shifts, ensure visible focus states, and use `aria-live` on dynamically updating text containers to ensure all users receive real-time feedback.
