import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { createResumeItem, toggleStatus } from "@/entities/resume"
import { ISkill, resumeSkillSchema } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"

export const useCreateResumeSkills = () => {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof resumeSkillSchema>>({
    resolver: zodResolver(resumeSkillSchema),
    defaultValues: {
      skill: "",
      level: "",
      description: ""
    }
  })

  const onSubmit = form.handleSubmit((values: z.infer<typeof resumeSkillSchema>) => {
    dispatch(createResumeItem({ key: "skills", item: values as ISkill }))
    dispatch(toggleStatus({ key: "isCreating", content: "skills" }))
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
