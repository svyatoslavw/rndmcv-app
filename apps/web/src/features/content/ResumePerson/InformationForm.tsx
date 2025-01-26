import { PlusIcon } from "lucide-react"
import { useMemo } from "react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { z } from "zod"

import { PERSONAL_INFORMATION, resumePersonSchema } from "@/shared/constants"
import { Button, FormField } from "@rndm/ui/components"

import { EditResumePersonInformation } from "./EditResumePersonInformation"

const InformationForm = () => {
  const form = useFormContext<z.infer<typeof resumePersonSchema>>()

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "information"
  })

  const informationItems = useMemo(
    () => PERSONAL_INFORMATION.filter((fld) => !fields.some((f) => f.key === fld.key)),
    [fields]
  )

  return (
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
            onClick={() => {
              console.log("@fld", fld)
              append({ text: fld.text, key: fld.key, icon: fld.icon })
            }}
          >
            <PlusIcon className="mr-2" size={18} />
            {fld.text}
          </Button>
        ))}
      </div>
    </div>
  )
}

export { InformationForm }

