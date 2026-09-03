## 2024-09-03 - Accessible Minigame
**Learning:** The mini-game interaction relied on a non-semantic div with click handlers, which made it completely inaccessible to keyboard users and hid dynamic durability updates from screen readers.
**Action:** Always use semantic `<button>` elements for interactive components, explicitly reset button styles if replacing a styled div, add `:focus-visible` styles to show focus without affecting pointer users, and use `aria-live="polite"` on dynamically changing status elements.
