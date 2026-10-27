## 2024-05-24 - Add security headers via _headers
**Vulnerability:** External CDN script tags lacked Subresource Integrity (SRI) hashes or other protections. Adding SRI hashes can cause browser blocking, breaking the app and triggering Netlify CI failures.
**Learning:** In purely client-side static HTML/JS applications, security improvements to external resources must not break functionality. A safer alternative is adding security headers. Netlify generic 'Deploy failed' issues caused by submodules require `netlify.toml` to contain ONLY the submodule fetch override. Placing headers in `netlify.toml` fails CI.
**Prevention:** Use a `_headers` file for Netlify security configurations when `netlify.toml` is strictly constrained for CI workarounds.
