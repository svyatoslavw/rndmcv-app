import { getPercentNewUsers, getResumesMonth } from "@/shared/actions"
import { cn } from "@rndm/ui/lib/utils"
import { Download, FileText, TrendingUp, Users } from "lucide-react"

export default async function Dashboard() {
  const [users, resumes] = await Promise.all([getPercentNewUsers(), getResumesMonth()])

  if (!users || !resumes) return <div>Not found</div>

  return (
    <div className="w-full px-6 py-3">
      <h4 className="text-bold mb-4 text-2xl font-bold">Welcome back, Admin</h4>
      <div className="mb-8 flex h-fit w-full gap-6">
        {[
          {
            title: "Total Users",
            value: users.totalUsers,
            change: `+${users.percent}%`,
            icon: Users,
            color: "bg-rose-500"
          },
          {
            title: "Resumes Created",
            value: resumes,
            change: "+25.8%",
            icon: FileText,
            color: "bg-amber-500"
          },
          {
            title: "Downloads",
            value: "1,271",
            change: "+18.2%",
            icon: Download,
            color: "bg-red-500"
          },
          {
            title: "Conversion Rate",
            value: "15.3%",
            change: "+5.7%",
            icon: TrendingUp,
            color: "bg-orange-500"
          }
        ].map((stat, index) => (
          <div
            key={index}
            className="after:bg-primary relative h-full w-full rounded-xl border-2 bg-gray-50 px-6 py-4 after:absolute after:-right-1 after:top-1/4 after:z-10 after:block after:h-[50%] after:w-5 after:rounded after:content-['']"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className={cn("rounded-lg bg-gray-500 p-3")}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <span className="flex flex-col items-end text-xs">
                In the last 30 days <span className="font-bold text-green-500">{stat.change}</span>
              </span>
            </div>
            <h3 className="text-foreground/70 mb-1 text-sm">{stat.title}</h3>
            <p className="text-primary text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
