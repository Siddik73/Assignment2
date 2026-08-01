## 2024-08-01 - Minigame Accessibility Pattern
**Learning:** Interactive minigames using non-semantic elements (like divs) for buttons and dynamic text updates (like hit counters) fail to provide context and feedback to screen readers and keyboard users.
**Action:** Always convert interactive 2D game elements into semantic `<button>` tags with explicit CSS resets and `:focus-visible` states, and apply `aria-live="polite"` to any dynamically updating score or status containers to ensure native screen reader announcements.
