import { CircleAlertIcon } from "lucide-react"
import Link from "next/link"

const ResumeAlert = () => {
  return (
    <div className="resumeAlert flex items-center gap-4 rounded-2xl bg-primary p-4 text-white">
      <CircleAlertIcon size={48} />
      <span className="text-sm font-semibold">
        Before you start creating your resume, please sign in to your account to remove all
        restrictions on the platform.{" "}
        <Link href="/auth" className="underline underline-offset-2 hover:text-secondary">
          Sign in!
        </Link>
      </span>
    </div>
  )
}

export { ResumeAlert }
