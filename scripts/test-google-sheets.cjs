const { loadEnvConfig } = require('@next/env')
const { google } = require('googleapis')

loadEnvConfig(process.cwd())

const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
const range = process.env.GOOGLE_SHEETS_RANGE || 'A:D'
const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
const privateKey = process.env.GOOGLE_PRIVATE_KEY

function normalizePrivateKey(value) {
  const trimmedValue = value
    .trim()
    .replace(/^['"]/, '')
    .replace(/['"],?$/, '')
    .trim()
  const unquotedValue =
    (trimmedValue.startsWith('"') && trimmedValue.endsWith('"')) ||
    (trimmedValue.startsWith("'") && trimmedValue.endsWith("'"))
      ? trimmedValue.slice(1, -1)
      : trimmedValue

  const normalizedValue = unquotedValue.replace(/\\n/g, '\n').trim()

  if (normalizedValue.includes('\n')) {
    return normalizedValue
  }

  const header = '-----BEGIN PRIVATE KEY-----'
  const footer = '-----END PRIVATE KEY-----'
  const keyBody = normalizedValue
    .replace(header, '')
    .replace(footer, '')
    .replace(/\s+/g, '')
  const keyLines = keyBody.match(/.{1,64}/g) || []

  return [header, ...keyLines, footer].join('\n')
}

async function testConnection() {
  const missingKeys = [
    ['GOOGLE_SHEETS_SPREADSHEET_ID', spreadsheetId],
    ['GOOGLE_SERVICE_ACCOUNT_EMAIL', email],
    ['GOOGLE_PRIVATE_KEY', privateKey],
  ]
    .filter(([, value]) => !value)
    .map(([name]) => name)

  if (missingKeys.length > 0) {
    throw new Error(`Missing env: ${missingKeys.join(', ')}`)
  }

  const auth = new google.auth.JWT({
    email,
    key: normalizePrivateKey(privateKey),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({
    auth,
    version: 'v4',
  })

  const response = await sheets.spreadsheets.values.get({
    range,
    spreadsheetId,
  })

  console.log('Koneksi Google Sheets berhasil.')
  console.log(`Range: ${range}`)
  console.log(`Jumlah baris terbaca: ${response.data.values?.length ?? 0}`)
}

testConnection().catch((error) => {
  console.error('Koneksi Google Sheets gagal.')
  console.error(`Error: ${error.message}`)
  if (error.code || error.status) {
    console.error(`Status: ${error.code ?? error.status}`)
  }
  process.exit(1)
})
