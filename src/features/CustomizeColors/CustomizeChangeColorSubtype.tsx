import { setColorSubtype } from "@/entities/resume/model/customization.slice"
import { TColorSubtype } from "@/entities/resume/model/customization.types"
import { CustomizeColorOption } from "@/entities/resume/ui/CustomizeColorOption"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"

const CustomizeChangeColorSubtype = () => {
  const dispatch = useAppDispatch()
  const subtype = useAppSelector((state) => state.customization.colors.subtype)

  const onChangeColorSubtype = (subtype: string) => {
    dispatch(setColorSubtype({ subtype: subtype as TColorSubtype }))
  }

  return (
    <div>
      <div className="flex gap-3">
        <CustomizeColorOption
          subtype="accent"
          currentSubtype={subtype}
          onChange={() => onChangeColorSubtype("accent")}
        >
          <div className="h-12 w-24 rounded-sm bg-red-500" />
        </CustomizeColorOption>
        <CustomizeColorOption
          subtype="multicolor"
          currentSubtype={subtype}
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
          subtype="image"
          currentSubtype={subtype}
          onChange={() => onChangeColorSubtype("image")}
        >
          <img src="/logo.webp" className="h-12 w-24 rounded-sm bg-green-500 object-cover"></img>
        </CustomizeColorOption>
      </div>
    </div>
  )
}

export { CustomizeChangeColorSubtype }
