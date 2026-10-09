## 2026-10-09 - Interactive Div Keyboard Accessibility
**Learning:** When using arbitrary `div` elements for interactive minigame components like a clickable brick, they inherently lack keyboard accessibility, excluding users who rely on keyboards or screen readers.
**Action:** Always add `role="button"`, `tabindex="0"`, explicit `keydown` handlers for Enter/Space, and visible focus styles to non-native interactive elements.
