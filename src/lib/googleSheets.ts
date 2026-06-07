import { google } from 'googleapis'

import type { ContactFormValues } from '@/features/home/schemas/contactSchema'

const spreadsheetId =
  process.env.GOOGLE_SHEETS_SPREADSHEET_ID ??
  '1ZAhfqxp7KiAAN5sDR7aboTpauqnj7eSnMD37eQNOFT0'

const spreadsheetRange = process.env.GOOGLE_SHEETS_RANGE ?? 'A:D'

function getRequiredEnv(name: string) {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing ${name} environment variable`)
  }

  return value
}

function getGooglePrivateKey() {
  return getRequiredEnv('GOOGLE_PRIVATE_KEY').replace(/\\n/g, '\n')
}

export async function appendContactToSheet(data: ContactFormValues) {
  const auth = new google.auth.JWT({
    email: getRequiredEnv('GOOGLE_SERVICE_ACCOUNT_EMAIL'),
    key: getGooglePrivateKey(),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ auth, version: 'v4' })

  await sheets.spreadsheets.values.append({
    range: spreadsheetRange,
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          data.fullName.trim(),
          data.email.trim(),
          data.message.trim(),
        ],
      ],
    },
    spreadsheetId,
    valueInputOption: 'USER_ENTERED',
  })
}
