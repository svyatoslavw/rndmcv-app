import { ResumeHeader } from "@/widgets"
import { ContentList } from "./ContentList"

const ContentPage = () => {
  return (
    <main className="flex h-full w-full flex-col">
      <ResumeHeader />
      <ContentList />
    </main>
  )
}

export { ContentPage }
