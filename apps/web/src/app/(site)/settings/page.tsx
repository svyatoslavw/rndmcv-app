import { Metadata } from "next"

import { auth } from "@/auth"
import { SettingsPage } from "@/pages_"

export const metadata: Metadata = {
  title: "Settings"
}

export default async function Settings() {
  const session = await auth()
  return <SettingsPage profile={session?.user} />
}
