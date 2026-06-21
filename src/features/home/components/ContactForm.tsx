'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
  contactSchema,
  type ContactFormValues,
} from '@/features/home/schemas/contactSchema'

const inputClassName =
  'w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'

const errorClassName = 'mt-2 text-sm font-medium text-red-500'

export default function ContactForm() {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
    watch,
  } = useForm<ContactFormValues>({
    defaultValues: {
      email: '',
      fullName: '',
      message: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(contactSchema),
  })

  const messageValue = watch('message') ?? ''

  const onSubmit: SubmitHandler<ContactFormValues> = async (values) => {
    setErrorMessage('')
    setSuccessMessage('')

    const response = await fetch('/api/contact', {
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const result = (await response.json()) as { message?: string }

    if (!response.ok) {
      setErrorMessage(
        result.message ?? 'Pesan belum bisa dikirim. Silakan coba lagi.'
      )
      return
    }

    setSuccessMessage(
      result.message ??
        'Pesan berhasil dikirim. Terima kasih sudah menghubungi saya.'
    )
    reset()
  }

  return (
    <form className="gsap-reveal" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full lg:mx-auto lg:w-2/3">
        <div className="mb-8 w-full px-4">
          <label
            className="text-base font-bold text-primary"
            htmlFor="fullName"
          >
            Nama Lengkap
          </label>
          <input
            aria-invalid={Boolean(errors.fullName)}
            autoComplete="name"
            className={inputClassName}
            id="fullName"
            placeholder="Masukan Nama Lengkap Anda"
            type="text"
            {...register('fullName')}
          />
          {errors.fullName?.message ? (
            <p className={errorClassName}>{errors.fullName.message}</p>
          ) : null}
        </div>
        <div className="mb-8 w-full px-4">
          <label className="text-base font-bold text-primary" htmlFor="email">
            Email
          </label>
          <input
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            className={inputClassName}
            id="email"
            placeholder="Masukan Alamat Email Anda"
            type="email"
            {...register('email')}
          />
          {errors.email?.message ? (
            <p className={errorClassName}>{errors.email.message}</p>
          ) : null}
        </div>
        <div className="mb-8 w-full px-4">
          <div className="flex items-center justify-between gap-4">
            <label
              className="text-base font-bold text-primary"
              htmlFor="message"
            >
              Pesan
            </label>
            <span className="text-sm font-medium text-secondary">
              {messageValue.length}/255
            </span>
          </div>
          <textarea
            aria-invalid={Boolean(errors.message)}
            autoComplete="off"
            className={`${inputClassName} h-32 resize-y`}
            id="message"
            maxLength={255}
            placeholder="Masukan Pesan Singkat Anda"
            {...register('message')}
          />
          {errors.message?.message ? (
            <p className={errorClassName}>{errors.message.message}</p>
          ) : null}
        </div>
        {successMessage ? (
          <p className="mb-6 px-4 text-sm font-semibold text-primary">
            {successMessage}
          </p>
        ) : null}
        {errorMessage ? (
          <p className="mb-6 px-4 text-sm font-semibold text-red-500">
            {errorMessage}
          </p>
        ) : null}
        <div className="w-full px-4">
          <button
            className="w-full rounded-full bg-primary px-8 py-3 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim'}
          </button>
        </div>
      </div>
    </form>
  )
}
