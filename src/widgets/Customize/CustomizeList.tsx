"use client"

import { CustomizeColorsList } from "./CustomizeColorsList"
import { CustomizeLayoutList } from "./CustomizeLayoutList"

const CustomizeList = () => {
  return (
    <div className="flex h-[85vh] flex-col gap-5 overflow-y-scroll pb-5">
      <CustomizeLayoutList />
      <CustomizeColorsList />
    </div>
  )
}

export { CustomizeList }
