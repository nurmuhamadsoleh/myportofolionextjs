import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Profile from '@/assets/image/photo_profile_soleh.png'

const whatsappHref =
  'https://wa.me/6289608046965?text=Hallo%20Mas%20*Nur%20Muhamad%20Soleh*%0ASaya%20tertarik%20dengan%20portofolio%20Anda%2C%0ABoleh%20kirimkan%20CV%20Terbarunya.%0ATerima%20Kasih.'

export default function HeroSection() {
  return (
    <section className="pt-36" id="home">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-start px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Hallo Semua,
              <span className="block text-2xl font-bold text-dark lg:text-4xl">
                Saya Nur Muhamad Soleh
              </span>
            </h1>
            <h2 className="mb-5 text-lg font-medium text-secondary lg:text-3xl">
              Web Developer | Frontend Developer | SEO Optimization | Building
              Modern Web Applications
            </h2>
            <p className="mb-5 font-medium leading-relaxed text-secondary">
              Belajar Frontend Developer Web Itu Mudah Dan Menyenangkan{' '}
              <span className="font-semibold text-dark">Bukan!</span>
            </p>
            <Link
              className="inline-flex rounded-full bg-primary px-8 py-3 text-base font-semibold text-white transition duration-300 hover:opacity-80 hover:shadow-lg"
              href={whatsappHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              Hubungi Saya
            </Link>
          </div>
          <div className="w-full self-end lg:w-1/2">
            <div className="relative mt-10 md:mt-0">
              <Image
                alt="Photo Profile Soleh"
                className="mx-auto max-w-full"
                height={350}
                priority
                src={Profile}
                width={350}
              />
              <span className="absolute bottom-0 -z-10 translate-x-5 md:translate-x-1/2 md:scale-125">
                <svg
                  aria-hidden="true"
                  height={300}
                  viewBox="0 0 200 200"
                  width={300}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M68.5,-15.3C77.8,6.1,66.6,41.2,45.4,54.7C24.3,68.1,-6.7,60.1,-29.1,43.1C-51.4,26.1,-65.1,0.3,-58.8,-17.2C-52.5,-34.6,-26.2,-43.6,1.7,-44.2C29.6,-44.7,59.3,-36.8,68.5,-15.3Z"
                    fill="#14b8a6"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
