"use client"

import { CheckIcon, Loader2Icon, SparklesIcon } from "lucide-react"
import { useState } from "react"
import { Path, UseFormReturn } from "react-hook-form"
import { TypeOf, ZodSchema, z } from "zod"

import { SectionKey } from "../domain"
import { toggleStatus } from "../model/slices/status.slice"

import { ResumeFormField } from "./ResumeFormField"
import { generateSectionFields } from "@/shared/lib/actions"
import { useAppDispatch } from "@/shared/lib/store"
import { Button, ContentWrapper, Form, FormField, InfoMessage } from "@/shared/ui"

export type TFormFieldType = "startDate" | "endDate" | "default" | "default-half" | "textarea"

interface ResumeFormProps<TSchema extends ZodSchema> {
  heading: string
  buttonText: string
  form: UseFormReturn<z.infer<TSchema>>
  status: "isEditing" | "isCreating"
  content: SectionKey
  fields: {
    name: Path<TypeOf<TSchema>>
    type: TFormFieldType
    isOptional?: boolean
    isRecomended?: boolean
    isRequired?: boolean
  }[]
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
  const [isLoading, setIsLoading] = useState(false)
  const onCancel = () => {
    dispatch(toggleStatus({ key: status, content }))
  }

  const names = fields.map((fld) => fld.name)

  const generate = async () => {
    setIsLoading(true)
    try {
      const response = await generateSectionFields(names.join(", "), heading)

      Object.entries(response).forEach(([key, value]) => {
        if (form.getValues()[key] !== undefined) {
          form.setValue(
            key as Path<TypeOf<TSchema>>,
            value as TypeOf<TSchema>[Path<TypeOf<TSchema>>]
          )
        }
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ContentWrapper>
      <div className="relative mt-5 flex flex-col gap-5 rounded-lg">
        <Form {...form}>
          <form onSubmit={functions.onSubmit}>
            <div className="flex h-full flex-col gap-5 overflow-y-scroll rounded-lg bg-background p-6 shadow-lg dark:shadow-neutral-900">
              <h2 className="text-2xl font-bold capitalize">{heading}</h2>
              <div className="mb-2">
                <InfoMessage text="RNDM Intelligent is experimental so double-check the info" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                {fields.map((fld) => (
                  <FormField
                    key={fld.name}
                    control={form.control}
                    name={fld.name}
                    render={({ field }) => (
                      <ResumeFormField<TSchema>
                        disabled={isLoading}
                        field={field}
                        fieldName={fld.name}
                        isOptional={fld.isOptional}
                        isRecomended={fld.isRecomended}
                        isRequired={fld.isRequired}
                        type={fld.type}
                      />
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="sticky bottom-0 left-0 mt-5 flex w-full items-center justify-end gap-3 rounded-lg bg-background px-6 py-4">
              <Button
                disabled={state.isLoading || isLoading}
                type="button"
                variant={"outline"}
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button disabled={state.isLoading || isLoading} type="submit">
                <CheckIcon className="mr-2" size={16} />
                {buttonText}
              </Button>
              <Button
                className="relative bg-gradient-to-tr from-primary via-fuchsia-500 to-red-500 shadow-[0_0_10px_1px_#a21caf] transition-all hover:scale-105"
                disabled={state.isLoading || isLoading}
                type="button"
                onClick={generate}
              >
                {isLoading ? (
                  <Loader2Icon className="mr-2 animate-spin" size={16} />
                ) : (
                  <SparklesIcon className="mr-2" fill="currentColor" size={16} />
                )}
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
