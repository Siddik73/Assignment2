## 2024-05-24 - Missing Subresource Integrity (SRI)
**Vulnerability:** External scripts loaded from CDNs without SRI hashes.
**Learning:** Missing SRI hashes allow attackers who compromise a CDN to inject malicious code into the application.
**Prevention:** Always include `integrity` and `crossorigin="anonymous"` attributes when loading external scripts from CDNs.
