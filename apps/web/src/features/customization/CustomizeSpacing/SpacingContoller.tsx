import { Button } from "@rndm/ui/components"
import { MinusIcon, PlusIcon } from "lucide-react"

import { cn } from "@/shared/lib/utils"

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
                "dark:border-secondary dark:border-background h-full w-10 cursor-pointer border-y-4 border-r-2 border-white bg-gray-100 transition-all hover:bg-gray-200 active:bg-gray-200 dark:bg-black dark:hover:bg-neutral-900",
                {
                  ["rounded-r-lg border-r-0"]: index === items.length - 1,
                  ["rounded-l-lg"]: index === 0
                }
              )}
              onClick={() => onChange(size)}
            />
          ))}
          <div
            className={cn("bg-primary absolute h-full w-10 rounded transition-all", {
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
