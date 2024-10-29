"use client"

import { CameraIcon, CheckIcon, LinkIcon, Loader2Icon, PlusIcon, X } from "lucide-react"
import { useFieldArray } from "react-hook-form"

import { EditResumePersonInformation } from "./EditResumePersonInformation"
import { useEditResumePersonForm } from "./useEditResumePersonForm"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { ContentWrapper, selectGeneralResume, toggleStatus } from "@/entities/resume"
import { ResumeFormField } from "@/entities/resume/ui/ResumeFormField"
import { PERSONAL_INFORMATION, PERSONAL_LINKS, resumePersonSchema } from "@/shared/lib/constants"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input
} from "@/shared/ui"

const EditResumePerson = () => {
  const dispatch = useAppDispatch()
  const { person: content } = useAppSelector(selectGeneralResume)
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
    <ContentWrapper>
      <div className="relative mt-5 flex flex-col gap-5 rounded-2xl">
        <Form {...form}>
          <form onSubmit={functions.onSubmit}>
            <div className="flex h-full flex-col gap-5 overflow-y-scroll rounded-2xl bg-white p-6 shadow dark:bg-secondary">
              <div>
                <h2 className="mb-2 text-2xl font-bold">Edit personal details</h2>
                <div className="flex w-full flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex w-4/5 flex-col gap-3">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <ResumeFormField<typeof resumePersonSchema>
                            field={field}
                            fieldName="name"
                            type="default"
                          />
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="job"
                        render={({ field }) => (
                          <ResumeFormField<typeof resumePersonSchema>
                            field={field}
                            fieldName="job"
                            type="default"
                          />
                        )}
                      />
                    </div>
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/50 text-primary">
                      <CameraIcon />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <ResumeFormField<typeof resumePersonSchema>
                          field={field}
                          fieldName="email"
                          type="default-half"
                        />
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <ResumeFormField<typeof resumePersonSchema>
                          field={field}
                          fieldName="phone"
                          type="default-half"
                        />
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <ResumeFormField<typeof resumePersonSchema>
                        field={field}
                        fieldName="address"
                        type="default"
                      />
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
                      <EditResumePersonInformation
                        field={field}
                        fieldKey={fields[index].key}
                        index={index}
                        remove={remove}
                      />
                    )}
                  />
                ))}
                <div className="flex flex-wrap gap-2">
                  {informationItems.map((fld) => (
                    <Button
                      key={fld.key}
                      size={"sm"}
                      type="button"
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
                                  <Input {...field} />
                                  <Button
                                    className="mt-2 w-full"
                                    type="button"
                                    onClick={() =>
                                      updateLink(index, { ...links[index], url: field.value })
                                    }
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
            </div>
            <div className="sticky bottom-0 left-0 mt-5 flex w-full items-center justify-end gap-2 rounded-2xl bg-white px-6 py-3 shadow-sm dark:bg-secondary">
              <Button type="button" variant={"outline"} onClick={onCancel}>
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
    </ContentWrapper>
  )
}

export { EditResumePerson }
