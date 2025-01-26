"use client"

import { CopyIcon } from "lucide-react"
import toast from "react-hot-toast"

import { ResumeDomain, selectResume, useGeneralActions } from "@/entities/resume"
import { changeResumeStatusService } from "@/entities/resume/model/repositories/resume"
import { RESPONSE_STATUS } from "@/shared/constants"
import { useAppSelector } from "@/shared/lib/store"
import { SectionWrapper } from "@/shared/ui"
import { ResumeHeader } from "@/widgets"
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

const RESUME_STATUS = {
  PUBLIC: "PUBLIC",
  PRIVATE: "PRIVATE"
}

const SharePage = () => {
  const resume = useAppSelector(selectResume)

  const { changeStatus } = useGeneralActions()

  const onChangeStatus = async (status: ResumeDomain.ResumeStatus) => {
    const { status: st } = await changeResumeStatusService(resume.id, status)

    if (st === RESPONSE_STATUS.ERROR) return

    changeStatus({ status })
    const message = status === RESUME_STATUS.PUBLIC ? "Switched to public" : "Switched to private"

    toast.success(message)
  }

  return (
    <main className="flex h-full w-full flex-col">
      <ResumeHeader />
      <section className="flex flex-grow flex-col gap-5 overflow-y-auto pb-8 pt-5">
        <SectionWrapper heading="Online Resume">
          <Select
            value={resume.general.status}
            onValueChange={(stat) => onChangeStatus(stat as ResumeDomain.ResumeStatus)}
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
              <CopyIcon className="absolute right-3 top-5 cursor-pointer transition-opacity hover:opacity-70" />
            </Label>
          )}
        </SectionWrapper>
      </section>
    </main>
  )
}

export { SharePage }

