## 2024-05-14 - Semantic button conversion
**Learning:** Generic div elements used as interactive elements lack native keyboard support (Space/Enter) and screen reader context, making custom minigames inaccessible to keyboard users.
**Action:** Always convert interactive generic elements (div, span) to semantic <button> elements to automatically inherit keyboard interactivity and add appropriate aria-labels for screen reader context.
