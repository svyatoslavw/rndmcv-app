import { Label, Switch } from "@/shared/ui"

type PricingSwitchProps = {
  isYearly: boolean
  setIsYearly: React.Dispatch<React.SetStateAction<boolean>>
}

export const PricingSwitcher = ({ isYearly, setIsYearly }: PricingSwitchProps) => (
  <Label htmlFor="toggle" className="mb-8 flex items-center justify-center space-x-4">
    <span className={`text-sm ${!isYearly ? "font-bold" : ""}`}>Monthly</span>
    <Switch id="toggle" checked={isYearly} onCheckedChange={setIsYearly} />
    <span className={`text-sm ${isYearly ? "font-bold" : ""}`}>Yearly</span>
  </Label>
)
