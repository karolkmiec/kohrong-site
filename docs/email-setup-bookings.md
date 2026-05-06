# Setup `bookings@kohrong.co` (later)

Recommended options:
- Zoho Mail (lower cost)
- Google Workspace (best deliverability and familiar UI)

## DNS records to add in GoDaddy
1. MX records from chosen provider.
2. SPF TXT record.
3. DKIM TXT/CNAME record.
4. DMARC TXT record.

## Suggested DMARC start
`v=DMARC1; p=none; rua=mailto:bookings@kohrong.co; fo=1`

After 2-3 weeks, move to stricter policy (`quarantine` or `reject`) when everything is validated.

## Website integration
- Contact email in `data/site.json` is already set to `bookings@kohrong.co`.
- Once mailbox is active, incoming leads can be forwarded to your personal email if needed.
