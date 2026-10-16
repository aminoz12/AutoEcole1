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

// Google coupe les titres autour de 60 caracteres. Le suffixe de marque en
// coutait 18 sur chaque page, ce qui tronquait la quasi-totalite du site :
// on ne l'ajoute donc que s'il tient dans le budget.
const TITLE_BUDGET = 60
const BRAND_SUFFIX = ` | ${siteConfig.shortName}`

export function withBrand(title: string, path = '/') {
  if (path === '/') return title
  return title.length + BRAND_SUFFIX.length <= TITLE_BUDGET ? `${title}${BRAND_SUFFIX}` : title
}

// Les extraits d'articles depassent souvent 158 caracteres : Google coupe
// alors en plein milieu d'une phrase. On tronque proprement, a la fin d'une
// phrase si possible, sinon sur un mot.
const DESC_MAX = 158

export function toMetaDescription(text: string) {
  const clean = text.trim().replace(/\s+/g, ' ')
  if (clean.length <= DESC_MAX) return clean

  const window = clean.slice(0, DESC_MAX)
  const lastSentence = Math.max(window.lastIndexOf('. '), window.lastIndexOf('! '), window.lastIndexOf('? '))
  if (lastSentence >= 100) return clean.slice(0, lastSentence + 1)

  const lastSpace = window.lastIndexOf(' ')
  return `${clean.slice(0, lastSpace > 0 ? lastSpace : DESC_MAX - 1).replace(/[,;:—-]$/, '').trim()}…`
}


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
  const fullTitle = withBrand(title, path)
  const ogImage = absoluteUrl(image || DEFAULT_OG_IMAGE)

  const metaDescription = toMetaDescription(description)

  return {
    title: fullTitle,
    description: metaDescription,
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
      description: metaDescription,
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
      description: metaDescription,
      images: [ogImage],
    },
  }
}
