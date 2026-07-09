## 2024-05-18 - Missing SRI and CSP in static site
**Vulnerability:** External CDN scripts were included without Subresource Integrity (SRI) hashes, and the site lacked a Content Security Policy (CSP).
**Learning:** Even simple, static landing pages using external CDNs are vulnerable to supply-chain attacks if a CDN is compromised.
**Prevention:** Always include `integrity` and `crossorigin` attributes for third-party scripts. Implement a restrictive CSP to define allowable resource origins.
