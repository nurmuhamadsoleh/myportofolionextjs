import Programming from '@/assets/image/Programming.jpg'
import SEOWEB from '@/assets/image/SEO_WEB.jpg'
import type { StaticImageData } from 'next/image'

export type BlogArticle = {
  slug: string
  title: string
  category: string
  publishedAt: string
  publishedAtLabel: string
  readingTime: string
  image: StaticImageData
  imageAlt: string
  excerpt: string
  keywords: string[]
  sections: {
    heading?: string
    paragraphs: string[]
  }[]
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'kenapa-lowongan-frontend-banyak-menggunakan-reactjs',
    title:
      'Kenapa Lowongan Kerja Frontend Developer Lebih Banyak Menggunakan ReactJS?',
    category: 'Web Developer',
    publishedAt: '2024-06-22T10:00:00+07:00',
    publishedAtLabel: '2024-06-22 10:00:00',
    readingTime: '4 menit baca',
    image: Programming,
    imageAlt: 'Ilustrasi frontend developer dengan ReactJS',
    excerpt:
      'ReactJS banyak dipakai oleh perusahaan karena ekosistemnya matang, komunitasnya besar, dan cocok untuk membangun UI modern yang scalable.',
    keywords: [
      'ReactJS',
      'Frontend Developer',
      'Lowongan Kerja Frontend',
      'Next.js',
      'JavaScript',
    ],
    sections: [
      {
        paragraphs: [
          'ReactJS menjadi salah satu skill yang paling sering muncul pada lowongan Frontend Developer karena kebutuhan industri bergerak ke arah aplikasi web yang interaktif, cepat, dan mudah dikembangkan secara bertahap.',
          'Banyak perusahaan memilih ReactJS karena library ini fleksibel untuk berbagai skala produk, mulai dari landing page, dashboard internal, sistem transaksi, hingga aplikasi web kompleks yang membutuhkan reusable component.',
        ],
      },
      {
        heading: 'Ekosistem yang Matang',
        paragraphs: [
          'ReactJS memiliki ekosistem yang sangat luas. Developer bisa memakai berbagai library pendukung untuk routing, state management, form validation, data fetching, testing, dan UI component. Hal ini membuat proses development lebih cepat karena tim tidak perlu membangun semuanya dari awal.',
          'Ekosistem tersebut juga membuat React mudah dikombinasikan dengan framework seperti Next.js, terutama ketika project membutuhkan SEO, server-side rendering, image optimization, dan struktur aplikasi yang lebih siap untuk production.',
        ],
      },
      {
        heading: 'Reusable Component Mempercepat Development',
        paragraphs: [
          'Konsep component-based development membuat UI dapat dipecah menjadi bagian kecil yang bisa dipakai ulang. Button, card, modal, form, table, dan layout bisa dibuat konsisten di seluruh aplikasi.',
          'Bagi perusahaan, pola ini penting karena mengurangi duplikasi kode, mempercepat perubahan desain, dan memudahkan kolaborasi antar developer di dalam satu project.',
        ],
      },
      {
        heading: 'Komunitas Besar dan Mudah Dipelajari',
        paragraphs: [
          'ReactJS punya komunitas besar, dokumentasi lengkap, dan banyak contoh implementasi. Ketika developer menemui masalah, peluang menemukan referensi atau solusi jauh lebih tinggi.',
          'Dari sisi hiring, perusahaan juga lebih mudah menemukan kandidat dengan pengalaman ReactJS dibandingkan teknologi yang lebih niche. Inilah salah satu alasan lowongan React lebih sering terlihat di pasar kerja.',
        ],
      },
      {
        heading: 'Kesimpulan',
        paragraphs: [
          'ReactJS populer bukan hanya karena tren, tetapi karena mampu menjawab kebutuhan bisnis dan teknis sekaligus. Untuk Frontend Developer, memahami ReactJS, TypeScript, Next.js, dan pola reusable component akan menjadi bekal yang kuat untuk masuk ke banyak jenis project.',
        ],
      },
    ],
  },
  {
    slug: 'bagaimana-meningkatkan-kualitas-web-menggunakan-seo',
    title: 'Bagaimana Meningkatkan Kualitas Web Menggunakan SEO?',
    category: 'SEO Web',
    publishedAt: '2024-06-23T10:00:00+07:00',
    publishedAtLabel: '2024-06-23 10:00:00',
    readingTime: '5 menit baca',
    image: SEOWEB,
    imageAlt: 'Ilustrasi optimasi SEO website',
    excerpt:
      'SEO membantu website lebih mudah ditemukan Google dengan memperbaiki struktur konten, performa halaman, metadata, dan pengalaman pengguna.',
    keywords: [
      'SEO',
      'SEO Website',
      'Optimasi Website',
      'Google Search',
      'Technical SEO',
    ],
    sections: [
      {
        paragraphs: [
          'SEO atau Search Engine Optimization adalah proses meningkatkan kualitas website agar lebih mudah dipahami oleh mesin pencari dan lebih nyaman digunakan oleh pengunjung.',
          'Website yang baik tidak hanya terlihat menarik, tetapi juga cepat diakses, punya struktur heading yang jelas, konten yang relevan, metadata yang tepat, dan pengalaman pengguna yang stabil di desktop maupun mobile.',
        ],
      },
      {
        heading: 'Mulai dari Struktur Konten',
        paragraphs: [
          'Struktur konten yang rapi membantu Google memahami topik halaman. Gunakan satu H1 yang jelas, lanjutkan dengan H2 dan H3 sesuai hierarki pembahasan, lalu pastikan setiap section menjawab kebutuhan pengguna.',
          'Judul, deskripsi, dan isi artikel perlu saling mendukung. Hindari keyword stuffing; gunakan kata kunci secara natural di title, paragraph pembuka, heading, dan metadata.',
        ],
      },
      {
        heading: 'Performa Halaman Sangat Berpengaruh',
        paragraphs: [
          'Kecepatan website menjadi sinyal penting untuk pengalaman pengguna. Optimasi gambar, kurangi JavaScript yang tidak perlu, gunakan lazy loading pada aset non-prioritas, dan pastikan layout tidak bergeser saat halaman dimuat.',
          'Pada Next.js, optimasi bisa dibantu dengan `next/image`, metadata API, dan rendering strategy yang sesuai. Halaman artikel yang statis atau server-rendered akan lebih mudah dibaca crawler dibanding konten yang baru muncul setelah JavaScript client selesai berjalan.',
        ],
      },
      {
        heading: 'Metadata dan Internal Link',
        paragraphs: [
          'Setiap artikel sebaiknya memiliki title dan meta description yang unik. Open Graph juga membantu ketika artikel dibagikan ke media sosial karena preview terlihat lebih informatif.',
          'Internal link juga penting. Tombol kembali ke section artikel, link antar artikel, dan navigasi yang jelas membantu pengguna maupun crawler memahami struktur website.',
        ],
      },
      {
        heading: 'Kesimpulan',
        paragraphs: [
          'SEO adalah kombinasi antara konten berkualitas, struktur teknis yang rapi, performa halaman, dan pengalaman pengguna. Jika semua bagian ini dirawat secara konsisten, peluang website untuk tampil lebih baik di Google akan meningkat.',
        ],
      },
    ],
  },
]

export function getBlogArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug)
}
