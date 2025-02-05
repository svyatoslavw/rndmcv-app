import { useFieldArray, useFormContext } from "react-hook-form"
import { z } from "zod"

import { PERSONAL_LINKS, resumePersonSchema } from "@/shared/constants"
import { LinkButtons } from "./LinkButtons"
import { LinkFields } from "./LinkFields"

const LinksForm = () => {
  const form = useFormContext<z.infer<typeof resumePersonSchema>>()

  const {
    fields: links,
    append,
    remove,
    update
  } = useFieldArray({
    control: form.control,
    name: "links"
  })

  const linkItems = PERSONAL_LINKS.filter((fld) => !links.some((f) => f.key === fld.key))

  const handleAppendLink = (fld: (typeof PERSONAL_LINKS)[number]) => {
    append({
      key: fld.key,
      text: fld.text,
      url: "",
      icon: fld.icon
    })
  }

  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold">Links</h2>
      <LinkFields fields={links} onRemove={remove} onUpdate={update} />
      <LinkButtons items={linkItems} onAppend={handleAppendLink} />
    </div>
  )
}

export { LinksForm }
