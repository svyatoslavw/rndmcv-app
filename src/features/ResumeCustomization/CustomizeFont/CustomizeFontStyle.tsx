import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectResume, updateCustomization } from "@/entities/resume"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

const STYLES = ["sans", "serif", "mono"]

const CustomizeFontStyle = () => {
  const resume = useAppSelector(selectResume)
  const dispatch = useAppDispatch()
  const { style } = resume.customization.font

  const onChangeStyle = (style: string) => {
    dispatch(updateCustomization({ key: "font", value: { style } }))
  }

  return (
    <div className="flex gap-2">
      {STYLES.map((st) => (
        <Button
          key={st}
          className="h-16 flex-col"
          size={"lg"}
          variant={style === st ? "default" : "outline"}
          onClick={() => onChangeStyle(st)}
        >
          <span className={cn("text-xl font-bold", `font-${st}`)}>Aa</span>
          <span className="capitalize">{st}</span>
        </Button>
      ))}
    </div>
  )
}

export { CustomizeFontStyle }
