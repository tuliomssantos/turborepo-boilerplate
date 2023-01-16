import prisma from '../../lib/prisma'

import { z } from 'zod'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId = req.query.id

  const idSchema = z.string()
  try {
    idSchema.parse(userId)

    const user = await prisma.user.findUnique({
      where: { id: userId as string },
    })

    res.json(user)
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'Unexpected error' })
    }
  }
}
