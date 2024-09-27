import { ContentList } from "./ContentList"
import { ResumeHeader } from "@/widgets"

const ContentPage = () => {
  return (
    <div className="w-full">
      <ResumeHeader />
      <ContentList />
    </div>
  )
}

export { ContentPage }
