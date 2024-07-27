import { toggleState } from "@/entities/resume/model/resume.slice"
import { resumeEducationSchema } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import {
  Button,
  Calendar,
  Checkbox,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea
} from "@/shared/ui"
import { format } from "date-fns"
import { CalendarIcon, CheckIcon } from "lucide-react"
import { useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { z } from "zod"

interface ResumeEducationFormProps {
  heading: string
  buttonText: string
  form: UseFormReturn<z.infer<typeof resumeEducationSchema>>
  functions: {
    onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>
  }
  state: {
    isLoading: boolean
  }
}

const ResumeEducationForm = ({
  heading,
  buttonText,
  form,
  functions,
  state
}: ResumeEducationFormProps) => {
  const [isChecked, setIsChecked] = useState(false)

  const dispatch = useAppDispatch()

  const onCancel = () => {
    dispatch(toggleState({ key: "isCreating", content: "education" }))
  }

  return (
    <div className="relative mt-5 flex flex-col gap-5">
      <Form {...form}>
        <form onSubmit={functions.onSubmit}>
          <div className="flex h-[calc(100vh-10rem)] flex-col gap-5 overflow-y-scroll rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-2 text-2xl font-bold capitalize">{heading}</h2>
            <FormField
              control={form.control}
              name="school"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      heading="School"
                      placeholder="Enter school / university"
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
              name="degree"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      heading="Degree"
                      placeholder="Enter degree / Field of study / Exchange Semester"
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
            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        heading="City"
                        placeholder="Enter city"
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
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        heading="Country"
                        placeholder="Enter country"
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
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <div>
                            <h6 className="ml-2 text-sm font-bold capitalize">Date of birth</h6>
                            <Button
                              type="button"
                              variant={"outline"}
                              className={cn(
                                "w-full space-y-0 pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </div>
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
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    {!isChecked && field.value !== "Present" ? (
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <div>
                              <h6 className="ml-2 text-sm font-bold capitalize">Date of birth</h6>
                              <Button
                                type="button"
                                variant={"outline"}
                                className={cn(
                                  "w-full space-y-0 pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </div>
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
                    ) : (
                      <FormControl>
                        <Input
                          heading="Date of birth"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                    )}
                    <FormDescription>
                      <Label className="flex items-end gap-2">
                        <Checkbox
                          checked={isChecked}
                          onCheckedChange={(ch) => {
                            setIsChecked(!isChecked)
                            ch ? field.onChange("Present") : field.onChange("")
                          }}
                        />
                        Present
                      </Label>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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

export { ResumeEducationForm }
