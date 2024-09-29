interface SettingsSectionProps {
  heading: string
  description: string
  children: React.ReactNode
}

const SettingsSection = ({ children, description, heading }: SettingsSectionProps) => {
  return (
    <div>
      <h3 className="text-base font-bold">{heading}</h3>
      <p className="mb-2 text-sm">{description}</p>
      {children}
    </div>
  )
}

export { SettingsSection }
