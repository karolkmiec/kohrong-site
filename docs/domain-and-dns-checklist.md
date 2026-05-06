# Domain and DNS checklist (GoDaddy + Vercel)

## Domain strategy
- Primary domain: `kohrong.co`
- Redirect domains: `kohrong24.com`, `kohrongtravel.com`, `kohrong.fun`, `kohrong.vip`

## GoDaddy setup
1. Open each domain in GoDaddy.
2. For `kohrong.co`:
   - Add `A` record for `@` to Vercel IP (`76.76.21.21`).
   - Add `CNAME` record for `www` to `cname.vercel-dns.com`.
3. For the 4 additional domains:
   - In Vercel Domains, add each domain as alias.
   - Set redirect to `https://kohrong.co` (301 permanent).
4. Wait for DNS propagation (up to 24h, usually faster).

## SSL and HTTPS
1. In Vercel project, verify all domains.
2. Ensure TLS certificate is issued for each domain.
3. Enable redirect from HTTP to HTTPS.

## Email placeholder
- Current contact email configured in site content: `bookings@kohrong.co`
- You can activate mailbox later using Zoho Mail or Google Workspace.
