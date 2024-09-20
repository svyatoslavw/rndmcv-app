interface SettingsSectionProps {
  heading: string
  description: string
  children: React.ReactNode
}

const SettingsBlock = ({ children, description, heading }: SettingsSectionProps) => {
  return (
    <div className="w-[420px] space-y-4">
      <div>
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      {children}
    </div>
  )
}

export { SettingsBlock }
