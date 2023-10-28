import NextAuth from "next-auth/next";
import { getProviders } from "next-auth/react";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    Credentials({
      // The name to display on the sign-in form (e.g., "Sign in with...")
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const user = await findUser(credentials.email, credentials.password);

        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  database: {
    type: 'mongodb',
    useNewUrlParser: true,
    url: process.env.MONGODB_URI,
  },
  callbacks: {
    async session(session, user) {
      session.id = user.id;
      return session;
    },
  },
});