import { z } from 'zod'

const phoneRegex = /^\d{2}[-.\s]?\d{5}[-.\s]?\d{4}$/

export const editAccountBodySchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().regex(phoneRegex).optional(),
  age: z.number().min(1).max(120).optional(),
})

export type EditAccountBodySchema = z.infer<typeof editAccountBodySchema>
