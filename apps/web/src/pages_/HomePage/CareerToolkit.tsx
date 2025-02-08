import { Card, CardContent, CardHeader } from "@rndm/ui/components"
import { ArrowRight, BarChart, CheckCircle, FileText } from "lucide-react"

const CareerToolkit = () => {
  return (
    <section className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-primary/20">
          <CardHeader className="flex flex-row items-center gap-4 space-y-0">
            <FileText className="text-primary h-8 w-8" />
            <div>
              <h3 className="text-lg font-bold">Learning Resources</h3>
              <p className="text-muted-foreground text-sm">Master the art of resume writing</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              "ATS Optimization Guide",
              "Industry-Specific Templates",
              "Salary Negotiation Handbook"
            ].map((resource, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-2">
                  <ArrowRight className="h-4 w-4" />
                </div>
                <span className="font-medium">{resource}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader className="flex flex-row items-center gap-4 space-y-0">
            <BarChart className="text-primary h-8 w-8" />
            <div>
              <h3 className="text-lg font-bold">Analytics Dashboard</h3>
              <p className="text-muted-foreground text-sm">Track your resume performance</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              "Recruiter Engagement Metrics",
              "Application Success Rates",
              "Skill Gap Analysis"
            ].map((metric, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-2">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <span className="font-medium">{metric}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export { CareerToolkit }
