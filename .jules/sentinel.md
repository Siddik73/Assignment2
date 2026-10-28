## 2024-10-28 - Missing Content Security Policy
**Vulnerability:** The application lacks a Content Security Policy (CSP), leaving it vulnerable to XSS.
**Learning:** Netlify CI configuration for static sites can be restricted due to submodules. Security enhancements should be implemented directly in the HTML if infrastructure config fails.
**Prevention:** Include a comprehensive CSP meta tag in the main HTML file to restrict resource origins.
