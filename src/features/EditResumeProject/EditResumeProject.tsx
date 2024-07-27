import { useAppSelector } from "@/shared/lib/store"
import { Button, Form, FormControl, FormField, FormItem, Input } from "@/shared/ui"
import { Textarea } from "@/shared/ui/textarea"
import { CheckIcon } from "lucide-react"
import { useEditResumeProjectForm } from "./useEditResumeProjectForm"

const EditResumeProject = () => {
  const project = useAppSelector((state) => state.content.projects.selected)

  const { form, functions } = useEditResumeProjectForm({ project: project! })

  return (
    <div className="relative mt-5 flex flex-col gap-5">
      <Form {...form}>
        <form onSubmit={functions.onSubmit}>
          <div className="flex h-[calc(100vh-10rem)] flex-col gap-5 overflow-y-scroll rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-2 text-2xl font-bold">Edit Project</h2>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      heading="Project title"
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
            <Button variant={"outline"}>Cancel</Button>
            <Button type="submit">
              <CheckIcon className="mr-2" size={16} />
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export { EditResumeProject }
