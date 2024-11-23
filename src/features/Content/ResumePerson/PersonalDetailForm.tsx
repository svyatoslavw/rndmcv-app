import { CameraIcon } from "lucide-react"
import { useFormContext } from "react-hook-form"
import { z } from "zod"

import { ResumeFormField } from "@/entities/resume"
import { resumePersonSchema } from "@/shared/constants"
import { FormField } from "@/shared/ui"

const PersonalDetailsForm = () => {
  const form = useFormContext<z.infer<typeof resumePersonSchema>>()

  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold">Edit personal details</h2>
      <div className="flex w-full flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex w-4/5 flex-col gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <ResumeFormField<typeof resumePersonSchema>
                  field={field}
                  fieldName="name"
                  type="default"
                />
              )}
            />
            <FormField
              control={form.control}
              name="job"
              render={({ field }) => (
                <ResumeFormField<typeof resumePersonSchema>
                  field={field}
                  fieldName="job"
                  type="default"
                />
              )}
            />
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/50 text-primary">
            <CameraIcon />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <ResumeFormField<typeof resumePersonSchema>
                field={field}
                fieldName="email"
                type="default-half"
              />
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <ResumeFormField<typeof resumePersonSchema>
                field={field}
                fieldName="phone"
                type="default-half"
              />
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <ResumeFormField<typeof resumePersonSchema>
              field={field}
              fieldName="address"
              type="default"
            />
          )}
        />
      </div>
    </div>
  )
}

export { PersonalDetailsForm }
