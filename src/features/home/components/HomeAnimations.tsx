'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

export default function HomeAnimations() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      gsap.from('.gsap-hero-copy', {
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power3.out',
        y: 40,
      })

      gsap.from('.gsap-hero-photo', {
        autoAlpha: 0,
        delay: 0.15,
        duration: 1,
        ease: 'power3.out',
        scale: 0.92,
        y: 30,
      })

      gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            once: true,
            start: 'top 85%',
            trigger: element,
          },
          y: 48,
        })
      })

      gsap.utils
        .toArray<HTMLElement>('.gsap-project-card')
        .forEach((element, index) => {
          const image = element.querySelector('.gsap-project-image')

          gsap.from(element, {
            autoAlpha: 0,
            delay: (index % 2) * 0.12,
            duration: 0.95,
            ease: 'back.out(1.25)',
            rotateX: 4,
            scale: 0.94,
            scrollTrigger: {
              once: true,
              start: 'top 86%',
              trigger: element,
            },
            transformOrigin: 'center bottom',
            y: 72,
          })

          if (image) {
            gsap.fromTo(
              image,
              { scale: 1.12 },
              {
                duration: 1.2,
                ease: 'power3.out',
                scale: 1,
                scrollTrigger: {
                  once: true,
                  start: 'top 86%',
                  trigger: element,
                },
              }
            )
          }
        })

      gsap.utils
        .toArray<HTMLElement>('.gsap-card')
        .forEach((element, index) => {
          gsap.from(element, {
            autoAlpha: 0,
            delay: (index % 4) * 0.08,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              once: true,
              start: 'top 88%',
              trigger: element,
            },
            y: 42,
          })
        })
    })

    return () => {
      context.revert()
    }
  }, [])

  return null
}
