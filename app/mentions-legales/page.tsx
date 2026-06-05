import type { Metadata } from 'next'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Mentions légales',
  description:
    'Mentions légales d\'Auto Ecole Des Paquerettes. Informations sur l\'éditeur, l\'hébergement et les conditions d\'utilisation du site.',
  path: '/mentions-legales',
  keywords: ['mentions légales', 'informations légales'],
})

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-[#0B0F19] pt-20">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Mentions légales
        </h1>

        <div className="bg-[#151b2e] border border-white/10 rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Éditeur du site</h2>
            <div className="text-gray-300 space-y-2">
              <p><strong>Auto Ecole Des Paquerettes</strong></p>
              <p>Adresse : [Adresse complète de l'auto-école]</p>
              <p>Téléphone : [Numéro de téléphone]</p>
              <p>Email : [Adresse email]</p>
              <p>SIRET : [Numéro SIRET]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Directeur de la publication</h2>
            <div className="text-gray-300 space-y-2">
              <p><strong>[Nom du directeur]</strong></p>
              <p>Adresse : [Adresse du directeur]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Hébergement</h2>
            <div className="text-gray-300 space-y-2">
              <p><strong>[Nom de l'hébergeur]</strong></p>
              <p>Adresse : [Adresse de l'hébergeur]</p>
              <p>Téléphone : [Numéro de téléphone de l'hébergeur]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Propriété intellectuelle</h2>
            <p className="text-gray-300">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit d'auteur. 
              Toute reproduction, même partielle, est interdite sans autorisation préalable de l'Auto Ecole Des Paquerettes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Protection des données personnelles</h2>
            <p className="text-gray-300">
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. 
              Pour exercer ces droits, contactez-nous à l'adresse email mentionnée ci-dessus.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
            <p className="text-gray-300">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
