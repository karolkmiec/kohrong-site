import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Availability - Golden Sun Villa, Koh Rong",
  description: "Send us your dates and we'll respond with availability and a personalized quote within 24 hours."
};

export default function BookPage() {
  return (
    <main className="container grid">
      <section className="card">
        <span className="kicker">Check Availability</span>
        <h1>Tell us your travel dates</h1>
        <p>Send us your dates and we'll come back with availability and a personalized quote within 24 hours.</p>
        <form
          className="book-form"
          action="https://formspree.io/f/xdkzdgkv"
          method="POST"
          aria-label="Booking inquiry form"
        >
          <label>
            Full name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <div className="form-grid">
            <label>
              Arrival date
              <input type="date" name="arrivalDate" required />
            </label>
            <label>
              Departure date
              <input type="date" name="departureDate" required />
            </label>
          </div>
          <label>
            Number of guests
            <input type="number" name="guests" min={1} max={20} required />
          </label>
          <label>
            Message (optional)
            <textarea name="message" rows={5} placeholder="Flight details, transfer requests, special plans..." />
          </label>
          <button type="submit" className="btn btn-primary">
            Send inquiry
          </button>
        </form>
      </section>
    </main>
  );
}
