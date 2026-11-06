## 2024-11-06 - Implement Content Security Policy (CSP)
**Vulnerability:** Missing Content Security Policy (CSP), leaving the application vulnerable to Cross-Site Scripting (XSS) and unauthorized resource loading.
**Learning:** We need to enforce CSP. However, adding server configuration files (like Netlify `_headers`) caused CI submodule initialization errors (`Deploy failed` without logs).
**Prevention:** To safely apply security headers while avoiding CI submodule breakage, implement the Content Security Policy via an HTML `<meta>` tag directly in `Index.html` rather than relying on server-side configuration files.
