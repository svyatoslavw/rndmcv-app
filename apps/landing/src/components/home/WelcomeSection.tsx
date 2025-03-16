import { Button, InfoMessage } from "@rndm/ui/components"
import Image from "next/image"
import Link from "next/link"

import { BookOpen, FilePen } from "lucide-react"

const WelcomeSection = () => {
  return (
    <section className="relative flex w-full flex-col items-center overflow-clip border-x bg-[radial-gradient(var(--background-width)_100%_at_50%_0%,_#FFF_6.32%,_#e0f1ff_29.28%,_#e7f5fd_68.68%,_#FFF_100%)] pt-32 [--background-width:308.4%] lg:[--background-width:198.96%]">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-6 lg:px-0">
          <h4 className="font-semibold">Welcome to CV Builder</h4>
          <h1 className="px-4 text-center text-3xl font-extrabold tracking-[-0.03em] sm:w-full md:text-6xl lg:max-w-[60%]">
            Create Your Perfect{" "}
            <span className="from-primary bg-gradient-to-tr to-violet-600 bg-clip-text text-transparent">
              Resume
            </span>{" "}
            in Minutes
          </h1>
          <p className="max-w-xl text-center text-sm">
            Always carry your resume with you so you can apply for job openings as one of the first
            candidates, even when you're out on the street.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex w-full flex-wrap justify-center gap-2">
            <Link href="#">
              <Button>
                <FilePen className="mr-2 size-4" />
                {/* <div className="from-primary/60 to-primary absolute -inset-1 -z-10 rounded-xl bg-gradient-to-b opacity-75 blur" /> */}
                Create resume
              </Button>
            </Link>
            <Link href="#learnmore">
              <Button variant={"outline"}>
                <BookOpen className="mr-2 size-4" />
                Learn more
              </Button>
            </Link>
          </div>
          <InfoMessage text="Available for all devices" />
        </div>
      </div>
      <div className="relative mx-auto mt-16 w-full max-w-5xl overflow-hidden rounded-3xl px-4 shadow-md lg:px-0 dark:shadow-white/60">
        <Image alt="resume-builder" height={1080} src="/images/screen.png" width={1920} />
        <div className="absolute left-5 top-[5%] z-30 h-60 w-60 bg-gradient-to-bl from-violet-400 via-violet-500 to-violet-600 opacity-25 blur-2xl" />
      </div>
    </section>
  )
}

export { WelcomeSection }
