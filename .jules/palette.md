## 2024-05-18 - Replacing non-semantic interactive divs
**Learning:** When replacing a `<div>` acting as a button with a semantic `<button>` for keyboard accessibility, browser default styles can break the existing design.
**Action:** Explicitly reset default button styles using `appearance: none;` and `padding: 0;` in CSS to preserve visual design while gaining semantic and accessible benefits.
