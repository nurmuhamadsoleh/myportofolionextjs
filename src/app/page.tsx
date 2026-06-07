import React from 'react'

import HomePage from '@/features/home/HomePage'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function Home() {
  return <HomePage />
}
