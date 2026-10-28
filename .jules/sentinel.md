## 2024-10-28 - Missing Security Headers
**Vulnerability:** Missing fundamental security headers on a statically hosted application.
**Learning:** For apps without a backend, security headers must be provided via the hosting configuration (e.g., `netlify.toml`).
**Prevention:** Implement defense-in-depth by configuring standard headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`) for static deployments.
