## 2024-11-08 - Content-Security-Policy implementation
**Vulnerability:** Missing Content-Security-Policy (CSP) allowed potential XSS and data injection attacks.
**Learning:** Using Netlify configuration headers for CSP triggers CI initialization errors when submodules are broken. Using an HTML meta tag instead avoids these Netlify initialization errors.
**Prevention:** Implement CSP via HTML meta tags rather than Netlify configuration headers in projects with broken or inaccessible Git submodules.
