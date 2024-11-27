import React, { useLayoutEffect, useRef } from 'react'

import DownArrow from '../../../assets/image/down_arrow.png'
import EDesa from '../../../assets/image/E-Desa.png'
import Image from 'next/image'
import Link from 'next/link'
import LogoEdesa from '../../../assets/image/Logo_EDesa.png'
import LogoOptik from '../../../assets/image/Logo_Optik_99K.png'
import LogoSugi from '../../../assets/image/Logo_Sugi_Inti_Perkasa.png'
import LogoXhalona from '../../../assets/image/Logo_Xhalona.png'
import Optik99K from '../../../assets/image/Optik_99K.png'
import Profile from '../../../assets/image/photo_profile_soleh.png'
import Programming from '../../../assets/image/Programming.jpg'
import SEOWEB from '../../../assets/image/SEO_WEB.jpg'
import SugitIntiPerkasa from '../../../assets/image/Sugi_Inti_Perkasa.png'
import Xhalona from '../../../assets/image/Xhalona.png'
import { useRouter } from 'next/navigation'

export default function HomePageComponent() {
  const router = useRouter()
  const hamburger: any = useRef<any>()
  const navbarHeader: any = useRef<any>()
  const navMenu: any = useRef<any>()
  useLayoutEffect(() => {
    // Navbar fixed

    const currentHamburger = hamburger.current
    const currentNav = navMenu.current
    const toggleHamburger = () => {
      currentHamburger.classList.toggle('hamburger-active')
      currentNav.classList.toggle('hidden') // tampilkan nav menu
    }

    if (currentHamburger) {
      currentHamburger.addEventListener('click', toggleHamburger)
    }

    // Cleanup function to remove event listener
    return () => {
      if (currentHamburger) {
        currentHamburger.removeEventListener('click', toggleHamburger)
      }
    }
  }, [])
  useLayoutEffect(() => {
    const handleScroll = () => {
      const currentNavbarHeader = navbarHeader.current
      const headerOffsetTop = currentNavbarHeader.offsetTop
      if (window.scrollY > headerOffsetTop) {
        currentNavbarHeader.classList.add('navbar-fixed')
      } else {
        currentNavbarHeader.classList.remove('navbar-fixed')
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      {/* Header Start */}
      <header
        className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10"
        ref={navbarHeader}
      >
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <p
                className="font-bold text-lg text-primary block py-6"
                onClick={() => router.push('/HomePage')}
              >
                Nur Muhamad Soleh
              </p>
            </div>
            <div className=" flex items-center px-4">
              <button
                ref={hamburger}
                id="hamburger"
                name="hamburger"
                className="block absolute right-4 lg:hidden"
                type="button"
              >
                {/* class hamburger-line akan jalan ketika di klik */}
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
                ref={navMenu}
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <Link
                      href={'#home'}
                      replace
                      className="text-base text-dark py-2 mx-8 group-hover:text-primary flex"
                    >
                      Beranda
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href={'#about'}
                      replace
                      className="text-base text-dark py-2 mx-8 group-hover:text-primary flex"
                    >
                      Tentang Saya
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href={'#portfolio'}
                      replace
                      className="text-base text-dark py-2 mx-8 group-hover:text-primary flex"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href={'#clients'}
                      replace
                      className="text-base text-dark py-2 mx-8 group-hover:text-primary flex"
                    >
                      Clients
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href={'#blog'}
                      replace
                      className="text-base text-dark py-2 mx-8 group-hover:text-primary flex"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href={'#contact'}
                      replace
                      className="text-base text-dark py-2 mx-8 group-hover:text-primary flex"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-start px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Hallo Semua 🖐️,
                <span className="block font-bold text-2xl text-dark lg:text-4xl">
                  Saya Nur Muhamad Soleh
                </span>
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-5 lg:text-3xl">
                Frontend Web Developer{' '}
                <span className="text-dark">
                  | React Js / Next Js / Typescript
                </span>
              </h2>
              <p className="font-medium text-secondary mb-5 leading-relaxed">
                Belajar Frontend Developer Web Itu Mudah Dan Menyenangkan{' '}
                <span className="text-dark font-semibold">Bukan!</span>
              </p>
              <button
                className="text-base font-semibold text-white bg-primary px-8 py-3 rounded-full hover:shadow-lg hover:opacity-80 transition-none duration-300 ease-in-out"
                onClick={() => {
                  router.push(
                    'https://wa.me/6289608046965?text=Hallo%20Mas%20*Nur%20Muhamad%20Soleh*%0ASaya%20tertarik%20dengan%20portofolio%20Anda%2C%0ABoleh%20kirimkan%20CV%20Terbarunya.%0ATerima%20Kasih.'
                  )
                }}
              >
                Hubungi Saya
              </button>
            </div>
            <div className="w-full self-end lg:w-1/2">
              <div className="relative mt-10 md:mt-0">
                <Image
                  src={Profile}
                  width={350}
                  height={350}
                  // width={500}
                  // height={400}
                  alt="Photo_Profile_Soleh"
                  // fill
                  className="max-w-full mx-auto"
                />
                <span className="absolute -bottom-0 -z-10 translate-x-5 md:translate-x-1/2 md:scale-125">
                  <svg
                    width={300}
                    height={300}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#14b8a6"
                      d="M68.5,-15.3C77.8,6.1,66.6,41.2,45.4,54.7C24.3,68.1,-6.7,60.1,-29.1,43.1C-51.4,26.1,-65.1,0.3,-58.8,-17.2C-52.5,-34.6,-26.2,-43.6,1.7,-44.2C29.6,-44.7,59.3,-36.8,68.5,-15.3Z"
                      transform="translate(100 100) scale(1.1)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">
                Tentang Saya
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-3 max-w-md lg:text-4xl">
                Yuk, Kenalan Dengan Saya
              </h2>
              <p className="text-secondary text-base font-medium max-w-xl lg:text-lg text-justify">
                Seorang frontend developer dengan latar belakang pendidikan S1
                Teknik Informatika yang baru lulus pada tahun 2024 dari Sekolah
                Tinggi Informatika Areta, dengan IPK 3,31. Berpengalaman 3 tahun
                di bidang Web dan SEO (Search Engine Optimization) dengan
                spesialisasi pada aplikasi pengembangan aplikasi dan pemasaran
                digital dengan teknologi javascript, reactjs, nextjs, typescript
                dan GSC (Google Search Console) untuk desain sistem menggunakan
                Antd, Tailwinds, Bootstrap dan css processor seperti sass atau
                scss dan telah berhasil membangun aplikasi kasir optical99k
                selama 3 bulan dengan teknologi nextjs dan juga typescript dan
                telah berhasil menerapkan SEO sebesar 100% dalam 2 bulan di
                website genbox.id dengan kata kunci apa itu genbox, Terbiasa
                terbiasa bekerja dengan tim dan memiliki kemampuan problem
                solving dalam menyelesaikan tantangan dalam pengembangan
                aplikasi dan implementasi digital marketing.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">
                Mari Berteman Dengan Saya
              </h3>
              <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
                Mari Kepoin Saya di Media Sosial Saya Yang Lain
              </p>
              <Image
                src={DownArrow}
                className="max-w-full h-[100px] mx-auto"
                alt="Down_Arrow"
              />
              <div className="flex items-center justify-center mt-16">
                <Link
                  target="_blank"
                  href={'https://www.linkedin.com/in/nurmuhamadsoleh/'}
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-300 cursor-pointer border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28.87 28.87"
                    id="linkedin"
                    className="fill-current" //agar memgikuti warna text parrent
                  >
                    <g>
                      <g>
                        <rect
                          width="28.87"
                          height="28.87"
                          fill="#0b86ca"
                          rx="6.48"
                          ry="6.48"
                        ></rect>
                        <path
                          fill="#fff"
                          d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </Link>
                <Link
                  target="_blank"
                  href={'https://www.instagram.com/nurmuhamadsoleh/'}
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-300 cursor-pointer border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    viewBox="0 0 102 102"
                    id="instagram"
                    className="fill-current"
                  >
                    <defs>
                      <radialGradient
                        id="a"
                        cx="6.601"
                        cy="99.766"
                        r="129.502"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".09" stop-color="#fa8f21"></stop>
                        <stop offset=".78" stop-color="#d82d7e"></stop>
                      </radialGradient>
                      <radialGradient
                        id="b"
                        cx="70.652"
                        cy="96.49"
                        r="113.963"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset=".64"
                          stop-color="#8c3aaa"
                          stop-opacity="0"
                        ></stop>
                        <stop offset="1" stop-color="#8c3aaa"></stop>
                      </radialGradient>
                    </defs>
                    <path
                      fill="url(#a)"
                      d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                    ></path>
                    <path
                      fill="url(#b)"
                      d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                    ></path>
                    <path
                      fill="#fff"
                      d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
                      transform="translate(-422.637 -426.196)"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portofolio */}
      <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h3 className="font-semibold text-lg text-primary mb-2 md:text-4xl">
                Portfolio
              </h3>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Project Terbaru
              </h2>
              <p className="font-medium text-md text-secondary md:text-lg">
                Temukan karya terbaru dari saya disini
              </p>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-8 p-4 md:w-1/2">
              {/* Overflow hidden supaya tidak bablas / hidden scroll  */}
              <div className="rounded-md shadow-md overflow-hidden">
                <Link href={'https://www.sugiintiperkasa.com/'} target="_blank">
                  <Image
                    src={SugitIntiPerkasa}
                    alt="Sugi_Inti_Perkasa"
                    className="max-w-full "
                  />
                </Link>
              </div>
              <Link href={'https://www.sugiintiperkasa.com/'} target="_blank">
                <h3 className="font-semibold text-md md:text-xl text-dark mt-5 mb-3 hover:text-primary">
                  Compay Profile PT. Sugi Inti Perkasa
                </h3>
              </Link>

              <p className="font-medium text-base text-secondary text-justify">
                Merupakan website yang saat ini dikelola oleh PT Sugi Inti
                Perkasa sebagai wadah informasi penyedia kebutuhan industri dan
                perkantoran seperti produk alat potong berkualitas seperti merk
                Kyocera dan OSG yang dijual secara online dan offline. Pada
                proyek ini saya melakukan pengembangan dari awal mulai dari
                riset produk hingga pemikiran desain bersama dengan Tim
                Infernous Studio X Techno Dev Indonesia menggunakan React JS
                versi 18.xx selama kurang lebih 2 bulan dengan timeline proyek
                yang telah ditentukan, pada proyek ini saya mengerjakan
                menggunakan Gitlab sebagai version control untuk dapat
                berkolaborasi dengan tim agar lebih mudah dalam mengelola
                proyek.
              </p>
            </div>
            <div className="mb-8 p-4 md:w-1/2">
              {/* Overflow hidden supaya tidak bablas / hidden scroll  */}
              <div className="rounded-md shadow-md overflow-hidden">
                <Link href={'https://dashboard.edesa.co.id/'} target="_blank">
                  <Image src={EDesa} alt="EDESA" className="max-w-full" />
                </Link>
              </div>
              <Link href={'https://dashboard.edesa.co.id/'} target="_blank">
                <h3 className="font-semibold text-md md:text-xl text-dark mt-5 mb-3 hover:text-primary">
                  CMS E-Desa
                </h3>
              </Link>

              <p className="font-medium text-base text-secondary text-justify">
                E-Desa merupakan aplikasi Administrasi Desa yang dikelola oleh
                Desa di Bandung sebagai wadah untuk memudahkan warga dalam
                mengurus sertifikat sebagai layanan publik, seperti pendaftaran
                program bantuan sosial dan pengaduan masyarakat yang telah
                terintegrasi dengan mobile Apps E-Desa. Pada project kali ini
                saya melakukan pengembangan menggunakan ReactJS dan TypeScript,
                bekerja sama dengan Tim PT.Laboratorium Komputer dalam kurun
                waktu 6 bulan beserta E-Desa Mobile Apps, pada project kali ini
                kami bekerja sama menggunakan Gitlab sebagai version control
                system untuk membuatnya mudah untuk mengelola/mengembangkan
                aplikasi.
              </p>
            </div>
            <div className="mb-8 p-4 md:w-1/2">
              {/* Overflow hidden supaya tidak bablas / hidden scroll  */}
              <div className="rounded-md shadow-md overflow-hidden">
                <Link
                  href={'http://dev-01.core-erp.com:60026/'}
                  target="_blank"
                >
                  <Image src={Optik99K} alt="Optik99K" className="max-w-full" />
                </Link>
              </div>
              <Link href={'http://dev-01.core-erp.com:60026/'} target="_blank">
                <h3 className="font-semibold text-md md:text-xl text-dark mt-5 mb-3 hover:text-primary">
                  POS Optik 99K
                </h3>
              </Link>

              <p className="font-medium text-base text-secondary text-justify">
                POS Optik 99K adalah aplikasi Kasir berbasis web untuk melakukan
                transaksi penjualan produk Kacamata / Aksesoris secara digital
                yang saat ini dikelola oleh OPTIK 99K dari berbagai cabang salah
                satunya bintaro, Tangerang. Pada project ini saya bekerja sama
                dengan Tim PT.Jala Informatika selama kurang lebih 3 bulan
                dengan menggunakan Next JS dan TypeScript serta berkolaborasi
                dengan menggunakan versi kontrol Github untuk memudahkan
                pengembangan aplikasi.
              </p>
            </div>
            <div className="mb-8 p-4 md:w-1/2">
              {/* Overflow hidden supaya tidak bablas / hidden scroll  */}
              <div className="rounded-md shadow-md overflow-hidden">
                <Link
                  href={'http://dev-01.core-erp.com:60125/'}
                  target="_blank"
                >
                  <Image src={Xhalona} alt="Xhalona" className="max-w-full" />
                </Link>
              </div>
              <Link href={'http://dev-01.core-erp.com:60125/'} target="_blank">
                <h3 className="font-semibold text-md md:text-xl text-dark mt-5 mb-3 hover:text-primary">
                  POS XHALONA
                </h3>
              </Link>

              <p className="font-medium text-base text-secondary text-justify">
                POS Xhalona merupakan aplikasi kasir berbasis web yang digunakan
                untuk melakukan transaksi penjualan produk kecantikan/salon
                secara digital, serta dapat mengontrol laporan penjualan harian.
                Pada project kali ini saya melakukan pengembangan bersama dengan
                teman saya dalam kurun waktu 3 bulan dan beberapa penambahan
                fitur seperti menu finance yang dapat mengontrol cash Xalon,
                pada project kali ini kami bekerja sama menggunakan github
                sebagai version control untuk memudahkan pengelolaan project. .
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Clients */}
      <section id="clients" className="pt-36 pb-32 bg-slate-700">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
              <h3 className="font-semibold text-lg text-primary mb-2 md:text-4xl">
                Clients
              </h3>
              <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Yang Pernah Bekerjasama
              </h2>
              <p className="font-medium text-lg text-secondary md:text-lg">
                Saya bekerja sama dengan tim PT. Jala Informatika, PT.
                Laboratorium Komputer, Dan Juga Infernous Studio selama kurang
                lebih 3 Tahun, Berikut adalah beberapa client yang pernah
                bekerja sama
              </p>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <div className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <Image src={LogoOptik} alt="Optik99K" className="max-w-full" />
              </div>
              <div className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <Image src={LogoXhalona} alt="Xhalona" className="max-w-full" />
              </div>
              <div className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <Image
                  src={LogoSugi}
                  alt="PT.SUGI_INTI_PERKASA"
                  className="max-w-full"
                />
              </div>
              <div className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <Image src={LogoEdesa} alt="EDESA" className="max-w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="blog" className="pt-36 pb-32 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2 md:text-4xl">
                Blog
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl">
                Tulisan Terkini
              </h2>
              <p className="font-medium text-md text-secondary md:text-lg">
                Berikut adalah tulisan terkini, yang pernah saya tulis di blog
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className=" bg-white rounded-xl shadow-lg overflow-hidden mb-10 h-[450px]">
                <Image
                  src={Programming}
                  alt="ReactJS, VueJS, frontend developer"
                  className="max-w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <Link
                      href={
                        'https://medium.com/@nurmuhamadsoleh42/kenapa-ya-lowongan-kerja-frontend-developer-lebih-banyak-menggunakan-reactjs-7e9b2f3674ca'
                      }
                      className="block mb-3 text-xl font-semibold text-dark hover:text-primary truncate"
                    >
                      Kenapa ya lowongan kerja frontend developer lebih banyak
                      menggunakan ReactJS?
                    </Link>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-6 text-start">
                    Alasan mengapa reactjs bisa mempermudah pekerjaan frontend
                    developer
                  </p>
                  <Link
                    href={
                      'https://medium.com/@nurmuhamadsoleh42/kenapa-ya-lowongan-kerja-frontend-developer-lebih-banyak-menggunakan-reactjs-7e9b2f3674ca'
                    }
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                    target="_blank"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className=" bg-white rounded-xl shadow-lg overflow-hidden mb-10 h-[450px]">
                <Image src={SEOWEB} alt="SEO_WEB" className="max-w-full" />
                <div className="py-8 px-6">
                  <h3>
                    <Link
                      href={
                        'https://medium.com/@nurmuhamadsoleh42/kenapa-ya-lowongan-kerja-frontend-developer-lebih-banyak-menggunakan-reactjs-7e9b2f3674ca'
                      }
                      className="block mb-3 text-xl font-semibold text-dark hover:text-primary truncate"
                    >
                      Bagaimana Meningkatkan Kualitas Web Menggunakan SEO ?
                    </Link>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-12 text-start">
                    Alasan mengapa seo web bisa meningkatkan kualitas web,
                  </p>
                  <Link
                    href={
                      'https://medium.com/@nurmuhamadsoleh42/kenapa-ya-lowongan-kerja-frontend-developer-lebih-banyak-menggunakan-reactjs-7e9b2f3674ca'
                    }
                    className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                    target="_blank"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2 md:text-4xl">
                Contact
              </h4>
              <h2 className="font-bold text-dark text-2xl mb-4 sm:text-3xl lg:text-4xl">
                Hubungi Kami
              </h2>
            </div>
          </div>
          <form>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="name"
                  className="text-base font-bold text-primary"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  id="name"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:right-1 focus:border-primary"
                  placeholder="Masukan Nama Lengkap Anda"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="email"
                  className="text-base font-bold text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  id="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:right-1 focus:border-primary"
                  placeholder="Masukan Alamat Email Anda"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="message"
                  className="text-base font-bold text-primary"
                >
                  Pesan
                </label>
                <textarea
                  autoComplete="off"
                  id="message"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:right-1 focus:border-primary h-32"
                  placeholder="Masukan Pesan Singkat Anda"
                />
              </div>
              <div className="w-full px-4">
                <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <footer className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-2xl text-white mb-3">
                Nur Muhammad Soleh
              </h2>
              <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
              <p className='font-bold text-xs mb-2"'>
                nurmuhamadsoleh42@gmail.com
              </p>
              <p className='font-bold text-xs mb-2"'>
                Kp. klingkit rt:08 rw:011 kel.rawa buaya kec.cengkareng
              </p>
              <p className='font-bold text-xs mb-2"'>Jakarta Barat</p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">
                Kategori Blog
              </h3>
              <ul className="text-slate-300">
                <li>
                  <Link
                    href={
                      'https://medium.com/@nurmuhamadsoleh42/kenapa-ya-lowongan-kerja-frontend-developer-lebih-banyak-menggunakan-reactjs-7e9b2f3674ca'
                    }
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Web Developer
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      'https://medium.com/@nurmuhamadsoleh42/kenapa-ya-lowongan-kerja-frontend-developer-lebih-banyak-menggunakan-reactjs-7e9b2f3674ca'
                    }
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    SEO Web
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
              <ul className="text-slate-300">
                <li>
                  <Link
                    href={'#home'}
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link
                    href={'#about'}
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Tentang Saya
                  </Link>
                </li>
                <li>
                  <Link
                    href={'#portofolio'}
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Portofolio
                  </Link>
                </li>
                <li>
                  <Link
                    href={'#clients'}
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    href={'#blog'}
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href={'#contact'}
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
              <Link
                target="_blank"
                href={'https://www.linkedin.com/in/nurmuhamadsoleh/'}
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-300 cursor-pointer border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28.87 28.87"
                  id="linkedin"
                  className="fill-current" //agar memgikuti warna text parrent
                >
                  <g>
                    <g>
                      <rect
                        width="28.87"
                        height="28.87"
                        fill="#0b86ca"
                        rx="6.48"
                        ry="6.48"
                      ></rect>
                      <path
                        fill="#fff"
                        d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </Link>
              <Link
                target="_blank"
                href={'https://www.instagram.com/nurmuhamadsoleh/'}
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-300 cursor-pointer border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  viewBox="0 0 102 102"
                  id="instagram"
                  className="fill-current"
                >
                  <defs>
                    <radialGradient
                      id="a"
                      cx="6.601"
                      cy="99.766"
                      r="129.502"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".09" stop-color="#fa8f21"></stop>
                      <stop offset=".78" stop-color="#d82d7e"></stop>
                    </radialGradient>
                    <radialGradient
                      id="b"
                      cx="70.652"
                      cy="96.49"
                      r="113.963"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset=".64"
                        stop-color="#8c3aaa"
                        stop-opacity="0"
                      ></stop>
                      <stop offset="1" stop-color="#8c3aaa"></stop>
                    </radialGradient>
                  </defs>
                  <path
                    fill="url(#a)"
                    d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                  ></path>
                  <path
                    fill="url(#b)"
                    d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                  ></path>
                  <path
                    fill="#fff"
                    d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
                    transform="translate(-422.637 -426.196)"
                  ></path>
                </svg>
              </Link>
            </div>
            <p className="font-medium text-xs text-slate-500 text-center">
              Dibuat dengan <span className="text-pink-500">❤️</span> oleh{' '}
              <Link
                href={'https://github.com/nurmuhamadsoleh'}
                target="_blank"
                className="font-bold text-primary"
              >
                Nur Muhamad Soleh
              </Link>
              , menggunakan{' '}
              <Link
                href={'https://tailwindcss.com/'}
                target="_blank"
                className="font-bold text-sky-500"
              >
                Tailwind CSS 3.
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
