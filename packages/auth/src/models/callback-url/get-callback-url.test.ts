import { getCallbackUrl } from './get-callback-url'

import * as E from 'fp-ts/Either'

describe('getCallbackUrl', () => {
  it('should return a callback URL', () => {
    const callbackUrlFromSearchParams = {
      callbackUrl: 'https://example.com',
    }

    const callbackUrlFallback = 'https://example.com'

    const result = getCallbackUrl(
      callbackUrlFromSearchParams,
      callbackUrlFallback
    )
    console.log('🚀 ~ file: get-callback-url.test.ts:17 ~ it ~ result', result)

    expect(E.isRight(result)).toBe(true)
    //@ts-expect-error - TS doesn't know that result is a right
    expect(result.right).toBe('https://example.com')
  })
})
