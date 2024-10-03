import { Metadata } from "next"

import { SignInPage } from "@/pages_"

export const metadata: Metadata = {
  title: "Authentication"
}

export default function Auth() {
  return <SignInPage />
}
