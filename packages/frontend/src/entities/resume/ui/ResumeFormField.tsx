import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { ControllerRenderProps, Path } from "react-hook-form"
import { TypeOf, ZodSchema } from "zod"

import type { TFormFieldType } from "./ResumeForm"
import { cn } from "@/shared/lib/utils"
import {
  Button,
  Calendar,
  Checkbox,
  FormControl,
  FormDescription,
  FormItem,
  FormMessage,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea
} from "@/shared/ui"

interface ResumeFormFieldProps<TSchema extends ZodSchema> {
  field: ControllerRenderProps<TypeOf<TSchema>, Path<TypeOf<TSchema>>>
  fieldName: Path<TypeOf<TSchema>>
  type: TFormFieldType
}

const ResumeFormField = <TSchema extends ZodSchema>({
  field,
  fieldName,
  type
}: ResumeFormFieldProps<TSchema>) => {
  const [isChecked, setIsChecked] = useState(false)
  if (type === "startDate" || type === "endDate") {
    return (
      <FormItem className="flex w-full flex-col">
        {!isChecked && field.value !== "Present" ? (
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <div>
                  <h6 className="ml-2 text-sm font-bold capitalize">
                    {type === "startDate" ? "Start Date" : "End Date"}
                  </h6>
                  <Button
                    type="button"
                    variant={"outline"}
                    className={cn(
                      "w-full space-y-0 pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? format(new Date(field.value), "PPP") : <span>Pick a date</span>}
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
              heading={type === "startDate" ? "Start Date" : "End Date"}
              value={field.value}
              onChange={field.onChange}
              placeholder="Enter a date"
            />
          </FormControl>
        )}
        {type === "endDate" && (
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
        )}
        <FormMessage />
      </FormItem>
    )
  }

  if (type === "textarea") {
    return (
      <FormItem className="col-span-full">
        <FormControl>
          <Textarea
            heading={type}
            value={field.value}
            onChange={field.onChange}
            placeholder="Add description"
            className="min-h-20 w-full resize-none"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )
  }

  return (
    <FormItem className={type === "default" ? "col-span-full" : "w-full"}>
      <FormControl>
        <Input
          heading={fieldName}
          value={field.value}
          onChange={field.onChange}
          placeholder={`Enter ${fieldName}`}
          className="w-full"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

export { ResumeFormField }
