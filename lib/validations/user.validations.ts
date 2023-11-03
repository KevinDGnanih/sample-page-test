import { z } from 'zod'

export const signupSchema = z.object({
  email: z.string().min(3, 'Username must be at least 3 characters').max(20),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})
