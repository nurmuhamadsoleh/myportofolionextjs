import type { ContactFormValues } from '@/features/home/schemas/contactSchema'

type GoogleSheetsClient = {
  spreadsheets: {
    values: {
      append: (_params: {
        insertDataOption: 'INSERT_ROWS'
        range: string
        requestBody: {
          values: string[][]
        }
        spreadsheetId: string
        valueInputOption: 'RAW'
      }) => Promise<unknown>
    }
  }
}

type GoogleApis = {
  google: {
    auth: {
      JWT: new (_options: {
        email: string
        key: string
        scopes: string[]
      }) => unknown
    }
    sheets: (_options: { auth: unknown; version: 'v4' }) => GoogleSheetsClient
  }
}

const { google } = require('googleapis') as GoogleApis

const spreadsheetId =
  process.env.GOOGLE_SHEETS_SPREADSHEET_ID ??
  '1ZAhfqxp7KiAAN5sDR7aboTpauqnj7eSnMD37eQNOFT0'

const spreadsheetRange = process.env.GOOGLE_SHEETS_RANGE ?? 'A:D'
let cachedSheetsClient: GoogleSheetsClient | null = null

function getRequiredEnv(name: string) {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing ${name} environment variable`)
  }

  return value
}

function getGooglePrivateKey() {
  const privateKey = getRequiredEnv('GOOGLE_PRIVATE_KEY')
    .trim()
    .replace(/^['"]/, '')
    .replace(/['"],?$/, '')
    .trim()
  const unquotedPrivateKey =
    (privateKey.startsWith('"') && privateKey.endsWith('"')) ||
    (privateKey.startsWith("'") && privateKey.endsWith("'"))
      ? privateKey.slice(1, -1)
      : privateKey

  const normalizedPrivateKey = unquotedPrivateKey.replace(/\\n/g, '\n').trim()

  if (normalizedPrivateKey.includes('\n')) {
    return normalizedPrivateKey
  }

  const header = '-----BEGIN PRIVATE KEY-----'
  const footer = '-----END PRIVATE KEY-----'
  const keyBody = normalizedPrivateKey
    .replace(header, '')
    .replace(footer, '')
    .replace(/\s+/g, '')
  const keyLines = keyBody.match(/.{1,64}/g) ?? []

  return [header, ...keyLines, footer].join('\n')
}

function getSheetsClient() {
  if (cachedSheetsClient) {
    return cachedSheetsClient
  }

  const auth = new google.auth.JWT({
    email: getRequiredEnv('GOOGLE_SERVICE_ACCOUNT_EMAIL'),
    key: getGooglePrivateKey(),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  cachedSheetsClient = google.sheets({ auth, version: 'v4' })

  return cachedSheetsClient
}

export async function appendContactToSheet(data: ContactFormValues) {
  const sheets = getSheetsClient()
  const createdAt = new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'Asia/Jakarta',
  }).format(new Date())

  await sheets.spreadsheets.values.append({
    insertDataOption: 'INSERT_ROWS',
    range: spreadsheetRange,
    requestBody: {
      values: [
        [
          createdAt,
          data.fullName.trim(),
          data.email.trim(),
          data.message.trim(),
        ],
      ],
    },
    spreadsheetId,
    valueInputOption: 'RAW',
  })
}
