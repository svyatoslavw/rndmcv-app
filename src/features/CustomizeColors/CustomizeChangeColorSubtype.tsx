import { CustomizeColorOption, TColorType, setColorType } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"

const CustomizeChangeColorSubtype = () => {
  const dispatch = useAppDispatch()
  const subtype = useAppSelector((state) => state.customization.colors.type)

  const onChangeColorSubtype = (type: string) => {
    dispatch(setColorType({ type: type as TColorType }))
  }

  return (
    <div>
      <div className="flex gap-3">
        <CustomizeColorOption
          type="accent"
          currentType={subtype}
          onChange={() => onChangeColorSubtype("accent")}
        >
          <div className="h-12 w-24 rounded-sm bg-red-500" />
        </CustomizeColorOption>
        <CustomizeColorOption
          type="multicolor"
          currentType={subtype}
          onChange={() => onChangeColorSubtype("multicolor")}
        >
          <div className="flex h-12 w-24 rounded-sm border">
            <div className="flex w-1/2 flex-col items-center justify-center text-2xl font-bold">
              <span>T</span>
              <span className="h-1 w-6 bg-red-500" />
            </div>
            <div className="w-1/2 rounded-r-sm bg-blue-500" />
          </div>
        </CustomizeColorOption>
        <CustomizeColorOption
          type="image"
          currentType={subtype}
          onChange={() => onChangeColorSubtype("image")}
        >
          <img src="/logo.webp" className="h-12 w-24 rounded-sm bg-green-500 object-cover"></img>
        </CustomizeColorOption>
      </div>
    </div>
  )
}

export { CustomizeChangeColorSubtype }
