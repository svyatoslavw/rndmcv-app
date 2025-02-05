import { resumePersonSchema } from "@/shared/constants"
import { FormField } from "@rndm/ui/components"
import { FieldArrayWithId, UseFieldArrayRemove } from "react-hook-form"
import { z } from "zod"
import { InformationItem } from "./InformationItem"

type FieldsProps = {
  fields: FieldArrayWithId<z.infer<typeof resumePersonSchema>, "information", "id">[]
  remove: UseFieldArrayRemove
}

export const InformationFields = ({ fields, remove }: FieldsProps) => {
  return (
    <div className="space-y-3">
      {fields.map((field, index) => (
        <FormField
          key={field.id}
          name={`information.${index}.text`}
          render={({ field }) => (
            <InformationItem
              field={field}
              fieldKey={fields[index].key}
              index={index}
              remove={remove}
            />
          )}
        />
      ))}
    </div>
  )
}
