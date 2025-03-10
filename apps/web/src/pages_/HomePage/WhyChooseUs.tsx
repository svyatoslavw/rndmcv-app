import { LayoutTemplate, Star, TrendingUp } from "lucide-react"
import { useTranslations } from "next-intl"

const WhyChooseUs = () => {
  const t = useTranslations("HomePage.whyChooseUs")

  const stats = [
    {
      value: "87%",
      label: t("stats.interviewSuccess.label"),
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      value: "4.8★",
      label: t("stats.userSatisfaction.label"),
      icon: <Star className="h-6 w-6" />
    },
    {
      value: "50+",
      label: t("stats.industryTemplates.label"),
      icon: <LayoutTemplate className="h-6 w-6" />
    }
  ]

  return (
    <section className="space-y-6">
      <h2 className="text-center text-2xl font-bold capitalize tracking-tighter sm:text-3xl">
        {t("title")}
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="hover:border-primary/30 dark:border-input relative overflow-hidden rounded-xl border p-6 transition-all hover:shadow-sm"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-primary/10 text-primary rounded-lg p-2">{stat.icon}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
            </div>
            <p className="text-muted-foreground text-sm">{stat.label}</p>
            <div className="absolute -bottom-6 -right-6 text-6xl opacity-5">{stat.value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { WhyChooseUs }
