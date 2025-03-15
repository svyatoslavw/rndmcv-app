import { APP_NAME, PUBLIC_URLS } from "@/shared/config"
import { Logotype } from "@/shared/ui"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

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
              {APP_NAME.SHORT} &copy; {new Date().getFullYear()}.
            </p>
            <p>All rights reserved</p>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="font-medium">Legal</h6>
            <Link className={linkClasses} href={PUBLIC_URLS.TERMS}>
              Terms of Service
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.PRIVACY}>
              Privacy Policy
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="font-medium">Product</h6>
            <Link className={linkClasses} href={"#"}>
              Start for free
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.RELEASES}>
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
            <Link className={linkClasses} href={PUBLIC_URLS.ABOUT}>
              About
            </Link>
            <Link className={linkClasses} href="#">
              FAQ
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.GITHUB}>
              Stars
              <ExternalLink className="size-3" />
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="font-medium">Support</h6>
            <Link className={linkClasses} href="#">
              Give feedback
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.ISSUES}>
              Report an issue
              <ExternalLink className="size-3" />
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.COFFEE}>
              Buy Coffee
              <ExternalLink className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
