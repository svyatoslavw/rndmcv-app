import { CustomizeColumns, CustomizeLayout, CustumizeColumnsWidth } from "@/features"

const CustomizeLayoutList = () => {
  return (
    <div className="mt-5 flex flex-col gap-6 rounded-xl bg-white p-8">
      <CustomizeLayout />
      <CustomizeColumns />
      <CustumizeColumnsWidth />
    </div>
  )
}

export { CustomizeLayoutList }
