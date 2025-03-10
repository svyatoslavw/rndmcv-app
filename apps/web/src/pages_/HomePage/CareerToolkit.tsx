import { Card, CardContent, CardHeader } from "@rndm/ui/components"
import {
  BarChart,
  BookCheck,
  Briefcase,
  ChartNoAxesCombined,
  Eye,
  FileText,
  Images
} from "lucide-react"
import { useTranslations } from "next-intl"

const CareerToolkit = () => {
  const t = useTranslations("HomePage.careerToolkit")

  const learningResources = [
    { key: "atsGuide", icon: FileText },
    { key: "templates", icon: Images },
    { key: "salaryGuide", icon: BookCheck }
  ] as const

  const analyticsMetrics = [
    { key: "viewsCount", icon: Eye },
    { key: "skillAnalysis", icon: ChartNoAxesCombined },
    { key: "topIndustries", icon: Briefcase }
  ] as const

  return (
    <section className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Learning Resources */}
        <Card className="border-primary/20">
          <CardHeader className="flex flex-row items-center gap-4 space-y-0">
            <FileText className="text-primary h-8 w-8" />
            <div>
              <h3 className="text-lg font-bold">{t("learningResources.title")}</h3>
              <p className="text-muted-foreground text-sm">{t("learningResources.description")}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {learningResources.map(({ key, icon: Icon }, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-2">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="font-medium">{t(`learningResources.items.${key}`)}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Analytics Dashboard */}
        <Card className="border-primary/20">
          <CardHeader className="flex flex-row items-center gap-4 space-y-0">
            <BarChart className="text-primary h-8 w-8" />
            <div>
              <h3 className="text-lg font-bold">{t("analyticsDashboard.title")}</h3>
              <p className="text-muted-foreground text-sm">{t("analyticsDashboard.description")}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {analyticsMetrics.map(({ key, icon: Icon }, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-2">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="font-medium">{t(`analyticsDashboard.items.${key}`)}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export { CareerToolkit }
