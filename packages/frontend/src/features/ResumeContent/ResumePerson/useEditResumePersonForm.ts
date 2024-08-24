"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toggleStatus, updatePersonalDetails } from "@/entities/resume"
import { type IPerson, IPersonInfo, IPersonLink } from "@/shared/lib"
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
          key: z.string({ message: "Key must have more than 1 character" }),
          text: z.string({ message: "Text must have more than 1 character" }),
          icon: z.string()
        })
      )
      .max(7),

    links: z.array(
      z.object({
        key: z.string({ message: "Key must have more than 1 character" }),
        text: z.string({ message: "Text must have more than 1 character" }),
        url: z.string({ message: "Link must have more than 1 character" }),
        icon: z.string()
      })
    )
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
      links: content.links,
      information: content.information
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

    dispatch(
      updatePersonalDetails({ key: "information", value: values.information as IPersonInfo[] })
    )
    dispatch(updatePersonalDetails({ key: "links", value: values.links as IPersonLink[] }))
    dispatch(toggleStatus({ key: "isEditing", content: "person" }))
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
