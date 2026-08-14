import type { Metadata } from 'next'
import { siteConfig, absoluteUrl } from './site-config'

type PageMetadataOptions = {
  title: string
  description: string
  path?: string
  keywords?: string[]
  noIndex?: boolean
  ogType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  tags?: string[]
  /** Chemin d'image relatif (ex. '/blog3.jpeg'). Par défaut : visuel du site. */
  image?: string | null
}

// Image de partage par défaut (WhatsApp, Facebook, LinkedIn, X). 1600x900 :
// au-dessus des 1200px recommandés, dans le ratio 1.91:1 attendu.
const DEFAULT_OG_IMAGE = '/hero.png'

export function createPageMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  noIndex = false,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  authors,
  tags,
  image,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path)
  const fullTitle = path === '/' ? title : `${title} | ${siteConfig.shortName}`
  const ogImage = absoluteUrl(image || DEFAULT_OG_IMAGE)

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: ogType,
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      // Pas de width/height déclarés : les images varient d'une page à l'autre
      // et une dimension erronée dégrade le rendu chez les scrapers.
      images: [{ url: ogImage, alt: siteConfig.name }],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
      ...(tags && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  }
}
