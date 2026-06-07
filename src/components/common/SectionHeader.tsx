import React from 'react'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  titleClassName?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  titleClassName = 'text-dark',
}: SectionHeaderProps) {
  return (
    <div className="w-full px-4">
      <div className="mx-auto mb-16 max-w-xl text-center">
        <p className="mb-2 text-lg font-semibold text-primary md:text-4xl">
          {eyebrow}
        </p>
        <h2
          className={`mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl ${titleClassName}`}
        >
          {title}
        </h2>
        {description ? (
          <p className="text-md font-medium text-secondary md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
