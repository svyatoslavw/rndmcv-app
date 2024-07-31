import { CustomizeColors } from "@/features"
import { CustomizeLayoutList } from "./CustomizeLayoutList"

const CustomizeList = () => {
  return (
    <div className="flex h-[85vh] flex-col gap-5 overflow-y-scroll pb-5">
      <CustomizeLayoutList />
      <CustomizeColors />
    </div>
  )
}

export { CustomizeList }
