import { Metadata } from "next"

import { AuthPage } from "@/pages_"

export const metadata: Metadata = {
  title: "Authentication"
}

export default function Auth() {
  return <AuthPage />
}
