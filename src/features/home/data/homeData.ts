import type { StaticImageData } from 'next/image'

import CMSPTDIKA from '@/assets/image/cmspt_dika.png'
import EDesa from '@/assets/image/E-Desa.png'
import LogoEdesa from '@/assets/image/Logo_EDesa.png'
import LogoOptik from '@/assets/image/Logo_Optik_99K.png'
import LogoSugi from '@/assets/image/Logo_Sugi_Inti_Perkasa.png'
import LogoXhalona from '@/assets/image/Logo_Xhalona.png'
import Optik99K from '@/assets/image/Optik_99K.png'
import Programming from '@/assets/image/Programming.jpg'
import SEOWEB from '@/assets/image/SEO_WEB.jpg'
import SugitIntiPerkasa from '@/assets/image/Sugi_Inti_Perkasa.png'
import WebsitePTDIKA from '@/assets/image/website pt_dika.png'
import Xhalona from '@/assets/image/Xhalona.png'
import AbsensiMBG from '@/assets/image/Absensi_MBG.png'

export type NavigationItem = {
  label: string
  href: string
}

export type SocialItem = {
  label: string
  href: string
  icon: 'linkedin' | 'instagram'
}

export type PortfolioItem = {
  title: string
  href: string
  image: StaticImageData
  imageAlt: string
  description: string
}

export type BlogItem = {
  title: string
  image: StaticImageData
  imageAlt: string
  description: string
}

export type ClientLogo = {
  image: StaticImageData
  imageAlt: string
}

export const navigationItems: NavigationItem[] = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang Saya', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Clients', href: '#clients' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const socialItems: SocialItem[] = [
  {
    label: 'LinkedIn Nur Muhamad Soleh',
    href: 'https://www.linkedin.com/in/nurmuhamadsoleh/',
    icon: 'linkedin',
  },
  {
    label: 'Instagram Nur Muhamad Soleh',
    href: 'https://www.instagram.com/nurmuhamadsoleh/',
    icon: 'instagram',
  },
]

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Company Profile PT. Sugi Inti Perkasa',
    href: 'https://www.sugiintiperkasa.com/',
    image: SugitIntiPerkasa,
    imageAlt: 'Sugi Inti Perkasa',
    description:
      'Merupakan website yang saat ini dikelola oleh PT Sugi Inti Perkasa sebagai wadah informasi penyedia kebutuhan industri dan perkantoran seperti produk alat potong berkualitas seperti merk Kyocera dan OSG yang dijual secara online dan offline. Pada proyek ini saya melakukan pengembangan dari awal mulai dari riset produk hingga pemikiran desain bersama dengan Tim Infernous Studio X Techno Dev Indonesia menggunakan React JS versi 18.xx selama kurang lebih 2 bulan dengan timeline proyek yang telah ditentukan, pada proyek ini saya mengerjakan menggunakan Gitlab sebagai version control untuk dapat berkolaborasi dengan tim agar lebih mudah dalam mengelola proyek.',
  },
  {
    title: 'CMS E-Desa',
    href: 'https://dashboard.edesa.co.id/',
    image: EDesa,
    imageAlt: 'CMS E-Desa',
    description:
      'E-Desa merupakan aplikasi Administrasi Desa yang dikelola oleh Desa di Bandung sebagai wadah untuk memudahkan warga dalam mengurus sertifikat sebagai layanan publik, seperti pendaftaran program bantuan sosial dan pengaduan masyarakat yang telah terintegrasi dengan mobile Apps E-Desa. Pada project kali ini saya melakukan pengembangan menggunakan ReactJS dan TypeScript, bekerja sama dengan Tim PT.Laboratorium Komputer dalam kurun waktu 6 bulan beserta E-Desa Mobile Apps, pada project kali ini kami bekerja sama menggunakan Gitlab sebagai version control system untuk membuatnya mudah untuk mengelola/mengembangkan aplikasi.',
  },
  {
    title: 'POS Optik 99K',
    href: 'http://dev-01.core-erp.com:60026/',
    image: Optik99K,
    imageAlt: 'POS Optik 99K',
    description:
      'POS Optik 99K adalah aplikasi Kasir berbasis web untuk melakukan transaksi penjualan produk Kacamata / Aksesoris secara digital yang saat ini dikelola oleh OPTIK 99K dari berbagai cabang salah satunya bintaro, Tangerang. Pada project ini saya bekerja sama dengan Tim PT.Jala Informatika selama kurang lebih 3 bulan dengan menggunakan Next JS dan TypeScript serta berkolaborasi dengan menggunakan versi kontrol Github untuk memudahkan pengembangan aplikasi.',
  },
  {
    title: 'POS XHALONA',
    href: 'http://dev-01.core-erp.com:60125/',
    image: Xhalona,
    imageAlt: 'POS Xhalona',
    description:
      'POS Xhalona merupakan aplikasi kasir berbasis web yang digunakan untuk melakukan transaksi penjualan produk kecantikan/salon secara digital, serta dapat mengontrol laporan penjualan harian. Pada project kali ini saya melakukan pengembangan bersama dengan teman saya dalam kurun waktu 3 bulan dan beberapa penambahan fitur seperti menu finance yang dapat mengontrol cash Xalon, pada project kali ini kami bekerja sama menggunakan github sebagai version control untuk memudahkan pengelolaan project.',
  },
  {
    title: 'Website Company Profile PT. DIKA (Danamas Insan Kreasi Andalan)',
    href: 'https://ptdika.com/',
    image: WebsitePTDIKA,
    imageAlt: 'Website PT. DIKA',
    description:
      'Merupakan website yang saat ini dikelola oleh PT. DIKA sebagai wadah untuk branding profile perusahaan PT DIKA dengan berfokus pada bisnis sales dan operation outsourcing. Pada project ini saya melakukan development dari awal mulai slicing UI, integration API, dan juga menyusun struktur dalam penerapan SEO (Search Engine Optimation) agar bisa di update secara berkala dengan menggunakan web administrator CMS (Content Manangement Sistem) dalam proses development 1,5 bulan dengan menggunakan TechStack Nextjs, Typescript, Tanstack Query (Integration API), React Hooks From (Validation From).',
  },
  {
    title: 'CMS PT. DIKA (Danamas Insan Kreasi Andalan)',
    href: 'https://ptdika.com/',
    image: CMSPTDIKA,
    imageAlt: 'CMS PT. DIKA',
    description:
      'CMS (Content Management Sistem) merupakan website administrator untuk melakukan update content artikel blog dan juga SEO pada website company profile PT. DIKA. Pada project ini saya melakukan development dari awal mulai slicing UI, Blast Email (SMTP), struktur folder dan juga flow bisnis nya dalam proses developement 1,5 bulan dengan menggunakan codeigniter versi 3, MYSQL, dan PHP.',
  },
  {
    title: 'Absensi REL-MBG Berbasis Web',
    href: 'https://app-google-from.vercel.app/',
    image: AbsensiMBG,
    imageAlt: 'Absensi',
    description:
      'Rel MBG Attendance Management System merupakan aplikasi absensi digital yang terintegrasi dengan Google Forms dan Google Spreadsheet untuk mempermudah proses pengumpulan, validasi, dan monitoring data kehadiran secara terpusat. Sistem ini dirancang untuk meningkatkan efisiensi administrasi, mengurangi proses manual, serta menyediakan pelaporan data absensi yang lebih akurat dan mudah diakses. Pada project ini saya bertanggung jawab dalam pengembangan frontend application mulai dari perancangan struktur halaman, implementasi UI/UX, integrasi data, validasi formulir, hingga optimasi performa aplikasi. Seluruh fitur dikembangkan menggunakan React.js, Next.js, TypeScript, dan Tailwind CSS dengan pendekatan modern web development untuk menghasilkan aplikasi yang responsif, scalable, dan user-friendly.',
  },
]

export const clientLogos: ClientLogo[] = [
  { image: LogoOptik, imageAlt: 'Optik 99K' },
  { image: LogoXhalona, imageAlt: 'Xhalona' },
  { image: LogoSugi, imageAlt: 'PT. Sugi Inti Perkasa' },
  { image: LogoEdesa, imageAlt: 'E-Desa' },
]

export const blogItems: BlogItem[] = [
  {
    title:
      'Kenapa ya lowongan kerja frontend developer lebih banyak menggunakan ReactJS?',
    image: Programming,
    imageAlt: 'ReactJS, VueJS, frontend developer',
    description:
      'Alasan mengapa reactjs bisa mempermudah pekerjaan frontend developer',
  },
  {
    title: 'Bagaimana Meningkatkan Kualitas Web Menggunakan SEO?',
    image: SEOWEB,
    imageAlt: 'SEO web',
    description: 'Alasan mengapa seo web bisa meningkatkan kualitas web.',
  },
]
