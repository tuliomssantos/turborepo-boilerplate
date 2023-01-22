'use client'

import { useStore } from '../../store'

export default function AddToCart() {
  const { price } = useStore()

  const handleClick = () => {
    useStore.setState(state => ({
      ...state,
      cartTotal: state.cartTotal + price,
    }))
  }

  return <button onClick={handleClick}>Add to cart</button>
}
