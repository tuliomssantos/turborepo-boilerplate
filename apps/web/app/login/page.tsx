import { Login } from '@acme/auth'

const CALLBACK_URL = process.env.NEXT_PUBLIC_CALLBACK_URL

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  return (
    <Login
      searchParams={searchParams ?? {}}
      callbackUrlFallback={CALLBACK_URL}
    />
  )
}
