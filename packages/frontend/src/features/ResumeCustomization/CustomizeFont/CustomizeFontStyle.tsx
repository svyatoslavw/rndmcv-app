import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectResume, updateCustomization } from "@/entities/resume"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

const STYLES = ["sans", "serif", "mono"]

const CustomizeFontStyle = () => {
  const resume = useAppSelector(selectResume)
  const dispatch = useAppDispatch()
  const { font, style } = resume.customization.font

  const onChangeStyle = (style: string) => {
    dispatch(updateCustomization({ key: "font", value: { style } }))
  }

  return (
    <div className="flex gap-2">
      {STYLES.map((st) => (
        <Button
          key={st}
          onClick={() => onChangeStyle(st)}
          className="h-16 flex-col"
          variant={style === st ? "default" : "outline"}
          size={"lg"}
        >
          <span className={cn("text-xl font-bold", `font-${st}`)}>Aa</span>
          <span className="capitalize">{st}</span>
        </Button>
      ))}
    </div>
  )
}

export { CustomizeFontStyle }
