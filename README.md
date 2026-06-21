# Setup Google Sheets API untuk Contact Form

Dokumentasi ini menjelaskan cara mengaktifkan Google Sheets API, membuat Service Account, generate JSON Key, dan menghubungkannya ke aplikasi ReactJS / Next.js melalui backend API.

## 1. Buka Google Cloud Console

Buka halaman:

```txt
https://console.cloud.google.com/
```

Pastikan sudah login menggunakan akun Google yang sama dengan project Anda.

## 2. Pilih atau Buat Project

Klik bagian nama project di header Google Cloud, lalu pilih:

```txt
New Project
```

Contoh nama project:

```txt
contact-form-api
```

Klik:

```txt
Create
```

## 3. Enable Google Sheets API

Masuk ke halaman API Library:

```txt
https://console.cloud.google.com/apis/library
```

Cari:

```txt
Google Sheets API
```

Klik **Google Sheets API**, lalu klik:

```txt
Enable
```

## 4. Buat Service Account

Masuk ke menu:

```txt
IAM & Admin
→ Service Accounts
```

Atau buka langsung:

```txt
https://console.cloud.google.com/iam-admin/serviceaccounts
```

Klik:

```txt
Create Service Account
```

Isi data berikut:

```txt
Service account name: contact-form-api
Service account ID: otomatis
Description: Service account untuk integrasi contact form ke Google Sheets
```

Klik:

```txt
Create and Continue
```

Pada bagian role, bisa dilewati terlebih dahulu.

Klik:

```txt
Done
```

## 5. Generate JSON Key

Klik service account yang sudah dibuat.

Masuk ke tab:

```txt
Keys
```

Klik:

```txt
Add Key
→ Create New Key
```

Pilih:

```txt
JSON
```

Klik:

```txt
Create
```

File JSON akan otomatis terdownload.

## 6. Ambil Data dari JSON Key

Buka file JSON yang sudah didownload.

Ambil bagian berikut:

```json
{
  "client_email": "contact-form-api@project-id.iam.gserviceaccount.com",
  "private_key": "-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
}
```

Gunakan `client_email` untuk:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=
```

Gunakan `private_key` untuk:

```env
GOOGLE_PRIVATE_KEY=
```

## 7. Share Spreadsheet ke Service Account

Buka Google Spreadsheet yang ingin digunakan.

Klik:

```txt
Share / Bagikan
```

Tambahkan email service account, contoh:

```txt
contact-form-api@project-id.iam.gserviceaccount.com
```

Berikan akses:

```txt
Editor
```

Klik:

```txt
Send / Kirim
```

Tanpa langkah ini, backend akan gagal mengakses spreadsheet dan biasanya muncul error:

```txt
The caller does not have permission
```

## 8. Contoh Environment Variable

Buat file `.env` atau `.env.local` di backend:

```env
GOOGLE_SHEETS_SPREADSHEET_ID=1ZAhfqxp7KiAAN5sDR7aboTpauqnj7eSnMD37eQNOFT0
GOOGLE_SHEETS_RANGE=Sheet1!A:D

GOOGLE_SERVICE_ACCOUNT_EMAIL=contact-form-api@project-id.iam.gserviceaccount.com

GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
```

## 9. Catatan Penting

Jangan upload file `.env` atau file JSON key ke GitHub.

Tambahkan ke `.gitignore`:

```gitignore
.env
.env.local
*.json
```

Untuk deployment di Vercel, masukkan environment variable melalui:

```txt
Vercel Dashboard
→ Project
→ Settings
→ Environment Variables
```

Pilih environment:

```txt
Production
Preview
```

Setelah menambahkan env di Vercel, lakukan:

```txt
Redeploy
```

## 10. Flow Integrasi

```txt
ReactJS / Next.js Contact Form
        ↓
Backend API
        ↓
Google Sheets API
        ↓
Google Spreadsheet
```
## 11. Tambahkan Script BE untuk googleSheet

## 12. Checklist

* [ ] Google Cloud Project sudah dibuat
* [ ] Google Sheets API sudah di-enable
* [ ] Service Account sudah dibuat
* [ ] JSON Key sudah didownload
* [ ] Spreadsheet sudah di-share ke email service account
* [ ] Env sudah ditambahkan di local
* [ ] Env sudah ditambahkan di Vercel
* [ ] Sudah redeploy Vercel
* [ ] Contact form berhasil menyimpan data ke Google Sheets
