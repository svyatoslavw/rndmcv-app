import { ChangeColumnsWidth, ChangeLayoutPosition, ColumnReorderPanel } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeLayoutList = () => {
  return (
    <CustomizeWrapper heading="Layout">
      <ChangeLayoutPosition />
      <ColumnReorderPanel />
      <ChangeColumnsWidth />
    </CustomizeWrapper>
  )
}

export { CustomizeLayoutList }
