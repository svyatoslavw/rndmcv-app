import { LayoutTemplate, Star, TrendingUp } from "lucide-react"

const stats = [
  {
    value: "87%",
    label: "Interview Success Rate",
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    value: "4.8★",
    label: "User Satisfaction",
    icon: <Star className="h-6 w-6" />
  },
  {
    value: "50+",
    label: "Industry Templates",
    icon: <LayoutTemplate className="h-6 w-6" />
  }
]

const WhyChooseUs = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl">
        Why Professionals Choose Us
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
