"use client"

import { CheckIcon, SparklesIcon } from "lucide-react"
import { Path, UseFormReturn } from "react-hook-form"
import { TypeOf, ZodSchema, z } from "zod"

import { toggleStatus } from "../model/status.slice"

import { ContentWrapper } from "./ContentWrapper"
import { ResumeFormField } from "./ResumeFormField"
import { useAppDispatch } from "@/app/store"
import { generateResumeSection } from "@/shared/lib/actions"
import { TypeSectionKey } from "@/shared/lib/types"
import { Button, Form, FormField } from "@/shared/ui"

export type TFormFieldType = "startDate" | "endDate" | "default" | "default-half" | "textarea"

interface ResumeFormProps<TSchema extends ZodSchema> {
  heading: string
  buttonText: string
  form: UseFormReturn<z.infer<TSchema>>
  status: "isEditing" | "isCreating"
  content: TypeSectionKey
  fields: { name: Path<TypeOf<TSchema>>; type: TFormFieldType }[]
  functions: {
    onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>
  }
  state: { isLoading: boolean }
}

const ResumeForm = <TSchema extends ZodSchema>({
  heading,
  buttonText,
  form,
  functions,
  state,
  fields,
  status,
  content
}: ResumeFormProps<TSchema>) => {
  const dispatch = useAppDispatch()

  const onCancel = () => {
    dispatch(toggleStatus({ key: status, content }))
  }

  const onGenerate = async () => generateResumeSection()

  return (
    <ContentWrapper>
      <div className="relative mt-5 flex flex-col gap-5 rounded-2xl">
        <Form {...form}>
          <form onSubmit={functions.onSubmit}>
            <div className="flex h-full flex-col gap-5 overflow-y-scroll rounded-2xl bg-white p-6 dark:bg-secondary/75">
              <h2 className="mb-2 text-2xl font-bold capitalize">{heading}</h2>
              <div className="grid grid-cols-2 gap-5">
                {fields.map((fld) => (
                  <FormField
                    key={fld.name}
                    control={form.control}
                    name={fld.name}
                    render={({ field }) => (
                      <ResumeFormField<TSchema>
                        fieldName={fld.name}
                        field={field}
                        type={fld.type}
                      />
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="sticky bottom-0 left-0 mt-5 flex w-full items-center justify-end gap-2 rounded-2xl bg-white px-6 py-3 dark:bg-secondary/75">
              <Button variant={"outline"} type="button" onClick={onCancel}>
                Cancel
              </Button>
              <Button disabled={!form.formState.isValid || state.isLoading} type="submit">
                <CheckIcon className="mr-2" size={16} />
                {buttonText}
              </Button>
              <Button onClick={onGenerate} type="submit">
                <SparklesIcon className="mr-2" size={16} />
                Generate
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </ContentWrapper>
  )
}

export { ResumeForm }
