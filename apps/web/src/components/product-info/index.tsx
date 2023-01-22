import { useStore } from '../../store'

export default function ProductInfo() {
  return (
    <div>
      <h1>{useStore.getState().name}</h1>
      <p>Price: ${useStore.getState().price.toFixed(2)}</p>
      <hr />
    </div>
  )
}
