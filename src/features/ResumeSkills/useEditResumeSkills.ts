import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toggleStatus, updateResumeItemDetails } from "@/entities/resume"
import { ISkill, resumeSkillSchema } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"

export const useEditResumeEducation = ({ skills }: { skills: ISkill }) => {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof resumeSkillSchema>>({
    resolver: zodResolver(resumeSkillSchema),
    defaultValues: {
      skill: skills.skill || "",
      level: skills.level || "",
      description: skills.description || ""
    }
  })

  const onSubmit = form.handleSubmit((values: z.infer<typeof resumeSkillSchema>) => {
    for (const [key, value] of Object.entries(values)) {
      dispatch(updateResumeItemDetails({ key: "skills", field: key as keyof ISkill, value }))
    }
    dispatch(toggleStatus({ key: "isEditing", content: "skills" }))
  })

  return {
    form,
    functions: { onSubmit },
    state: { isLoading: form.formState.isSubmitting }
  }
}
