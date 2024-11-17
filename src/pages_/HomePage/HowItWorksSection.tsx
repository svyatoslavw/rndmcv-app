import {
  FileTextIcon,
  LightbulbIcon,
  LucideIcon,
  PaintbrushIcon,
  Share2Icon,
  TextSelectIcon
} from "lucide-react"

interface IInformation {
  title: string
  Icon: LucideIcon
  description: string
}

const information: IInformation[] = [
  {
    title: "Input Your Information",
    Icon: FileTextIcon,
    description:
      "Enter your personal details, work experience, education, and skills using an easy-to-use interface."
  },
  {
    title: "Customize your resume",
    Icon: TextSelectIcon,
    description:
      "Customize your resume with different styles, fonts, and layouts to match your personality."
  },
  {
    title: "Refine Your Content",
    Icon: PaintbrushIcon,
    description: "Edit your resume content, highlight key achievements, and improve the structure."
  },
  {
    title: "Finalize and Share",
    Icon: Share2Icon,
    description:
      "Review your resume, make final adjustments, and share it with employers or download it."
  },
  {
    title: "Get Smart Suggestions",
    Icon: LightbulbIcon,
    description:
      "Receive smart suggestions to improve your resume and increase your chances of success."
  }
]

const InformationItem = ({ item, index }: { item: IInformation; index: number }) => (
  <div className="flex items-start justify-start gap-4 rounded-xl border-2 border-primary/40 p-4">
    <div className="rounded-full bg-primary/10 p-4">
      <item.Icon className="h-8 w-8 text-primary" />
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold">
        {index + 1}. {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{item.description}</p>
    </div>
  </div>
)

const HowItWorksSection = () => (
  <section className="w-full py-12 md:py-20 lg:py-24">
    <div className="container px-6 md:px-8">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        How It Works
      </h2>
      <div className="mx-auto flex w-full max-w-[60%] flex-col gap-8">
        {information.map((item, index) => (
          <InformationItem key={item.title} index={index} item={item} />
        ))}
      </div>
    </div>
  </section>
)

export { HowItWorksSection }
