import React from 'react'

import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section className="pb-32 pt-36" id="contact">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <p className="mb-2 text-lg font-semibold text-primary md:text-4xl">
              Contact
            </p>
            <h2 className="mb-4 text-2xl font-bold text-dark sm:text-3xl lg:text-4xl">
              Hubungi Kami
            </h2>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
