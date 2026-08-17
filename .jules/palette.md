## 2024-05-20 - Interactive Mini-Game Elements Accessibility
**Learning:** Using `<div>` for interactive mini-game elements without semantics prevents keyboard users from participating and lacks screen reader support.
**Action:** Always convert interactive elements to `<button>` with proper ARIA labels and CSS resets (`padding: 0`, `outline: none`, `display: block`) to maintain the visual layout while gaining semantic accessibility and default keyboard support.
