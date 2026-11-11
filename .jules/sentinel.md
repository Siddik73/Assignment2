## 2024-11-12 - Add Content Security Policy
**Vulnerability:** Missing Content Security Policy (CSP), leaving the site vulnerable to XSS and data injection attacks if malicious scripts or styles are somehow injected.
**Learning:** Even static HTML sites using simple external CDNs need CSP to ensure defense in depth, especially when loading third-party scripts. Implementing CSP via an HTML meta tag avoids Netlify CI submodule initialization errors compared to using header configuration files.
**Prevention:** Always implement a strict CSP that only allows resources from explicitly trusted origins like 'self' and necessary CDNs. Use the meta tag approach for static sites to prevent CI configuration complications.
