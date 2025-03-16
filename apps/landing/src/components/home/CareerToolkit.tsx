import { Card, CardContent, CardHeader } from "@rndm/ui/components"
import {
  BarChart,
  BookCheck,
  Briefcase,
  ChartNoAxesCombined,
  Eye,
  FileText,
  Images
} from "lucide-react"

const CareerToolkit = () => {
  const learningResources = [
    { text: "ATS Optimization Guide", icon: FileText },
    { text: "Industry-Specific Templates", icon: Images },
    { text: "Salary Negotiation Handbook", icon: BookCheck }
  ] as const

  const analyticsMetrics = [
    { text: "Number of resume views", icon: Eye },
    { text: "Skill Gap Analysis", icon: ChartNoAxesCombined },
    { text: "Popular industries for work", icon: Briefcase }
  ] as const

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
            {learningResources.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-2">
                  <item.icon className="h-4 w-4" />
                </div>
                <span className="font-medium">{item.text}</span>
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
            {analyticsMetrics.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-2">
                  <item.icon className="h-4 w-4" />
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export { CareerToolkit }
