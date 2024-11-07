import { PaletteIcon, Share2Icon, TimerIcon } from "lucide-react"
import Image from "next/image"

const FeaturesSection = () => (
  <section className="mx-auto" id="learnmore">
    <div className="container px-6 md:px-8">
      <div className="mx-auto flex w-full max-w-[85%] items-center justify-between gap-5">
        <div className="flex w-full max-w-[30%] flex-col gap-5">
          <div>
            <h2 className="mb-10 text-2xl font-bold tracking-tighter sm:text-5xl">Features</h2>
            <div className="mb-2 flex items-center gap-2">
              <TimerIcon className="h-8 w-8 text-primary" />
              <h5 className="text-lg font-semibold">Quick & Efficient</h5>
            </div>
            <p className="text-sm">
              Create your resume quickly with streamlined tools that save you time.
            </p>
          </div>
          <div>
            <div className="mb-2 flex items-center gap-2">
              <PaletteIcon className="h-8 w-8 text-primary" />
              <h5 className="text-lg font-semibold">Customizable Templates</h5>
            </div>
            <p className="text-sm">
              Choose from a variety of professional templates to match your style and industry.
            </p>
          </div>
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Share2Icon className="h-8 w-8 text-primary" />
              <h5 className="text-lg font-semibold">Easy Sharing</h5>
            </div>
            <p className="text-sm">
              Share your resume directly with employers or download in multiple formats.
            </p>
          </div>
        </div>
        <div>
          <Image
            alt="resume-builder"
            className="h-[580px] w-[800px] rounded-lg object-cover shadow-lg shadow-violet-600/40 dark:hidden"
            height={1080}
            src="/images/app-2.png"
            width={1920}
          />
          <Image
            alt="resume-builder"
            className="hidden h-[580px] w-[800px] rounded-lg object-cover shadow-lg dark:block dark:shadow-violet-600/40"
            height={1080}
            src="/images/app-2-dark.png"
            width={1920}
          />
        </div>
      </div>
    </div>
  </section>
)

export { FeaturesSection }
