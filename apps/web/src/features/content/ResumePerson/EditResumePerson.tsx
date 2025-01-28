"use client"

import { Button, Form } from "@rndm/ui/components"
import { CheckIcon, Loader2Icon } from "lucide-react"
import { FormProvider } from "react-hook-form"

import { InformationForm } from "./InformationForm"
import { LinksForm } from "./LinksForm"
import { PersonalDetailsForm } from "./PersonalDetailForm"
import { useEditResumePersonForm } from "./useEditResumePersonForm"
import { selectGeneralResume, toggleStatus } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { ContentWrapper } from "@/shared/ui"

const EditResumePerson = () => {
  const dispatch = useAppDispatch()
  const content = useAppSelector(selectGeneralResume("person"))
  const { form, functions, state } = useEditResumePersonForm({ content })

  const onCancel = () => {
    dispatch(toggleStatus({ key: "isEditing", content: "person" }))
  }

  return (
    <ContentWrapper>
      <div className="relative mt-5 flex flex-col gap-5 rounded-2xl">
        <FormProvider {...form}>
          <Form {...form}>
            <form onSubmit={functions.onSubmit}>
              <div className="bg-background flex h-full flex-col gap-5 overflow-y-scroll rounded-2xl p-6">
                <PersonalDetailsForm />
                <InformationForm />
                <LinksForm />
              </div>
              <div className="bg-background sticky bottom-0 left-0 mt-5 flex w-full items-center justify-end gap-2 rounded-2xl px-6 py-3">
                <Button type="button" variant={"outline"} onClick={onCancel}>
                  Cancel
                </Button>
                <Button type="submit">
                  {state.isLoading ? (
                    <Loader2Icon className="mr-2 animate-spin" size={16} />
                  ) : (
                    <CheckIcon className="mr-2" size={16} />
                  )}
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </FormProvider>
      </div>
    </ContentWrapper>
  )
}

export { EditResumePerson }
