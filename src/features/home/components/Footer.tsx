import Link from 'next/link'
import React from 'react'

import SocialLink from '@/components/common/SocialLink'

import { navigationItems, socialItems } from '../data/homeData'

const blogCategoryHref =
  'https://medium.com/@nurmuhamadsoleh42/kenapa-ya-lowongan-kerja-frontend-developer-lebih-banyak-menggunakan-reactjs-7e9b2f3674ca'

export default function Footer() {
  return (
    <footer className="bg-dark pb-10 pt-20">
      <div className="container">
        <div className="grid gap-10 px-4 md:grid-cols-3 md:gap-16 lg:gap-24">
          <div className="gsap-reveal font-medium text-slate-300">
            <h2 className="mb-5 text-xl font-bold leading-tight text-white md:text-2xl">
              Nur Muhammad Soleh
            </h2>
            <h3 className="mb-4 text-lg font-semibold leading-tight text-white">
              Hubungi Kami
            </h3>
            <div className="space-y-3 text-sm font-medium leading-6 text-slate-300">
              <p>nurmuhamadsoleh42@gmail.com</p>
              <p>Kp. Klingkit RT 08 RW 011, Kel. Rawa Buaya, Kec. Cengkareng</p>
              <p>Jakarta Barat</p>
            </div>
          </div>
          <div className="gsap-reveal">
            <h3 className="mb-5 text-lg font-semibold leading-tight text-white md:text-xl">
              Kategori Blog
            </h3>
            <ul className="space-y-4 text-base font-medium leading-6 text-slate-300">
              {['Web Developer', 'SEO Web'].map((item) => (
                <li key={item}>
                  <Link
                    className="inline-block transition duration-300 hover:text-primary"
                    href={blogCategoryHref}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="gsap-reveal">
            <h3 className="mb-5 text-lg font-semibold leading-tight text-white md:text-xl">
              Tautan
            </h3>
            <ul className="space-y-4 text-base font-medium leading-6 text-slate-300">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="inline-block transition duration-300 hover:text-primary"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="gsap-reveal mt-14 w-full border-t border-slate-700 px-4 pt-8">
          <div className="mb-6 flex items-center justify-center gap-5">
            {socialItems.map((item) => (
              <SocialLink
                href={item.href}
                icon={item.icon}
                key={item.href}
                label={item.label}
              />
            ))}
          </div>
          <p className="text-center text-sm font-medium leading-6 text-slate-400">
            Dibuat oleh{' '}
            <Link
              className="font-bold text-primary"
              href="https://github.com/nurmuhamadsoleh"
              rel="noopener noreferrer"
              target="_blank"
            >
              Nur Muhamad Soleh
            </Link>
            , menggunakan{' '}
            <Link
              className="font-bold text-sky-500"
              href="https://tailwindcss.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tailwind CSS 3.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
