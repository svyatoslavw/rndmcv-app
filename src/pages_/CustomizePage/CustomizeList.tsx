"use client"

import {
  CustomizeColorsList,
  CustomizeFontList,
  CustomizeHeadingList,
  CustomizeJobList,
  CustomizeLayoutList,
  CustomizeNameList,
  CustomizeSpacingList
} from "@/widgets"

const CustomizeList = () => {
  return (
    <div className="flex h-[86vh] flex-col gap-5 overflow-y-scroll pb-5">
      <CustomizeLayoutList />
      <CustomizeColorsList />
      <CustomizeSpacingList />
      <CustomizeHeadingList />
      <CustomizeNameList />
      <CustomizeJobList />
      <CustomizeFontList />
    </div>
  )
}

export { CustomizeList }
