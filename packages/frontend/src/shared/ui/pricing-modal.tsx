import { PricingList } from "../../widgets/Pricing/PricingList"

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/shared/ui"

interface IPricingModalProps {
  description?: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const PricingModal = ({ description, isOpen, setIsOpen }: IPricingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Pricing</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2">
          <p className="mx-auto text-xl font-semibold text-neutral-700 shadow-black drop-shadow">
            {`To increase your space, you'll need to subscribe.`}
          </p>
          <PricingList hasBasic={false} />
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { PricingModal }
