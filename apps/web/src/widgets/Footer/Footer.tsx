import { APP_NAME, PUBLIC_URLS } from "@/shared/config"
import { Logotype } from "@/shared/ui"
import { CoffeeIcon, GithubIcon } from "@rndm/ui/icons"
import { getYear } from "date-fns"
import { ExternalLink } from "lucide-react"
import { useTranslations } from "next-intl"
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
  const t = useTranslations("footer")
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
            <p>{t("rights")}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="font-medium">Legal</h6>
            <Link className={linkClasses} href={PUBLIC_URLS.TERMS}>
              {t("legal.terms")}
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.PRIVACY}>
              {t("legal.privacy")}
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="font-medium">Product</h6>
            <Link className={linkClasses} href={PUBLIC_URLS.BUILDER}>
              {t("product.startFree")}
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.RELEASES}>
              {t("product.releases")}
              <ExternalLink className="size-3" />
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.GITHUB}>
              {t("product.github")}
              <ExternalLink className="size-3" />
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="font-medium">Resources</h6>
            <Link className={linkClasses} href={PUBLIC_URLS.ABOUT}>
              {t("resources.about")}
            </Link>
            <Link className={linkClasses} href="#">
              {t("resources.faq")}
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.GITHUB}>
              {t("resources.stars")}
              <ExternalLink className="size-3" />
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="font-medium">Support</h6>
            <Link className={linkClasses} href="#">
              {t("support.feedback")}
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.ISSUES}>
              {t("support.reportIssue")}
              <ExternalLink className="size-3" />
            </Link>
            <Link className={linkClasses} href={PUBLIC_URLS.COFFEE}>
              {t("support.buyCoffee")}
              <ExternalLink className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
