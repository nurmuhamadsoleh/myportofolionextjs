import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import SectionHeader from '@/components/common/SectionHeader'

import {
  blogArticles,
  type BlogArticle,
} from '@/features/blog/data/blogArticles'

function BlogCard({ item }: { item: BlogArticle }) {
  return (
    <article className="gsap-card h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="relative aspect-video">
          <Image
            alt={item.imageAlt}
            className="object-cover"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            src={item.image}
          />
        </div>
        <div className="flex flex-1 flex-col px-6 py-8">
          <h3>
            <Link
              className="mb-3 block text-xl font-semibold leading-7 text-dark hover:text-primary"
              href={`/blog/${item.slug}`}
            >
              {item.title}
            </Link>
          </h3>
          <p className="mb-6 text-start text-base font-medium leading-7 text-secondary">
            {item.excerpt}
          </p>
          <Link
            className="mt-auto w-fit rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-80"
            href={`/blog/${item.slug}`}
          >
            Lihat Selengkapnya
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function BlogSection() {
  return (
    <section className="bg-slate-100 pb-32 pt-36" id="blog">
      <div className="container">
        <SectionHeader
          description="Berikut adalah tulisan terkini, yang pernah saya tulis di blog"
          eyebrow="Blog"
          title="Tulisan Terkini"
        />
        <div className="grid grid-cols-1 gap-10 px-4 md:grid-cols-2 xl:mx-auto xl:w-10/12">
          {blogArticles.map((item) => (
            <BlogCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
