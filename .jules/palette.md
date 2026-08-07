## 2024-08-08 - Use Semantic Buttons for Custom Interactive Elements
**Learning:** Using non-semantic elements (like `div`) for highly interactive UI components (such as a clickable mini-game element) breaks native keyboard navigation and screen reader support.
**Action:** Always replace `div`s with `button`s for clickable elements to restore native accessibility, while ensuring explicit CSS resets (e.g., `padding: 0; outline: none;`) and custom `:focus-visible` outlines are applied to prevent visual regressions.
