import { CircleAlertIcon } from "lucide-react"
import Link from "next/link"

const ResumeAlert = () => {
  return (
    <div className="resumeAlert flex items-center gap-4 border-l-4 border-primary bg-primary/10 p-4 text-primary">
      <CircleAlertIcon size={48} />
      <span className="text-sm font-semibold">
        Before you start creating your resume, please sign in to your account to remove all
        restrictions on the platform.{" "}
        <Link
          className="underline underline-offset-2 transition-all hover:text-primary/50"
          href="/auth"
        >
          Sign in!
        </Link>
      </span>
    </div>
  )
}

export { ResumeAlert }
