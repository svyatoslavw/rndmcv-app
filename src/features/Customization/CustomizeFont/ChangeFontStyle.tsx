import { CustomizationSelector, selectResume, useCustomizationActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

const STYLES = ["sans", "serif", "mono"]

const ChangeFontStyle = () => {
  const resume = useAppSelector(selectResume)
  const { style } = resume.customization.font
  const { updateCustomization } = useCustomizationActions()

  const onChangeStyle = (style: string) => {
    updateCustomization({ key: "font", value: { style } })
  }

  return (
    <div className="flex gap-2">
      <CustomizationSelector
        items={STYLES}
        render={({ value, isSelected }) => (
          <Button
            key={value}
            className="h-16 flex-col"
            size={"lg"}
            variant={isSelected ? "default" : "outline"}
            onClick={() => onChangeStyle(value)}
          >
            <span className={cn("text-xl font-bold", `font-${value}`)}>Aa</span>
            <span className="capitalize">{value}</span>
          </Button>
        )}
        selectedItem={STYLES.find((option) => option === style)!}
        onChange={(option) => onChangeStyle(option)}
      />
    </div>
  )
}

export { ChangeFontStyle }
