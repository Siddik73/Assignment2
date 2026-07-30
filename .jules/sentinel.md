## 2026-07-30 - Add SRI hashes to CDN scripts
**Vulnerability:** External CDNs for critical dependencies (Three.js and GSAP) lacked Subresource Integrity (SRI) hashes in the `<script>` tags.
**Learning:** Without SRI, a compromise at the CDN level could lead to malicious code execution in the application. While versioned URLs are used, they don't guarantee file integrity against server-side changes.
**Prevention:** Always verify and include SRI hashes (`integrity` attribute) along with `crossorigin="anonymous"` when sourcing third-party scripts or stylesheets from a CDN. Use the cdnjs API or generate them securely.
