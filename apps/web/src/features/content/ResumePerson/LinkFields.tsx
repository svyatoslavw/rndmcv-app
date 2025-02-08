import { resumePersonSchema } from "@/shared/constants"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input
} from "@rndm/ui/components"
import { LinkIcon, X } from "lucide-react"
import { FieldArrayWithId } from "react-hook-form"
import { z } from "zod"

type LinkFieldsProps = {
  fields: FieldArrayWithId<z.infer<typeof resumePersonSchema>, "links", "id">[]
  onRemove: (index: number) => void
  onUpdate: (index: number, value: any) => void
}

export const LinkFields = ({ fields, onRemove, onUpdate }: LinkFieldsProps) => {
  return (
    <>
      {fields.map((link, index) => (
        <div key={link.id} className="flex gap-2">
          <FormField
            name={`links.${index}.text`}
            render={({ field }) => (
              <FormItem className="my-3 flex items-center gap-2 space-y-0">
                <FormControl>
                  <Input {...field} placeholder="https://example.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name={`links.${index}.url`}
            render={({ field }) => (
              <FormItem className="my-3 flex items-center gap-2 space-y-0">
                <FormControl>
                  <div className="flex gap-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button type="button" variant={link.url ? "default" : "secondary"}>
                          <LinkIcon className="mr-2" size={16} />
                          Link
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Link URL</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Input autoFocus {...field} />
                        <Button
                          className="mt-2 w-full"
                          type="button"
                          onClick={() => onUpdate(index, { ...fields[index], url: field.value })}
                        >
                          Add
                        </Button>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button
                      size="icon"
                      type="button"
                      variant="ghost"
                      onClick={() => onRemove(index)}
                    >
                      <X color="gray" />
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      ))}
    </>
  )
}
