import { z } from 'zod'

export const callbackUrlSchema = z
  .string()
  .min(1, 'Callback URL is required')
  .url()

export type CallbackUrl = z.infer<typeof callbackUrlSchema>
