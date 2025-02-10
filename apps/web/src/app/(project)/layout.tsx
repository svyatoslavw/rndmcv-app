import { auth } from "@/auth"
import { ProjectProvider } from "./project-provider"

export default async function AboutLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return <ProjectProvider profile={session?.user}>{children}</ProjectProvider>
}
