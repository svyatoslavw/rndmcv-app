import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"

import { prisma } from "@rndm/database"
import authConfig from "./auth.config"

const authOptions = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 1209600
  },
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  // debug: process.env.NODE_ENV !== "production" ? true : false,
  debug: false,
  callbacks: {
    async signIn({ user }) {
      try {
        if (!user.email) {
          return false
        }

        const existingUser = await prisma.user.findUnique({
          where: { email: user.email }
        })

        if (!existingUser) {
          const newUser = await prisma.user.create({
            data: {
              email: user.email,
              name: user.name || "User #" + user.id,
              image: user.image || "/images/logo.svg",
              role: "USER",
              password: null
            }
          })

          return !!newUser
        }

        return true
      } catch {
        return false
      }
    },

    jwt: async ({ token, user, session, trigger }) => {
      if (trigger === "update" && session?.name) {
        token.name = session.name
      }

      if (user) return { ...token, name: user.name }

      return token
    },
    redirect: async ({ baseUrl }) => {
      return baseUrl
    },
    session: async ({ session, token }) => {
      return { ...session, user: { ...session.user, name: token.name } }
    }
  },
  pages: {
    signIn: "/auth"
  },
  ...authConfig
})

export const { handlers, auth } = authOptions
