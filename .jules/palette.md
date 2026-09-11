## 2024-05-24 - Semantic Buttons and Live Regions for Mini-Games
**Learning:** Interactive mini-games built with raw `div` elements lack keyboard navigability and fail to announce score or status updates to screen readers.
**Action:** Always use semantic `<button>` elements for clickable targets (resetting default styles) and apply `aria-live="polite"` to dynamically updating text regions like score counters or status messages.
