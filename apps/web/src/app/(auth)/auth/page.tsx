import { SignInPage } from "@/pages_"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Authentication"
}

export default function Auth() {
  return <SignInPage />
}
