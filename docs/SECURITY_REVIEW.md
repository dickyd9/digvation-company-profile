# Defensive Security Review

## Review scope

- Dependencies and lockfile.
- Public environment variables and secret boundaries.
- Inquiry input validation, payload size, output escaping, honeypot, and Turnstile.
- External links and URLs.
- Third-party analytics and consent loading.
- Static security headers and CSP.
- Public source and generated assets.

## Findings

### Implemented

- Inquiry payloads reject unsupported content types and bodies above 64 KB.
- The 64 KB limit checks the actual request body even when `Content-Length` is missing or inaccurate.
- User-controlled email content is HTML escaped.
- JSON-LD output escapes script-breaking characters before inline rendering.
- Provider tokens and mail credentials remain server-only.
- Honeypot submissions return a neutral success response.
- Turnstile supports hostname allowlisting.
- External links opened in a new tab use `noopener noreferrer`.
- CSP, HSTS, frame denial, MIME-sniffing protection, referrer policy, and permissions policy are configured.
- Inquiry responses and API paths use no-store caching.
- Turnstile network failure returns a controlled verification error instead of leaking an unhandled exception.

### Local validation result

- Full `npm audit`: 0 known vulnerabilities across production and development dependencies.
- Credential-pattern scan: no matches in 103 tracked source, function, and public files.
- `.env`, `.env.local`, and `.dev.vars` remain ignored by Git.
- Production output contains no source maps.
- Seven security header directives and fourteen permanent legacy redirects are configured.
- Inquiry handler tests cover valid dry-run delivery, unsupported content type, and oversized bodies without a content-length header.

### Requires deployment validation

- Cloudflare must serve the repository headers exactly as configured.
- Turnstile must be enabled with production keys and an exact hostname allowlist.
- The inquiry endpoint should use a Cloudflare rate-limit rule before high-volume campaigns. Turnstile and honeypot reduce abuse but are not equivalent to a measured server-side rate limit.
- Third-party analytics destinations must be checked against the production CSP after real IDs are configured.
- Source-map exposure must be checked on the deployed build if the hosting pipeline changes build defaults.

No theoretical issue is recorded as a confirmed production vulnerability without external evidence.
