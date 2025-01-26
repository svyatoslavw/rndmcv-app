"use client"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { ControllerRenderProps, Path } from "react-hook-form"
import { TypeOf, ZodSchema } from "zod"

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
} from "@rndm/ui/components"

import type { TFormFieldType } from "./ResumeForm"

interface ResumeFormFieldProps<TSchema extends ZodSchema> {
  field: ControllerRenderProps<TypeOf<TSchema>, Path<TypeOf<TSchema>>>
  fieldName: Path<TypeOf<TSchema>>
  type: TFormFieldType
  disabled?: boolean
  isRecomended?: boolean
  isOptional?: boolean
  isRequired?: boolean
}

const ResumeFormField = <TSchema extends ZodSchema>({
  field,
  fieldName,
  type,
  disabled,
  isRecomended,
  isOptional,
  isRequired
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
                  <h6 className="mb-0.5 ml-2 text-sm font-semibold capitalize">
                    {type === "startDate" ? "Start Date" : "End Date"}
                  </h6>
                  <Button
                    className={cn(
                      "w-full space-y-0 pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                    disabled={disabled}
                    type="button"
                    variant={"outline"}
                  >
                    {field.value ? format(new Date(field.value), "PPP") : <span>Pick a date</span>}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </div>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto p-0">
              <Calendar
                initialFocus
                disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                mode="single"
                selected={new Date(field.value)}
                onSelect={(date) => field.onChange(date?.toISOString())}
              />
            </PopoverContent>
          </Popover>
        ) : (
          <FormControl>
            <Input
              disabled={disabled}
              heading={type === "startDate" ? "Start Date" : "End Date"}
              placeholder="Enter a date"
              value={field.value}
              onChange={field.onChange}
            />
          </FormControl>
        )}
        {type === "endDate" && (
          <FormDescription>
            <Label className="flex items-center gap-2">
              <Checkbox
                checked={isChecked}
                disabled={disabled}
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
            className="min-h-32 w-full resize-none"
            disabled={disabled}
            heading={fieldName}
            placeholder="Add description"
            value={field.value}
            onChange={field.onChange}
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
          className="w-full"
          disabled={disabled}
          heading={fieldName}
          isOptional={isOptional}
          isRecommended={isRecomended}
          isRequired={isRequired}
          placeholder={`Enter your ${fieldName}`}
          value={field.value}
          onChange={field.onChange}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

export { ResumeFormField }

