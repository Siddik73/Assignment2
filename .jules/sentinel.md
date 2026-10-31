## 2024-10-31 - Add Content-Security-Policy Meta Tag
**Vulnerability:** Missing Content-Security-Policy (CSP) allowed resources to be loaded from any origin, increasing the risk of Cross-Site Scripting (XSS).
**Learning:** For pure static HTML sites where `netlify.toml` must be constrained to fix submodule errors, a `<meta http-equiv="Content-Security-Policy">` tag is a valid and effective alternative to implement CSP directly within the document.
**Prevention:** Always define a strict CSP for web applications, utilizing `<meta>` tags when header configuration files are restricted, to ensure resources are loaded only from trusted sources.
