import type { Metadata } from 'next'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'CGV - Conditions Générales de Vente',
  description:
    'Conditions Générales de Vente d\'Auto Ecole Des Paquerettes. Tarifs, modalités de paiement, conditions d\'annulation et de remboursement.',
  path: '/cgv',
  keywords: ['CGV', 'conditions générales de vente', 'tarifs auto-école'],
})

export default function CGV() {
  return (
    <main className="min-h-screen bg-[#0B0F19] pt-20">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Conditions Générales de Vente
        </h1>

        <div className="bg-[#151b2e] border border-white/10 rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Objet</h2>
            <p className="text-gray-300">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre 
              Auto Ecole Des Paquerettes et ses clients pour la fourniture de services de formation à la conduite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Tarifs</h2>
            <p className="text-gray-300 mb-4">
              Les tarifs des formations sont ceux en vigueur au jour de l'inscription. Ils sont indiqués sur notre site 
              et dans nos locaux. Auto Ecole Des Paquerettes se réserve le droit de modifier ses tarifs à tout moment, 
              les tarifs applicables étant ceux en vigueur au jour de la commande.
            </p>
            <p className="text-gray-300">
              Nos forfaits incluent : les heures de conduite, la formation au code de la route, l'accompagnement 
              administratif pour l'inscription à l'examen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Modalités de paiement</h2>
            <p className="text-gray-300 mb-4">
              Le paiement peut s'effectuer :
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li>En une seule fois à l'inscription</li>
              <li>En plusieurs fois selon les modalités définies au moment de l'inscription</li>
              <li>Par carte bancaire, espèces, chèque ou virement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Annulation et remboursement</h2>
            <p className="text-gray-300 mb-4">
              En cas d'annulation de la formation par le client :
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li>Avant le début de la formation : remboursement intégral sous réserve de frais de dossier de 50€</li>
              <li>Après le début de la formation : remboursement au prorata des heures non effectuées</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Les heures de conduite annulées moins de 24h à l'avance ne sont pas remboursées ni reportées.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Obligations du client</h2>
            <p className="text-gray-300 mb-4">
              Le client s'engage à :
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li>Être ponctuel aux rendez-vous de conduite</li>
              <li>Annuler les séances au moins 24h à l'avance</li>
              <li>Présenter les documents requis pour l'inscription à l'examen</li>
              <li>Respecter le règlement intérieur de l'auto-école</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Obligations de l'auto-école</h2>
            <p className="text-gray-300 mb-4">
              Auto Ecole Des Paquerettes s'engage à :
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li>Fournir un enseignement de qualité conforme aux exigences légales</li>
              <li>Assurer le suivi administratif de l'inscription à l'examen</li>
              <li>Respecter les horaires convenus avec le client</li>
              <li>Mettre à disposition des véhicules conformes et en bon état</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Réclamation</h2>
            <p className="text-gray-300">
              Toute réclamation doit être adressée par écrit à Auto Ecole Des Paquerettes dans un délai de 30 jours 
              à compter de l'événement concerné. L'auto-école s'engage à répondre dans un délai de 15 jours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Litiges</h2>
            <p className="text-gray-300">
              En cas de litige, les parties s'efforceront de trouver une solution à l'amiable. À défaut, le tribunal 
              compétent sera celui du siège social de l'auto-école.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
