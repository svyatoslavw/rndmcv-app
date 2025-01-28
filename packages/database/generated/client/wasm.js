Object.defineProperty(exports, "__esModule", { value: true })

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime
} = require("./runtime/index-browser.js")

const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.12.0
 * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
 */
Prisma.prismaVersion = {
  client: "5.12.0",
  engine: "473ed3124229e22d881cb7addf559799debae1ab"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.validator = Public.validator

/**
 * Extensions
 */
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
})

exports.Prisma.UserScalarFieldEnum = {
  id: "id",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  email: "email",
  name: "name",
  image: "image",
  emailVerified: "emailVerified",
  password: "password",
  role: "role"
}

exports.Prisma.AccountScalarFieldEnum = {
  userId: "userId",
  type: "type",
  provider: "provider",
  providerAccountId: "providerAccountId",
  refresh_token: "refresh_token",
  access_token: "access_token",
  expires_at: "expires_at",
  token_type: "token_type",
  scope: "scope",
  id_token: "id_token",
  session_state: "session_state",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
}

exports.Prisma.ResumeScalarFieldEnum = {
  id: "id",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  general: "general",
  customization: "customization",
  userId: "userId",
  type: "type"
}

exports.Prisma.SubscriptionScalarFieldEnum = {
  id: "id",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  expiresAt: "expiresAt",
  customerId: "customerId",
  type: "type",
  price: "price",
  userId: "userId"
}

exports.Prisma.SessionScalarFieldEnum = {
  sessionToken: "sessionToken",
  userId: "userId",
  expires: "expires",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
}

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: "identifier",
  token: "token",
  expires: "expires"
}

exports.Prisma.SortOrder = {
  asc: "asc",
  desc: "desc"
}

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
}

exports.Prisma.QueryMode = {
  default: "default",
  insensitive: "insensitive"
}

exports.Prisma.NullsOrder = {
  first: "first",
  last: "last"
}

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
}
exports.UserRole = exports.$Enums.UserRole = {
  USER: "USER",
  MODERATOR: "MODERATOR",
  ADMIN: "ADMIN"
}

exports.EnumResumeVisibility = exports.$Enums.EnumResumeVisibility = {
  PUBLIC: "PUBLIC",
  PRIVATE: "PRIVATE"
}

exports.EnumSubscriptionType = exports.$Enums.EnumSubscriptionType = {
  BASIC: "BASIC",
  STANDART: "STANDART",
  PREMIUM: "PREMIUM"
}

exports.Prisma.ModelName = {
  User: "User",
  Account: "Account",
  Resume: "Resume",
  Subscription: "Subscription",
  Session: "Session",
  VerificationToken: "VerificationToken"
}

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`
        } else {
          message =
            "PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `" +
            runtime.prettyName +
            "`)."
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
