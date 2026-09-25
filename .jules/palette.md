## 2024-09-25 - Accessible Mini-Game Controls and Dynamic Announcements
**Learning:** Interactive non-semantic `<div>` elements used as buttons trap keyboard users, and dynamic text updates (scores/messages) are invisible to screen readers without ARIA live regions.
**Action:** Always replace interactive divs with semantic `<button>` tags (resetting default styles with `appearance: none`), provide clear `aria-label`s, ensure visible `:focus-visible` states, and wrap dynamic text containers with `aria-live="polite"`.
