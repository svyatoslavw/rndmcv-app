import { PricingList } from "../../features/Pricing/PricingList"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui"

interface IPricingModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const PricingModal = ({ isOpen, setIsOpen }: IPricingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Pricing</DialogTitle>
        </DialogHeader>
        <div className="grid">
          <p className="mx-auto text-lg font-semibold text-neutral-700 shadow-black drop-shadow">
            {`To increase your space, you'll need to subscribe.`}
          </p>
          <PricingList hasBasic={false} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { PricingModal }
