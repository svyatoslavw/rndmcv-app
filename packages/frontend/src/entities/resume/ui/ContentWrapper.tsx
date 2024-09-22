import React from "react"

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex h-[81vh] flex-col gap-5 overflow-y-scroll rounded-lg">{children}</div>
}

export { ContentWrapper }
