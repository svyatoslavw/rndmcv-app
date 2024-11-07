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
      "Effortlessly enter your personal details, including your contact information, work experience, educational background, and core skills into our user-friendly interface. Our intuitive design ensures that adding and organizing your details is smooth and efficient, guiding you every step of the way."
  },
  {
    title: "Customize your resume",
    Icon: TextSelectIcon,
    description:
      "Stand out by customizing every aspect of your resume! Choose from a wide variety of professionally designed styles, fonts, and layouts to create a document that reflects your unique personality and career aspirations. Whether you're aiming for a creative flair or a traditional look, our customization options have you covered."
  },
  {
    title: "Refine Your Content",
    Icon: PaintbrushIcon,
    description:
      "Fine-tune your resume content with our advanced editing tools. Rearrange sections, adjust bullet points, and emphasize your most relevant achievements to ensure your strengths are clear and captivating. Highlight specific experiences and skills to make your resume resonate with potential employers."
  },
  {
    title: "Finalize and Share",
    Icon: Share2Icon,
    description:
      "Review your polished resume in its final form, ensuring it aligns with your goals. Make any last adjustments for a professional finish. When you're ready, effortlessly share your optimized resume directly with potential employers or download it in multiple formats for your convenience."
  },
  {
    title: "Get Smart Suggestions",
    Icon: LightbulbIcon,
    description:
      "Receive personalized tips and insights based on your input to make your resume even stronger. Our intelligent system analyzes your content and suggests areas for improvement, such as skills to highlight, keywords to include, and formatting adjustments to enhance readability and impact. Perfect for those looking to optimize their resume for applicant tracking systems (ATS) or capture a hiring manager's attention!"
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
