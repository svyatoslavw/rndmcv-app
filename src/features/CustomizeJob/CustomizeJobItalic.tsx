import { updateCustomization } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { Button } from "@/shared/ui"

const CustomizeJobItalic = () => {
  const dispatch = useAppDispatch()
  const isItalic = useAppSelector((state) => state.customization.job.isItalic)

  const onChangeIsItalic = (value: boolean) => {
    dispatch(updateCustomization({ key: "job", value: { isItalic: value } }))
  }

  return (
    <div>
      <h3 className="mb-2 font-semibold">Size</h3>
      <div className="flex flex-wrap gap-2">
        <Button variant={!isItalic ? "default" : "outline"} onClick={() => onChangeIsItalic(false)}>
          Normal
        </Button>
        <Button
          variant={isItalic ? "default" : "outline"}
          onClick={() => onChangeIsItalic(true)}
          className="italic"
        >
          Italic
        </Button>
      </div>
    </div>
  )
}

export { CustomizeJobItalic }
