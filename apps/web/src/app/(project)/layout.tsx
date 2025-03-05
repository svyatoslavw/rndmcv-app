import { auth } from "@/auth"
import { getUserLocale } from "@/shared/config/locale.config"
import { ProjectProvider } from "./project-provider"

export default async function AboutLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  const locale = await getUserLocale()

  return (
    <ProjectProvider profile={session?.user} currentLocale={locale}>
      {children}
    </ProjectProvider>
  )
}
