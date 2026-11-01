## 2024-11-01 - Convert 2D Brick to Button
**Learning:** Changing a non-semantic div to a semantic button element creates layout shifts because `button` is natively `inline-block` while `div` is natively `block`. Also, dynamically updated text elements like hit counters need `aria-live="polite"` for screen readers.
**Action:** When converting divs to buttons, remember to explicitly add `display: block` to the CSS, and add `aria-live` to dynamic feedback elements.
