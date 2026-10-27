## 2024-05-24 - Add security headers via netlify.toml
**Vulnerability:** External CDN script tags lacked Subresource Integrity (SRI) hashes or other protections. Adding SRI hashes can cause browser blocking, breaking the app and triggering Netlify CI failures.
**Learning:** In purely client-side static HTML/JS applications, security improvements to external resources must not break functionality. A safer alternative is adding security headers. These should be placed in `netlify.toml` along with other configuration for robust handling across environments.
**Prevention:** Use `netlify.toml` for configuring security headers to ensure they are reliably processed by Netlify CI.
