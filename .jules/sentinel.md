## 2024-11-05 - Add Content-Security-Policy (CSP)
**Vulnerability:** Missing Content-Security-Policy (CSP) headers, making the application vulnerable to Cross-Site Scripting (XSS) and data injection attacks.
**Learning:** Pure static HTML applications without a build step or server configuration file often lack security headers. We must manually inject a CSP meta tag into the HTML to secure the application.
**Prevention:** Always include a strong Content-Security-Policy meta tag in the `<head>` of HTML files, especially when loading external resources like scripts and fonts via CDNs.
