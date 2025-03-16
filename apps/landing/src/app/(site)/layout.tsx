export default function SiteLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="mx-auto max-w-5xl space-y-16 px-4 pt-32 lg:px-0">{children}</div>
}
