import { isLeft, left, right } from 'fp-ts/Either'

// import { SearchParams } from '../../pages/login/Login'

import { getCallbackUrlFromSearchParamsOrError } from '.'

import { getCallbackUrlFallbackOrError } from '.'

export function getCallbackUrl(
  callbackUrlFromSearchParams: { [key: string]: string | string[] | undefined },
  callbackUrlFallback: string | undefined
) {
  const callbackUrlFromSearchParamsOrError =
    getCallbackUrlFromSearchParamsOrError(callbackUrlFromSearchParams)

  if (isLeft(callbackUrlFromSearchParamsOrError)) {
    const callbackUrlFallbackOrError =
      getCallbackUrlFallbackOrError(callbackUrlFallback)

    if (isLeft(callbackUrlFallbackOrError)) {
      return left('Callback URL is not valid. Please check your callback URL.')
    }

    return right(callbackUrlFallbackOrError.right)
  }

  return right(callbackUrlFromSearchParamsOrError.right)
}
