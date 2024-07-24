import { ProfileKey, toggleEditing, updateContent } from "@/entities/resume/model/content.slice"
import { IContent } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const editResumeSchema = z
  .object({
    name: z.string({ message: "Name must have than 1 character" }),
    job: z.string().optional(),
    email: z.string({ message: "Email must have than 1 character" }),
    phone: z.string({ message: "Phone must have than 1 character" }),
    address: z.string({ message: "Address must have than 1 character" }),
    date: z.string({ message: "Date must have than 1 character" }).optional()
  })
  .required()

export const useEditResumeDetailsForm = ({ content }: { content: IContent }) => {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof editResumeSchema>>({
    resolver: zodResolver(editResumeSchema),
    defaultValues: {
      name: content.name,
      job: content.job,
      email: content.email,
      phone: content.phone,
      address: content.address,
      date: content.date
    }
  })

  const onSubmit = form.handleSubmit((values: z.infer<typeof editResumeSchema>) => {
    for (const [key, value] of Object.entries(values)) {
      dispatch(updateContent({ key: key as ProfileKey, value }))
    }
    dispatch(toggleEditing())
  })

  return {
    form,
    functions: { onSubmit }
  }
}
