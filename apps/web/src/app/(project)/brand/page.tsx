import { PageWrapper } from "@/shared/ui"
import { LogomarkVariant, LogoVariant } from "./LogoVariant"

const logoVariants = [{ src: "/images/opengraph.png", color: "Brand Purple #6D28D9" }]

const logomarkVariants = [{ src: "/images/logo.jpeg" }]

export default function BrandPage() {
  return (
    <PageWrapper>
      <section className="flex flex-col gap-2">
        <h4 className="text-primary text-2xl font-bold">Project Brand</h4>
        <p>The resume builder is called "RNDMCV". Name must always be capitalized.</p>
      </section>
      <section className="flex flex-col gap-4">
        <h4 className="text-primary text-xl font-medium">Logo</h4>
        <p>
          The RNDMCV logo is available in three approved color variants. Never alter colors,
          proportions, or apply effects like shadows/gradients unless specified.
        </p>
        <section className="flex justify-between gap-2">
          {logoVariants.map((variant, index) => (
            <LogoVariant key={variant.src} {...variant} />
          ))}
        </section>
      </section>
      <section className="flex flex-col gap-4">
        <h4 className="text-primary text-xl font-medium">Logomark</h4>
        <p>
          The logomark is a simplified version of the logo. It is available in three approved color
          variants. Never alter colors, proportions, or apply effects like shadows/gradients unless
          specified.
        </p>
        <section className="flex justify-between gap-2">
          {logomarkVariants.map((variant, index) => (
            <LogomarkVariant key={variant.src} {...variant} />
          ))}
        </section>
      </section>
    </PageWrapper>
  )
}
