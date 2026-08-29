## 2024-08-29 - Missing SRI Hashes on External Scripts
**Vulnerability:** External scripts loaded from cdnjs without Subresource Integrity (SRI) hashes and crossorigin="anonymous".
**Learning:** Omitted SRI hashes leave the site vulnerable if the CDN is compromised, allowing arbitrary script execution. This codebase loaded 3 scripts (three.js, gsap.js, scrolltrigger.js) missing this protection.
**Prevention:** Always verify external resources have integrity and crossorigin="anonymous" attributes attached when referencing CDN libraries.
