import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Villa - Golden Sun Villa, Koh Rong",
  description:
    "Private villa on Koh Rong sleeping up to [X] guests. Pool, Wi-Fi, A/C, full kitchen, minutes from the beach. Direct booking."
};

const villaPhotos = [
  {
    src: "/images/villa/villa-1.jpg",
    alt: "Master bedroom with ocean view at Golden Sun Villa, Koh Rong",
    caption: "Master bedroom with ocean view at Golden Sun Villa"
  },
  {
    src: "/images/villa/villa-2.jpg",
    alt: "Private pool deck at sunset, Golden Sun Villa, Koh Rong",
    caption: "Private pool deck at sunset"
  },
  {
    src: "/images/villa/villa-3.jpg",
    alt: "Open-plan kitchen and dining area, Golden Sun Villa, Koh Rong",
    caption: "Open-plan kitchen and dining area"
  },
  {
    src: "/images/villa/villa-4.jpg",
    alt: "Living room with tropical garden view at Golden Sun Villa, Koh Rong",
    caption: "Living room with tropical garden view"
  },
  {
    src: "/images/villa/villa-5.jpg",
    alt: "Outdoor terrace and lounge area at Golden Sun Villa, Koh Rong",
    caption: "Outdoor terrace and lounge area"
  }
];

const faqItems = [
  {
    question: "Where exactly is Golden Sun Villa located?",
    answer:
      "The villa is on [BEACH/VILLAGE] on Koh Rong island, Cambodia. It's a [X]-minute walk to the beach and [X] minutes to [NEAREST_LANDMARK]. Full directions and a map are provided after booking."
  },
  {
    question: "How many guests can stay at the villa?",
    answer:
      "The villa comfortably sleeps up to [MAX_GUESTS] across [X] bedrooms. We can accommodate families, groups of friends, or small private events. Get in touch if your group is larger - we may be able to help."
  },
  {
    question: "How do I get to Koh Rong?",
    answer:
      "Most guests fly into Sihanoukville (Cambodia) or take a 4-hour bus from Phnom Penh, then board a 45-60 minute ferry from Serendipity Pier to Koh Rong. We can arrange the ferry tickets and pier-to-villa transfer in advance."
  },
  {
    question: "Do you offer airport or pier transfers?",
    answer:
      "Yes. We arrange transfers from Sihanoukville airport, the bus station, or the pier directly to the villa. Let us know your arrival details and we'll handle the logistics."
  },
  {
    question: "What's included in the stay?",
    answer:
      "Every stay includes: full villa exclusive use, Wi-Fi, air conditioning in all bedrooms, fully equipped kitchen, daily housekeeping, fresh linens and towels, and concierge support throughout your stay."
  },
  {
    question: "Is breakfast or food included?",
    answer:
      "Food is not included by default - the villa has a full kitchen so you can self-cater, and there are restaurants and cafes nearby. On request, we can arrange a private chef, grocery delivery, or a welcome breakfast for your first morning."
  },
  {
    question: "Is the villa suitable for families with children?",
    answer:
      "Yes. The villa is family-friendly. We can provide [extra beds / cots / high chairs] on request - just let us know your children's ages when you book."
  },
  {
    question: "Are pets allowed?",
    answer: "We don't currently host pets. Please contact us if this is essential for your stay and we'll see what we can do."
  },
  {
    question: "What's the check-in and check-out time?",
    answer:
      "Standard check-in is from 14:00 and check-out is by 11:00. Earlier check-in or later check-out can usually be arranged depending on availability - just ask."
  },
  {
    question: "Is there a minimum stay?",
    answer:
      "We typically ask for a 3-night minimum. During peak season (December-February) the minimum may be longer. Stays of 7+ nights receive a discount."
  },
  {
    question: "How do I pay and what's the deposit?",
    answer:
      "A 30% deposit confirms your booking. The remaining balance is due 14 days before arrival. We accept PayPal, Wise transfer, bank transfer, and cash USD on arrival. All prices are quoted in USD."
  },
  {
    question: "What's the cancellation policy?",
    answer:
      "Cancellation 30+ days before arrival: full refund minus a small admin fee. Cancellation 14-29 days before arrival: 50% refund. Cancellation under 14 days: non-refundable. We strongly recommend travel insurance for all guests."
  },
  {
    question: "Is the water and electricity reliable?",
    answer:
      "Yes. The villa runs on a stable electricity supply with backup, and water is filtered. All bathrooms have hot water. Wi-Fi is among the fastest available on the island."
  },
  {
    question: "What should I pack?",
    answer:
      "Light clothing, swimwear, reef-safe sunscreen, a hat, mosquito repellent, and any prescription medications you may need. Most basics are available on the island, but selection is limited and prices are higher than on the mainland."
  }
];

export default function VillaPage() {
  const villaSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Golden Sun Villa",
    description: "Private villa rental on Koh Rong island, Cambodia",
    image: "https://kohrong.co/images/villa/villa-1.jpg",
    url: "https://kohrong.co/villa",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Koh Rong",
      addressCountry: "KH"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "[VILLA_LAT]",
      longitude: "[VILLA_LNG]"
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Private Pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Full Kitchen", value: true }
    ]
  };

  return (
    <main className="container grid">
      <section className="hero">
        <span className="kicker">The Villa</span>
        <h1>Wake up to the ocean. Stay at Golden Sun Villa.</h1>
        <p>
          A private villa for up to [MAX_GUESTS] guests, just minutes from [BEACH_NAME]. Beach lifestyle, island
          events, and concierge support - all from one trusted base on Koh Rong.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/book">
            Check availability
          </Link>
          <a className="btn btn-secondary" href="mailto:bookings@kohrong.co">
            Email bookings@kohrong.co
          </a>
        </div>
      </section>

      <section className="card">
        <span className="kicker">At A Glance</span>
        <div className="glance-grid">
          <div className="glance-item">[X] Bedrooms</div>
          <div className="glance-item">[X] Bathrooms</div>
          <div className="glance-item">Sleeps [X]</div>
          <div className="glance-item">Private Pool</div>
          <div className="glance-item">Fast Wi-Fi</div>
          <div className="glance-item">Air Conditioning</div>
          <div className="glance-item">[X] min to Beach</div>
          <div className="glance-item">Full Kitchen</div>
        </div>
      </section>

      <section className="card">
        <span className="kicker">About The Villa</span>
        <h2>A private base on Koh Rong</h2>
        <p>
          Golden Sun Villa was built for the kind of travel that does not fit into a hotel room. A private home, just
          a few minutes from the water, designed for families and small groups who want space, comfort, and the
          freedom to set their own rhythm on the island.
        </p>
        <p>
          Days here start slow - coffee on the deck, the sound of waves, no schedule to keep. The villa offers [X]
          bedrooms, [X] bathrooms, an open-plan living and kitchen area, and a private pool surrounded by tropical
          greenery. Everything is finished with the things you actually need: strong air conditioning, fast Wi-Fi, hot
          water, a fully equipped kitchen, and outdoor space designed for long evenings.
        </p>
        <p>
          What makes Golden Sun Villa different is the support that comes with it. We live on the island. We'll
          arrange your transfers from the mainland, point you to the beaches worth visiting, book a snorkeling boat
          for you, recommend where to eat, and handle anything you need during your stay. You get the privacy of a
          villa with the convenience of a hotel - without the crowd.
        </p>
      </section>

      <section className="card">
        <span className="kicker">Gallery</span>
        <div className="villa-gallery">
          {villaPhotos.map((photo) => (
            <figure key={photo.src} className="villa-gallery-item villa-figure">
              <Image src={photo.src} alt={photo.alt} width={1200} height={800} className="villa-gallery-image" />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="card">
        <span className="kicker">Where You'll Be</span>
        <h2>Location</h2>
        <p>
          Golden Sun Villa is located on [BEACH_NAME / VILLAGE_NAME], on the [west / east / north] side of Koh Rong.
          The villa sits [X] minutes' walk from the beach and [X] minutes from [LANDMARK - e.g., Kerfuffle Bay / Koh
          Touch pier / Long Set Beach].
        </p>
        <p><strong>Getting here:</strong></p>
        <ul className="info-list">
          <li>From Sihanoukville: [X]-minute boat from Serendipity / Koh Rong pier</li>
          <li>From Phnom Penh: 4-hour bus to Sihanoukville + ferry</li>
          <li>From Siem Reap: domestic flight to Sihanoukville + ferry</li>
          <li>Pier-to-villa transfer can be arranged on request</li>
        </ul>
        <div className="map-wrap">
          <iframe
            title="Golden Sun Villa location map"
            src="https://www.google.com/maps?q=10.6926,103.2549&z=13&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="card">
        <span className="kicker">Rates</span>
        <h2>Pricing available on request</h2>
        <p>
          Final rates will be published once the villa is fully completed. Contact us for current availability and a
          personalized quote.
        </p>
        <p>All rates are in USD. Discounts available for stays of 7+ nights.</p>
      </section>

      <section className="card">
        <span className="kicker">FAQ</span>
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="card cta-panel">
        <h2>Ready to plan your stay?</h2>
        <p>
          Send us your dates and we'll come back with availability and a quote within 24 hours. No booking platform
          fees - direct contact, direct rates.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/book">
            Check availability
          </Link>
          <a className="btn btn-secondary" href="mailto:bookings@kohrong.co">
            Email bookings@kohrong.co
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(villaSchema) }} />
    </main>
  );
}
