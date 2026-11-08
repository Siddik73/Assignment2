## 2024-11-08 - Interactive DIVs lack accessibility roles
**Learning:** Custom interactive elements (like `#brick-2d`) in this app's minigames are built using plain `<div>` tags without keyboard event listeners or ARIA roles, making them completely inaccessible to keyboard and screen reader users.
**Action:** When implementing custom interactive UI elements, always ensure they include `role="button"`, `tabindex="0"`, keyboard event handlers (Space/Enter), and appropriate `:focus-visible` styles.
