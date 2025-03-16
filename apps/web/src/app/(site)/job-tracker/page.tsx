import { PageDescription, PageHeader, PageTitle, PageWrapper } from "@/shared/ui"
import { Badge } from "@rndm/ui/components"

export default function JobTracker() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageTitle content="My Resumes">Job Tracker</PageTitle>
        <PageDescription>
          Track your job applications, interviews, and opportunities.
        </PageDescription>
        <div>
          <Badge>Coming soon...</Badge>
        </div>
      </PageHeader>
    </PageWrapper>
  )
}
