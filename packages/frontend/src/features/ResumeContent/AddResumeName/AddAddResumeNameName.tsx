import { useAddResumeName } from "./useAddResumeName"
import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input } from "@/shared/ui"

const AddResumeName = () => {
  const { form, functions } = useAddResumeName()
  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className="mt-5 rounded-xl bg-white p-6">
        <h1 className="mb-3 text-2xl font-bold">Resume Name</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  autoComplete="name"
                  autoCapitalize="none"
                  {...field}
                  className="w-full"
                  placeholder="Enter Resume Name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-5 flex w-full items-center justify-center gap-4">
          <Button onClick={functions.onSkip} type="button" variant={"ghost"}>
            Skip
          </Button>
          <Button size={"lg"}>Save</Button>
        </div>
      </form>
    </Form>
  )
}

export { AddResumeName }
