import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import mongoose from 'mongoose';
import User from '../../../models/User'; // Import the Mongoose User model

export default NextAuth({
  providers: [
    Providers.Credentials({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: {  label: 'Password',  type: 'password' },
      },
      authorize: async (credentials) => {
        try {
          await mongoose.connect(process.env.MONGODB_URI);

          const user = await User.findOne({ email: credentials.email });

          if (user && user.password === credentials.password) {
            return Promise.resolve(user);
          } else {
            return Promise.resolve(null);
          }
        } finally {
          mongoose.connection.close();
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session(session, token) {
      session.user = token;
      return session;
    },
  },
});