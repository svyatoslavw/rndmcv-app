import { LanguagesIcon } from "lucide-react"

import { ResumeDetails } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { LanguageList } from "@/widgets"

const ResumeLanguageDetails = () => {
  const languages = useAppSelector((state) => state.resume.languages.items)

  return (
    <ResumeDetails
      items={languages}
      type="languages"
      Icon={LanguagesIcon}
      render={(items, provided) => (
        <div className="mx-0.5" ref={provided.innerRef} {...provided.droppableProps}>
          <LanguageList languages={items} />
        </div>
      )}
    />
  )
}

export { ResumeLanguageDetails }
