import { LanguagesIcon } from "lucide-react"

import { useAppSelector } from "@/app/store"
import { ResumeDetails, selectGeneralResume } from "@/entities/resume"
import { LanguageList } from "@/widgets"

const ResumeLanguageDetails = () => {
  const {
    languages: { items }
  } = useAppSelector(selectGeneralResume)

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
