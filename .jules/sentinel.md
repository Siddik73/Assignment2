## 2026-11-02 - Add Content-Security-Policy
**Vulnerability:** Missing Content-Security-Policy (CSP) headers leaving the application vulnerable to Cross-Site Scripting (XSS) and data injection attacks.
**Learning:** This is a static HTML site. Implementing a CSP header using a meta tag is an effective way to improve security for static files. Submodules and netlify.toml constraints apply if there's CI failure on Netlify deployments.
**Prevention:** Include CSP headers by default for new static pages, restricting sources to only necessary ones.
