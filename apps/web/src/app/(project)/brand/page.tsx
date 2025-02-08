import { PageWrapper } from "@/shared/ui"
import { Button } from "@rndm/ui/components"
import Image from "next/image"

const LogoVariant = ({ src, color }: { src: string; color: string }) => (
  <div className="border-input flex w-full flex-col justify-center border">
    <Image src={src} alt="Logo" width={300} height={150} />
    <span className="text-muted-foreground py-1 text-center text-sm font-semibold">{color}</span>
    <Button variant="secondary" className="border-input flex w-full justify-center border-t">
      Download
    </Button>
  </div>
)

const LogomarkVariant = ({ src }: { src: string }) => (
  <div className="border-input flex w-full flex-col justify-center border">
    <Image src={src} alt="Logo" width={300} height={150} />
    <Button variant="secondary" className="border-input flex w-full justify-center border-t">
      Download
    </Button>
  </div>
)

const logoVariants = [
  { src: "/purple-og.svg", color: "Brand Purple #6D28D9" },
  { src: "/black-white-og.svg", color: "Pure Black #2A2A2A" },
  { src: "/white-black-og.svg", color: "Pure White #FFFFFF" }
]

const logomarkVariants = [
  { src: "/purple.svg" },
  { src: "/black-white.svg" },
  { src: "/white-black.svg" }
]

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
            <LogoVariant key={index} {...variant} />
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
            <LogomarkVariant key={index} {...variant} />
          ))}
        </section>
      </section>
    </PageWrapper>
  )
}
