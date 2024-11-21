import Image from "next/image"

interface IInformation {
  title: string
  image: [string, string]
  description: string
  obj: Record<string, any>
}

const information: IInformation[] = [
  {
    title: "Input Your Information",
    image: ["/images/img-1.webp", "/images/img-1-dark.webp"],
    obj: { name: "Sviatoslav Stepanov", job: "Software Engineer" },
    description:
      "Enter your personal details, work experience, education, and skills using an easy-to-use interface."
  },
  {
    title: "Customize your resume",
    image: ["/images/img-2.webp", "/images/img-2-dark.webp"],
    obj: { accentColor: "red", backgroundColor: "blue", variant: "border" },
    description:
      "Customize your resume with different styles, fonts, and layouts to match your personality."
  },
  {
    title: "Edit with RNDM Intelligence",
    image: ["/images/img-3.webp", "/images/img-3-dark.webp"],
    obj: {},
    description: "With RNDM Intelligence, you can easily improve your resume."
  },
  {
    title: "Finalize and Share",
    image: ["/images/img-1.webp", "/images/img-1-dark.webp"],
    obj: {},
    description:
      "Review your resume, make final adjustments, and share it with employers or download it."
  }
]

const StepItem = ({ item, index }: { item: IInformation; index: number }) => (
  <div className="flex gap-3 lg:gap-10">
    <div className="flex flex-col items-center">
      <div className="flex aspect-square size-8 items-center justify-center rounded-full bg-foreground text-background lg:size-12">
        {index + 1}
      </div>
      <div className="h-full w-px bg-gradient-to-b from-black via-transparent to-black dark:from-white dark:via-transparent dark:to-white" />
    </div>
    <div className="relative flex flex-col gap-2 pb-14">
      <h5 className="text-xl font-bold">{item.title}</h5>
      <p className="mb-3 text-sm">{item.description}</p>
      <div className="relative">
        {!!Object.values(item.obj).length && (
          <pre className="absolute -top-2 right-2 whitespace-pre-wrap rounded-lg border border-input bg-background px-0.5 text-[8px] font-semibold sm:text-xs lg:-right-6 lg:top-10 lg:px-2 lg:text-sm">
            <code>{JSON.stringify(item.obj, null, 2)}</code>
          </pre>
        )}
        <Image
          alt={item.title}
          loading="lazy"
          className="block rounded-2xl dark:hidden"
          draggable={false}
          height={486}
          src={item.image[0]}
          width={864}
        />
        <Image
          alt={item.title}
          loading="lazy"
          className="hidden rounded-2xl dark:block"
          draggable={false}
          height={486}
          src={item.image[1]}
          width={864}
        />
      </div>
    </div>
  </div>
)

const StepsSection = () => (
  <section className="flex w-full flex-col items-center py-12 md:py-20 lg:py-24">
    {information.map((item, index) => (
      <StepItem key={item.title} index={index} item={item} />
    ))}
  </section>
)

export { StepsSection }
