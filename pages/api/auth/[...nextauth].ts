import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { NextAuthOptions } from 'next-auth';
import Moralis from 'moralis';
import { JWT } from 'next-auth/jwt';
import config from '../../../src/common/config';

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'MoralisAuth',
            credentials: {
                message: {
                    label: 'Message',
                    type: 'text',
                    placeholder: '0x5',
                },
                signature: {
                    label: 'Signature',
                    type: 'text',
                    placeholder: '0x5',
                },
            },
              async authorize(credentials) {
                try {
                  if (!credentials) {
                    throw new Error('Credentials are missing');
                  }

                  const { message, signature } = credentials;
                  await Moralis.start({ apiKey: config.moralisApiKey });
                  const { address, profileId } = (
                    await Moralis.Auth.verify({ message, signature, network: 'evm' })
                  ).raw;

                  const user = { address, profileId, signature, id: '1' };
                  return user;
                } catch (e) {
                  console.error(e);
                  return null;
                }
              },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            user && (token.user = user);
            return token;
        },
        async session({ session, token }) {
            session.user = token.user as JWT;
            return session;
        },
    },
}

export default NextAuth(authOptions);
