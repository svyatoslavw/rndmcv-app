import { ContentHeader, ContentList } from "@/pages/resume"
import { ResumeDocument } from "@/widgets"

export default function ResumeContent() {
  return (
    <div className="flex w-full gap-8">
      <div className="relative w-1/2 overflow-y-auto overflow-x-hidden scroll-smooth pb-8 pt-8">
        <ContentHeader />
        <ContentList />
      </div>
      <ResumeDocument />
    </div>
  )
}
