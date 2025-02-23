import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"

import { prisma } from "@rndm/database"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Spotify from "next-auth/providers/spotify"

const authOptions = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
      allowDangerousEmailAccountLinking: true
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
      allowDangerousEmailAccountLinking: true,
      profile: (profile) => {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: "USER"
        }
      }
    }),
    Spotify
  ],
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

        if (!existingUser) return false

        if (existingUser.role !== "ADMIN") return false

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
    signIn: "/",
    error: "/error"
  }
})

export const { handlers, auth } = authOptions
