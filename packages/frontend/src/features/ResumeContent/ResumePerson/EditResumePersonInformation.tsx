import { format } from "date-fns"
import { CalendarIcon, X } from "lucide-react"
import { ControllerRenderProps, FieldValues, UseFieldArrayRemove } from "react-hook-form"

import { cn } from "@/shared/lib/utils"
import {
  Button,
  Calendar,
  FormControl,
  FormItem,
  FormMessage,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/shared/ui"

interface EditResumePersonInformationProps {
  fieldKey: string
  field: ControllerRenderProps<FieldValues, string>
  remove: UseFieldArrayRemove
  index: number
}

const EditResumePersonInformation = ({
  fieldKey,
  field,
  index,
  remove
}: EditResumePersonInformationProps) => {
  return (
    <FormItem className="my-3 flex w-2/4 items-center gap-2 space-y-0">
      <FormControl>
        {fieldKey !== "date" ? (
          <Input className="w-full" value={field.value} onChange={field.onChange} />
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant={"outline"}
                className={cn(
                  "w-full space-y-0 text-left font-normal",
                  !field.value && "text-muted-foreground"
                )}
              >
                {/\d/.test(field.value)
                  ? format(new Date(field.value), "PPP")
                  : format("1900-01-01", "PPP")}

                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
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
        )}
      </FormControl>
      <Button type="button" size={"icon"} variant={"ghost"} onClick={() => remove(index)}>
        <X color="gray" />
      </Button>
      <FormMessage />
    </FormItem>
  )
}
export { EditResumePersonInformation }
