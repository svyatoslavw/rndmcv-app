"use client"

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@rndm/ui/components"
import { iconNames } from "lucide-react/dynamic"
import { memo, useMemo } from "react"

import { DynamicIcon } from "../types"
import { Icon } from "./Icon"

const IconPicker = () => {
  const picker = useMemo(
    () => (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>Select Icon</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex h-96 w-[28rem] max-w-md flex-wrap overflow-y-scroll">
          {Object.entries(iconNames).map(([name]) => (
            <Icon key={name} name={name as DynamicIcon} size={28} />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    []
  )

  return <>{picker}</>
}

export default memo(IconPicker)
