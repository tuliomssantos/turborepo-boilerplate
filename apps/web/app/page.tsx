import { AuthButton } from 'components/AuthButton'

const CALLBACK_URL = process.env.NEXT_PUBLIC_CALLBACK_URL

function Home() {
  return (
    <div>
      <h1>Acme Corp</h1>
      <AuthButton callbackUrl={CALLBACK_URL as string} />
    </div>
  )
}

export default Home
