import { auth } from "@/auth"
import { SiteProvider } from "./site-provider"

export default async function SiteLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return <SiteProvider profile={session?.user}>{children}</SiteProvider>
}
