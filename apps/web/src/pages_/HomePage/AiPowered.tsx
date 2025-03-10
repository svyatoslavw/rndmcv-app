import { PUBLIC_URLS } from "@/shared/config"
import { Badge, Button } from "@rndm/ui/components"
import { Sparkles } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

const AiPowered = () => {
  const t = useTranslations("HomePage.aiPowered")

  return (
    <section className="space-y-6">
      <div className="border-primary/20 bg-primary/5 relative overflow-hidden rounded-xl border p-8">
        <div className="absolute right-4 top-4">
          <Badge variant="secondary" className="bg-primary/10">
            {t("badge")}
          </Badge>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{t("title")}</h3>
            <p className="text-muted-foreground">{t("description")}</p>
            <Link href={PUBLIC_URLS.BUILDER}>
              <Button variant="outline">
                {t("button")}
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="bg-muted/50 flex flex-col justify-center rounded-lg p-4">
            <div className="text-muted-foreground space-y-2 text-sm">
              <p className="line-through">{t("example.before")}</p>
              <p className="text-primary mt-2">{t("example.after")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { AiPowered }
