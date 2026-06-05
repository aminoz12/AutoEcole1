const groups = [
  {
    title: 'Tarifs épreuve théorique',
    items: [
      { label: 'Frais de gestion et d’inscription', price: '200€' },
      { label: 'Accompagnement à l’examen théorique', price: '30€' },
      { label: 'Forfait code', price: '399€' },
      { label: 'Stage code accéléré', price: '249€' },
      { label: 'Pack web (1 mois)', price: '10€' },
      { label: 'Accès au code en salle (valable 12 mois)', price: '150€' },
      { label: 'Évaluation de départ (manuelle)', price: '60€' },
      { label: 'Évaluation de départ (automatique)', price: '65€' },
    ],
  },
  {
    title: 'Forfait annulation permis',
    items: [
      { label: 'Code', price: '299€' },
      { label: 'Code + Conduite (4h)', price: '749€' },
      { label: 'Accompagnement à l’examen pratique', price: '50€' },
    ],
  },
  {
    title: 'Heure supplémentaire',
    items: [
      { label: 'Heure supplémentaire (manuelle)', price: '60€' },
      { label: 'Heure supplémentaire (automatique)', price: '65€' },
      { label: 'Accompagnement à l’épreuve de la catégorie B', price: '50€' },
    ],
  },
  {
    title: 'Matériel pédagogique',
    items: [
      { label: 'Livre code', price: '20€' },
      { label: 'Livret d’apprentissage', price: '10€' },
    ],
  },
]

const perfectionnement = {
  title: 'Perfectionnement à la conduite',
  subgroups: [
    {
      subtitle: 'Boîte manuelle',
      items: [
        { label: '1 H de leçon pratique', price: '60€' },
        { label: 'Perfectionnement 20H', price: '899€' },
      ],
    },
    {
      subtitle: 'Boîte automatique',
      items: [
        { label: '1 H de leçon pratique', price: '65€' },
        { label: 'Perfectionnement 20H', price: '1249€' },
      ],
    },
  ],
}

function PriceRow({ label, price }: { label: string; price: string }) {
  return (
    <li className="flex items-baseline justify-between gap-4 py-2.5">
      <span className="text-sm text-gray-300">{label}</span>
      <span className="shrink-0 font-poppins text-sm font-bold text-white">{price}</span>
    </li>
  )
}

function CategoryCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-[#151b2e] p-6 lg:p-7">
      <h3 className="mb-2 border-b border-white/10 pb-4 text-center font-poppins text-sm font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
        {title}
      </h3>
      {children}
    </div>
  )
}

export default function ALaCarteSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F19] py-16 lg:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Nos formules <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">à la carte&nbsp;!</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 md:text-base">
            Le détail de toutes nos prestations, à composer selon vos besoins.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <CategoryCard key={group.title} title={group.title}>
              <ul className="divide-y divide-white/5">
                {group.items.map((item) => (
                  <PriceRow key={item.label} label={item.label} price={item.price} />
                ))}
              </ul>
            </CategoryCard>
          ))}

          {/* Perfectionnement spans full width with two sub-columns */}
          <div className="md:col-span-2">
            <CategoryCard title={perfectionnement.title}>
              <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
                {perfectionnement.subgroups.map((sub) => (
                  <div key={sub.subtitle}>
                    <h4 className="mt-4 mb-1 font-poppins text-sm font-semibold text-gray-200">
                      {sub.subtitle}
                    </h4>
                    <ul className="divide-y divide-white/5">
                      {sub.items.map((item) => (
                        <PriceRow key={item.label} label={item.label} price={item.price} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CategoryCard>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl space-y-1 text-center text-xs text-gray-500">
          <p>*Tarifs applicables en TTC</p>
          <p>*Tarifs valables jusqu’au 31/12/2026</p>
        </div>
      </div>
    </section>
  )
}
