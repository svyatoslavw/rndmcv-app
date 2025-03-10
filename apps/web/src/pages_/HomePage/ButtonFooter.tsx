import { PUBLIC_URLS } from "@/shared/config"
import { Logotype } from "@/shared/ui"
import { Button } from "@rndm/ui/components"
import { useTranslations } from "next-intl"
import Link from "next/link"

const ButtonFooter = () => {
  const t = useTranslations("HomePage.buttonFooter")
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Logotype />
      <h5 className="text-muted-foreground">{t("title")}</h5>

      <div className="flex gap-2">
        <Button>{t("button")}</Button>
        <Button variant="outline">
          <Link href={PUBLIC_URLS.ABOUT}>{t("about")}</Link>
        </Button>
      </div>
    </div>
  )
}

export { ButtonFooter }
