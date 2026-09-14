## 2024-09-14 - Interactive Divs Need Button Semantics
**Learning:** Replacing non-semantic `<div>` elements that act as buttons (like `#brick-2d`) with `<button>` tags significantly improves accessibility by providing native keyboard support and screen reader recognition. However, you must remember to reset default browser styles (appearance, padding) to maintain the existing visual design.
**Action:** When adding interactivity to visual elements, default to semantic `<button>` tags with appropriate `aria-label`s and CSS resets rather than attaching click handlers to `<div>`s.
