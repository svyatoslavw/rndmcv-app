import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import {
  Button,
  Calendar,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/shared/ui"
import { format } from "date-fns"
import { CalendarIcon, CheckIcon, Loader2Icon } from "lucide-react"
import { useEditResumePersonalDetailsForm } from "./useEditResumePersonalDetails"

const EditResumePersonalDetails = () => {
  const content = useAppSelector((state) => state.content.person)

  const { form, functions, state } = useEditResumePersonalDetailsForm({ content })

  return (
    <div className="mt-5 rounded-xl">
      <div className="relative flex flex-col gap-5">
        <Form {...form}>
          <form onSubmit={functions.onSubmit}>
            <div className="flex h-[calc(100vh-10rem)] flex-col gap-5 overflow-y-scroll rounded-lg bg-white p-6 shadow-md">
              <div>
                <h2 className="mb-2 text-2xl font-bold">Edit personal details</h2>
                <div className="flex w-full flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex w-4/5 flex-col gap-3">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel />
                            <FormControl>
                              <Input
                                heading="Full name"
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
                        name="job"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel />
                            <FormControl>
                              <Input
                                heading="Job title"
                                isOptional
                                type="text"
                                name="job"
                                value={field.value}
                                onChange={field.onChange}
                                className="w-full"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="h-20 w-20 rounded-full bg-red-100"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel />
                          <FormControl>
                            <Input
                              heading="Email"
                              type="email"
                              name="email"
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
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel />
                          <FormControl>
                            <Input
                              type="tel"
                              name="phone"
                              heading="Phone"
                              value={field.value}
                              onChange={field.onChange}
                              className="w-full"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel />
                        <FormControl>
                          <Input
                            heading="Address"
                            type="text"
                            name="address"
                            value={field.value}
                            onChange={field.onChange}
                            className="w-full"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="w-full">
                <h2 className="mb-2 text-2xl font-bold">Personal information</h2>
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="ml-2 text-sm font-bold capitalize">
                        Date of birth
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full space-y-0 pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={new Date(field.value)}
                            onSelect={(date) => field.onChange(date?.toISOString())}
                            disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="sticky bottom-0 left-0 mt-5 flex w-full items-center justify-end gap-2 rounded-lg bg-white px-6 py-3 shadow-md">
              <Button variant={"outline"}>Cancel</Button>
              <Button
                type="submit"
                //onClick={onEditChange}
              >
                {state.isLoading ? (
                  <Loader2Icon className="mr-2 animate-spin" size={16} />
                ) : (
                  <CheckIcon className="mr-2" size={16} />
                )}
                Save
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export { EditResumePersonalDetails }
