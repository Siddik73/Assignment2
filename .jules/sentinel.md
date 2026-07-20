## 2024-07-21 - [MEDIUM] Supply Chain Security for CDN Scripts
**Vulnerability:** External libraries (Three.js, GSAP) loaded via CDNs lacked Subresource Integrity (SRI) validation, risking arbitrary code execution if the CDN was compromised.
**Learning:** The project's architecture, which eschews package managers for direct CDN links, inherently places high trust in external infrastructure. Without a build step to manage dependencies securely, SRI is the only practical defense against supply chain attacks in this environment.
**Prevention:** Consistently apply `integrity` and `crossorigin` attributes using pre-computed SHA hashes for all external scripts and stylesheets as a strict standard.
