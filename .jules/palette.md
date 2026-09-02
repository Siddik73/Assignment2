## 2024-09-02 - Interactive Divs Need Button Semantics
**Learning:** A div used as a clickable element in a mini-game lacks keyboard accessibility and screen reader semantics by default.
**Action:** Replace interactive divs with semantic `<button>` tags, reset default styles with `appearance: none; padding: 0;`, and ensure `:focus-visible` states are provided for keyboard users.
