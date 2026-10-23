## 2024-10-23 - Accessible Interactive Divs
**Learning:** Converting a custom interactive div to a <button> can cause visual regressions due to default browser styling.
**Action:** Keep the <div> tag, add role="button", tabindex="0", and aria-label attributes, implement a keydown event listener to trigger on Enter/Space, and add a :focus-visible CSS outline for keyboard users.
