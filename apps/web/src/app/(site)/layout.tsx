import { auth } from "@/auth"
import { getUserLocale } from "@/shared/config/locale.config"
import { SiteProvider } from "./site-provider"

export default async function SiteLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  const locale = await getUserLocale()

  return (
    <SiteProvider currentLocale={locale} profile={session?.user}>
      {children}
    </SiteProvider>
  )
}
