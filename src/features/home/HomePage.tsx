import React from 'react'

import AboutSection from './components/AboutSection'
import BlogSection from './components/BlogSection'
import ClientsSection from './components/ClientsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HomeAnimations from './components/HomeAnimations'
import PortfolioSection from './components/PortfolioSection'

export default function HomePage() {
  return (
    <>
      <HomeAnimations />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ClientsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
