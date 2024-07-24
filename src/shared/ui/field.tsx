import * as React from "react"
import { Input, type InputProps } from "./input"
import { Label } from "./label"

const Field = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <Label>
      <h4>Test</h4>
      <Input ref={ref} {...props} />
    </Label>
  )
})

export { Field }
