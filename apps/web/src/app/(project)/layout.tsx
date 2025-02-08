import { AboutProvider } from "./about-provider"

export default function AboutLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AboutProvider>{children}</AboutProvider>
}
