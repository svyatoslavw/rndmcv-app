import { setColorType } from "@/entities/resume"
import { TColorType } from "@/entities/resume/model/customization.types"
import { useAppDispatch } from "@/shared/lib/store"
import { Button } from "@/shared/ui"

const CustomizeColors = () => {
  const dispatch = useAppDispatch()

  const onChangeColorType = (type: TColorType) => {
    dispatch(setColorType({ type }))
    console.log(type)
  }

  return (
    <div className="mt-5 flex flex-col gap-6 rounded-xl bg-white p-8">
      <div>
        <h2 className="mb-2 text-2xl font-bold">Colors</h2>
        <div className="flex gap-6">
          <div className="flex flex-col gap-2">
            <Button
              onClick={() => onChangeColorType("basic")}
              variant={"outline"}
              className="flex h-16 w-16 flex-col rounded-full p-0 transition-all hover:opacity-70"
            />
            <p className="text-center text-xs capitalize">basic</p>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              onClick={() => onChangeColorType("advanced")}
              variant={"outline"}
              className="flex h-16 w-16 flex-col justify-start rounded-full p-0 transition-all hover:opacity-70"
            >
              <div className="h-1/2 w-full rounded-t-full bg-primary" />
            </Button>
            <p className="text-center text-xs capitalize">Advanced</p>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              onClick={() => onChangeColorType("border")}
              variant={"outline"}
              className="flex h-16 w-16 flex-col justify-start rounded-full border-[12px] border-primary p-0 transition-all hover:opacity-70"
            ></Button>
            <p className="text-center text-xs capitalize">Border</p>
          </div>
          {/* <HexColorPicker color={color} onChange={(newColor) => setColor(newColor)} /> */}
        </div>
      </div>
    </div>
  )
}

export { CustomizeColors }
