import NextAuth from 'next-auth'
import Providers from 'next-auth/providers';
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
});

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {},
      authorize: async (credentials) => {
        try {
          const validCredentials = schema.parse(credentials);
          if (validCredentials.password !== validCredentials.confirmPassword) {
            throw new Error('Passwords do not match');
          }
        } catch (error) {
          throw new Error('Validation failed');
        }

        // Add logic here to look up the user from the credentials supplied
        const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }

        if (user) {
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      }
    })
  ],
  database: process.env.DATABASE_URL,
})