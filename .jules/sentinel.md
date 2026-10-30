## 2024-06-25 - Content Security Policy Addition
**Vulnerability:** Missing Content Security Policy (CSP) headers leaving the application vulnerable to XSS and data injection.
**Learning:** For a static site using external CDNs (Three.js, GSAP, Google Fonts), a CSP is necessary to restrict resource loading solely to trusted origins. Without a build step or server, this must be handled via a `<meta>` tag in the main HTML file.
**Prevention:** Always implement a CSP, even for simple static sites, using either HTTP headers (if supported by hosting) or `<meta>` tags to enforce a strict whitelist of allowed resource origins.
