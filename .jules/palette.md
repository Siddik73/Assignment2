## 2026-07-31 - Accessible Semantic Minigame
**Learning:** Interactive visual elements (like click-target minigames) built with `div` tags lack native keyboard support. Converting them to `<button>` tags grants immediate Space/Enter interaction, but requires explicit CSS resets and `:focus-visible` states to avoid visual regressions while ensuring focus clarity.
**Action:** Always use semantic `<button>` for any clickable interaction trigger, apply CSS resets, and add `aria-live="polite"` to associated dynamic counters.
