import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import type { BlogArticle } from '../data/blogArticles'

type ArticleDetailProps = {
  article: BlogArticle
}

export default function ArticleDetail({ article }: ArticleDetailProps) {
  return (
    <main className="bg-white pb-24 pt-16 text-dark">
      <article className="container">
        <div className="px-4">
          <Link
            className="mb-14 inline-flex items-center gap-3 rounded-full border border-[#0f3b70] px-5 py-3 text-base font-semibold text-[#0f3b70] transition duration-300 hover:bg-[#0f3b70] hover:text-white"
            href="/#blog"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Kembali
          </Link>

          <div className="mb-8 flex flex-wrap items-center gap-5">
            <span className="rounded-lg border border-sky-200 bg-sky-100 px-4 py-3 text-base font-semibold text-blue-700">
              {article.category}
            </span>
          </div>

          <h1 className="mb-10 max-w-6xl text-3xl font-bold leading-tight text-[#0b376d] md:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <div className="relative mb-12 aspect-[16/7] overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
            <Image
              alt={article.imageAlt}
              className="object-cover"
              fill
              priority
              sizes="100vw"
              src={article.image}
            />
          </div>

          <div className="max-w-6xl space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading ?? section.paragraphs[0]}>
                {section.heading ? (
                  <h2 className="mb-4 text-2xl font-bold leading-tight text-[#0b376d] md:text-3xl">
                    {section.heading}
                  </h2>
                ) : null}
                <div className="space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      className="text-lg font-medium leading-9 text-slate-600"
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
}
