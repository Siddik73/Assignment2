## 2024-09-15 - Interactive Div Replaced with Button for Semantic A11y
**Learning:** The brick mini-game used a basic `<div>` element attached to a click handler without semantic meaning, breaking screen reader interaction and keyboard accessibility (tabbing/focusing).
**Action:** Always replace interactive `<div>` blocks meant for user click events with semantic `<button>` tags (with `appearance: none` and `padding: 0` if default styling interferes), ensuring proper ARIA labels and `:focus-visible` styling are provided.
