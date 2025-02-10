"use client"

import {
  Input,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@rndm/ui/components"
import { CopyIcon } from "lucide-react"

import { selectResume, useResumeActions } from "@/entities/resume"
import { changeResumeStatusService } from "@/entities/resume/model/repositories/resume"
import { RESPONSE_STATUS } from "@/shared/constants"
import { useAppSelector } from "@/shared/lib/store"
import { ResumeStatus } from "@/shared/types"
import { SectionWrapper } from "@/shared/ui"
import { ResumeHeader } from "@/widgets"

const RESUME_STATUS = {
  PUBLIC: "PUBLIC",
  PRIVATE: "PRIVATE"
}

const SharePage = () => {
  const resume = useAppSelector(selectResume)

  const { changeStatus } = useResumeActions()

  const onChangeStatus = async (status: ResumeStatus) => {
    const toast = (await import("react-hot-toast")).default

    const { status: st } = await changeResumeStatusService(resume.id, status)

    if (st === RESPONSE_STATUS.ERROR) return

    changeStatus({ status })
    const message = status === RESUME_STATUS.PUBLIC ? "Switched to public" : "Switched to private"

    toast.success(message)
  }

  const handleCopyToClipboard = async () => {
    const toast = (await import("react-hot-toast")).default

    navigator.clipboard.writeText(`${window.origin}/resume/${resume.id}`).then(() => {
      toast.success("Copied to clipboard")
    })
  }

  return (
    <main className="flex h-full w-full flex-col">
      <ResumeHeader />
      <section className="flex flex-grow flex-col gap-5 overflow-y-auto pb-8 pt-5">
        <SectionWrapper heading="Online Resume">
          <Select
            value={resume.general.status}
            onValueChange={(stat) => onChangeStatus(stat as ResumeStatus)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value={RESUME_STATUS.PUBLIC}>🟢 Public</SelectItem>
                <SelectItem value={RESUME_STATUS.PRIVATE}>🔴 Private</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {resume.general.status === RESUME_STATUS.PUBLIC && (
            <Label className="relative">
              <Input
                readOnly
                value={`${window.origin}/resume/${resume.id}`}
                className="h-14 font-bold"
              />
              <CopyIcon
                onClick={handleCopyToClipboard}
                className="absolute right-3 top-5 cursor-pointer transition-opacity hover:opacity-70"
              />
            </Label>
          )}
        </SectionWrapper>
      </section>
    </main>
  )
}

export { SharePage }
