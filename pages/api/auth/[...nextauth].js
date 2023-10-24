import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      // The name to display on the sign-in form (e.g., "Sign in with...")
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'text' },
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
