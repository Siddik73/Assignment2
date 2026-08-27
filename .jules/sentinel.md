## 2024-08-27 - Unverified CDN Assets
**Vulnerability:** External dependencies (Three.js, GSAP) loaded via CDN without Subresource Integrity (SRI) hashes.
**Learning:** Third-party scripts executed without integrity verification pose a supply chain risk if the CDN is compromised.
**Prevention:** Always append `integrity` and `crossorigin="anonymous"` attributes when loading remote executable assets.
