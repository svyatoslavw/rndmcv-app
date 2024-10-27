"use client"

import { animated, useInView, useSpring } from "@react-spring/web"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"

import { RESUME_URL } from "@/shared/lib/config"
import { Button } from "@/shared/ui"

const CustomIconPicker = dynamic(() => import("../../shared/ui/icon-picker"), {
  ssr: true,
  loading: () => <div>Loading...</div>
})

const WelcomeSection = () => {
  const [ref, inView] = useInView({ once: false, amount: 0.5 })

  const props = useSpring({
    transform: inView
      ? "perspective(1000px) rotateX(0deg) scale(1.01)"
      : "perspective(1000px) rotateX(15deg) scale(0.94)",
    config: { tension: 500, friction: 150 }
  })

  return (
    <section className="mx-auto flex w-full flex-col items-center">
      <CustomIconPicker />
      <h4 className="text-lg font-semibold">Welcome to your CV Builder</h4>
      <h1 className="mt-10 px-4 text-center text-6xl font-extrabold sm:w-full lg:max-w-[60%]">
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
      <animated.div
        className="mt-16 w-full max-w-[70%] rounded-lg shadow-lg shadow-purple-500/40 dark:shadow-cyan-500/40"
        style={{
          position: "relative",
          overflow: "hidden",
          ...props
        }}
        ref={ref}
      >
        <Image
          alt="resume-builder"
          src="/images/app-1.png"
          className="dark:hidden"
          width={1920}
          height={1080}
        />
        <Image
          alt="resume-builder"
          src="/images/app-1-dark.png"
          className="hidden dark:block"
          width={1920}
          height={1080}
        />
        <div className="absolute left-[10%] top-[5%] z-30 h-52 w-52 bg-gradient-to-bl from-primary via-violet-500 to-blue-500 opacity-20 blur-2xl dark:from-primary dark:via-cyan-500 dark:to-blue-600" />
      </animated.div>
    </section>
  )
}

export { WelcomeSection }
