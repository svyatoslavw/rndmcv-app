import { ScrollTextIcon } from "lucide-react"

import { useAppSelector } from "@/app/store"
import { ResumeDetails, selectGeneralResume } from "@/entities/resume"
import { CertificateList } from "@/widgets"

const ResumeCertificateDetails = () => {
  const {
    certificates: { items }
  } = useAppSelector(selectGeneralResume)

  return (
    <ResumeDetails
      items={items}
      type="certificates"
      Icon={ScrollTextIcon}
      render={(items, provided) => (
        <div className="mx-0.5" ref={provided.innerRef} {...provided.droppableProps}>
          <CertificateList certificates={items} />
        </div>
      )}
    />
  )
}

export { ResumeCertificateDetails }
