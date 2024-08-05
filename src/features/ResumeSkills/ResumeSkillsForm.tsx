import { CheckIcon } from "lucide-react"
import { UseFormReturn } from "react-hook-form"
import { z } from "zod"

import { toggleStatus } from "@/entities/resume"
import { resumeSkillSchema } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"
import { Button, Form, FormControl, FormField, FormItem, Input, Textarea } from "@/shared/ui"

interface ResumeSkillsFormProps {
  heading: string
  buttonText: string
  type: "isEditing" | "isCreating"
  form: UseFormReturn<z.infer<typeof resumeSkillSchema>>
  functions: {
    onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>
  }
  state: {
    isLoading: boolean
  }
}

const ResumeSkillsForm = ({
  heading,
  buttonText,
  form,
  type,
  functions,
  state
}: ResumeSkillsFormProps) => {
  const dispatch = useAppDispatch()

  const onCancel = () => {
    dispatch(toggleStatus({ key: type, content: "skills" }))
  }

  return (
    <div className="relative mt-5 flex flex-col gap-5">
      <Form {...form}>
        <form onSubmit={functions.onSubmit}>
          <div className="flex h-[calc(100vh-16rem)] flex-col gap-5 overflow-y-scroll rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-2 text-2xl font-bold capitalize">{heading}</h2>
            <FormField
              control={form.control}
              name="skill"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      heading="Skill"
                      placeholder="Enter skill"
                      type="text"
                      name="name"
                      value={field.value}
                      onChange={field.onChange}
                      className="w-full"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      heading="Level"
                      placeholder="Enter level"
                      type="text"
                      name="name"
                      value={field.value}
                      onChange={field.onChange}
                      className="w-full"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      heading="Description"
                      placeholder="Add a description of your education entry"
                      isOptional
                      name="name"
                      value={field.value}
                      onChange={field.onChange}
                      className="min-h-20 w-full resize-none"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="sticky bottom-0 left-0 mt-5 flex w-full items-center justify-end gap-2 rounded-lg bg-white px-6 py-3 shadow-md">
            <Button onClick={onCancel} variant={"outline"}>
              Cancel
            </Button>
            <Button disabled={!form.formState.isValid || state.isLoading} type="submit">
              <CheckIcon className="mr-2" size={16} />
              {buttonText}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export { ResumeSkillsForm }
