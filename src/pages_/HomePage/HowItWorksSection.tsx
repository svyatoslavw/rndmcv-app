import { FileTextIcon, PaintbrushIcon, Share2Icon, SparklesIcon } from "lucide-react"

const HowItWorksSection = () => {
  return (
    <section className="w-full bg-zinc-200/50 py-12 dark:bg-secondary/30 md:py-20 lg:py-24">
      <div className="container px-6 md:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          How It Works
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <FileTextIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">1. Input Your Information</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your personal details, work experience, education, and skills into our
              user-friendly interface.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <PaintbrushIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">2. Customize your resume</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Choose from a variety of styles, fonts, sizes, and layouts to make your document truly
              unique.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <SparklesIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">3. AI Optimization</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Our AI analyzes your input and the job description to suggest improvements and
              highlight key strengths.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Share2Icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">4. Finalize and Share</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Review your optimized resume, make any final adjustments, and share it with potential
              employers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { HowItWorksSection }
