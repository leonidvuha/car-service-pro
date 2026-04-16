import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: "🔄",
    title: "Reifenwechsel",
    description: "Sommer- und Winterreifen professionell montiert und ausgewuchtet.",
    price: "ab 49 €",
  },
  {
    icon: "🛢️",
    title: "Ölwechsel",
    description: "Motoröl und Filter wechseln – schnell und mit Markenöl.",
    price: "ab 59 €",
  },
  {
    icon: "🛑",
    title: "Bremsenservice",
    description: "Bremsbeläge, Bremsscheiben und Bremssättel prüfen und ersetzen.",
    price: "ab 89 €",
  },
  {
    icon: "🔍",
    title: "TÜV-Vorbereitung",
    description: "Fahrzeuginspektion und Vorbereitung für die Hauptuntersuchung.",
    price: "ab 39 €",
  },
  {
    icon: "⚡",
    title: "Elektrik & Diagnose",
    description: "Fehlerauslese, Batteriecheck und elektrische Reparaturen.",
    price: "ab 35 €",
  },
  {
    icon: "❄️",
    title: "Klimaanlage",
    description: "Klimaanlage befüllen, prüfen und desinfizieren.",
    price: "ab 69 €",
  },
];

const reasons = [
  {
    icon: "⚡",
    title: "Schnelle Abwicklung",
    description:
      "Die meisten Arbeiten erledigen wir noch am selben Tag. Kein langes Warten.",
  },
  {
    icon: "🏆",
    title: "Geprüfte Qualität",
    description:
      "Nur Originalteile und Markenprodukte. Mit Qualitätsgarantie auf alle Arbeiten.",
  },
  {
    icon: "💶",
    title: "Faire Preise",
    description:
      "Transparente Preise ohne versteckte Kosten. Kostenvoranschlag immer kostenlos.",
  },
];

const reviews = [
  {
    name: "Klaus M.",
    rating: 5,
    text: "Super schnell und professionell. Reifenwechsel in unter 30 Minuten erledigt. Komme immer wieder!",
    date: "März 2025",
  },
  {
    name: "Sabine K.",
    rating: 5,
    text: "Endlich eine Werkstatt, der man vertrauen kann. Faire Preise und sehr freundliches Personal.",
    date: "Februar 2025",
  },
  {
    name: "Thomas R.",
    rating: 5,
    text: "TÜV-Vorbereitung hat alles auf Anhieb bestanden. Sehr kompetentes Team. Absolute Empfehlung!",
    date: "Januar 2025",
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-orange-400 text-lg">★</span>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="bg-slate-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-orange-500/20 text-orange-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Ihr Kfz-Meisterbetrieb in Berlin
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Schnell. Zuverlässig.{" "}
            <span className="text-orange-400">Günstig.</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Von Reifenwechsel bis TÜV-Vorbereitung — wir kümmern uns um Ihr
            Fahrzeug. Jetzt einfach online Termin buchen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Termin buchen →
            </Link>
            <Link
              href="/services"
              className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Alle Leistungen
            </Link>
          </div>
          {/* Trust bar */}
          <div className="flex flex-wrap justify-center gap-6 mt-14 text-slate-400 text-sm">
            <span>✅ Über 2.000 zufriedene Kunden</span>
            <span>✅ 15 Jahre Erfahrung</span>
            <span>✅ Kostenlose Diagnose</span>
          </div>
        </div>
      </section>

      {/* ── 2. Leistungen ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">
              Unsere Leistungen
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Alles rund ums Auto — aus einer Hand, mit Qualitätsgarantie.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-orange-200 transition-all group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-block bg-orange-50 text-orange-600 font-semibold text-sm px-3 py-1 rounded-full">
                  {service.price}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
            >
              Alle Leistungen & Preise ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. Warum wir ── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">
              Warum CarService?
            </h2>
            <p className="text-slate-500">
              Das sind die Gründe, warum unsere Kunden immer wiederkommen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {reason.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Bewertungen ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">
              Was unsere Kunden sagen
            </h2>
            <p className="text-slate-500">
              Über 500 Bewertungen — durchschnittlich 4,9 von 5 Sternen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-slate-50 rounded-2xl p-6 border border-gray-100"
              >
                <StarRating count={review.rating} />
                <p className="text-slate-600 text-sm leading-relaxed mt-3 mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800 text-sm">
                    {review.name}
                  </span>
                  <span className="text-slate-400 text-xs">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA Banner ── */}
      <section className="bg-orange-500 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bereit für Ihren Termin?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Buchen Sie jetzt online — schnell, einfach und kostenlos.
            Wir melden uns innerhalb von 2 Stunden.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-xl text-lg hover:bg-orange-50 transition-colors"
          >
            Jetzt Termin buchen
          </Link>
        </div>
      </section>
    </>
  );
}
