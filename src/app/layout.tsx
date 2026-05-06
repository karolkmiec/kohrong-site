import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://kohrong.co"),
  title: "Koh Rong & Golden Sun Villa",
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
  return (
    <html lang="en">
      <body>
        {children}
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
