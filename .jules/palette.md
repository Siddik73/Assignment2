## 2024-05-24 - Semantic Buttons for Minigames
**Learning:** Using non-semantic elements (like `div`) for interactive minigames breaks keyboard accessibility and hides dynamic feedback from screen readers.
**Action:** Always convert interactive elements to `button` with explicit CSS resets (`padding: 0`, `outline: none`), use `aria-label` for the action, and apply `aria-live="polite"` to dynamically updated score/message containers.
