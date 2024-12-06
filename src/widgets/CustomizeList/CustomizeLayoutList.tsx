import { ChangeColumnsWidth, ChangeLayoutPosition, ColumnReorderPanel } from "@/features"
import { SectionWrapper } from "@/shared/ui"

const CustomizeLayoutList = () => {
  return (
    <SectionWrapper heading="Layout">
      <ChangeLayoutPosition />
      <ColumnReorderPanel />
      <ChangeColumnsWidth />
    </SectionWrapper>
  )
}

export { CustomizeLayoutList }
