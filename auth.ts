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
    async signIn({ user, account }) {
      try {
        if (!user.email) {
          return false
        }

        const existingUser = await prisma.user.findUnique({
          where: { email: user.email }
        })

        if (!existingUser) {
          // Создание пользователя и подписки при первой регистрации
          const newUser = await prisma.user.create({
            data: {
              email: user.email,
              name: user.name || "User #" + user.id,
              image:
                user.image ||
                "https://rndmcv-uploader.s3.eu-north-1.amazonaws.com/default_image.jpg",
              role: "USER",
              provider: account?.provider,
              providerAccountId: account?.providerAccountId,
              // Пароль можно оставить null для пользователей OAuth
              password: null
            }
          })

          // Создание подписки и привязка к новому пользователю
          await prisma.subscription.create({
            data: {
              userId: newUser.id, // Привязка к пользователю по ID
              type: "BASIC", // Задайте тип подписки
              price: 0, // Можно задать цену подписки
              expiresAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) // Пример окончания подписки через год
            }
          })

          return true
        }

        // Если пользователь уже существует, просто выполняем вход
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

// callbacks: {
//   async signIn({ user, account }) {
//     try {
//       if (account?.provider === "credentials") {
//         return true
//       }

//       if (!user.email || !user.id) {
//         return false
//       }

//       const findUser = await prisma.user.findUnique({
//         where: { email: user.email }
//       })

//       if (findUser) {
//         await prisma.user.update({
//           where: {
//             id: findUser.id
//           },
//           data: {
//             provider: account?.provider,
//             providerId: account?.providerAccountId
//           }
//         })

//         return true
//       }

//       await prisma.user.create({
//         data: {
//           loggedAt: new Date(),
//           email: user.email,
//           login: user.name || "User #" + user.id,
//           password: await hash(user.id, 10),
//           provider: account?.provider,
//           providerId: account?.providerAccountId,
//           role: "USER"
//         }
//       })

//       return true
//     } catch (error) {
//       console.error("Error [SIGNIN]", error)
//       return false
//     }
//   },
//   async jwt({ token }) {
//     if (!token.email) {
//       return token
//     }

//     const findUser = await prisma.user.findUnique({
//       where: {
//         email: token.email
//       }
//     })

//     if (findUser) {
//       token.id = findUser.id
//       token.email = findUser.email
//       token.login = findUser.login
//       token.role = findUser.role
//     }

//     return token
//   },
//   session({ session, token }) {
//     if (session?.user) {
//       session.user.id = token.id as string
//       session.user.role = token.role as $Enums.UserRole
//     }

//     return session
//   }
// },
