import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import SectionHeader from '@/components/common/SectionHeader'

import { portfolioItems, type PortfolioItem } from '../data/homeData'

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="flex h-full flex-col">
      <div className="relative aspect-video overflow-hidden rounded-md shadow-md">
        <Link href={item.href} rel="noopener noreferrer" target="_blank">
          <Image
            alt={item.imageAlt}
            className="object-cover"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            src={item.image}
          />
        </Link>
      </div>
      <Link href={item.href} rel="noopener noreferrer" target="_blank">
        <h3 className="mb-3 mt-5 text-md font-semibold text-dark hover:text-primary md:text-xl">
          {item.title}
        </h3>
      </Link>
      <p className="text-justify text-base font-medium leading-7 text-secondary">
        {item.description}
      </p>
    </article>
  )
}

export default function PortfolioSection() {
  return (
    <section className="bg-slate-100 pb-16 pt-36" id="portfolio">
      <div className="container">
        <SectionHeader
          description="Temukan karya terbaru dari saya disini"
          eyebrow="Portfolio"
          title="Project Terbaru"
        />
        <div className="grid w-full grid-cols-1 gap-10 px-4 md:grid-cols-2 xl:mx-auto xl:w-10/12">
          {portfolioItems.map((item) => (
            <PortfolioCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
