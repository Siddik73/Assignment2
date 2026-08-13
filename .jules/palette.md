## 2024-08-13 - Keyboard Accessibility on Custom Divs
**Learning:** Custom interactive elements (like `#brick-2d`) lack default keyboard interactivity and semantics, making them inaccessible to screen readers and keyboard users.
**Action:** Always add `role="button"`, `tabindex="0"`, `aria-label`, focus styles, and `keydown` event listeners to make non-button elements accessible.
