import Image from 'next/image'
import React from 'react'

import SocialLink from '@/components/common/SocialLink'

import DownArrow from '@/assets/image/down_arrow.png'
import { socialItems } from '../data/homeData'

export default function AboutSection() {
  return (
    <section className="pb-32 pt-36" id="about">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="gsap-reveal mb-10 w-full px-4 lg:w-1/2">
            <p className="mb-3 text-lg font-bold uppercase text-primary">
              Tentang Saya
            </p>
            <h2 className="mb-3 max-w-md text-3xl font-bold text-dark lg:text-4xl">
              Yuk, Kenalan Dengan Saya
            </h2>
            <p className="max-w-xl text-justify text-base font-medium text-secondary lg:text-lg">
              Frontend Developer dengan pengalaman lebih dari 4 tahun dalam
              merancang, mengembangkan, dan mengoptimalkan aplikasi web modern
              menggunakan React.js, Next.js, TypeScript, dan JavaScript.
              Memiliki keahlian dalam membangun aplikasi frontend yang scalable,
              responsive, dan high-performance untuk kebutuhan bisnis maupun
              enterprise. Berpengalaman mengembangkan arsitektur frontend
              modern, reusable component system, dashboard interaktif, serta
              responsive web application yang berfokus pada user experience
              (UX), maintainability, dan scalability. Terbiasa menerjemahkan
              desain UI/UX dari Figma menjadi aplikasi siap produksi menggunakan
              Tailwind CSS, Shadcn UI, Material UI (MUI), Ant Design, dan
              Bootstrap dengan perhatian tinggi terhadap kualitas kode dan
              konsistensi antarmuka. Memiliki pemahaman yang kuat dalam optimasi
              performa frontend, Server-Side Rendering (SSR), Static Site
              Generation (SSG), SEO Optimization, code splitting, lazy loading,
              dan web performance tuning untuk meningkatkan kecepatan aplikasi
              dan pengalaman pengguna. Berpengalaman melakukan integrasi REST
              API, manajemen state menggunakan Zustand, Redux, React Context,
              dan Recoil, serta implementasi pengujian unit menggunakan Jest dan
              React Testing Library. Selain pengembangan frontend, memiliki
              pengalaman dalam implementasi authentication & authorization, JWT
              token management, role-based access control (RBAC), frontend
              security best practices, serta deployment dan CI/CD workflow
              menggunakan Git, GitLab CI/CD, Docker, PM2, dan Nginx. Terbiasa
              bekerja dalam lingkungan Agile/Scrum, berkolaborasi dengan tim
              lintas fungsi, serta berkomitmen menghasilkan solusi digital yang
              berkualitas tinggi, mudah dikembangkan, dan memberikan dampak
              bisnis yang nyata.
            </p>
          </div>
          <div className="gsap-reveal flex w-full justify-center px-4 text-center lg:w-1/2">
            <div className="flex w-full max-w-[420px] flex-col items-center lg:pt-10">
              <h3 className="mb-4 text-2xl font-semibold text-dark lg:text-3xl">
                Mari Berteman Dengan Saya
              </h3>
              <p className="mb-6 text-base font-medium text-secondary lg:text-lg">
                Mari Kepoin Saya di Media Sosial Saya Yang Lain
              </p>
              <Image
                alt="Down Arrow"
                className="mx-auto h-28 w-auto object-contain"
                src={DownArrow}
              />
              <div className="mt-8 flex items-center justify-center gap-5">
                {socialItems.map((item) => (
                  <SocialLink
                    href={item.href}
                    icon={item.icon}
                    key={item.href}
                    label={item.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
