## 2024-10-19 - Improved Accessibility of Mini-Game

**Learning:** Custom interactive elements (like the durability mini-game div) must include explicit `role="button"`, `tabindex="0"`, an `aria-label`, and specific keydown event listeners (`Enter` and `Space`) to be fully keyboard and screen-reader accessible.
**Action:** When implementing interactive non-semantic elements, always ensure they are fully navigable by keyboard and announced correctly by screen readers, maintaining clear `:focus-visible` styling.
