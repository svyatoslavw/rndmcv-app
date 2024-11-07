import { ResumeDocumentLeftSide } from "./ResumeDocumentLeftSide"
import { ResumeDocumentPage } from "./ResumeDocumentPage"
import { ResumeDocumentRightSide } from "./ResumeDocumentRightSide"

import { ICustomization, IGeneral } from "@/shared/types"
import { AspectRatio } from "@/shared/ui/aspect-ratio"

interface ResumeDocumentProps {
  className?: string
  isCard?: boolean
  width?: number
  height?: number
  general: IGeneral
  customization: ICustomization
}

const ResumeDocument = ({
  customization,
  general,
  className,
  isCard,
  width = 794,
  height = 1122
}: ResumeDocumentProps) => {
  const { colors, spacing, layout, font } = customization

  return (
    <AspectRatio ratio={width / height}>
      <div className={font.font.className} id="resume">
        <ResumeDocumentPage
          borderSize={colors.borderSize}
          borderVisibility={colors.borderVisibility}
          className={className}
          layout={layout.layout}
          left={colors.side.left}
          lineHeight={spacing.lineHeight}
          mode={colors.mode}
        >
          <ResumeDocumentLeftSide
            customization={customization}
            general={general}
            isCard={isCard}
            variant="left"
          />
          <ResumeDocumentRightSide
            customization={customization}
            general={general}
            isCard={isCard}
            variant="right"
          />
        </ResumeDocumentPage>
      </div>
    </AspectRatio>
  )
}

export { ResumeDocument }
