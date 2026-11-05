## 2024-11-05 - Interactive elements as generic divs
**Learning:** Found interactive components (like the mini-game brick) implemented as non-semantic `<div>` elements without ARIA labels, focus states, or keyboard support, which is an accessibility issue pattern for this app.
**Action:** Convert non-semantic interactive `<div>`s to semantic `<button>` elements, maintaining block display via CSS, and add ARIA attributes alongside focus-visible styles for keyboard accessibility.
