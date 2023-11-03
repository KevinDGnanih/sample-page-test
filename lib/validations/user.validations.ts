import { z } from 'zod';

const SignupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});