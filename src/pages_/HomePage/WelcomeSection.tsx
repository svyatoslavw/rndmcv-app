import Image from "next/image"
import Link from "next/link"

import { PUBLIC_URL } from "@/shared/config"
import { Button } from "@/shared/ui"

const WelcomeSection = () => {
  return (
    <section className="mx-auto flex w-full flex-col items-center pt-6">
      <h4 className="text-lg font-semibold">Welcome to your CV Builder</h4>
      <h1 className="mt-10 px-4 text-center text-6xl font-extrabold sm:w-full lg:max-w-[60%]">
        Create Your Perfect{" "}
        <span className="bg-gradient-to-tr from-primary via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
          Resume
        </span>{" "}
        in Minutes
      </h1>
      <p className="mt-6 max-w-xl text-center">
        Our resume builder helps you craft a professional resume that stands out. Get hired faster
        with Resume Builder.
      </p>
      <div className="mt-12 flex w-full flex-wrap justify-center gap-2">
        <Button className="relative z-10">
          <Link className="w-full" href={PUBLIC_URL.create()}>
            <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-b from-primary/60 to-primary opacity-75 blur" />
            Get Started
          </Link>
        </Button>
        <Button variant={"outline"}>
          <Link className="w-full" href="#learnmore">
            Learn more
          </Link>
        </Button>
      </div>
      <div className="relative mt-16 w-full rounded-2xl shadow-md">
        <Image
          alt="resume-builder"
          className="rounded-2xl dark:hidden"
          height={1080}
          src="/images/app-1.webp"
          width={1920}
        />
        <Image
          alt="resume-builder"
          className="hidden rounded-2xl dark:block"
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
