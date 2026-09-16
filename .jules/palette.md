## 2024-05-24 - Semantic Buttons for Custom Game Elements
**Learning:** Custom interactive elements (like the 2D brick minigame) built with `<div>` tags completely fail screen readers and keyboard navigation, isolating disabled users from core engagement features.
**Action:** Always use semantic `<button>` tags for interactive custom elements, applying `appearance: none` and custom `:focus-visible` states to preserve the visual design while ensuring full accessibility.
