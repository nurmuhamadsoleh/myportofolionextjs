'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { navigationItems } from '../data/homeData'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`absolute left-0 top-0 z-10 flex w-full items-center bg-transparent ${
        isScrolled ? 'navbar-fixed' : ''
      }`}
    >
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <Link
              className="block py-6 text-lg font-bold text-primary"
              href="#home"
              onClick={() => setIsMenuOpen(false)}
            >
              Nur Muhamad Soleh
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button
              aria-controls="nav-menu"
              aria-expanded={isMenuOpen}
              aria-label="Buka menu navigasi"
              className={`absolute right-4 block lg:hidden ${
                isMenuOpen ? 'hamburger-active' : ''
              }`}
              id="hamburger"
              name="hamburger"
              onClick={() => setIsMenuOpen((current) => !current)}
              type="button"
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out" />
              <span className="hamburger-line transition duration-300 ease-in-out" />
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out" />
            </button>
            <nav
              className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none ${
                isMenuOpen ? 'block' : 'hidden'
              }`}
              id="nav-menu"
            >
              <ul className="block lg:flex">
                {navigationItems.map((item) => (
                  <li className="group" key={item.href}>
                    <Link
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      replace
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
