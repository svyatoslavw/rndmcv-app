import { Download, FileText, TrendingUp, Users } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="w-full px-6 py-3">
      <h4 className="text-bold mb-4 text-2xl font-bold">Welcome back, Admin</h4>
      <div className="mb-8 flex h-fit w-full gap-6">
        {[
          {
            title: "Total Users",
            value: "2,543",
            change: "+12.5%",
            icon: Users,
            color: "bg-blue-500"
          },
          {
            title: "Resumes Created",
            value: "4,129",
            change: "+25.8%",
            icon: FileText,
            color: "bg-green-500"
          },
          {
            title: "Downloads",
            value: "1,271",
            change: "+18.2%",
            icon: Download,
            color: "bg-purple-500"
          },
          {
            title: "Conversion Rate",
            value: "15.3%",
            change: "+5.7%",
            icon: TrendingUp,
            color: "bg-orange-500"
          }
        ].map((stat, index) => (
          <div key={index} className="h-full w-full rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className={`${stat.color} rounded-lg p-3`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-green-500">{stat.change}</span>
            </div>
            <h3 className="mb-1 text-sm text-gray-600">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
