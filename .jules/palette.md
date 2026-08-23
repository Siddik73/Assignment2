## 2024-08-23 - Accessibility of Durability Test

**Learning:** The "durability test" mini-game was originally a non-semantic `div` with a click handler and no keyboard support. While an interesting visual mechanic, its use of `div` completely shut out screen reader users and users who navigate via keyboard. It also lacked ARIA labels to announce what the component was.
**Action:** When implementing custom interactive UI elements like click games or non-standard buttons, ALWAYS use semantic `<button>` elements, add `:focus-visible` styles for clear keyboard navigation cues, and ensure dynamic state changes (like hit counts) are announced via `aria-live` regions.
