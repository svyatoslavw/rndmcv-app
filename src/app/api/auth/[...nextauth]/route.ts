import { handlers } from "@/auth"

export const { GET, POST } = handlers
export const runtime = process.env.NODE_ENV === "production" ? "edge" : "nodejs"
