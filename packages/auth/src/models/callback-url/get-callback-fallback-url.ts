import * as E from 'fp-ts/Either'

import { callbackUrlSchema } from '../../entities/callback-url'

export function getCallbackUrlFallbackOrError(
  callbackUrlFallback: string | undefined
) {
  const callBackUrlOrError = callbackUrlSchema.safeParse(callbackUrlFallback)

  if (callBackUrlOrError.success) {
    return E.right(callBackUrlOrError.data)
  }

  const errorMessage = callBackUrlOrError.error.flatten().formErrors[0]

  return E.left(errorMessage)
}
