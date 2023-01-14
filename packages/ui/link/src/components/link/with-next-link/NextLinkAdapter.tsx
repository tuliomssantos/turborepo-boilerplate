'use client'

import BaseLink, { LinkProps } from '../Link'

import NextLink from 'next/link'

import React from 'react'

type Props = Omit<LinkProps, 'Link'>

export default function NextLinkAdapter({ children, ...props }: Props) {
  return (
    <BaseLink
      Link={NextLink as unknown as React.ComponentType<Props>}
      {...props}
    >
      {children}
    </BaseLink>
  )
}
