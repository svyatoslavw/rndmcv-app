import { useAddResumeName } from "./useAddResumeName"

import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input } from "@/shared/ui"

const AddResumeName = () => {
  const { form, functions } = useAddResumeName()

  return (
    <Form {...form}>
      <form className="mt-5 rounded-xl bg-background p-6" onSubmit={functions.onSubmit}>
        <h1 className="mb-3 text-2xl font-bold">Resume Name</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  autoCapitalize="none"
                  autoComplete="name"
                  {...field}
                  className="w-full"
                  placeholder="Type your name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-5 flex w-full items-center justify-center gap-4">
          <Button type="button" variant={"ghost"} onClick={functions.onSkip}>
            Skip
          </Button>
          <Button>Continue</Button>
        </div>
      </form>
    </Form>
  )
}

export { AddResumeName }
