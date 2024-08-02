import { type TColorMode, setColorMode } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

const CustomizeChangeColorType = () => {
  const dispatch = useAppDispatch()
  const mode = useAppSelector((state) => state.customization.colors.mode)
  const onChangeColorType = (mode: TColorMode) => {
    dispatch(setColorMode({ mode: mode as TColorMode }))
  }

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Colors</h2>
      <div className="flex gap-6">
        <div
          className={cn("flex flex-col gap-2 opacity-40 transition-all", {
            "opacity-100": mode === "basic"
          })}
        >
          <Button
            onClick={() => onChangeColorType("basic")}
            variant={"outline"}
            className="flex h-20 w-20 flex-col rounded-full border-2 border-primary p-1 transition-all"
          />
          <p className="text-center text-sm capitalize">basic</p>
        </div>
        <div
          className={cn("flex flex-col gap-2 opacity-40 transition-all", {
            "opacity-100": mode === "advanced"
          })}
        >
          <Button
            onClick={() => onChangeColorType("advanced")}
            variant={"outline"}
            className="flex h-20 w-20 flex-col justify-start rounded-full border-2 border-primary p-1 transition-all"
          >
            <div className="h-1/2 w-full rounded-t-full bg-primary" />
          </Button>
          <p className="text-center text-sm capitalize">Advanced</p>
        </div>
        <div
          className={cn("flex flex-col gap-2 opacity-40 transition-all", {
            "opacity-100": mode === "border"
          })}
        >
          <Button
            onClick={() => onChangeColorType("border")}
            variant={"outline"}
            className="flex h-20 w-20 flex-col justify-start rounded-full border-[12px] border-primary p-1 transition-all"
          ></Button>
          <p className="text-center text-sm capitalize">Border</p>
        </div>
        {/* <HexColorPicker color={color} onChange={(newColor) => setColor(newColor)} /> */}
      </div>
    </div>
  )
}

export { CustomizeChangeColorType }
