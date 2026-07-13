## 2024-05-15 - Missing Subresource Integrity (SRI) on CDN Scripts
**Vulnerability:** External libraries (Three.js, GSAP) were being loaded from CDNs without SRI attributes.
**Learning:** If a CDN is compromised, malicious code could be injected into the external scripts and executed on the client side without detection.
**Prevention:** Always include Subresource Integrity (SRI) attributes (`integrity` and `crossorigin="anonymous"`) when linking external scripts or stylesheets from CDNs.
