"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toggleStatus, updatePersonalDetails } from "@/entities/resume"
import { type IPerson, IPersonInformation } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"

export const editResumeSchema = z
  .object({
    name: z.string({ message: "Name must have than 1 character" }),
    job: z.string().optional(),
    email: z.string({ message: "Email must have than 1 character" }),
    phone: z.string({ message: "Phone must have than 1 character" }),
    address: z.string({ message: "Address must have than 1 character" }),
    date: z.string({ message: "Date must have than 1 character" }).optional(),
    information: z
      .array(
        z.object({
          text: z.string({ message: "Text must have more than 1 character" }),
          value: z.string({ message: "Value must have more than 1 character" })
        })
      )
      .max(7)
  })
  .required()

export const useEditResumePersonForm = ({ content }: { content: IPerson }) => {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof editResumeSchema>>({
    resolver: zodResolver(editResumeSchema),
    defaultValues: {
      name: content.name,
      job: content.job,
      email: content.email,
      phone: content.phone,
      address: content.address,
      date: content.date,
      information: Object.entries(content.information).map(([key, value]) => ({
        value: key,
        text: value
      })) as { value: string; text: string }[]
    }
  })

  const onSubmit = form.handleSubmit((values: z.infer<typeof editResumeSchema>) => {
    const keysToUpdate = ["name", "job", "email", "phone", "address", "date"] as Array<
      keyof IPerson
    >

    keysToUpdate.forEach((key) => {
      const value = values[key]
      if (value) {
        dispatch(updatePersonalDetails({ key, value: value as string }))
      }
    })

    const information: IPersonInformation = values.information.reduce((acc, curr) => {
      if (curr.value && curr.text) {
        acc[curr.value as keyof IPersonInformation] = curr.text
      }
      return acc
    }, {} as IPersonInformation)

    dispatch(updatePersonalDetails({ key: "information", value: information }))
    dispatch(toggleStatus({ key: "isEditing", content: "person" }))
    console.log("@content", content)
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
