import { SiteProvider } from "./site-provider"

export default function SiteLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <SiteProvider>{children}</SiteProvider>
}
