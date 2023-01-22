import { AuthButton, getCallbackUrl } from '@acme/auth'

import { Error } from '@acme/error'

import { isLeft } from 'fp-ts/Either'

const CALLBACK_URL = process.env.NEXT_PUBLIC_CALLBACK_URL

export default function Dashboard({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const callbackUrlorError = getCallbackUrl(searchParams ?? {}, CALLBACK_URL)

  if (isLeft(callbackUrlorError)) {
    return <Error message={callbackUrlorError.left} />
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <AuthButton callbackUrl={callbackUrlorError.right} />
    </div>
  )
}
