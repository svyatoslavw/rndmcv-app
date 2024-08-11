interface CustomizeWrapperProps {
  children: React.ReactNode
  heading: string
}

const CustomizeWrapper = ({ children, heading }: CustomizeWrapperProps) => {
  return (
    <div className="mt-5 flex flex-col gap-4 rounded-xl bg-white p-8">
      <h2 className="text-2xl font-bold">{heading}</h2>
      <div className="flex flex-col gap-8">{children}</div>
    </div>
  )
}

export { CustomizeWrapper }
