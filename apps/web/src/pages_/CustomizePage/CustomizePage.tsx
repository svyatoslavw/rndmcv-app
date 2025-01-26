import { CustomizeList } from "./CustomizeList"
import { ResumeHeader } from "@/widgets"

const CustomizePage = () => {
  return (
    <main className="flex h-full w-full flex-col">
      <ResumeHeader />
      <CustomizeList />
    </main>
  )
}

export { CustomizePage }
