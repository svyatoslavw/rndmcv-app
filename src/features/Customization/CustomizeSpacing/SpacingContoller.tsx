import { MinusIcon, PlusIcon } from "lucide-react"

import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

interface SpacingContollerProps {
  item: number
  title: string
  items: number[]
  step?: number
  onChange: (value: number) => void
}

const STAGE_WIDTH = 40

const SpacingContoller = ({ item, items, step = 4, onChange, title }: SpacingContollerProps) => {
  const position = items.indexOf(item) * STAGE_WIDTH

  return (
    <div className="flex w-full flex-col gap-1">
      <h1 className="text-sm font-semibold capitalize">{title}</h1>
      <div className="flex w-full justify-between">
        <div className="relative flex transition-all">
          {items.map((size, index) => (
            <button
              key={size}
              className={cn(
                "h-full w-10 cursor-pointer border-r border-white bg-gray-100 transition-all hover:bg-gray-200 active:bg-gray-200 dark:border-secondary dark:bg-background dark:hover:bg-neutral-600",
                {
                  ["rounded-r-xl border-r-0"]: index === items.length - 1,
                  ["rounded-l-xl"]: index === 0
                }
              )}
              onClick={() => onChange(size)}
            />
          ))}
          <div
            className={cn("absolute h-full w-10 rounded-lg bg-primary transition-all", {
              [`left-[${position}px]`]: true
            })}
          />
        </div>
        <div className="flex gap-1">
          <Button
            disabled={item === items[0]}
            size={"icon"}
            variant={"outline"}
            onClick={() => onChange(item - step)}
          >
            <MinusIcon size={16} />
          </Button>
          <Button
            disabled={item === items[items.length - 1]}
            size={"icon"}
            variant={"outline"}
            onClick={() => onChange(item + step)}
          >
            <PlusIcon size={16} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export { SpacingContoller }
