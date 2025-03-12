"use client"

import { selectCustomizationResume, useResumeActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { SkillLayoutVariant } from "@/shared/types"
import { CustomizeSectionWrapper } from "@/shared/ui"
import { Button } from "@rndm/ui/components"

const layout = ["default", "grid", "level", "compact"] as const

const gridVariants = ["1-column", "2-columns", "3-columns", "4-columns"] as const
const levelVariants = ["Text", "Icon", "Bar"] as const
const compactVariants = ["Bullet", "New line", "Comma"] as const

const ChangeSkillsLayout = () => {
  const { skills } = useAppSelector(selectCustomizationResume("sections"))
  const { updateSections } = useResumeActions()

  const { value, variant: selectedVariant } = skills.layout

  const handleChangeVariant = (variant: SkillLayoutVariant) => {
    const variantMapping = {
      default: "",
      grid: gridVariants[0],
      level: levelVariants[0],
      compact: compactVariants[0]
    }

    const value = variantMapping[variant] || ""
    updateSections({ key: "skills", value: { layout: { variant, value } } })
  }

  const handleChangeValue = (value: string) =>
    updateSections({ key: "skills", value: { layout: { value, variant: selectedVariant } } })

  return (
    <CustomizeSectionWrapper className="flex-col" heading="Layout">
      <div className="flex gap-3">
        {layout.map((layout) => (
          <Button
            onClick={() => handleChangeVariant(layout)}
            variant={layout === selectedVariant ? "default" : "outline"}
            key={layout}
            className="capitalize"
          >
            {layout}
          </Button>
        ))}
      </div>
      {selectedVariant === "grid" && (
        <div className="flex gap-3">
          {gridVariants.map((variant) => (
            <Button
              onClick={() => handleChangeValue(variant)}
              variant={value === variant ? "default" : "outline"}
              key={variant}
              className="capitalize"
            >
              {variant}
            </Button>
          ))}
        </div>
      )}
      {selectedVariant === "level" && (
        <div className="flex gap-3">
          {levelVariants.map((variant) => (
            <Button
              onClick={() => handleChangeValue(variant)}
              variant={value === variant ? "default" : "outline"}
              key={variant}
              className="capitalize"
            >
              {variant}
            </Button>
          ))}
        </div>
      )}
      {selectedVariant === "compact" && (
        <div className="flex gap-3">
          {compactVariants.map((variant) => (
            <Button
              onClick={() => handleChangeValue(variant)}
              variant={value === variant ? "default" : "outline"}
              key={variant}
              className="capitalize"
            >
              {variant}
            </Button>
          ))}
        </div>
      )}
    </CustomizeSectionWrapper>
  )
}

export { ChangeSkillsLayout }
