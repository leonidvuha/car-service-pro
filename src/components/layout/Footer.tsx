import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-orange-400 text-xl">🔧</span>
              <span className="font-bold text-white text-lg">
                Car<span className="text-orange-400">Service</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Ihr zuverlässiger Partner für Reifenwechsel,
              Ölwechsel und alle Kfz-Reparaturen.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Leistungen & Preise
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-white transition-colors">
                  Termin buchen
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Musterstraße 1, 10115 Berlin</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+4930123456" className="hover:text-white transition-colors">
                  +49 30 123 456
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@carservice.de" className="hover:text-white transition-colors">
                  info@carservice.de
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Mo–Fr: 08:00–18:00 Uhr</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {currentYear} CarService. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
