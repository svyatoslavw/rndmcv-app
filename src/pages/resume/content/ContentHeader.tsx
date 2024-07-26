import { Button } from "@/shared/ui"

const ContentHeader = () => {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between rounded-xl bg-white p-5 shadow-md">
      <h3 className="text-xl font-bold">Resume</h3>
      <Button>Download</Button>
    </div>
  )
}

export { ContentHeader }
