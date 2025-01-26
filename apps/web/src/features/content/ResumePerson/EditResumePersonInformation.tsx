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
} from "@rndm/ui/components"

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
                className={cn(
                  "w-full space-y-0 text-left font-normal",
                  !field.value && "text-muted-foreground"
                )}
                type="button"
                variant={"outline"}
              >
                {/\d/.test(field.value)
                  ? format(new Date(field.value), "PPP")
                  : format("1900-01-01", "PPP")}

                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
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
        )}
      </FormControl>
      <Button size={"icon"} type="button" variant={"ghost"} onClick={() => remove(index)}>
        <X color="gray" />
      </Button>
      <FormMessage />
    </FormItem>
  )
}

export { EditResumePersonInformation }

