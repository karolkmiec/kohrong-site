import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://kohrong.co"),
  title: {
    default: "Golden Sun Villa - Private Villa Rental on Koh Rong, Cambodia",
    template: "%s | Koh Rong"
  },
  description:
    "A private villa retreat on Koh Rong island. Beach lifestyle, island events, and concierge support. Book direct with the owner.",
  openGraph: {
    title: "Golden Sun Villa - Private Villa Rental on Koh Rong, Cambodia",
    description:
      "A private villa retreat on Koh Rong island. Beach lifestyle, island events, and concierge support. Book direct with the owner.",
    url: "https://kohrong.co",
    siteName: "Golden Sun Villa",
    type: "website",
    images: [
      {
        url: "/images/villa/villa-1.jpg",
        width: 1200,
        height: 800,
        alt: "Golden Sun Villa - Koh Rong"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.GA_MEASUREMENT_ID;
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
              <Link href="/villa">The Villa</Link>
              <Link href="/gallery">Photo Stories</Link>
              <Link href="/news">News</Link>
              <Link href="/contact">
                Contact
              </Link>
            </nav>
            <Link className="header-cta" href="/book">
              Check availability
            </Link>
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
            </div>
            <div>
              <h4>Explore</h4>
              <p>
                <Link href="/villa">The Villa</Link>
              </p>
              <p>
                <Link href="/gallery">Photo Stories</Link>
              </p>
              <p>
                <Link href="/news">News & Events</Link>
              </p>
              <p>
                <Link href="/book">Book Your Stay</Link>
              </p>
              <p>
                <Link href="/contact">Contact</Link>
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
