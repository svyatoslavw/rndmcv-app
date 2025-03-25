import { Briefcase, Edit3, Smile } from "lucide-react"

const features = [
  {
    title: "Save Time",
    description: "Set up your resume in just a few minutes with easy-to-use templates.",
    icon: <Briefcase className="h-6 w-6" />
  },
  {
    title: "User-Friendly Design",
    description: "Simple and intuitive interface to help you focus on your content.",
    icon: <Smile className="h-6 w-6" />
  },
  {
    title: "Customizable Templates",
    description: "Create your resume with flexible templates that suit any industry.",
    icon: <Edit3 className="h-6 w-6" />
  }
]

const WhyChooseUs = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-center text-2xl font-bold capitalize sm:text-3xl">
        Simple. Effective. Reliable
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature, i) => (
          <div
            key={i}
            className="hover:border-primary/30 dark:border-input relative overflow-hidden rounded-xl border p-6 transition-all hover:shadow-sm"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-primary/10 text-primary rounded-lg p-2">{feature.icon}</div>
            </div>
            <h5 className="text-lg font-semibold">{feature.title}</h5>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export { WhyChooseUs }
