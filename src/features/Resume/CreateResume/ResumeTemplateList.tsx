import { useTemplate } from "./useTemplate"
import { RESUME_TEMPLATES } from "@/shared/lib/constants"
import { ResumeDocument } from "@/widgets"

const ResumeTemplateList = () => {
  const { setTemplate } = useTemplate()

  return (
    <div className="grid max-h-[500px] grid-cols-4 gap-5 overflow-y-scroll py-4">
      {RESUME_TEMPLATES.map((template, index) => (
        <button
          key={template.id}
          onClick={() => setTemplate(template.customization)}
          className="h-[370px] w-56 cursor-pointer gap-2 overflow-hidden shadow transition-all hover:opacity-50"
        >
          <ResumeDocument
            key={index}
            customization={template.customization}
            general={template.general}
            width={224}
            height={370}
            className="h-[370px]"
            isCard
          />
        </button>
      ))}
    </div>
  )
}

export { ResumeTemplateList }
