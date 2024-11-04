import { LinkIcon, PlusIcon, X } from "lucide-react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { z } from "zod"

import { PERSONAL_LINKS, resumePersonSchema } from "@/shared/lib/constants"
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
} from "@/shared/ui"

const LinksForm = () => {
  const form = useFormContext<z.infer<typeof resumePersonSchema>>()

  const {
    fields: links,
    append: appendLink,
    remove: removeLink,
    update: updateLink
  } = useFieldArray({
    control: form.control,
    name: "links"
  })

  const linkItems = PERSONAL_LINKS.filter((fld) => !links.some((f) => f.key === fld.key))

  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold">Links</h2>
      {links.map((link, index) => (
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
                        <Button
                          type="button"
                          variant={link.url ? "default" : "secondary"}
                          onClick={() => removeLink(index)}
                        >
                          <LinkIcon className="mr-2" size={16} />
                          Link
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Link URL</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {/* eslint-disable-next-line */}
                        <Input autoFocus {...field} />
                        <Button
                          className="mt-2 w-full"
                          type="button"
                          onClick={() => updateLink(index, { ...links[index], url: field.value })}
                        >
                          Add
                        </Button>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button
                      size="icon"
                      type="button"
                      variant={"ghost"}
                      onClick={() => removeLink(index)}
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
      <div className="flex flex-wrap gap-2">
        {linkItems.map((fld) => (
          <Button
            key={fld.url}
            size={"sm"}
            type="button"
            variant={"secondary"}
            onClick={() =>
              appendLink({
                key: fld.key,
                text: fld.text,
                url: "",
                icon: fld.icon
              })
            }
          >
            <PlusIcon className="mr-2" size={18} />
            {fld.text}
          </Button>
        ))}
      </div>
    </div>
  )
}

export { LinksForm }
