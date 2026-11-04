## 2024-11-04 - Security Enhancements
**Vulnerability:** Missing Subresource Integrity (SRI) on CDN scripts and missing Content-Security-Policy (CSP) headers.
**Learning:** Netlify CI submodule restrictions can limit the use of `_headers` or `netlify.toml` for adding security headers, so a CSP meta tag is an effective HTML-level alternative for static sites. SRI protects against CDN compromises.
**Prevention:** Always include SRI attributes for external scripts and define a strict CSP via meta tags or headers for defense-in-depth against XSS.
