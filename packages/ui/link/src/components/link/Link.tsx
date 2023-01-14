'use client'

export type LinkProps = {
  children: React.ReactNode
  Link: React.ComponentType<Omit<LinkProps, 'Link'>>
  href: string
  className?: string
}

export default function Link({ children, Link, href, className }: LinkProps) {
  return (
    <Link href={href} className={className ? className : undefined}>
      {children}
    </Link>
  )
}
