import { getCallbackUrlFromSearchParamsOrError } from '.'

import * as E from 'fp-ts/Either'

describe('getCallbackUrlFromSearchParamsOrError', () => {
  it('should return a callback url', () => {
    const callbackUrl = 'http://localhost:3000'
    const searchParams = { callbackUrl }
    const result = getCallbackUrlFromSearchParamsOrError(searchParams)

    expect(E.isRight(result)).toBe(true)

    // @ts-expect-error - we know this is a right
    expect(result.right).toBe(callbackUrl)
  })
})
