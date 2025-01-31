import React from "react"

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-8 flex h-full flex-col gap-5 overflow-y-scroll rounded-lg">{children}</div>
  )
}

export { ContentWrapper }
