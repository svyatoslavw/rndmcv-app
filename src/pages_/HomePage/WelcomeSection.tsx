import Link from "next/link"

import { RESUME_URL } from "@/shared/lib/config"
import { Button } from "@/shared/ui"

const WelcomeSection = () => {
  return (
    <section className="mx-auto flex w-full flex-col items-center">
      <h4 className="text-lg font-semibold">Welcome to your CV Builder</h4>
      <h1 className="mt-10 px-4 text-center text-5xl font-extrabold sm:w-full lg:max-w-3xl">
        Create Your Perfect{" "}
        <span className="bg-gradient-to-b from-primary/70 to-primary bg-clip-text text-transparent">
          Resume
        </span>{" "}
        in Minutes
      </h1>
      <p className="mt-6 max-w-xl text-center">
        Our resume builder helps you craft a professional resume that stands out. Get hired faster
        with Resume Builder.
      </p>
      <div className="mt-12 flex w-full flex-wrap justify-center gap-2">
        <Button>
          <Link className="w-full" href={RESUME_URL.create()}>
            Get Started
          </Link>
        </Button>
        <Button variant={"outline"}>
          <Link className="w-full" href="#learnmore">
            Learn more
          </Link>
        </Button>
      </div>
    </section>
  )
}

export { WelcomeSection }
