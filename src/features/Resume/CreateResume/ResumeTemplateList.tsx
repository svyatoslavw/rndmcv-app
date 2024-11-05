import { RESUME_TEMPLATES } from "@/shared/lib/constants"
import type { ICustomization } from "@/shared/lib/types"
import { InfoMessage } from "@/shared/ui"
import { ResumeDocument } from "@/widgets"

const ResumeTemplateList = ({
  setTemplate
}: {
  setTemplate: React.Dispatch<React.SetStateAction<ICustomization | null>>
}) => {
  return (
    <div className="grid max-h-[500px] grid-cols-1 place-items-center gap-5 overflow-y-scroll py-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="col-span-full">
        {" "}
        <InfoMessage text="Scroll to see more templates" />
      </div>
      {RESUME_TEMPLATES.map((template, index) => (
        <button
          key={template.id}
          className="h-[370px] w-56 cursor-pointer gap-2 overflow-hidden shadow transition-all hover:opacity-50"
          onClick={() => setTemplate(template.customization)}
        >
          <ResumeDocument
            key={index}
            isCard
            className="h-[370px]"
            customization={template.customization}
            general={template.general}
            height={370}
            width={224}
          />
        </button>
      ))}
    </div>
  )
}

export { ResumeTemplateList }
