## 2024-08-31 - Semantic Interactive Elements
**Learning:** In this static site's mini-game, an interactive element was built using a non-semantic `<div>` instead of a `<button>`, which completely broke screen reader support and keyboard accessibility.
**Action:** Always use semantic HTML tags (like `<button>`) for interactive elements, remembering to reset default browser styles (`appearance: none; padding: 0;`) and explicitly provide focus states (`:focus-visible`) and `aria-label`s for icon-only components.
