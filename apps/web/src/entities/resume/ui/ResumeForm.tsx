"use client"

import { Button, Form, FormField, InfoMessage } from "@rndm/ui/components"
import { CheckIcon } from "lucide-react"
import { useState } from "react"
import { Path, UseFormReturn } from "react-hook-form"
import { TypeOf, ZodSchema, z } from "zod"

import { SectionKey } from "@/shared/types"

import { generateSectionFields } from "@/shared/lib/actions"
import { ContentWrapper } from "@/shared/ui"
import { useStatusActions } from "../model/hooks/useStatusActions"
import { ResumeFormField } from "./ResumeFormField"

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
  const [isLoading, setIsLoading] = useState(false)
  const { toggleStatus } = useStatusActions()

  const onCancel = () => {
    toggleStatus({ key: status, content })
  }

  const onGenerate = async () => {
    setIsLoading(true)
    const names = fields.map((fld) => fld.name)

    try {
      const response = await generateSectionFields(names.join(", "), heading)

      Object.entries(response).forEach(([key, value]) => {
        if (!!form.getValues()[key]) {
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
      <div className="relative mt-5 flex flex-col gap-5 rounded">
        <Form {...form}>
          <form onSubmit={functions.onSubmit}>
            <div className="bg-background flex h-full flex-col gap-5 overflow-y-scroll rounded p-6">
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
            <div className="bg-background sticky bottom-0 left-0 mt-5 flex w-full items-center justify-end gap-3 rounded px-6 py-4">
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
            </div>
          </form>
        </Form>
      </div>
    </ContentWrapper>
  )
}

export { ResumeForm }
