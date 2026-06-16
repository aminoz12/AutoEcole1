import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/lib/seo/site-config'

const mapQuery = encodeURIComponent(siteConfig.address.full)

export default function ContactInfo() {
  return (
    <section className="bg-[#0B0F19] pb-16 lg:pb-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="font-poppins text-3xl font-bold text-white lg:text-4xl">
              Nous trouver à <span className="text-primary">Nanterre</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Auto Ecole Des Paquerettes vous accueille au {siteConfig.address.full}.
              Facilement accessible en voiture et en transports en commun à Nanterre (92).
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Coordonnées + horaires */}
            <div className="rounded-2xl border border-white/10 bg-[#151b2e] p-7">
              <h3 className="font-poppins text-lg font-semibold text-white">Coordonnées</h3>
              <ul className="mt-5 space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{siteConfig.address.full}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-white transition-colors">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <span>{siteConfig.email}</span>
                </li>
              </ul>

              <h3 className="mt-8 flex items-center gap-2 font-poppins text-lg font-semibold text-white">
                <Clock className="h-5 w-5 text-primary" />
                Horaires du bureau
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {siteConfig.openingHours.map((slot) => (
                  <li key={slot.days} className="flex justify-between gap-4">
                    <span className="font-medium text-gray-200">{slot.days}</span>
                    <span className="text-gray-400">{slot.hours}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://www.google.com/maps?q=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 font-poppins text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-opacity hover:opacity-90"
              >
                Itinéraire sur Google Maps
              </a>
            </div>

            {/* Carte */}
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl">
              <iframe
                title="Carte — Auto Ecole Des Paquerettes, Nanterre"
                src={`https://www.google.com/maps?q=${mapQuery}&z=15&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full lg:h-full"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
