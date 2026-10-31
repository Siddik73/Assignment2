## 2024-10-31 - Add Content-Security-Policy Meta Tag
**Vulnerability:** Missing Content-Security-Policy (CSP) allowed resources to be loaded from any origin, increasing the risk of Cross-Site Scripting (XSS).
**Learning:** For pure static HTML sites without a build step or backend configuration, a `<meta http-equiv="Content-Security-Policy">` tag is an effective way to implement CSP directly within the document.
**Prevention:** Always define a strict CSP for web applications, either via HTTP headers (e.g., using `_headers` in Netlify) or `<meta>` tags for static files, to restrict resource loading to trusted sources.
