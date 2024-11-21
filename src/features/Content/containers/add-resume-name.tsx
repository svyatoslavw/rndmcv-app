import { useState } from "react"

import { selectResume } from "@/entities/resume"
import { addResumeName } from "@/entities/resume/services/add-name"
import { getStoreFunctions } from "@/entities/resume/services/get-store-functions"
import { Button, Input } from "@/shared/ui"

const AddResumeName = () => {
  const [name, setName] = useState("")
  const { dataStore, dispatch } = getStoreFunctions(selectResume)

  const addName = () => addResumeName(dispatch, name)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)

  return (
    <form className="mt-5 rounded-xl bg-background p-6">
      <h1 className="mb-3 text-2xl font-bold">Resume Name</h1>
      <Input
        autoCapitalize="none"
        autoComplete="name"
        className="w-full"
        placeholder="Type your name"
        onChange={onChange}
      />
      <div className="mt-5 flex w-full items-center justify-center gap-4">
        <Button type="button" onClick={addName} variant={"ghost"}>
          Skip
        </Button>
        <Button onClick={addName}>Continue</Button>
      </div>
    </form>
  )
}

export { AddResumeName }
