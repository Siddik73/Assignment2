## 2024-07-18 - Semantic Interactive Elements & Dynamic Updates
**Learning:** In this project's component context, non-semantic elements like `div` used for interactive game actions require manual role conversion or replacement with `<button>`, and dynamic feedback elements (hit counters) needed `aria-live="polite"` to natively announce updates to screen readers.
**Action:** Always replace non-semantic interactive `div`s with `<button>` and add explicit focus states and CSS resets. Use `aria-live` for dynamic UI counters.
