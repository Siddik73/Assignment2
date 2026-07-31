## 2024-07-31 - Add Subresource Integrity (SRI) to CDN scripts
**Vulnerability:** The application was loading external libraries (Three.js, GSAP, ScrollTrigger) from a CDN without SRI attributes. If the CDN were compromised, malicious code could be injected into the application.
**Learning:** Adding `integrity` and `crossorigin="anonymous"` attributes to script tags is a simple and effective defense against supply-chain attacks.
**Prevention:** Always include SRI attributes when loading external resources from CDNs to ensure the integrity of the code being executed.
