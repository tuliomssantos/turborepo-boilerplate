'use client'

import { useStore } from '../../store'

export default function Cart() {
  const cartTotal = useStore(state => state.cartTotal)

  return (
    <div>
      <h2>Cart</h2>
      <p>{cartTotal}</p>
    </div>
  )
}
