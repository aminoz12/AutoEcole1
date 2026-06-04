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
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path)
  const fullTitle = path === '/' ? title : `${title} | ${siteConfig.name}`

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
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
      ...(tags && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  }
}
