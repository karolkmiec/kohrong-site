import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://kohrong.co"),
  title: {
    default: "Koh Rong & Golden Sun Villa",
    template: "%s | Koh Rong"
  },
  description:
    "Official guide to Koh Rong island and Golden Sun Villa rentals, with travel tips and local events.",
  openGraph: {
    title: "Koh Rong & Golden Sun Villa",
    description:
      "Official guide to Koh Rong island and Golden Sun Villa rentals, with travel tips and local events.",
    url: "https://kohrong.co",
    siteName: "Koh Rong",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.GA_MEASUREMENT_ID;
  const whatsappHref = `https://wa.me/${siteContent.contact.whatsapp.replace(/\D/g, "")}`;
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="site-shell topbar">
            <Link href="/" className="brand">
              Golden Sun Villa
            </Link>
            <nav className="main-nav" aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/news">News</Link>
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="site-shell footer-grid">
            <div>
              <h3>Golden Sun Villa</h3>
              <p>Luxury tropical stay on Koh Rong with beach lifestyle, island events, and concierge support.</p>
            </div>
            <div>
              <h4>Contact</h4>
              <p>
                <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
              </p>
              <p>
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  {siteContent.contact.whatsapp}
                </a>
              </p>
            </div>
            <div>
              <h4>Explore</h4>
              <p>
                <Link href="/news">Latest News & Events</Link>
              </p>
              <p>
                <a href="https://kohrong.co" rel="noreferrer">
                  Official Island Guide
                </a>
              </p>
            </div>
          </div>
        </footer>

        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
