import { CheckCircle2Icon } from "lucide-react"

export const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle2Icon size={18} className="my-auto text-green-400" />
    <p className="pt-0.5 text-sm text-zinc-700 dark:text-zinc-300">{text}</p>
  </div>
)
