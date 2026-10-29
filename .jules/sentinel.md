## 2024-10-30 - Added Content Security Policy (CSP) tag
**Vulnerability:** The application was missing basic security headers like a CSP, meaning cross-site scripting (XSS) could easily be performed if input is taken from the user and shown on screen without escaping.
**Learning:** For a static site, we can implement basic security by embedding a CSP meta tag directly in the HTML if modifying a `_headers` file is not an option.
**Prevention:** Always ensure a restrictive Content Security Policy is defined (e.g. via meta tag) to minimize the impact of XSS vulnerabilities.
