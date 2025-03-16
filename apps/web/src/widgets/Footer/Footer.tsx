import { CoffeeIcon, GithubIcon } from "@rndm/ui/icons"

import { APP_NAME, PUBLIC_URLS } from "@/shared/config"
import { ArrowRight } from "lucide-react"

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
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ]

  return (
    <footer className="border-border/30 mt-auto w-full border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-muted-foreground text-xs">
              &copy; {currentYear} {APP_NAME.SHORT}. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-xs transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-xs transition-colors duration-200"
            >
              GitHub
              <ArrowRight className="h-3 w-3" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
