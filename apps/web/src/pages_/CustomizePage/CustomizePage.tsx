import { ResumeHeader } from "@/widgets"
import { CustomizeList } from "./CustomizeList"

const CustomizePage = () => {
  return (
    <main className="flex h-full w-full flex-col">
      <ResumeHeader />
      <CustomizeList />
    </main>
  )
}

export { CustomizePage }
