import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact - Golden Sun Villa, Koh Rong",
  description: "Email and direct contact for Golden Sun Villa on Koh Rong island, Cambodia."
};

export default function ContactPage() {
  return (
    <main className="container grid">
      <section className="card">
        <span className="kicker">Contact</span>
        <h1>Plan your Koh Rong stay</h1>
        <p>For booking requests, transfer planning, and general questions, contact us directly.</p>
        <div className="contact-list">
          <p>
            <strong>Email:</strong> <a href="mailto:bookings@kohrong.co">bookings@kohrong.co</a>
          </p>
          <p>
            <strong>Location:</strong> Koh Rong, Cambodia
          </p>
          <p>
            <strong>Quick response:</strong> most inquiries are answered within 24 hours.
          </p>
        </div>
        <p>
          Ready to book? <Link href="/book">Check availability</Link>.
        </p>
      </section>
    </main>
  );
}
