"use client"

import { CheckIcon, SparklesIcon } from "lucide-react"
import { Path, UseFormReturn } from "react-hook-form"
import { TypeOf, ZodSchema, z } from "zod"

import { toggleStatus } from "../model/status.slice"

import { ContentWrapper } from "./ContentWrapper"
import { ResumeFormField } from "./ResumeFormField"
import { useAppDispatch } from "@/app/store"
import { SectionKey } from "@/shared/lib/types"
import { Button, Form, FormField } from "@/shared/ui"

export type TFormFieldType = "startDate" | "endDate" | "default" | "default-half" | "textarea"

interface ResumeFormProps<TSchema extends ZodSchema> {
  heading: string
  buttonText: string
  form: UseFormReturn<z.infer<TSchema>>
  status: "isEditing" | "isCreating"
  content: SectionKey
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

  return (
    <ContentWrapper>
      <div className="relative mt-5 flex flex-col gap-5 rounded-2xl">
        <Form {...form}>
          <form onSubmit={functions.onSubmit}>
            <div className="flex h-full flex-col gap-5 overflow-y-scroll rounded-2xl bg-white p-6 dark:bg-[#0e0c14]">
              <h2 className="mb-2 text-2xl font-bold capitalize">{heading}</h2>
              <div className="grid grid-cols-2 gap-5">
                {fields.map((fld) => (
                  <FormField
                    key={fld.name}
                    control={form.control}
                    name={fld.name}
                    render={({ field }) => (
                      <ResumeFormField<TSchema>
                        field={field}
                        fieldName={fld.name}
                        type={fld.type}
                      />
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="sticky bottom-0 left-0 mt-5 flex w-full items-center justify-end gap-3 rounded-2xl bg-white px-6 py-4 dark:bg-[#0e0c14]">
              <Button type="button" variant={"outline"} onClick={onCancel}>
                Cancel
              </Button>
              <Button disabled={state.isLoading} type="submit">
                <CheckIcon className="mr-2" size={16} />
                {buttonText}
              </Button>
              <Button
                className="relative bg-gradient-to-tr from-primary via-fuchsia-500 to-red-500"
                disabled={state.isLoading}
                type="submit"
              >
                <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-b from-primary/60 to-primary opacity-70 blur dark:opacity-100" />
                <SparklesIcon fill="currentColor" className="mr-2" size={16} />
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
