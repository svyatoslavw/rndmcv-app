import Image from "next/image"

interface IJobCompany {
  id: string
  name: string
  image: string
}

const job_companies: IJobCompany[] = [
  {
    id: "1",
    name: "Djinni",
    image: "/logos/djinni.png"
  },
  {
    id: "2",
    name: "RobotaUA",
    image: "/logos/robotaua.webp"
  },
  {
    id: "3",
    name: "WorkUA",
    image: "/logos/workua.png"
  },
  {
    id: "4",
    name: "Indeed",
    image: "/logos/indeed.svg"
  },
  {
    id: "5",
    name: "Glassdoor",
    image: "/logos/glassdoor.svg"
  },
  {
    id: "6",
    name: "Just Join It",
    image: "/logos/justjoinit.png"
  },
  {
    id: "7",
    name: "HeadHunter",
    image: "/logos/hh.svg"
  }
]

const JobsTicker = () => {
  return (
    <div className="relative mx-auto my-8 flex max-w-[60%] overflow-x-hidden md:my-12">
      <div className="flex animate-marquee whitespace-nowrap py-12">
        {job_companies.map((company) => (
          <div
            key={company.id}
            className="mx-4 flex h-12 items-center gap-1 rounded-lg p-2 text-sm font-semibold grayscale transition-all hover:grayscale-0 dark:bg-foreground"
          >
            <Image
              alt={company.name}
              src={company.image}
              width={128}
              height={64}
              className="h-fit rounded-lg object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-12">
        {job_companies.map((company) => (
          <div
            key={company.image}
            className="mx-4 flex h-12 items-center gap-1 rounded-lg p-2 text-sm font-semibold grayscale transition-all hover:grayscale-0 dark:bg-foreground"
          >
            <Image
              alt={company.name}
              src={company.image}
              width={128}
              height={64}
              className="h-fit rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export { JobsTicker }
