import * as yup from 'yup'

export const contactSchema = yup.object({
  fullName: yup
    .string()
    .required('Nama lengkap wajib diisi')
    .matches(
      /^[A-Za-z\s]+$/,
      'Nama lengkap hanya boleh berisi huruf dan spasi'
    ),
  email: yup
    .string()
    .required('Email wajib diisi')
    .email('Format email tidak valid'),
  message: yup
    .string()
    .required('Pesan wajib diisi')
    .max(255, 'Pesan maksimal 255 karakter'),
})

export type ContactFormValues = yup.InferType<typeof contactSchema>
