import { SiteProvider } from "./site-provider"

export default async function SiteLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <SiteProvider>{children}</SiteProvider>
}
