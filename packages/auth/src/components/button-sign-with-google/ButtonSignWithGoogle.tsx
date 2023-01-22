'use client'

import { signIn } from 'next-auth/react'

export default function ButtonSignWithGoogle({
  callbackUrl,
}: {
  callbackUrl: string
}) {
  const handleSignIn = () => {
    signIn('google', { callbackUrl })
  }

  return <button onClick={handleSignIn}>Sign in with Google</button>
}
