import { LucideIcon } from "lucide-react"

import {
  getHeadingClasses,
  getIconClasses,
  getLineClasses,
  getTextClasses
} from "@/entities/resume"
import { CustomizationEntity } from "@/shared/types"

interface DocumentHeadingProps {
  customization: CustomizationEntity
  Icon: LucideIcon
  children?: React.ReactNode
  isCard?: boolean
}

const MIN_FONT_SIZE = 8

const DocumentHeading = ({ Icon, customization, children, isCard }: DocumentHeadingProps) => {
  const { colors, heading, spacing } = customization

  const isBasic = colors.mode === "basic"
  const isBorder = colors.mode === "border"

  const fontSize = spacing.fontSize
  const icons = heading.icons
  const isAccent = colors.isAccent
  const size = heading.size
  const style = heading.style

  const accentColor = isBasic || isBorder ? colors.side.left.accent : colors.side.right.accent
  const textColor = isBasic || isBorder ? colors.side.left.text : colors.side.right.text

  return (
    <div
      className={getHeadingClasses(style, {
        accent: accentColor,
        isAccent: isAccent.headingsLines,
        isCard
      })}
    >
      <div
        className={getLineClasses(size, fontSize, style, {
          accent: accentColor,
          isAccent: isAccent.headingsLines,
          isCard
        })}
      >
        {icons !== "none" && (
          <Icon
            className={getIconClasses(icons, textColor, {
              accent: accentColor,
              isAccent: isAccent.headerIcons,
              isCard
            })}
            size={isCard ? MIN_FONT_SIZE : size + fontSize}
            strokeWidth={1.5}
          />
        )}
        <div
          className={getTextClasses(size, fontSize, {
            accent: accentColor,
            isAccent: isAccent.headings,
            isCard
          })}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export { DocumentHeading }
