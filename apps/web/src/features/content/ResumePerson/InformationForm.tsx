import { useMemo } from "react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { z } from "zod"

import { PERSONAL_INFORMATION, resumePersonSchema } from "@/shared/constants"
import { InformationButtons } from "./InformationButtons"
import { InformationFields } from "./InformationFields"

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

  const handleAppend = (fld: (typeof PERSONAL_INFORMATION)[number]) => {
    const value =
      fld.key === "date"
        ? { text: new Date().toISOString(), key: fld.key, icon: fld.icon }
        : { text: fld.text, key: fld.key, icon: fld.icon }
    append(value)
  }

  return (
    <div className="w-full">
      <h2 className="mb-2 text-2xl font-bold">Personal information</h2>
      <InformationFields fields={fields} remove={remove} />
      <InformationButtons items={informationItems} onAppend={handleAppend} />
    </div>
  )
}

export { InformationForm }
