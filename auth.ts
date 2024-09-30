import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"

import authConfig from "./auth.config"
import { prisma } from "./db"

export const authOptions = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 1209600 // Two weeks.
  },
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  debug: process.env.NODE_ENV !== "production" ? true : false,

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
              image:
                user.image ||
                "https://rndmcv-uploader.s3.eu-north-1.amazonaws.com/default_image.jpg",
              role: "USER",
              password: null
            }
          })

          await prisma.subscription.create({
            data: {
              userId: newUser.id,
              type: "BASIC",
              price: 0,
              expiresAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
            }
          })

          return true
        }

        return true
      } catch (error) {
        console.error("Error during signIn callback", error)
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

export const { handlers, signIn, signOut, auth } = authOptions
