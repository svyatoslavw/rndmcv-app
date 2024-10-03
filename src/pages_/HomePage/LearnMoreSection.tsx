import { PaletteIcon, Share2Icon, ZapIcon } from "lucide-react"

const LearnMoreSection = () => {
  return (
    <section id="learnmore" className="mx-auto py-12 md:py-24 lg:py-28">
      <div className="container px-6 md:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
          Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center rounded-xl bg-white p-3 text-center dark:bg-secondary/75">
            <ZapIcon className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-lg font-bold">AI-Powered</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Our AI analyzes job descriptions to tailor your resume for maximum impact.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-white p-3 text-center dark:bg-secondary/75">
            <PaletteIcon className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-lg font-bold">Customizable Templates</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Choose from a variety of professional templates to match your style and industry.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-white p-3 text-center dark:bg-secondary/75">
            <Share2Icon className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-lg font-bold">Easy Sharing</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Share your resume directly with employers or download in multiple formats.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { LearnMoreSection }
