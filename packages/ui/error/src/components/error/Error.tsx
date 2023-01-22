export default function Error({ message }: { message: string }) {
  console.error(message)
  return <div>Error</div>
}
