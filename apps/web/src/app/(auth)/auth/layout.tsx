export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="dark:bg-background h-screen w-full overflow-hidden bg-zinc-100">
      <div className="grid h-screen w-full place-items-center">{children}</div>
    </div>
  )
}
