import { ResumeProvider } from "./resume-provider"

export default function ResumeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <ResumeProvider>{children}</ResumeProvider>
}
