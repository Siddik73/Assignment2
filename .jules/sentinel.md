## 2024-11-04 - Security Enhancements
**Vulnerability:** Missing Content-Security-Policy (CSP) headers.
**Learning:** Netlify CI submodule restrictions can limit the use of `_headers` or `netlify.toml` for adding security headers, so a CSP meta tag is an effective HTML-level alternative for static sites.
**Prevention:** Define a strict CSP via meta tags or headers for defense-in-depth against XSS. When adding a CSP, carefully test if `'unsafe-inline'` is required in `script-src` for any inline scripts used by the application to avoid breaking functionality.
