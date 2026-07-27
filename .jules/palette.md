## 2024-07-27 - Screen Reader Support for Dynamic Game Counters
**Learning:** For interactive minigames or dynamic UI components (like hit counters and durability messages), screen readers natively miss the updates without `aria-live`.
**Action:** Use `aria-live="polite"` on dynamic status containers so screen readers announce updates without disrupting the user.
