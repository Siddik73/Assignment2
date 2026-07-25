## 2024-07-25 - Prevent CDN Compromise Execution with SRI
**Vulnerability:** External scripts (Three.js, GSAP) loaded from CDNs lacked Subresource Integrity (SRI) attributes, allowing potential malicious code execution if the CDN was compromised.
**Learning:** External dependencies loaded dynamically via script tags without SRI present a supply chain attack vector, as the application implicitly trusts the integrity of the remote file.
**Prevention:** Always generate and append `integrity="sha384-..."` and `crossorigin="anonymous"` attributes when linking scripts or stylesheets from third-party CDNs to ensure cryptographic verification before execution.
