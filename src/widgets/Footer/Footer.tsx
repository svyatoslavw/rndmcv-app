import { getYear } from "date-fns"
import { LucideIcon } from "lucide-react"
import Link from "next/link"

import { APP_NAME } from "@/shared/lib/config"
import { CoffeeIcon, GithubIcon } from "@/shared/ui"

const socialLinks: { url: string; icon: LucideIcon }[] = [
  {
    url: "https://github.com/svyatoslavw/cv-editor",
    icon: GithubIcon
  },
  {
    url: "https://donatello.to/svyatoslavw",
    icon: CoffeeIcon
  }
]

const Footer = () => {
  return (
    <footer className="mb-2 mt-32 flex w-full flex-col items-center justify-center gap-2 text-xs font-medium">
      <div className="flex justify-center gap-2">
        {socialLinks.map((link) => {
          return (
            <Link
              key={link.url}
              href={link.url}
              target="_blank"
              className="cursor-pointer transition-opacity md:hover:opacity-50"
            >
              <link.icon className="size-4" fill="#000" />
            </Link>
          )
        })}
      </div>
      <div>
        {APP_NAME.SHORT} &copy; {getYear(new Date())}. All rights reserved | design by{" "}
        <Link href="https://github.com/svyatoslavw" target="_blank" rel="noopener noreferrer">
          svyatoslavw
        </Link>
        .
      </div>
    </footer>
  )
}

export { Footer }
