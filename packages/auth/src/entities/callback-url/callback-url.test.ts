import { callbackUrlSchema } from '.'

describe('callbackUrlSchema', () => {
  it('should pass validation', () => {
    expect(callbackUrlSchema.safeParse('https://example.com').success).toBe(
      true
    )
  })

  it('should fail validation', () => {
    expect(callbackUrlSchema.safeParse('').success).toBe(false)
    expect(callbackUrlSchema.safeParse('not a url').success).toBe(false)
  })
})
