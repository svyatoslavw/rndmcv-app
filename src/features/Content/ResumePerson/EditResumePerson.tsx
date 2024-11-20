"use client"

import { CheckIcon, Loader2Icon } from "lucide-react"
import { FormProvider } from "react-hook-form"

import { InformationForm } from "./InformationForm"
import { LinksForm } from "./LinksForm"
import { PersonalDetailsForm } from "./PersonalDetailForm"
import { useEditResumePersonForm } from "./useEditResumePersonForm"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { ContentWrapper, selectGeneralResume, toggleStatus } from "@/entities/resume"
import { Button, Form } from "@/shared/ui"

const EditResumePerson = () => {
  const dispatch = useAppDispatch()
  const { person: content } = useAppSelector(selectGeneralResume)
  const { form, functions, state } = useEditResumePersonForm({ content })

  const onCancel = () => {
    dispatch(toggleStatus({ key: "isEditing", content: "person" }))
  }

  return (
    <ContentWrapper>
      <div className="relative mt-5 flex flex-col gap-5 rounded-lg">
        <FormProvider {...form}>
          <Form {...form}>
            <form onSubmit={functions.onSubmit}>
              <div className="flex h-full flex-col gap-5 overflow-y-scroll rounded-lg bg-background p-6 shadow-md dark:shadow-neutral-800">
                <PersonalDetailsForm />
                <InformationForm />
                <LinksForm />
              </div>
              <div className="sticky bottom-0 left-0 mt-5 flex w-full items-center justify-end gap-2 rounded-lg bg-background px-6 py-3">
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
