"use client"

import {
  ArrowRightIcon,
  AwardIcon,
  CheckCircleIcon,
  ClockIcon,
  FileTextIcon,
  PaletteIcon,
  Share2Icon,
  ZapIcon
} from "lucide-react"
import Link from "next/link"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectResumeSelectedId } from "@/entities/resume"
import { CreateResume } from "@/features"
import { RESUME_URL } from "@/shared/lib/config"
import { Button, Card, CardContent, CardHeader, CardTitle } from "@/shared/ui"
import { ResumeDocument } from "@/widgets"

const HomePage = () => {
  const dispatch = useAppDispatch()
  const resumes = useAppSelector((state) => state.resume.resumes)

  const onSelectResume = (id: string) => {
    dispatch(selectResumeSelectedId({ id }))
  }

  return (
    <main className="mx-auto">
      <section className="font-rubik mx-auto flex w-full flex-col items-center">
        <h4 className="text-lg font-semibold">Welcome to your CV Builder</h4>
        <h1 className="mt-10 px-4 text-center text-5xl font-extrabold sm:w-full lg:max-w-3xl">
          Create Your Perfect{" "}
          <span className="bg-gradient-to-b from-primary/70 to-primary bg-clip-text text-transparent">
            Resume
          </span>{" "}
          in Minutes
        </h1>
        <p className="mt-6 max-w-xl text-center">
          Our AI-powered resume builder helps you craft a professional resume that stands out. Get
          hired faster with ResumeBuilder.
        </p>
        <div className="mt-12 flex w-full flex-wrap justify-center gap-2">
          <Button size={"lg"}>
            <Link className="w-full" href="#resumes">
              Get Started
            </Link>
          </Button>
          <Button size={"lg"} variant={"outline"}>
            <Link className="w-full" href="#learnmore">
              Learn more
            </Link>
          </Button>
        </div>
      </section>
      <section id="learnmore" className="w-full py-12 md:py-24 lg:py-28">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
            Features
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl bg-white p-3 text-center">
              <ZapIcon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-bold">AI-Powered</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our AI analyzes job descriptions to tailor your resume for maximum impact.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-white p-3 text-center">
              <PaletteIcon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-bold">Customizable Templates</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Choose from a variety of professional templates to match your style and industry.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-white p-3 text-center">
              <Share2Icon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-bold">Easy Sharing</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Share your resume directly with employers or download in multiple formats.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-zinc-200 py-12 md:py-24 lg:py-28">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <FileTextIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">1. Input Your Information</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Enter your personal details, work experience, education, and skills into our
                user-friendly interface.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <ZapIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">2. AI Optimization</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our AI analyzes your input and the job description to suggest improvements and
                highlight key strengths.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Share2Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">3. Finalize and Share</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Review your optimized resume, make any final adjustments, and share it with
                potential employers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-28">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose{" "}
            <span className="bg-gradient-to-b from-primary/70 to-primary bg-clip-text font-extrabold text-transparent">
              RNDMCV
            </span>{" "}
            Builder?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CheckCircleIcon className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                Our users report a 40% increase in interview invitations after using ResumeBuilder
                to optimize their resumes.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <ClockIcon className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Time-Saving</CardTitle>
              </CardHeader>
              <CardContent>
                Create a professional, tailored resume in minutes, not hours. Our intuitive
                interface and AI assistance streamline the entire process.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <AwardIcon className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Industry-Specific Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                Our AI is trained on successful resumes from various industries, ensuring your
                resume meets the specific expectations of your target field.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <PaletteIcon className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Unlimited Customization</CardTitle>
              </CardHeader>
              <CardContent>
                Create multiple versions of your resume for different job applications, all stored
                securely in your account for easy access and updates.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="resumes" className="mx-auto mt-28 grid w-[1280px] place-content-center gap-28">
        <div className="flex flex-col gap-8">
          <div className="flex w-full justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold tracking-tighter sm:text-5xl">My Resumes</h2>
              <h5 className="text-neutral-600">
                Your first resume – 100% free, forever, all features, unlimited downloads, yes
                really.
              </h5>
            </div>
            <Button className="gap-1" variant={"link"}>
              View Templates
              <ArrowRightIcon size={16} />
            </Button>
          </div>

          <div className="mb-8 flex w-full flex-wrap gap-3">
            <CreateResume />
            {resumes.map((resume) => (
              <Link
                key={resume.id}
                href={RESUME_URL.content()}
                onClick={() => onSelectResume(resume.id)}
                className="h-[450px] w-[310px] cursor-pointer gap-2 overflow-hidden rounded-lg bg-white shadow transition-all hover:opacity-50"
              >
                <ResumeDocument
                  customization={resume.customization}
                  general={resume.general}
                  width={310}
                  height={450}
                  className="h-[450px]"
                  isCard
                />
              </Link>
            ))}

            {Array.from({ length: 3 - resumes.length }).map((_, index) => (
              <div
                key={index}
                className="h-[450px] w-[310px] cursor-pointer gap-2 rounded-lg bg-white shadow transition-all hover:opacity-50"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export { HomePage }
