import NextAuth from "next-auth"
import AuthentikProvider from "next-auth/providers/authentik"
import prisma from '@/lib/prisma'
import { PrismaAdapter } from "@next-auth/prisma-adapter"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    AuthentikProvider({
      clientId: process.env.AUTHENTIK_ID ?? '',
      clientSecret: process.env.AUTHENTIK_SECRET ?? '',
      issuer: process.env.AUTHENTIK_ISSUER,
    })
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)