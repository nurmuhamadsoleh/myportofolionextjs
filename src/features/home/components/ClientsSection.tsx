import Image from 'next/image'
import React from 'react'

import SectionHeader from '@/components/common/SectionHeader'

import { clientLogos } from '../data/homeData'

export default function ClientsSection() {
  return (
    <section className="bg-slate-700 pb-32 pt-36" id="clients">
      <div className="container">
        <SectionHeader
          description="Saya bekerja sama dengan tim PT. Jala Informatika, PT. Laboratorium Komputer, Dan Juga Infernous Studio selama kurang lebih 3 Tahun. Berikut adalah beberapa client yang pernah bekerja sama."
          eyebrow="Clients"
          title="Yang Pernah Bekerjasama"
          titleClassName="text-white"
        />
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            {clientLogos.map((item) => (
              <div
                className="gsap-card mx-5 flex min-h-[120px] w-[170px] items-center justify-center py-4 opacity-95 brightness-110 contrast-125 transition duration-500 hover:scale-105 hover:opacity-100 lg:mx-8 lg:w-[200px] xl:mx-10"
                key={item.imageAlt}
              >
                <Image
                  alt={item.imageAlt}
                  className="max-h-[100px] w-auto max-w-full object-contain"
                  src={item.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
