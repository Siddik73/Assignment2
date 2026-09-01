## 2024-05-23 - Interactive elements masquerading as divs
**Learning:** Interactive UI elements built as non-semantic `<div>`s inherently lack keyboard accessibility (Enter/Space to trigger) and focus management, effectively blocking screen reader and keyboard-only users from engaging with core interactions.
**Action:** Always replace click-bound `<div>` elements with semantic `<button>` tags (or appropriately role-mapped elements), explicitly reset default styles (`appearance: none; padding: 0`), provide a descriptive `aria-label`, and establish clear `:focus-visible` styling.
