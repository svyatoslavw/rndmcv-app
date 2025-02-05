import { Button, InfoMessage } from "@rndm/ui/components"
import Image from "next/image"
import Link from "next/link"

import { PUBLIC_URLS } from "@/shared/config"
import { BookOpen, FilePen } from "lucide-react"

const WelcomeSection = () => {
  return (
    <section className="mx-auto flex w-full flex-col items-center">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <h4 className="font-semibold">Welcome to your CV Builder</h4>
          <h1 className="px-4 text-center text-6xl font-extrabold sm:w-full lg:max-w-[60%]">
            Create Your Perfect{" "}
            <span className="from-primary bg-gradient-to-tr via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
              Resume
            </span>{" "}
            in Minutes
          </h1>
          <p className="max-w-xl text-center text-sm">
            Our resume builder helps you craft a professional resume that stands out. Get hired
            faster with Resume Builder.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex w-full flex-wrap justify-center gap-2">
            <Link href={PUBLIC_URLS.BUILDER}>
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
      <div className="relative mt-16 w-full rounded-2xl shadow-md">
        <Image
          alt="resume-builder"
          className="rounded-lg dark:hidden"
          height={1080}
          src="/images/app-1.webp"
          width={1920}
        />
        <Image
          alt="resume-builder"
          className="hidden rounded-lg dark:block"
          height={1080}
          src="/images/app-1-dark.webp"
          width={1920}
        />
        <div className="absolute left-[10%] top-[5%] z-30 h-52 w-52 bg-gradient-to-bl from-violet-400 via-violet-500 to-violet-600 opacity-20 blur-2xl" />
      </div>
    </section>
  )
}

export { WelcomeSection }
