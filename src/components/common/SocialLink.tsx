import Link from 'next/link'
import React from 'react'

type SocialLinkProps = {
  href: string
  label: string
  icon: 'linkedin' | 'instagram'
}

export default function SocialLink({ href, label, icon }: SocialLinkProps) {
  const brandClassName =
    icon === 'linkedin'
      ? 'border-[#0A66C2] bg-[#0A66C2] text-white hover:border-[#004182] hover:bg-[#004182]'
      : 'border-[#DD2A7B] bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:border-[#B5176F] hover:opacity-90'

  return (
    <Link
      aria-label={label}
      className={`flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-md transition duration-300 hover:shadow-lg ${brandClassName}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {icon === 'linkedin' ? <LinkedInIcon /> : <InstagramIcon />}
    </Link>
  )
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8 fill-current"
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.36 8h4.28v14H.36V8Zm7.4 0h4.1v1.91h.06c.57-1.08 1.97-2.22 4.05-2.22 4.34 0 5.14 2.86 5.14 6.57V22h-4.28v-6.86c0-1.64-.03-3.75-2.28-3.75-2.29 0-2.64 1.79-2.64 3.63V22H7.76V8Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8 fill-current"
      viewBox="0 0 24 24"
    >
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 2.15a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  )
}
