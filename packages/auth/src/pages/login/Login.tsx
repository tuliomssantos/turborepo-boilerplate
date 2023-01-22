import { getCallbackUrl } from '../../models/callback-url/get-callback-url'

import { isLeft } from 'fp-ts/Either'

import { LoginWithEmailForm } from '../../components/login-with-email-form'

import { ButtonSignWithGoogle } from '../../components/button-sign-with-google'

import { Error } from '@acme/error'

export type SearchParams = {
  [key: string]: string | string[] | undefined
}

export type PageProps = {
  searchParams: SearchParams
  callbackUrlFallback: string | undefined
}

export default function Login({
  searchParams,
  callbackUrlFallback,
}: PageProps) {
  const callbackUrlorError = getCallbackUrl(searchParams, callbackUrlFallback)

  if (isLeft(callbackUrlorError)) {
    return <Error message={callbackUrlorError.left} />
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Wellcome back!</p>
      <LoginWithEmailForm callbackUrl={callbackUrlorError.right} />
      <ButtonSignWithGoogle callbackUrl={callbackUrlorError.right} />
    </div>
  )
}
