## 2023-11-07 - Implement Content-Security-Policy via Meta Tag
**Vulnerability:** Missing Content-Security-Policy (CSP) headers
**Learning:** Netlify CI deployment fails with Git submodule initialization errors (missing .gitmodules). Attempting to use a _headers file or netlify.toml for security headers can trigger these initialization errors if the build process tries to parse or deploy them as a standard build before failing on submodules.
**Prevention:** Using an HTML `<meta http-equiv="Content-Security-Policy">` tag allows us to implement a robust CSP without requiring a build step or additional configuration files that might trigger Netlify's CI submodule restrictions.
