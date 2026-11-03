## 2024-11-03 - CI Submodule Restrictions
**Vulnerability:** Missing security headers due to Netlify CI failing when using `_headers` or `netlify.toml` `[[headers]]` to bypass submodules.
**Learning:** Netlify CI parsing logic can fail when complex header configurations are combined with critical submodule bypass configurations in a non-build static site.
**Prevention:** Implement critical security headers like Content-Security-Policy directly as `<meta>` tags in the HTML when Netlify server-level configurations are unstable.
