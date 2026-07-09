## 2026-07-09 - Netlify Case Sensitivity
**Learning:** Netlify deployments are case-sensitive regarding the entry point. A file named `Index.html` (uppercase 'I') will cause deploy failures because the system specifically looks for `index.html`.
**Action:** Always ensure the main HTML entry point is named strictly `index.html` in lowercase.
