"use client"

import type { TypeIconName } from "../lib/types"

import dynamicIconImports from "lucide-react/dynamicIconImports"
import { memo, useMemo } from "react"


import { Icon } from "./icons/Icon"

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/shared/ui"

const IconPicker = () => {
  const picker = useMemo(
    () => (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>Select Icon</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex h-96 w-[28rem] max-w-md flex-wrap overflow-y-scroll">
          {Object.entries(dynamicIconImports).map(([name]) => (
            <Icon key={name} name={name as TypeIconName} size={28} />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    []
  )

  return <>{picker}</>
}

export default memo(IconPicker)
