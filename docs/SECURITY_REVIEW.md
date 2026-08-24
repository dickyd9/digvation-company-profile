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
- User-controlled email content is HTML escaped.
- JSON-LD output escapes script-breaking characters before inline rendering.
- Provider tokens and mail credentials remain server-only.
- Honeypot submissions return a neutral success response.
- Turnstile supports hostname allowlisting.
- External links opened in a new tab use `noopener noreferrer`.
- CSP, HSTS, frame denial, MIME-sniffing protection, referrer policy, and permissions policy are configured.
- Inquiry responses and API paths use no-store caching.

### Requires deployment validation

- Cloudflare must serve the repository headers exactly as configured.
- Turnstile must be enabled with production keys and an exact hostname allowlist.
- The inquiry endpoint should use a Cloudflare rate-limit rule before high-volume campaigns. Turnstile and honeypot reduce abuse but are not equivalent to a measured server-side rate limit.
- Third-party analytics destinations must be checked against the production CSP after real IDs are configured.
- Source-map exposure must be checked on the deployed build if the hosting pipeline changes build defaults.

No theoretical issue is recorded as a confirmed production vulnerability without external evidence.
