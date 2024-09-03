import { CustomizeColumns, CustomizeLayout, CustumizeColumnsWidth } from "@/features"
import { CustomizeWrapper } from "@/shared/ui"

const CustomizeLayoutList = () => {
  return (
    <CustomizeWrapper heading="Layout">
      <CustomizeLayout />
      <CustomizeColumns />
      <CustumizeColumnsWidth />
    </CustomizeWrapper>
  )
}

export { CustomizeLayoutList }
