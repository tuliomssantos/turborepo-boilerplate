import React from 'react'
import AddToCart from 'src/components/add-to-cart'
import Cart from 'src/components/cart'
import ProductInfo from 'src/components/product-info'
import StoreInitializer from 'src/components/store-initializer'
import { useStore } from '../src/store'

type Product = {
  description: string
  name: string
  price: number
}

export default async function Home() {
  /**
   * For demo purposes, we're fetching data from the local server.
   * To up the server, run `nxp servor` in the root of the workspace (apps/web).
   */
  const dataResponse = await fetch('http://localhost:8080/data/products.json')
  const data = (await dataResponse.json()) as Product

  //Store initialization on the server
  useStore.setState({
    name: data.name,
    price: data.price,
  })

  return (
    <div>
      <StoreInitializer name={data.name} price={data.price} />
      <ProductInfo />
      <AddToCart />
      <Cart />
    </div>
  )
}
