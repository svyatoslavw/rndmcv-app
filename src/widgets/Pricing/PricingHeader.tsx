import { PageDescription, PageHeader, PageTitle } from "@/shared/ui"

export const PricingHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <PageHeader className="mb-4">
    <PageTitle>{title}</PageTitle>
    <PageDescription>{subtitle}</PageDescription>
  </PageHeader>
)
