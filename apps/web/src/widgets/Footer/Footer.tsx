import { CoffeeIcon, GithubIcon } from "@rndm/ui/icons"

import { APP_NAME, PUBLIC_URLS } from "@/shared/config"
import { Logotype } from "@/shared/ui"
import { getYear } from "date-fns"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

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
  const linkClasses =
    "flex items-center gap-1 border-foreground/20 hover:border-foreground w-fit border-b"
  return (
    <footer className="bg-secondary mt-10 w-full py-6 text-xs">
      <div className="mx-auto w-full px-4 lg:max-w-6xl lg:px-0">
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-2">
            <Logotype size="sm" />
            <p>
              {APP_NAME.SHORT} &copy; {getYear(new Date())}.
            </p>
            <p>All rights reserved</p>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="font-medium">Legal</h6>
            <Link className={linkClasses} href={PUBLIC_URLS.GITHUB}>
              Terms of Service
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.GITHUB}>
              Privacy Policy
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="font-medium">Product</h6>
            <Link className={linkClasses} href={PUBLIC_URLS.GITHUB}>
              Start for free
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.GITHUB}>
              Releases
              <ExternalLink className="size-3" />
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.GITHUB}>
              Github
              <ExternalLink className="size-3" />
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="font-medium">Resources</h6>
            <Link className={linkClasses} href={PUBLIC_URLS.GITHUB}>
              About
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.GITHUB}>
              FAQ
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.GITHUB}>
              Stars
              <ExternalLink className="size-3" />
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="font-medium">Support</h6>
            <Link className={linkClasses} href={PUBLIC_URLS.GITHUB}>
              Buy Coffee
              <ExternalLink className="size-3" />
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.GITHUB}>
              Give feedback
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.GITHUB}>
              Report an issue
              <ExternalLink className="size-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center gap-2">
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
      </div> */}
    </footer>
  )
}

export { Footer }
