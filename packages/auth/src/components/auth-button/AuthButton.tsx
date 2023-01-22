'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

function AuthButton({ callbackUrl }: { callbackUrl: string }) {
  const { data: session } = useSession()

  const isAuthenticated = session ? true : false

  return (
    <button
      onClick={() =>
        isAuthenticated ? signOut() : signIn(undefined, { callbackUrl })
      }
    >
      {isAuthenticated ? 'Sign out' : 'Sign in'}
    </button>
  )
}

export default AuthButton
