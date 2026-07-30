## 2024-07-30 - Minigame Accessibility
**Learning:** Interactive minigames and dynamic status texts often use non-semantic elements (like divs) and lack ARIA live regions, making them invisible and silent to screen reader users.
**Action:** Convert non-semantic interactive elements to buttons with focus-visible styles and add aria-live='polite' to dynamic status containers.
