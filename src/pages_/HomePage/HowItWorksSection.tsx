"use client"

import { animated, useInView, useSpring } from "@react-spring/web"
import {
  FileTextIcon,
  LightbulbIcon,
  LucideIcon,
  PaintbrushIcon,
  Share2Icon,
  TextSelectIcon
} from "lucide-react"

import { cn } from "@/shared/lib/utils"

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

const InformationItem = ({
  item,
  array,
  index
}: {
  item: IInformation
  array: IInformation[]
  index: number
}) => {
  const [ref, inView] = useInView({
    once: false
  })

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(20px)",
    delay: index * 100,
    config: { tension: 200, friction: 20 }
  })
  return (
    <animated.div
      ref={ref}
      style={props}
      className={cn("flex items-start justify-start gap-4 rounded-xl border-2 bg-secondary p-4", {
        ["col-span-full mx-auto"]:
          item.title === array[array.length - 1].title && array.length % 2 === 1
      })}
    >
      <div className="rounded-full bg-primary/10 p-4">
        <item.Icon className="h-8 w-8 text-primary" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">
          {index + 1}. {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {item.description}
        </p>
      </div>
    </animated.div>
  )
}

const HowItWorksSection = () => {
  return (
    <section className="w-full bg-white py-12 dark:bg-black md:py-20 lg:py-24">
      <div className="container px-6 md:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          How It Works
        </h2>
        <div className="mx-auto grid w-full max-w-[60%] grid-cols-1 gap-8 md:grid-cols-2">
          {information.map((item, index, array) => (
            <InformationItem key={item.title} array={array} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { HowItWorksSection }
