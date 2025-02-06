"use client"

import { Form } from "@rndm/ui/components"
import { FormProvider } from "react-hook-form"

import { selectGeneralResume, useStatusActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { ContentWrapper } from "@/shared/ui"
import { DetailsForm } from "./DetailsForm"
import { EditResumeButtons } from "./EditResumeButtons"
import { InformationForm } from "./InformationForm"
import { LinksForm } from "./LinksForm"
import { useEditResumePersonForm } from "./useEditResumePersonForm"

const EditResumePerson = () => {
  const { toggleStatus } = useStatusActions()
  const content = useAppSelector(selectGeneralResume("person"))
  const { form, functions, state } = useEditResumePersonForm({ content })

  const onCancel = () => {
    toggleStatus({ key: "isEditing", content: "person" })
  }

  return (
    <ContentWrapper>
      <div className="relative mt-5 flex flex-col gap-5 rounded">
        <FormProvider {...form}>
          <Form {...form}>
            <form onSubmit={functions.onSubmit}>
              <div className="bg-background flex h-full flex-col gap-5 overflow-y-scroll rounded p-6">
                <DetailsForm />
                <InformationForm />
                <LinksForm />
              </div>
              <EditResumeButtons state={state} onCancel={onCancel} />
            </form>
          </Form>
        </FormProvider>
      </div>
    </ContentWrapper>
  )
}

export { EditResumePerson }
