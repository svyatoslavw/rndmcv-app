import { BrainIcon } from "lucide-react"

import { useAppSelector } from "@/app/store"
import { ResumeDetails, selectGeneralResume } from "@/entities/resume"
import { SkillsList } from "@/widgets"

const ResumeSkillsDetails = () => {
  const {
    skills: { items }
  } = useAppSelector(selectGeneralResume)

  return (
    <ResumeDetails
      Icon={BrainIcon}
      items={items}
      render={(items, provided) => (
        <div ref={provided.innerRef} className="mx-0.5" {...provided.droppableProps}>
          <SkillsList skills={items} />
        </div>
      )}
      type="skills"
    />
  )
}

export { ResumeSkillsDetails }
