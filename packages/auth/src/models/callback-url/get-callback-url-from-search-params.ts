import * as E from 'fp-ts/Either'

import { callbackUrlSchema } from '../../entities/callback-url'

import type { SearchParams } from '../../pages/login/Login'

export function getCallbackUrlFromSearchParamsOrError(
  searchParams: SearchParams
) {
  const callbackUrl = searchParams?.callbackUrl

  const callBackUrlOrError = callbackUrlSchema.safeParse(callbackUrl)

  if (callBackUrlOrError.success) {
    return E.right(callBackUrlOrError.data)
  } else {
    return E.left(callBackUrlOrError.error)
  }
}
