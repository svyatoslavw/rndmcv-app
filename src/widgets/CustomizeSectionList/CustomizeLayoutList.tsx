import { CustomizeColumns, CustomizeLayout, CustumizeColumnsWidth } from "@/features"
import { CustomizeWrapper } from "@/shared/ui/customize-wrapper"

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
