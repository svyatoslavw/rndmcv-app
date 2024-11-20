import { getYear } from "date-fns"
import Link from "next/link"

import { APP_NAME, PUBLIC_URLS } from "@/shared/config"
import { CoffeeIcon, GithubIcon } from "@/shared/ui"

const socialLinks = [
  {
    url: PUBLIC_URLS.GITHUB,
    icon: GithubIcon
  },
  {
    url: PUBLIC_URLS.COFFEE,
    icon: CoffeeIcon
  }
]

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-2 py-2 text-xs font-medium">
      <div className="flex justify-center gap-2">
        {socialLinks.map((link) => {
          return (
            <Link
              key={link.url}
              className="cursor-pointer transition-opacity md:hover:opacity-50"
              href={link.url}
              target="_blank"
            >
              <link.icon className="size-4" fill="#000" />
            </Link>
          )
        })}
      </div>
      <div>
        {APP_NAME.SHORT} &copy; {getYear(new Date())}. All rights reserved | design by{" "}
        <Link href="https://github.com/svyatoslavw" rel="noopener noreferrer" target="_blank">
          svyatoslavw
        </Link>
        .
      </div>
    </footer>
  )
}

export { Footer }
