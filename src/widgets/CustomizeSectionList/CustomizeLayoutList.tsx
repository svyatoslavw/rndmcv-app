import { CustomizeColumns, CustomizeLayout, CustumizeColumnsWidth } from "@/features"

const CustomizeLayoutList = () => {
  return (
    <div className="mt-5 flex flex-col gap-4 rounded-xl bg-white p-8">
      <h2 className="text-2xl font-bold">Layout</h2>
      <div className="flex flex-col gap-8">
        <CustomizeLayout />
        <CustomizeColumns />
        <CustumizeColumnsWidth />
      </div>
    </div>
  )
}

export { CustomizeLayoutList }
