import { getCallbackUrlFallbackOrError } from './get-callback-fallback-url'

import * as E from 'fp-ts/Either'

describe('getCallbackUrlFallbackOrError', () => {
  it('should return a callback url', () => {
    const callbackUrl = 'http://localhost:3000'
    const result = getCallbackUrlFallbackOrError(callbackUrl)
    expect(E.isRight(result)).toBe(true)
    // @ts-expect-error - we know this is a right
    expect(result.right).toBe(callbackUrl)
  })

  it('should return an error', () => {
    const callbackUrl = 'not a url'
    const result = getCallbackUrlFallbackOrError(callbackUrl)
    expect(E.isLeft(result)).toBe(true)

    // @ts-expect-error - we know this is a left
    expect(result.left).toBe('Invalid url')
  })

  it('should return an error when callbackUrl is undefined', () => {
    const result = getCallbackUrlFallbackOrError(undefined)
    expect(E.isLeft(result)).toBe(true)
    // @ts-expect-error - we know this is a left
    expect(result.left).toBe('Required')
  })
})
