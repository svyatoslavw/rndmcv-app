import { SiteProvider } from "./site-provider"
import { getUserSession } from "@/shared/db/actions"

export default async function SiteLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getUserSession()
  return <SiteProvider session={session}>{children}</SiteProvider>
}
