import { PUBLIC_URLS } from "@/shared/config"
import { PageHeader, PageTitle, PageWrapper } from "@/shared/ui"
import Image from "next/image"

export default function OtherProjects() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageTitle>Other Projects</PageTitle>
      </PageHeader>

      <div className="flex flex-col gap-12">
        <section className="flex flex-col gap-4">
          <Image
            src="https://github.com/svyatoslavw/track-it-app/blob/main/public/images/logo.webp?raw=true"
            alt="Track It"
            width={100}
            height={100}
          />
          <h3 className="text-2xl font-bold">Track It App</h3>
          <p className="">
            Track-It app allows the user to easily create and track daily habits with the ability to
            see progress on a calendar, get statistics, reminders and visually assess effectiveness,
            helps users form new habits and keep track of their progress.
          </p>
        </section>
        <p>
          Explore More |{" "}
          <a href={PUBLIC_URLS.GITHUB} className="text-primary underline" target="_blank">
            Contribute on GitHub
          </a>
        </p>
      </div>
    </PageWrapper>
  )
}
