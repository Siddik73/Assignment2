## 2024-10-30 - Accessible Minigame
**Learning:** The interactive "brick" in the durability minigame was a `div` element without keyboard focus, semantic meaning, or ARIA labels, making it completely inaccessible to screen reader users and keyboard navigators.
**Action:** Always use semantic HTML tags (`<button>`) for interactive elements, provide `aria-label` for icon-only or non-text interactive elements, ensure focus styles (`:focus-visible`) are visible, and use `aria-live="polite"` on dynamically updated content like score counters or message areas so screen readers can announce changes.
