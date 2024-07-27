import { DEFAULT_DATA } from "@/shared/lib"
import { useAppSelector } from "@/shared/lib/store"
import { format } from "date-fns"

const ResumeDocument = () => {
  const person = useAppSelector((state) => state.content.person)
  const education = useAppSelector((state) => state.content.education.items)

  return (
    <div className="overflow-y-auto overflow-x-hidden scroll-smooth pb-8 pt-8">
      <div className="h-[885px] w-[625px] rounded bg-white p-6 shadow-md">
        <h1 className="mb-2 text-3xl font-bold">{person.name}</h1>
        <p className="mb-1 text-lg">{person.email}</p>
        <p className="mb-4 text-lg">{person.phone}</p>
        <p className="mb-4 text-lg">{person.address}</p>
        <h2 className="mb-2 text-2xl font-semibold">{format(person.date, "PPP")}</h2>
        <p className="mb-4 text-lg">{DEFAULT_DATA.summary}</p>
        <h2 className="mb-2 text-2xl font-semibold">Experience</h2>
        {DEFAULT_DATA.experience.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold">{item.company}</h3>
            <p className="text-lg">
              {item.role} | {item.duration}
            </p>
            <p className="text-lg">{item.description}</p>
          </div>
        ))}
        <h2 className="mb-2 text-2xl font-semibold">Education</h2>
        {education.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold">{item.school}</h3>
            {item.startDate && item.endDate && (
              <p className="text-lg">
                {format(item.startDate, "PPP")} | {item.endDate}
              </p>
            )}
          </div>
        ))}
        <h2 className="mb-2 text-2xl font-semibold">Skills</h2>
        <ul className="list-inside list-disc">
          {DEFAULT_DATA.skills.map((skill, index) => (
            <li key={index} className="text-lg">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export { ResumeDocument }
