## 2026-07-11 - Add Subresource Integrity (SRI) to CDN scripts
**Vulnerability:** External scripts loaded from CDNs without integrity checks.
**Learning:** The application relies on CDN-hosted libraries (Three.js, GSAP) which, if compromised, could serve malicious scripts to users.
**Prevention:** Always use Subresource Integrity (SRI) hashes and crossorigin attributes when loading third-party scripts from external CDNs.
