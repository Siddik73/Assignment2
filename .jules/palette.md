## 2024-05-18 - Mini-game Accessibility Patterns
**Learning:** Custom interactive elements (like the durability mini-game brick) built with `<div>` lack native keyboard focus and screen reader semantics, making them inaccessible. Furthermore, dynamic text updates (like hit counters) aren't announced without `aria-live`.
**Action:** Replace interactive `<div>` elements with native `<button>` tags (or add appropriate roles/tabindex), and use `aria-live="polite"` on containers that update dynamically to ensure screen readers announce changes.
