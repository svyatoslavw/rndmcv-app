import { memo } from "react"

import type { IContentSection, TypeSectionKey } from "@/shared/lib/types"
import { Button } from "@/shared/ui"

const SectionButton = memo(
  ({
    section,
    onAddSection
  }: {
    section: IContentSection
    onAddSection: (section: TypeSectionKey) => void
  }) => {
    return (
      <Button
        variant={"secondary"}
        key={section.content}
        onClick={() => onAddSection(section.content)}
        className="flex h-auto flex-col justify-start gap-2 whitespace-normal rounded-xl p-4 text-start transition-all hover:scale-105 active:scale-105"
      >
        <h4 className="flex w-full items-center gap-3 text-start text-lg font-bold capitalize">
          <section.icon size={26} />
          {section.content}
        </h4>
        <p className="text-sm font-normal tracking-wide">{section.description}</p>
      </Button>
    )
  }
)

SectionButton.displayName = "SectionButton"

export { SectionButton }
