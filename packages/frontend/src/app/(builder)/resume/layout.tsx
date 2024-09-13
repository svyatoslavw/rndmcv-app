import { ResumeProvider } from "./resume-provider"

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <ResumeProvider>{children}</ResumeProvider>
}
