import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AutoEcole Pro - Apprenez à conduire avec les meilleurs moniteurs',
  description: 'AutoEcole Pro vous accompagne dans votre apprentissage de la conduite avec des moniteurs expérimentés et des tarifs compétitifs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

