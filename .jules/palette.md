## 2024-09-04 - Semantic Interactive Elements
**Learning:** Using a `<div>` for interactive elements like the mini-game brick prevents screen reader access and breaks keyboard navigation. Changing to a `<button>` fixes this but requires explicitly resetting default browser styles (`appearance: none`, `padding: 0`) to maintain the original visual design.
**Action:** Always use semantic `<button>` tags for interactive components and explicitly reset their default browser styling rather than relying on non-semantic `<div>` elements.
