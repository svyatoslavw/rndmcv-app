"use client"

import { format } from "date-fns"
import { CalendarIcon, CheckIcon, LinkIcon, Loader2Icon, PlusIcon, X } from "lucide-react"
import { useFieldArray } from "react-hook-form"

import { useEditResumePersonForm } from "./useEditResumePersonForm"
import { toggleStatus } from "@/entities/resume"
import { PERSONAL_INFORMATION, PERSONAL_LINKS } from "@/shared/lib"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import {
  Button,
  Calendar,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
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

const EditResumePerson = () => {
  const content = useAppSelector((state) => state.resume.person)
  const dispatch = useAppDispatch()
  const { form, functions, state } = useEditResumePersonForm({ content })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "information"
  })

  const {
    fields: links,
    append: appendLink,
    remove: removeLink,
    update: updateLink
  } = useFieldArray({
    control: form.control,
    name: "links"
  })

  const informationItems = PERSONAL_INFORMATION.filter(
    (fld) => !fields.some((f) => f.key === fld.key)
  )
  const linkItems = PERSONAL_LINKS.filter((fld) => !links.some((f) => f.key === fld.key))

  const onCancel = () => {
    dispatch(toggleStatus({ key: "isEditing", content: "person" }))
  }
  return (
    <div className="relative mt-5 flex flex-col gap-5">
      <Form {...form}>
        <form onSubmit={functions.onSubmit}>
          <div className="flex h-[calc(100vh-16rem)] flex-col gap-5 overflow-y-scroll rounded-lg bg-white p-6 shadow-md">
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
                              placeholder="Your name"
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
                              placeholder="Your job"
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
                  <div className="h-20 w-20 rounded-full bg-primary/50"></div>
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
                            placeholder="Your email"
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
                            placeholder="Your phone"
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
                          placeholder="Your address"
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
              {fields.map((field, index) => (
                <FormField
                  key={field.id}
                  name={`information.${index}.text`}
                  render={({ field }) => (
                    <FormItem className="my-3 flex w-2/5 items-center gap-2 space-y-0">
                      <FormControl>
                        {fields[index].key !== "date" ? (
                          <Input {...field} />
                        ) : (
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                type="button"
                                variant={"outline"}
                                className={cn(
                                  "w-[calc(100%-2.5rem)] space-y-0 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {/\d/.test(field.value)
                                  ? format(field.value, "PPP")
                                  : format("1900-01-01", "PPP")}

                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={new Date(field.value)}
                                onSelect={(date) => field.onChange(date?.toISOString())}
                                disabled={(date) =>
                                  date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        )}
                      </FormControl>
                      <Button
                        type="button"
                        size={"icon"}
                        variant={"secondary"}
                        onClick={() => remove(index)}
                      >
                        <X color="gray" />
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <div className="flex flex-wrap gap-2">
                {informationItems.map((fld) => (
                  <Button
                    key={fld.key}
                    type="button"
                    size={"sm"}
                    variant={"secondary"}
                    onClick={() => append({ text: fld.text, key: fld.key, icon: fld.icon })}
                  >
                    <PlusIcon className="mr-2" size={18} />
                    {fld.text}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-2 text-2xl font-bold">Links</h2>
              {links.map((link, index) => (
                <div className="flex gap-2" key={link.id}>
                  <FormField
                    name={`links.${index}.text`}
                    render={({ field }) => (
                      <FormItem className="my-3 flex items-center gap-2 space-y-0">
                        <FormControl>
                          <Input {...field} placeholder="https://example" />
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
                                  <LinkIcon size={16} className="mr-2" />
                                  Link
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuLabel>Link URL</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <Input {...field} />
                                <div className="mt-2 flex w-full gap-1">
                                  <Button
                                    onClick={() => {
                                      updateLink(index, { ...links[index], url: field.value })
                                    }}
                                    type="button"
                                    className="w-full"
                                  >
                                    Add
                                  </Button>
                                  <Button type="button" className="w-full" variant="outline">
                                    Cancel
                                  </Button>
                                </div>
                              </DropdownMenuContent>
                            </DropdownMenu>
                            <Button
                              type="button"
                              variant={"ghost"}
                              size="icon"
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
                    type="button"
                    size={"sm"}
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
          </div>
          <div className="sticky bottom-0 left-0 mt-5 flex w-full items-center justify-end gap-2 rounded-lg bg-white px-6 py-3 shadow-md">
            <Button onClick={onCancel} type="button" variant={"outline"}>
              Cancel
            </Button>
            <Button type="submit">
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
  )
}

export { EditResumePerson }
