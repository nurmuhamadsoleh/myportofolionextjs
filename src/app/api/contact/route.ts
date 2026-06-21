import { NextResponse } from 'next/server'
import { ValidationError } from 'yup'

import { appendContactToSheet } from '@/lib/googleSheets'
import { contactSchema } from '@/features/home/schemas/contactSchema'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const payload = await contactSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    })

    await appendContactToSheet(payload)

    return NextResponse.json({
      message: 'Pesan berhasil dikirim.',
    })
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json(
        {
          errors: error.errors,
          message: 'Data form tidak valid.',
        },
        { status: 422 }
      )
    }

    return NextResponse.json(
      {
        message: 'Pesan belum bisa disimpan. Silakan coba lagi nanti.',
      },
      { status: 500 }
    )
  }
}
