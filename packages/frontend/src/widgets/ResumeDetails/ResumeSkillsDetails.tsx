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
      items={items}
      type="skills"
      Icon={BrainIcon}
      render={(items, provided) => (
        <div className="mx-0.5" ref={provided.innerRef} {...provided.droppableProps}>
          <SkillsList skills={items} />
        </div>
      )}
    />
  )
}

export { ResumeSkillsDetails }
