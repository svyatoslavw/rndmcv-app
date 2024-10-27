"use client"

import dynamicIconImports from "lucide-react/dynamicIconImports"
import { memo, useMemo } from "react"

import type { TypeIconName } from "../lib/types"

import { Icon } from "./icons/Icon"
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/shared/ui"

const IconPicker = () => {
  const picker = useMemo(
    () => (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>Select Icon</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex h-96 w-full max-w-md flex-wrap overflow-y-scroll">
          {Object.entries(dynamicIconImports).map(([name]) => (
            <Icon name={name as TypeIconName} key={name} size={28} />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    []
  )

  return <>{picker}</>
}

export default memo(IconPicker)
