## 2024-05-24 - Semantic elements in interactive widgets
**Learning:** Custom interactive components (like the minigame brick) were built using non-semantic `div`s, indicating a pattern of missing keyboard support for interactive elements.
**Action:** When working on custom interactive elements, ensure they are converted to semantic `<button>` tags and `aria-live` regions are used for dynamic feedback.
