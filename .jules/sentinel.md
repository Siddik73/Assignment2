## 2024-10-26 - Add Content Security Policy
**Vulnerability:** Missing Content Security Policy (CSP) headers in a web application using external scripts and fonts via CDNs.
**Learning:** The application directly references external resources (`cdnjs.cloudflare.com`, `fonts.googleapis.com`) without a CSP. This could allow execution of unauthorized scripts if an attacker finds a way to inject them. Adding a basic CSP via meta tag improves defense-in-depth by restricting sources for scripts, styles, fonts, and images.
**Prevention:** Always include a `Content-Security-Policy` header or meta tag in web projects to explicitly whitelist trusted origins for executable and stylistic resources.
