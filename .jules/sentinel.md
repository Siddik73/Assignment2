## 2026-11-09 - HTML CSP Meta Tag Workaround
**Vulnerability:** Missing Content-Security-Policy headers allowed potential XSS or data injection.
**Learning:** When attempting to enforce CSP headers in Netlify CI, configuring them via a netlify.toml `[[headers]]` block can trigger deployment failures if the repository contains broken or unmapped submodules, as it forces full CI initialization. Using an HTML `<meta http-equiv="Content-Security-Policy">` alternative avoids Netlify initialization errors while still enforcing the policy.
**Prevention:** To avoid submodule-related Netlify CI failures, implement CSP directly in the HTML meta tags rather than relying on Netlify configuration headers.
