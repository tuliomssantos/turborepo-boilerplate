'use client'

import { useRef } from 'react'
import { useStore } from 'src/store'

export default function StoreInitializer({
  name,
  price,
}: {
  name: string
  price: number
}) {
  const initialize = useRef(false)

  if (!initialize.current) {
    useStore.setState({ name, price })
    initialize.current = true
  }

  return null
}
