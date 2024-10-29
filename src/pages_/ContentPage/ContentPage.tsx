import { ContentList } from "./ContentList"

import { ResumeHeader } from "@/widgets"

const ContentPage = () => {
  return (
    <main className="w-full">
      <ResumeHeader />
      <ContentList />
    </main>
  )
}

export { ContentPage }
