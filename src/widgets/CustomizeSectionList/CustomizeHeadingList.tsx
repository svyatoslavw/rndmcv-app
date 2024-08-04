import { CustomizeHeadingIcons, CustomizeHeadingSize, CustomizeHeadingStyle } from "@/features"

const CustomizeHeadingList = () => {
  return (
    <div className="mt-5 flex flex-col gap-4 rounded-xl bg-white p-8">
      <h2 className="text-2xl font-bold">Heading</h2>
      <div className="flex flex-col gap-8">
        <CustomizeHeadingStyle />
        <CustomizeHeadingSize />
        <CustomizeHeadingIcons />
      </div>
    </div>
  )
}

export { CustomizeHeadingList }
