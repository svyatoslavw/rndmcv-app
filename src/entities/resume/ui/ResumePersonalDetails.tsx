import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react"
import { toggleState } from "../model/resume.slice"

const ResumePersonalDetails = () => {
  const content = useAppSelector((state) => state.content.person)
  const dispatch = useAppDispatch()

  const onEditChange = () => {
    dispatch(toggleState({ key: "isEditing", content: "person" }))
  }

  return (
    <div className="mt-5 rounded-xl bg-white p-6">
      <div onClick={onEditChange}>
        <h2 className="text-xl font-bold">{content.name}</h2>
        <h3 className="font-medium text-gray-400">{content.job}</h3>
        <div className="mt-5 flex justify-between text-gray-600">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm">
              <MailIcon size={18} />
              <span>{content.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <PhoneCallIcon size={18} />
              <span>{content.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPinIcon size={18} />
              <span>{content.address}</span>
            </div>
          </div>
          <div className="h-20 w-20 rounded-full bg-red-100"></div>
        </div>
      </div>
    </div>
  )
}

export { ResumePersonalDetails }
