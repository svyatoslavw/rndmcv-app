import { LanguagesIcon } from "lucide-react"

import { ResumeDetails, selectGeneralResume } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { LanguageList } from "@/widgets"

const ResumeLanguageDetails = () => {
  const { items } = useAppSelector(selectGeneralResume("languages"))

  return (
    <ResumeDetails
      Icon={LanguagesIcon}
      items={items}
      render={(items, provided) => (
        <div ref={provided.innerRef} className="mx-0.5" {...provided.droppableProps}>
          <LanguageList languages={items} />
        </div>
      )}
      type="languages"
    />
  )
}

export { ResumeLanguageDetails }
