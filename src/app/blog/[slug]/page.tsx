import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

import ArticleDetail from '@/features/blog/components/ArticleDetail'
import {
  blogArticles,
  getBlogArticleBySlug,
} from '@/features/blog/data/blogArticles'

type BlogDetailPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }))
}

export function generateMetadata({ params }: BlogDetailPageProps): Metadata {
  const article = getBlogArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'Artikel Tidak Ditemukan | Nur Muhamad Soleh',
    }
  }

  return {
    title: `${article.title} | Nur Muhamad Soleh`,
    description: article.excerpt,
    keywords: article.keywords,
    openGraph: {
      description: article.excerpt,
      images: [
        {
          alt: article.imageAlt,
          url: article.image.src,
        },
      ],
      title: article.title,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      description: article.excerpt,
      images: [article.image.src],
      title: article.title,
    },
  }
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const article = getBlogArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    author: {
      '@type': 'Person',
      name: 'Nur Muhamad Soleh',
    },
    datePublished: article.publishedAt,
    description: article.excerpt,
    headline: article.title,
    image: article.image.src,
    keywords: article.keywords.join(', '),
  }

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
        type="application/ld+json"
      />
      <ArticleDetail article={article} />
    </>
  )
}
