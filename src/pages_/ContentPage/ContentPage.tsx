import { ContentList } from "./ContentList"

import { ResumeHeader } from "@/widgets"

const ContentPage = () => {
  return (
    <main className="flex h-full w-full flex-col">
      <ResumeHeader />
      <ContentList />
    </main>
  )
}

export { ContentPage }
